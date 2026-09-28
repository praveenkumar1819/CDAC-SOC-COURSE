// Course & Module Map Views
import { store } from '../state/store.js';
import { COURSE_MODULE } from '../data/courseData.js';
import { renderProgressionPath } from '../components/ProgressionPath.js';

export function renderCourseView() {
  const state = store.state;
  const completedCount = state.completedTopics.length;
  const progressPercent = Math.min(100, Math.round((completedCount / 6) * 100));

  return `
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Course Header HUD -->
      <section style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-demo">CURRICULUM PORTAL</span>
              <span class="mono-data">${COURSE_MODULE.code}</span>
            </div>
            <h1 style="margin-bottom: 0.5rem;">
              SOC Analyst L1 — <span class="gradient-text-cyan">Module 4: SOC Operations</span>
            </h1>
            <p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 780px;">
              ${COURSE_MODULE.description}
            </p>
          </div>

          <!-- Overall Progress Card -->
          <div class="glass-panel" style="padding: 1.5rem; min-width: 240px; background: rgba(14, 21, 38, 0.9);">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">
              SHIFT CURRICULUM PROGRESS
            </div>
            <div style="font-size: 2rem; font-weight: 800; font-family: var(--font-mono); color: var(--cyan-primary); margin: 0.25rem 0;">
              ${progressPercent}%
            </div>
            <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; margin-bottom: 0.5rem;">
              <div style="width: ${progressPercent}%; height: 100%; background: linear-gradient(90deg, #38bdf8, #818cf8);"></div>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-secondary);">
              ${completedCount} of 6 Stages Mastered (${state.xp} / 1,250 XP)
            </div>
          </div>
        </div>

        <!-- Progression Track -->
        ${renderProgressionPath(null)}
      </section>

      <!-- Topics Breakdown Grid -->
      <section>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.6rem; color: var(--text-bright);">
            The 6 Investigation Stages
          </h2>
          <div style="font-size: 0.82rem; color: var(--cyan-text); font-family: var(--font-mono);">
            CONTINUOUS STORY: FINCORP FINANCE01 INCIDENT
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          ${COURSE_MODULE.topics.map(topic => {
            const isCompleted = state.completedTopics.includes(topic.id);

            return `
              <div class="glass-panel" style="padding: 1.75rem 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; transition: all 0.25s ease;">
                <div style="display: flex; align-items: flex-start; gap: 1.5rem; max-width: 820px;">
                  <div style="width: 52px; height: 52px; border-radius: 12px; background: ${isCompleted ? 'var(--cyan-subtle)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${isCompleted ? 'var(--cyan-primary)' : 'var(--border-subtle)'}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: ${isCompleted ? 'var(--cyan-primary)' : 'var(--text-secondary)'};">
                    ${isCompleted ? `
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    ` : `
                      <span style="font-family: var(--font-mono); font-weight: 800; font-size: 1.1rem;">${topic.index}</span>
                    `}
                  </div>

                  <div>
                    <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.35rem;">
                      <span class="mono-data" style="font-size: 0.75rem;">STAGE ${topic.index} • ${topic.time}</span>
                      <span class="genz-badge badge-tech-box" style="font-size: 0.68rem;">+${topic.xp} XP</span>
                      ${isCompleted ? `
                        <span class="genz-badge badge-try-it" style="font-size: 0.68rem;">COMPLETED</span>
                      ` : ''}
                    </div>

                    <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.35rem;">
                      ${topic.title} — ${topic.subtitle}
                    </h3>

                    <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.55;">
                      ${topic.description}
                    </p>
                  </div>
                </div>

                <div>
                  <button class="btn ${isCompleted ? 'btn-secondary' : 'btn-primary'}" data-nav="${topic.id}" style="font-size: 0.9rem; padding: 0.65rem 1.6rem;">
                    ${isCompleted ? 'Review Stage' : 'Launch Stage →'}
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </section>

    </div>
  `;
}
