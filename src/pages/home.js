// HOME — Strategic Narrative Landing Page
export function renderHome(container) {
  container.innerHTML = `
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
            ${['Boiler Area', 'Turbine Hall', 'Conveyor Belt', 'Coal Yard', 'TPS B3', 'Drainase'].map((name, i) => `
              <div style="padding:var(--space-6);border-radius:var(--radius-sm);border:2px solid ${i < 4 ? 'var(--red)' : 'var(--amber)'};background:${i < 4 ? 'rgba(214,40,40,0.12)' : 'rgba(247,127,0,0.12)'};text-align:center;">
                <div style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:${i < 4 ? 'var(--red)' : 'var(--amber)'};">${name}</div>
                <div style="font-family:var(--font-mono);font-size:var(--fs-lg);font-weight:800;color:${i < 4 ? 'var(--red)' : 'var(--amber)'};">${i < 4 ? 'HIGH' : 'MEDIUM'}</div>
              </div>
            `).join('')}
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
  `;
}
