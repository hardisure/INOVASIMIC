// Makalah MIC+ — Full Paper as Micro-Website
// Each BAB is a collapsible section with internal navigation

const chapters = [
  {
    id: 'abstrak',
    title: 'Abstrak',
    icon: '📄',
    content: `
<p>Dalam ekosistem industri pembangkitan listrik yang berisiko tinggi, layanan <em>industrial cleaning</em> sering kali terjebak dalam paradigma komoditas yang hanya berfokus pada penyediaan tenaga kerja (<em>manpower supply</em>). Pendekatan ini menciptakan "ilusi kepatuhan" (<em>compliance illusion</em>), di mana fasilitas tampak bersih secara visual sesaat namun gagal memenuhi standar pengendalian risiko operasional dan lingkungan secara berkelanjutan. Akibatnya, perusahaan pemilik aset (Asset Owner) menanggung risiko tersembunyi berupa temuan audit berulang, potensi bahaya keselamatan (K3), dan ancaman sanksi regulasi PROPER.</p>
<p>Inovasi <strong>MKP MIC+ (Managed Industrial Cleaning Plus)</strong> hadir sebagai solusi disruptif yang mentransformasi layanan kebersihan konvensional menjadi produk <em>Facility Readiness Assurance</em> (Jaminan Kesiapan Fasilitas). Menggunakan metodologi <em>Design Thinking</em>, inovasi ini meredefinisi deliverable layanan dari "aktivitas pembersihan" menjadi "jaminan kondisi fasilitas yang terukur dan siap audit". MKP MIC+ mengintegrasikan standar ISO 41001:2018, ISO 31000, dan kriteria kepatuhan PROPER KLHK ke dalam sistem scoring kematangan fasilitas (MIC Level) dan bukti digital (<em>digital evidence</em>).</p>
<p>Hasil validasi pada <em>pilot project</em> di 17 unit pembangkit menunjukkan dampak signifikan: penghilangan temuan minor berulang, peningkatan kesiapan audit menjadi 24/7, dan penciptaan aliran pendapatan baru melalui skema kontrak berbasis hasil (<em>outcome-based contract</em>). Secara finansial, inovasi ini memproyeksikan potensi kenaikan pendapatan per unit menjadi Rp11,7 M – Rp12,4 M melalui penerapan harga premium yang didukung oleh <em>value proposition</em> berupa transfer risiko dan jaminan kepatuhan. MKP MIC+ membuktikan bahwa <em>industrial cleaning</em> dapat berevolusi dari <em>Cost Center</em> menjadi <em>Profit Enabler</em> strategis bagi PLN Group.</p>
<p><strong>Kata kunci:</strong> karya inovasi, managed industrial cleaning, facility readiness assurance, outcome-based contract, risk governance</p>
`
  },
  {
    id: 'bab1',
    title: 'BAB I — Pendahuluan',
    icon: '1️⃣',
    content: `
<h3>1.1 Latar Belakang</h3>
<p>Industri energi nasional, khususnya sub-sektor pembangkitan tenaga listrik, sedang berada dalam fase transisi yang krusial. Tekanan untuk menekan Biaya Pokok Penyediaan (BPP) listrik berjalan beriringan dengan tuntutan regulasi lingkungan dan keselamatan kerja yang semakin ketat. Dalam konteks ini, pengelolaan fasilitas fisik pembangkit (<em>Balance of Plant</em>) menjadi elemen kritikal yang sering kali terabaikan namun memiliki dampak sistemik yang besar.</p>
<p>Secara historis, layanan <em>industrial cleaning</em> di lingkungan PLN Group dikelola dengan paradigma "Penyedia Tenaga Kerja" (<em>Manpower Supply</em>). Kontrak kerja disusun berdasarkan Harga Satuan (KHS) yang mengacu pada jumlah personel (<em>headcount</em>) dan jam kerja. Model bisnis ini memiliki kelemahan fundamental yang kami identifikasi sebagai <strong>"Perangkap Komoditisasi"</strong>:</p>
<ol>
<li><strong>Orientasi Input vs Output:</strong> Fokus kontrak adalah memastikan kehadiran orang, bukan memastikan kondisi fasilitas. Hal ini menciptakan inefisiensi karena penyedia jasa tidak memiliki insentif untuk menyelesaikan pekerjaan lebih cepat atau menggunakan teknologi mekanisasi.</li>
<li><strong>Subjektivitas Kualitas:</strong> Tanpa standar <em>outcome</em> yang terkuantifikasi, definisi "bersih" menjadi sangat subjektif dan bergantung pada persepsi pengawas lapangan saat itu.</li>
<li><strong>Temuan Minor Berulang:</strong> Audit internal K3L dan inspeksi eksternal sering kali menemukan masalah yang sama berulang kali (ceceran oli, debu batu bara di conveyor, parit tersumbat). Meskipun dikategorikan "minor", keberulangan ini menandakan ketiadaan pengendalian sistemik.</li>
</ol>
<p>Data internal menunjukkan bahwa model konvensional ini gagal memberikan jaminan keamanan bagi manajemen. Fenomena <em>panic cleaning</em> — pengerahan tenaga kerja besar-besaran menjelang audit — hanya menciptakan kebersihan semu. Begitu auditor pulang, kondisi fasilitas kembali menurun, meningkatkan risiko operasional seperti <em>dust explosion</em> pada area penanganan batu bara atau pencemaran air lindi pada area pembuangan.</p>
<p>Di sisi lain, PT Mitra Karya Prima (MKP) perlu mencari sumber pertumbuhan baru di luar model bisnis yang hanya mengandalkan volume tenaga kerja. Transformasi dari <em>Cost Center</em> menjadi <em>Profit Center</em> melalui penciptaan nilai tambah (<em>value creation</em>) menjadi imperatif bisnis. Inovasi MKP MIC+ lahir dari urgensi untuk mengubah layanan kebersihan yang "receh" menjadi produk <em>assurance</em> strategis yang bernilai tinggi dan <em>marketable</em> ke industri luar PLN.</p>

<h3>1.2 Maksud dan Tujuan</h3>
<p>Tujuan utama penulisan makalah inovasi ini adalah merumuskan dan memvalidasi strategi transformasi layanan MKP MIC+ sebagai produk pengembangan bisnis (<em>Business Development</em>) yang siap pasar. Secara spesifik:</p>
<ol>
<li><strong>Penciptaan Produk Baru:</strong> Mengembangkan produk layanan <em>Facility Readiness Assurance</em> yang terstandarisasi, memiliki <em>barrier to entry</em> tinggi bagi kompetitor.</li>
<li><strong>Peningkatan Pendapatan:</strong> Membuka peluang <em>premium pricing</em> melalui skema <em>outcome-based contract</em>, diproyeksikan meningkatkan nilai kontrak sebesar 10–15%.</li>
<li><strong>Mitigasi Risiko Korporat:</strong> Menyediakan instrumen pengendalian risiko operasional non-teknis untuk kepatuhan PROPER dan ISO 41001.</li>
<li><strong>Penciptaan unit bisnis berbasis governance & assurance yang scalable.</strong></li>
</ol>

<h3>1.3 Ruang Lingkup</h3>
<ul>
<li><strong>Objek Implementasi:</strong> Unit Pembangkit Listrik (PLTU, PLTGU) dan fasilitas industri berat yang memiliki karakteristik risiko operasional tinggi.</li>
<li><strong>Standar Acuan:</strong> ISO 41001:2018, ISO 31000:2018, dan regulasi PROPER KLHK terbaru.</li>
<li><strong>Aspek Bisnis:</strong> Strategi Go-to-Market, model penetapan harga, dan analisis kelayakan finansial untuk pasar internal PLN (Captive) maupun pasar eksternal (Non-Captive).</li>
</ul>

<h3>1.4 Metodologi</h3>
<p>Pengembangan inovasi ini menggunakan pendekatan <em>Design Thinking</em> yang berpusat pada manusia (<em>human-centered design</em>):</p>
<ol>
<li><strong>Empathize:</strong> Memahami <em>pain points</em> Manajer Pembangkit terkait risiko audit dan ketidakkonsistenan layanan.</li>
<li><strong>Define:</strong> Merumuskan kembali masalah dari "kurangnya tenaga pembersih" menjadi "ketiadaan jaminan kesiapan fasilitas".</li>
<li><strong>Ideate:</strong> Mengembangkan solusi <em>Managed Industrial Cleaning</em> dengan tingkatan layanan (MIC Levels) yang mengintegrasikan teknologi dan tata kelola.</li>
<li><strong>Prototype:</strong> Membangun model operasional, SOP, dan platform digital sebagai <em>Proof of Concept</em>.</li>
<li><strong>Test & Operate:</strong> Menguji coba model pada 17 unit pembangkit untuk validasi performa dan skalabilitas.</li>
</ol>
`
  },
  {
    id: 'bab2',
    title: 'BAB II — Kajian Literatur',
    icon: '2️⃣',
    content: `
<h3>2.1 Teori Servitisasi (Servitization) dan Product-Service System (PSS)</h3>
<p>Transformasi MKP MIC+ berakar pada teori <em>Servitization</em>, yaitu pergeseran strategis perusahaan dari penjualan produk atau jasa dasar menuju penyediaan solusi terintegrasi berbasis hasil (<em>outcome-oriented solution</em>). Literatur menyebutkan bahwa perusahaan yang berhasil melakukan servitisasi tidak lagi menjual "aktivitas", tetapi menjual "kinerja" dan "jaminan keberhasilan" (<em>performance assurance</em>).</p>
<p>Dalam model tradisional, MKP menjual input berupa tenaga kerja dan jam operasional. Dalam model MIC+, nilai yang ditawarkan adalah kesiapan fasilitas dan stabilitas kepatuhan. Perubahan ini menggeser posisi MKP dalam rantai nilai industri dari sekadar operator pelaksana menjadi mitra pengendalian risiko.</p>

<h3>2.2 Outcome-Based Contracting (OBC)</h3>
<p><em>Outcome-Based Contracting</em> (OBC) merupakan model kontraktual di mana pembayaran dan nilai layanan dikaitkan langsung dengan pencapaian hasil yang terukur, bukan sekadar penyediaan aktivitas. Model ini banyak diterapkan dalam industri aerospace, energy services, dan facility management global.</p>
<p>MIC+ mengadopsi prinsip ini dengan mendefinisikan deliverable sebagai MIC Level (maturity score) dan <em>audit readiness</em>, bukan jumlah tenaga kerja. Model ini mencerminkan tren global pergeseran dari "cost-based service" menjadi "value-based service".</p>

<h3>2.3 Risk Transfer Mechanism</h3>
<p>Dalam teori manajemen risiko dan kontraktual modern, <em>risk transfer</em> merupakan strategi untuk memindahkan sebagian eksposur risiko operasional dari pemilik aset kepada pihak penyedia layanan yang memiliki kompetensi mitigasi.</p>
<p>Dalam model tradisional, hampir seluruh risiko tetap berada pada pemilik aset. Dalam model MIC+:</p>
<ul>
<li>Standar cleaning diintegrasikan dengan ISO 41001 (Facility Management)</li>
<li>Risk mapping mengacu pada ISO 31000</li>
<li>Parameter operasional diselaraskan dengan indikator PROPER</li>
</ul>
<p>Hal ini menciptakan <em>perceived security value</em> yang memungkinkan <em>premium pricing</em>.</p>

<h3>2.4 Recurring Service Revenue Model</h3>
<p>MIC+ mengadopsi model <em>recurring revenue</em> melalui penilaian maturitas berkala (MIC Level), monitoring tren kualitas, sistem <em>digital evidence</em>, dan evaluasi <em>corrective governance review</em>. Semakin lama sistem berjalan, semakin besar data historis dan benchmark yang terbentuk, menciptakan <em>data-driven defensibility</em>.</p>

<h3>2.5 ISO 41001:2018 — Facility Management System</h3>
<p>Dua klausul yang menjadi tulang punggung teoretis MKP MIC+:</p>
<ol>
<li><strong>Operational Planning and Control (Klausul 8.1):</strong> Organisasi harus menetapkan kriteria keberterimaan untuk proses layanan — layanan cleaning harus berbasis kriteria teknis yang terukur.</li>
<li><strong>Documented Information (Klausul 7.5):</strong> Kebutuhan akan bukti audit yang valid. MKP MIC+ menjawab ini dengan Digital Evidence yang <em>tamper-proof</em>.</li>
</ol>

<h3>2.6 Regulasi Lingkungan (PROPER) dan Manajemen Risiko (ISO 31000)</h3>
<p>Program PROPER dari KLHK merupakan instrumen regulasi utama di Indonesia. Kegagalan dalam aspek <em>housekeeping</em> sederhana — ceceran oli ke drainase atau debu beterbangan (<em>fugitive emission</em>) — dapat menjadi temuan mayor yang menggugurkan peringkat Hijau atau Emas. MKP MIC+ mengadopsi prinsip ISO 31000 untuk mengidentifikasi titik rawan kegagalan PROPER dan menanamkan kontrol mitigasi ke dalam prosedur kerja harian.</p>
`
  },
  {
    id: 'bab3',
    title: 'BAB III — Pembahasan Inovasi',
    icon: '3️⃣',
    content: `
<h3>3.1 Identifikasi Masalah</h3>
<p>Permasalahan mendasar dalam layanan industrial cleaning di sektor pembangkitan bukan terletak pada kurangnya tenaga kerja, melainkan pada <strong>ketiadaan sistem tata kelola yang mampu menjamin stabilitas kondisi fasilitas secara berkelanjutan</strong>. Model kontrak berbasis manpower menciptakan apa yang disebut sebagai <em>Black Box Operasional</em>.</p>

<h4>A. Economic Loss Exposure yang Tidak Terkalkulasi</h4>
<ol>
<li><strong>Risiko Downgrade PROPER:</strong> Dampak tidak langsung dapat bernilai miliaran rupiah dalam bentuk <em>opportunity loss</em>.</li>
<li><strong>Risiko Insiden Operasional:</strong> Downtime unit pembangkit selama 1–2 hari akibat gangguan non-teknis (dust explosion, slip hazard, oil spill) dapat menimbulkan potensi kerugian yang jauh melampaui nilai kontrak cleaning tahunan.</li>
<li><strong>Temuan Mayor Audit:</strong> Biaya panic cleaning, lembur massal, dan tindakan korektif mendadak merupakan bentuk <em>economic leakage</em> yang terus berulang.</li>
</ol>

<h4>B. Ketergantungan Individu dan Variabilitas Kualitas</h4>
<ul>
<li>Terjadi inkonsistensi kualitas antar shift</li>
<li>Kualitas menurun saat pergantian personel</li>
<li>Tidak ada mekanisme deteksi dini terhadap penurunan standar</li>
</ul>

<h4>C. Absennya Maturity Measurement dan Governance Loop</h4>
<p>Tidak ada <em>closed-loop governance mechanism</em>: skoring objektif, data historis, benchmark antar unit, atau <em>continuous improvement</em> berbasis data. Inilah celah strategis yang menjadi dasar lahirnya MIC+.</p>

<h3>3.2 Mengumpulkan Referensi</h3>
<p>Pengembangan MKP MIC+ melalui analisis referensi sistematis meliputi: regulasi (ISO 41001, ISO 31000, PROPER), laporan pasar FM Indonesia, studi servitization dan outcome-based contracting, serta referensi manajemen risiko operasional di industri pembangkitan.</p>

<h3>3.3 Potensi Pasar</h3>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-4);margin:var(--space-4) 0;">
<div style="text-align:center;padding:var(--space-4);background:rgba(0,87,184,0.06);border-radius:var(--radius-md);border:1px solid rgba(0,87,184,0.15);">
<div style="font-size:var(--fs-2xl);font-weight:900;color:var(--blue);">Rp12–15 T</div>
<div style="font-size:var(--fs-sm);color:var(--text-muted);margin-top:var(--space-1);">TAM/Tahun</div>
</div>
<div style="text-align:center;padding:var(--space-4);background:rgba(0,87,184,0.06);border-radius:var(--radius-md);border:1px solid rgba(0,87,184,0.15);">
<div style="font-size:var(--fs-2xl);font-weight:900;color:var(--blue);">Rp4–6 T</div>
<div style="font-size:var(--fs-sm);color:var(--text-muted);margin-top:var(--space-1);">SAM/Tahun</div>
</div>
<div style="text-align:center;padding:var(--space-4);background:rgba(0,87,184,0.06);border-radius:var(--radius-md);border:1px solid rgba(0,87,184,0.15);">
<div style="font-size:var(--fs-2xl);font-weight:900;color:var(--blue);">Rp220–480 M</div>
<div style="font-size:var(--fs-sm);color:var(--text-muted);margin-top:var(--space-1);">SOM (3 Tahun)</div>
</div>
</div>

<table style="width:100%;border-collapse:collapse;margin:var(--space-4) 0;">
<thead><tr style="background:var(--blue);color:white;"><th style="padding:10px;text-align:left;">Tahun</th><th style="padding:10px;text-align:center;">Estimasi Unit Aktif</th><th style="padding:10px;text-align:right;">Estimasi Revenue</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:10px;">Tahun 1</td><td style="padding:10px;text-align:center;">20–22 Unit</td><td style="padding:10px;text-align:right;">Rp220–250 M</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:10px;">Tahun 2</td><td style="padding:10px;text-align:center;">27–30 Unit</td><td style="padding:10px;text-align:right;">Rp300–360 M</td></tr>
<tr><td style="padding:10px;">Tahun 3</td><td style="padding:10px;text-align:center;">35–40 Unit</td><td style="padding:10px;text-align:right;">Rp380–480 M</td></tr>
</tbody>
</table>

<h3>3.4 PESTLE Analysis</h3>
<ul>
<li><strong>Politik:</strong> Komitmen pemerintah terhadap Net Zero Emission dan standar ESG mendorong BUMN memperketat standar operasional.</li>
<li><strong>Ekonomi:</strong> Pertumbuhan PDB Indonesia ~5% mendorong ekspansi industri, namun tekanan efisiensi menuntut solusi outsourcing bernilai tambah.</li>
<li><strong>Sosial:</strong> Meningkatnya kesadaran akan safety culture menuntut standar kebersihan lebih tinggi.</li>
<li><strong>Teknologi:</strong> Adopsi IoT dan Digital Twin memungkinkan integrasi smart cleaning melalui Digital Evidence.</li>
<li><strong>Legal:</strong> Penegakan hukum lingkungan (UU 32/2009) semakin ketat.</li>
<li><strong>Lingkungan:</strong> Perubahan iklim dan polusi memaksa pengelolaan emisi debu fugitif yang lebih serius.</li>
</ul>

<h3>3.5 Porter's Five Forces</h3>
<ol>
<li><strong>Ancaman Pendatang Baru (Rendah):</strong> Barrier to entry tinggi karena sertifikasi dan rekam jejak keselamatan.</li>
<li><strong>Kekuatan Tawar Pemasok (Sedang):</strong> Tenaga kerja tersedia, namun tenaga terampil K3 terbatas.</li>
<li><strong>Kekuatan Tawar Pembeli (Tinggi):</strong> Klien sensitif harga, namun MIC+ menetralkan dengan value mitigasi risiko audit.</li>
<li><strong>Ancaman Substitusi (Rendah):</strong> Tidak ada substitusi langsung untuk kebersihan fisik.</li>
<li><strong>Rivalitas Kompetitor (Tinggi):</strong> Strategi MKP: mengubah aturan main dari "harga per orang" menjadi "harga per level jaminan".</li>
</ol>

<h3>3.6 Business Model Canvas</h3>
<p>MIC+ bukan sekadar peningkatan layanan cleaning, melainkan transformasi model bisnis dari penyedia tenaga kerja menjadi penyedia layanan assurance berbasis tata kelola dan risiko. Struktur pendapatan berubah dari model berbasis volume tenaga kerja menjadi kontrak berbasis hasil dengan potensi <em>recurring revenue</em>.</p>

<h3>3.7 Analisis SWOT</h3>
<ul>
<li><strong>Strengths:</strong> Teruji di 17 unit (Proven), integrasi kuat dengan standar PLN, sistem digital proprietary.</li>
<li><strong>Weaknesses:</strong> Persepsi pasar sebagai penyedia tenaga kerja, kapasitas investasi teknologi perlu ditingkatkan.</li>
<li><strong>Opportunities:</strong> Pasar eksternal (IPP & Industri) besar, regulasi lingkungan semakin ketat, tren outsourcing FM.</li>
<li><strong>Threats:</strong> Perubahan kebijakan tarif listrik menekan anggaran O&M, masuknya pemain global.</li>
</ul>

<h3>3.8 Implementasi</h3>
<h4>Strategi Implementasi 5 Tahap</h4>
<ol>
<li><strong>Stage 1 — Assessment & Baseline:</strong> Pemetaan kondisi aktual, identifikasi area kritis, penetapan baseline MIC Level.</li>
<li><strong>Stage 2 — Solution Design & Governance Framework:</strong> Workload analysis, penyusunan SOP, integrasi ISO dan PROPER.</li>
<li><strong>Stage 3 — Pre-Implementation & Alignment:</strong> Sosialisasi MIC+, rekrutmen dan onboarding sesuai standar.</li>
<li><strong>Stage 4 — Execution & Control:</strong> Pelaksanaan berbasis area kritis, monitoring digital, pengukuran MIC Level periodik.</li>
<li><strong>Stage 5 — Evaluation & Continuous Improvement:</strong> Evaluasi tren maturitas, penyesuaian workload, pencegahan regresi kualitas.</li>
</ol>

<h4>Maturity Level (MIC Level)</h4>
<p>Framework pengukuran dengan 10 indikator penilaian dan 5 level maturitas:</p>
<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:4px;margin:var(--space-3) 0;">
<div style="text-align:center;padding:8px;background:#ef4444;color:white;border-radius:4px;font-size:var(--fs-xs);"><strong>Level 1</strong><br/>Initial</div>
<div style="text-align:center;padding:8px;background:#f97316;color:white;border-radius:4px;font-size:var(--fs-xs);"><strong>Level 2</strong><br/>Managed</div>
<div style="text-align:center;padding:8px;background:#eab308;color:white;border-radius:4px;font-size:var(--fs-xs);"><strong>Level 3</strong><br/>Defined</div>
<div style="text-align:center;padding:8px;background:#22c55e;color:white;border-radius:4px;font-size:var(--fs-xs);"><strong>Level 4</strong><br/>Quantitative</div>
<div style="text-align:center;padding:8px;background:#0057b8;color:white;border-radius:4px;font-size:var(--fs-xs);"><strong>Level 5</strong><br/>Optimized</div>
</div>

<h4>Timeline Implementasi</h4>
<ul>
<li><strong>2019:</strong> Tradisional Industrial Cleaning — tanpa tata kelola terstruktur</li>
<li><strong>2022:</strong> Implementasi Perdana di PLTU Pacitan (pilot project)</li>
<li><strong>2023–2025:</strong> Perluasan ke 17 unit pembangkit PLN Group</li>
</ul>

<h3>3.9 Go To Market Strategy</h3>
<p>Strategi komersialisasi bertahap: validasi di unit prioritas, ekspansi ke captive market, lalu ke pasar non-captive melalui pilot project. Pendekatan <em>anchor client</em> dan <em>cross-selling</em> digunakan untuk meningkatkan nilai kontrak secara berkelanjutan.</p>
`
  },
  {
    id: 'bab4',
    title: 'BAB IV — Manfaat Inovasi',
    icon: '4️⃣',
    content: `
<h3>4.1 Manfaat Finansial Terhadap Korporat</h3>

<h4>A. Peningkatan Pendapatan (Revenue Uplift)</h4>
<p>Premium pricing sebesar 10–15% menghasilkan tambahan pendapatan tahunan sekitar <strong>Rp11,7–Rp12,4 miliar per tahun</strong>.</p>

<h4>B. Peningkatan Contribution Margin</h4>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);margin:var(--space-3) 0;">
<div style="text-align:center;padding:var(--space-4);background:rgba(214,40,40,0.06);border-radius:var(--radius-md);border:1px solid rgba(214,40,40,0.15);">
<div style="font-size:var(--fs-xl);font-weight:900;color:var(--red);">±12–15%</div>
<div style="font-size:var(--fs-sm);color:var(--text-muted);">Margin Konvensional</div>
</div>
<div style="text-align:center;padding:var(--space-4);background:rgba(42,157,143,0.06);border-radius:var(--radius-md);border:1px solid rgba(42,157,143,0.15);">
<div style="font-size:var(--fs-xl);font-weight:900;color:var(--green);">±20–25%</div>
<div style="font-size:var(--fs-sm);color:var(--text-muted);">Margin MIC+</div>
</div>
</div>
<p>Kontribusi laba operasional diperkirakan ± <strong>Rp2–2,6 miliar per tahun</strong>.</p>

<h4>C. Penguatan EBITDA dan Nilai Bisnis</h4>
<p>Uplift EBITDA ± Rp2 miliar/tahun. Dengan multiple konservatif 4× EBITDA, inovasi berpotensi meningkatkan valuasi unit bisnis hingga <strong>± Rp8 miliar</strong>.</p>

<h4>D. Pengembalian Investasi</h4>
<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-4);margin:var(--space-3) 0;">
<div style="text-align:center;padding:var(--space-4);background:rgba(0,87,184,0.06);border-radius:var(--radius-md);">
<div style="font-size:var(--fs-xl);font-weight:900;color:var(--blue);">± 2,3 th</div>
<div style="font-size:var(--fs-sm);color:var(--text-muted);">Payback Period</div>
</div>
<div style="text-align:center;padding:var(--space-4);background:rgba(0,87,184,0.06);border-radius:var(--radius-md);">
<div style="font-size:var(--fs-xl);font-weight:900;color:var(--blue);">± 29%</div>
<div style="font-size:var(--fs-sm);color:var(--text-muted);">IRR</div>
</div>
<div style="text-align:center;padding:var(--space-4);background:rgba(0,87,184,0.06);border-radius:var(--radius-md);">
<div style="font-size:var(--fs-xl);font-weight:900;color:var(--blue);">Rp2,9 M</div>
<div style="font-size:var(--fs-sm);color:var(--text-muted);">NPV (5 thn)</div>
</div>
</div>

<h3>4.2 Manfaat Finansial — Cost-Benefit Analysis</h3>
<p>Investasi awal: <strong>Rp5.000.000.000</strong> (one-time investment).</p>
<table style="width:100%;border-collapse:collapse;margin:var(--space-4) 0;">
<thead><tr style="background:var(--blue);color:white;"><th style="padding:10px;text-align:left;">Komponen</th><th style="padding:10px;text-align:right;">Sebelum MIC+</th><th style="padding:10px;text-align:right;">Setelah MIC+</th><th style="padding:10px;text-align:right;">Efisiensi</th></tr></thead>
<tbody>
<tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:10px;">Panic cleaning & rework</td><td style="padding:10px;text-align:right;">Rp1,2 M</td><td style="padding:10px;text-align:right;">Rp360 Jt</td><td style="padding:10px;text-align:right;color:var(--green);font-weight:700;">Rp840 Jt</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:10px;">Lembur tambahan</td><td style="padding:10px;text-align:right;">Rp800 Jt</td><td style="padding:10px;text-align:right;">Rp400 Jt</td><td style="padding:10px;text-align:right;color:var(--green);font-weight:700;">Rp400 Jt</td></tr>
<tr style="border-bottom:1px solid rgba(0,0,0,0.1);"><td style="padding:10px;">Inefisiensi tenaga kerja</td><td style="padding:10px;text-align:right;">Rp1,5 M</td><td style="padding:10px;text-align:right;">Rp600 Jt</td><td style="padding:10px;text-align:right;color:var(--green);font-weight:700;">Rp900 Jt</td></tr>
<tr style="background:rgba(42,157,143,0.06);"><td style="padding:10px;font-weight:700;">Total Efisiensi</td><td style="padding:10px;"></td><td style="padding:10px;"></td><td style="padding:10px;text-align:right;color:var(--green);font-weight:900;font-size:var(--fs-lg);">Rp2,14 M</td></tr>
</tbody>
</table>
<p>Kontribusi efisiensi terhadap total biaya operasional cleaning ≈ <strong>2,75%/tahun</strong>. Tambahan laba operasional ≈ <strong>8–9% peningkatan EBITDA unit</strong>.</p>

<h3>4.3 Manfaat Non-Finansial</h3>
<ul>
<li>Memperkuat ketahanan tata kelola melalui pendekatan berbasis maturitas</li>
<li>Menurunkan probabilitas temuan mayor audit</li>
<li>Membangun stabilitas kesiapan fasilitas sepanjang tahun</li>
<li>Meningkatkan positioning MKP dari penyedia jasa operasional menjadi mitra <em>industrial risk assurance</em></li>
<li>Menciptakan keunggulan kompetitif berbasis governance dan data historis</li>
<li>Mendorong budaya kerja yang lebih disiplin, sadar risiko, dan berorientasi perbaikan berkelanjutan</li>
</ul>
`
  },
  {
    id: 'bab5',
    title: 'BAB V — Kesimpulan & Saran',
    icon: '5️⃣',
    content: `
<h3>5.1 Kesimpulan</h3>
<p>Inovasi MKP MIC+ membuktikan bahwa <em>industrial cleaning</em> bukan sekadar aktivitas operasional pendukung, melainkan elemen kritikal dalam pengendalian risiko fasilitas dan perlindungan nilai aset perusahaan. Permasalahan utama yang dihadapi bukan kekurangan tenaga kerja, tetapi ketiadaan sistem tata kelola yang mampu menjamin stabilitas kualitas secara berkelanjutan dan terukur.</p>
<p>Melalui pendekatan berbasis maturitas (MIC Level), monitoring digital, dan integrasi standar ISO serta indikator PROPER, MIC+ berhasil mentransformasikan model bisnis dari <em>manpower-based service</em> menjadi <em>outcome-based assurance service</em>. Transformasi ini menghasilkan:</p>
<ul>
<li>Efisiensi tahunan <strong>± Rp2,2 miliar</strong></li>
<li>Peningkatan EBITDA <strong>8–9%</strong></li>
<li>Payback period <strong>± 2,3 tahun</strong> dengan IRR <strong>~29%</strong></li>
<li>Kesiapan audit <strong>24/7</strong></li>
<li>Penurunan risiko temuan mayor</li>
</ul>
<p>MIC+ tidak hanya memperbaiki proses kerja, tetapi membangun sistem assurance yang menciptakan nilai tambah berkelanjutan dan meningkatkan posisi strategis MKP di industri.</p>

<h3>5.2 Saran</h3>
<ol type="A">
<li><strong>Standarisasi Nasional MIC+</strong> — Menjadikan framework MIC+ sebagai standar layanan internal MKP dan memperluasnya ke seluruh unit operasional sebagai benchmark nasional berbasis data historis.</li>
<li><strong>Penguatan Digitalisasi dan Data Analytics</strong> — Mengembangkan dashboard terintegrasi dan analisis tren lintas unit untuk kemampuan prediktif dalam mendeteksi potensi penurunan kualitas.</li>
<li><strong>Ekspansi ke Segmen Non-Captive</strong> — Menggunakan unit dengan performa terbaik sebagai <em>anchor client</em> untuk penetrasi ke industri energi dan heavy industry di luar captive market.</li>
<li><strong>Pengembangan Lini Bisnis Assurance</strong> — Mengkaji pembentukan sub-unit khusus Industrial Risk Assurance untuk memperkuat positioning MKP.</li>
</ol>
<blockquote style="border-left:4px solid var(--blue);padding:var(--space-3) var(--space-4);background:rgba(0,87,184,0.04);margin:var(--space-4) 0;border-radius:0 var(--radius-sm) var(--radius-sm) 0;">
<p style="font-style:italic;color:var(--text-secondary);margin:0;">Inovasi ini menunjukkan bahwa keunggulan kompetitif tidak selalu berasal dari teknologi baru yang kompleks, tetapi dari keberanian mengubah paradigma: dari sekadar menyelesaikan pekerjaan menjadi menjamin stabilitas dan kesiapan fasilitas secara sistemik. Jika dikembangkan secara konsisten, MIC+ berpotensi menjadi <strong>standar baru dalam pengelolaan industrial cleaning berbasis risiko di Indonesia</strong>.</p>
</blockquote>
`
  },
  {
    id: 'pustaka',
    title: 'Daftar Pustaka',
    icon: '📚',
    content: `
<div style="font-size:var(--fs-sm);line-height:1.8;">
<p>Ashurst. (2026). <em>Indonesia's new power development plan: Highlights from the 2025–2034 RUPTL.</em></p>
<p>Aspire. (2026). <em>Top cleaning business tech trends to watch in 2025.</em></p>
<p>Auditor Training Online. (2026). <em>ISO 14001 Clause 8.1 Operational planning and control.</em></p>
<p>Beta.co.id. (2026). <em>Pengendalian debu di tambang batubara agar tidak membahayakan.</em></p>
<p>CentralSquare. (2026). <em>Strategies for digital evidence management.</em></p>
<p>Credence Research Inc. (2026). <em>Indonesia contract cleaning services market – growth, share, opportunities & competitive analysis, 2024–2032.</em></p>
<p>EIA. (2026). <em>Country analysis brief: Indonesia.</em></p>
<p>EconStor. (2026). <em>A review of servitization theoretical foundations.</em></p>
<p>Enerdata. (2026). <em>Indonesia aims to add 69.5 GW of new power capacity between 2025 and 2034.</em></p>
<p>EQA IMS Certification. (2026). <em>ISO 41001:2018 (Facility Management System).</em></p>
<p>Haleyora Powerindo. (2026). <em>Industrial cleaning.</em></p>
<p>HSE SkillUp. (2026). <em>Peraturan BPLH Nomor 7 Tahun 2025: Panduan lengkap PROPER.</em></p>
<p>ISS Indonesia. (2026). <em>About ISS Indonesia.</em></p>
<p>JDIH Kementerian Kehutanan. (2025). <em>Perubahan Permen LHK Nomor 7 Tahun 2021.</em></p>
<p>Listrik Indonesia. (2026). <em>Kapasitas listrik nasional tembus 105 GW, dominasi PLTU masih kuat.</em></p>
<p>MarkNtel Advisors. (2026). <em>Indonesia facility management market size & growth [2025–2030].</em></p>
<p>PermenLH BPLH. (2025). <em>PermenLH BPLH No. 7 Tahun 2025 tentang PROPER.</em></p>
<p>ResearchAndMarkets. (2026). <em>Indonesia facility management – market share analysis, industry trends & statistics, growth forecasts (2025–2030).</em></p>
<p>ResearchGate. (2026). <em>The servitization of manufacturing: A review of literature and reflection on future challenges.</em></p>
<p>Sodexo. (2026). <em>Energy and resources support services.</em></p>
<p>Spesialis.co.id. (2026). <em>Panduan izin usaha pengangkutan limbah B3 tahun 2025.</em></p>
<p>TechSci Research. (2026). <em>Indonesia facility management market size report | 2020–2030F.</em></p>
<p>Technavio. (2026). <em>Cleaning services market growth analysis – size and forecast 2026–2030.</em></p>
</div>
`
  }
];

export function renderMakalah() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <section class="section" style="padding-top:var(--space-10);">
      <div class="container">
        <!-- Header -->
        <div style="text-align:center;margin-bottom:var(--space-8);">
          <div class="section-label">📖 MAKALAH LENGKAP</div>
          <h1 class="section-title" style="font-size:var(--fs-3xl);">Transformasi Layanan Industrial Cleaning<br/>Menjadi Produk Facility Readiness Assurance</h1>
          <p style="color:var(--text-muted);max-width:700px;margin:var(--space-3) auto 0;font-size:var(--fs-sm);">
            MKP MIC+ (Managed Industrial Cleaning Plus) — Sebagai Sumber Pendapatan Baru<br/>
            <strong>Future Innovation Summit (FISSION) — PLN Nusantara Power Services 2026</strong>
          </p>
          <div style="display:flex;justify-content:center;gap:var(--space-4);margin-top:var(--space-4);flex-wrap:wrap;">
            <span style="font-size:var(--fs-xs);color:var(--text-muted);background:rgba(0,87,184,0.06);padding:4px 12px;border-radius:99px;">Hardi Surya Pratama</span>
            <span style="font-size:var(--fs-xs);color:var(--text-muted);background:rgba(0,87,184,0.06);padding:4px 12px;border-radius:99px;">Bradika Chandra Sanjaya</span>
            <span style="font-size:var(--fs-xs);color:var(--text-muted);background:rgba(0,87,184,0.06);padding:4px 12px;border-radius:99px;">Surya Hari Putra</span>
          </div>
        </div>

        <!-- Chapter Navigation -->
        <div id="makalah-nav" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:var(--space-6);position:sticky;top:68px;z-index:10;background:var(--bg);padding:var(--space-3) 0;border-bottom:1px solid rgba(0,0,0,0.06);">
          ${chapters.map((ch, i) => `
            <button onclick="document.getElementById('ch-${ch.id}').scrollIntoView({behavior:'smooth',block:'start'})"
              style="padding:8px 16px;border:1px solid rgba(0,87,184,0.2);background:rgba(0,87,184,0.04);color:var(--blue);border-radius:var(--radius-sm);cursor:pointer;font-size:var(--fs-xs);font-weight:600;transition:all 0.15s ease;white-space:nowrap;"
              onmouseover="this.style.background='var(--blue)';this.style.color='white'"
              onmouseout="this.style.background='rgba(0,87,184,0.04)';this.style.color='var(--blue)'"
            >${ch.icon} ${ch.title}</button>
          `).join('')}
        </div>

        <!-- Chapter Content -->
        <div style="max-width:860px;margin:0 auto;">
          ${chapters.map((ch, i) => `
            <div id="ch-${ch.id}" style="scroll-margin-top:140px;margin-bottom:var(--space-8);">
              <div class="card" style="padding:0;overflow:hidden;">
                <div onclick="
                  const body = this.nextElementSibling;
                  const arrow = this.querySelector('.ch-arrow');
                  if(body.style.display === 'none') {
                    body.style.display = 'block';
                    arrow.textContent = '▼';
                  } else {
                    body.style.display = 'none';
                    arrow.textContent = '▶';
                  }
                " style="padding:var(--space-4) var(--space-5);cursor:pointer;display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,rgba(0,87,184,0.04),rgba(0,174,239,0.04));border-bottom:1px solid rgba(0,0,0,0.06);user-select:none;"
                onmouseover="this.style.background='linear-gradient(135deg,rgba(0,87,184,0.08),rgba(0,174,239,0.08))'"
                onmouseout="this.style.background='linear-gradient(135deg,rgba(0,87,184,0.04),rgba(0,174,239,0.04))'">
                  <h2 style="margin:0;font-size:var(--fs-lg);color:var(--blue);">${ch.icon} ${ch.title}</h2>
                  <span class="ch-arrow" style="font-size:var(--fs-sm);color:var(--blue);">▼</span>
                </div>
                <div class="ch-body" style="padding:var(--space-5);line-height:1.9;color:var(--text-secondary);">
                  ${ch.content}
                </div>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Back to top -->
        <div style="text-align:center;margin-top:var(--space-6);padding-bottom:var(--space-8);">
          <button onclick="window.scrollTo({top:0,behavior:'smooth'})"
            style="padding:10px 24px;border:1px solid rgba(0,87,184,0.2);background:rgba(0,87,184,0.04);color:var(--blue);border-radius:var(--radius-sm);cursor:pointer;font-size:var(--fs-sm);font-weight:600;">
            ↑ Kembali ke Atas
          </button>
          <div style="margin-top:var(--space-3);">
            <a href="#/" onclick="window.location.hash='#/';window.scrollTo(0,0);" style="font-size:var(--fs-xs);color:var(--text-muted);text-decoration:none;">← Kembali ke Beranda</a>
          </div>
        </div>
      </div>
    </section>
  `;
  window.scrollTo(0, 0);
}
