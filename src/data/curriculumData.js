// CDAC Bengaluru SOC Analyst L1 Curriculum Database
// 15 Modules (M00 - M14), 45 Units, 90 Chapters, 45 Unit Assessments
// Total 90 Hours: 50 Hours Theory (3000m) + 40 Hours Practical Labs (2400m)

export const MENTORS = {
  ananya: {
    id: 'ananya',
    name: 'Ananya Sharma',
    callsign: 'TRIAGE-LEAD-ALPHA',
    title: 'Senior L1/L2 Triage Lead',
    experience: '8+ Years in FinCorp Security Operations',
    specialty: 'Incident Queue Management, False Positive Filtering & Handovers',
    avatar: '👩‍💼',
    color: '#00f2fe',
    bio: 'Ananya oversees the triage floor at CDAC Bengaluru. Known for razor-sharp discernment between benign noise and high-severity intrusions.',
    advice: 'Never rush past the 4 core entities: User, Host, IP, and Timestamp. Verify before escalating.'
  },
  ravi: {
    id: 'ravi',
    name: 'Ravi Verma',
    callsign: 'HOST-SENTINEL',
    title: 'Host Forensics & Infrastructure Specialist',
    experience: '10+ Years in Windows Internals, Linux Auditing & EDR Telemetry',
    specialty: 'Windows Security Event Logs, Sysmon, Auditd, Process Lineage & Memory Dumps',
    avatar: '👨‍💻',
    color: '#8b5cf6',
    bio: 'Ravi can read raw Windows Security EVTX dumps like a novel. He trains analysts on finding subtle LOLBins and anomalous process trees.',
    advice: 'An executable name means nothing. Examine the parent PID, launch arguments, and user security context.'
  },
  meera: {
    id: 'meera',
    name: 'Meera Iyer',
    callsign: 'NET-SPECTRUM',
    title: 'Network Defense & Traffic Analysis Lead',
    experience: '7+ Years in Perimeter Defense, Wireshark PCAPs & Intrusion Detection',
    specialty: 'Branch Topologies, VLAN 802.1Q, NetFlow, Zeek, Snort/Suricata, TLS Handshakes',
    avatar: '👩‍🔬',
    color: '#10b981',
    bio: 'Meera monitors boundary firewalls and packet streams. She specializes in tracing lateral movement across branch networks.',
    advice: 'Packets don’t lie. Look at directional flows, DNS lookup intervals, and payload byte ratios.'
  },
  karthik: {
    id: 'karthik',
    name: 'Karthik Nair',
    callsign: 'CYBER-AUTOMATOR',
    title: 'Detection Engineering & SOAR Specialist',
    experience: '9+ Years in SIEM Query Tuning, OpenSearch, Sigma & SOAR Playbooks',
    specialty: 'SIEM Correlation Rules, Query Optimization, MITRE ATT&CK Mapping & Automated Enrichment',
    avatar: '👨‍🚀',
    color: '#f59e0b',
    bio: 'Karthik connects telemetry silos into responsive detection engines. He builds resilient playbooks to cut down triage fatigue.',
    advice: 'A rule that alerts on everything alerts on nothing. Precision queries are the defender’s greatest asset.'
  }
};

export const CORE_TOPOLOGIES = {
  smallBranch: {
    id: 'small_branch',
    title: 'Small Branch Office Network',
    networkRange: '10.10.20.0/24',
    gateway: '10.10.20.1',
    dnsServer: '10.10.20.2',
    components: [
      { name: 'Staff Laptops / Workstations', range: '10.10.20.10 - 10.10.20.99', count: 45 },
      { name: 'Layer 2 Access Switch', ip: '10.10.20.2', ports: 48 },
      { name: 'Branch Wi-Fi Access Point (WAP)', ip: '10.10.20.3', ssid: 'FinCorp-Staff-Secure' },
      { name: 'Shared Network Printer & Scanner', ip: '10.10.20.4', service: 'JetDirect 9100' },
      { name: 'Branch Router / Unified Threat Firewall', ip: '10.10.20.1', uplink: '100 Mbps IPsec VPN to HQ' }
    ],
    vpnTunnel: 'IPsec AES-256 GCM to HQ Core (172.16.0.1)'
  },
  largerBranch: {
    id: 'larger_branch',
    title: 'Larger Regional Branch Network (VLAN Segmented)',
    networkRange: '10.10.0.0/16',
    gateway: '10.10.1.1 (Next-Gen Firewall)',
    vlans: [
      { vlanId: 10, name: 'General Staff Workstations', subnet: '10.10.10.0/24', desc: 'Standard client machines with restricted outbound proxy' },
      { vlanId: 20, name: 'Finance & Operations (High Value)', subnet: '10.10.20.0/24', desc: 'Accounts, teller endpoints, FIN-OPS-01; strict logging' },
      { vlanId: 40, name: 'Local Server / DMZ Segment', subnet: '10.10.40.0/24', desc: 'Local branch cache, print spooler, domain controller replica' },
      { vlanId: 99, name: 'Out-of-Band Network Management', subnet: '10.10.99.0/24', desc: 'Switch/Router console access, SSH allowed only from SOC jumpbox' }
    ],
    trunking: '802.1Q tagged trunks connecting core switches to FortiGate NGFW cluster',
    centralLink: 'Dual redundant MPLS + IPsec failover to CDAC Bengaluru Central Data Center'
  }
};

export const CORE_INCIDENT_SCENARIO = {
  alertId: 'ALT-2026-9042',
  title: 'FIN-OPS-01 Multiple Failed Logons & Host Anomaly',
  detectedAt: '03:32:00 UTC (10:32 AM Local)',
  sensor: 'OpenSearch SIEM Correlation Rule: [CR-WIN-4625-BURST]',
  entity: {
    user: 'FIN-OPS-01',
    userFullName: 'Ramesh Sundaram (Accounts Officer)',
    workstation: 'BLR-BR-WS-04',
    ip: '10.10.20.15',
    mac: '00:1A:2B:3C:4D:5E',
    vlan: 'VLAN 20 (Finance Subnet)'
  },
  telemetrySummary: {
    event4625Count: 5,
    event4624Count: 1,
    timeWindowSeconds: 60,
    subStatus: '0xC000006A (Bad Password)',
    logonType: '2 (Interactive Console)',
    subsequentSuccess: '03:33:15 UTC (LogonType 2, Event 4624)'
  },
  helpdeskTicket: {
    ticketId: 'HD-8921',
    user: 'FIN-OPS-01',
    time: '03:15:00 UTC',
    category: 'Password Expiry & Reset',
    status: 'Resolved by Service Desk — Temporary PIN provided'
  },
  disposition: 'Benign Positive (False Alarm — Cached Credentials Post-Reset)',
  rationale: 'Legitimate corporate password expiry policy triggered failed authentication attempts from background Outlook credential cache before user entered new credentials.'
};

export const MASTER_MODULES = [
  {
    id: 'module-00',
    num: '00',
    code: 'M00',
    title: 'Orientation: Your First SOC Shift',
    mentor: 'ananya',
    units: [
      {
        id: 'M00-U1',
        num: 'U1',
        title: 'Welcome to the SOC',
        items: [
          { id: 'M00-U1-C1', num: 'C1', title: 'Your first shift and the L1 role', type: 'chapter', duration: 7 },
          { id: 'M00-U1-C2', num: 'C2', title: 'How this course works', type: 'chapter', duration: 7 },
          { id: 'M00-U1-A', num: 'A', title: 'Unit Assessment: Welcome to the SOC', type: 'assessment', duration: 7 }
        ]
      },
      {
        id: 'M00-U2',
        num: 'U2',
        title: 'Learning Safely',
        items: [
          { id: 'M00-U2-C1', num: 'C1', title: 'Resource packs, simulations and isolated VMs', type: 'chapter', duration: 7 },
          { id: 'M00-U2-C2', num: 'C2', title: 'Evidence handling and asking for help', type: 'chapter', duration: 7 },
          { id: 'M00-U2-A', num: 'A', title: 'Unit Assessment: Learning Safely', type: 'assessment', duration: 7 }
        ]
      },
      {
        id: 'M00-U3',
        num: 'U3',
        title: 'The Learning Journey',
        items: [
          { id: 'M00-U3-C1', num: 'C1', title: 'FinCorp-style alerts in a CDAC learning setting', type: 'chapter', duration: 6 },
          { id: 'M00-U3-C2', num: 'C2', title: 'How modules connect to a shift', type: 'chapter', duration: 6 },
          { id: 'M00-U3-A', num: 'A', title: 'Unit Assessment: The Learning Journey', type: 'assessment', duration: 6 }
        ]
      }
    ]
  },
  {
    id: 'module-01',
    num: '01',
    code: 'M01',
    title: 'Computer Fundamentals',
    mentor: 'ravi',
    units: [
      {
        id: 'M01-U1',
        num: 'U1',
        title: 'The Analyst Workstation',
        items: [
          { id: 'M01-U1-C1', num: 'C1', title: 'Hardware, OS and accounts', type: 'chapter', duration: 14 },
          { id: 'M01-U1-C2', num: 'C2', title: 'Files, paths and permissions', type: 'chapter', duration: 14 },
          { id: 'M01-U1-A', num: 'A', title: 'Unit Assessment: The Analyst Workstation', type: 'assessment', duration: 14 }
        ]
      },
      {
        id: 'M01-U2',
        num: 'U2',
        title: 'Processes and Services',
        items: [
          { id: 'M01-U2-C1', num: 'C1', title: 'What processes and services do', type: 'chapter', duration: 13 },
          { id: 'M01-U2-C2', num: 'C2', title: 'Routine versus unfamiliar activity', type: 'chapter', duration: 13 },
          { id: 'M01-U2-A', num: 'A', title: 'Unit Assessment: Processes and Services', type: 'assessment', duration: 13 }
        ]
      },
      {
        id: 'M01-U3',
        num: 'U3',
        title: 'Basic System Orientation',
        items: [
          { id: 'M01-U3-C1', num: 'C1', title: 'Command-line essentials', type: 'chapter', duration: 13 },
          { id: 'M01-U3-C2', num: 'C2', title: 'Users, hostnames and timestamps', type: 'chapter', duration: 13 },
          { id: 'M01-U3-A', num: 'A', title: 'Unit Assessment: Basic System Orientation', type: 'assessment', duration: 13 }
        ]
      }
    ]
  },
  {
    id: 'module-02',
    num: '02',
    code: 'M02',
    title: 'Networking Fundamentals',
    mentor: 'meera',
    units: [
      {
        id: 'M02-U1',
        num: 'U1',
        title: 'How Branch Devices Connect',
        items: [
          { id: 'M02-U1-C1', num: 'C1', title: 'IP addresses, masks and gateways', type: 'chapter', duration: 14 },
          { id: 'M02-U1-C2', num: 'C2', title: 'Switches, routers and access points', type: 'chapter', duration: 14 },
          { id: 'M02-U1-A', num: 'A', title: 'Unit Assessment: How Branch Devices Connect', type: 'assessment', duration: 14 }
        ]
      },
      {
        id: 'M02-U2',
        num: 'U2',
        title: 'Name and Address Services',
        items: [
          { id: 'M02-U2-C1', num: 'C1', title: 'DNS and DHCP', type: 'chapter', duration: 13 },
          { id: 'M02-U2-C2', num: 'C2', title: 'Ports, TCP and UDP', type: 'chapter', duration: 13 },
          { id: 'M02-U2-A', num: 'A', title: 'Unit Assessment: Name and Address Services', type: 'assessment', duration: 13 }
        ]
      },
      {
        id: 'M02-U3',
        num: 'U3',
        title: 'Understanding Branch Architecture',
        items: [
          { id: 'M02-U3-C1', num: 'C1', title: 'Small branch: staff devices, switch, router/firewall, Wi-Fi and shared services', type: 'chapter', duration: 13 },
          { id: 'M02-U3-C2', num: 'C2', title: 'Larger branch: VLANs, multiple access switches, server/network segments and central connectivity', type: 'chapter', duration: 13 },
          { id: 'M02-U3-A', num: 'A', title: 'Unit Assessment: Understanding Branch Architecture', type: 'assessment', duration: 13 }
        ]
      }
    ]
  },
  {
    id: 'module-03',
    num: '03',
    code: 'M03',
    title: 'Cybersecurity Fundamentals',
    mentor: 'karthik',
    units: [
      {
        id: 'M03-U1',
        num: 'U1',
        title: 'Security Foundations',
        items: [
          { id: 'M03-U1-C1', num: 'C1', title: 'Assets, threats and vulnerabilities', type: 'chapter', duration: 14 },
          { id: 'M03-U1-C2', num: 'C2', title: 'Risk, impact and likelihood', type: 'chapter', duration: 14 },
          { id: 'M03-U1-A', num: 'A', title: 'Unit Assessment: Security Foundations', type: 'assessment', duration: 14 }
        ]
      },
      {
        id: 'M03-U2',
        num: 'U2',
        title: 'Common Threats',
        items: [
          { id: 'M03-U2-C1', num: 'C1', title: 'Phishing and credential attacks', type: 'chapter', duration: 13 },
          { id: 'M03-U2-C2', num: 'C2', title: 'Malware, insider and network threats', type: 'chapter', duration: 13 },
          { id: 'M03-U2-A', num: 'A', title: 'Unit Assessment: Common Threats', type: 'assessment', duration: 13 }
        ]
      },
      {
        id: 'M03-U3',
        num: 'U3',
        title: 'Defensive Controls',
        items: [
          { id: 'M03-U3-C1', num: 'C1', title: 'Prevention, detection and response', type: 'chapter', duration: 13 },
          { id: 'M03-U3-C2', num: 'C2', title: 'Least privilege and defense in depth', type: 'chapter', duration: 13 },
          { id: 'M03-U3-A', num: 'A', title: 'Unit Assessment: Defensive Controls', type: 'assessment', duration: 13 }
        ]
      }
    ]
  },
  {
    id: 'module-04',
    num: '04',
    code: 'M04',
    title: 'SOC Operations & Alert Triage',
    mentor: 'ananya',
    units: [
      {
        id: 'M04-U1',
        num: 'U1',
        title: 'SOC People and Workflow',
        items: [
          { id: 'M04-U1-C1', num: 'C1', title: 'L1/L2/L3 roles and mentor handoffs', type: 'chapter', duration: 34 },
          { id: 'M04-U1-C2', num: 'C2', title: 'Alert queue, triage and ownership', type: 'chapter', duration: 34 },
          { id: 'M04-U1-A', num: 'A', title: 'Unit Assessment: SOC People and Workflow', type: 'assessment', duration: 34 }
        ]
      },
      {
        id: 'M04-U2',
        num: 'U2',
        title: 'Events, Alerts and Cases',
        items: [
          { id: 'M04-U2-C1', num: 'C1', title: 'Event versus alert', type: 'chapter', duration: 33 },
          { id: 'M04-U2-C2', num: 'C2', title: 'Incident versus case', type: 'chapter', duration: 33 },
          { id: 'M04-U2-A', num: 'A', title: 'Unit Assessment: Events, Alerts and Cases', type: 'assessment', duration: 33 }
        ]
      },
      {
        id: 'M04-U3',
        num: 'U3',
        title: 'Initial Alert Triage',
        items: [
          { id: 'M04-U3-C1', num: 'C1', title: 'Identify user, host, IP, time and count', type: 'chapter', duration: 33 },
          { id: 'M04-U3-C2', num: 'C2', title: 'Context, disposition and analyst notes', type: 'chapter', duration: 33 },
          { id: 'M04-U3-A', num: 'A', title: 'Unit Assessment: Initial Alert Triage', type: 'assessment', duration: 33 }
        ]
      }
    ]
  },
  {
    id: 'module-05',
    num: '05',
    code: 'M05',
    title: 'SIEM Fundamentals & Search',
    mentor: 'karthik',
    units: [
      {
        id: 'M05-U1',
        num: 'U1',
        title: 'SIEM Purpose and Data',
        items: [
          { id: 'M05-U1-C1', num: 'C1', title: 'What SIEM does and does not do', type: 'chapter', duration: 34 },
          { id: 'M05-U1-C2', num: 'C2', title: 'Log sources and ingestion concepts', type: 'chapter', duration: 34 },
          { id: 'M05-U1-A', num: 'A', title: 'Unit Assessment: SIEM Purpose and Data', type: 'assessment', duration: 34 }
        ]
      },
      {
        id: 'M05-U2',
        num: 'U2',
        title: 'Searching and Filtering',
        items: [
          { id: 'M05-U2-C1', num: 'C1', title: 'Fields, time ranges and filters', type: 'chapter', duration: 33 },
          { id: 'M05-U2-C2', num: 'C2', title: 'Basic query logic', type: 'chapter', duration: 33 },
          { id: 'M05-U2-A', num: 'A', title: 'Unit Assessment: Searching and Filtering', type: 'assessment', duration: 33 }
        ]
      },
      {
        id: 'M05-U3',
        num: 'U3',
        title: 'Detection and Use Cases',
        items: [
          { id: 'M05-U3-C1', num: 'C1', title: 'Rules, correlation and alert output', type: 'chapter', duration: 33 },
          { id: 'M05-U3-C2', num: 'C2', title: 'Application, identity, host, network and compliance examples', type: 'chapter', duration: 33 },
          { id: 'M05-U3-A', num: 'A', title: 'Unit Assessment: Detection and Use Cases', type: 'assessment', duration: 33 }
        ]
      }
    ]
  },
  {
    id: 'module-06',
    num: '06',
    code: 'M06',
    title: 'Log & Event Analysis',
    mentor: 'ananya',
    units: [
      {
        id: 'M06-U1',
        num: 'U1',
        title: 'Reading Log Records',
        items: [
          { id: 'M06-U1-C1', num: 'C1', title: 'Timestamp, source, fields and outcome', type: 'chapter', duration: 27 },
          { id: 'M06-U1-C2', num: 'C2', title: 'Parsing and normalization concepts', type: 'chapter', duration: 27 },
          { id: 'M06-U1-A', num: 'A', title: 'Unit Assessment: Reading Log Records', type: 'assessment', duration: 27 }
        ]
      },
      {
        id: 'M06-U2',
        num: 'U2',
        title: 'Correlating Basic Events',
        items: [
          { id: 'M06-U2-C1', num: 'C1', title: 'Build a simple timeline', type: 'chapter', duration: 27 },
          { id: 'M06-U2-C2', num: 'C2', title: 'Compare related records across sources', type: 'chapter', duration: 27 },
          { id: 'M06-U2-A', num: 'A', title: 'Unit Assessment: Correlating Basic Events', type: 'assessment', duration: 27 }
        ]
      },
      {
        id: 'M06-U3',
        num: 'U3',
        title: 'Evidence Quality',
        items: [
          { id: 'M06-U3-C1', num: 'C1', title: 'Corroboration, gaps and uncertainty', type: 'chapter', duration: 26 },
          { id: 'M06-U3-C2', num: 'C2', title: 'Observed fact versus analyst inference', type: 'chapter', duration: 26 },
          { id: 'M06-U3-A', num: 'A', title: 'Unit Assessment: Evidence Quality', type: 'assessment', duration: 26 }
        ]
      }
    ]
  },
  {
    id: 'module-07',
    num: '07',
    code: 'M07',
    title: 'Windows & Linux Security Monitoring',
    mentor: 'ravi',
    units: [
      {
        id: 'M07-U1',
        num: 'U1',
        title: 'Windows Security Monitoring',
        items: [
          { id: 'M07-U1-C1', num: 'C1', title: 'Windows event log basics', type: 'chapter', duration: 27 },
          { id: 'M07-U1-C2', num: 'C2', title: 'Logon and account activity', type: 'chapter', duration: 27 },
          { id: 'M07-U1-A', num: 'A', title: 'Unit Assessment: Windows Security Monitoring', type: 'assessment', duration: 27 }
        ]
      },
      {
        id: 'M07-U2',
        num: 'U2',
        title: 'Linux Security Monitoring',
        items: [
          { id: 'M07-U2-C1', num: 'C1', title: 'Authentication and system logs', type: 'chapter', duration: 27 },
          { id: 'M07-U2-C2', num: 'C2', title: 'Users, services and sudo activity', type: 'chapter', duration: 27 },
          { id: 'M07-U2-A', num: 'A', title: 'Unit Assessment: Linux Security Monitoring', type: 'assessment', duration: 27 }
        ]
      },
      {
        id: 'M07-U3',
        num: 'U3',
        title: 'Host Triage',
        items: [
          { id: 'M07-U3-C1', num: 'C1', title: 'Baseline and unusual activity', type: 'chapter', duration: 26 },
          { id: 'M07-U3-C2', num: 'C2', title: 'Cross-check user and host context', type: 'chapter', duration: 26 },
          { id: 'M07-U3-A', num: 'A', title: 'Unit Assessment: Host Triage', type: 'assessment', duration: 26 }
        ]
      }
    ]
  },
  {
    id: 'module-08',
    num: '08',
    code: 'M08',
    title: 'Network Security Monitoring',
    mentor: 'meera',
    units: [
      {
        id: 'M08-U1',
        num: 'U1',
        title: 'Network Visibility',
        items: [
          { id: 'M08-U1-C1', num: 'C1', title: 'Packets, flows and PCAP', type: 'chapter', duration: 27 },
          { id: 'M08-U1-C2', num: 'C2', title: 'DNS, HTTP(S) and connection metadata', type: 'chapter', duration: 27 },
          { id: 'M08-U1-A', num: 'A', title: 'Unit Assessment: Network Visibility', type: 'assessment', duration: 27 }
        ]
      },
      {
        id: 'M08-U2',
        num: 'U2',
        title: 'Inspecting Traffic',
        items: [
          { id: 'M08-U2-C1', num: 'C1', title: 'Filters and conversations', type: 'chapter', duration: 27 },
          { id: 'M08-U2-C2', num: 'C2', title: 'Repeated attempts and scan-like patterns', type: 'chapter', duration: 27 },
          { id: 'M08-U2-A', num: 'A', title: 'Unit Assessment: Inspecting Traffic', type: 'assessment', duration: 27 }
        ]
      },
      {
        id: 'M08-U3',
        num: 'U3',
        title: 'Network Alert Triage',
        items: [
          { id: 'M08-U3-C1', num: 'C1', title: 'Source/destination context', type: 'chapter', duration: 26 },
          { id: 'M08-U3-C2', num: 'C2', title: 'Write a concise evidence summary', type: 'chapter', duration: 26 },
          { id: 'M08-U3-A', num: 'A', title: 'Unit Assessment: Network Alert Triage', type: 'assessment', duration: 26 }
        ]
      }
    ]
  },
  {
    id: 'module-09',
    num: '09',
    code: 'M09',
    title: 'Endpoint Detection & Response (EDR)',
    mentor: 'ravi',
    units: [
      {
        id: 'M09-U1',
        num: 'U1',
        title: 'EDR Fundamentals',
        items: [
          { id: 'M09-U1-C1', num: 'C1', title: 'Endpoint telemetry and alerts', type: 'chapter', duration: 20 },
          { id: 'M09-U1-C2', num: 'C2', title: 'EDR versus traditional antivirus', type: 'chapter', duration: 20 },
          { id: 'M09-U1-A', num: 'A', title: 'Unit Assessment: EDR Fundamentals', type: 'assessment', duration: 20 }
        ]
      },
      {
        id: 'M09-U2',
        num: 'U2',
        title: 'Understanding Endpoint Alerts',
        items: [
          { id: 'M09-U2-C1', num: 'C1', title: 'Device, user, file and process context', type: 'chapter', duration: 20 },
          { id: 'M09-U2-C2', num: 'C2', title: 'Timeline and alert evidence', type: 'chapter', duration: 20 },
          { id: 'M09-U2-A', num: 'A', title: 'Unit Assessment: Understanding Endpoint Alerts', type: 'assessment', duration: 20 }
        ]
      },
      {
        id: 'M09-U3',
        num: 'U3',
        title: 'Basic Endpoint Response',
        items: [
          { id: 'M09-U3-C1', num: 'C1', title: 'First-response containment options', type: 'chapter', duration: 20 },
          { id: 'M09-U3-C2', num: 'C2', title: 'When and how to escalate', type: 'chapter', duration: 20 },
          { id: 'M09-U3-A', num: 'A', title: 'Unit Assessment: Basic Endpoint Response', type: 'assessment', duration: 20 }
        ]
      }
    ]
  },
  {
    id: 'module-10',
    num: '10',
    code: 'M10',
    title: 'Specialized Environments & Security Ecosystem',
    mentor: 'ravi',
    units: [
      {
        id: 'M10-U1',
        num: 'U1',
        title: 'OT and ICS Environments',
        items: [
          { id: 'M10-U1-C1', num: 'C1', title: 'How OT differs from IT', type: 'chapter', duration: 14 },
          { id: 'M10-U1-C2', num: 'C2', title: 'Purdue model overview', type: 'chapter', duration: 14 },
          { id: 'M10-U1-A', num: 'A', title: 'Unit Assessment: OT and ICS Environments', type: 'assessment', duration: 14 }
        ]
      },
      {
        id: 'M10-U2',
        num: 'U2',
        title: 'Integrated Defenses',
        items: [
          { id: 'M10-U2-C1', num: 'C1', title: 'How email, proxy and identity feed the SOC', type: 'chapter', duration: 13 },
          { id: 'M10-U2-C2', num: 'C2', title: 'Cross-tool alert correlation', type: 'chapter', duration: 13 },
          { id: 'M10-U2-A', num: 'A', title: 'Unit Assessment: Integrated Defenses', type: 'assessment', duration: 13 }
        ]
      },
      {
        id: 'M10-U3',
        num: 'U3',
        title: 'Environment Context in Triage',
        items: [
          { id: 'M10-U3-C1', num: 'C1', title: 'Asset criticality and operational context', type: 'chapter', duration: 13 },
          { id: 'M10-U3-C2', num: 'C2', title: 'Context-informed escalation', type: 'chapter', duration: 13 },
          { id: 'M10-U3-A', num: 'A', title: 'Unit Assessment: Environment Context in Triage', type: 'assessment', duration: 13 }
        ]
      }
    ]
  },
  {
    id: 'module-11',
    num: '11',
    code: 'M11',
    title: 'Threat Intelligence & Threat Hunting Fundamentals',
    mentor: 'meera',
    units: [
      {
        id: 'M11-U1',
        num: 'U1',
        title: 'Threat Intelligence Basics',
        items: [
          { id: 'M11-U1-C1', num: 'C1', title: 'What CTI is and how L1 uses it', type: 'chapter', duration: 14 },
          { id: 'M11-U1-C2', num: 'C2', title: 'IOCs, feeds and lookup tools', type: 'chapter', duration: 14 },
          { id: 'M11-U1-A', num: 'A', title: 'Unit Assessment: Threat Intelligence Basics', type: 'assessment', duration: 14 }
        ]
      },
      {
        id: 'M11-U2',
        num: 'U2',
        title: 'Threat Hunting Principles',
        items: [
          { id: 'M11-U2-C1', num: 'C1', title: 'Alert-driven versus hunt-driven mindset', type: 'chapter', duration: 13 },
          { id: 'M11-U2-C2', num: 'C2', title: 'Simple hypothesis-driven search', type: 'chapter', duration: 13 },
          { id: 'M11-U2-A', num: 'A', title: 'Unit Assessment: Threat Hunting Principles', type: 'assessment', duration: 13 }
        ]
      },
      {
        id: 'M11-U3',
        num: 'U3',
        title: 'Applying Intelligence to Triage',
        items: [
          { id: 'M11-U3-C1', num: 'C1', title: 'Enrich an alert with IOC context', type: 'chapter', duration: 13 },
          { id: 'M11-U3-C2', num: 'C2', title: 'False indicators and intelligence quality', type: 'chapter', duration: 13 },
          { id: 'M11-U3-A', num: 'A', title: 'Unit Assessment: Applying Intelligence to Triage', type: 'assessment', duration: 13 }
        ]
      }
    ]
  },
  {
    id: 'module-12',
    num: '12',
    code: 'M12',
    title: 'Security Automation & SOAR Fundamentals',
    mentor: 'karthik',
    units: [
      {
        id: 'M12-U1',
        num: 'U1',
        title: 'Automation in the SOC',
        items: [
          { id: 'M12-U1-C1', num: 'C1', title: 'What SOAR does and why SOCs use it', type: 'chapter', duration: 14 },
          { id: 'M12-U1-C2', num: 'C2', title: 'Playbooks and automated actions', type: 'chapter', duration: 14 },
          { id: 'M12-U1-A', num: 'A', title: 'Unit Assessment: Automation in the SOC', type: 'assessment', duration: 14 }
        ]
      },
      {
        id: 'M12-U2',
        num: 'U2',
        title: 'Working with Automated Workflows',
        items: [
          { id: 'M12-U2-C1', num: 'C1', title: 'Analyst touchpoints in automation', type: 'chapter', duration: 13 },
          { id: 'M12-U2-C2', num: 'C2', title: 'When automation fails or needs human judgment', type: 'chapter', duration: 13 },
          { id: 'M12-U2-A', num: 'A', title: 'Unit Assessment: Working with Automated Workflows', type: 'assessment', duration: 13 }
        ]
      },
      {
        id: 'M12-U3',
        num: 'U3',
        title: 'Automation and Alert Triage',
        items: [
          { id: 'M12-U3-C1', num: 'C1', title: 'Automated enrichment and triage acceleration', type: 'chapter', duration: 13 },
          { id: 'M12-U3-C2', num: 'C2', title: 'Documenting actions taken by automation', type: 'chapter', duration: 13 },
          { id: 'M12-U3-A', num: 'A', title: 'Unit Assessment: Automation and Alert Triage', type: 'assessment', duration: 13 }
        ]
      }
    ]
  },
  {
    id: 'module-13',
    num: '13',
    code: 'M13',
    title: 'Incident Response & Frameworks',
    mentor: 'karthik',
    units: [
      {
        id: 'M13-U1',
        num: 'U1',
        title: 'Incident Response Lifecycle',
        items: [
          { id: 'M13-U1-C1', num: 'C1', title: 'NIST SP 800-61 and SANS PICERL overview', type: 'chapter', duration: 14 },
          { id: 'M13-U1-C2', num: 'C2', title: 'L1 role across lifecycle phases', type: 'chapter', duration: 14 },
          { id: 'M13-U1-A', num: 'A', title: 'Unit Assessment: Incident Response Lifecycle', type: 'assessment', duration: 14 }
        ]
      },
      {
        id: 'M13-U2',
        num: 'U2',
        title: 'Threat Frameworks',
        items: [
          { id: 'M13-U2-C1', num: 'C1', title: 'MITRE ATT&CK basics', type: 'chapter', duration: 13 },
          { id: 'M13-U2-C2', num: 'C2', title: 'Cyber Kill Chain and Pyramid of Pain', type: 'chapter', duration: 13 },
          { id: 'M13-U2-A', num: 'A', title: 'Unit Assessment: Threat Frameworks', type: 'assessment', duration: 13 }
        ]
      },
      {
        id: 'M13-U3',
        num: 'U3',
        title: 'Applying Frameworks in the SOC',
        items: [
          { id: 'M13-U3-C1', num: 'C1', title: 'Map an alert to MITRE ATT&CK', type: 'chapter', duration: 13 },
          { id: 'M13-U3-C2', num: 'C2', title: 'Frameworks in shift handovers and reporting', type: 'chapter', duration: 13 },
          { id: 'M13-U3-A', num: 'A', title: 'Unit Assessment: Applying Frameworks in the SOC', type: 'assessment', duration: 13 }
        ]
      }
    ]
  },
  {
    id: 'module-14',
    num: '14',
    code: 'M14',
    title: 'Shift Operations & Handover',
    mentor: 'ananya',
    units: [
      {
        id: 'M14-U1',
        num: 'U1',
        title: 'The 24/7 SOC',
        items: [
          { id: 'M14-U1-C1', num: 'C1', title: 'Shift patterns, fatigue and handovers', type: 'chapter', duration: 14 },
          { id: 'M14-U1-C2', num: 'C2', title: 'Case management and ticket lifecycle', type: 'chapter', duration: 14 },
          { id: 'M14-U1-A', num: 'A', title: 'Unit Assessment: The 24/7 SOC', type: 'assessment', duration: 14 }
        ]
      },
      {
        id: 'M14-U2',
        num: 'U2',
        title: 'Effective Handover',
        items: [
          { id: 'M14-U2-C1', num: 'C1', title: 'What makes a good handover', type: 'chapter', duration: 13 },
          { id: 'M14-U2-C2', num: 'C2', title: 'Active incidents, pending tasks and system status', type: 'chapter', duration: 13 },
          { id: 'M14-U2-A', num: 'A', title: 'Unit Assessment: Effective Handover', type: 'assessment', duration: 13 }
        ]
      },
      {
        id: 'M14-U3',
        num: 'U3',
        title: 'Case Closure and Lessons',
        items: [
          { id: 'M14-U3-C1', num: 'C1', title: 'Case documentation and disposition', type: 'chapter', duration: 13 },
          { id: 'M14-U3-C2', num: 'C2', title: 'Continuous improvement in the SOC', type: 'chapter', duration: 13 },
          { id: 'M14-U3-A', num: 'A', title: 'Unit Assessment: Case Closure and Lessons', type: 'assessment', duration: 13 }
        ]
      }
    ]
  }
];
