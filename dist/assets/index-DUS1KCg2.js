(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new class{constructor(){this.ctx=null,this.enabled=!0,this.initialized=!1}init(){if(!this.initialized)try{let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.initialized=!0)}catch(e){console.warn(`Web Audio not supported or blocked:`,e)}}ensureContext(){this.initialized||this.init(),this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}toggle(e){this.enabled=e}playClick(){if(this.enabled&&(this.ensureContext(),this.ctx))try{let e=this.ctx.createOscillator(),t=this.ctx.createGain(),n=this.ctx.currentTime;e.type=`sine`,e.frequency.setValueAtTime(880,n),e.frequency.exponentialRampToValueAtTime(440,n+.04),t.gain.setValueAtTime(.08,n),t.gain.linearRampToValueAtTime(.001,n+.04),e.connect(t),t.connect(this.ctx.destination),e.start(n),e.stop(n+.04)}catch{}}playAlert(){if(this.enabled&&(this.ensureContext(),this.ctx))try{let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(440,e),t.frequency.setValueAtTime(370,e+.12),n.gain.setValueAtTime(.12,e),n.gain.linearRampToValueAtTime(.01,e+.25),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.25),setTimeout(()=>{if(!this.ctx||!this.enabled)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(440,e),t.frequency.setValueAtTime(370,e+.12),n.gain.setValueAtTime(.15,e),n.gain.linearRampToValueAtTime(.01,e+.25),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.25)},300)}catch{}}playSuccess(){if(this.enabled&&(this.ensureContext(),this.ctx))try{let e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{let r=this.ctx.createOscillator(),i=this.ctx.createGain(),a=e+n*.08;r.type=`triangle`,r.frequency.setValueAtTime(t,a),i.gain.setValueAtTime(.12,a),i.gain.exponentialRampToValueAtTime(.001,a+.22),r.connect(i),i.connect(this.ctx.destination),r.start(a),r.stop(a+.24)})}catch{}}playBadge(){if(this.enabled&&(this.ensureContext(),this.ctx))try{let e=this.ctx.currentTime;[{freqs:[440,554.37,659.25],start:0,dur:.2},{freqs:[493.88,622.25,739.99],start:.22,dur:.2},{freqs:[587.33,739.99,880],start:.44,dur:.45}].forEach(t=>{t.freqs.forEach(n=>{let r=this.ctx.createOscillator(),i=this.ctx.createGain(),a=e+t.start;r.type=`sine`,r.frequency.setValueAtTime(n,a),i.gain.setValueAtTime(.08,a),i.gain.exponentialRampToValueAtTime(.001,a+t.dur),r.connect(i),i.connect(this.ctx.destination),r.start(a),r.stop(a+t.dur)})})}catch{}}playSubtleTick(){if(this.enabled&&(this.ensureContext(),this.ctx))try{let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(1400,e),n.gain.setValueAtTime(.03,e),n.gain.linearRampToValueAtTime(.001,e+.02),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.02)}catch{}}},t=`fincorp_soc_l1_state_v1`,n={currentView:`home`,currentTopic:1,xp:100,soundEnabled:!0,alertTriggered:!1,completedTopics:[],unlockedTopics:[`topic-1`,`topic-2`,`topic-3`,`topic-4`,`topic-5`,`topic-6`],completedCheckpoints:{},quizScores:{},scratchpadNotes:`// FinCorp SOC Triage Notes — Case ALT-2026-9042
[10:32:00] Alert received: Multiple Failed Login Attempts on FIN-PC-04
[10:33:15] Analyst L1 assigned to case. Initial review started.
`,profile:{callsign:`Analyst L1`,analystName:`FinCorp L1 Recruit`,shiftId:`#FIN-SOC-8821`,clearance:`L1 Operations — Level 1 Access`,department:`Cyber Defense Center — Shift Alpha`,startedAt:`10:25 AM EST`},finalChallenge:{completed:!1,score:0,maxScore:100,classification:null,recommendation:null,documentedNotes:``,completedAt:null},badges:[{id:`badge-cadet`,title:`Shift Logged`,icon:`shield`,description:`Reported for operational duty at FinCorp SOC Shift Alpha.`,unlocked:!0,unlockedAt:`10:25 AM`},{id:`badge-arch`,title:`SOC Architect`,icon:`layers`,description:`Mastered People, Process, Technology, and Data pipeline.`,unlocked:!1},{id:`badge-telemetry`,title:`Telemetry Detective`,icon:`terminal`,description:`Analyzed Event 4625/4624 patterns and threshold triggers.`,unlocked:!1},{id:`badge-triage`,title:`Triage Specialist`,icon:`search`,description:`Conducted systematic 5-point entity triage on Finance01.`,unlocked:!1},{id:`badge-filter`,title:`Signal Gatekeeper`,icon:`filter`,description:`Identified benign cached credentials and prevented false escalation.`,unlocked:!1},{id:`badge-hero`,title:`Certified L1 Shift Hero`,icon:`award`,description:`Successfully investigated, resolved, and documented Case ALT-2026-9042.`,unlocked:!1}]},r=new class{constructor(){this.subscribers=new Set,this.state=this.loadState(),e.toggle(this.state.soundEnabled)}loadState(){try{let e=localStorage.getItem(t);if(e){let t=JSON.parse(e);return{...n,...t}}}catch(e){console.warn(`Failed to load saved state, using default:`,e)}return{...n}}saveState(){try{localStorage.setItem(t,JSON.stringify(this.state))}catch(e){console.warn(`Failed to persist state:`,e)}}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notify(){this.saveState(),this.subscribers.forEach(e=>e(this.state))}navigate(t,n=null){this.state.currentView=t,n!==null&&(this.state.currentTopic=n),window.scrollTo({top:0,behavior:`smooth`}),e.playClick(),this.notify()}toggleSound(){this.state.soundEnabled=!this.state.soundEnabled,e.toggle(this.state.soundEnabled),this.state.soundEnabled&&e.playClick(),this.notify()}addXp(t,n=``){this.state.xp=Math.min(1250,this.state.xp+t),e.playSuccess(),this.showToast(`+${t} XP: ${n}`,`xp`),this.notify()}completeCheckpoint(e,t=25,n=`Checkpoint Cleared`){this.state.completedCheckpoints[e]||(this.state.completedCheckpoints[e]=!0,this.addXp(t,n))}completeTopic(e){if(!this.state.completedTopics.includes(e)){this.state.completedTopics.push(e);let t={"topic-1":`badge-arch`,"topic-2":`badge-telemetry`,"topic-3":`badge-triage`,"topic-4":`badge-filter`};t[e]&&this.unlockBadge(t[e]),this.addXp(100,`Completed ${e.toUpperCase()}`)}this.notify()}unlockBadge(t){let n=this.state.badges.find(e=>e.id===t);n&&!n.unlocked&&(n.unlocked=!0,n.unlockedAt=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),e.playBadge(),this.showToast(`🏆 Badge Unlocked: ${n.title}!`,`badge`),this.notify())}triggerAlertPulse(){this.state.alertTriggered=!0,e.playAlert(),this.notify()}saveScratchpadNotes(e){this.state.scratchpadNotes=e,this.saveState()}updateProfile(e){this.state.profile={...this.state.profile,...e},this.notify()}submitFinalChallenge(e){this.state.finalChallenge={completed:!0,score:e.score,maxScore:100,classification:e.classification,recommendation:e.recommendation,documentedNotes:e.notes,completedAt:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})},e.score>=70&&(this.unlockBadge(`badge-hero`),this.completeTopic(`topic-6`)),this.notify()}resetProgress(){this.state={...n,xp:100},this.saveState(),this.notify(),this.showToast(`Shift progress reset successfully.`,`info`)}showToast(e,t=`info`){let n=document.getElementById(`toast-container`);if(!n)return;let r=document.createElement(`div`);r.className=`cyber-toast cyber-toast-${t} animate-fade-in`;let i=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;t===`xp`?i=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00f2fe" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`:t===`badge`&&(i=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`),r.innerHTML=`
      <div class="toast-icon">${i}</div>
      <div class="toast-msg">${e}</div>
    `,n.appendChild(r),setTimeout(()=>{r.classList.add(`toast-fadeout`),setTimeout(()=>r.remove(),400)},3500)}},i=class{constructor(e){this.canvas=document.getElementById(e),this.canvas&&(this.ctx=this.canvas.getContext(`2d`),this.nodes=[],this.width=window.innerWidth,this.height=window.innerHeight,this.animationFrameId=null,this.init())}init(){this.resize(),window.addEventListener(`resize`,()=>this.resize()),this.createNodes(),this.animate()}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width*window.devicePixelRatio,this.canvas.height=this.height*window.devicePixelRatio,this.ctx.scale(window.devicePixelRatio,window.devicePixelRatio)}createNodes(){this.nodes=[];let e=Math.floor(this.width*this.height/28e3);for(let t=0;t<e;t++)this.nodes.push({x:Math.random()*this.width,y:Math.random()*this.height,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,radius:Math.random()*1.5+.8,alpha:Math.random()*.35+.15,pulseSpeed:Math.random()*.02+.005,pulseOffset:Math.random()*Math.PI*2})}animate(){this.ctx.clearRect(0,0,this.width,this.height);let e=Date.now()*.001;this.ctx.strokeStyle=`rgba(0, 242, 254, 0.025)`,this.ctx.lineWidth=1;for(let e=0;e<this.width;e+=60)this.ctx.beginPath(),this.ctx.moveTo(e,0),this.ctx.lineTo(e,this.height),this.ctx.stroke();for(let e=0;e<this.height;e+=60)this.ctx.beginPath(),this.ctx.moveTo(0,e),this.ctx.lineTo(this.width,e),this.ctx.stroke();for(let e=0;e<this.nodes.length;e++)for(let t=e+1;t<this.nodes.length;t++){let n=this.nodes[e].x-this.nodes[t].x,r=this.nodes[e].y-this.nodes[t].y,i=Math.sqrt(n*n+r*r);if(i<130){let n=(1-i/130)*.12;this.ctx.strokeStyle=`rgba(0, 242, 254, ${n})`,this.ctx.beginPath(),this.ctx.moveTo(this.nodes[e].x,this.nodes[e].y),this.ctx.lineTo(this.nodes[t].x,this.nodes[t].y),this.ctx.stroke()}}for(let t=0;t<this.nodes.length;t++){let n=this.nodes[t];n.x+=n.vx,n.y+=n.vy,n.x<0&&(n.x=this.width),n.x>this.width&&(n.x=0),n.y<0&&(n.y=this.height),n.y>this.height&&(n.y=0);let r=n.alpha+Math.sin(e*2+n.pulseOffset)*.1;this.ctx.fillStyle=`rgba(0, 242, 254, ${Math.max(.05,r)})`,this.ctx.beginPath(),this.ctx.arc(n.x,n.y,n.radius,0,Math.PI*2),this.ctx.fill()}this.animationFrameId=requestAnimationFrame(()=>this.animate())}destroy(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId)}};function a(){let e=r.state,t=e.currentView,n=Math.min(100,Math.round(e.xp/1250*100));return`
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
          <button class="nav-item ${t===`home`?`active`:``}" data-nav="home">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
            Home
          </button>
          <button class="nav-item ${t.startsWith(`topic-`)||t===`course`?`active`:``}" data-nav="course">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z"/><path d="M6 6h10M6 10h10"/></svg>
            Course
          </button>
          <button class="nav-item ${t===`module-map`?`active`:``}" data-nav="module-map">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/></svg>
            Module Map
          </button>
          <button class="nav-item ${t===`current-scenario`?`active`:``}" data-nav="current-scenario">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
            Current Scenario
          </button>
          <button class="nav-item ${t===`labs`?`active`:``}" data-nav="labs">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31L4.69 17.5a2.5 2.5 0 0 0 2.12 3.5h10.38a2.5 2.5 0 0 0 2.12-3.5L14 9.31V2"/></svg>
            Labs
          </button>
          <button class="nav-item ${t===`knowledge`?`active`:``}" data-nav="knowledge">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
            Knowledge
          </button>
          <button class="nav-item ${t===`progress`?`active`:``}" data-nav="progress">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>
            Progress
          </button>
          <button class="nav-item ${t===`profile`?`active`:``}" data-nav="profile">
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
          <span style="font-family: var(--font-mono); color: var(--cyan-text); font-size: 0.82rem;">${e.xp} XP</span>
          <div class="hud-xp-bar">
            <div class="hud-xp-fill" style="width: ${n}%;"></div>
          </div>
        </div>

        <!-- Audio Toggle -->
        <button id="btn-sound-toggle" class="btn btn-secondary" style="padding: 0.45rem; width: 36px; height: 36px; border-radius: 8px;" title="${e.soundEnabled?`Mute Procedural Audio`:`Enable Procedural Audio`}">
          ${e.soundEnabled?`
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-primary)" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          `:`
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
          `}
        </button>

        <!-- Callsign Tag -->
        <div class="hud-pill" style="cursor: pointer; border-color: rgba(255,255,255,0.15);" data-nav="profile" title="View Analyst Profile">
          <div style="width: 22px; height: 22px; border-radius: 50%; background: #1e293b; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; color: var(--cyan-primary); border: 1px solid var(--border-medium);">L1</div>
          <span style="font-size: 0.8rem; color: var(--text-bright);">${e.profile.callsign}</span>
        </div>
      </div>
    </header>
  `}function o(){let e=r.state,t=new Date().toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`});return`
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
              ${e.profile.analystName} (${e.profile.callsign})
            </span>
          </div>

          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 620px; margin: 0 auto 2rem auto; line-height: 1.6;">
            Has successfully completed operational shift requirements for <strong>Module 4: SOC Operations</strong>, demonstrating validated proficiency in SIEM telemetry queries, Windows authentication event analysis (4625/4624), 5-point entity triage, false positive classification, and professional case hygiene on Case ALT-2026-9042.
          </p>

          <!-- Verification Grid -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; margin-bottom: 2rem; font-family: var(--font-mono); font-size: 0.78rem; border-top: 1px solid var(--border-subtle); padding-top: 1.25rem;">
            <div>
              <div style="color: var(--text-muted);">SHIFT IDENTIFIER</div>
              <div style="color: var(--text-bright); font-weight: 700;">${e.profile.shiftId}</div>
            </div>
            <div>
              <div style="color: var(--text-muted);">DATE ISSUED</div>
              <div style="color: var(--text-bright); font-weight: 700;">${t}</div>
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
  `}function s(){let e=document.getElementById(`certificate-modal-container`),t=document.getElementById(`btn-close-cert`),n=document.getElementById(`btn-dismiss-cert`),r=document.getElementById(`btn-print-cert`),i=()=>{e&&(e.style.display=`none`)};t&&t.addEventListener(`click`,i),n&&n.addEventListener(`click`,i),r&&r.addEventListener(`click`,()=>{window.print()})}function c(){return`
    <div style="position: relative; margin: 2rem 0;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.5rem;">
          <span class="genz-badge badge-demo">CINEMATIC TIMELINE</span>
          <h3 style="font-size: 1.25rem; font-weight: 700; color: var(--text-bright);">The Finance01 Incident Chronology</h3>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
          ← SCROLL HORIZONTALLY →
        </div>
      </div>

      <div class="timeline-horizontal">
        ${[{time:`10:15 AM`,tag:`IDENTITY EVENT`,type:`neutral`,title:`Password Reset`,desc:`Jane Miller (Finance01) completes self-service password reset via portal from mobile. FIN-PC-04 workstation is asleep at desk.`,badgeClass:`badge-tech-box`},{time:`10:25 AM`,tag:`SHIFT START`,type:`neutral`,title:`L1 Analyst Reports`,desc:`You log onto FinCorp SOC Console. System normal, SIEM health 99.8%, DEFCON-4 routine business operations.`,badgeClass:`badge-key-idea`},{time:`10:30:01`,tag:`EVENT STREAM START`,type:`failure`,title:`First 4625 Failure`,desc:`Workstation wakes up. OUTLOOK.EXE attempts background sync using cached credentials. Generates Event ID 4625 (0xC000006A).`,badgeClass:`badge-tech-box`},{time:`10:30:20 – 10:31:25`,tag:`SPIKE PATTERN`,type:`failure`,title:`17 Repeated Failures`,desc:`Outlook and SMB network share client retry in rapid succession. 17 additional Event ID 4625 events stream into SIEM.`,badgeClass:`badge-alert`},{time:`10:31:45`,tag:`PIVOTAL EVENT`,type:`success`,title:`4624 Successful Logon`,desc:`Jane Miller arrives at desk, types her newly updated password at the physical console. Logon Type 2 SUCCESS!`,badgeClass:`badge-try-it`},{time:`10:32:00`,tag:`DETECTION TRIGGER`,type:`alert`,title:`🚨 SIEM Alert Generated`,desc:`SIEM Rule DET-WIN-0422 triggers on threshold (18 failures in <2 min). Creates Alert ALT-2026-9042 and assigns to L1 queue.`,badgeClass:`badge-challenge`},{time:`10:35 AM`,tag:`TRIAGE PHASE`,type:`neutral`,title:`L1 Investigates Context`,desc:`You check User (Finance), Host (FIN-PC-04), IP (10.10.20.15), and discover the 4624 success trailing the failures.`,badgeClass:`badge-investigate`},{time:`10:48 AM`,tag:`ROOT CAUSE FOUND`,type:`success`,title:`Ticket #IT-94821 Linked`,desc:`Helpdesk log confirms password reset at 10:15 AM. Explains why background services hammered AD with outdated cached token.`,badgeClass:`badge-key-idea`},{time:`11:00 AM`,tag:`RESOLUTION`,type:`success`,title:`Case Closed (Benign)`,desc:`You document root cause, instruct user to refresh Credential Manager, close case without unnecessary escalation. Shift hero!`,badgeClass:`badge-demo`}].map((e,t)=>`
          <div class="timeline-card ${e.type}">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.65rem;">
              <span class="timeline-timestamp">${e.time}</span>
              <span class="genz-badge ${e.badgeClass}" style="font-size: 0.65rem; padding: 0.15rem 0.5rem;">${e.tag}</span>
            </div>
            <h4 style="font-size: 0.98rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-bright);">
              ${e.title}
            </h4>
            <p style="font-size: 0.82rem; line-height: 1.5; color: var(--text-secondary);">
              ${e.desc}
            </p>
          </div>
        `).join(``)}
      </div>
    </div>
  `}var l={id:`module-4`,code:`SOC-L1-M4`,title:`SOC Operations`,subtitle:`The Finance01 Login Alert — Live Shift Investigation`,level:`Analyst L1`,role:`SOC Analyst L1`,estimatedTime:`45 mins`,totalXp:1250,organization:`FinCorp Global Security Operations`,description:`Step into the shoes of a newly hired Tier 1 SOC Analyst at FinCorp. Live alerts are streaming in, and an authentication spike on FIN-PC-04 demands your immediate attention. Navigate through telemetry, analyze event correlation, classify true versus benign activity, assess severity, and document the resolution like a seasoned professional.`,topics:[{id:`topic-1`,index:`01`,title:`SOC Architecture`,subtitle:`Welcome to the SOC — People, Process, Tech & Data`,time:`10:25 AM`,xp:200,description:`Understand how FinCorp SOC is structured across People, Process, Technology, and Security Data flows before your first alert hits.`},{id:`topic-2`,index:`02`,title:`Alerts & Events`,subtitle:`The Anatomy of Telemetry — Event vs Alert vs Incident`,time:`10:32 AM`,xp:200,description:`The dashboard flashes with an alert! Learn the fundamental distinctions between raw events, threshold alerts, confirmed incidents, and cases.`},{id:`topic-3`,index:`03`,title:`Alert Triage`,subtitle:`Now It’s Your Alert — User, Host, IP & Evidence`,time:`10:35 AM`,xp:250,description:`Execute the standard L1 triage playbook on Finance01. Uncover identities, evaluate the timeline, and spot the game-changing successful logon.`},{id:`topic-4`,index:`04`,title:`False Positives`,subtitle:`Looks Suspicious. But Is It? — Expected, Benign & Detection Errors`,time:`10:45 AM`,xp:200,description:`Master the three categories of non-malicious alerts: Expected Activity, Benign Activity (cached credentials), and Detection Errors.`},{id:`topic-5`,index:`05`,title:`Severity & Escalation`,subtitle:`Impact × Likelihood — Prioritizing Threat Queues`,time:`10:52 AM`,xp:150,description:`Learn why severity is dynamic. Calculate risk scores based on asset criticality, account privileges, and verified impact.`},{id:`topic-6`,index:`06`,title:`Final L1 Challenge`,subtitle:`The Ultimate Shift Trial — Investigate, Document & Resolve`,time:`11:00 AM`,xp:250,description:`Put all your skills to the test in a live simulated SIEM environment. Correlate helpdesk tickets, build case notes, and make the final closing call.`}]},u=[{id:`l1`,role:`L1 SOC Analyst (Tier 1)`,badge:`YOU ARE HERE`,isLearner:!0,tagline:`The First Line of Defense & Triage Gatekeeper`,escalationTo:`L2 SOC Analyst`,whatTheyDo:`Monitors SIEM alert queues in real-time, triages incoming detections, validates entity context (User, Host, IP), filters out false positives, documents initial findings, and escalates confirmed or complex threats.`,handles:[`High-volume alerts (brute force, malware alerts, phishing reports)`,`Initial validation & log review`,`Basic containment (e.g. host isolation requests)`,`Case creation & ticket hygiene`],interactionWithL1:`You are the L1 Analyst! This is your operational seat on shift.`,skillsNeeded:[`SIEM query navigation`,`Log analysis (Syslog, Windows Event IDs, PCAP)`,`Attention to detail`,`Speed & playbook adherence`]},{id:`l2`,role:`L2 Incident Responder (Tier 2)`,badge:`TECHNICAL ESCALATION`,isLearner:!1,tagline:`Deep Dive Investigator & Incident Handler`,escalationTo:`L3 / Senior Specialist`,whatTheyDo:`Takes over validated alerts escalated by L1. Performs deep forensic log analysis, cross-host correlation, memory inspection, network traffic reconstruction, and scopes out the full blast radius of an intrusion.`,handles:[`Advanced threat hunting & pivoting`,`Multi-stage attacks (lateral movement, persistence)`,`Forensic disk & memory dumps`,`Coordinating active containment with IT`],interactionWithL1:`When an alert cannot be dismissed as benign and exhibits signs of active exploitation or complex adversary behavior, L1 passes the case to L2 with full documentation.`,skillsNeeded:[`Endpoint forensics`,`Network packet carving`,`Scripting (Python, PowerShell)`,`Attack lifecycle mapping (MITRE ATT&CK)`]},{id:`l3`,role:`L3 Senior Analyst / Threat Hunter (Tier 3)`,badge:`SENIOR ESCALATION`,isLearner:!1,tagline:`Adversary Hunter & Root Cause Authority`,escalationTo:`SOC Manager / Incident Commander`,whatTheyDo:`Handles the most critical security incidents, reverse engineers custom malware, develops novel detection rules for zero-day vulnerabilities, and conducts proactive hypothesis-driven threat hunting across the enterprise.`,handles:[`Nation-state APT campaigns`,`Ransomware negotiations & crisis containment`,`Reverse engineering unknown binaries`,`Detection engineering architecture`],interactionWithL1:`Mentors L1/L2 analysts, authors the triage playbooks L1 follows, and steps in during major enterprise-wide incidents (SEV-1).`,skillsNeeded:[`Reverse engineering (Ghidra, IDA)`,`Kernel telemetry`,`Adversary emulation`,`Architecture security`]},{id:`specialists`,role:`Domain Specialists`,badge:`SUBJECT MATTER EXPERTS`,isLearner:!1,tagline:`Targeted Deep Technical Disciplines`,escalationTo:`SOC Leadership`,whatTheyDo:`Specialized units embedded or consulted by the SOC for targeted technical challenges.`,subdisciplines:[{name:`Threat Intelligence (CTI)`,role:`Tracks threat actor groups, IOC feeds, and geopolitical cyber risks.`},{name:`Malware Analysts`,role:`Detonates files in sandboxes to understand payload behaviors and C2 indicators.`},{name:`Forensics (DFIR)`,role:`Preserves chain of custody for legal and deep system post-mortem.`},{name:`Identity & Access (IAM)`,role:`Manages Active Directory, Okta, privileged access, and directory hygiene.`},{name:`Detection Engineers`,role:`Tunes SIEM rules to minimize false positives and maximize signal-to-noise ratio.`}],interactionWithL1:`L1 uses detection rules crafted by Detection Engineers and references IOC lookups provided by the Threat Intel team.`,skillsNeeded:[`Niche domain mastery`,`Tooling specialization`]},{id:`manager`,role:`SOC Manager`,badge:`OPERATIONAL LEADERSHIP`,isLearner:!1,tagline:`Team Operations, Metrics & Cross-Department Liaison`,escalationTo:`CISO`,whatTheyDo:`Runs the day-to-day operations of the 24/7 SOC. Manages shift rotations, SLA compliance (MTTD/MTTR), tooling budgets, stakeholder updates, and crisis communication during major incidents.`,handles:[`Shift scheduling & burnout prevention`,`Vendor contracts & tool evaluation`,`KPI tracking (Mean Time to Detect/Respond)`,`Executive briefings`],interactionWithL1:`Conducts your shift handovers, reviews escalation performance, and provides operational guidance when business impact decisions arise.`,skillsNeeded:[`Leadership`,`Crisis communication`,`Risk management`,`Security metrics`]},{id:`ciso`,role:`Chief Information Security Officer (CISO)`,badge:`EXECUTIVE LEADERSHIP`,isLearner:!1,tagline:`Enterprise Cyber Strategy & Board Governance`,escalationTo:`CEO & Board of Directors`,whatTheyDo:`Executive leader responsible for the entire organization’s cybersecurity posture, regulatory compliance, risk tolerance, cybersecurity insurance, and aligning security with business growth.`,handles:[`Board reporting`,`Regulatory audits (SEC, GDPR, NYDFS)`,`Enterprise risk strategy`,`Public disclosure of breach events`],interactionWithL1:`Rarely interacts directly with L1 in daily triage, but relies on accurate L1 triage data to understand organizational threat trends and defend FinCorp against catastrophic loss.`,skillsNeeded:[`Strategic vision`,`Corporate governance`,`Financial risk`,`Crisis diplomacy`]}],d=[{step:`MONITOR`,title:`Continuous Visibility`,icon:`eye`,desc:`Ingesting 50,000+ events per second from endpoints, cloud infrastructure, firewalls, and Active Directory.`,analystAction:`Review live SIEM dashboards, alert queues, and telemetry streams.`,isL1Focus:!1},{step:`DETECT`,title:`Automated Correlation`,icon:`zap`,desc:`Detection rules match incoming event streams against known attack patterns, thresholds, and behavioral anomalies.`,analystAction:`Detection engine triggers an Alert when thresholds (e.g. 10 failures in 2 mins) are met.`,isL1Focus:!1},{step:`ANALYZE`,title:`Analyst Triage & Scoping`,icon:`search`,desc:`Human judgment inspects the alert: Who is the user? What is the host? Is this normal business behavior or malicious intent?`,analystAction:`THIS IS YOUR PRIME L1 MISSION. Inspect evidence, correlate timelines, eliminate false positives, and assess true risk.`,isL1Focus:!0},{step:`RESPOND`,title:`Action, Containment & Closure`,icon:`shield-check`,desc:`Execute containment actions (isolate host, reset credentials, block IP), document the investigation, and resolve or escalate.`,analystAction:`Document case notes with root cause, provide remediation instructions, or escalate to Tier 2.`,isL1Focus:!1}],f=[{id:`siem`,name:`SIEM`,fullName:`Security Information & Event Management`,role:`The Central Brain of the SOC`,desc:`Aggregates, parses, normalizes, and indexes terabytes of log data from hundreds of enterprise systems into a unified searchable platform.`,tools:[`Splunk`,`Microsoft Sentinel`,`Elastic Security`,`Google Chronicle`],finCorpUsage:`FinCorp SIEM ingests 45,000 events/sec across all global branch offices and hosts the 4625/4624 authentication logs.`},{id:`edr`,name:`EDR`,fullName:`Endpoint Detection & Response`,role:`Deep Host-Level Agent & Telemetry`,desc:`Software agent installed on laptops, servers, and virtual machines. Records process trees, memory executions, network connections, and allows remote host containment.`,tools:[`CrowdStrike Falcon`,`Microsoft Defender for Endpoint`,`SentinelOne`],finCorpUsage:`Installed on FIN-PC-04. Shows us the exact caller executable (OUTLOOK.EXE vs winlogon.exe) triggering authentication.`},{id:`network`,name:`NDR / Firewalls`,fullName:`Network Detection & Firewalls`,role:`Perimeter & Internal Traffic Inspector`,desc:`Inspects packet headers, DNS queries, TLS handshakes, and NetFlow across internal subnets and edge boundaries.`,tools:[`Palo Alto Networks`,`Zeek`,`Suricata`,`Corelight`],finCorpUsage:`Validates that 10.10.20.15 is an internal trusted VLAN and traffic never left the corporate boundary.`},{id:`email`,name:`Email Security (SEG)`,fullName:`Secure Email Gateway`,role:`Inbound & Outbound Communication Shield`,desc:`Filters phishing, credential harvesting links, suspicious attachments, and business email compromise (BEC).`,tools:[`Proofpoint`,`Mimecast`,`Defender for Office 365`],finCorpUsage:`Monitors Jane Miller’s inbox for phishing lures that could have precipitated account compromise.`},{id:`threat-intel`,name:`Threat Intelligence (CTI)`,fullName:`Cyber Threat Intelligence Platform`,role:`External Adversary Context & IOC Database`,desc:`Enriches internal alerts with threat actor campaigns, malicious IP reputations, known file hashes, and CVE exploitability.`,tools:[`VirusTotal`,`Recorded Future`,`MISP`,`AlienVault OTX`],finCorpUsage:`Checks source IP 10.10.20.15 (RFC 1918 internal, 0 external reputation flags).`},{id:`case-soar`,name:`Case Management / SOAR`,fullName:`Security Orchestration, Automation & Response`,role:`Workflow Automation & Formal Audit Trail`,desc:`Coordinates alert tickets, automates repetitive enrichment lookups, records analyst notes, and enforces legal audit compliance.`,tools:[`TheHive`,`Splunk SOAR`,`Jira Service Management`,`Cortex XSOAR`],finCorpUsage:`Where you document ALT-2026-9042 and officially record your triage conclusion and recommendations.`}],p=[{id:1,title:`1. Security Sources`,subtitle:`Where data originates`,nodes:[`Workstations (FIN-PC-04)`,`Active Directory (DC01)`,`Firewalls & VPN`,`Cloud (Office 365)`],detail:`Jane’s laptop FIN-PC-04 and Domain Controller DC01 continuously generate raw system events whenever a login is attempted.`},{id:2,title:`2. Raw Security Data`,subtitle:`Telemetry streams into the pipe`,nodes:[`Event ID 4625 (Logon Failures)`,`Event ID 4624 (Logon Success)`,`Sysmon Process Logs`,`DHCP Lease Logs`],detail:`Windows Security logs record timestamp, account name, caller process, IP, and hex error codes (0xC000006A).`},{id:3,title:`3. Detection Engine`,subtitle:`Rule logic & correlation`,nodes:[`Rule DET-WIN-0422`,`Threshold: ≥10 failures / 120s`,`Correlation Window`,`Noise Filter`],detail:`The SIEM correlation engine notices 18 consecutive 4625 events within 84 seconds for Finance01. Threshold exceeded!`},{id:4,title:`4. Security Alert`,subtitle:`High-fidelity signal generated`,nodes:[`Alert ALT-2026-9042`,`Severity: Medium`,`Status: Unassigned`,`Queue: Tier 1 Triage`],detail:`A structured alert ticket is produced and dropped into the FinCorp L1 analyst dispatch queue.`},{id:5,title:`5. L1 SOC Analyst`,subtitle:`Human verification & triage`,nodes:[`YOU (Analyst L1)`,`Investigate Context`,`Examine User & Host`,`Correlate Timeline`],detail:`You pick up the alert. You look past the scary title and dig into the actual telemetry and business context.`},{id:6,title:`6. Decision & Action`,subtitle:`Resolution or Escalation`,nodes:[`Classify (Benign vs Malicious)`,`Document Case Notes`,`Close with Advice or Escalate to L2`],detail:`You discover the password reset ticket and the 4624 success. You document a Benign Positive and clear the queue!`}];function m(){return`
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- HERO SECTION -->
      <section style="margin-bottom: 4rem; position: relative;">
        
        <div style="display: grid; grid-template-columns: 1.15fr 0.85fr; gap: 2.5rem; align-items: center;">
          
          <!-- Hero Text -->
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 1.25rem;">
              <span class="genz-badge badge-alert">OPERATIONAL SHIFT ACTIVE</span>
              <span class="mono-data" style="font-size: 0.78rem;">FINCORP SOC • 10:25 AM EST</span>
            </div>

            <h1 style="margin-bottom: 1.25rem; line-height: 1.15;">
              Your first SOC shift <br/>
              <span class="gradient-text-cyan">starts now.</span>
            </h1>

            <p style="font-size: 1.15rem; color: var(--text-secondary); max-width: 580px; line-height: 1.65; margin-bottom: 2rem;">
              You’re the L1 analyst. The alerts are live. The evidence is waiting. 
              An authentication burst on <span class="mono-data">FIN-PC-04</span> demands your call. What happens next defines FinCorp's security.
            </p>

            <!-- Hero CTAs -->
            <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
              <button class="btn btn-primary" data-nav="topic-1" style="font-size: 1.05rem; padding: 0.85rem 2rem; box-shadow: 0 0 25px var(--cyan-glow);">
                START YOUR SHIFT →
              </button>
              <button class="btn btn-secondary" data-nav="course" style="font-size: 1.05rem; padding: 0.85rem 1.75rem;">
                EXPLORE MODULE MAP
              </button>
            </div>

            <!-- Mini Live Indicators -->
            <div style="display: flex; align-items: center; gap: 2rem; margin-top: 2.5rem; border-top: 1px solid var(--border-subtle); padding-top: 1.5rem;">
              <div>
                <div style="font-family: var(--font-mono); font-size: 1.35rem; font-weight: 800; color: var(--text-bright);">18</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Failed 4625 Events</div>
              </div>
              <div style="border-left: 1px solid var(--border-subtle); padding-left: 2rem;">
                <div style="font-family: var(--font-mono); font-size: 1.35rem; font-weight: 800; color: var(--success);">1</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Pivotal 4624 Success</div>
              </div>
              <div style="border-left: 1px solid var(--border-subtle); padding-left: 2rem;">
                <div style="font-family: var(--font-mono); font-size: 1.35rem; font-weight: 800; color: var(--cyan-primary);">100%</div>
                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Investigative Fidelity</div>
              </div>
            </div>
          </div>

          <!-- Stylized SOC Monitor & Radar HUD -->
          <div class="glass-panel" style="padding: 1.5rem; background: rgba(10, 16, 31, 0.85); border-color: rgba(0, 242, 254, 0.3); box-shadow: 0 16px 48px rgba(0, 0, 0, 0.7);">
            
            <!-- Terminal Header -->
            <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.75rem; margin-bottom: 1rem;">
              <div style="display: flex; align-items: center; gap: 0.4rem;">
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #ef4444;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #f59e0b;"></span>
                <span style="width: 10px; height: 10px; border-radius: 50%; background: #10b981;"></span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted); margin-left: 0.5rem;">fincorp-soc-telemetry-feed</span>
              </div>
              <span class="status-indicator status-alert" title="Incoming Alert Pulse"></span>
            </div>

            <!-- Stylized Alert Pulse Box -->
            <div class="glass-panel-alert pulse-alert-node" style="padding: 1.25rem; border-radius: 8px; margin-bottom: 1rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <span class="genz-badge badge-alert" style="font-size: 0.65rem;">🚨 LIVE ALERT DISPATCH</span>
                <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #fca5a5;">10:32 AM</span>
              </div>
              <div style="font-weight: 800; font-size: 1.05rem; color: var(--text-bright); margin-bottom: 0.25rem;">
                Multiple Failed Login Attempts
              </div>
              <div style="font-size: 0.8rem; font-family: var(--font-mono); color: #fca5a5;">
                User: Finance01 | Host: FIN-PC-04 | IP: 10.10.20.15
              </div>
            </div>

            <!-- Stream Snippet -->
            <div style="background: rgba(0, 0, 0, 0.4); border-radius: 6px; padding: 0.85rem; font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
              <div style="color: #f87171;">[10:30:01] WIN-EVT-4625 | User: Finance01 | SubStatus: 0xC000006A</div>
              <div style="color: #f87171;">[10:30:20] WIN-EVT-4625 | User: Finance01 | SubStatus: 0xC000006A</div>
              <div style="color: #f87171;">[10:30:40] WIN-EVT-4625 | User: Finance01 | SubStatus: 0xC000006A</div>
              <div style="color: #4ade80; font-weight: 700;">[10:31:45] WIN-EVT-4624 | User: Finance01 | LogonType: 2 (SUCCESS)</div>
            </div>

            <!-- Radar / Network Mini Diagram -->
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.5rem; background: rgba(255,255,255,0.02); border-radius: 6px; border: 1px solid var(--border-subtle);">
              <div style="display: flex; align-items: center; gap: 0.5rem;">
                <div style="width: 24px; height: 24px; border-radius: 50%; background: var(--cyan-subtle); border: 1px solid var(--cyan-primary); display: flex; align-items: center; justify-content: center; font-size: 0.7rem; color: var(--cyan-primary); font-weight: 700;">L1</div>
                <div style="font-size: 0.78rem; font-weight: 600; color: var(--text-bright);">Assigned: ${r.state.profile.callsign}</div>
              </div>
              <button class="btn btn-outline-cyan" data-nav="topic-3" style="padding: 0.35rem 0.75rem; font-size: 0.75rem;">
                Open Triage →
              </button>
            </div>

          </div>

        </div>

      </section>

      <!-- WHAT YOU'LL LEARN CARDS -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span class="genz-badge badge-key-idea">CORE CURRICULUM</span>
            <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-bright); margin-top: 0.35rem;">
              What You'll Master in Module 4
            </h2>
          </div>
          <div style="font-size: 0.85rem; color: var(--text-muted);">
            6 Progressive Operational Stages • Hands-on FinCorp Scenario
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          ${l.topics.map(e=>`
            <div class="glass-panel" data-nav="${e.id}" style="padding: 1.6rem; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; transition: all 0.25s ease;">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                  <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-primary); font-weight: 800; background: var(--cyan-subtle); padding: 0.2rem 0.5rem; border-radius: 4px;">
                    STAGE ${e.index}
                  </span>
                  <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">${e.time}</span>
                </div>
                <h3 style="font-size: 1.2rem; font-weight: 700; color: var(--text-bright); margin-bottom: 0.5rem;">
                  ${e.title}
                </h3>
                <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55; margin-bottom: 1.25rem;">
                  ${e.description}
                </p>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
                <span class="genz-badge badge-tech-box" style="font-size: 0.7rem;">+${e.xp} XP</span>
                <span style="font-size: 0.85rem; color: var(--cyan-primary); font-weight: 600; display: flex; align-items: center; gap: 0.3rem;">
                  Start Stage →
                </span>
              </div>
            </div>
          `).join(``)}
        </div>
      </section>

      <!-- THE STORY: CINEMATIC TIMELINE -->
      <section style="margin-bottom: 3rem;">
        ${c()}
      </section>

    </div>
  `}function h(e){let t=r.state;return`
    <div class="glass-panel" style="padding: 1.5rem 2rem; margin: 1.5rem 0 2.5rem 0; background: rgba(10, 16, 31, 0.7);">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
        <div style="display: flex; align-items: center; gap: 0.75rem;">
          <span class="genz-badge badge-key-idea">MISSION PROGRESS</span>
          <span style="font-weight: 700; font-size: 0.95rem; color: var(--text-bright);">Shift Alpha — Investigation Progression</span>
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text);">
          ${t.completedTopics.length} / 6 STAGES COMPLETED
        </div>
      </div>

      <div class="progression-track">
        ${[{id:`topic-1`,index:`01`,title:`SOC Architecture`,nav:`topic-1`},{id:`topic-2`,index:`02`,title:`Alerts & Events`,nav:`topic-2`},{id:`topic-3`,index:`03`,title:`Alert Triage`,nav:`topic-3`},{id:`topic-4`,index:`04`,title:`False Positives`,nav:`topic-4`},{id:`topic-5`,index:`05`,title:`Severity`,nav:`topic-5`},{id:`topic-6`,index:`06`,title:`Final Challenge`,nav:`topic-6`}].map(n=>{let r=t.completedTopics.includes(n.id),i=e===n.id,a=!t.unlockedTopics.includes(n.id),o=``;return r?o=`completed`:i?o=`current`:a&&(o=`locked`),`
            <button class="progression-node ${o}" data-nav="${n.nav}" title="Stage ${n.index}: ${n.title}">
              <div class="node-circle">
                ${r?`
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                `:n.index}
              </div>
              <span class="node-label">${n.title}</span>
            </button>
          `}).join(``)}
      </div>
    </div>
  `}function g(){let e=r.state,t=e.completedTopics.length,n=Math.min(100,Math.round(t/6*100));return`
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Course Header HUD -->
      <section style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-demo">CURRICULUM PORTAL</span>
              <span class="mono-data">${l.code}</span>
            </div>
            <h1 style="margin-bottom: 0.5rem;">
              SOC Analyst L1 — <span class="gradient-text-cyan">Module 4: SOC Operations</span>
            </h1>
            <p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 780px;">
              ${l.description}
            </p>
          </div>

          <!-- Overall Progress Card -->
          <div class="glass-panel" style="padding: 1.5rem; min-width: 240px; background: rgba(14, 21, 38, 0.9);">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">
              SHIFT CURRICULUM PROGRESS
            </div>
            <div style="font-size: 2rem; font-weight: 800; font-family: var(--font-mono); color: var(--cyan-primary); margin: 0.25rem 0;">
              ${n}%
            </div>
            <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden; margin-bottom: 0.5rem;">
              <div style="width: ${n}%; height: 100%; background: linear-gradient(90deg, #00f2fe, #8b5cf6);"></div>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-secondary);">
              ${t} of 6 Stages Mastered (${e.xp} / 1,250 XP)
            </div>
          </div>
        </div>

        <!-- Progression Track -->
        ${h(null)}
      </section>

      <!-- Topics Breakdown Grid -->
      <section>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
          <h2 style="font-size: 1.6rem; color: var(--text-bright);">
            The 6 Investigation Stages
          </h2>
          <div style="font-size: 0.82rem; color: var(--cyan-text); font-family: var(--font-mono);">
            CONTINUOUS STORY: FINCORP FINANCE01 INCIDENT
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 1.25rem;">
          ${l.topics.map(t=>{let n=e.completedTopics.includes(t.id);return`
              <div class="glass-panel" style="padding: 1.75rem 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; transition: all 0.25s ease;">
                <div style="display: flex; align-items: flex-start; gap: 1.5rem; max-width: 820px;">
                  <div style="width: 52px; height: 52px; border-radius: 12px; background: ${n?`var(--cyan-subtle)`:`rgba(255,255,255,0.03)`}; border: 1px solid ${n?`var(--cyan-primary)`:`var(--border-subtle)`}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: ${n?`var(--cyan-primary)`:`var(--text-secondary)`};">
                    ${n?`
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                    `:`
                      <span style="font-family: var(--font-mono); font-weight: 800; font-size: 1.1rem;">${t.index}</span>
                    `}
                  </div>

                  <div>
                    <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.35rem;">
                      <span class="mono-data" style="font-size: 0.75rem;">STAGE ${t.index} • ${t.time}</span>
                      <span class="genz-badge badge-tech-box" style="font-size: 0.68rem;">+${t.xp} XP</span>
                      ${n?`
                        <span class="genz-badge badge-try-it" style="font-size: 0.68rem;">COMPLETED</span>
                      `:``}
                    </div>

                    <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.35rem;">
                      ${t.title} — ${t.subtitle}
                    </h3>

                    <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.55;">
                      ${t.description}
                    </p>
                  </div>
                </div>

                <div>
                  <button class="btn ${n?`btn-secondary`:`btn-primary`}" data-nav="${t.id}" style="font-size: 0.9rem; padding: 0.65rem 1.6rem;">
                    ${n?`Review Stage`:`Launch Stage →`}
                  </button>
                </div>
              </div>
            `}).join(``)}
        </div>
      </section>

    </div>
  `}var _={id:`ALT-2026-9042`,title:`Multiple Failed Login Attempts`,name:`Multiple Failed Login Attempts (Windows Auth)`,ruleId:`DET-WIN-0422`,status:`Open - Under Triage`,severity:`Medium`,initialScore:5.8,createdAt:`10:32:00 AM`,shiftTimestamp:`10:32 AM`,assignee:`Learner (L1 SOC Analyst)`,analystCallsign:`Analyst L1`,mitre:{tactic:`TA0006 - Credential Access`,technique:`T1110.001 - Brute Force: Password Guessing`,url:`https://attack.mitre.org/techniques/T1110/001/`},user:{id:`USR-8821`,username:`Finance01`,fullName:`Jane Miller`,email:`jane.miller@fincorp-global.com`,role:`Senior Finance Analyst`,department:`Corporate Treasury & Finance`,manager:`David Henderson (Treasury VP)`,location:`Building B, Floor 3, Desk 342`,accountStatus:`Active`,isPrivileged:!1,privilegedNote:`Standard Domain User. Not member of Domain Admins or Enterprise Admins.`,passwordLastSet:`Today, 10:15:22 AM (Self-Service Reset)`,groups:[`Finance-All`,`Treasury-ERP-Users`,`Standard-Workstations-Access`]},host:{id:`AST-FIN-0094`,hostname:`FIN-PC-04`,fqdn:`fin-pc-04.corp.fincorp.local`,ip:`10.10.20.15`,mac:`00:1A:2B:3C:4D:5E`,os:`Windows 11 Enterprise (Build 22631.3007)`,assetType:`Employee Workstation (Laptop)`,department:`Finance`,criticality:`Medium - Department Workstation`,edrStatus:`Active & Healthy (FinCorp Defender EDR v8.2)`,lastReboot:`Yesterday, 6:00 PM`,isolated:!1},network:{sourceIp:`10.10.20.15`,destinationIp:`10.10.10.20 (DC01.corp.fincorp.local - Active Directory)`,subnet:`10.10.20.0/24 (Finance Workstations VLAN 20)`,gateway:`10.10.20.1`,dns:`10.10.10.20`,scope:`Internal Private Subnet`,isExternal:!1,reputationScore:`Clean (Internal Trusted Host)`,geo:`Internal LAN / New York FinCorp HQ`},detectionLogic:{name:`Windows - Excessive Authentication Failures Single Account`,description:`Triggers when 10 or more Windows Event ID 4625 (Logon Failure) events occur for the same target user within a 2-minute sliding window.`,threshold:`10 failures in 120s`,observedFailures:18,timeWindow:`10:30:01 - 10:31:25 (84 seconds)`},helpdeskTicket:{ticketId:`IT-94821`,timestamp:`10:15:22 AM`,requestedBy:`Jane Miller (Finance01)`,category:`Identity & Access / Password Reset`,status:`Resolved / Closed`,technician:`FinCorp Helpdesk Bot / Automated Portal`,notes:`User requested self-service password reset due to policy expiration prompt. 2FA push approved via mobile authenticator. New password committed to Active Directory at 10:15:22 AM. Workstation FIN-PC-04 was in sleep mode at employee desk.`},events:[{id:1,time:`10:30:01`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:2,time:`10:30:06`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:3,time:`10:30:11`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:4,time:`10:30:16`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`svchost.exe (Lanman)`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Network share auto-reconnect \\\\fs01\\finance`},{id:5,time:`10:30:20`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:6,time:`10:30:25`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:7,time:`10:30:30`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`svchost.exe (Lanman)`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Network share auto-reconnect \\\\fs01\\finance`},{id:8,time:`10:30:35`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:9,time:`10:30:40`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:10,time:`10:30:45`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`teams.exe`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Cloud identity sync attempt with cached token`},{id:11,time:`10:30:50`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:12,time:`10:30:55`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:13,time:`10:31:00`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`svchost.exe (Lanman)`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Network share auto-reconnect \\\\fs01\\finance`},{id:14,time:`10:31:05`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:15,time:`10:31:10`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:16,time:`10:31:15`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:17,time:`10:31:20`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:18,time:`10:31:25`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`winlogon.exe`,logonType:2,subStatus:`0xC000006A`,description:`Interactive logon failure: Jane typed old password by reflex at lock screen`},{id:19,time:`10:31:45`,eventId:4624,type:`Logon Success`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`winlogon.exe`,logonType:2,subStatus:`0x0 (STATUS_SUCCESS)`,description:`Interactive logon SUCCESS: Jane entered new updated password at console`}]};function v(){let e=_,t=r.state;return`
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Operational HUD Header -->
      <section style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.25rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-alert">ACTIVE OPERATION</span>
              <span class="mono-data">DEFCON 4 • ELEVATED SURVEILLANCE</span>
            </div>
            <h1 style="font-size: 2.2rem; margin-bottom: 0.35rem;">
              Mission: <span class="gradient-text-cyan">Investigate Finance01</span>
            </h1>
            <p style="font-size: 1rem; color: var(--text-secondary);">
              Operational Case: <span class="mono-data">${e.id}</span> • Assigned to ${t.profile.callsign} (${t.profile.shiftId})
            </p>
          </div>

          <div style="display: flex; gap: 0.75rem;">
            <button class="btn btn-primary" data-nav="topic-3" style="font-size: 0.9rem; padding: 0.65rem 1.4rem;">
              Open Triage Console →
            </button>
            <button class="btn btn-secondary" data-nav="labs" style="font-size: 0.9rem; padding: 0.65rem 1.2rem;">
              SIEM Query Sandbox
            </button>
          </div>
        </div>
      </section>

      <!-- Mission Overview 3-Column Grid -->
      <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 1.5rem; margin-bottom: 3rem;">
        
        <!-- Left Column: Threat Status & Telemetry Summary -->
        <div style="display: flex; flex-direction: column; gap: 1.5rem;">
          
          <!-- Live Threat Alert Card -->
          <div class="glass-panel" style="padding: 1.75rem; border-color: rgba(239, 68, 68, 0.4); background: rgba(25, 12, 18, 0.85);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="genz-badge badge-alert">INCIDENT QUEUE ITEM #1</span>
              <span class="mono-data" style="color: #fca5a5;">SEVERITY: MEDIUM (5.8)</span>
            </div>
            <h3 style="font-size: 1.3rem; color: var(--text-bright); margin-bottom: 0.5rem;">
              ${e.title}
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
              Detection rule <span class="mono-data">${e.ruleId}</span> observed 18 authentication failures within 84 seconds for target user <span class="mono-data">${e.user.username}</span> from workstation <span class="mono-data">${e.host.hostname}</span> (<span class="mono-data">${e.network.sourceIp}</span>).
            </p>

            <div style="display: flex; gap: 0.75rem;">
              <button class="btn btn-alert" data-nav="topic-3" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                Investigate in Triage Tab
              </button>
              <button class="btn btn-secondary" data-nav="topic-4" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                Check False Positive Tree
              </button>
            </div>
          </div>

          <!-- Entity Summary Cards -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
            <div class="glass-panel" style="padding: 1.25rem; background: rgba(15, 23, 42, 0.7);">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.25rem;">TARGET USER</div>
              <div style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">${e.user.username}</div>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">${e.user.fullName}</div>
              <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.35rem;">Finance Executive</div>
            </div>

            <div class="glass-panel" style="padding: 1.25rem; background: rgba(15, 23, 42, 0.7);">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.25rem;">TARGET HOST</div>
              <div style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">${e.host.hostname}</div>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Windows 11</div>
              <div style="font-size: 0.72rem; color: var(--success); margin-top: 0.35rem;">EDR Active</div>
            </div>

            <div class="glass-panel" style="padding: 1.25rem; background: rgba(15, 23, 42, 0.7);">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.25rem;">SOURCE IP</div>
              <div style="font-weight: 700; font-family: var(--font-mono); color: var(--text-bright); font-size: 0.95rem;">${e.network.sourceIp}</div>
              <div style="font-size: 0.78rem; color: var(--text-secondary);">Finance VLAN 20</div>
              <div style="font-size: 0.72rem; color: var(--cyan-text); margin-top: 0.35rem;">RFC 1918 Private</div>
            </div>
          </div>

        </div>

        <!-- Right Column: Shift Briefing & Objectives -->
        <div class="glass-panel" style="padding: 1.75rem; background: rgba(14, 21, 38, 0.9);">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem;">
            <span class="genz-badge badge-key-idea">MISSION OBJECTIVES</span>
            <span style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">SHIFT CHECKLIST</span>
          </div>

          <h3 style="font-size: 1.2rem; color: var(--text-bright); margin-bottom: 1rem;">
            Operational Steps for Shift Alpha
          </h3>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${[{id:`topic-1`,title:`1. Review SOC Architecture & Escalation Path`,completed:t.completedTopics.includes(`topic-1`)},{id:`topic-2`,title:`2. Analyze 4625/4624 Event Streams & Thresholds`,completed:t.completedTopics.includes(`topic-2`)},{id:`topic-3`,title:`3. Execute 5-Point Entity Triage on Finance01`,completed:t.completedTopics.includes(`topic-3`)},{id:`topic-4`,title:`4. Test False Positive Hypotheses (Cached Credential)`,completed:t.completedTopics.includes(`topic-4`)},{id:`topic-5`,title:`5. Calculate Dynamic Severity & Impact Score`,completed:t.completedTopics.includes(`topic-5`)},{id:`topic-6`,title:`6. Complete Case ALT-2026-9042 Shift Trial`,completed:t.completedTopics.includes(`topic-6`)}].map(e=>`
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px;">
                <div style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.88rem; color: ${e.completed?`var(--text-bright)`:`var(--text-secondary)`};">
                  <span style="color: ${e.completed?`var(--success)`:`var(--text-muted)`}; font-weight: 700;">
                    ${e.completed?`✓`:`○`}
                  </span>
                  <span>${e.title}</span>
                </div>
                <button class="btn btn-secondary" data-nav="${e.id}" style="font-size: 0.75rem; padding: 0.3rem 0.7rem;">
                  Jump →
                </button>
              </div>
            `).join(``)}
          </div>
        </div>

      </div>

    </div>
  `}var y=`l1`;function b(){let e=u.find(e=>e.id===y)||u[0];return`
    <div style="margin: 2rem 0;">
      <!-- Escalation Path Header Indicator -->
      <div class="glass-panel" style="padding: 1.25rem 1.75rem; margin-bottom: 1.5rem; background: rgba(15, 23, 42, 0.7); border-color: rgba(0, 242, 254, 0.2);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="genz-badge badge-pro-tip">TECHNICAL ESCALATION PATH</span>
            <span style="font-size: 0.9rem; color: var(--text-bright); font-weight: 600;">Standard Tiered Incident Escalation:</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem; font-family: var(--font-mono); font-size: 0.85rem;">
            <span style="color: var(--cyan-primary); font-weight: 700; background: var(--cyan-subtle); padding: 0.2rem 0.6rem; border-radius: 4px; border: 1px solid var(--border-cyan);">L1 (TRIAGE)</span>
            <span style="color: var(--text-muted);">➔</span>
            <span style="color: #c084fc; font-weight: 700; background: rgba(139,92,246,0.1); padding: 0.2rem 0.6rem; border-radius: 4px; border: 1px solid rgba(139,92,246,0.3);">L2 (INVESTIGATION)</span>
            <span style="color: var(--text-muted);">➔</span>
            <span style="color: #f87171; font-weight: 700; background: rgba(239,68,68,0.1); padding: 0.2rem 0.6rem; border-radius: 4px; border: 1px solid rgba(239,68,68,0.3);">L3 (DEEP HUNT/FORENSICS)</span>
          </div>
        </div>
      </div>

      <!-- Team Grid Split: Technical Operations vs Leadership -->
      <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 1.5rem;">
        
        <!-- Role Selection Cards -->
        <div>
          <div style="font-size: 0.82rem; text-transform: uppercase; color: var(--text-muted); font-family: var(--font-mono); margin-bottom: 0.75rem; letter-spacing: 0.05em;">
            OPERATIONAL TIERS (SELECT TO INSPECT)
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            ${u.map(e=>{let t=e.id===y,n=e.isLearner;return`
                <div class="team-card ${t?`glass-panel-cyan`:``} ${n?`learner-highlight`:``}" 
                     data-role-id="${e.id}" 
                     style="padding: 1.15rem 1.4rem; cursor: pointer; display: flex; align-items: center; justify-content: space-between;">
                  <div>
                    <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.25rem;">
                      <span style="font-weight: 700; font-size: 1.05rem; color: ${n?`var(--cyan-primary)`:`var(--text-bright)`};">
                        ${e.role}
                      </span>
                      <span class="genz-badge ${n?`badge-alert`:`badge-demo`}" style="font-size: 0.65rem;">
                        ${e.badge}
                      </span>
                    </div>
                    <div style="font-size: 0.82rem; color: var(--text-secondary);">
                      ${e.tagline}
                    </div>
                  </div>
                  <div style="color: ${t?`var(--cyan-primary)`:`var(--text-muted)`};">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                </div>
              `}).join(``)}
          </div>
        </div>

        <!-- Role Detail Inspector Modal/Panel -->
        <div class="glass-panel" style="padding: 1.75rem; background: rgba(15, 23, 42, 0.85); border-color: rgba(0, 242, 254, 0.3); height: fit-content;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 1rem;">
            <div>
              <span class="genz-badge ${e.isLearner?`badge-alert`:`badge-tech-box`}" style="margin-bottom: 0.5rem;">
                ${e.badge}
              </span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); font-weight: 800;">
                ${e.role}
              </h3>
            </div>
            ${e.isLearner?`
              <div style="padding: 0.3rem 0.6rem; background: var(--cyan-subtle); border: 1px solid var(--cyan-primary); border-radius: 6px; font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-primary);">
                ACTIVE USER SEAT
              </div>
            `:``}
          </div>

          <div style="margin-bottom: 1.25rem;">
            <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); text-transform: uppercase; margin-bottom: 0.35rem;">
              Core Mission & Responsibilities
            </div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
              ${e.whatTheyDo}
            </p>
          </div>

          ${e.handles?`
            <div style="margin-bottom: 1.25rem;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); text-transform: uppercase; margin-bottom: 0.5rem;">
                Typical Workflows Handled
              </div>
              <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.45rem;">
                ${e.handles.map(e=>`
                  <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-size: 0.85rem; color: var(--text-secondary);">
                    <span style="color: var(--cyan-primary); margin-top: 2px;">▸</span>
                    <span>${e}</span>
                  </li>
                `).join(``)}
              </ul>
            </div>
          `:``}

          ${e.subdisciplines?`
            <div style="margin-bottom: 1.25rem;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); text-transform: uppercase; margin-bottom: 0.5rem;">
                Specialized Sub-Units
              </div>
              <div style="display: flex; flex-direction: column; gap: 0.5rem;">
                ${e.subdisciplines.map(e=>`
                  <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.5rem 0.75rem;">
                    <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">${e.name}</div>
                    <div style="font-size: 0.78rem; color: var(--text-secondary);">${e.role}</div>
                  </div>
                `).join(``)}
              </div>
            </div>
          `:``}

          <div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 8px; padding: 1rem; margin-top: 1.25rem;">
            <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-primary); font-weight: 700; text-transform: uppercase; margin-bottom: 0.35rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
              When does the L1 Analyst interact with them?
            </div>
            <p style="font-size: 0.85rem; color: var(--text-bright); line-height: 1.5;">
              ${e.interactionWithL1}
            </p>
          </div>
        </div>

      </div>
    </div>
  `}function x(){document.querySelectorAll(`[data-role-id]`).forEach(e=>{e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-role-id`);if(t){y=t;let e=document.getElementById(`team-map-container`);e&&(e.innerHTML=b(),x())}})})}var S=2;function C(){let e=d[S];return`
    <div style="margin: 2rem 0;">
      <!-- Steps Selector Strip -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem;">
        ${d.map((e,t)=>{let n=t===S,r=e.isL1Focus;return`
            <div class="glass-panel ${n?`glass-panel-cyan`:``}" 
                 data-process-idx="${t}"
                 style="padding: 1.25rem 1rem; text-align: center; cursor: pointer; transition: all 0.25s ease; position: relative;">
              ${r?`
                <div style="position: absolute; top: -10px; right: 12px; background: var(--cyan-primary); color: #050811; font-size: 0.65rem; font-weight: 800; font-family: var(--font-mono); padding: 0.15rem 0.45rem; border-radius: 4px; box-shadow: 0 0 10px var(--cyan-glow);">
                  YOUR SEAT
                </div>
              `:``}

              <div style="width: 44px; height: 44px; border-radius: 50%; background: ${n?`var(--cyan-subtle)`:`rgba(255,255,255,0.04)`}; border: 1px solid ${n?`var(--cyan-primary)`:`var(--border-subtle)`}; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem auto; color: ${n?`var(--cyan-primary)`:`var(--text-secondary)`};">
                <span style="font-weight: 800; font-size: 1rem; font-family: var(--font-mono);">0${t+1}</span>
              </div>

              <div style="font-weight: 800; font-size: 0.98rem; color: ${n?`var(--cyan-primary)`:`var(--text-bright)`}; letter-spacing: 0.04em;">
                ${e.step}
              </div>

              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">
                ${e.title}
              </div>
            </div>
          `}).join(``)}
      </div>

      <!-- Active Stage Detailed Card -->
      <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.85); border-color: rgba(0, 242, 254, 0.35);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span class="genz-badge ${e.isL1Focus?`badge-alert`:`badge-key-idea`}">
              PHASE 0${S+1} OF 04
            </span>
            <h3 style="font-size: 1.4rem; color: var(--text-bright); font-weight: 800;">
              ${e.step}: ${e.title}
            </h3>
          </div>
          ${e.isL1Focus?`
            <span class="genz-badge badge-try-it" style="font-size: 0.8rem; padding: 0.3rem 0.75rem;">
              ⭐ TIER 1 CORE MISSION
            </span>
          `:``}
        </div>

        <p style="font-size: 1.05rem; color: var(--text-main); margin-bottom: 1.25rem; line-height: 1.6;">
          ${e.desc}
        </p>

        <div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.25); border-radius: 8px; padding: 1.2rem; display: flex; align-items: flex-start; gap: 0.85rem;">
          <div style="color: var(--cyan-primary); margin-top: 2px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <div>
            <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-primary); font-weight: 700; text-transform: uppercase; margin-bottom: 0.25rem;">
              Analyst Operational Execution
            </div>
            <div style="font-size: 0.95rem; color: var(--text-bright); font-weight: 500;">
              ${e.analystAction}
            </div>
          </div>
        </div>
      </div>
    </div>
  `}function w(){document.querySelectorAll(`[data-process-idx]`).forEach(e=>{e.addEventListener(`click`,e=>{let t=parseInt(e.currentTarget.getAttribute(`data-process-idx`),10);if(!isNaN(t)){S=t;let e=document.getElementById(`process-flow-container`);e&&(e.innerHTML=C(),w())}})})}var T=1;function E(){let e=p.find(e=>e.id===T)||p[0];return`
    <div style="margin: 2rem 0;">
      <!-- Pipeline Visualization Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span class="genz-badge badge-try-it">LIVE TELEMETRY PIPELINE</span>
          <span style="font-size: 0.9rem; font-weight: 700; color: var(--text-bright);">From Endpoint Packet to Analyst Decision</span>
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--cyan-text);">
          CLICK ANY NODE TO INSPECT TELEMETRY
        </div>
      </div>

      <!-- Glowing Interactive Pipeline Nodes -->
      <div class="data-flow-pipe" style="grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));">
        ${p.map(e=>{let t=e.id===T,n=e.id===5,r=e.id===4,i=`var(--border-subtle)`;return t?i=`var(--cyan-primary)`:r&&(i=`rgba(239, 68, 68, 0.4)`),`
            <div class="flow-node ${t?`active`:``} ${r?`pulse-alert-node`:``}" 
                 data-flow-id="${e.id}"
                 style="border-color: ${i}; background: ${t?`rgba(0, 242, 254, 0.08)`:`var(--bg-card)`};">
              
              <div style="font-family: var(--font-mono); font-size: 0.7rem; color: ${r?`var(--danger)`:`var(--cyan-primary)`}; font-weight: 700; margin-bottom: 0.35rem;">
                STAGE 0${e.id}
              </div>

              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-bright); margin-bottom: 0.25rem;">
                ${e.title.split(`. `)[1]}
              </div>

              <div style="font-size: 0.75rem; color: var(--text-secondary);">
                ${e.subtitle}
              </div>

              ${n?`
                <div style="margin-top: 0.6rem; font-size: 0.65rem; background: var(--cyan-subtle); color: var(--cyan-primary); padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 700;">
                  YOU (L1)
                </div>
              `:``}

              ${r?`
                <div style="margin-top: 0.6rem; font-size: 0.65rem; background: var(--danger-subtle); color: #f87171; padding: 0.15rem 0.4rem; border-radius: 4px; font-weight: 700;">
                  🚨 THRESHOLD
                </div>
              `:``}
            </div>
          `}).join(``)}
      </div>

      <!-- Animated SVG Conduit -->
      <div style="width: 100%; height: 24px; position: relative; margin: 0.75rem 0 1.5rem 0; overflow: hidden;">
        <svg width="100%" height="24" viewBox="0 0 1000 24" preserveAspectRatio="none">
          <line x1="0" y1="12" x2="1000" y2="12" stroke="rgba(255,255,255,0.1)" stroke-width="2" stroke-dasharray="6,6"/>
          <line x1="0" y1="12" x2="1000" y2="12" stroke="var(--cyan-primary)" stroke-width="2" stroke-dasharray="12,180" style="animation: flow-line 3s linear infinite;"/>
        </svg>
      </div>

      <!-- Stage Detail Callout -->
      <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9); border-color: rgba(0, 242, 254, 0.3);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <h4 style="font-size: 1.15rem; color: var(--text-bright); font-weight: 700;">
            ${e.title}
          </h4>
          <span class="genz-badge badge-tech-box">FinCorp SOC Live Architecture</span>
        </div>

        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
          ${e.detail}
        </p>

        <div>
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); text-transform: uppercase; margin-bottom: 0.5rem;">
            Active Telemetry Components in this Stage:
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
            ${e.nodes.map(e=>`
              <span class="mono-data" style="font-size: 0.8rem; padding: 0.3rem 0.65rem;">
                ${e}
              </span>
            `).join(``)}
          </div>
        </div>
      </div>
    </div>
  `}function ee(){document.querySelectorAll(`[data-flow-id]`).forEach(e=>{e.addEventListener(`click`,e=>{let t=parseInt(e.currentTarget.getAttribute(`data-flow-id`),10);if(!isNaN(t)){T=t;let e=document.getElementById(`data-flow-container`);e&&(e.innerHTML=E(),ee())}})})}var D=`siem`;function te(){let e=f.find(e=>e.id===D)||f[0];return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${h(`topic-1`)}

      <!-- TOPIC HERO & STORY -->
      <section style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-demo">TOPIC 01 • 10:25 AM</span>
          <span class="mono-data">FINCORP CYBER DEFENSE CENTER</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Welcome to the <span class="gradient-text-cyan">SOC.</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--cyan-primary); margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text); margin-bottom: 0.4rem; text-transform: uppercase;">
            SHIFT DISPATCH • 10:25 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "You’ve just clocked in for your very first shift as a Tier 1 SOC Analyst at FinCorp HQ. 
            The monitors hum around you with live global telemetry. Before you can catch your breath and grab your morning coffee, 
            you need to understand the four pillars of the SOC machine: <strong>People, Process, Technology, and Security Data.</strong>"
          </p>
        </div>

        <!-- 4 Pillars Cards Navigation Overview -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin-bottom: 3rem;">
          <a href="#section-people" style="text-decoration: none;" class="glass-panel" style="padding: 1.5rem; cursor: pointer;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">PILLAR 01</span>
              <h3 style="font-size: 1.15rem; color: var(--text-bright);">PEOPLE</h3>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              Tiered escalation hierarchy from L1 Triage to L2, L3, Domain Specialists, SOC Manager, and CISO.
            </p>
          </a>

          <a href="#section-process" style="text-decoration: none;" class="glass-panel" style="padding: 1.5rem; cursor: pointer;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">PILLAR 02</span>
              <h3 style="font-size: 1.15rem; color: var(--text-bright);">PROCESS</h3>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              The continuous operational lifecycle: Monitor ➔ Detect ➔ Analyze (Your Core Focus) ➔ Respond.
            </p>
          </a>

          <a href="#section-technology" style="text-decoration: none;" class="glass-panel" style="padding: 1.5rem; cursor: pointer;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">PILLAR 03</span>
              <h3 style="font-size: 1.15rem; color: var(--text-bright);">TECHNOLOGY</h3>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              SIEM, EDR, NDR, Secure Email Gateways, Threat Intelligence feeds, and SOAR case management.
            </p>
          </a>

          <a href="#section-dataflow" style="text-decoration: none;" class="glass-panel" style="padding: 1.5rem; cursor: pointer;">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-alert">PILLAR 04</span>
              <h3 style="font-size: 1.15rem; color: var(--text-bright);">SECURITY DATA</h3>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary);">
              The end-to-end data pipeline: Sources ➔ Logs ➔ Detection ➔ Alert ➔ L1 Triage ➔ Resolution.
            </p>
          </a>
        </div>
      </section>

      <!-- PILLAR 1: PEOPLE -->
      <section id="section-people" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-demo">PILLAR 01: TEAM ARCHITECTURE</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">ESCALATION HIERARCHY</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.75rem;">
          Who's in the SOC?
        </h2>
        <p style="font-size: 1rem; color: var(--text-secondary); max-width: 800px; margin-bottom: 1.5rem;">
          A Security Operations Center functions as an elite coordinated unit. Technical escalations flow upward from <strong>L1 ➔ L2 ➔ L3</strong>, while Operational Leadership (SOC Manager) and Executive Strategy (CISO) provide governance and mission direction.
        </p>

        <div id="team-map-container">
          ${b()}
        </div>
      </section>

      <!-- PILLAR 2: PROCESS -->
      <section id="section-process" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-try-it">PILLAR 02: OPERATIONAL WORKFLOW</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">THE SOC LIFECYCLE</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.75rem;">
          The 4-Stage Operational Loop
        </h2>
        <p style="font-size: 1rem; color: var(--text-secondary); max-width: 800px; margin-bottom: 1.5rem;">
          Security is an unbroken circular engine. Click through the four phases below. Pay special attention to <strong>Stage 03: ANALYZE</strong>, which is where you spend 80% of your time as an L1 analyst.
        </p>

        <div id="process-flow-container">
          ${C()}
        </div>
      </section>

      <!-- PILLAR 3: TECHNOLOGY -->
      <section id="section-technology" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-tech-box">PILLAR 03: DEFENSIVE ARSENAL</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">TOOLING STACK</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.75rem;">
          The SOC Technology Ecosystem
        </h2>
        <p style="font-size: 1rem; color: var(--text-secondary); max-width: 800px; margin-bottom: 1.5rem;">
          No single tool catches everything. FinCorp uses a defense-in-depth stack to correlate telemetry across endpoints, network perimeters, email inboxes, and cloud systems.
        </p>

        <!-- Tech Cards Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; margin-bottom: 1.5rem;">
          ${f.map(e=>`
            <div class="glass-panel" data-tech-card-id="${e.id}" style="padding: 1.4rem; cursor: pointer; border-color: ${e.id===D?`var(--cyan-primary)`:`var(--border-subtle)`}; background: ${e.id===D?`rgba(0, 242, 254, 0.08)`:`var(--bg-card)`};">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                <span class="mono-data" style="font-size: 0.78rem; font-weight: 700;">${e.name}</span>
                <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">STACK COMPONENT</span>
              </div>
              <h4 style="font-size: 1.05rem; color: var(--text-bright); margin-bottom: 0.35rem;">
                ${e.fullName}
              </h4>
              <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5;">
                ${e.role}
              </p>
            </div>
          `).join(``)}
        </div>

        <!-- Selected Tech Deep Dive Box -->
        <div class="glass-panel" style="padding: 1.75rem; background: rgba(14, 21, 38, 0.9); border-color: rgba(0, 242, 254, 0.3);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span class="genz-badge badge-tech-box" style="margin-bottom: 0.35rem;">DEEP DIVE TOOLSPEC</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright);">${e.name} — ${e.fullName}</h3>
            </div>
            <div style="display: flex; gap: 0.4rem;">
              ${e.tools.map(e=>`<span class="mono-data">${e}</span>`).join(``)}
            </div>
          </div>
          <p style="font-size: 0.95rem; color: var(--text-main); margin-bottom: 1.25rem; line-height: 1.6;">
            ${e.desc}
          </p>
          <div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 8px; padding: 1rem;">
            <span style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-primary); font-weight: 700;">FINCORP APPLICATION:</span>
            <div style="font-size: 0.9rem; color: var(--text-bright); margin-top: 0.25rem;">
              ${e.finCorpUsage}
            </div>
          </div>
        </div>
      </section>

      <!-- PILLAR 4: SECURITY DATA FLOW -->
      <section id="section-dataflow" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-alert">PILLAR 04: LIVE DATA STREAM</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">END-TO-END PIPELINE</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.75rem;">
          How Security Telemetry Traverses FinCorp
        </h2>
        <p style="font-size: 1rem; color: var(--text-secondary); max-width: 800px; margin-bottom: 1.5rem;">
          Follow the journey of a single packet from Jane Miller’s workstation until it triggers an alert and lands on your desk.
        </p>

        <div id="data-flow-container">
          ${E()}
        </div>
      </section>

      <!-- QUICK CHECK QUIZ -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.9); border: 1px solid rgba(139, 92, 246, 0.4);">
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-quiz">🧠 QUICK CHECK</span>
            <span style="font-size: 0.85rem; color: #d8b4fe; font-family: var(--font-mono);">STAGE 01 KNOWLEDGE CHECK</span>
          </div>
          <h3 style="font-size: 1.3rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Who does the L1 Analyst escalate to when deep forensic host memory inspection is required?
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
            Test your understanding of the technical escalation path vs leadership chain.
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;" id="quiz-t1-options">
            <div class="option-card" data-quiz-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">Directly call the Chief Information Security Officer (CISO)</div>
            </div>
            <div class="option-card" data-quiz-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">Escalate to Tier 2 (L2) Incident Responder with triage documentation</div>
            </div>
            <div class="option-card" data-quiz-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">Notify the SOC Manager to reschedule your shift rotation</div>
            </div>
          </div>

          <div id="quiz-t1-feedback" style="display: none; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"></div>
        </div>
      </section>

      <!-- 10:32 AM STORY TRANSITION EVENT CALLOUT -->
      <section style="position: relative;">
        <div class="glass-panel-alert pulse-alert-node" style="padding: 2.5rem; border-radius: var(--border-radius-lg); text-align: center;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: rgba(239, 68, 68, 0.2); border: 2px solid var(--danger); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>

          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: #fca5a5; margin-bottom: 0.5rem; letter-spacing: 0.1em;">
            TIME ADVANCE: 10:32 AM EST • SIEM SIREN SOUNDS
          </div>

          <h2 style="font-size: 2rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.75rem;">
            🚨 INCOMING DETECTION: MULTIPLE FAILED LOGINS
          </h2>

          <p style="font-size: 1.05rem; color: #fecaca; max-width: 680px; margin: 0 auto 1.75rem auto; line-height: 1.6;">
            Your console flashes amber and red. SIEM Rule <span class="mono-data" style="color: #ffffff; background: rgba(239,68,68,0.3);">DET-WIN-0422</span> just triggered on threshold. 
            User <strong style="color: white;">Finance01</strong> on host <strong style="color: white;">FIN-PC-04</strong> has generated 18 failed authentication attempts.
          </p>

          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button id="btn-open-alert-trans" class="btn btn-alert" style="font-size: 1.05rem; padding: 0.85rem 2.2rem; box-shadow: 0 0 30px var(--danger-glow);">
              OPEN ALERT & BEGIN TRIAGE (TOPIC 02) →
            </button>
          </div>
        </div>
      </section>

    </div>
  `}function O(){x(),w(),ee(),document.querySelectorAll(`[data-tech-card-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-tech-card-id`);if(n){D=n,e.playClick();let t=document.getElementById(`view-container`);t&&(t.innerHTML=te(),O())}})}),document.querySelectorAll(`#quiz-t1-options .option-card`).forEach(t=>{t.addEventListener(`click`,n=>{let i=n.currentTarget.getAttribute(`data-quiz-opt`),a=document.getElementById(`quiz-t1-feedback`);document.querySelectorAll(`#quiz-t1-options .option-card`).forEach(e=>{e.classList.remove(`selected-correct`,`selected-wrong`)}),i===`b`?(t.classList.add(`selected-correct`),e.playSuccess(),r.completeCheckpoint(`check-t1-quiz`,50,`Mastered SOC Escalation Path`),r.completeTopic(`topic-1`),a&&(a.style.display=`block`,a.style.background=`rgba(16, 185, 129, 0.15)`,a.style.border=`1px solid var(--success)`,a.style.color=`#86efac`,a.innerHTML=`<strong>Spot on!</strong> The technical escalation chain is strictly L1 ➔ L2 (Tier 2 Incident Response) ➔ L3. The CISO and SOC Manager handle corporate and operational management, not tier-2 forensic log triage.`)):(t.classList.add(`selected-wrong`),e.playClick(),a&&(a.style.display=`block`,a.style.background=`rgba(245, 158, 11, 0.15)`,a.style.border=`1px solid var(--warning)`,a.style.color=`#fde68a`,a.innerHTML=`Not quite. Remember the technical escalation chain: L1 reviews and documents, then escalates technical deep-dives to <strong>L2 (Tier 2 Incident Response)</strong>. Look at the Team Map again!`))})});let t=document.getElementById(`btn-open-alert-trans`);t&&t.addEventListener(`click`,()=>{r.completeTopic(`topic-1`),r.triggerAlertPulse(),r.navigate(`topic-2`,2)})}var k=1,A=5,j=!1,M=null;function N(){let e=_.events.slice(0,A),t=_.events.find(e=>e.id===k)||_.events[0],n=A>=10;return _.events.length,`
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
              Showing ${A} of ${_.events.length} security events logged between 10:30:01 and 10:31:45
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <button id="btn-stream-step" class="btn btn-secondary" style="font-size: 0.82rem; padding: 0.5rem 0.9rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
              Step Next Event (+1)
            </button>

            <button id="btn-stream-auto" class="btn ${j?`btn-alert`:`btn-outline-cyan`}" style="font-size: 0.82rem; padding: 0.5rem 0.9rem;">
              ${j?`
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
                Pause Stream
              `:`
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
      <div class="glass-panel" style="padding: 1.25rem 1.5rem; margin-bottom: 1.5rem; border-color: ${n?`rgba(239, 68, 68, 0.4)`:`rgba(0, 242, 254, 0.2)`}; background: ${n?`rgba(35, 12, 18, 0.75)`:`rgba(12, 20, 36, 0.65)`};">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 42px; height: 42px; border-radius: 50%; background: ${n?`rgba(239, 68, 68, 0.2)`:`rgba(0, 242, 254, 0.1)`}; display: flex; align-items: center; justify-content: center; color: ${n?`var(--danger)`:`var(--cyan-primary)`};">
              ${n?`
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
              `:`
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
              <div style="font-size: 1.4rem; font-weight: 800; font-family: var(--font-mono); color: ${n?`var(--danger)`:`var(--cyan-primary)`};">
                ${Math.min(18,A)} / 10 Threshold
              </div>
            </div>
            ${n?`
              <div class="genz-badge badge-alert" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">
                🚨 ALERT TRIGGERED
              </div>
            `:`
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
              ${e.map(e=>{let t=e.eventId===4624,n=e.id===k;return`
                  <tr class="${t?`event-row-success`:``} ${n?`row-selected`:``}" 
                      data-event-id="${e.id}" 
                      style="cursor: pointer; ${n?`background: rgba(0, 242, 254, 0.12);`:``}">
                    <td style="font-family: var(--font-mono); font-size: 0.8rem;">${e.time}</td>
                    <td>
                      <span class="event-id-badge ${t?`event-id-4624`:`event-id-4625`}">
                        ${e.eventId}
                      </span>
                    </td>
                    <td style="font-weight: 600; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.8rem;">${e.user}</td>
                    <td style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-secondary);">${e.process}</td>
                    <td>
                      ${t?`
                        <span style="color: var(--success); font-weight: 700; font-size: 0.75rem;">SUCCESS (Type ${e.logonType})</span>
                      `:`
                        <span style="color: var(--danger); font-weight: 600; font-size: 0.75rem;">FAILED</span>
                      `}
                    </td>
                  </tr>
                `}).join(``)}
            </tbody>
          </table>
        </div>

        <!-- Single Event Details Inspector -->
        <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9); height: fit-content; border-color: ${t.eventId===4624?`rgba(16, 185, 129, 0.4)`:`rgba(0, 242, 254, 0.25)`};">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.75rem;">
            <div style="display: flex; align-items: center; gap: 0.5rem;">
              <span class="event-id-badge ${t.eventId===4624?`event-id-4624`:`event-id-4625`}">
                ID ${t.eventId}
              </span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 0.95rem;">
                ${t.type}
              </span>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">${t.time}</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.25rem;">
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; padding-bottom: 0.4rem; border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span style="color: var(--text-muted);">Target User:</span>
              <span class="mono-data">${t.user}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; padding-bottom: 0.4rem; border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span style="color: var(--text-muted);">Workstation Host:</span>
              <span class="mono-data">${t.host}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; padding-bottom: 0.4rem; border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span style="color: var(--text-muted);">Source IP:</span>
              <span class="mono-data">${t.ip}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; padding-bottom: 0.4rem; border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span style="color: var(--text-muted);">Logon Type:</span>
              <span class="mono-data">Type ${t.logonType} (${t.logonType===2?`Interactive Console`:`Network/Token`})</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem; padding-bottom: 0.4rem; border-bottom: 1px solid rgba(255,255,255,0.04);">
              <span style="color: var(--text-muted);">Substatus Code:</span>
              <span class="mono-data" style="color: ${t.subStatus===`0xC000006A`?`#fca5a5`:`#86efac`};">${t.subStatus}</span>
            </div>
            <div style="display: flex; justify-content: space-between; font-size: 0.82rem;">
              <span style="color: var(--text-muted);">Caller Process:</span>
              <span class="mono-data">${t.process}</span>
            </div>
          </div>

          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.85rem;">
            <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--cyan-primary); text-transform: uppercase; margin-bottom: 0.35rem;">
              Analyst Telemetry Interpretation:
            </div>
            <p style="font-size: 0.85rem; color: var(--text-bright); line-height: 1.5;">
              ${t.description}
            </p>
          </div>
        </div>

      </div>
    </div>
  `}function P(){document.querySelectorAll(`[data-event-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=parseInt(t.currentTarget.getAttribute(`data-event-id`),10);if(!isNaN(n)){k=n,e.playSubtleTick();let t=document.getElementById(`event-visualizer-container`);t&&(t.innerHTML=N(),P())}})});let t=document.getElementById(`btn-stream-step`);t&&t.addEventListener(`click`,()=>{if(A<_.events.length){A++,k=A,e.playClick(),A===10&&e.playAlert();let t=document.getElementById(`event-visualizer-container`);t&&(t.innerHTML=N(),P())}});let n=document.getElementById(`btn-stream-all`);n&&n.addEventListener(`click`,()=>{A=_.events.length,k=A,e.playSuccess();let t=document.getElementById(`event-visualizer-container`);t&&(t.innerHTML=N(),P())});let r=document.getElementById(`btn-stream-auto`);r&&r.addEventListener(`click`,()=>{j?(clearInterval(M),j=!1):(j=!0,M=setInterval(()=>{if(A<_.events.length){A++,k=A,e.playSubtleTick(),A===10&&e.playAlert();let t=document.getElementById(`event-visualizer-container`);t&&(t.innerHTML=N(),P())}else{clearInterval(M),j=!1;let e=document.getElementById(`event-visualizer-container`);e&&(e.innerHTML=N(),P())}},600));let t=document.getElementById(`event-visualizer-container`);t&&(t.innerHTML=N(),P())})}var F=`alert`,ne=[{id:`event`,name:`EVENT`,tag:`FOUNDATIONAL TELEMETRY`,summary:`“Something happened.”`,detail:`An observable occurrence in a computer system or network (e.g., a file written, a packet transmitted, a single login attempt). FinCorp generates 50,000+ events per second. 99.99% are completely routine.`,example:`Windows Event ID 4625: Jane Miller types the wrong password once at 10:30:01 AM.`},{id:`alert`,name:`ALERT`,tag:`THRESHOLD TRIGGERED`,summary:`“Something needs your attention.”`,detail:`A high-fidelity notification generated by detection logic when single or correlated events match an attack pattern, threshold anomaly, or threat signature. Alerts require human analyst triage.`,example:`SIEM Rule DET-WIN-0422 flags 18x 4625 failures in 84 seconds for Finance01.`},{id:`investigation`,name:`INVESTIGATION`,tag:`ANALYST COGNITION`,summary:`“Understanding the full story.”`,detail:`The methodical process where the L1 analyst inspects the entities (User, Host, IP), correlates timelines, checks helpdesk tickets, and determines whether activity is malicious or benign.`,example:`You checking if Jane changed her password, and discovering the 10:31:45 4624 successful logon.`},{id:`incident`,name:`INCIDENT`,tag:`CONFIRMED SECURITY IMPACT`,summary:`“An active security breach or unauthorized threat.”`,detail:`A confirmed violation or imminent threat of violation of security policy, acceptable use policy, or standard cybersecurity safety practices requiring coordinated active response.`,example:`An adversary successfully using stolen credentials to download executive salary databases.`},{id:`case`,name:`CASE`,tag:`FORMAL AUDIT RECORD`,summary:`“The documented investigation record.”`,detail:`The structured folder and audit trail containing analyst findings, linked telemetry, hypotheses, ticket numbers, communications, and final closing disposition.`,example:`Case ALT-2026-9042 documented in TheHive / Jira with full root cause analysis.`}];function re(){let e=ne.find(e=>e.id===F)||ne[1];return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${h(`topic-2`)}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-alert">TOPIC 02 • 10:32 AM</span>
          <span class="mono-data">THE ANATOMY OF TELEMETRY</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Alerts & <span class="gradient-text-cyan">Events.</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--danger); margin-bottom: 2.5rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #fca5a5; margin-bottom: 0.4rem; text-transform: uppercase;">
            SHIFT CONTEXT • 10:32 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "You click the flashing alert on your FinCorp dashboard. Before jumping to wild conclusions, you must distinguish between 
            the building blocks of cybersecurity operations: <strong>What is a raw Event? How does it become an Alert? When does it become an Incident? And why is every investigation tracked in a Case?</strong>"
          </p>
        </div>
      </section>

      <!-- VISUAL PROGRESSION PIPELINE -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="genz-badge badge-try-it">THE TELEMETRY PYRAMID</span>
            <h2 style="font-size: 1.6rem; color: var(--text-bright); margin-top: 0.35rem;">
              Event ➔ Alert ➔ Investigation ➔ Incident ➔ Case
            </h2>
          </div>
          <div style="font-size: 0.82rem; color: var(--cyan-text); font-family: var(--font-mono);">
            CLICK ANY CONCEPT TO INSPECT DEFINITION
          </div>
        </div>

        <!-- Horizontal Flow Buttons -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 0.85rem; margin-bottom: 1.5rem;">
          ${ne.map(e=>`
            <div class="glass-panel ${e.id===F?`glass-panel-cyan`:``}" 
                 data-concept-id="${e.id}" 
                 style="padding: 1.25rem 1rem; cursor: pointer; text-align: center; border-color: ${e.id===F?`var(--cyan-primary)`:`var(--border-subtle)`}; background: ${e.id===F?`rgba(0, 242, 254, 0.1)`:`var(--bg-card)`};">
              <span class="genz-badge ${e.id===`incident`?`badge-alert`:e.id===`alert`?`badge-scenario`:`badge-tech-box`}" style="font-size: 0.65rem; margin-bottom: 0.5rem;">
                ${e.tag}
              </span>
              <div style="font-weight: 800; font-size: 1.1rem; color: var(--text-bright); margin-bottom: 0.25rem;">
                ${e.name}
              </div>
              <div style="font-size: 0.8rem; color: var(--text-secondary); font-style: italic;">
                ${e.summary}
              </div>
            </div>
          `).join(``)}
        </div>

        <!-- Concept Inspector Card -->
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.95); border-color: rgba(0, 242, 254, 0.35);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
            <div style="display: flex; align-items: center; gap: 0.75rem;">
              <span class="genz-badge badge-key-idea">${e.tag}</span>
              <h3 style="font-size: 1.4rem; color: var(--text-bright); font-weight: 800;">${e.name} — ${e.summary}</h3>
            </div>
            <span class="mono-data">FinCorp SOC SOP Glossary</span>
          </div>

          <p style="font-size: 1.05rem; color: var(--text-main); line-height: 1.65; margin-bottom: 1.25rem;">
            ${e.detail}
          </p>

          <div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 8px; padding: 1.1rem;">
            <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-primary); font-weight: 700;">REAL-WORLD FINCORP EXAMPLE:</span>
            <div style="font-size: 0.92rem; color: var(--text-bright); margin-top: 0.35rem; font-family: var(--font-mono);">
              ${e.example}
            </div>
          </div>
        </div>
      </section>

      <!-- EVENT VISUALIZER: 18x 4625 + 1x 4624 -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-demo">INTERACTIVE LOG STREAM</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">EVENT ID 4625 & 4624</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.75rem;">
          The Finance01 Event Stream
        </h2>
        <p style="font-size: 1rem; color: var(--text-secondary); max-width: 800px; margin-bottom: 1.5rem;">
          Watch the sequential stream of authentication attempts logged by the Windows Security subsystem on workstation <span class="mono-data">FIN-PC-04</span>. Click any event to inspect its caller process and hex substatus codes.
        </p>

        <div id="event-visualizer-container">
          ${N()}
        </div>
      </section>

      <!-- TECH BOXES: EVENT IDS -->
      <section style="margin-bottom: 4rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          
          <!-- Event 4625 -->
          <div class="callout-box callout-alert-box">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="event-id-badge event-id-4625">EVENT ID 4625</span>
              <span class="genz-badge badge-tech-box">LOGON FAILURE</span>
            </div>
            <h4 style="font-size: 1.15rem; color: #fca5a5; margin-bottom: 0.5rem;">
              Windows Authentication Failure
            </h4>
            <p style="font-size: 0.9rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.85rem;">
              Generated whenever a logon request fails for any reason (wrong password, unknown username, expired account, clock skew, or lockout).
            </p>
            <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
              <strong>Key Substatus Code:</strong> <span class="mono-data" style="color: #fca5a5;">0xC000006A</span> means the account username was valid, but the password provided was bad.
            </div>
          </div>

          <!-- Event 4624 -->
          <div class="callout-box" style="background: rgba(12, 32, 24, 0.85); border: 1px solid rgba(16, 185, 129, 0.4);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="event-id-badge event-id-4624">EVENT ID 4624</span>
              <span class="genz-badge badge-try-it">LOGON SUCCESS</span>
            </div>
            <h4 style="font-size: 1.15rem; color: #86efac; margin-bottom: 0.5rem;">
              Windows Authentication Success
            </h4>
            <p style="font-size: 0.9rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.85rem;">
              Generated when a logon session is successfully authenticated. Crucial for establishing valid user presence and activity baselines.
            </p>
            <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
              <strong>Logon Type 2:</strong> Interactive logon (local keyboard/display). Proves physical console presence at the workstation.
            </div>
          </div>

        </div>
      </section>

      <!-- INCIDENT VS CASE INTERACTIVE DECISION -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(15, 23, 42, 0.9); border: 1px solid var(--border-medium);">
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
            <span class="genz-badge badge-scenario">🎯 OPERATIONAL PRINCIPLE</span>
            <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">DOES EVERY ALERT BECOME AN INCIDENT?</span>
          </div>

          <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 1rem;">
            "Does every alert become an incident?"
          </h3>

          <div style="display: flex; gap: 1rem; margin-bottom: 1.5rem;">
            <button id="btn-inc-yes" class="btn btn-secondary" style="font-size: 0.95rem; padding: 0.65rem 1.75rem;">
              YES — Every alert is an incident
            </button>
            <button id="btn-inc-no" class="btn btn-primary" style="font-size: 0.95rem; padding: 0.65rem 1.75rem;">
              NO — Only confirmed security threats become incidents
            </button>
          </div>

          <div id="inc-explanation" class="animate-fade-in" style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.25); border-radius: 8px; padding: 1.25rem;">
            <div style="font-weight: 700; color: var(--cyan-primary); font-size: 1.05rem; margin-bottom: 0.5rem;">
              Correct! Not every alert becomes an incident.
            </div>
            <p style="font-size: 0.92rem; color: var(--text-bright); line-height: 1.6;">
              In a typical enterprise SOC, over <strong>70% to 85% of alerts</strong> are triaged and dismissed as False Positives, Expected Activity, or Benign Positives! If every alert triggered an incident declaration, Incident Response teams would be overwhelmed and catastrophic real breaches would slip through.
            </p>
            <div style="margin-top: 0.75rem; font-size: 0.85rem; color: var(--text-secondary);">
              <strong>Remember:</strong> <em>Not every event becomes an alert. Not every alert becomes an incident. But every investigation MUST be documented in a Case!</em>
            </div>
          </div>
        </div>
      </section>

      <!-- QUICK CHECK QUIZ -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.9); border: 1px solid rgba(236, 72, 153, 0.4);">
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-quiz">📝 QUICK CHECK</span>
            <span style="font-size: 0.85rem; color: #f472b6; font-family: var(--font-mono);">STAGE 02 QUIZ</span>
          </div>
          <h3 style="font-size: 1.3rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Match the cybersecurity scenario to its correct classification:
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
            "A documented investigation folder created in the ticketing system to record findings, evidence, and closing notes."
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.85rem; margin-bottom: 1.5rem;" id="quiz-t2-options">
            <div class="option-card" data-quiz-opt="event">
              <span class="genz-badge badge-tech-box">EVENT</span>
            </div>
            <div class="option-card" data-quiz-opt="alert">
              <span class="genz-badge badge-scenario">ALERT</span>
            </div>
            <div class="option-card" data-quiz-opt="incident">
              <span class="genz-badge badge-alert">INCIDENT</span>
            </div>
            <div class="option-card" data-quiz-opt="case">
              <span class="genz-badge badge-demo">CASE</span>
            </div>
          </div>

          <div id="quiz-t2-feedback" style="display: none; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"></div>
        </div>
      </section>

      <!-- ADVANCE TO TOPIC 3 CTA -->
      <div style="display: flex; justify-content: flex-end;">
        <button id="btn-next-topic-3" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem; box-shadow: 0 0 25px var(--cyan-glow);">
          Proceed to Topic 03: Alert Triage →
        </button>
      </div>

    </div>
  `}function ie(){P(),document.querySelectorAll(`[data-concept-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-concept-id`);if(n){F=n,e.playClick();let t=document.getElementById(`view-container`);t&&(t.innerHTML=re(),ie())}})});let t=document.getElementById(`btn-inc-yes`),n=document.getElementById(`btn-inc-no`),i=document.getElementById(`inc-explanation`);t&&t.addEventListener(`click`,()=>{e.playClick(),i&&(i.innerHTML=`<div style="color: #fde68a;"><strong>Not quite.</strong> If every single alert became an incident, SOC analysts would drown in paperwork and genuine cyberattacks would be missed. Only validated, high-risk security threats become incidents.</div>`)}),n&&n.addEventListener(`click`,()=>{e.playSuccess(),r.completeCheckpoint(`check-inc-vs-case`,35,`Mastered Incident vs Case Principles`),i&&(i.innerHTML=`<div style="color: #86efac; font-weight: 700;">Spot on! Only confirmed, actionable security events warrant full incident response declaration.</div>`)}),document.querySelectorAll(`#quiz-t2-options .option-card`).forEach(t=>{t.addEventListener(`click`,n=>{let i=n.currentTarget.getAttribute(`data-quiz-opt`),a=document.getElementById(`quiz-t2-feedback`);document.querySelectorAll(`#quiz-t2-options .option-card`).forEach(e=>{e.classList.remove(`selected-correct`,`selected-wrong`)}),i===`case`?(t.classList.add(`selected-correct`),e.playSuccess(),r.completeCheckpoint(`check-t2-quiz`,50,`Mastered Case Definition`),r.completeTopic(`topic-2`),a&&(a.style.display=`block`,a.style.background=`rgba(16, 185, 129, 0.15)`,a.style.border=`1px solid var(--success)`,a.style.color=`#86efac`,a.innerHTML=`<strong>Spot on!</strong> A <strong>CASE</strong> is the documented investigation record where all notes, artifacts, and decisions are officially stored for legal, compliance, and post-incident auditing.`)):(t.classList.add(`selected-wrong`),e.playClick(),a&&(a.style.display=`block`,a.style.background=`rgba(245, 158, 11, 0.15)`,a.style.border=`1px solid var(--warning)`,a.style.color=`#fde68a`,a.innerHTML=`Not quite. Remember: An Event is something that happened. An Alert is a trigger requiring review. An Incident is a confirmed threat. The documented record itself is the <strong>CASE</strong>!`))})});let a=document.getElementById(`btn-next-topic-3`);a&&a.addEventListener(`click`,()=>{r.completeTopic(`topic-2`),r.navigate(`topic-3`,3)})}var I=`SUMMARY`;function L(){let e=_,t=r.state;return`
    <div class="glass-panel" style="background: rgba(11, 17, 33, 0.95); border: 1px solid rgba(0, 242, 254, 0.3); border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7);">
      
      <!-- Top Alert Banner -->
      <div style="padding: 1.5rem 2rem; background: linear-gradient(90deg, rgba(239, 68, 68, 0.15), rgba(15, 23, 42, 0.8)); border-bottom: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.25rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.35rem;">
            <span class="genz-badge badge-alert">🚨 ALERT TRIAGE BOARD</span>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text);">${e.id}</span>
            <span style="font-size: 0.8rem; color: var(--text-muted);">•</span>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">${e.createdAt}</span>
          </div>
          <h2 style="font-size: 1.5rem; font-weight: 800; color: var(--text-bright);">
            ${e.title}
          </h2>
        </div>

        <!-- Quick Metrics Badges -->
        <div style="display: flex; align-items: center; gap: 1.5rem; flex-wrap: wrap;">
          <div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase;">SEVERITY</div>
            <div style="font-weight: 800; color: #fbbf24; font-size: 1.1rem; display: flex; align-items: center; gap: 0.3rem;">
              <span style="width: 10px; height: 10px; border-radius: 50%; background: #fbbf24; box-shadow: 0 0 8px #fbbf24;"></span>
              ${e.severity} (${e.initialScore})
            </div>
          </div>

          <div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase;">FAILURES / TOTAL</div>
            <div style="font-weight: 800; font-family: var(--font-mono); color: var(--danger); font-size: 1.1rem;">
              18 / 19 Events
            </div>
          </div>

          <div>
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase;">ASSIGNED TO</div>
            <div style="font-weight: 700; color: var(--cyan-primary); font-size: 0.95rem;">
              ${t.profile.callsign} (YOU)
            </div>
          </div>
        </div>
      </div>

      <!-- 7 Navigation Tabs -->
      <div class="tabs-nav" style="background: rgba(8, 12, 24, 0.9);">
        ${[`SUMMARY`,`USER`,`HOST`,`NETWORK`,`EVENTS`,`TIMELINE`,`NOTES`].map(e=>`
          <button class="tab-btn ${I===e?`active`:``}" data-tab="${e}">
            ${e===`NOTES`?`📝 `:``}${e}
          </button>
        `).join(``)}
      </div>

      <!-- Tab Content Area -->
      <div class="tab-content">
        ${ae(I,e,t)}
      </div>

    </div>
  `}function ae(e,t,n){switch(e){case`SUMMARY`:return`
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 1.75rem;">
          <div>
            <span class="genz-badge badge-key-idea" style="margin-bottom: 0.75rem;">DETECTION SUMMARY</span>
            <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-bright);">
              High Frequency Authentication Failure Burst
            </h3>
            <p style="font-size: 0.95rem; line-height: 1.6; margin-bottom: 1.25rem; color: var(--text-secondary);">
              FinCorp SIEM detected a sustained sequence of 18 authentication failures within 84 seconds targeting domain user <span class="mono-data">${t.user.username}</span> from workstation <span class="mono-data">${t.host.hostname}</span>. Crucially, at 10:31:45 AM, an interactive logon SUCCESS was recorded.
            </p>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.2rem; display: flex; flex-direction: column; gap: 0.6rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">SIEM Rule Name:</span>
                <span class="mono-data">${t.detectionLogic.name}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Detection Threshold:</span>
                <span style="color: var(--text-bright);">${t.detectionLogic.threshold}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">MITRE ATT&CK:</span>
                <span class="mono-data" style="color: #f87171;">${t.mitre.technique}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Observed Failures:</span>
                <span style="color: var(--danger); font-weight: 700;">18 events in 84 seconds</span>
              </div>
            </div>
          </div>

          <!-- Quick Entity Cards -->
          <div style="display: flex; flex-direction: column; gap: 0.85rem;">
            <div class="glass-panel" style="padding: 1rem 1.25rem; background: rgba(15, 23, 42, 0.7); cursor: pointer;" data-tab-switch="USER">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text);">ENTITY: USER</span>
                <span class="genz-badge badge-tech-box" style="font-size: 0.65rem;">ACTIVE</span>
              </div>
              <div style="font-weight: 700; color: var(--text-bright); font-size: 1.05rem;">${t.user.fullName} (${t.user.username})</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">${t.user.role} • ${t.user.department}</div>
            </div>

            <div class="glass-panel" style="padding: 1rem 1.25rem; background: rgba(15, 23, 42, 0.7); cursor: pointer;" data-tab-switch="HOST">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text);">ENTITY: HOST</span>
                <span class="genz-badge badge-try-it" style="font-size: 0.65rem;">EDR HEALTHY</span>
              </div>
              <div style="font-weight: 700; color: var(--text-bright); font-size: 1.05rem;">${t.host.hostname}</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">${t.host.os} • ${t.host.assetType}</div>
            </div>

            <div class="glass-panel" style="padding: 1rem 1.25rem; background: rgba(15, 23, 42, 0.7); cursor: pointer;" data-tab-switch="NETWORK">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text);">ENTITY: NETWORK</span>
                <span class="genz-badge badge-key-idea" style="font-size: 0.65rem;">RFC 1918 INTERNAL</span>
              </div>
              <div style="font-weight: 700; font-family: var(--font-mono); color: var(--text-bright); font-size: 1.05rem;">${t.network.sourceIp}</div>
              <div style="font-size: 0.8rem; color: var(--text-secondary);">${t.network.subnet}</div>
            </div>
          </div>
        </div>
      `;case`USER`:return`
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <div>
              <span class="genz-badge badge-investigate">IDENTITY TRIAGE</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Account Profile: ${t.user.fullName} (${t.user.username})
              </h3>
            </div>
            <div class="genz-badge badge-tech-box" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">
              STANDARD USER ACCOUNT
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Department:</span>
                <span style="font-weight: 600; color: var(--text-bright);">${t.user.department}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Direct Manager:</span>
                <span style="color: var(--text-bright);">${t.user.manager}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Desk Location:</span>
                <span style="color: var(--text-bright);">${t.user.location}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Password Last Set:</span>
                <span class="mono-data" style="color: #6ee7b7;">${t.user.passwordLastSet}</span>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
                ACTIVE DIRECTORY GROUPS
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
                ${t.user.groups.map(e=>`<span class="mono-data" style="font-size: 0.78rem;">${e}</span>`).join(``)}
              </div>
              <div style="margin-top: 1rem; font-size: 0.82rem; color: var(--text-secondary);">
                ${t.user.privilegedNote}
              </div>
            </div>
          </div>

          <!-- ANALYST THINK CALLOUT -->
          <div class="callout-box callout-analyst-think">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.6rem;">
              <span class="genz-badge badge-analyst-think">🧠 ANALYST THINK</span>
              <span style="font-weight: 700; color: #d8b4fe; font-size: 0.95rem;">Identity Context Assessment</span>
            </div>
            <p style="font-size: 0.95rem; color: var(--text-bright); margin-bottom: 0.75rem; line-height: 1.6;">
              <strong>Question for the L1:</strong> What would change if this were a privileged administrator account (e.g. <span class="mono-data">svc-domainadmin</span>) instead of a standard finance analyst?
            </p>
            <div style="background: rgba(0,0,0,0.3); border-radius: 6px; padding: 0.85rem; font-size: 0.88rem; color: var(--text-secondary);">
              <span style="color: var(--cyan-primary); font-weight: 700;">Analyst Answer:</span> If this were a Domain Admin, the potential blast radius and attacker incentive would be exponentially higher. The alert severity would escalate immediately from Medium to High/Critical, and immediate host isolation or token revocation would be mandated under FinCorp SOC SOP!
            </div>
          </div>
        </div>
      `;case`HOST`:return`
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <div>
              <span class="genz-badge badge-investigate">ENDPOINT TELEMETRY</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Host Inspection: ${t.host.hostname} (${t.host.fqdn})
              </h3>
            </div>
            <div class="genz-badge badge-try-it" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">
              ${t.host.edrStatus}
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Asset Type:</span>
                <span style="font-weight: 600; color: var(--text-bright);">${t.host.assetType}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Operating System:</span>
                <span class="mono-data">${t.host.os}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Assigned User:</span>
                <span style="color: var(--text-bright);">${t.user.fullName} (${t.user.username})</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Asset Criticality:</span>
                <span style="color: #fbbf24; font-weight: 700;">Tier 2 (Workstation)</span>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
                EDR PROCESS TREE SNAPSHOT
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--text-secondary); line-height: 1.7;">
                <div>├─ wininit.exe (PID 620)</div>
                <div>│  └─ services.exe (PID 684)</div>
                <div>│     └─ svchost.exe (PID 1420 - LanmanWorkstation)</div>
                <div>├─ explorer.exe (PID 4820)</div>
                <div>│  ├─ OUTLOOK.EXE (PID 7912) [4625 Trigger]</div>
                <div>│  └─ Teams.exe (PID 8140)</div>
                <div>└─ winlogon.exe (PID 840) [4624 Success at 10:31:45]</div>
              </div>
              <div style="margin-top: 0.75rem; font-size: 0.78rem; color: var(--success); display: flex; align-items: center; gap: 0.35rem;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                Zero unsigned binaries or command shells (cmd/powershell) detected.
              </div>
            </div>
          </div>

          <div class="callout-box callout-tech-box">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">🧩 TECH BOX: HOST CRITICALITY</span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 0.95rem;">Why Host Context Shapes Urgency</span>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6;">
              A workstation asset (<span class="mono-data">FIN-PC-04</span>) typically represents single-user impact. If the same 18 failed logins were targeting <span class="mono-data">DC01.corp.fincorp.local</span> (Domain Controller) or <span class="mono-data">SWIFT-GW-01</span> (Financial Transactions Server), it would represent potential domain compromise, demanding instant crisis escalation.
            </p>
          </div>
        </div>
      `;case`NETWORK`:return`
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <div>
              <span class="genz-badge badge-investigate">NETWORK CONTEXT</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Source IP: ${t.network.sourceIp}
              </h3>
            </div>
            <div class="genz-badge badge-key-idea" style="font-size: 0.8rem; padding: 0.35rem 0.75rem;">
              ${t.network.scope}
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.75rem;">
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">IP Address:</span>
                <span class="mono-data">${t.network.sourceIp}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">VLAN / Subnet:</span>
                <span class="mono-data">${t.network.subnet}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Destination IP:</span>
                <span class="mono-data">${t.network.destinationIp}</span>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem;">
                <span style="color: var(--text-muted);">Threat Intel Reputation:</span>
                <span style="color: var(--success); font-weight: 700;">${t.network.reputationScore}</span>
              </div>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.25rem;">
              <div style="font-size: 0.78rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
                DHCP & ROUTING VERIFICATION
              </div>
              <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 0.75rem;">
                DHCP lease server confirms IP <span class="mono-data">10.10.20.15</span> has been bound to MAC <span class="mono-data">${t.host.mac}</span> (FIN-PC-04) since 08:30 AM today.
              </p>
              <div style="font-size: 0.82rem; color: var(--success);">
                ✓ Source IP perfectly matches the target employee workstation. No spoofing or rogue device detected on VLAN 20.
              </div>
            </div>
          </div>

          <div class="callout-box callout-pro-tip">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-pro-tip">⚡ PRO TIP: NETWORK MINDSET</span>
              <span style="font-weight: 700; color: #fde047; font-size: 0.95rem;">Internal vs External Context</span>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-bright); line-height: 1.6;">
              "Internal does not automatically mean safe. External does not automatically mean malicious. <strong>Context matters.</strong>"
            </p>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.35rem;">
              An internal IP could be an infected pivot machine performing lateral movement. However, when the source IP is identical to the user's assigned machine, and the processes are legitimate office applications, the probability of a benign local issue increases dramatically.
            </p>
          </div>
        </div>
      `;case`EVENTS`:return`
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
            <div>
              <span class="genz-badge badge-tech-box">LOG TELEMETRY</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Correlated Events (19 Total)
              </h3>
            </div>
            <div style="font-family: var(--font-mono); font-size: 0.82rem; color: var(--cyan-text);">
              18 × 4625 (Failures) ➔ 1 × 4624 (Success)
            </div>
          </div>

          <div class="event-table-container">
            <table class="event-table">
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>EVENT</th>
                  <th>USER</th>
                  <th>HOST</th>
                  <th>IP</th>
                  <th>PROCESS</th>
                  <th>SUBSTATUS</th>
                  <th>RESULT</th>
                </tr>
              </thead>
              <tbody>
                ${t.events.map(e=>`
                  <tr class="${e.eventId===4624?`event-row-success`:``}">
                    <td style="font-family: var(--font-mono); font-size: 0.78rem;">${e.time}</td>
                    <td>
                      <span class="event-id-badge ${e.eventId===4624?`event-id-4624`:`event-id-4625`}">
                        ${e.eventId}
                      </span>
                    </td>
                    <td style="font-family: var(--font-mono);">${e.user}</td>
                    <td style="font-family: var(--font-mono);">${e.host}</td>
                    <td style="font-family: var(--font-mono);">${e.ip}</td>
                    <td style="font-family: var(--font-mono); font-size: 0.78rem;">${e.process}</td>
                    <td style="font-family: var(--font-mono); font-size: 0.78rem; color: ${e.subStatus===`0xC000006A`?`#fca5a5`:`#86efac`};">${e.subStatus}</td>
                    <td>
                      <span style="font-weight: 700; font-size: 0.75rem; color: ${e.eventId===4624?`var(--success)`:`var(--danger)`};">
                        ${e.eventId===4624?`SUCCESS`:`FAILED`}
                      </span>
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      `;case`TIMELINE`:return`
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <div>
              <span class="genz-badge badge-demo">EVIDENCE TIMELINE</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Step-by-Step Chronological Progression
              </h3>
            </div>
            <button id="btn-inspect-success" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
              Investigate Successful Login (10:31:45) →
            </button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1.5rem;">
            <div class="glass-panel" style="padding: 1.25rem; border-left: 4px solid var(--danger);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem;">
                <span style="font-family: var(--font-mono); font-weight: 700; color: #fca5a5;">10:30:01 – 10:31:25 AM</span>
                <span class="genz-badge badge-alert">18 FAILURES IN 84 SECONDS</span>
              </div>
              <p style="font-size: 0.88rem; color: var(--text-secondary);">
                18 sequential Windows Event ID 4625 events logged. Caller processes: <span class="mono-data">OUTLOOK.EXE</span>, <span class="mono-data">teams.exe</span>, and <span class="mono-data">svchost.exe (Lanman)</span>. Logon Type 3 (Network). Substatus: <span class="mono-data">0xC000006A</span> (bad password).
              </p>
            </div>

            <!-- The Pivot Event -->
            <div class="glass-panel" style="padding: 1.5rem; border-left: 4px solid var(--success); background: rgba(16, 185, 129, 0.08); border-color: rgba(16, 185, 129, 0.4); box-shadow: 0 0 25px rgba(16, 185, 129, 0.15);">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem;">
                <div style="display: flex; align-items: center; gap: 0.6rem;">
                  <span class="event-id-badge event-id-4624">ID 4624</span>
                  <span style="font-family: var(--font-mono); font-weight: 800; font-size: 1.1rem; color: #86efac;">10:31:45 AM — SUCCESSFUL LOGON</span>
                </div>
                <span class="genz-badge badge-try-it">SOMETHING CHANGED</span>
              </div>
              <p style="font-size: 0.95rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.75rem;">
                Caller Process: <span class="mono-data">winlogon.exe</span> • Logon Type: <span class="mono-data">Type 2 (Interactive Console)</span> • Result: <span class="mono-data">0x0 (SUCCESS)</span>.
              </p>
              <div style="font-size: 0.88rem; color: #a7f3d0; background: rgba(16, 185, 129, 0.1); padding: 0.75rem; border-radius: 6px;">
                💡 <strong>Analyst Epiphany:</strong> The failures immediately stopped the exact second the interactive login succeeded at 10:31:45 AM! An attacker doing a brute force or password spray wouldn't stop attacking upon login, nor would they be logging in from Jane's physical desk.
              </div>
            </div>
          </div>
        </div>
      `;case`NOTES`:return`
        <div>
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <div>
              <span class="genz-badge badge-tech-box">ANALYST SCRATCHPAD</span>
              <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-top: 0.35rem;">
                Case Notes & Audit Trail (${t.id})
              </h3>
            </div>
            <div style="font-size: 0.8rem; color: var(--cyan-text); font-family: var(--font-mono);">
              ✓ AUTO-SAVED TO PERSISTENT STATE
            </div>
          </div>

          <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;">
            Write your observations, hypotheses, and evidence findings. These notes are preserved across your shift and can be exported directly into the Final Shift Report.
          </p>

          <textarea id="triage-notes-input" style="width: 100%; height: 260px; background: rgba(6, 10, 20, 0.8); border: 1px solid var(--border-medium); border-radius: 8px; color: var(--cyan-text); font-family: var(--font-mono); font-size: 0.88rem; padding: 1.25rem; line-height: 1.6; resize: vertical;" placeholder="Type analyst notes here...">${n.scratchpadNotes}</textarea>

          <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1rem;">
            <div style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono);">
              Format: Standard FinCorp Incident Logging Syntax
            </div>
            <button id="btn-save-notes" class="btn btn-primary" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
              Save & Commit Notes
            </button>
          </div>
        </div>
      `;default:return``}}function R(){document.querySelectorAll(`.tab-btn`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-tab`);if(n){I=n,e.playClick();let t=document.getElementById(`alert-panel-container`);t&&(t.innerHTML=L(),R())}})}),document.querySelectorAll(`[data-tab-switch]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-tab-switch`);if(n){I=n,e.playClick();let t=document.getElementById(`alert-panel-container`);t&&(t.innerHTML=L(),R())}})});let t=document.getElementById(`triage-notes-input`);t&&t.addEventListener(`input`,e=>{r.saveScratchpadNotes(e.target.value)});let n=document.getElementById(`btn-save-notes`);n&&n.addEventListener(`click`,()=>{t&&(r.saveScratchpadNotes(t.value),e.playSuccess(),r.showToast(`Triage notes successfully saved to case record.`,`info`))});let i=document.getElementById(`btn-inspect-success`);i&&i.addEventListener(`click`,()=>{I=`NOTES`;let e=r.state.scratchpadNotes;r.saveScratchpadNotes(e+`[10:36:12] Crucial finding: Event 4624 (Logon Type 2 Interactive Console) succeeded at 10:31:45. Subsequent 4625 failures ceased immediately. Investigating cached credential hypothesis.
`),r.completeCheckpoint(`check-triage-success`,35,`Identified Pivotal 4624 Logon`);let t=document.getElementById(`alert-panel-container`);t&&(t.innerHTML=L(),R())})}function oe(){return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${h(`topic-3`)}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-investigate">TOPIC 03 • 10:35 AM</span>
          <span class="mono-data">TRIAGE PLAYBOOK EXECUTION</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Now it's <span class="gradient-text-cyan">your alert.</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--cyan-primary); margin-bottom: 2.5rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text); margin-bottom: 0.4rem; text-transform: uppercase;">
            ACTIVE ASSIGNMENT • 10:35 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "You are the L1 analyst. The Finance01 alert (<span class="mono-data">ALT-2026-9042</span>) is now your personal operational responsibility. 
            Do not guess. Do not panic. Follow the 5-point triage framework: 
            <strong>Understand the Detection ➔ Inspect the User ➔ Inspect the Host ➔ Inspect the IP ➔ Examine the Evidence Timeline.</strong>"
          </p>
        </div>

        <!-- Triage Flow Strip -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 0.85rem; margin-bottom: 2.5rem;">
          ${[{num:`01`,title:`UNDERSTAND`,desc:`Read alert trigger & rule`},{num:`02`,title:`USER`,desc:`Check Jane Miller identity`},{num:`03`,title:`HOST`,desc:`FIN-PC-04 workstation info`},{num:`04`,title:`IP CONTEXT`,desc:`10.10.20.15 internal VLAN`},{num:`05`,title:`EVIDENCE`,desc:`18x 4625 ➔ 1x 4624 timeline`},{num:`06`,title:`DECISION`,desc:`Determine operational path`}].map(e=>`
            <div class="glass-panel" style="padding: 1rem; text-align: center; border-color: rgba(0,242,254,0.2);">
              <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); font-weight: 700;">STEP ${e.num}</div>
              <div style="font-weight: 800; font-size: 0.95rem; color: var(--text-bright); margin: 0.25rem 0;">${e.title}</div>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${e.desc}</div>
            </div>
          `).join(``)}
        </div>
      </section>

      <!-- 7-TAB ALERT DETAIL CONSOLE -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="genz-badge badge-alert">LIVE TRIAGE CONSOLE</span>
            <h2 style="font-size: 1.6rem; color: var(--text-bright); margin-top: 0.35rem;">
              Case ALT-2026-9042 Triage Workspace
            </h2>
          </div>
          <div style="font-size: 0.82rem; color: var(--text-secondary); font-family: var(--font-mono);">
            EXPLORE ALL 7 TABS: SUMMARY, USER, HOST, NETWORK, EVENTS, TIMELINE, NOTES
          </div>
        </div>

        <div id="alert-panel-container">
          ${L()}
        </div>
      </section>

      <!-- L1 OPERATIONAL DECISION POINT -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2.25rem; background: rgba(14, 21, 38, 0.95); border: 1px solid rgba(0, 242, 254, 0.4);">
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-scenario">🎯 L1 DECISION POINT</span>
            <span style="font-size: 0.85rem; color: var(--cyan-text); font-family: var(--font-mono);">SCENARIO ASSESSMENT</span>
          </div>

          <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 0.75rem;">
            You observe: 18 failed logins (4625) followed by 1 successful login (4624). What should you do?
          </h3>

          <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
            As the L1 analyst on shift, which operational action should you take next?
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.85rem; margin-bottom: 1.5rem;" id="decision-t3-options">
            <div class="option-card" data-dec-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.95rem; color: var(--text-bright);">
                <strong>Immediately declare a SEV-1 attack</strong> and isolate the entire Finance network VLAN without checking user context.
              </div>
            </div>

            <div class="option-card" data-dec-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.95rem; color: var(--text-bright);">
                <strong>Immediately close the alert</strong> because a successful login happened, so everything is definitely fine.
              </div>
            </div>

            <div class="option-card" data-dec-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.95rem; color: var(--text-bright);">
                <strong>Investigate the context and related evidence:</strong> Check user ticket history (password reset?), caller process (Outlook?), and determine if this is a benign cached credential mismatch before deciding.
              </div>
            </div>

            <div class="option-card" data-dec-opt="d">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">D</div>
              <div style="font-size: 0.95rem; color: var(--text-bright);">
                <strong>Ignore the alert entirely</strong> and hope the next shift analyst deals with it.
              </div>
            </div>
          </div>

          <div id="decision-t3-feedback" style="display: none; padding: 1.25rem; border-radius: 8px; font-size: 0.92rem; line-height: 1.6;"></div>
        </div>
      </section>

      <!-- ADVANCE TO TOPIC 4 CTA -->
      <div style="display: flex; justify-content: flex-end;">
        <button id="btn-next-topic-4" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem; box-shadow: 0 0 25px var(--cyan-glow);">
          Proceed to Topic 04: False Positives →
        </button>
      </div>

    </div>
  `}function se(){R(),document.querySelectorAll(`#decision-t3-options .option-card`).forEach(t=>{t.addEventListener(`click`,n=>{let i=n.currentTarget.getAttribute(`data-dec-opt`),a=document.getElementById(`decision-t3-feedback`);document.querySelectorAll(`#decision-t3-options .option-card`).forEach(e=>{e.classList.remove(`selected-correct`,`selected-wrong`)}),i===`c`?(t.classList.add(`selected-correct`),e.playSuccess(),r.completeCheckpoint(`check-t3-decision`,60,`Made Exemplary L1 Triage Decision`),r.completeTopic(`topic-3`),a&&(a.style.display=`block`,a.style.background=`rgba(16, 185, 129, 0.15)`,a.style.border=`1px solid var(--success)`,a.style.color=`#86efac`,a.innerHTML=`
            <strong>Exemplary Analyst Thinking! Option C is 100% correct.</strong><br/>
            Declaring an attack prematurely (Option A) causes massive business disruption and cries wolf. 
            Closing blindly (Option B) risks missing a real brute force that succeeded. 
            Ignoring it (Option D) is negligence. 
            <strong>A true L1 analyst investigates context:</strong> check IT tickets for password resets, examine caller processes, and correlate the timeline!
          `)):(t.classList.add(`selected-wrong`),e.playClick(),a&&(a.style.display=`block`,a.style.background=`rgba(245, 158, 11, 0.15)`,a.style.border=`1px solid var(--warning)`,a.style.color=`#fde68a`,a.innerHTML=`
            <strong>Not quite. Look at the evidence again.</strong><br/>
            Rushing to escalate without evidence wastes incident response resources. Closing without checking context risks overlooking a breach. 
            Think like an L1: what external context (tickets, processes) can explain this sudden change?
          `))})});let t=document.getElementById(`btn-next-topic-4`);t&&t.addEventListener(`click`,()=>{r.completeTopic(`topic-3`),r.navigate(`topic-4`,4)})}var z={step:1,answers:{authorized:null,legitimate:null,logicBug:null},outcome:null};function B(){return`
    <div style="margin: 2rem 0;">
      
      <!-- Interactive Branching Wizard -->
      <div class="glass-panel" style="padding: 2rem; background: rgba(12, 18, 35, 0.9); border: 1px solid rgba(0, 242, 254, 0.35);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.65rem;">
            <span class="genz-badge badge-try-it">INTERACTIVE DECISION TREE</span>
            <h3 style="font-size: 1.3rem; color: var(--text-bright); font-weight: 800;">
              Classify the Finance01 Activity
            </h3>
          </div>
          <button id="btn-tree-reset" class="btn btn-secondary" style="font-size: 0.78rem; padding: 0.35rem 0.75rem;">
            Reset Decision Path
          </button>
        </div>

        <!-- Step 1: Was Activity Authorized? -->
        <div class="tree-step-card" style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-primary); font-weight: 700;">QUESTION 01</span>
            <span style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">Was this planned or pre-authorized activity?</span>
          </div>
          <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
            Check change management tickets (CAB), penetration test schedules, or vulnerability scan announcements.
          </p>

          <div style="display: flex; gap: 0.75rem;">
            <button class="btn ${z.answers.authorized===!0?`btn-primary`:`btn-secondary`}" data-tree-answer="auth-yes" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
              YES — Approved Test / Scan
            </button>
            <button class="btn ${z.answers.authorized===!1?`btn-outline-cyan`:`btn-secondary`}" data-tree-answer="auth-no" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
              NO / UNKNOWN — Unplanned Activity
            </button>
          </div>
        </div>

        <!-- Step 2: Is there a legitimate benign business explanation? (Shown if NO) -->
        ${z.answers.authorized===!1?`
          <div class="tree-step-card animate-fade-in" style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-primary); font-weight: 700;">QUESTION 02</span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">Is there a legitimate benign explanation?</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
              Did the user recently reset their password? Are background apps (Outlook, mapped SMB drive, mobile device) syncing with an expired token?
            </p>

            <div style="display: flex; gap: 0.75rem;">
              <button class="btn ${z.answers.legitimate===!0?`btn-primary`:`btn-secondary`}" data-tree-answer="legit-yes" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                YES — Cached Credential / App Desync
              </button>
              <button class="btn ${z.answers.legitimate===!1?`btn-outline-cyan`:`btn-secondary`}" data-tree-answer="legit-no" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                NO — No Legitimate Business Reason
              </button>
            </div>
          </div>
        `:``}

        <!-- Step 3: Did detection logic trigger incorrectly? (Shown if NO to legitimate) -->
        ${z.answers.authorized===!1&&z.answers.legitimate===!1?`
          <div class="tree-step-card animate-fade-in" style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-primary); font-weight: 700;">QUESTION 03</span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">Did the detection logic correlate data incorrectly?</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
              Did the SIEM rule group unrelated users, miss an essential exemption filter, or parse the field names incorrectly?
            </p>

            <div style="display: flex; gap: 0.75rem;">
              <button class="btn ${z.answers.logicBug===!0?`btn-primary`:`btn-secondary`}" data-tree-answer="logic-yes" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                YES — SIEM Correlation / Ingestion Bug
              </button>
              <button class="btn ${z.answers.logicBug===!1?`btn-alert`:`btn-secondary`}" data-tree-answer="logic-no" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                NO — Logic is Valid & Attack is Real
              </button>
            </div>
          </div>
        `:``}

        <!-- Final Outcome Box -->
        ${ce(z)}

      </div>
    </div>
  `}function ce(e){return e.answers.authorized===!0?`
      <div class="glass-panel animate-fade-in-up" style="padding: 1.5rem; border-color: rgba(139, 92, 246, 0.4); background: rgba(26, 17, 44, 0.9);">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-demo">CLASSIFICATION RESULT</span>
          <h4 style="font-size: 1.2rem; color: #c084fc; font-weight: 800;">EXPECTED ACTIVITY</h4>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.75rem;">
          The activity was scheduled and authorized. It generated telemetry because the test intended to validate security detection.
        </p>
        <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
          ✓ <strong>L1 Action:</strong> Link Change Ticket / Pentest authorization in notes, close alert as Expected Activity. Do NOT escalate to Tier 2.
        </div>
      </div>
    `:e.answers.authorized===!1&&e.answers.legitimate===!0?`
      <div class="glass-panel animate-fade-in-up" style="padding: 1.5rem; border-color: rgba(16, 185, 129, 0.4); background: rgba(12, 32, 24, 0.9);">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-try-it">CORRECT FOR FINANCE01</span>
          <h4 style="font-size: 1.2rem; color: #86efac; font-weight: 800;">BENIGN ACTIVITY (BENIGN POSITIVE)</h4>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.75rem;">
          Real events happened, matching the detection threshold (18 failures), but the root cause is confirmed harmless: Jane changed her password at 10:15 AM, and Outlook repeatedly attempted to authenticate with the cached old password until she typed the new one at 10:31:45 AM.
        </p>
        <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
          ✓ <strong>L1 Action:</strong> Document Ticket #IT-94821 and the 10:31:45 4624 success, close case as Benign Positive, send user tip to clear Windows Credential Manager if failures recur.
        </div>
      </div>
    `:e.answers.authorized===!1&&e.answers.legitimate===!1&&e.answers.logicBug===!0?`
      <div class="glass-panel animate-fade-in-up" style="padding: 1.5rem; border-color: rgba(99, 102, 241, 0.4); background: rgba(16, 18, 42, 0.9);">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-tech-box">CLASSIFICATION RESULT</span>
          <h4 style="font-size: 1.2rem; color: #a5b4fc; font-weight: 800;">DETECTION ERROR (RULE MISCONFIGURATION)</h4>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.75rem;">
          The underlying raw events occurred, but the detection rule combined unrelated data incorrectly (e.g. aggregating failures across different users or failing to group by user).
        </p>
        <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
          ✓ <strong>L1 Action:</strong> Close alert, file tuning ticket for Detection Engineering team with suggested query syntax fix.
        </div>
      </div>
    `:e.answers.authorized===!1&&e.answers.legitimate===!1&&e.answers.logicBug===!1?`
      <div class="glass-panel animate-fade-in-up" style="padding: 1.5rem; border-color: rgba(239, 68, 68, 0.5); background: rgba(35, 12, 18, 0.9);">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-alert">ACTIVE THREAT</span>
          <h4 style="font-size: 1.2rem; color: #fca5a5; font-weight: 800;">TRUE POSITIVE — MALICIOUS ATTACK</h4>
        </div>
        <p style="font-size: 0.92rem; color: var(--text-bright); line-height: 1.6; margin-bottom: 0.75rem;">
          Unauthorized, non-benign, and verified telemetry indicates active brute force, password spraying, or credential stuffing by an unauthorized entity.
        </p>
        <div style="font-size: 0.82rem; color: var(--text-secondary); background: rgba(0,0,0,0.3); padding: 0.75rem; border-radius: 6px;">
          🚨 <strong>L1 Action:</strong> Declare Incident, execute containment (isolate host via EDR, revoke Active Directory sessions), escalate case to L2 with full telemetry payload.
        </div>
      </div>
    `:`
    <div style="text-align: center; padding: 1.5rem; color: var(--text-muted); font-size: 0.85rem; font-family: var(--font-mono);">
      Select answers above to trace the decision tree outcome...
    </div>
  `}function V(){document.querySelectorAll(`[data-tree-answer]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-tree-answer`);e.playClick(),n===`auth-yes`?z.answers.authorized=!0:n===`auth-no`?(z.answers.authorized=!1,z.answers.legitimate=null,z.answers.logicBug=null):n===`legit-yes`?(z.answers.legitimate=!0,r.completeCheckpoint(`check-fp-classified`,50,`Mastered Benign Positive Classification`),e.playSuccess()):n===`legit-no`?(z.answers.legitimate=!1,z.answers.logicBug=null):n===`logic-yes`?z.answers.logicBug=!0:n===`logic-no`&&(z.answers.logicBug=!1);let i=document.getElementById(`fp-tree-container`);i&&(i.innerHTML=B(),V())})});let t=document.getElementById(`btn-tree-reset`);t&&t.addEventListener(`click`,()=>{z={step:1,answers:{authorized:null,legitimate:null,logicBug:null},outcome:null},e.playClick();let t=document.getElementById(`fp-tree-container`);t&&(t.innerHTML=B(),V())})}function le(){return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${h(`topic-4`)}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-demo">TOPIC 04 • 10:45 AM</span>
          <span class="mono-data">SIGNAL VS NOISE</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Looks suspicious. <span class="gradient-text-cyan">But is it?</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--warning); margin-bottom: 2.5rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #fde047; margin-bottom: 0.4rem; text-transform: uppercase;">
            ANALYST AWARENESS • 10:45 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "A novice analyst sees 18 failed logins and yells <em>'HACKER!'</em>. 
            A seasoned SOC Analyst knows that <strong>not every alert is malicious</strong>. 
            In fact, the majority of enterprise security alerts fall into three distinct non-malicious categories: 
            <strong>Expected Activity, Benign Activity, or Detection Error.</strong>"
          </p>
        </div>
      </section>

      <!-- THREE NON-MALICIOUS CATEGORIES -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-key-idea">CORE TAXONOMY</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">THE THREE NON-MALICIOUS FORMS</span>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 1.5rem;">
          Understanding Non-Malicious Alerts
        </h2>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem;">
          
          <!-- Category 1: Expected Activity -->
          <div class="glass-panel" style="padding: 1.75rem; border-color: rgba(139, 92, 246, 0.35);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="genz-badge badge-demo">CATEGORY 01</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #c084fc;">AUTHORIZED</span>
            </div>
            <h3 style="font-size: 1.3rem; color: #c084fc; margin-bottom: 0.5rem;">
              Expected Activity
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
              Activity that is fully authorized, scheduled, and expected by internal teams.
            </p>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.85rem; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-bright);">
              <strong>Example:</strong> FinCorp Internal Security Team conducting an approved penetration test or vulnerability vulnerability scan from authorized IP ranges.
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              <strong>Analyst Action:</strong> Verify against Change Management / Pentest calendar, document authorization ticket, close as Expected.
            </div>
          </div>

          <!-- Category 2: Benign Activity -->
          <div class="glass-panel" style="padding: 1.75rem; border-color: rgba(16, 185, 129, 0.35); background: rgba(12, 28, 22, 0.7);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="genz-badge badge-try-it">CATEGORY 02 (FINANCE01)</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #86efac;">HARMLESS GLITCH</span>
            </div>
            <h3 style="font-size: 1.3rem; color: #86efac; margin-bottom: 0.5rem;">
              Benign Activity
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
              Legitimate user or system behavior that unintentionally mimics attack patterns.
            </p>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.85rem; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-bright);">
              <strong>Finance01 Example:</strong> Jane changes domain password. Outlook repeatedly retries background sync using cached credentials, generating 18 failures until Jane logs on.
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              <strong>Analyst Action:</strong> Link password reset ticket, verify 4624 success, close as Benign Positive, guide user to purge Credential Manager.
            </div>
          </div>

          <!-- Category 3: Detection Error -->
          <div class="glass-panel" style="padding: 1.75rem; border-color: rgba(99, 102, 241, 0.35);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="genz-badge badge-tech-box">CATEGORY 03</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #a5b4fc;">RULE LOGIC BUG</span>
            </div>
            <h3 style="font-size: 1.3rem; color: #a5b4fc; margin-bottom: 0.5rem;">
              Detection Error
            </h3>
            <p style="font-size: 0.9rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem;">
              The detection rule logic or data pipeline caused an incorrect conclusion.
            </p>
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.85rem; margin-bottom: 1rem; font-size: 0.85rem; color: var(--text-bright);">
              <strong>Example:</strong> Rule looks for 5 failures, but combines 1 typo from Alice, 1 typo from Bob, and 1 typo from Charlie into a fake "coordinated spray".
            </div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">
              <strong>Analyst Action:</strong> Close alert, file tuning ticket for Detection Engineering to group query by <span class="mono-data">TargetUserName</span>.
            </div>
          </div>

        </div>
      </section>

      <!-- BENIGN ACTIVITY ANIMATED DIAGRAM (CACHED CREDENTIAL) -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.95); border: 1px solid rgba(0, 242, 254, 0.35);">
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-demo">THE CACHED CREDENTIAL ANATOMY</span>
            <span style="font-size: 0.85rem; color: var(--cyan-text); font-family: var(--font-mono);">WHAT REALLY HAPPENED TO FINANCE01</span>
          </div>

          <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 1.25rem;">
            How a Simple Password Change Triggered a SIEM Storm
          </h3>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 1rem; margin-bottom: 1.5rem;">
            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.15rem; text-align: center;">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted);">STEP 01 (10:15 AM)</div>
              <div style="font-weight: 700; color: var(--text-bright); margin: 0.35rem 0;">Password Reset</div>
              <p style="font-size: 0.78rem; color: var(--text-secondary);">Jane changes domain password on portal from phone.</p>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.15rem; text-align: center;">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted);">STEP 02 (10:30 AM)</div>
              <div style="font-weight: 700; color: var(--text-bright); margin: 0.35rem 0;">Laptop Wakes Up</div>
              <p style="font-size: 0.78rem; color: var(--text-secondary);">FIN-PC-04 wakes. Outlook has OLD password in memory.</p>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1.15rem; text-align: center;">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--danger); font-weight: 700;">STEP 03 (10:30-10:31)</div>
              <div style="font-weight: 700; color: var(--text-bright); margin: 0.35rem 0;">18x 4625 Failures</div>
              <p style="font-size: 0.78rem; color: var(--text-secondary);">Outlook repeatedly retries sync against AD with old token.</p>
            </div>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(239,68,68,0.3); border-radius: 8px; padding: 1.15rem; text-align: center;">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--danger); font-weight: 700;">STEP 04 (10:32 AM)</div>
              <div style="font-weight: 700; color: var(--text-bright); margin: 0.35rem 0;">🚨 Alert ALT-9042</div>
              <p style="font-size: 0.78rem; color: var(--text-secondary);">Threshold rule trips: ≥10 failures in 120 seconds!</p>
            </div>

            <div style="background: rgba(16,185,129,0.1); border: 1px solid rgba(16,185,129,0.3); border-radius: 8px; padding: 1.15rem; text-align: center;">
              <div style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--success); font-weight: 700;">STEP 05 (10:31:45 AM)</div>
              <div style="font-weight: 700; color: #86efac; margin: 0.35rem 0;">✓ 4624 Success</div>
              <p style="font-size: 0.78rem; color: var(--text-secondary);">Jane enters new password at desk. Failures stop immediately!</p>
            </div>
          </div>

          <!-- TECH BOX CALLOUT -->
          <div class="callout-box callout-tech-box" style="margin-bottom: 0;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">🧩 TECH BOX: DETECTION ERRORS</span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 0.95rem;">Rule Flaws vs Event Reality</span>
            </div>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6;">
              "Detection error does <strong>not</strong> mean the underlying events did not happen. It means the <strong>alert conclusion</strong> was produced incorrectly due to flawed correlation syntax, faulty aggregation windows, or missing entity groupings."
            </p>
          </div>
        </div>
      </section>

      <!-- INTERACTIVE FALSE POSITIVE DECISION TREE -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="genz-badge badge-try-it">INTERACTIVE FRAMEWORK</span>
            <h2 style="font-size: 1.6rem; color: var(--text-bright); margin-top: 0.35rem;">
              The False Positive Decision Tree
            </h2>
          </div>
          <div style="font-size: 0.82rem; color: var(--cyan-text); font-family: var(--font-mono);">
            WALK THROUGH THE THREE CRITICAL QUESTIONS
          </div>
        </div>

        <div id="fp-tree-container">
          ${B()}
        </div>
      </section>

      <!-- ADVANCE TO TOPIC 5 CTA -->
      <div style="display: flex; justify-content: flex-end;">
        <button id="btn-next-topic-5" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem; box-shadow: 0 0 25px var(--cyan-glow);">
          Proceed to Topic 05: Severity & Escalation →
        </button>
      </div>

    </div>
  `}function ue(){V();let e=document.getElementById(`btn-next-topic-5`);e&&e.addEventListener(`click`,()=>{r.completeTopic(`topic-4`),r.navigate(`topic-5`,5)})}var H={assetTier:2,userPrivilege:1,threatLikelihood:2,scopeExposure:1};function de(){let e=H.assetTier*1.5+H.userPrivilege*1.5+H.threatLikelihood*2+H.scopeExposure*1,t=Math.min(10,Math.max(1,e/18*10)).toFixed(1),n=`LOW`,r=`var(--success)`,i=`25%`;return t>=8.5?(n=`CRITICAL`,r=`var(--danger)`,i=`100%`):t>=6.5?(n=`HIGH`,r=`#f97316`,i=`75%`):t>=4?(n=`MEDIUM`,r=`#fbbf24`,i=`50%`):(n=`LOW`,r=`var(--success)`,i=`25%`),`
    <div style="margin: 2rem 0;">
      <div class="glass-panel" style="padding: 2rem; background: rgba(12, 18, 35, 0.9); border: 1px solid rgba(0, 242, 254, 0.35);">
        
        <!-- Matrix Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.25rem;">
              <span class="genz-badge badge-try-it">DYNAMIC RISK CALCULATOR</span>
              <h3 style="font-size: 1.3rem; color: var(--text-bright); font-weight: 800;">
                Severity = Impact (Asset × Privilege) × Likelihood (Threat × Scope)
              </h3>
            </div>
            <div style="font-size: 0.82rem; color: var(--text-secondary);">
              Toggle operational variables to see how severity dynamically scales in a real SOC triage workflow.
            </div>
          </div>

          <!-- Dynamic Output Badge -->
          <div style="text-align: right; background: rgba(0,0,0,0.4); padding: 0.75rem 1.25rem; border-radius: 8px; border: 1px solid var(--border-subtle);">
            <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">CALCULATED SEVERITY</div>
            <div style="font-size: 1.5rem; font-weight: 800; font-family: var(--font-mono); color: ${r};">
              ${n} (${t} / 10)
            </div>
          </div>
        </div>

        <!-- Gauge Bar -->
        <div class="severity-gauge">
          <div class="severity-gauge-bar" style="width: ${i}; background: ${r}; box-shadow: 0 0 16px ${r};"></div>
        </div>

        <!-- 4 Tweakable Variables -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.25rem; margin: 1.5rem 0;">
          
          <!-- Variable 1: Asset Criticality -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
              01. ASSET CRITICALITY
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              ${[{val:1,label:`Standard PC (Tier 3)`},{val:2,label:`FIN-PC-04 Finance (Tier 2)`,selected:!0},{val:3,label:`Domain Controller (Tier 0)`}].map(e=>`
                <button class="btn ${H.assetTier===e.val?`btn-primary`:`btn-secondary`}" data-matrix-param="assetTier" data-val="${e.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
                  ${e.label}
                </button>
              `).join(``)}
            </div>
          </div>

          <!-- Variable 2: User Privilege -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
              02. USER PRIVILEGE
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              ${[{val:1,label:`Standard (Finance01)`,selected:!0},{val:2,label:`VIP / Executive Officer`},{val:3,label:`Domain / Enterprise Admin`}].map(e=>`
                <button class="btn ${H.userPrivilege===e.val?`btn-primary`:`btn-secondary`}" data-matrix-param="userPrivilege" data-val="${e.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
                  ${e.label}
                </button>
              `).join(``)}
            </div>
          </div>

          <!-- Variable 3: Threat Likelihood & Evidence -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
              03. THREAT LIKELIHOOD
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              ${[{val:1,label:`Benign (Ticket / 4624 Success)`},{val:2,label:`Burst Trigger (Uncertain)`,selected:!0},{val:3,label:`Active Malware / Brute Force`}].map(e=>`
                <button class="btn ${H.threatLikelihood===e.val?`btn-primary`:`btn-secondary`}" data-matrix-param="threatLikelihood" data-val="${e.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
                  ${e.label}
                </button>
              `).join(``)}
            </div>
          </div>

          <!-- Variable 4: Scope & Exposure -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem;">
            <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
              04. SCOPE & EXPOSURE
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4rem;">
              ${[{val:1,label:`Isolated Single Host`,selected:!0},{val:2,label:`Internal Subnet (VLAN 20)`},{val:3,label:`Multi-Site / External Exposed`}].map(e=>`
                <button class="btn ${H.scopeExposure===e.val?`btn-primary`:`btn-secondary`}" data-matrix-param="scopeExposure" data-val="${e.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
                  ${e.label}
                </button>
              `).join(``)}
            </div>
          </div>

        </div>

        <!-- Case Insight Box -->
        <div style="background: rgba(0, 242, 254, 0.05); border: 1px solid rgba(0, 242, 254, 0.2); border-radius: 8px; padding: 1.25rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.35rem;">
            <span class="genz-badge badge-key-idea">ANALYST SEVERITY VERDICT</span>
            <span style="font-weight: 700; color: var(--cyan-primary); font-size: 0.95rem;">Why Finance01 Began as Medium (5.8) and De-escalated to Informational / Closed</span>
          </div>
          <p style="font-size: 0.9rem; color: var(--text-bright); line-height: 1.6;">
            When the SIEM first generated <span class="mono-data">ALT-2026-9042</span>, it scored it <strong>Medium (5.8)</strong> because it only knew: <em>Asset = Finance PC (Tier 2), Failures = 18 in 84s</em>. But once YOU (the L1 Analyst) verified the 10:15 AM password reset ticket and the 10:31:45 4624 success, the Likelihood dropped to <strong>Benign</strong>, dropping the true operational risk to near zero.
          </p>
        </div>

      </div>
    </div>
  `}function fe(){document.querySelectorAll(`[data-matrix-param]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-matrix-param`),i=parseInt(t.currentTarget.getAttribute(`data-val`),10);if(n&&!isNaN(i)){H[n]=i,e.playSubtleTick(),r.completeCheckpoint(`check-severity-calculated`,25,`Explored Dynamic Severity Matrix`);let t=document.getElementById(`severity-matrix-container`);t&&(t.innerHTML=de(),fe())}})})}function pe(){return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${h(`topic-5`)}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-scenario">TOPIC 05 • 10:52 AM</span>
          <span class="mono-data">RISK CALCULUS & ESCALATION CRITERIA</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          How serious <span class="gradient-text-cyan">is it?</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid #fbbf24; margin-bottom: 2.5rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #fbbf24; margin-bottom: 0.4rem; text-transform: uppercase;">
            ANALYST METHODOLOGY • 10:52 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "A static rule assigns an initial severity label. But in reality, <strong>severity is dynamic</strong>. 
            The true priority of an alert depends on the mathematical intersection of 
            <strong>Impact</strong> (What asset or user is involved?) and <strong>Likelihood</strong> (Is the threat real and actively succeeding?)."
          </p>
        </div>
      </section>

      <!-- THE CORE SEVERITY FORMULA -->
      <section style="margin-bottom: 4rem;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
          
          <!-- Formula Card -->
          <div class="glass-panel" style="padding: 2rem; border-color: rgba(0, 242, 254, 0.35);">
            <span class="genz-badge badge-key-idea" style="margin-bottom: 0.75rem;">MATHEMATICAL FOUNDATION</span>
            <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 0.75rem;">
              Severity = Impact × Likelihood
            </h3>
            <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
              Cybersecurity risk calculations are never based solely on the volume of events. 1,000 failed attempts against a dummy honeypot account is Low Severity. 2 failed attempts against the primary Domain Controller from an external Russian IP is Critical Severity.
            </p>

            <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem; font-family: var(--font-mono); font-size: 0.85rem; color: var(--cyan-text);">
              Risk = (Asset Tier + User Privilege) × (Adversary Confidence + Scope)
            </div>
          </div>

          <!-- Influencing Factors Grid -->
          <div class="glass-panel" style="padding: 2rem; border-color: rgba(139, 92, 246, 0.35);">
            <span class="genz-badge badge-demo" style="margin-bottom: 0.75rem;">THE 4 TRIAGE WEIGHTS</span>
            <h3 style="font-size: 1.4rem; color: var(--text-bright); margin-bottom: 0.75rem;">
              What Dictates Severity in FinCorp?
            </h3>
            
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.88rem;">
              <li style="display: flex; gap: 0.5rem; color: var(--text-secondary);">
                <span style="color: var(--cyan-primary); font-weight: 700;">1. Asset Criticality:</span> Tier 0 (DC / SWIFT) vs Tier 2 (Workstation).
              </li>
              <li style="display: flex; gap: 0.5rem; color: var(--text-secondary);">
                <span style="color: var(--cyan-primary); font-weight: 700;">2. Identity Privilege:</span> Domain Admin vs Standard Employee.
              </li>
              <li style="display: flex; gap: 0.5rem; color: var(--text-secondary);">
                <span style="color: var(--cyan-primary); font-weight: 700;">3. Threat Stage:</span> Pre-attack scan vs Active C2 beacon vs Exfiltration.
              </li>
              <li style="display: flex; gap: 0.5rem; color: var(--text-secondary);">
                <span style="color: var(--cyan-primary); font-weight: 700;">4. Exposure & Scope:</span> Single isolated laptop vs Multi-branch subnet.
              </li>
            </ul>
          </div>

        </div>
      </section>

      <!-- INTERACTIVE SEVERITY MATRIX GAUGE -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="genz-badge badge-try-it">LIVE RISK CALCULATOR</span>
            <h2 style="font-size: 1.6rem; color: var(--text-bright); margin-top: 0.35rem;">
              Interactive Severity Matrix
            </h2>
          </div>
          <div style="font-size: 0.82rem; color: var(--cyan-text); font-family: var(--font-mono);">
            ADJUST VARIABLES TO SIMULATE RISK SCORING
          </div>
        </div>

        <div id="severity-matrix-container">
          ${de()}
        </div>
      </section>

      <!-- QUICK CHECK QUIZ -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.9); border: 1px solid rgba(245, 158, 11, 0.4);">
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-quiz">📝 QUICK CHECK</span>
            <span style="font-size: 0.85rem; color: #fde047; font-family: var(--font-mono);">STAGE 05 SCENARIO CHECK</span>
          </div>
          <h3 style="font-size: 1.3rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Suppose the exact same 18 failed logins occurred on DC01 (Primary Domain Controller) targeting "da_backup_svc". How does severity change?
          </h3>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;" id="quiz-t5-options">
            <div class="option-card" data-quiz-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">It remains Medium, because 18 failures is always the same number of events.</div>
            </div>
            <div class="option-card" data-quiz-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">It drops to Low, because servers have stronger firewalls.</div>
            </div>
            <div class="option-card" data-quiz-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">It immediately escalates to High or Critical, because a Domain Controller and privileged service account compromise threatens the entire enterprise domain!</div>
            </div>
          </div>

          <div id="quiz-t5-feedback" style="display: none; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"></div>
        </div>
      </section>

      <!-- ADVANCE TO TOPIC 6 CTA -->
      <div style="display: flex; justify-content: flex-end;">
        <button id="btn-next-topic-6" class="btn btn-alert" style="font-size: 1.05rem; padding: 0.85rem 2.5rem; box-shadow: 0 0 30px var(--danger-glow); animation: pulse-border 2s infinite;">
          Unlock Final L1 Challenge (Topic 06) 🚀 →
        </button>
      </div>

    </div>
  `}function me(){fe(),document.querySelectorAll(`#quiz-t5-options .option-card`).forEach(t=>{t.addEventListener(`click`,n=>{let i=n.currentTarget.getAttribute(`data-quiz-opt`),a=document.getElementById(`quiz-t5-feedback`);document.querySelectorAll(`#quiz-t5-options .option-card`).forEach(e=>{e.classList.remove(`selected-correct`,`selected-wrong`)}),i===`c`?(t.classList.add(`selected-correct`),e.playSuccess(),r.completeCheckpoint(`check-t5-quiz`,50,`Mastered Severity Escalation Calculus`),r.completeTopic(`topic-5`),a&&(a.style.display=`block`,a.style.background=`rgba(16, 185, 129, 0.15)`,a.style.border=`1px solid var(--success)`,a.style.color=`#86efac`,a.innerHTML=`<strong>Spot on!</strong> A Domain Controller is a Tier 0 Tier-Zero asset, and a domain admin service account has keys to the entire enterprise kingdom. Impact is maximum, escalating severity instantly to High/Critical!`)):(t.classList.add(`selected-wrong`),e.playClick(),a&&(a.style.display=`block`,a.style.background=`rgba(245, 158, 11, 0.15)`,a.style.border=`1px solid var(--warning)`,a.style.color=`#fde68a`,a.innerHTML=`Not quite. Asset Criticality and Account Privilege multiply the Impact exponentially! Compromise of a Domain Controller represents catastrophic risk.`))})});let t=document.getElementById(`btn-next-topic-6`);t&&t.addEventListener(`click`,()=>{r.completeTopic(`topic-5`),r.navigate(`topic-6`,6)})}var he={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function ee(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function D(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(j(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function te(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return D(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function O(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,D=e.height*C.y;w--;)T.push(ee({x:E,y:D,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=te(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var k;function A(){return k||=O(null,{useWorker:!0,resize:!0}),k}function j(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function M(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function N(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return A().apply(this,arguments)},n.exports.reset=function(){A().reset()},n.exports.create=O,n.exports.shapeFromPath=M,n.exports.shapeFromText=N})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),he,!1);var ge=he.exports;he.exports.create;var U={activeStep:1,queryExecuted:!1,ticketFound:!1,selectedHypothesis:null,documentationDrafted:!1,finalDisposition:null,score:0,completed:!1,customNotes:`CASE ALT-2026-9042 INVESTIGATION REPORT
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
Benign Positive (False Positive - Cached Credentials). No security escalation required.`};function _e(){return r.state.finalChallenge.completed||U.completed,`
    <div style="margin: 2rem 0;">
      <!-- Challenge Progress Steps -->
      <div class="glass-panel" style="padding: 1.25rem 2rem; margin-bottom: 1.5rem; background: rgba(10, 16, 31, 0.85); border-color: rgba(0, 242, 254, 0.3);">
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
            ${[{n:1,label:`SIEM Query`},{n:2,label:`Ticket Lookup`},{n:3,label:`Hypothesis`},{n:4,label:`Case Notes`},{n:5,label:`Resolution`},{n:6,label:`Debrief`}].map(e=>`
              <div style="padding: 0.3rem 0.6rem; border-radius: 4px; background: ${U.activeStep===e.n?`var(--cyan-subtle)`:`rgba(255,255,255,0.03)`}; border: 1px solid ${U.activeStep===e.n?`var(--cyan-primary)`:`var(--border-subtle)`}; color: ${U.activeStep===e.n?`var(--cyan-primary)`:`var(--text-muted)`}; font-weight: ${U.activeStep===e.n?`700`:`400`};">
                0${e.n} ${e.label}
              </div>
            `).join(``)}
          </div>
        </div>
      </div>

      <!-- Main Challenge Stage Container -->
      <div class="glass-panel" style="padding: 2.25rem; background: rgba(12, 18, 36, 0.95); border: 1px solid rgba(0, 242, 254, 0.35); min-height: 480px;">
        ${ve()}
      </div>
    </div>
  `}function ve(){switch(U.activeStep){case 1:return`
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

          ${U.queryExecuted?`
            <div class="animate-fade-in-up" style="background: rgba(0, 242, 254, 0.04); border: 1px solid rgba(0, 242, 254, 0.25); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.5rem;">
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
          `:``}
        </div>
      `;case 2:return`
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

          ${U.ticketFound?`
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
          `:``}
        </div>
      `;case 3:return`
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
            ${[{id:`hyp-a`,title:`Hypothesis A: External Credential Stuffing / Brute Force Attack`,desc:`An external threat actor is guessing passwords against Jane’s account over the Internet.`,isCorrect:!1,feedback:`Incorrect. The source IP (10.10.20.15) is Jane’s own internal laptop, caller processes were legitimate Outlook/SMB, and the attempts stopped when Jane entered her new password at her desk.`},{id:`hyp-b`,title:`Hypothesis B: Malware Lateral Movement Infection`,desc:`A worm or trojan is utilizing compromised credentials to spread to other corporate hosts.`,isCorrect:!1,feedback:`Incorrect. EDR process tree on FIN-PC-04 is completely clean with 0 unsigned binaries, and network traffic never left internal Exchange/SMB.`},{id:`hyp-c`,title:`Hypothesis C: Benign Cached Credential Storm Following Password Reset`,desc:`Workstation applications attempted authentication using an outdated cached token following a recent password reset, resolved when user entered updated credentials.`,isCorrect:!0,feedback:`Spot on! This perfectly matches every single piece of evidence: Ticket #IT-94821, Outlook process caller, 0xC000006A wrong password code, and the 10:31:45 4624 success!`}].map(e=>{let t=U.selectedHypothesis===e.id,n=`option-card`;return t&&(n+=e.isCorrect?` selected-correct`:` selected-wrong`),`
                <div class="${n}" data-hyp-id="${e.id}" data-correct="${e.isCorrect}">
                  <div style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid ${t?e.isCorrect?`var(--success)`:`var(--warning)`:`var(--border-medium)`}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                    ${t?`<span style="width: 10px; height: 10px; border-radius: 50%; background: ${e.isCorrect?`var(--success)`:`var(--warning)`};"></span>`:``}
                  </div>
                  <div style="flex: 1;">
                    <div style="font-weight: 700; color: var(--text-bright); font-size: 1rem; margin-bottom: 0.35rem;">
                      ${e.title}
                    </div>
                    <div style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">
                      ${e.desc}
                    </div>
                    ${t?`
                      <div style="margin-top: 0.75rem; font-size: 0.85rem; color: ${e.isCorrect?`#86efac`:`#fcd34d`}; font-weight: 600;">
                        ${e.feedback}
                      </div>
                    `:``}
                  </div>
                </div>
              `}).join(``)}
          </div>

          ${U.selectedHypothesis===`hyp-c`?`
            <div style="display: flex; justify-content: flex-end;">
              <button id="btn-next-step-4" class="btn btn-primary" style="font-size: 0.9rem; padding: 0.6rem 1.5rem;">
                Proceed to Phase 04: Case Documentation →
              </button>
            </div>
          `:``}
        </div>
      `;case 4:return`
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
            <textarea id="challenge-report-text" style="width: 100%; height: 260px; background: rgba(6, 10, 20, 0.9); border: 1px solid var(--border-medium); border-radius: 8px; color: var(--cyan-text); font-family: var(--font-mono); font-size: 0.85rem; padding: 1.25rem; line-height: 1.6; resize: vertical;">${U.customNotes}</textarea>
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
      `;case 5:return`
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
            ${[{id:`disp-close-benign`,title:`Close as Benign Positive (False Positive - Cached Credential)`,badge:`CORRECT DISPOSITION`,badgeClass:`badge-try-it`,desc:`Case documented with Ticket #IT-94821 and Event 4624 evidence. User guided to refresh Windows Credential Manager if failures recur. Alert closed without unnecessary escalation.`,isCorrect:!0},{id:`disp-escalate-l2`,title:`Escalate to Tier 2 Incident Response Team (SEV-2 Incident)`,badge:`UNJUSTIFIED ESCALATION`,badgeClass:`badge-alert`,desc:`Declaring an enterprise security incident and passing to Tier 2 without root cause justification wastes precious IR resources on a harmless password change.`,isCorrect:!1},{id:`disp-silent-close`,title:`Silently Close Alert with No Notes or Documentation`,badge:`COMPLIANCE VIOLATION`,badgeClass:`badge-challenge`,desc:`Closing alerts without an audit trail violates SOC compliance policies (SOC2, ISO 27001) and blinds team members if subsequent attacks occur.`,isCorrect:!1}].map(e=>{let t=U.finalDisposition===e.id,n=`option-card`;return t&&(n+=e.isCorrect?` selected-correct`:` selected-wrong`),`
                <div class="${n}" data-disp-id="${e.id}" data-correct="${e.isCorrect}">
                  <div style="width: 22px; height: 22px; border-radius: 50%; border: 2px solid ${t?e.isCorrect?`var(--success)`:`var(--danger)`:`var(--border-medium)`}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 2px;">
                    ${t?`<span style="width: 10px; height: 10px; border-radius: 50%; background: ${e.isCorrect?`var(--success)`:`var(--danger)`};"></span>`:``}
                  </div>
                  <div style="flex: 1;">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
                      <span style="font-weight: 700; color: var(--text-bright); font-size: 1.05rem;">${e.title}</span>
                      <span class="genz-badge ${e.badgeClass}" style="font-size: 0.68rem;">${e.badge}</span>
                    </div>
                    <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.5;">${e.desc}</p>
                  </div>
                </div>
              `}).join(``)}
          </div>

          ${U.finalDisposition===`disp-close-benign`?`
            <div style="display: flex; justify-content: flex-end;">
              <button id="btn-submit-challenge" class="btn btn-primary" style="font-size: 1rem; padding: 0.75rem 2rem;">
                Submit Case & Complete Shift Trial 🏆 →
              </button>
            </div>
          `:``}
        </div>
      `;case 6:return`
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
      `;default:return``}}function ye(){let t=document.getElementById(`btn-run-query`);t&&t.addEventListener(`click`,()=>{U.queryExecuted=!0,e.playSuccess(),r.completeCheckpoint(`check-challenge-query`,30,`Executed SIEM Telemetry Query`),W()});let n=document.getElementById(`btn-next-step-2`);n&&n.addEventListener(`click`,()=>{U.activeStep=2,e.playClick(),W()});let i=document.getElementById(`btn-search-tickets`);i&&i.addEventListener(`click`,()=>{U.ticketFound=!0,e.playSuccess(),r.completeCheckpoint(`check-challenge-ticket`,30,`Correlated Service Desk Ticket`),W()});let a=document.getElementById(`btn-next-step-3`);a&&a.addEventListener(`click`,()=>{U.activeStep=3,e.playClick(),W()}),document.querySelectorAll(`[data-hyp-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-hyp-id`),i=t.currentTarget.getAttribute(`data-correct`)===`true`;U.selectedHypothesis=n,i?(e.playSuccess(),r.completeCheckpoint(`check-challenge-hyp`,40,`Identified Cached Credential Hypothesis`)):e.playClick(),W()})});let o=document.getElementById(`btn-next-step-4`);o&&o.addEventListener(`click`,()=>{U.activeStep=4,e.playClick(),W()});let s=document.getElementById(`challenge-report-text`);s&&s.addEventListener(`input`,e=>{U.customNotes=e.target.value});let c=document.getElementById(`btn-next-step-5`);c&&c.addEventListener(`click`,()=>{s&&(U.customNotes=s.value),U.activeStep=5,e.playClick(),W()}),document.querySelectorAll(`[data-disp-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-disp-id`),r=t.currentTarget.getAttribute(`data-correct`)===`true`;U.finalDisposition=n,r?e.playSuccess():e.playClick(),W()})});let l=document.getElementById(`btn-submit-challenge`);l&&l.addEventListener(`click`,()=>{U.activeStep=6,U.completed=!0,U.score=100,r.submitFinalChallenge({score:100,classification:`Benign Positive (False Positive - Cached Credential)`,recommendation:`Instruct user to purge Windows Credential Manager; close alert with Ticket #IT-94821 reference.`,notes:U.customNotes}),ge({particleCount:120,spread:80,origin:{y:.6}}),W()});let u=document.getElementById(`btn-open-certificate`);u&&u.addEventListener(`click`,()=>{let e=document.getElementById(`certificate-modal-container`);e&&(e.style.display=`flex`)})}function W(){let e=document.getElementById(`final-challenge-container`);e&&(e.innerHTML=_e(),ye())}function be(){return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${h(`topic-6`)}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-alert">TOPIC 06 • 11:00 AM</span>
          <span class="mono-data">THE CAPSTONE OPERATIONAL TRIAL</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          The Final <span class="gradient-text-cyan">L1 Challenge.</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--cyan-primary); margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text); margin-bottom: 0.4rem; text-transform: uppercase;">
            SHIFT EVALUATION • 11:00 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "This is your defining moment as an L1 Analyst. You have all the data, logs, and tools at your disposal. 
            Step into the virtual terminal: <strong>execute the SIEM query, correlate the Service Desk ticket, formulate your hypothesis, draft official case notes, and make the closing disposition call.</strong>"
          </p>
        </div>
      </section>

      <!-- LIVE CHALLENGE SIMULATOR -->
      <section>
        <div id="final-challenge-container">
          ${_e()}
        </div>
      </section>

    </div>
  `}function xe(){ye()}var G=[{id:4625,name:`An account failed to log on`,category:`Logon / Logoff`,criticality:`Medium - High`,description:`Generated when a logon request fails. Critical for spotting password spraying, brute force attacks, account lockouts, or cached credential mismatches.`,keyFields:[`TargetUserName`,`WorkstationName`,`IpAddress`,`LogonType`,`Status`,`SubStatus`,`ProcessName`],fincorpContext:`Generated 18 times on FIN-PC-04 between 10:30:01 and 10:31:25 with substatus 0xC000006A (bad password).`},{id:4624,name:`An account was successfully logged on`,category:`Logon / Logoff`,criticality:`Informational`,description:`Generated when a logon session is successfully created. Documents who logged on, from where, and how (console, network share, RDP).`,keyFields:[`TargetUserName`,`TargetDomainName`,`LogonType`,`IpAddress`,`ElevatedToken`],fincorpContext:`Generated at 10:31:45 AM for Finance01 with Logon Type 2 (Interactive console logon). Proves Jane arrived and logged in successfully.`},{id:4672,name:`Special privileges assigned to new logon`,category:`Privilege Use`,criticality:`Medium`,description:`Generated when an account with administrative or super-user privileges (e.g. SeDebugPrivilege, SeBackupPrivilege) logs on.`,keyFields:[`SubjectUserName`,`PrivilegeList`],fincorpContext:`Checked during triage: Not present in Finance01 session, confirming no administrative privilege escalation.`},{id:4720,name:`A user account was created`,category:`Account Management`,criticality:`High`,description:`Indicates the provisioning of a new domain or local identity. Monitored closely for rogue backdoor accounts created by attackers.`,keyFields:[`TargetUserName`,`SubjectUserName`],fincorpContext:`No rogue account creations detected in FinCorp Active Directory today.`},{id:4740,name:`A user account was locked out`,category:`Account Management`,criticality:`Medium`,description:`Triggered when the account lockout threshold is exceeded (e.g. 5 or 10 bad attempts). Can cause business disruption or signal automated brute force.`,keyFields:[`TargetUserName`,`CallerComputerName`],fincorpContext:`FinCorp threshold is set to 25 attempts; Finance01 reached 18 failures before successful login, narrowly avoiding lockout.`},{id:7045,name:`A new service was installed in the system`,category:`System / Service Control`,criticality:`High`,description:`System log event generated when a Windows Service is registered. Often used by malware (e.g. PsExec, ransomware) for persistence and execution.`,keyFields:[`ServiceName`,`ImagePath`,`ServiceType`,`AccountName`],fincorpContext:`Checked on FIN-PC-04: No newly installed services in the last 72 hours.`}],Se=[{type:2,name:`Interactive`,description:`A user logged on directly at the local physical keyboard/console or virtual machine console.`,example:`Jane sitting at her laptop desk typing her password at the Windows lock screen.`,significance:`Confirms physical or console presence. Event #19 at 10:31:45 was Type 2.`},{type:3,name:`Network`,description:`A connection made to this computer from the network (e.g. accessing a shared folder, printer, IIS web server, or background Kerberos auth).`,example:`Outlook sync, Microsoft Teams token refresh, or accessing \\\\fs01\\finance.`,significance:`Events #1 through #17 were Type 3 network connections triggered automatically by background software.`},{type:4,name:`Batch`,description:`A scheduled task or batch job executing on behalf of a user.`,example:`Task Scheduler running a night-time backup script.`,significance:`Common source of recurring authentication failures when script credentials expire.`},{type:5,name:`Service`,description:`A background Windows service configured to start under a specific service account.`,example:`SQL Server service running under svc-sql account.`,significance:`If service password changes in AD without updating services.msc, rapid 4625 storms occur.`},{type:7,name:`Unlock`,description:`The workstation was previously locked and an authorized user entered credentials to unlock it.`,example:`Returning from a coffee break and pressing Win+L to unlock.`,significance:`Helps establish user physical workstation activity timeline.`},{type:10,name:`RemoteInteractive (RDP)`,description:`A user logged on remotely via Terminal Services, Remote Desktop Protocol (mstsc.exe), or Citrix.`,example:`System administrator RDPing into a remote server or attacker using stolen credentials over port 3389.`,significance:`Crucial for spotting external unauthorized remote access.`}],Ce=[{code:`0xC000006A`,meaning:`STATUS_WRONG_PASSWORD`,plainText:`User name is correct, but password was incorrect.`,analystInsight:`Crucial distinction! The attacker (or background app) knows the exact valid username, but the password provided was wrong. Highly indicative of cached credentials or password guessing.`},{code:`0xC0000064`,meaning:`STATUS_NO_SUCH_USER`,plainText:`The specified account does not exist in the directory.`,analystInsight:`Suggests username harvesting, dictionary attacks, or typos in username.`},{code:`0xC000006D`,meaning:`STATUS_LOGON_FAILURE`,plainText:`The attempted logon is invalid due to bad credentials.`,analystInsight:`Top-level status code indicating authentication rejection.`},{code:`0xC0000234`,meaning:`STATUS_ACCOUNT_LOCKED_OUT`,plainText:`User account has exceeded the max failed attempts and is locked.`,analystInsight:`High impact. User will be unable to log in until unlocked by IT or lockout duration expires.`},{code:`0xC0000071`,meaning:`STATUS_PASSWORD_EXPIRED`,plainText:`User password has expired per domain group policy.`,analystInsight:`User needs to change password via AD self-service or IT Helpdesk.`}],we=[{step:`1. Identify the User (Who)`,checks:[`What is the user’s role and department? (e.g. Finance Analyst vs Domain Admin)`,`Is the account active, disabled, or service account?`,`Has the user recently changed their password or requested IT assistance?`,`Is the user traveling, on leave, or working regular business hours?`]},{step:`2. Identify the Host (Where)`,checks:[`Is the host a shared workstation, personal laptop, or critical production server?`,`What is the asset criticality tier? (Tier 0 Domain Controller vs Tier 2 Workstation)`,`Is the EDR agent online and reporting healthy telemetry?`,`Are there signs of unauthorized tools or command execution?`]},{step:`3. Identify the Network & Source IP (From Where)`,checks:[`Is the source IP internal (RFC 1918) or public internet?`,`Does the source IP match the user’s assigned workstation DHCP lease?`,`If external, what is the IP geo-location, ASN, and reputation score on VirusTotal / AbuseIPDB?`,`Is the connection routing through corporate VPN or an anonymous proxy?`]},{step:`4. Build the Evidence Timeline (When & How)`,checks:[`What was the frequency of the attempts? (Rapid automated loop vs sporadic human typos)`,`What process initiated the requests? (outlook.exe vs powershell.exe vs python.exe)`,`What was the outcome? Did failures continue indefinitely, or did a successful logon occur?`,`Were there secondary events? (e.g. account lockouts, privilege escalation, file downloads)`]},{step:`5. Synthesize & Decide (What Next)`,checks:[`Does this match an Expected Activity (planned test)?`,`Does this match a Benign Activity (outdated cached credential)?`,`Does this indicate a Detection Error (faulty SIEM aggregation)?`,`Or is this a True Positive requiring immediate containment and L2 escalation?`]}],Te=[{term:`SIEM`,definition:`Security Information and Event Management: A centralized software platform that aggregates, correlates, and analyzes security logs from throughout an entire enterprise.`},{term:`EDR`,definition:`Endpoint Detection and Response: Endpoint security software that continuously monitors host activities (processes, network connections, file modifications) to detect and isolate threats.`},{term:`SOAR`,definition:`Security Orchestration, Automation, and Response: Platforms that automate repetitive analyst tasks, integrate security tools, and manage the lifecycle of security incidents.`},{term:`True Positive (TP)`,definition:`An alert that correctly identifies an actual security threat or unauthorized attack activity requiring intervention.`},{term:`False Positive (FP)`,definition:`An alert generated for benign, authorized, or harmless activity that was mistakenly flagged as potentially malicious.`},{term:`Benign Positive (BP)`,definition:`Activity that correctly matched the detection logic (e.g. 10 failed logins indeed happened), but the underlying cause is confirmed harmless business behavior (e.g. expired cached token).`},{term:`IOC (Indicator of Compromise)`,definition:`Forensic evidence of an intrusion, such as a known malicious IP address, malware hash (SHA256), phishing domain, or registry key.`},{term:`TTP (Tactics, Techniques & Procedures)`,definition:`The behavior patterns, methods, and attack strategies utilized by cyber threat actors, organized comprehensively in frameworks like MITRE ATT&CK.`},{term:`MTTD (Mean Time to Detect)`,definition:`The average duration elapsed between an adversary entering or executing an action in the environment and the SOC generating an alert.`},{term:`MTTR (Mean Time to Respond)`,definition:`The average duration taken by the SOC team to triage, investigate, contain, and remediate a detected security incident.`},{term:`RFC 1918 Private IP`,definition:`Standard IP ranges reserved exclusively for private internal networks: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. They cannot be routed directly over the public Internet.`}],K=`siem`,q=``,J=``,Y=4625;function Ee(){return`
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
          ${[{id:`siem`,title:`01. SIEM Query & Log Parser`},{id:`decoder`,title:`02. Event ID & Hex Decoder`},{id:`matrix`,title:`03. Severity Risk Calculator`},{id:`fp`,title:`04. False Positive Brancher`}].map(e=>`
            <button class="tab-btn ${K===e.id?`active`:``}" data-lab-id="${e.id}">
              ${e.title}
            </button>
          `).join(``)}
        </div>
      </section>

      <!-- Active Lab Content -->
      <section id="active-lab-content">
        ${De()}
      </section>

    </div>
  `}function De(){switch(K){case`siem`:return X();case`decoder`:return Oe();case`matrix`:return`
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 1rem;">Dynamic Severity Matrix Sandbox</h2>
          <div id="severity-matrix-container">${de()}</div>
        </div>
      `;case`fp`:return`
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 1rem;">False Positive Classifier Sandbox</h2>
          <div id="fp-tree-container">${B()}</div>
        </div>
      `;default:return``}}function X(){let e=_.events.filter(e=>{let t=!0;return q&&!e.user.toLowerCase().includes(q.toLowerCase())&&(t=!1),J&&e.eventId.toString()!==J&&(t=!1),t});return`
    <div class="glass-panel" style="padding: 2rem; background: rgba(12, 18, 36, 0.95); border: 1px solid rgba(0, 242, 254, 0.35);">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <span class="genz-badge badge-tech-box">SPLUNK / SENTINEL EMULATOR</span>
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-top: 0.35rem;">
            SIEM Log Search & Filter Sandbox
          </h2>
        </div>
        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text);">
          ${e.length} MATCHING EVENTS
        </div>
      </div>

      <!-- Search Controls -->
      <div style="display: grid; grid-template-columns: 1fr 1fr auto; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <label style="display: block; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.35rem;">FILTER USERNAME</label>
          <input type="text" id="siem-input-user" value="${q}" placeholder="e.g. Finance01" style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.55rem 0.85rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.85rem;" />
        </div>

        <div>
          <label style="display: block; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.35rem;">FILTER EVENT ID</label>
          <input type="text" id="siem-input-event" value="${J}" placeholder="e.g. 4625 or 4624" style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.55rem 0.85rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.85rem;" />
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
            ${e.map(e=>`
              <tr class="${e.eventId===4624?`event-row-success`:``}">
                <td style="font-family: var(--font-mono); font-size: 0.78rem;">${e.time}</td>
                <td><span class="event-id-badge ${e.eventId===4624?`event-id-4624`:`event-id-4625`}">${e.eventId}</span></td>
                <td style="font-family: var(--font-mono);">${e.user}</td>
                <td style="font-family: var(--font-mono);">${e.host}</td>
                <td style="font-family: var(--font-mono);">${e.ip}</td>
                <td style="font-family: var(--font-mono); font-size: 0.78rem;">${e.process}</td>
                <td style="font-family: var(--font-mono); font-size: 0.78rem; color: ${e.subStatus===`0xC000006A`?`#fca5a5`:`#86efac`};">${e.subStatus}</td>
                <td>Type ${e.logonType}</td>
              </tr>
            `).join(``)}
          </tbody>
        </table>
      </div>
    </div>
  `}function Oe(){let e=G.find(e=>e.id===Y)||G[0];return`
    <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 1.5rem;">
      
      <!-- Event ID List -->
      <div class="glass-panel" style="padding: 1.5rem;">
        <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.75rem;">
          SELECT WINDOWS EVENT ID TO DECODE
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.65rem;">
          ${G.map(e=>`
            <div class="glass-panel" data-decoder-id="${e.id}" style="padding: 1rem; cursor: pointer; border-color: ${e.id===Y?`var(--cyan-primary)`:`var(--border-subtle)`}; background: ${e.id===Y?`rgba(0, 242, 254, 0.08)`:`var(--bg-card)`};">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
                <span class="event-id-badge ${e.id===4624?`event-id-4624`:`event-id-4625`}">${e.id}</span>
                <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">${e.category}</span>
              </div>
              <div style="font-weight: 700; font-size: 0.92rem; color: var(--text-bright);">${e.name}</div>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- Event Decoder Deep Dive -->
      <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.95); border-color: rgba(0, 242, 254, 0.35);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.75rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span class="event-id-badge ${e.id===4624?`event-id-4624`:`event-id-4625`}">ID ${e.id}</span>
            <span style="font-size: 1.15rem; font-weight: 800; color: var(--text-bright);">${e.name}</span>
          </div>
          <span class="mono-data">${e.criticality}</span>
        </div>

        <p style="font-size: 0.95rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
          ${e.description}
        </p>

        <div style="margin-bottom: 1.5rem;">
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.5rem;">
            ESSENTIAL LOG PARSING FIELDS
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: 0.45rem;">
            ${e.keyFields.map(e=>`<span class="mono-data">${e}</span>`).join(``)}
          </div>
        </div>

        <!-- Authentication Hex Substatus Reference -->
        <div>
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: #fca5a5; margin-bottom: 0.65rem;">
            COMMON SUBSTATUS ERROR CODES FOR 4625
          </div>
          <div style="display: flex; flex-direction: column; gap: 0.5rem;">
            ${Ce.map(e=>`
              <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 6px; padding: 0.65rem 0.85rem; font-size: 0.82rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.2rem;">
                  <span class="mono-data" style="color: #fca5a5;">${e.code}</span>
                  <span style="font-weight: 700; color: var(--text-bright);">${e.meaning}</span>
                </div>
                <div style="color: var(--text-secondary);">${e.analystInsight}</div>
              </div>
            `).join(``)}
          </div>
        </div>
      </div>

    </div>
  `}function Z(){if(document.querySelectorAll(`[data-lab-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-lab-id`);if(n){K=n,e.playClick();let t=document.getElementById(`view-container`);t&&(t.innerHTML=Ee(),Z())}})}),K===`siem`){let t=document.getElementById(`siem-input-user`),n=document.getElementById(`siem-input-event`),r=document.getElementById(`btn-siem-reset`);t&&t.addEventListener(`input`,e=>{q=e.target.value;let t=document.getElementById(`active-lab-content`);t&&(t.innerHTML=X(),Z())}),n&&n.addEventListener(`input`,e=>{J=e.target.value;let t=document.getElementById(`active-lab-content`);t&&(t.innerHTML=X(),Z())}),r&&r.addEventListener(`click`,()=>{q=``,J=``,e.playClick();let t=document.getElementById(`active-lab-content`);t&&(t.innerHTML=X(),Z())})}K===`decoder`&&document.querySelectorAll(`[data-decoder-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=parseInt(t.currentTarget.getAttribute(`data-decoder-id`),10);if(!isNaN(n)){Y=n,e.playClick();let t=document.getElementById(`active-lab-content`);t&&(t.innerHTML=Oe(),Z())}})}),K===`matrix`&&fe(),K===`fp`&&V()}var Q=`logon`,$=``;function ke(){return`
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
            ${[{id:`logon`,title:`Windows Logon Types`},{id:`checklist`,title:`Triage Checklist`},{id:`events`,title:`Event ID Reference`},{id:`glossary`,title:`SOC Glossary`}].map(e=>`
              <button class="tab-btn ${Q===e.id?`active`:``}" data-know-tab="${e.id}">
                ${e.title}
              </button>
            `).join(``)}
          </div>

          <div style="max-width: 320px; width: 100%;">
            <input type="text" id="know-search" value="${$}" placeholder="Search knowledge..." style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.55rem 1rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.85rem;" />
          </div>
        </div>
      </section>

      <!-- Knowledge Content Area -->
      <section id="knowledge-tab-content">
        ${Ae()}
      </section>

    </div>
  `}function Ae(){switch(Q){case`logon`:return`
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Windows Logon Types (Audit Security Subsystem)
          </h2>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            When inspecting Windows Event ID 4624 (Success) or 4625 (Failure), the <strong>LogonType</strong> integer reveals HOW the user or process attempted authentication.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem;">
            ${Se.map(e=>`
              <div class="glass-panel" style="padding: 1.5rem; border-color: ${e.type===2?`rgba(16, 185, 129, 0.4)`:e.type===3?`rgba(0, 242, 254, 0.3)`:`var(--border-subtle)`};">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <span class="mono-data" style="font-weight: 700; font-size: 0.82rem;">TYPE ${e.type}</span>
                  <span style="font-weight: 700; color: var(--text-bright); font-size: 0.95rem;">${e.name}</span>
                </div>
                <p style="font-size: 0.88rem; color: var(--text-main); margin-bottom: 0.75rem; line-height: 1.5;">
                  ${e.description}
                </p>
                <div style="background: rgba(255,255,255,0.03); border-radius: 6px; padding: 0.65rem; font-size: 0.8rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
                  <strong>Example:</strong> ${e.example}
                </div>
                <div style="font-size: 0.78rem; color: var(--cyan-text);">
                  💡 ${e.significance}
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      `;case`checklist`:return`
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            FinCorp L1 Standard Triage Checklist
          </h2>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            Never skip steps during initial alert review. Work through the 5 essential investigative dimensions.
          </p>

          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${we.map(e=>`
              <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.85);">
                <h3 style="font-size: 1.15rem; color: var(--cyan-primary); margin-bottom: 0.75rem;">
                  ${e.step}
                </h3>
                <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem;">
                  ${e.checks.map(e=>`
                    <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.88rem; color: var(--text-bright);">
                      <span style="color: var(--cyan-primary); margin-top: 2px;">✓</span>
                      <span>${e}</span>
                    </li>
                  `).join(``)}
                </ul>
              </div>
            `).join(``)}
          </div>
        </div>
      `;case`events`:return`
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            High-Impact Windows Security Event IDs
          </h2>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            The essential audit log codes every Tier 1 analyst should commit to memory.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.25rem;">
            ${G.map(e=>`
              <div class="glass-panel" style="padding: 1.5rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <span class="event-id-badge ${e.id===4624?`event-id-4624`:`event-id-4625`}">ID ${e.id}</span>
                  <span class="mono-data">${e.criticality}</span>
                </div>
                <h4 style="font-size: 1.05rem; color: var(--text-bright); margin-bottom: 0.35rem;">${e.name}</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.75rem;">${e.description}</p>
                <div style="font-size: 0.78rem; color: var(--cyan-text); background: rgba(0,242,254,0.05); padding: 0.5rem; border-radius: 4px;">
                  FinCorp Context: ${e.fincorpContext}
                </div>
              </div>
            `).join(``)}
          </div>
        </div>
      `;case`glossary`:return`
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Cybersecurity & SOC Terminology Glossary
          </h2>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            Authoritative definitions of core operational security acronyms and industry standards.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
            ${Te.filter(e=>!$||e.term.toLowerCase().includes($.toLowerCase())||e.definition.toLowerCase().includes($.toLowerCase())).map(e=>`
              <div class="glass-panel" style="padding: 1.25rem;">
                <div style="font-weight: 800; font-size: 1.1rem; color: var(--cyan-primary); margin-bottom: 0.4rem; font-family: var(--font-mono);">
                  ${e.term}
                </div>
                <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.55;">
                  ${e.definition}
                </p>
              </div>
            `).join(``)}
          </div>
        </div>
      `;default:return``}}function je(){document.querySelectorAll(`[data-know-tab]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-know-tab`);if(n){Q=n,e.playClick();let t=document.getElementById(`view-container`);t&&(t.innerHTML=ke(),je())}})});let t=document.getElementById(`know-search`);t&&t.addEventListener(`input`,e=>{$=e.target.value,Q!==`glossary`&&(Q=`glossary`);let t=document.getElementById(`knowledge-tab-content`);t&&(t.innerHTML=Ae(),je())})}function Me(){let e=r.state,t=Math.min(100,Math.round(e.xp/1250*100)),n=e.completedTopics.length,i=Object.keys(e.completedCheckpoints).length;return`
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Progress Header -->
      <section style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
          <span class="genz-badge badge-demo">ANALYST DOSSIER</span>
          <span class="mono-data">PERFORMANCE & OPERATIONAL READINESS</span>
        </div>
        <h1 style="font-size: 2.2rem; margin-bottom: 0.5rem;">
          Operational <span class="gradient-text-cyan">Progress.</span>
        </h1>
        <p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 780px;">
          Track your operational telemetry mastery. Review earned achievements, triage checkpoints cleared, and overall shift performance metrics.
        </p>
      </section>

      <!-- Stats Overview Row -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; margin-bottom: 3rem;">
        
        <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9);">
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">EXPERIENCE POINTS</div>
          <div style="font-size: 2.2rem; font-weight: 800; font-family: var(--font-mono); color: var(--cyan-primary); margin: 0.25rem 0;">
            ${e.xp} <span style="font-size: 1rem; color: var(--text-muted);">/ 1,250</span>
          </div>
          <div style="width: 100%; height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
            <div style="width: ${t}%; height: 100%; background: linear-gradient(90deg, #00f2fe, #8b5cf6);"></div>
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9);">
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">STAGES MASTERED</div>
          <div style="font-size: 2.2rem; font-weight: 800; font-family: var(--font-mono); color: #86efac; margin: 0.25rem 0;">
            ${n} <span style="font-size: 1rem; color: var(--text-muted);">/ 6</span>
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">
            ${Math.round(n/6*100)}% shift completion
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9);">
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">CHECKPOINTS CLEARED</div>
          <div style="font-size: 2.2rem; font-weight: 800; font-family: var(--font-mono); color: #c084fc; margin: 0.25rem 0;">
            ${i}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">
            Interactive decisions validated
          </div>
        </div>

        <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9);">
          <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">SHIFT STATUS</div>
          <div style="font-size: 1.3rem; font-weight: 800; color: ${e.finalChallenge.completed?`var(--success)`:`#fbbf24`}; margin: 0.6rem 0 0.25rem 0;">
            ${e.finalChallenge.completed?`SHIFT RESOLVED 🏆`:`SHIFT IN PROGRESS ⏱️`}
          </div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">
            ${e.finalChallenge.completed?`Certified L1 Shift Hero`:`Currently on active watch`}
          </div>
        </div>

      </div>

      <!-- BADGES GALLERY -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
          <div>
            <span class="genz-badge badge-key-idea">ACHIEVEMENT VAULT</span>
            <h2 style="font-size: 1.6rem; color: var(--text-bright); margin-top: 0.35rem;">
              Operational Badges
            </h2>
          </div>
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text);">
            ${e.badges.filter(e=>e.unlocked).length} OF ${e.badges.length} UNLOCKED
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem;">
          ${e.badges.map(e=>`
            <div class="glass-panel" style="padding: 1.5rem; border-color: ${e.unlocked?`rgba(0, 242, 254, 0.35)`:`var(--border-subtle)`}; background: ${e.unlocked?`rgba(12, 20, 36, 0.9)`:`rgba(10, 14, 26, 0.4)`}; opacity: ${e.unlocked?`1`:`0.6`};">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                <div style="width: 44px; height: 44px; border-radius: 10px; background: ${e.unlocked?`var(--cyan-subtle)`:`rgba(255,255,255,0.03)`}; border: 1px solid ${e.unlocked?`var(--cyan-primary)`:`var(--border-subtle)`}; display: flex; align-items: center; justify-content: center; color: ${e.unlocked?`var(--cyan-primary)`:`var(--text-muted)`};">
                  ${e.unlocked?`
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  `:`
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  `}
                </div>
                ${e.unlocked?`
                  <span class="genz-badge badge-try-it" style="font-size: 0.65rem;">UNLOCKED ${e.unlockedAt||``}</span>
                `:`
                  <span class="genz-badge badge-tech-box" style="font-size: 0.65rem;">LOCKED</span>
                `}
              </div>

              <h4 style="font-size: 1.1rem; color: ${e.unlocked?`var(--text-bright)`:`var(--text-muted)`}; margin-bottom: 0.35rem; font-weight: 700;">
                ${e.title}
              </h4>
              <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5;">
                ${e.description}
              </p>
            </div>
          `).join(``)}
        </div>
      </section>

      <!-- STAGES CHECKLIST TABLE -->
      <section>
        <h2 style="font-size: 1.6rem; color: var(--text-bright); margin-bottom: 1.25rem;">
          Curriculum Stage Completion Log
        </h2>

        <div class="event-table-container">
          <table class="event-table">
            <thead>
              <tr>
                <th>STAGE</th>
                <th>TOPIC NAME</th>
                <th>ESTIMATED XP</th>
                <th>STATUS</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              ${l.topics.map(t=>{let n=e.completedTopics.includes(t.id);return`
                  <tr>
                    <td style="font-family: var(--font-mono); font-weight: 700;">${t.index}</td>
                    <td style="font-weight: 600; color: var(--text-bright);">${t.title} — ${t.subtitle}</td>
                    <td style="font-family: var(--font-mono); color: var(--cyan-text);">+${t.xp} XP</td>
                    <td>
                      ${n?`
                        <span class="genz-badge badge-try-it" style="font-size: 0.68rem;">✓ COMPLETED</span>
                      `:`
                        <span class="genz-badge badge-tech-box" style="font-size: 0.68rem;">PENDING</span>
                      `}
                    </td>
                    <td>
                      <button class="btn btn-secondary" data-nav="${t.id}" style="font-size: 0.75rem; padding: 0.35rem 0.75rem;">
                        ${n?`Review`:`Launch →`}
                      </button>
                    </td>
                  </tr>
                `}).join(``)}
            </tbody>
          </table>
        </div>
      </section>

    </div>
  `}function Ne(){let e=r.state,t=e.finalChallenge.completed;return`
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
        <div class="glass-panel" style="padding: 2.25rem; border: 2px solid rgba(0, 242, 254, 0.4); background: radial-gradient(circle at top right, rgba(0, 242, 254, 0.1) 0%, rgba(8, 12, 24, 0.95) 100%); border-radius: var(--border-radius-lg); position: relative; box-shadow: 0 16px 48px rgba(0,0,0,0.6);">
          
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
            <div style="width: 76px; height: 76px; border-radius: 50%; background: linear-gradient(135deg, rgba(0,242,254,0.2), rgba(139,92,246,0.3)); border: 2px solid var(--cyan-primary); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; font-weight: 800; color: var(--cyan-primary); box-shadow: 0 0 20px var(--cyan-glow);">
              L1
            </div>
            <div>
              <div style="font-weight: 800; font-size: 1.4rem; color: var(--text-bright);">
                ${e.profile.analystName}
              </div>
              <div style="font-family: var(--font-mono); font-size: 0.9rem; color: var(--cyan-text); margin-top: 0.2rem;">
                Callsign: "${e.profile.callsign}"
              </div>
            </div>
          </div>

          <!-- Badge Metadata Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; font-family: var(--font-mono); font-size: 0.8rem; background: rgba(0,0,0,0.4); padding: 1.25rem; border-radius: 8px; border: 1px solid var(--border-subtle); margin-bottom: 1.5rem;">
            <div>
              <div style="color: var(--text-muted); font-size: 0.72rem;">SHIFT ID</div>
              <div style="color: var(--text-bright); font-weight: 700;">${e.profile.shiftId}</div>
            </div>
            <div>
              <div style="color: var(--text-muted); font-size: 0.72rem;">STATION</div>
              <div style="color: var(--text-bright); font-weight: 700;">Console 04 (HQ)</div>
            </div>
            <div>
              <div style="color: var(--text-muted); font-size: 0.72rem;">SHIFT START</div>
              <div style="color: var(--text-bright); font-weight: 700;">${e.profile.startedAt}</div>
            </div>
            <div>
              <div style="color: var(--text-muted); font-size: 0.72rem;">DUTY STATUS</div>
              <div style="color: var(--success); font-weight: 700;">ACTIVE WATCH</div>
            </div>
          </div>

          ${t?`
            <button id="btn-view-profile-cert" class="btn btn-primary" style="width: 100%; font-size: 0.95rem; padding: 0.75rem;">
              🎓 View Official Shift Certificate
            </button>
          `:`
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
                <input type="text" id="input-callsign" value="${e.profile.callsign}" style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.6rem 1rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.9rem;" />
              </div>

              <div>
                <label style="display: block; font-size: 0.78rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.35rem;">ANALYST FULL NAME</label>
                <input type="text" id="input-name" value="${e.profile.analystName}" style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.6rem 1rem; color: var(--text-bright); font-size: 0.9rem;" />
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
              <button id="btn-profile-sound-toggle" class="btn ${e.soundEnabled?`btn-primary`:`btn-secondary`}" style="font-size: 0.8rem; padding: 0.4rem 0.9rem;">
                ${e.soundEnabled?`ENABLED`:`MUTED`}
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
  `}function Pe(){let t=document.getElementById(`btn-save-profile`);t&&t.addEventListener(`click`,()=>{let t=document.getElementById(`input-callsign`)?.value||`Analyst L1`,n=document.getElementById(`input-name`)?.value||`FinCorp L1 Recruit`;r.updateProfile({callsign:t,analystName:n}),e.playSuccess(),r.showToast(`Analyst credentials successfully updated.`,`info`);let i=document.getElementById(`view-container`);i&&(i.innerHTML=Ne(),Pe())});let n=document.getElementById(`btn-profile-sound-toggle`);n&&n.addEventListener(`click`,()=>{r.toggleSound();let e=document.getElementById(`view-container`);e&&(e.innerHTML=Ne(),Pe())});let i=document.getElementById(`btn-test-click`);i&&i.addEventListener(`click`,()=>e.playClick());let a=document.getElementById(`btn-test-alert`);a&&a.addEventListener(`click`,()=>e.playAlert());let o=document.getElementById(`btn-test-fanfare`);o&&o.addEventListener(`click`,()=>e.playSuccess());let s=document.getElementById(`btn-reset-shift`);s&&s.addEventListener(`click`,()=>{if(confirm(`Are you sure you want to reset your shift progress? All XP and checkpoint progress will be cleared.`)){r.resetProgress();let e=document.getElementById(`view-container`);e&&(e.innerHTML=Ne(),Pe())}});let c=document.getElementById(`btn-view-profile-cert`);c&&c.addEventListener(`click`,()=>{let e=document.getElementById(`certificate-modal-container`);e&&(e.style.display=`flex`)})}function Fe(){let e=r.state.currentView,t=document.getElementById(`header-container`);t&&(t.innerHTML=a(),Ie());let n=document.getElementById(`view-container`);if(n)switch(e){case`home`:n.innerHTML=m();break;case`course`:case`module-map`:n.innerHTML=g();break;case`current-scenario`:n.innerHTML=v();break;case`topic-1`:n.innerHTML=te(),O();break;case`topic-2`:n.innerHTML=re(),ie();break;case`topic-3`:n.innerHTML=oe(),se();break;case`topic-4`:n.innerHTML=le(),ue();break;case`topic-5`:n.innerHTML=pe(),me();break;case`topic-6`:n.innerHTML=be(),xe();break;case`labs`:n.innerHTML=Ee(),Z();break;case`knowledge`:n.innerHTML=ke(),je();break;case`progress`:n.innerHTML=Me();break;case`profile`:n.innerHTML=Ne(),Pe();break;default:n.innerHTML=m()}let i=document.getElementById(`modal-container`);i&&!document.getElementById(`certificate-modal-container`)&&(i.innerHTML=o(),s()),Le()}function Ie(){let e=document.getElementById(`btn-sound-toggle`);e&&e.addEventListener(`click`,()=>{r.toggleSound()})}function Le(){document.querySelectorAll(`[data-nav]`).forEach(e=>{e._navBound||(e._navBound=!0,e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-nav`);if(t){if(t.startsWith(`topic-`)){let e=parseInt(t.replace(`topic-`,``),10);r.navigate(t,e)}else r.navigate(t)}}))})}document.addEventListener(`DOMContentLoaded`,()=>{new i(`cyber-canvas`),Fe(),r.subscribe(()=>{Fe()})});
//# sourceMappingURL=index-DUS1KCg2.js.map