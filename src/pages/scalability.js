// SCALABILITY PAGE
export function renderScalability(container) {
  container.innerHTML = `
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
              ${[
      { role: 'Facility Governance Lead', icon: '👤', desc: 'Pemimpin tata kelola dan alignment strategis' },
      { role: 'Risk & Compliance Specialist', icon: '🛡', desc: 'Pengendalian risiko dan kepatuhan ISO/PROPER' },
      { role: 'Digital Monitoring Officer', icon: '📊', desc: 'Pengelolaan digital evidence dan analisis data' },
    ].map(r => `
                <div style="display:flex;align-items:center;gap:var(--space-3);padding:var(--space-3);background:var(--bg-section-alt);border-radius:var(--radius-sm);">
                  <span style="font-size:var(--fs-xl);">${r.icon}</span>
                  <div>
                    <div style="font-weight:700;font-size:var(--fs-sm);">${r.role}</div>
                    <div style="font-size:var(--fs-xs);color:var(--text-muted);">${r.desc}</div>
                  </div>
                </div>
              `).join('')}
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
              ${[
      { year: 'Tahun 1', teams: '2 tim', units: '8–12 unit baru', color: 'blue' },
      { year: 'Tahun 2', teams: '3 tim', units: '12–18 unit kumulatif', color: 'cyan' },
      { year: 'Tahun 3', teams: '5 tim', units: '30–40 unit aktif', color: 'green' },
    ].map(y => `
                <div>
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:var(--space-2);">
                    <span style="font-weight:700;color:var(--${y.color});">${y.year}</span>
                    <span style="font-family:var(--font-mono);font-size:var(--fs-sm);font-weight:600;">${y.teams} → ${y.units}</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill ${y.color}" style="width:${y.year === 'Tahun 1' ? '30' : y.year === 'Tahun 2' ? '55' : '100'}%;"></div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div style="margin-top:var(--space-8);padding:var(--space-4);border:2px solid var(--border);border-radius:var(--radius-sm);">
              <h4 style="font-size:var(--fs-sm);font-weight:700;margin-bottom:var(--space-3);color:var(--text-secondary);">Strategi Scaling & Defensibilitas</h4>
              <ul style="display:flex;flex-direction:column;gap:var(--space-2);">
                ${[
      'Database benchmark maturitas lintas pembangkit',
      'Standar best practice berbasis data historis',
      'Moat kompetitif berbasis governance architecture',
      'Pertumbuhan horizontal (unit) + vertikal (MIC Level tier)',
    ].map(i => `
                  <li style="display:flex;align-items:flex-start;gap:var(--space-2);font-size:var(--fs-xs);color:var(--text-secondary);">
                    <span style="color:var(--green);font-weight:700;flex-shrink:0;">▸</span>
                    ${i}
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
