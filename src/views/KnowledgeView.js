// Knowledge View: SOC Analyst Handbook, Logon Types, Playbooks, and Glossary
import { store } from '../state/store.js';
import { WINDOWS_EVENT_IDS, WINDOWS_LOGON_TYPES, TRIAGE_CHECKLIST, GLOSSARY_TERMS } from '../data/knowledgeData.js';
import { sound } from '../audio/soundEffects.js';

let activeKnowledgeTab = 'logon';
let searchKeyword = '';

export function renderKnowledgeView() {
  return `
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Knowledge Header -->
      <section style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-key-idea">ANALYST REPOSITORY</span>
          <span class="mono-data">FINCORP SOC PLAYBOOK & HANDBOOK</span>
        </div>
        <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">
          Operational <span class="gradient-text-cyan">Knowledge Base.</span>
        </h1>
        <p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 780px;">
          Your on-shift reference library. Consult Windows Logon Type definitions, standardized entity triage checklists, false positive playbooks, and cybersecurity operational glossaries.
        </p>

        <!-- Search Bar & Tab Selectors -->
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-top: 2rem;">
          <div style="display: flex; gap: 0.5rem; overflow-x: auto;">
            ${[
              { id: 'logon', title: 'Windows Logon Types' },
              { id: 'checklist', title: 'Triage Checklist' },
              { id: 'events', title: 'Event ID Reference' },
              { id: 'glossary', title: 'SOC Glossary' }
            ].map(tab => `
              <button class="tab-btn ${activeKnowledgeTab === tab.id ? 'active' : ''}" data-know-tab="${tab.id}">
                ${tab.title}
              </button>
            `).join('')}
          </div>

          <div style="max-width: 320px; width: 100%;">
            <input type="text" id="know-search" value="${searchKeyword}" placeholder="Search knowledge..." style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.55rem 1rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.85rem;" />
          </div>
        </div>
      </section>

      <!-- Knowledge Content Area -->
      <section id="knowledge-tab-content">
        ${renderKnowledgeContent()}
      </section>

    </div>
  `;
}

function renderKnowledgeContent() {
  switch (activeKnowledgeTab) {
    case 'logon':
      return `
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Windows Logon Types (Audit Security Subsystem)
          </h2>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            When inspecting Windows Event ID 4624 (Success) or 4625 (Failure), the <strong>LogonType</strong> integer reveals HOW the user or process attempted authentication.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem;">
            ${WINDOWS_LOGON_TYPES.map(type => `
              <div class="glass-panel" style="padding: 1.5rem; border-color: ${type.type === 2 ? 'rgba(16, 185, 129, 0.4)' : (type.type === 3 ? 'rgba(56, 189, 248, 0.3)' : 'var(--border-subtle)')};">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <span class="mono-data" style="font-weight: 700; font-size: 0.82rem;">TYPE ${type.type}</span>
                  <span style="font-weight: 700; color: var(--text-bright); font-size: 0.95rem;">${type.name}</span>
                </div>
                <p style="font-size: 0.88rem; color: var(--text-main); margin-bottom: 0.75rem; line-height: 1.5;">
                  ${type.description}
                </p>
                <div style="background: rgba(255,255,255,0.03); border-radius: 6px; padding: 0.65rem; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                  <strong>Example:</strong> ${type.example}
                </div>
                <div style="font-size: 0.78rem; color: var(--cyan-text);">
                  💡 ${type.significance}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'checklist':
      return `
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            FinCorp L1 Standard Triage Checklist
          </h2>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            Never skip steps during initial alert review. Work through the 5 essential investigative dimensions.
          </p>

          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${TRIAGE_CHECKLIST.map(check => `
              <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.85);">
                <h3 style="font-size: 1.15rem; color: var(--cyan-primary); margin-bottom: 0.75rem;">
                  ${check.step}
                </h3>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                  ${check.checks.map(item => `
                    <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: var(--text-bright);">
                      <span style="color: var(--cyan-primary); margin-top: 2px;">✓</span>
                      <span>${item}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'events':
      return `
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            High-Impact Windows Security Event IDs
          </h2>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            The essential audit log codes every Tier 1 analyst should commit to memory.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem;">
            ${WINDOWS_EVENT_IDS.map(evt => `
              <div class="glass-panel" style="padding: 1.5rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <span class="event-id-badge ${evt.id === 4624 ? 'event-id-4624' : 'event-id-4625'}">ID ${evt.id}</span>
                  <span class="mono-data">${evt.criticality}</span>
                </div>
                <h4 style="font-size: 1.05rem; color: var(--text-bright); margin-bottom: 0.35rem;">${evt.name}</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.75rem;">${evt.description}</p>
                <div style="font-size: 0.78rem; color: var(--cyan-text); background: rgba(56, 189, 248,0.05); padding: 0.5rem; border-radius: 4px;">
                  FinCorp Context: ${evt.fincorpContext}
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    case 'glossary':
      const filtered = GLOSSARY_TERMS.filter(g => {
        if (!searchKeyword) return true;
        return g.term.toLowerCase().includes(searchKeyword.toLowerCase()) || g.definition.toLowerCase().includes(searchKeyword.toLowerCase());
      });

      return `
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Cybersecurity & SOC Terminology Glossary
          </h2>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            Authoritative definitions of core operational security acronyms and industry standards.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
            ${filtered.map(item => `
              <div class="glass-panel" style="padding: 1.25rem;">
                <div style="font-weight: 800; font-size: 1.1rem; color: var(--cyan-primary); margin-bottom: 0.4rem; font-family: var(--font-mono);">
                  ${item.term}
                </div>
                <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">
                  ${item.definition}
                </p>
              </div>
            `).join('')}
          </div>
        </div>
      `;

    default:
      return '';
  }
}

export function initKnowledgeEvents() {
  document.querySelectorAll('[data-know-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tab = e.currentTarget.getAttribute('data-know-tab');
      if (tab) {
        activeKnowledgeTab = tab;
        sound.playClick();
        const container = document.getElementById('view-container');
        if (container) {
          container.innerHTML = renderKnowledgeView();
          initKnowledgeEvents();
        }
      }
    });
  });

  const searchInput = document.getElementById('know-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchKeyword = e.target.value;
      if (activeKnowledgeTab !== 'glossary') activeKnowledgeTab = 'glossary';
      const sub = document.getElementById('knowledge-tab-content');
      if (sub) {
        sub.innerHTML = renderKnowledgeContent();
        initKnowledgeEvents();
      }
    });
  }
}
