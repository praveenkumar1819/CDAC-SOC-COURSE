// Topic 2 View: Alerts & Events (4625/4624 Visualizer, Threshold Logic, Incident vs Case)
// 2-Column Desktop / Stacked Mobile Layout: Text + Animated Conceptual Visuals
import { store } from '../state/store.js';
import { renderEventVisualizer, initEventVisualizerEvents } from '../components/EventVisualizer.js';
import { renderProgressionPath } from '../components/ProgressionPath.js';
import {
  renderEventGenerationVisual,
  renderEvent4625Visual,
  renderEvent4624Visual,
  renderEventToAlertVisual,
  renderIncidentLifecycleVisual
} from '../components/ContextualVisuals.js';
import { sound } from '../audio/soundEffects.js';

export function renderTopic2View() {
  return `
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${renderProgressionPath('topic-2')}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-alert">TOPIC 02 • 10:32 AM</span>
          <span class="mono-data">THE ANATOMY OF TELEMETRY</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Alerts & <span class="gradient-text-cyan">Events.</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--danger); margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #fca5a5; margin-bottom: 0.4rem; text-transform: uppercase;">
            SHIFT CONTEXT • 10:32 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "You click the flashing alert on your FinCorp dashboard. Before jumping to wild conclusions, you must distinguish between 
            the building blocks of cybersecurity operations: <strong>What is a raw Event? How does it become an Alert? When does it become an Incident? And why is every investigation tracked in a Case?</strong>"
          </p>
        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 1: WHAT IS AN EVENT?
           =================================================================== -->
      <section id="section-event-def" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">SUBTOPIC 01</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">RAW TELEMETRY</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              What is an Event?
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              An <strong>Event</strong> is simply an observable change of state on a computer system or network. It is the fundamental atom of security telemetry. Every time a user types a password, opens a document, or connects to Wi-Fi, the operating system kernel writes an immutable event log.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              FinCorp’s corporate infrastructure generates over <strong>50,000 events every second</strong>. Over 99.99% of them are completely routine. A single event is rarely an emergency.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-events">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Windows Event Log Architecture [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">OS Subsystems</span>
              </div>
              <div id="tech-details-events" class="tech-box-details" style="display: none;">
                <div>• <strong>Location:</strong> <code class="mono-data">C:\\Windows\\System32\\winevt\\Logs\\Security.evtx</code></div>
                <div>• <strong>Auditing Engine:</strong> Controlled by Group Policy (GPO): <em>Audit Logon Events</em>.</div>
                <div>• <strong>Channel:</strong> Security channel requires administrative permissions to read.</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${renderEventGenerationVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 2: EVENT ID 4625 (FAILED LOGON)
           =================================================================== -->
      <section id="section-4625" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-alert">SUBTOPIC 02</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #fca5a5;">WINDOWS SECURITY</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Event ID 4625: Failed Authentication
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Whenever an authentication attempt fails on a Windows host, the Local Security Authority Subsystem Service (LSASS) records <strong>Event ID 4625</strong> in the Security event log.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              In our FinCorp scenario, <strong>18 of these events</strong> fired in rapid succession for user <span class="mono-data">Finance01</span> on workstation <span class="mono-data">FIN-PC-04</span>. Inspect the log card on the right to examine the critical forensic fields.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-substatus">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Critical Substatus Error Codes [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Forensic decoding</span>
              </div>
              <div id="tech-details-substatus" class="tech-box-details" style="display: none;">
                <div>• <code class="mono-data">0xC000006A</code>: User name is correct, but the password was invalid (Crucial for cached credential diagnosis!).</div>
                <div>• <code class="mono-data">0xC0000064</code>: The specified user account does not exist (Common in external spray attacks).</div>
                <div>• <code class="mono-data">0xC0000234</code>: The user account is currently locked out due to threshold violations.</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${renderEvent4625Visual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 3: EVENT ID 4624 (SUCCESSFUL LOGON)
           =================================================================== -->
      <section id="section-4624" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">SUBTOPIC 03</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #a7f3d0;">SESSION CREATION</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Event ID 4624: Successful Logon
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              When correct credentials are submitted and accepted, Windows logs <strong>Event ID 4624</strong>. This creates a new security token and interactive or network session for the user.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              Remember the golden rule of SOC triage: <strong>Compare 4625 with 4624</strong>.
              If failures stop immediately when a 4624 occurs at the physical workstation, the human user has almost certainly returned to their desk and typed their valid password!
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-logontypes">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Windows Logon Types Decoded [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Type 2 vs Type 3</span>
              </div>
              <div id="tech-details-logontypes" class="tech-box-details" style="display: none;">
                <div>• <strong>Logon Type 2 (Interactive):</strong> Physical keyboard/console login at the computer screen.</div>
                <div>• <strong>Logon Type 3 (Network):</strong> Connecting remotely across the network (e.g. SMB file share, IIS website).</div>
                <div>• <strong>Logon Type 10 (RemoteInteractive):</strong> Remote Desktop Protocol (RDP) session.</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${renderEvent4624Visual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 4: FROM EVENTS TO ALERT
           =================================================================== -->
      <section id="section-detection-rule" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">SUBTOPIC 04</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">SIEM CORRELATION</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              How Events Become an Alert
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Why doesn't the SOC sound an alarm on every single failed password? Because humans mistype passwords every day. Alerting on a single failure would cause unbearable analyst alert fatigue.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              Instead, SIEM engineers write <strong>Detection Rules</strong> with threshold conditions. Rule <span class="mono-data">DET-WIN-0422</span> requires <strong>10 or more failures within 120 seconds</strong> before promoting raw events into an Alert.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-query">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Splunk / KQL Detection Query [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">SIEM Syntax</span>
              </div>
              <div id="tech-details-query" class="tech-box-details" style="display: none;">
                <pre style="background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 4px; font-size: 0.78rem; color: #7dd3fc; overflow-x: auto;">
SecurityEvent
| where EventID == 4625
| summarize FailureCount = count() by TargetUserName, Computer, bin(TimeGenerated, 2m)
| where FailureCount >= 10
                </pre>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${renderEventToAlertVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 5: INCIDENT & CASE LIFECYCLE
           =================================================================== -->
      <section id="section-lifecycle" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">SUBTOPIC 05</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">THE TRIAGE PYRAMID</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Event ➔ Alert ➔ Incident ➔ Case
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Understand the exact vocabulary:
            </p>

            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.55rem; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
              <li>• <strong style="color: var(--text-bright);">Event:</strong> Something happened (recorded log).</li>
              <li>• <strong style="color: var(--cyan-text);">Alert:</strong> Detection rule triggered threshold $\rightarrow$ Needs human review.</li>
              <li>• <strong style="color: #fbbf24;">Investigation:</strong> Analyst examines evidence, user, host, and IP.</li>
              <li>• <strong style="color: var(--danger);">Incident:</strong> Confirmed breach or unauthorized security violation.</li>
              <li>• <strong style="color: #a78bfa;">Case:</strong> The formal audit ticket where findings and closing disposition are logged.</li>
            </ul>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${renderIncidentLifecycleVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           INTERACTIVE EVENT STREAM VISUALIZER (Step +1, Auto Play, 19 Events)
           =================================================================== -->
      <section style="margin-bottom: 4rem;">
        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-try-it">PRACTICAL LAB INTERACTION</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-text);">LIVE STREAM CONTROLS</span>
          </div>

          <h2 style="font-size: 1.7rem; margin-bottom: 0.5rem; color: var(--text-bright);">
            Step Through the FIN-PC-04 Event Log
          </h2>

          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 820px; line-height: 1.6;">
            Watch the events occur in chronological order. Click <strong>Step Next Event (+1)</strong> or <strong>Auto Play</strong> to see the SIEM detection threshold gauge fill up from 0 to 10 failures.
          </p>
        </div>

        <div id="event-vis-container">
          ${renderEventVisualizer()}
        </div>
      </section>

      <!-- QUICK CHECK QUIZ -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.9); border: 1px solid rgba(139, 92, 246, 0.35);">
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-quiz">🧠 QUICK CHECK</span>
            <span style="font-size: 0.85rem; color: #d8b4fe; font-family: var(--font-mono);">STAGE 02 KNOWLEDGE CHECK</span>
          </div>
          <h3 style="font-size: 1.3rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            What is the key difference between Event ID 4625 and Event ID 4624?
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
            Confirm your telemetry mastery before heading to the 7-Tab Alert Triage Board.
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;" id="quiz-t2-options">
            <div class="option-card" data-quiz-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">4625 is an active ransomware file encryption event; 4624 is a normal file download.</div>
            </div>
            <div class="option-card" data-quiz-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">4625 records a failed authentication attempt; 4624 records a successful logon session.</div>
            </div>
            <div class="option-card" data-quiz-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">4625 only occurs on Linux web servers; 4624 only occurs on network routers.</div>
            </div>
          </div>

          <div id="quiz-t2-feedback" style="display: none; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"></div>
        </div>
      </section>

      <!-- STORY TRANSITION TO TOPIC 3 -->
      <section style="text-align: center;">
        <button id="btn-goto-triage" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem;">
          PROCEED TO TOPIC 03: ALERT TRIAGE CONSOLE →
        </button>
      </section>

    </div>
  `;
}

export function initTopic2Events() {
  initEventVisualizerEvents();

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
  const options = document.querySelectorAll('#quiz-t2-options .option-card');
  const feedback = document.getElementById('quiz-t2-feedback');

  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      const choice = e.currentTarget.getAttribute('data-quiz-opt');
      options.forEach(o => o.classList.remove('selected-correct', 'selected-wrong'));

      if (choice === 'b') {
        e.currentTarget.classList.add('selected-correct');
        sound.playSuccess();
        store.recordQuizScore('topic-2', 100);
        store.completeCheckpoint('t2-quiz', 50, 'Mastered Event 4625 vs 4624');

        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(16, 185, 129, 0.15)';
          feedback.style.border = '1px solid var(--success)';
          feedback.style.color = '#a7f3d0';
          feedback.innerHTML = `
            <strong>Correct! (+50 XP)</strong> 4625 records failed authentications (with substatus codes like 0xC000006A), while 4624 records a successfully created logon session.
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
            <strong>Incorrect.</strong> Remember: 4625 = Authentication Failure (Red), 4624 = Authentication Success (Green).
          `;
        }
      }
    });
  });

  // Next Stage Button
  const btnNext = document.getElementById('btn-goto-triage');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      sound.playClick();
      store.completeTopic('topic-2');
      store.navigate('topic-3');
    });
  }
}
