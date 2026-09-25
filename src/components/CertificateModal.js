// Official FinCorp SOC Analyst L1 Certificate Modal
import { store } from '../state/store.js';

export function renderCertificateModal() {
  const state = store.state;
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return `
    <div id="certificate-modal-container" class="alert-popup-overlay" style="display: none;">
      <div class="glass-panel-elevated" style="max-width: 820px; width: 100%; border: 2px solid rgba(0, 242, 254, 0.4); border-radius: var(--border-radius-lg); padding: 2.5rem; position: relative; background: #070c18; box-shadow: 0 0 60px rgba(0, 242, 254, 0.3);">
        
        <!-- Close Button -->
        <button id="btn-close-cert" style="position: absolute; top: 1.25rem; right: 1.25rem; background: transparent; border: none; color: var(--text-muted); cursor: pointer; padding: 0.5rem;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <!-- Printable Certificate Area -->
        <div id="printable-certificate" style="border: 2px solid rgba(0, 242, 254, 0.3); border-radius: 12px; padding: 2.5rem; text-align: center; position: relative; background: radial-gradient(circle at center, rgba(0, 242, 254, 0.04) 0%, rgba(5, 8, 17, 0.95) 100%);">
          
          <!-- FinCorp Security Emblem -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-bottom: 1rem;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, rgba(0,242,254,0.3), rgba(139,92,246,0.3)); border: 1px solid var(--cyan-primary); display: flex; align-items: center; justify-content: center;">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-primary)" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div style="text-align: left;">
              <div style="font-weight: 800; font-size: 1.2rem; letter-spacing: 0.05em; color: var(--text-bright);">FINCORP DEFENSE OPERATIONS</div>
              <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-text);">GLOBAL SECURITY OPERATIONS CENTER</div>
            </div>
          </div>

          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.15em; margin-bottom: 0.5rem;">
            CERTIFICATE OF OPERATIONAL COMPETENCE
          </div>

          <h1 style="font-size: 2.2rem; font-weight: 800; margin-bottom: 1rem; color: var(--text-bright);">
            SOC ANALYST TIER 1
          </h1>

          <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            This certifies that the operational practitioner designated below:
          </p>

          <div style="display: inline-block; padding: 0.5rem 2rem; border-bottom: 2px solid var(--cyan-primary); margin-bottom: 1.5rem;">
            <span style="font-size: 1.6rem; font-weight: 800; color: var(--cyan-primary); font-family: var(--font-sans);">
              ${state.profile.analystName} (${state.profile.callsign})
            </span>
          </div>

          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 620px; margin: 0 auto 2rem auto; line-height: 1.6;">
            Has successfully completed operational shift requirements for <strong>Module 4: SOC Operations</strong>, demonstrating validated proficiency in SIEM telemetry queries, Windows authentication event analysis (4625/4624), 5-point entity triage, false positive classification, and professional case hygiene on Case ALT-2026-9042.
          </p>

          <!-- Verification Grid -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem; font-family: var(--font-mono); font-size: 0.78rem; border-top: 1px solid var(--border-subtle); padding-top: 1.25rem;">
            <div>
              <div style="color: var(--text-muted);">SHIFT IDENTIFIER</div>
              <div style="color: var(--text-bright); font-weight: 700;">${state.profile.shiftId}</div>
            </div>
            <div>
              <div style="color: var(--text-muted);">DATE ISSUED</div>
              <div style="color: var(--text-bright); font-weight: 700;">${today}</div>
            </div>
            <div>
              <div style="color: var(--text-muted);">SECURITY CLEARANCE</div>
              <div style="color: var(--cyan-text); font-weight: 700;">L1 VERIFIED</div>
            </div>
          </div>

          <!-- Dual Signatures -->
          <div style="display: flex; justify-content: space-around; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
            <div style="text-align: center;">
              <div style="font-family: 'Brush Script MT', cursive, sans-serif; font-size: 1.3rem; color: var(--cyan-text);">David Henderson</div>
              <div style="border-top: 1px solid var(--border-medium); width: 160px; margin: 0.25rem auto; padding-top: 0.25rem; font-size: 0.75rem; color: var(--text-muted);">SOC Operations Manager</div>
            </div>
            <div style="text-align: center;">
              <div style="font-family: 'Brush Script MT', cursive, sans-serif; font-size: 1.3rem; color: #c084fc;">Elena Rostova</div>
              <div style="border-top: 1px solid var(--border-medium); width: 160px; margin: 0.25rem auto; padding-top: 0.25rem; font-size: 0.75rem; color: var(--text-muted);">Chief Information Security Officer</div>
            </div>
          </div>

        </div>

        <!-- Action Buttons -->
        <div style="display: flex; justify-content: flex-end; gap: 1rem; margin-top: 1.5rem;">
          <button id="btn-print-cert" class="btn btn-primary" style="font-size: 0.9rem; padding: 0.6rem 1.4rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
            Print / Save Certificate PDF
          </button>
          <button id="btn-dismiss-cert" class="btn btn-secondary" style="font-size: 0.9rem; padding: 0.6rem 1.2rem;">
            Close
          </button>
        </div>

      </div>
    </div>
  `;
}

export function initCertificateModalEvents() {
  const modal = document.getElementById('certificate-modal-container');
  const btnClose = document.getElementById('btn-close-cert');
  const btnDismiss = document.getElementById('btn-dismiss-cert');
  const btnPrint = document.getElementById('btn-print-cert');

  const hide = () => {
    if (modal) modal.style.display = 'none';
  };

  if (btnClose) btnClose.addEventListener('click', hide);
  if (btnDismiss) btnDismiss.addEventListener('click', hide);
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }
}
