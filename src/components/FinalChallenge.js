// Topic 6 Final L1 Challenge — Comprehensive Simulated SIEM & Case Documentation
import { ALERT_FINANCE01 } from '../data/alertData.js';
import { store } from '../state/store.js';
import { sound } from '../audio/soundEffects.js';
import confetti from 'canvas-confetti';

let challengeState = {
  activeStep: 1, // 1: SIEM Query, 2: Helpdesk Lookup, 3: Hypothesis, 4: Case Documentation, 5: Resolution, 6: Debrief
  queryExecuted: false,
  ticketFound: false,
  selectedHypothesis: null,
  documentationDrafted: false,
  finalDisposition: null,
  score: 0,
  completed: false,
  customNotes: `CASE ALT-2026-9042 INVESTIGATION REPORT
Analyst: FinCorp L1 Operations
Target User: Finance01 (Jane Miller)
Target Asset: FIN-PC-04 (10.10.20.15)

OBSERVATIONS:
18x Event 4625 (Logon Failures) logged between 10:30:01 and 10:31:25 from OUTLOOK.EXE and LanmanWorkstation.
1x Event 4624 (Logon Success Type 2) logged at 10:31:45 from winlogon.exe.
Ticket #IT-94821 confirms password reset occurred at 10:15:22 AM.

ROOT CAUSE:
Background applications on FIN-PC-04 cached expired credentials while workstation was unattended, generating rapid authentication rejections upon wake-up. User successfully authenticated with new credentials at 10:31:45 AM, immediately ending failure events.

DISPOSITION:
Benign Positive (False Positive - Cached Credentials). No security escalation required.`
};

export function renderFinalChallenge() {
  const isDone = store.state.finalChallenge.completed || challengeState.completed;

  return `
    <div style="margin: 2rem 0;">
      <!-- Challenge Progress Steps -->
      <div class="glass-panel" style="padding: 1.25rem 2rem; margin-bottom: 1.5rem; background: rgba(10, 16, 31, 0.85); border-color: rgba(56, 189, 248, 0.3);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.25rem;">
              <span class="genz-badge badge-challenge">CAPSTONE ASSESSMENT</span>
              <span style="font-weight: 800; font-size: 1.1rem; color: var(--text-bright);">Case ALT-2026-9042 Live Shift Trial</span>
            </div>
            <div style="font-size: 0.8rem; color: var(--text-secondary);">
              Execute the complete end-to-end FinCorp L1 investigation workflow.
            </div>
          </div>

          <!-- Step Indicators -->
          <div style="display: flex; align-items: center; gap: 0.5rem; font-family: var(--font-mono); font-size: 0.78rem;">
            ${[
              { n: 1, label: 'SIEM Query' },
              { n: 2, label: 'Ticket Lookup' },
              { n: 3, label: 'Hypothesis' },
              { n: 4, label: 'Case Notes' },
              { n: 5, label: 'Resolution' },
              { n: 6, label: 'Debrief' }
            ].map(s => `
              <div style="padding: 0.3rem 0.6rem; border-radius: 4px; background: ${challengeState.activeStep === s.n ? 'var(--cyan-subtle)' : 'rgba(255,255,255,0.03)'}; border: 1px solid ${challengeState.activeStep === s.n ? 'var(--cyan-primary)' : 'var(--border-subtle)'}; color: ${challengeState.activeStep === s.n ? 'var(--cyan-primary)' : 'var(--text-muted)'}; font-weight: ${challengeState.activeStep === s.n ? '700' : '400'};">
                0${s.n} ${s.label}
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Main Challenge Stage Container -->
      <div class="glass-panel" style="padding: 2.25rem; background: rgba(12, 18, 36, 0.95); border: 1px solid rgba(56, 189, 248, 0.35); min-height: 480px;">
        ${renderChallengeStepContent()}
      </div>
    </div>
  `;
}

function renderChallengeStepContent() {
  switch (challengeState.activeStep) {
    case 1:
      return `
        <div>
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-tech-box">PHASE 01: LOG TELEMETRY QUERY</span>
            <span style="font-size: 0.82rem; color: var(--text-muted); font-family: var(--font-mono);">FINCORP SIEM SPLUNK/SENTINEL INTERFACE</span>
          </div>
          <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 0.75rem;">
            Query Endpoint Telemetry for FIN-PC-04
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
            You are investigating <span class="mono-data">ALT-2026-9042</span>. Construct or execute the SIEM query to pull authentication events for user <span class="mono-data">Finance01</span> on workstation <span class="mono-data">FIN-PC-04</span>.
          </p>

          <div style="background: rgba(5, 8, 17, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
              SIEM QUERY EDITOR
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.92rem; color: #a5b4fc; background: rgba(0,0,0,0.5); padding: 0.85rem; border-radius: 6px; border: 1px solid rgba(99, 102, 241, 0.3); margin-bottom: 1rem;">
              index=security (EventCode=4625 OR EventCode=4624) WorkstationName="FIN-PC-04" TargetUserName="Finance01"
              | stats count by _time, EventCode, TargetUserName, ProcessName, SubStatus, LogonType
              | sort _time asc
            </div>
            <button id="btn-run-query" class="btn btn-primary" style="font-size: 0.88rem; padding: 0.55rem 1.4rem;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              Execute SIEM Query
            </button>
          </div>

          ${challengeState.queryExecuted ? `
            <div class="animate-fade-in-up" style="background: rgba(56, 189, 248, 0.04); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.5rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-primary)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  <span style="font-weight: 700; color: var(--cyan-primary); font-size: 0.92rem;">19 Records Returned (18x 4625 + 1x 4624)</span>
                </div>
                <span class="mono-data" style="font-size: 0.78rem;">Execution Time: 42ms</span>
              </div>
              <p style="font-size: 0.88rem; color: var(--text-bright); line-height: 1.6;">
                <strong>Analyst Observation:</strong> 18 failures occurred between 10:30:01 and 10:31:25 with substatus <span class="mono-data">0xC000006A</span> (bad password). The processes were <span class="mono-data">OUTLOOK.EXE</span> and <span class="mono-data">LanmanWorkstation</span> (Logon Type 3 Network). Then at 10:31:45, <span class="mono-data">winlogon.exe</span> recorded a SUCCESSFUL console logon (Logon Type 2 Interactive). No further failures followed.
              </p>
            </div>

            <div style="display: flex; justify-content: flex-end;">
              <button id="btn-next-step-2" class="btn btn-primary" style="font-size: 0.9rem; padding: 0.6rem 1.5rem;">
                Proceed to Phase 02: Check IT Service Desk →
              </button>
            </div>
          ` : ''}
        </div>
      `;

    case 2:
      return `
        <div>
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-investigate">PHASE 02: SERVICE DESK CORRELATION</span>
            <span style="font-size: 0.82rem; color: var(--text-muted); font-family: var(--font-mono);">JIRA / SERVICENOW INTEGRATION</span>
          </div>
          <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 0.75rem;">
            Check Helpdesk Tickets for Jane Miller (Finance01)
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
            Before assuming an external adversary is attacking the account, a skilled L1 analyst checks if any recent IT actions occurred (password changes, hardware upgrades, mobile provisioning).
          </p>

          <div style="background: rgba(5, 8, 17, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.5rem;">
            <div style="display: flex; gap: 0.75rem; align-items: center;">
              <input type="text" readonly value="Query: user=Finance01 OR host=FIN-PC-04 (Today 08:00 - 11:00 AM)" style="flex: 1; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.65rem 1rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.85rem;" />
              <button id="btn-search-tickets" class="btn btn-outline-cyan" style="font-size: 0.88rem; padding: 0.65rem 1.2rem;">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                Search Tickets
              </button>
            </div>
          </div>

          ${challengeState.ticketFound ? `
            <!-- Ticket Found Card -->
            <div class="animate-fade-in-up glass-panel" style="padding: 1.5rem; border-color: rgba(16, 185, 129, 0.4); background: rgba(12, 28, 22, 0.85); margin-bottom: 1.5rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.65rem;">
                  <span class="genz-badge badge-try-it">TICKET RESOLVED</span>
                  <span style="font-family: var(--font-mono); font-weight: 700; color: #86efac; font-size: 1.05rem;">
                    Ticket #IT-94821: Password Reset Requested
                  </span>
                </div>
                <span class="mono-data" style="font-size: 0.78rem;">Timestamp: 10:15:22 AM (Today)</span>
              </div>
              
              <div style="font-size: 0.9rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 1rem;">
                <strong>Details:</strong> Jane Miller used the FinCorp Self-Service Identity Portal to reset her domain password at <strong>10:15 AM</strong>. The new password was updated in Active Directory immediately. Her laptop <span class="mono-data">FIN-PC-04</span> was in locked/sleep state on her desk while she was in a morning briefing.
              </div>

              <div style="font-size: 0.85rem; color: #a7f3d0; background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
                💡 <strong>The Smoking Gun:</strong> Jane changed her password on her phone at 10:15 AM. When her laptop woke up at 10:30 AM, Outlook and background Windows network shares continuously attempted to connect using the cached old password! When Jane arrived at 10:31:45 AM, she typed her new password at the lock screen, and all errors stopped!
              </div>
            </div>

            <div style="display: flex; justify-content: flex-end;">
              <button id="btn-next-step-3" class="btn btn-primary" style="font-size: 0.9rem; padding: 0.6rem 1.5rem;">
                Proceed to Phase 03: Test Hypotheses →
              </button>
            </div>
          ` : ''}
        </div>
      `;

    case 3:
      return `
        <div>
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-key-idea">PHASE 03: HYPOTHESIS EVALUATION</span>
            <span style="font-size: 0.82rem; color: var(--text-muted); font-family: var(--font-mono);">ANALYST REASONING</span>
          </div>
          <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 0.75rem;">
            Select the Valid Investigation Hypothesis
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
            Evaluate the three competing hypotheses against the physical facts, event timeline, and ticket history.
          </p>

          <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.5rem;">
            ${[
              {
                id: 'hyp-a',
                title: 'Hypothesis A: External Credential Stuffing / Brute Force Attack',
                desc: 'An external threat actor is guessing passwords against Jane’s account over the Internet.',
                isCorrect: false,
                feedback: 'Incorrect. The source IP (10.10.20.15) is Jane’s own internal laptop, caller processes were legitimate Outlook/SMB, and the attempts stopped when Jane entered her new password at her desk.'
              },
              {
                id: 'hyp-b',
                title: 'Hypothesis B: Malware Lateral Movement Infection',
                desc: 'A worm or trojan is utilizing compromised credentials to spread to other corporate hosts.',
                isCorrect: false,
                feedback: 'Incorrect. EDR process tree on FIN-PC-04 is completely clean with 0 unsigned binaries, and network traffic never left internal Exchange/SMB.'
              },
              {
                id: 'hyp-c',
                title: 'Hypothesis C: Benign Cached Credential Storm Following Password Reset',
                desc: 'Workstation applications attempted authentication using an outdated cached token following a recent password reset, resolved when user entered updated credentials.',
                isCorrect: true,
                feedback: 'Spot on! This perfectly matches every single piece of evidence: Ticket #IT-94821, Outlook process caller, 0xC000006A wrong password code, and the 10:31:45 4624 success!'
              }
            ].map(hyp => {
              const isSelected = challengeState.selectedHypothesis === hyp.id;
              let cardClass = 'option-card';
              if (isSelected) {
                cardClass += hyp.isCorrect ? ' selected-correct' : ' selected-wrong';
              }

              return `
                <div class="${cardClass}" data-hyp-id="${hyp.id}" data-correct="${hyp.isCorrect}">
                  <div style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid ${isSelected ? (hyp.isCorrect ? 'var(--success)' : 'var(--warning)') : 'var(--border-medium)'}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                    ${isSelected ? `<span style="width: 10px; height: 10px; border-radius: 50%; background: ${hyp.isCorrect ? 'var(--success)' : 'var(--warning)'};"></span>` : ''}
                  </div>
                  <div style="flex: 1;">
                    <div style="font-weight: 700; color: var(--text-bright); font-size: 1rem; margin-bottom: 0.35rem;">
                      ${hyp.title}
                    </div>
                    <div style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                      ${hyp.desc}
                    </div>
                    ${isSelected ? `
                      <div style="margin-top: 0.75rem; font-size: 0.85rem; color: ${hyp.isCorrect ? '#86efac' : '#fcd34d'}; font-weight: 600;">
                        ${hyp.feedback}
                      </div>
                    ` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          ${challengeState.selectedHypothesis === 'hyp-c' ? `
            <div style="display: flex; justify-content: flex-end;">
              <button id="btn-next-step-4" class="btn btn-primary" style="font-size: 0.9rem; padding: 0.6rem 1.5rem;">
                Proceed to Phase 04: Case Documentation →
              </button>
            </div>
          ` : ''}
        </div>
      `;

    case 4:
      return `
        <div>
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-tech-box">PHASE 04: FORMAL SOC CASE DOCUMENTATION</span>
            <span style="font-size: 0.82rem; color: var(--text-muted); font-family: var(--font-mono);">AUDIT TRAIL HYGIENE</span>
          </div>
          <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 0.75rem;">
            Draft Final Analyst Findings for Case ALT-2026-9042
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
            An investigation is only as good as its documentation. Review and finalize your structured case report before submitting your resolution.
          </p>

          <div style="margin-bottom: 1.5rem;">
            <textarea id="challenge-report-text" style="width: 100%; height: 260px; background: rgba(6, 10, 20, 0.9); border: 1px solid var(--border-medium); border-radius: 8px; color: var(--cyan-text); font-family: var(--font-mono); font-size: 0.85rem; padding: 1.25rem; line-height: 1.6; resize: vertical;">${challengeState.customNotes}</textarea>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center;">
            <div style="font-size: 0.82rem; color: var(--text-muted); font-family: var(--font-mono);">
              ✓ Mandatory fields satisfied: Scope, Evidence, Ticket Reference, Root Cause.
            </div>
            <button id="btn-next-step-5" class="btn btn-primary" style="font-size: 0.9rem; padding: 0.6rem 1.5rem;">
              Proceed to Phase 05: Final Disposition Call →
            </button>
          </div>
        </div>
      `;

    case 5:
      return `
        <div>
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-alert">PHASE 05: RESOLUTION DECISION</span>
            <span style="font-size: 0.82rem; color: var(--text-muted); font-family: var(--font-mono);">CLOSING CALL</span>
          </div>
          <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 0.75rem;">
            Make the Final Operational Call
          </h3>
          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
            How should Case ALT-2026-9042 be disposed of in FinCorp SOC SOAR? Choose carefully — your decision impacts team metrics and operational efficiency.
          </p>

          <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem;">
            ${[
              {
                id: 'disp-close-benign',
                title: 'Close as Benign Positive (False Positive - Cached Credential)',
                badge: 'CORRECT DISPOSITION',
                badgeClass: 'badge-try-it',
                desc: 'Case documented with Ticket #IT-94821 and Event 4624 evidence. User guided to refresh Windows Credential Manager if failures recur. Alert closed without unnecessary escalation.',
                isCorrect: true
              },
              {
                id: 'disp-escalate-l2',
                title: 'Escalate to Tier 2 Incident Response Team (SEV-2 Incident)',
                badge: 'UNJUSTIFIED ESCALATION',
                badgeClass: 'badge-alert',
                desc: 'Declaring an enterprise security incident and passing to Tier 2 without root cause justification wastes precious IR resources on a harmless password change.',
                isCorrect: false
              },
              {
                id: 'disp-silent-close',
                title: 'Silently Close Alert with No Notes or Documentation',
                badge: 'COMPLIANCE VIOLATION',
                badgeClass: 'badge-challenge',
                desc: 'Closing alerts without an audit trail violates SOC compliance policies (SOC2, ISO 27001) and blinds team members if subsequent attacks occur.',
                isCorrect: false
              }
            ].map(disp => {
              const isSelected = challengeState.finalDisposition === disp.id;
              let cardClass = 'option-card';
              if (isSelected) {
                cardClass += disp.isCorrect ? ' selected-correct' : ' selected-wrong';
              }

              return `
                <div class="${cardClass}" data-disp-id="${disp.id}" data-correct="${disp.isCorrect}">
                  <div style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid ${isSelected ? (disp.isCorrect ? 'var(--success)' : 'var(--danger)') : 'var(--border-medium)'}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                    ${isSelected ? `<span style="width: 10px; height: 10px; border-radius: 50%; background: ${disp.isCorrect ? 'var(--success)' : 'var(--danger)'};"></span>` : ''}
                  </div>
                  <div style="flex: 1;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                      <span style="font-weight: 700; color: var(--text-bright); font-size: 1.05rem;">${disp.title}</span>
                      <span class="genz-badge ${disp.badgeClass}" style="font-size: 0.68rem;">${disp.badge}</span>
                    </div>
                    <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${disp.desc}</p>
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          ${challengeState.finalDisposition === 'disp-close-benign' ? `
            <div style="display: flex; justify-content: flex-end;">
              <button id="btn-submit-challenge" class="btn btn-primary" style="font-size: 1rem; padding: 0.75rem 2rem;">
                Submit Case & Complete Shift Trial 🏆 →
              </button>
            </div>
          ` : ''}
        </div>
      `;

    case 6:
      return `
        <div class="animate-fade-in-up" style="text-align: center; padding: 1.5rem 0;">
          <div style="width: 72px; height: 72px; border-radius: 50%; background: rgba(16, 185, 129, 0.15); border: 2px solid var(--success); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto; box-shadow: 0 0 30px var(--success-glow);">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--success)" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          </div>

          <span class="genz-badge badge-try-it" style="font-size: 0.85rem; padding: 0.35rem 0.85rem; margin-bottom: 0.75rem;">
            SHIFT MISSION COMPLETE
          </span>

          <h2 style="font-size: 2.2rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.5rem;">
            Outstanding Triage, Analyst!
          </h2>

          <p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 680px; margin: 0 auto 2rem auto; line-height: 1.6;">
            You correctly correlated telemetry, investigated the user and host, discovered the critical password reset ticket, verified the 10:31:45 4624 success, drafted professional case documentation, and closed the alert as a Benign Positive.
          </p>

          <!-- Score & Metrics Breakdown Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; max-width: 800px; margin: 0 auto 2.5rem auto; text-align: left;">
            <div class="glass-panel" style="padding: 1.25rem; background: rgba(255,255,255,0.03);">
              <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted);">FINAL SHIFT SCORE</div>
              <div style="font-size: 1.8rem; font-weight: 800; font-family: var(--font-mono); color: var(--cyan-primary);">
                100 / 100
              </div>
              <div style="font-size: 0.78rem; color: var(--success);">+250 XP Awarded</div>
            </div>

            <div class="glass-panel" style="padding: 1.25rem; background: rgba(255,255,255,0.03);">
              <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted);">TRIAGE ACCURACY</div>
              <div style="font-size: 1.8rem; font-weight: 800; font-family: var(--font-mono); color: #86efac;">
                100%
              </div>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Zero false escalations</div>
            </div>

            <div class="glass-panel" style="padding: 1.25rem; background: rgba(255,255,255,0.03);">
              <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted);">CASE HYGIENE</div>
              <div style="font-size: 1.8rem; font-weight: 800; font-family: var(--font-mono); color: #c084fc;">
                EXCELLENT
              </div>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Full audit compliance</div>
            </div>
          </div>

          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button id="btn-open-certificate" class="btn btn-primary" style="font-size: 1rem; padding: 0.8rem 2rem; box-shadow: 0 0 25px var(--cyan-glow);">
              🎓 View Official Shift Certificate →
            </button>
            <button class="btn btn-secondary" data-nav="progress" style="font-size: 1rem; padding: 0.8rem 1.8rem;">
              View Global Progress & Badges
            </button>
          </div>
        </div>
      `;

    default:
      return '';
  }
}

export function initFinalChallengeEvents() {
  const btnRunQuery = document.getElementById('btn-run-query');
  if (btnRunQuery) {
    btnRunQuery.addEventListener('click', () => {
      challengeState.queryExecuted = true;
      sound.playSuccess();
      store.completeCheckpoint('check-challenge-query', 30, 'Executed SIEM Telemetry Query');
      updateContainer();
    });
  }

  const btnNext2 = document.getElementById('btn-next-step-2');
  if (btnNext2) {
    btnNext2.addEventListener('click', () => {
      challengeState.activeStep = 2;
      sound.playClick();
      updateContainer();
    });
  }

  const btnSearchTickets = document.getElementById('btn-search-tickets');
  if (btnSearchTickets) {
    btnSearchTickets.addEventListener('click', () => {
      challengeState.ticketFound = true;
      sound.playSuccess();
      store.completeCheckpoint('check-challenge-ticket', 30, 'Correlated Service Desk Ticket');
      updateContainer();
    });
  }

  const btnNext3 = document.getElementById('btn-next-step-3');
  if (btnNext3) {
    btnNext3.addEventListener('click', () => {
      challengeState.activeStep = 3;
      sound.playClick();
      updateContainer();
    });
  }

  document.querySelectorAll('[data-hyp-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      const hypId = e.currentTarget.getAttribute('data-hyp-id');
      const isCorrect = e.currentTarget.getAttribute('data-correct') === 'true';
      challengeState.selectedHypothesis = hypId;

      if (isCorrect) {
        sound.playSuccess();
        store.completeCheckpoint('check-challenge-hyp', 40, 'Identified Cached Credential Hypothesis');
      } else {
        sound.playClick();
      }
      updateContainer();
    });
  });

  const btnNext4 = document.getElementById('btn-next-step-4');
  if (btnNext4) {
    btnNext4.addEventListener('click', () => {
      challengeState.activeStep = 4;
      sound.playClick();
      updateContainer();
    });
  }

  const reportInput = document.getElementById('challenge-report-text');
  if (reportInput) {
    reportInput.addEventListener('input', (e) => {
      challengeState.customNotes = e.target.value;
    });
  }

  const btnNext5 = document.getElementById('btn-next-step-5');
  if (btnNext5) {
    btnNext5.addEventListener('click', () => {
      if (reportInput) {
        challengeState.customNotes = reportInput.value;
      }
      challengeState.activeStep = 5;
      sound.playClick();
      updateContainer();
    });
  }

  document.querySelectorAll('[data-disp-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      const dispId = e.currentTarget.getAttribute('data-disp-id');
      const isCorrect = e.currentTarget.getAttribute('data-correct') === 'true';
      challengeState.finalDisposition = dispId;

      if (isCorrect) {
        sound.playSuccess();
      } else {
        sound.playClick();
      }
      updateContainer();
    });
  });

  const btnSubmit = document.getElementById('btn-submit-challenge');
  if (btnSubmit) {
    btnSubmit.addEventListener('click', () => {
      challengeState.activeStep = 6;
      challengeState.completed = true;
      challengeState.score = 100;

      store.submitFinalChallenge({
        score: 100,
        classification: 'Benign Positive (False Positive - Cached Credential)',
        recommendation: 'Instruct user to purge Windows Credential Manager; close alert with Ticket #IT-94821 reference.',
        notes: challengeState.customNotes
      });

      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });

      updateContainer();
    });
  }

  const btnCert = document.getElementById('btn-open-certificate');
  if (btnCert) {
    btnCert.addEventListener('click', () => {
      const modal = document.getElementById('certificate-modal-container');
      if (modal) {
        modal.style.display = 'flex';
      }
    });
  }
}

function updateContainer() {
  const container = document.getElementById('final-challenge-container');
  if (container) {
    container.innerHTML = renderFinalChallenge();
    initFinalChallengeEvents();
  }
}
