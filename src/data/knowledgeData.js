// SOC Analyst Handbook, Windows Event ID Reference, Triage Playbooks, and Glossary
export const WINDOWS_EVENT_IDS = [
  {
    id: 4625,
    name: 'An account failed to log on',
    category: 'Logon / Logoff',
    criticality: 'Medium - High',
    description: 'Generated when a logon request fails. Critical for spotting password spraying, brute force attacks, account lockouts, or cached credential mismatches.',
    keyFields: ['TargetUserName', 'WorkstationName', 'IpAddress', 'LogonType', 'Status', 'SubStatus', 'ProcessName'],
    fincorpContext: 'Generated 18 times on FIN-PC-04 between 10:30:01 and 10:31:25 with substatus 0xC000006A (bad password).'
  },
  {
    id: 4624,
    name: 'An account was successfully logged on',
    category: 'Logon / Logoff',
    criticality: 'Informational',
    description: 'Generated when a logon session is successfully created. Documents who logged on, from where, and how (console, network share, RDP).',
    keyFields: ['TargetUserName', 'TargetDomainName', 'LogonType', 'IpAddress', 'ElevatedToken'],
    fincorpContext: 'Generated at 10:31:45 AM for Finance01 with Logon Type 2 (Interactive console logon). Proves Jane arrived and logged in successfully.'
  },
  {
    id: 4672,
    name: 'Special privileges assigned to new logon',
    category: 'Privilege Use',
    criticality: 'Medium',
    description: 'Generated when an account with administrative or super-user privileges (e.g. SeDebugPrivilege, SeBackupPrivilege) logs on.',
    keyFields: ['SubjectUserName', 'PrivilegeList'],
    fincorpContext: 'Checked during triage: Not present in Finance01 session, confirming no administrative privilege escalation.'
  },
  {
    id: 4720,
    name: 'A user account was created',
    category: 'Account Management',
    criticality: 'High',
    description: 'Indicates the provisioning of a new domain or local identity. Monitored closely for rogue backdoor accounts created by attackers.',
    keyFields: ['TargetUserName', 'SubjectUserName'],
    fincorpContext: 'No rogue account creations detected in FinCorp Active Directory today.'
  },
  {
    id: 4740,
    name: 'A user account was locked out',
    category: 'Account Management',
    criticality: 'Medium',
    description: 'Triggered when the account lockout threshold is exceeded (e.g. 5 or 10 bad attempts). Can cause business disruption or signal automated brute force.',
    keyFields: ['TargetUserName', 'CallerComputerName'],
    fincorpContext: 'FinCorp threshold is set to 25 attempts; Finance01 reached 18 failures before successful login, narrowly avoiding lockout.'
  },
  {
    id: 7045,
    name: 'A new service was installed in the system',
    category: 'System / Service Control',
    criticality: 'High',
    description: 'System log event generated when a Windows Service is registered. Often used by malware (e.g. PsExec, ransomware) for persistence and execution.',
    keyFields: ['ServiceName', 'ImagePath', 'ServiceType', 'AccountName'],
    fincorpContext: 'Checked on FIN-PC-04: No newly installed services in the last 72 hours.'
  }
];

export const WINDOWS_LOGON_TYPES = [
  {
    type: 2,
    name: 'Interactive',
    description: 'A user logged on directly at the local physical keyboard/console or virtual machine console.',
    example: 'Jane sitting at her laptop desk typing her password at the Windows lock screen.',
    significance: 'Confirms physical or console presence. Event #19 at 10:31:45 was Type 2.'
  },
  {
    type: 3,
    name: 'Network',
    description: 'A connection made to this computer from the network (e.g. accessing a shared folder, printer, IIS web server, or background Kerberos auth).',
    example: 'Outlook sync, Microsoft Teams token refresh, or accessing \\\\fs01\\finance.',
    significance: 'Events #1 through #17 were Type 3 network connections triggered automatically by background software.'
  },
  {
    type: 4,
    name: 'Batch',
    description: 'A scheduled task or batch job executing on behalf of a user.',
    example: 'Task Scheduler running a night-time backup script.',
    significance: 'Common source of recurring authentication failures when script credentials expire.'
  },
  {
    type: 5,
    name: 'Service',
    description: 'A background Windows service configured to start under a specific service account.',
    example: 'SQL Server service running under svc-sql account.',
    significance: 'If service password changes in AD without updating services.msc, rapid 4625 storms occur.'
  },
  {
    type: 7,
    name: 'Unlock',
    description: 'The workstation was previously locked and an authorized user entered credentials to unlock it.',
    example: 'Returning from a coffee break and pressing Win+L to unlock.',
    significance: 'Helps establish user physical workstation activity timeline.'
  },
  {
    type: 10,
    name: 'RemoteInteractive (RDP)',
    description: 'A user logged on remotely via Terminal Services, Remote Desktop Protocol (mstsc.exe), or Citrix.',
    example: 'System administrator RDPing into a remote server or attacker using stolen credentials over port 3389.',
    significance: 'Crucial for spotting external unauthorized remote access.'
  }
];

export const AUTH_SUBSTATUS_CODES = [
  {
    code: '0xC000006A',
    meaning: 'STATUS_WRONG_PASSWORD',
    plainText: 'User name is correct, but password was incorrect.',
    analystInsight: 'Crucial distinction! The attacker (or background app) knows the exact valid username, but the password provided was wrong. Highly indicative of cached credentials or password guessing.'
  },
  {
    code: '0xC0000064',
    meaning: 'STATUS_NO_SUCH_USER',
    plainText: 'The specified account does not exist in the directory.',
    analystInsight: 'Suggests username harvesting, dictionary attacks, or typos in username.'
  },
  {
    code: '0xC000006D',
    meaning: 'STATUS_LOGON_FAILURE',
    plainText: 'The attempted logon is invalid due to bad credentials.',
    analystInsight: 'Top-level status code indicating authentication rejection.'
  },
  {
    code: '0xC0000234',
    meaning: 'STATUS_ACCOUNT_LOCKED_OUT',
    plainText: 'User account has exceeded the max failed attempts and is locked.',
    analystInsight: 'High impact. User will be unable to log in until unlocked by IT or lockout duration expires.'
  },
  {
    code: '0xC0000071',
    meaning: 'STATUS_PASSWORD_EXPIRED',
    plainText: 'User password has expired per domain group policy.',
    analystInsight: 'User needs to change password via AD self-service or IT Helpdesk.'
  }
];

export const TRIAGE_CHECKLIST = [
  {
    step: '1. Identify the User (Who)',
    checks: [
      'What is the user’s role and department? (e.g. Finance Analyst vs Domain Admin)',
      'Is the account active, disabled, or service account?',
      'Has the user recently changed their password or requested IT assistance?',
      'Is the user traveling, on leave, or working regular business hours?'
    ]
  },
  {
    step: '2. Identify the Host (Where)',
    checks: [
      'Is the host a shared workstation, personal laptop, or critical production server?',
      'What is the asset criticality tier? (Tier 0 Domain Controller vs Tier 2 Workstation)',
      'Is the EDR agent online and reporting healthy telemetry?',
      'Are there signs of unauthorized tools or command execution?'
    ]
  },
  {
    step: '3. Identify the Network & Source IP (From Where)',
    checks: [
      'Is the source IP internal (RFC 1918) or public internet?',
      'Does the source IP match the user’s assigned workstation DHCP lease?',
      'If external, what is the IP geo-location, ASN, and reputation score on VirusTotal / AbuseIPDB?',
      'Is the connection routing through corporate VPN or an anonymous proxy?'
    ]
  },
  {
    step: '4. Build the Evidence Timeline (When & How)',
    checks: [
      'What was the frequency of the attempts? (Rapid automated loop vs sporadic human typos)',
      'What process initiated the requests? (outlook.exe vs powershell.exe vs python.exe)',
      'What was the outcome? Did failures continue indefinitely, or did a successful logon occur?',
      'Were there secondary events? (e.g. account lockouts, privilege escalation, file downloads)'
    ]
  },
  {
    step: '5. Synthesize & Decide (What Next)',
    checks: [
      'Does this match an Expected Activity (planned test)?',
      'Does this match a Benign Activity (outdated cached credential)?',
      'Does this indicate a Detection Error (faulty SIEM aggregation)?',
      'Or is this a True Positive requiring immediate containment and L2 escalation?'
    ]
  }
];

export const GLOSSARY_TERMS = [
  {
    term: 'SIEM',
    definition: 'Security Information and Event Management: A centralized software platform that aggregates, correlates, and analyzes security logs from throughout an entire enterprise.'
  },
  {
    term: 'EDR',
    definition: 'Endpoint Detection and Response: Endpoint security software that continuously monitors host activities (processes, network connections, file modifications) to detect and isolate threats.'
  },
  {
    term: 'SOAR',
    definition: 'Security Orchestration, Automation, and Response: Platforms that automate repetitive analyst tasks, integrate security tools, and manage the lifecycle of security incidents.'
  },
  {
    term: 'True Positive (TP)',
    definition: 'An alert that correctly identifies an actual security threat or unauthorized attack activity requiring intervention.'
  },
  {
    term: 'False Positive (FP)',
    definition: 'An alert generated for benign, authorized, or harmless activity that was mistakenly flagged as potentially malicious.'
  },
  {
    term: 'Benign Positive (BP)',
    definition: 'Activity that correctly matched the detection logic (e.g. 10 failed logins indeed happened), but the underlying cause is confirmed harmless business behavior (e.g. expired cached token).'
  },
  {
    term: 'IOC (Indicator of Compromise)',
    definition: 'Forensic evidence of an intrusion, such as a known malicious IP address, malware hash (SHA256), phishing domain, or registry key.'
  },
  {
    term: 'TTP (Tactics, Techniques & Procedures)',
    definition: 'The behavior patterns, methods, and attack strategies utilized by cyber threat actors, organized comprehensively in frameworks like MITRE ATT&CK.'
  },
  {
    term: 'MTTD (Mean Time to Detect)',
    definition: 'The average duration elapsed between an adversary entering or executing an action in the environment and the SOC generating an alert.'
  },
  {
    term: 'MTTR (Mean Time to Respond)',
    definition: 'The average duration taken by the SOC team to triage, investigate, contain, and remediate a detected security incident.'
  },
  {
    term: 'RFC 1918 Private IP',
    definition: 'Standard IP ranges reserved exclusively for private internal networks: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. They cannot be routed directly over the public Internet.'
  }
];
