// Event Stream Visualizer, Pattern Detection, and Event ID Explainer
import { ALERT_FINANCE01 } from '../data/alertData.js';
import { sound } from '../audio/soundEffects.js';

let selectedEventId = 1;
let visibleCount = 5;
let isStreaming = false;
let streamTimer = null;

export function renderEventVisualizer() {
  const visibleEvents = ALERT_FINANCE01.events.slice(0, visibleCount);
  const selectedEvent = ALERT_FINANCE01.events.find(e => e.id === selectedEventId) || ALERT_FINANCE01.events[0];
  const thresholdReached = visibleCount >= 10;
  const isComplete = visibleCount === ALERT_FINANCE01.events.length;

  return `
    <div style="margin: 2rem 0;">
      <!-- Stream Control Header -->
      <div class="glass-panel" style="padding: 1.25rem 1.75rem; margin-bottom: 1.5rem; background: rgba(10, 16, 31, 0.85);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.25rem;">
              <span class="genz-badge badge-try-it">INTERACTIVE STREAM</span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 1.05rem;">FIN-PC-04 Windows Event Stream</span>
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary); font-family: var(--font-mono);">
              Showing ${visibleCount} of ${ALERT_FINANCE01.events.length} security events logged between 10:30:01 and 10:31:45
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <button id="btn-stream-step" class="btn btn-secondary" style="font-size: 0.82rem; padding: 0.5rem 0.9rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              Step Next Event (+1)
            </button>

            <button id="btn-stream-auto" class="btn ${isStreaming ? 'btn-alert' : 'btn-outline-cyan'}" style="font-size: 0.82rem; padding: 0.5rem 0.9rem;">
              ${isStreaming ? `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                Pause Stream
              ` : `
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                Auto Play Stream
              `}
            </button>

            <button id="btn-stream-all" class="btn btn-primary" style="font-size: 0.82rem; padding: 0.5rem 0.9rem;">
              Show All (19 Events)
            </button>
          </div>
        </div>
      </div>

      <!-- Detection Threshold Status Bar -->
      <div class="glass-panel" style="padding: 1.25rem 1.5rem; margin-bottom: 1.5rem; border-color: ${thresholdReached ? 'rgba(239, 68, 68, 0.4)' : 'rgba(0, 242, 254, 0.2)'}; background: ${thresholdReached ? 'rgba(35, 12, 18, 0.75)' : 'rgba(12, 20, 36, 0.65)'};">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 42px; height: 42px; border-radius: 50%; background: ${thresholdReached ? 'rgba(239, 68, 68, 0.2)' : 'rgba(0, 242, 254, 0.1)'}; display: flex; align-items: center; justify-content: center; color: ${thresholdReached ? 'var(--danger)' : 'var(--cyan-primary)'};">
              ${thresholdReached ? `
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              ` : `
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              `}
            </div>
            <div>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-bright);">
                SIEM Rule: <span style="font-family: var(--font-mono); color: var(--cyan-text);">DET-WIN-0422</span> (Excessive Failures)
              </div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">
                Condition: Count of 4625 failures ≥ 10 in 120 seconds.
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 1.5rem;">
            <div style="text-align: right;">
              <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">DETECTED FAILURES</div>
              <div style="font-size: 1.4rem; font-weight: 800; font-family: var(--font-mono); color: ${thresholdReached ? 'var(--danger)' : 'var(--cyan-primary)'};">
                ${Math.min(18, visibleCount)} / 10 Threshold
              </div>
            </div>
            ${thresholdReached ? `
              <div class="genz-badge badge-alert" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
                🚨 ALERT TRIGGERED
              </div>
            ` : `
              <div class="genz-badge badge-tech-box" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
                NORMAL STREAM
              </div>
            `}
          </div>
        </div>
      </div>

      <!-- Events Split View: Stream Table & Event Inspector -->
      <div style="display: grid; grid-template-columns: 1.4fr 1fr; gap: 1.5rem;">
        
        <!-- Stream Table -->
        <div class="event-table-container">
          <table class="event-table">
            <thead>
              <tr>
                <th>TIME</th>
                <th>EVENT ID</th>
                <th>USER</th>
                <th>PROCESS</th>
                <th>RESULT</th>
              </tr>
            </thead>
            <tbody>
              ${visibleEvents.map(evt => {
                const isSuccess = evt.eventId === 4624;
                const isSelected = evt.id === selectedEventId;

                return `
                  <tr class="${isSuccess ? 'event-row-success' : ''} ${isSelected ? 'row-selected' : ''}" 
                      data-event-id="${evt.id}" 
                      style="cursor: pointer; ${isSelected ? 'background: rgba(0, 242, 254, 0.12);' : ''}">
                    <td style="font-family: var(--font-mono); font-size: 0.8rem;">${evt.time}</td>
                    <td>
                      <span class="event-id-badge ${isSuccess ? 'event-id-4624' : 'event-id-4625'}">
                        ${evt.eventId}
                      </span>
                    </td>
                    <td style="font-weight: 600; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.8rem;">${evt.user}</td>
                    <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">${evt.process}</td>
                    <td>
                      ${isSuccess ? `
                        <span style="color: var(--success); font-weight: 700; font-size: 0.75rem;">SUCCESS (Type ${evt.logonType})</span>
                      ` : `
                        <span style="color: var(--danger); font-weight: 600; font-size: 0.75rem;">FAILED</span>
                      `}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- Single Event Details Inspector -->
        <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9); height: fit-content; border-color: ${selectedEvent.eventId === 4624 ? 'rgba(16, 185, 129, 0.4)' : 'rgba(0, 242, 254, 0.25)'};">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="event-id-badge ${selectedEvent.eventId === 4624 ? 'event-id-4624' : 'event-id-4625'}">
                ID ${selectedEvent.eventId}
              </span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 0.95rem;">
                ${selectedEvent.type}
              </span>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">${selectedEvent.time}</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.25rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; padding-bottom: 0.4rem; border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span style="color: var(--text-muted);">Target User:</span>
              <span class="mono-data">${selectedEvent.user}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; padding-bottom: 0.4rem; border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span style="color: var(--text-muted);">Workstation Host:</span>
              <span class="mono-data">${selectedEvent.host}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; padding-bottom: 0.4rem; border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span style="color: var(--text-muted);">Source IP:</span>
              <span class="mono-data">${selectedEvent.ip}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; padding-bottom: 0.4rem; border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span style="color: var(--text-muted);">Logon Type:</span>
              <span class="mono-data">Type ${selectedEvent.logonType} (${selectedEvent.logonType === 2 ? 'Interactive Console' : 'Network/Token'})</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; padding-bottom: 0.4rem; border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span style="color: var(--text-muted);">Substatus Code:</span>
              <span class="mono-data" style="color: ${selectedEvent.subStatus === '0xC000006A' ? '#fca5a5' : '#86efac'};">${selectedEvent.subStatus}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem;">
              <span style="color: var(--text-muted);">Caller Process:</span>
              <span class="mono-data">${selectedEvent.process}</span>
            </div>
          </div>

          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.85rem;">
            <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--cyan-primary); text-transform: uppercase; margin-bottom: 0.35rem;">
              Analyst Telemetry Interpretation:
            </div>
            <p style="font-size: 0.85rem; color: var(--text-bright); line-height: 1.5;">
              ${selectedEvent.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  `;
}

export function initEventVisualizerEvents() {
  document.querySelectorAll('[data-event-id]').forEach(el => {
    el.addEventListener('click', (e) => {
      const id = parseInt(e.currentTarget.getAttribute('data-event-id'), 10);
      if (!isNaN(id)) {
        selectedEventId = id;
        sound.playSubtleTick();
        const container = document.getElementById('event-visualizer-container');
        if (container) {
          container.innerHTML = renderEventVisualizer();
          initEventVisualizerEvents();
        }
      }
    });
  });

  const btnStep = document.getElementById('btn-stream-step');
  if (btnStep) {
    btnStep.addEventListener('click', () => {
      if (visibleCount < ALERT_FINANCE01.events.length) {
        visibleCount++;
        selectedEventId = visibleCount;
        sound.playClick();
        if (visibleCount === 10) sound.playAlert();
        const container = document.getElementById('event-visualizer-container');
        if (container) {
          container.innerHTML = renderEventVisualizer();
          initEventVisualizerEvents();
        }
      }
    });
  }

  const btnAll = document.getElementById('btn-stream-all');
  if (btnAll) {
    btnAll.addEventListener('click', () => {
      visibleCount = ALERT_FINANCE01.events.length;
      selectedEventId = visibleCount;
      sound.playSuccess();
      const container = document.getElementById('event-visualizer-container');
      if (container) {
        container.innerHTML = renderEventVisualizer();
        initEventVisualizerEvents();
      }
    });
  }

  const btnAuto = document.getElementById('btn-stream-auto');
  if (btnAuto) {
    btnAuto.addEventListener('click', () => {
      if (isStreaming) {
        clearInterval(streamTimer);
        isStreaming = false;
      } else {
        isStreaming = true;
        streamTimer = setInterval(() => {
          if (visibleCount < ALERT_FINANCE01.events.length) {
            visibleCount++;
            selectedEventId = visibleCount;
            sound.playSubtleTick();
            if (visibleCount === 10) sound.playAlert();
            const container = document.getElementById('event-visualizer-container');
            if (container) {
              container.innerHTML = renderEventVisualizer();
              initEventVisualizerEvents();
            }
          } else {
            clearInterval(streamTimer);
            isStreaming = false;
            const container = document.getElementById('event-visualizer-container');
            if (container) {
              container.innerHTML = renderEventVisualizer();
              initEventVisualizerEvents();
            }
          }
        }, 600);
      }
      const container = document.getElementById('event-visualizer-container');
      if (container) {
        container.innerHTML = renderEventVisualizer();
        initEventVisualizerEvents();
      }
    });
  }
}
