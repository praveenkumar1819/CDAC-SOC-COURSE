// Module Progression Path Component
import { store } from '../state/store.js';

export function renderProgressionPath(currentTopicId) {
  const state = store.state;

  const steps = [
    { id: 'topic-1', index: '01', title: 'SOC Architecture', nav: 'topic-1' },
    { id: 'topic-2', index: '02', title: 'Alerts & Events', nav: 'topic-2' },
    { id: 'topic-3', index: '03', title: 'Alert Triage', nav: 'topic-3' },
    { id: 'topic-4', index: '04', title: 'False Positives', nav: 'topic-4' },
    { id: 'topic-5', index: '05', title: 'Severity', nav: 'topic-5' },
    { id: 'topic-6', index: '06', title: 'Final Challenge', nav: 'topic-6' }
  ];

  return `
    <div class="glass-panel" style="padding: 1.5rem 2rem; margin: 1.5rem 0 2.5rem 0; background: rgba(10, 16, 31, 0.7);">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span class="genz-badge badge-key-idea">MISSION PROGRESS</span>
          <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-bright);">Shift Alpha — Investigation Progression</span>
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text);">
          ${state.completedTopics.length} / 6 STAGES COMPLETED
        </div>
      </div>

      <div class="progression-track">
        ${steps.map(step => {
          const isCompleted = state.completedTopics.includes(step.id);
          const isCurrent = currentTopicId === step.id;
          const isLocked = !state.unlockedTopics.includes(step.id);

          let statusClass = '';
          if (isCompleted) statusClass = 'completed';
          else if (isCurrent) statusClass = 'current';
          else if (isLocked) statusClass = 'locked';

          return `
            <button class="progression-node ${statusClass}" data-nav="${step.nav}" title="Stage ${step.index}: ${step.title}">
              <div class="node-circle">
                ${isCompleted ? `
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                ` : step.index}
              </div>
              <span class="node-label">${step.title}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}
