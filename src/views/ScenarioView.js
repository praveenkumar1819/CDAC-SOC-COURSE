// Current Scenario View: Operational Live Mission HUD
import { store } from '../state/store.js';
import { ALERT_FINANCE01 } from '../data/alertData.js';

export function renderScenarioView() {
  const alert = ALERT_FINANCE01;
  const state = store.state;

  return `
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Operational HUD Header -->
      <section style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-alert">ACTIVE OPERATION</span>
              <span class="mono-data">DEFCON 4 • ELEVATED SURVEILLANCE</span>
            </div>
            <h1 style="font-size: 2.2rem; margin-bottom: 0.35rem;">
              Mission: <span class="gradient-text-cyan">Investigate Finance01</span>
            </h1>
            <p style="font-size: 1rem; color: var(--text-secondary);">
              Operational Case: <span class="mono-data">${alert.id}</span> • Assigned to ${state.profile.callsign} (${state.profile.shiftId})
            </p>
          </div>

          <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-primary" data-nav="topic-3" style="font-size: 0.9rem; padding: 0.65rem 1.4rem;">
              Open Triage Console →
            </button>
            <button class="btn btn-secondary" data-nav="labs" style="font-size: 0.9rem; padding: 0.65rem 1.2rem;">
              SIEM Query Sandbox
            </button>
          </div>
        </div>
      </section>

      <!-- Mission Overview 3-Column Grid -->
      <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 1.5rem; margin-bottom: 3rem;">
        
        <!-- Left Column: Threat Status & Telemetry Summary -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          
          <!-- Live Threat Alert Card -->
          <div class="glass-panel" style="padding: 1.75rem; border-color: rgba(239, 68, 68, 0.4); background: rgba(25, 12, 18, 0.85);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="genz-badge badge-alert">INCIDENT QUEUE ITEM #1</span>
              <span class="mono-data" style="color: #fca5a5;">SEVERITY: MEDIUM (5.8)</span>
            </div>
            <h3 style="font-size: 1.3rem; color: var(--text-bright); margin-bottom: 0.5rem;">
              ${alert.title}
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
              Detection rule <span class="mono-data">${alert.ruleId}</span> observed 18 authentication failures within 84 seconds for target user <span class="mono-data">${alert.user.username}</span> from workstation <span class="mono-data">${alert.host.hostname}</span> (<span class="mono-data">${alert.network.sourceIp}</span>).
            </p>

            <div style="display: flex; gap: 0.75rem;">
              <button class="btn btn-alert" data-nav="topic-3" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                Investigate in Triage Tab
              </button>
              <button class="btn btn-secondary" data-nav="topic-4" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                Check False Positive Tree
              </button>
            </div>
          </div>

          <!-- Entity Summary Cards -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
            <div class="glass-panel" style="padding: 1.25rem; background: rgba(15, 23, 42, 0.7);">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.25rem;">TARGET USER</div>
              <div style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">${alert.user.username}</div>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">${alert.user.fullName}</div>
              <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem;">Finance Executive</div>
            </div>

            <div class="glass-panel" style="padding: 1.25rem; background: rgba(15, 23, 42, 0.7);">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.25rem;">TARGET HOST</div>
              <div style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">${alert.host.hostname}</div>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Windows 11</div>
              <div style="font-size: 0.72rem; color: var(--success); margin-top: 0.35rem;">EDR Active</div>
            </div>

            <div class="glass-panel" style="padding: 1.25rem; background: rgba(15, 23, 42, 0.7);">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.25rem;">SOURCE IP</div>
              <div style="font-weight: 700; font-family: var(--font-mono); color: var(--text-bright); font-size: 0.95rem;">${alert.network.sourceIp}</div>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Finance VLAN 20</div>
              <div style="font-size: 0.72rem; color: var(--cyan-text); margin-top: 0.35rem;">RFC 1918 Private</div>
            </div>
          </div>

        </div>

        <!-- Right Column: Shift Briefing & Objectives -->
        <div class="glass-panel" style="padding: 1.75rem; background: rgba(14, 21, 38, 0.9);">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
            <span class="genz-badge badge-key-idea">MISSION OBJECTIVES</span>
            <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">SHIFT CHECKLIST</span>
          </div>

          <h3 style="font-size: 1.2rem; color: var(--text-bright); margin-bottom: 1rem;">
            Operational Steps for Shift Alpha
          </h3>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${[
              { id: 'topic-1', title: '1. Review SOC Architecture & Escalation Path', completed: state.completedTopics.includes('topic-1') },
              { id: 'topic-2', title: '2. Analyze 4625/4624 Event Streams & Thresholds', completed: state.completedTopics.includes('topic-2') },
              { id: 'topic-3', title: '3. Execute 5-Point Entity Triage on Finance01', completed: state.completedTopics.includes('topic-3') },
              { id: 'topic-4', title: '4. Test False Positive Hypotheses (Cached Credential)', completed: state.completedTopics.includes('topic-4') },
              { id: 'topic-5', title: '5. Calculate Dynamic Severity & Impact Score', completed: state.completedTopics.includes('topic-5') },
              { id: 'topic-6', title: '6. Complete Case ALT-2026-9042 Shift Trial', completed: state.completedTopics.includes('topic-6') }
            ].map(item => `
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px;">
                <div style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.88rem; color: ${item.completed ? 'var(--text-bright)' : 'var(--text-secondary)'};">
                  <span style="color: ${item.completed ? 'var(--success)' : 'var(--text-muted)'}; font-weight: 700;">
                    ${item.completed ? '✓' : '○'}
                  </span>
                  <span>${item.title}</span>
                </div>
                <button class="btn btn-secondary" data-nav="${item.id}" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  Jump →
                </button>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

    </div>
  `;
}
