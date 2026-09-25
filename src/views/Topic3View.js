// Topic 3 View: Alert Triage (Investigation Board, 7-Tab Detail Panel, Entity Checks, Decision Point)
import { store } from '../state/store.js';
import { renderAlertPanel, initAlertPanelEvents } from '../components/AlertPanel.js';
import { renderProgressionPath } from '../components/ProgressionPath.js';
import { sound } from '../audio/soundEffects.js';

export function renderTopic3View() {
  return `
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${renderProgressionPath('topic-3')}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-investigate">TOPIC 03 • 10:35 AM</span>
          <span class="mono-data">TRIAGE PLAYBOOK EXECUTION</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Now it's <span class="gradient-text-cyan">your alert.</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--cyan-primary); margin-bottom: 2.5rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text); margin-bottom: 0.4rem; text-transform: uppercase;">
            ACTIVE ASSIGNMENT • 10:35 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "You are the L1 analyst. The Finance01 alert (<span class="mono-data">ALT-2026-9042</span>) is now your personal operational responsibility. 
            Do not guess. Do not panic. Follow the 5-point triage framework: 
            <strong>Understand the Detection ➔ Inspect the User ➔ Inspect the Host ➔ Inspect the IP ➔ Examine the Evidence Timeline.</strong>"
          </p>
        </div>

        <!-- Triage Flow Strip -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.85rem; margin-bottom: 2.5rem;">
          ${[
            { num: '01', title: 'UNDERSTAND', desc: 'Read alert trigger & rule' },
            { num: '02', title: 'USER', desc: 'Check Jane Miller identity' },
            { num: '03', title: 'HOST', desc: 'FIN-PC-04 workstation info' },
            { num: '04', title: 'IP CONTEXT', desc: '10.10.20.15 internal VLAN' },
            { num: '05', title: 'EVIDENCE', desc: '18x 4625 ➔ 1x 4624 timeline' },
            { num: '06', title: 'DECISION', desc: 'Determine operational path' }
          ].map(s => `
            <div class="glass-panel" style="padding: 1rem; text-align: center; border-color: rgba(0,242,254,0.2);">
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); font-weight: 700;">STEP ${s.num}</div>
              <div style="font-weight: 800; font-size: 0.95rem; color: var(--text-bright); margin: 0.25rem 0;">${s.title}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${s.desc}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- 7-TAB ALERT DETAIL CONSOLE -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="genz-badge badge-alert">LIVE TRIAGE CONSOLE</span>
            <h2 style="font-size: 1.6rem; color: var(--text-bright); margin-top: 0.35rem;">
              Case ALT-2026-9042 Triage Workspace
            </h2>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-secondary); font-family: var(--font-mono);">
            EXPLORE ALL 7 TABS: SUMMARY, USER, HOST, NETWORK, EVENTS, TIMELINE, NOTES
          </div>
        </div>

        <div id="alert-panel-container">
          ${renderAlertPanel()}
        </div>
      </section>

      <!-- L1 OPERATIONAL DECISION POINT -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2.25rem; background: rgba(14, 21, 38, 0.95); border: 1px solid rgba(0, 242, 254, 0.4);">
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-scenario">🎯 L1 DECISION POINT</span>
            <span style="font-size: 0.85rem; color: var(--cyan-text); font-family: var(--font-mono);">SCENARIO ASSESSMENT</span>
          </div>

          <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 0.75rem;">
            You observe: 18 failed logins (4625) followed by 1 successful login (4624). What should you do?
          </h3>

          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
            As the L1 analyst on shift, which operational action should you take next?
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1.5rem;" id="decision-t3-options">
            <div class="option-card" data-dec-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.95rem; color: var(--text-bright);">
                <strong>Immediately declare a SEV-1 attack</strong> and isolate the entire Finance network VLAN without checking user context.
              </div>
            </div>

            <div class="option-card" data-dec-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.95rem; color: var(--text-bright);">
                <strong>Immediately close the alert</strong> because a successful login happened, so everything is definitely fine.
              </div>
            </div>

            <div class="option-card" data-dec-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.95rem; color: var(--text-bright);">
                <strong>Investigate the context and related evidence:</strong> Check user ticket history (password reset?), caller process (Outlook?), and determine if this is a benign cached credential mismatch before deciding.
              </div>
            </div>

            <div class="option-card" data-dec-opt="d">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">D</div>
              <div style="font-size: 0.95rem; color: var(--text-bright);">
                <strong>Ignore the alert entirely</strong> and hope the next shift analyst deals with it.
              </div>
            </div>
          </div>

          <div id="decision-t3-feedback" style="display: none; padding: 1.25rem; border-radius: 8px; font-size: 0.92rem; line-height: 1.6;"></div>
        </div>
      </section>

      <!-- ADVANCE TO TOPIC 4 CTA -->
      <div style="display: flex; justify-content: flex-end;">
        <button id="btn-next-topic-4" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem; box-shadow: 0 0 25px var(--cyan-glow);">
          Proceed to Topic 04: False Positives →
        </button>
      </div>

    </div>
  `;
}

export function initTopic3Events() {
  initAlertPanelEvents();

  // Decision point logic
  document.querySelectorAll('#decision-t3-options .option-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const opt = e.currentTarget.getAttribute('data-dec-opt');
      const feedback = document.getElementById('decision-t3-feedback');

      document.querySelectorAll('#decision-t3-options .option-card').forEach(c => {
        c.classList.remove('selected-correct', 'selected-wrong');
      });

      if (opt === 'c') {
        card.classList.add('selected-correct');
        sound.playSuccess();
        store.completeCheckpoint('check-t3-decision', 60, 'Made Exemplary L1 Triage Decision');
        store.completeTopic('topic-3');
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(16, 185, 129, 0.15)';
          feedback.style.border = '1px solid var(--success)';
          feedback.style.color = '#86efac';
          feedback.innerHTML = `
            <strong>Exemplary Analyst Thinking! Option C is 100% correct.</strong><br/>
            Declaring an attack prematurely (Option A) causes massive business disruption and cries wolf. 
            Closing blindly (Option B) risks missing a real brute force that succeeded. 
            Ignoring it (Option D) is negligence. 
            <strong>A true L1 analyst investigates context:</strong> check IT tickets for password resets, examine caller processes, and correlate the timeline!
          `;
        }
      } else {
        card.classList.add('selected-wrong');
        sound.playClick();
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(245, 158, 11, 0.15)';
          feedback.style.border = '1px solid var(--warning)';
          feedback.style.color = '#fde68a';
          feedback.innerHTML = `
            <strong>Not quite. Look at the evidence again.</strong><br/>
            Rushing to escalate without evidence wastes incident response resources. Closing without checking context risks overlooking a breach. 
            Think like an L1: what external context (tickets, processes) can explain this sudden change?
          `;
        }
      }
    });
  });

  const btnNext = document.getElementById('btn-next-topic-4');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      store.completeTopic('topic-3');
      store.navigate('topic-4', 4);
    });
  }
}
