// SYSTEM ARCHITECTURE PAGE
export function renderArchitecture(container) {
  container.innerHTML = `
    <!-- MIC Level Framework -->
    <section class="page-section">
      <div class="container">
        <div class="section-label">System Architecture</div>
        <h2 class="section-title">MIC Level Framework</h2>
        <p class="section-subtitle mb-8">Sistem pengukuran maturitas yang mengkuantifikasi tingkat kebersihan dan kesiapan fasilitas menjadi skor terukur — menggantikan laporan absensi harian.</p>

        <div style="display:flex;flex-direction:column;gap:var(--space-4);">
          ${[
      { level: 1, name: 'Initial', color: '#D62828', desc: 'Tidak ada standar. Pembersihan reaktif dan ad-hoc. Tidak ada dokumentasi atau pengukuran.', score: '0–40%' },
      { level: 2, name: 'Basic', color: '#F77F00', desc: 'Standar dasar mulai diterapkan. Jadwal pembersihan reguler tersedia tetapi belum konsisten. Dokumentasi minimal.', score: '41–60%' },
      { level: 3, name: 'Managed', color: '#00AEEF', desc: 'Siklus PDCA terstruktur. Instruksi Kerja (IK) spesifik per area. Inspeksi berkala oleh tim gabungan (MKP & User). Dokumentasi terstandar.', score: '61–80%' },
      { level: 4, name: 'Optimized', color: '#0057B8', desc: 'Integrasi teknologi mekanis (High Pressure Water Jetting, Industrial Vacuum). Digital Evidence System aktif. Analisis tren lintas periode. Zero temuan mayor.', score: '81–95%' },
      { level: 5, name: 'Excellence', color: '#2A9D8F', desc: 'Benchmark nasional. Predictive analytics aktif. Inisiatif Kaizen terintegrasi. Kesiapan audit 24/7. Standar referensi lintas unit.', score: '96–100%' },
    ].map(l => `
            <div style="display:grid;grid-template-columns:80px 120px 1fr 100px;gap:var(--space-4);align-items:center;padding:var(--space-5) var(--space-6);background:var(--bg-card);border:1px solid var(--border-light);border-left:4px solid ${l.color};border-radius:var(--radius-sm);">
              <div style="text-align:center;">
                <div style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:${l.color};">${l.level}</div>
              </div>
              <div>
                <div style="font-weight:700;font-size:var(--fs-base);color:${l.color};">${l.name}</div>
              </div>
              <div style="font-size:var(--fs-sm);color:var(--text-secondary);line-height:var(--lh-normal);">${l.desc}</div>
              <div style="text-align:center;font-family:var(--font-mono);font-weight:700;font-size:var(--fs-sm);color:${l.color};">${l.score}</div>
            </div>
          `).join('')}
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
          ${[
      { icon: '📸', title: 'Photo Evidence', desc: 'Foto kondisi sebelum & sesudah pembersihan dengan timestamp dan GPS' },
      { icon: '⏱', title: 'Time Tracking', desc: 'Pencatatan waktu mulai, selesai, dan durasi kerja secara otomatis' },
      { icon: '📍', title: 'GPS Location', desc: 'Validasi lokasi pembersihan melalui geofencing dan GPS tagging' },
      { icon: '☁️', title: 'Cloud Storage', desc: 'Data tersimpan di cloud — basis untuk analisis prediktif dan tren' },
    ].map(d => `
            <div class="card text-center">
              <div style="font-size:var(--fs-2xl);margin-bottom:var(--space-3);">${d.icon}</div>
              <h4 style="font-size:var(--fs-sm);font-weight:700;margin-bottom:var(--space-2);">${d.title}</h4>
              <p style="font-size:var(--fs-xs);color:var(--text-muted);line-height:var(--lh-normal);">${d.desc}</p>
            </div>
          `).join('')}
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
          ${[
      { step: 'PLAN', color: 'var(--blue)', title: 'Risk & Facility Assessment', details: ['Penilaian kondisi awal aset', 'Penentuan baseline dan target Level', 'Mapping area kritis', 'Penyusunan rencana kerja'] },
      { step: 'DO', color: 'var(--cyan)', title: 'Standard-Based Execution', details: ['Eksekusi oleh tim terlatih', 'Metode mekanis & teknologi', 'Instruksi Kerja (IK) spesifik', 'High Pressure Water Jetting'] },
      { step: 'CHECK', color: 'var(--amber)', title: 'Verification & MIC Scoring', details: ['Inspeksi gabungan MKP & User', 'Parameter objektif terukur', 'Skor MIC Level tervalidasi', 'GAP analysis'] },
      { step: 'ACT', color: 'var(--green)', title: 'Digital Evidence & Improve', details: ['Upload bukti digital ke cloud', 'Analisis tren & prediktif', 'Inisiatif Kaizen (2 ide/tahun)', 'Reassessment & recalibration'] },
    ].map(s => `
            <div class="card" style="border-top:4px solid ${s.color};text-align:left;">
              <div style="font-family:var(--font-mono);font-size:var(--fs-xs);font-weight:800;color:${s.color};margin-bottom:var(--space-2);">${s.step}</div>
              <h4 style="font-size:var(--fs-sm);font-weight:700;margin-bottom:var(--space-3);">${s.title}</h4>
              <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
                ${s.details.map(d => `<li style="font-size:var(--fs-xs);color:var(--text-secondary);list-style:disc;margin-left:var(--space-4);">${d}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
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
  `;
}
