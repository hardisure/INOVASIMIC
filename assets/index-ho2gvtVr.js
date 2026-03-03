(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))g(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&g(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function g(n){if(n.ep)return;n.ep=!0;const l=e(n);fetch(n.href,l)}})();function F(i){i.innerHTML=`
    <!-- HERO -->
    <section class="hero" style="position:relative;background:var(--bg-dark);overflow:hidden;">
      <!-- Industrial background image -->
      <div style="position:absolute;inset:0;z-index:0;">
        <img src="/assets/hero-industrial.png" alt="" style="width:100%;height:100%;object-fit:cover;opacity:0.35;" />
      </div>
      <!-- Blue overlay + grid -->
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,87,184,0.7) 0%,rgba(11,15,20,0.85) 100%);z-index:1;"></div>
      <div style="position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(255,255,255,0.04) 79px,rgba(255,255,255,0.04) 80px),repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(255,255,255,0.04) 79px,rgba(255,255,255,0.04) 80px);z-index:2;"></div>
      <div class="hero-content" style="position:relative;z-index:3;">
        <div class="hero-badge" style="background:rgba(0,174,239,0.2);color:#00AEEF;border:1px solid rgba(0,174,239,0.3);">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          MKP Managed Industrial Cleaning Plus
        </div>
        <h1 style="color:white;">From Industrial Cleaning<br/>to <span style="color:#00AEEF;">Facility Risk Control Architecture</span></h1>
        <p class="hero-sub" style="color:rgba(244,246,249,0.85);"><strong style="color:white;">Always Audit Ready. Always Risk Controlled.</strong><br/>
          Transformasi model bisnis industrial cleaning menjadi produk Facility Readiness Assurance berbasis tata kelola risiko, ISO 41001, ISO 31000, dan PROPER.
        </p>
        <div class="hero-actions">
          <a href="#/risk-model" class="btn btn-lg" style="background:#00AEEF;color:var(--bg-dark);border:2px solid #00AEEF;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Explore the Risk Model
          </a>
          <a href="#/simulation" class="btn btn-outline btn-lg" style="border-color:rgba(255,255,255,0.4);color:white;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
            Run Simulation
          </a>
        </div>
      </div>
    </section>

    <!-- THE HIDDEN RISK -->
    <section class="page-section">
      <div class="container">
        <div class="section-label">The Hidden Risk</div>
        <h2 class="section-title">Jebakan Komoditisasi: Manpower Model vs MIC+</h2>
        <p class="section-subtitle mb-8">Model tradisional menyembunyikan risiko tersembunyi yang jauh melampaui biaya layanan kebersihan itu sendiri. MIC+ mentransformasi paradigma dari menjual tenaga kerja menjadi menjual jaminan kondisi fasilitas.</p>
        <div class="comparison-row">
          <div class="comparison-card traditional">
            <div class="badge badge-red mb-4">HIGH RISK</div>
            <h3>⚠ Traditional Manpower Model</h3>
            <ul class="comparison-list">
              <li>Kontrak berbasis headcount & tarif upah minimum</li>
              <li>Tidak ada korelasi pembayaran dengan kualitas hasil</li>
              <li>Panic cleaning menjelang audit</li>
              <li>Variabilitas kualitas — memicu rework</li>
              <li>Risiko kebakaran dari akumulasi debu batu bara</li>
              <li>Supervisor klien harus mengawasi 15–20% waktunya</li>
              <li>Turnover staf tinggi, registrasi & induction berulang</li>
              <li>Satu insiden PROPER Merah menghapus penghematan bertahun-tahun</li>
            </ul>
          </div>
          <div class="comparison-card micplus">
            <div class="badge badge-green mb-4">RISK CONTROLLED</div>
            <h3>✓ MIC+ Facility Readiness Assurance</h3>
            <ul class="comparison-list">
              <li>Outcome-Based Contract — bayar jaminan kondisi, bukan headcount</li>
              <li>Skor MIC Level sebagai "mata uang" baru pengganti absensi harian</li>
              <li>Kesiapan audit 24/7 — digital evidence selalu tersedia</li>
              <li>Stabilitas kualitas melalui siklus PDCA <span style="color:var(--text-muted);">(Plan-Do-Check-Act)</span> terstruktur</li>
              <li>Pengendalian risiko kebakaran area konveyor & crusher</li>
              <li>Fungsi supervisi sepenuhnya oleh MKP (zero overhead klien)</li>
              <li>Manajemen SDM lebih baik — stabilitas layanan</li>
              <li>Lindung nilai (hedging) terhadap risiko audit & sanksi regulasi</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- RISK HEATMAP TEASER -->
    <section class="page-section alt-bg">
      <div class="container text-center">
        <div class="section-label" style="justify-content:center;">Interactive Risk Heatmap</div>
        <h2 class="section-title">Visualisasi Risiko Fasilitas Industri</h2>
        <p class="section-subtitle" style="margin:0 auto var(--space-8);">Eksplorasi peta risiko interaktif: bandingkan Traditional Model vs MIC+ secara langsung pada layout PLTU generik.</p>
        <div style="background:var(--bg-white);border:2px solid var(--border);border-radius:var(--radius-md);padding:var(--space-10);margin-bottom:var(--space-8);position:relative;overflow:hidden;">
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:var(--space-4);">
            ${["Boiler Area","Turbine Hall","Conveyor Belt","Coal Yard","TPS B3","Drainase"].map((a,e)=>`
              <div style="padding:var(--space-6);border-radius:var(--radius-sm);border:2px solid ${e<4?"var(--red)":"var(--amber)"};background:${e<4?"rgba(214,40,40,0.12)":"rgba(247,127,0,0.12)"};text-align:center;">
                <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${e<4?"var(--red)":"var(--amber)"};">${a}</div>
                <div style="font-family:var(--font-mono);font-size:var(--fs-lg);font-weight:800;color:${e<4?"var(--red)":"var(--amber)"};">${e<4?"HIGH":"MEDIUM"}</div>
              </div>
            `).join("")}
          </div>
          <div style="position:absolute;inset:0;background:linear-gradient(to bottom,transparent 50%,var(--bg-white));display:flex;align-items:flex-end;justify-content:center;padding-bottom:var(--space-6);">
            <a href="#/heatmap" class="btn btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              Open Interactive Heatmap
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- KPI SNAPSHOT -->
    <section class="page-section">
      <div class="container">
        <div class="section-label">KPI Snapshot</div>
        <h2 class="section-title">Governance Performance Indicators</h2>
        <p class="section-subtitle mb-8">Key metrics yang dihasilkan oleh arsitektur MIC+ — terukur, terdokumentasi, dan tervalidasi melalui sistem pengukuran maturitas.</p>
        <div class="grid-4">
          <div class="metric-card metric-blue card-accent-top">
            <div class="metric-value">> 90%</div>
            <div class="metric-label">MIC Level Score</div>
            <div style="margin-top:var(--space-3);">
              <div class="progress-bar"><div class="progress-fill blue" style="width:92%;"></div></div>
            </div>
          </div>
          <div class="metric-card metric-green card-accent-green">
            <div class="metric-value">100%</div>
            <div class="metric-label">Compliance Rate</div>
            <div style="margin-top:var(--space-3);">
              <div class="progress-bar"><div class="progress-fill green" style="width:100%;"></div></div>
            </div>
          </div>
          <div class="metric-card metric-cyan card-accent-cyan">
            <div class="metric-value">365</div>
            <div class="metric-label">Zero Finding Days</div>
            <div style="margin-top:var(--space-3);">
              <div class="progress-bar"><div class="progress-fill blue" style="width:100%;"></div></div>
            </div>
          </div>
          <div class="metric-card metric-amber card-accent-amber">
            <div class="metric-value">PDCA</div>
            <div class="metric-label">Governance Loop<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Plan-Do-Check-Act)</span></div>
            <div style="margin-top:var(--space-3);font-size:var(--fs-xs);color:var(--text-muted);">Assessment → Scoring → Action → Reassessment</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-banner">
      <h2>Simulate Your Risk Reduction</h2>
      <p>Hitung potensi penghematan biaya risiko dan peningkatan compliance stability dengan model MIC+.</p>
      <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
        <a href="#/simulation" class="btn btn-outline btn-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
          Launch Live Simulation
        </a>
        <a href="#/financial" class="btn btn-outline btn-lg">Financial Impact →</a>
      </div>
    </section>
  `}function $(i){i.innerHTML=`
    <section class="page-section">
      <div class="container">
        <div class="section-label">Risk Model</div>
        <h2 class="section-title">Konsep Illusory Control & Risk Exposure</h2>
        <p class="section-subtitle mb-8">Dalam model manpower supply tradisional, klien merasa memiliki kontrol atas kebersihan karena membayar tenaga kerja. Ini adalah ilusi — yang sebenarnya terjadi adalah transfer risiko operasional ke pihak yang tidak memiliki sistem pengendalian.</p>

        <div class="grid-2 mb-8">
          <div class="card card-accent-red">
            <h3 style="color:var(--red);margin-bottom:var(--space-4);">⚠ Illusory Control — Model Tradisional</h3>
            <p style="font-size:var(--fs-sm);color:var(--text-secondary);margin-bottom:var(--space-4);">Klien menentukan input: "sediakan 20 orang". Risiko produktivitas sepenuhnya berada di tangan klien. Jika 20 orang bekerja lambat, fasilitas tetap kotor.</p>
            <ul style="display:flex;flex-direction:column;gap:var(--space-3);">
              <li style="display:flex;align-items:center;gap:var(--space-2);font-size:var(--fs-sm);">
                <span class="badge badge-red">RISK</span> Tidak ada korelasi pembayaran — kualitas
              </li>
              <li style="display:flex;align-items:center;gap:var(--space-2);font-size:var(--fs-sm);">
                <span class="badge badge-red">RISK</span> Panic cleaning menjelang audit
              </li>
              <li style="display:flex;align-items:center;gap:var(--space-2);font-size:var(--fs-sm);">
                <span class="badge badge-red">RISK</span> Variabilitas kualitas memicu rework
              </li>
              <li style="display:flex;align-items:center;gap:var(--space-2);font-size:var(--fs-sm);">
                <span class="badge badge-red">RISK</span> Management overhead 15-20% waktu supervisor
              </li>
            </ul>
          </div>
          <div class="card card-accent-green">
            <h3 style="color:var(--green);margin-bottom:var(--space-4);">✓ Real Control — MIC+ Model</h3>
            <p style="font-size:var(--fs-sm);color:var(--text-secondary);margin-bottom:var(--space-4);">Klien menentukan hasil: "pertahankan skor kebersihan area turbin minimal 95%". Risiko pencapaian hasil berpindah ke MKP melalui Outcome-Based Contract.</p>
            <ul style="display:flex;flex-direction:column;gap:var(--space-3);">
              <li style="display:flex;align-items:center;gap:var(--space-2);font-size:var(--fs-sm);">
                <span class="badge badge-green">CTRL</span> Pembayaran terikat pada skor MIC Level
              </li>
              <li style="display:flex;align-items:center;gap:var(--space-2);font-size:var(--fs-sm);">
                <span class="badge badge-green">CTRL</span> Kesiapan audit 24/7 via digital evidence
              </li>
              <li style="display:flex;align-items:center;gap:var(--space-2);font-size:var(--fs-sm);">
                <span class="badge badge-green">CTRL</span> Stabilitas kualitas melalui siklus PDCA <span style="color:var(--text-muted);">(Plan-Do-Check-Act)</span>
              </li>
              <li style="display:flex;align-items:center;gap:var(--space-2);font-size:var(--fs-sm);">
                <span class="badge badge-green">CTRL</span> Zero management overhead untuk klien
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Risk Exposure Model -->
    <section class="page-section alt-bg">
      <div class="container">
        <div class="section-label">Risk Exposure Model</div>
        <h2 class="section-title">Empat Dimensi Risiko Fasilitas Industri</h2>
        <p class="section-subtitle mb-8">Di PLTU, "bersih" memiliki implikasi teknis dan keselamatan yang serius. MIC+ mengendalikan seluruh dimensi risiko fasilitas.</p>

        <div class="grid-2 gap-8">
          ${[{title:"Risiko Operasional",icon:"⚡",color:"red",desc:"Debu batu bara di area conveyor & crusher — mencegah spontaneous combustion dan kerusakan bearing mesin.",badge:"CRITICAL"},{title:"Risiko Lingkungan",icon:"🌍",color:"amber",desc:"Saluran drainase bebas sumbatan & ceceran minyak — mencegah pelanggaran baku mutu air limbah (PROPER) dan pencemaran tanah.",badge:"HIGH"},{title:"Risiko K3 (Safety)",icon:"🛡",color:"amber",desc:"Area kerja bebas tumpahan pelumas dan hambatan jalur evakuasi — mencegah kecelakaan kerja dan menjamin akses tanggap darurat.",badge:"HIGH"},{title:"Risiko Audit & Hukum",icon:"📋",color:"red",desc:"Bukti pelaksanaan pembersihan terdokumentasi dan tertelusur — menjamin kelulusan audit eksternal (ISO, SMK3, KLHK) tanpa temuan mayor.",badge:"CRITICAL"}].map(a=>`
            <div class="card card-accent-${a.color}">
              <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-4);">
                <span style="font-size:var(--fs-2xl);">${a.icon}</span>
                <div>
                  <div class="badge badge-${a.color}" style="margin-bottom:var(--space-1);">${a.badge}</div>
                  <h3 style="font-size:var(--fs-lg);">${a.title}</h3>
                </div>
              </div>
              <p style="font-size:var(--fs-sm);color:var(--text-secondary);line-height:var(--lh-normal);">${a.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Risk Transfer Mechanism -->
    <section class="page-section">
      <div class="container">
        <div class="section-label">Risk Transfer Mechanism</div>
        <h2 class="section-title">Mekanisme Transfer Risiko</h2>
        <p class="section-subtitle mb-8">Dalam model MIC+, risiko pencapaian kualitas fasilitas berpindah dari klien ke MKP melalui Outcome-Based Contract. MKP memiliki insentif kuat untuk efisiensi dan inovasi.</p>

        <div style="background:var(--bg-card);border:2px solid var(--border);border-radius:var(--radius-md);padding:var(--space-8);margin-bottom:var(--space-8);">
          <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:var(--space-6);align-items:center;">
            <div style="text-align:center;">
              <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--red);margin-bottom:var(--space-3);">Demand Organization (Klien)</div>
              <div style="background:var(--red-light);border:2px solid var(--red);border-radius:var(--radius-md);padding:var(--space-6);">
                <div style="font-size:var(--fs-sm);font-weight:600;margin-bottom:var(--space-2);">Risiko yang Ditransfer:</div>
                <ul style="text-align:left;font-size:var(--fs-xs);display:flex;flex-direction:column;gap:var(--space-2);">
                  <li style="list-style:disc;margin-left:var(--space-4);">Risiko degradasi fasilitas</li>
                  <li style="list-style:disc;margin-left:var(--space-4);">Risiko temuan audit</li>
                  <li style="list-style:disc;margin-left:var(--space-4);">Risiko insiden keselamatan</li>
                  <li style="list-style:disc;margin-left:var(--space-4);">Management overhead</li>
                </ul>
              </div>
            </div>
            <div style="display:flex;flex-direction:column;align-items:center;gap:var(--space-2);">
              <div style="font-size:var(--fs-2xl);color:var(--blue);">→</div>
              <div style="font-size:var(--fs-xs);font-weight:700;color:var(--blue);text-transform:uppercase;letter-spacing:0.1em;text-align:center;">Outcome<br/>Based<br/>Contract</div>
              <div style="font-size:var(--fs-2xl);color:var(--blue);">→</div>
            </div>
            <div style="text-align:center;">
              <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--green);margin-bottom:var(--space-3);">MKP MIC+ (Provider)</div>
              <div style="background:var(--green-light);border:2px solid var(--green);border-radius:var(--radius-md);padding:var(--space-6);">
                <div style="font-size:var(--fs-sm);font-weight:600;margin-bottom:var(--space-2);">Pengendalian MKP:</div>
                <ul style="text-align:left;font-size:var(--fs-xs);display:flex;flex-direction:column;gap:var(--space-2);">
                  <li style="list-style:disc;margin-left:var(--space-4);">MIC Level Scoring System</li>
                  <li style="list-style:disc;margin-left:var(--space-4);">Digital Evidence & Audit Trail</li>
                  <li style="list-style:disc;margin-left:var(--space-4);">PDCA Governance Loop</li>
                  <li style="list-style:disc;margin-left:var(--space-4);">Full Operational Management</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ISO & PROPER Alignment -->
    <section class="page-section alt-bg">
      <div class="container">
        <div class="section-label">Standards Alignment</div>
        <h2 class="section-title">Alignment: ISO 41001 & PROPER</h2>
        <p class="section-subtitle mb-8">MIC+ dirancang untuk memenuhi persyaratan standar manajemen fasilitas global dan program penilaian lingkungan nasional.</p>

        <div class="grid-2 gap-8">
          <div class="card card-accent-top">
            <h3 style="margin-bottom:var(--space-4);color:var(--blue);">ISO 41001:2018 — Facility Management</h3>
            <table class="data-table">
              <tr><th>Klausul</th><th>Pemenuhan MIC+</th></tr>
              <tr><td><strong>8.1</strong> Pengendalian Operasional</td><td>MIC+ menyediakan pengendalian proses outsourcing yang terukur dan terdokumentasi</td></tr>
              <tr><td><strong>9.1</strong> Monitoring & Pengukuran</td><td>MIC Level Score sebagai indikator kinerja objektif yang tervalidasi</td></tr>
              <tr><td><strong>7.5</strong> Documented Information</td><td>Digital Evidence System menjamin traceability seluruh aktivitas</td></tr>
              <tr><td><strong>10</strong> Continual Improvement</td><td>Siklus PDCA dan inisiatif Kaizen terintegrasi dalam operasional</td></tr>
            </table>
          </div>
          <div class="card card-accent-green">
            <h3 style="margin-bottom:var(--space-4);color:var(--green);">PROPER — Penilaian Lingkungan</h3>
            <table class="data-table">
              <tr><th>Komponen</th><th>Peran MIC+</th></tr>
              <tr><td><strong>Tata Graha</strong></td><td>MIC+ menjamin pemenuhan kriteria Good Housekeeping — syarat mutlak PROPER Biru/Hijau/Emas</td></tr>
              <tr><td><strong>Pengelolaan Limbah</strong></td><td>Pengendalian ceceran minyak, debu, dan drainase sesuai baku mutu</td></tr>
              <tr><td><strong>Baku Mutu Air</strong></td><td>Drainase bebas sumbatan mencegah pelanggaran baku mutu air limbah</td></tr>
              <tr><td><strong>Debu Fugitif</strong></td><td>Pengendalian emisi debu batu bara di area operasional</td></tr>
            </table>
          </div>
        </div>
      </div>
    </section>

    <!-- Governance Loop -->
    <section class="page-section">
      <div class="container text-center">
        <div class="section-label" style="justify-content:center;">Governance Loop</div>
        <h2 class="section-title">Siklus PDCA Governance MIC+</h2>
        <p class="section-subtitle" style="margin:0 auto var(--space-10);">Siklus tertutup (closed-loop) yang menjamin perbaikan berkelanjutan di setiap unit operasi.</p>

        <div class="flow-diagram">
          <div class="flow-step" style="border-color:var(--blue);">
            <div class="flow-step-label" style="color:var(--blue);">Plan</div>
            <div class="flow-step-title">Risk & Facility<br/>Assessment</div>
            <div style="font-size:var(--fs-xs);color:var(--text-muted);">Baseline & Target</div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-step" style="border-color:var(--cyan);">
            <div class="flow-step-label" style="color:var(--cyan);">Do</div>
            <div class="flow-step-title">Standard-Based<br/>Execution</div>
            <div style="font-size:var(--fs-xs);color:var(--text-muted);">IK Spesifik per Area</div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-step" style="border-color:var(--amber);">
            <div class="flow-step-label" style="color:var(--amber);">Check</div>
            <div class="flow-step-title">MIC Level<br/>Scoring</div>
            <div style="font-size:var(--fs-xs);color:var(--text-muted);">Inspeksi Gabungan</div>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-step" style="border-color:var(--green);">
            <div class="flow-step-label" style="color:var(--green);">Act</div>
            <div class="flow-step-title">Digital Evidence<br/>& Improvement</div>
            <div style="font-size:var(--fs-xs);color:var(--text-muted);">Audit Ready 24/7</div>
          </div>
        </div>
        <div style="margin-top:var(--space-4);">
          <svg width="60" height="30" viewBox="0 0 60 30" style="margin:0 auto;">
            <path d="M55 5 Q30 30 5 5" fill="none" stroke="var(--blue)" stroke-width="2" stroke-dasharray="4 2"/>
            <polygon points="5,5 10,10 10,3" fill="var(--blue)"/>
          </svg>
          <div style="font-size:var(--fs-xs);font-weight:700;color:var(--blue);text-transform:uppercase;letter-spacing:0.1em;">Continuous Loop</div>
        </div>
      </div>
    </section>
  `}const A={boiler:{name:"Boiler Area",traditional:{risk:"high",score:35},micplus:{risk:"low",score:92},operational:"Akumulasi debu batu bara pada permukaan boiler dan ducting menyebabkan penurunan efisiensi termal dan risiko spontaneous combustion. Pembersihan ad-hoc meninggalkan residu yang mengganggu heat exchange.",environmental:"Emisi debu fugitif dari area boiler berkontribusi pada pencemaran udara ambien. Ceceran fly ash berpotensi mencemari soil dan water table.",iso:"ISO 41001 Klausul 8.1 — Pengendalian proses outsourcing. Pembersihan boiler wajib terdokumentasi sebagai bagian dari operational control.",micLevel:"Kedisiplinan personel, kondisi fisik area, pengelolaan residu, frekuensi inspeksi, kelengkapan APD (Alat Pelindung Diri).",proper:"Tata Graha (Good Housekeeping) — necessary condition PROPER Biru. Kebersihan area boiler merupakan indikator evaluasi audit lingkungan."},turbine:{name:"Turbine Hall",traditional:{risk:"high",score:40},micplus:{risk:"low",score:95},operational:"Tumpahan pelumas dan minyak di lantai turbine hall menyebabkan risiko slip & fall serta potensi kontaminasi pada komponen presisi turbin.",environmental:"Ceceran oli dan bahan kimia pembersih berpotensi mencemari drainase jika tidak dikelola dengan prosedur yang tepat.",iso:"ISO 41001 Klausul 9.1 — Monitoring, pengukuran, analisis, dan evaluasi. Skor kebersihan turbine hall terukur melalui MIC Level.",micLevel:"Kondisi lantai, pengelolaan tumpahan, kebersihan komponen, dokumentasi aktivitas, kelengkapan safety signage.",proper:"Pengelolaan limbah B3 — oli bekas dan chemical waste wajib dikelola sesuai PermenLH. Kebersihan turbine hall mendukung compliance."},conveyor:{name:"Conveyor Belt",traditional:{risk:"high",score:30},micplus:{risk:"low",score:90},operational:"Area conveyor batu bara merupakan titik kritis akumulasi debu yang memicu spontaneous combustion dan kerusakan bearing mesin. Kebersihan preventif adalah asset loss prevention.",environmental:"Coal dust spillage dari conveyor mencemari area sekitar dan berkontribusi pada pencemaran air permukaan melalui runoff.",iso:"ISO 41001 Klausul 8.1 — Area conveyor memerlukan instruksi kerja (IK) spesifik untuk jenis peralatan dan metode pembersihan.",micLevel:"Frekuensi pembersihan debu, kondisi spillage guard, fungsi dust suppression, kebersihan area transfer point.",proper:"Pengendalian debu fugitif — mandatory requirement dalam evaluasi PROPER. Kegagalan pengendalian debu berisiko PROPER Merah."},coalyard:{name:"Coal Yard",traditional:{risk:"high",score:28},micplus:{risk:"low",score:88},operational:"Coal yard merupakan sumber utama debu fugitif dan risiko kebakaran spontan. Pengelolaan housekeeping yang buruk menjadi faktor kontributor utama insiden.",environmental:"Runoff air hujan dari coal yard berpotensi membawa kontaminan ke badan air. Coal dust menjadi sumber polusi udara signifikan.",iso:"ISO 41001 Klausul 7.5 — Documented information. Seluruh aktivitas pengelolaan coal yard wajib terdokumentasi secara digital.",micLevel:"Kondisi grading area, pengendalian debu, kebersihan perimeter, pengelolaan drainage, response time pembersihan spillage.",proper:"Baku mutu air limbah dan pengendalian emisi — coal yard merupakan critical point dalam penilaian PROPER."},tpsb3:{name:"TPS B3",traditional:{risk:"medium",score:45},micplus:{risk:"low",score:94},operational:"Tempat Penyimpanan Sementara Limbah B3 memerlukan pengelolaan ketat. Kebocoran atau tumpahan dapat menyebabkan kontaminasi tanah dan air tanah.",environmental:"Area TPS B3 (Tempat Penyimpanan Sementara Bahan Berbahaya & Beracun) diawasi langsung oleh KLHK (Kementerian Lingkungan Hidup & Kehutanan). Ketidakpatuhan pengelolaan dapat mengakibatkan sanksi administratif hingga pidana.",iso:"ISO 41001 Klausul 8.1 — pengendalian operasional proses critical. ISO 14001 Klausul 8.1 — operational planning untuk aspek lingkungan signifikan.",micLevel:"Kelengkapan labeling, kondisi containment, kebersihan area, pengelolaan drainase sekunder, dokumentasi manifest.",proper:"Pengelolaan limbah B3 — salah satu indikator utama evaluasi PROPER. Pelanggaran berpotensi mendapat PROPER Hitam."},drainase:{name:"Drainase",traditional:{risk:"medium",score:42},micplus:{risk:"low",score:91},operational:"Sumbatan drainase menyebabkan genangan yang mengganggu operasional dan akses kendaraan. Genangan minyak menjadi fire hazard.",environmental:"Drainase tersumbat menyebabkan overflow air limbah ke badan air. Ceceran minyak di drainase merupakan pelanggaran baku mutu air limbah.",iso:"ISO 41001 Klausul 9.1 — monitoring berkala kondisi drainase sebagai indikator kinerja fasilitas. Skor kebersihan drainase terukur.",micLevel:"Kondisi saluran, tingkat sedimentasi, kebersihan oil trap, fungsi penampungan, frekuensi pembersihan periodik.",proper:"Baku mutu air limbah — kebersihan drainase merupakan necessary condition pencapaian PROPER Biru dan syarat menuju PROPER Hijau."}};function N(i){let a="traditional",e=null;function g(o,s){const r=A[o][s];return r.risk==="high"?{bg:"rgba(214,40,40,0.25)",border:"#D62828",text:"#D62828"}:r.risk==="medium"?{bg:"rgba(247,127,0,0.25)",border:"#F77F00",text:"#F77F00"}:{bg:"rgba(42,157,143,0.25)",border:"#2A9D8F",text:"#2A9D8F"}}function n(){if(!e)return'<div class="heatmap-panel"><h3>Select an Area</h3><p style="font-size:var(--fs-sm);color:var(--text-muted);">Klik pada area di peta untuk melihat detail risiko operasional, risiko lingkungan, klausul ISO terkait, parameter MIC Level, dan dampak PROPER.</p></div>';const o=A[e],s=o[a],r=s.risk==="high"?"red":s.risk==="medium"?"amber":"green";return`
      <div class="heatmap-panel">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-4);">
          <h3>${o.name}</h3>
          <span class="badge badge-${r}">${s.risk.toUpperCase()} RISK</span>
        </div>
        <div style="margin-bottom:var(--space-4);">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-2);">
            <span style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;">MIC Level Score</span>
            <span style="font-family:var(--font-mono);font-weight:800;color:var(--${r});">${s.score}%</span>
          </div>
          <div class="progress-bar"><div class="progress-fill ${r}" style="width:${s.score}%;"></div></div>
        </div>
        <div class="panel-section">
          <div class="panel-section-title">Risiko Operasional</div>
          <p>${o.operational}</p>
        </div>
        <div class="panel-section">
          <div class="panel-section-title">Risiko Lingkungan</div>
          <p>${o.environmental}</p>
        </div>
        <div class="panel-section">
          <div class="panel-section-title">Klausul ISO Terkait</div>
          <p>${o.iso}</p>
        </div>
        <div class="panel-section">
          <div class="panel-section-title">Parameter MIC Level</div>
          <p>${o.micLevel}</p>
        </div>
        <div class="panel-section">
          <div class="panel-section-title">Dampak PROPER</div>
          <p>${o.proper}</p>
        </div>
      </div>
    `}function l(){return[{id:"boiler",label:"BOILER",top:"5%",left:"5%",width:"42%",height:"40%"},{id:"turbine",label:"TURBINE HALL",top:"5%",left:"52%",width:"43%",height:"40%"},{id:"conveyor",label:"CONVEYOR",top:"50%",left:"5%",width:"28%",height:"22%"},{id:"coalyard",label:"COAL YARD",top:"50%",left:"37%",width:"28%",height:"22%"},{id:"tpsb3",label:"TPS B3",top:"50%",left:"69%",width:"26%",height:"22%"},{id:"drainase",label:"DRAINASE",top:"77%",left:"5%",width:"90%",height:"18%"}].map(s=>{const r=g(s.id,a);return`<div class="heatmap-zone ${e===s.id?"active":""}" id="zone-${s.id}" data-zone="${s.id}" style="top:${s.top};left:${s.left};width:${s.width};height:${s.height};background:${r.bg};border-color:${r.border};color:${r.text};">
        <div style="text-align:center;">
          <div style="font-size:var(--fs-xs);font-weight:800;margin-bottom:2px;">${s.label}</div>
          <div style="font-family:var(--font-mono);font-size:var(--fs-lg);font-weight:900;">${A[s.id][a].score}%</div>
        </div>
      </div>`}).join("")}function c(){i.innerHTML=`
      <section class="page-section">
        <div class="container">
          <div class="section-label">Interactive Risk Heatmap</div>
          <h2 class="section-title">Peta Risiko Fasilitas Industri</h2>
          <p class="section-subtitle mb-6">Klik area pada layout pembangkit untuk melihat detail risiko. Toggle model untuk perbandingan langsung.</p>

          <div style="margin-bottom:var(--space-6);display:flex;align-items:center;gap:var(--space-4);flex-wrap:wrap;">
            <div class="toggle-group" id="model-toggle">
              <button class="toggle-btn ${a==="traditional"?"active-red":""}" data-model="traditional">Traditional Model</button>
              <button class="toggle-btn ${a==="micplus"?"active-green":""}" data-model="micplus">MIC+ Model</button>
            </div>
            <div style="display:flex;gap:var(--space-4);font-size:var(--fs-xs);font-weight:600;">
              <span style="display:flex;align-items:center;gap:4px;"><span style="width:12px;height:12px;border-radius:2px;background:rgba(214,40,40,0.3);border:2px solid var(--red);"></span> High Risk</span>
              <span style="display:flex;align-items:center;gap:4px;"><span style="width:12px;height:12px;border-radius:2px;background:rgba(247,127,0,0.3);border:2px solid var(--amber);"></span> Medium</span>
              <span style="display:flex;align-items:center;gap:4px;"><span style="width:12px;height:12px;border-radius:2px;background:rgba(42,157,143,0.3);border:2px solid var(--green);"></span> Low Risk</span>
            </div>
          </div>

          <div class="heatmap-container">
            <div class="heatmap-plant" id="heatmap-plant">
              <!-- PLTU Schematic background -->
              <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;opacity:0.08;pointer-events:none;">
                <img src="/assets/pltu-schematic.png" alt="" style="width:90%;height:90%;object-fit:contain;" />
              </div>
              <!-- Grid background -->
              <div style="position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent,transparent 49px,var(--border-light) 49px,var(--border-light) 50px),repeating-linear-gradient(0deg,transparent,transparent 49px,var(--border-light) 49px,var(--border-light) 50px);opacity:0.5;"></div>
              <div style="position:absolute;top:var(--space-3);left:var(--space-3);font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);z-index:1;">PLTU Layout — Schematic View</div>
              ${l()}
            </div>
            <div id="heatmap-detail">${n()}</div>
          </div>
        </div>
      </section>
    `,i.querySelector("#model-toggle").addEventListener("click",o=>{const s=o.target.closest("[data-model]");s&&(a=s.dataset.model,c())}),i.querySelectorAll(".heatmap-zone").forEach(o=>{o.addEventListener("click",()=>{e=o.dataset.zone,c()})})}c()}function G(i){i.innerHTML=`
    <section class="page-section">
      <div class="container">
        <div class="section-label">Live Simulation</div>
        <h2 class="section-title">Risk & Cost Simulation Engine</h2>
        <p class="section-subtitle mb-8">Hitung potensi penghematan dan peningkatan compliance menggunakan model MIC+. Seluruh perhitungan didasarkan pada data operasional aktual.</p>

        <div style="display:grid;grid-template-columns:380px 1fr;gap:var(--space-8);">
          <!-- INPUT PANEL -->
          <div class="card card-accent-top">
            <h3 style="font-size:var(--fs-lg);margin-bottom:var(--space-6);color:var(--blue);">📊 Simulation Parameters</h3>
            <div style="display:flex;flex-direction:column;gap:var(--space-5);">
              <div class="form-group">
                <label class="form-label">Luas Area (m²)</label>
                <input type="number" class="form-input" id="sim-area" value="25000" min="5000" max="200000" step="1000" />
              </div>
              <div class="form-group">
                <label class="form-label">Jenis Fasilitas</label>
                <select class="form-select" id="sim-facility">
                  <option value="pltu">PLTU (Batu Bara)</option>
                  <option value="pltgu">PLTGU (Gas & Uap)</option>
                  <option value="heavy">Heavy Industry</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Target MIC Level</label>
                <select class="form-select" id="sim-mic">
                  <option value="3">Level 3 — Managed</option>
                  <option value="4" selected>Level 4 — Optimized</option>
                  <option value="5">Level 5 — Excellence</option>
                </select>
              </div>
              <div class="form-group">
                <label class="form-label">Jumlah Area Kritis</label>
                <input type="number" class="form-input" id="sim-critical" value="4" min="1" max="10" />
              </div>
              <button class="btn btn-primary" id="sim-run" style="width:100%;justify-content:center;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Run Simulation
              </button>
            </div>
          </div>

          <!-- OUTPUT PANEL -->
          <div>
            <!-- Comparison Header -->
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);margin-bottom:var(--space-4);">
              <div style="text-align:center;padding:var(--space-3);background:rgba(214,40,40,0.08);border:1px solid rgba(214,40,40,0.2);border-radius:var(--radius-sm);">
                <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--red);">⚠ Tanpa MIC+ (Tradisional)</div>
              </div>
              <div style="text-align:center;padding:var(--space-3);background:rgba(42,157,143,0.08);border:1px solid rgba(42,157,143,0.2);border-radius:var(--radius-sm);">
                <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--green);">✓ Dengan MIC+</div>
              </div>
            </div>

            <!-- Manpower Row — links to Architecture (MIC Level framework) -->
            <a href="#/architecture" class="sim-proof-row" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);margin-bottom:var(--space-4);text-decoration:none;color:inherit;cursor:pointer;border-radius:var(--radius-md);transition:transform 0.15s ease,box-shadow 0.15s ease;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
              <div class="metric-card" style="border-left:4px solid var(--red);background:rgba(214,40,40,0.03);">
                <div class="metric-value" id="out-manpower-trad" style="color:var(--red);">—</div>
                <div class="metric-label">Est. Manpower<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Tanpa efisiensi, lebih banyak orang)</span></div>
              </div>
              <div class="metric-card" style="border-left:4px solid var(--green);background:rgba(42,157,143,0.03);position:relative;">
                <div class="metric-value" id="out-manpower-mic" style="color:var(--green);">—</div>
                <div class="metric-label">Est. Manpower MIC+<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Lebih efisien dengan mekanisasi)</span></div>
                <div style="position:absolute;bottom:8px;right:12px;font-size:var(--fs-xs);color:var(--blue);font-weight:600;opacity:0.7;">Lihat Bukti →</div>
              </div>
            </a>

            <!-- Risk Volatility Row — links to Risk Model -->
            <a href="#/risk-model" class="sim-proof-row" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);margin-bottom:var(--space-4);text-decoration:none;color:inherit;cursor:pointer;border-radius:var(--radius-md);transition:transform 0.15s ease,box-shadow 0.15s ease;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
              <div class="metric-card" style="border-left:4px solid var(--red);background:rgba(214,40,40,0.03);">
                <div class="metric-value" id="out-vol-trad" style="color:var(--red);">—</div>
                <div class="metric-label">Risk Volatility<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Fluktuasi risiko tinggi)</span></div>
              </div>
              <div class="metric-card" style="border-left:4px solid var(--green);background:rgba(42,157,143,0.03);position:relative;">
                <div class="metric-value" id="out-vol-mic" style="color:var(--green);">—</div>
                <div class="metric-label">Risk Volatility MIC+<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Risiko terkontrol)</span></div>
                <div style="position:absolute;bottom:8px;right:12px;font-size:var(--fs-xs);color:var(--blue);font-weight:600;opacity:0.7;">Lihat Bukti →</div>
              </div>
            </a>

            <!-- Compliance Stability Row — links to ESG/Compliance -->
            <a href="#/compliance" class="sim-proof-row" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);margin-bottom:var(--space-4);text-decoration:none;color:inherit;cursor:pointer;border-radius:var(--radius-md);transition:transform 0.15s ease,box-shadow 0.15s ease;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
              <div class="metric-card" style="border-left:4px solid var(--red);background:rgba(214,40,40,0.03);">
                <div class="metric-value" id="out-comp-trad" style="color:var(--red);">—</div>
                <div class="metric-label">Compliance Stability<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Stabilitas kepatuhan rendah)</span></div>
              </div>
              <div class="metric-card" style="border-left:4px solid var(--green);background:rgba(42,157,143,0.03);position:relative;">
                <div class="metric-value" id="out-comp-mic" style="color:var(--green);">—</div>
                <div class="metric-label">Compliance Stability MIC+<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Kepatuhan terjamin)</span></div>
                <div style="position:absolute;bottom:8px;right:12px;font-size:var(--fs-xs);color:var(--blue);font-weight:600;opacity:0.7;">Lihat Bukti →</div>
              </div>
            </a>

            <!-- TCO Row — links to Financial Dashboard -->
            <a href="#/financial" class="sim-proof-row" style="display:grid;grid-template-columns:1fr 1fr;gap:var(--space-4);margin-bottom:var(--space-4);text-decoration:none;color:inherit;cursor:pointer;border-radius:var(--radius-md);transition:transform 0.15s ease,box-shadow 0.15s ease;" onmouseover="this.style.transform='translateY(-2px)';this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)'" onmouseout="this.style.transform='';this.style.boxShadow=''">
              <div class="metric-card" style="border-left:4px solid var(--red);background:rgba(214,40,40,0.03);">
                <div class="metric-value" id="out-tco-trad" style="color:var(--red);">—</div>
                <div class="metric-label">Total Cost of Ownership<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Termasuk biaya tersembunyi 22%)</span></div>
              </div>
              <div class="metric-card" style="border-left:4px solid var(--green);background:rgba(42,157,143,0.03);position:relative;">
                <div class="metric-value" id="out-tco-mic" style="color:var(--green);">—</div>
                <div class="metric-label">Total Cost MIC+<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Transparan, hidden cost minimal)</span></div>
                <div style="position:absolute;bottom:8px;right:12px;font-size:var(--fs-xs);color:var(--blue);font-weight:600;opacity:0.7;">Lihat Bukti →</div>
              </div>
            </a>

            <!-- Savings Summary -->
            <div style="background:linear-gradient(135deg,rgba(0,87,184,0.08),rgba(0,174,239,0.08));border:1px solid rgba(0,87,184,0.15);border-radius:var(--radius-md);padding:var(--space-5);margin-bottom:var(--space-6);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-4);">
              <div>
                <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--blue);margin-bottom:var(--space-1);">💰 TCO Savings</div>
                <div style="font-size:var(--fs-xs);color:var(--text-muted);">Penghematan Total Biaya Kepemilikan</div>
              </div>
              <div style="display:flex;align-items:center;gap:var(--space-4);">
                <div style="text-align:center;">
                  <div style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:var(--blue);" id="out-savings-pct">—</div>
                  <div style="font-size:var(--fs-xs);color:var(--text-muted);">Lebih Hemat</div>
                </div>
                <div style="text-align:center;">
                  <div style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:var(--green);" id="out-savings-rp">—</div>
                  <div style="font-size:var(--fs-xs);color:var(--text-muted);">Efisiensi/Tahun</div>
                </div>
              </div>
            </div>

            <!-- Chart -->
            <div class="chart-container">
              <h3 style="font-size:var(--fs-base);margin-bottom:var(--space-4);color:var(--text-secondary);">Total Risk Cost Comparison</h3>
              <canvas id="sim-chart" width="700" height="300"></canvas>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,i.querySelector("#sim-run").addEventListener("click",e),setTimeout(e,300);function e(){const n=parseInt(document.getElementById("sim-area").value)||25e3,l=document.getElementById("sim-facility").value,c=parseInt(document.getElementById("sim-mic").value)||4,o=parseInt(document.getElementById("sim-critical").value)||4,r={pltu:1,pltgu:.85,heavy:.92}[l]||1,t=3.2*r,y=Math.round(n/1e3*t),u=Math.round(y*(1-c*.06)),k=.72*r+o*.04,v=k*(1-c*.15),p=Math.round(45+o*1.2),x=Math.min(99,Math.round(70+c*6.5-o*.8)),f=42e4*r,b=1+(c-3)*.12,m=n*f*1.22,d=n*f*b,h=Math.round((m-d)/m*100),M=Math.round((m-d)/1e9*10)/10;document.getElementById("out-manpower-trad").textContent=y+" org",document.getElementById("out-vol-trad").textContent=Math.round(k*100)+"%",document.getElementById("out-comp-trad").textContent=p+"%",document.getElementById("out-tco-trad").textContent="Rp"+Math.round(m/1e9*10)/10+" M",document.getElementById("out-manpower-mic").textContent=u+" org",document.getElementById("out-vol-mic").textContent=Math.round(v*100)+"%",document.getElementById("out-comp-mic").textContent=x+"%",document.getElementById("out-tco-mic").textContent="Rp"+Math.round(d/1e9*10)/10+" M",document.getElementById("out-savings-pct").textContent=Math.abs(h)+"%",document.getElementById("out-savings-rp").textContent="Rp"+Math.abs(M)+" M",g(m,d)}function g(n,l,c,o,s){const r=document.getElementById("sim-chart");if(!r)return;const t=r.getContext("2d"),y=window.devicePixelRatio||1,u=r.getBoundingClientRect();r.width=u.width*y,r.height=300*y,t.scale(y,y);const k=u.width,v=300;t.clearRect(0,0,k,v);const p=80,x=40,f=30,b=60,m=k-p-x,d=v-f-b,h=["Biaya Kontrak","Hidden Costs","Risk Premium","Total TCO"],M=[n*.6,n*.22,n*.18,n],I=[l*.85,l*.05,l*.1,l],T=Math.max(...M,...I),j=m/h.length,C=j*.3,E=j*.1;t.strokeStyle="#E5E7EB",t.lineWidth=1;for(let P=0;P<=4;P++){const w=f+d/4*P;t.beginPath(),t.moveTo(p,w),t.lineTo(k-x,w),t.stroke(),t.fillStyle="#6B7280",t.font="11px Inter",t.textAlign="right";const S=T*(1-P/4)/1e9;t.fillText(S.toFixed(1)+"B",p-8,w+4)}h.forEach((P,w)=>{const S=p+w*j+E,K=M[w]/T*d,B=I[w]/T*d;t.fillStyle="#D62828",t.fillRect(S,f+d-K,C,K),t.fillStyle="#2A9D8F",t.fillRect(S+C+E*.5,f+d-B,C,B),t.fillStyle="#0B0F14",t.font="11px Inter",t.textAlign="center",t.fillText(P,S+C+E*.25,v-b+16)}),t.fillStyle="#D62828",t.fillRect(p,v-18,12,12),t.fillStyle="#0B0F14",t.font="12px Inter",t.textAlign="left",t.fillText("Traditional",p+18,v-8),t.fillStyle="#2A9D8F",t.fillRect(p+110,v-18,12,12),t.fillStyle="#0B0F14",t.fillText("MIC+",p+128,v-8)}}function U(i){i.innerHTML=`
    <!-- MIC Level Framework -->
    <section class="page-section">
      <div class="container">
        <div class="section-label">System Architecture</div>
        <h2 class="section-title">MIC Level Framework</h2>
        <p class="section-subtitle mb-8">Sistem pengukuran maturitas yang mengkuantifikasi tingkat kebersihan dan kesiapan fasilitas menjadi skor terukur — menggantikan laporan absensi harian.</p>

        <div style="display:flex;flex-direction:column;gap:var(--space-4);">
          ${[{level:1,name:"Initial",color:"#D62828",desc:"Tidak ada standar. Pembersihan reaktif dan ad-hoc. Tidak ada dokumentasi atau pengukuran.",score:"0–40%"},{level:2,name:"Basic",color:"#F77F00",desc:"Standar dasar mulai diterapkan. Jadwal pembersihan reguler tersedia tetapi belum konsisten. Dokumentasi minimal.",score:"41–60%"},{level:3,name:"Managed",color:"#00AEEF",desc:"Siklus PDCA terstruktur. Instruksi Kerja (IK) spesifik per area. Inspeksi berkala oleh tim gabungan (MKP & User). Dokumentasi terstandar.",score:"61–80%"},{level:4,name:"Optimized",color:"#0057B8",desc:"Integrasi teknologi mekanis (High Pressure Water Jetting, Industrial Vacuum). Digital Evidence System aktif. Analisis tren lintas periode. Zero temuan mayor.",score:"81–95%"},{level:5,name:"Excellence",color:"#2A9D8F",desc:"Benchmark nasional. Predictive analytics aktif. Inisiatif Kaizen terintegrasi. Kesiapan audit 24/7. Standar referensi lintas unit.",score:"96–100%"}].map(a=>`
            <div style="display:grid;grid-template-columns:80px 120px 1fr 100px;gap:var(--space-4);align-items:center;padding:var(--space-5) var(--space-6);background:var(--bg-card);border:1px solid var(--border-light);border-left:4px solid ${a.color};border-radius:var(--radius-sm);">
              <div style="text-align:center;">
                <div style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:${a.color};">${a.level}</div>
              </div>
              <div>
                <div style="font-weight:700;font-size:var(--fs-base);color:${a.color};">${a.name}</div>
              </div>
              <div style="font-size:var(--fs-sm);color:var(--text-secondary);line-height:var(--lh-normal);">${a.desc}</div>
              <div style="text-align:center;font-family:var(--font-mono);font-weight:700;font-size:var(--fs-sm);color:${a.color};">${a.score}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Digital Evidence System -->
    <section class="page-section alt-bg">
      <div class="container">
        <div class="section-label">Digital Evidence System</div>
        <h2 class="section-title">Sistem Bukti Digital</h2>
        <p class="section-subtitle mb-8">Seluruh data operasional — foto, jam kerja, lokasi GPS, dan kondisi real-time — diunggah ke cloud sebagai bukti digital yang tidak bisa dimanipulasi dan siap diaudit kapan saja.</p>

        <div class="grid-4">
          ${[{icon:"📸",title:"Photo Evidence",desc:"Foto kondisi sebelum & sesudah pembersihan dengan timestamp dan GPS"},{icon:"⏱",title:"Time Tracking",desc:"Pencatatan waktu mulai, selesai, dan durasi kerja secara otomatis"},{icon:"📍",title:"GPS Location",desc:"Validasi lokasi pembersihan melalui geofencing dan GPS tagging"},{icon:"☁️",title:"Cloud Storage",desc:"Data tersimpan di cloud — basis untuk analisis prediktif dan tren"}].map(a=>`
            <div class="card text-center">
              <div style="font-size:var(--fs-2xl);margin-bottom:var(--space-3);">${a.icon}</div>
              <h4 style="font-size:var(--fs-sm);font-weight:700;margin-bottom:var(--space-2);">${a.title}</h4>
              <p style="font-size:var(--fs-xs);color:var(--text-muted);line-height:var(--lh-normal);">${a.desc}</p>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- PDCA Governance Loop -->
    <section class="page-section">
      <div class="container text-center">
        <div class="section-label" style="justify-content:center;">PDCA Governance Loop</div>
        <h2 class="section-title">Siklus Tertutup Perbaikan Berkelanjutan</h2>
        <p class="section-subtitle" style="margin:0 auto var(--space-8);">Operasional MIC+ mengikuti siklus Plan-Do-Check-Act — bukan linear atau ad-hoc.</p>

        <!-- PDCA Diagram Image -->
        <div style="display:flex;justify-content:center;margin-bottom:var(--space-8);">
          <img src="/assets/governance-pdca.png" alt="PDCA Governance Cycle" style="max-width:380px;width:100%;border-radius:var(--radius-md);border:1px solid var(--border-light);" />
        </div>

        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:var(--space-4);margin-bottom:var(--space-8);">
          ${[{step:"PLAN",color:"var(--blue)",title:"Risk & Facility Assessment",details:["Penilaian kondisi awal aset","Penentuan baseline dan target Level","Mapping area kritis","Penyusunan rencana kerja"]},{step:"DO",color:"var(--cyan)",title:"Standard-Based Execution",details:["Eksekusi oleh tim terlatih","Metode mekanis & teknologi","Instruksi Kerja (IK) spesifik","High Pressure Water Jetting"]},{step:"CHECK",color:"var(--amber)",title:"Verification & MIC Scoring",details:["Inspeksi gabungan MKP & User","Parameter objektif terukur","Skor MIC Level tervalidasi","GAP analysis"]},{step:"ACT",color:"var(--green)",title:"Digital Evidence & Improve",details:["Upload bukti digital ke cloud","Analisis tren & prediktif","Inisiatif Kaizen (2 ide/tahun)","Reassessment & recalibration"]}].map(a=>`
            <div class="card" style="border-top:4px solid ${a.color};text-align:left;">
              <div style="font-family:var(--font-mono);font-size:var(--fs-xs);font-weight:800;color:${a.color};margin-bottom:var(--space-2);">${a.step}</div>
              <h4 style="font-size:var(--fs-sm);font-weight:700;margin-bottom:var(--space-3);">${a.title}</h4>
              <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
                ${a.details.map(e=>`<li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">${e}</li>`).join("")}
              </ul>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Outcome-Based KPI Model -->
    <section class="page-section alt-bg">
      <div class="container">
        <div class="section-label">Outcome-Based KPI Model</div>
        <h2 class="section-title">Key Performance Indicators</h2>
        <p class="section-subtitle mb-8">KPI strategis yang mengikat pembayaran kontrak pada hasil kesiapan fasilitas, bukan volume tenaga kerja.</p>

        <div class="card">
          <table class="data-table">
            <thead>
              <tr>
                <th>Kategori</th>
                <th>Indikator</th>
                <th>Target</th>
                <th>Relevansi Strategis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span class="badge badge-blue">Operational Excellence</span></td>
                <td><strong>MIC Level Score</strong></td>
                <td style="font-family:var(--font-mono);font-weight:700;color:var(--blue);"> > 90%</td>
                <td>Membuktikan efektivitas proses (ISO 41001 Klausul 9.1)</td>
              </tr>
              <tr>
                <td><span class="badge badge-green">Environmental Compliance</span></td>
                <td><strong>Audit Finding (PROPER Related)</strong></td>
                <td style="font-family:var(--font-mono);font-weight:700;color:var(--green);">0 Temuan</td>
                <td>Menjamin Audit Readiness untuk PROPER Biru/Hijau</td>
              </tr>
              <tr>
                <td><span class="badge badge-red">Safety Performance</span></td>
                <td><strong>Lost Time Injury (Housekeeping)</strong></td>
                <td style="font-family:var(--font-mono);font-weight:700;color:var(--green);">0 Kasus</td>
                <td>Mendukung statistik K3 perusahaan (ISO 45001)</td>
              </tr>
              <tr>
                <td><span class="badge badge-amber">Responsiveness</span></td>
                <td><strong>Response Time Darurat</strong></td>
                <td style="font-family:var(--font-mono);font-weight:700;color:var(--amber);">< 30 Menit</td>
                <td>Kelancaran operasi saat insiden (tumpahan minyak)</td>
              </tr>
              <tr>
                <td><span class="badge badge-blue">Innovation</span></td>
                <td><strong>Inisiatif Kaizen</strong></td>
                <td style="font-family:var(--font-mono);font-weight:700;color:var(--blue);">2 Ide/Tahun</td>
                <td>Continual Improvement (ISO 41001 Klausul 10)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  `}function V(i){i.innerHTML=`
    <!-- Executive Metrics -->
    <section class="page-section">
      <div class="container">
        <div class="section-label">Financial Impact</div>
        <h2 class="section-title">Executive Financial Dashboard</h2>
        <p class="section-subtitle mb-8">Dampak finansial MIC+ dihitung secara objektif berdasarkan analisis biaya-manfaat (cost-benefit analysis) dan perbandingan kondisi sebelum/sesudah implementasi.</p>

        <!-- Financial Dashboard Visual -->
        <div style="margin-bottom:var(--space-8);border-radius:var(--radius-md);overflow:hidden;border:1px solid var(--border-light);max-height:200px;">
          <img src="/assets/financial-dashboard.png" alt="Financial Analytics" style="width:100%;height:200px;object-fit:cover;object-position:center top;opacity:0.7;" />
        </div>
        <div class="grid-3 mb-8">
          <div class="metric-card metric-blue card-accent-top" style="padding:var(--space-8);">
            <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);margin-bottom:var(--space-3);">Annual Efficiency</div>
            <div class="metric-value" style="font-size:var(--fs-4xl);">Rp2.2M</div>
            <div class="metric-label">Efisiensi Tahunan (Miliar)</div>
          </div>
          <div class="metric-card metric-green card-accent-green" style="padding:var(--space-8);">
            <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);margin-bottom:var(--space-3);">Return</div>
            <div class="metric-value" style="font-size:var(--fs-4xl);">~29%</div>
            <div class="metric-label">Internal Rate of Return<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Tingkat pengembalian internal investasi)</span></div>
          </div>
          <div class="metric-card metric-cyan card-accent-cyan" style="padding:var(--space-8);">
            <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--text-muted);margin-bottom:var(--space-3);">Net Present Value</div>
            <div class="metric-value" style="font-size:var(--fs-4xl);">Rp2.9M</div>
            <div class="metric-label">NPV 5 Tahun (Miliar)<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Nilai bersih investasi sekarang)</span></div>
          </div>
        </div>

        <div class="grid-3 mb-8">
          <div class="metric-card metric-amber card-accent-amber">
            <div class="metric-value">~2.3</div>
            <div class="metric-label">Payback Period<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Waktu balik modal)</span></div>
          </div>
          <div class="metric-card metric-blue">
            <div class="metric-value">8–9%</div>
            <div class="metric-label">EBITDA Impact<br/><span style="font-size:var(--fs-xs);color:var(--text-muted);font-weight:400;">(Laba sebelum bunga, pajak, depresiasi & amortisasi)</span></div>
          </div>
          <div class="metric-card metric-green">
            <div class="metric-value">Rp5M</div>
            <div class="metric-label">Total Investment (Miliar)</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Before/After Comparison -->
    <section class="page-section alt-bg">
      <div class="container">
        <div class="section-label">Cost-Benefit Analysis</div>
        <h2 class="section-title">Sebelum vs Sesudah Implementasi MIC+</h2>
        <p class="section-subtitle mb-8">Pengukuran dampak berbasis data operasional aktual.</p>

        <div class="card">
          <table class="data-table">
            <thead>
              <tr>
                <th>Komponen</th>
                <th style="text-align:right;">Sebelum MIC+</th>
                <th style="text-align:right;">Sesudah MIC+</th>
                <th style="text-align:right;">Efisiensi Tahunan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Panic Cleaning & Rework</strong></td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--red);font-weight:600;">Rp1,200 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--green);font-weight:600;">Rp360 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);font-weight:700;">Rp840 Juta</td>
              </tr>
              <tr>
                <td><strong>Lembur Tambahan</strong></td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--red);font-weight:600;">Rp800 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--green);font-weight:600;">Rp400 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);font-weight:700;">Rp400 Juta</td>
              </tr>
              <tr>
                <td><strong>Inefisiensi Tenaga Kerja</strong></td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--red);font-weight:600;">Rp1,500 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--green);font-weight:600;">Rp600 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);font-weight:700;">Rp900 Juta</td>
              </tr>
              <tr style="background:var(--blue-light);">
                <td><strong style="color:var(--blue);">TOTAL EFISIENSI</strong></td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--red);font-weight:700;">Rp3,500 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);color:var(--green);font-weight:700;">Rp1,360 Juta</td>
                <td style="text-align:right;font-family:var(--font-mono);font-weight:900;color:var(--blue);font-size:var(--fs-lg);">Rp2,140 Juta</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="grid-2 mt-8">
          <div class="card">
            <h4 style="color:var(--text-secondary);margin-bottom:var(--space-4);font-size:var(--fs-sm);text-transform:uppercase;letter-spacing:0.06em;">Kontribusi terhadap Kinerja</h4>
            <div style="display:flex;flex-direction:column;gap:var(--space-4);">
              <div>
                <div style="display:flex;justify-content:space-between;margin-bottom:var(--space-2);">
                  <span style="font-size:var(--fs-sm);">Total Biaya Operasional Cleaning</span>
                  <span style="font-family:var(--font-mono);font-weight:700;">±Rp80 Miliar/tahun</span>
                </div>
              </div>
              <div>
                <div style="display:flex;justify-content:space-between;margin-bottom:var(--space-2);">
                  <span style="font-size:var(--fs-sm);">Efisiensi MIC+ vs Total Biaya</span>
                  <span style="font-family:var(--font-mono);font-weight:700;color:var(--blue);">≈ 2.75%</span>
                </div>
                <div class="progress-bar"><div class="progress-fill blue" style="width:2.75%;min-width:20px;"></div></div>
              </div>
              <div>
                <div style="display:flex;justify-content:space-between;margin-bottom:var(--space-2);">
                  <span style="font-size:var(--fs-sm);">Kontribusi ke EBITDA Unit <span style="font-size:var(--fs-xs);color:var(--text-muted);">(laba operasional)</span> (avg Rp25M)</span>
                  <span style="font-family:var(--font-mono);font-weight:700;color:var(--green);">≈ 8–9%</span>
                </div>
                <div class="progress-bar"><div class="progress-fill green" style="width:8.5%;min-width:40px;"></div></div>
              </div>
            </div>
          </div>
          <div class="card">
            <h4 style="color:var(--text-secondary);margin-bottom:var(--space-4);font-size:var(--fs-sm);text-transform:uppercase;letter-spacing:0.06em;">Pengembalian Investasi</h4>
            <div style="display:flex;flex-direction:column;gap:var(--space-6);">
              <div style="display:flex;justify-content:space-between;align-items:center;padding:var(--space-3) 0;border-bottom:1px solid var(--border-light);">
                <span style="font-size:var(--fs-sm);">Total Investasi Awal</span>
                <span style="font-family:var(--font-mono);font-weight:800;font-size:var(--fs-lg);">Rp5 Miliar</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:var(--space-3) 0;border-bottom:1px solid var(--border-light);">
                <span style="font-size:var(--fs-sm);">Manfaat Tahunan</span>
                <span style="font-family:var(--font-mono);font-weight:800;font-size:var(--fs-lg);color:var(--green);">Rp2.2 Miliar</span>
              </div>
              <div style="display:flex;justify-content:space-between;align-items:center;padding:var(--space-3) 0;border-bottom:1px solid var(--border-light);">
                <span style="font-size:var(--fs-sm);">Payback = 5M / 2.2M</span>
                <span style="font-family:var(--font-mono);font-weight:800;font-size:var(--fs-lg);color:var(--amber);">≈ 2.27 tahun</span>
              </div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);">* Horizon 5 tahun, tingkat diskonto 12%</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 3-Year Revenue Growth -->
    <section class="page-section">
      <div class="container">
        <div class="section-label">Growth Projection</div>
        <h2 class="section-title">Proyeksi Revenue 3 Tahun</h2>
        <p class="section-subtitle mb-8">Proyeksi menggunakan pendekatan akumulatif berdasarkan perluasan implementasi bertahap dan peningkatan premium service adoption.</p>

        <div class="card mb-8">
          <table class="data-table">
            <thead>
              <tr>
                <th>Tahun</th>
                <th style="text-align:center;">Estimasi Unit Aktif</th>
                <th style="text-align:right;">Estimasi Revenue (Rp Miliar)</th>
                <th style="text-align:center;">Growth</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Tahun 1</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);font-weight:700;">20 – 22 Unit</td>
                <td style="text-align:right;font-family:var(--font-mono);font-weight:700;">Rp220 – 250 M</td>
                <td style="text-align:center;"><span class="badge badge-blue">Baseline</span></td>
              </tr>
              <tr>
                <td><strong>Tahun 2</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);font-weight:700;">27 – 30 Unit</td>
                <td style="text-align:right;font-family:var(--font-mono);font-weight:700;">Rp300 – 360 M</td>
                <td style="text-align:center;"><span class="badge badge-green">+36–44%</span></td>
              </tr>
              <tr>
                <td><strong>Tahun 3</strong></td>
                <td style="text-align:center;font-family:var(--font-mono);font-weight:700;">35 – 40 Unit</td>
                <td style="text-align:right;font-family:var(--font-mono);font-weight:700;">Rp380 – 480 M</td>
                <td style="text-align:center;"><span class="badge badge-green">+27–33%</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Revenue chart -->
        <div class="chart-container">
          <h3 style="font-size:var(--fs-base);margin-bottom:var(--space-4);color:var(--text-secondary);">Revenue Growth Projection (Rp Miliar)</h3>
          <canvas id="revenue-chart" width="700" height="280"></canvas>
        </div>

        <div class="grid-2 mt-8">
          <div class="card">
            <h4 style="font-size:var(--fs-sm);text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);margin-bottom:var(--space-4);">EBITDA Valuasi Impact <span style="font-size:var(--fs-xs);text-transform:none;letter-spacing:normal;">(dampak terhadap nilai perusahaan)</span></h4>
            <p style="font-size:var(--fs-sm);color:var(--text-secondary);line-height:var(--lh-normal);">Dengan estimasi uplift EBITDA ± Rp2 miliar per tahun dan menggunakan multiple konservatif <strong>4x EBITDA</strong>, inovasi ini berpotensi meningkatkan valuasi unit bisnis hingga:</p>
            <div style="font-family:var(--font-mono);font-size:var(--fs-3xl);font-weight:900;color:var(--blue);margin-top:var(--space-4);">± Rp8 Miliar</div>
            <div style="font-size:var(--fs-xs);color:var(--text-muted);margin-top:var(--space-2);">Value Creation — bukan sekadar kenaikan omzet</div>
          </div>
          <div class="card">
            <h4 style="font-size:var(--fs-sm);text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);margin-bottom:var(--space-4);">Karakteristik Revenue MIC+</h4>
            <ul style="display:flex;flex-direction:column;gap:var(--space-3);">
              ${["Revenue-generating — margin lebih tinggi dari model tradisional","Scalable — berbasis governance framework, bukan headcount","Defensible — moat kompetitif berbasis arsitektur tata kelola","Recurring — kontrak jangka panjang dengan evaluasi berkala"].map(a=>`
                <li style="display:flex;align-items:flex-start;gap:var(--space-2);font-size:var(--fs-sm);line-height:var(--lh-snug);">
                  <span style="color:var(--green);font-weight:700;flex-shrink:0;">✓</span>
                  ${a}
                </li>
              `).join("")}
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,setTimeout(()=>{const a=document.getElementById("revenue-chart");if(!a)return;const e=a.getContext("2d"),g=window.devicePixelRatio||1,n=a.getBoundingClientRect();a.width=n.width*g,a.height=280*g,e.scale(g,g);const l=n.width,c=280,o=80,s=40,r=20,t=50,y=l-o-s,u=c-r-t,k=["Tahun 1","Tahun 2","Tahun 3"],v=[220,300,380],p=[250,360,480],x=520;e.strokeStyle="#E5E7EB",e.lineWidth=1;for(let m=0;m<=5;m++){const d=r+u/5*m;e.beginPath(),e.moveTo(o,d),e.lineTo(l-s,d),e.stroke(),e.fillStyle="#6B7280",e.font="11px Inter",e.textAlign="right",e.fillText(Math.round(x*(1-m/5))+"",o-8,d+4)}const f=y/k.length,b=f*.5;k.forEach((m,d)=>{const h=o+d*f+(f-b)/2,M=v[d]/x*u,I=p[d]/x*u;e.fillStyle="rgba(0,87,184,0.2)",e.fillRect(h,r+u-I,b,I),e.fillStyle="#0057B8",e.fillRect(h,r+u-M,b,M),e.fillStyle="#0B0F14",e.font="bold 12px Inter",e.textAlign="center",e.fillText(v[d]+"–"+p[d]+" M",h+b/2,r+u-I-8),e.fillStyle="#0B0F14",e.font="12px Inter",e.fillText(m,h+b/2,c-t+20)})},200)}function J(i){i.innerHTML=`
    <section class="page-section">
      <div class="container">
        <div class="section-label">ESG & Compliance</div>
        <h2 class="section-title">Standards Alignment Framework</h2>
        <p class="section-subtitle mb-8">MIC+ dirancang sebagai enabler sistem manajemen fasilitas ISO 41001:2018 dan penjamin pemenuhan kriteria PROPER — bukan sekadar layanan kebersihan, melainkan instrumen kepatuhan strategis.</p>

        <!-- ESG Visual -->
        <div style="display:flex;justify-content:center;margin-bottom:var(--space-8);">
          <img src="/assets/esg-compliance.png" alt="ESG & Compliance Governance" style="max-width:420px;width:100%;border-radius:var(--radius-md);border:1px solid var(--border-light);" />
        </div>
        <!-- ISO 41001 Mapping -->
        <div class="card card-accent-top mb-8">
          <h3 style="color:var(--blue);margin-bottom:var(--space-6);font-size:var(--fs-xl);">ISO 41001:2018 — Facility Management System</h3>

          <div style="display:flex;flex-direction:column;gap:0;">
            ${[{clause:"8.1",title:"Pengendalian Operasional",mapping:"MIC+ menyediakan pengendalian proses outsourcing yang terukur dan terdokumentasi. Klausul 8.1 secara eksplisit mewajibkan organisasi mengendalikan proses yang dialihdayakan — MIC+ memenuhi di atas minimum.",color:"blue"},{clause:"9.1",title:"Monitoring, Pengukuran & Evaluasi",mapping:'MIC Level Score sebagai indikator kinerja objektif. Skor ini menjadi "mata uang" baru dalam transaksi antara MKP dan klien — menggantikan laporan absensi harian sebagai basis evaluasi.',color:"cyan"},{clause:"7.5",title:"Documented Information",mapping:"Digital Evidence System menjamin traceability seluruh aktivitas. Foto, waktu, GPS, dan kondisi real-time diunggah ke cloud sebagai bukti yang tidak bisa dimanipulasi dan siap diaudit.",color:"green"},{clause:"10",title:"Continual Improvement",mapping:"Siklus PDCA dan inisiatif Kaizen (min. 2 ide/tahun) terintegrasi dalam operasional. Assessment → Scoring → Action → Reassessment menjamin perbaikan berkelanjutan.",color:"amber"}].map(a=>`
              <div class="alignment-row" style="padding:var(--space-5) 0;">
                <div class="alignment-left" style="flex:0.8;">
                  <div style="display:inline-flex;align-items:center;gap:var(--space-2);">
                    <span style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:var(--${a.color});">${a.clause}</span>
                  </div>
                  <div style="font-size:var(--fs-sm);font-weight:600;color:var(--text-secondary);margin-top:var(--space-1);">${a.title}</div>
                </div>
                <div class="alignment-arrow">
                  <svg width="32" height="24" viewBox="0 0 32 24"><path d="M0 12h28M22 4l8 8-8 8" fill="none" stroke="var(--${a.color})" stroke-width="2.5"/></svg>
                </div>
                <div class="alignment-right" style="flex:2;">
                  <p style="font-size:var(--fs-sm);line-height:var(--lh-normal);color:var(--text-secondary);">${a.mapping}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- PROPER -->
        <div class="card card-accent-green mb-8">
          <h3 style="color:var(--green);margin-bottom:var(--space-6);font-size:var(--fs-xl);">PROPER — Program Penilaian Peringkat Kinerja</h3>
          <p style="font-size:var(--fs-sm);color:var(--text-secondary);margin-bottom:var(--space-6);line-height:var(--lh-normal);">
            MIC+ menjamin pemenuhan kriteria Tata Graha (Good Housekeeping) yang menjadi <strong>syarat mutlak (necessary condition)</strong> dalam penilaian PROPER Biru, Hijau, hingga Emas. Investasi pada MIC+ sejatinya adalah premi asuransi untuk melindungi nilai perusahaan dari risiko lingkungan.
          </p>

          <div class="grid-2 gap-8">
            <div>
              <h4 style="font-size:var(--fs-sm);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);margin-bottom:var(--space-4);">Necessary Conditions yang Dikontrol MIC+</h4>
              <ul style="display:flex;flex-direction:column;gap:var(--space-3);">
                ${["Tata Graha (Good Housekeeping) — kebersihan area operasional","Pengelolaan Limbah B3 — TPS B3 sesuai regulasi PermenLH","Baku Mutu Air Limbah — drainase bebas kontaminan","Pengendalian Debu Fugitif — coal dust & fly ash","Dokumentasi & Traceability — bukti digital compliance"].map(a=>`
                  <li style="display:flex;align-items:flex-start;gap:var(--space-2);font-size:var(--fs-sm);line-height:var(--lh-snug);">
                    <span style="color:var(--green);font-weight:700;flex-shrink:0;">✓</span>
                    ${a}
                  </li>
                `).join("")}
              </ul>
            </div>
            <div>
              <h4 style="font-size:var(--fs-sm);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);margin-bottom:var(--space-4);">Risiko Tanpa MIC+</h4>
              <ul style="display:flex;flex-direction:column;gap:var(--space-3);">
                ${["PROPER Merah — sanksi administratif dan penurunan reputasi","PROPER Hitam — ancaman pencabutan izin operasi","Denda lingkungan — KLHK (Kementerian Lingkungan Hidup & Kehutanan) dapat mengenakan denda ratusan miliar","Penurunan harga saham — investor respons negatif terhadap downgrade PROPER","Reputational damage — hilangnya kepercayaan stakeholder"].map(a=>`
                  <li style="display:flex;align-items:flex-start;gap:var(--space-2);font-size:var(--fs-sm);line-height:var(--lh-snug);">
                    <span style="color:var(--red);font-weight:700;flex-shrink:0;">✕</span>
                    ${a}
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        </div>

        <!-- Audit Readiness 24/7 -->
        <div class="card" style="border-top:4px solid var(--cyan);">
          <h3 style="color:var(--cyan);margin-bottom:var(--space-4);font-size:var(--fs-xl);">Audit Readiness 24/7</h3>
          <p style="font-size:var(--fs-sm);color:var(--text-secondary);margin-bottom:var(--space-6);line-height:var(--lh-normal);">
            MIC+ bertindak sebagai lapisan pertahanan pertama (first line of defense) yang mengidentifikasi dan memperbaiki ketidaksesuaian sebelum auditor eksternal tiba. Kesiapan audit tidak lagi bersifat periodik — melainkan 24/7.
          </p>
          <div class="grid-3">
            ${[{icon:"📸",label:"Digital Evidence",desc:"Foto, GPS, dan timestamp setiap aktivitas — siap diaudit kapan saja"},{icon:"📊",label:"Real-time Scoring",desc:"MIC Level Score terukur dan terupdate — compliance visibility 24/7"},{icon:"🛡",label:"Proactive Detection",desc:"Identifikasi GAP sebelum audit — zero surprise, zero temuan mayor"}].map(a=>`
              <div style="text-align:center;">
                <div style="font-size:var(--fs-2xl);margin-bottom:var(--space-2);">${a.icon}</div>
                <div style="font-weight:700;font-size:var(--fs-sm);margin-bottom:var(--space-2);">${a.label}</div>
                <div style="font-size:var(--fs-xs);color:var(--text-muted);line-height:var(--lh-normal);">${a.desc}</div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    </section>
  `}function W(i){i.innerHTML=`
    <section class="page-section">
      <div class="container">
        <div class="section-label">Market Scalability</div>
        <h2 class="section-title">Potensi Pasar & Skalabilitas</h2>
        <p class="section-subtitle mb-8">MIC+ memiliki TAM yang besar secara teoritis dan jalur komersialisasi yang realistis — berbasis governance framework yang scalable, defensible, dan recurring.</p>

        <!-- TAM/SAM/SOM Circles -->
        <div class="market-circles mb-8">
          <div class="circle-container">
            <div class="market-circle tam">
              <div class="circle-label">
                <span class="label-name">TAM</span>
                <span class="label-value">Rp12–15T</span>
                <span class="label-sub">/tahun</span>
              </div>
            </div>
            <div class="market-circle sam">
              <div class="circle-label">
                <span class="label-name">SAM</span>
                <span class="label-value">Rp4–6T</span>
                <span class="label-sub">/tahun</span>
              </div>
            </div>
            <div class="market-circle som">
              <div class="circle-label">
                <span class="label-name">SOM</span>
                <span class="label-value">Y3</span>
                <span class="label-sub">35–40 Unit</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Market Details -->
        <div class="grid-3 mb-8">
          <div class="card card-accent-top">
            <div style="font-family:var(--font-mono);font-weight:900;font-size:var(--fs-xl);color:var(--blue);margin-bottom:var(--space-2);">TAM</div>
            <div style="font-weight:700;margin-bottom:var(--space-3);">Total Addressable Market</div>
            <p style="font-size:var(--fs-sm);color:var(--text-secondary);line-height:var(--lh-normal);margin-bottom:var(--space-4);">
              Pasar FM Indonesia: USD 12–14 miliar (growth 6–9%/tahun). Segmen assurance berbasis tata kelola ≈ 25–30% dari total.
            </p>
            <div style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:var(--blue);">Rp12–15 Triliun</div>
            <div style="font-size:var(--fs-xs);color:var(--text-muted);">Estimasi per tahun</div>
            <div style="margin-top:var(--space-3);font-size:var(--fs-xs);color:var(--text-secondary);">
              Target: Pembangkit listrik, Pertambangan, Semen, Petrokimia, IPP, Captive power
            </div>
          </div>
          <div class="card card-accent-cyan">
            <div style="font-family:var(--font-mono);font-weight:900;font-size:var(--fs-xl);color:var(--cyan);margin-bottom:var(--space-2);">SAM</div>
            <div style="font-weight:700;margin-bottom:var(--space-3);">Serviceable Available Market</div>
            <p style="font-size:var(--fs-sm);color:var(--text-secondary);line-height:var(--lh-normal);margin-bottom:var(--space-4);">
              Segmen dengan risiko tinggi, tuntutan compliance ketat, eksposur audit reguler. ≈ 30–40% dari TAM assurance.
            </p>
            <div style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:var(--cyan);">Rp4–6 Triliun</div>
            <div style="font-size:var(--fs-xs);color:var(--text-muted);">Estimasi per tahun</div>
            <div style="margin-top:var(--space-3);font-size:var(--fs-xs);color:var(--text-secondary);">
              PLN Group (NP, IP, anak usaha), IPP nasional, Heavy industry
            </div>
          </div>
          <div class="card card-accent-green">
            <div style="font-family:var(--font-mono);font-weight:900;font-size:var(--fs-xl);color:var(--green);margin-bottom:var(--space-2);">SOM</div>
            <div style="font-weight:700;margin-bottom:var(--space-3);">Serviceable Obtainable Market</div>
            <p style="font-size:var(--fs-sm);color:var(--text-secondary);line-height:var(--lh-normal);margin-bottom:var(--space-4);">
              Strategi penetrasi realistis: 10% captive PLN Group + 5% non-captive dalam 3 tahun pertama.
            </p>
            <div style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:var(--green);">35–40 Unit</div>
            <div style="font-size:var(--fs-xs);color:var(--text-muted);">Target Tahun 3</div>
            <div style="margin-top:var(--space-3);font-size:var(--fs-xs);color:var(--text-secondary);">
              avg. kontrak Rp10–12 M/unit → Rp380–480 M revenue
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Governance Team Capacity Model -->
    <section class="page-section alt-bg">
      <div class="container">
        <div class="section-label">Capacity Model</div>
        <h2 class="section-title">Governance Team Capacity Model</h2>
        <p class="section-subtitle mb-8">Pertumbuhan revenue tidak semata bergantung pada jumlah tenaga kerja cleaning, tetapi pada kemampuan replikasi governance framework dan sistem maturity scoring.</p>

        <div class="grid-2 gap-8">
          <div class="card card-accent-top">
            <h3 style="margin-bottom:var(--space-6);font-size:var(--fs-lg);">1 Tim Governance = 4–6 Unit</h3>
            <div style="display:flex;flex-direction:column;gap:var(--space-4);">
              ${[{role:"Facility Governance Lead",icon:"👤",desc:"Pemimpin tata kelola dan alignment strategis"},{role:"Risk & Compliance Specialist",icon:"🛡",desc:"Pengendalian risiko dan kepatuhan ISO/PROPER"},{role:"Digital Monitoring Officer",icon:"📊",desc:"Pengelolaan digital evidence dan analisis data"}].map(a=>`
                <div style="display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
                  <span style="font-size:var(--fs-xl);">${a.icon}</span>
                  <div>
                    <div style="font-weight:700;font-size:var(--fs-sm);">${a.role}</div>
                    <div style="font-size:var(--fs-xs);color:var(--text-muted);">${a.desc}</div>
                  </div>
                </div>
              `).join("")}
            </div>
            <div style="margin-top:var(--space-6);padding:var(--space-4);background:var(--blue-light);border-radius:var(--radius-sm);text-align:center;">
              <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:var(--blue);margin-bottom:var(--space-1);">Kapasitas per Tim</div>
              <div style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:var(--blue);">4–6 Unit</div>
              <div style="font-size:var(--fs-xs);color:var(--text-muted);">pembangkit per tahun</div>
            </div>
          </div>

          <div class="card">
            <h3 style="margin-bottom:var(--space-6);font-size:var(--fs-lg);">Scalability Logic: 3 Tahun</h3>
            <div style="display:flex;flex-direction:column;gap:var(--space-5);">
              ${[{year:"Tahun 1",teams:"2 tim",units:"8–12 unit baru",color:"blue"},{year:"Tahun 2",teams:"3 tim",units:"12–18 unit kumulatif",color:"cyan"},{year:"Tahun 3",teams:"5 tim",units:"30–40 unit aktif",color:"green"}].map(a=>`
                <div>
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-2);">
                    <span style="font-weight:700;color:var(--${a.color});">${a.year}</span>
                    <span style="font-family:var(--font-mono);font-size:var(--fs-sm);font-weight:600;">${a.teams} → ${a.units}</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill ${a.color}" style="width:${a.year==="Tahun 1"?"30":a.year==="Tahun 2"?"55":"100"}%;"></div>
                  </div>
                </div>
              `).join("")}
            </div>

            <div style="margin-top:var(--space-8);padding:var(--space-4);border:2px solid var(--border);border-radius:var(--radius-sm);">
              <h4 style="font-size:var(--fs-sm);font-weight:700;margin-bottom:var(--space-3);color:var(--text-secondary);">Strategi Scaling & Defensibilitas</h4>
              <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
                ${["Database benchmark maturitas lintas pembangkit","Standar best practice berbasis data historis","Moat kompetitif berbasis governance architecture","Pertumbuhan horizontal (unit) + vertikal (MIC Level tier)"].map(a=>`
                  <li style="display:flex;align-items:flex-start;gap:var(--space-2);font-size:var(--fs-xs);color:var(--text-secondary);">
                    <span style="color:var(--green);font-weight:700;flex-shrink:0;">▸</span>
                    ${a}
                  </li>
                `).join("")}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function Y(i){i.innerHTML=`
    <section class="page-section">
      <div class="container">
        <div class="section-label">Executive Access</div>
        <h2 class="section-title">Executive Summary & Resources</h2>
        <p class="section-subtitle mb-8">Akses dokumen eksekutif, hubungi tim inovator, atau jadwalkan sesi demonstrasi interaktif MIC+.</p>

        <div class="grid-3 gap-8 mb-8">
          <!-- Download -->
          <div class="card card-accent-top" style="text-align:center;padding:var(--space-10) var(--space-8);">
            <div style="width:64px;height:64px;background:var(--blue-light);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;margin:0 auto var(--space-6);">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--blue)" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            </div>
            <h3 style="font-size:var(--fs-lg);margin-bottom:var(--space-3);">Executive Brief</h3>
            <p style="font-size:var(--fs-sm);color:var(--text-muted);margin-bottom:var(--space-6);line-height:var(--lh-normal);">
              Makalah lengkap MKP MIC+ — Business Development FISSION 2026. Mencakup analisis strategis, arsitektur produk, dampak finansial, dan roadmap implementasi.
            </p>
            <a href="#" class="btn btn-primary" style="width:100%;justify-content:center;" onclick="event.preventDefault();alert('Download feature: Makalah MIC+ akan tersedia untuk diunduh.');">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Makalah
            </a>
          </div>

          <!-- Contact -->
          <div class="card card-accent-cyan" style="text-align:center;padding:var(--space-10) var(--space-8);">
            <div style="width:64px;height:64px;background:var(--cyan-light);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;margin:0 auto var(--space-6);">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
            </div>
            <h3 style="font-size:var(--fs-lg);margin-bottom:var(--space-3);">Contact Team</h3>
            <p style="font-size:var(--fs-sm);color:var(--text-muted);margin-bottom:var(--space-6);line-height:var(--lh-normal);">
              Hubungi tim inovator MIC+ untuk diskusi teknis, pertanyaan strategis, atau eksplorasi kerja sama.
            </p>
            <div style="text-align:left;display:flex;flex-direction:column;gap:var(--space-4);">
              <div style="padding:var(--space-3);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
                <div style="font-weight:700;font-size:var(--fs-sm);">Hardi Surya Pratama</div>
                <div style="font-size:var(--fs-xs);color:var(--text-muted);">Kepala Bidang Kinerja Risiko & Kepatuhan</div>
                <div style="font-size:var(--fs-xs);color:var(--blue);margin-top:var(--space-1);">Hardispratama@gmail.com</div>
              </div>
              <div style="padding:var(--space-3);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
                <div style="font-weight:700;font-size:var(--fs-sm);">Bradika Chandra Sanjaya</div>
                <div style="font-size:var(--fs-xs);color:var(--text-muted);">Manager Supporting & Settlement</div>
                <div style="font-size:var(--fs-xs);color:var(--blue);margin-top:var(--space-1);">chandra@mitrakaryaprima.com</div>
              </div>
              <div style="padding:var(--space-3);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
                <div style="font-weight:700;font-size:var(--fs-sm);">Surya Hari Putra</div>
                <div style="font-size:var(--fs-xs);color:var(--text-muted);">Staf Junior Supporting & Settlement</div>
                <div style="font-size:var(--fs-xs);color:var(--blue);margin-top:var(--space-1);">surya@mitrakaryaprima.com</div>
              </div>
            </div>
          </div>

          <!-- Schedule Demo -->
          <div class="card card-accent-green" style="text-align:center;padding:var(--space-10) var(--space-8);">
            <div style="width:64px;height:64px;background:var(--green-light);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;margin:0 auto var(--space-6);">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--green)" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
            <h3 style="font-size:var(--fs-lg);margin-bottom:var(--space-3);">Schedule Demo</h3>
            <p style="font-size:var(--fs-sm);color:var(--text-muted);margin-bottom:var(--space-6);line-height:var(--lh-normal);">
              Jadwalkan sesi presentasi atau demonstrasi interaktif — termasuk live simulation, heatmap walkthrough, dan analisis dampak spesifik untuk unit Anda.
            </p>
            <a href="#" class="btn btn-outline" style="width:100%;justify-content:center;border-color:var(--green);color:var(--green);" onclick="event.preventDefault();alert('Demo scheduling: Hubungi tim untuk penjadwalan.');">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Jadwalkan Demo
            </a>
          </div>
        </div>

        <!-- Key Takeaway -->
        <div style="background:var(--bg-dark);color:var(--text-inverse);border-radius:var(--radius-lg);padding:var(--space-12) var(--space-10);text-align:center;">
          <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:var(--cyan);margin-bottom:var(--space-6);">Key Takeaway</div>
          <h2 style="font-size:var(--fs-3xl);font-weight:900;letter-spacing:-0.02em;margin-bottom:var(--space-6);color:white;">
            MIC+ bukan cleaning service.
          </h2>
          <p style="font-size:var(--fs-lg);color:rgba(244,246,249,0.8);max-width:800px;margin:0 auto var(--space-8);line-height:var(--lh-normal);">
            MIC+ adalah <strong style="color:var(--cyan);">arsitektur pengendalian risiko industri</strong> berbasis tata kelola dan assurance — yang mentransformasi fungsi yang dianggap komoditas menjadi instrumen mitigasi risiko dan sumber keunggulan kompetitif.
          </p>
          <div style="display:flex;justify-content:center;gap:var(--space-6);flex-wrap:wrap;margin-bottom:var(--space-8);">
            ${[{label:"Efisiensi/Tahun",value:"Rp2.2M"},{label:"IRR",value:"~29%"},{label:"Payback",value:"2.3 Tahun"},{label:"EBITDA Impact",value:"8–9%"}].map(a=>`
              <div style="min-width:120px;">
                <div style="font-family:var(--font-mono);font-size:var(--fs-xl);font-weight:900;color:var(--cyan);">${a.value}</div>
                <div style="font-size:var(--fs-xs);color:rgba(244,246,249,0.6);text-transform:uppercase;letter-spacing:0.08em;">${a.label}</div>
              </div>
            `).join("")}
          </div>
          <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap;">
            <a href="#/" class="btn btn-lg" style="background:var(--cyan);color:var(--bg-dark);border:2px solid var(--cyan);">
              ← Back to Home
            </a>
            <a href="#/simulation" class="btn btn-outline btn-lg" style="border-color:rgba(255,255,255,0.3);color:white;">
              Run Simulation →
            </a>
          </div>
        </div>

        <!-- Footer -->
        <div style="text-align:center;padding:var(--space-10) 0 var(--space-6);color:var(--text-muted);font-size:var(--fs-xs);">
          <div style="display:flex;align-items:center;justify-content:center;gap:var(--space-3);margin-bottom:var(--space-3);">
            <img src="/assets/logo-mkp.png" alt="MKP" style="height:28px;" />
            <span style="font-weight:700;color:var(--text-secondary);">PT Mitra Karya Prima</span>
          </div>
          <p>MKP MIC+ — Industrial Risk Control Architecture</p>
          <p>FISSION Innovation Forum 2026</p>
        </div>
      </div>
    </section>
  `}function q(i){i.innerHTML=`
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
  `}const O=[{id:"abstrak",title:"Abstrak",icon:"📄",content:`
<p>Dalam ekosistem industri pembangkitan listrik yang berisiko tinggi, layanan <em>industrial cleaning</em> sering kali terjebak dalam paradigma komoditas yang hanya berfokus pada penyediaan tenaga kerja (<em>manpower supply</em>). Pendekatan ini menciptakan "ilusi kepatuhan" (<em>compliance illusion</em>), di mana fasilitas tampak bersih secara visual sesaat namun gagal memenuhi standar pengendalian risiko operasional dan lingkungan secara berkelanjutan. Akibatnya, perusahaan pemilik aset (Asset Owner) menanggung risiko tersembunyi berupa temuan audit berulang, potensi bahaya keselamatan (K3), dan ancaman sanksi regulasi PROPER.</p>
<p>Inovasi <strong>MKP MIC+ (Managed Industrial Cleaning Plus)</strong> hadir sebagai solusi disruptif yang mentransformasi layanan kebersihan konvensional menjadi produk <em>Facility Readiness Assurance</em> (Jaminan Kesiapan Fasilitas). Menggunakan metodologi <em>Design Thinking</em>, inovasi ini meredefinisi deliverable layanan dari "aktivitas pembersihan" menjadi "jaminan kondisi fasilitas yang terukur dan siap audit". MKP MIC+ mengintegrasikan standar ISO 41001:2018, ISO 31000, dan kriteria kepatuhan PROPER KLHK ke dalam sistem scoring kematangan fasilitas (MIC Level) dan bukti digital (<em>digital evidence</em>).</p>
<p>Hasil validasi pada <em>pilot project</em> di 17 unit pembangkit menunjukkan dampak signifikan: penghilangan temuan minor berulang, peningkatan kesiapan audit menjadi 24/7, dan penciptaan aliran pendapatan baru melalui skema kontrak berbasis hasil (<em>outcome-based contract</em>). Secara finansial, inovasi ini memproyeksikan potensi kenaikan pendapatan per unit menjadi Rp11,7 M – Rp12,4 M melalui penerapan harga premium yang didukung oleh <em>value proposition</em> berupa transfer risiko dan jaminan kepatuhan. MKP MIC+ membuktikan bahwa <em>industrial cleaning</em> dapat berevolusi dari <em>Cost Center</em> menjadi <em>Profit Enabler</em> strategis bagi PLN Group.</p>
<p><strong>Kata kunci:</strong> karya inovasi, managed industrial cleaning, facility readiness assurance, outcome-based contract, risk governance</p>
`},{id:"bab1",title:"BAB I — Pendahuluan",icon:"1️⃣",content:`
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
`},{id:"bab2",title:"BAB II — Kajian Literatur",icon:"2️⃣",content:`
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
`},{id:"bab3",title:"BAB III — Pembahasan Inovasi",icon:"3️⃣",content:`
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
`},{id:"bab4",title:"BAB IV — Manfaat Inovasi",icon:"4️⃣",content:`
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
`},{id:"bab5",title:"BAB V — Kesimpulan & Saran",icon:"5️⃣",content:`
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
`},{id:"pustaka",title:"Daftar Pustaka",icon:"📚",content:`
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
`}];function Z(){const i=document.getElementById("app");i.innerHTML=`
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
          ${O.map((a,e)=>`
            <button onclick="document.getElementById('ch-${a.id}').scrollIntoView({behavior:'smooth',block:'start'})"
              style="padding:8px 16px;border:1px solid rgba(0,87,184,0.2);background:rgba(0,87,184,0.04);color:var(--blue);border-radius:var(--radius-sm);cursor:pointer;font-size:var(--fs-xs);font-weight:600;transition:all 0.15s ease;white-space:nowrap;"
              onmouseover="this.style.background='var(--blue)';this.style.color='white'"
              onmouseout="this.style.background='rgba(0,87,184,0.04)';this.style.color='var(--blue)'"
            >${a.icon} ${a.title}</button>
          `).join("")}
        </div>

        <!-- Chapter Content -->
        <div style="max-width:860px;margin:0 auto;">
          ${O.map((a,e)=>`
            <div id="ch-${a.id}" style="scroll-margin-top:140px;margin-bottom:var(--space-8);">
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
                  <h2 style="margin:0;font-size:var(--fs-lg);color:var(--blue);">${a.icon} ${a.title}</h2>
                  <span class="ch-arrow" style="font-size:var(--fs-sm);color:var(--blue);">▼</span>
                </div>
                <div class="ch-body" style="padding:var(--space-5);line-height:1.9;color:var(--text-secondary);">
                  ${a.content}
                </div>
              </div>
            </div>
          `).join("")}
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
  `,window.scrollTo(0,0)}const D={"/":F,"/risk-model":$,"/heatmap":N,"/simulation":G,"/architecture":U,"/financial":V,"/compliance":J,"/scalability":W,"/executive":Y,"/methodology":q,"/makalah":Z},R=document.getElementById("page-content"),z=document.getElementById("nav-links"),Q=document.getElementById("nav-toggle"),L=document.getElementById("pres-toggle");function X(){return(window.location.hash||"#/").slice(1)||"/"}function H(){const i=X(),a=D[i]||D["/"];document.querySelectorAll(".nav-links a").forEach(e=>{const g=e.getAttribute("data-page"),n=i==="/"&&g==="home"||i==="/"+g;e.classList.toggle("active",n)}),z.classList.remove("open"),R.classList.remove("page-active"),R.classList.add("page-enter"),setTimeout(()=>{R.innerHTML="",a(R),requestAnimationFrame(()=>{R.classList.remove("page-enter"),R.classList.add("page-active")}),window.scrollTo({top:0,behavior:"instant"})},150)}window.addEventListener("hashchange",H);window.addEventListener("load",H);Q.addEventListener("click",()=>{z.classList.toggle("open")});z.addEventListener("click",i=>{i.target.tagName==="A"&&z.classList.remove("open")});L.addEventListener("click",()=>{document.body.classList.toggle("presentation-mode"),L.classList.toggle("active");const i=document.body.classList.contains("presentation-mode");L.querySelector(".pres-label").textContent=i?"Web":"Present"});
