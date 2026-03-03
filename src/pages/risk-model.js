// RISK MODEL PAGE
export function renderRiskModel(container) {
  container.innerHTML = `
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
          ${[
      { title: 'Risiko Operasional', icon: '⚡', color: 'red', desc: 'Debu batu bara di area conveyor & crusher — mencegah spontaneous combustion dan kerusakan bearing mesin.', badge: 'CRITICAL' },
      { title: 'Risiko Lingkungan', icon: '🌍', color: 'amber', desc: 'Saluran drainase bebas sumbatan & ceceran minyak — mencegah pelanggaran baku mutu air limbah (PROPER) dan pencemaran tanah.', badge: 'HIGH' },
      { title: 'Risiko K3 (Safety)', icon: '🛡', color: 'amber', desc: 'Area kerja bebas tumpahan pelumas dan hambatan jalur evakuasi — mencegah kecelakaan kerja dan menjamin akses tanggap darurat.', badge: 'HIGH' },
      { title: 'Risiko Audit & Hukum', icon: '📋', color: 'red', desc: 'Bukti pelaksanaan pembersihan terdokumentasi dan tertelusur — menjamin kelulusan audit eksternal (ISO, SMK3, KLHK) tanpa temuan mayor.', badge: 'CRITICAL' }
    ].map(r => `
            <div class="card card-accent-${r.color}">
              <div style="display:flex;align-items:center;gap:var(--space-3);margin-bottom:var(--space-4);">
                <span style="font-size:var(--fs-2xl);">${r.icon}</span>
                <div>
                  <div class="badge badge-${r.color}" style="margin-bottom:var(--space-1);">${r.badge}</div>
                  <h3 style="font-size:var(--fs-lg);">${r.title}</h3>
                </div>
              </div>
              <p style="font-size:var(--fs-sm);color:var(--text-secondary);line-height:var(--lh-normal);">${r.desc}</p>
            </div>
          `).join('')}
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
  `;
}
