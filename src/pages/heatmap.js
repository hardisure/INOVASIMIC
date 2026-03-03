// INTERACTIVE HEATMAP PAGE
const zoneData = {
  boiler: {
    name: 'Boiler Area',
    traditional: { risk: 'high', score: 35 },
    micplus: { risk: 'low', score: 92 },
    operational: 'Akumulasi debu batu bara pada permukaan boiler dan ducting menyebabkan penurunan efisiensi termal dan risiko spontaneous combustion. Pembersihan ad-hoc meninggalkan residu yang mengganggu heat exchange.',
    environmental: 'Emisi debu fugitif dari area boiler berkontribusi pada pencemaran udara ambien. Ceceran fly ash berpotensi mencemari soil dan water table.',
    iso: 'ISO 41001 Klausul 8.1 — Pengendalian proses outsourcing. Pembersihan boiler wajib terdokumentasi sebagai bagian dari operational control.',
    micLevel: 'Kedisiplinan personel, kondisi fisik area, pengelolaan residu, frekuensi inspeksi, kelengkapan APD (Alat Pelindung Diri).',
    proper: 'Tata Graha (Good Housekeeping) — necessary condition PROPER Biru. Kebersihan area boiler merupakan indikator evaluasi audit lingkungan.',
  },
  turbine: {
    name: 'Turbine Hall',
    traditional: { risk: 'high', score: 40 },
    micplus: { risk: 'low', score: 95 },
    operational: 'Tumpahan pelumas dan minyak di lantai turbine hall menyebabkan risiko slip & fall serta potensi kontaminasi pada komponen presisi turbin.',
    environmental: 'Ceceran oli dan bahan kimia pembersih berpotensi mencemari drainase jika tidak dikelola dengan prosedur yang tepat.',
    iso: 'ISO 41001 Klausul 9.1 — Monitoring, pengukuran, analisis, dan evaluasi. Skor kebersihan turbine hall terukur melalui MIC Level.',
    micLevel: 'Kondisi lantai, pengelolaan tumpahan, kebersihan komponen, dokumentasi aktivitas, kelengkapan safety signage.',
    proper: 'Pengelolaan limbah B3 — oli bekas dan chemical waste wajib dikelola sesuai PermenLH. Kebersihan turbine hall mendukung compliance.',
  },
  conveyor: {
    name: 'Conveyor Belt',
    traditional: { risk: 'high', score: 30 },
    micplus: { risk: 'low', score: 90 },
    operational: 'Area conveyor batu bara merupakan titik kritis akumulasi debu yang memicu spontaneous combustion dan kerusakan bearing mesin. Kebersihan preventif adalah asset loss prevention.',
    environmental: 'Coal dust spillage dari conveyor mencemari area sekitar dan berkontribusi pada pencemaran air permukaan melalui runoff.',
    iso: 'ISO 41001 Klausul 8.1 — Area conveyor memerlukan instruksi kerja (IK) spesifik untuk jenis peralatan dan metode pembersihan.',
    micLevel: 'Frekuensi pembersihan debu, kondisi spillage guard, fungsi dust suppression, kebersihan area transfer point.',
    proper: 'Pengendalian debu fugitif — mandatory requirement dalam evaluasi PROPER. Kegagalan pengendalian debu berisiko PROPER Merah.',
  },
  coalyard: {
    name: 'Coal Yard',
    traditional: { risk: 'high', score: 28 },
    micplus: { risk: 'low', score: 88 },
    operational: 'Coal yard merupakan sumber utama debu fugitif dan risiko kebakaran spontan. Pengelolaan housekeeping yang buruk menjadi faktor kontributor utama insiden.',
    environmental: 'Runoff air hujan dari coal yard berpotensi membawa kontaminan ke badan air. Coal dust menjadi sumber polusi udara signifikan.',
    iso: 'ISO 41001 Klausul 7.5 — Documented information. Seluruh aktivitas pengelolaan coal yard wajib terdokumentasi secara digital.',
    micLevel: 'Kondisi grading area, pengendalian debu, kebersihan perimeter, pengelolaan drainage, response time pembersihan spillage.',
    proper: 'Baku mutu air limbah dan pengendalian emisi — coal yard merupakan critical point dalam penilaian PROPER.',
  },
  tpsb3: {
    name: 'TPS B3',
    traditional: { risk: 'medium', score: 45 },
    micplus: { risk: 'low', score: 94 },
    operational: 'Tempat Penyimpanan Sementara Limbah B3 memerlukan pengelolaan ketat. Kebocoran atau tumpahan dapat menyebabkan kontaminasi tanah dan air tanah.',
    environmental: 'Area TPS B3 (Tempat Penyimpanan Sementara Bahan Berbahaya & Beracun) diawasi langsung oleh KLHK (Kementerian Lingkungan Hidup & Kehutanan). Ketidakpatuhan pengelolaan dapat mengakibatkan sanksi administratif hingga pidana.',
    iso: 'ISO 41001 Klausul 8.1 — pengendalian operasional proses critical. ISO 14001 Klausul 8.1 — operational planning untuk aspek lingkungan signifikan.',
    micLevel: 'Kelengkapan labeling, kondisi containment, kebersihan area, pengelolaan drainase sekunder, dokumentasi manifest.',
    proper: 'Pengelolaan limbah B3 — salah satu indikator utama evaluasi PROPER. Pelanggaran berpotensi mendapat PROPER Hitam.',
  },
  drainase: {
    name: 'Drainase',
    traditional: { risk: 'medium', score: 42 },
    micplus: { risk: 'low', score: 91 },
    operational: 'Sumbatan drainase menyebabkan genangan yang mengganggu operasional dan akses kendaraan. Genangan minyak menjadi fire hazard.',
    environmental: 'Drainase tersumbat menyebabkan overflow air limbah ke badan air. Ceceran minyak di drainase merupakan pelanggaran baku mutu air limbah.',
    iso: 'ISO 41001 Klausul 9.1 — monitoring berkala kondisi drainase sebagai indikator kinerja fasilitas. Skor kebersihan drainase terukur.',
    micLevel: 'Kondisi saluran, tingkat sedimentasi, kebersihan oil trap, fungsi penampungan, frekuensi pembersihan periodik.',
    proper: 'Baku mutu air limbah — kebersihan drainase merupakan necessary condition pencapaian PROPER Biru dan syarat menuju PROPER Hijau.',
  },
};

export function renderHeatmap(container) {
  let currentModel = 'traditional';
  let selectedZone = null;

  function getZoneColor(zone, model) {
    const data = zoneData[zone][model];
    if (data.risk === 'high') return { bg: 'rgba(214,40,40,0.25)', border: '#D62828', text: '#D62828' };
    if (data.risk === 'medium') return { bg: 'rgba(247,127,0,0.25)', border: '#F77F00', text: '#F77F00' };
    return { bg: 'rgba(42,157,143,0.25)', border: '#2A9D8F', text: '#2A9D8F' };
  }

  function renderPanel() {
    if (!selectedZone) {
      return `<div class="heatmap-panel"><h3>Select an Area</h3><p style="font-size:var(--fs-sm);color:var(--text-muted);">Klik pada area di peta untuk melihat detail risiko operasional, risiko lingkungan, klausul ISO terkait, parameter MIC Level, dan dampak PROPER.</p></div>`;
    }
    const z = zoneData[selectedZone];
    const d = z[currentModel];
    const riskColor = d.risk === 'high' ? 'red' : d.risk === 'medium' ? 'amber' : 'green';
    return `
      <div class="heatmap-panel">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-4);">
          <h3>${z.name}</h3>
          <span class="badge badge-${riskColor}">${d.risk.toUpperCase()} RISK</span>
        </div>
        <div style="margin-bottom:var(--space-4);">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-2);">
            <span style="font-size:var(--fs-xs);font-weight:700;text-transform:uppercase;">MIC Level Score</span>
            <span style="font-family:var(--font-mono);font-weight:800;color:var(--${riskColor});">${d.score}%</span>
          </div>
          <div class="progress-bar"><div class="progress-fill ${riskColor}" style="width:${d.score}%;"></div></div>
        </div>
        <div class="panel-section">
          <div class="panel-section-title">Risiko Operasional</div>
          <p>${z.operational}</p>
        </div>
        <div class="panel-section">
          <div class="panel-section-title">Risiko Lingkungan</div>
          <p>${z.environmental}</p>
        </div>
        <div class="panel-section">
          <div class="panel-section-title">Klausul ISO Terkait</div>
          <p>${z.iso}</p>
        </div>
        <div class="panel-section">
          <div class="panel-section-title">Parameter MIC Level</div>
          <p>${z.micLevel}</p>
        </div>
        <div class="panel-section">
          <div class="panel-section-title">Dampak PROPER</div>
          <p>${z.proper}</p>
        </div>
      </div>
    `;
  }

  function renderZones() {
    const zones = [
      { id: 'boiler', label: 'BOILER', top: '5%', left: '5%', width: '42%', height: '40%' },
      { id: 'turbine', label: 'TURBINE HALL', top: '5%', left: '52%', width: '43%', height: '40%' },
      { id: 'conveyor', label: 'CONVEYOR', top: '50%', left: '5%', width: '28%', height: '22%' },
      { id: 'coalyard', label: 'COAL YARD', top: '50%', left: '37%', width: '28%', height: '22%' },
      { id: 'tpsb3', label: 'TPS B3', top: '50%', left: '69%', width: '26%', height: '22%' },
      { id: 'drainase', label: 'DRAINASE', top: '77%', left: '5%', width: '90%', height: '18%' },
    ];
    return zones.map(z => {
      const c = getZoneColor(z.id, currentModel);
      const active = selectedZone === z.id ? 'active' : '';
      return `<div class="heatmap-zone ${active}" id="zone-${z.id}" data-zone="${z.id}" style="top:${z.top};left:${z.left};width:${z.width};height:${z.height};background:${c.bg};border-color:${c.border};color:${c.text};">
        <div style="text-align:center;">
          <div style="font-size:var(--fs-xs);font-weight:800;margin-bottom:2px;">${z.label}</div>
          <div style="font-family:var(--font-mono);font-size:var(--fs-lg);font-weight:900;">${zoneData[z.id][currentModel].score}%</div>
        </div>
      </div>`;
    }).join('');
  }

  function render() {
    container.innerHTML = `
      <section class="page-section">
        <div class="container">
          <div class="section-label">Interactive Risk Heatmap</div>
          <h2 class="section-title">Peta Risiko Fasilitas Industri</h2>
          <p class="section-subtitle mb-6">Klik area pada layout pembangkit untuk melihat detail risiko. Toggle model untuk perbandingan langsung.</p>

          <div style="margin-bottom:var(--space-6);display:flex;align-items:center;gap:var(--space-4);flex-wrap:wrap;">
            <div class="toggle-group" id="model-toggle">
              <button class="toggle-btn ${currentModel === 'traditional' ? 'active-red' : ''}" data-model="traditional">Traditional Model</button>
              <button class="toggle-btn ${currentModel === 'micplus' ? 'active-green' : ''}" data-model="micplus">MIC+ Model</button>
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
              ${renderZones()}
            </div>
            <div id="heatmap-detail">${renderPanel()}</div>
          </div>
        </div>
      </section>
    `;

    // Event listeners
    container.querySelector('#model-toggle').addEventListener('click', (e) => {
      const btn = e.target.closest('[data-model]');
      if (!btn) return;
      currentModel = btn.dataset.model;
      render();
    });

    container.querySelectorAll('.heatmap-zone').forEach(zone => {
      zone.addEventListener('click', () => {
        selectedZone = zone.dataset.zone;
        render();
      });
    });
  }

  render();
}
