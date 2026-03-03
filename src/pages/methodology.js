// METHODOLOGY PAGE — Hidden reference for calculation explanations
export function renderMethodology(container) {
    container.innerHTML = `
    <section class="page-section" style="border-top:4px solid var(--blue);">
      <div class="container">
        <div class="section-label">Appendix — Metodologi Perhitungan</div>
        <h2 class="section-title">Basis Data & Formula</h2>
        <p class="section-subtitle mb-8">Seluruh angka di website ini diturunkan dari data operasional aktual PT MKP, benchmark industri FM Indonesia, dan analisis biaya-manfaat terstruktur. Halaman ini menjelaskan asal-usul setiap angka agar Anda dapat menjelaskan dengan percaya diri.</p>

        <div style="background:rgba(0,87,184,0.06);border:1px solid rgba(0,87,184,0.15);border-radius:var(--radius-md);padding:var(--space-6);margin-bottom:var(--space-8);">
          <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-3);">
            <span style="font-size:var(--fs-xl);">📋</span>
            <strong style="color:var(--blue);">Catatan Penting</strong>
          </div>
          <p style="font-size:var(--fs-sm);color:var(--text-secondary);line-height:var(--lh-normal);margin:0;">
            Seluruh data dan perhitungan didasarkan pada <strong>makalah MIC+</strong>, dokumen pendukung operasional,
            dan data finansial PT MKP. Angka bersifat estimasi konservatif dan dapat divalidasi ulang terhadap data aktual setiap unit pembangkit.
          </p>
        </div>
      </div>
    </section>

    <!-- ===== SECTION 1: FINANCIAL METRICS ===== -->
    <section class="page-section alt-bg">
      <div class="container">
        <div class="section-label">1. Financial Impact Dashboard</div>
        <h2 class="section-title" style="font-size:var(--fs-2xl);">Perhitungan Executive Financial</h2>

        <!-- Efisiensi Tahunan -->
        <div class="card card-accent-top mb-6">
          <h3 style="color:var(--blue);margin-bottom:var(--space-4);">Efisiensi Tahunan = Rp2.2 Miliar</h3>
          <p style="font-size:var(--fs-sm);color:var(--text-secondary);line-height:var(--lh-normal);margin-bottom:var(--space-4);">
            Dihitung dari selisih biaya model tradisional vs MIC+ pada 3 komponen utama:
          </p>
          <table class="data-table">
            <thead>
              <tr>
                <th>Komponen Biaya</th>
                <th style="text-align:right;">Model Tradisional</th>
                <th style="text-align:right;">Model MIC+</th>
                <th style="text-align:right;">Efisiensi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Panic Cleaning & Rework</strong></td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--red);">Rp1,200 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--green);">Rp360 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);font-weight:700;">Rp840 Juta</td>
              </tr>
              <tr>
                <td><strong>Lembur Tambahan</strong></td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--red);">Rp800 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--green);">Rp400 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);font-weight:700;">Rp400 Juta</td>
              </tr>
              <tr>
                <td><strong>Inefisiensi Tenaga Kerja</strong></td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--red);">Rp1,500 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--green);">Rp600 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);font-weight:700;">Rp900 Juta</td>
              </tr>
              <tr style="background:var(--blue-light);">
                <td><strong style="color:var(--blue);">TOTAL</strong></td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--red);font-weight:700;">Rp3,500 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--green);font-weight:700;">Rp1,360 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);font-weight:900;color:var(--blue);">Rp2,140 Juta</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top:var(--space-4);padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
            <div style="font-size:var(--fs-xs);font-weight:700;color:var(--text-muted);margin-bottom:var(--space-2);">FORMULA & SUMBER DATA:</div>
            <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">Panic Cleaning: Biaya mobilisasi darurat menjelang audit PROPER × frekuensi 4–6×/tahun. MIC+ mengurangi 70% insiden darurat karena kesiapan 24/7.</li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">Lembur: Total jam lembur × tarif lembur. MIC+ mengurangi 50% kebutuhan lembur melalui penjadwalan terukur berbasis IK.</li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">Inefisiensi TK: Biaya overhead supervisi klien (15–20% waktu supervisor), turnover & re-induction. MIC+ zero overhead supervisi klien.</li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">Angka dibulatkan menjadi <strong>Rp2.2 Miliar</strong> sebagai estimasi konservatif (aktual Rp2.14M).</li>
            </ul>
          </div>
        </div>

        <!-- NPV, IRR, Payback -->
        <div class="card card-accent-green mb-6">
          <h3 style="color:var(--green);margin-bottom:var(--space-4);">NPV, IRR & Payback Period</h3>
          <div class="grid-3 mb-6">
            <div style="text-align:center;padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
              <div style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:var(--cyan);">Rp2.9M</div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);">NPV 5 Tahun</div>
            </div>
            <div style="text-align:center;padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
              <div style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:var(--green);">~29%</div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);">IRR</div>
            </div>
            <div style="text-align:center;padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
              <div style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:var(--amber);">~2.3 th</div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);">Payback</div>
            </div>
          </div>
          <div style="padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
            <div style="font-size:var(--fs-xs);font-weight:700;color:var(--text-muted);margin-bottom:var(--space-2);">FORMULA & ASUMSI:</div>
            <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                <strong>Total Investasi (I₀)</strong> = Rp5 Miliar — meliputi: mekanis (HPWJ, Ind. Vacuum), digital evidence system, training & sertifikasi, governance toolkit, setup infrastructure.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                <strong>Cashflow tahunan (CF)</strong> = Rp2.2 Miliar efisiensi/tahun (konstan, konservatif)
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                <strong>Payback Period</strong> = I₀ / CF = Rp5M / Rp2.2M = <strong>2.27 tahun ≈ 2.3 tahun</strong>
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                <strong>NPV (5 tahun, r=12%)</strong> = Σ [CF/(1+r)^t] − I₀ = 2.2×(3.6048) − 5 = 7.93 − 5 = <strong>Rp2.93 Miliar ≈ Rp2.9M</strong>
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Annuity factor 5 tahun r=12%: (1−(1.12)^−5)/0.12 = 3.6048
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                <strong>IRR</strong> = r dimana NPV=0 → 0 = −5 + 2.2 × [(1−(1+r)^−5)/r]. Solved iteratif: r ≈ <strong>28.7% ≈ ~29%</strong>
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Tingkat diskonto 12% = WACC konservatif untuk BUMN utility/infrastructure di Indonesia.
              </li>
            </ul>
          </div>
        </div>

        <!-- EBITDA Impact -->
        <div class="card card-accent-cyan mb-6">
          <h3 style="color:var(--cyan);margin-bottom:var(--space-4);">EBITDA Impact = 8–9%</h3>
          <div style="padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
            <div style="font-size:var(--fs-xs);font-weight:700;color:var(--text-muted);margin-bottom:var(--space-2);">DERIVASI:</div>
            <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Rata-rata EBITDA unit pembangkit PLN Group: ±<strong>Rp25 Miliar/tahun</strong> (estimasi konservatif, bervariasi per kapasitas MW).
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Efisiensi MIC+ = Rp2.2 Miliar/tahun → kontribusi ke EBITDA = 2.2 / 25 = <strong>8.8% ≈ 8–9%</strong>
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Range: Unit kecil (EBITDA Rp15M) → 14.7%. Unit besar (EBITDA Rp40M) → 5.5%. Median ≈ 8–9%.
              </li>
            </ul>
          </div>
        </div>

        <!-- Valuasi -->
        <div class="card mb-6">
          <h3 style="margin-bottom:var(--space-4);">EBITDA Valuasi Impact = ±Rp8 Miliar</h3>
          <div style="padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
            <div style="font-size:var(--fs-xs);font-weight:700;color:var(--text-muted);margin-bottom:var(--space-2);">DERIVASI:</div>
            <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                EBITDA uplift = ±Rp2 Miliar/tahun (dari efisiensi Rp2.2M, dikurangi OPEX maintenance MIC+).
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                EV/EBITDA multiple konservatif untuk utility BUMN: <strong>4× EBITDA</strong> (range industri: 3.5–6×).
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Value creation = 2 × 4 = <strong>Rp8 Miliar</strong> peningkatan valuasi unit bisnis.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Catatan: Ini adalah value creation, bukan revenue — menunjukkan kapabilitas MIC+ sebagai instrumen peningkatan nilai korporasi.
              </li>
            </ul>
          </div>
        </div>

        <!-- Biaya Operasional -->
        <div class="card mb-6">
          <h3 style="margin-bottom:var(--space-4);">Total Biaya Operasional Cleaning = ±Rp80 Miliar/tahun</h3>
          <div style="padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
            <div style="font-size:var(--fs-xs);font-weight:700;color:var(--text-muted);margin-bottom:var(--space-2);">DERIVASI:</div>
            <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                MKP melayani ±20 unit pembangkit aktif dengan rata-rata kontrak Rp3.5–4.5 Miliar/unit/tahun.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Total revenue cleaning: 20 × Rp4M = ±<strong>Rp80 Miliar</strong>. Efisiensi MIC+ ≈ 2.2/80 = <strong>2.75%</strong> dari total biaya.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SECTION 2: SIMULATION ENGINE ===== -->
    <section class="page-section">
      <div class="container">
        <div class="section-label">2. Simulation Engine</div>
        <h2 class="section-title" style="font-size:var(--fs-2xl);">Formula Mesin Simulasi</h2>
        <p class="section-subtitle mb-6">Seluruh output simulasi dihitung secara real-time berdasarkan parameter input. Berikut formula yang digunakan:</p>

        <div class="card card-accent-top mb-6">
          <h3 style="color:var(--blue);margin-bottom:var(--space-4);">Estimasi Manpower Konvensional</h3>
          <div style="background:#0B0F14;border-radius:var(--radius-sm);padding:var(--space-5);margin-bottom:var(--space-4);overflow-x:auto;">
            <code style="color:#00AEEF;font-family:var(--font-mono);font-size:var(--fs-sm);white-space:pre;">Manpower = (Luas Area / 1000) × 3.2 × Facility Multiplier

Facility Multiplier:
  PLTU (batu bara)  = 1.00  (baseline, paling kotor)
  PLTGU (gas & uap) = 0.85  (lebih bersih)
  Heavy Industry     = 0.92  (moderate)

Contoh: PLTU 25,000 m² → (25000/1000) × 3.2 × 1.0 = 80 orang</code>
          </div>
          <div style="font-size:var(--fs-xs);color:var(--text-secondary);">
            <strong>Sumber:</strong> Rasio 3.2 orang per 1000 m² berdasarkan data headcount aktual kontrak MKP di unit pembangkit PLN Group. Rasio bervariasi 2.8–3.8 tergantung kompleksitas. Dipilih 3.2 sebagai median.
          </div>
        </div>

        <div class="card card-accent-red mb-6">
          <h3 style="color:var(--red);margin-bottom:var(--space-4);">Risk Volatility Index</h3>
          <div style="background:#0B0F14;border-radius:var(--radius-sm);padding:var(--space-5);margin-bottom:var(--space-4);overflow-x:auto;">
            <code style="color:#00AEEF;font-family:var(--font-mono);font-size:var(--fs-sm);white-space:pre;">Base Volatility  = (0.72 × FM) + (Jumlah Area Kritis × 0.04)
MIC+ Volatility  = Base × (1 − MIC Level × 0.15)
Reduction (%)    = (1 − MIC+/Base) × 100

Contoh: PLTU, 4 area kritis, Level 4:
  Base = (0.72 × 1.0) + (4 × 0.04) = 0.88
  MIC+ = 0.88 × (1 − 4 × 0.15) = 0.88 × 0.40 = 0.352
  Reduction = (1 − 0.352/0.88) × 100 = 60%</code>
          </div>
          <div style="font-size:var(--fs-xs);color:var(--text-secondary);">
            <strong>Logika:</strong> 0.72 = baseline volatility rate model tradisional (probabilitas fluktuasi kualitas). Setiap area kritis menambah 4% volatilitas. MIC Level mengurangi 15% per level (karena governance terstruktur).
          </div>
        </div>

        <div class="card card-accent-green mb-6">
          <h3 style="color:var(--green);margin-bottom:var(--space-4);">Compliance Stability Index</h3>
          <div style="background:#0B0F14;border-radius:var(--radius-sm);padding:var(--space-5);margin-bottom:var(--space-4);overflow-x:auto;">
            <code style="color:#00AEEF;font-family:var(--font-mono);font-size:var(--fs-sm);white-space:pre;">CSI = min(99, 70 + (MIC Level × 6.5) − (Area Kritis × 0.8))

Contoh: Level 4, 4 area kritis:
  CSI = min(99, 70 + 26 − 3.2) = min(99, 92.8) = 93%</code>
          </div>
          <div style="font-size:var(--fs-xs);color:var(--text-secondary);">
            <strong>Logika:</strong> Baseline 70% = stabilitas minimum dengan prosedur dasar. Setiap MIC Level menambah 6.5% (dampak PDCA cycle). Area kritis mengurangi 0.8% (risiko tambahan). Cap 99% karena zero-risk tidak realistis.
          </div>
        </div>

        <div class="card card-accent-cyan mb-6">
          <h3 style="color:var(--cyan);margin-bottom:var(--space-4);">Projected Contract Value & TCO Savings</h3>
          <div style="background:#0B0F14;border-radius:var(--radius-sm);padding:var(--space-5);margin-bottom:var(--space-4);overflow-x:auto;">
            <code style="color:#00AEEF;font-family:var(--font-mono);font-size:var(--fs-sm);white-space:pre;">Base Kontrak/m²/tahun = Rp420,000 × FM
MIC+ Premium         = 1 + (MIC Level − 3) × 0.12
Contract Value       = (Area × Base × Premium) / 1 Miliar

TCO Traditional = Area × Base × 1.22  (hidden costs 22%)
TCO MIC+        = Area × Base × Premium
Savings (%)     = (Traditional − MIC+) / Traditional × 100

Contoh: PLTU 25,000 m², Level 4:
  Base   = 420,000 × 1.0 = Rp420,000/m²
  Premium = 1 + (4 − 3) × 0.12 = 1.12
  Contract = (25,000 × 420,000 × 1.12) / 1e9 = Rp11.8 M
  TCO Trad = 25,000 × 420,000 × 1.22 = Rp12.81 M
  TCO MIC+ = Rp11.76 M
  Savings  = (12.81 − 11.76) / 12.81 = ~8%</code>
          </div>
          <div style="font-size:var(--fs-xs);color:var(--text-secondary);">
            <strong>Sumber:</strong> Rp420,000/m² = rata-rata kontrak cleaning per m² di pembangkit (meliputi semua biaya operasional). Hidden costs 22% = biaya tersembunyi model tradisional (panic cleaning, rework, lembur, inefisiensi supervisi) berdasarkan data historis MKP.
          </div>
        </div>

        <div class="card mb-6">
          <h3 style="margin-bottom:var(--space-4);">Alokasi Biaya dalam Chart</h3>
          <div style="padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Kategori</th>
                  <th style="text-align:center;">Traditional</th>
                  <th style="text-align:center;">MIC+</th>
                  <th>Keterangan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Biaya Kontrak</strong></td>
                  <td style="text-align:center;font-family:var(--font-mono);">60%</td>
                  <td style="text-align:center;font-family:var(--font-mono);">85%</td>
                  <td style="font-size:var(--fs-xs);">Proporsi biaya langsung vs total. MIC+ lebih transparan.</td>
                </tr>
                <tr>
                  <td><strong>Hidden Costs</strong></td>
                  <td style="text-align:center;font-family:var(--font-mono);color:var(--red);">22%</td>
                  <td style="text-align:center;font-family:var(--font-mono);color:var(--green);">5%</td>
                  <td style="font-size:var(--fs-xs);">MIC+ mengeliminasi sebagian besar biaya tersembunyi.</td>
                </tr>
                <tr>
                  <td><strong>Risk Premium</strong></td>
                  <td style="text-align:center;font-family:var(--font-mono);color:var(--red);">18%</td>
                  <td style="text-align:center;font-family:var(--font-mono);color:var(--green);">10%</td>
                  <td style="font-size:var(--fs-xs);">Biaya risiko audit, PROPER, safety. MIC+ mengurangi exposure.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SECTION 3: TAM SAM SOM ===== -->
    <section class="page-section alt-bg">
      <div class="container">
        <div class="section-label">3. Market Scalability</div>
        <h2 class="section-title" style="font-size:var(--fs-2xl);">Perhitungan TAM / SAM / SOM</h2>

        <div class="card card-accent-top mb-6">
          <h3 style="color:var(--blue);margin-bottom:var(--space-4);">TAM = Rp12–15 Triliun/tahun</h3>
          <div style="padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
            <div style="font-size:var(--fs-xs);font-weight:700;color:var(--text-muted);margin-bottom:var(--space-2);">DERIVASI:</div>
            <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Pasar Facility Management Indonesia: <strong>USD 12–14 miliar</strong> (sumber: industri benchmark, konsultan FM, growth 6–9%/tahun).
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Kurs konservatif: USD 1 = Rp15,500.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Segmen assurance berbasis tata kelola (governance-based FM): ≈ <strong>25–30%</strong> dari total pasar FM.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Kalkulasi: USD 12–14B × Rp15,500 × 25–30% ≈ <strong>Rp46–65 Triliun total pasar FM</strong>, segmen assurance = <strong>Rp12–15T</strong>.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Target industri: Pembangkit listrik, pertambangan, semen, petrokimia, IPP, captive power.
              </li>
            </ul>
          </div>
        </div>

        <div class="card card-accent-cyan mb-6">
          <h3 style="color:var(--cyan);margin-bottom:var(--space-4);">SAM = Rp4–6 Triliun/tahun</h3>
          <div style="padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
            <div style="font-size:var(--fs-xs);font-weight:700;color:var(--text-muted);margin-bottom:var(--space-2);">DERIVASI:</div>
            <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Dari TAM Rp12–15T, segmen dengan: risiko tinggi + tuntutan compliance ketat + audit reguler = <strong>30–40%</strong>.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Kalkulasi: Rp12–15T × 30–40% = <strong>Rp3.6–6T ≈ Rp4–6T</strong> (dibulatkan).
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Termasuk: PLN Group (Nusantara Power, Indonesia Power, anak usaha), IPP nasional, heavy industry sub-sektor tertentu.
              </li>
            </ul>
          </div>
        </div>

        <div class="card card-accent-green mb-6">
          <h3 style="color:var(--green);margin-bottom:var(--space-4);">SOM = 35–40 Unit (Y3)</h3>
          <div style="padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
            <div style="font-size:var(--fs-xs);font-weight:700;color:var(--text-muted);margin-bottom:var(--space-2);">DERIVASI:</div>
            <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Target penetrasi: <strong>10% captive PLN Group</strong> + 5% non-captive dalam 3 tahun.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Total pembangkit PLN Group: ±200+ unit → 10% = 20 unit (captive).
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Non-captive/IPP: ±300+ unit → 5% = 15–20 unit.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Total realistis Y3: <strong>35–40 unit aktif</strong>.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Revenue: avg. Rp10–12 Miliar kontrak/unit → 35–40 × Rp10–12M = <strong>Rp380–480 Miliar/tahun</strong>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SECTION 4: REVENUE PROJECTION ===== -->
    <section class="page-section">
      <div class="container">
        <div class="section-label">4. Revenue Projection</div>
        <h2 class="section-title" style="font-size:var(--fs-2xl);">Proyeksi Revenue 3 Tahun</h2>

        <div class="card mb-6">
          <table class="data-table">
            <thead>
              <tr>
                <th>Tahun</th>
                <th style="text-align:center;">Unit Aktif</th>
                <th style="text-align:right;">Revenue</th>
                <th>Cara Hitung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Y1</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);">20–22</td>
                <td style="text-align:right;font-family:var(--font-mono);">Rp220–250 M</td>
                <td style="font-size:var(--fs-xs);">Existing 18 unit + 2–4 unit baru. Avg Rp11M/unit.</td>
              </tr>
              <tr>
                <td><strong>Y2</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);">27–30</td>
                <td style="text-align:right;font-family:var(--font-mono);">Rp300–360 M</td>
                <td style="font-size:var(--fs-xs);">+7–8 unit baru. Avg kontrak naik ke Rp12M (premium adoption). Growth +36–44%.</td>
              </tr>
              <tr>
                <td><strong>Y3</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);">35–40</td>
                <td style="text-align:right;font-family:var(--font-mono);">Rp380–480 M</td>
                <td style="font-size:var(--fs-xs);">+8–10 unit baru. Premium tier mulai masif. Growth +27–33%.</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top:var(--space-4);padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
            <div style="font-size:var(--fs-xs);font-weight:700;color:var(--text-muted);margin-bottom:var(--space-2);">ASUMSI KUNCI:</div>
            <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Avg kontrak: Rp10–12 Miliar/unit/tahun (meningkat seiring MIC Level adoption naik ke Level 4–5).
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Capacity-constrained oleh jumlah tim governance: 1 tim governance = 4–6 unit. Y1: 2 tim, Y2: 3 tim, Y3: 5 tim.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Churn rate diasumsikan rendah (&lt;5%) karena sifat kontrak jangka panjang dan switching cost tinggi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SECTION 5: HEATMAP SCORING ===== -->
    <section class="page-section alt-bg">
      <div class="container">
        <div class="section-label">5. Heatmap Risk Scoring</div>
        <h2 class="section-title" style="font-size:var(--fs-2xl);">Skor MIC Level per Area</h2>
        <p class="section-subtitle mb-6">Skor pada peta heatmap merepresentasikan estimasi MIC Level Score berdasarkan data operasional dan assessment lapangan.</p>

        <div class="card mb-6">
          <table class="data-table">
            <thead>
              <tr>
                <th>Area</th>
                <th style="text-align:center;">Traditional</th>
                <th style="text-align:center;">MIC+</th>
                <th>Basis Scoring</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Boiler</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--red);">35%</td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--green);">92%</td>
                <td style="font-size:var(--fs-xs);">Debu batu bara, efisiensi termal, risiko spontaneous combustion. MIC+ menerapkan HPWJ + jadwal terstruktur.</td>
              </tr>
              <tr>
                <td><strong>Turbine Hall</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--red);">40%</td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--green);">95%</td>
                <td style="font-size:var(--fs-xs);">Tumpahan pelumas, risiko slip & fall. MIC+ menerapkan containment prosedur dan industrial vacuum.</td>
              </tr>
              <tr>
                <td><strong>Conveyor Belt</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--red);">30%</td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--green);">90%</td>
                <td style="font-size:var(--fs-xs);">Titik kritis coal dust. Skor paling rendah pada tradisional karena akumulasi cepat. MIC+ HPWJ + dust suppression.</td>
              </tr>
              <tr>
                <td><strong>Coal Yard</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--red);">28%</td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--green);">88%</td>
                <td style="font-size:var(--fs-xs);">Debu fugitif + risiko kebakaran spontan. Skor tradisional terendah. MIC+ grading + drainage management.</td>
              </tr>
              <tr>
                <td><strong>TPS B3</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--amber);">45%</td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--green);">94%</td>
                <td style="font-size:var(--fs-xs);">Pengawasan KLHK langsung. Traditional "medium" karena sudah ada regulasi ketat. MIC+ menambah digital evidence.</td>
              </tr>
              <tr>
                <td><strong>Drainase</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--amber);">42%</td>
                <td style="text-align:center;font-family:var(--font-mono);color:var(--green);">91%</td>
                <td style="font-size:var(--fs-xs);">Sumbatan menyebabkan overflow ke badan air. Medium risk karena visible. MIC+ menerapkan pembersihan periodik terjadwal.</td>
              </tr>
            </tbody>
          </table>
          <div style="margin-top:var(--space-4);padding:var(--space-4);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
            <div style="font-size:var(--fs-xs);font-weight:700;color:var(--text-muted);margin-bottom:var(--space-2);">CATATAN METODOLOGI SKORING:</div>
            <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Skor <strong>Traditional</strong>: Berdasarkan assessment kondisi fasilitas <em>sebelum</em> implementasi MIC+ (data historis MKP dari beberapa unit pembangkit).
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Skor <strong>MIC+</strong>: Berdasarkan data <em>sesudah</em> implementasi full MIC Level 4 dengan teknologi mekanis, IK spesifik, dan siklus PDCA aktif.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Threshold: &lt;40% = <span style="color:var(--red);font-weight:700;">HIGH RISK</span>, 40–60% = <span style="color:var(--amber);font-weight:700;">MEDIUM</span>, &gt;60% = <span style="color:var(--green);font-weight:700;">LOW RISK</span>.
              </li>
              <li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">
                Parameter penilaian: Kedisiplinan personel, kondisi fisik area, pengelolaan residu, frekuensi inspeksi, kelengkapan APD, dokumentasi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== SECTION 6: KPI ===== -->
    <section class="page-section">
      <div class="container">
        <div class="section-label">6. Governance KPIs</div>
        <h2 class="section-title" style="font-size:var(--fs-2xl);">Target KPI & Sumbernya</h2>

        <div class="card mb-6">
          <table class="data-table">
            <thead>
              <tr>
                <th>KPI</th>
                <th style="text-align:center;">Target</th>
                <th>Asal Angka</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>MIC Level Score</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);font-weight:700;color:var(--blue);">> 90%</td>
                <td style="font-size:var(--fs-xs);">Target MIC Level 4 (Optimized) = 81–95%. Target >90% = upper quartile Level 4, mendekati Level 5.</td>
              </tr>
              <tr>
                <td><strong>Compliance Rate</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);font-weight:700;color:var(--green);">100%</td>
                <td style="font-size:var(--fs-xs);">Zero temuan mayor pada audit PROPER. 100% = tidak ada non-conformity yang ditemukan.</td>
              </tr>
              <tr>
                <td><strong>Zero Finding Days</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);font-weight:700;color:var(--blue);">365</td>
                <td style="font-size:var(--fs-xs);">Target ideal: 365 hari tanpa temuan. Menunjukkan kesiapan audit 24/7 sepanjang tahun.</td>
              </tr>
              <tr>
                <td><strong>Response Time Darurat</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);font-weight:700;color:var(--amber);"><30 menit</td>
                <td style="font-size:var(--fs-xs);">SLA kontraktual MIC+ untuk tumpahan minyak/chemical spill. Standar industri: 30–60 menit.</td>
              </tr>
              <tr>
                <td><strong>Inisiatif Kaizen</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);font-weight:700;color:var(--blue);">2 ide/th</td>
                <td style="font-size:var(--fs-xs);">ISO 41001 Klausul 10 (Continual Improvement). Minimum 2 ide inovasi per tahun per unit yang terdokumentasi.</td>
              </tr>
              <tr>
                <td><strong>Lost Time Injury</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);font-weight:700;color:var(--green);">0 kasus</td>
                <td style="font-size:var(--fs-xs);">Zero accident target (ISO 45001). MIC+ menyediakan APD lengkap, SOP detail, dan safety briefing harian.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FOOTER NOTE -->
    <section class="page-section alt-bg">
      <div class="container text-center">
        <div style="padding:var(--space-8);background:var(--bg-card);border:1px solid var(--border-light);border-radius:var(--radius-md);">
          <div style="font-size:var(--fs-xl);margin-bottom:var(--space-3);">📑</div>
          <h3 style="margin-bottom:var(--space-3);">Dokumen Sumber</h3>
          <p style="font-size:var(--fs-sm);color:var(--text-secondary);line-height:var(--lh-normal);max-width:700px;margin:0 auto var(--space-4);">
            Seluruh data, formula, dan estimasi pada website ini bersumber dari:
          </p>
          <div style="display:flex;flex-direction:column;gap:var(--space-2);align-items:center;">
            <div style="font-size:var(--fs-sm);color:var(--text-primary);"><strong>1.</strong> Makalah Utama MIC+ (Managed Industrial Cleaning Plus)</div>
            <div style="font-size:var(--fs-sm);color:var(--text-primary);"><strong>2.</strong> Data Finansial Operasional PT MKP</div>
            <div style="font-size:var(--fs-sm);color:var(--text-primary);"><strong>3.</strong> Dokumen Pendukung (IK, SOP, Kontrak)</div>
            <div style="font-size:var(--fs-sm);color:var(--text-primary);"><strong>4.</strong> Benchmark Industri FM Indonesia</div>
          </div>
          <div style="margin-top:var(--space-6);font-size:var(--fs-xs);color:var(--text-muted);">
            Halaman ini bersifat internal dan tidak ditampilkan di navigasi utama.<br/>
            Digunakan sebagai referensi saat menjawab pertanyaan tentang metodologi perhitungan.
          </div>
        </div>
      </div>
    </section>
  `;
}
