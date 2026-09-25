// Labs View: Interactive Hands-On Cybersecurity Sandboxes
import { store } from '../state/store.js';
import { WINDOWS_EVENT_IDS, WINDOWS_LOGON_TYPES, AUTH_SUBSTATUS_CODES } from '../data/knowledgeData.js';
import { ALERT_FINANCE01 } from '../data/alertData.js';
import { renderSeverityMatrix, initSeverityMatrixEvents } from '../components/SeverityMatrix.js';
import { renderFalsePositiveTree, initFalsePositiveTreeEvents } from '../components/FalsePositiveTree.js';
import { sound } from '../audio/soundEffects.js';

let activeLab = 'siem';
let siemFilterUser = '';
let siemFilterEventId = '';
let selectedDecoderId = 4625;

export function renderLabsView() {
  return `
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Labs Header -->
      <section style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-try-it">PRACTICE SANDBOXES</span>
          <span class="mono-data">HANDS-ON SIMULATORS</span>
        </div>
        <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">
          Interactive <span class="gradient-text-cyan">SOC Labs.</span>
        </h1>
        <p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 780px;">
          Test your defensive instincts in live sandboxes. Practice querying raw SIEM logs, decoding esoteric Windows authentication error hex codes, calculating severity matrices, and diagnosing false positive branches.
        </p>

        <!-- Lab Selector Tabs -->
        <div style="display: flex; gap: 0.5rem; margin-top: 2rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem; overflow-x: auto;">
          ${[
            { id: 'siem', title: '01. SIEM Query & Log Parser' },
            { id: 'decoder', title: '02. Event ID & Hex Decoder' },
            { id: 'matrix', title: '03. Severity Risk Calculator' },
            { id: 'fp', title: '04. False Positive Brancher' }
          ].map(lab => `
            <button class="tab-btn ${activeLab === lab.id ? 'active' : ''}" data-lab-id="${lab.id}">
              ${lab.title}
            </button>
          `).join('')}
        </div>
      </section>

      <!-- Active Lab Content -->
      <section id="active-lab-content">
        ${renderActiveLabContent()}
      </section>

    </div>
  `;
}

function renderActiveLabContent() {
  switch (activeLab) {
    case 'siem':
      return renderSiemSandbox();
    case 'decoder':
      return renderDecoderSandbox();
    case 'matrix':
      return `
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 1rem;">Dynamic Severity Matrix Sandbox</h2>
          <div id="severity-matrix-container">${renderSeverityMatrix()}</div>
        </div>
      `;
    case 'fp':
      return `
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 1rem;">False Positive Classifier Sandbox</h2>
          <div id="fp-tree-container">${renderFalsePositiveTree()}</div>
        </div>
      `;
    default:
      return '';
  }
}

function renderSiemSandbox() {
  const filteredEvents = ALERT_FINANCE01.events.filter(e => {
    let match = true;
    if (siemFilterUser && !e.user.toLowerCase().includes(siemFilterUser.toLowerCase())) match = false;
    if (siemFilterEventId && e.eventId.toString() !== siemFilterEventId) match = false;
    return match;
  });

  return `
    <div class="glass-panel" style="padding: 2rem; background: rgba(12, 18, 36, 0.95); border: 1px solid rgba(0, 242, 254, 0.35);">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span class="genz-badge badge-tech-box">SPLUNK / SENTINEL EMULATOR</span>
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-top: 0.35rem;">
            SIEM Log Search & Filter Sandbox
          </h2>
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text);">
          ${filteredEvents.length} MATCHING EVENTS
        </div>
      </div>

      <!-- Search Controls -->
      <div style="display: grid; grid-template-columns: 1fr 1fr auto; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <label style="display: block; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.35rem;">FILTER USERNAME</label>
          <input type="text" id="siem-input-user" value="${siemFilterUser}" placeholder="e.g. Finance01" style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.55rem 0.85rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.85rem;" />
        </div>

        <div>
          <label style="display: block; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.35rem;">FILTER EVENT ID</label>
          <input type="text" id="siem-input-event" value="${siemFilterEventId}" placeholder="e.g. 4625 or 4624" style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.55rem 0.85rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.85rem;" />
        </div>

        <div style="display: flex; align-items: flex-end;">
          <button id="btn-siem-reset" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.55rem 1.2rem;">
            Clear Filters
          </button>
        </div>
      </div>

      <!-- Results Table -->
      <div class="event-table-container" style="max-height: 400px; overflow-y: auto;">
        <table class="event-table">
          <thead>
            <tr>
              <th>TIME</th>
              <th>EVENT ID</th>
              <th>TARGET USER</th>
              <th>HOST</th>
              <th>SOURCE IP</th>
              <th>PROCESS</th>
              <th>SUBSTATUS</th>
              <th>LOGON TYPE</th>
            </tr>
          </thead>
          <tbody>
            ${filteredEvents.map(e => `
              <tr class="${e.eventId === 4624 ? 'event-row-success' : ''}">
                <td style="font-family: var(--font-mono); font-size: 0.78rem;">${e.time}</td>
                <td><span class="event-id-badge ${e.eventId === 4624 ? 'event-id-4624' : 'event-id-4625'}">${e.eventId}</span></td>
                <td style="font-family: var(--font-mono);">${e.user}</td>
                <td style="font-family: var(--font-mono);">${e.host}</td>
                <td style="font-family: var(--font-mono);">${e.ip}</td>
                <td style="font-family: var(--font-mono); font-size: 0.78rem;">${e.process}</td>
                <td style="font-family: var(--font-mono); font-size: 0.78rem; color: ${e.subStatus === '0xC000006A' ? '#fca5a5' : '#86efac'};">${e.subStatus}</td>
                <td>Type ${e.logonType}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderDecoderSandbox() {
  const selectedEventInfo = WINDOWS_EVENT_IDS.find(e => e.id === selectedDecoderId) || WINDOWS_EVENT_IDS[0];

  return `
    <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 1.5rem;">
      
      <!-- Event ID List -->
      <div class="glass-panel" style="padding: 1.5rem;">
        <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.75rem;">
          SELECT WINDOWS EVENT ID TO DECODE
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.65rem;">
          ${WINDOWS_EVENT_IDS.map(evt => `
            <div class="glass-panel" data-decoder-id="${evt.id}" style="padding: 1rem; cursor: pointer; border-color: ${evt.id === selectedDecoderId ? 'var(--cyan-primary)' : 'var(--border-subtle)'}; background: ${evt.id === selectedDecoderId ? 'rgba(0, 242, 254, 0.08)' : 'var(--bg-card)'};">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
                <span class="event-id-badge ${evt.id === 4624 ? 'event-id-4624' : 'event-id-4625'}">${evt.id}</span>
                <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">${evt.category}</span>
              </div>
              <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-bright);">${evt.name}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Event Decoder Deep Dive -->
      <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.95); border-color: rgba(0, 242, 254, 0.35);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="event-id-badge ${selectedEventInfo.id === 4624 ? 'event-id-4624' : 'event-id-4625'}">ID ${selectedEventInfo.id}</span>
            <span style="font-size: 1.15rem; font-weight: 800; color: var(--text-bright);">${selectedEventInfo.name}</span>
          </div>
          <span class="mono-data">${selectedEventInfo.criticality}</span>
        </div>

        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
          ${selectedEventInfo.description}
        </p>

        <div style="margin-bottom: 1.5rem;">
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
            ESSENTIAL LOG PARSING FIELDS
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
            ${selectedEventInfo.keyFields.map(f => `<span class="mono-data">${f}</span>`).join('')}
          </div>
        </div>

        <!-- Authentication Hex Substatus Reference -->
        <div>
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: #fca5a5; margin-bottom: 0.65rem;">
            COMMON SUBSTATUS ERROR CODES FOR 4625
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${AUTH_SUBSTATUS_CODES.map(sub => `
              <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.65rem 0.85rem; font-size: 0.82rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.2rem;">
                  <span class="mono-data" style="color: #fca5a5;">${sub.code}</span>
                  <span style="font-weight: 700; color: var(--text-bright);">${sub.meaning}</span>
                </div>
                <div style="color: var(--text-secondary);">${sub.analystInsight}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

    </div>
  `;
}

export function initLabsEvents() {
  document.querySelectorAll('[data-lab-id]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.getAttribute('data-lab-id');
      if (id) {
        activeLab = id;
        sound.playClick();
        const container = document.getElementById('view-container');
        if (container) {
          container.innerHTML = renderLabsView();
          initLabsEvents();
        }
      }
    });
  });

  if (activeLab === 'siem') {
    const inputUser = document.getElementById('siem-input-user');
    const inputEvent = document.getElementById('siem-input-event');
    const btnReset = document.getElementById('btn-siem-reset');

    if (inputUser) {
      inputUser.addEventListener('input', (e) => {
        siemFilterUser = e.target.value;
        const sub = document.getElementById('active-lab-content');
        if (sub) {
          sub.innerHTML = renderSiemSandbox();
          initLabsEvents();
        }
      });
    }

    if (inputEvent) {
      inputEvent.addEventListener('input', (e) => {
        siemFilterEventId = e.target.value;
        const sub = document.getElementById('active-lab-content');
        if (sub) {
          sub.innerHTML = renderSiemSandbox();
          initLabsEvents();
        }
      });
    }

    if (btnReset) {
      btnReset.addEventListener('click', () => {
        siemFilterUser = '';
        siemFilterEventId = '';
        sound.playClick();
        const sub = document.getElementById('active-lab-content');
        if (sub) {
          sub.innerHTML = renderSiemSandbox();
          initLabsEvents();
        }
      });
    }
  }

  if (activeLab === 'decoder') {
    document.querySelectorAll('[data-decoder-id]').forEach(el => {
      el.addEventListener('click', (e) => {
        const id = parseInt(e.currentTarget.getAttribute('data-decoder-id'), 10);
        if (!isNaN(id)) {
          selectedDecoderId = id;
          sound.playClick();
          const sub = document.getElementById('active-lab-content');
          if (sub) {
            sub.innerHTML = renderDecoderSandbox();
            initLabsEvents();
          }
        }
      });
    });
  }

  if (activeLab === 'matrix') {
    initSeverityMatrixEvents();
  }

  if (activeLab === 'fp') {
    initFalsePositiveTreeEvents();
  }
}
