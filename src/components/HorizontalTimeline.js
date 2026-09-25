// Horizontal Cinematic Timeline of the Finance01 Investigation
export function renderHorizontalTimeline() {
  const timelineMilestones = [
    {
      time: '10:15 AM',
      tag: 'IDENTITY EVENT',
      type: 'neutral',
      title: 'Password Reset',
      desc: 'Jane Miller (Finance01) completes self-service password reset via portal from mobile. FIN-PC-04 workstation is asleep at desk.',
      badgeClass: 'badge-tech-box'
    },
    {
      time: '10:25 AM',
      tag: 'SHIFT START',
      type: 'neutral',
      title: 'L1 Analyst Reports',
      desc: 'You log onto FinCorp SOC Console. System normal, SIEM health 99.8%, DEFCON-4 routine business operations.',
      badgeClass: 'badge-key-idea'
    },
    {
      time: '10:30:01',
      tag: 'EVENT STREAM START',
      type: 'failure',
      title: 'First 4625 Failure',
      desc: 'Workstation wakes up. OUTLOOK.EXE attempts background sync using cached credentials. Generates Event ID 4625 (0xC000006A).',
      badgeClass: 'badge-tech-box'
    },
    {
      time: '10:30:20 – 10:31:25',
      tag: 'SPIKE PATTERN',
      type: 'failure',
      title: '17 Repeated Failures',
      desc: 'Outlook and SMB network share client retry in rapid succession. 17 additional Event ID 4625 events stream into SIEM.',
      badgeClass: 'badge-alert'
    },
    {
      time: '10:31:45',
      tag: 'PIVOTAL EVENT',
      type: 'success',
      title: '4624 Successful Logon',
      desc: 'Jane Miller arrives at desk, types her newly updated password at the physical console. Logon Type 2 SUCCESS!',
      badgeClass: 'badge-try-it'
    },
    {
      time: '10:32:00',
      tag: 'DETECTION TRIGGER',
      type: 'alert',
      title: '🚨 SIEM Alert Generated',
      desc: 'SIEM Rule DET-WIN-0422 triggers on threshold (18 failures in <2 min). Creates Alert ALT-2026-9042 and assigns to L1 queue.',
      badgeClass: 'badge-challenge'
    },
    {
      time: '10:35 AM',
      tag: 'TRIAGE PHASE',
      type: 'neutral',
      title: 'L1 Investigates Context',
      desc: 'You check User (Finance), Host (FIN-PC-04), IP (10.10.20.15), and discover the 4624 success trailing the failures.',
      badgeClass: 'badge-investigate'
    },
    {
      time: '10:48 AM',
      tag: 'ROOT CAUSE FOUND',
      type: 'success',
      title: 'Ticket #IT-94821 Linked',
      desc: 'Helpdesk log confirms password reset at 10:15 AM. Explains why background services hammered AD with outdated cached token.',
      badgeClass: 'badge-key-idea'
    },
    {
      time: '11:00 AM',
      tag: 'RESOLUTION',
      type: 'success',
      title: 'Case Closed (Benign)',
      desc: 'You document root cause, instruct user to refresh Credential Manager, close case without unnecessary escalation. Shift hero!',
      badgeClass: 'badge-demo'
    }
  ];

  return `
    <div style="position: relative; margin: 2rem 0;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="genz-badge badge-demo">CINEMATIC TIMELINE</span>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-bright);">The Finance01 Incident Chronology</h3>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
          ← SCROLL HORIZONTALLY →
        </div>
      </div>

      <div class="timeline-horizontal">
        ${timelineMilestones.map((item, idx) => `
          <div class="timeline-card ${item.type}">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.65rem;">
              <span class="timeline-timestamp">${item.time}</span>
              <span class="genz-badge ${item.badgeClass}" style="font-size: 0.65rem; padding: 0.15rem 0.5rem;">${item.tag}</span>
            </div>
            <h4 style="font-size: 0.98rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-bright);">
              ${item.title}
            </h4>
            <p style="font-size: 0.82rem; line-height: 1.5; color: var(--text-secondary);">
              ${item.desc}
            </p>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
