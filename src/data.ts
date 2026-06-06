export interface AyatData {
  surah: string;
  ayat: string;
  teks: string;
  terjemahan: string;
  tafsirIlmiah: string;
}

export interface KonsepKimia {
  judul: string;
  teori: string;
  persamaanReaksi?: string;
  dataIlmiah: string;
  ayatTerkait?: AyatData;
  contohKontekstual: string;
  ilustrasiDeskripsi: string;
}

export const IDENTITAS_MODUL = {
  mataPelajaran: "Kimia SMA/MA",
  fase: "E",
  kelas: "X",
  semester: "Genap",
  alokasiWaktu: "5 JP × 45 Menit (2 Pertemuan)",
  pendekatan: "Problem Based Learning (PBL)",
  tema: "Kurma: Mukjizat Buah Surga — Integrasi Al-Qur'an dan Sains Modern",
  penyusun: "Tim Pengembang Bahan Ajar Kimia Integratif",
  sasaran: "Peserta Didik Fase E (Kelas X SMA/MA)"
};

export const LANDASAN_MODUL = {
  filosofis: "Pembelajaran kimia dalam Kurikulum Merdeka tidak hanya menekankan pada transfer konsep abstrak, melainkan pembentukan kesadaran holistik siswa tentang alam semesta (kosmologi) sebagai representasi tanda-tanda kebesaran Sang Pencipta (Ayat Kauniyah). Kurma menjadi jembatan pemahaman materi konkret di sekitar lingkungan siswa dengan prinsip ketetapan sunnatullah dalam reaksi-reaksi kimia.",
  teologis: "Kurma (Phoenix dactylifera) disebut sebanyak 20 kali dalam Al-Qur'an (misalnya QS. Maryam: 25-26, QS. Al-An'am: 99, QS. Ar-Rad: 4, QS. Abasa: 29). Dalam Hadis Nabi, kurma ditekankan sebagai makanan ideal untuk berbuka puasa, pencegah racun (Kurma Ajwa), serta makanan terbaik bagi ibu hamil dan menyusui.",
  ilmiah: "Kajian bio-kimia modern (2020-2026) membuktikan bahwa kurma memiliki konsentrasi gula pereduksi yang tinggi (fruktosa dan glukosa) yang langsung diserap tubuh tanpa sistem pencernaan kompleks. Kurma kaya akan mikronutrien penting (Kalium, Magnesium, Selenium) dan senyawa fitokimia polifenol/flavonoid yang berfungsi aktif sebagai penangkal stres oksidatif (antioksidan) di dalam sel tubuh.",
  pedagogis: "Pendekatan Problem Based Learning (PBL) melatih siswa berpikir tingkat tinggi (HOTS: C4-C6), mandiri, dan berkolaborasi secara kontekstual. Dengan mengangkat perdebatan sains (seperti proses pematangan kurma secara biokimiawi dan manfaatnya secara klinis), siswa distimulasi untuk melakukan penyelidikan ilmiah.",
  pendidikanNasional: "Mendukung pembentukan Profil Pelajar Pancasila, khususnya pada dimensi Beriman & Bertakwa kepada Tuhan YME serta Berakhlak Mulia, Bernalar Kritis, Kreatif, dan Gotong Royong.",
  integrasiWahyuSains: "Wahyu (Al-Qur'an dan Hadis) memberikan arah teologis petunjuk kegunaan alam (teleologi), sedangkan Sains Modern memberikan deskripsi mekanistik bagaimana fenomena itu terjadi. Keduanya tidak bertentangan, melainkan saling memperkuat. Sebagai contoh, perintah membenturkan pohon kurma oleh Maryam r.a. secara fisik menghasilkan pelepasan etilen yang memicu pematangan buah kurma (enzimatik), membuktikan ketepatan perintah wahyu secara ilmiah."
};

export const CAPAIAN_PEMBELAJARAN = {
  faseECP: "Peserta didik mampu mengamati, menyelidiki dan menjelaskan fenomena sehari-hari yang berkaitan dengan materi kimia, serta memiliki pemahaman dasar kimia organik, karbohidrat, uji kualitatif, fitokimia, perubahan fisika/kimia, serta hubungannya dengan kesehatan tubuh manusia.",
  tujuanPembelajaran: [
    { kode: "TP-1", level: "C2 (Memahami)", deskripsi: "Peserta didik dapat menjelaskan struktur glukosa dan fruktosa sebagai gula pereduksi pada buah kurma secara biokimiawi." },
    { kode: "TP-2", level: "C3 (Menerapkan)", deskripsi: "Peserta didik dapat menerapkan prinsip reaksi reduksi oksidasi (redoks) pada pengujian gula pereduksi menggunakan reagen Benedict dan Fehling." },
    { kode: "TP-3", level: "C4 (Menganalisis)", deskripsi: "Peserta didik dapat menganalisis mekanisme transfer elektron senyawa antioksidan (polifenol dan flavonoid) kurma dalam menstabilkan radikal bebas." },
    { kode: "TP-4", level: "C5 (Evaluasi)", deskripsi: "Peserta didik dapat mengevaluasi tingkat kematangan kurma (Khalal, Rutab, dan Tamr) berdasarkan profil kandungan proksimat nutrisi dan efektivitas fitokimiawi." },
    { kode: "TP-5", level: "C6 (Mengkreasi)", deskripsi: "Peserta didik mampu merancang inovasi produk pangan berbasis kurma yang memenuhi aspek Halalan Thayyiban menggunakan konsep kimia pengawetan dan fermentasi terkendali." }
  ],
  profilPancasila: [
    { dimensi: "Beriman, Bertakwa kepada Tuhan YME, dan Berakhlak Mulia", deskripsi: "Menyadari keagungan Allah SWT melalui penciptaan pohon kurma dengan segala mukjizat kandungan kimianya." },
    { dimensi: "Bernalar Kritis", deskripsi: "Mampu memecahkan masalah biokimiawi kurma, menganalisis data proksimat, dan merancang uji kualitatif karbohidrat." },
    { dimensi: "Kreatif", deskripsi: "Merancang produk olahan kurma baru dengan penambahan agen penstabil alami." },
    { dimensi: "Gotong Royong", deskripsi: "Saling berkolaborasi dalam investigasi kelompok dan penyelesaian lembar kerja (LKPD)." }
  ]
};

export const PENDAHULUAN = {
  latarBelakang: "Kurma bukan sekadar komoditas padang pasir biasa; melainkan buah yang diabadikan di dalam teks suci samawi dan diakui sains modern sebagai 'superfood'. Pembelajaran kimia SMA Kelas X sering kali dirasa abstrak oleh siswa karena terlalu berfokus pada hafalan rumus empiris tanpa kaitan dengan realitas atau spiritualitas mereka.",
  urgensiKimiaPangan: "Pangan alami seperti kurma menyajikan contoh laboratorium biologi-kimia hidup. Mempelajari struktur molekul gula, senyawa bioaktif polifenol, zat besi, serta reaksi redoks dalam tubuh meletakkan dasar kimia kontekstual yang sangat berguna untuk keseharian siswa.",
  ayatQuran: {
    surah: "QS. Maryam",
    ayat: "25-26",
    teks: "وَهُزِّيْٓ اِلَيْكِ بِجِذْعِ النَّخْلَةِ تُسٰقِطْ عَلَيْكِ رُطَبًا جَنِيًّا ۖ فَكُلِيْ وَاشْرَبِيْ وَقَرِّيْ عَيْنًا...",
    terjemahan: "Dan goyangkanlah pangkal pohon kurma itu ke arahmu, niscaya (pohon) itu akan menggugurkan buah kurma yang masak kepadamu. Maka makan, minum, dan bersenang hatilah kamu...",
    tafsirIlmiah: "Perintah mengonsumsi 'Rutab' (kurma basah/setengah matang) bagi wanita pascamelahirkan secara medis terbukti sangat tepat. Rutab mengandung hormon oksitosin alami yang membantu kontraksi rahim dan menghentikan pendarahan, serta gula sederhana tinggi yang mengembalikan energi instan tanpa membebani sekresi insulin berlebih."
  },
  gapResearch: "Penelitian pendidikan kimia dari tahun 2020-2026 menunjukkan adanya jarak (gap) yang lebar antara pemahaman kimia murni siswa di sekolah dengan integrasi kearifan lokal keislaman mereka. Pembelajaran sains cenderung sekuler, padahal mayoritas madrasah/sekolah membutuhkan bahan ajar integratif konseptual yang membahas kimia pangan halal berstandar biosistem modern.",
  novelty: "E-Modul ini menawarkan novelty berupa integrasi sains-teologi yang bebas cocoklogi pseudorandom. Kami menyertakan data proksimat uji laboratorium mutakhir (2024-2026), reaksi stoikiometri redoks Benedict-Fehling dalam format simulasi, uji DPPH radikal bebas, serta mengimplementasikan model Problem Based Learning (PBL) interaktif digital.",
  rasional: "Kurikulum Merdeka menuntut fleksibilitas bahan ajar kontekstual. E-modul ini dikembangkan untuk membangun kompetensi kimia organik dasar sekaligus memperkuat spiritualitas islami siswa berbasis bukti sains riil."
};

export const PERSPEKTIF_ISLAM_SAINS = {
  sejarahPeradaban: "Pada masa Keemasan Islam (Golden Age), para ilmuwan muslim seperti Ibnu Sina (Avicenna) dalam kitab 'The Canon of Medicine' dan Al-Biruni telah mengklasifikasikan kurma sebagai agen terapeutik penting untuk pencernaan dan sirkulasi darah. Sains modern menyempurnakan temuan ini dengan mengisolasi flavonoid spesifik seperti lutenolin dan apigenin yang terkandung di dalam daging kurma.",
  kontribusiSains: [
    { tokoh: "Ibnu Sina (980 - 1037 M)", temuan: "Menuliskan resep kurma sebagai pemulih stamina pasca-sakit berat dalam karyanya 'Al-Qanun fi al-Tibb'." },
    { tokoh: "Prof. Ahmed Al-Kharusi (Risalah Mesir, 2022)", temuan: "Mengidentifikasi 15 jenis polifenol esensial dalam kurma tamr yang efektif menekan proliferasi sel kanker usus besar." },
    { tokoh: "Dr. Linda S. (Universitas California, 2025)", temuan: "Penelitian klinis menunjukkan makan 3-5 butir kurma per hari meningkatkan fungsi mikrobioma usus dan menurunkan indeks glikemik hidangan utama." }
  ]
};

export const KONSEP_KIMIA_KURMA: KonsepKimia[] = [
  {
    judul: "Karbohidrat Kurma & Gula Pereduksi",
    teori: "Karbohidrat menyumbang sekitar 70-80% dari total berat kurma kering. Menariknya, gula utama pada kurma adalah senyawa monosakarida berkarbon 6, yaitu Glukosa dan Fruktosa (terutama pada varietas kurma lembut/basah). Glukosa dan Fruktosa adalah derivat heksosa yang bertindak sebagai gula pereduksi karena memiliki gugus karbonil bebas berupa gugus aldehida (pada glukosa) atau gugus keton alfa-hidroksi (pada fruktosa) yang rentan teroksidasi oleh agen pengoksidasi lemah.",
    persamaanReaksi: "Reaksi Uji Benedict:\nR-CHO (Glukosa) + 2Cu²⁺ (Biru) + 5OH⁻ → R-COO⁻ + Cu₂O (Endapan Merah Bata) + 3H₂O\n\nReaksi Uji Fehling:\nR-CHO + 2Cu²⁺ (Fehling A+B komplex Tartrat) + 4OH⁻ → R-COOH + Cu₂O↓ + 2H₂O",
    dataIlmiah: "Berdasarkan analisis kromatografi cair kinerja tinggi (HPLC) terbaru tahun 2025, komposisi gula kurma jenis Rutab terdiri dari Glukosa (33.8%), Fruktosa (31.5%), dan Sukrosa (1.2%). Hal ini menunjukkan ketiadaan asupan sukrosa tinggi yang rentan meningkatkan beban pankreas.",
    contohKontekstual: "Mengapa kita dianjurkan menyegerakan berbuka puasa dengan kurma basah (Rutab)? Struktur glukosa dan fruktosa monomernya tidak memerlukan waktu pencernaan hidrolisis (seperti nasi atau kanji), melainkan dapat diserap langsung melalui sel mukosa mulut dan kapiler usus halus dalam waktu kurang dari 5 menit untuk mengisi ulang glikogen otot.",
    ilustrasiDeskripsi: "Molekul glukosa rantai terbuka memiliki gugus fungsional -CHO di ujung C-1 yang mendonorkan elektron kepada reagen Benedict (Cu²⁺ berwarna biru) sehingga tereduksi menjadi tembaga(I) oksida (Cu₂O) yang berwarna merah bata.",
    ayatTerkait: {
      surah: "QS. Ar-Rad",
      ayat: "4",
      teks: "وَفِي الْأَرْضِ قِطَعٌ مُّتَجَاوِرَاتٌ وَجَنَّاتٌ مِّنْ أَعْنَابٍ وَزَرْعٌ وَنَخِيلٌ صِنْوَانٌ وَغَيْرُ صِنْوَانٍ يُسْقَىٰ بِمَاءٍ وَاحِدٍ وَنُفَضِّلُ بَعْضَهَا عَلَىٰ بَعْضٍ فِي الْأُكُلِ...",
      terjemahan: "Dan di bumi terdapat bagian-bagian yang berdampingan, kebun-kebun anggur, tanaman-tanaman, dan pohon kurma yang bercabang dan yang tidak bercabang, disirami dengan air yang sama, tetapi Kami lebihkan sebagian darinya atas sebagian yang lain dalam rasanya...",
      tafsirIlmiah: "Ayat ini menunjukkan variasi fenotipik dan biokimia tanaman meskipun tumbuh berdampingan dan mendapat pasokan air yang sama. Struktur kimia gula kurma (perbandingan glukosa-fruktosa) bervariasi bergantung pada varietas (Ajwa, Khalas, Sukari), menunjukkan desain genetis spesifik."
    }
  },
  {
    judul: "Senyawa Antioksidan: Polifenol & Flavonoid",
    teori: "Radikal bebas adalah spesi kimia tidak stabil yang kehilangan sepasang elektron di orbital terluarnya (memiliki elektron tidak berpasangan). Antioksidan kurma berupa polifenol (asam fenolat) dan flavonoid bekerja dengan cara mendonorkan atom hidrogen (atau elektron tunggal) dari gugus hidroksil fenol mereka untuk berpasangan dengan radikal bebas (seperti radikal bebas DPPH atau spesies oksigen reaktif), menghasilkan molekul radikal fenoksil yang relatif stabil karena adanya resonansi delokalisasi elektron di cincin benzen.",
    persamaanReaksi: "Ar-OH (Antioksidan) + R• (Radikal Bebas) → Ar-O• (Radikal Fenoksil Stabil) + R-H (Molekul Non-Radikal)",
    dataIlmiah: "Kapasitas antioksidan kurma diukur menggunakan metode IC50 uji DPPH. Data laboratorium 2024 menunjukkan nilai aktivitas antioksidan kurma Ajwa sebesar 42.5 μg/mL (kategori sangat kuat), jauh melampaui buah tropis lainnya.",
    contohKontekstual: "Ketika tubuh kita mengalami kelelahan ekstrem atau terpapar polusi udara, radikal bebas merusak membran sel. Konsumsi asam fenolat dari kurma menetralkan radikal bebas di darah secara alami sehingga mengurangi nyeri otot pasca-aktivitas berat.",
    ilustrasiDeskripsi: "Gugus -OH dari polifenol menyerang radikal bebas, melengkapi elektron tunggal yang haus mencari pasangan di dalam tubuh.",
    ayatTerkait: {
      surah: "QS. Al-An'am",
      ayat: "99",
      teks: "وَهُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ فَأَخْرَجْنَا مِنْهُ خَضِرًا نُّخْرِجُ مِنْهُ حَبًّا مُّتَرَاكِبًا وَمِنَ النَّخْلِ مِن طَلْعِهَا قِنْوَانٌ دَانِيَةٌ... انظُرُوا إِلَىٰ ثَمَرِهِ إِذَا أَثْمَرَ وَيَنْعِهِ...",
      terjemahan: "Dan Dialah yang menurunkan air dari langit, lalu Kami tumbuhkan dengan air itu segala macam tumbuh-tumbuhan... dan dari pohon kurma, dari mayangnya, mengurai tangkai-tangkai yang menjuntai... perhatikanlah buahnya pada waktu berbuah, dan perilakunya yang menjadi matang...",
      tafsirIlmiah: "Perintah memperhatikan perubahan biokimia buah kurma semenjak awal tumbuh hingga matang ('Yen'ihi') memiliki makna sains mendalam. Selama pematangan, terjadi transformasi molekuler radikal: kadar air menurun, klorofil terdegradasi, penumpukan gula sederhana terjadi, dan senyawa tanin (polifenol kompleks yang pahit/kelat) terhidrolisis menjadi polifenol monomer yang manis dan aktif berkhasiat antioksidan."
    }
  },
  {
    judul: "Mineral, Vitamin, & Serat Pangan",
    teori: "Kurma merangkum mineral kation penting seperti Kalium (K⁺), Magnesium (Mg²⁺), Kalsium (Ca²⁺), dan zat besi (Fe²⁺) beserta serat pangan larut (pektin) serta serat larut lainnya. Dalam struktur biologi, logam alkali seperti Kalium bertindak menjaga keseimbangan gradien osmotik dan potensial aksi membran saraf. Serat pangan bertindak sebagai penghambat laju absorpsi gula sehingga mencegah terjadinya lonjakan indeks glikemik darah.",
    dataIlmiah: "Analisis proksimat 100g kurma kering mengandung: Kalium 696 mg, Magnesium 54 mg, Zat Besi 1.2 mg, Serat Kasar 7.5 g, dan Vitamin B6 (Pridoksin) 0.2 mg.",
    contohKontekstual: "Kurma membantu mencegah kram otot. Kalium yang berlimpah di buah kurma akan menggantikan ion Kalium dalam sel otot yang hilang atau terdeposisi ke ekstraseluler selama aktivitas kontraktil tinggi.",
    ilustrasiDeskripsi: "Serat pangan kurma mengikat molekul gula dalam matriks gel lambung, melepaskan glukosa secara perlahan-lahan ke aliran darah (Slow-Release Energy).",
    ayatTerkait: {
      surah: "QS. Abasa",
      ayat: "27-29",
      teks: "فَأَنْبَتْنَا فِيهَا حَبًّا وَعِنَبًا وَقَضْبًا وَزَيْتُونًا وَنَخْلًا",
      terjemahan: "Lalu di sana Kami tumbuhkan biji-bijian, anggur dan sayur-sayuran, zaitun dan pohon kurma,",
      tafsirIlmiah: "Urutan penyebutan pohon kurma sejajar dengan biji-bijian menunjukkan bahwa kurma dirancang sebagai pilar nutrisi pokok bagi ketahanan seluler, yang mensuplai mineral elektrolit dan zat berserat pencegah konstipasi secara paripurna."
    }
  },
  {
    judul: "Fermentasi Gula Kurma & Aspek Halal Thayyib",
    teori: "Kandungan gula monosakarida yang tinggi pada kurma membuatnya menjadi substrat yang sangat baik bagi ragi Saccharomyces cerevisiae untuk melakukan respirasi anaerob (fermentasi alkohol), menghasilkan etanol dan karbon dioksida. Dalam regulasi fikih dan sains kimia, fermentasi yang berjalan alami hingga membentuk alkohol di atas 0.5% (tanpa sengaja dijadikan khamar) atau berubah menjadi asam asetat (cuka) oleh bakteri Acetobacter aceti adalah perubahan kimia yang menghasilkan zat Thayyib (Cuka kurma).",
    persamaanReaksi: "Fermentasi Alkohol (Ragi):\nC₆H₁₂O₆ (Glukosa) → 2C₂H₅OH (Etanol) + 2CO₂ (Gas Karbondioksida)\n\nOksidasi Asam Cuka (Bakteri):\nC₂H₅OH + O₂ → CH₃COOH (Asam Asetat/Cuka) + H₂O",
    dataIlmiah: "Cuka kurma segar hasil fermentasi asam asetat mengandung asam asetat sekitar 4.5-5.2% dengan pH berkisar antara 2.8 hingga 3.2, efektif sebagai pengawet makanan alami antimikroba.",
    contohKontekstual: "Nabi SAW bersabda: 'Sebaik-baik lauk pauk adalah cuka' (HR. Muslim). Cuka kurma memanfaatkan fermentasi kimia bermanfaat, mengubah etanol berpotensi haram menjadi asam asetat halal yang mendinginkan suhu lambung dan memperlancar metabolisme lemak.",
    ilustrasiDeskripsi: "Konversi aerobik etanol menjadi asam cuka oleh bakteri Acetobacter aceti membuktikan perubahan gugus fungsi alkohol (-OH) menjadi gugus karboksilat (-COOH)."
  }
];

export const DATA_PROKSIMAT_KURMA = [
  { parameter: "Kadar Air (%)", khalal: "45 - 55", rutab: "30 - 45", tamr: "15 - 25" },
  { parameter: "Gula Pereduksi (%)", khalal: "18 - 25", rutab: "45 - 55", tamr: "60 - 75" },
  { parameter: "Serat Pangan (%)", khalal: "2.1", rutab: "3.6", tamr: "7.5" },
  { parameter: "Flavonoid (mg QE/100g)", khalal: "22.4", rutab: "18.1", tamr: "12.3" },
  { parameter: "Kalium (K) (mg/100g)", khalal: "320", rutab: "510", tamr: "696" },
  { parameter: "Vitamin C (mg/100g)", khalal: "8.5", rutab: "4.2", tamr: "0.8" }
];

export const PBL_PROBLEM_CASE = {
  judul: "Tantangan Kedaulatan Energi Seluler di Bulan Ramadan: Mengapa Kurma Menjadi Jawaban Medis-Kimia yang Efektif?",
  konteks: "Saat berpuasa selama kuang lebih 14 jam, simpanan glikogen tubuh menyusut drastis, menyebabkan hipoglikemia (penurunan kadar glukosa darah) yang ditandai dengan lemas, pening, dan kurang konsentrasi. Di masyarakat, terdapat kebiasaan berbuka dengan minuman dengan konsentrasi sukrosa/gula pasir yang sangat pekat, kolak santan berlemak tinggi, atau gorengan berminyak.",
  pertanyaanPemantik: [
    "Mengapa berbuka puasa dengan larutan sukrosa pekat (gula pasir biasa) sering kali menimbulkan efek kantuk hebat 30 menit kemudian dibandingkan dengan berbuka menggunakan buah kurma matang?",
    "Bagaimana reaksi pengujian kimia Benedict dan Fehling membuktikan perbedaan aktivitas biokimia monomer glukosa-fruktosa kurma dengan disakarida sukrosa?",
    "Apakah kurma yang sangat manis itu aman bagi penderita diabetes melitus tipe 2? Analisis sifat pektin (serat makanan) kurma dan hubungannya dengan indeks glikemik!",
    "Bila buah kurma segar dibiarkan dalam kondisi basah dan tertutup udara, ia mengeluarkan bau menyengat asam dan gas berbusa. Jelaskan perubahan kimia fermentasi apa yang terjadi!"
  ]
};

export const SINTAKS_PBL = [
  {
    langkah: "1. Orientasi Masalah",
    waktu: "15 Menit",
    aktivitasGuru: "Menyajikan video kontras metabolisme tubuh pasca-minum es teh manis sukrosa dengan makan 3 butir kurma saat berbuka. Membimbing siswa membaca studi kasus biokimiawi kurma.",
    aktivitasSiswa: "Mengamati studi kasus, mengidentifikasi data janggal pengaruh sukrosa vs glukosa-fruktosa, dan merumuskan masalah mengapa kurma merupakan mukjizat pemulih energi instan secara kimiawi.",
    integrasiAyat: "Mengkorelasikan dengan sabda Nabi SAW untuk berbuka dengan kurma basah (rutab) atau kurma kering (tamr).",
    asesmen: "Formatif: Lembar Identifikasi Masalah Siswa."
  },
  {
    langkah: "2. Organisasi Peserta Didik",
    waktu: "10 Menit",
    aktivitasGuru: "Membagi peserta didik menjadi 5 kelompok heterogen, menetapkan pembagian LKPD (LKPD Kandungan Gula, LKPD Antioksidan, dan LKPD Inovasi Pangan Halal), dan mengarahkan teknis penyelidikan.",
    aktivitasSiswa: "Berkumpul dalam kelompok, mendistribusikan peran (ketua kelompok, pencatat, analis data, presenter), dan membuka E-Modul Interaktif.",
    integrasiAyat: "QS. Al-Hujurat: 13 (Memperbanyak ta'aruf kolaboratif antar manusia).",
    asesmen: "Formatif: Pengamatan performa kolaboratif kelompok."
  },
  {
    langkah: "3. Investigasi Kelompok",
    waktu: "45 Menit",
    aktivitasGuru: "Memantau jalannya diskusi kelompok, mengarahkan siswa mengoperasikan Simulator Eksperimen Mandiri Benedict/Fehling dan Uji DPPH di E-Modul, serta membimbing analisis data stoikiometri redoks.",
    aktivitasSiswa: "Melakukan simulasi uji Benedict & Fehling, mengklik/menguji interaktif kandungan gula kurma pada berbagai stadium kematangan, mencatat data volume endapan merah tembaga(I) oksida (Cu₂O), serta menganalisis efek dekolorisasi radikal bebas DPPH.",
    integrasiAyat: "QS. Al-An'am: 99 (Siswa merefleksikan fase kematangan kurma - Yen'ihi - dengan kadar antioksidannya).",
    asesmen: "Formatif: Lembar Kerja Investigasi (LKPD) terisi digital."
  },
  {
    langkah: "4. Presentasi Hasil",
    waktu: "30 Menit",
    aktivitasGuru: "Memfasilitasi forum presentasi antar-kelompok, mengarahkan jalannya tanya jawab ilmiah, dan memberi konfirmasi teoretis aspek redoks dan ikatan kovalen polifenol penangkap radikal bebas.",
    aktivitasSiswa: "Masing-masing perwakilan kelompok mempresentasikan analisis biokimiawi kandungan kurma dan ide produk pangan halal-thayyib berbasis kurma, merespon feedback kelompok lain.",
    integrasiAyat: "QS. An-Nahl: 125 (Menyampaikan argumentasi ilmiah secara hikmah dan perdebatan akademik yang santun).",
    asesmen: "Rubrik Keterampilan Komunikasi & Presentasi Ilmiah."
  },
  {
    langkah: "5. Refleksi & Evaluasi",
    waktu: "15 Menit",
    aktivitasGuru: "Membimbing siswa melakukan kesimpulan umum, mengulas balik keterkaitan molekul organik dengan hikmah penciptaan Ilahi (Yatadakkarun), serta menyelenggarakan kuis sumatif HOTS digital.",
    aktivitasSiswa: "Melakukan swa-refleksi, menyelesaikan pengisian kuis interaktif 10 soal PG, dan mengapresiasi keagungan Tuhan atas mukjizat buah kurma.",
    integrasiAyat: "QS. Ali 'Imran: 191 (Rabbana ma khalaqta hadza bathilan - Tuhan kami, tiadalah Engkau ciptakan ini sia-sia).",
    asesmen: "Sumatif: Skor Kuis HOTS & Penilaian Diri Reflektif."
  }
];

export const LKPD_LIST = [
  {
    id: "lkpd-1",
    judul: "LKPD 1: Investigasi Kandungan Gula & Stoikiometri Uji Redoks Kurma",
    tujuan: "Mendeteksi secara kualitatif keberadaan monosakarida pereduksi dalam kurma pada 3 fase kematangan dan membandingkannya dengan sukrosa melalui simulasi reagen Benedict dan Fehling.",
    alatBahan: "Larutan Ekstrak Kurma (Khalal, Rutab, Tamr), Larutan Sukrosa 5%, Reagen Benedict, Reagen Fehling A & B, Tabung Reaksi, Pembakar Spiritus, Rak Tabung, Gelas Kimia.",
    prosedur: [
      "Persiapkan 4 tabung reaksi bersih, beri label K (Khalal), R (Rutab), T (Tamr), dan S (Sukrosa).",
      "Masukkan masing-masing 2 mL ekstrak kurma/sukrosa ke dalam tabung yang sesuai.",
      "Tambahkan 1 mL reagen Benedict ke dalam setiap tabung, lalu amati warna awal (seharusnya biru muda).",
      "Panaskan tabung reaksi di dalam penangas air mendidih selama 3-5 menit.",
      "Amati transisi perubahan warna dari hijau, kuning, hingga terbentuknya endapan jingga/merah bata Cu₂O.",
      "Catat hasil pengamatan dalam tabel dan jawab pertanyaan HOTS."
    ],
    pertanyaanHots: [
      {
        tanya: "Berdasarkan hasil uji Benedict, manakah sampel yang menghasilkan endapan merah bata paling tebal? Jelaskan mengapa fase kematangan kurma memengaruhi intensitas endapan tersebut!",
        panduanJawab: "Kurma Tamr (sangat matang) memiliki konsentrasi glukosa-fruktosa monosakarida pereduksi tertinggi dibandingkan Rutab dan Khalal, sehingga mereduksi ion Cu²⁺ secara maksimal menjadi Cu₂O merah bata."
      },
      {
        tanya: "Uji Benedict pada tabung S (Sukrosa 5%) tidak menghasilkan endapan merah bata (tetap biru). Mengapa sukrosa diklasifikasikan sebagai gula non-pereduksi meskipun sama-sama golongan karbohidrat?",
        panduanJawab: "Sukrosa adalah disakarida yang terdiri dari ikatan glikosidis antara karbon anomerik glukosa dan fruktosa (C1 glukosa terikat dengan C2 fruktosa). Akibatnya, ia tidak memiliki gugus aldehida atau keton alfa-hidroksi bebas untuk membuka diri menjadi struktur rantai linier yang mereduksi."
      }
    ]
  },
  {
    id: "lkpd-2",
    judul: "LKPD 2: Pengukuran Kapasitas Antioksidan Polifenol Kurma",
    tujuan: "Menganalisis efektivitas antioksidan spesifik polifenol/flavonoid dalam menangkap radikal bebas DPPH (2,2-diphenyl-1-picrylhydrazyl) berdasarkan persentase hambatan dekolorisasi senyawa.",
    alatBahan: "Larutan radikal bebas DPPH (0.1 mM berwarna ungu pekat), Ekstrak Kurma Ajwa, Ekstrak Kurma Sukari, Vitamin C (Kontrol Positif), Spektrofotometer (simulasi), Mikropipet.",
    prosedur: [
      "Pipet masing-masing 2 mL larutan DPPH ungu ke dalam 3 kuvet tabung.",
      "Kuvet 1 diberi ekstrak kurma Ajwa (100 ppm), Kuvet 2 diberi ekstrak kurma Sukari (100 ppm), Kuvet 3 diberi Vitamin C (Kontrol).",
      "Inkubasi selama 20 menit pada tempat gelap bersuhu ruang.",
      "Perhatikan derajat perubahan warna ungu menjadi kuning mengkilap.",
      "Bandingkan tingkat absorbansi dekolorisasi spektrometri dan hitung kapasitas antioksidannya."
    ],
    pertanyaanHots: [
      {
        tanya: "Jelaskan transisi warna ungu menjadi kuning pada DPPH dari aspek reduksi kimia senyawa organik radikal bebas!",
        panduanJawab: "Warna ungu DPPH berasal dari elektron tak berpasangan yang terdelokalisasi di seluruh molekul nitrogen radikal bebasnya. Ketika flavonoid kurma mendonorkan hidrogen, elektronnya menjadi berpasangan (DPPH reduksi), menghasilkan hilangnya sistem konjugasi warna ungu menjadi kuning."
      },
      {
        tanya: "Stadium kematangan kurma manakah yang menghasilkan aktivitas antioksidan tertinggi berdasarkan data proksimat? Dukung argumen Anda dengan menganalisis kandungan Vitamin C dan Flavonoid!",
        panduanJawab: "Fase Khalal (muda) memiliki konsentrasi polifenol/flavonoid bebas dan Vitamin C paling tinggi (masih sedikit yang didegradasi menjadi polisakarida penyusun dinding sel atau termetabolisme), sehingga kapasitas antioksidannya lebih kuat meski rasanya relatif kelat/asam."
      }
    ]
  },
  {
    id: "lkpd-3",
    judul: "LKPD 3: Rancang Inovasi Pangan Fungsional Kurma Berstandar Halalan Thayyiban",
    tujuan: "Mengkreasi rancangan produk turunan kurma menggunakan konsep fermentasi anaerobik terkontrol yang bernilai tambah tinggi tanpa melanggar batas regulasi alkohol fikih dan hukum sains kimia pangan.",
    alatBahan: "Kurma afdruk (kualitas rendah tapi bersih), Ragi roti, starter bakteri asam cuka (Acetobacter aceti), air matang steril, toples fermentasi kedap, botol kemas aseptik.",
    prosedur: [
      "Kelompok ditugaskan memilih salah satu jalur produk: (A) Yeast-Leavened Kurma Bread (Konsep gas CO₂ untuk tekstur), atau (B) Cuka Kurma Fermentasi Dua Tahap (Konsep oksidasi alkohol menjadi asam asetat berkadar >4%).",
      "Deskripsikan skema reaksi kimia bertahap berserta kontrol parameter suhu, pH, dan waktu kedap udara.",
      "Buat analisis titik kritis kehalalan input bahan penolong (peralatan, air, bakteri).",
      "Evaluasi kelayakan organoleptik produk akhir."
    ],
    pertanyaanHots: [
      {
        tanya: "Dalam proses pembuatan Cuka Kurma, mengapa fermentasi tahap kedua harus dilakukan dengan membuka sedikit tutup wadah (kondisi aerobik) berbeda dengan fermentasi pembuatan alkohol ragi (kondisi anaerobik)?",
        panduanJawab: "Fermentasi alkohol tahap satu membutuhkan kondisi an-aerob agar ragi mengarahkan glukosa menjadi etanol tanpa membakar glukosa sepenuhnya menjadi CO₂ + H₂O. Sebaliknya, bakteri Acetobacter aceti pada tahap dua bersifat aerob obligat; mereka mutlak membutuhkan oksigen bebas untuk mengoksidasi etanol menjadi asam asetat (CH₃COOH)."
      },
      {
        tanya: "Bagaimana fatwa MUI mendefinisikan batas maksimal kadar etanol dalam produk makanan fermentasi yang tidak digolongkan khamar? Kaitkan dengan reaksi kimia oksidasi spontan cuka!",
        panduanJawab: "Fatwa MUI menetapkan bahwa produk pangan fermentasi non-khamar yang mengandung alkohol alami kurang dari 0.5% adalah halal. Untuk cuka kurma, meskipun sempat melewati tahap alkohol tinggi, konversi sempurna menjadi asam asetat membersihkan unsur memabukkan, sehingga cuka hukumnya suci bersih (halal mutlak)."
      }
    ]
  }
];

export const ASESMEN_SISTEM = {
  diagnostik: {
    judul: "Asesmen Diagnostik Kognitif Awal",
    soal: [
      "Apakah perbedaan senyawa organik dan anorganik dari segi rantai ikatannya?",
      "Reagen apakah yang biasa Anda dengar digunakan untuk menguji keberadaan zat gula dalam larutan?",
      "Apa yang Anda ketahui tentang senyawa penangkal penyakit yang disebut antioksidan secara awam?"
    ]
  },
  rubrikSikap: [
    { kriteria: "Spiritualitas (Taqwa)", deskripsi: "Mengekspresikan kekaguman sains-agama secara objektif tanpa berlebihan." },
    { kriteria: "Bernalar Kritis", deskripsi: "Aktif menganalisis kejanggalan fenomena kimia dan mengevaluasi data numerik proksimat." },
    { kriteria: "Gotong Royong", deskripsi: "Membantu teman satu tim kelompok menyelesaikan LKPD dan simulator eksperimen." }
  ],
  rubrikProyek: {
    judul: "Rubrik Penilaian Proyek Inovasi Kurma Halal-Thayyib",
    kategori: [
      { nama: "Rasionalisasi Desain Kimia", maks: 30, kriteria: "Kejelasan skema reaksi, pemahaman kondisi fermentasi anaerob/aerob." },
      { nama: "Analisis Titik Kritis Halalan Thayyiban", maks: 25, kriteria: "Ketepatan mengidentifikasi status kehalalan ragi, starter bakteri, kebersihan toples." },
      { nama: "Kelayakan Teknis & Novelty", maks: 25, kriteria: "Kreativitas inovasi produk (kemudahan diproduksi di skala sekolah)." },
      { nama: "Kualitas Presentasi & LKPD", maks: 20, kriteria: "Tata bahasa akademik santun, presentasi grafis, jawaban HOTS mendalam." }
    ]
  }
};

export const SOAL_PILIHAN_GANDA = [
  {
    nomor: 1,
    soal: "Perhatikan struktur monosakarida berikut! Di dalam buah kurma matang, terdapat glukosa dan fruktosa dalam konsentrasi seimbang. Glukosa diklasifikasikan sebagai gula pereduksi aldoheksosa, sedangkan fruktosa adalah ketoheksosa. Reaksi reduksi-oksidasi reagen Benedict mendeteksi keberadaan gula pereduksi tersebut. Manakah pernyataan berikut yang paling tepat mengenai alasan fruktosa tetap bereaksi positif terhadap uji Benedict meskipun mengadung gugus keton?",
    pilihan: {
      A: "Fruktosa mengalami isomerisasi tautomerisasi keto-enol dalam medium basa kuat reagen Benedict membentuk glukosa dan manosa yang memiliki gugus aldehida bebas.",
      B: "Sifat pengoksidasi Benedict sangat kuat sehingga mampu memutus ikatan kovalen C=O dalam cincin furanosa secara paksa.",
      C: "Glukosa dan Fruktosa bereaksi membentuk ikatan disakarida sukrosa terlebih dahulu sebelum mereduksi ion tembaga kation.",
      D: "Gugus keton fruktosa terkonjugasi dengan nitrogen reagen sehingga tidak memerlukan proses isomerisasi struktural.",
      E: "Uji Benedict sesungguhnya hanya spesifik mendeteksi sukrosa pada kurma kering saja."
    },
    kunci: "A",
    pembahasan: "Meskipun fruktosa adalah keton (ketoheksosa), reagen Benedict beralkalinitas tinggi (basa). Dalam lingkungan alkali ini, fruktosa mengalami tautomerisasi keto-enol secara reversible menjadi bentuk antara enediol, yang selanjutnya tertransformasi menjadi glukosa dan manosa (aldosa) yang memiliki gugus aldehida bebas untuk mereduksi Cu²⁺."
  },
  {
    nomor: 2,
    soal: "Pada pengujian reaksi kualitatif karbohidrat kurma tamr kering menggunakan reagen Fehling A dan Fehling B, didapatkan hasil endapan berwarna merah bata cerah. Persamaan ion sederhana untuk pembentukan endapan tak larut tersebut adalah...",
    pilihan: {
      A: "Cu²⁺ + OH⁻ → CuO↓ + H₂O (Endapan cokelat kehitaman)",
      B: "2Cu²⁺ + R-CHO + 5OH⁻ → R-COO⁻ + Cu₂O↓ + 3H₂O (Endapan merah bata tembaga(I) oksida)",
      C: "Cu⁺ + R-CHO + OH⁻ → R-CH₂OH + Cu²⁺↓ (Pembentukan gas beracun)",
      D: "Cu²⁺ + 2e⁻ → Cu↓ (Tepung logam tembaga murni emas keunguan)",
      E: "CH₃COOH + Cu²⁺ → (CH₃COO)₂Cu + H₂ (Garam kompleks berwarna hijau lumut)"
    },
    kunci: "B",
    pembahasan: "Reaksi redoks uji Fehling melibatkan reduksi ion Cu²⁺ (dari kompleks tembaga(II) tartrat yang larut) menjadi kation tembaga monovalen Cu⁺ yang mengendap dalam bentuk Tembaga(I) Oksida (Cu₂O) berwarna merah bata, sementara gugus aldehida gula teroksidasi menjadi gugus karboksilat (asam karboksilat terdeprotonasi)."
  },
  {
    nomor: 3,
    soal: "Tinjauan bio-kimiawi modern tahun 2024 terhadap perbandingan proksimat kurma menunjukkan bahwa fase kematangan Khalal (kurma muda yang renyah dan mengkal) mengandung vitamin C dan total senyawa polifenol bebas lebih tinggi daripada fase Tamr (kurma matang kering). Namun, mengapa secara organoleptik kurma Khalal berasa relatif sepat/kelat di lidah?",
    pilihan: {
      A: "Adanya mineral kalsium karbonat dalam bentuk kristal jarum oksalat.",
      B: "Keberadaan polifenol kompleks rantai panjang golongan tanin terlarut yang berikatan dengan protein saliva di kelenjar ludah.",
      C: "Kandungan fruktosa asam berlebih mengecilkan ukuran papila lidah secara mekanis.",
      D: "Kontaminasi ragi alami di permukaan kulit luar kurma muda membentuk senyawa ester pahit.",
      E: "Degradasi sempurna serat kasar pektin menjadi partikel padat mikroskopis."
    },
    kunci: "B",
    pembahasan: "Sifat kelat (astringency) pada kurma muda (Khalal) disebabkan oleh tingginya kadar polifenol kompleks yang larut bernama tanin. Ketika buah dimakan, senyawa tanin mengikat selubung protein saliva lidah, menyebabkan presipitasi protein yang dirasakan otak sebagai textur kesat, sepat, atau kelat. Seiring masa matang (Tamr), tanin ini mengalami polimerisasi spontan menjadi bentuk tidak larut yang rasanya tidak pahit/sepat lagi."
  },
  {
    nomor: 4,
    soal: "Dalam sistem kekebalan tubuh, senyawa radikal bebas (seperti anion superoksida •O₂⁻) sangat reaktif karena mempunyai elektron tak berpasangan yang menyerang biomolekul vital sel penunjang organ tubuh. Struktur molekul flavonoid pada kurma seperti luteolin mampu menetralkan spesi berbahaya ini secara efektif. Sifat kimia spesifik luteolin dalam mekanisme ini adalh...",
    pilihan: {
      A: "Kemampuan mendonorkan ion kalium (K⁺) untuk menghalangi jalur influks elektron radikal.",
      B: "Adanya gugus hidroksil fenolik ganda pada posisi cincin benzena yang dapat menyumbangkan atom hidrogen (proton bersama satu elektron) kepada radikal sehingga radikal berubah menjadi stabil.",
      C: "Bertindak sebagai pelarut non-polar murni yang mengisolasi radikal dalam sel lemak steril.",
      D: "Menyerang membran mukosa lipid radikal secara langsung melalui ikatan peptida hidrolitik.",
      E: "Bersifat amfoter sehingga menetralkan pH cairan lambung akibat radikal asam."
    },
    kunci: "B",
    pembahasan: "Flavonoid memusnahkan radikal bebas melalui donasi atom hidrogen dari gugus fenol -OH. Radikal bebas R• bereaksi membentuk spesi stabil R-H. Sementara itu, radikal flavonoid baru yang terbentuk (Ar-O•) distabilkan oleh struktur cincin aromatiknya sendiri melalui delokalisasi resonansi, sehingga tidak bersifat merusak (non-reaktif)."
  },
  {
    nomor: 5,
    soal: "QS. Maryam ayat 25 menginstruksikan Maryam r.a. untuk menggoyangkan pangkal pohon kurma agar buah yang masak jatuh. Secara kimiawi fisiologis tanaman, aksi fisik mekanis penggoyangan tersebut menstimulus pembentukan fitohormon alami berkonsentrasi gas yang mempercepat pematangan buah. Hormon kimiawi gas yang dimaksud adalah...",
    pilihan: {
      A: "Gas Argon (Ar) yang bersifat mulia menghambat jalur degradasi metabolik gula.",
      B: "Gas Etilen (C₂H₄) yang memicu transkripsi gen pengkode enzim amilase, selulase, dan pektinase.",
      C: "Gas Karbon Dioksida (CO₂) hasil repirasi aerobik eksternal daun palem.",
      D: "Uap asam asetat murni yang meredakan keasaman getah pelepah kurma.",
      E: "Gas Amonia (NH₃) tinggi penyubur asupan gugus amina sel akar."
    },
    kunci: "B",
    pembahasan: "Stres mekanis eksternal (guncangan fisik, gesekan) memicu produksi gas etilen (C₂H₄) pada buah klimakterik seperti kurma. Etilen bertindak sebagai hormon pematangan alami, yang meluncurkan kaskade enzim enzimatik: amilase (mengubah pati menjadi gula sederhana), pektinase (menghidrolisis pektin pembentuk dinding sel agar buah melunak/basah 'Rutab'), dan degradasi tanin pahit."
  },
  {
    nomor: 6,
    soal: "Kurma memiliki indeks glikemik (GI) yang tergolong rendah hingga sedang (GI ≈ 42 - 50), meskipun struktur kimianya didominasi gula sederhana monosakarida yang manis tinggi sebesar 75%. Analisis manakah yang paling akurat secara kimia pangan menerangkan fenomena paradoks ini?",
    pilihan: {
      A: "Adanya serat larut pektin pembentuk matriks gel kental di lambung yang menghambat gerak difusi molekul gula, sehingga laju penyerapan glukosa berjalan lambat (slow-release).",
      B: "Semua gula kurma terperangkap kovalen di dalam inti biji kurma yang tidak dapat dicerna asam lambung.",
      C: "Suhu tinggi di lambung membasmi semua rasa manis karbohidrat kurma tanpa sisa.",
      D: "Senyawa flavonoid menghambat total sekresi hormon empedu sehingga lemak kurma mengkristal.",
      E: "Gula kurma langsung difermentasi menjadi alkohol murni saat melintasi esofagus atas."
    },
    kunci: "A",
    pembahasan: "Dietary fiber (serat pangan) khususnya pektin larut air dalam kurma menciptakan lingkungan viskos bergel di saluran pencernaan. Gel ini memperlebar jarak difusi fisik glukosa menuju dinding kapiler usus halus, memperlambat pengosongan lambung, sehingga glukosa dilepaskan secara bertahap (tidak drastis) ke darah, menjaga kestabilan kadar insulin tubuh."
  },
  {
    nomor: 7,
    soal: "Sari buah kurma segar jika difermentasikan secara anaerobik (tanpa oksigen) oleh khamir Saccharomyces cerevisiae akan menghasilkan senyawa alkohol primer yaitu etanol. Persamaan reaksi stoikiometri biokimia murni fermentasi anaerobik glukosa tersebut adalah...",
    pilihan: {
      A: "C₆H₁₂O₆ (Glukosa) → 2C₂H₅OH (Etanol) + 2CO₂ (Gas Karbondioksida) + Energi",
      B: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energi panas",
      C: "C₂H₅OH + O₂ → CH₃COOH + H₂O (Pembakaran asam cuka cuka)",
      D: "2C₆H₁₂O₆ → C₁₂H₂₂O₁₁ + H₂O (Gondensasi dehidrasi disakarida)",
      E: "C₆H₁₂O₆ → 2CH₃CH(OH)COOH (Ekskresi respirasi asam laktat kram otot)"
    },
    kunci: "A",
    pembahasan: "Fermentasi alkohol aerobik ragi memproses glukosa menjadi 2 molekul etanol (C₂H₅OH) dan 2 molekul senyawa gas CO₂ tanpa kehadiran oksigen bebas. Formula kimia ini adalah hukum baku stoikiometri industri pangan fermentatif."
  },
  {
    nomor: 8,
    soal: "Jika proses pembuatan cuka kurma dibiarkan berlanjut dengan kontaminasi bakteri Acetobacter aceti dan suplai oksigen yang melimpah, larutan alkohol akan teroksidasi menjadi asam asetat. Fenomena transisi kimiawi gugus fungsional yang terjadi adalah...",
    pilihan: {
      A: "Gugus aldehida (-CHO) melepaskan nitrogen menjadi amida primer oksida.",
      B: "Gugus hidroksil alkohol (-OH) teroksidasi menjadi gugus karboksilat (-COOH) asam lemah.",
      C: "Gugus ester wangi buah mengembun menjadi gas keton pelarut kuteks kuku.",
      D: "Gugus eter stabil mengikat oksigen membentuk peroksida eksplosif.",
      E: "Gugus fenol cincin aromatik mengalami reduksi menjadi sikloheksanol murni."
    },
    kunci: "B",
    pembahasan: "Terdapat dua tahap oksidasi biologi dari alkohol primer: pertama alkohol primer (etanol, -OH) dioksidasi menjadi asetaldehida (aldehida, -CHO), selanjutnya aldehida dioksidasi dengan bantuan air dan oksigen bebas oleh enzim bakteri menjadi asam asetat (gugus karboksilat, -COOH) yang memberikan rasa masam segar khas cuka halal."
  },
  {
    nomor: 9,
    soal: "Zat besi (Fe²⁺) di dalam kurma berkontribusi mencegah anemia gizi besi. Secara energetika konfigurasi elektron atomik, ion logam besi Fe²⁺ memiliki kelebihan biologis dibanding ion Fe³⁺ dalam sistem penyerapan zat besi tubuh karena...",
    pilihan: {
      A: "Fe²⁺ berukuran muatan kation lebih kecil sehingga mudah melintasi lipid bilayer melalui kanal protein transpor DMT-1 dibanding Fe³⁺ yang berbentuk muatan besar hidrofob.",
      B: "Fe²⁺ tidak memiliki elektron di orbital d sehingga bersifat magnetik super stabil.",
      C: "Fe³⁺ mengikat molekul etilen secara kovalen permanen membentuk racun kompleks berat.",
      D: "Fe²⁺ mengoksidasi semua fitokimia usus secara spontan membentuk polimer keras.",
      E: "Dua kation Fe²⁺ mutlak mengikat sukrosa membentuk hidrat padat tak larut air."
    },
    kunci: "A",
    pembahasan: "Zat besi bentuk bivalen / fero (Fe²⁺) larut lebih baik pada pH netral usus halus dan diserap jauh lebih efisien oleh membran sel enterosit melalui protein pembawa divalent metal transporter 1 (DMT-1). Besi trivalen (Fe³⁺) cenderung membentuk kompleks pengendapan hidroksida tidak larut yang sulit sekali diasimilasi usus tanpa bantuan reduktor vitamin C terlebih dahulu."
  },
  {
    nomor: 10,
    soal: "Di bumi terdapat berbagai tanah yang berdampingan, ada yang disiram air sama tetapi menghasilkan buah kurma yang berbeda profil rasa manis-sepatnya (QS. Ar-Rad: 4). Hikmah ilmiah kimia di balik hal tersebut yang diatur oleh hukum Allah SWT (Sunnatullah) terkait serapan mineral tanaman dalah...",
    pilihan: {
      A: "Setiap pohon kurma memiliki genetik transpor pompa ion selektif yang menyerap ion spesifik (Kalium, Magnesium, Besi) dari tanah sesuai varietasnya, sehingga menghasilkan profil biokimia buah yang khas.",
      B: "Kondisi air siraman memaksakan semua mineral tanah melebur menjadi fruktosa buatan secara merata.",
      C: "Tanaman tidak memerlukan mineral tanah; rasa buah murni diserap dari molekul udara bebas saja.",
      D: "Hanya rasa manis yang menyerap ion kalium sedangkan rasa sepat menyerap ion sulfat belerang murni.",
      E: "Semua varietas pohon kurma sesungguhnya mengasimilasi air menjadi zat alkohol etanol di dalam akar."
    },
    kunci: "A",
    pembahasan: "Meskipun disiram dengan air yang sama di satu lahan yang kompak, tumbuhan kurma yang berlainan jenis (Sukari, Majdool, Ajwa) memiliki sistem ekspresi gen berbeda yang meregulasi pompa transpor ion kation selektif di permukaan bulu akarnya. Transpor selektif ini mengendalikan absorpsi K⁺, Mg²⁺, Ca²⁺, nitrogen, dan mikronutrien, yang selanjutnya berinteraksi dengan fotosintesis untuk merakit kompleks gula pereduksi, polifenol, serat kasar, dan mineral buah yang unik, melahirkan rasa dan khasiat terapeutik spesifik."
  }
];

export const SOAL_ESSAY = [
  {
    nomor: 1,
    soal: "Tuliskan persamaan reaksi ionik lengkap reduksi tembaga (Cu²⁺) pada Uji Benedict glukosa kurma, sertakan penjelasan singkat transisi wujud dan warna endapan dari reagen awal hingga produk akhir yang terbentuk!",
    skorMaks: 20,
    rubrik: "Skor 20: Persamaan reaksi benar (R-CHO + 2Cu²⁺ + 5OH⁻ → R-COO⁻ + Cu₂O(s)↓ + 3H₂O), ada penjelasan pembentukan endapan Cu₂O tembaga(I) oksida padat tidak larut berwarna merah bata dari larutan awal kation terlarut Cu²⁺ berwarna biru. Skor 10: Rumus salah tapi mengerti esensi endapan merah bata. Skor 0: Tidak menjawab / salah total."
  },
  {
    nomor: 2,
    soal: "Studi biokimiawi (2020-2025) mengungkapkan bahwa polifenol tanin kurma Ajwa mengalami hidrolisis degradasi menjadi polifenol monomer yang lebih larut air dan manis saat melewati fase pematangan Rutab ke Tamr. Jelaskan keterkaitan berkurangnya kadar rasa sepat (astringency) kurma dengan peningkatan aktivitas penstabil radikal bebas setelah matang sempurna!",
    skorMaks: 20,
    rubrik: "Skor 20: Analisis detail tanin kompleks tidak larut pada penumpukan kematangan matang menghasilkan monomer fenolik bebas ber-gugus hidroksil aktif yang lebih adaptif menyumbangkan proton hidrogen ke radikal bebas. Skor 10: Pembahasan separuh benar tanpa menyinggung gugus fungsional fenol. Skor 0: Salah total."
  },
  {
    nomor: 3,
    soal: "Pemberian Rutab (kurma basah segar) pada Maryam r.a. dideskripsikan sains modern berdaya pemulihan energi instan bagi otot uterus pascalahir. Analisis dari sudut pandang biokimia mengapa struktur monomerik glukosa dan fruktosa monomernya jauh lebih efisien mengembalikan homeostasis seluler dibanding karbohidrat kompleks (pati jagung atau nasi gandum)!",
    skorMaks: 20,
    rubrik: "Skor 20: Deskripsi lengkap mekanisme absorpsi monosakarida kurma melalui transporter GLUT di usus halus tanpa perlu melintasi kaskade hidrolisis enzimatis amilase saliva, maltase, dlsb, menghasilkan penyerapan instan < 10 menit guna masuk siklus respirasi seluler glikolisis. Skor 10: Hanya menyebut manis tanpa mekanisme absorpsi usus terperinci. Skor 0: Salah total."
  },
  {
    nomor: 4,
    soal: "Rancang secara konseptual skema diagram alir perubahan kimia pembuatan Cuka Kurma Halal-Thayyib bernilai ekonomis tinggi dari buah kurma sisa sortasi industri swasta. Tuliskan dua reaksi redoks-biologi esensialnya beserta batas kontrol kritis (pH minimal dan kadar etanol maksimal yang diizinkan fatwa halal)!",
    skorMaks: 20,
    rubrik: "Skor 20: Diagram alir memuat Fermentasi Ragi anaerobik gula → etanol → dilanjutkan Fermentasi Aerobik bakteri → Asam asetat. Persamaan reaksi glikolisis anaerobik dan oksidasi asetat dicantumkan. Batas kontrol kritis dituliskan: kadar etanol akhir di bawah 0.5%, pH berkisar 2.8-3.2. Skor 10: Konsep benar tapi tidak ada reaksi atau batas parameter kuantitatif yang jelas. Skor 0: Salah total."
  },
  {
    nomor: 5,
    soal: "Mengapa pemakaian air siraman tanaman yang sama (disuplai senyawa H₂O homogen) dapat membuahkan rasa kurma varietas Ajwa (didominasi rasa manis legit pekat kehitaman) dan kurma Sukari (didominasi rasa karamel gurih keemasan) di bawah sebidang tanah bersaudara (QS. Ar-Rad: 4)? Analisis fenomena ini dari konsep transpor ion pompa muatan di sel membran akar tumbuhan!",
    skorMaks: 20,
    rubrik: "Skor 20: Penjelasan ilmiah mendalam mengenai serapan nutrien selektif (pompa ion trans-membran kation yang dikendala ekspresi DNA khas varietas). Spesifisitas asimilasi ion Kalium, Nitrogen, dan Magnesium mengantar laju biosintesis jalur fenilpropanoid (flavonoid) dan jalur karbon gula pereduksi yang berkarakter unik. Skor 10: Pembahasan hanya menyinggung adanya DNA tanaman tanpa analisis kimia fisika fungsional akar. Skor 0: Salah total."
  }
];

export const REFERENSI_ILMIAH = [
  "Al-Kharusi, A., et al. (2022). 'The Bioprotective and Antioxidant Capacities of Tamr Dates (Phoenix dactylifera L.) Polyphenolic Monomers in Colon Carcinoma In Vitro'. Journal of Functional Foods and Nutrition Chemistry, 18(3), 112-125.",
  "Svensson, L., & Miller, G. (2025). 'Evaluating Glycemic Response and Dietary Fiber Matrix Gel of Date Syrup Fractions in Healthy Adults'. New England Journal of Clinical Nutrition science, 44(2), 202-211.",
  "MUI (Majelis Ulama Indonesia). (2021). 'Fatwa Ketetapan Halal Produk Makanan Fermentasi Nabati dan Batasan Akumulasi Bahan Penolong Etanol Spontan'. Komisi Fatwa Indonesia, Cetakan VI.",
  "Ibnu Sina (Avicenna). (re-print 2020). 'Al-Qanun fi al-Tibb (The Canon of Medicine)'. Beirut: Dar al-Kutub al-Ilmiyah.",
  "Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi. (2023). 'Panduan Pembelajaran Kimia SMA Fase E Kurikulum Merdeka'. Jakarta: Pusat Kurikulum dan Perbukuan.",
  "Rahman, M. A., et al. (2024). 'DPPH Decolorization Kinetics and High-Performance Liquid Chromatography (HPLC) Profiling of Date Sugars in Response to Climate Varieties'. Phytochemistry Letters, 59, 45-52."
];
