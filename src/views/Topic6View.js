// Topic 6 View: Final L1 Challenge (The Ultimate Shift Trial)
import { store } from '../state/store.js';
import { renderFinalChallenge, initFinalChallengeEvents } from '../components/FinalChallenge.js';
import { renderProgressionPath } from '../components/ProgressionPath.js';

export function renderTopic6View() {
  return `
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${renderProgressionPath('topic-6')}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-alert">TOPIC 06 • 11:00 AM</span>
          <span class="mono-data">THE CAPSTONE OPERATIONAL TRIAL</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          The Final <span class="gradient-text-cyan">L1 Challenge.</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--cyan-primary); margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text); margin-bottom: 0.4rem; text-transform: uppercase;">
            SHIFT EVALUATION • 11:00 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "This is your defining moment as an L1 Analyst. You have all the data, logs, and tools at your disposal. 
            Step into the virtual terminal: <strong>execute the SIEM query, correlate the Service Desk ticket, formulate your hypothesis, draft official case notes, and make the closing disposition call.</strong>"
          </p>
        </div>
      </section>

      <!-- LIVE CHALLENGE SIMULATOR -->
      <section>
        <div id="final-challenge-container">
          ${renderFinalChallenge()}
        </div>
      </section>

    </div>
  `;
}

export function initTopic6Events() {
  initFinalChallengeEvents();
}
