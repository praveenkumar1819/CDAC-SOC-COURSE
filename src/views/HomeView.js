// Home Page View — Immersive SOC Operations Welcome & Shift Kickoff
import { store } from '../state/store.js';
import { renderHorizontalTimeline } from '../components/HorizontalTimeline.js';
import { COURSE_MODULE } from '../data/courseData.js';

export function renderHomeView() {
  const state = store.state;

  return `
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- HERO SECTION -->
      <section style="margin-bottom: 4rem; position: relative;">
        
        <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 2.5rem; align-items: center;">
          
          <!-- Hero Text -->
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 1.25rem;">
              <span class="genz-badge badge-alert">OPERATIONAL SHIFT ACTIVE</span>
              <span class="mono-data" style="font-size: 0.78rem;">FINCORP SOC • 10:25 AM EST</span>
            </div>

            <h1 style="margin-bottom: 1.25rem; line-height: 1.15;">
              Your first SOC shift <br/>
              <span class="gradient-text-cyan">starts now.</span>
            </h1>

            <p style="font-size: 1.15rem; color: var(--text-secondary); max-width: 580px; line-height: 1.65; margin-bottom: 2rem;">
              You’re the L1 analyst. The alerts are live. The evidence is waiting. 
              An authentication burst on <span class="mono-data">FIN-PC-04</span> demands your call. What happens next defines FinCorp's security.
            </p>

            <!-- Hero CTAs -->
            <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
              <button class="btn btn-primary" data-nav="topic-1" style="font-size: 1.05rem; padding: 0.85rem 2rem; box-shadow: 0 0 25px var(--cyan-glow);">
                START YOUR SHIFT →
              </button>
              <button class="btn btn-secondary" data-nav="course" style="font-size: 1.05rem; padding: 0.85rem 1.75rem;">
                EXPLORE MODULE MAP
              </button>
            </div>

            <!-- Mini Live Indicators -->
            <div style="display: flex; align-items: center; gap: 2rem; margin-top: 2.5rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 1.35rem; font-weight: 800; color: var(--text-bright);">18</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Failed 4625 Events</div>
              </div>
              <div style="border-left: 1px solid var(--border-subtle); padding-left: 2rem;">
                <div style="font-family: var(--font-mono); font-size: 1.35rem; font-weight: 800; color: var(--success);">1</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Pivotal 4624 Success</div>
              </div>
              <div style="border-left: 1px solid var(--border-subtle); padding-left: 2rem;">
                <div style="font-family: var(--font-mono); font-size: 1.35rem; font-weight: 800; color: var(--cyan-primary);">100%</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Investigative Fidelity</div>
              </div>
            </div>
          </div>

          <!-- Stylized SOC Monitor & Radar HUD -->
          <div class="glass-panel" style="padding: 1.5rem; background: rgba(10, 16, 31, 0.85); border-color: rgba(0, 242, 254, 0.3); box-shadow: 0 16px 48px rgba(0, 0, 0, 0.7);">
            
            <!-- Terminal Header -->
            <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.75rem; margin-bottom: 1rem;">
              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #ef4444;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #10b981;"></span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-left: 0.5rem;">fincorp-soc-telemetry-feed</span>
              </div>
              <span class="status-indicator status-alert" title="Incoming Alert Pulse"></span>
            </div>

            <!-- Stylized Alert Pulse Box -->
            <div class="glass-panel-alert pulse-alert-node" style="padding: 1.25rem; border-radius: 8px; margin-bottom: 1rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <span class="genz-badge badge-alert" style="font-size: 0.65rem;">🚨 LIVE ALERT DISPATCH</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #fca5a5;">10:32 AM</span>
              </div>
              <div style="font-weight: 800; font-size: 1.05rem; color: var(--text-bright); margin-bottom: 0.25rem;">
                Multiple Failed Login Attempts
              </div>
              <div style="font-size: 0.8rem; font-family: var(--font-mono); color: #fca5a5;">
                User: Finance01 | Host: FIN-PC-04 | IP: 10.10.20.15
              </div>
            </div>

            <!-- Stream Snippet -->
            <div style="background: rgba(0, 0, 0, 0.4); border-radius: 6px; padding: 0.85rem; font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
              <div style="color: #f87171;">[10:30:01] WIN-EVT-4625 | User: Finance01 | SubStatus: 0xC000006A</div>
              <div style="color: #f87171;">[10:30:20] WIN-EVT-4625 | User: Finance01 | SubStatus: 0xC000006A</div>
              <div style="color: #f87171;">[10:30:40] WIN-EVT-4625 | User: Finance01 | SubStatus: 0xC000006A</div>
              <div style="color: #4ade80; font-weight: 700;">[10:31:45] WIN-EVT-4624 | User: Finance01 | LogonType: 2 (SUCCESS)</div>
            </div>

            <!-- Radar / Network Mini Diagram -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem; background: rgba(255,255,255,0.02); border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--cyan-subtle); border: 1px solid var(--cyan-primary); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: var(--cyan-primary); font-weight: 700;">L1</div>
                <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-bright);">Assigned: ${state.profile.callsign}</div>
              </div>
              <button class="btn btn-outline-cyan" data-nav="topic-3" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;">
                Open Triage →
              </button>
            </div>

          </div>

        </div>

      </section>

      <!-- WHAT YOU'LL LEARN CARDS -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="genz-badge badge-key-idea">CORE CURRICULUM</span>
            <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-bright); margin-top: 0.35rem;">
              What You'll Master in Module 4
            </h2>
          </div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            6 Progressive Operational Stages • Hands-on FinCorp Scenario
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          ${COURSE_MODULE.topics.map(topic => `
            <div class="glass-panel" data-nav="${topic.id}" style="padding: 1.6rem; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.25s ease;">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                  <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-primary); font-weight: 800; background: var(--cyan-subtle); padding: 0.2rem 0.5rem; border-radius: 4px;">
                    STAGE ${topic.index}
                  </span>
                  <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">${topic.time}</span>
                </div>
                <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--text-bright); margin-bottom: 0.5rem;">
                  ${topic.title}
                </h3>
                <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 1.25rem;">
                  ${topic.description}
                </p>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
                <span class="genz-badge badge-tech-box" style="font-size: 0.7rem;">+${topic.xp} XP</span>
                <span style="font-size: 0.85rem; color: var(--cyan-primary); font-weight: 600; display: flex; align-items: center; gap: 0.3rem;">
                  Start Stage →
                </span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- THE STORY: CINEMATIC TIMELINE -->
      <section style="margin-bottom: 3rem;">
        ${renderHorizontalTimeline()}
      </section>

    </div>
  `;
}
