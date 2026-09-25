// Top HUD Navigation & Operational Status Header
import { store } from '../state/store.js';

export function renderHeader() {
  const state = store.state;
  const currentView = state.currentView;
  const xpPercent = Math.min(100, Math.round((state.xp / 1250) * 100));

  return `
    <header class="soc-hud-header">
      <div style="display: flex; align-items: center; gap: 1.75rem;">
        <!-- FinCorp Brand -->
        <div class="hud-brand" style="display: flex; align-items: center; gap: 0.75rem; cursor: pointer;" data-nav="home">
          <div style="width: 38px; height: 38px; border-radius: 10px; background: linear-gradient(135deg, rgba(0,242,254,0.2), rgba(139,92,246,0.2)); border: 1px solid var(--cyan-primary); display: flex; align-items: center; justify-content: center; box-shadow: 0 0 16px var(--cyan-glow);">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--cyan-primary);">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span style="font-weight: 800; font-size: 1.05rem; letter-spacing: -0.01em; color: var(--text-bright);">FINCORP</span>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); background: var(--cyan-subtle); padding: 0.1rem 0.4rem; border-radius: 4px; border: 1px solid rgba(0,242,254,0.3);">SOC L1</span>
            </div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); letter-spacing: 0.05em;">DEFENSE OPERATIONS CENTER</div>
          </div>
        </div>

        <!-- Navigation Links -->
        <nav class="nav-links">
          <button class="nav-item ${currentView === 'home' ? 'active' : ''}" data-nav="home">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            Home
          </button>
          <button class="nav-item ${currentView.startsWith('topic-') || currentView === 'course' ? 'active' : ''}" data-nav="course">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
            Course
          </button>
          <button class="nav-item ${currentView === 'module-map' ? 'active' : ''}" data-nav="module-map">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg>
            Module Map
          </button>
          <button class="nav-item ${currentView === 'current-scenario' ? 'active' : ''}" data-nav="current-scenario">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            Current Scenario
          </button>
          <button class="nav-item ${currentView === 'labs' ? 'active' : ''}" data-nav="labs">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31L4.69 17.5a2.5 2.5 0 0 0 2.12 3.5h10.38a2.5 2.5 0 0 0 2.12-3.5L14 9.31V2"/></svg>
            Labs
          </button>
          <button class="nav-item ${currentView === 'knowledge' ? 'active' : ''}" data-nav="knowledge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Knowledge
          </button>
          <button class="nav-item ${currentView === 'progress' ? 'active' : ''}" data-nav="progress">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            Progress
          </button>
          <button class="nav-item ${currentView === 'profile' ? 'active' : ''}" data-nav="profile">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Profile
          </button>
        </nav>
      </div>

      <!-- Right HUD Telemetry -->
      <div style="display: flex; align-items: center; gap: 1rem;">
        <!-- Live Shift Indicator -->
        <div class="hud-pill" title="Operational Shift Status">
          <span class="status-indicator status-active"></span>
          <span style="font-family: var(--font-mono); color: var(--text-bright); font-size: 0.78rem;">SHIFT ALPHA: 10:32 AM</span>
        </div>

        <!-- Live Alert Trigger Quick Access -->
        <button class="btn btn-alert" style="padding: 0.4rem 0.85rem; font-size: 0.8rem; animation: pulse-border 2s infinite;" data-nav="topic-3" title="Open Finance01 Alert Triage">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          🚨 1 ALERT PENDING
        </button>

        <!-- XP Counter -->
        <div class="hud-pill" style="border-color: rgba(0,242,254,0.3); background: rgba(0,242,254,0.05);" title="Analyst Experience Points">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          <span style="font-family: var(--font-mono); color: var(--cyan-text); font-size: 0.82rem;">${state.xp} XP</span>
          <div class="hud-xp-bar">
            <div class="hud-xp-fill" style="width: ${xpPercent}%;"></div>
          </div>
        </div>

        <!-- Audio Toggle -->
        <button id="btn-sound-toggle" class="btn btn-secondary" style="padding: 0.45rem; width: 36px; height: 36px; border-radius: 8px;" title="${state.soundEnabled ? 'Mute Procedural Audio' : 'Enable Procedural Audio'}">
          ${state.soundEnabled ? `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-primary)" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          ` : `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
          `}
        </button>

        <!-- Callsign Tag -->
        <div class="hud-pill" style="cursor: pointer; border-color: rgba(255,255,255,0.15);" data-nav="profile" title="View Analyst Profile">
          <div style="width: 22px; height: 22px; border-radius: 50%; background: #1e293b; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; color: var(--cyan-primary); border: 1px solid var(--border-medium);">L1</div>
          <span style="font-size: 0.8rem; color: var(--text-bright);">${state.profile.callsign}</span>
        </div>
      </div>
    </header>
  `;
}
