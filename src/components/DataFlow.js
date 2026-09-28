// Animated Data Pipeline: Sources -> Data -> Detection -> Alert -> L1 Analyst -> Decision
import { DATA_FLOW_STAGES } from '../data/courseData.js';

let activeNodeId = 1;

export function renderDataFlow() {
  const activeStage = DATA_FLOW_STAGES.find(s => s.id === activeNodeId) || DATA_FLOW_STAGES[0];

  return `
    <div style="margin: 2rem 0;">
      <!-- Pipeline Visualization Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span class="genz-badge badge-try-it">LIVE TELEMETRY PIPELINE</span>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--text-bright);">From Endpoint Packet to Analyst Decision</span>
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--cyan-text);">
          CLICK ANY NODE TO INSPECT TELEMETRY
        </div>
      </div>

      <!-- Glowing Interactive Pipeline Nodes -->
      <div class="data-flow-pipe" style="grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));">
        ${DATA_FLOW_STAGES.map(stage => {
          const isActive = stage.id === activeNodeId;
          const isL1 = stage.id === 5;
          const isAlert = stage.id === 4;

          let borderStyle = 'var(--border-subtle)';
          if (isActive) borderStyle = 'var(--cyan-primary)';
          else if (isAlert) borderStyle = 'rgba(239, 68, 68, 0.4)';

          return `
            <div class="flow-node ${isActive ? 'active' : ''} ${isAlert ? 'pulse-alert-node' : ''}" 
                 data-flow-id="${stage.id}"
                 style="border-color: ${borderStyle}; background: ${isActive ? 'var(--cyan-subtle)' : 'var(--bg-card)'};">
              
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: ${isAlert ? 'var(--danger)' : 'var(--cyan-primary)'}; font-weight: 700; margin-bottom: 0.35rem;">
                STAGE 0${stage.id}
              </div>

              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-bright); margin-bottom: 0.25rem;">
                ${stage.title.split('. ')[1]}
              </div>

              <div style="font-size: 0.75rem; color: var(--text-secondary);">
                ${stage.subtitle}
              </div>

              ${isL1 ? `
                <div style="margin-top: 0.6rem; font-size: 0.65rem; background: var(--cyan-subtle); color: var(--cyan-primary); padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 700;">
                  YOU (L1)
                </div>
              ` : ''}

              ${isAlert ? `
                <div style="margin-top: 0.6rem; font-size: 0.65rem; background: var(--danger-subtle); color: #f87171; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 700;">
                  🚨 THRESHOLD
                </div>
              ` : ''}
            </div>
          `;
        }).join('')}
      </div>

      <!-- Animated SVG Conduit -->
      <div style="width: 100%; height: 24px; position: relative; margin: 0.75rem 0 1.5rem 0; overflow: hidden;">
        <svg width="100%" height="24" viewBox="0 0 1000 24" preserveAspectRatio="none">
          <line x1="0" y1="12" x2="1000" y2="12" stroke="rgba(255,255,255,0.1)" stroke-width="2" stroke-dasharray="6,6"/>
          <line x1="0" y1="12" x2="1000" y2="12" stroke="var(--cyan-primary)" stroke-width="2" stroke-dasharray="12,180" style="animation: flow-line 3s linear infinite;"/>
        </svg>
      </div>

      <!-- Stage Detail Callout -->
      <div class="glass-panel" style="padding: 1.5rem; background: var(--bg-surface-elevated); border-color: var(--border-cyan);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <h4 style="font-size: 1.15rem; color: var(--text-bright); font-weight: 700;">
            ${activeStage.title}
          </h4>
          <span class="genz-badge badge-tech-box">FinCorp SOC Live Architecture</span>
        </div>

        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
          ${activeStage.detail}
        </p>

        <div>
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); text-transform: uppercase; margin-bottom: 0.5rem;">
            Active Telemetry Components in this Stage:
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${activeStage.nodes.map(node => `
              <span class="mono-data" style="font-size: 0.8rem; padding: 0.3rem 0.65rem;">
                ${node}
              </span>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initDataFlowEvents() {
  document.querySelectorAll('[data-flow-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.getAttribute('data-flow-id'), 10);
      if (!isNaN(id)) {
        activeNodeId = id;
        const container = document.getElementById('data-flow-container');
        if (container) {
          container.innerHTML = renderDataFlow();
          initDataFlowEvents();
        }
      }
    });
  });
}
