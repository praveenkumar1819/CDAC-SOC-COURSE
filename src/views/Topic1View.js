// Topic 1 View: SOC Architecture (People, Process, Technology, Data Flow)
// 2-Column Desktop / Stacked Mobile Layout: Text + Animated Conceptual Visuals
import { store } from '../state/store.js';
import { renderProgressionPath } from '../components/ProgressionPath.js';
import { renderDataFlow, initDataFlowEvents } from '../components/DataFlow.js';
import {
  renderTeamVisual,
  renderProcessCycleVisual,
  renderTechEcosystemVisual
} from '../components/ContextualVisuals.js';
import { sound } from '../audio/soundEffects.js';

let selectedRole = 'l1';
let selectedTech = 'siem';

export function renderTopic1View() {
  return `
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${renderProgressionPath('topic-1')}

      <!-- TOPIC HERO & STORY -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-demo">TOPIC 01 • 10:25 AM</span>
          <span class="mono-data">FINCORP CYBER DEFENSE CENTER</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Welcome to the <span class="gradient-text-cyan">SOC.</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--cyan-primary); margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text); margin-bottom: 0.4rem; text-transform: uppercase;">
            SHIFT DISPATCH • 10:25 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "You’ve just clocked in for your very first shift as a Tier 1 SOC Analyst at FinCorp HQ. 
            The monitors hum around you with live global telemetry. Before you can catch your breath and grab your morning coffee, 
            you need to understand the four pillars of the SOC machine: <strong>People, Process, Technology, and Security Data.</strong>"
          </p>
        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 1: PEOPLE (THE SOC TEAM)
           =================================================================== -->
      <section id="section-people" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">PILLAR 01: TEAM</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">ESCALATION HIERARCHY</span>
            </div>
            
            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Who’s in the SOC?
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              A Security Operations Center functions as an elite coordinated unit. Technical escalations flow upward from <strong>L1 ➔ L2 ➔ L3</strong>, while Operational Leadership (SOC Manager) and Executive Strategy (CISO) provide governance and mission direction.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              As an <strong>L1 Analyst</strong>, you sit right in the center of the operational wheel. You review incoming alerts, collect host and user evidence, document triage notes, and decide whether to close the alert or escalate to an L2 specialist.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-people">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Escalation Criteria [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">When to escalate</span>
              </div>
              <div id="tech-details-people" class="tech-box-details" style="display: none;">
                <div>• <strong>Escalate to L2:</strong> Confirmed malware execution, lateral movement evidence, unresolvable anomalies.</div>
                <div>• <strong>Escalate to L3:</strong> Novel zero-day indicators, persistent APT adversary activity requiring threat hunting.</div>
                <div>• <strong>Notify SOC Manager:</strong> Severe incidents impacting Tier-0 systems, SLA breach risks, critical outages.</div>
              </div>
            </div>

            <!-- Role Selector Helper -->
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
              <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted);">QUICK SWITCH:</span>
              ${['l1', 'l2', 'l3', 'intel', 'manager'].map(r => `
                <button class="btn btn-secondary team-role-quick-btn" data-team-role="${r}" style="padding: 0.25rem 0.6rem; font-size: 0.72rem; ${r === selectedRole ? 'border-color: var(--cyan-primary); color: var(--cyan-primary);' : ''}">
                  ${r.toUpperCase()}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div id="team-visual-container">
            ${renderTeamVisual(selectedRole)}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 2: PROCESS (OPERATIONAL LOOP)
           =================================================================== -->
      <section id="section-process" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">PILLAR 02: PROCESS</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">THE SOC LIFECYCLE</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              The 4-Stage Operational Loop
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Security operations are not a static checklist; they are an unbroken circular engine. Every alert passes through four fundamental stages: <strong>Monitor ➔ Detect ➔ Analyze ➔ Respond</strong>.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              Notice where you operate: <strong>Stage 03 (Analyze)</strong>. While SIEM rules handle Detection, humans are required for Analysis because automated rules lack human business context (like knowing that Priya changed her password this morning).
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-process">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Mean Time to Detect & Respond [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">SLA Metrics</span>
              </div>
              <div id="tech-details-process" class="tech-box-details" style="display: none;">
                <div>• <strong>MTTA (Mean Time to Acknowledge):</strong> FinCorp L1 target: &lt; 5 minutes from alert generation.</div>
                <div>• <strong>MTTT (Mean Time to Triage):</strong> FinCorp L1 target: &lt; 15 minutes to inspect user, host, IP, and evidence.</div>
                <div>• <strong>MTTR (Mean Time to Respond):</strong> Total time to isolate host, reset credentials, or close false positive.</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${renderProcessCycleVisual()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 3: TECHNOLOGY (THE ARSENAL)
           =================================================================== -->
      <section id="section-technology" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">PILLAR 03: DEFENSE STACK</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">DEFENSIVE ARSENAL</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              The SOC Technology Ecosystem
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              No single cybersecurity tool catches everything. FinCorp deploys a defense-in-depth architecture where logs stream from endpoints, network switches, and firewalls into specialized security engines.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              Click through the tools on the diagram to see the telemetry each engine contributes. For example, the <strong>SIEM</strong> correlates login bursts, while the <strong>EDR</strong> inspects which local process attempted the authentication.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-tech">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: SIEM vs EDR Telemetry [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Data comparison</span>
              </div>
              <div id="tech-details-tech" class="tech-box-details" style="display: none;">
                <div>• <strong>SIEM (Security Information & Event Management):</strong> Aggregates central logs (Windows Event 4625/4624, Syslog, Firewall).</div>
                <div>• <strong>EDR (Endpoint Detection & Response):</strong> Records process command lines, DLL loads, and registry changes on workstations.</div>
                <div>• <strong>NDR (Network Detection & Response):</strong> Inspects unencrypted protocols, packet metadata, and internal beaconing.</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div id="tech-visual-container">
            ${renderTechEcosystemVisual(selectedTech)}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 4: DATA FLOW (TELEMETRY PIPELINE)
           =================================================================== -->
      <section id="section-dataflow" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-alert">PILLAR 04: DATA PIPELINE</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">FROM PACKET TO ANALYST</span>
          </div>

          <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
            How Security Telemetry Traverses FinCorp
          </h2>

          <p style="font-size: 0.98rem; color: var(--text-secondary); max-width: 820px; line-height: 1.65;">
            Follow the journey of a single packet from the endpoint forwarder through the normalization pipeline, detection correlation rule, and alert dispatch queue.
          </p>
        </div>

        <div id="data-flow-container">
          ${renderDataFlow()}
        </div>
      </section>

      <!-- QUICK CHECK QUIZ -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.9); border: 1px solid rgba(139, 92, 246, 0.35);">
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-quiz">🧠 QUICK CHECK</span>
            <span style="font-size: 0.85rem; color: #d8b4fe; font-family: var(--font-mono);">STAGE 01 KNOWLEDGE CHECK</span>
          </div>
          <h3 style="font-size: 1.3rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Who does the L1 Analyst escalate to when deep forensic host memory inspection is required?
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
            Test your understanding of the technical escalation path vs leadership chain.
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;" id="quiz-t1-options">
            <div class="option-card" data-quiz-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">Directly call the Chief Information Security Officer (CISO)</div>
            </div>
            <div class="option-card" data-quiz-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">Escalate to Tier 2 (L2) Incident Responder with triage documentation</div>
            </div>
            <div class="option-card" data-quiz-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">Notify the SOC Manager to reschedule your shift rotation</div>
            </div>
          </div>

          <div id="quiz-t1-feedback" style="display: none; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"></div>
        </div>
      </section>

      <!-- 10:32 AM STORY TRANSITION EVENT CALLOUT -->
      <section style="position: relative;">
        <div class="glass-panel-alert pulse-alert-node" style="padding: 2.25rem; border-radius: var(--border-radius-lg); text-align: center;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(244, 63, 94, 0.15); border: 2px solid var(--danger); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>

          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: #fca5a5; margin-bottom: 0.5rem; letter-spacing: 0.1em;">
            TIME ADVANCE: 10:32 AM EST • SIEM SIREN SOUNDS
          </div>

          <h2 style="font-size: 1.85rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.75rem;">
            🚨 INCOMING DETECTION: MULTIPLE FAILED LOGINS
          </h2>

          <p style="font-size: 1rem; color: #fecaca; max-width: 680px; margin: 0 auto 1.75rem auto; line-height: 1.6;">
            Your console flashes amber and red. SIEM Rule <span class="mono-data" style="color: #ffffff; background: rgba(244,63,94,0.3);">DET-WIN-0422</span> just triggered on threshold. 
            User <strong style="color: white;">Finance01</strong> on host <strong style="color: white;">FIN-PC-04</strong> has generated 18 failed authentication attempts.
          </p>

          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button id="btn-open-alert-trans" class="btn btn-alert" style="font-size: 1rem; padding: 0.75rem 2rem;">
              OPEN ALERT & BEGIN TRIAGE (TOPIC 02) →
            </button>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function initTopic1Events() {
  initDataFlowEvents();

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

  // Team role interaction
  document.querySelectorAll('[data-team-role]').forEach(el => {
    el.addEventListener('click', (e) => {
      const role = e.currentTarget.getAttribute('data-team-role');
      if (role) {
        selectedRole = role;
        sound.playClick();
        const container = document.getElementById('team-visual-container');
        if (container) {
          container.innerHTML = renderTeamVisual(selectedRole);
          initTopic1Events();
        }
      }
    });
  });

  // Tech tool interaction
  document.querySelectorAll('[data-tech-key]').forEach(el => {
    el.addEventListener('click', (e) => {
      const key = e.currentTarget.getAttribute('data-tech-key');
      if (key) {
        selectedTech = key;
        sound.playClick();
        const container = document.getElementById('tech-visual-container');
        if (container) {
          container.innerHTML = renderTechEcosystemVisual(selectedTech);
          initTopic1Events();
        }
      }
    });
  });

  // Quick Check Quiz
  const options = document.querySelectorAll('#quiz-t1-options .option-card');
  const feedback = document.getElementById('quiz-t1-feedback');

  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      const choice = e.currentTarget.getAttribute('data-quiz-opt');
      options.forEach(o => o.classList.remove('selected-correct', 'selected-wrong'));

      if (choice === 'b') {
        e.currentTarget.classList.add('selected-correct');
        sound.playSuccess();
        store.recordQuizScore('topic-1', 100);
        store.completeCheckpoint('t1-quiz', 50, 'Mastered SOC Escalation Path');

        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(16, 185, 129, 0.15)';
          feedback.style.border = '1px solid var(--success)';
          feedback.style.color = '#a7f3d0';
          feedback.innerHTML = `
            <strong>Correct! (+50 XP)</strong> L1 analysts escalate complex forensic investigations to Tier 2 (L2) Incident Responders. The CISO is reserved for executive disaster declarations, not operational host triage.
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
            <strong>Incorrect.</strong> Remember: L1 reports directly to L2 for technical deep-dives. Executive leadership (CISO) is only notified during critical incident escalation.
          `;
        }
      }
    });
  });

  // Transition Button
  const btnTrans = document.getElementById('btn-open-alert-trans');
  if (btnTrans) {
    btnTrans.addEventListener('click', () => {
      sound.playAlert();
      store.completeTopic('topic-1');
      store.navigate('topic-2');
    });
  }
}
