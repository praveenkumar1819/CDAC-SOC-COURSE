// Topic 5 View: Severity & Resolution (Visual Scale, SLAs, Case Replay, Escalation Criteria)
// 2-Column Desktop / Stacked Mobile Layout: Text + Animated Conceptual Visuals
import { store } from '../state/store.js';
import { renderSeverityMatrix, initSeverityMatrixEvents } from '../components/SeverityMatrix.js';
import { renderProgressionPath } from '../components/ProgressionPath.js';
import {
  renderSeverityScaleVisual,
  renderFinance01ReplayVisual
} from '../components/ContextualVisuals.js';
import { sound } from '../audio/soundEffects.js';

let activeSeverityLevel = 'low';

export function renderTopic5View() {
  return `
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${renderProgressionPath('topic-5')}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-scenario">TOPIC 05 • 10:52 AM</span>
          <span class="mono-data">DYNAMIC SEVERITY & RESOLUTION</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          How serious <span class="gradient-text-cyan">is it?</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid #fbbf24; margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #fbbf24; margin-bottom: 0.4rem; text-transform: uppercase;">
            ANALYST METHODOLOGY • 10:52 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "Static rules assign generic severity labels. But in the real world, <strong>severity is context-driven</strong>. 
            An alert’s true operational priority depends on the context of the asset, the user's role, and whether the threat is confirmed or benign."
          </p>
        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 1: THE VISUAL SEVERITY SCALE (LOW TO CRITICAL)
           =================================================================== -->
      <section id="section-severity-scale" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">SUBTOPIC 01</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">DYNAMIC RISK CALCULUS</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              The Visual Severity Scale
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Avoid memorizing rigid numerical formulas. Instead, understand how operational context moves an alert along the severity spectrum:
            </p>

            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
              <li>• <strong style="color: #10b981;">LOW:</strong> Known user, expected activity, benign glitch, single workstation (Our Finance01 case!).</li>
              <li>• <strong style="color: #fbbf24;">MEDIUM:</strong> Repeated anomalies, single machine, unexpected timing, external origin.</li>
              <li>• <strong style="color: #f97316;">HIGH:</strong> Lateral movement, privileged credentials (Domain Admin), multi-system impact.</li>
              <li>• <strong style="color: #f43f5e;">CRITICAL:</strong> Active ransomware propagation, Domain Controller breach, mass data exfiltration.</li>
            </ul>

            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-sla">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: SLA Response Windows [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">FinCorp Policy</span>
              </div>
              <div id="tech-details-sla" class="tech-box-details" style="display: none;">
                <div>• <strong>Critical (P1):</strong> 15 minutes response / 1 hour containment.</div>
                <div>• <strong>High (P2):</strong> 30 minutes response / 4 hours containment.</div>
                <div>• <strong>Medium (P3):</strong> 1 hour response / 1 business day resolution.</div>
                <div>• <strong>Low (P4):</strong> 4 hours response / Close as False Positive when documented.</div>
              </div>
            </div>
          </div>

          <div id="severity-scale-container">
            ${renderSeverityScaleVisual(activeSeverityLevel)}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 2: COMPLETE FINCORP INVESTIGATION REPLAY
           =================================================================== -->
      <section id="section-case-replay" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">SUBTOPIC 02</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #86efac;">THE MODULE SYNTHESIS</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              The Complete Investigation Replay
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              You have traced the Finance01 alert from the initial packet arrival to final root cause analysis.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              The evidence is conclusive: <strong>Priya Sharma changed her password $\rightarrow$ Outlook background sync looped with cached credentials $\rightarrow$ 18 failures $\rightarrow$ Console unlocked $\rightarrow$ Session restored.</strong>
            </p>

            <div style="padding: 0.85rem 1rem; background: rgba(16, 185, 129, 0.1); border-left: 3px solid var(--success); border-radius: 6px; font-size: 0.88rem; color: #a7f3d0;">
              <strong>Final Analyst Action:</strong> Downgrade to <strong>LOW SEVERITY</strong>, link the Helpdesk Password Reset ticket, record closing notes in the Case record, and guide Priya to refresh Windows Credential Manager.
            </div>
          </div>

          <div>
            ${renderFinance01ReplayVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           INTERACTIVE SEVERITY MATRIX GAUGE
           =================================================================== -->
      <section style="margin-bottom: 4rem;">
        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-try-it">LIVE RISK CALCULATOR</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-text);">VARIABLE SIMULATOR</span>
          </div>

          <h2 style="font-size: 1.7rem; margin-bottom: 0.5rem; color: var(--text-bright);">
            Interactive Severity Matrix
          </h2>

          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 820px; line-height: 1.6;">
            Adjust the Impact and Likelihood variables below to see how changes in asset tier or attacker success dynamically re-score the alert.
          </p>
        </div>

        <div id="severity-matrix-container">
          ${renderSeverityMatrix()}
        </div>
      </section>

      <!-- FINAL CAPSTONE CHALLENGE CALLOUT -->
      <section style="text-align: center;">
        <div class="glass-panel" style="padding: 2.5rem; max-width: 720px; margin: 0 auto; border-color: rgba(56, 189, 248, 0.35); background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(20, 32, 58, 0.8) 100%);">
          <span class="genz-badge badge-challenge" style="margin-bottom: 0.75rem;">CAPSTONE SIMULATION</span>
          <h2 style="font-size: 1.85rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.75rem;">
            Ready for Your Final L1 Shift Challenge?
          </h2>
          <p style="font-size: 0.98rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.75rem;">
            Put your knowledge to the ultimate test. Synthesize architecture, event telemetry, 7-tab alert triage, false positive logic, and severity scoring to graduate your shift and earn your <strong>FinCorp SOC Analyst L1 Certification</strong>!
          </p>
          <button id="btn-goto-final-challenge" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem;">
            START FINAL L1 CHALLENGE (TOPIC 06) →
          </button>
        </div>
      </section>

    </div>
  `;
}

export function initTopic5Events() {
  initSeverityMatrixEvents();

  // Tech details toggles
  document.querySelectorAll('[data-toggle-details]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const targetId = e.currentTarget.getAttribute('data-toggle-details');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const isHidden = targetEl.style.display === 'none';
        targetEl.style.display = isHidden ? 'block' : 'none';
        sound.playClick();
      }
    });
  });

  // Severity scale interaction
  document.querySelectorAll('[data-severity-lvl]').forEach(el => {
    el.addEventListener('click', (e) => {
      const lvl = e.currentTarget.getAttribute('data-severity-lvl');
      if (lvl) {
        activeSeverityLevel = lvl;
        sound.playClick();
        const container = document.getElementById('severity-scale-container');
        if (container) {
          container.innerHTML = renderSeverityScaleVisual(activeSeverityLevel);
          initTopic5Events();
        }
      }
    });
  });

  // Next Stage Button (To Topic 6 Final Challenge)
  const btnNext = document.getElementById('btn-goto-final-challenge');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      sound.playClick();
      store.completeTopic('topic-5');
      store.navigate('topic-6');
    });
  }
}
