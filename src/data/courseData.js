// Course structure, curriculum definitions, interactive checks, and SOC concepts
export const COURSE_MODULE = {
  id: 'module-4',
  code: 'SOC-L1-M4',
  title: 'SOC Operations',
  subtitle: 'The Finance01 Login Alert — Live Shift Investigation',
  level: 'Analyst L1',
  role: 'SOC Analyst L1',
  estimatedTime: '45 mins',
  totalXp: 1250,
  organization: 'FinCorp Global Security Operations',
  description: 'Step into the shoes of a newly hired Tier 1 SOC Analyst at FinCorp. Live alerts are streaming in, and an authentication spike on FIN-PC-04 demands your immediate attention. Navigate through telemetry, analyze event correlation, classify true versus benign activity, assess severity, and document the resolution like a seasoned professional.',
  topics: [
    {
      id: 'topic-1',
      index: '01',
      title: 'SOC Architecture',
      subtitle: 'Welcome to the SOC — People, Process, Tech & Data',
      time: '10:25 AM',
      xp: 200,
      description: 'Understand how FinCorp SOC is structured across People, Process, Technology, and Security Data flows before your first alert hits.'
    },
    {
      id: 'topic-2',
      index: '02',
      title: 'Alerts & Events',
      subtitle: 'The Anatomy of Telemetry — Event vs Alert vs Incident',
      time: '10:32 AM',
      xp: 200,
      description: 'The dashboard flashes with an alert! Learn the fundamental distinctions between raw events, threshold alerts, confirmed incidents, and cases.'
    },
    {
      id: 'topic-3',
      index: '03',
      title: 'Alert Triage',
      subtitle: 'Now It’s Your Alert — User, Host, IP & Evidence',
      time: '10:35 AM',
      xp: 250,
      description: 'Execute the standard L1 triage playbook on Finance01. Uncover identities, evaluate the timeline, and spot the game-changing successful logon.'
    },
    {
      id: 'topic-4',
      index: '04',
      title: 'False Positives',
      subtitle: 'Looks Suspicious. But Is It? — Expected, Benign & Detection Errors',
      time: '10:45 AM',
      xp: 200,
      description: 'Master the three categories of non-malicious alerts: Expected Activity, Benign Activity (cached credentials), and Detection Errors.'
    },
    {
      id: 'topic-5',
      index: '05',
      title: 'Severity & Escalation',
      subtitle: 'Impact × Likelihood — Prioritizing Threat Queues',
      time: '10:52 AM',
      xp: 150,
      description: 'Learn why severity is dynamic. Calculate risk scores based on asset criticality, account privileges, and verified impact.'
    },
    {
      id: 'topic-6',
      index: '06',
      title: 'Final L1 Challenge',
      subtitle: 'The Ultimate Shift Trial — Investigate, Document & Resolve',
      time: '11:00 AM',
      xp: 250,
      description: 'Put all your skills to the test in a live simulated SIEM environment. Correlate helpdesk tickets, build case notes, and make the final closing call.'
    }
  ]
};

export const SOC_PEOPLE = [
  {
    id: 'l1',
    role: 'L1 SOC Analyst (Tier 1)',
    badge: 'YOU ARE HERE',
    isLearner: true,
    tagline: 'The First Line of Defense & Triage Gatekeeper',
    escalationTo: 'L2 SOC Analyst',
    whatTheyDo: 'Monitors SIEM alert queues in real-time, triages incoming detections, validates entity context (User, Host, IP), filters out false positives, documents initial findings, and escalates confirmed or complex threats.',
    handles: ['High-volume alerts (brute force, malware alerts, phishing reports)', 'Initial validation & log review', 'Basic containment (e.g. host isolation requests)', 'Case creation & ticket hygiene'],
    interactionWithL1: 'You are the L1 Analyst! This is your operational seat on shift.',
    skillsNeeded: ['SIEM query navigation', 'Log analysis (Syslog, Windows Event IDs, PCAP)', 'Attention to detail', 'Speed & playbook adherence']
  },
  {
    id: 'l2',
    role: 'L2 Incident Responder (Tier 2)',
    badge: 'TECHNICAL ESCALATION',
    isLearner: false,
    tagline: 'Deep Dive Investigator & Incident Handler',
    escalationTo: 'L3 / Senior Specialist',
    whatTheyDo: 'Takes over validated alerts escalated by L1. Performs deep forensic log analysis, cross-host correlation, memory inspection, network traffic reconstruction, and scopes out the full blast radius of an intrusion.',
    handles: ['Advanced threat hunting & pivoting', 'Multi-stage attacks (lateral movement, persistence)', 'Forensic disk & memory dumps', 'Coordinating active containment with IT'],
    interactionWithL1: 'When an alert cannot be dismissed as benign and exhibits signs of active exploitation or complex adversary behavior, L1 passes the case to L2 with full documentation.',
    skillsNeeded: ['Endpoint forensics', 'Network packet carving', 'Scripting (Python, PowerShell)', 'Attack lifecycle mapping (MITRE ATT&CK)']
  },
  {
    id: 'l3',
    role: 'L3 Senior Analyst / Threat Hunter (Tier 3)',
    badge: 'SENIOR ESCALATION',
    isLearner: false,
    tagline: 'Adversary Hunter & Root Cause Authority',
    escalationTo: 'SOC Manager / Incident Commander',
    whatTheyDo: 'Handles the most critical security incidents, reverse engineers custom malware, develops novel detection rules for zero-day vulnerabilities, and conducts proactive hypothesis-driven threat hunting across the enterprise.',
    handles: ['Nation-state APT campaigns', 'Ransomware negotiations & crisis containment', 'Reverse engineering unknown binaries', 'Detection engineering architecture'],
    interactionWithL1: 'Mentors L1/L2 analysts, authors the triage playbooks L1 follows, and steps in during major enterprise-wide incidents (SEV-1).',
    skillsNeeded: ['Reverse engineering (Ghidra, IDA)', 'Kernel telemetry', 'Adversary emulation', 'Architecture security']
  },
  {
    id: 'specialists',
    role: 'Domain Specialists',
    badge: 'SUBJECT MATTER EXPERTS',
    isLearner: false,
    tagline: 'Targeted Deep Technical Disciplines',
    escalationTo: 'SOC Leadership',
    whatTheyDo: 'Specialized units embedded or consulted by the SOC for targeted technical challenges.',
    subdisciplines: [
      { name: 'Threat Intelligence (CTI)', role: 'Tracks threat actor groups, IOC feeds, and geopolitical cyber risks.' },
      { name: 'Malware Analysts', role: 'Detonates files in sandboxes to understand payload behaviors and C2 indicators.' },
      { name: 'Forensics (DFIR)', role: 'Preserves chain of custody for legal and deep system post-mortem.' },
      { name: 'Identity & Access (IAM)', role: 'Manages Active Directory, Okta, privileged access, and directory hygiene.' },
      { name: 'Detection Engineers', role: 'Tunes SIEM rules to minimize false positives and maximize signal-to-noise ratio.' }
    ],
    interactionWithL1: 'L1 uses detection rules crafted by Detection Engineers and references IOC lookups provided by the Threat Intel team.',
    skillsNeeded: ['Niche domain mastery', 'Tooling specialization']
  },
  {
    id: 'manager',
    role: 'SOC Manager',
    badge: 'OPERATIONAL LEADERSHIP',
    isLearner: false,
    tagline: 'Team Operations, Metrics & Cross-Department Liaison',
    escalationTo: 'CISO',
    whatTheyDo: 'Runs the day-to-day operations of the 24/7 SOC. Manages shift rotations, SLA compliance (MTTD/MTTR), tooling budgets, stakeholder updates, and crisis communication during major incidents.',
    handles: ['Shift scheduling & burnout prevention', 'Vendor contracts & tool evaluation', 'KPI tracking (Mean Time to Detect/Respond)', 'Executive briefings'],
    interactionWithL1: 'Conducts your shift handovers, reviews escalation performance, and provides operational guidance when business impact decisions arise.',
    skillsNeeded: ['Leadership', 'Crisis communication', 'Risk management', 'Security metrics']
  },
  {
    id: 'ciso',
    role: 'Chief Information Security Officer (CISO)',
    badge: 'EXECUTIVE LEADERSHIP',
    isLearner: false,
    tagline: 'Enterprise Cyber Strategy & Board Governance',
    escalationTo: 'CEO & Board of Directors',
    whatTheyDo: 'Executive leader responsible for the entire organization’s cybersecurity posture, regulatory compliance, risk tolerance, cybersecurity insurance, and aligning security with business growth.',
    handles: ['Board reporting', 'Regulatory audits (SEC, GDPR, NYDFS)', 'Enterprise risk strategy', 'Public disclosure of breach events'],
    interactionWithL1: 'Rarely interacts directly with L1 in daily triage, but relies on accurate L1 triage data to understand organizational threat trends and defend FinCorp against catastrophic loss.',
    skillsNeeded: ['Strategic vision', 'Corporate governance', 'Financial risk', 'Crisis diplomacy']
  }
];

export const SOC_PROCESS = [
  {
    step: 'MONITOR',
    title: 'Continuous Visibility',
    icon: 'eye',
    desc: 'Ingesting 50,000+ events per second from endpoints, cloud infrastructure, firewalls, and Active Directory.',
    analystAction: 'Review live SIEM dashboards, alert queues, and telemetry streams.',
    isL1Focus: false
  },
  {
    step: 'DETECT',
    title: 'Automated Correlation',
    icon: 'zap',
    desc: 'Detection rules match incoming event streams against known attack patterns, thresholds, and behavioral anomalies.',
    analystAction: 'Detection engine triggers an Alert when thresholds (e.g. 10 failures in 2 mins) are met.',
    isL1Focus: false
  },
  {
    step: 'ANALYZE',
    title: 'Analyst Triage & Scoping',
    icon: 'search',
    desc: 'Human judgment inspects the alert: Who is the user? What is the host? Is this normal business behavior or malicious intent?',
    analystAction: 'THIS IS YOUR PRIME L1 MISSION. Inspect evidence, correlate timelines, eliminate false positives, and assess true risk.',
    isL1Focus: true
  },
  {
    step: 'RESPOND',
    title: 'Action, Containment & Closure',
    icon: 'shield-check',
    desc: 'Execute containment actions (isolate host, reset credentials, block IP), document the investigation, and resolve or escalate.',
    analystAction: 'Document case notes with root cause, provide remediation instructions, or escalate to Tier 2.',
    isL1Focus: false
  }
];

export const SOC_TECH = [
  {
    id: 'siem',
    name: 'SIEM',
    fullName: 'Security Information & Event Management',
    role: 'The Central Brain of the SOC',
    desc: 'Aggregates, parses, normalizes, and indexes terabytes of log data from hundreds of enterprise systems into a unified searchable platform.',
    tools: ['Splunk', 'Microsoft Sentinel', 'Elastic Security', 'Google Chronicle'],
    finCorpUsage: 'FinCorp SIEM ingests 45,000 events/sec across all global branch offices and hosts the 4625/4624 authentication logs.'
  },
  {
    id: 'edr',
    name: 'EDR',
    fullName: 'Endpoint Detection & Response',
    role: 'Deep Host-Level Agent & Telemetry',
    desc: 'Software agent installed on laptops, servers, and virtual machines. Records process trees, memory executions, network connections, and allows remote host containment.',
    tools: ['CrowdStrike Falcon', 'Microsoft Defender for Endpoint', 'SentinelOne'],
    finCorpUsage: 'Installed on FIN-PC-04. Shows us the exact caller executable (OUTLOOK.EXE vs winlogon.exe) triggering authentication.'
  },
  {
    id: 'network',
    name: 'NDR / Firewalls',
    fullName: 'Network Detection & Firewalls',
    role: 'Perimeter & Internal Traffic Inspector',
    desc: 'Inspects packet headers, DNS queries, TLS handshakes, and NetFlow across internal subnets and edge boundaries.',
    tools: ['Palo Alto Networks', 'Zeek', 'Suricata', 'Corelight'],
    finCorpUsage: 'Validates that 10.10.20.15 is an internal trusted VLAN and traffic never left the corporate boundary.'
  },
  {
    id: 'email',
    name: 'Email Security (SEG)',
    fullName: 'Secure Email Gateway',
    role: 'Inbound & Outbound Communication Shield',
    desc: 'Filters phishing, credential harvesting links, suspicious attachments, and business email compromise (BEC).',
    tools: ['Proofpoint', 'Mimecast', 'Defender for Office 365'],
    finCorpUsage: 'Monitors Jane Miller’s inbox for phishing lures that could have precipitated account compromise.'
  },
  {
    id: 'threat-intel',
    name: 'Threat Intelligence (CTI)',
    fullName: 'Cyber Threat Intelligence Platform',
    role: 'External Adversary Context & IOC Database',
    desc: 'Enriches internal alerts with threat actor campaigns, malicious IP reputations, known file hashes, and CVE exploitability.',
    tools: ['VirusTotal', 'Recorded Future', 'MISP', 'AlienVault OTX'],
    finCorpUsage: 'Checks source IP 10.10.20.15 (RFC 1918 internal, 0 external reputation flags).'
  },
  {
    id: 'case-soar',
    name: 'Case Management / SOAR',
    fullName: 'Security Orchestration, Automation & Response',
    role: 'Workflow Automation & Formal Audit Trail',
    desc: 'Coordinates alert tickets, automates repetitive enrichment lookups, records analyst notes, and enforces legal audit compliance.',
    tools: ['TheHive', 'Splunk SOAR', 'Jira Service Management', 'Cortex XSOAR'],
    finCorpUsage: 'Where you document ALT-2026-9042 and officially record your triage conclusion and recommendations.'
  }
];

export const DATA_FLOW_STAGES = [
  {
    id: 1,
    title: '1. Security Sources',
    subtitle: 'Where data originates',
    nodes: ['Workstations (FIN-PC-04)', 'Active Directory (DC01)', 'Firewalls & VPN', 'Cloud (Office 365)'],
    detail: 'Jane’s laptop FIN-PC-04 and Domain Controller DC01 continuously generate raw system events whenever a login is attempted.'
  },
  {
    id: 2,
    title: '2. Raw Security Data',
    subtitle: 'Telemetry streams into the pipe',
    nodes: ['Event ID 4625 (Logon Failures)', 'Event ID 4624 (Logon Success)', 'Sysmon Process Logs', 'DHCP Lease Logs'],
    detail: 'Windows Security logs record timestamp, account name, caller process, IP, and hex error codes (0xC000006A).'
  },
  {
    id: 3,
    title: '3. Detection Engine',
    subtitle: 'Rule logic & correlation',
    nodes: ['Rule DET-WIN-0422', 'Threshold: ≥10 failures / 120s', 'Correlation Window', 'Noise Filter'],
    detail: 'The SIEM correlation engine notices 18 consecutive 4625 events within 84 seconds for Finance01. Threshold exceeded!'
  },
  {
    id: 4,
    title: '4. Security Alert',
    subtitle: 'High-fidelity signal generated',
    nodes: ['Alert ALT-2026-9042', 'Severity: Medium', 'Status: Unassigned', 'Queue: Tier 1 Triage'],
    detail: 'A structured alert ticket is produced and dropped into the FinCorp L1 analyst dispatch queue.'
  },
  {
    id: 5,
    title: '5. L1 SOC Analyst',
    subtitle: 'Human verification & triage',
    nodes: ['YOU (Analyst L1)', 'Investigate Context', 'Examine User & Host', 'Correlate Timeline'],
    detail: 'You pick up the alert. You look past the scary title and dig into the actual telemetry and business context.'
  },
  {
    id: 6,
    title: '6. Decision & Action',
    subtitle: 'Resolution or Escalation',
    nodes: ['Classify (Benign vs Malicious)', 'Document Case Notes', 'Close with Advice or Escalate to L2'],
    detail: 'You discover the password reset ticket and the 4624 success. You document a Benign Positive and clear the queue!'
  }
];
