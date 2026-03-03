// ESG & COMPLIANCE PAGE
export function renderCompliance(container) {
  container.innerHTML = `
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
            ${[
      {
        clause: '8.1',
        title: 'Pengendalian Operasional',
        mapping: 'MIC+ menyediakan pengendalian proses outsourcing yang terukur dan terdokumentasi. Klausul 8.1 secara eksplisit mewajibkan organisasi mengendalikan proses yang dialihdayakan — MIC+ memenuhi di atas minimum.',
        color: 'blue'
      },
      {
        clause: '9.1',
        title: 'Monitoring, Pengukuran & Evaluasi',
        mapping: 'MIC Level Score sebagai indikator kinerja objektif. Skor ini menjadi "mata uang" baru dalam transaksi antara MKP dan klien — menggantikan laporan absensi harian sebagai basis evaluasi.',
        color: 'cyan'
      },
      {
        clause: '7.5',
        title: 'Documented Information',
        mapping: 'Digital Evidence System menjamin traceability seluruh aktivitas. Foto, waktu, GPS, dan kondisi real-time diunggah ke cloud sebagai bukti yang tidak bisa dimanipulasi dan siap diaudit.',
        color: 'green'
      },
      {
        clause: '10',
        title: 'Continual Improvement',
        mapping: 'Siklus PDCA dan inisiatif Kaizen (min. 2 ide/tahun) terintegrasi dalam operasional. Assessment → Scoring → Action → Reassessment menjamin perbaikan berkelanjutan.',
        color: 'amber'
      }
    ].map(item => `
              <div class="alignment-row" style="padding:var(--space-5) 0;">
                <div class="alignment-left" style="flex:0.8;">
                  <div style="display:inline-flex;align-items:center;gap:var(--space-2);">
                    <span style="font-family:var(--font-mono);font-size:var(--fs-2xl);font-weight:900;color:var(--${item.color});">${item.clause}</span>
                  </div>
                  <div style="font-size:var(--fs-sm);font-weight:600;color:var(--text-secondary);margin-top:var(--space-1);">${item.title}</div>
                </div>
                <div class="alignment-arrow">
                  <svg width="32" height="24" viewBox="0 0 32 24"><path d="M0 12h28M22 4l8 8-8 8" fill="none" stroke="var(--${item.color})" stroke-width="2.5"/></svg>
                </div>
                <div class="alignment-right" style="flex:2;">
                  <p style="font-size:var(--fs-sm);line-height:var(--lh-normal);color:var(--text-secondary);">${item.mapping}</p>
                </div>
              </div>
            `).join('')}
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
                ${[
      'Tata Graha (Good Housekeeping) — kebersihan area operasional',
      'Pengelolaan Limbah B3 — TPS B3 sesuai regulasi PermenLH',
      'Baku Mutu Air Limbah — drainase bebas kontaminan',
      'Pengendalian Debu Fugitif — coal dust & fly ash',
      'Dokumentasi & Traceability — bukti digital compliance'
    ].map(item => `
                  <li style="display:flex;align-items:flex-start;gap:var(--space-2);font-size:var(--fs-sm);line-height:var(--lh-snug);">
                    <span style="color:var(--green);font-weight:700;flex-shrink:0;">✓</span>
                    ${item}
                  </li>
                `).join('')}
              </ul>
            </div>
            <div>
              <h4 style="font-size:var(--fs-sm);font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted);margin-bottom:var(--space-4);">Risiko Tanpa MIC+</h4>
              <ul style="display:flex;flex-direction:column;gap:var(--space-3);">
                ${[
      'PROPER Merah — sanksi administratif dan penurunan reputasi',
      'PROPER Hitam — ancaman pencabutan izin operasi',
      'Denda lingkungan — KLHK (Kementerian Lingkungan Hidup & Kehutanan) dapat mengenakan denda ratusan miliar',
      'Penurunan harga saham — investor respons negatif terhadap downgrade PROPER',
      'Reputational damage — hilangnya kepercayaan stakeholder'
    ].map(item => `
                  <li style="display:flex;align-items:flex-start;gap:var(--space-2);font-size:var(--fs-sm);line-height:var(--lh-snug);">
                    <span style="color:var(--red);font-weight:700;flex-shrink:0;">✕</span>
                    ${item}
                  </li>
                `).join('')}
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
            ${[
      { icon: '📸', label: 'Digital Evidence', desc: 'Foto, GPS, dan timestamp setiap aktivitas — siap diaudit kapan saja' },
      { icon: '📊', label: 'Real-time Scoring', desc: 'MIC Level Score terukur dan terupdate — compliance visibility 24/7' },
      { icon: '🛡', label: 'Proactive Detection', desc: 'Identifikasi GAP sebelum audit — zero surprise, zero temuan mayor' },
    ].map(i => `
              <div style="text-align:center;">
                <div style="font-size:var(--fs-2xl);margin-bottom:var(--space-2);">${i.icon}</div>
                <div style="font-weight:700;font-size:var(--fs-sm);margin-bottom:var(--space-2);">${i.label}</div>
                <div style="font-size:var(--fs-xs);color:var(--text-muted);line-height:var(--lh-normal);">${i.desc}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
