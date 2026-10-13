// Generates src/data/modulesData.js
import fs from 'fs';
import path from 'path';

export function generateModulesData(rootDir) {
  const content = `// CDAC Bengaluru SOC Analyst Platform — Master Modules Database
// Authoritative 15-Module Curriculum (Module 00 through Module 14)
// Total 90 Hours: 50 Hours Theory (3000 mins) + 40 Hours Practical Labs (2400 mins)

import { MASTER_MODULES, MENTORS } from './curriculumData.js';

export const MODULE_CATEGORIES = [
  {
    name: 'Foundations',
    range: 'MODULES 00 – 03',
    desc: 'Orientation, computer workstation internals, branch network routing, and foundational defensive controls.'
  },
  {
    name: 'Operations & SIEM',
    range: 'MODULES 04 – 06',
    desc: 'SOC people & triage hierarchy, SIEM log ingestion & queries, and evidence correlation timelines.'
  },
  {
    name: 'Host & Network Monitoring',
    range: 'MODULES 07 – 08',
    desc: 'Windows EVTX, Linux systemd logs, Wireshark PCAPs, NetFlow metadata, and traffic directionality.'
  },
  {
    name: 'Endpoint & Threat Intelligence',
    range: 'MODULES 09 – 11',
    desc: 'Behavioral EDR process trees, OT/ICS Purdue model boundaries, identity MFA fatigue, and threat intel IOCs.'
  },
  {
    name: 'Automation & Incident Response',
    range: 'MODULES 12 – 14',
    desc: 'SOAR conditional playbooks, MITRE ATT&CK technique mapping, and formal TheHive case handoffs.'
  }
];

// 15 Modules metadata matching 90-hour CDAC Bengaluru curriculum
export const ALL_MODULES = [
  {
    id: 'module-00',
    altId: 'module-0',
    num: '00',
    code: 'CDAC-SOC-M00',
    title: 'Orientation: Your First SOC Shift',
    subtitle: 'Welcome to the SOC & The Analyst Mindset',
    tagline: 'You join the CDAC Bengaluru SOC learning environment. Meet the team, learn shift routine and how to use learning resources safely.',
    desc: 'Step into the CDAC Bengaluru SOC floor. Discover the Tier 1 analyst role, queue triage expectations, lab safety, isolated VMs, and how shift operations connect to your 90-hour learning journey.',
    category: 'Foundations',
    mentorKey: 'ananya',
    mentor: MENTORS.ananya,
    theoryMinutes: 60,
    theoryHours: 1,
    labMinutes: 0,
    labHours: 0,
    totalHours: 1,
    estimatedTime: '1 Hour',
    topicCount: 9,
    labAvailable: false,
    whatYoullLearn: [
      'The L1 triage role, shift responsibilities, and operational boundaries',
      'The 4-phase micro-learning engine: Theory ➔ Visual ➔ Interactive ➔ Check',
      'Evidence handling protocols, VM sandbox safety, and requesting mentor help',
      'How FinCorp-style alert simulations connect to operational shifts at CDAC Bengaluru',
      'Defensible documentation principles: facts vs inferences'
    ],
    units: MASTER_MODULES[0].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[0])
  },
  {
    id: 'module-01',
    altId: 'module-1',
    num: '01',
    code: 'CDAC-SOC-M01',
    title: 'Computer Fundamentals',
    subtitle: 'The Analyst Workstation, Processes & CLI',
    tagline: 'Every security event begins on a machine. Master how operating systems run processes, manage permissions, and record system activity.',
    desc: 'Endpoints are where adversaries execute commands and where analysts hunt for evidence. Learn how Windows and Linux manage processes, services, files, user privileges, and system activity.',
    category: 'Foundations',
    mentorKey: 'ravi',
    mentor: MENTORS.ravi,
    theoryMinutes: 120,
    theoryHours: 2,
    labMinutes: 120,
    labHours: 2,
    totalHours: 4,
    estimatedTime: '4 Hours (2h Theory + 2h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 01: Workstation CLI, Process Trees & Permission Auditing',
    whatYoullLearn: [
      'CPU, RAM, storage, and operating system kernels in security contexts',
      'File systems (NTFS, ext4), absolute vs relative paths, and ACL permissions',
      'Windows Services (services.msc) and Linux systemd daemons',
      'Command-line inspection via PowerShell, Bash, Sysinternals, and ps/top',
      'Baselines: separating benign background processes from disguised LOLBins'
    ],
    units: MASTER_MODULES[1].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[1])
  },
  {
    id: 'module-02',
    altId: 'module-2',
    num: '02',
    code: 'CDAC-SOC-M02',
    title: 'Networking Fundamentals',
    subtitle: 'Branch Topologies, VLANs, Gateways & Packet Streams',
    tagline: 'Attacks move across wires and wireless waves. Understand how branch devices interconnect, resolve names, and route to the SOC.',
    desc: 'Follow the packet trail from small branch routers to multi-VLAN enterprise campus networks. Master IP subnets, DNS resolution, DHCP leases, and TCP three-way handshakes.',
    category: 'Foundations',
    mentorKey: 'meera',
    mentor: MENTORS.meera,
    theoryMinutes: 120,
    theoryHours: 2,
    labMinutes: 180,
    labHours: 3,
    totalHours: 5,
    estimatedTime: '5 Hours (2h Theory + 3h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 02: Branch Network Topology Triage & Port Connection Analysis',
    whatYoullLearn: [
      'IPv4 CIDR subnetting, default gateways, ARP caches, and MAC resolution',
      'Small branch office architecture: staff laptops, L2 switch, router/firewall (10.10.20.1)',
      'Larger branch architecture: 802.1Q VLANs (10, 20, 40, 99) and inter-VLAN routing',
      'DNS query-response lifecycles, DHCP DORA process, and port multiplexing',
      'TCP flags (SYN, SYN-ACK, ACK, RST, FIN) versus connectionless UDP streams'
    ],
    units: MASTER_MODULES[2].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[2])
  },
  {
    id: 'module-03',
    altId: 'module-3',
    num: '03',
    code: 'CDAC-SOC-M03',
    title: 'Cybersecurity Fundamentals',
    subtitle: 'Threat Models, Attack Vectors & Defense in Depth',
    tagline: 'Understanding why and how adversaries strike enables defenders to position preventative and detective controls effectively.',
    desc: 'Explore core security concepts including the CIA triad, vulnerability weaponization, threat agent taxonomy, phishing mechanisms, and defense-in-depth architectures.',
    category: 'Foundations',
    mentorKey: 'karthik',
    mentor: MENTORS.karthik,
    theoryMinutes: 120,
    theoryHours: 2,
    labMinutes: 120,
    labHours: 2,
    totalHours: 4,
    estimatedTime: '4 Hours (2h Theory + 2h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 03: Phishing Header Dissection & Defense Control Validation',
    whatYoullLearn: [
      'Assets, threats, vulnerabilities, and risk impact assessment',
      'Phishing techniques, credential harvesting, and social engineering traps',
      'Malware classifications: trojans, ransomware, worms, droppers, and C2 beacons',
      'Defense in depth: perimeter firewalls, EDR, segmentations, and least privilege',
      'Preventative, detective, corrective, and compensating security controls'
    ],
    units: MASTER_MODULES[3].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[3])
  },
  {
    id: 'module-04',
    altId: 'module-4',
    num: '04',
    code: 'CDAC-SOC-M04',
    title: 'SOC Operations & Alert Triage',
    subtitle: 'Queue Management, Entity Scoping & First Alert (FIN-OPS-01)',
    tagline: 'Step into the real shift. Own incoming alerts, execute 4-entity validation, and handle the pivotal FIN-OPS-01 triage case.',
    desc: 'The heart of Tier 1 security operations. Discover how SOC queues operate, distinguish events from alerts, master MTTA/MTTR metrics, and dissect alert ALT-2026-9042 on BLR-BR-WS-04.',
    category: 'Operations & SIEM',
    mentorKey: 'ananya',
    mentor: MENTORS.ananya,
    theoryMinutes: 300,
    theoryHours: 5,
    labMinutes: 240,
    labHours: 4,
    totalHours: 9,
    estimatedTime: '9 Hours (5h Theory + 4h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 04: Live Triage of Alert ALT-2026-9042 on BLR-BR-WS-04',
    whatYoullLearn: [
      'L1, L2, L3, and SOC Manager roles, escalation criteria, and shift handoffs',
      'Alert queues, ticket claiming, SLA thresholds, and triage ownership',
      'Event vs Alert vs Incident vs Case distinctions',
      'Systematic 4-entity scoping: User, Hostname, Source/Destination IP, Timestamp',
      'Triaging alert FIN-OPS-01 (10.10.20.15, BLR-BR-WS-04) and closing with audit notes'
    ],
    units: MASTER_MODULES[4].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[4])
  },
  {
    id: 'module-05',
    altId: 'module-5',
    num: '05',
    code: 'CDAC-SOC-M05',
    title: 'SIEM Fundamentals & Search',
    subtitle: 'OpenSearch Ingestion, Indexing, Filters & Correlation Rules',
    tagline: 'The SIEM is the SOCs central nervous system. Query gigabytes of logs in milliseconds to pinpoint stealth activity.',
    desc: 'Explore SIEM architecture, forwarders, index management, and query syntax. Construct precise Lucene/OpenSearch queries, apply time filters, and examine correlation rule detection logic.',
    category: 'Operations & SIEM',
    mentorKey: 'karthik',
    mentor: MENTORS.karthik,
    theoryMinutes: 300,
    theoryHours: 5,
    labMinutes: 240,
    labHours: 4,
    totalHours: 9,
    estimatedTime: '9 Hours (5h Theory + 4h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 05: OpenSearch Dashboard Queries, Field Filtering & Alert Correlation',
    whatYoullLearn: [
      'SIEM core capabilities and limitations: what SIEM does and does NOT do',
      'Log collection architectures: agents, syslog, winlogbeat, API ingest',
      'OpenSearch / Elasticsearch queries, field syntax, boolean operators, wildcards',
      'Time boundary scoping: absolute vs relative windows, index pattern matching',
      'Building detection rules for brute force, lateral movement, and privilege abuse'
    ],
    units: MASTER_MODULES[5].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[5])
  },
  {
    id: 'module-06',
    altId: 'module-6',
    num: '06',
    code: 'CDAC-SOC-M06',
    title: 'Log & Event Analysis',
    subtitle: 'Normalization, Evidence Corroboration & Timeline Reconstruction',
    tagline: 'Raw logs speak in cryptic codes. Normalize disparate records, connect the dots, and separate cold facts from analyst speculation.',
    desc: 'Learn how log normalization formats (ECS, CEF) standardize diverse logs. Construct unified chronological event timelines, cross-check multi-source evidence, and document defensible findings.',
    category: 'Operations & SIEM',
    mentorKey: 'ananya',
    mentor: MENTORS.ananya,
    theoryMinutes: 240,
    theoryHours: 4,
    labMinutes: 180,
    labHours: 3,
    totalHours: 7,
    estimatedTime: '7 Hours (4h Theory + 3h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 06: Multi-Source Evidence Timeline Reconstruction & Corroboration',
    whatYoullLearn: [
      'Log record anatomy: timestamp precision, source identification, event codes',
      'Normalization concepts: mapping vendor proprietary fields to unified schemas',
      'Building an investigation timeline across auth, network, and endpoint logs',
      'Corroborating events across independent log sources',
      'Defensible analysis: distinguishing observed facts from analyst inferences'
    ],
    units: MASTER_MODULES[6].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[6])
  },
  {
    id: 'module-07',
    altId: 'module-7',
    num: '07',
    code: 'CDAC-SOC-M07',
    title: 'Windows & Linux Security Monitoring',
    subtitle: 'Windows EVTX, Linux Auditd, Sudoers & Host Telemetry',
    tagline: 'The operating system records every logon, execution, and permission elevation. Read the audit trail with forensic clarity.',
    desc: 'Deep-dive into Windows Security Event Log IDs (4624, 4625, 4672, 4688) and Linux syslog/auth.log/audit.log. Learn how to spot credential abuse, unusual sudo usage, and abnormal service creation.',
    category: 'Host & Network Monitoring',
    mentorKey: 'ravi',
    mentor: MENTORS.ravi,
    theoryMinutes: 240,
    theoryHours: 4,
    labMinutes: 180,
    labHours: 3,
    totalHours: 7,
    estimatedTime: '7 Hours (4h Theory + 3h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 07: Windows EVTX & Linux Auth Log Triage on Compromised Endpoints',
    whatYoullLearn: [
      'Windows Event Log channels (Security, System, Application) and XML structure',
      'Logon Types (2=Interactive, 3=Network, 10=RDP) and failure status codes (0xC000006A, 0xC0000064)',
      'Linux /var/log/auth.log, secure, audit.log, and systemd journalctl',
      'Monitoring sudo privileges, failed su attempts, and new local account creations',
      'Establishing host baselines and detecting stealthy privilege escalation'
    ],
    units: MASTER_MODULES[7].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[7])
  },
  {
    id: 'module-08',
    altId: 'module-8',
    num: '08',
    code: 'CDAC-SOC-M08',
    title: 'Network Security Monitoring',
    subtitle: 'Wireshark PCAPs, NetFlow Metadata, DNS Exfiltration & Scans',
    tagline: 'When an adversary probes your perimeter or exfiltrates data, the network leaves an indelible footprint. Inspect the wires.',
    desc: 'Equip yourself with network monitoring capabilities. Inspect full packet captures (PCAP) in Wireshark, analyze flow metadata, filter IP conversations, and identify port scans and beaconing intervals.',
    category: 'Host & Network Monitoring',
    mentorKey: 'meera',
    mentor: MENTORS.meera,
    theoryMinutes: 240,
    theoryHours: 4,
    labMinutes: 180,
    labHours: 3,
    totalHours: 7,
    estimatedTime: '7 Hours (4h Theory + 3h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 08: Wireshark PCAP Deep-Dive: Port Scans, DNS Tunneling & HTTP Beacons',
    whatYoullLearn: [
      'Packets vs Flows: when to use deep packet capture (PCAP) vs NetFlow/IPFIX metadata',
      'DNS query inspection, suspicious subdomains, and DNS tunneling indicators',
      'Wireshark display filters (tcp.flags.syn==1, ip.addr, dns.qry.name)',
      'Identifying port scan patterns: SYN scans, FIN scans, sweep behaviors',
      'Drafting clear, concise network evidence summaries for incident escalation'
    ],
    units: MASTER_MODULES[8].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[8])
  },
  {
    id: 'module-09',
    altId: 'module-9',
    num: '09',
    code: 'CDAC-SOC-M09',
    title: 'Endpoint Detection & Response (EDR)',
    subtitle: 'Process Lineage, LOLBins, Behavioral Telemetry & Host Containment',
    tagline: 'Signature-based antivirus is blind to fileless attacks. EDR records behavior, process trees, and enables instant network isolation.',
    desc: 'Understand modern EDR architecture. Analyze process execution trees (e.g. Word launching PowerShell launching cmd), investigate file hashes, evaluate parent-child relationships, and execute host containment.',
    category: 'Endpoint & Threat Intelligence',
    mentorKey: 'ravi',
    mentor: MENTORS.ravi,
    theoryMinutes: 180,
    theoryHours: 3,
    labMinutes: 180,
    labHours: 3,
    totalHours: 6,
    estimatedTime: '6 Hours (3h Theory + 3h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 09: EDR Process Tree Analysis & Rapid Host Containment Execution',
    whatYoullLearn: [
      'EDR sensor telemetry vs traditional signature antivirus: continuous recording',
      'Parent-child process lineage: detecting anomalous executions (svchost.exe spawning cmd.exe)',
      'Living-off-the-Land Binaries (LOLBins): certutil, bitsadmin, mshta, powershell',
      'EDR alert context: user token, command-line arguments, sha256 hash, network socket',
      'First-response host containment: network isolation, memory preservation, escalation'
    ],
    units: MASTER_MODULES[9].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[9])
  },
  {
    id: 'module-10',
    altId: 'module-10',
    num: '10',
    code: 'CDAC-SOC-M10',
    title: 'Specialized Environments & Security Ecosystem',
    subtitle: 'OT/ICS Purdue Model, Email Gateways, Proxies & Identity Defense',
    tagline: 'Modern enterprises bridge corporate IT, cloud identity, and industrial manufacturing plants. Context dictates operational triage.',
    desc: 'Navigate specialized architectures including Operational Technology (OT) and Industrial Control Systems (ICS). Study the Purdue Reference Model, understand safety-critical limits, and integrate email and proxy telemetry.',
    category: 'Endpoint & Threat Intelligence',
    mentorKey: 'ravi',
    mentor: MENTORS.ravi,
    theoryMinutes: 120,
    theoryHours: 2,
    labMinutes: 120,
    labHours: 2,
    totalHours: 4,
    estimatedTime: '4 Hours (2h Theory + 2h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 10: Multi-Telemetry Ecosystem Correlation & OT Boundary Inspection',
    whatYoullLearn: [
      'Differences between IT (Information Technology) and OT (Operational Technology/ICS)',
      'The Purdue Reference Model: Level 0 (Field), Level 1 (Control), Level 2/3 (Operations), Level 4/5 (IT)',
      'Email security gateways: SPF, DKIM, DMARC, attachment sandboxing',
      'Secure Web Proxies & Identity Providers (Azure AD/Okta, MFA fatigue alerts)',
      'Evaluating asset criticality before executing automated host actions'
    ],
    units: MASTER_MODULES[10].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[10])
  },
  {
    id: 'module-11',
    altId: 'module-11',
    num: '11',
    code: 'CDAC-SOC-M11',
    title: 'Threat Intelligence & Threat Hunting Fundamentals',
    subtitle: 'CTI Feeds, IOC Lookup, VirusTotal, MISP & Hypothesis Hunting',
    tagline: 'Context transforms a random IP into a known nation-state adversary. Enrich alerts with threat intel and proactively hunt for anomalies.',
    desc: 'Harness Cyber Threat Intelligence (CTI). Learn to query indicators of compromise (IOCs) across VirusTotal, AlienVault OTX, and MISP. Shift your mindset from reactive alert triage to hypothesis-driven threat hunting.',
    category: 'Endpoint & Threat Intelligence',
    mentorKey: 'meera',
    mentor: MENTORS.meera,
    theoryMinutes: 120,
    theoryHours: 2,
    labMinutes: 120,
    labHours: 2,
    totalHours: 4,
    estimatedTime: '4 Hours (2h Theory + 2h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 11: IOC Reputation Enrichment & Hypothesis-Driven Baseline Hunting',
    whatYoullLearn: [
      'Strategic, operational, and tactical Cyber Threat Intelligence (CTI)',
      'Indicators of Compromise: IP addresses, domains, file hashes, URL paths',
      'Intelligence enrichment tools: VirusTotal, AbuseIPDB, Shodan, MISP',
      'Alert-driven vs hunt-driven mindsets: moving beyond triggered alerts',
      'Formulating simple threat hunting hypotheses and querying system baselines'
    ],
    units: MASTER_MODULES[11].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[11])
  },
  {
    id: 'module-12',
    altId: 'module-12',
    num: '12',
    code: 'CDAC-SOC-M12',
    title: 'Security Automation & SOAR Fundamentals',
    subtitle: 'Automated Playbooks, API Connectors & Human-in-the-Loop Decisions',
    tagline: 'Repetitive triage tasks drain analyst energy. SOAR automates lookups and containment while keeping analysts in command.',
    desc: 'Examine Security Orchestration, Automation, and Response (SOAR). Discover how playbooks execute automated IP reputation lookups, ticket creation, and host isolation, and identify when human validation is mandatory.',
    category: 'Automation & Incident Response',
    mentorKey: 'karthik',
    mentor: MENTORS.karthik,
    theoryMinutes: 120,
    theoryHours: 2,
    labMinutes: 180,
    labHours: 3,
    totalHours: 5,
    estimatedTime: '5 Hours (2h Theory + 3h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 12: SOAR Automated Playbook Execution & Human-in-the-Loop Approval',
    whatYoullLearn: [
      'SOAR core components: orchestration, automation engines, and response modules',
      'Playbooks and automated actions: conditional branches, webhooks, API calls',
      'Analyst touchpoints: human-in-the-loop approvals for critical actions',
      'Failure modes: handling rate limits, API timeouts, and unexpected payload structures',
      'Documenting automated enrichment steps in case tickets'
    ],
    units: MASTER_MODULES[12].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[12])
  },
  {
    id: 'module-13',
    altId: 'module-13',
    num: '13',
    code: 'CDAC-SOC-M13',
    title: 'Incident Response & Frameworks',
    subtitle: 'NIST SP 800-61, SANS PICERL, MITRE ATT&CK & Cyber Kill Chain',
    tagline: 'When an intrusion is confirmed, structured frameworks govern every action. Map adversary techniques and lead defensible responses.',
    desc: 'Master the premier incident response frameworks: NIST SP 800-61r2 and SANS PICERL. Align observed indicators with MITRE ATT&CK tactics (Initial Access, Execution, Persistence, Lateral Movement) and the Cyber Kill Chain.',
    category: 'Automation & Incident Response',
    mentorKey: 'karthik',
    mentor: MENTORS.karthik,
    theoryMinutes: 120,
    theoryHours: 2,
    labMinutes: 180,
    labHours: 3,
    totalHours: 5,
    estimatedTime: '5 Hours (2h Theory + 3h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 13: Incident Lifecycle Scoping & MITRE ATT&CK Matrix Mapping',
    whatYoullLearn: [
      'NIST SP 800-61r2 and SANS PICERL lifecycles: Preparation to Lessons Learned',
      'Where the L1 analyst operates: Identification and initial Containment handoff',
      'MITRE ATT&CK framework: Tactics, Techniques, and Sub-techniques',
      'The Cyber Kill Chain and David Bianco’s Pyramid of Pain',
      'Mapping evidence to ATT&CK technique IDs for executive and team reporting'
    ],
    units: MASTER_MODULES[13].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[13])
  },
  {
    id: 'module-14',
    altId: 'module-14',
    num: '14',
    code: 'CDAC-SOC-M14',
    title: 'Shift Operations & Handover',
    subtitle: '24/7 Shift Patterns, TheHive Case Management & Audit Closures',
    tagline: 'Security never sleeps. Conduct seamless shift turnovers, maintain ticket integrity, and turn every incident into institutional resilience.',
    desc: 'Conclude your training with the realities of 24/7 SOC floor operations. Master shift turnover protocols, case management in systems like TheHive, alert disposition documentation, and post-shift continuous improvement.',
    category: 'Automation & Incident Response',
    mentorKey: 'ananya',
    mentor: MENTORS.ananya,
    theoryMinutes: 120,
    theoryHours: 2,
    labMinutes: 120,
    labHours: 2,
    totalHours: 4,
    estimatedTime: '4 Hours (2h Theory + 2h Lab)',
    topicCount: 9,
    labAvailable: true,
    labTitle: 'Lab 14: Shift Alpha-to-Bravo Handover & TheHive Case Closure',
    whatYoullLearn: [
      '24/7 SOC shift patterns (8-hour vs 12-hour rotations) and managing alert fatigue',
      'Case management lifecycles: open, in-progress, pending external, escalated, closed',
      'The essential components of an audit-grade shift handover briefing',
      'Tracking active high-severity cases, pending containment actions, and degraded sensors',
      'Defensible case disposition recording and post-incident lessons learned contribution'
    ],
    units: MASTER_MODULES[14].units,
    topics: flattenUnitsToTopics(MASTER_MODULES[14])
  }
];

// Helper to flatten units and items into unified topic array
function flattenUnitsToTopics(moduleObj) {
  const topics = [];
  if (!moduleObj || !moduleObj.units) return topics;

  moduleObj.units.forEach(unit => {
    unit.items.forEach(item => {
      topics.push({
        id: item.id,
        unitId: unit.id,
        moduleId: moduleObj.id,
        num: \`\${unit.num}-\${item.num}\`,
        title: item.title,
        subtitle: \`\${unit.title} • \${item.type === 'chapter' ? 'Interactive Chapter' : 'Unit Assessment'}\`,
        minutes: item.duration || 10,
        xp: item.type === 'assessment' ? 75 : 50,
        type: item.type
      });
    });
  });

  return topics;
}

export function getModuleById(id) {
  if (!id) return ALL_MODULES[0];
  const cleaned = id.toLowerCase().trim();
  
  // Exact id or altId match
  const found = ALL_MODULES.find(m => m.id === cleaned || m.altId === cleaned);
  if (found) return found;

  // Numeric match (e.g. '0', '00', '1', '01', '14')
  const numClean = cleaned.replace('module-', '').padStart(2, '0');
  const foundByNum = ALL_MODULES.find(m => m.num === numClean);
  if (foundByNum) return foundByNum;

  return ALL_MODULES[0];
}

export function getTopicById(id) {
  if (!id) return { topic: ALL_MODULES[0].topics[0], module: ALL_MODULES[0], unit: ALL_MODULES[0].units[0] };

  for (const mod of ALL_MODULES) {
    for (const unit of mod.units) {
      for (const item of unit.items) {
        if (item.id === id) {
          const topic = mod.topics.find(t => t.id === id) || {
            id: item.id,
            title: item.title,
            num: \`\${unit.num}-\${item.num}\`,
            minutes: item.duration || 10,
            type: item.type
          };
          return { topic, module: mod, unit };
        }
      }
    }
  }

  // Fallback
  return { topic: ALL_MODULES[0].topics[0], module: ALL_MODULES[0], unit: ALL_MODULES[0].units[0] };
}
`;

  fs.writeFileSync(path.join(rootDir, 'src/data/modulesData.js'), content, 'utf-8');
  console.log('✓ Wrote src/data/modulesData.js');
}
