// Contextual Animated Learning Visuals for SOC Analyst L1 Subtopics
// Consistent Visual Language: Computer=Host, Person=User, Packet=Data, Log=Event, Warning=Alert, Folder=Investigation

import { sound } from '../audio/soundEffects.js';

// SVG Icons for Consistent Visual Vocabulary
export const ICONS = {
  user: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  computer: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
  server: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,
  packet: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>`,
  log: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,
  alert: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" x2="12" y2="13"/><line x1="12" x2="12.01" y2="17"/></svg>`,
  case: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>`,
  network: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="6" height="6" x="2" y="16" rx="1"/><rect width="6" height="6" x="9" y="4" rx="1"/><rect width="6" height="6" x="16" y="16" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V10"/></svg>`,
  check: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  cross: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>`
};

/* ==========================================================================
   TOPIC 1 VISUALS: SOC ARCHITECTURE
   ========================================================================== */

// 1. PEOPLE: Animated SOC Team Visualization (Center: L1 Analyst, Orbiting Roles)
export function renderTeamVisual(selectedRole = 'l1') {
  const roles = [
    { id: 'l1', title: 'L1 Analyst (YOU)', type: 'Triage & First Response', desc: 'First-level alert review, triage, evidence collection, documentation, and escalation.', x: 175, y: 150, isCenter: true },
    { id: 'l2', title: 'L2 Senior Analyst', type: 'Deep Dive & Containment', desc: 'In-depth forensics, containment actions, malware analysis, and root cause analysis.', x: 80, y: 55 },
    { id: 'l3', title: 'L3 Threat Hunter', type: 'Proactive Hunting', desc: 'Proactive hunting without alerts, advanced adversary simulation, custom detections.', x: 270, y: 55 },
    { id: 'intel', title: 'Threat Intelligence', type: 'Adversary Profiling', desc: 'Feeds IoCs, tracks threat actors (APT groups), and provides tactical context.', x: 310, y: 150 },
    { id: 'network', title: 'Network Security', type: 'Firewall & Traffic', desc: 'Controls perimeter firewalls, proxies, VPN gateways, and packet capture.', x: 270, y: 245 },
    { id: 'identity', title: 'Identity (IAM)', type: 'Active Directory / Okta', desc: 'Manages user accounts, password resets, MFA, and access privileges.', x: 80, y: 245 },
    { id: 'manager', title: 'SOC Manager', type: 'Operations & SLAs', desc: 'Oversees shifts, monitors SLA metrics, resource allocation, and team performance.', x: 40, y: 150 }
  ];

  const current = roles.find(r => r.id === selectedRole) || roles[0];

  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Interactive SOC Team Map</span>
        <span style="color: var(--text-muted);">Click role to inspect</span>
      </div>

      <div style="position: relative; width: 350px; height: 300px; margin: 0 auto;">
        <!-- SVG Animated Connection Lines -->
        <svg width="350" height="300" style="position: absolute; top: 0; left: 0; pointer-events: none;">
          ${roles.filter(r => !r.isCenter).map(r => `
            <line x1="175" y1="150" x2="${r.x}" y2="${r.y}" stroke="${r.id === selectedRole ? 'var(--cyan-primary)' : 'rgba(255,255,255,0.1)'}" stroke-width="${r.id === selectedRole ? '2' : '1'}" class="${r.id === selectedRole ? 'animated-signal-line' : ''}" />
          `).join('')}
        </svg>

        <!-- Center L1 Node -->
        <div class="team-node-btn ${selectedRole === 'l1' ? 'active-node' : ''}" data-team-role="l1" style="position: absolute; left: 135px; top: 110px; width: 80px; height: 80px; border-radius: 50%; background: rgba(56, 189, 248, 0.15); border: 2px solid var(--cyan-primary); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; z-index: 10; transition: all 0.2s ease;">
          <span style="color: var(--cyan-primary);">${ICONS.user}</span>
          <span style="font-size: 0.75rem; font-weight: 800; color: #ffffff; margin-top: 2px;">L1 (YOU)</span>
          <span style="font-size: 0.58rem; color: var(--cyan-text);">Triage</span>
        </div>

        <!-- Orbiting Role Nodes -->
        ${roles.filter(r => !r.isCenter).map(r => {
          const isSel = r.id === selectedRole;
          return `
            <div class="team-node-btn ${isSel ? 'active-node' : ''}" data-team-role="${r.id}" style="position: absolute; left: ${r.x - 30}px; top: ${r.y - 30}px; width: 60px; height: 60px; border-radius: 50%; background: ${isSel ? 'rgba(129, 140, 248, 0.25)' : 'var(--bg-surface-elevated)'}; border: 1px solid ${isSel ? 'var(--violet-primary)' : 'var(--border-subtle)'}; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; z-index: 5;">
              <span style="color: ${isSel ? 'var(--violet-primary)' : 'var(--text-muted)'}; font-size: 0.7rem; font-weight: 700;">
                ${r.id.toUpperCase()}
              </span>
              <span style="font-size: 0.55rem; color: var(--text-secondary); text-align: center; line-height: 1;">${r.title.split(' ')[0]}</span>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Role Explanation Card -->
      <div style="width: 100%; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(15, 23, 42, 0.7); border: 1px solid var(--border-subtle); border-radius: 8px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.3rem;">
          <span style="font-weight: 700; color: var(--text-bright); font-size: 0.9rem;">${current.title}</span>
          <span class="genz-badge badge-key-idea" style="font-size: 0.65rem;">${current.type}</span>
        </div>
        <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
          ${current.desc}
        </p>
      </div>
    </div>
  `;
}

// 2. PROCESS: Circular Animated Workflow (Monitor -> Detect -> Analyze -> Respond with "YOU ARE HERE")
export function renderProcessCycleVisual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Continuous SOC Lifecycle</span>
        <span style="color: var(--success);">Signal Loop Active</span>
      </div>

      <!-- Circular SVG Process with Traveling Signal -->
      <div style="position: relative; width: 320px; height: 320px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
        
        <!-- Rotating Signal Ring -->
        <svg width="300" height="300" viewBox="0 0 300 300" style="position: absolute; top: 10px; left: 10px;">
          <!-- Track -->
          <circle cx="150" cy="150" r="110" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3" stroke-dasharray="6,6" />
          <!-- Animated Flow -->
          <circle cx="150" cy="150" r="110" fill="none" stroke="var(--cyan-primary)" stroke-width="3" stroke-dasharray="25,250" class="animated-signal-line" style="animation-duration: 4s;" />
        </svg>

        <!-- 4 Step Nodes -->
        <!-- Top: MONITOR -->
        <div style="position: absolute; top: 8px; left: 105px; width: 110px; text-align: center; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 0.45rem; border-radius: 8px;">
          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">STEP 01</div>
          <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-bright);">1. MONITOR</div>
          <div style="font-size: 0.68rem; color: var(--text-secondary);">Logs & Telemetry</div>
        </div>

        <!-- Right: DETECT -->
        <div style="position: absolute; right: 2px; top: 115px; width: 100px; text-align: center; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 0.45rem; border-radius: 8px;">
          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">STEP 02</div>
          <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-bright);">2. DETECT</div>
          <div style="font-size: 0.68rem; color: var(--text-secondary);">Rules & Alerts</div>
        </div>

        <!-- Bottom: ANALYZE (YOU ARE HERE) -->
        <div style="position: absolute; bottom: 8px; left: 95px; width: 130px; text-align: center; background: rgba(56, 189, 248, 0.12); border: 2px solid var(--cyan-primary); padding: 0.55rem; border-radius: 10px; box-shadow: 0 0 16px var(--cyan-glow);">
          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--cyan-primary); font-weight: 800;">YOU ARE HERE</div>
          <div style="font-weight: 800; font-size: 0.86rem; color: #ffffff;">3. ANALYZE</div>
          <div style="font-size: 0.68rem; color: var(--cyan-text);">L1 Alert Triage</div>
        </div>

        <!-- Left: RESPOND -->
        <div style="position: absolute; left: 2px; top: 115px; width: 100px; text-align: center; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 0.45rem; border-radius: 8px;">
          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">STEP 04</div>
          <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-bright);">4. RESPOND</div>
          <div style="font-size: 0.68rem; color: var(--text-secondary);">Contain / Close</div>
        </div>

        <!-- Center Pulse Indicator -->
        <div style="width: 70px; height: 70px; border-radius: 50%; background: rgba(15, 23, 42, 0.85); border: 1px solid var(--border-medium); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
          <span style="color: var(--cyan-primary);">${ICONS.packet}</span>
          <span style="font-family: var(--font-mono); font-size: 0.6rem; color: var(--text-muted); margin-top: 2px;">SLA 15m</span>
        </div>
      </div>
    </div>
  `;
}

// 3. TECHNOLOGY: Interactive SOC Technology Ecosystem (Endpoint -> Network -> Security Tools -> SOC -> Analyst)
export function renderTechEcosystemVisual(activeTool = 'siem') {
  const tools = {
    siem: { name: 'SIEM (Splunk/Sentinel)', logs: 'Windows Event Logs (4625/4624), Authentication bursts', role: 'Central log aggregator & detection correlation engine.' },
    edr: { name: 'EDR (Defender/CrowdStrike)', logs: 'Process command lines, outlook.exe, svchost.exe parent-child trees', role: 'Endpoint visibility into process execution & memory.' },
    network: { name: 'Network Monitor (Zeek/Suricata)', logs: 'Kerberos 88/TCP, LDAP 389/TCP authentication flows', role: 'Wire-level packet analysis & internal communication.' },
    firewall: { name: 'Firewall & VPN', logs: 'Internal routing, DHCP 10.10.20.15 lease logs', role: 'Perimeter defense and ingress/egress filtering.' }
  };

  const current = tools[activeTool] || tools.siem;

  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>SOC Tool Ecosystem</span>
        <span style="color: var(--text-muted);">Click tool to inspect telemetry</span>
      </div>

      <!-- Pipeline Stack -->
      <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
        
        <!-- Source Endpoint -->
        <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: 8px;">
          <span style="color: var(--cyan-primary);">${ICONS.computer}</span>
          <div style="flex: 1;">
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">Windows Endpoint (FIN-PC-04)</div>
            <div style="font-size: 0.72rem; color: var(--text-muted);">Generates user authentication attempts & application telemetry</div>
          </div>
          <span class="mono-data" style="font-size: 0.72rem;">10.10.20.15</span>
        </div>

        <!-- Conduit with Moving Packets -->
        <div style="display: flex; justify-content: center; height: 16px; align-items: center; position: relative;">
          <div style="width: 2px; height: 100%; background: var(--border-subtle);"></div>
          <div class="flow-packet-dot" style="position: absolute; animation: signal-travel 1.5s infinite ease-in-out;"></div>
        </div>

        <!-- Security Tools Selection Bar -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.65rem;">
          ${Object.keys(tools).map(key => {
            const isSel = key === activeTool;
            return `
              <div class="tech-tool-btn" data-tech-key="${key}" style="padding: 0.65rem 0.85rem; background: ${isSel ? 'rgba(56, 189, 248, 0.12)' : 'var(--bg-card)'}; border: 1px solid ${isSel ? 'var(--cyan-primary)' : 'var(--border-subtle)'}; border-radius: 6px; cursor: pointer; transition: all 0.2s ease;">
                <div style="font-size: 0.78rem; font-weight: 700; color: ${isSel ? 'var(--cyan-text)' : 'var(--text-bright)'};">
                  ${tools[key].name.split(' ')[0]}
                </div>
                <div style="font-size: 0.68rem; color: var(--text-muted);">${key.toUpperCase()}</div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Conduit to Analyst -->
        <div style="display: flex; justify-content: center; height: 16px; align-items: center; position: relative;">
          <div style="width: 2px; height: 100%; background: var(--border-subtle);"></div>
          <div class="flow-packet-dot" style="position: absolute; animation: signal-travel 1.5s infinite 0.75s ease-in-out;"></div>
        </div>

        <!-- Active Tool Telemetry Card -->
        <div style="padding: 0.85rem 1rem; background: rgba(15, 23, 42, 0.8); border: 1px solid var(--border-cyan); border-radius: 8px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
            <span style="font-weight: 700; font-size: 0.86rem; color: var(--text-bright);">${current.name}</span>
            <span class="genz-badge badge-tech-box" style="font-size: 0.65rem;">Active Telemetry</span>
          </div>
          <div style="font-size: 0.78rem; color: var(--cyan-text); font-family: var(--font-mono); margin-bottom: 0.25rem;">
            ${current.logs}
          </div>
          <div style="font-size: 0.76rem; color: var(--text-secondary);">
            ${current.role}
          </div>
        </div>

        <!-- Analyst Endpoint -->
        <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 1rem; background: rgba(56, 189, 248, 0.05); border: 1px solid var(--border-cyan); border-radius: 8px;">
          <span style="color: var(--cyan-primary);">${ICONS.user}</span>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-bright);">L1 Analyst Workspace (Triaging Single Pane of Glass)</div>
        </div>

      </div>
    </div>
  `;
}

/* ==========================================================================
   TOPIC 2 VISUALS: EVENTS & ALERTS
   ========================================================================== */

// 4. EVENT GENERATION: User Login -> Windows PC -> Event Log -> 📄 Event Record
export function renderEventGenerationVisual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        Concept Visual: How an Event is Born
      </div>

      <!-- Flow Pipeline: User -> Action -> PC -> Event Log -> Record -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.85rem; width: 100%; max-width: 320px;">
        
        <!-- Step 1: User Action -->
        <div style="width: 100%; display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px;">
          <span style="color: var(--cyan-primary);">${ICONS.user}</span>
          <div>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">User: Priya Sharma (Finance01)</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary);">Action: Enters login credentials on keyboard</div>
          </div>
        </div>

        <div style="color: var(--cyan-primary); animation: signal-travel 1.5s infinite ease-in-out;">↓</div>

        <!-- Step 2: Windows Subsystem -->
        <div style="width: 100%; display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px;">
          <span style="color: var(--violet-primary);">${ICONS.computer}</span>
          <div>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">Workstation: FIN-PC-04</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary);">LSASS & Security Subsystem process authentication</div>
          </div>
        </div>

        <div style="color: var(--violet-primary); animation: signal-travel 1.5s infinite ease-in-out;">↓</div>

        <!-- Step 3: Windows Event Log Record -->
        <div style="width: 100%; display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; background: rgba(56, 189, 248, 0.08); border: 1px solid var(--border-cyan); border-radius: 8px; box-shadow: 0 0 12px var(--cyan-glow);">
          <span style="color: var(--cyan-primary);">${ICONS.log}</span>
          <div>
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span class="event-id-badge event-id-4625" style="font-size: 0.7rem;">EVENT ID 4625</span>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">Security.evtx</span>
            </div>
            <div style="font-size: 0.76rem; color: var(--text-bright); margin-top: 0.2rem; font-weight: 600;">
              Immutable record written to Windows Event Log
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

// 5. EVENT ID 4625: Failure Flow & Clickable Log Record
export function renderEvent4625Visual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 360px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--danger); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Authentication Failure Anatomy</span>
        <span>❌ 4625 Failed Logon</span>
      </div>

      <!-- Diagram: Computer -> Auth -> ❌ Failure -> Log -->
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 1.25rem; padding: 0.75rem 1rem; background: rgba(244, 63, 94, 0.06); border: 1px solid var(--border-danger); border-radius: 8px;">
        <div style="text-align: center;">
          <span style="color: var(--text-bright);">${ICONS.computer}</span>
          <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">FIN-PC-04</div>
        </div>
        <div style="color: var(--danger); font-size: 1rem;">→</div>
        <div style="text-align: center;">
          <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">AUTH ATTEMPT</div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--danger);">Bad Password</div>
        </div>
        <div style="color: var(--danger); font-size: 1rem;">→</div>
        <div style="text-align: center;">
          <span style="color: var(--danger);">${ICONS.cross}</span>
          <div style="font-size: 0.7rem; color: var(--danger); font-weight: 700;">FAILURE</div>
        </div>
      </div>

      <!-- Clickable Event Log Record -->
      <div style="width: 100%; background: rgba(15, 23, 42, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem; font-family: var(--font-mono); font-size: 0.8rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem; margin-bottom: 0.65rem;">
          <span class="event-id-badge event-id-4625">Event ID: 4625</span>
          <span style="color: var(--text-muted);">10:30:01 EST</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; color: var(--text-secondary);">
          <div>Target User: <span style="color: var(--text-bright); font-weight: 600;">Finance01</span></div>
          <div>Logon Type: <span style="color: var(--cyan-text);">2 (Interactive)</span></div>
          <div>Workstation: <span style="color: var(--text-bright);">FIN-PC-04</span></div>
          <div>Result: <span style="color: var(--danger); font-weight: 700;">Failed</span></div>
        </div>

        <!-- Progressive Disclosure Toggle -->
        <div class="tech-box-collapsible" style="margin-top: 0.75rem; margin-bottom: 0;">
          <div class="tech-box-header" data-toggle-details="tech-details-4625">
            <span style="font-size: 0.75rem; color: var(--violet-primary); font-weight: 700;">[ Technical Details ▾ ]</span>
            <span style="font-size: 0.65rem; color: var(--text-muted);">Status Codes & Substatus</span>
          </div>
          <div id="tech-details-4625" class="tech-box-details" style="display: none;">
            <div>• <strong style="color: var(--text-bright);">Status:</strong> 0xC000006D (Authentication failed)</div>
            <div>• <strong style="color: var(--text-bright);">Substatus:</strong> 0xC000006A (Bad password entered)</div>
            <div>• <strong style="color: var(--text-bright);">Caller Process:</strong> C:\\Windows\\System32\\winlogon.exe</div>
            <div>• <strong style="color: var(--text-bright);">Auth Package:</strong> Negotiate (NTLM/Kerberos fallback)</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 6. EVENT ID 4624: Success Flow & Side-by-Side Comparison with 4625
export function renderEvent4624Visual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 360px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--success); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Authentication Success Anatomy</span>
        <span>✓ 4624 Successful Logon</span>
      </div>

      <!-- Diagram: Computer -> Auth -> ✓ Success -> Log -->
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 1.25rem; padding: 0.75rem 1rem; background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px;">
        <div style="text-align: center;">
          <span style="color: var(--text-bright);">${ICONS.computer}</span>
          <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">FIN-PC-04</div>
        </div>
        <div style="color: var(--success); font-size: 1rem;">→</div>
        <div style="text-align: center;">
          <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">CREDENTIAL MATCH</div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--success);">Correct Password</div>
        </div>
        <div style="color: var(--success); font-size: 1rem;">→</div>
        <div style="text-align: center;">
          <span style="color: var(--success);">${ICONS.check}</span>
          <div style="font-size: 0.7rem; color: var(--success); font-weight: 700;">SUCCESS</div>
        </div>
      </div>

      <!-- Side-by-Side Comparison -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; width: 100%;">
        <div style="padding: 0.85rem; background: rgba(244, 63, 94, 0.06); border: 1px solid var(--border-danger); border-radius: 8px;">
          <div class="event-id-badge event-id-4625" style="font-size: 0.72rem; margin-bottom: 0.4rem;">4625 = FAILURE</div>
          <div style="font-size: 0.76rem; color: var(--text-secondary); line-height: 1.5;">
            Denied login attempt. Records wrong credentials or expired tokens.
          </div>
        </div>

        <div style="padding: 0.85rem; background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 8px;">
          <div class="event-id-badge event-id-4624" style="font-size: 0.72rem; margin-bottom: 0.4rem;">4624 = SUCCESS</div>
          <div style="font-size: 0.76rem; color: var(--text-secondary); line-height: 1.5;">
            Granted session. Creates user token and assigns security privileges.
          </div>
        </div>
      </div>
    </div>
  `;
}

// 7. EVENT TO ALERT: Multiple 4625s flowing into Detection Rule -> 🚨 Alert
export function renderEventToAlertVisual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Detection Rule Logic</span>
        <span>Events → Detection → Alert</span>
      </div>

      <!-- Stream of 5 Failed Events -->
      <div style="display: flex; gap: 0.4rem; justify-content: center; width: 100%; margin-bottom: 0.75rem;">
        ${[1, 2, 3, 4, 5].map(i => `
          <div style="padding: 0.35rem 0.6rem; background: var(--danger-subtle); border: 1px solid var(--border-danger); border-radius: 4px; font-family: var(--font-mono); font-size: 0.68rem; color: #fca5a5;">
            4625 #${i}
          </div>
        `).join('')}
      </div>

      <!-- Animated Arrow Into Rule -->
      <div style="color: var(--cyan-primary); animation: signal-travel 1.5s infinite ease-in-out; margin-bottom: 0.5rem;">↓</div>

      <!-- Detection Rule Node -->
      <div style="width: 100%; padding: 1rem; background: rgba(15, 23, 42, 0.9); border: 1px solid var(--border-cyan); border-radius: 8px; margin-bottom: 0.75rem; text-align: center;">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-text); font-weight: 700;">
          SIEM RULE: DET-WIN-0422
        </div>
        <div style="font-size: 0.8rem; color: var(--text-bright); margin-top: 0.25rem;">
          Condition: <span class="mono-data">count(event.id == 4625) >= 10 in 120s</span>
        </div>
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.2rem;">
          Evaluates threshold: 18 failures detected $\rightarrow$ Trigger condition satisfied!
        </div>
      </div>

      <!-- Animated Arrow Into Alert -->
      <div style="color: var(--danger); animation: signal-travel 1.5s infinite 0.75s ease-in-out; margin-bottom: 0.5rem;">↓</div>

      <!-- Resulting Alert -->
      <div style="width: 100%; padding: 0.85rem 1rem; background: rgba(244, 63, 94, 0.12); border: 1px solid var(--danger); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 0 16px var(--danger-glow);">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span style="color: var(--danger);">${ICONS.alert}</span>
          <div>
            <div style="font-weight: 800; font-size: 0.88rem; color: #ffffff;">🚨 ALERT: Multiple Failed Logins</div>
            <div style="font-size: 0.72rem; color: #fda4af; font-family: var(--font-mono);">Host: FIN-PC-04 | User: Finance01</div>
          </div>
        </div>
        <span class="genz-badge badge-alert" style="font-size: 0.68rem;">QUEUE: L1</span>
      </div>
    </div>
  `;
}

// 8. INCIDENT LIFECYCLE: Events -> Alert -> Investigation -> Evidence -> Incident -> Case
export function renderIncidentLifecycleVisual() {
  const steps = [
    { title: 'Events', desc: 'Raw telemetry (4625/4624)', icon: ICONS.log },
    { title: 'Alert', desc: 'Rule threshold fired', icon: ICONS.alert },
    { title: 'Investigation', desc: 'Analyst reviews context', icon: ICONS.user },
    { title: 'Evidence', desc: 'Cached credential loop identified', icon: ICONS.check },
    { title: 'Case Record', desc: 'Documented & closed benign', icon: ICONS.case }
  ];

  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        Transformation Pipeline: Raw Event to Case Resolution
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.6rem; width: 100%;">
        ${steps.map((step, idx) => `
          <div style="display: flex; align-items: center; gap: 0.85rem; padding: 0.65rem 0.85rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px;">
            <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid var(--border-cyan); display: flex; align-items: center; justify-content: center; color: var(--cyan-primary); font-size: 0.75rem; font-weight: 700;">
              ${idx + 1}
            </div>
            <div style="flex: 1;">
              <div style="font-weight: 700; font-size: 0.84rem; color: var(--text-bright);">${step.title}</div>
              <div style="font-size: 0.72rem; color: var(--text-secondary);">${step.desc}</div>
            </div>
            <span style="color: var(--text-muted);">${step.icon}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

/* ==========================================================================
   TOPIC 3 VISUALS: ALERT TRIAGE (User, Host, IP, Evidence, Timeline)
   ========================================================================== */

// 9. TRIAGE USER: Alert -> Finance01 -> Active Directory -> Dept -> Status
export function renderTriageUserVisual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        Stage 01: User Identity Context
      </div>

      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem; width: 100%;">
        
        <!-- Alert Reference -->
        <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.8rem; background: var(--danger-subtle); border: 1px solid var(--border-danger); border-radius: 6px; font-size: 0.75rem; color: #fca5a5; font-family: var(--font-mono);">
          <span>Target UserName:</span> <strong>Finance01</strong>
        </div>

        <div style="color: var(--cyan-primary); animation: signal-travel 1.5s infinite ease-in-out;">↓ Query LDAP / Active Directory</div>

        <!-- User Identity Card -->
        <div style="width: 100%; background: var(--bg-surface-elevated); border: 1px solid var(--border-cyan); border-radius: 8px; padding: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(56, 189, 248, 0.15); border: 1px solid var(--cyan-primary); display: flex; align-items: center; justify-content: center; color: var(--cyan-primary);">
              ${ICONS.user}
            </div>
            <div>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-bright);">Priya Sharma</div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">priya.sharma@fincorp.internal</div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.78rem;">
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Department:</span> <strong style="color: var(--text-bright);">Finance & Treasury</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Account Status:</span> <strong style="color: var(--success);">Active (Normal)</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Password Changed:</span> <strong style="color: #fbbf24;">10:15 AM Today</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Assigned Device:</span> <strong style="color: var(--cyan-text);">FIN-PC-04</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

// 10. TRIAGE HOST: Finance01 -> FIN-PC-04 -> Windows Workstation -> Dept Subnet
export function renderTriageHostVisual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        Stage 02: Workstation Host Context
      </div>

      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem; width: 100%;">
        
        <!-- Host Card -->
        <div style="width: 100%; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
            <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(129, 140, 248, 0.15); border: 1px solid var(--violet-primary); display: flex; align-items: center; justify-content: center; color: var(--violet-primary);">
              ${ICONS.computer}
            </div>
            <div>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-bright);">FIN-PC-04.fincorp.internal</div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">Domain-Joined Corporate Endpoint</div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.78rem;">
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">OS:</span> <strong style="color: var(--text-bright);">Windows 11 Enterprise</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Primary User:</span> <strong style="color: var(--cyan-text);">Priya Sharma</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">EDR Agent:</span> <strong style="color: var(--success);">Healthy (v24.2)</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Physical Location:</span> <strong style="color: var(--text-bright);">Tower A, Floor 3</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;
}

// 11. TRIAGE IP: Finance01 -> FIN-PC-04 -> 10.10.20.15 -> Internal Subnet
export function renderTriageIPVisual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Stage 03: Source IP & Network</span>
        <span style="color: var(--success);">RFC 1918 Private</span>
      </div>

      <!-- Network Diagram: Host -> Switch -> DC -->
      <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
        
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: rgba(56, 189, 248, 0.08); border: 1px solid var(--border-cyan); border-radius: 8px;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="color: var(--cyan-primary);">${ICONS.computer}</span>
            <span style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">10.10.20.15</span>
          </div>
          <span class="genz-badge badge-tech-box" style="font-size: 0.65rem;">Internal Finance Subnet</span>
        </div>

        <!-- Packet Travel -->
        <div style="display: flex; justify-content: center; height: 16px; align-items: center; position: relative;">
          <div style="width: 2px; height: 100%; background: var(--border-subtle);"></div>
          <div class="flow-packet-dot" style="position: absolute; animation: signal-travel 1.5s infinite ease-in-out;"></div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="color: var(--violet-primary);">${ICONS.server}</span>
            <span style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">10.10.10.5 (Domain Controller FIN-DC-01)</span>
          </div>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">Port 88 (Kerberos)</span>
        </div>

        <div style="padding: 0.65rem 0.85rem; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 6px; font-size: 0.78rem; color: #a7f3d0;">
          ✓ Key Finding: IP is purely internal. No external WAN connections or unexpected foreign geolocations involved.
        </div>
      </div>
    </div>
  `;
}

// 12. EVIDENCE: The Pivotal 4624 Discovery (18 Failures then 1 Success)
export function renderTriageEvidenceVisual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Stage 04: The Critical Telemetry Pivot</span>
        <span style="color: var(--success); font-weight: 700;">"Something Changed"</span>
      </div>

      <!-- Chronological Event Stream with Pivot Callout -->
      <div style="display: flex; flex-direction: column; gap: 0.45rem; width: 100%; font-family: var(--font-mono); font-size: 0.78rem;">
        
        <div style="display: flex; justify-content: space-between; padding: 0.4rem 0.65rem; background: var(--danger-subtle); border-left: 3px solid var(--danger); border-radius: 4px;">
          <span>10:30:01</span> <span>4625 ❌ Logon Failed</span> <span>Substatus: 0xC000006A</span>
        </div>

        <div style="display: flex; justify-content: space-between; padding: 0.4rem 0.65rem; background: var(--danger-subtle); border-left: 3px solid var(--danger); border-radius: 4px;">
          <span>10:30:20</span> <span>4625 ❌ Logon Failed</span> <span>Substatus: 0xC000006A</span>
        </div>

        <div style="display: flex; justify-content: space-between; padding: 0.4rem 0.65rem; background: var(--danger-subtle); border-left: 3px solid var(--danger); border-radius: 4px;">
          <span>10:30:40</span> <span>4625 ❌ Logon Failed</span> <span>Substatus: 0xC000006A</span>
        </div>

        <div style="text-align: center; color: var(--text-muted); font-size: 0.7rem; padding: 0.2rem 0;">
          ... 15 additional repeated 4625 failures every 15-20 seconds ...
        </div>

        <!-- The Pivotal 4624 Event -->
        <div style="display: flex; justify-content: space-between; padding: 0.65rem 0.85rem; background: rgba(16, 185, 129, 0.15); border: 2px solid var(--success); border-radius: 6px; box-shadow: 0 0 16px rgba(16, 185, 129, 0.25);">
          <span style="color: #6ee7b7; font-weight: 700;">10:31:45</span>
          <span style="color: #6ee7b7; font-weight: 800;">4624 ✓ SUCCESS (Logon Type 2)</span>
          <span style="color: #a7f3d0; font-weight: 700;">Console Session Active</span>
        </div>

      </div>

      <!-- Pivot Discovery Insight -->
      <div style="margin-top: 1rem; padding: 0.75rem 1rem; background: rgba(15, 23, 42, 0.85); border: 1px solid var(--border-cyan); border-radius: 8px; width: 100%;">
        <div style="font-weight: 700; font-size: 0.84rem; color: var(--cyan-text); margin-bottom: 0.25rem;">
          💡 Analyst Pivot Discovery:
        </div>
        <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
          At 10:31:45, a successful interactive logon occurred, and the 4625 failure burst immediately stopped. If an attacker was brute-forcing, failures would continue or escalate laterally. This signature strongly suggests an authorized user entered their new password!
        </p>
      </div>
    </div>
  `;
}

// 13. TIMELINE: Scrubbable Horizontal Timeline
export function renderScrubbableTimelineVisual(activeEventIndex = 4) {
  const events = [
    { time: '10:15 AM', type: 'info', label: 'Password Reset', desc: 'Priya Sharma changes domain password per company policy.' },
    { time: '10:30:01', type: 'fail', label: '4625 Failed', desc: 'Background app attempts login with cached old password.' },
    { time: '10:30:20', type: 'fail', label: '4625 Failed', desc: 'Second cached auth retry fails.' },
    { time: '10:31:00', type: 'alert', label: 'SIEM Alert Fires', desc: 'Threshold reached: 10 failures in 120s $\rightarrow$ Case created.' },
    { time: '10:31:45', type: 'success', label: '4624 Success', desc: 'Priya types new password at workstation console $\rightarrow$ Session unlocked!' }
  ];

  const current = events[activeEventIndex] || events[events.length - 1];

  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Interactive Timeline Scrubber</span>
        <span style="color: var(--text-muted);">Drag or click step</span>
      </div>

      <!-- Horizontal Nodes Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; position: relative; margin-bottom: 1.5rem; padding: 0 0.5rem;">
        <div style="position: absolute; top: 50%; left: 1rem; right: 1rem; height: 2px; background: var(--border-subtle); transform: translateY(-50%); z-index: 1;"></div>
        
        ${events.map((evt, idx) => {
          const isSel = idx === activeEventIndex;
          let nodeColor = 'var(--border-medium)';
          if (evt.type === 'success') nodeColor = 'var(--success)';
          else if (evt.type === 'fail' || evt.type === 'alert') nodeColor = 'var(--danger)';

          return `
            <div class="timeline-step-btn" data-timeline-idx="${idx}" style="position: relative; z-index: 2; width: 34px; height: 34px; border-radius: 50%; background: ${isSel ? 'rgba(56, 189, 248, 0.2)' : 'var(--bg-surface-elevated)'}; border: 2px solid ${isSel ? 'var(--cyan-primary)' : nodeColor}; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
              ${idx + 1}
            </div>
          `;
        }).join('')}
      </div>

      <!-- Selected Timestamp Event Card -->
      <div style="width: 100%; padding: 1rem; background: rgba(15, 23, 42, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
          <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text); font-weight: 700;">${current.time}</span>
          <span class="genz-badge ${current.type === 'success' ? 'badge-try-it' : current.type === 'fail' ? 'badge-alert' : 'badge-demo'}" style="font-size: 0.65rem;">
            ${current.label}
          </span>
        </div>
        <p style="font-size: 0.84rem; color: var(--text-bright); line-height: 1.5; margin: 0;">
          ${current.desc}
        </p>
      </div>
    </div>
  `;
}

/* ==========================================================================
   TOPIC 4 VISUALS: FALSE POSITIVES (Expected, Cached Credentials, Rule Error)
   ========================================================================== */

// 14. EXPECTED ACTIVITY: Admin -> Vulnerability Scan -> Known Activity (Green Confirmation)
export function renderExpectedActivityVisual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--success); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        False Positive Type A: Authorized / Expected Activity
      </div>

      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.65rem; width: 100%; max-width: 320px;">
        <div style="display: flex; align-items: center; gap: 0.65rem; width: 100%; padding: 0.6rem 0.85rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 6px;">
          <span style="color: var(--violet-primary);">${ICONS.user}</span>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-bright);">Security Admin / Scanner</div>
        </div>

        <div style="color: var(--success); font-size: 0.9rem;">↓ Authorized Maintenance Window</div>

        <div style="display: flex; align-items: center; gap: 0.65rem; width: 100%; padding: 0.6rem 0.85rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 6px;">
          <span style="color: var(--cyan-primary);">${ICONS.network}</span>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-bright);">Scheduled Vulnerability Assessment</div>
        </div>

        <div style="color: var(--success); font-size: 0.9rem;">↓ Triggers Authentication Bursts</div>

        <div style="display: flex; align-items: center; gap: 0.65rem; width: 100%; padding: 0.75rem 0.85rem; background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success); border-radius: 6px;">
          <span style="color: var(--success);">${ICONS.check}</span>
          <div>
            <div style="font-weight: 800; font-size: 0.85rem; color: #ffffff;">Legitimate Expected Test</div>
            <div style="font-size: 0.72rem; color: #a7f3d0;">Document change ticket & close as Expected Activity</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// 15. BENIGN ACTIVITY: Cached Credential Loop (The FinCorp Finance01 Story)
export function renderCachedCredentialVisual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>False Positive Type B: Cached Credentials</span>
        <span style="color: #fbbf24;">The FinCorp Case</span>
      </div>

      <!-- Step-by-Step Chain: Password Reset -> Background Loop -> Failures -> Success -->
      <div style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%; font-size: 0.78rem;">
        
        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.5rem 0.75rem; background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: 6px;">
          <span style="font-weight: 800; color: var(--cyan-primary);">1.</span>
          <div><strong>10:15 AM:</strong> Priya resets domain password on company portal.</div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.5rem 0.75rem; background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: 6px;">
          <span style="font-weight: 800; color: #fbbf24;">2.</span>
          <div><strong>Workstation Locked:</strong> Outlook & Teams still run in the background.</div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.5rem 0.75rem; background: var(--danger-subtle); border: 1px solid var(--border-danger); border-radius: 6px;">
          <span style="font-weight: 800; color: var(--danger);">3.</span>
          <div><strong>Automatic Retries:</strong> Outlook repeatedly attempts auth using old cached password!</div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.5rem 0.75rem; background: var(--danger-subtle); border: 1px solid var(--border-danger); border-radius: 6px;">
          <span style="font-weight: 800; color: var(--danger);">4.</span>
          <div><strong>18 Failures:</strong> Substatus <code class="mono-data">0xC000006A</code> generated in under 2 minutes.</div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.65rem 0.85rem; background: rgba(16, 185, 129, 0.12); border: 1px solid var(--success); border-radius: 6px;">
          <span style="font-weight: 800; color: var(--success);">5.</span>
          <div><strong>10:31:45 (4624 Success):</strong> Priya returns, types new password $\rightarrow$ Session syncs $\rightarrow$ Failures stop!</div>
        </div>

      </div>
    </div>
  `;
}

// 16. DETECTION ERROR: Rule Without Proper Grouping Fires Incorrectly
export function renderDetectionErrorVisual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #fbbf24; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        False Positive Type C: Detection Logic / Grouping Error
      </div>

      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem; width: 100%; max-width: 320px;">
        
        <!-- 3 Users with 1 Failure Each -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.4rem; width: 100%;">
          <div style="padding: 0.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 6px; text-align: center; font-size: 0.72rem;">
            User A: 1 fail
          </div>
          <div style="padding: 0.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 6px; text-align: center; font-size: 0.72rem;">
            User B: 1 fail
          </div>
          <div style="padding: 0.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 6px; text-align: center; font-size: 0.72rem;">
            User C: 1 fail
          </div>
        </div>

        <div style="color: #fbbf24; font-size: 0.9rem;">↓ SIEM Rule Missing <span class="mono-data">groupBy: User</span></div>

        <!-- Flawed Rule Sums Everything -->
        <div style="width: 100%; padding: 0.75rem; background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 6px; text-align: center;">
          <div style="font-size: 0.78rem; font-weight: 700; color: #fbbf24;">Flawed Global Aggregation</div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Rule sums unrelated failures across entire enterprise $\rightarrow$ Fires false alert!
          </div>
        </div>

      </div>
    </div>
  `;
}

/* ==========================================================================
   TOPIC 5 VISUALS: SEVERITY SCALE & FINAL CASE REPLAY
   ========================================================================== */

// 17. SEVERITY SCALE: Interactive Visual Scale (LOW <---> MEDIUM <---> HIGH <---> CRITICAL)
export function renderSeverityScaleVisual(activeLevel = 'low') {
  const levels = {
    low: { name: 'LOW SEVERITY', color: '#10b981', badge: 'badge-try-it', sla: '4 Hours', desc: 'Single endpoint, known legitimate/benign cause (e.g. Finance01 cached credential reset).', example: 'Expected testing, user error, known false positive.' },
    medium: { name: 'MEDIUM SEVERITY', color: '#fbbf24', badge: 'badge-scenario', sla: '1 Hour', desc: 'Unusual authentication anomaly, single machine, potential unauthorized probe.', example: 'Repeated failures from external IP without valid logon.' },
    high: { name: 'HIGH SEVERITY', color: '#f97316', badge: 'badge-demo', sla: '30 Minutes', desc: 'Multiple internal workstations affected, suspected lateral movement or privilege escalation.', example: 'Pass-the-Hash detection, domain admin account lockout burst.' },
    critical: { name: 'CRITICAL SEVERITY', color: '#f43f5e', badge: 'badge-alert', sla: '15 Minutes', desc: 'Domain Controller compromise, active ransomware propagation, massive data exfiltration.', example: 'Active unauthorized domain-wide encryption in progress.' }
  };

  const current = levels[activeLevel] || levels.low;

  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Context-Driven Severity Gauge</span>
        <span>Click level to compare</span>
      </div>

      <!-- Visual Interactive Severity Scale -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.4rem; width: 100%; margin-bottom: 1.5rem;">
        ${Object.keys(levels).map(lvl => {
          const isSel = lvl === activeLevel;
          const lData = levels[lvl];
          return `
            <div class="severity-scale-btn" data-severity-lvl="${lvl}" style="padding: 0.65rem 0.4rem; text-align: center; background: ${isSel ? 'rgba(255,255,255,0.08)' : 'var(--bg-card)'}; border: 2px solid ${isSel ? lData.color : 'var(--border-subtle)'}; border-radius: 6px; cursor: pointer; transition: all 0.2s ease;">
              <div style="font-size: 0.75rem; font-weight: 800; color: ${lData.color};">${lvl.toUpperCase()}</div>
              <div style="font-size: 0.65rem; color: var(--text-muted); margin-top: 2px;">${lData.sla}</div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- Active Level Detail Card -->
      <div style="width: 100%; padding: 1.25rem; background: rgba(15, 23, 42, 0.9); border: 1px solid ${current.color}; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="font-weight: 800; font-size: 1rem; color: ${current.color};">${current.name}</span>
          <span class="genz-badge ${current.badge}">SLA: ${current.sla}</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-bright); line-height: 1.5; margin-bottom: 0.75rem;">
          ${current.desc}
        </p>
        <div style="padding: 0.5rem 0.75rem; background: rgba(255,255,255,0.03); border-radius: 6px; font-size: 0.78rem; color: var(--text-secondary);">
          <strong style="color: var(--cyan-text);">Scenario Example:</strong> ${current.example}
        </div>
      </div>
    </div>
  `;
}

// 18. FINAL REPLAY: Complete FinCorp Investigation Replay (The Synthesis of Topic 1-5)
export function renderFinance01ReplayVisual() {
  return `
    <div class="visual-canvas-card" style="width: 100%; min-height: 420px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>FinCorp Case ALT-2026-9042 Summary Replay</span>
        <span style="color: var(--success);">Full Resolution</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.55rem; width: 100%; font-size: 0.78rem;">
        
        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.85rem; background: rgba(255,255,255,0.02); border-left: 3px solid var(--cyan-primary); border-radius: 4px;">
          <strong>10:15 AM:</strong> Password changed on Active Directory portal.
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.85rem; background: var(--danger-subtle); border-left: 3px solid var(--danger); border-radius: 4px;">
          <strong>10:30 AM:</strong> Outlook on locked PC FIN-PC-04 retries with old cached credentials.
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.85rem; background: var(--danger-subtle); border-left: 3px solid var(--danger); border-radius: 4px;">
          <strong>10:31 AM:</strong> 18 failed 4625 events generate SIEM Alert <span class="mono-data">DET-WIN-0422</span>.
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.85rem; background: rgba(16, 185, 129, 0.1); border-left: 3px solid var(--success); border-radius: 4px;">
          <strong>10:31:45:</strong> Event 4624 (Logon Type 2) succeeds $\rightarrow$ Failures stop!
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.85rem; background: rgba(129, 140, 248, 0.1); border-left: 3px solid var(--violet-primary); border-radius: 4px;">
          <strong>10:33 AM:</strong> L1 Analyst reviews Host, User, IP $\rightarrow$ Confirms no lateral movement or malware.
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1rem; background: rgba(16, 185, 129, 0.15); border: 2px solid var(--success); border-radius: 8px;">
          <div>
            <div style="font-weight: 800; font-size: 0.9rem; color: #ffffff;">FINAL CLASSIFICATION: BENIGN FALSE POSITIVE</div>
            <div style="font-size: 0.72rem; color: #a7f3d0;">Severity: LOW • Ticket Documented • Case Closed</div>
          </div>
          <span style="color: var(--success);">${ICONS.check}</span>
        </div>

      </div>
    </div>
  `;
}
