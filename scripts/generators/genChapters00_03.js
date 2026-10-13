// Generates src/data/chapters/modules00_03.js
import fs from 'fs';
import path from 'path';

export function generateChapters00_03(rootDir) {
  const content = `// Chapters Data: Modules 00, 01, 02, 03
// Strict 4-Section structure:
// Section 1: Theory (What it is, Why L1 needs it, How it works, CDAC Bengaluru practical example)
// Section 2: Visual Element (Animated visual sequence, key takeaway, minimal text)
// Section 3: Interactive Activity (Matching, sorting, reveal-a-clue, ranking, tracing)
// Section 4: Knowledge Check (1-3 quick items with immediate feedback and explanation)

export const CHAPTERS_00_03 = {
  // =========================================================================
  // MODULE 00: ORIENTATION — YOUR FIRST SOC SHIFT
  // =========================================================================

  'M00-U1-C1': {
    id: 'M00-U1-C1',
    moduleId: 'module-00',
    unitId: 'M00-U1',
    title: 'Your first shift and the L1 role',
    duration: 7,
    mentor: 'ananya',
    story: 'Mentor Ananya welcomes you to the CDAC Bengaluru SOC facility and walks you through what happens the moment your headset goes on.',
    theory: {
      duration: 7,
      subsections: {
        whatItIs: 'The Tier 1 (L1) SOC Analyst is the frontline triage specialist of an organization. Your primary mission is continuous 24/7 monitoring of incoming security alerts, performing initial validation, eliminating false alarms, and rapidly escalating confirmed security threats.',
        whyL1NeedsIt: 'Every cybersecurity incident starts as a single line in a queue. If an L1 analyst misses an indicator or wastes 4 hours on a benign printer ping, critical attacks slip through. Understanding your operational perimeter keeps the defense responsive and focused.',
        howItWorks: 'An L1 analyst sits in the initial triage phase of the SOC lifecycle. Alerts trigger from SIEM and EDR sensors. You claim the ticket, inspect the 4 vital entities (User, Host, IP, Timestamp), check for known baselines, assign an initial priority, and either close with notes or escalate to Tier 2 (L2) Incident Response.',
        practicalExample: 'At CDAC Bengaluru, employee FIN-OPS-01 triggers three failed logon alerts at 09:02 AM followed by a success. As the L1 analyst on shift, you check whether the workstation is the user’s assigned laptop before panicking.'
      },
      takeaways: [
        'L1 analysts are the first line of defense: detect, triage, validate, and escalate.',
        'Never act on assumptions: always verify User, Host, IP, and Timestamps.',
        'Speed matters, but defensible documentation matters even more.'
      ]
    },
    visual: {
      title: 'The L1 Shift Operational Loop',
      concept: 'Alert Intake ➔ Quick Entity Scoping ➔ Baseline Check ➔ Escalate or Close',
      description: 'Observe how a raw alert transitions from the SIEM queue to an analyst workbench in seconds.',
      takeaway: 'Triage is not solving the entire breach; it is rapidly determining if the smoke is an actual fire.',
      steps: [
        { step: 1, label: 'Alert Triggered', detail: 'SIEM correlates 5 failed logons on Workstation-04 within 60s.', status: 'alert' },
        { step: 2, label: 'L1 Ownership', detail: 'Analyst claims ticket ALT-9042 and opens the triage pane.', status: 'info' },
        { step: 3, label: 'Entity Check', detail: 'Extract User ID: FIN-OPS-01, Source IP: 10.10.20.15, Host: BLR-BR-WS-04.', status: 'info' },
        { step: 4, label: 'Decision Gate', detail: 'Is it expected branch activity or external credential attack? Route accordingly.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match the SOC Role to Its Primary Responsibility',
      prompt: 'Connect each tier of the security operations hierarchy to its core operational focus.',
      pairs: [
        { id: 'p1', left: 'L1 Triage Analyst', right: 'First-response alert validation and baseline verification' },
        { id: 'p2', left: 'L2 Incident Responder', right: 'Deep-dive host forensics, malware reverse engineering & scoping' },
        { id: 'p3', left: 'L3 Threat Hunter', right: 'Proactive hunting for undetected stealth adversaries without prior alerts' },
        { id: 'p4', left: 'SOC Lead / Manager', right: 'Operational coverage, shift handovers, SLAs and executive reporting' }
      ],
      successFeedback: 'Brilliant! You clearly understand how L1 fits cleanly into the broader escalation chain.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'What is the primary operational objective of a Tier 1 (L1) SOC Analyst?',
          options: [
            'Reverse engineer zero-day malware binaries in assembly language',
            'Perform initial alert intake, entity validation, noise filtering, and escalation',
            'Deploy physical fiber cables across branch office switches',
            'Write company-wide regulatory compliance policies'
          ],
          correctIndex: 1,
          explanation: 'L1 analysts focus on high-velocity initial triage, rapid validation of User/Host/IP/Time entities, and escalating confirmed true threats.'
        },
        {
          id: 'q2',
          question: 'When an alert lands in the queue, what are the four essential entities that must be verified first?',
          options: [
            'User, Hostname, IP address, and Timestamp',
            'CEO name, stock ticker, branch address, and room number',
            'Antivirus serial number, monitor resolution, GPU driver, and RAM speed',
            'Ethernet cable brand, switch rack position, room temperature, and router power'
          ],
          correctIndex: 0,
          explanation: 'User, Hostname, IP address, and Timestamp form the foundational 4-point entity triage anchor.'
        }
      ]
    }
  },

  'M00-U1-C2': {
    id: 'M00-U1-C2',
    moduleId: 'module-00',
    unitId: 'M00-U1',
    title: 'How this course works',
    duration: 7,
    mentor: 'ananya',
    story: 'Ananya explains the active learning rhythm: you will never read endless walls of dry text. Every concept follows the 4-Phase Micro-Learning engine.',
    theory: {
      duration: 7,
      subsections: {
        whatItIs: 'This course uses a rigorous pedagogical architecture built specifically for operational security: Theory ➔ Animated Visual ➔ Interactive Activity ➔ Knowledge Check.',
        whyL1NeedsIt: 'In a real SOC, you do not recall static multiple-choice facts; you interact with live dashboards, recognize dynamic patterns, and execute precise decisions under SLA timers.',
        howItWorks: 'Each chapter delivers a concise briefing, animates the technical mechanism, tests your hands on an interactive component, and reinforces retention with an instant check.',
        practicalExample: 'When analyzing Event 4625 brute force patterns at CDAC Bengaluru, you read the definition, watch the failed logons populate the timeline, drag timestamps into chronological order, and confirm the sub-status.'
      },
      takeaways: [
        'Active participation leads to deep retention and shift readiness.',
        'Immediate feedback loops prevent misunderstandings from becoming habits.',
        'Every exercise mirrors real enterprise telemetry.'
      ]
    },
    visual: {
      title: 'The 4-Phase Micro-Learning Engine',
      concept: 'Concept Briefing ➔ Dynamic Animation ➔ Hands-on Activity ➔ Mastery Check',
      description: 'Progress seamlessly through each phase of learning to build muscle memory.',
      takeaway: 'Pattern recognition is forged by watching systems move, not just reading about them.',
      steps: [
        { step: 1, label: 'Theory', detail: 'Why the concept matters to Tier 1 defenders.', status: 'info' },
        { step: 2, label: 'Visual', detail: 'Animated diagrams showing data flows and network boundaries.', status: 'info' },
        { step: 3, label: 'Interactive', detail: 'Hands-on matching, ordering, and evidence reveal exercises.', status: 'alert' },
        { step: 4, label: 'Check', detail: 'Instant scenario question validating operational readiness.', status: 'success' }
      ]
    },
    interactive: {
      type: 'sorting',
      title: 'Sequence the Micro-Learning Engine Steps',
      prompt: 'Arrange the four learning phases into the exact operational sequence used in this course.',
      items: [
        { id: 's1', text: '1. Theory & Technical Context (What and Why)' },
        { id: 's2', text: '2. Animated Visual Telemetry (How it moves)' },
        { id: 's3', text: '3. Interactive Hands-on Activity (Do it yourself)' },
        { id: 's4', text: '4. Knowledge Check & Mastery Validation (Prove it)' }
      ],
      correctOrder: ['s1', 's2', 's3', 's4'],
      successFeedback: 'Perfect! That is the exact rhythm you will master across all 15 modules.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'Why is visual animation and interactive activity paired with theory in this course?',
          options: [
            'To make lessons take as much time as possible',
            'To build operational intuition and muscle memory that mirrors live SOC dashboards',
            'Because text cannot be displayed on computer screens',
            'To replace the need for hands-on labs entirely'
          ],
          correctIndex: 1,
          explanation: 'SOC analysts must recognize dynamic telemetry patterns in real time; visual and interactive training builds operational intuition.'
        }
      ]
    }
  },

  'M00-U2-C1': {
    id: 'M00-U2-C1',
    moduleId: 'module-00',
    unitId: 'M00-U2',
    title: 'Resource packs, simulations and isolated VMs',
    duration: 7,
    mentor: 'ananya',
    story: 'Mentor Ananya guides you into the CDAC Bengaluru secure sandbox environment, demonstrating how live threat simulations run safely.',
    theory: {
      duration: 7,
      subsections: {
        whatItIs: 'A SOC training sandbox uses isolated virtual machines (VMs), host-only virtual networks, and curated resource packs (sample PCAPs, EVTX exports, sanitized memory dumps).',
        whyL1NeedsIt: 'Real security analysts frequently handle live malware samples, exploit payloads, and toxic network artifacts. Working inside strictly isolated environments prevents accidental enterprise leaks.',
        howItWorks: 'Simulated malware runs inside non-routable VLANs. Telemetry forwarders replicate real SIEM pipelines without connecting to production networks. If a simulation detonates, it remains safely quarantined.',
        practicalExample: 'At CDAC Bengaluru, your training VM has its default gateway pointed to a simulated dummy sinkhole (10.10.99.254), allowing you to observe C2 beaconing attempts safely.'
      },
      takeaways: [
        'Never test unverified payloads or scripts on production host machines.',
        'Use snapshotting on isolated VMs so you can revert state after each exercise.',
        'Sanitized training PCAPs preserve forensic reality without risking live data.'
      ]
    },
    visual: {
      title: 'Isolated VM Sandbox Architecture',
      concept: 'Host Machine ➔ Hypervisor ➔ Host-Only Virtual Switch ➔ Quarantined VM',
      description: 'Notice how all outbound routing to the internet is strictly severed at the hypervisor boundary.',
      takeaway: 'Isolation guarantees safety when dissecting malicious artifacts.',
      steps: [
        { step: 1, label: 'Host Hypervisor', detail: 'Manages sandboxed guest instances with zero bridged adapters.', status: 'info' },
        { step: 2, label: 'Isolated VLAN', detail: 'Restricted subnet 192.168.200.0/24 with no external internet route.', status: 'info' },
        { step: 3, label: 'Detonation VM', detail: 'Target Windows/Linux workstation running telemetry agents.', status: 'alert' },
        { step: 4, label: 'Telemetry Sink', detail: 'SIEM forwarder captures EVTX logs safely to local database.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match the Lab Safety Element to Its Purpose',
      prompt: 'Pair each containment control with its protective role.',
      pairs: [
        { id: 'p1', left: 'Host-Only Virtual Adapter', right: 'Prevents malware network traffic from escaping to physical LAN' },
        { id: 'p2', left: 'VM Snapshot', right: 'Allows instant rollback to pristine state after malicious execution' },
        { id: 'p3', left: 'Sanitized PCAP', right: 'Real packet capture with internal sensitive company data scrubbed' },
        { id: 'p4', left: 'Sinkhole DNS', right: 'Redirects malicious C2 domain requests to benign local loopback' }
      ],
      successFeedback: 'Excellent! You know how to maintain safe boundaries while analyzing dangerous telemetry.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'What is the primary risk of analyzing an unknown executable on your primary workstation instead of an isolated VM?',
          options: [
            'It consumes 10 MB of extra hard drive space',
            'Malware could infect your host OS, steal credentials, and propagate across the enterprise network',
            'It will automatically format all USB drives in the room',
            'It will change your screen wallpaper to black'
          ],
          correctIndex: 1,
          explanation: 'Unknown executables must always remain inside isolated, non-routable sandboxes to prevent host compromise and lateral spread.'
        }
      ]
    }
  },

  'M00-U2-C2': {
    id: 'M00-U2-C2',
    moduleId: 'module-00',
    unitId: 'M00-U2',
    title: 'Evidence handling and asking for help',
    duration: 7,
    mentor: 'ananya',
    story: 'Mentor Ananya reviews the chain of custody and explains how junior analysts should communicate effectively with senior mentors.',
    theory: {
      duration: 7,
      subsections: {
        whatItIs: 'Evidence handling governs how security artifacts (logs, files, memory captures) are preserved without tampering. Asking for help in a SOC requires structured briefings rather than vague questions.',
        whyL1NeedsIt: 'Altering an evidence file invalidates it for legal prosecution or root-cause audits. Furthermore, knowing when and how to escalate to mentors like Ravi, Meera, or Karthik prevents bottlenecking the queue.',
        howItWorks: 'Calculate SHA-256 hashes immediately upon artifact acquisition. When requesting mentor help, structure your briefing with: (1) Ticket ID, (2) Observed Entities, (3) What you tested, and (4) Your specific question.',
        practicalExample: 'When you find a suspicious PowerShell script on workstation BLR-BR-WS-04, do not double-click it. Hash it, export the script block event 4104, and brief Mentor Ravi with the exact process ID.'
      },
      takeaways: [
        'Always calculate cryptographic hashes (SHA-256) of evidence files immediately.',
        'Never modify the original evidence: always analyze forensic copies.',
        'Mentor briefings should be concise, entity-focused, and action-oriented.'
      ]
    },
    visual: {
      title: 'Structured Mentor Escalation Protocol',
      concept: 'Ticket ID + 4 Core Entities + Attempted Checks ➔ Clear Question to Mentor',
      description: 'See the difference between an unhelpful vague ping and a professional SOC handoff.',
      takeaway: 'Clarity in communication accelerates incident containment.',
      steps: [
        { step: 1, label: 'Ticket ID & Severity', detail: 'State ALT-9042, Medium priority, 15m remaining on SLA.', status: 'info' },
        { step: 2, label: 'Observed Entities', detail: 'User FIN-OPS-01, IP 10.10.20.15, Host BLR-BR-WS-04.', status: 'info' },
        { step: 3, label: 'Actions Taken', detail: 'Checked Event 4625 substatus (0xC000006A) and Ticket HD-8921.', status: 'alert' },
        { step: 4, label: 'Specific Request', detail: 'Requesting L2 review of subsequent SMB traffic to confirm no lateral spread.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Identify Professional vs Unprofessional SOC Communication',
      prompt: 'Match the scenario communication to its professional quality rating.',
      pairs: [
        { id: 'p1', left: '"Something weird is happening on the finance PC, please check!"', right: 'Unprofessional: Lacks ticket ID, host name, user context, and observed events' },
        { id: 'p2', left: '"ALT-9042: 5x 4625 logons for FIN-OPS-01 on WS-04, substatus 0x6A, checking HD ticket"', right: 'Professional: Concise, includes ticket, event codes, user, host, and action' },
        { id: 'p3', left: '"I deleted the suspicious script from the C: drive to make it safe"', right: 'Severe Error: Destroys forensic evidence and breaks chain of custody' },
        { id: 'p4', left: '"Extracted script SHA-256 hash e3b0c44... and isolated host from network"', right: 'Best Practice: Preserves evidence integrity while neutralizing threat' }
      ],
      successFeedback: 'Outstanding! You communicate like an experienced SOC professional.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'What is the first step an analyst must take when preserving a digital evidence file?',
          options: [
            'Rename the file to "safe.txt"',
            'Calculate and record its cryptographic hash (e.g. SHA-256) to prove data integrity',
            'Email the file as an unencrypted attachment to everyone on shift',
            'Open it in Microsoft Word to read the header'
          ],
          correctIndex: 1,
          explanation: 'Calculating a cryptographic hash guarantees that the artifact has not been modified or corrupted, maintaining legal chain of custody.'
        }
      ]
    }
  },

  'M00-U3-C1': {
    id: 'M00-U3-C1',
    moduleId: 'module-00',
    unitId: 'M00-U3',
    title: 'FinCorp-style alerts in a CDAC learning setting',
    duration: 6,
    mentor: 'ananya',
    story: 'Mentor Ananya introduces the ongoing shift narrative: the FinCorp financial enterprise simulation running inside CDAC Bengaluru.',
    theory: {
      duration: 6,
      subsections: {
        whatItIs: 'Throughout this curriculum, you will triage simulated alerts from "FinCorp", a realistic multi-branch banking and financial enterprise deployed within the CDAC Bengaluru lab.',
        whyL1NeedsIt: 'Abstract theory without real context fails during operational crises. Triage requires understanding business impact: financial wire transfers, branch operations, teller workstations, and ATM interconnects.',
        howItWorks: 'You will encounter realistic hostnames (BLR-BR-WS-04), subnets (10.10.20.0/24 for Finance), user identities (FIN-OPS-01), and standard enterprise software (Outlook, Active Directory, SMB file shares).',
        practicalExample: 'Alert ALT-2026-9042 involves accounts officer Ramesh Sundaram (FIN-OPS-01) on workstation BLR-BR-WS-04. Understanding that this workstation handles wire processing elevates its triage priority.'
      },
      takeaways: [
        'Enterprise context determines alert severity: high-value assets demand high vigilance.',
        'FinCorp simulation mirrors real banking telemetry and compliance standards.',
        'Consistent host naming conventions (BLR-BR-WS-04) reveal physical location and role.'
      ]
    },
    visual: {
      title: 'FinCorp Enterprise Architecture Context',
      concept: 'Regional Branch Office ➔ Dedicated Finance VLAN ➔ Central Core Data Center',
      description: 'Observe how branch workstations connect back to core services across secure tunnels.',
      takeaway: 'Asset criticality guides triage prioritization.',
      steps: [
        { step: 1, label: 'Workstation BLR-BR-WS-04', detail: 'Finance user endpoint on 10.10.20.15 (VLAN 20).', status: 'info' },
        { step: 2, label: 'Branch Access Switch', detail: 'Layer 2 switch enforcing 802.1Q port isolation.', status: 'info' },
        { step: 3, label: 'Branch Router/Firewall', detail: 'Edge gateway 10.10.20.1 routing traffic across IPsec VPN.', status: 'info' },
        { step: 4, label: 'CDAC SOC Monitoring', detail: 'SIEM forwarder ingests auth and flow telemetry in real time.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Decode FinCorp Host Naming Conventions',
      prompt: 'Match each standard FinCorp hostname to its operational role and location.',
      pairs: [
        { id: 'p1', left: 'BLR-BR-WS-04', right: 'Bengaluru Branch — Workstation 04 (Finance user endpoint)' },
        { id: 'p2', left: 'BLR-DC-SRV-01', right: 'Bengaluru Data Center — Core Server 01 (Domain Controller)' },
        { id: 'p3', left: 'MUM-HQ-FW-01', right: 'Mumbai Headquarters — Primary Next-Gen Perimeter Firewall' },
        { id: 'p4', left: 'BLR-BR-RTR-01', right: 'Bengaluru Branch — Edge Router/VPN Gateway (10.10.20.1)' }
      ],
      successFeedback: 'Spot on! Recognizing enterprise naming conventions allows you to identify affected assets instantly.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'Why does an alert on BLR-BR-WS-04 carry higher inherent operational risk than an alert on an isolated training kiosk?',
          options: [
            'Because BLR-BR-WS-04 is a finance workstation handling sensitive account transactions',
            'Because the computer has a more expensive monitor',
            'Because the kiosk uses more electricity',
            'There is no difference in operational risk'
          ],
          correctIndex: 0,
          explanation: 'Asset context matters: finance endpoints handle sensitive financial operations and require heightened scrutiny during triage.'
        }
      ]
    }
  },

  'M00-U3-C2': {
    id: 'M00-U3-C2',
    moduleId: 'module-00',
    unitId: 'M00-U3',
    title: 'How modules connect to a shift',
    duration: 6,
    mentor: 'ananya',
    story: 'Mentor Ananya maps out the 15-module path, showing how each module supplies a specific capability you will deploy during live operations.',
    theory: {
      duration: 6,
      subsections: {
        whatItIs: 'The 15 modules form a continuous operational journey: Foundations (M00-M03) ➔ Operations & SIEM (M04-M06) ➔ Host & Network Monitoring (M07-M08) ➔ Endpoint & Threat Intel (M09-M11) ➔ Automation & Response (M12-M14).',
        whyL1NeedsIt: 'In isolation, a packet capture or registry key means little. On shift, you seamlessly pivot from an alert (M04) to SIEM search (M05), check Windows event IDs (M07), inspect Wireshark flows (M08), and check EDR process trees (M09).',
        howItWorks: 'Every concept you master is immediately reinforced in later modules. Module 04 introduces the FIN-OPS-01 alert; subsequent modules give you the tools to dissect its log records, network packets, and host processes.',
        practicalExample: 'When analyzing alert ALT-2026-9042, you use M01/M07 to understand the Windows Event 4625, M02/M08 to check the 10.10.20.15 IP routing, M05 to run the query, and M14 to draft the handover note.'
      },
      takeaways: [
        'Security operations is interdisciplinary: host, network, identity, and SIEM work together.',
        'Each module builds directly on the previous one to form a complete investigative toolkit.',
        'By Module 14, you will possess all competencies required of an autonomous Tier 1 analyst.'
      ]
    },
    visual: {
      title: 'The Integrated SOC Analyst Knowledge Pathway',
      concept: 'Foundations ➔ Detection ➔ Forensics ➔ Intelligence ➔ Response & Handover',
      description: 'See how the 15 modules link into a unified Tier 1 operational skill matrix.',
      takeaway: 'True defense is holistic across all OSI and system layers.',
      steps: [
        { step: 1, label: 'M00-M03', detail: 'Workstation, Branch Network & Security Fundamentals', status: 'info' },
        { step: 2, label: 'M04-M06', detail: 'Triage Workflows, SIEM Search & Timeline Reconstruction', status: 'info' },
        { step: 3, label: 'M07-M08', detail: 'Deep Host EVTX Auditing & Wireshark Packet Inspection', status: 'alert' },
        { step: 4, label: 'M09-M14', detail: 'EDR Lineage, Threat Intel, SOAR Playbooks & Shift Handoff', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match the Investigation Question to the Module Toolkit',
      prompt: 'When investigating an alert, which module provides the specific investigative skill?',
      pairs: [
        { id: 'p1', left: '"Which parent process spawned this suspicious PowerShell script?"', right: 'Module 09: Endpoint Detection & Response (Process Trees)' },
        { id: 'p2', left: '"How do I write a query for failed logons over the last 15 minutes?"', right: 'Module 05: SIEM Fundamentals & OpenSearch Querying' },
        { id: 'p3', left: '"Is this IP address associated with known ransomware command servers?"', right: 'Module 11: Threat Intelligence & IOC Reputation Lookup' },
        { id: 'p4', left: '"How do I summarize this open case for the incoming night shift analyst?"', right: 'Module 14: Shift Operations, TheHive & Effective Handover' }
      ],
      successFeedback: 'Fantastic! You clearly see how the entire course connects directly to your shift.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'How do the different modules in this course relate to your daily workflow on shift?',
          options: [
            'Each module is an isolated test that is never used again',
            'They represent the connected toolkit of an analyst: pivoting between SIEM, packets, host logs, and case handoffs',
            'Only Module 04 matters; the rest are purely decorative',
            'They are only relevant for system administrators, not SOC analysts'
          ],
          correctIndex: 1,
          explanation: 'SOC investigations require pivoting fluidly across SIEM queries, host event logs, network packet captures, and formal case documentation.'
        }
      ]
    }
  },

  // =========================================================================
  // MODULE 01: COMPUTER FUNDAMENTALS
  // =========================================================================

  'M01-U1-C1': {
    id: 'M01-U1-C1',
    moduleId: 'module-01',
    unitId: 'M01-U1',
    title: 'Hardware, OS and accounts',
    duration: 14,
    mentor: 'ravi',
    story: 'Mentor Ravi opens up the hardware architecture of analyst workstations and endpoints across FinCorp.',
    theory: {
      duration: 14,
      subsections: {
        whatItIs: 'An operating system (Windows, Linux) bridges physical hardware (CPU, RAM, storage, network interfaces) with software applications through user and system security accounts.',
        whyL1NeedsIt: 'Adversaries manipulate OS primitives: injecting code into volatile RAM, modifying persistent disk storage, and hijacking user or service accounts to gain unauthorized access.',
        howItWorks: 'CPUs execute instructions in Ring 0 (Kernel mode) or Ring 3 (User mode). The OS assigns each logged-on user a Security Identifier (SID) or UID. System accounts (NT AUTHORITY\\SYSTEM, root) wield full kernel power, while standard user accounts have bounded privileges.',
        practicalExample: 'When user FIN-OPS-01 logs into BLR-BR-WS-04, Windows issues an access token containing SID S-1-5-21-... If a process attempts to read kernel memory without privileges, the OS triggers an access violation.'
      },
      takeaways: [
        'Volatile RAM contains running malware payloads that disappear upon reboot.',
        'User accounts operate under least-privilege tokens; SYSTEM/root accounts have full control.',
        'SIDs and UIDs uniquely identify principals in security audit logs.'
      ]
    },
    visual: {
      title: 'OS Hardware & Privilege Boundary',
      concept: 'Hardware ➔ Kernel Space (Ring 0) ➔ User Space (Ring 3) ➔ User Accounts',
      description: 'Observe the security boundary enforced by the operating system between user applications and the kernel.',
      takeaway: 'Privilege escalation occurs when user code crosses into kernel or system contexts.',
      steps: [
        { step: 1, label: 'Hardware Layer', detail: 'CPU execution, RAM volatile memory, and network NIC.', status: 'info' },
        { step: 2, label: 'Kernel Space (Ring 0)', detail: 'Device drivers, memory manager, NTOSKRNL.EXE / Linux vmlinuz.', status: 'info' },
        { step: 3, label: 'System Services', detail: 'Running as NT AUTHORITY\\SYSTEM or root daemon accounts.', status: 'alert' },
        { step: 4, label: 'User Applications', detail: 'Browsers, Outlook, Office running inside sandboxed user token.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match Account Types to Their Privilege Boundaries',
      prompt: 'Pair each account identifier with its operational privilege scope.',
      pairs: [
        { id: 'p1', left: 'NT AUTHORITY\\SYSTEM', right: 'Windows highest operating system privilege, unrestricted host access' },
        { id: 'p2', left: 'Standard Domain User (FIN-OPS-01)', right: 'Restricted desktop privileges, cannot modify system drivers or services' },
        { id: 'p3', left: 'root (UID 0)', right: 'Linux superuser account with unrestricted read/write/execute capabilities' },
        { id: 'p4', left: 'Local Service Account', right: 'Dedicated low-privilege service identity for background tasks' }
      ],
      successFeedback: 'Correct! Understanding account boundaries is essential for spotting privilege escalation.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'Why is volatile RAM inspection critical during live malware investigations?',
          options: [
            'Because RAM stores all emails from the last 10 years permanently',
            'Because modern fileless malware executes directly in volatile memory without writing to disk',
            'Because RAM cannot execute computer code',
            'Because CPUs only read hard drives directly'
          ],
          correctIndex: 1,
          explanation: 'Fileless malware resides exclusively in volatile RAM to evade static disk antivirus scanners; it vanishes when power is cut.'
        }
      ]
    }
  },

  'M01-U1-C2': {
    id: 'M01-U1-C2',
    moduleId: 'module-01',
    unitId: 'M01-U1',
    title: 'Files, paths and permissions',
    duration: 14,
    mentor: 'ravi',
    story: 'Ravi shows you how adversaries drop malicious scripts into writable user paths and how Access Control Lists (ACLs) prevent unauthorized tampering.',
    theory: {
      duration: 14,
      subsections: {
        whatItIs: 'Filesystems (NTFS on Windows, ext4 on Linux) organize data into hierarchical directory trees, secured by Access Control Lists (ACLs) or POSIX permission bits (rwxrwxrwx).',
        whyL1NeedsIt: 'Attackers cannot write to C:\\Windows\\System32 without administrator rights. Consequently, 90% of user-directed malware lands in user-writable paths like %TEMP%, %APPDATA%, or /tmp.',
        howItWorks: 'NTFS permissions specify Read, Write, Execute, and Modify permissions per user SID. Attackers exploit weak folder permissions or DLL search order hijacking in non-standard paths.',
        practicalExample: 'On workstation BLR-BR-WS-04, an analyst discovers a file named invoice.pdf.exe located in C:\\Users\\ramesh\\AppData\\Local\\Temp. The non-system path and deceptive extension immediately flag it for investigation.'
      },
      takeaways: [
        'User-writable locations (%TEMP%, %APPDATA%, /tmp) are prime malware staging grounds.',
        'Check file paths carefully: system binaries belong in System32 or /usr/bin, not user folders.',
        'Permissions prevent standard users from modifying critical system binaries.'
      ]
    },
    visual: {
      title: 'Directory Tree & Malware Landing Zones',
      concept: 'Protected System Roots vs Unprotected User-Writable Staging Directories',
      description: 'Observe where adversaries drop payloads when blocked by system permissions.',
      takeaway: 'Executable files running from temporary user directories warrant immediate scrutiny.',
      steps: [
        { step: 1, label: 'C:\\Windows\\System32', detail: 'Protected system folder; requires Administrator/SYSTEM write rights.', status: 'success' },
        { step: 2, label: 'C:\\Program Files', detail: 'Standard software binaries; protected by UAC and ACLs.', status: 'info' },
        { step: 3, label: 'C:\\Users\\<user>\\AppData', detail: 'User-writable application storage; frequent LOLBin drop site.', status: 'alert' },
        { step: 4, label: 'C:\\Users\\<user>\\AppData\\Local\\Temp', detail: 'Unrestricted user temp folder; prime malware landing zone.', status: 'alert' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Classify File Paths by Threat Likelihood',
      prompt: 'Match each file execution path to its typical security disposition.',
      pairs: [
        { id: 'p1', left: 'C:\\Windows\\System32\\svchost.exe', right: 'Expected legitimate system service host binary' },
        { id: 'p2', left: 'C:\\Users\\Finance01\\AppData\\Roaming\\svchost.exe', right: 'Highly suspicious: Masquerading system binary executing from user path' },
        { id: 'p3', left: '/usr/bin/ssh', right: 'Standard Linux OpenSSH client utility' },
        { id: 'p4', left: '/tmp/.cron_backup.sh', right: 'Suspicious hidden script executing from temporary world-writable directory' }
      ],
      successFeedback: 'Superb! Spotting masqueraded binaries in user paths is a core L1 triage superpower.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'If you observe an executable named "lsass.exe" running from "C:\\Users\\Public\\Downloads\\lsass.exe", what should you conclude?',
          options: [
            'It is the normal Windows Local Security Authority Process',
            'It is almost certainly malicious masquerading: genuine lsass.exe only runs from C:\\Windows\\System32',
            'It is a backup copy created automatically by Windows Update',
            'It is a benign printer driver'
          ],
          correctIndex: 1,
          explanation: 'Critical Windows system processes have exact canonical paths. Any instance of lsass.exe outside of C:\\Windows\\System32 is malicious masquerading.'
        }
      ]
    }
  },

  'M01-U2-C1': {
    id: 'M01-U2-C1',
    moduleId: 'module-01',
    unitId: 'M01-U2',
    title: 'What processes and services do',
    duration: 13,
    mentor: 'ravi',
    story: 'Mentor Ravi dives into process management, showing how every program on a machine is an active process with a Process ID (PID) and a parent process.',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'A process is an executing program instance in memory, assigned a unique Process ID (PID). A service (or daemon) is a background process that runs continuously without user intervention.',
        whyL1NeedsIt: 'Every attack manifests as a process execution. By inspecting the process lineage (which process started which child process), analysts expose malicious execution chains.',
        howItWorks: 'In Windows, processes spawn through CreateProcess API. explorer.exe launches desktop apps. services.exe launches Windows services. In Linux, systemd (PID 1) forks background daemons. Each child process records its Parent Process ID (PPID).',
        practicalExample: 'When an employee opens a malicious Word document, WINWORD.EXE launches. If WINWORD.EXE suddenly spawns cmd.exe or powershell.exe, that process relationship is anomalous and flags an exploit.'
      },
      takeaways: [
        'Every process has a unique PID and a Parent Process ID (PPID).',
        'Office applications (Word, Excel) should almost never spawn shells (cmd, powershell).',
        'Services run under high privileges and start automatically on system boot.'
      ]
    },
    visual: {
      title: 'Process Lineage & Anomalous Child Execution',
      concept: 'Legitimate Parent-Child Chains vs Adversarial Office Exploits',
      description: 'Observe how a malicious macro spawns command shells to establish persistence.',
      takeaway: 'Process lineage reveals the initial vector of compromise.',
      steps: [
        { step: 1, label: 'User Action', detail: 'Employee opens Quarterly_Report.docm from email.', status: 'info' },
        { step: 2, label: 'WINWORD.EXE (PID 4120)', detail: 'Microsoft Word executes macro instructions.', status: 'info' },
        { step: 3, label: 'cmd.exe (PID 6780)', detail: 'ANOMALOUS: Word spawns command shell interpreter.', status: 'alert' },
        { step: 4, label: 'powershell.exe (PID 9104)', detail: 'Shell executes encoded base64 payload to download C2 agent.', status: 'alert' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Identify Normal vs Anomalous Process Relationships',
      prompt: 'Classify each parent-child process relationship.',
      pairs: [
        { id: 'p1', left: 'explorer.exe ➔ chrome.exe', right: 'Normal: User launching a web browser from desktop' },
        { id: 'p2', left: 'excel.exe ➔ powershell.exe -enc ...', right: 'High Alert: Spreadsheet macro executing encoded PowerShell script' },
        { id: 'p3', left: 'services.exe ➔ svchost.exe', right: 'Normal: Service Control Manager starting legitimate Windows service' },
        { id: 'p4', left: 'outlook.exe ➔ cmd.exe /c certutil ...', right: 'High Alert: Email client spawning command line to download payload' }
      ],
      successFeedback: 'Brilliant! You can instantly spot malicious process lineage in EDR telemetry.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'What is the key indicator of malicious activity when reviewing endpoint process trees?',
          options: [
            'A browser process consuming 200 MB of RAM',
            'An interactive document application (Word, Excel) spawning a command-line interpreter (cmd.exe, powershell.exe)',
            'System Idle Process consuming 90% CPU',
            'A Windows service running under the SYSTEM account'
          ],
          correctIndex: 1,
          explanation: 'Productivity applications like Word or Excel have no legitimate business spawning command interpreters; this pattern strongly indicates weaponized macro exploitation.'
        }
      ]
    }
  },

  'M01-U2-C2': {
    id: 'M01-U2-C2',
    moduleId: 'module-01',
    unitId: 'M01-U2',
    title: 'Routine versus unfamiliar activity',
    duration: 13,
    mentor: 'ravi',
    story: 'Mentor Ravi guides you on establishing behavioral baselines: separating scheduled IT maintenance from adversary persistence.',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'Baselines define the normal operational footprint of an environment: standard software, recurring scheduled tasks, typical administrative tools, and working hours.',
        whyL1NeedsIt: 'Without a baseline, an L1 analyst might panic over daily backup scripts while ignoring a subtle adversary living-off-the-land at 3 AM.',
        howItWorks: 'Analyze the 4 dimensions of context: (1) Time of day, (2) User role, (3) Frequency, and (4) Command-line parameters. Routine activity follows predictable schedules and approved change requests.',
        practicalExample: 'At CDAC Bengaluru, an IT script runs robocopy.exe every night at 02:00 AM under account SVC-BACKUP. When the same robocopy.exe runs at 14:15 PM under user FIN-OPS-01 copying files to an external drive, it is unfamiliar and suspicious.'
      },
      takeaways: [
        'Context is everything: who ran it, when, and with what arguments.',
        'Routine IT operations follow documented schedules and approved service accounts.',
        'Anomalies in timing, account privilege, or destination warrant immediate triage.'
      ]
    },
    visual: {
      title: 'Contextual Baseline Analysis Matrix',
      concept: 'Evaluating Executions Across Time, User Role, and Command Arguments',
      description: 'See how identical binaries flip from benign to high-risk based on operational context.',
      takeaway: 'Never judge a process by its name alone; judge it by its context.',
      steps: [
        { step: 1, label: 'Binary: powershell.exe', detail: 'Legitimate administrative tool installed by default on all Windows hosts.', status: 'info' },
        { step: 2, label: 'Context A: IT Admin @ 10:00 AM', detail: 'Script: Get-Service; User: Admin-Sunil; Ticket: CHG-4421. Result: Benign Routine.', status: 'success' },
        { step: 3, label: 'Context B: Finance User @ 03:30 AM', detail: 'Script: IEX (New-Object Net.WebClient)...; User: FIN-OPS-01. Result: Malicious Alert.', status: 'alert' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Classify Activity as Routine or Unfamiliar',
      prompt: 'Determine whether each operational event represents routine baseline or unfamiliar anomaly.',
      pairs: [
        { id: 'p1', left: 'SCCM agent executing software inventory every Monday at 08:00 AM', right: 'Routine Baseline: Documented management tool on regular schedule' },
        { id: 'p2', left: 'whoami.exe executed from cmd.exe under web application service account at 02:14 AM', right: 'Unfamiliar Anomaly: Classic adversary discovery tactic following web shell injection' },
        { id: 'p3', left: 'Domain Controller syncing Active Directory records with partner DC', right: 'Routine Baseline: Expected enterprise directory replication traffic' },
        { id: 'p4', left: 'certutil.exe -urlcache -f downloading an external .exe file to %TEMP%', right: 'Unfamiliar Anomaly: LOLBin weaponization to bypass network perimeter firewalls' }
      ],
      successFeedback: 'Superb discernment! You know how to separate normal system pulse from attacker reconnaissance.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'Why is running whoami.exe or net.exe under a web server service account (e.g. w3wp.exe or nginx) an immediate critical red flag?',
          options: [
            'Because web servers perform user management by design',
            'Web servers should never interactively query system privileges; this indicates an attacker executing post-exploitation reconnaissance',
            'Because whoami.exe is a known computer virus',
            'Because it slows down internet loading speeds'
          ],
          correctIndex: 1,
          explanation: 'Web applications serve HTTP requests; when an attacker succeeds in remote code execution, their very first command is almost universally whoami or id to discover their privilege level.'
        }
      ]
    }
  },

  'M01-U3-C1': {
    id: 'M01-U3-C1',
    moduleId: 'module-01',
    unitId: 'M01-U3',
    title: 'Command-line essentials',
    duration: 13,
    mentor: 'ravi',
    story: 'Ravi trains you on the terminal: PowerShell, Windows CMD, and Linux Bash. Command-line skills allow an analyst to inspect hosts directly when GUIs fail.',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'Command-line interfaces (CLIs) provide direct text-based communication with the OS kernel and system utilities: PowerShell/CMD in Windows, Bash/Zsh in Linux.',
        whyL1NeedsIt: 'Analysts use CLIs to query active network sockets (netstat), list processes (Get-Process, ps), inspect services (sc.exe, systemctl), and query event logs without relying on heavy graphical tools.',
        howItWorks: 'Commands accept arguments and flags. PowerShell outputs structured .NET objects, allowing powerful filtering via pipes (Where-Object). Linux utilities stream text filtered by grep, awk, and sed.',
        practicalExample: 'On workstation BLR-BR-WS-04, Ravi runs Get-NetTCPConnection -State Established to list every active external connection and identify the PID responsible for rogue network traffic.'
      },
      takeaways: [
        'netstat -ano / Get-NetTCPConnection reveals which PID owns an active network socket.',
        'PowerShell cmdlets (Get-Process, Get-Service) expose in-depth host state.',
        'Linux tools (ps aux, ss -tulpn, journalctl) provide rapid forensic orientation.'
      ]
    },
    visual: {
      title: 'Triage via Command-Line Telemetry',
      concept: 'Querying Active Sockets ➔ Mapping Port to PID ➔ Inspecting Process Details',
      description: 'Follow the command-line investigative flow from suspicious port to executable path.',
      takeaway: 'Terminal commands provide rapid, scriptable host inspection.',
      steps: [
        { step: 1, label: 'Identify Port', detail: 'netstat -ano shows connection to 185.220.101.5:443 owned by PID 3488.', status: 'alert' },
        { step: 2, label: 'Query Process', detail: 'Get-Process -Id 3488 reveals ProcessName: svchost_update.exe.', status: 'alert' },
        { step: 3, label: 'Locate Binary', detail: 'wmic process where ProcessId=3488 get ExecutablePath points to AppData.', status: 'alert' },
        { step: 4, label: 'Contain Host', detail: 'Stop-Process -Id 3488 -Force and isolate network interface.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match Triage Commands to Their Forensic Purpose',
      prompt: 'Pair each command with the investigative question it answers.',
      pairs: [
        { id: 'p1', left: 'netstat -ano (Windows) / ss -tulpn (Linux)', right: 'What network ports are open and which PIDs own them?' },
        { id: 'p2', left: 'Get-Process | Sort-Object CPU -Descending', right: 'Which processes are currently consuming the most system resources?' },
        { id: 'p3', left: 'Get-Service | Where-Object Status -eq "Running"', right: 'What background system services are actively executing?' },
        { id: 'p4', left: 'whoami /priv (Windows) / id (Linux)', right: 'What security privileges and tokens does this current user session possess?' }
      ],
      successFeedback: 'Outstanding! These commands are the daily workhorses of host-level security triage.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'Which Windows command provides the process ID (PID) associated with every active network connection?',
          options: [
            'ipconfig /all',
            'netstat -ano',
            'ping -t localhost',
            'dir C:\\Windows'
          ],
          correctIndex: 1,
          explanation: 'The "-o" switch in netstat displays the owning Process ID (PID) for each connection, enabling an analyst to correlate network traffic with a specific executable.'
        }
      ]
    }
  },

  'M01-U3-C2': {
    id: 'M01-U3-C2',
    moduleId: 'module-01',
    unitId: 'M01-U3',
    title: 'Users, hostnames and timestamps',
    duration: 13,
    mentor: 'ravi',
    story: 'Ravi stresses the golden rule of evidence: timestamps mean nothing unless you verify time zone offsets and host synchronizations (NTP).',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'Users (identities), hostnames (endpoints), and timestamps (time coordinates) form the core metadata triplets that ground every security event in physical reality.',
        whyL1NeedsIt: 'Correlating logs from a workstation in Bengaluru (UTC+5:30), a firewall in London (UTC+0), and a cloud server in Virginia (UTC-4) will completely fail if timestamps are not converted to UTC.',
        howItWorks: 'Network Time Protocol (NTP) synchronizes enterprise clocks. Standard SIEM pipelines normalize all incoming event timestamps into standardized ISO 8601 UTC format (YYYY-MM-DDTHH:MM:SSZ).',
        practicalExample: 'Alert ALT-2026-9042 reports failed logons at 03:32:00 UTC. An analyst looking at the local workstation clock (10:32 AM IST) must recognize that both timestamps represent the exact same millisecond.'
      },
      takeaways: [
        'Always convert local timestamps to Coordinated Universal Time (UTC) during triage.',
        'A single clock skew of 5 minutes can invert the cause-and-effect timeline of a breach.',
        'Verify hostnames carefully: BLR-BR-WS-04 vs BLR-BR-WS-04-old.'
      ]
    },
    visual: {
      title: 'Time Zone Normalization Pipeline',
      concept: 'Local Event Timestamps (IST, EST, BST) ➔ SIEM Ingestion ➔ Unified UTC Standard',
      description: 'See how log records across disparate time zones are aligned into a single truthful timeline.',
      takeaway: 'Accurate timelines require strict UTC normalization.',
      steps: [
        { step: 1, label: 'Workstation Event (IST)', detail: '09:02:00 AM IST (+05:30) recorded on BLR-BR-WS-04.', status: 'info' },
        { step: 2, label: 'Firewall Event (UTC)', detail: '03:32:00 AM UTC recorded on Mumbai perimeter edge.', status: 'info' },
        { step: 3, label: 'SIEM Normalization', detail: 'Converts all timestamps to 2026-10-13T03:32:00Z.', status: 'success' },
        { step: 4, label: 'Correlated Timeline', detail: 'Analyst observes exact synchronization across both log sources.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match Time Zone Coordinates to Standard UTC',
      prompt: 'Convert these regional timestamps to their corresponding UTC timeline equivalent.',
      pairs: [
        { id: 'p1', left: '10:32 AM IST (Indian Standard Time, UTC+5:30)', right: '05:02 AM UTC' },
        { id: 'p2', left: '09:02 AM IST (Indian Standard Time, UTC+5:30)', right: '03:32 AM UTC' },
        { id: 'p3', left: '08:00 AM EST (Eastern Standard Time, UTC-5:00)', right: '13:00 PM UTC' },
        { id: 'p4', left: '14:00 PM BST (British Summer Time, UTC+1:00)', right: '13:00 PM UTC' }
      ],
      successFeedback: 'Perfect conversion! You will never be tricked by time zone skews in timeline reconstruction.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'Why do enterprise SIEMs convert all incoming log timestamps to UTC (Coordinated Universal Time)?',
          options: [
            'To make the log files smaller in size',
            'To allow seamless correlation of events occurring across servers located in different geographic time zones',
            'Because UTC is the only time format supported by computer processors',
            'To prevent users from knowing when they logged on'
          ],
          correctIndex: 1,
          explanation: 'Standardizing on UTC creates a single, immutable chronological baseline across multi-region firewalls, endpoints, and cloud services.'
        }
      ]
    }
  },

  // =========================================================================
  // MODULE 02: NETWORKING FUNDAMENTALS
  // =========================================================================

  'M02-U1-C1': {
    id: 'M02-U1-C1',
    moduleId: 'module-02',
    unitId: 'M02-U1',
    title: 'IP addresses, masks and gateways',
    duration: 14,
    mentor: 'meera',
    story: 'Mentor Meera steps in to guide you through IP addressing, subnetting, and gateway routing across FinCorp branch offices.',
    theory: {
      duration: 14,
      subsections: {
        whatItIs: 'An IPv4 address (e.g. 10.10.20.15) uniquely identifies a host on a network. The subnet mask (/24 or 255.255.255.0) splits the address into Network ID and Host ID. The Default Gateway (10.10.20.1) routes traffic outside the local subnet.',
        whyL1NeedsIt: 'Every network alert lists Source and Destination IP addresses. An analyst must immediately recognize whether an IP is internal private RFC 1918 space, local branch, or public internet.',
        howItWorks: 'Private IP ranges defined in RFC 1918: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16 cannot be routed on the public internet. Communication beyond the local subnet requires Network Address Translation (NAT) via the gateway.',
        practicalExample: 'Workstation BLR-BR-WS-04 has IP 10.10.20.15 with mask /24. Its local subnet is 10.10.20.0 to 10.10.20.255. Any packet heading to 8.8.8.8 must be addressed at Layer 2 to gateway 10.10.20.1.'
      },
      takeaways: [
        'RFC 1918 ranges (10.x, 172.16-31.x, 192.168.x) are private internal networks.',
        'The default gateway is the exit door for all non-local traffic.',
        'Address Resolution Protocol (ARP) translates Layer 3 IPs into Layer 2 MAC addresses.'
      ]
    },
    visual: {
      title: 'Local Subnet vs Gateway Routing Flow',
      concept: 'Local Subnet Communication vs External Default Gateway Traversal',
      description: 'Observe how a packet determines whether to use local ARP or route via 10.10.20.1.',
      takeaway: 'Destination IP comparison against subnet mask dictates routing paths.',
      steps: [
        { step: 1, label: 'Host IP Check', detail: 'Source 10.10.20.15 compares destination 10.10.20.44 against /24 mask.', status: 'info' },
        { step: 2, label: 'Local Traffic', detail: 'Same subnet: sends ARP broadcast directly to resolve target MAC.', status: 'success' },
        { step: 3, label: 'External Traffic', detail: 'Target is 203.0.113.88 (external): frames packet to gateway 10.10.20.1 MAC.', status: 'alert' },
        { step: 4, label: 'Gateway NAT', detail: 'Router translates 10.10.20.15 to public branch IP and forwards over WAN.', status: 'info' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Classify IP Addresses: Private RFC 1918 vs Public Internet',
      prompt: 'Identify the routing scope of each IP address.',
      pairs: [
        { id: 'p1', left: '10.10.20.15 (Finance Workstation)', right: 'RFC 1918 Private: Class A private range, non-routable on public internet' },
        { id: 'p2', left: '172.16.50.1 (Data Center Core)', right: 'RFC 1918 Private: Class B private range (172.16.0.0/12)' },
        { id: 'p3', left: '192.168.1.1 (Home Office Router)', right: 'RFC 1918 Private: Class C private range' },
        { id: 'p4', left: '185.220.101.5 (External C2 Server)', right: 'Public Internet IP: Globally routable external destination' }
      ],
      successFeedback: 'Sharp eye! Instantly categorizing internal vs external IPs is crucial during triage.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'If workstation 10.10.20.15 wants to send a packet to 10.10.20.88 with subnet mask 255.255.255.0, does the packet pass through the default gateway?',
          options: [
            'Yes, all packets must pass through the default gateway regardless of destination',
            'No, because both IPs are on the same local subnet (/24); traffic is switched directly at Layer 2 using ARP',
            'Yes, but only if the firewall approves the DNS query first',
            'No, local traffic is routed across the public internet'
          ],
          correctIndex: 1,
          explanation: 'Hosts on the same IP subnet communicate directly via Layer 2 switching using ARP; the default gateway is only used when the destination is outside the local subnet.'
        }
      ]
    }
  },

  'M02-U1-C2': {
    id: 'M02-U1-C2',
    moduleId: 'module-02',
    unitId: 'M02-U1',
    title: 'Switches, routers and access points',
    duration: 14,
    mentor: 'meera',
    story: 'Meera breaks down the hardware forwarding engine: Layer 2 switches (MAC addresses), Layer 3 routers (IP addresses), and wireless access points.',
    theory: {
      duration: 14,
      subsections: {
        whatItIs: 'Switches operate at OSI Layer 2, forwarding Ethernet frames based on hardware MAC addresses. Routers operate at Layer 3, forwarding packets based on IP addresses. Access Points (APs) bridge 802.11 Wi-Fi frames into 802.3 wired Ethernet.',
        whyL1NeedsIt: 'Understanding device boundaries explains where security sensors are located. Network taps on a switch span port capture raw frames; router NetFlow exports connection statistics; wireless controllers log authentication MACs.',
        howItWorks: 'A switch maintains a CAM (Content Addressable Memory) table mapping MAC addresses to physical switch ports. Routers consult routing tables to determine the best next-hop interface.',
        practicalExample: 'When an unknown rogue device plugs into port 12 on the Bengaluru branch switch, port security automatically shuts the port down or flags an unfamiliar MAC address in syslog.'
      },
      takeaways: [
        'Switches forward via MAC addresses; routers forward via IP addresses.',
        'Switches isolate collision domains; routers isolate broadcast domains.',
        'Wireless traffic must pass through the access point and edge firewall before reaching internal servers.'
      ]
    },
    visual: {
      title: 'Enterprise Branch Forwarding Hierarchy',
      concept: 'Endpoints / Wi-Fi ➔ Access Switch (Layer 2) ➔ Branch Router/Firewall (Layer 3) ➔ WAN',
      description: 'Observe frame forwarding at Layer 2 transitioning to packet routing at Layer 3.',
      takeaway: 'Layer boundaries dictate visibility points for network monitoring.',
      steps: [
        { step: 1, label: 'Workstation / Laptop', detail: 'Generates Ethernet frame with Source MAC and Target IP.', status: 'info' },
        { step: 2, label: 'L2 Switch Port', detail: 'Looks up CAM table, forwards frame out port 48 toward gateway.', status: 'info' },
        { step: 3, label: 'L3 Edge Router', detail: 'Strips Layer 2 header, inspects IP destination, inspects ACL security policy.', status: 'alert' },
        { step: 4, label: 'VPN IPsec Tunnel', detail: 'Encrypts payload and transmits over WAN to CDAC Bengaluru core.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match Network Devices to Their Operational OSI Layer',
      prompt: 'Pair each device with its primary layer and addressing mechanism.',
      pairs: [
        { id: 'p1', left: 'Access Switch', right: 'Layer 2 (Data Link): Forwards Ethernet frames using MAC addresses' },
        { id: 'p2', left: 'Enterprise Router', right: 'Layer 3 (Network): Routes IP packets between different subnets' },
        { id: 'p3', left: 'Next-Gen Firewall (NGFW)', right: 'Layers 3-7: Inspects stateful connections, applications, and payloads' },
        { id: 'p4', left: 'Wireless Access Point (WAP)', right: 'Layer 2 Bridge: Translates 802.11 wireless frames to 802.3 wired Ethernet' }
      ],
      successFeedback: 'Exact! You understand the physical and logical flow of network frames.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'What table does an Ethernet switch consult to determine which physical port should receive a frame?',
          options: [
            'Routing Table',
            'CAM (Content Addressable Memory) / MAC Address Table',
            'DNS Cache Table',
            'Active Directory User Database'
          ],
          correctIndex: 1,
          explanation: 'Layer 2 switches maintain a MAC address table (CAM table) mapping learned MAC addresses to physical switch ports.'
        }
      ]
    }
  },

  'M02-U2-C1': {
    id: 'M02-U2-C1',
    moduleId: 'module-02',
    unitId: 'M02-U2',
    title: 'DNS and DHCP',
    duration: 13,
    mentor: 'meera',
    story: 'Mentor Meera covers the two essential network services: DHCP (leases IP addresses) and DNS (resolves names to numbers). Both are prime targets for attackers.',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'DHCP (Dynamic Host Configuration Protocol) assigns IP addresses, subnet masks, and DNS servers dynamically via the DORA process (Discover, Offer, Request, Acknowledge). DNS (Domain Name System) translates human domain names (fincorp.internal) into IP addresses (10.10.40.10).',
        whyL1NeedsIt: 'Attackers cannot memorize IP addresses; they use DNS to contact Command and Control (C2) servers. Monitoring DNS queries exposes malware beaconing, domain generation algorithms (DGA), and data exfiltration via DNS tunneling.',
        howItWorks: 'DNS queries default to UDP port 53. If a response exceeds 512 bytes or during zone transfers, it uses TCP 53. DNS records include A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), and TXT (metadata).',
        practicalExample: 'On workstation BLR-BR-WS-04, an analyst spots a DNS query for v9x7a2q9-exfil.attacker-domain.com with a 200-character TXT string. This is a classic DNS tunneling exfiltration pattern.'
      },
      takeaways: [
        'DHCP DORA logs connect temporary IP addresses to specific hardware MACs over time.',
        'DNS queries reveal outbound intent before a TCP connection even begins.',
        'Abnormally long subdomains or high-frequency TXT lookups indicate DNS tunneling.'
      ]
    },
    visual: {
      title: 'DNS Query Lifecycle & C2 Tunneling Anomaly',
      concept: 'Legitimate Corporate Resolution vs Covert Adversary DNS Tunneling',
      description: 'Observe how malware exploits UDP port 53 to sneak data past firewalls.',
      takeaway: 'DNS inspection is one of the highest-value telemetry sources in the SOC.',
      steps: [
        { step: 1, label: 'Legitimate Query', detail: 'Workstation queries fincorp.internal -> Branch DNS returns 10.10.40.10.', status: 'success' },
        { step: 2, label: 'Malware Query', detail: 'Query for base64_data.malicious-c2.net forwarded through branch DNS.', status: 'alert' },
        { step: 3, label: 'Authoritative C2 DNS', detail: 'Attacker DNS server receives base64 chunk without direct TCP connection.', status: 'alert' },
        { step: 4, label: 'SOC Detection', detail: 'Suricata rule flags high entropy and excessive query length on UDP 53.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match DNS Record Types to Their Functions',
      prompt: 'Pair each DNS record type with the data it resolves.',
      pairs: [
        { id: 'p1', left: 'A Record', right: 'Maps a hostname to an IPv4 address (e.g. fincorp.com -> 10.10.20.1)' },
        { id: 'p2', left: 'AAAA Record', right: 'Maps a hostname to a 128-bit IPv6 address' },
        { id: 'p3', left: 'MX Record', right: 'Directs incoming email traffic to designated Mail Exchange servers' },
        { id: 'p4', left: 'TXT Record', right: 'Holds text metadata; used for SPF/DKIM email validation or abused for tunneling' }
      ],
      successFeedback: 'Great work! You understand how DNS infrastructure underpins enterprise operations.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'Why do adversaries frequently use DNS queries (port 53) to exfiltrate stolen credentials or communicate with C2 servers?',
          options: [
            'Because DNS is faster than fiber optic cables',
            'Because outbound UDP port 53 is almost universally permitted through enterprise firewalls for name resolution',
            'Because DNS encrypts all data automatically with quantum keys',
            'Because DNS servers cannot record log files'
          ],
          correctIndex: 1,
          explanation: 'Firewalls frequently permit outbound DNS to ensure internal name resolution works, making port 53 a popular covert channel for adversaries.'
        }
      ]
    }
  },

  'M02-U2-C2': {
    id: 'M02-U2-C2',
    moduleId: 'module-02',
    unitId: 'M02-U2',
    title: 'Ports, TCP and UDP',
    duration: 13,
    mentor: 'meera',
    story: 'Meera inspects Layer 4 transport protocols: reliable connection-oriented TCP (3-way handshake) versus lightweight connectionless UDP.',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'Transport layer protocols direct data to specific applications using 16-bit Port Numbers (0-65535). Well-known ports (0-1023) identify standard services: HTTP (80), HTTPS (443), SSH (22), RDP (3389), SMB (445).',
        whyL1NeedsIt: 'Network alerts flag unusual port combinations. Seeing port 445 (SMB) attempting outbound communication across the internet indicates WannaCry-style lateral worm spread or NTLM credential relaying.',
        howItWorks: 'TCP establishes a connection using the 3-Way Handshake: SYN ➔ SYN-ACK ➔ ACK. If a port is closed, the target responds with RST. UDP sends datagrams without handshakes or delivery confirmation.',
        practicalExample: 'When analyzing a port scan against BLR-BR-WS-04, Meera observes a rapid flood of TCP SYN packets sent to ports 21, 22, 23, 80, 443, 445, and 3389 with no subsequent ACK flags completed.'
      },
      takeaways: [
        'TCP uses SYN ➔ SYN-ACK ➔ ACK to establish reliable stateful sessions.',
        'Well-known ports (22, 53, 80, 443, 445, 3389) pinpoint the target service.',
        'SYN flood without ACKs is the classic signature of an active port scan.'
      ]
    },
    visual: {
      title: 'The TCP Three-Way Handshake vs Port Scan',
      concept: 'SYN ➔ SYN-ACK ➔ ACK Connection vs Stealth SYN Port Probe',
      description: 'Observe how a completed connection differs from an incomplete port scan probe.',
      takeaway: 'Packet flags expose whether an attack was an initial scan or an active payload session.',
      steps: [
        { step: 1, label: 'Client SYN', detail: 'Client sends SYN packet with Initial Sequence Number (ISN).', status: 'info' },
        { step: 2, label: 'Server SYN-ACK', detail: 'Server acknowledges and sends its own SYN sequence number.', status: 'info' },
        { step: 3, label: 'Client ACK', detail: 'Client confirms; connection established; data transfer begins.', status: 'success' },
        { step: 4, label: 'Scan Variation (RST)', detail: 'Scanner sends RST after SYN-ACK to avoid completing connection log.', status: 'alert' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match Common Service Ports to Their Operational Identities',
      prompt: 'Connect each standard port number to its enterprise application.',
      pairs: [
        { id: 'p1', left: 'Port 445 (TCP)', right: 'Server Message Block (SMB): Windows file sharing, lateral movement vector' },
        { id: 'p2', left: 'Port 3389 (TCP)', right: 'Remote Desktop Protocol (RDP): Windows graphical remote administration' },
        { id: 'p3', left: 'Port 22 (TCP)', right: 'Secure Shell (SSH): Encrypted Linux terminal and file transfer' },
        { id: 'p4', left: 'Port 53 (UDP/TCP)', right: 'Domain Name System (DNS): Domain name and IP address resolution' }
      ],
      successFeedback: 'Spot on! Port recognition is automatic second nature for Tier 1 analysts.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'What is the correct sequence of TCP flags exchanged during a standard three-way connection handshake?',
          options: [
            'ACK ➔ FIN ➔ RST',
            'SYN ➔ SYN-ACK ➔ ACK',
            'PING ➔ PONG ➔ ECHO',
            'HELO ➔ MAIL FROM ➔ RCPT TO'
          ],
          correctIndex: 1,
          explanation: 'TCP connections require three steps: client sends SYN, server replies with SYN-ACK, client acknowledges with ACK.'
        }
      ]
    }
  },

  'M02-U3-C1': {
    id: 'M02-U3-C1',
    moduleId: 'module-02',
    unitId: 'M02-U3',
    title: 'Small branch: staff devices, switch, router/firewall, Wi-Fi and shared services',
    duration: 13,
    mentor: 'meera',
    story: 'Meera walks you through the Small Branch Architecture topology: staff laptops, L2 switch, Wi-Fi, shared printer, and the edge router/firewall (10.10.20.1).',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'A small branch office operates a single unified subnet (e.g. 10.10.20.0/24). All client endpoints, wireless APs, and shared network printers connect into a single Layer 2 switch with an edge firewall gateway (10.10.20.1).',
        whyL1NeedsIt: 'In a flat /24 network, any compromised laptop can directly ARP poison, sniff, or scan every other device in the office because there are no internal firewall barriers between them.',
        howItWorks: 'Devices share the broadcast domain. Staff connect via wired Ethernet or WAP. The edge router provides DHCP leases, acts as local DNS relay, and terminates an IPsec VPN tunnel back to the CDAC Bengaluru Central Data Center.',
        practicalExample: 'On workstation BLR-BR-WS-04 (10.10.20.15), an attacker launching an SMB scan reaches the branch printer at 10.10.20.4 and colleague laptops on the same switch without crossing the 10.10.20.1 router.'
      },
      takeaways: [
        'Small branch networks typically run a flat /24 subnet with shared broadcast domain.',
        'Without VLAN segmentation, lateral movement between endpoints faces zero network barriers.',
        'The edge router/firewall (10.10.20.1) is the sole inspection point for traffic leaving the branch.'
      ]
    },
    visual: {
      title: 'Small Branch Office Network Architecture',
      concept: 'Flat 10.10.20.0/24 Subnet ➔ Access Switch ➔ Gateway 10.10.20.1 ➔ HQ VPN',
      description: 'Observe the topology of a small branch office and the vulnerability of unsegmented subnets.',
      takeaway: 'Flat subnets allow frictionless lateral movement between internal peers.',
      visualType: 'small_branch_diagram',
      steps: [
        { step: 1, label: 'Workstations', detail: 'Endpoints 10.10.20.10 - 10.10.20.99 connected to 48-port switch.', status: 'info' },
        { step: 2, label: 'Shared Devices', detail: 'Branch printer 10.10.20.4 and WAP 10.10.20.3 on same broadcast domain.', status: 'info' },
        { step: 3, label: 'Lateral Risk', detail: 'Attacker on WS-04 directly scans peer laptop without gateway inspection.', status: 'alert' },
        { step: 4, label: 'Edge Router/FW', detail: 'Gateway 10.10.20.1 inspects and encrypts outbound traffic to Central HQ.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Identify Small Branch Components & Roles',
      prompt: 'Match each component of the FinCorp Small Branch to its network specification.',
      pairs: [
        { id: 'p1', left: '10.10.20.1', right: 'Edge Router / Firewall Gateway: Terminates IPsec VPN to HQ' },
        { id: 'p2', left: '10.10.20.15', right: 'BLR-BR-WS-04: Assigned finance workstation of Ramesh Sundaram' },
        { id: 'p3', left: '10.10.20.4', right: 'Shared Network Printer & Scanner (JetDirect port 9100)' },
        { id: 'p4', left: '10.10.20.3', right: 'Branch Wi-Fi Access Point (SSID: FinCorp-Staff-Secure)' }
      ],
      successFeedback: 'Perfect! You have memorized the small branch topology layout.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'What is the primary architectural security vulnerability of a flat /24 small branch office network?',
          options: [
            'The internet runs at half speed',
            'Lack of internal VLAN segmentation allows an infected endpoint to communicate directly with all peers without firewall inspection',
            'Passwords cannot be longer than 8 characters',
            'Printers cannot receive print jobs'
          ],
          correctIndex: 1,
          explanation: 'In a flat network, all devices share the broadcast domain; inter-host traffic is switched directly at Layer 2, bypassing the edge firewall.'
        }
      ]
    }
  },

  'M02-U3-C2': {
    id: 'M02-U3-C2',
    moduleId: 'module-02',
    unitId: 'M02-U3',
    title: 'Larger branch: VLANs, multiple access switches, server/network segments and central connectivity',
    duration: 13,
    mentor: 'meera',
    story: 'Meera introduces the Larger Regional Branch architecture: segmented VLANs (10, 20, 40, 99), 802.1Q trunking, multiple switches, and Next-Gen Firewall routing.',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'A larger regional branch splits devices into Virtual LANs (VLANs): VLAN 10 (General Staff), VLAN 20 (Finance/Operations), VLAN 40 (Local Servers/DMZ), and VLAN 99 (Management). An 802.1Q trunk carries tagged traffic to a Next-Gen Firewall (NGFW).',
        whyL1NeedsIt: 'VLAN segmentation stops lateral movement. An infected workstation in VLAN 10 cannot connect to a finance server in VLAN 20 unless an explicit firewall security rule permits it.',
        howItWorks: 'Switches tag Ethernet frames with a 12-bit VLAN ID header (802.1Q). Inter-VLAN communication must pass through the Layer 3 firewall gate, where IPS sensors, antivirus, and connection logs inspect every packet.',
        practicalExample: 'At CDAC Bengaluru, employee FIN-OPS-01 sits in VLAN 20 (10.10.20.0/24). If an attacker compromises a general desk in VLAN 10 (10.10.10.0/24) and attempts to probe BLR-BR-WS-04, the NGFW drops the packet and generates a security alert.'
      },
      takeaways: [
        'VLANs isolate broadcast domains and enforce zero-trust boundaries inside the branch.',
        '802.1Q trunk ports multiplex multiple VLANs across a single physical link.',
        'Inter-VLAN routing forces all lateral traffic through stateful firewall inspection.'
      ]
    },
    visual: {
      title: 'Larger Branch Segmented VLAN Architecture',
      concept: 'VLAN 10 / 20 / 40 / 99 ➔ 802.1Q Trunk ➔ Next-Gen Firewall Inspection Gate',
      description: 'Observe how 802.1Q tagging isolates finance workstations from general traffic.',
      takeaway: 'Segmentation transforms an open internal network into guarded security zones.',
      visualType: 'large_branch_vlans',
      steps: [
        { step: 1, label: 'VLAN 10 (Staff)', detail: 'Subnet 10.10.10.0/24: Standard staff laptops and guest devices.', status: 'info' },
        { step: 2, label: 'VLAN 20 (Finance)', detail: 'Subnet 10.10.20.0/24: High-value endpoints including BLR-BR-WS-04.', status: 'alert' },
        { step: 3, label: '802.1Q Trunk', detail: 'Carries tagged frames from access switches to FortiGate NGFW cluster.', status: 'info' },
        { step: 4, label: 'Firewall Gate', detail: 'Strict ACL blocks unauthorized cross-VLAN connections and alerts SOC.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match Enterprise VLANs to Their Security Roles',
      prompt: 'Assign each FinCorp VLAN segment to its operational purpose.',
      pairs: [
        { id: 'p1', left: 'VLAN 10 (10.10.10.0/24)', right: 'General Staff Workstations: Outbound web proxy only, no direct access to servers' },
        { id: 'p2', left: 'VLAN 20 (10.10.20.0/24)', right: 'Finance & Operations: Restricted high-security zone for accounting and wire processing' },
        { id: 'p3', left: 'VLAN 40 (10.10.40.0/24)', right: 'Local Branch Servers: Local domain replica, print spoolers, file repositories' },
        { id: 'p4', left: 'VLAN 99 (10.10.99.0/24)', right: 'Out-of-Band Management: Switch/router console interfaces, SSH only from SOC jumpbox' }
      ],
      successFeedback: 'Brilliant! You grasp why enterprise networks segment finance from general staff.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'How does 802.1Q VLAN trunking enforce security between different department subnets?',
          options: [
            'It physically unplugs the network cables when staff go home',
            'It injects a 4-byte tag with a VLAN ID into the Ethernet frame, ensuring packets cannot cross between VLANs without passing through a Layer 3 firewall policy',
            'It changes all user passwords every 10 minutes',
            'It converts wired Ethernet into Wi-Fi radio waves'
          ],
          correctIndex: 1,
          explanation: '802.1Q tagging tags frames with their designated VLAN ID; traffic between different VLANs must be routed by a firewall or Layer 3 switch with explicit access control lists.'
        }
      ]
    }
  },

  // =========================================================================
  // MODULE 03: CYBERSECURITY FUNDAMENTALS
  // =========================================================================

  'M03-U1-C1': {
    id: 'M03-U1-C1',
    moduleId: 'module-03',
    unitId: 'M03-U1',
    title: 'Assets, threats and vulnerabilities',
    duration: 14,
    mentor: 'karthik',
    story: 'Mentor Karthik lays the theoretical groundwork of cyber defense: understanding what you are protecting (Assets), who attacks it (Threats), and the flaws they exploit (Vulnerabilities).',
    theory: {
      duration: 14,
      subsections: {
        whatItIs: 'An Asset is any entity of value (data, servers, endpoints, brand reputation). A Threat is any circumstance or agent capable of causing harm. A Vulnerability is a weakness in software, hardware, or process that a threat can exploit.',
        whyL1NeedsIt: 'A vulnerability without a threat produces zero alerts. A threat without a vulnerability produces blocked attempts. Security incidents happen at the intersection: when an active threat weaponizes a known vulnerability against an asset.',
        howItWorks: 'Defenders maintain asset inventories (CMDB) and track Common Vulnerabilities and Exposures (CVEs) scored by the Common Vulnerability Scoring System (CVSS v3.1: 0.0 to 10.0).',
        practicalExample: 'Asset: FinCorp Core Banking Database. Vulnerability: Unpatched Log4j (CVE-2021-44228, CVSS 10.0). Threat: External ransomware group scanning public IP space. Incident: Remote code execution triggered.'
      },
      takeaways: [
        'Risk occurs at the intersection of Asset, Threat, and Vulnerability.',
        'You cannot defend what you do not know: complete asset inventories are mandatory.',
        'CVSS scores (Low, Medium, High, Critical) help prioritize patch management and triage.'
      ]
    },
    visual: {
      title: 'The Security Intersection: Risk & Exploit',
      concept: 'Asset Value + Threat Agent + Unpatched Vulnerability = Security Incident',
      description: 'Observe how a vulnerability only manifests as an active alert when a threat agent attacks it.',
      takeaway: 'Mitigating vulnerabilities breaks the chain before a threat succeeds.',
      steps: [
        { step: 1, label: 'Enterprise Asset', detail: 'Customer financial account records on BLR-SRV-DB01.', status: 'info' },
        { step: 2, label: 'Known Vulnerability', detail: 'Outdated Apache server with unpatched remote code execution flaw.', status: 'alert' },
        { step: 3, label: 'Threat Actor Probe', detail: 'Automated internet scanner sends crafted exploit payload.', status: 'alert' },
        { step: 4, label: 'Defensive Mitigation', detail: 'Perimeter WAF blocks pattern or patch eliminates vulnerable code.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Classify Security Concepts: Asset, Threat, or Vulnerability',
      prompt: 'Categorize each item correctly.',
      pairs: [
        { id: 'p1', left: 'Unencrypted backup hard drive left in unlocked conference room', right: 'Vulnerability: Physical weakness allowing unauthorized data access' },
        { id: 'p2', left: 'FinCorp Customer Credit Card & Banking Database', right: 'Asset: High-value enterprise data requiring strict confidentiality' },
        { id: 'p3', left: 'Organized cybercrime group targeting financial institutions with phishing', right: 'Threat Actor: Capable adversary motivated to breach systems' },
        { id: 'p4', left: 'Buffer overflow bug in unpatched VPN gateway firmware (CVE-2024-21887)', right: 'Vulnerability: Software flaw allowing arbitrary remote code execution' }
      ],
      successFeedback: 'Sharp analysis! Clear conceptual definitions keep security investigations grounded.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'What defines a cybersecurity vulnerability?',
          options: [
            'A skilled hacker working for a foreign intelligence agency',
            'A flaw or weakness in software, hardware, or human process that can be exploited by a threat',
            'A backup hard drive stored in a fireproof safe',
            'A high-speed fiber internet cable'
          ],
          correctIndex: 1,
          explanation: 'A vulnerability is a defect, flaw, or misconfiguration that creates an opportunity for a threat actor to compromise the system.'
        }
      ]
    }
  },

  'M03-U1-C2': {
    id: 'M03-U1-C2',
    moduleId: 'module-03',
    unitId: 'M03-U1',
    title: 'Risk, impact and likelihood',
    duration: 14,
    mentor: 'karthik',
    story: 'Karthik breaks down quantitative and qualitative risk formulas: Risk = Likelihood × Impact. L1 analysts use this to decide triage urgency.',
    theory: {
      duration: 14,
      subsections: {
        whatItIs: 'Risk is the potential for loss or damage. Likelihood represents the probability of a threat exploiting a vulnerability. Impact represents the severity of business, legal, or operational harm if the event occurs.',
        whyL1NeedsIt: 'A SOC receives 500 alerts an hour. You cannot investigate them in random order. An alert affecting a critical wire-transfer server (High Impact) takes precedence over an adware alert on a test machine (Low Impact).',
        howItWorks: 'Risk matrices calculate priority: Low, Medium, High, Critical. High Likelihood + High Impact = Immediate Sev-1 Escalation (SLA: 15 minutes). Low Impact + Low Likelihood = Automated Ticket Logging.',
        practicalExample: 'Alert on FIN-OPS-01 (wire transfer endpoint): Likelihood is Medium (5 failed attempts), but Impact is High (financial fraud). Overall Risk is elevated to High, requiring immediate analyst claiming.'
      },
      takeaways: [
        'Risk = Likelihood × Impact governs alert priority queues.',
        'Assets handling financial transactions or PII carry inherently higher impact.',
        'SLA timers (MTTA) scale with calculated alert severity.'
      ]
    },
    visual: {
      title: 'The SOC Risk & Prioritization Matrix',
      concept: 'Likelihood (Rare to Definite) vs Impact (Negligible to Catastrophic)',
      description: 'See where incoming security alerts land on the operational triage matrix.',
      takeaway: 'Severity drives urgency and escalation timelines.',
      steps: [
        { step: 1, label: 'Negligible Impact', detail: 'Routine adware cookie on guest Wi-Fi: Low priority ticket.', status: 'info' },
        { step: 2, label: 'Moderate Impact', detail: 'Single failed SSH logon on internal staging server: Medium priority.', status: 'info' },
        { step: 3, label: 'High Impact / High Likelihood', detail: 'Burst failed logons on Finance Workstation WS-04: High priority alert.', status: 'alert' },
        { step: 4, label: 'Critical Incident', detail: 'Active ransomware payload encrypting core database: Sev-1 War Room.', status: 'alert' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Prioritize Alert Scenarios by Operational Risk',
      prompt: 'Match each security alert to its appropriate triage priority level.',
      pairs: [
        { id: 'p1', left: 'Active mimikatz credential dumping detected on Primary Domain Controller', right: 'Critical (Sev-1): Maximum impact, immediate enterprise domain takeover threat' },
        { id: 'p2', left: 'Burst of 5 failed logons on finance workstation BLR-BR-WS-04', right: 'High (Sev-2): High value target, potential brute force or password spray' },
        { id: 'p3', left: 'Port scan originating from external scanner hitting blocked perimeter firewall port', right: 'Low (Sev-4): Standard internet background noise, successfully blocked' },
        { id: 'p4', left: 'Single user reporting a suspicious email in Outlook with a PDF attachment', right: 'Medium (Sev-3): Potential phishing lure, requires sandbox detonated analysis' }
      ],
      successFeedback: 'Masterful triage prioritization! You know exactly which fires to fight first.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'If an alert indicates an external script kid is scanning a completely blocked firewall port, how would you evaluate its risk?',
          options: [
            'Maximum Critical Sev-1: Call the CEO immediately',
            'Low Risk: High likelihood of scanning, but near-zero impact because the perimeter firewall is actively dropping the packets',
            'High Risk: The firewall must be reinstalled',
            'Medium Risk: Disconnect all branch internet cables'
          ],
          correctIndex: 1,
          explanation: 'Routine automated scanning against closed/blocked ports has minimal impact, resulting in low overall risk.'
        }
      ]
    }
  },

  'M03-U2-C1': {
    id: 'M03-U2-C1',
    moduleId: 'module-03',
    unitId: 'M03-U2',
    title: 'Phishing and credential attacks',
    duration: 13,
    mentor: 'karthik',
    story: 'Karthik dissects social engineering and credential attacks: deceptive email lures, credential harvesting portals, password spraying, and brute force bursts.',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'Phishing tricks users into revealing credentials or running malware via deceptive emails. Credential attacks include Brute Force (trying many passwords against one user), Password Spraying (trying one common password across many users), and Credential Stuffing (using leaked credential dumps).',
        whyL1NeedsIt: 'Over 80% of enterprise breaches originate with compromised credentials or phishing emails. L1 analysts are on the frontline reviewing reported emails and authentication burst alerts.',
        howItWorks: 'Phishing emails forge sender displays, use lookalike domains (typosquatting: f1ncorp.com), and attach weaponized Office docs or links to fake Single Sign-On (SSO) login portals.',
        practicalExample: 'Alert ALT-2026-9042 flags 5 failed logon attempts on FIN-OPS-01 within 60 seconds. An analyst must determine if this is an external brute-force spray or a local cached credential glitch.'
      },
      takeaways: [
        'Password spraying uses one password against hundreds of accounts to evade lockout limits.',
        'Brute force targets a single account with rapid repeated password attempts.',
        'Inspect email headers: sender address vs reply-to, SPF/DKIM validation, and lookalike domains.'
      ]
    },
    visual: {
      title: 'Credential Attack Mechanisms Compared',
      concept: 'Brute Force (Vertical) vs Password Spraying (Horizontal)',
      description: 'See how attackers evade traditional account lockout policies using password spraying.',
      takeaway: 'Password sprays hide beneath alert thresholds by attacking horizontally.',
      steps: [
        { step: 1, label: 'Brute Force', detail: 'Target: UserA -> Pass1, Pass2, Pass3... Locks account after 5 tries.', status: 'alert' },
        { step: 2, label: 'Lockout Trigger', detail: 'Event 4625 burst -> Alert fires immediately to L1 queue.', status: 'info' },
        { step: 3, label: 'Password Spray', detail: 'Pass: Summer2026! tested against UserA, UserB, UserC... spaced 30m apart.', status: 'alert' },
        { step: 4, label: 'Stealth Bypass', detail: 'No individual account locks out; detected only by aggregate SIEM rules.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Identify Credential Attack Techniques',
      prompt: 'Match each observed authentication pattern to its technical attack name.',
      pairs: [
        { id: 'p1', left: '100 failed logins in 2 minutes against single account "Administrator"', right: 'Dictionary / Brute Force Attack: Rapid vertical guessing against one target' },
        { id: 'p2', left: '1 failed login each across 500 different corporate users testing "Winter2026!"', right: 'Password Spraying Attack: Horizontal testing to evade lockout thresholds' },
        { id: 'p3', left: 'Automated login attempts using username/password pairs from an external database dump', right: 'Credential Stuffing Attack: Replaying credentials breached at third-party sites' },
        { id: 'p4', left: 'User receives email from "support@f1ncorp.com" with a link to a fake login portal', right: 'Phishing / Typosquatting: Social engineering lure to harvest user credentials' }
      ],
      successFeedback: 'Sharp identification! Distinguishing brute force from password sprays is critical for detection tuning.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'Why do modern adversaries prefer password spraying over traditional brute-force attacks?',
          options: [
            'Password spraying automatically hacks the firewall hardware',
            'Password spraying tries one common password across many accounts, avoiding account lockout thresholds on any single user',
            'Brute force requires too much electricity',
            'Password spraying only works on Linux servers'
          ],
          correctIndex: 1,
          explanation: 'Enterprise accounts lock out after 3-5 failed attempts; password spraying tests one password across thousands of accounts with long delays to remain undetected.'
        }
      ]
    }
  },

  'M03-U2-C2': {
    id: 'M03-U2-C2',
    moduleId: 'module-03',
    unitId: 'M03-U2',
    title: 'Malware, insider and network threats',
    duration: 13,
    mentor: 'karthik',
    story: 'Karthik covers the spectrum of threats: autonomous malware, malicious and accidental insiders, and stealth network intrusions.',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'Malware includes Ransomware (encrypts data for extortion), Trojans (disguised tools with backdoors), Worms (self-propagating), and Info-stealers. Insider threats arise from trusted employees abusing privileges. Network threats involve man-in-the-middle attacks and rogue perimeter listeners.',
        whyL1NeedsIt: 'Different threats demand completely different operational responses. Ransomware requires immediate host network isolation. An insider threat requires silent logging and HR/Legal notification without tipping off the suspect.',
        howItWorks: 'Ransomware deletes Volume Shadow Copies (vssadmin delete shadows) and encrypts disk blocks using AES/RSA. Insiders download bulk customer records to personal USB drives or personal cloud accounts.',
        practicalExample: 'When an endpoint alerts on vssadmin.exe delete shadows /all /quiet, an L1 analyst immediately isolates the machine via EDR to prevent file encryption from spreading to shared branch network drives.'
      },
      takeaways: [
        'Ransomware commands (vssadmin delete shadows) require immediate emergency network isolation.',
        'Insider threats involve legitimate credentials used in anomalous ways (bulk downloads, off-hours).',
        'Worms self-propagate across network shares using SMB or unpatched service exploits.'
      ]
    },
    visual: {
      title: 'Ransomware Attack Kill Chain Progression',
      concept: 'Initial Execution ➔ Shadow Copy Deletion ➔ Key Negotiation ➔ Bulk Encryption',
      description: 'Observe the telltale signs of active ransomware detonation on an endpoint.',
      takeaway: 'Containment within the first 60 seconds prevents total enterprise data loss.',
      steps: [
        { step: 1, label: 'Execution', detail: 'Payload unrolls in memory; executes whoami and system discovery.', status: 'info' },
        { step: 2, label: 'Defense Evasion', detail: 'Executes vssadmin delete shadows /all /quiet to destroy recovery snapshots.', status: 'alert' },
        { step: 3, label: 'Host Encryption', detail: 'Rapid multi-threaded file renaming with .locked or .crypted extensions.', status: 'alert' },
        { step: 4, label: 'L1 Immediate Action', detail: 'Analyst triggers EDR Network Isolation to sever lateral spread.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match Threat Types to Their Definitive Characteristics',
      prompt: 'Pair each cyber threat category with its primary operational signature.',
      pairs: [
        { id: 'p1', left: 'Ransomware', right: 'Deletes shadow copies, encrypts filesystem, leaves extortion ransom note' },
        { id: 'p2', left: 'Information Stealer', right: 'Harvests browser cookies, saved passwords, and crypto wallets, exfiltrates to C2' },
        { id: 'p3', left: 'Malicious Insider', right: 'Authorized employee using legitimate rights to download proprietary databases before resignation' },
        { id: 'p4', left: 'Network Worm', right: 'Self-propagating code scanning internal subnets to exploit vulnerable network services (e.g. MS17-010)' }
      ],
      successFeedback: 'Exact! You understand the operational taxonomy of modern threats.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'If you observe an endpoint executing "vssadmin.exe delete shadows /all /quiet", what should be your immediate first action as an L1 analyst?',
          options: [
            'Send an email to the user asking if they meant to delete their backups',
            'Immediately isolate the endpoint from the network via EDR to halt active ransomware execution',
            'Wait until the end of your shift to log a ticket',
            'Reboot the computer'
          ],
          correctIndex: 1,
          explanation: 'vssadmin delete shadows is the universal precursor to ransomware encryption; immediate network containment is critical to prevent lateral encryption of network shares.'
        }
      ]
    }
  },

  'M03-U3-C1': {
    id: 'M03-U3-C1',
    moduleId: 'module-03',
    unitId: 'M03-U3',
    title: 'Prevention, detection and response',
    duration: 13,
    mentor: 'karthik',
    story: 'Karthik breaks down the tripartite defensive control continuum: Preventative locks, Detective alarms, and Responsive extinguishers.',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'Preventative controls stop attacks before execution (firewalls, MFA, antivirus blocking). Detective controls identify attacks that bypass prevention (SIEM rules, EDR behavioral alerts, honeypots). Responsive controls contain and remediate active incidents (host isolation, password resets, firewall blacklisting).',
        whyL1NeedsIt: 'L1 analysts live primarily in the Detective and initial Responsive phases. Believing prevention is 100% effective breeds complacency; assumed breach philosophy demands vigilant detection.',
        howItWorks: 'Security posture is measured across: Mean Time to Detect (MTTD), Mean Time to Acknowledge (MTTA), and Mean Time to Respond/Remediate (MTTR).',
        practicalExample: 'Preventative control: MFA blocks an attacker with a stolen password. Detective control: SIEM alerts on 10 repeated MFA push denials. Responsive control: Analyst temporarily disables the user account.'
      },
      takeaways: [
        'Prevention will eventually fail: resilient security relies on rapid detection and response.',
        'L1 analysts are the operational core of the Detective and first-response loop.',
        'MTTA (Mean Time to Acknowledge) and MTTR measure SOC operational effectiveness.'
      ]
    },
    visual: {
      title: 'The Defensive Control Triad',
      concept: 'Prevent (The Lock) ➔ Detect (The Alarm) ➔ Respond (The Containment)',
      description: 'See how the three control classes work in continuous harmony.',
      takeaway: 'Detection without response is useless; prevention without detection is naive.',
      steps: [
        { step: 1, label: 'Prevention', detail: 'Edge firewall blocks untrusted ports; EDR blocks known malware hashes.', status: 'info' },
        { step: 2, label: 'Detection', detail: 'SIEM rule correlates subtle anomalous behavior and triggers ticket ALT-9042.', status: 'alert' },
        { step: 3, label: 'Triage Verification', detail: 'L1 analyst validates entity context and confirms unauthorized execution.', status: 'info' },
        { step: 4, label: 'Response', detail: 'Revoke Kerberos session tickets and isolate compromised workstation.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Classify Controls: Preventative, Detective, or Responsive',
      prompt: 'Assign each security measure to its operational control category.',
      pairs: [
        { id: 'p1', left: 'Web Application Firewall (WAF) dropping SQL injection requests', right: 'Preventative Control: Blocks malicious payload before reaching server' },
        { id: 'p2', left: 'SIEM correlation rule alerting on 15 failed logons within 60 seconds', right: 'Detective Control: Identifies anomalous pattern from recorded log records' },
        { id: 'p3', left: 'Analyst clicking "Isolate Host from Network" inside the EDR console', right: 'Responsive Control: Active containment measure mitigating further spread' },
        { id: 'p4', left: 'Canary token / honeypot file that alerts when opened by an intruder', right: 'Detective Control: Tripwire sensor exposing unauthorized directory access' }
      ],
      successFeedback: 'Outstanding classification! You grasp how defense in depth layers together.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'In modern cybersecurity operations, why is detection and response considered just as vital as preventative controls?',
          options: [
            'Because preventative controls do not require electricity',
            'Because zero-day exploits, stolen credentials, and human error inevitably bypass preventative defenses',
            'Because detection tools are cheaper than firewalls',
            'Because preventative controls are no longer used by enterprises'
          ],
          correctIndex: 1,
          explanation: 'No preventative barrier is 100% impenetrable; assumed breach philosophy recognizes that stealth adversaries will bypass perimeter locks, requiring rapid detection and response.'
        }
      ]
    }
  },

  'M03-U3-C2': {
    id: 'M03-U3-C2',
    moduleId: 'module-03',
    unitId: 'M03-U3',
    title: 'Least privilege and defense in depth',
    duration: 13,
    mentor: 'karthik',
    story: 'Karthik concludes Module 03 with the two golden maxims of cybersecurity architecture: The Principle of Least Privilege and Defense in Depth.',
    theory: {
      duration: 13,
      subsections: {
        whatItIs: 'Least Privilege mandates that every user, process, and system possesses only the minimum necessary rights required to perform its valid task. Defense in Depth (layered defense) deploys multiple overlapping controls so that the failure of one barrier does not result in total compromise.',
        whyL1NeedsIt: 'When an employee workstation is compromised, least privilege stops the attacker from immediately modifying system drivers or dumping local SAM hashes. Defense in depth ensures that if the firewall fails, EDR catches the payload; if EDR misses, network segmentation limits the blast radius.',
        howItWorks: 'Layers include: Perimeter (NGFW/WAF), Network (VLANs, 802.1Q), Endpoint (EDR, BitLocker, AppLocker), Application (WAF, code reviews), Data (Encryption, DLP), and Identity (MFA, RBAC, Privileged Access Management).',
        practicalExample: 'On BLR-BR-WS-04, user FIN-OPS-01 is a standard user, not a Local Administrator. When a malicious email macro executes, Windows UAC blocks it from writing to C:\\Windows\\System32, preventing kernel rootkit installation.'
      },
      takeaways: [
        'Least privilege prevents standard user compromises from becoming instant domain takeovers.',
        'Defense in depth ensures no single point of security failure compromises the enterprise.',
        'Never rely on a single defensive tool: layer identity, host, network, and data controls.'
      ]
    },
    visual: {
      title: 'The Concentric Castle: Defense in Depth',
      concept: 'Perimeter Firewall ➔ Network VLANs ➔ Endpoint EDR ➔ Least Privilege ➔ Data Encryption',
      description: 'Observe how an adversary must penetrate multiple layered defenses to reach core assets.',
      takeaway: 'Layers buy defenders time to detect, alert, and contain.',
      steps: [
        { step: 1, label: 'Layer 1: Perimeter', detail: 'Edge firewall drops raw exploit ports and scans external traffic.', status: 'info' },
        { step: 2, label: 'Layer 2: Network', detail: 'VLAN 20 restricts access to finance systems; drops lateral sweeps.', status: 'info' },
        { step: 3, label: 'Layer 3: Endpoint', detail: 'EDR monitors process lineage and flags anomalous child execution.', status: 'alert' },
        { step: 4, label: 'Layer 4: Privilege', detail: 'Standard user token blocks elevation; payload cannot install rootkit.', status: 'success' }
      ]
    },
    interactive: {
      type: 'matching',
      title: 'Match Security Principles to Their Real-World Implementations',
      prompt: 'Pair each defensive principle with its operational control.',
      pairs: [
        { id: 'p1', left: 'Principle of Least Privilege', right: 'Revoking local Administrator rights from standard employee desktop laptops' },
        { id: 'p2', left: 'Defense in Depth', right: 'Running both perimeter firewall filtering AND endpoint EDR behavioral monitoring' },
        { id: 'p3', left: 'Segregation of Duties', right: 'Requiring two separate authorized individuals to approve wire transfers over $100,000' },
        { id: 'p4', left: 'Zero Trust Architecture', right: 'Verifying user identity, device health, and context on every single resource request' }
      ],
      successFeedback: 'Masterful! You understand the foundational principles that keep modern enterprises secure.'
    },
    knowledgeCheck: {
      questions: [
        {
          id: 'q1',
          question: 'If a standard employee laptop is infected with malware, what primary defensive principle prevents the attacker from immediately installing a persistent kernel device driver?',
          options: [
            'Having a fast internet connection',
            'The Principle of Least Privilege: standard user tokens lack administrative write access to kernel and driver directories',
            'Using an expensive branded computer monitor',
            'Turning the computer off at night'
          ],
          correctIndex: 1,
          explanation: 'Restricting standard accounts to non-administrative privileges prevents malware executing under user context from modifying protected operating system directories.'
        }
      ]
    }
  }
};
`;

  fs.writeFileSync(path.join(rootDir, 'src/data/chapters/modules00_03.js'), content, 'utf-8');
  console.log('✓ Wrote src/data/chapters/modules00_03.js');
}
