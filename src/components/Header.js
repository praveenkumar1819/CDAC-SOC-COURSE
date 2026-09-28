// Sleek, Resized Minimalist Header Bar
import { store } from '../state/store.js';

export function renderHeader() {
  const state = store.state;
  const currentView = state.currentView;
  const xpPercent = Math.min(100, Math.round((state.xp / 1250) * 100));

  return `
    <header class="soc-hud-header">
      <div class="header-inner">
        
        <!-- Left: Brand Logo & Title -->
        <div class="hud-brand" style="display: flex; align-items: center; gap: 0.6rem; cursor: pointer; flex-shrink: 0;" data-nav="home">
          <div style="width: 28px; height: 28px; border-radius: 7px; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.35); display: flex; align-items: center; justify-content: center;">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="color: var(--cyan-primary);">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
          </div>
          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span style="font-weight: 800; font-size: 0.92rem; letter-spacing: -0.01em; color: var(--text-bright);">FINCORP</span>
            <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--cyan-primary); background: rgba(56,189,248,0.1); padding: 0.1rem 0.35rem; border-radius: 4px; border: 1px solid rgba(56,189,248,0.25); font-weight: 700;">SOC L1</span>
          </div>
        </div>

        <!-- Center: Clean Segmented Navigation -->
        <nav class="nav-links">
          <button class="nav-item ${currentView === 'home' ? 'active' : ''}" data-nav="home">
            Home
          </button>
          <button class="nav-item ${currentView.startsWith('topic-') || currentView === 'course' || currentView === 'module-map' ? 'active' : ''}" data-nav="course">
            Course
          </button>
          <button class="nav-item ${currentView === 'labs' ? 'active' : ''}" data-nav="labs">
            Labs
          </button>
          <button class="nav-item ${currentView === 'knowledge' ? 'active' : ''}" data-nav="knowledge">
            Knowledge
          </button>
          <button class="nav-item ${currentView === 'progress' ? 'active' : ''}" data-nav="progress">
            Progress
          </button>
        </nav>

        <!-- Right: Utility & Status Cluster -->
        <div style="display: flex; align-items: center; gap: 0.6rem; flex-shrink: 0;">
          
          <!-- Live Alert Access Pill -->
          <button class="btn btn-alert" style="padding: 0.25rem 0.65rem; font-size: 0.74rem; border-radius: var(--border-radius-pill);" data-nav="topic-3" title="Open Case ALT-2026-9042 Triage">
            <span style="display: inline-block; width: 6px; height: 6px; border-radius: 50%; background: #ffffff; margin-right: 3px;"></span>
            1 Alert Pending
          </button>

          <!-- XP Counter Pill -->
          <div class="hud-pill" style="border-color: rgba(56,189,248,0.25); background: rgba(56,189,248,0.06);" title="Analyst Experience Points">
            <span style="font-family: var(--font-mono); color: var(--cyan-text); font-size: 0.74rem; font-weight: 600;">${state.xp} XP</span>
            <div class="hud-xp-bar">
              <div class="hud-xp-fill" style="width: ${xpPercent}%;"></div>
            </div>
          </div>

          <!-- Audio Mute/Unmute -->
          <button id="btn-sound-toggle" class="btn btn-secondary" style="padding: 0; width: 28px; height: 28px; border-radius: 6px;" title="${state.soundEnabled ? 'Mute Procedural Audio' : 'Enable Procedural Audio'}">
            ${state.soundEnabled ? `
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-primary)" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            ` : `
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
            `}
          </button>

          <!-- Callsign Tag -->
          <div class="hud-pill" style="cursor: pointer; padding: 0.2rem 0.5rem;" data-nav="profile" title="View Analyst Profile">
            <div style="width: 20px; height: 20px; border-radius: 50%; background: #1e293b; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 700; color: var(--cyan-primary);">L1</div>
            <span style="font-size: 0.74rem; color: var(--text-bright);">${state.profile.callsign}</span>
          </div>

        </div>

      </div>
    </header>
  `;
}
