// Interactive Severity Matrix & Threat Scorer
import { store } from '../state/store.js';
import { sound } from '../audio/soundEffects.js';

let matrixState = {
  assetTier: 2, // 1: Standard PC, 2: Finance/HR Dept PC, 3: Critical Prod DB / DC
  userPrivilege: 1, // 1: Standard Employee, 2: Privileged Specialist, 3: Enterprise Admin
  threatLikelihood: 2, // 1: Low/Benign Context, 2: Suspicious Burst, 3: Confirmed Malicious C2
  scopeExposure: 1 // 1: Single Host, 2: Subnet/VLAN, 3: Enterprise Wide
};

export function renderSeverityMatrix() {
  // Score formula: (Asset * 1.5 + User * 1.5 + Likelihood * 2.0 + Scope * 1.0) / 18 * 10
  const rawScore = (matrixState.assetTier * 1.5 + matrixState.userPrivilege * 1.5 + matrixState.threatLikelihood * 2.0 + matrixState.scopeExposure * 1.0);
  const calculatedScore = Math.min(10, Math.max(1, (rawScore / 18) * 10)).toFixed(1);

  let severityLabel = 'LOW';
  let severityColor = 'var(--success)';
  let barWidth = '25%';

  if (calculatedScore >= 8.5) {
    severityLabel = 'CRITICAL';
    severityColor = 'var(--danger)';
    barWidth = '100%';
  } else if (calculatedScore >= 6.5) {
    severityLabel = 'HIGH';
    severityColor = '#f97316';
    barWidth = '75%';
  } else if (calculatedScore >= 4.0) {
    severityLabel = 'MEDIUM';
    severityColor = '#fbbf24';
    barWidth = '50%';
  } else {
    severityLabel = 'LOW';
    severityColor = 'var(--success)';
    barWidth = '25%';
  }

  return `
    <div style="margin: 2rem 0;">
      <div class="glass-panel" style="padding: 2rem; background: rgba(12, 18, 35, 0.9); border: 1px solid rgba(56, 189, 248, 0.35);">
        
        <!-- Matrix Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.25rem;">
              <span class="genz-badge badge-try-it">DYNAMIC RISK CALCULATOR</span>
              <h3 style="font-size: 1.3rem; color: var(--text-bright); font-weight: 800;">
                Severity = Impact (Asset × Privilege) × Likelihood (Threat × Scope)
              </h3>
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary);">
              Toggle operational variables to see how severity dynamically scales in a real SOC triage workflow.
            </div>
          </div>

          <!-- Dynamic Output Badge -->
          <div style="text-align: right; background: rgba(0,0,0,0.4); padding: 0.75rem 1.25rem; border-radius: 8px; border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">CALCULATED SEVERITY</div>
            <div style="font-size: 1.5rem; font-weight: 800; font-family: var(--font-mono); color: ${severityColor};">
              ${severityLabel} (${calculatedScore} / 10)
            </div>
          </div>
        </div>

        <!-- Gauge Bar -->
        <div class="severity-gauge">
          <div class="severity-gauge-bar" style="width: ${barWidth}; background: ${severityColor}; box-shadow: 0 0 16px ${severityColor};"></div>
        </div>

        <!-- 4 Tweakable Variables -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
          
          <!-- Variable 1: Asset Criticality -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
              01. ASSET CRITICALITY
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              ${[
                { val: 1, label: 'Standard PC (Tier 3)' },
                { val: 2, label: 'FIN-PC-04 Finance (Tier 2)', selected: true },
                { val: 3, label: 'Domain Controller (Tier 0)' }
              ].map(opt => `
                <button class="btn ${matrixState.assetTier === opt.val ? 'btn-primary' : 'btn-secondary'}" data-matrix-param="assetTier" data-val="${opt.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
                  ${opt.label}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Variable 2: User Privilege -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
              02. USER PRIVILEGE
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              ${[
                { val: 1, label: 'Standard (Finance01)', selected: true },
                { val: 2, label: 'VIP / Executive Officer' },
                { val: 3, label: 'Domain / Enterprise Admin' }
              ].map(opt => `
                <button class="btn ${matrixState.userPrivilege === opt.val ? 'btn-primary' : 'btn-secondary'}" data-matrix-param="userPrivilege" data-val="${opt.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
                  ${opt.label}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Variable 3: Threat Likelihood & Evidence -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
              03. THREAT LIKELIHOOD
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              ${[
                { val: 1, label: 'Benign (Ticket / 4624 Success)' },
                { val: 2, label: 'Burst Trigger (Uncertain)', selected: true },
                { val: 3, label: 'Active Malware / Brute Force' }
              ].map(opt => `
                <button class="btn ${matrixState.threatLikelihood === opt.val ? 'btn-primary' : 'btn-secondary'}" data-matrix-param="threatLikelihood" data-val="${opt.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
                  ${opt.label}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Variable 4: Scope & Exposure -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
              04. SCOPE & EXPOSURE
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              ${[
                { val: 1, label: 'Isolated Single Host', selected: true },
                { val: 2, label: 'Internal Subnet (VLAN 20)' },
                { val: 3, label: 'Multi-Site / External Exposed' }
              ].map(opt => `
                <button class="btn ${matrixState.scopeExposure === opt.val ? 'btn-primary' : 'btn-secondary'}" data-matrix-param="scopeExposure" data-val="${opt.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
                  ${opt.label}
                </button>
              `).join('')}
            </div>
          </div>

        </div>

        <!-- Case Insight Box -->
        <div style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 8px; padding: 1.25rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
            <span class="genz-badge badge-key-idea">ANALYST SEVERITY VERDICT</span>
            <span style="font-weight: 700; color: var(--cyan-primary); font-size: 0.95rem;">Why Finance01 Began as Medium (5.8) and De-escalated to Informational / Closed</span>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-bright); line-height: 1.6;">
            When the SIEM first generated <span class="mono-data">ALT-2026-9042</span>, it scored it <strong>Medium (5.8)</strong> because it only knew: <em>Asset = Finance PC (Tier 2), Failures = 18 in 84s</em>. But once YOU (the L1 Analyst) verified the 10:15 AM password reset ticket and the 10:31:45 4624 success, the Likelihood dropped to <strong>Benign</strong>, dropping the true operational risk to near zero.
          </p>
        </div>

      </div>
    </div>
  `;
}

export function initSeverityMatrixEvents() {
  document.querySelectorAll('[data-matrix-param]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const param = e.currentTarget.getAttribute('data-matrix-param');
      const val = parseInt(e.currentTarget.getAttribute('data-val'), 10);
      if (param && !isNaN(val)) {
        matrixState[param] = val;
        sound.playSubtleTick();
        store.completeCheckpoint('check-severity-calculated', 25, 'Explored Dynamic Severity Matrix');
        const container = document.getElementById('severity-matrix-container');
        if (container) {
          container.innerHTML = renderSeverityMatrix();
          initSeverityMatrixEvents();
        }
      }
    });
  });
}
