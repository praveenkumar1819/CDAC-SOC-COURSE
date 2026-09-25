// Interactive False Positive Decision Tree & Non-Malicious Category Explorer
import { store } from '../state/store.js';
import { sound } from '../audio/soundEffects.js';

let treeState = {
  step: 1, // 1: Authorized?, 2: Legitimate Explanation?, 3: Logic Bug?, 4: Outcome
  answers: {
    authorized: null,
    legitimate: null,
    logicBug: null
  },
  outcome: null
};

export function renderFalsePositiveTree() {
  return `
    <div style="margin: 2rem 0;">
      
      <!-- Interactive Branching Wizard -->
      <div class="glass-panel" style="padding: 2rem; background: rgba(12, 18, 35, 0.9); border: 1px solid rgba(0, 242, 254, 0.35);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <span class="genz-badge badge-try-it">INTERACTIVE DECISION TREE</span>
            <h3 style="font-size: 1.3rem; color: var(--text-bright); font-weight: 800;">
              Classify the Finance01 Activity
            </h3>
          </div>
          <button id="btn-tree-reset" class="btn btn-secondary" style="font-size: 0.78rem; padding: 0.35rem 0.75rem;">
            Reset Decision Path
          </button>
        </div>

        <!-- Step 1: Was Activity Authorized? -->
        <div class="tree-step-card" style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-primary); font-weight: 700;">QUESTION 01</span>
            <span style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">Was this planned or pre-authorized activity?</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
            Check change management tickets (CAB), penetration test schedules, or vulnerability scan announcements.
          </p>

          <div style="display: flex; gap: 0.75rem;">
            <button class="btn ${treeState.answers.authorized === true ? 'btn-primary' : 'btn-secondary'}" data-tree-answer="auth-yes" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
              YES — Approved Test / Scan
            </button>
            <button class="btn ${treeState.answers.authorized === false ? 'btn-outline-cyan' : 'btn-secondary'}" data-tree-answer="auth-no" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
              NO / UNKNOWN — Unplanned Activity
            </button>
          </div>
        </div>

        <!-- Step 2: Is there a legitimate benign business explanation? (Shown if NO) -->
        ${treeState.answers.authorized === false ? `
          <div class="tree-step-card animate-fade-in" style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-primary); font-weight: 700;">QUESTION 02</span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">Is there a legitimate benign explanation?</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
              Did the user recently reset their password? Are background apps (Outlook, mapped SMB drive, mobile device) syncing with an expired token?
            </p>

            <div style="display: flex; gap: 0.75rem;">
              <button class="btn ${treeState.answers.legitimate === true ? 'btn-primary' : 'btn-secondary'}" data-tree-answer="legit-yes" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                YES — Cached Credential / App Desync
              </button>
              <button class="btn ${treeState.answers.legitimate === false ? 'btn-outline-cyan' : 'btn-secondary'}" data-tree-answer="legit-no" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                NO — No Legitimate Business Reason
              </button>
            </div>
          </div>
        ` : ''}

        <!-- Step 3: Did detection logic trigger incorrectly? (Shown if NO to legitimate) -->
        ${treeState.answers.authorized === false && treeState.answers.legitimate === false ? `
          <div class="tree-step-card animate-fade-in" style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-primary); font-weight: 700;">QUESTION 03</span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">Did the detection logic correlate data incorrectly?</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
              Did the SIEM rule group unrelated users, miss an essential exemption filter, or parse the field names incorrectly?
            </p>

            <div style="display: flex; gap: 0.75rem;">
              <button class="btn ${treeState.answers.logicBug === true ? 'btn-primary' : 'btn-secondary'}" data-tree-answer="logic-yes" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                YES — SIEM Correlation / Ingestion Bug
              </button>
              <button class="btn ${treeState.answers.logicBug === false ? 'btn-alert' : 'btn-secondary'}" data-tree-answer="logic-no" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                NO — Logic is Valid & Attack is Real
              </button>
            </div>
          </div>
        ` : ''}

        <!-- Final Outcome Box -->
        ${renderOutcomeCard(treeState)}

      </div>
    </div>
  `;
}

function renderOutcomeCard(state) {
  if (state.answers.authorized === true) {
    return `
      <div class="glass-panel animate-fade-in-up" style="padding: 1.5rem; border-color: rgba(139, 92, 246, 0.4); background: rgba(26, 17, 44, 0.9);">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-demo">CLASSIFICATION RESULT</span>
          <h4 style="font-size: 1.2rem; color: #c084fc; font-weight: 800;">EXPECTED ACTIVITY</h4>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.75rem;">
          The activity was scheduled and authorized. It generated telemetry because the test intended to validate security detection.
        </p>
        <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
          ✓ <strong>L1 Action:</strong> Link Change Ticket / Pentest authorization in notes, close alert as Expected Activity. Do NOT escalate to Tier 2.
        </div>
      </div>
    `;
  }

  if (state.answers.authorized === false && state.answers.legitimate === true) {
    return `
      <div class="glass-panel animate-fade-in-up" style="padding: 1.5rem; border-color: rgba(16, 185, 129, 0.4); background: rgba(12, 32, 24, 0.9);">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-try-it">CORRECT FOR FINANCE01</span>
          <h4 style="font-size: 1.2rem; color: #86efac; font-weight: 800;">BENIGN ACTIVITY (BENIGN POSITIVE)</h4>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.75rem;">
          Real events happened, matching the detection threshold (18 failures), but the root cause is confirmed harmless: Jane changed her password at 10:15 AM, and Outlook repeatedly attempted to authenticate with the cached old password until she typed the new one at 10:31:45 AM.
        </p>
        <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
          ✓ <strong>L1 Action:</strong> Document Ticket #IT-94821 and the 10:31:45 4624 success, close case as Benign Positive, send user tip to clear Windows Credential Manager if failures recur.
        </div>
      </div>
    `;
  }

  if (state.answers.authorized === false && state.answers.legitimate === false && state.answers.logicBug === true) {
    return `
      <div class="glass-panel animate-fade-in-up" style="padding: 1.5rem; border-color: rgba(99, 102, 241, 0.4); background: rgba(16, 18, 42, 0.9);">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-tech-box">CLASSIFICATION RESULT</span>
          <h4 style="font-size: 1.2rem; color: #a5b4fc; font-weight: 800;">DETECTION ERROR (RULE MISCONFIGURATION)</h4>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.75rem;">
          The underlying raw events occurred, but the detection rule combined unrelated data incorrectly (e.g. aggregating failures across different users or failing to group by user).
        </p>
        <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
          ✓ <strong>L1 Action:</strong> Close alert, file tuning ticket for Detection Engineering team with suggested query syntax fix.
        </div>
      </div>
    `;
  }

  if (state.answers.authorized === false && state.answers.legitimate === false && state.answers.logicBug === false) {
    return `
      <div class="glass-panel animate-fade-in-up" style="padding: 1.5rem; border-color: rgba(239, 68, 68, 0.5); background: rgba(35, 12, 18, 0.9);">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-alert">ACTIVE THREAT</span>
          <h4 style="font-size: 1.2rem; color: #fca5a5; font-weight: 800;">TRUE POSITIVE — MALICIOUS ATTACK</h4>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.75rem;">
          Unauthorized, non-benign, and verified telemetry indicates active brute force, password spraying, or credential stuffing by an unauthorized entity.
        </p>
        <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
          🚨 <strong>L1 Action:</strong> Declare Incident, execute containment (isolate host via EDR, revoke Active Directory sessions), escalate case to L2 with full telemetry payload.
        </div>
      </div>
    `;
  }

  return `
    <div style="text-align: center; padding: 1.5rem; color: var(--text-muted); font-size: 0.85rem; font-family: var(--font-mono);">
      Select answers above to trace the decision tree outcome...
    </div>
  `;
}

export function initFalsePositiveTreeEvents() {
  document.querySelectorAll('[data-tree-answer]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const val = e.currentTarget.getAttribute('data-tree-answer');
      sound.playClick();

      if (val === 'auth-yes') {
        treeState.answers.authorized = true;
      } else if (val === 'auth-no') {
        treeState.answers.authorized = false;
        treeState.answers.legitimate = null;
        treeState.answers.logicBug = null;
      } else if (val === 'legit-yes') {
        treeState.answers.legitimate = true;
        store.completeCheckpoint('check-fp-classified', 50, 'Mastered Benign Positive Classification');
        sound.playSuccess();
      } else if (val === 'legit-no') {
        treeState.answers.legitimate = false;
        treeState.answers.logicBug = null;
      } else if (val === 'logic-yes') {
        treeState.answers.logicBug = true;
      } else if (val === 'logic-no') {
        treeState.answers.logicBug = false;
      }

      const container = document.getElementById('fp-tree-container');
      if (container) {
        container.innerHTML = renderFalsePositiveTree();
        initFalsePositiveTreeEvents();
      }
    });
  });

  const btnReset = document.getElementById('btn-tree-reset');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      treeState = {
        step: 1,
        answers: { authorized: null, legitimate: null, logicBug: null },
        outcome: null
      };
      sound.playClick();
      const container = document.getElementById('fp-tree-container');
      if (container) {
        container.innerHTML = renderFalsePositiveTree();
        initFalsePositiveTreeEvents();
      }
    });
  }
}
