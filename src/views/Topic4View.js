// Topic 4 View: False Positives (Expected Activity, Benign Activity, Detection Errors, Decision Tree)
import { store } from '../state/store.js';
import { renderFalsePositiveTree, initFalsePositiveTreeEvents } from '../components/FalsePositiveTree.js';
import { renderProgressionPath } from '../components/ProgressionPath.js';
import { sound } from '../audio/soundEffects.js';

export function renderTopic4View() {
  return `
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${renderProgressionPath('topic-4')}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-demo">TOPIC 04 • 10:45 AM</span>
          <span class="mono-data">SIGNAL VS NOISE</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Looks suspicious. <span class="gradient-text-cyan">But is it?</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--warning); margin-bottom: 2.5rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #fde047; margin-bottom: 0.4rem; text-transform: uppercase;">
            ANALYST AWARENESS • 10:45 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "A novice analyst sees 18 failed logins and yells <em>'HACKER!'</em>. 
            A seasoned SOC Analyst knows that <strong>not every alert is malicious</strong>. 
            In fact, the majority of enterprise security alerts fall into three distinct non-malicious categories: 
            <strong>Expected Activity, Benign Activity, or Detection Error.</strong>"
          </p>
        </div>
      </section>

      <!-- THREE NON-MALICIOUS CATEGORIES -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-key-idea">CORE TAXONOMY</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">THE THREE NON-MALICIOUS FORMS</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">
          Understanding Non-Malicious Alerts
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          
          <!-- Category 1: Expected Activity -->
          <div class="glass-panel" style="padding: 1.75rem; border-color: rgba(139, 92, 246, 0.35);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="genz-badge badge-demo">CATEGORY 01</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #c084fc;">AUTHORIZED</span>
            </div>
            <h3 style="font-size: 1.3rem; color: #c084fc; margin-bottom: 0.5rem;">
              Expected Activity
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
              Activity that is fully authorized, scheduled, and expected by internal teams.
            </p>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.85rem; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-bright);">
              <strong>Example:</strong> FinCorp Internal Security Team conducting an approved penetration test or vulnerability vulnerability scan from authorized IP ranges.
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              <strong>Analyst Action:</strong> Verify against Change Management / Pentest calendar, document authorization ticket, close as Expected.
            </div>
          </div>

          <!-- Category 2: Benign Activity -->
          <div class="glass-panel" style="padding: 1.75rem; border-color: rgba(16, 185, 129, 0.35); background: rgba(12, 28, 22, 0.7);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="genz-badge badge-try-it">CATEGORY 02 (FINANCE01)</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #86efac;">HARMLESS GLITCH</span>
            </div>
            <h3 style="font-size: 1.3rem; color: #86efac; margin-bottom: 0.5rem;">
              Benign Activity
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
              Legitimate user or system behavior that unintentionally mimics attack patterns.
            </p>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.85rem; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-bright);">
              <strong>Finance01 Example:</strong> Jane changes domain password. Outlook repeatedly retries background sync using cached credentials, generating 18 failures until Jane logs on.
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              <strong>Analyst Action:</strong> Link password reset ticket, verify 4624 success, close as Benign Positive, guide user to purge Credential Manager.
            </div>
          </div>

          <!-- Category 3: Detection Error -->
          <div class="glass-panel" style="padding: 1.75rem; border-color: rgba(99, 102, 241, 0.35);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="genz-badge badge-tech-box">CATEGORY 03</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #a5b4fc;">RULE LOGIC BUG</span>
            </div>
            <h3 style="font-size: 1.3rem; color: #a5b4fc; margin-bottom: 0.5rem;">
              Detection Error
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
              The detection rule logic or data pipeline caused an incorrect conclusion.
            </p>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.85rem; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-bright);">
              <strong>Example:</strong> Rule looks for 5 failures, but combines 1 typo from Alice, 1 typo from Bob, and 1 typo from Charlie into a fake "coordinated spray".
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              <strong>Analyst Action:</strong> Close alert, file tuning ticket for Detection Engineering to group query by <span class="mono-data">TargetUserName</span>.
            </div>
          </div>

        </div>
      </section>

      <!-- BENIGN ACTIVITY ANIMATED DIAGRAM (CACHED CREDENTIAL) -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.95); border: 1px solid rgba(0, 242, 254, 0.35);">
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-demo">THE CACHED CREDENTIAL ANATOMY</span>
            <span style="font-size: 0.85rem; color: var(--cyan-text); font-family: var(--font-mono);">WHAT REALLY HAPPENED TO FINANCE01</span>
          </div>

          <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 1.25rem;">
            How a Simple Password Change Triggered a SIEM Storm
          </h3>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.15rem; text-align: center;">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted);">STEP 01 (10:15 AM)</div>
              <div style="font-weight: 700; color: var(--text-bright); margin: 0.35rem 0;">Password Reset</div>
              <p style="font-size: 0.78rem; color: var(--text-secondary);">Jane changes domain password on portal from phone.</p>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.15rem; text-align: center;">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted);">STEP 02 (10:30 AM)</div>
              <div style="font-weight: 700; color: var(--text-bright); margin: 0.35rem 0;">Laptop Wakes Up</div>
              <p style="font-size: 0.78rem; color: var(--text-secondary);">FIN-PC-04 wakes. Outlook has OLD password in memory.</p>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.15rem; text-align: center;">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--danger); font-weight: 700;">STEP 03 (10:30-10:31)</div>
              <div style="font-weight: 700; color: var(--text-bright); margin: 0.35rem 0;">18x 4625 Failures</div>
              <p style="font-size: 0.78rem; color: var(--text-secondary);">Outlook repeatedly retries sync against AD with old token.</p>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(239,68,68,0.3); border-radius: 8px; padding: 1.15rem; text-align: center;">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--danger); font-weight: 700;">STEP 04 (10:32 AM)</div>
              <div style="font-weight: 700; color: var(--text-bright); margin: 0.35rem 0;">🚨 Alert ALT-9042</div>
              <p style="font-size: 0.78rem; color: var(--text-secondary);">Threshold rule trips: ≥10 failures in 120 seconds!</p>
            </div>

            <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); border-radius: 8px; padding: 1.15rem; text-align: center;">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--success); font-weight: 700;">STEP 05 (10:31:45 AM)</div>
              <div style="font-weight: 700; color: #86efac; margin: 0.35rem 0;">✓ 4624 Success</div>
              <p style="font-size: 0.78rem; color: var(--text-secondary);">Jane enters new password at desk. Failures stop immediately!</p>
            </div>
          </div>

          <!-- TECH BOX CALLOUT -->
          <div class="callout-box callout-tech-box" style="margin-bottom: 0;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">🧩 TECH BOX: DETECTION ERRORS</span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 0.95rem;">Rule Flaws vs Event Reality</span>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
              "Detection error does <strong>not</strong> mean the underlying events did not happen. It means the <strong>alert conclusion</strong> was produced incorrectly due to flawed correlation syntax, faulty aggregation windows, or missing entity groupings."
            </p>
          </div>
        </div>
      </section>

      <!-- INTERACTIVE FALSE POSITIVE DECISION TREE -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="genz-badge badge-try-it">INTERACTIVE FRAMEWORK</span>
            <h2 style="font-size: 1.6rem; color: var(--text-bright); margin-top: 0.35rem;">
              The False Positive Decision Tree
            </h2>
          </div>
          <div style="font-size: 0.82rem; color: var(--cyan-text); font-family: var(--font-mono);">
            WALK THROUGH THE THREE CRITICAL QUESTIONS
          </div>
        </div>

        <div id="fp-tree-container">
          ${renderFalsePositiveTree()}
        </div>
      </section>

      <!-- ADVANCE TO TOPIC 5 CTA -->
      <div style="display: flex; justify-content: flex-end;">
        <button id="btn-next-topic-5" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem; box-shadow: 0 0 25px var(--cyan-glow);">
          Proceed to Topic 05: Severity & Escalation →
        </button>
      </div>

    </div>
  `;
}

export function initTopic4Events() {
  initFalsePositiveTreeEvents();

  const btnNext = document.getElementById('btn-next-topic-5');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      store.completeTopic('topic-4');
      store.navigate('topic-5', 5);
    });
  }
}
