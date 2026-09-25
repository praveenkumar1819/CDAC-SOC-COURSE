// Main Application Controller & View Router
import { store } from './state/store.js';
import { ParticleCanvas } from './components/ParticleCanvas.js';
import { renderHeader } from './components/Header.js';
import { renderCertificateModal, initCertificateModalEvents } from './components/CertificateModal.js';

// Views
import { renderHomeView } from './views/HomeView.js';
import { renderCourseView } from './views/CourseView.js';
import { renderScenarioView } from './views/ScenarioView.js';
import { renderTopic1View, initTopic1Events } from './views/Topic1View.js';
import { renderTopic2View, initTopic2Events } from './views/Topic2View.js';
import { renderTopic3View, initTopic3Events } from './views/Topic3View.js';
import { renderTopic4View, initTopic4Events } from './views/Topic4View.js';
import { renderTopic5View, initTopic5Events } from './views/Topic5View.js';
import { renderTopic6View, initTopic6Events } from './views/Topic6View.js';
import { renderLabsView, initLabsEvents } from './views/LabsView.js';
import { renderKnowledgeView, initKnowledgeEvents } from './views/KnowledgeView.js';
import { renderProgressView } from './views/ProgressView.js';
import { renderProfileView, initProfileEvents } from './views/ProfileView.js';

let particleCanvas = null;

function renderApp() {
  const state = store.state;
  const currentView = state.currentView;

  // 1. Render Top Header
  const headerContainer = document.getElementById('header-container');
  if (headerContainer) {
    headerContainer.innerHTML = renderHeader();
    bindHeaderEvents();
  }

  // 2. Render Main View Content
  const viewContainer = document.getElementById('view-container');
  if (viewContainer) {
    switch (currentView) {
      case 'home':
        viewContainer.innerHTML = renderHomeView();
        break;

      case 'course':
      case 'module-map':
        viewContainer.innerHTML = renderCourseView();
        break;

      case 'current-scenario':
        viewContainer.innerHTML = renderScenarioView();
        break;

      case 'topic-1':
        viewContainer.innerHTML = renderTopic1View();
        initTopic1Events();
        break;

      case 'topic-2':
        viewContainer.innerHTML = renderTopic2View();
        initTopic2Events();
        break;

      case 'topic-3':
        viewContainer.innerHTML = renderTopic3View();
        initTopic3Events();
        break;

      case 'topic-4':
        viewContainer.innerHTML = renderTopic4View();
        initTopic4Events();
        break;

      case 'topic-5':
        viewContainer.innerHTML = renderTopic5View();
        initTopic5Events();
        break;

      case 'topic-6':
        viewContainer.innerHTML = renderTopic6View();
        initTopic6Events();
        break;

      case 'labs':
        viewContainer.innerHTML = renderLabsView();
        initLabsEvents();
        break;

      case 'knowledge':
        viewContainer.innerHTML = renderKnowledgeView();
        initKnowledgeEvents();
        break;

      case 'progress':
        viewContainer.innerHTML = renderProgressView();
        break;

      case 'profile':
        viewContainer.innerHTML = renderProfileView();
        initProfileEvents();
        break;

      default:
        viewContainer.innerHTML = renderHomeView();
        break;
    }
  }

  // 3. Render Certificate Modal into DOM
  const modalContainer = document.getElementById('modal-container');
  if (modalContainer && !document.getElementById('certificate-modal-container')) {
    modalContainer.innerHTML = renderCertificateModal();
    initCertificateModalEvents();
  }

  // 4. Bind Global Navigation Events for data-nav
  bindGlobalNav();
}

function bindHeaderEvents() {
  const btnSound = document.getElementById('btn-sound-toggle');
  if (btnSound) {
    btnSound.addEventListener('click', () => {
      store.toggleSound();
    });
  }
}

function bindGlobalNav() {
  document.querySelectorAll('[data-nav]').forEach(el => {
    // Avoid double attaching
    if (el._navBound) return;
    el._navBound = true;

    el.addEventListener('click', (e) => {
      const target = e.currentTarget.getAttribute('data-nav');
      if (target) {
        if (target.startsWith('topic-')) {
          const idx = parseInt(target.replace('topic-', ''), 10);
          store.navigate(target, idx);
        } else {
          store.navigate(target);
        }
      }
    });
  });
}

// App Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Cyber Background Canvas
  particleCanvas = new ParticleCanvas('cyber-canvas');

  // Initial render
  renderApp();

  // Re-render on state change
  store.subscribe(() => {
    renderApp();
  });
});
