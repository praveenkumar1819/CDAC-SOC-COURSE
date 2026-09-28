// Comprehensive 7-Tab Alert Triage Console for Case ALT-2026-9042
import { ALERT_FINANCE01 } from '../data/alertData.js';
import { store } from '../state/store.js';
import { sound } from '../audio/soundEffects.js';

let activeTab = 'SUMMARY';

export function renderAlertPanel() {
  const alert = ALERT_FINANCE01;
  const state = store.state;

  return `
    <div class="glass-panel" style="background: rgba(11, 17, 33, 0.95); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7);">
      
      <!-- Top Alert Banner -->
      <div style="padding: 1.5rem 2rem; background: linear-gradient(90deg, rgba(239, 68, 68, 0.15), rgba(15, 23, 42, 0.8)); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.25rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.35rem;">
            <span class="genz-badge badge-alert">🚨 ALERT TRIAGE BOARD</span>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text);">${alert.id}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">•</span>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">${alert.createdAt}</span>
          </div>
          <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-bright);">
            ${alert.title}
          </h2>
        </div>

        <!-- Quick Metrics Badges -->
        <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
          <div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase;">SEVERITY</div>
            <div style="font-weight: 800; color: #fbbf24; font-size: 1.1rem; display: flex; align-items: center; gap: 0.3rem;">
              <span style="width: 10px; height: 10px; border-radius: 50%; background: #fbbf24; box-shadow: 0 0 8px #fbbf24;"></span>
              ${alert.severity} (${alert.initialScore})
            </div>
          </div>

          <div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase;">FAILURES / TOTAL</div>
            <div style="font-weight: 800; font-family: var(--font-mono); color: var(--danger); font-size: 1.1rem;">
              18 / 19 Events
            </div>
          </div>

          <div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase;">ASSIGNED TO</div>
            <div style="font-weight: 700; color: var(--cyan-primary); font-size: 0.95rem;">
              ${state.profile.callsign} (YOU)
            </div>
          </div>
        </div>
      </div>

      <!-- 7 Navigation Tabs -->
      <div class="tabs-nav" style="background: rgba(8, 12, 24, 0.9);">
        ${['SUMMARY', 'USER', 'HOST', 'NETWORK', 'EVENTS', 'TIMELINE', 'NOTES'].map(tab => `
          <button class="tab-btn ${activeTab === tab ? 'active' : ''}" data-tab="${tab}">
            ${tab === 'NOTES' ? '📝 ' : ''}${tab}
          </button>
        `).join('')}
      </div>

      <!-- Tab Content Area -->
      <div class="tab-content">
        ${renderActiveTabContent(activeTab, alert, state)}
      </div>

    </div>
  `;
}

function renderActiveTabContent(tab, alert, state) {
  switch (tab) {
    case 'SUMMARY':
      return `
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 1.75rem;">
          <div>
            <span class="genz-badge badge-key-idea" style="margin-bottom: 0.75rem;">DETECTION SUMMARY</span>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-bright);">
              High Frequency Authentication Failure Burst
            </h3>
            <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem; color: var(--text-secondary);">
              FinCorp SIEM detected a sustained sequence of 18 authentication failures within 84 seconds targeting domain user <span class="mono-data">${alert.user.username}</span> from workstation <span class="mono-data">${alert.host.hostname}</span>. Crucially, at 10:31:45 AM, an interactive logon SUCCESS was recorded.
            </p>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.2rem; display: flex; flex-direction: column; gap: 0.6rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">SIEM Rule Name:</span>
                <span class="mono-data">${alert.detectionLogic.name}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Detection Threshold:</span>
                <span style="color: var(--text-bright);">${alert.detectionLogic.threshold}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">MITRE ATT&CK:</span>
                <span class="mono-data" style="color: #f87171;">${alert.mitre.technique}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Observed Failures:</span>
                <span style="color: var(--danger); font-weight: 700;">18 events in 84 seconds</span>
              </div>
            </div>
          </div>

          <!-- Quick Entity Cards -->
          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            <div class="glass-panel" style="padding: 1rem 1.25rem; background: rgba(15, 23, 42, 0.7); cursor: pointer;" data-tab-switch="USER">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text);">ENTITY: USER</span>
                <span class="genz-badge badge-tech-box" style="font-size: 0.65rem;">ACTIVE</span>
              </div>
              <div style="font-weight: 700; color: var(--text-bright); font-size: 1.05rem;">${alert.user.fullName} (${alert.user.username})</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">${alert.user.role} • ${alert.user.department}</div>
            </div>

            <div class="glass-panel" style="padding: 1rem 1.25rem; background: rgba(15, 23, 42, 0.7); cursor: pointer;" data-tab-switch="HOST">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text);">ENTITY: HOST</span>
                <span class="genz-badge badge-try-it" style="font-size: 0.65rem;">EDR HEALTHY</span>
              </div>
              <div style="font-weight: 700; color: var(--text-bright); font-size: 1.05rem;">${alert.host.hostname}</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">${alert.host.os} • ${alert.host.assetType}</div>
            </div>

            <div class="glass-panel" style="padding: 1rem 1.25rem; background: rgba(15, 23, 42, 0.7); cursor: pointer;" data-tab-switch="NETWORK">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text);">ENTITY: NETWORK</span>
                <span class="genz-badge badge-key-idea" style="font-size: 0.65rem;">RFC 1918 INTERNAL</span>
              </div>
              <div style="font-weight: 700; font-family: var(--font-mono); color: var(--text-bright); font-size: 1.05rem;">${alert.network.sourceIp}</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">${alert.network.subnet}</div>
            </div>
          </div>
        </div>
      `;

    case 'USER':
      return `
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <div>
              <span class="genz-badge badge-investigate">IDENTITY TRIAGE</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Account Profile: ${alert.user.fullName} (${alert.user.username})
              </h3>
            </div>
            <div class="genz-badge badge-tech-box" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">
              STANDARD USER ACCOUNT
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Department:</span>
                <span style="font-weight: 600; color: var(--text-bright);">${alert.user.department}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Direct Manager:</span>
                <span style="color: var(--text-bright);">${alert.user.manager}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Desk Location:</span>
                <span style="color: var(--text-bright);">${alert.user.location}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Password Last Set:</span>
                <span class="mono-data" style="color: #6ee7b7;">${alert.user.passwordLastSet}</span>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
                ACTIVE DIRECTORY GROUPS
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
                ${alert.user.groups.map(g => `<span class="mono-data" style="font-size: 0.78rem;">${g}</span>`).join('')}
              </div>
              <div style="margin-top: 1rem; font-size: 0.82rem; color: var(--text-secondary);">
                ${alert.user.privilegedNote}
              </div>
            </div>
          </div>

          <!-- ANALYST THINK CALLOUT -->
          <div class="callout-box callout-analyst-think">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.6rem;">
              <span class="genz-badge badge-analyst-think">🧠 ANALYST THINK</span>
              <span style="font-weight: 700; color: #d8b4fe; font-size: 0.95rem;">Identity Context Assessment</span>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-bright); margin-bottom: 0.75rem; line-height: 1.6;">
              <strong>Question for the L1:</strong> What would change if this were a privileged administrator account (e.g. <span class="mono-data">svc-domainadmin</span>) instead of a standard finance analyst?
            </p>
            <div style="background: rgba(0,0,0,0.3); border-radius: 6px; padding: 0.85rem; font-size: 0.88rem; color: var(--text-secondary);">
              <span style="color: var(--cyan-primary); font-weight: 700;">Analyst Answer:</span> If this were a Domain Admin, the potential blast radius and attacker incentive would be exponentially higher. The alert severity would escalate immediately from Medium to High/Critical, and immediate host isolation or token revocation would be mandated under FinCorp SOC SOP!
            </div>
          </div>
        </div>
      `;

    case 'HOST':
      return `
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <div>
              <span class="genz-badge badge-investigate">ENDPOINT TELEMETRY</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Host Inspection: ${alert.host.hostname} (${alert.host.fqdn})
              </h3>
            </div>
            <div class="genz-badge badge-try-it" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">
              ${alert.host.edrStatus}
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Asset Type:</span>
                <span style="font-weight: 600; color: var(--text-bright);">${alert.host.assetType}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Operating System:</span>
                <span class="mono-data">${alert.host.os}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Assigned User:</span>
                <span style="color: var(--text-bright);">${alert.user.fullName} (${alert.user.username})</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Asset Criticality:</span>
                <span style="color: #fbbf24; font-weight: 700;">Tier 2 (Workstation)</span>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
                EDR PROCESS TREE SNAPSHOT
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-secondary); line-height: 1.7;">
                <div>├─ wininit.exe (PID 620)</div>
                <div>│  └─ services.exe (PID 684)</div>
                <div>│     └─ svchost.exe (PID 1420 - LanmanWorkstation)</div>
                <div>├─ explorer.exe (PID 4820)</div>
                <div>│  ├─ OUTLOOK.EXE (PID 7912) [4625 Trigger]</div>
                <div>│  └─ Teams.exe (PID 8140)</div>
                <div>└─ winlogon.exe (PID 840) [4624 Success at 10:31:45]</div>
              </div>
              <div style="margin-top: 0.75rem; font-size: 0.78rem; color: var(--success); display: flex; align-items: center; gap: 0.35rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Zero unsigned binaries or command shells (cmd/powershell) detected.
              </div>
            </div>
          </div>

          <div class="callout-box callout-tech-box">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">🧩 TECH BOX: HOST CRITICALITY</span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 0.95rem;">Why Host Context Shapes Urgency</span>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
              A workstation asset (<span class="mono-data">FIN-PC-04</span>) typically represents single-user impact. If the same 18 failed logins were targeting <span class="mono-data">DC01.corp.fincorp.local</span> (Domain Controller) or <span class="mono-data">SWIFT-GW-01</span> (Financial Transactions Server), it would represent potential domain compromise, demanding instant crisis escalation.
            </p>
          </div>
        </div>
      `;

    case 'NETWORK':
      return `
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <div>
              <span class="genz-badge badge-investigate">NETWORK CONTEXT</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Source IP: ${alert.network.sourceIp}
              </h3>
            </div>
            <div class="genz-badge badge-key-idea" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">
              ${alert.network.scope}
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">IP Address:</span>
                <span class="mono-data">${alert.network.sourceIp}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">VLAN / Subnet:</span>
                <span class="mono-data">${alert.network.subnet}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Destination IP:</span>
                <span class="mono-data">${alert.network.destinationIp}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Threat Intel Reputation:</span>
                <span style="color: var(--success); font-weight: 700;">${alert.network.reputationScore}</span>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
                DHCP & ROUTING VERIFICATION
              </div>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.75rem;">
                DHCP lease server confirms IP <span class="mono-data">10.10.20.15</span> has been bound to MAC <span class="mono-data">${alert.host.mac}</span> (FIN-PC-04) since 08:30 AM today.
              </p>
              <div style="font-size: 0.82rem; color: var(--success);">
                ✓ Source IP perfectly matches the target employee workstation. No spoofing or rogue device detected on VLAN 20.
              </div>
            </div>
          </div>

          <div class="callout-box callout-pro-tip">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-pro-tip">⚡ PRO TIP: NETWORK MINDSET</span>
              <span style="font-weight: 700; color: #fde047; font-size: 0.95rem;">Internal vs External Context</span>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-bright); line-height: 1.6;">
              "Internal does not automatically mean safe. External does not automatically mean malicious. <strong>Context matters.</strong>"
            </p>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem;">
              An internal IP could be an infected pivot machine performing lateral movement. However, when the source IP is identical to the user's assigned machine, and the processes are legitimate office applications, the probability of a benign local issue increases dramatically.
            </p>
          </div>
        </div>
      `;

    case 'EVENTS':
      return `
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <div>
              <span class="genz-badge badge-tech-box">LOG TELEMETRY</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Correlated Events (19 Total)
              </h3>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--cyan-text);">
              18 × 4625 (Failures) ➔ 1 × 4624 (Success)
            </div>
          </div>

          <div class="event-table-container">
            <table class="event-table">
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>EVENT</th>
                  <th>USER</th>
                  <th>HOST</th>
                  <th>IP</th>
                  <th>PROCESS</th>
                  <th>SUBSTATUS</th>
                  <th>RESULT</th>
                </tr>
              </thead>
              <tbody>
                ${alert.events.map(e => `
                  <tr class="${e.eventId === 4624 ? 'event-row-success' : ''}">
                    <td style="font-family: var(--font-mono); font-size: 0.78rem;">${e.time}</td>
                    <td>
                      <span class="event-id-badge ${e.eventId === 4624 ? 'event-id-4624' : 'event-id-4625'}">
                        ${e.eventId}
                      </span>
                    </td>
                    <td style="font-family: var(--font-mono);">${e.user}</td>
                    <td style="font-family: var(--font-mono);">${e.host}</td>
                    <td style="font-family: var(--font-mono);">${e.ip}</td>
                    <td style="font-family: var(--font-mono); font-size: 0.78rem;">${e.process}</td>
                    <td style="font-family: var(--font-mono); font-size: 0.78rem; color: ${e.subStatus === '0xC000006A' ? '#fca5a5' : '#86efac'};">${e.subStatus}</td>
                    <td>
                      <span style="font-weight: 700; font-size: 0.75rem; color: ${e.eventId === 4624 ? 'var(--success)' : 'var(--danger)'};">
                        ${e.eventId === 4624 ? 'SUCCESS' : 'FAILED'}
                      </span>
                    </td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      `;

    case 'TIMELINE':
      return `
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <div>
              <span class="genz-badge badge-demo">EVIDENCE TIMELINE</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Step-by-Step Chronological Progression
              </h3>
            </div>
            <button id="btn-inspect-success" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
              Investigate Successful Login (10:31:45) →
            </button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1.5rem;">
            <div class="glass-panel" style="padding: 1.25rem; border-left: 4px solid var(--danger);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
                <span style="font-family: var(--font-mono); font-weight: 700; color: #fca5a5;">10:30:01 – 10:31:25 AM</span>
                <span class="genz-badge badge-alert">18 FAILURES IN 84 SECONDS</span>
              </div>
              <p style="font-size: 0.88rem; color: var(--text-secondary);">
                18 sequential Windows Event ID 4625 events logged. Caller processes: <span class="mono-data">OUTLOOK.EXE</span>, <span class="mono-data">teams.exe</span>, and <span class="mono-data">svchost.exe (Lanman)</span>. Logon Type 3 (Network). Substatus: <span class="mono-data">0xC000006A</span> (bad password).
              </p>
            </div>

            <!-- The Pivot Event -->
            <div class="glass-panel" style="padding: 1.5rem; border-left: 4px solid var(--success); background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.4); box-shadow: 0 0 25px rgba(16, 185, 129, 0.15);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.6rem;">
                  <span class="event-id-badge event-id-4624">ID 4624</span>
                  <span style="font-family: var(--font-mono); font-weight: 800; font-size: 1.1rem; color: #86efac;">10:31:45 AM — SUCCESSFUL LOGON</span>
                </div>
                <span class="genz-badge badge-try-it">SOMETHING CHANGED</span>
              </div>
              <p style="font-size: 0.95rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.75rem;">
                Caller Process: <span class="mono-data">winlogon.exe</span> • Logon Type: <span class="mono-data">Type 2 (Interactive Console)</span> • Result: <span class="mono-data">0x0 (SUCCESS)</span>.
              </p>
              <div style="font-size: 0.88rem; color: #a7f3d0; background: rgba(16, 185, 129, 0.1); padding: 0.75rem; border-radius: 6px;">
                💡 <strong>Analyst Epiphany:</strong> The failures immediately stopped the exact second the interactive login succeeded at 10:31:45 AM! An attacker doing a brute force or password spray wouldn't stop attacking upon login, nor would they be logging in from Jane's physical desk.
              </div>
            </div>
          </div>
        </div>
      `;

    case 'NOTES':
      return `
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <div>
              <span class="genz-badge badge-tech-box">ANALYST SCRATCHPAD</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Case Notes & Audit Trail (${alert.id})
              </h3>
            </div>
            <div style="font-size: 0.8rem; color: var(--cyan-text); font-family: var(--font-mono);">
              ✓ AUTO-SAVED TO PERSISTENT STATE
            </div>
          </div>

          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
            Write your observations, hypotheses, and evidence findings. These notes are preserved across your shift and can be exported directly into the Final Shift Report.
          </p>

          <textarea id="triage-notes-input" style="width: 100%; height: 260px; background: rgba(6, 10, 20, 0.8); border: 1px solid var(--border-medium); border-radius: 8px; color: var(--cyan-text); font-family: var(--font-mono); font-size: 0.88rem; padding: 1.25rem; line-height: 1.6; resize: vertical;" placeholder="Type analyst notes here...">${state.scratchpadNotes}</textarea>

          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1rem;">
            <div style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
              Format: Standard FinCorp Incident Logging Syntax
            </div>
            <button id="btn-save-notes" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
              Save & Commit Notes
            </button>
          </div>
        </div>
      `;

    default:
      return '';
  }
}

export function initAlertPanelEvents() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.getAttribute('data-tab');
      if (tab) {
        activeTab = tab;
        sound.playClick();
        const container = document.getElementById('alert-panel-container');
        if (container) {
          container.innerHTML = renderAlertPanel();
          initAlertPanelEvents();
        }
      }
    });
  });

  document.querySelectorAll('[data-tab-switch]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.getAttribute('data-tab-switch');
      if (tab) {
        activeTab = tab;
        sound.playClick();
        const container = document.getElementById('alert-panel-container');
        if (container) {
          container.innerHTML = renderAlertPanel();
          initAlertPanelEvents();
        }
      }
    });
  });

  const notesInput = document.getElementById('triage-notes-input');
  if (notesInput) {
    notesInput.addEventListener('input', (e) => {
      store.saveScratchpadNotes(e.target.value);
    });
  }

  const btnSaveNotes = document.getElementById('btn-save-notes');
  if (btnSaveNotes) {
    btnSaveNotes.addEventListener('click', () => {
      if (notesInput) {
        store.saveScratchpadNotes(notesInput.value);
        sound.playSuccess();
        store.showToast('Triage notes successfully saved to case record.', 'info');
      }
    });
  }

  const btnInspectSuccess = document.getElementById('btn-inspect-success');
  if (btnInspectSuccess) {
    btnInspectSuccess.addEventListener('click', () => {
      activeTab = 'NOTES';
      const notes = store.state.scratchpadNotes;
      const addition = `[10:36:12] Crucial finding: Event 4624 (Logon Type 2 Interactive Console) succeeded at 10:31:45. Subsequent 4625 failures ceased immediately. Investigating cached credential hypothesis.\n`;
      store.saveScratchpadNotes(notes + addition);
      store.completeCheckpoint('check-triage-success', 35, 'Identified Pivotal 4624 Logon');
      const container = document.getElementById('alert-panel-container');
      if (container) {
        container.innerHTML = renderAlertPanel();
        initAlertPanelEvents();
      }
    });
  }
}
