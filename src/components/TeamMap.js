// Interactive SOC Team Map & Escalation Hierarchy
import { SOC_PEOPLE } from '../data/courseData.js';

let selectedRoleId = 'l1';

export function renderTeamMap() {
  const selectedRole = SOC_PEOPLE.find(r => r.id === selectedRoleId) || SOC_PEOPLE[0];

  return `
    <div style="margin: 2rem 0;">
      <!-- Escalation Path Header Indicator -->
      <div class="glass-panel" style="padding: 1.25rem 1.75rem; margin-bottom: 1.5rem; background: rgba(15, 23, 42, 0.7); border-color: rgba(56, 189, 248, 0.2);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="genz-badge badge-pro-tip">TECHNICAL ESCALATION PATH</span>
            <span style="font-size: 0.9rem; color: var(--text-bright); font-weight: 600;">Standard Tiered Incident Escalation:</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.85rem;">
            <span style="color: var(--cyan-primary); font-weight: 700; background: var(--cyan-subtle); padding: 0.2rem 0.6rem; border-radius: 4px; border: 1px solid var(--border-cyan);">L1 (TRIAGE)</span>
            <span style="color: var(--text-muted);">➔</span>
            <span style="color: #c084fc; font-weight: 700; background: rgba(139,92,246,0.1); padding: 0.2rem 0.6rem; border-radius: 4px; border: 1px solid rgba(139,92,246,0.3);">L2 (INVESTIGATION)</span>
            <span style="color: var(--text-muted);">➔</span>
            <span style="color: #f87171; font-weight: 700; background: rgba(239,68,68,0.1); padding: 0.2rem 0.6rem; border-radius: 4px; border: 1px solid rgba(239,68,68,0.3);">L3 (DEEP HUNT/FORENSICS)</span>
          </div>
        </div>
      </div>

      <!-- Team Grid Split: Technical Operations vs Leadership -->
      <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 1.5rem;">
        
        <!-- Role Selection Cards -->
        <div>
          <div style="font-size: 0.82rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono); margin-bottom: 0.75rem; letter-spacing: 0.05em;">
            OPERATIONAL TIERS (SELECT TO INSPECT)
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${SOC_PEOPLE.map(person => {
              const isSelected = person.id === selectedRoleId;
              const isLearner = person.isLearner;

              return `
                <div class="team-card ${isSelected ? 'glass-panel-cyan' : ''} ${isLearner ? 'learner-highlight' : ''}" 
                     data-role-id="${person.id}" 
                     style="padding: 1.15rem 1.4rem; cursor: pointer; display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.25rem;">
                      <span style="font-weight: 700; font-size: 1.05rem; color: ${isLearner ? 'var(--cyan-primary)' : 'var(--text-bright)'};">
                        ${person.role}
                      </span>
                      <span class="genz-badge ${isLearner ? 'badge-alert' : 'badge-demo'}" style="font-size: 0.65rem;">
                        ${person.badge}
                      </span>
                    </div>
                    <div style="font-size: 0.82rem; color: var(--text-secondary);">
                      ${person.tagline}
                    </div>
                  </div>
                  <div style="color: ${isSelected ? 'var(--cyan-primary)' : 'var(--text-muted)'};">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Role Detail Inspector Modal/Panel -->
        <div class="glass-panel" style="padding: 1.75rem; background: rgba(15, 23, 42, 0.85); border-color: rgba(56, 189, 248, 0.3); height: fit-content;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem;">
            <div>
              <span class="genz-badge ${selectedRole.isLearner ? 'badge-alert' : 'badge-tech-box'}" style="margin-bottom: 0.5rem;">
                ${selectedRole.badge}
              </span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); font-weight: 800;">
                ${selectedRole.role}
              </h3>
            </div>
            ${selectedRole.isLearner ? `
              <div style="padding: 0.3rem 0.6rem; background: var(--cyan-subtle); border: 1px solid var(--cyan-primary); border-radius: 6px; font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-primary);">
                ACTIVE USER SEAT
              </div>
            ` : ''}
          </div>

          <div style="margin-bottom: 1.25rem;">
            <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); text-transform: uppercase; margin-bottom: 0.35rem;">
              Core Mission & Responsibilities
            </div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
              ${selectedRole.whatTheyDo}
            </p>
          </div>

          ${selectedRole.handles ? `
            <div style="margin-bottom: 1.25rem;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); text-transform: uppercase; margin-bottom: 0.5rem;">
                Typical Workflows Handled
              </div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.45rem;">
                ${selectedRole.handles.map(item => `
                  <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                    <span style="color: var(--cyan-primary); margin-top: 2px;">▸</span>
                    <span>${item}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          ` : ''}

          ${selectedRole.subdisciplines ? `
            <div style="margin-bottom: 1.25rem;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); text-transform: uppercase; margin-bottom: 0.5rem;">
                Specialized Sub-Units
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${selectedRole.subdisciplines.map(sub => `
                  <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.5rem 0.75rem;">
                    <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">${sub.name}</div>
                    <div style="font-size: 0.78rem; color: var(--text-secondary);">${sub.role}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <div style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 8px; padding: 1rem; margin-top: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-primary); font-weight: 700; text-transform: uppercase; margin-bottom: 0.35rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              When does the L1 Analyst interact with them?
            </div>
            <p style="font-size: 0.85rem; color: var(--text-bright); line-height: 1.5;">
              ${selectedRole.interactionWithL1}
            </p>
          </div>
        </div>

      </div>
    </div>
  `;
}

export function initTeamMapEvents() {
  document.querySelectorAll('[data-role-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      const roleId = e.currentTarget.getAttribute('data-role-id');
      if (roleId) {
        selectedRoleId = roleId;
        const container = document.getElementById('team-map-container');
        if (container) {
          container.innerHTML = renderTeamMap();
          initTeamMapEvents();
        }
      }
    });
  });
}
