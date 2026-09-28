// Topic 3 View: Alert Triage (Investigation Path, Entity Context, Evidence Pivot, 7-Tab Panel)
// 2-Column Desktop / Stacked Mobile Layout: Text + Animated Conceptual Visuals
import { store } from '../state/store.js';
import { renderAlertPanel, initAlertPanelEvents } from '../components/AlertPanel.js';
import { renderProgressionPath } from '../components/ProgressionPath.js';
import {
  renderTriageUserVisual,
  renderTriageHostVisual,
  renderTriageIPVisual,
  renderTriageEvidenceVisual,
  renderScrubbableTimelineVisual
} from '../components/ContextualVisuals.js';
import { sound } from '../audio/soundEffects.js';

let activeTimelineStep = 4;

export function renderTopic3View() {
  return `
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${renderProgressionPath('topic-3')}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-investigate">TOPIC 03 • 10:35 AM</span>
          <span class="mono-data">TRIAGE PLAYBOOK EXECUTION</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Now it's <span class="gradient-text-cyan">your alert.</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--cyan-primary); margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text); margin-bottom: 0.4rem; text-transform: uppercase;">
            ACTIVE ASSIGNMENT • 10:35 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "You are the L1 analyst on shift. Case <span class="mono-data">ALT-2026-9042</span> is assigned to you. 
            Do not guess. Do not panic. Follow the 5-stage contextual investigation framework: 
            <strong>User Identity ➔ Host Device ➔ Source IP ➔ Evidence Timeline ➔ Decision.</strong>"
          </p>
        </div>

        <!-- Investigation Path Steps Bar -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 0.75rem; margin-bottom: 1rem;">
          ${[
            { num: '01', title: 'USER', desc: 'Identify Priya Sharma' },
            { num: '02', title: 'HOST', desc: 'FIN-PC-04 specs' },
            { num: '03', title: 'IP', desc: '10.10.20.15 internal' },
            { num: '04', title: 'EVIDENCE', desc: '10:31:45 4624 pivot' },
            { num: '05', title: 'TIMELINE', desc: 'Scrub sequence' }
          ].map(s => `
            <div class="glass-panel" style="padding: 0.85rem; text-align: center; border-color: rgba(56, 189, 248, 0.2);">
              <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--cyan-primary); font-weight: 700;">STAGE ${s.num}</div>
              <div style="font-weight: 800; font-size: 0.88rem; color: var(--text-bright); margin: 0.2rem 0;">${s.title}</div>
              <div style="font-size: 0.72rem; color: var(--text-muted);">${s.desc}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- ===================================================================
           STAGE 1: USER CONTEXT
           =================================================================== -->
      <section id="section-triage-user" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">TRIAGE STAGE 01</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">IDENTITY ENRICHMENT</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Who is the User?
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              The alert names target account <span class="mono-data">Finance01</span>. As an L1 analyst, you immediately query Active Directory or your Identity provider (Okta/Entra ID).
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              You discover the real identity is <strong>Priya Sharma</strong>, a Senior Treasury Analyst in the Finance department. Her account status is Active, and crucial context appears: <em>she updated her password at 10:15 AM today</em>!
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-user">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Identity Triage Checklist [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Key questions</span>
              </div>
              <div id="tech-details-user" class="tech-box-details" style="display: none;">
                <div>• Is the user an active employee, contractor, or terminated account?</div>
                <div>• What role and privilege level does the account have (Standard User vs Domain Admin)?</div>
                <div>• Did the user recently request a password reset or travel internationally?</div>
              </div>
            </div>
          </div>

          <div>
            ${renderTriageUserVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           STAGE 2: HOST CONTEXT
           =================================================================== -->
      <section id="section-triage-host" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">TRIAGE STAGE 02</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">DEVICE ENRICHMENT</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Where did it happen?
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Next, inspect the workstation: <span class="mono-data">FIN-PC-04</span>. Is this an unmanaged rogue laptop on guest Wi-Fi, or an official domain-joined desktop?
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              Telemetry confirms <span class="mono-data">FIN-PC-04</span> is Priya Sharma's dedicated corporate Windows 11 workstation in Tower A, Floor 3. Its EDR agent is healthy and running normally.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-host">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Host Asset Tiers [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Asset criticality</span>
              </div>
              <div id="tech-details-host" class="tech-box-details" style="display: none;">
                <div>• <strong>Tier 0:</strong> Domain Controllers, PKI root CAs, Identity stores.</div>
                <div>• <strong>Tier 1:</strong> Production application servers, databases, ERP systems.</div>
                <div>• <strong>Tier 2:</strong> Standard end-user workstations (e.g. FIN-PC-04).</div>
              </div>
            </div>
          </div>

          <div>
            ${renderTriageHostVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           STAGE 3: IP & NETWORK CONTEXT
           =================================================================== -->
      <section id="section-triage-ip" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">TRIAGE STAGE 03</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">NETWORK PERSPECTIVE</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              What is the Source IP?
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              The alert records Source IP: <span class="mono-data">10.10.20.15</span>. An IP provides crucial network context: Is the login originating from the public Internet, a suspicious Tor exit node, or an internal corporate subnet?
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              <span class="mono-data">10.10.20.15</span> is an internal RFC 1918 private address leased by FinCorp’s DHCP server on the Finance floor. There is zero external internet routing involved.
            </p>
          </div>

          <div>
            ${renderTriageIPVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           STAGE 4: EVIDENCE & THE PIVOT
           =================================================================== -->
      <section id="section-triage-evidence" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-alert">TRIAGE STAGE 04</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-text);">THE ANALYST PIVOT</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Finding the Breakthrough
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Looking at 18 failure logs is alarming. But an expert analyst always reads <em>beyond</em> the failures: <strong>What happened immediately after?</strong>
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              At exactly <strong>10:31:45 AM</strong>, a single <span class="event-id-badge event-id-4624" style="font-size: 0.75rem;">Event 4624</span> succeeded with <strong>Logon Type 2 (Interactive Console)</strong>. And immediately after that, all failure attempts ceased.
            </p>

            <div style="padding: 0.85rem 1rem; background: rgba(56, 189, 248, 0.08); border-left: 3px solid var(--cyan-primary); border-radius: 6px; font-size: 0.88rem; color: var(--text-bright);">
              <strong>Why this matters:</strong> Attackers brute-forcing credentials don't stop after 1 success on an interactive console screen. This pattern points directly to a user locking their PC, returning, and entering their new password!
            </div>
          </div>

          <div>
            ${renderTriageEvidenceVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           STAGE 5: SCRUBBABLE TIMELINE
           =================================================================== -->
      <section id="section-triage-timeline" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-demo">TRIAGE STAGE 05</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">TIMELINE RECONSTRUCTION</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Scrub the Event Timeline
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Time is the ultimate arbiter in incident response. Click through each step on the timeline to scrub through the chain of events from the 10:15 AM password reset to the 10:31:45 resolution.
            </p>
          </div>

          <div id="scrub-timeline-container">
            ${renderScrubbableTimelineVisual(activeTimelineStep)}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           THE 7-TAB ALERT DETAIL CONSOLE
           =================================================================== -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="genz-badge badge-alert">OPERATIONAL TRIAGE BOARD</span>
            <h2 style="font-size: 1.7rem; color: var(--text-bright); margin-top: 0.35rem;">
              Case ALT-2026-9042 Triage Workspace
            </h2>
          </div>
          <div style="font-size: 0.82rem; color: var(--cyan-text); font-family: var(--font-mono);">
            ALL 7 TABS ACTIVE: SUMMARY, USER, HOST, NETWORK, EVENTS, TIMELINE, NOTES
          </div>
        </div>

        <div id="alert-panel-container">
          ${renderAlertPanel()}
        </div>
      </section>

      <!-- L1 OPERATIONAL DECISION POINT -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2.25rem; background: rgba(14, 21, 38, 0.95); border: 1px solid rgba(56, 189, 248, 0.35);">
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-scenario">🎯 L1 DECISION POINT</span>
            <span style="font-size: 0.85rem; color: var(--cyan-text); font-family: var(--font-mono);">SCENARIO ASSESSMENT</span>
          </div>

          <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-bottom: 0.75rem;">
            You observe: 18 failed logins (4625) followed by 1 successful login (4624). What should you do?
          </h3>

          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
            As the L1 analyst on shift, which operational action should you take next?
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;" id="decision-t3-options">
            <div class="option-card" data-dec-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">
                <strong>Immediately declare a SEV-1 attack</strong> and isolate the entire Finance network VLAN without checking user context.
              </div>
            </div>

            <div class="option-card" data-dec-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">
                <strong>Investigate false positive hypotheses</strong> (such as cached credentials or password change delay) before escalating.
              </div>
            </div>

            <div class="option-card" data-dec-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">
                <strong>Delete the alert</strong> without recording notes to reduce queue numbers.
              </div>
            </div>
          </div>

          <div id="decision-t3-feedback" style="display: none; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"></div>
        </div>
      </section>

      <!-- STORY TRANSITION TO TOPIC 4 -->
      <section style="text-align: center;">
        <button id="btn-goto-falsepos" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem;">
          PROCEED TO TOPIC 04: FALSE POSITIVE ANALYSIS →
        </button>
      </section>

    </div>
  `;
}

export function initTopic3Events() {
  initAlertPanelEvents();

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

  // Timeline scrubber interaction
  document.querySelectorAll('[data-timeline-idx]').forEach(el => {
    el.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.getAttribute('data-timeline-idx'), 10);
      activeTimelineStep = idx;
      sound.playClick();
      const container = document.getElementById('scrub-timeline-container');
      if (container) {
        container.innerHTML = renderScrubbableTimelineVisual(activeTimelineStep);
        initTopic3Events();
      }
    });
  });

  // Decision Point Options
  const options = document.querySelectorAll('#decision-t3-options .option-card');
  const feedback = document.getElementById('decision-t3-feedback');

  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      const choice = e.currentTarget.getAttribute('data-dec-opt');
      options.forEach(o => o.classList.remove('selected-correct', 'selected-wrong'));

      if (choice === 'b') {
        e.currentTarget.classList.add('selected-correct');
        sound.playSuccess();
        store.recordQuizScore('topic-3', 100);
        store.completeCheckpoint('t3-decision', 50, 'Formulated Benign False Positive Hypothesis');

        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(16, 185, 129, 0.15)';
          feedback.style.border = '1px solid var(--success)';
          feedback.style.color = '#a7f3d0';
          feedback.innerHTML = `
            <strong>Outstanding Call! (+50 XP)</strong> A sudden burst of 4625s followed immediately by a single 4624 is the classic signature of cached credentials after a password reset. Investigating this benign explanation prevents disruptive and costly false alarms!
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
            <strong>Incorrect.</strong> Isolating an entire corporate department without confirming malicious intent disrupts normal business operations. Always verify user context first.
          `;
        }
      }
    });
  });

  // Next Stage Button
  const btnNext = document.getElementById('btn-goto-falsepos');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      sound.playClick();
      store.completeTopic('topic-3');
      store.navigate('topic-4');
    });
  }
}
