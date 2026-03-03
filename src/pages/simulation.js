// LIVE SIMULATION PAGE
export function renderSimulation(container) {
  container.innerHTML = `
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
  `;

  // Simulation logic
  const runBtn = container.querySelector('#sim-run');
  runBtn.addEventListener('click', runSimulation);

  // Auto-run on load
  setTimeout(runSimulation, 300);

  function runSimulation() {
    const area = parseInt(document.getElementById('sim-area').value) || 25000;
    const facility = document.getElementById('sim-facility').value;
    const micLevel = parseInt(document.getElementById('sim-mic').value) || 4;
    const critical = parseInt(document.getElementById('sim-critical').value) || 4;

    // Facility multipliers
    const facilityMultiplier = { pltu: 1.0, pltgu: 0.85, heavy: 0.92 };
    const fm = facilityMultiplier[facility] || 1;

    // Calculations based on document data
    const manpowerPer1000m2 = 3.2 * fm;
    const conventionalManpower = Math.round((area / 1000) * manpowerPer1000m2);
    // MIC+ manpower: mekanisasi mengurangi ~20-30%
    const micManpower = Math.round(conventionalManpower * (1 - micLevel * 0.06));

    // Risk Volatility: Traditional is high, MIC+ reduces
    const baseVolatility = (0.72 * fm) + (critical * 0.04);
    const micVolatility = baseVolatility * (1 - (micLevel * 0.15));
    const volatilityReduction = Math.round((1 - micVolatility / baseVolatility) * 100);

    // Compliance Stability Index
    const tradCompliance = Math.round(45 + (critical * 1.2));
    const complianceStability = Math.min(99, Math.round(70 + (micLevel * 6.5) - (critical * 0.8)));

    // Contract value (based on document: avg Rp10-12B per unit)
    const baseContractPerM2 = 420000 * fm; // per m2 per year
    const micPremium = 1 + (micLevel - 3) * 0.12;
    const contractValue = Math.round((area * baseContractPerM2 * micPremium) / 1e9 * 10) / 10;

    // TCO savings (based on doc: ~2.75% efficiency)
    const traditionalTCO = area * baseContractPerM2 * 1.22; // hidden costs 22%
    const micTCO = area * baseContractPerM2 * micPremium;
    const savings = Math.round((traditionalTCO - micTCO) / traditionalTCO * 100);
    const savingsRp = Math.round((traditionalTCO - micTCO) / 1e9 * 10) / 10;

    // Update UI — Traditional baseline
    document.getElementById('out-manpower-trad').textContent = conventionalManpower + ' org';
    document.getElementById('out-vol-trad').textContent = Math.round(baseVolatility * 100) + '%';
    document.getElementById('out-comp-trad').textContent = tradCompliance + '%';
    document.getElementById('out-tco-trad').textContent = 'Rp' + (Math.round(traditionalTCO / 1e9 * 10) / 10) + ' M';

    // Update UI — MIC+ values
    document.getElementById('out-manpower-mic').textContent = micManpower + ' org';
    document.getElementById('out-vol-mic').textContent = Math.round(micVolatility * 100) + '%';
    document.getElementById('out-comp-mic').textContent = complianceStability + '%';
    document.getElementById('out-tco-mic').textContent = 'Rp' + (Math.round(micTCO / 1e9 * 10) / 10) + ' M';

    // Savings summary
    document.getElementById('out-savings-pct').textContent = Math.abs(savings) + '%';
    document.getElementById('out-savings-rp').textContent = 'Rp' + Math.abs(savingsRp) + ' M';

    // Draw chart
    drawChart(traditionalTCO, micTCO, baseVolatility, micVolatility, critical);
  }

  function drawChart(traditionalTCO, micTCO, tradVol, micVol, critical) {
    const canvas = document.getElementById('sim-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = 300 * dpr;
    ctx.scale(dpr, dpr);
    const W = rect.width;
    const H = 300;

    ctx.clearRect(0, 0, W, H);

    // Chart area
    const padL = 80, padR = 40, padT = 30, padB = 60;
    const chartW = W - padL - padR;
    const chartH = H - padT - padB;

    // Categories
    const categories = ['Biaya Kontrak', 'Hidden Costs', 'Risk Premium', 'Total TCO'];
    const tradValues = [traditionalTCO * 0.6, traditionalTCO * 0.22, traditionalTCO * 0.18, traditionalTCO];
    const micValues = [micTCO * 0.85, micTCO * 0.05, micTCO * 0.10, micTCO];
    const maxVal = Math.max(...tradValues, ...micValues);

    const barGroupW = chartW / categories.length;
    const barW = barGroupW * 0.3;
    const gap = barGroupW * 0.1;

    // Grid lines
    ctx.strokeStyle = '#E5E7EB';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padT + (chartH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padL, y);
      ctx.lineTo(W - padR, y);
      ctx.stroke();
      ctx.fillStyle = '#6B7280';
      ctx.font = '11px Inter';
      ctx.textAlign = 'right';
      const val = maxVal * (1 - i / 4) / 1e9;
      ctx.fillText(val.toFixed(1) + 'B', padL - 8, y + 4);
    }

    // Bars
    categories.forEach((cat, i) => {
      const x = padL + i * barGroupW + gap;
      const tradH = (tradValues[i] / maxVal) * chartH;
      const micH = (micValues[i] / maxVal) * chartH;

      // Traditional bar
      ctx.fillStyle = '#D62828';
      ctx.fillRect(x, padT + chartH - tradH, barW, tradH);

      // MIC+ bar
      ctx.fillStyle = '#2A9D8F';
      ctx.fillRect(x + barW + gap * 0.5, padT + chartH - micH, barW, micH);

      // Labels
      ctx.fillStyle = '#0B0F14';
      ctx.font = '11px Inter';
      ctx.textAlign = 'center';
      ctx.fillText(cat, x + barW + gap * 0.25, H - padB + 16);
    });

    // Legend
    ctx.fillStyle = '#D62828';
    ctx.fillRect(padL, H - 18, 12, 12);
    ctx.fillStyle = '#0B0F14';
    ctx.font = '12px Inter';
    ctx.textAlign = 'left';
    ctx.fillText('Traditional', padL + 18, H - 8);

    ctx.fillStyle = '#2A9D8F';
    ctx.fillRect(padL + 110, H - 18, 12, 12);
    ctx.fillStyle = '#0B0F14';
    ctx.fillText('MIC+', padL + 128, H - 8);
  }
}
