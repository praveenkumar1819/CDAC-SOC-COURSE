// Progress View: Analyst XP, Badges, Checkpoints, and Metrics
import { store } from '../state/store.js';
import { COURSE_MODULE } from '../data/courseData.js';

export function renderProgressView() {
  const state = store.state;
  const xpPercent = Math.min(100, Math.round((state.xp / 1250) * 100));
  const completedTopicsCount = state.completedTopics.length;
  const checkpointsCount = Object.keys(state.completedCheckpoints).length;

  return `
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Progress Header -->
      <section style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-demo">ANALYST DOSSIER</span>
          <span class="mono-data">PERFORMANCE & OPERATIONAL READINESS</span>
        </div>
        <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">
          Operational <span class="gradient-text-cyan">Progress.</span>
        </h1>
        <p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 780px;">
          Track your operational telemetry mastery. Review earned achievements, triage checkpoints cleared, and overall shift performance metrics.
        </p>
      </section>

      <!-- Stats Overview Row -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; margin-bottom: 3rem;">
        
        <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9);">
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">EXPERIENCE POINTS</div>
          <div style="font-size: 2.2rem; font-weight: 800; font-family: var(--font-mono); color: var(--cyan-primary); margin: 0.25rem 0;">
            ${state.xp} <span style="font-size: 1rem; color: var(--text-muted);">/ 1,250</span>
          </div>
          <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
            <div style="width: ${xpPercent}%; height: 100%; background: linear-gradient(90deg, #00f2fe, #8b5cf6);"></div>
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9);">
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">STAGES MASTERED</div>
          <div style="font-size: 2.2rem; font-weight: 800; font-family: var(--font-mono); color: #86efac; margin: 0.25rem 0;">
            ${completedTopicsCount} <span style="font-size: 1rem; color: var(--text-muted);">/ 6</span>
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">
            ${Math.round((completedTopicsCount / 6) * 100)}% shift completion
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9);">
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">CHECKPOINTS CLEARED</div>
          <div style="font-size: 2.2rem; font-weight: 800; font-family: var(--font-mono); color: #c084fc; margin: 0.25rem 0;">
            ${checkpointsCount}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">
            Interactive decisions validated
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9);">
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">SHIFT STATUS</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: ${state.finalChallenge.completed ? 'var(--success)' : '#fbbf24'}; margin: 0.6rem 0 0.25rem 0;">
            ${state.finalChallenge.completed ? 'SHIFT RESOLVED 🏆' : 'SHIFT IN PROGRESS ⏱️'}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">
            ${state.finalChallenge.completed ? 'Certified L1 Shift Hero' : 'Currently on active watch'}
          </div>
        </div>

      </div>

      <!-- BADGES GALLERY -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <div>
            <span class="genz-badge badge-key-idea">ACHIEVEMENT VAULT</span>
            <h2 style="font-size: 1.6rem; color: var(--text-bright); margin-top: 0.35rem;">
              Operational Badges
            </h2>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text);">
            ${state.badges.filter(b => b.unlocked).length} OF ${state.badges.length} UNLOCKED
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
          ${state.badges.map(badge => `
            <div class="glass-panel" style="padding: 1.5rem; border-color: ${badge.unlocked ? 'rgba(0, 242, 254, 0.35)' : 'var(--border-subtle)'}; background: ${badge.unlocked ? 'rgba(12, 20, 36, 0.9)' : 'rgba(10, 14, 26, 0.4)'}; opacity: ${badge.unlocked ? '1' : '0.6'};">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: ${badge.unlocked ? 'var(--cyan-subtle)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${badge.unlocked ? 'var(--cyan-primary)' : 'var(--border-subtle)'}; display: flex; align-items: center; justify-content: center; color: ${badge.unlocked ? 'var(--cyan-primary)' : 'var(--text-muted)'};">
                  ${badge.unlocked ? `
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  ` : `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  `}
                </div>
                ${badge.unlocked ? `
                  <span class="genz-badge badge-try-it" style="font-size: 0.65rem;">UNLOCKED ${badge.unlockedAt || ''}</span>
                ` : `
                  <span class="genz-badge badge-tech-box" style="font-size: 0.65rem;">LOCKED</span>
                `}
              </div>

              <h4 style="font-size: 1.1rem; color: ${badge.unlocked ? 'var(--text-bright)' : 'var(--text-muted)'}; margin-bottom: 0.35rem; font-weight: 700;">
                ${badge.title}
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
                ${badge.description}
              </p>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- STAGES CHECKLIST TABLE -->
      <section>
        <h2 style="font-size: 1.6rem; color: var(--text-bright); margin-bottom: 1.25rem;">
          Curriculum Stage Completion Log
        </h2>

        <div class="event-table-container">
          <table class="event-table">
            <thead>
              <tr>
                <th>STAGE</th>
                <th>TOPIC NAME</th>
                <th>ESTIMATED XP</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              ${COURSE_MODULE.topics.map(t => {
                const done = state.completedTopics.includes(t.id);
                return `
                  <tr>
                    <td style="font-family: var(--font-mono); font-weight: 700;">${t.index}</td>
                    <td style="font-weight: 600; color: var(--text-bright);">${t.title} — ${t.subtitle}</td>
                    <td style="font-family: var(--font-mono); color: var(--cyan-text);">+${t.xp} XP</td>
                    <td>
                      ${done ? `
                        <span class="genz-badge badge-try-it" style="font-size: 0.68rem;">✓ COMPLETED</span>
                      ` : `
                        <span class="genz-badge badge-tech-box" style="font-size: 0.68rem;">PENDING</span>
                      `}
                    </td>
                    <td>
                      <button class="btn btn-secondary" data-nav="${t.id}" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">
                        ${done ? 'Review' : 'Launch →'}
                      </button>
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  `;
}
