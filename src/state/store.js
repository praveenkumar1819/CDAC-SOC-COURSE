// FinCorp SOC Analyst Platform Reactive Store with LocalStorage Persistence
import { sound } from '../audio/soundEffects.js';

const STORAGE_KEY = 'fincorp_soc_l1_state_v1';

const DEFAULT_STATE = {
  currentView: 'home',
  currentTopic: 1,
  xp: 100, // Starting bonus for joining the shift
  soundEnabled: true,
  alertTriggered: false, // Triggers at 10:32 AM transition
  completedTopics: [],
  unlockedTopics: ['topic-1', 'topic-2', 'topic-3', 'topic-4', 'topic-5', 'topic-6'], // Fully accessible for self-paced learning
  completedCheckpoints: {},
  quizScores: {},
  scratchpadNotes: `// FinCorp SOC Triage Notes — Case ALT-2026-9042
[10:32:00] Alert received: Multiple Failed Login Attempts on FIN-PC-04
[10:33:15] Analyst L1 assigned to case. Initial review started.
`,
  profile: {
    callsign: 'Analyst L1',
    analystName: 'FinCorp L1 Recruit',
    shiftId: '#FIN-SOC-8821',
    clearance: 'L1 Operations — Level 1 Access',
    department: 'Cyber Defense Center — Shift Alpha',
    startedAt: '10:25 AM EST'
  },
  finalChallenge: {
    completed: false,
    score: 0,
    maxScore: 100,
    classification: null,
    recommendation: null,
    documentedNotes: '',
    completedAt: null
  },
  badges: [
    {
      id: 'badge-cadet',
      title: 'Shift Logged',
      icon: 'shield',
      description: 'Reported for operational duty at FinCorp SOC Shift Alpha.',
      unlocked: true,
      unlockedAt: '10:25 AM'
    },
    {
      id: 'badge-arch',
      title: 'SOC Architect',
      icon: 'layers',
      description: 'Mastered People, Process, Technology, and Data pipeline.',
      unlocked: false
    },
    {
      id: 'badge-telemetry',
      title: 'Telemetry Detective',
      icon: 'terminal',
      description: 'Analyzed Event 4625/4624 patterns and threshold triggers.',
      unlocked: false
    },
    {
      id: 'badge-triage',
      title: 'Triage Specialist',
      icon: 'search',
      description: 'Conducted systematic 5-point entity triage on Finance01.',
      unlocked: false
    },
    {
      id: 'badge-filter',
      title: 'Signal Gatekeeper',
      icon: 'filter',
      description: 'Identified benign cached credentials and prevented false escalation.',
      unlocked: false
    },
    {
      id: 'badge-hero',
      title: 'Certified L1 Shift Hero',
      icon: 'award',
      description: 'Successfully investigated, resolved, and documented Case ALT-2026-9042.',
      unlocked: false
    }
  ]
};

class Store {
  constructor() {
    this.subscribers = new Set();
    this.state = this.loadState();
    sound.toggle(this.state.soundEnabled);
  }

  loadState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_STATE, ...parsed };
      }
    } catch (e) {
      console.warn('Failed to load saved state, using default:', e);
    }
    return { ...DEFAULT_STATE };
  }

  saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state));
    } catch (e) {
      console.warn('Failed to persist state:', e);
    }
  }

  subscribe(fn) {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }

  notify() {
    this.saveState();
    this.subscribers.forEach(fn => fn(this.state));
  }

  navigate(view, topicIndex = null) {
    this.state.currentView = view;
    if (topicIndex !== null) {
      this.state.currentTopic = topicIndex;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    sound.playClick();
    this.notify();
  }

  toggleSound() {
    this.state.soundEnabled = !this.state.soundEnabled;
    sound.toggle(this.state.soundEnabled);
    if (this.state.soundEnabled) sound.playClick();
    this.notify();
  }

  addXp(amount, reason = '') {
    this.state.xp = Math.min(1250, this.state.xp + amount);
    sound.playSuccess();
    this.showToast(`+${amount} XP: ${reason}`, 'xp');
    this.notify();
  }

  completeCheckpoint(key, xp = 25, reason = 'Checkpoint Cleared') {
    if (!this.state.completedCheckpoints[key]) {
      this.state.completedCheckpoints[key] = true;
      this.addXp(xp, reason);
    }
  }

  completeTopic(topicId) {
    if (!this.state.completedTopics.includes(topicId)) {
      this.state.completedTopics.push(topicId);
      
      // Unlock badge based on topic
      const badgeMap = {
        'topic-1': 'badge-arch',
        'topic-2': 'badge-telemetry',
        'topic-3': 'badge-triage',
        'topic-4': 'badge-filter'
      };
      
      if (badgeMap[topicId]) {
        this.unlockBadge(badgeMap[topicId]);
      }

      this.addXp(100, `Completed ${topicId.toUpperCase()}`);
    }
    this.notify();
  }

  unlockBadge(badgeId) {
    const badge = this.state.badges.find(b => b.id === badgeId);
    if (badge && !badge.unlocked) {
      badge.unlocked = true;
      badge.unlockedAt = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      sound.playBadge();
      this.showToast(`🏆 Badge Unlocked: ${badge.title}!`, 'badge');
      this.notify();
    }
  }

  triggerAlertPulse() {
    this.state.alertTriggered = true;
    sound.playAlert();
    this.notify();
  }

  saveScratchpadNotes(notes) {
    this.state.scratchpadNotes = notes;
    this.saveState();
  }

  updateProfile(updates) {
    this.state.profile = { ...this.state.profile, ...updates };
    this.notify();
  }

  submitFinalChallenge(result) {
    this.state.finalChallenge = {
      completed: true,
      score: result.score,
      maxScore: 100,
      classification: result.classification,
      recommendation: result.recommendation,
      documentedNotes: result.notes,
      completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    if (result.score >= 70) {
      this.unlockBadge('badge-hero');
      this.completeTopic('topic-6');
    }
    this.notify();
  }

  resetProgress() {
    this.state = { ...DEFAULT_STATE, xp: 100 };
    this.saveState();
    this.notify();
    this.showToast('Shift progress reset successfully.', 'info');
  }

  showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `cyber-toast cyber-toast-${type} animate-fade-in`;
    
    let iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>';
    if (type === 'xp') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>';
    } else if (type === 'badge') {
      iconSvg = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>';
    }

    toast.innerHTML = `
      <div class="toast-icon">${iconSvg}</div>
      <div class="toast-msg">${message}</div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fadeout');
      setTimeout(() => toast.remove(), 400);
    }, 3500);
  }
}

export const store = new Store();
