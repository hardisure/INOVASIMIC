// EXECUTIVE DOWNLOAD PAGE
export function renderExecutive(container) {
    container.innerHTML = `
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
            ${[
            { label: 'Efisiensi/Tahun', value: 'Rp2.2M' },
            { label: 'IRR', value: '~29%' },
            { label: 'Payback', value: '2.3 Tahun' },
            { label: 'EBITDA Impact', value: '8–9%' },
        ].map(m => `
              <div style="min-width:120px;">
                <div style="font-family:var(--font-mono);font-size:var(--fs-xl);font-weight:900;color:var(--cyan);">${m.value}</div>
                <div style="font-size:var(--fs-xs);color:rgba(244,246,249,0.6);text-transform:uppercase;letter-spacing:0.08em;">${m.label}</div>
              </div>
            `).join('')}
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
  `;
}
