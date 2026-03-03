// FINANCIAL IMPACT PAGE
export function renderFinancial(container) {
  container.innerHTML = `
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
              ${['Revenue-generating — margin lebih tinggi dari model tradisional', 'Scalable — berbasis governance framework, bukan headcount', 'Defensible — moat kompetitif berbasis arsitektur tata kelola', 'Recurring — kontrak jangka panjang dengan evaluasi berkala'].map(item => `
                <li style="display:flex;align-items:flex-start;gap:var(--space-2);font-size:var(--fs-sm);line-height:var(--lh-snug);">
                  <span style="color:var(--green);font-weight:700;flex-shrink:0;">✓</span>
                  ${item}
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    </section>
  `;

  // Draw revenue chart
  setTimeout(() => {
    const canvas = document.getElementById('revenue-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = 280 * dpr;
    ctx.scale(dpr, dpr);
    const W = rect.width;
    const H = 280;
    const padL = 80, padR = 40, padT = 20, padB = 50;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;

    const years = ['Tahun 1', 'Tahun 2', 'Tahun 3'];
    const minVals = [220, 300, 380];
    const maxVals = [250, 360, 480];
    const maxVal = 520;

    // Grid
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = padT + (chartH / 5) * i;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(W - padR, y);
      ctx.stroke();
      ctx.fillStyle = '#6B7280';
      ctx.font = '11px Inter';
      ctx.textAlign = 'right';
      ctx.fillText(Math.round(maxVal * (1 - i / 5)) + '', padL - 8, y + 4);
    }

    const barGroupW = chartW / years.length;
    const barW = barGroupW * 0.5;

    years.forEach((year, i) => {
      const x = padL + i * barGroupW + (barGroupW - barW) / 2;
      const minH = (minVals[i] / maxVal) * chartH;
      const maxH = (maxVals[i] / maxVal) * chartH;

      // Max bar (lighter)
      ctx.fillStyle = 'rgba(0,87,184,0.2)';
      ctx.fillRect(x, padT + chartH - maxH, barW, maxH);

      // Min bar (solid)
      ctx.fillStyle = '#0057B8';
      ctx.fillRect(x, padT + chartH - minH, barW, minH);

      // Value labels
      ctx.fillStyle = '#0B0F14';
      ctx.font = 'bold 12px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(minVals[i] + '–' + maxVals[i] + ' M', x + barW / 2, padT + chartH - maxH - 8);

      // Year labels
      ctx.fillStyle = '#0B0F14';
      ctx.font = '12px Inter';
      ctx.fillText(year, x + barW / 2, H - padB + 20);
    });
  }, 200);
}
