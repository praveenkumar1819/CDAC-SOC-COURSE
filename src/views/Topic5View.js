// Topic 5 View: Severity & Escalation (Impact x Likelihood, Asset Tiers, Dynamic Matrix)
import { store } from '../state/store.js';
import { renderSeverityMatrix, initSeverityMatrixEvents } from '../components/SeverityMatrix.js';
import { renderProgressionPath } from '../components/ProgressionPath.js';
import { sound } from '../audio/soundEffects.js';

export function renderTopic5View() {
  return `
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${renderProgressionPath('topic-5')}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-scenario">TOPIC 05 • 10:52 AM</span>
          <span class="mono-data">RISK CALCULUS & ESCALATION CRITERIA</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          How serious <span class="gradient-text-cyan">is it?</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid #fbbf24; margin-bottom: 2.5rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #fbbf24; margin-bottom: 0.4rem; text-transform: uppercase;">
            ANALYST METHODOLOGY • 10:52 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "A static rule assigns an initial severity label. But in reality, <strong>severity is dynamic</strong>. 
            The true priority of an alert depends on the mathematical intersection of 
            <strong>Impact</strong> (What asset or user is involved?) and <strong>Likelihood</strong> (Is the threat real and actively succeeding?)."
          </p>
        </div>
      </section>

      <!-- THE CORE SEVERITY FORMULA -->
      <section style="margin-bottom: 4rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          
          <!-- Formula Card -->
          <div class="glass-panel" style="padding: 2rem; border-color: rgba(0, 242, 254, 0.35);">
            <span class="genz-badge badge-key-idea" style="margin-bottom: 0.75rem;">MATHEMATICAL FOUNDATION</span>
            <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 0.75rem;">
              Severity = Impact × Likelihood
            </h3>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
              Cybersecurity risk calculations are never based solely on the volume of events. 1,000 failed attempts against a dummy honeypot account is Low Severity. 2 failed attempts against the primary Domain Controller from an external Russian IP is Critical Severity.
            </p>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--cyan-text);">
              Risk = (Asset Tier + User Privilege) × (Adversary Confidence + Scope)
            </div>
          </div>

          <!-- Influencing Factors Grid -->
          <div class="glass-panel" style="padding: 2rem; border-color: rgba(139, 92, 246, 0.35);">
            <span class="genz-badge badge-demo" style="margin-bottom: 0.75rem;">THE 4 TRIAGE WEIGHTS</span>
            <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 0.75rem;">
              What Dictates Severity in FinCorp?
            </h3>
            
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.88rem;">
              <li style="display: flex; gap: 0.5rem; color: var(--text-secondary);">
                <span style="color: var(--cyan-primary); font-weight: 700;">1. Asset Criticality:</span> Tier 0 (DC / SWIFT) vs Tier 2 (Workstation).
              </li>
              <li style="display: flex; gap: 0.5rem; color: var(--text-secondary);">
                <span style="color: var(--cyan-primary); font-weight: 700;">2. Identity Privilege:</span> Domain Admin vs Standard Employee.
              </li>
              <li style="display: flex; gap: 0.5rem; color: var(--text-secondary);">
                <span style="color: var(--cyan-primary); font-weight: 700;">3. Threat Stage:</span> Pre-attack scan vs Active C2 beacon vs Exfiltration.
              </li>
              <li style="display: flex; gap: 0.5rem; color: var(--text-secondary);">
                <span style="color: var(--cyan-primary); font-weight: 700;">4. Exposure & Scope:</span> Single isolated laptop vs Multi-branch subnet.
              </li>
            </ul>
          </div>

        </div>
      </section>

      <!-- INTERACTIVE SEVERITY MATRIX GAUGE -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="genz-badge badge-try-it">LIVE RISK CALCULATOR</span>
            <h2 style="font-size: 1.6rem; color: var(--text-bright); margin-top: 0.35rem;">
              Interactive Severity Matrix
            </h2>
          </div>
          <div style="font-size: 0.82rem; color: var(--cyan-text); font-family: var(--font-mono);">
            ADJUST VARIABLES TO SIMULATE RISK SCORING
          </div>
        </div>

        <div id="severity-matrix-container">
          ${renderSeverityMatrix()}
        </div>
      </section>

      <!-- QUICK CHECK QUIZ -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.9); border: 1px solid rgba(245, 158, 11, 0.4);">
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-quiz">📝 QUICK CHECK</span>
            <span style="font-size: 0.85rem; color: #fde047; font-family: var(--font-mono);">STAGE 05 SCENARIO CHECK</span>
          </div>
          <h3 style="font-size: 1.3rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Suppose the exact same 18 failed logins occurred on DC01 (Primary Domain Controller) targeting "da_backup_svc". How does severity change?
          </h3>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;" id="quiz-t5-options">
            <div class="option-card" data-quiz-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">It remains Medium, because 18 failures is always the same number of events.</div>
            </div>
            <div class="option-card" data-quiz-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">It drops to Low, because servers have stronger firewalls.</div>
            </div>
            <div class="option-card" data-quiz-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">It immediately escalates to High or Critical, because a Domain Controller and privileged service account compromise threatens the entire enterprise domain!</div>
            </div>
          </div>

          <div id="quiz-t5-feedback" style="display: none; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"></div>
        </div>
      </section>

      <!-- ADVANCE TO TOPIC 6 CTA -->
      <div style="display: flex; justify-content: flex-end;">
        <button id="btn-next-topic-6" class="btn btn-alert" style="font-size: 1.05rem; padding: 0.85rem 2.5rem; box-shadow: 0 0 30px var(--danger-glow); animation: pulse-border 2s infinite;">
          Unlock Final L1 Challenge (Topic 06) 🚀 →
        </button>
      </div>

    </div>
  `;
}

export function initTopic5Events() {
  initSeverityMatrixEvents();

  // Quiz 5 logic
  document.querySelectorAll('#quiz-t5-options .option-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const opt = e.currentTarget.getAttribute('data-quiz-opt');
      const feedback = document.getElementById('quiz-t5-feedback');

      document.querySelectorAll('#quiz-t5-options .option-card').forEach(c => {
        c.classList.remove('selected-correct', 'selected-wrong');
      });

      if (opt === 'c') {
        card.classList.add('selected-correct');
        sound.playSuccess();
        store.completeCheckpoint('check-t5-quiz', 50, 'Mastered Severity Escalation Calculus');
        store.completeTopic('topic-5');
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(16, 185, 129, 0.15)';
          feedback.style.border = '1px solid var(--success)';
          feedback.style.color = '#86efac';
          feedback.innerHTML = `<strong>Spot on!</strong> A Domain Controller is a Tier 0 Tier-Zero asset, and a domain admin service account has keys to the entire enterprise kingdom. Impact is maximum, escalating severity instantly to High/Critical!`;
        }
      } else {
        card.classList.add('selected-wrong');
        sound.playClick();
        if (feedback) {
          feedback.style.display = 'block';
          feedback.style.background = 'rgba(245, 158, 11, 0.15)';
          feedback.style.border = '1px solid var(--warning)';
          feedback.style.color = '#fde68a';
          feedback.innerHTML = `Not quite. Asset Criticality and Account Privilege multiply the Impact exponentially! Compromise of a Domain Controller represents catastrophic risk.`;
        }
      }
    });
  });

  const btnNext = document.getElementById('btn-next-topic-6');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      store.completeTopic('topic-5');
      store.navigate('topic-6', 6);
    });
  }
}
