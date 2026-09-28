// Home Page View — Student SOC Learning Command Center (Minimalist & Focused)
import { store } from '../state/store.js';
import { COURSE_MODULE } from '../data/courseData.js';

export function renderHomeView() {
  const state = store.state;
  const completedCount = state.completedTopics.length;
  const currentTopicId = `topic-${state.currentTopic || 1}`;

  // Calculate checkpoints / quick checks count
  const completedChecksCount = Object.keys(state.completedCheckpoints).length;
  const totalChecks = 10;

  // Stages list for Module Progress
  const stages = [
    { id: 'topic-1', num: '01', name: 'Architecture' },
    { id: 'topic-2', num: '02', name: 'Events & Alerts' },
    { id: 'topic-3', num: '03', name: 'Alert Triage' },
    { id: 'topic-4', num: '04', name: 'False Positives' },
    { id: 'topic-5', num: '05', name: 'Severity' },
    { id: 'topic-6', num: '06', name: 'Final Challenge' }
  ];

  return `
    <div class="container animate-fade-in" style="padding-top: 2.5rem; padding-bottom: 5rem; max-width: 1080px;">
      
      <!-- TOP COMMAND CENTER HEADER -->
      <div style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 0.5rem;">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--cyan-primary); letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; margin-bottom: 0.25rem;">
              MODULE 4 • SOC OPERATIONS
            </div>
            <h1 style="font-size: 2.1rem; font-weight: 800; color: var(--text-bright); letter-spacing: -0.02em;">
              Student SOC Learning Command Center
            </h1>
          </div>
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="genz-badge badge-try-it" style="font-size: 0.75rem;">SHIFT ALPHA ACTIVE</span>
            <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">${state.profile.callsign}</span>
          </div>
        </div>
        <p style="color: var(--text-secondary); font-size: 0.98rem; max-width: 680px; line-height: 1.6;">
          Welcome to your operational home base. Follow the FinCorp investigation step-by-step, explore telemetry with contextual animations, and master L1 alert triage.
        </p>
      </div>

      <!-- MAIN CURRENT MISSION (HERO CARD) -->
      <div class="glass-panel" style="padding: 2.25rem; margin-bottom: 2rem; border-color: rgba(56, 189, 248, 0.25); background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(20, 32, 58, 0.65) 100%);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
          <span class="genz-badge badge-key-idea">YOUR CURRENT MISSION</span>
          <span style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-muted);">
            STAGES COMPLETED: ${completedCount} OF 6
          </span>
        </div>

        <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.75rem; line-height: 1.3;">
          "Investigate the Finance01 Login Alert"
        </h2>

        <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.65; max-width: 780px; margin-bottom: 1.75rem;">
          A burst of authentication failures occurred on workstation <span class="mono-data">FIN-PC-04</span> for user <span class="mono-data">Finance01</span> following a morning password reset. Learn the architecture, investigate the event logs, test for cached credential false positives, and classify the incident.
        </p>

        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          <button class="btn btn-primary" data-nav="${currentTopicId}" style="padding: 0.75rem 1.8rem; font-size: 0.95rem;">
            Continue Learning →
          </button>
          <button class="btn btn-secondary" data-nav="course" style="padding: 0.75rem 1.4rem; font-size: 0.95rem;">
            View Course Curriculum
          </button>
          <button class="btn btn-outline-cyan" data-nav="topic-3" style="padding: 0.75rem 1.4rem; font-size: 0.95rem;">
            Jump to Alert Triage (7-Tabs)
          </button>
        </div>
      </div>

      <!-- TWO-COLUMN WORKSPACE: MODULE PROGRESS & CURRENT SCENARIO -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.75rem; margin-bottom: 2rem;">
        
        <!-- MODULE PROGRESS CARD -->
        <div class="glass-panel" style="padding: 1.75rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-bright);">
                MODULE PROGRESS
              </h3>
              <span style="font-size: 0.76rem; font-family: var(--font-mono); color: var(--cyan-text);">
                ${Math.round((completedCount / 6) * 100)}% COMPLETE
              </span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.65rem;">
              ${stages.map((stage, idx) => {
                const isCompleted = state.completedTopics.includes(stage.id);
                const isCurrent = currentTopicId === stage.id;
                const isLocked = !state.unlockedTopics.includes(stage.id);

                let statusIcon = '<span style="color: var(--text-muted); font-size: 0.85rem;">○</span>';
                let statusLabel = 'Upcoming';
                let statusColor = 'var(--text-secondary)';

                if (isCompleted) {
                  statusIcon = '<span style="color: var(--success); font-weight: 800; font-size: 0.95rem;">✓</span>';
                  statusLabel = 'Completed';
                  statusColor = 'var(--text-bright)';
                } else if (isCurrent) {
                  statusIcon = '<span style="color: var(--cyan-primary); font-size: 0.85rem;">●</span>';
                  statusLabel = 'Current';
                  statusColor = 'var(--cyan-text)';
                } else if (isLocked) {
                  statusIcon = '<span style="color: var(--text-muted); font-size: 0.85rem;">🔒</span>';
                  statusLabel = 'Locked';
                  statusColor = 'var(--text-muted)';
                }

                return `
                  <div class="glass-panel" data-nav="${stage.id}" style="padding: 0.75rem 1rem; cursor: pointer; display: flex; align-items: center; justify-content: space-between; transition: all 0.2s ease; background: ${isCurrent ? 'rgba(56, 189, 248, 0.08)' : 'rgba(255, 255, 255, 0.02)'}; border-color: ${isCurrent ? 'var(--cyan-primary)' : 'var(--border-subtle)'};">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">${stage.num}</span>
                      <span style="font-size: 0.9rem; font-weight: ${isCurrent ? '700' : '500'}; color: ${statusColor};">
                        ${stage.name}
                      </span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <span style="font-size: 0.74rem; color: var(--text-muted); font-family: var(--font-mono);">${statusLabel}</span>
                      ${statusIcon}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 0.78rem; color: var(--text-muted);">Self-paced learning path</span>
            <span style="font-size: 0.8rem; color: var(--cyan-primary); font-weight: 600; cursor: pointer;" data-nav="course">
              View Syllabus →
            </span>
          </div>
        </div>

        <!-- CURRENT SCENARIO CARD -->
        <div class="glass-panel" style="padding: 1.75rem; display: flex; flex-direction: column; justify-content: space-between; border-color: rgba(244, 63, 94, 0.25);">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
              <span class="genz-badge badge-alert" style="font-size: 0.7rem;">
                🚨 CURRENT INVESTIGATION
              </span>
              <span style="font-family: var(--font-mono); font-size: 0.76rem; color: #fca5a5;">
                CASE ALT-2026-9042
              </span>
            </div>

            <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.75rem;">
              Multiple Failed Login Attempts
            </h3>

            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
              FinCorp SIEM rule <span class="mono-data">DET-WIN-0422</span> detected 10+ failed authentications within 120 seconds. An initial failure wave was followed by a single successful interactive console logon.
            </p>

            <!-- Case Telemetry Key Points -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem;">
              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.75rem;">
                <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">TARGET IDENTITY</div>
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--cyan-text); margin-top: 0.2rem;">
                  Finance01 (Priya Sharma)
                </div>
              </div>

              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.75rem;">
                <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">WORKSTATION HOST</div>
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-bright); margin-top: 0.2rem;">
                  FIN-PC-04 (Win 11)
                </div>
              </div>

              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.75rem;">
                <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">SOURCE IP ADDRESS</div>
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-bright); margin-top: 0.2rem;">
                  10.10.20.15 (Internal)
                </div>
              </div>

              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.75rem;">
                <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">TELEMETRY EVENTS</div>
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--danger); margin-top: 0.2rem;">
                  18 Failed + 1 Success
                </div>
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
            <button class="btn btn-alert" data-nav="topic-3" style="width: 100%; font-size: 0.88rem; padding: 0.65rem 1rem;">
              Continue Investigation →
            </button>
          </div>
        </div>

      </div>

      <!-- OPTIONAL SMALL CARDS ROW (QUIZ CHECKS, SCENARIOS, LABS, XP) -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem;">
        
        <div class="glass-panel" data-nav="course" style="padding: 1.15rem; cursor: pointer;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
            <span style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">QUICK CHECKS</span>
            <span style="font-size: 0.72rem; color: var(--cyan-primary);">Knowledge</span>
          </div>
          <div style="font-size: 1.45rem; font-weight: 800; font-family: var(--font-mono); color: var(--text-bright);">
            ${Math.min(totalChecks, completedChecksCount + 6)} / ${totalChecks}
          </div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Interactive check-ins completed
          </div>
        </div>

        <div class="glass-panel" data-nav="current-scenario" style="padding: 1.15rem; cursor: pointer;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
            <span style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">SCENARIOS</span>
            <span style="font-size: 0.72rem; color: #f59e0b;">Guided</span>
          </div>
          <div style="font-size: 1.45rem; font-weight: 800; font-family: var(--font-mono); color: var(--text-bright);">
            3 / 5
          </div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Incident story chapters explored
          </div>
        </div>

        <div class="glass-panel" data-nav="labs" style="padding: 1.15rem; cursor: pointer;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
            <span style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">HANDS-ON LABS</span>
            <span style="font-size: 0.72rem; color: var(--success);">Practice</span>
          </div>
          <div style="font-size: 1.45rem; font-weight: 800; font-family: var(--font-mono); color: var(--text-bright);">
            1 / 3
          </div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Live interactive simulations
          </div>
        </div>

        <div class="glass-panel" data-nav="progress" style="padding: 1.15rem; cursor: pointer;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
            <span style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">EXPERIENCE & RANK</span>
            <span style="font-size: 0.72rem; color: #a78bfa;">L1 Status</span>
          </div>
          <div style="font-size: 1.45rem; font-weight: 800; font-family: var(--font-mono); color: var(--cyan-primary);">
            ${state.xp} <span style="font-size: 0.85rem; color: var(--text-muted);">XP</span>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Junior SOC Analyst L1
          </div>
        </div>

      </div>

    </div>
  `;
}
