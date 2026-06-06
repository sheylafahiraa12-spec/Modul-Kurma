import express, { Request, Response } from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

// Lazy-initialized Gemini Client
let aiClient: GoogleGenAI | null = null;

function getGeminiClient(): GoogleGenAI {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("GEMINI_API_KEY environment variable is required.");
    }
    aiClient = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

async function startServer() {
  const app = express();
  app.use(express.json());

  const PORT = 3000;

  // API endpoints
  app.post("/api/chat", async (req: Request, res: Response): Promise<void> => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: "Invalid request body: 'messages' array is required." });
        return;
      }

      const client = getGeminiClient();
      
      // We'll map messages into Gemini format or pass the conversation.
      // Let's form a clean prompt with system instructions about dates, chemistry, and theological aspects.
      const systemInstruction = `Anda adalah "Asisten AI E-Modul Kimia Kurma", seorang ahli pendidikan kimia SMA, pakar pangan kurma, dan cendekiawan Integrasi Islam-Sains. 
Tugas Anda adalah membantu siswa Kelas X SMA/MA mempelajari kimia berbasis Problem Based Learning (PBL) bertema "Kurma: Mukjizat Buah Surga — Integrasi Al-Qur'an dan Sains Modern".

Fokus Materi Anda meliputi:
1. Karbohidrat (gula pereduksi: glukosa, fruktosa) dan ujinya secara kimia (uji Benedict, uji Fehling dengan reaksi reduksi ion Cu2+).
2. Senyawa Fitokimia/Antioksidan (polifenol, flavonoid) dan peranannya menstabilkan radikal bebas.
3. Vitamin & Mineral (Kalium, Magnesium, Besi, dll.) serta serat pangan (pektin, selulosa).
4. Fermentasi kurma (reaksi pembentukan etanol/asam asetat dari gula).
5. Integrasi Teologis: Menjelaskan ayat-ayat Quran (seperti QS. Maryam: 25-26, QS. Al-An'am: 99, QS. Ar-Rad: 4, dll.) dan hadis secara seimbang tanpa memaksakan "cocoklogi", melainkan menunjukkan keselarasan hukum alam (Sunnatullah) dengan firman-Nya.

Gaya jawaban:
- Ramah, mendidik, menginspirasi, dan komunikatif untuk siswa kelas X SMA.
- Gunakan perumpamaan sederhana atau contoh kehidupan sehari-hari bila diperlukan.
- Selalu berikan penjelasan reaksi kimia terkait bila siswa bertanya tentang aspek kimia.
- Dukung siswa untuk menyelesaikan LKPD dan sintaks Problem Based Learning (PBL).
- Gunakan bahasa Indonesia yang baik, sopan, dan ilmiah.`;

      // Keep it simple and use generateContent with the mapped history.
      const formattedContents = messages.map((m: any) => ({
        role: m.role === "assistant" ? "model" : "user",
        parts: [{ text: m.content }],
      }));

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: formattedContents,
        config: {
          systemInstruction,
          temperature: 0.7,
        },
      });

      res.json({ reply: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({
        error: "Gagal berkomunikasi dengan Gemini API. Pastikan GEMINI_API_KEY telah diatur di tingkat sistem.",
        details: error.message,
      });
    }
  });

  // Health check
  app.get("/api/health", (req, res) => {
    res.json({ status: "healthy", timestamp: new Date().toISOString() });
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    console.log("Starting server in development mode with Vite middleware...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    console.log("Starting server in production mode...");
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
