// Topic 4 View: False Positives (Expected Activity, Benign Activity, Detection Errors, Decision Tree)
// 2-Column Desktop / Stacked Mobile Layout: Text + Animated Conceptual Visuals
import { store } from '../state/store.js';
import { renderFalsePositiveTree, initFalsePositiveTreeEvents } from '../components/FalsePositiveTree.js';
import { renderProgressionPath } from '../components/ProgressionPath.js';
import {
  renderExpectedActivityVisual,
  renderCachedCredentialVisual,
  renderDetectionErrorVisual
} from '../components/ContextualVisuals.js';
import { sound } from '../audio/soundEffects.js';

export function renderTopic4View() {
  return `
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${renderProgressionPath('topic-4')}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-demo">TOPIC 04 • 10:45 AM</span>
          <span class="mono-data">SIGNAL VS NOISE TAXONOMY</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Looks suspicious. <span class="gradient-text-cyan">But is it?</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--warning); margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #fde047; margin-bottom: 0.4rem; text-transform: uppercase;">
            ANALYST AWARENESS • 10:45 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "A novice analyst sees 18 failed logins and immediately yells <em>'HACKER!'</em>. 
            A seasoned SOC Analyst knows that <strong>not every alert is malicious</strong>. 
            In fact, the majority of enterprise security alerts fall into three distinct non-malicious categories: 
            <strong>Expected Activity, Benign Activity, or Detection Error.</strong>"
          </p>
        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 1: EXPECTED ACTIVITY (TYPE A)
           =================================================================== -->
      <section id="section-expected" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-demo">CATEGORY 01</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">AUTHORIZED TESTING</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Expected / Authorized Activity
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              This occurs when internal teams perform planned, authorized actions that intentionally test security perimeters or verify backup systems.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              <strong>Example:</strong> FinCorp’s internal Red Team conducts an authorized vulnerability scan from dedicated testing IP addresses during a scheduled maintenance window. The alert fired correctly, but the activity was pre-approved.
            </p>

            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-expected">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Verification Procedure [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Analyst Playbook</span>
              </div>
              <div id="tech-details-expected" class="tech-box-details" style="display: none;">
                <div>• Verify IP source against the approved Security Vulnerability Scanner whitelist.</div>
                <div>• Check ServiceNow / Jira Change Management calendar for approved testing windows.</div>
                <div>• Cross-reference Change Request # (CRQ) and close alert as <em>Expected Activity</em>.</div>
              </div>
            </div>
          </div>

          <div>
            ${renderExpectedActivityVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 2: BENIGN ACTIVITY / CACHED CREDENTIALS (TYPE B)
           =================================================================== -->
      <section id="section-benign" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">CATEGORY 02</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #86efac;">THE FINCORP ROOT CAUSE</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Benign Activity (Cached Credentials)
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Benign positive alerts occur when harmless, legitimate software or user behavior triggers attack thresholds through an unintentional glitch or timing mismatch.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              <strong>The Finance01 Discovery:</strong> Priya Sharma updated her domain password at 10:15 AM. While away from her desk, her locked workstation ran background sync jobs for <strong>Microsoft Outlook and mapped network shares</strong> using the old cached password!
            </p>

            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-cached">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Windows Credential Manager Mechanics [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Root Cause</span>
              </div>
              <div id="tech-details-cached" class="tech-box-details" style="display: none;">
                <div>• Background services cache NTLM hashes in memory until the interactive lock screen is refreshed.</div>
                <div>• Outlook syncs via MAPI/RPC over HTTP every 15–30 seconds.</div>
                <div>• When Priya unlocked her console at 10:31:45 AM, Windows updated her cache, immediately terminating failures.</div>
              </div>
            </div>
          </div>

          <div>
            ${renderCachedCredentialVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 3: DETECTION ERROR (TYPE C)
           =================================================================== -->
      <section id="section-det-error" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">CATEGORY 03</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #a5b4fc;">FLAWED RULE LOGIC</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Detection Logic / Grouping Errors
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Sometimes the alert logic itself is flawed. A poorly configured SIEM rule might aggregate events globally across the enterprise instead of grouping by individual target user.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              <strong>Example:</strong> 10 different employees each mistype their password once at 9:00 AM on Monday morning. If the rule lacks a <span class="mono-data">groupBy: User</span> clause, it sums all 10 unrelated mistakes into one false alarm!
            </p>
          </div>

          <div>
            ${renderDetectionErrorVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           INTERACTIVE DECISION TREE COMPONENT
           =================================================================== -->
      <section style="margin-bottom: 4rem;">
        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-scenario">PRACTICAL LAB INTERACTION</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-text);">BRANCH EXPLORATION</span>
          </div>

          <h2 style="font-size: 1.7rem; margin-bottom: 0.5rem; color: var(--text-bright);">
            Interactive False Positive Decision Tree
          </h2>

          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 820px; line-height: 1.6;">
            Click through the branching paths to see how a professional L1 analyst systematically rules out false positives before escalating to Tier 2.
          </p>
        </div>

        <div id="fp-tree-container">
          ${renderFalsePositiveTree()}
        </div>
      </section>

      <!-- QUICK CHECK QUIZ -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.9); border: 1px solid rgba(139, 92, 246, 0.35);">
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-quiz">🧠 QUICK CHECK</span>
            <span style="font-size: 0.85rem; color: #d8b4fe; font-family: var(--font-mono);">STAGE 04 KNOWLEDGE CHECK</span>
          </div>
          <h3 style="font-size: 1.3rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Why did Case ALT-2026-9042 generate 18 failed login attempts for Priya Sharma?
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
            Synthesize your analysis of the root cause.
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;" id="quiz-t4-options">
            <div class="option-card" data-quiz-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">A Russian APT group was executing a password spray against FinCorp Domain Controllers.</div>
            </div>
            <div class="option-card" data-quiz-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">Background applications on her locked workstation repeatedly retried auth with old cached credentials after a password change.</div>
            </div>
            <div class="option-card" data-quiz-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">Her computer was infected with crypto-mining malware attempting to propagate laterally.</div>
            </div>
          </div>

          <div id="quiz-t4-feedback" style="display: none; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"></div>
        </div>
      </section>

      <!-- STORY TRANSITION TO TOPIC 5 -->
      <section style="text-align: center;">
        <button id="btn-goto-severity" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem;">
          PROCEED TO TOPIC 05: SEVERITY & RESOLUTION →
        </button>
      </section>

    </div>
  `;
}

export function initTopic4Events() {
  initFalsePositiveTreeEvents();

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

  // Quick Check Quiz
  const options = document.querySelectorAll('#quiz-t4-options .option-card');
  const feedback = document.getElementById('quiz-t4-feedback');

  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      const choice = e.currentTarget.getAttribute('data-quiz-opt');
      options.forEach(o => o.classList.remove('selected-correct', 'selected-wrong'));

      if (choice === 'b') {
        e.currentTarget.classList.add('selected-correct');
        sound.playSuccess();
        store.recordQuizScore('topic-4', 100);
        store.completeCheckpoint('t4-quiz', 50, 'Mastered Cached Credential Diagnosis');

        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(16, 185, 129, 0.15)';
          feedback.style.border = '1px solid var(--success)';
          feedback.style.color = '#a7f3d0';
          feedback.innerHTML = `
            <strong>Brilliant Analysis! (+50 XP)</strong> You correctly identified the root cause of the burst: background sync applications (Outlook/Teams) retrying with pre-reset credentials. This is one of the most common benign positive alerts in corporate IT!
          `;
        }
      } else {
        e.currentTarget.classList.add('selected-wrong');
        sound.playError();
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(245, 158, 11, 0.15)';
          feedback.style.border = '1px solid var(--warning)';
          feedback.style.color = '#fde68a';
          feedback.innerHTML = `
            <strong>Incorrect.</strong> Remember: The failures occurred on her own private workstation (FIN-PC-04) immediately following her 10:15 AM password change, and stopped as soon as she unlocked her screen.
          `;
        }
      }
    });
  });

  // Next Stage Button
  const btnNext = document.getElementById('btn-goto-severity');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      sound.playClick();
      store.completeTopic('topic-4');
      store.navigate('topic-5');
    });
  }
}
