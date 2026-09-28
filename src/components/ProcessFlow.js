// Animated Circular / Stepped SOC Lifecycle Workflow
import { SOC_PROCESS } from '../data/courseData.js';

let activeStepIndex = 2; // Default to ANALYZE (L1 Analyst Focus)

export function renderProcessFlow() {
  const activeStep = SOC_PROCESS[activeStepIndex];

  return `
    <div style="margin: 2rem 0;">
      <!-- Steps Selector Strip -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
        ${SOC_PROCESS.map((step, idx) => {
          const isActive = idx === activeStepIndex;
          const isL1Focus = step.isL1Focus;

          return `
            <div class="glass-panel ${isActive ? 'glass-panel-cyan' : ''}" 
                 data-process-idx="${idx}"
                 style="padding: 1.25rem 1rem; text-align: center; cursor: pointer; transition: all 0.25s ease; position: relative;">
              ${isL1Focus ? `
                <div style="position: absolute; top: -10px; right: 12px; background: var(--cyan-primary); color: #050811; font-size: 0.65rem; font-weight: 800; font-family: var(--font-mono); padding: 0.15rem 0.45rem; border-radius: 4px; box-shadow: 0 0 10px var(--cyan-glow);">
                  YOUR SEAT
                </div>
              ` : ''}

              <div style="width: 44px; height: 44px; border-radius: 50%; background: ${isActive ? 'var(--cyan-subtle)' : 'rgba(255,255,255,0.04)'}; border: 1px solid ${isActive ? 'var(--cyan-primary)' : 'var(--border-subtle)'}; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem auto; color: ${isActive ? 'var(--cyan-primary)' : 'var(--text-secondary)'};">
                <span style="font-weight: 800; font-size: 1rem; font-family: var(--font-mono);">0${idx + 1}</span>
              </div>

              <div style="font-weight: 800; font-size: 0.98rem; color: ${isActive ? 'var(--cyan-primary)' : 'var(--text-bright)'}; letter-spacing: 0.04em;">
                ${step.step}
              </div>

              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">
                ${step.title}
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Active Stage Detailed Card -->
      <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.85); border-color: rgba(56, 189, 248, 0.35);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="genz-badge ${activeStep.isL1Focus ? 'badge-alert' : 'badge-key-idea'}">
              PHASE 0${activeStepIndex + 1} OF 04
            </span>
            <h3 style="font-size: 1.4rem; color: var(--text-bright); font-weight: 800;">
              ${activeStep.step}: ${activeStep.title}
            </h3>
          </div>
          ${activeStep.isL1Focus ? `
            <span class="genz-badge badge-try-it" style="font-size: 0.8rem; padding: 0.3rem 0.75rem;">
              ⭐ TIER 1 CORE MISSION
            </span>
          ` : ''}
        </div>

        <p style="font-size: 1.05rem; color: var(--text-main); margin-bottom: 1.25rem; line-height: 1.6;">
          ${activeStep.desc}
        </p>

        <div style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 1.2rem; display: flex; align-items: flex-start; gap: 0.85rem;">
          <div style="color: var(--cyan-primary); margin-top: 2px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <div>
            <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-primary); font-weight: 700; text-transform: uppercase; margin-bottom: 0.25rem;">
              Analyst Operational Execution
            </div>
            <div style="font-size: 0.95rem; color: var(--text-bright); font-weight: 500;">
              ${activeStep.analystAction}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export function initProcessFlowEvents() {
  document.querySelectorAll('[data-process-idx]').forEach(el => {
    el.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-process-idx'), 10);
      if (!isNaN(idx)) {
        activeStepIndex = idx;
        const container = document.getElementById('process-flow-container');
        if (container) {
          container.innerHTML = renderProcessFlow();
          initProcessFlowEvents();
        }
      }
    });
  });
}
