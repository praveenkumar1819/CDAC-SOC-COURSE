// Profile View: FinCorp Security Clearance, Callsign Editor, Sound Controls, and Progress Reset
import { store } from '../state/store.js';
import { sound } from '../audio/soundEffects.js';

export function renderProfileView() {
  const state = store.state;
  const isCertified = state.finalChallenge.completed;

  return `
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Profile Header -->
      <section style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-demo">ANALYST IDENTITY</span>
          <span class="mono-data">OPERATIONAL CLEARANCE DOSSIER</span>
        </div>
        <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">
          Analyst <span class="gradient-text-cyan">Clearance Profile.</span>
        </h1>
        <p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 780px;">
          Manage your FinCorp SOC operational credentials, callsign, audio telemetry preferences, and certificate records.
        </p>
      </section>

      <div style="display: grid; grid-template-columns: 1fr 1.1fr; gap: 2rem; margin-bottom: 3rem;">
        
        <!-- FinCorp Digital ID Badge -->
        <div class="glass-panel" style="padding: 2.25rem; border: 2px solid rgba(56, 189, 248, 0.4); background: radial-gradient(circle at top right, rgba(56, 189, 248, 0.1) 0%, rgba(8, 12, 24, 0.95) 100%); border-radius: var(--border-radius-lg); position: relative; box-shadow: 0 16px 48px rgba(0,0,0,0.6);">
          
          <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem; margin-bottom: 1.5rem;">
            <div style="display: flex; align-items: center; gap: 0.65rem;">
              <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--cyan-subtle); border: 1px solid var(--cyan-primary); display: flex; align-items: center; justify-content: center;">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-primary)" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <span style="font-weight: 800; font-size: 0.95rem; color: var(--text-bright); letter-spacing: 0.05em;">FINCORP SECURITY ID</span>
            </div>
            <span class="mono-data" style="color: var(--cyan-text); font-size: 0.75rem;">CLEARANCE: LEVEL 1</span>
          </div>

          <!-- Avatar & Callsign Display -->
          <div style="display: flex; align-items: center; gap: 1.5rem; margin-bottom: 1.75rem;">
            <div style="width: 76px; height: 76px; border-radius: 50%; background: linear-gradient(135deg, rgba(56, 189, 248,0.2), rgba(139,92,246,0.3)); border: 2px solid var(--cyan-primary); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; font-weight: 800; color: var(--cyan-primary); box-shadow: 0 0 20px var(--cyan-glow);">
              L1
            </div>
            <div>
              <div style="font-weight: 800; font-size: 1.4rem; color: var(--text-bright);">
                ${state.profile.analystName}
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--cyan-text); margin-top: 0.2rem;">
                Callsign: "${state.profile.callsign}"
              </div>
            </div>
          </div>

          <!-- Badge Metadata Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-family: var(--font-mono); font-size: 0.8rem; background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.5rem;">
            <div>
              <div style="color: var(--text-muted); font-size: 0.72rem;">SHIFT ID</div>
              <div style="color: var(--text-bright); font-weight: 700;">${state.profile.shiftId}</div>
            </div>
            <div>
              <div style="color: var(--text-muted); font-size: 0.72rem;">STATION</div>
              <div style="color: var(--text-bright); font-weight: 700;">Console 04 (HQ)</div>
            </div>
            <div>
              <div style="color: var(--text-muted); font-size: 0.72rem;">SHIFT START</div>
              <div style="color: var(--text-bright); font-weight: 700;">${state.profile.startedAt}</div>
            </div>
            <div>
              <div style="color: var(--text-muted); font-size: 0.72rem;">DUTY STATUS</div>
              <div style="color: var(--success); font-weight: 700;">ACTIVE WATCH</div>
            </div>
          </div>

          ${isCertified ? `
            <button id="btn-view-profile-cert" class="btn btn-primary" style="width: 100%; font-size: 0.95rem; padding: 0.75rem;">
              🎓 View Official Shift Certificate
            </button>
          ` : `
            <div style="text-align: center; font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
              Complete Topic 06 to unlock official digital certification.
            </div>
          `}

        </div>

        <!-- Customization & Settings Controls -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          
          <!-- Identity Customizer Card -->
          <div class="glass-panel" style="padding: 1.75rem;">
            <h3 style="font-size: 1.2rem; color: var(--text-bright); margin-bottom: 1rem;">
              Customize Analyst Credentials
            </h3>

            <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1.25rem;">
              <div>
                <label style="display: block; font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.35rem;">OPERATIVE CALLSIGN</label>
                <input type="text" id="input-callsign" value="${state.profile.callsign}" style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.6rem 1rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.9rem;" />
              </div>

              <div>
                <label style="display: block; font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.35rem;">ANALYST FULL NAME</label>
                <input type="text" id="input-name" value="${state.profile.analystName}" style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.6rem 1rem; color: var(--text-bright); font-size: 0.9rem;" />
              </div>
            </div>

            <button id="btn-save-profile" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.55rem 1.4rem;">
              Save Identity
            </button>
          </div>

          <!-- Audio & Feedback Controls -->
          <div class="glass-panel" style="padding: 1.75rem;">
            <h3 style="font-size: 1.2rem; color: var(--text-bright); margin-bottom: 0.5rem;">
              Audio & Synthesizer Controls
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 1rem;">
              Procedural Web Audio API sound engine mimics futuristic security operations consoles.
            </p>

            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; background: rgba(255,255,255,0.03); padding: 0.75rem 1rem; border-radius: 6px;">
              <div>
                <div style="font-weight: 700; font-size: 0.9rem; color: var(--text-bright);">Console Sound Effects</div>
                <div style="font-size: 0.78rem; color: var(--text-muted);">Audio blips, siren alerts, and success chimes</div>
              </div>
              <button id="btn-profile-sound-toggle" class="btn ${state.soundEnabled ? 'btn-primary' : 'btn-secondary'}" style="font-size: 0.8rem; padding: 0.4rem 0.9rem;">
                ${state.soundEnabled ? 'ENABLED' : 'MUTED'}
              </button>
            </div>

            <div style="display: flex; gap: 0.5rem;">
              <button id="btn-test-click" class="btn btn-secondary" style="font-size: 0.78rem; padding: 0.4rem 0.8rem;">Test Click</button>
              <button id="btn-test-alert" class="btn btn-secondary" style="font-size: 0.78rem; padding: 0.4rem 0.8rem;">Test Siren</button>
              <button id="btn-test-fanfare" class="btn btn-secondary" style="font-size: 0.78rem; padding: 0.4rem 0.8rem;">Test Chime</button>
            </div>
          </div>

          <!-- Reset Shift Data -->
          <div class="glass-panel" style="padding: 1.5rem; border-color: rgba(239, 68, 68, 0.3);">
            <div style="display: flex; align-items: center; justify-content: space-between;">
              <div>
                <div style="font-weight: 700; color: #fca5a5; font-size: 0.95rem;">Reset Shift Telemetry</div>
                <div style="font-size: 0.78rem; color: var(--text-muted);">Clear all saved localStorage progress, XP, and notes.</div>
              </div>
              <button id="btn-reset-shift" class="btn btn-alert" style="font-size: 0.8rem; padding: 0.45rem 1rem;">
                Reset Progress
              </button>
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
}

export function initProfileEvents() {
  const btnSave = document.getElementById('btn-save-profile');
  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const callsign = document.getElementById('input-callsign')?.value || 'Analyst L1';
      const name = document.getElementById('input-name')?.value || 'FinCorp L1 Recruit';
      store.updateProfile({ callsign, analystName: name });
      sound.playSuccess();
      store.showToast('Analyst credentials successfully updated.', 'info');
      const container = document.getElementById('view-container');
      if (container) {
        container.innerHTML = renderProfileView();
        initProfileEvents();
      }
    });
  }

  const btnSound = document.getElementById('btn-profile-sound-toggle');
  if (btnSound) {
    btnSound.addEventListener('click', () => {
      store.toggleSound();
      const container = document.getElementById('view-container');
      if (container) {
        container.innerHTML = renderProfileView();
        initProfileEvents();
      }
    });
  }

  const btnTestClick = document.getElementById('btn-test-click');
  if (btnTestClick) btnTestClick.addEventListener('click', () => sound.playClick());

  const btnTestAlert = document.getElementById('btn-test-alert');
  if (btnTestAlert) btnTestAlert.addEventListener('click', () => sound.playAlert());

  const btnTestFanfare = document.getElementById('btn-test-fanfare');
  if (btnTestFanfare) btnTestFanfare.addEventListener('click', () => sound.playSuccess());

  const btnReset = document.getElementById('btn-reset-shift');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset your shift progress? All XP and checkpoint progress will be cleared.')) {
        store.resetProgress();
        const container = document.getElementById('view-container');
        if (container) {
          container.innerHTML = renderProfileView();
          initProfileEvents();
        }
      }
    });
  }

  const btnCert = document.getElementById('btn-view-profile-cert');
  if (btnCert) {
    btnCert.addEventListener('click', () => {
      const modal = document.getElementById('certificate-modal-container');
      if (modal) modal.style.display = 'flex';
    });
  }
}
