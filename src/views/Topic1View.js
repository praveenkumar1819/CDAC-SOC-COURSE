// Topic 1 View: SOC Architecture (People, Process, Technology, Data Flow)
import { store } from '../state/store.js';
import { renderTeamMap, initTeamMapEvents } from '../components/TeamMap.js';
import { renderProcessFlow, initProcessFlowEvents } from '../components/ProcessFlow.js';
import { renderDataFlow, initDataFlowEvents } from '../components/DataFlow.js';
import { renderProgressionPath } from '../components/ProgressionPath.js';
import { SOC_TECH } from '../data/courseData.js';
import { sound } from '../audio/soundEffects.js';

let selectedTechId = 'siem';

export function renderTopic1View() {
  const selectedTech = SOC_TECH.find(t => t.id === selectedTechId) || SOC_TECH[0];

  return `
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${renderProgressionPath('topic-1')}

      <!-- TOPIC HERO & STORY -->
      <section style="margin-bottom: 3rem;">
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

        <!-- 4 Pillars Cards Navigation Overview -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin-bottom: 3rem;">
          <a href="#section-people" style="text-decoration: none;" class="glass-panel" style="padding: 1.5rem; cursor: pointer;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">PILLAR 01</span>
              <h3 style="font-size: 1.15rem; color: var(--text-bright);">PEOPLE</h3>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              Tiered escalation hierarchy from L1 Triage to L2, L3, Domain Specialists, SOC Manager, and CISO.
            </p>
          </a>

          <a href="#section-process" style="text-decoration: none;" class="glass-panel" style="padding: 1.5rem; cursor: pointer;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">PILLAR 02</span>
              <h3 style="font-size: 1.15rem; color: var(--text-bright);">PROCESS</h3>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              The continuous operational lifecycle: Monitor ➔ Detect ➔ Analyze (Your Core Focus) ➔ Respond.
            </p>
          </a>

          <a href="#section-technology" style="text-decoration: none;" class="glass-panel" style="padding: 1.5rem; cursor: pointer;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">PILLAR 03</span>
              <h3 style="font-size: 1.15rem; color: var(--text-bright);">TECHNOLOGY</h3>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              SIEM, EDR, NDR, Secure Email Gateways, Threat Intelligence feeds, and SOAR case management.
            </p>
          </a>

          <a href="#section-dataflow" style="text-decoration: none;" class="glass-panel" style="padding: 1.5rem; cursor: pointer;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-alert">PILLAR 04</span>
              <h3 style="font-size: 1.15rem; color: var(--text-bright);">SECURITY DATA</h3>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              The end-to-end data pipeline: Sources ➔ Logs ➔ Detection ➔ Alert ➔ L1 Triage ➔ Resolution.
            </p>
          </a>
        </div>
      </section>

      <!-- PILLAR 1: PEOPLE -->
      <section id="section-people" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-demo">PILLAR 01: TEAM ARCHITECTURE</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">ESCALATION HIERARCHY</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.75rem;">
          Who's in the SOC?
        </h2>
        <p style="font-size: 1rem; color: var(--text-secondary); max-width: 800px; margin-bottom: 1.5rem;">
          A Security Operations Center functions as an elite coordinated unit. Technical escalations flow upward from <strong>L1 ➔ L2 ➔ L3</strong>, while Operational Leadership (SOC Manager) and Executive Strategy (CISO) provide governance and mission direction.
        </p>

        <div id="team-map-container">
          ${renderTeamMap()}
        </div>
      </section>

      <!-- PILLAR 2: PROCESS -->
      <section id="section-process" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-try-it">PILLAR 02: OPERATIONAL WORKFLOW</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">THE SOC LIFECYCLE</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.75rem;">
          The 4-Stage Operational Loop
        </h2>
        <p style="font-size: 1rem; color: var(--text-secondary); max-width: 800px; margin-bottom: 1.5rem;">
          Security is an unbroken circular engine. Click through the four phases below. Pay special attention to <strong>Stage 03: ANALYZE</strong>, which is where you spend 80% of your time as an L1 analyst.
        </p>

        <div id="process-flow-container">
          ${renderProcessFlow()}
        </div>
      </section>

      <!-- PILLAR 3: TECHNOLOGY -->
      <section id="section-technology" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-tech-box">PILLAR 03: DEFENSIVE ARSENAL</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">TOOLING STACK</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.75rem;">
          The SOC Technology Ecosystem
        </h2>
        <p style="font-size: 1rem; color: var(--text-secondary); max-width: 800px; margin-bottom: 1.5rem;">
          No single tool catches everything. FinCorp uses a defense-in-depth stack to correlate telemetry across endpoints, network perimeters, email inboxes, and cloud systems.
        </p>

        <!-- Tech Cards Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
          ${SOC_TECH.map(tech => `
            <div class="glass-panel" data-tech-card-id="${tech.id}" style="padding: 1.4rem; cursor: pointer; border-color: ${tech.id === selectedTechId ? 'var(--cyan-primary)' : 'var(--border-subtle)'}; background: ${tech.id === selectedTechId ? 'rgba(0, 242, 254, 0.08)' : 'var(--bg-card)'};">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <span class="mono-data" style="font-size: 0.78rem; font-weight: 700;">${tech.name}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">STACK COMPONENT</span>
              </div>
              <h4 style="font-size: 1.05rem; color: var(--text-bright); margin-bottom: 0.35rem;">
                ${tech.fullName}
              </h4>
              <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
                ${tech.role}
              </p>
            </div>
          `).join('')}
        </div>

        <!-- Selected Tech Deep Dive Box -->
        <div class="glass-panel" style="padding: 1.75rem; background: rgba(14, 21, 38, 0.9); border-color: rgba(0, 242, 254, 0.3);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span class="genz-badge badge-tech-box" style="margin-bottom: 0.35rem;">DEEP DIVE TOOLSPEC</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright);">${selectedTech.name} — ${selectedTech.fullName}</h3>
            </div>
            <div style="display: flex; gap: 0.4rem;">
              ${selectedTech.tools.map(t => `<span class="mono-data">${t}</span>`).join('')}
            </div>
          </div>
          <p style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 1.25rem; line-height: 1.6;">
            ${selectedTech.desc}
          </p>
          <div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 8px; padding: 1rem;">
            <span style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-primary); font-weight: 700;">FINCORP APPLICATION:</span>
            <div style="font-size: 0.9rem; color: var(--text-bright); margin-top: 0.25rem;">
              ${selectedTech.finCorpUsage}
            </div>
          </div>
        </div>
      </section>

      <!-- PILLAR 4: SECURITY DATA FLOW -->
      <section id="section-dataflow" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-alert">PILLAR 04: LIVE DATA STREAM</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">END-TO-END PIPELINE</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.75rem;">
          How Security Telemetry Traverses FinCorp
        </h2>
        <p style="font-size: 1rem; color: var(--text-secondary); max-width: 800px; margin-bottom: 1.5rem;">
          Follow the journey of a single packet from Jane Miller’s workstation until it triggers an alert and lands on your desk.
        </p>

        <div id="data-flow-container">
          ${renderDataFlow()}
        </div>
      </section>

      <!-- QUICK CHECK QUIZ -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.9); border: 1px solid rgba(139, 92, 246, 0.4);">
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
        <div class="glass-panel-alert pulse-alert-node" style="padding: 2.5rem; border-radius: var(--border-radius-lg); text-align: center;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(239, 68, 68, 0.2); border: 2px solid var(--danger); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>

          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: #fca5a5; margin-bottom: 0.5rem; letter-spacing: 0.1em;">
            TIME ADVANCE: 10:32 AM EST • SIEM SIREN SOUNDS
          </div>

          <h2 style="font-size: 2rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.75rem;">
            🚨 INCOMING DETECTION: MULTIPLE FAILED LOGINS
          </h2>

          <p style="font-size: 1.05rem; color: #fecaca; max-width: 680px; margin: 0 auto 1.75rem auto; line-height: 1.6;">
            Your console flashes amber and red. SIEM Rule <span class="mono-data" style="color: #ffffff; background: rgba(239,68,68,0.3);">DET-WIN-0422</span> just triggered on threshold. 
            User <strong style="color: white;">Finance01</strong> on host <strong style="color: white;">FIN-PC-04</strong> has generated 18 failed authentication attempts.
          </p>

          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button id="btn-open-alert-trans" class="btn btn-alert" style="font-size: 1.05rem; padding: 0.85rem 2.2rem; box-shadow: 0 0 30px var(--danger-glow);">
              OPEN ALERT & BEGIN TRIAGE (TOPIC 02) →
            </button>
          </div>
        </div>
      </section>

    </div>
  `;
}

export function initTopic1Events() {
  initTeamMapEvents();
  initProcessFlowEvents();
  initDataFlowEvents();

  // Tech card selectors
  document.querySelectorAll('[data-tech-card-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-tech-card-id');
      if (id) {
        selectedTechId = id;
        sound.playClick();
        const app = document.getElementById('view-container');
        if (app) {
          app.innerHTML = renderTopic1View();
          initTopic1Events();
        }
      }
    });
  });

  // Quick check quiz logic
  document.querySelectorAll('#quiz-t1-options .option-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const opt = e.currentTarget.getAttribute('data-quiz-opt');
      const feedback = document.getElementById('quiz-t1-feedback');

      document.querySelectorAll('#quiz-t1-options .option-card').forEach(c => {
        c.classList.remove('selected-correct', 'selected-wrong');
      });

      if (opt === 'b') {
        card.classList.add('selected-correct');
        sound.playSuccess();
        store.completeCheckpoint('check-t1-quiz', 50, 'Mastered SOC Escalation Path');
        store.completeTopic('topic-1');
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(16, 185, 129, 0.15)';
          feedback.style.border = '1px solid var(--success)';
          feedback.style.color = '#86efac';
          feedback.innerHTML = `<strong>Spot on!</strong> The technical escalation chain is strictly L1 ➔ L2 (Tier 2 Incident Response) ➔ L3. The CISO and SOC Manager handle corporate and operational management, not tier-2 forensic log triage.`;
        }
      } else {
        card.classList.add('selected-wrong');
        sound.playClick();
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(245, 158, 11, 0.15)';
          feedback.style.border = '1px solid var(--warning)';
          feedback.style.color = '#fde68a';
          feedback.innerHTML = `Not quite. Remember the technical escalation chain: L1 reviews and documents, then escalates technical deep-dives to <strong>L2 (Tier 2 Incident Response)</strong>. Look at the Team Map again!`;
        }
      }
    });
  });

  // Story transition CTA
  const btnTrans = document.getElementById('btn-open-alert-trans');
  if (btnTrans) {
    btnTrans.addEventListener('click', () => {
      store.completeTopic('topic-1');
      store.triggerAlertPulse();
      store.navigate('topic-2', 2);
    });
  }
}
