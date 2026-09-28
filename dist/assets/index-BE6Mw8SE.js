(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=new class{constructor(){this.ctx=null,this.enabled=!0,this.initialized=!1}init(){if(!this.initialized)try{let e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.initialized=!0)}catch(e){console.warn(`Web Audio not supported or blocked:`,e)}}ensureContext(){this.initialized||this.init(),this.ctx&&this.ctx.state===`suspended`&&this.ctx.resume()}toggle(e){this.enabled=e}playClick(){if(this.enabled&&(this.ensureContext(),this.ctx))try{let e=this.ctx.createOscillator(),t=this.ctx.createGain(),n=this.ctx.currentTime;e.type=`sine`,e.frequency.setValueAtTime(880,n),e.frequency.exponentialRampToValueAtTime(440,n+.04),t.gain.setValueAtTime(.08,n),t.gain.linearRampToValueAtTime(.001,n+.04),e.connect(t),t.connect(this.ctx.destination),e.start(n),e.stop(n+.04)}catch{}}playAlert(){if(this.enabled&&(this.ensureContext(),this.ctx))try{let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(440,e),t.frequency.setValueAtTime(370,e+.12),n.gain.setValueAtTime(.12,e),n.gain.linearRampToValueAtTime(.01,e+.25),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.25),setTimeout(()=>{if(!this.ctx||!this.enabled)return;let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(440,e),t.frequency.setValueAtTime(370,e+.12),n.gain.setValueAtTime(.15,e),n.gain.linearRampToValueAtTime(.01,e+.25),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.25)},300)}catch{}}playSuccess(){if(this.enabled&&(this.ensureContext(),this.ctx))try{let e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((t,n)=>{let r=this.ctx.createOscillator(),i=this.ctx.createGain(),a=e+n*.08;r.type=`triangle`,r.frequency.setValueAtTime(t,a),i.gain.setValueAtTime(.12,a),i.gain.exponentialRampToValueAtTime(.001,a+.22),r.connect(i),i.connect(this.ctx.destination),r.start(a),r.stop(a+.24)})}catch{}}playError(){if(this.enabled&&(this.ensureContext(),this.ctx))try{let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sawtooth`,t.frequency.setValueAtTime(220,e),t.frequency.setValueAtTime(160,e+.1),n.gain.setValueAtTime(.08,e),n.gain.linearRampToValueAtTime(.001,e+.22),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.22)}catch{}}playBadge(){if(this.enabled&&(this.ensureContext(),this.ctx))try{let e=this.ctx.currentTime;[{freqs:[440,554.37,659.25],start:0,dur:.2},{freqs:[493.88,622.25,739.99],start:.22,dur:.2},{freqs:[587.33,739.99,880],start:.44,dur:.45}].forEach(t=>{t.freqs.forEach(n=>{let r=this.ctx.createOscillator(),i=this.ctx.createGain(),a=e+t.start;r.type=`sine`,r.frequency.setValueAtTime(n,a),i.gain.setValueAtTime(.08,a),i.gain.exponentialRampToValueAtTime(.001,a+t.dur),r.connect(i),i.connect(this.ctx.destination),r.start(a),r.stop(a+t.dur)})})}catch{}}playSubtleTick(){if(this.enabled&&(this.ensureContext(),this.ctx))try{let e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type=`sine`,t.frequency.setValueAtTime(1400,e),n.gain.setValueAtTime(.03,e),n.gain.linearRampToValueAtTime(.001,e+.02),t.connect(n),n.connect(this.ctx.destination),t.start(e),t.stop(e+.02)}catch{}}},t=`fincorp_soc_l1_state_v1`,n={currentView:`home`,currentTopic:1,xp:100,soundEnabled:!0,alertTriggered:!1,completedTopics:[],unlockedTopics:[`topic-1`,`topic-2`,`topic-3`,`topic-4`,`topic-5`,`topic-6`],completedCheckpoints:{},quizScores:{},scratchpadNotes:`// FinCorp SOC Triage Notes — Case ALT-2026-9042
[10:32:00] Alert received: Multiple Failed Login Attempts on FIN-PC-04
[10:33:15] Analyst L1 assigned to case. Initial review started.
`,profile:{callsign:`Analyst L1`,analystName:`FinCorp L1 Recruit`,shiftId:`#FIN-SOC-8821`,clearance:`L1 Operations — Level 1 Access`,department:`Cyber Defense Center — Shift Alpha`,startedAt:`10:25 AM EST`},finalChallenge:{completed:!1,score:0,maxScore:100,classification:null,recommendation:null,documentedNotes:``,completedAt:null},badges:[{id:`badge-cadet`,title:`Shift Logged`,icon:`shield`,description:`Reported for operational duty at FinCorp SOC Shift Alpha.`,unlocked:!0,unlockedAt:`10:25 AM`},{id:`badge-arch`,title:`SOC Architect`,icon:`layers`,description:`Mastered People, Process, Technology, and Data pipeline.`,unlocked:!1},{id:`badge-telemetry`,title:`Telemetry Detective`,icon:`terminal`,description:`Analyzed Event 4625/4624 patterns and threshold triggers.`,unlocked:!1},{id:`badge-triage`,title:`Triage Specialist`,icon:`search`,description:`Conducted systematic 5-point entity triage on Finance01.`,unlocked:!1},{id:`badge-filter`,title:`Signal Gatekeeper`,icon:`filter`,description:`Identified benign cached credentials and prevented false escalation.`,unlocked:!1},{id:`badge-hero`,title:`Certified L1 Shift Hero`,icon:`award`,description:`Successfully investigated, resolved, and documented Case ALT-2026-9042.`,unlocked:!1}]},r=new class{constructor(){this.subscribers=new Set,this.state=this.loadState(),e.toggle(this.state.soundEnabled)}loadState(){try{let e=localStorage.getItem(t);if(e){let t=JSON.parse(e);return{...n,...t}}}catch(e){console.warn(`Failed to load saved state, using default:`,e)}return{...n}}saveState(){try{localStorage.setItem(t,JSON.stringify(this.state))}catch(e){console.warn(`Failed to persist state:`,e)}}subscribe(e){return this.subscribers.add(e),()=>this.subscribers.delete(e)}notify(){this.saveState(),this.subscribers.forEach(e=>e(this.state))}navigate(t,n=null){this.state.currentView=t,n!==null&&(this.state.currentTopic=n),window.scrollTo({top:0,behavior:`smooth`}),e.playClick(),this.notify()}toggleSound(){this.state.soundEnabled=!this.state.soundEnabled,e.toggle(this.state.soundEnabled),this.state.soundEnabled&&e.playClick(),this.notify()}addXp(t,n=``){this.state.xp=Math.min(1250,this.state.xp+t),e.playSuccess(),this.showToast(`+${t} XP: ${n}`,`xp`),this.notify()}completeCheckpoint(e,t=25,n=`Checkpoint Cleared`){this.state.completedCheckpoints[e]||(this.state.completedCheckpoints[e]=!0,this.addXp(t,n))}completeTopic(e){if(!this.state.completedTopics.includes(e)){this.state.completedTopics.push(e);let t={"topic-1":`badge-arch`,"topic-2":`badge-telemetry`,"topic-3":`badge-triage`,"topic-4":`badge-filter`};t[e]&&this.unlockBadge(t[e]),this.addXp(100,`Completed ${e.toUpperCase()}`)}this.notify()}unlockBadge(t){let n=this.state.badges.find(e=>e.id===t);n&&!n.unlocked&&(n.unlocked=!0,n.unlockedAt=new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}),e.playBadge(),this.showToast(`🏆 Badge Unlocked: ${n.title}!`,`badge`),this.notify())}triggerAlertPulse(){this.state.alertTriggered=!0,e.playAlert(),this.notify()}saveScratchpadNotes(e){this.state.scratchpadNotes=e,this.saveState()}updateProfile(e){this.state.profile={...this.state.profile,...e},this.notify()}submitFinalChallenge(e){this.state.finalChallenge={completed:!0,score:e.score,maxScore:100,classification:e.classification,recommendation:e.recommendation,documentedNotes:e.notes,completedAt:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})},e.score>=70&&(this.unlockBadge(`badge-hero`),this.completeTopic(`topic-6`)),this.notify()}recordQuizScore(e,t){this.state.quizScores||(this.state.quizScores={}),this.state.quizScores[e]=t,this.saveState()}resetProgress(){this.state={...n,xp:100},this.saveState(),this.notify(),this.showToast(`Shift progress reset successfully.`,`info`)}showToast(e,t=`info`){let n=document.getElementById(`toast-container`);if(!n)return;let r=document.createElement(`div`);r.className=`cyber-toast cyber-toast-${t} animate-fade-in`;let i=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;t===`xp`?i=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`:t===`badge`&&(i=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fbbf24" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`),r.innerHTML=`
      <div class="toast-icon">${i}</div>
      <div class="toast-msg">${e}</div>
    `,n.appendChild(r),setTimeout(()=>{r.classList.add(`toast-fadeout`),setTimeout(()=>r.remove(),400)},3500)}},i=class{constructor(e){this.canvas=document.getElementById(e),this.canvas&&(this.ctx=this.canvas.getContext(`2d`),this.nodes=[],this.width=window.innerWidth,this.height=window.innerHeight,this.animationFrameId=null,this.init())}init(){this.resize(),window.addEventListener(`resize`,()=>this.resize()),this.createNodes(),this.animate()}resize(){this.width=window.innerWidth,this.height=window.innerHeight,this.canvas.width=this.width*window.devicePixelRatio,this.canvas.height=this.height*window.devicePixelRatio,this.ctx.scale(window.devicePixelRatio,window.devicePixelRatio)}createNodes(){this.nodes=[];let e=Math.floor(this.width*this.height/28e3);for(let t=0;t<e;t++)this.nodes.push({x:Math.random()*this.width,y:Math.random()*this.height,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,radius:Math.random()*1.5+.8,alpha:Math.random()*.35+.15,pulseSpeed:Math.random()*.02+.005,pulseOffset:Math.random()*Math.PI*2})}animate(){this.ctx.clearRect(0,0,this.width,this.height);let e=Date.now()*.001;this.ctx.strokeStyle=`rgba(56, 189, 248, 0.02)`,this.ctx.lineWidth=1;for(let e=0;e<this.width;e+=64)this.ctx.beginPath(),this.ctx.moveTo(e,0),this.ctx.lineTo(e,this.height),this.ctx.stroke();for(let e=0;e<this.height;e+=64)this.ctx.beginPath(),this.ctx.moveTo(0,e),this.ctx.lineTo(this.width,e),this.ctx.stroke();for(let e=0;e<this.nodes.length;e++)for(let t=e+1;t<this.nodes.length;t++){let n=this.nodes[e].x-this.nodes[t].x,r=this.nodes[e].y-this.nodes[t].y,i=Math.sqrt(n*n+r*r);if(i<120){let n=(1-i/120)*.1;this.ctx.strokeStyle=`rgba(56, 189, 248, ${n})`,this.ctx.beginPath(),this.ctx.moveTo(this.nodes[e].x,this.nodes[e].y),this.ctx.lineTo(this.nodes[t].x,this.nodes[t].y),this.ctx.stroke()}}for(let t=0;t<this.nodes.length;t++){let n=this.nodes[t];n.x+=n.vx,n.y+=n.vy,n.x<0&&(n.x=this.width),n.x>this.width&&(n.x=0),n.y<0&&(n.y=this.height),n.y>this.height&&(n.y=0);let r=n.alpha+Math.sin(e*2+n.pulseOffset)*.08;this.ctx.fillStyle=`rgba(56, 189, 248, ${Math.max(.04,r)})`,this.ctx.beginPath(),this.ctx.arc(n.x,n.y,n.radius,0,Math.PI*2),this.ctx.fill()}this.animationFrameId=requestAnimationFrame(()=>this.animate())}destroy(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId)}};function a(){let e=r.state,t=e.currentView,n=Math.min(100,Math.round(e.xp/1250*100));return`
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
          <button class="nav-item ${t===`home`?`active`:``}" data-nav="home">
            Home
          </button>
          <button class="nav-item ${t.startsWith(`topic-`)||t===`course`||t===`module-map`?`active`:``}" data-nav="course">
            Course
          </button>
          <button class="nav-item ${t===`labs`?`active`:``}" data-nav="labs">
            Labs
          </button>
          <button class="nav-item ${t===`knowledge`?`active`:``}" data-nav="knowledge">
            Knowledge
          </button>
          <button class="nav-item ${t===`progress`?`active`:``}" data-nav="progress">
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
            <span style="font-family: var(--font-mono); color: var(--cyan-text); font-size: 0.74rem; font-weight: 600;">${e.xp} XP</span>
            <div class="hud-xp-bar">
              <div class="hud-xp-fill" style="width: ${n}%;"></div>
            </div>
          </div>

          <!-- Audio Mute/Unmute -->
          <button id="btn-sound-toggle" class="btn btn-secondary" style="padding: 0; width: 28px; height: 28px; border-radius: 6px;" title="${e.soundEnabled?`Mute Procedural Audio`:`Enable Procedural Audio`}">
            ${e.soundEnabled?`
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--cyan-primary)" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            `:`
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
            `}
          </button>

          <!-- Callsign Tag -->
          <div class="hud-pill" style="cursor: pointer; padding: 0.2rem 0.5rem;" data-nav="profile" title="View Analyst Profile">
            <div style="width: 20px; height: 20px; border-radius: 50%; background: #1e293b; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; font-weight: 700; color: var(--cyan-primary);">L1</div>
            <span style="font-size: 0.74rem; color: var(--text-bright);">${e.profile.callsign}</span>
          </div>

        </div>

      </div>
    </header>
  `}function o(){let e=r.state,t=new Date().toLocaleDateString(`en-US`,{year:`numeric`,month:`long`,day:`numeric`});return`
    <div id="certificate-modal-container" class="alert-popup-overlay" style="display: none;">
      <div class="glass-panel-elevated" style="max-width: 820px; width: 100%; border: 2px solid rgba(56, 189, 248, 0.4); border-radius: var(--border-radius-lg); padding: 2.5rem; position: relative; background: #070c18; box-shadow: 0 0 60px rgba(56, 189, 248, 0.3);">
        
        <!-- Close Button -->
        <button id="btn-close-cert" style="position: absolute; top: 1.25rem; right: 1.25rem; background: transparent; border: none; color: var(--text-muted); cursor: pointer; padding: 0.5rem;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>

        <!-- Printable Certificate Area -->
        <div id="printable-certificate" style="border: 2px solid rgba(56, 189, 248, 0.3); border-radius: 12px; padding: 2.5rem; text-align: center; position: relative; background: radial-gradient(circle at center, rgba(56, 189, 248, 0.04) 0%, rgba(5, 8, 17, 0.95) 100%);">
          
          <!-- FinCorp Security Emblem -->
          <div style="display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-bottom: 1rem;">
            <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, rgba(56, 189, 248,0.3), rgba(139,92,246,0.3)); border: 1px solid var(--cyan-primary); display: flex; align-items: center; justify-content: center;">
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
  `}function s(){let e=document.getElementById(`certificate-modal-container`),t=document.getElementById(`btn-close-cert`),n=document.getElementById(`btn-dismiss-cert`),r=document.getElementById(`btn-print-cert`),i=()=>{e&&(e.style.display=`none`)};t&&t.addEventListener(`click`,i),n&&n.addEventListener(`click`,i),r&&r.addEventListener(`click`,()=>{window.print()})}var c={id:`module-4`,code:`SOC-L1-M4`,title:`SOC Operations`,subtitle:`The Finance01 Login Alert — Live Shift Investigation`,level:`Analyst L1`,role:`SOC Analyst L1`,estimatedTime:`45 mins`,totalXp:1250,organization:`FinCorp Global Security Operations`,description:`Step into the shoes of a newly hired Tier 1 SOC Analyst at FinCorp. Live alerts are streaming in, and an authentication spike on FIN-PC-04 demands your immediate attention. Navigate through telemetry, analyze event correlation, classify true versus benign activity, assess severity, and document the resolution like a seasoned professional.`,topics:[{id:`topic-1`,index:`01`,title:`SOC Architecture`,subtitle:`Welcome to the SOC — People, Process, Tech & Data`,time:`10:25 AM`,xp:200,description:`Understand how FinCorp SOC is structured across People, Process, Technology, and Security Data flows before your first alert hits.`},{id:`topic-2`,index:`02`,title:`Alerts & Events`,subtitle:`The Anatomy of Telemetry — Event vs Alert vs Incident`,time:`10:32 AM`,xp:200,description:`The dashboard flashes with an alert! Learn the fundamental distinctions between raw events, threshold alerts, confirmed incidents, and cases.`},{id:`topic-3`,index:`03`,title:`Alert Triage`,subtitle:`Now It’s Your Alert — User, Host, IP & Evidence`,time:`10:35 AM`,xp:250,description:`Execute the standard L1 triage playbook on Finance01. Uncover identities, evaluate the timeline, and spot the game-changing successful logon.`},{id:`topic-4`,index:`04`,title:`False Positives`,subtitle:`Looks Suspicious. But Is It? — Expected, Benign & Detection Errors`,time:`10:45 AM`,xp:200,description:`Master the three categories of non-malicious alerts: Expected Activity, Benign Activity (cached credentials), and Detection Errors.`},{id:`topic-5`,index:`05`,title:`Severity & Escalation`,subtitle:`Impact × Likelihood — Prioritizing Threat Queues`,time:`10:52 AM`,xp:150,description:`Learn why severity is dynamic. Calculate risk scores based on asset criticality, account privileges, and verified impact.`},{id:`topic-6`,index:`06`,title:`Final L1 Challenge`,subtitle:`The Ultimate Shift Trial — Investigate, Document & Resolve`,time:`11:00 AM`,xp:250,description:`Put all your skills to the test in a live simulated SIEM environment. Correlate helpdesk tickets, build case notes, and make the final closing call.`}]},l=[{id:1,title:`1. Security Sources`,subtitle:`Where data originates`,nodes:[`Workstations (FIN-PC-04)`,`Active Directory (DC01)`,`Firewalls & VPN`,`Cloud (Office 365)`],detail:`Jane’s laptop FIN-PC-04 and Domain Controller DC01 continuously generate raw system events whenever a login is attempted.`},{id:2,title:`2. Raw Security Data`,subtitle:`Telemetry streams into the pipe`,nodes:[`Event ID 4625 (Logon Failures)`,`Event ID 4624 (Logon Success)`,`Sysmon Process Logs`,`DHCP Lease Logs`],detail:`Windows Security logs record timestamp, account name, caller process, IP, and hex error codes (0xC000006A).`},{id:3,title:`3. Detection Engine`,subtitle:`Rule logic & correlation`,nodes:[`Rule DET-WIN-0422`,`Threshold: ≥10 failures / 120s`,`Correlation Window`,`Noise Filter`],detail:`The SIEM correlation engine notices 18 consecutive 4625 events within 84 seconds for Finance01. Threshold exceeded!`},{id:4,title:`4. Security Alert`,subtitle:`High-fidelity signal generated`,nodes:[`Alert ALT-2026-9042`,`Severity: Medium`,`Status: Unassigned`,`Queue: Tier 1 Triage`],detail:`A structured alert ticket is produced and dropped into the FinCorp L1 analyst dispatch queue.`},{id:5,title:`5. L1 SOC Analyst`,subtitle:`Human verification & triage`,nodes:[`YOU (Analyst L1)`,`Investigate Context`,`Examine User & Host`,`Correlate Timeline`],detail:`You pick up the alert. You look past the scary title and dig into the actual telemetry and business context.`},{id:6,title:`6. Decision & Action`,subtitle:`Resolution or Escalation`,nodes:[`Classify (Benign vs Malicious)`,`Document Case Notes`,`Close with Advice or Escalate to L2`],detail:`You discover the password reset ticket and the 4624 success. You document a Benign Positive and clear the queue!`}];function u(){let e=r.state,t=e.completedTopics.length,n=`topic-${e.currentTopic||1}`,i=Object.keys(e.completedCheckpoints).length;return`
    <div class="container animate-fade-in" style="padding-top: 2.5rem; padding-bottom: 5rem; max-width: 1080px;">
      
      <!-- TOP COMMAND CENTER HEADER -->
      <div style="margin-bottom: 2.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 0.5rem;">
          <div>
            <div style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--cyan-primary); letter-spacing: 0.08em; text-transform: uppercase; font-weight: 700; margin-bottom: 0.25rem;">
              MODULE 4 • SOC OPERATIONS
            </div>
            <h1 style="font-size: 2.1rem; font-weight: 800; color: var(--text-bright); letter-spacing: -0.02em;">
              Student SOC Learning Command Center
            </h1>
          </div>
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span class="genz-badge badge-try-it" style="font-size: 0.75rem;">SHIFT ALPHA ACTIVE</span>
            <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">${e.profile.callsign}</span>
          </div>
        </div>
        <p style="color: var(--text-secondary); font-size: 0.98rem; max-width: 680px; line-height: 1.6;">
          Welcome to your operational home base. Follow the FinCorp investigation step-by-step, explore telemetry with contextual animations, and master L1 alert triage.
        </p>
      </div>

      <!-- MAIN CURRENT MISSION (HERO CARD) -->
      <div class="glass-panel" style="padding: 2.25rem; margin-bottom: 2rem; border-color: rgba(56, 189, 248, 0.25); background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(20, 32, 58, 0.65) 100%);">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
          <span class="genz-badge badge-key-idea">YOUR CURRENT MISSION</span>
          <span style="font-family: var(--font-mono); font-size: 0.76rem; color: var(--text-muted);">
            STAGES COMPLETED: ${t} OF 6
          </span>
        </div>

        <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.75rem; line-height: 1.3;">
          "Investigate the Finance01 Login Alert"
        </h2>

        <p style="color: var(--text-secondary); font-size: 1rem; line-height: 1.65; max-width: 780px; margin-bottom: 1.75rem;">
          A burst of authentication failures occurred on workstation <span class="mono-data">FIN-PC-04</span> for user <span class="mono-data">Finance01</span> following a morning password reset. Learn the architecture, investigate the event logs, test for cached credential false positives, and classify the incident.
        </p>

        <div style="display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;">
          <button class="btn btn-primary" data-nav="${n}" style="padding: 0.75rem 1.8rem; font-size: 0.95rem;">
            Continue Learning →
          </button>
          <button class="btn btn-secondary" data-nav="course" style="padding: 0.75rem 1.4rem; font-size: 0.95rem;">
            View Course Curriculum
          </button>
          <button class="btn btn-outline-cyan" data-nav="topic-3" style="padding: 0.75rem 1.4rem; font-size: 0.95rem;">
            Jump to Alert Triage (7-Tabs)
          </button>
        </div>
      </div>

      <!-- TWO-COLUMN WORKSPACE: MODULE PROGRESS & CURRENT SCENARIO -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 1.75rem; margin-bottom: 2rem;">
        
        <!-- MODULE PROGRESS CARD -->
        <div class="glass-panel" style="padding: 1.75rem; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
              <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--text-bright);">
                MODULE PROGRESS
              </h3>
              <span style="font-size: 0.76rem; font-family: var(--font-mono); color: var(--cyan-text);">
                ${Math.round(t/6*100)}% COMPLETE
              </span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 0.65rem;">
              ${[{id:`topic-1`,num:`01`,name:`Architecture`},{id:`topic-2`,num:`02`,name:`Events & Alerts`},{id:`topic-3`,num:`03`,name:`Alert Triage`},{id:`topic-4`,num:`04`,name:`False Positives`},{id:`topic-5`,num:`05`,name:`Severity`},{id:`topic-6`,num:`06`,name:`Final Challenge`}].map((t,r)=>{let i=e.completedTopics.includes(t.id),a=n===t.id,o=!e.unlockedTopics.includes(t.id),s=`<span style="color: var(--text-muted); font-size: 0.85rem;">○</span>`,c=`Upcoming`,l=`var(--text-secondary)`;return i?(s=`<span style="color: var(--success); font-weight: 800; font-size: 0.95rem;">✓</span>`,c=`Completed`,l=`var(--text-bright)`):a?(s=`<span style="color: var(--cyan-primary); font-size: 0.85rem;">●</span>`,c=`Current`,l=`var(--cyan-text)`):o&&(s=`<span style="color: var(--text-muted); font-size: 0.85rem;">🔒</span>`,c=`Locked`,l=`var(--text-muted)`),`
                  <div class="glass-panel" data-nav="${t.id}" style="padding: 0.75rem 1rem; cursor: pointer; display: flex; align-items: center; justify-content: space-between; transition: all 0.2s ease; background: ${a?`rgba(56, 189, 248, 0.08)`:`rgba(255, 255, 255, 0.02)`}; border-color: ${a?`var(--cyan-primary)`:`var(--border-subtle)`};">
                    <div style="display: flex; align-items: center; gap: 0.75rem;">
                      <span style="font-family: var(--font-mono); font-size: 0.78rem; color: var(--text-muted);">${t.num}</span>
                      <span style="font-size: 0.9rem; font-weight: ${a?`700`:`500`}; color: ${l};">
                        ${t.name}
                      </span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 0.5rem;">
                      <span style="font-size: 0.74rem; color: var(--text-muted); font-family: var(--font-mono);">${c}</span>
                      ${s}
                    </div>
                  </div>
                `}).join(``)}
            </div>
          </div>

          <div style="margin-top: 1.25rem; padding-top: 1rem; border-top: 1px solid var(--border-subtle); display: flex; align-items: center; justify-content: space-between;">
            <span style="font-size: 0.78rem; color: var(--text-muted);">Self-paced learning path</span>
            <span style="font-size: 0.8rem; color: var(--cyan-primary); font-weight: 600; cursor: pointer;" data-nav="course">
              View Syllabus →
            </span>
          </div>
        </div>

        <!-- CURRENT SCENARIO CARD -->
        <div class="glass-panel" style="padding: 1.75rem; display: flex; flex-direction: column; justify-content: space-between; border-color: rgba(244, 63, 94, 0.25);">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
              <span class="genz-badge badge-alert" style="font-size: 0.7rem;">
                🚨 CURRENT INVESTIGATION
              </span>
              <span style="font-family: var(--font-mono); font-size: 0.76rem; color: #fca5a5;">
                CASE ALT-2026-9042
              </span>
            </div>

            <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.75rem;">
              Multiple Failed Login Attempts
            </h3>

            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.25rem;">
              FinCorp SIEM rule <span class="mono-data">DET-WIN-0422</span> detected 10+ failed authentications within 120 seconds. An initial failure wave was followed by a single successful interactive console logon.
            </p>

            <!-- Case Telemetry Key Points -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 1.5rem;">
              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.75rem;">
                <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">TARGET IDENTITY</div>
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--cyan-text); margin-top: 0.2rem;">
                  Finance01 (Priya Sharma)
                </div>
              </div>

              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.75rem;">
                <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">WORKSTATION HOST</div>
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-bright); margin-top: 0.2rem;">
                  FIN-PC-04 (Win 11)
                </div>
              </div>

              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.75rem;">
                <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">SOURCE IP ADDRESS</div>
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--text-bright); margin-top: 0.2rem;">
                  10.10.20.15 (Internal)
                </div>
              </div>

              <div style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 0.75rem;">
                <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">TELEMETRY EVENTS</div>
                <div style="font-size: 0.88rem; font-weight: 700; color: var(--danger); margin-top: 0.2rem;">
                  18 Failed + 1 Success
                </div>
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.75rem; border-top: 1px solid var(--border-subtle); padding-top: 1rem;">
            <button class="btn btn-alert" data-nav="topic-3" style="width: 100%; font-size: 0.88rem; padding: 0.65rem 1rem;">
              Continue Investigation →
            </button>
          </div>
        </div>

      </div>

      <!-- OPTIONAL SMALL CARDS ROW (QUIZ CHECKS, SCENARIOS, LABS, XP) -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem;">
        
        <div class="glass-panel" data-nav="course" style="padding: 1.15rem; cursor: pointer;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
            <span style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">QUICK CHECKS</span>
            <span style="font-size: 0.72rem; color: var(--cyan-primary);">Knowledge</span>
          </div>
          <div style="font-size: 1.45rem; font-weight: 800; font-family: var(--font-mono); color: var(--text-bright);">
            ${Math.min(10,i+6)} / 10
          </div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Interactive check-ins completed
          </div>
        </div>

        <div class="glass-panel" data-nav="current-scenario" style="padding: 1.15rem; cursor: pointer;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
            <span style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">SCENARIOS</span>
            <span style="font-size: 0.72rem; color: #f59e0b;">Guided</span>
          </div>
          <div style="font-size: 1.45rem; font-weight: 800; font-family: var(--font-mono); color: var(--text-bright);">
            3 / 5
          </div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Incident story chapters explored
          </div>
        </div>

        <div class="glass-panel" data-nav="labs" style="padding: 1.15rem; cursor: pointer;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
            <span style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">HANDS-ON LABS</span>
            <span style="font-size: 0.72rem; color: var(--success);">Practice</span>
          </div>
          <div style="font-size: 1.45rem; font-weight: 800; font-family: var(--font-mono); color: var(--text-bright);">
            1 / 3
          </div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Live interactive simulations
          </div>
        </div>

        <div class="glass-panel" data-nav="progress" style="padding: 1.15rem; cursor: pointer;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
            <span style="font-size: 0.72rem; font-family: var(--font-mono); color: var(--text-muted); text-transform: uppercase;">EXPERIENCE & RANK</span>
            <span style="font-size: 0.72rem; color: #a78bfa;">L1 Status</span>
          </div>
          <div style="font-size: 1.45rem; font-weight: 800; font-family: var(--font-mono); color: var(--cyan-primary);">
            ${e.xp} <span style="font-size: 0.85rem; color: var(--text-muted);">XP</span>
          </div>
          <div style="font-size: 0.75rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Junior SOC Analyst L1
          </div>
        </div>

      </div>

    </div>
  `}function d(e){let t=r.state;return`
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
  `}function f(){let e=r.state,t=e.completedTopics.length,n=Math.min(100,Math.round(t/6*100));return`
    <div class="container animate-fade-in" style="padding-top: 2rem; padding-bottom: 5rem;">
      
      <!-- Course Header HUD -->
      <section style="margin-bottom: 3rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 1rem;">
          <div>
            <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-demo">CURRICULUM PORTAL</span>
              <span class="mono-data">${c.code}</span>
            </div>
            <h1 style="margin-bottom: 0.5rem;">
              SOC Analyst L1 — <span class="gradient-text-cyan">Module 4: SOC Operations</span>
            </h1>
            <p style="font-size: 1.05rem; color: var(--text-secondary); max-width: 780px;">
              ${c.description}
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
              <div style="width: ${n}%; height: 100%; background: linear-gradient(90deg, #38bdf8, #818cf8);"></div>
            </div>
            <div style="font-size: 0.78rem; color: var(--text-secondary);">
              ${t} of 6 Stages Mastered (${e.xp} / 1,250 XP)
            </div>
          </div>
        </div>

        <!-- Progression Track -->
        ${d(null)}
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
          ${c.topics.map(t=>{let n=e.completedTopics.includes(t.id);return`
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
  `}var p={id:`ALT-2026-9042`,title:`Multiple Failed Login Attempts`,name:`Multiple Failed Login Attempts (Windows Auth)`,ruleId:`DET-WIN-0422`,status:`Open - Under Triage`,severity:`Medium`,initialScore:5.8,createdAt:`10:32:00 AM`,shiftTimestamp:`10:32 AM`,assignee:`Learner (L1 SOC Analyst)`,analystCallsign:`Analyst L1`,mitre:{tactic:`TA0006 - Credential Access`,technique:`T1110.001 - Brute Force: Password Guessing`,url:`https://attack.mitre.org/techniques/T1110/001/`},user:{id:`USR-8821`,username:`Finance01`,fullName:`Jane Miller`,email:`jane.miller@fincorp-global.com`,role:`Senior Finance Analyst`,department:`Corporate Treasury & Finance`,manager:`David Henderson (Treasury VP)`,location:`Building B, Floor 3, Desk 342`,accountStatus:`Active`,isPrivileged:!1,privilegedNote:`Standard Domain User. Not member of Domain Admins or Enterprise Admins.`,passwordLastSet:`Today, 10:15:22 AM (Self-Service Reset)`,groups:[`Finance-All`,`Treasury-ERP-Users`,`Standard-Workstations-Access`]},host:{id:`AST-FIN-0094`,hostname:`FIN-PC-04`,fqdn:`fin-pc-04.corp.fincorp.local`,ip:`10.10.20.15`,mac:`00:1A:2B:3C:4D:5E`,os:`Windows 11 Enterprise (Build 22631.3007)`,assetType:`Employee Workstation (Laptop)`,department:`Finance`,criticality:`Medium - Department Workstation`,edrStatus:`Active & Healthy (FinCorp Defender EDR v8.2)`,lastReboot:`Yesterday, 6:00 PM`,isolated:!1},network:{sourceIp:`10.10.20.15`,destinationIp:`10.10.10.20 (DC01.corp.fincorp.local - Active Directory)`,subnet:`10.10.20.0/24 (Finance Workstations VLAN 20)`,gateway:`10.10.20.1`,dns:`10.10.10.20`,scope:`Internal Private Subnet`,isExternal:!1,reputationScore:`Clean (Internal Trusted Host)`,geo:`Internal LAN / New York FinCorp HQ`},detectionLogic:{name:`Windows - Excessive Authentication Failures Single Account`,description:`Triggers when 10 or more Windows Event ID 4625 (Logon Failure) events occur for the same target user within a 2-minute sliding window.`,threshold:`10 failures in 120s`,observedFailures:18,timeWindow:`10:30:01 - 10:31:25 (84 seconds)`},helpdeskTicket:{ticketId:`IT-94821`,timestamp:`10:15:22 AM`,requestedBy:`Jane Miller (Finance01)`,category:`Identity & Access / Password Reset`,status:`Resolved / Closed`,technician:`FinCorp Helpdesk Bot / Automated Portal`,notes:`User requested self-service password reset due to policy expiration prompt. 2FA push approved via mobile authenticator. New password committed to Active Directory at 10:15:22 AM. Workstation FIN-PC-04 was in sleep mode at employee desk.`},events:[{id:1,time:`10:30:01`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:2,time:`10:30:06`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:3,time:`10:30:11`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:4,time:`10:30:16`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`svchost.exe (Lanman)`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Network share auto-reconnect \\\\fs01\\finance`},{id:5,time:`10:30:20`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:6,time:`10:30:25`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:7,time:`10:30:30`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`svchost.exe (Lanman)`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Network share auto-reconnect \\\\fs01\\finance`},{id:8,time:`10:30:35`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:9,time:`10:30:40`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:10,time:`10:30:45`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`teams.exe`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Cloud identity sync attempt with cached token`},{id:11,time:`10:30:50`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:12,time:`10:30:55`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:13,time:`10:31:00`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`svchost.exe (Lanman)`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Network share auto-reconnect \\\\fs01\\finance`},{id:14,time:`10:31:05`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:15,time:`10:31:10`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:16,time:`10:31:15`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:17,time:`10:31:20`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`OUTLOOK.EXE`,logonType:3,subStatus:`0xC000006A`,description:`Logon failure: Bad password / outdated cached token`},{id:18,time:`10:31:25`,eventId:4625,type:`Logon Failure`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`winlogon.exe`,logonType:2,subStatus:`0xC000006A`,description:`Interactive logon failure: Jane typed old password by reflex at lock screen`},{id:19,time:`10:31:45`,eventId:4624,type:`Logon Success`,user:`Finance01`,host:`FIN-PC-04`,ip:`10.10.20.15`,process:`winlogon.exe`,logonType:2,subStatus:`0x0 (STATUS_SUCCESS)`,description:`Interactive logon SUCCESS: Jane entered new updated password at console`}]};function m(){let e=p,t=r.state;return`
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
  `}var h=1;function g(){let e=l.find(e=>e.id===h)||l[0];return`
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
        ${l.map(e=>{let t=e.id===h,n=e.id===5,r=e.id===4,i=`var(--border-subtle)`;return t?i=`var(--cyan-primary)`:r&&(i=`rgba(239, 68, 68, 0.4)`),`
            <div class="flow-node ${t?`active`:``} ${r?`pulse-alert-node`:``}" 
                 data-flow-id="${e.id}"
                 style="border-color: ${i}; background: ${t?`var(--cyan-subtle)`:`var(--bg-card)`};">
              
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
      <div class="glass-panel" style="padding: 1.5rem; background: var(--bg-surface-elevated); border-color: var(--border-cyan);">
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
  `}function _(){document.querySelectorAll(`[data-flow-id]`).forEach(e=>{e.addEventListener(`click`,e=>{let t=parseInt(e.currentTarget.getAttribute(`data-flow-id`),10);if(!isNaN(t)){h=t;let e=document.getElementById(`data-flow-container`);e&&(e.innerHTML=g(),_())}})})}var v={user:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,computer:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,server:`<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><line x1="6" x2="6.01" y1="6" y2="6"/><line x1="6" x2="6.01" y1="18" y2="18"/></svg>`,packet:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>`,log:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`,alert:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" x2="12" y1="9" x2="12" y2="13"/><line x1="12" x2="12.01" y2="17"/></svg>`,case:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/></svg>`,network:`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="6" height="6" x="2" y="16" rx="1"/><rect width="6" height="6" x="9" y="4" rx="1"/><rect width="6" height="6" x="16" y="16" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"/><path d="M12 12V10"/></svg>`,check:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,cross:`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" x2="6" y1="6" y2="18"/><line x1="6" x2="18" y1="6" y2="18"/></svg>`};function y(e=`l1`){let t=[{id:`l1`,title:`L1 Analyst (YOU)`,type:`Triage & First Response`,desc:`First-level alert review, triage, evidence collection, documentation, and escalation.`,x:175,y:150,isCenter:!0},{id:`l2`,title:`L2 Senior Analyst`,type:`Deep Dive & Containment`,desc:`In-depth forensics, containment actions, malware analysis, and root cause analysis.`,x:80,y:55},{id:`l3`,title:`L3 Threat Hunter`,type:`Proactive Hunting`,desc:`Proactive hunting without alerts, advanced adversary simulation, custom detections.`,x:270,y:55},{id:`intel`,title:`Threat Intelligence`,type:`Adversary Profiling`,desc:`Feeds IoCs, tracks threat actors (APT groups), and provides tactical context.`,x:310,y:150},{id:`network`,title:`Network Security`,type:`Firewall & Traffic`,desc:`Controls perimeter firewalls, proxies, VPN gateways, and packet capture.`,x:270,y:245},{id:`identity`,title:`Identity (IAM)`,type:`Active Directory / Okta`,desc:`Manages user accounts, password resets, MFA, and access privileges.`,x:80,y:245},{id:`manager`,title:`SOC Manager`,type:`Operations & SLAs`,desc:`Oversees shifts, monitors SLA metrics, resource allocation, and team performance.`,x:40,y:150}],n=t.find(t=>t.id===e)||t[0];return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Interactive SOC Team Map</span>
        <span style="color: var(--text-muted);">Click role to inspect</span>
      </div>

      <div style="position: relative; width: 350px; height: 300px; margin: 0 auto;">
        <!-- SVG Animated Connection Lines -->
        <svg width="350" height="300" style="position: absolute; top: 0; left: 0; pointer-events: none;">
          ${t.filter(e=>!e.isCenter).map(t=>`
            <line x1="175" y1="150" x2="${t.x}" y2="${t.y}" stroke="${t.id===e?`var(--cyan-primary)`:`rgba(255,255,255,0.1)`}" stroke-width="${t.id===e?`2`:`1`}" class="${t.id===e?`animated-signal-line`:``}" />
          `).join(``)}
        </svg>

        <!-- Center L1 Node -->
        <div class="team-node-btn ${e===`l1`?`active-node`:``}" data-team-role="l1" style="position: absolute; left: 135px; top: 110px; width: 80px; height: 80px; border-radius: 50%; background: rgba(56, 189, 248, 0.15); border: 2px solid var(--cyan-primary); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; z-index: 10; transition: all 0.2s ease;">
          <span style="color: var(--cyan-primary);">${v.user}</span>
          <span style="font-size: 0.75rem; font-weight: 800; color: #ffffff; margin-top: 2px;">L1 (YOU)</span>
          <span style="font-size: 0.58rem; color: var(--cyan-text);">Triage</span>
        </div>

        <!-- Orbiting Role Nodes -->
        ${t.filter(e=>!e.isCenter).map(t=>{let n=t.id===e;return`
            <div class="team-node-btn ${n?`active-node`:``}" data-team-role="${t.id}" style="position: absolute; left: ${t.x-30}px; top: ${t.y-30}px; width: 60px; height: 60px; border-radius: 50%; background: ${n?`rgba(129, 140, 248, 0.25)`:`var(--bg-surface-elevated)`}; border: 1px solid ${n?`var(--violet-primary)`:`var(--border-subtle)`}; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s ease; z-index: 5;">
              <span style="color: ${n?`var(--violet-primary)`:`var(--text-muted)`}; font-size: 0.7rem; font-weight: 700;">
                ${t.id.toUpperCase()}
              </span>
              <span style="font-size: 0.55rem; color: var(--text-secondary); text-align: center; line-height: 1;">${t.title.split(` `)[0]}</span>
            </div>
          `}).join(``)}
      </div>

      <!-- Role Explanation Card -->
      <div style="width: 100%; margin-top: 1rem; padding: 0.85rem 1rem; background: rgba(15, 23, 42, 0.7); border: 1px solid var(--border-subtle); border-radius: 8px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.3rem;">
          <span style="font-weight: 700; color: var(--text-bright); font-size: 0.9rem;">${n.title}</span>
          <span class="genz-badge badge-key-idea" style="font-size: 0.65rem;">${n.type}</span>
        </div>
        <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
          ${n.desc}
        </p>
      </div>
    </div>
  `}function b(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Continuous SOC Lifecycle</span>
        <span style="color: var(--success);">Signal Loop Active</span>
      </div>

      <!-- Circular SVG Process with Traveling Signal -->
      <div style="position: relative; width: 320px; height: 320px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
        
        <!-- Rotating Signal Ring -->
        <svg width="300" height="300" viewBox="0 0 300 300" style="position: absolute; top: 10px; left: 10px;">
          <!-- Track -->
          <circle cx="150" cy="150" r="110" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="3" stroke-dasharray="6,6" />
          <!-- Animated Flow -->
          <circle cx="150" cy="150" r="110" fill="none" stroke="var(--cyan-primary)" stroke-width="3" stroke-dasharray="25,250" class="animated-signal-line" style="animation-duration: 4s;" />
        </svg>

        <!-- 4 Step Nodes -->
        <!-- Top: MONITOR -->
        <div style="position: absolute; top: 8px; left: 105px; width: 110px; text-align: center; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 0.45rem; border-radius: 8px;">
          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">STEP 01</div>
          <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-bright);">1. MONITOR</div>
          <div style="font-size: 0.68rem; color: var(--text-secondary);">Logs & Telemetry</div>
        </div>

        <!-- Right: DETECT -->
        <div style="position: absolute; right: 2px; top: 115px; width: 100px; text-align: center; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 0.45rem; border-radius: 8px;">
          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">STEP 02</div>
          <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-bright);">2. DETECT</div>
          <div style="font-size: 0.68rem; color: var(--text-secondary);">Rules & Alerts</div>
        </div>

        <!-- Bottom: ANALYZE (YOU ARE HERE) -->
        <div style="position: absolute; bottom: 8px; left: 95px; width: 130px; text-align: center; background: rgba(56, 189, 248, 0.12); border: 2px solid var(--cyan-primary); padding: 0.55rem; border-radius: 10px; box-shadow: 0 0 16px var(--cyan-glow);">
          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--cyan-primary); font-weight: 800;">YOU ARE HERE</div>
          <div style="font-weight: 800; font-size: 0.86rem; color: #ffffff;">3. ANALYZE</div>
          <div style="font-size: 0.68rem; color: var(--cyan-text);">L1 Alert Triage</div>
        </div>

        <!-- Left: RESPOND -->
        <div style="position: absolute; left: 2px; top: 115px; width: 100px; text-align: center; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); padding: 0.45rem; border-radius: 8px;">
          <div style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">STEP 04</div>
          <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-bright);">4. RESPOND</div>
          <div style="font-size: 0.68rem; color: var(--text-secondary);">Contain / Close</div>
        </div>

        <!-- Center Pulse Indicator -->
        <div style="width: 70px; height: 70px; border-radius: 50%; background: rgba(15, 23, 42, 0.85); border: 1px solid var(--border-medium); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;">
          <span style="color: var(--cyan-primary);">${v.packet}</span>
          <span style="font-family: var(--font-mono); font-size: 0.6rem; color: var(--text-muted); margin-top: 2px;">SLA 15m</span>
        </div>
      </div>
    </div>
  `}function x(e=`siem`){let t={siem:{name:`SIEM (Splunk/Sentinel)`,logs:`Windows Event Logs (4625/4624), Authentication bursts`,role:`Central log aggregator & detection correlation engine.`},edr:{name:`EDR (Defender/CrowdStrike)`,logs:`Process command lines, outlook.exe, svchost.exe parent-child trees`,role:`Endpoint visibility into process execution & memory.`},network:{name:`Network Monitor (Zeek/Suricata)`,logs:`Kerberos 88/TCP, LDAP 389/TCP authentication flows`,role:`Wire-level packet analysis & internal communication.`},firewall:{name:`Firewall & VPN`,logs:`Internal routing, DHCP 10.10.20.15 lease logs`,role:`Perimeter defense and ingress/egress filtering.`}},n=t[e]||t.siem;return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>SOC Tool Ecosystem</span>
        <span style="color: var(--text-muted);">Click tool to inspect telemetry</span>
      </div>

      <!-- Pipeline Stack -->
      <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
        
        <!-- Source Endpoint -->
        <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: 8px;">
          <span style="color: var(--cyan-primary);">${v.computer}</span>
          <div style="flex: 1;">
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">Windows Endpoint (FIN-PC-04)</div>
            <div style="font-size: 0.72rem; color: var(--text-muted);">Generates user authentication attempts & application telemetry</div>
          </div>
          <span class="mono-data" style="font-size: 0.72rem;">10.10.20.15</span>
        </div>

        <!-- Conduit with Moving Packets -->
        <div style="display: flex; justify-content: center; height: 16px; align-items: center; position: relative;">
          <div style="width: 2px; height: 100%; background: var(--border-subtle);"></div>
          <div class="flow-packet-dot" style="position: absolute; animation: signal-travel 1.5s infinite ease-in-out;"></div>
        </div>

        <!-- Security Tools Selection Bar -->
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.65rem;">
          ${Object.keys(t).map(n=>{let r=n===e;return`
              <div class="tech-tool-btn" data-tech-key="${n}" style="padding: 0.65rem 0.85rem; background: ${r?`rgba(56, 189, 248, 0.12)`:`var(--bg-card)`}; border: 1px solid ${r?`var(--cyan-primary)`:`var(--border-subtle)`}; border-radius: 6px; cursor: pointer; transition: all 0.2s ease;">
                <div style="font-size: 0.78rem; font-weight: 700; color: ${r?`var(--cyan-text)`:`var(--text-bright)`};">
                  ${t[n].name.split(` `)[0]}
                </div>
                <div style="font-size: 0.68rem; color: var(--text-muted);">${n.toUpperCase()}</div>
              </div>
            `}).join(``)}
        </div>

        <!-- Conduit to Analyst -->
        <div style="display: flex; justify-content: center; height: 16px; align-items: center; position: relative;">
          <div style="width: 2px; height: 100%; background: var(--border-subtle);"></div>
          <div class="flow-packet-dot" style="position: absolute; animation: signal-travel 1.5s infinite 0.75s ease-in-out;"></div>
        </div>

        <!-- Active Tool Telemetry Card -->
        <div style="padding: 0.85rem 1rem; background: rgba(15, 23, 42, 0.8); border: 1px solid var(--border-cyan); border-radius: 8px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.25rem;">
            <span style="font-weight: 700; font-size: 0.86rem; color: var(--text-bright);">${n.name}</span>
            <span class="genz-badge badge-tech-box" style="font-size: 0.65rem;">Active Telemetry</span>
          </div>
          <div style="font-size: 0.78rem; color: var(--cyan-text); font-family: var(--font-mono); margin-bottom: 0.25rem;">
            ${n.logs}
          </div>
          <div style="font-size: 0.76rem; color: var(--text-secondary);">
            ${n.role}
          </div>
        </div>

        <!-- Analyst Endpoint -->
        <div style="display: flex; align-items: center; gap: 0.75rem; padding: 0.5rem 1rem; background: rgba(56, 189, 248, 0.05); border: 1px solid var(--border-cyan); border-radius: 8px;">
          <span style="color: var(--cyan-primary);">${v.user}</span>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-bright);">L1 Analyst Workspace (Triaging Single Pane of Glass)</div>
        </div>

      </div>
    </div>
  `}function S(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        Concept Visual: How an Event is Born
      </div>

      <!-- Flow Pipeline: User -> Action -> PC -> Event Log -> Record -->
      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.85rem; width: 100%; max-width: 320px;">
        
        <!-- Step 1: User Action -->
        <div style="width: 100%; display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px;">
          <span style="color: var(--cyan-primary);">${v.user}</span>
          <div>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">User: Priya Sharma (Finance01)</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary);">Action: Enters login credentials on keyboard</div>
          </div>
        </div>

        <div style="color: var(--cyan-primary); animation: signal-travel 1.5s infinite ease-in-out;">↓</div>

        <!-- Step 2: Windows Subsystem -->
        <div style="width: 100%; display: flex; align-items: center; gap: 0.75rem; padding: 0.65rem 1rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px;">
          <span style="color: var(--violet-primary);">${v.computer}</span>
          <div>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">Workstation: FIN-PC-04</div>
            <div style="font-size: 0.72rem; color: var(--text-secondary);">LSASS & Security Subsystem process authentication</div>
          </div>
        </div>

        <div style="color: var(--violet-primary); animation: signal-travel 1.5s infinite ease-in-out;">↓</div>

        <!-- Step 3: Windows Event Log Record -->
        <div style="width: 100%; display: flex; align-items: center; gap: 0.75rem; padding: 0.75rem 1rem; background: rgba(56, 189, 248, 0.08); border: 1px solid var(--border-cyan); border-radius: 8px; box-shadow: 0 0 12px var(--cyan-glow);">
          <span style="color: var(--cyan-primary);">${v.log}</span>
          <div>
            <div style="display: flex; align-items: center; gap: 0.4rem;">
              <span class="event-id-badge event-id-4625" style="font-size: 0.7rem;">EVENT ID 4625</span>
              <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">Security.evtx</span>
            </div>
            <div style="font-size: 0.76rem; color: var(--text-bright); margin-top: 0.2rem; font-weight: 600;">
              Immutable record written to Windows Event Log
            </div>
          </div>
        </div>

      </div>
    </div>
  `}function C(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 360px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--danger); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Authentication Failure Anatomy</span>
        <span>❌ 4625 Failed Logon</span>
      </div>

      <!-- Diagram: Computer -> Auth -> ❌ Failure -> Log -->
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 1.25rem; padding: 0.75rem 1rem; background: rgba(244, 63, 94, 0.06); border: 1px solid var(--border-danger); border-radius: 8px;">
        <div style="text-align: center;">
          <span style="color: var(--text-bright);">${v.computer}</span>
          <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">FIN-PC-04</div>
        </div>
        <div style="color: var(--danger); font-size: 1rem;">→</div>
        <div style="text-align: center;">
          <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">AUTH ATTEMPT</div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--danger);">Bad Password</div>
        </div>
        <div style="color: var(--danger); font-size: 1rem;">→</div>
        <div style="text-align: center;">
          <span style="color: var(--danger);">${v.cross}</span>
          <div style="font-size: 0.7rem; color: var(--danger); font-weight: 700;">FAILURE</div>
        </div>
      </div>

      <!-- Clickable Event Log Record -->
      <div style="width: 100%; background: rgba(15, 23, 42, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem; font-family: var(--font-mono); font-size: 0.8rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--border-subtle); padding-bottom: 0.5rem; margin-bottom: 0.65rem;">
          <span class="event-id-badge event-id-4625">Event ID: 4625</span>
          <span style="color: var(--text-muted);">10:30:01 EST</span>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.4rem; color: var(--text-secondary);">
          <div>Target User: <span style="color: var(--text-bright); font-weight: 600;">Finance01</span></div>
          <div>Logon Type: <span style="color: var(--cyan-text);">2 (Interactive)</span></div>
          <div>Workstation: <span style="color: var(--text-bright);">FIN-PC-04</span></div>
          <div>Result: <span style="color: var(--danger); font-weight: 700;">Failed</span></div>
        </div>

        <!-- Progressive Disclosure Toggle -->
        <div class="tech-box-collapsible" style="margin-top: 0.75rem; margin-bottom: 0;">
          <div class="tech-box-header" data-toggle-details="tech-details-4625">
            <span style="font-size: 0.75rem; color: var(--violet-primary); font-weight: 700;">[ Technical Details ▾ ]</span>
            <span style="font-size: 0.65rem; color: var(--text-muted);">Status Codes & Substatus</span>
          </div>
          <div id="tech-details-4625" class="tech-box-details" style="display: none;">
            <div>• <strong style="color: var(--text-bright);">Status:</strong> 0xC000006D (Authentication failed)</div>
            <div>• <strong style="color: var(--text-bright);">Substatus:</strong> 0xC000006A (Bad password entered)</div>
            <div>• <strong style="color: var(--text-bright);">Caller Process:</strong> C:\\Windows\\System32\\winlogon.exe</div>
            <div>• <strong style="color: var(--text-bright);">Auth Package:</strong> Negotiate (NTLM/Kerberos fallback)</div>
          </div>
        </div>
      </div>
    </div>
  `}function w(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 360px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--success); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Authentication Success Anatomy</span>
        <span>✓ 4624 Successful Logon</span>
      </div>

      <!-- Diagram: Computer -> Auth -> ✓ Success -> Log -->
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 1.25rem; padding: 0.75rem 1rem; background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 8px;">
        <div style="text-align: center;">
          <span style="color: var(--text-bright);">${v.computer}</span>
          <div style="font-size: 0.7rem; color: var(--text-muted); font-family: var(--font-mono);">FIN-PC-04</div>
        </div>
        <div style="color: var(--success); font-size: 1rem;">→</div>
        <div style="text-align: center;">
          <div style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono);">CREDENTIAL MATCH</div>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--success);">Correct Password</div>
        </div>
        <div style="color: var(--success); font-size: 1rem;">→</div>
        <div style="text-align: center;">
          <span style="color: var(--success);">${v.check}</span>
          <div style="font-size: 0.7rem; color: var(--success); font-weight: 700;">SUCCESS</div>
        </div>
      </div>

      <!-- Side-by-Side Comparison -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; width: 100%;">
        <div style="padding: 0.85rem; background: rgba(244, 63, 94, 0.06); border: 1px solid var(--border-danger); border-radius: 8px;">
          <div class="event-id-badge event-id-4625" style="font-size: 0.72rem; margin-bottom: 0.4rem;">4625 = FAILURE</div>
          <div style="font-size: 0.76rem; color: var(--text-secondary); line-height: 1.5;">
            Denied login attempt. Records wrong credentials or expired tokens.
          </div>
        </div>

        <div style="padding: 0.85rem; background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.4); border-radius: 8px;">
          <div class="event-id-badge event-id-4624" style="font-size: 0.72rem; margin-bottom: 0.4rem;">4624 = SUCCESS</div>
          <div style="font-size: 0.76rem; color: var(--text-secondary); line-height: 1.5;">
            Granted session. Creates user token and assigns security privileges.
          </div>
        </div>
      </div>
    </div>
  `}function T(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Detection Rule Logic</span>
        <span>Events → Detection → Alert</span>
      </div>

      <!-- Stream of 5 Failed Events -->
      <div style="display: flex; gap: 0.4rem; justify-content: center; width: 100%; margin-bottom: 0.75rem;">
        ${[1,2,3,4,5].map(e=>`
          <div style="padding: 0.35rem 0.6rem; background: var(--danger-subtle); border: 1px solid var(--border-danger); border-radius: 4px; font-family: var(--font-mono); font-size: 0.68rem; color: #fca5a5;">
            4625 #${e}
          </div>
        `).join(``)}
      </div>

      <!-- Animated Arrow Into Rule -->
      <div style="color: var(--cyan-primary); animation: signal-travel 1.5s infinite ease-in-out; margin-bottom: 0.5rem;">↓</div>

      <!-- Detection Rule Node -->
      <div style="width: 100%; padding: 1rem; background: rgba(15, 23, 42, 0.9); border: 1px solid var(--border-cyan); border-radius: 8px; margin-bottom: 0.75rem; text-align: center;">
        <div style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-text); font-weight: 700;">
          SIEM RULE: DET-WIN-0422
        </div>
        <div style="font-size: 0.8rem; color: var(--text-bright); margin-top: 0.25rem;">
          Condition: <span class="mono-data">count(event.id == 4625) >= 10 in 120s</span>
        </div>
        <div style="font-size: 0.72rem; color: var(--text-muted); margin-top: 0.2rem;">
          Evaluates threshold: 18 failures detected $\rightarrow$ Trigger condition satisfied!
        </div>
      </div>

      <!-- Animated Arrow Into Alert -->
      <div style="color: var(--danger); animation: signal-travel 1.5s infinite 0.75s ease-in-out; margin-bottom: 0.5rem;">↓</div>

      <!-- Resulting Alert -->
      <div style="width: 100%; padding: 0.85rem 1rem; background: rgba(244, 63, 94, 0.12); border: 1px solid var(--danger); border-radius: 8px; display: flex; align-items: center; justify-content: space-between; box-shadow: 0 0 16px var(--danger-glow);">
        <div style="display: flex; align-items: center; gap: 0.6rem;">
          <span style="color: var(--danger);">${v.alert}</span>
          <div>
            <div style="font-weight: 800; font-size: 0.88rem; color: #ffffff;">🚨 ALERT: Multiple Failed Logins</div>
            <div style="font-size: 0.72rem; color: #fda4af; font-family: var(--font-mono);">Host: FIN-PC-04 | User: Finance01</div>
          </div>
        </div>
        <span class="genz-badge badge-alert" style="font-size: 0.68rem;">QUEUE: L1</span>
      </div>
    </div>
  `}function ee(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1.25rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        Transformation Pipeline: Raw Event to Case Resolution
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.6rem; width: 100%;">
        ${[{title:`Events`,desc:`Raw telemetry (4625/4624)`,icon:v.log},{title:`Alert`,desc:`Rule threshold fired`,icon:v.alert},{title:`Investigation`,desc:`Analyst reviews context`,icon:v.user},{title:`Evidence`,desc:`Cached credential loop identified`,icon:v.check},{title:`Case Record`,desc:`Documented & closed benign`,icon:v.case}].map((e,t)=>`
          <div style="display: flex; align-items: center; gap: 0.85rem; padding: 0.65rem 0.85rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px;">
            <div style="width: 28px; height: 28px; border-radius: 50%; background: rgba(56, 189, 248, 0.1); border: 1px solid var(--border-cyan); display: flex; align-items: center; justify-content: center; color: var(--cyan-primary); font-size: 0.75rem; font-weight: 700;">
              ${t+1}
            </div>
            <div style="flex: 1;">
              <div style="font-weight: 700; font-size: 0.84rem; color: var(--text-bright);">${e.title}</div>
              <div style="font-size: 0.72rem; color: var(--text-secondary);">${e.desc}</div>
            </div>
            <span style="color: var(--text-muted);">${e.icon}</span>
          </div>
        `).join(``)}
      </div>
    </div>
  `}function te(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        Stage 01: User Identity Context
      </div>

      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem; width: 100%;">
        
        <!-- Alert Reference -->
        <div style="display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.8rem; background: var(--danger-subtle); border: 1px solid var(--border-danger); border-radius: 6px; font-size: 0.75rem; color: #fca5a5; font-family: var(--font-mono);">
          <span>Target UserName:</span> <strong>Finance01</strong>
        </div>

        <div style="color: var(--cyan-primary); animation: signal-travel 1.5s infinite ease-in-out;">↓ Query LDAP / Active Directory</div>

        <!-- User Identity Card -->
        <div style="width: 100%; background: var(--bg-surface-elevated); border: 1px solid var(--border-cyan); border-radius: 8px; padding: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
            <div style="width: 36px; height: 36px; border-radius: 50%; background: rgba(56, 189, 248, 0.15); border: 1px solid var(--cyan-primary); display: flex; align-items: center; justify-content: center; color: var(--cyan-primary);">
              ${v.user}
            </div>
            <div>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-bright);">Priya Sharma</div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">priya.sharma@fincorp.internal</div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.78rem;">
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Department:</span> <strong style="color: var(--text-bright);">Finance & Treasury</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Account Status:</span> <strong style="color: var(--success);">Active (Normal)</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Password Changed:</span> <strong style="color: #fbbf24;">10:15 AM Today</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Assigned Device:</span> <strong style="color: var(--cyan-text);">FIN-PC-04</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  `}function E(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        Stage 02: Workstation Host Context
      </div>

      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem; width: 100%;">
        
        <!-- Host Card -->
        <div style="width: 100%; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px; padding: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
            <div style="width: 36px; height: 36px; border-radius: 8px; background: rgba(129, 140, 248, 0.15); border: 1px solid var(--violet-primary); display: flex; align-items: center; justify-content: center; color: var(--violet-primary);">
              ${v.computer}
            </div>
            <div>
              <div style="font-weight: 700; font-size: 0.95rem; color: var(--text-bright);">FIN-PC-04.fincorp.internal</div>
              <div style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono);">Domain-Joined Corporate Endpoint</div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; font-size: 0.78rem;">
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">OS:</span> <strong style="color: var(--text-bright);">Windows 11 Enterprise</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Primary User:</span> <strong style="color: var(--cyan-text);">Priya Sharma</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">EDR Agent:</span> <strong style="color: var(--success);">Healthy (v24.2)</strong>
            </div>
            <div style="padding: 0.4rem; background: rgba(255,255,255,0.02); border-radius: 4px;">
              <span style="color: var(--text-muted);">Physical Location:</span> <strong style="color: var(--text-bright);">Tower A, Floor 3</strong>
            </div>
          </div>
        </div>

      </div>
    </div>
  `}function ne(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Stage 03: Source IP & Network</span>
        <span style="color: var(--success);">RFC 1918 Private</span>
      </div>

      <!-- Network Diagram: Host -> Switch -> DC -->
      <div style="display: flex; flex-direction: column; gap: 0.75rem; width: 100%;">
        
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: rgba(56, 189, 248, 0.08); border: 1px solid var(--border-cyan); border-radius: 8px;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="color: var(--cyan-primary);">${v.computer}</span>
            <span style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">10.10.20.15</span>
          </div>
          <span class="genz-badge badge-tech-box" style="font-size: 0.65rem;">Internal Finance Subnet</span>
        </div>

        <!-- Packet Travel -->
        <div style="display: flex; justify-content: center; height: 16px; align-items: center; position: relative;">
          <div style="width: 2px; height: 100%; background: var(--border-subtle);"></div>
          <div class="flow-packet-dot" style="position: absolute; animation: signal-travel 1.5s infinite ease-in-out;"></div>
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 8px;">
          <div style="display: flex; align-items: center; gap: 0.5rem;">
            <span style="color: var(--violet-primary);">${v.server}</span>
            <span style="font-weight: 700; font-size: 0.85rem; color: var(--text-bright);">10.10.10.5 (Domain Controller FIN-DC-01)</span>
          </div>
          <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">Port 88 (Kerberos)</span>
        </div>

        <div style="padding: 0.65rem 0.85rem; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 6px; font-size: 0.78rem; color: #a7f3d0;">
          ✓ Key Finding: IP is purely internal. No external WAN connections or unexpected foreign geolocations involved.
        </div>
      </div>
    </div>
  `}function re(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Stage 04: The Critical Telemetry Pivot</span>
        <span style="color: var(--success); font-weight: 700;">"Something Changed"</span>
      </div>

      <!-- Chronological Event Stream with Pivot Callout -->
      <div style="display: flex; flex-direction: column; gap: 0.45rem; width: 100%; font-family: var(--font-mono); font-size: 0.78rem;">
        
        <div style="display: flex; justify-content: space-between; padding: 0.4rem 0.65rem; background: var(--danger-subtle); border-left: 3px solid var(--danger); border-radius: 4px;">
          <span>10:30:01</span> <span>4625 ❌ Logon Failed</span> <span>Substatus: 0xC000006A</span>
        </div>

        <div style="display: flex; justify-content: space-between; padding: 0.4rem 0.65rem; background: var(--danger-subtle); border-left: 3px solid var(--danger); border-radius: 4px;">
          <span>10:30:20</span> <span>4625 ❌ Logon Failed</span> <span>Substatus: 0xC000006A</span>
        </div>

        <div style="display: flex; justify-content: space-between; padding: 0.4rem 0.65rem; background: var(--danger-subtle); border-left: 3px solid var(--danger); border-radius: 4px;">
          <span>10:30:40</span> <span>4625 ❌ Logon Failed</span> <span>Substatus: 0xC000006A</span>
        </div>

        <div style="text-align: center; color: var(--text-muted); font-size: 0.7rem; padding: 0.2rem 0;">
          ... 15 additional repeated 4625 failures every 15-20 seconds ...
        </div>

        <!-- The Pivotal 4624 Event -->
        <div style="display: flex; justify-content: space-between; padding: 0.65rem 0.85rem; background: rgba(16, 185, 129, 0.15); border: 2px solid var(--success); border-radius: 6px; box-shadow: 0 0 16px rgba(16, 185, 129, 0.25);">
          <span style="color: #6ee7b7; font-weight: 700;">10:31:45</span>
          <span style="color: #6ee7b7; font-weight: 800;">4624 ✓ SUCCESS (Logon Type 2)</span>
          <span style="color: #a7f3d0; font-weight: 700;">Console Session Active</span>
        </div>

      </div>

      <!-- Pivot Discovery Insight -->
      <div style="margin-top: 1rem; padding: 0.75rem 1rem; background: rgba(15, 23, 42, 0.85); border: 1px solid var(--border-cyan); border-radius: 8px; width: 100%;">
        <div style="font-weight: 700; font-size: 0.84rem; color: var(--cyan-text); margin-bottom: 0.25rem;">
          💡 Analyst Pivot Discovery:
        </div>
        <p style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
          At 10:31:45, a successful interactive logon occurred, and the 4625 failure burst immediately stopped. If an attacker was brute-forcing, failures would continue or escalate laterally. This signature strongly suggests an authorized user entered their new password!
        </p>
      </div>
    </div>
  `}function D(e=4){let t=[{time:`10:15 AM`,type:`info`,label:`Password Reset`,desc:`Priya Sharma changes domain password per company policy.`},{time:`10:30:01`,type:`fail`,label:`4625 Failed`,desc:`Background app attempts login with cached old password.`},{time:`10:30:20`,type:`fail`,label:`4625 Failed`,desc:`Second cached auth retry fails.`},{time:`10:31:00`,type:`alert`,label:`SIEM Alert Fires`,desc:`Threshold reached: 10 failures in 120s $\rightarrow$ Case created.`},{time:`10:31:45`,type:`success`,label:`4624 Success`,desc:`Priya types new password at workstation console $\rightarrow$ Session unlocked!`}],n=t[e]||t[t.length-1];return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Interactive Timeline Scrubber</span>
        <span style="color: var(--text-muted);">Drag or click step</span>
      </div>

      <!-- Horizontal Nodes Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; position: relative; margin-bottom: 1.5rem; padding: 0 0.5rem;">
        <div style="position: absolute; top: 50%; left: 1rem; right: 1rem; height: 2px; background: var(--border-subtle); transform: translateY(-50%); z-index: 1;"></div>
        
        ${t.map((t,n)=>{let r=n===e,i=`var(--border-medium)`;return t.type===`success`?i=`var(--success)`:(t.type===`fail`||t.type===`alert`)&&(i=`var(--danger)`),`
            <div class="timeline-step-btn" data-timeline-idx="${n}" style="position: relative; z-index: 2; width: 34px; height: 34px; border-radius: 50%; background: ${r?`rgba(56, 189, 248, 0.2)`:`var(--bg-surface-elevated)`}; border: 2px solid ${r?`var(--cyan-primary)`:i}; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 700; cursor: pointer; transition: all 0.2s ease;">
              ${n+1}
            </div>
          `}).join(``)}
      </div>

      <!-- Selected Timestamp Event Card -->
      <div style="width: 100%; padding: 1rem; background: rgba(15, 23, 42, 0.9); border: 1px solid var(--border-subtle); border-radius: 8px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.35rem;">
          <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text); font-weight: 700;">${n.time}</span>
          <span class="genz-badge ${n.type===`success`?`badge-try-it`:n.type===`fail`?`badge-alert`:`badge-demo`}" style="font-size: 0.65rem;">
            ${n.label}
          </span>
        </div>
        <p style="font-size: 0.84rem; color: var(--text-bright); line-height: 1.5; margin: 0;">
          ${n.desc}
        </p>
      </div>
    </div>
  `}function ie(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--success); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        False Positive Type A: Authorized / Expected Activity
      </div>

      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.65rem; width: 100%; max-width: 320px;">
        <div style="display: flex; align-items: center; gap: 0.65rem; width: 100%; padding: 0.6rem 0.85rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 6px;">
          <span style="color: var(--violet-primary);">${v.user}</span>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-bright);">Security Admin / Scanner</div>
        </div>

        <div style="color: var(--success); font-size: 0.9rem;">↓ Authorized Maintenance Window</div>

        <div style="display: flex; align-items: center; gap: 0.65rem; width: 100%; padding: 0.6rem 0.85rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 6px;">
          <span style="color: var(--cyan-primary);">${v.network}</span>
          <div style="font-size: 0.8rem; font-weight: 700; color: var(--text-bright);">Scheduled Vulnerability Assessment</div>
        </div>

        <div style="color: var(--success); font-size: 0.9rem;">↓ Triggers Authentication Bursts</div>

        <div style="display: flex; align-items: center; gap: 0.65rem; width: 100%; padding: 0.75rem 0.85rem; background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success); border-radius: 6px;">
          <span style="color: var(--success);">${v.check}</span>
          <div>
            <div style="font-weight: 800; font-size: 0.85rem; color: #ffffff;">Legitimate Expected Test</div>
            <div style="font-size: 0.72rem; color: #a7f3d0;">Document change ticket & close as Expected Activity</div>
          </div>
        </div>
      </div>
    </div>
  `}function ae(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 0.75rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>False Positive Type B: Cached Credentials</span>
        <span style="color: #fbbf24;">The FinCorp Case</span>
      </div>

      <!-- Step-by-Step Chain: Password Reset -> Background Loop -> Failures -> Success -->
      <div style="display: flex; flex-direction: column; gap: 0.5rem; width: 100%; font-size: 0.78rem;">
        
        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.5rem 0.75rem; background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: 6px;">
          <span style="font-weight: 800; color: var(--cyan-primary);">1.</span>
          <div><strong>10:15 AM:</strong> Priya resets domain password on company portal.</div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.5rem 0.75rem; background: rgba(255,255,255,0.02); border: 1px solid var(--border-subtle); border-radius: 6px;">
          <span style="font-weight: 800; color: #fbbf24;">2.</span>
          <div><strong>Workstation Locked:</strong> Outlook & Teams still run in the background.</div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.5rem 0.75rem; background: var(--danger-subtle); border: 1px solid var(--border-danger); border-radius: 6px;">
          <span style="font-weight: 800; color: var(--danger);">3.</span>
          <div><strong>Automatic Retries:</strong> Outlook repeatedly attempts auth using old cached password!</div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.5rem 0.75rem; background: var(--danger-subtle); border: 1px solid var(--border-danger); border-radius: 6px;">
          <span style="font-weight: 800; color: var(--danger);">4.</span>
          <div><strong>18 Failures:</strong> Substatus <code class="mono-data">0xC000006A</code> generated in under 2 minutes.</div>
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.65rem 0.85rem; background: rgba(16, 185, 129, 0.12); border: 1px solid var(--success); border-radius: 6px;">
          <span style="font-weight: 800; color: var(--success);">5.</span>
          <div><strong>10:31:45 (4624 Success):</strong> Priya returns, types new password $\rightarrow$ Session syncs $\rightarrow$ Failures stop!</div>
        </div>

      </div>
    </div>
  `}function oe(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 340px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: #fbbf24; margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%;">
        False Positive Type C: Detection Logic / Grouping Error
      </div>

      <div style="display: flex; flex-direction: column; align-items: center; gap: 0.75rem; width: 100%; max-width: 320px;">
        
        <!-- 3 Users with 1 Failure Each -->
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.4rem; width: 100%;">
          <div style="padding: 0.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 6px; text-align: center; font-size: 0.72rem;">
            User A: 1 fail
          </div>
          <div style="padding: 0.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 6px; text-align: center; font-size: 0.72rem;">
            User B: 1 fail
          </div>
          <div style="padding: 0.5rem; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); border-radius: 6px; text-align: center; font-size: 0.72rem;">
            User C: 1 fail
          </div>
        </div>

        <div style="color: #fbbf24; font-size: 0.9rem;">↓ SIEM Rule Missing <span class="mono-data">groupBy: User</span></div>

        <!-- Flawed Rule Sums Everything -->
        <div style="width: 100%; padding: 0.75rem; background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 6px; text-align: center;">
          <div style="font-size: 0.78rem; font-weight: 700; color: #fbbf24;">Flawed Global Aggregation</div>
          <div style="font-size: 0.72rem; color: var(--text-secondary); margin-top: 0.2rem;">
            Rule sums unrelated failures across entire enterprise $\rightarrow$ Fires false alert!
          </div>
        </div>

      </div>
    </div>
  `}function se(e=`low`){let t={low:{name:`LOW SEVERITY`,color:`#10b981`,badge:`badge-try-it`,sla:`4 Hours`,desc:`Single endpoint, known legitimate/benign cause (e.g. Finance01 cached credential reset).`,example:`Expected testing, user error, known false positive.`},medium:{name:`MEDIUM SEVERITY`,color:`#fbbf24`,badge:`badge-scenario`,sla:`1 Hour`,desc:`Unusual authentication anomaly, single machine, potential unauthorized probe.`,example:`Repeated failures from external IP without valid logon.`},high:{name:`HIGH SEVERITY`,color:`#f97316`,badge:`badge-demo`,sla:`30 Minutes`,desc:`Multiple internal workstations affected, suspected lateral movement or privilege escalation.`,example:`Pass-the-Hash detection, domain admin account lockout burst.`},critical:{name:`CRITICAL SEVERITY`,color:`#f43f5e`,badge:`badge-alert`,sla:`15 Minutes`,desc:`Domain Controller compromise, active ransomware propagation, massive data exfiltration.`,example:`Active unauthorized domain-wide encryption in progress.`}},n=t[e]||t.low;return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 380px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>Context-Driven Severity Gauge</span>
        <span>Click level to compare</span>
      </div>

      <!-- Visual Interactive Severity Scale -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.4rem; width: 100%; margin-bottom: 1.5rem;">
        ${Object.keys(t).map(n=>{let r=n===e,i=t[n];return`
            <div class="severity-scale-btn" data-severity-lvl="${n}" style="padding: 0.65rem 0.4rem; text-align: center; background: ${r?`rgba(255,255,255,0.08)`:`var(--bg-card)`}; border: 2px solid ${r?i.color:`var(--border-subtle)`}; border-radius: 6px; cursor: pointer; transition: all 0.2s ease;">
              <div style="font-size: 0.75rem; font-weight: 800; color: ${i.color};">${n.toUpperCase()}</div>
              <div style="font-size: 0.65rem; color: var(--text-muted); margin-top: 2px;">${i.sla}</div>
            </div>
          `}).join(``)}
      </div>

      <!-- Active Level Detail Card -->
      <div style="width: 100%; padding: 1.25rem; background: rgba(15, 23, 42, 0.9); border: 1px solid ${n.color}; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
          <span style="font-weight: 800; font-size: 1rem; color: ${n.color};">${n.name}</span>
          <span class="genz-badge ${n.badge}">SLA: ${n.sla}</span>
        </div>
        <p style="font-size: 0.85rem; color: var(--text-bright); line-height: 1.5; margin-bottom: 0.75rem;">
          ${n.desc}
        </p>
        <div style="padding: 0.5rem 0.75rem; background: rgba(255,255,255,0.03); border-radius: 6px; font-size: 0.78rem; color: var(--text-secondary);">
          <strong style="color: var(--cyan-text);">Scenario Example:</strong> ${n.example}
        </div>
      </div>
    </div>
  `}function ce(){return`
    <div class="visual-canvas-card" style="width: 100%; min-height: 420px;">
      <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--cyan-primary); margin-bottom: 1rem; text-transform: uppercase; letter-spacing: 0.05em; width: 100%; display: flex; justify-content: space-between;">
        <span>FinCorp Case ALT-2026-9042 Summary Replay</span>
        <span style="color: var(--success);">Full Resolution</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.55rem; width: 100%; font-size: 0.78rem;">
        
        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.85rem; background: rgba(255,255,255,0.02); border-left: 3px solid var(--cyan-primary); border-radius: 4px;">
          <strong>10:15 AM:</strong> Password changed on Active Directory portal.
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.85rem; background: var(--danger-subtle); border-left: 3px solid var(--danger); border-radius: 4px;">
          <strong>10:30 AM:</strong> Outlook on locked PC FIN-PC-04 retries with old cached credentials.
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.85rem; background: var(--danger-subtle); border-left: 3px solid var(--danger); border-radius: 4px;">
          <strong>10:31 AM:</strong> 18 failed 4625 events generate SIEM Alert <span class="mono-data">DET-WIN-0422</span>.
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.85rem; background: rgba(16, 185, 129, 0.1); border-left: 3px solid var(--success); border-radius: 4px;">
          <strong>10:31:45:</strong> Event 4624 (Logon Type 2) succeeds $\rightarrow$ Failures stop!
        </div>

        <div style="display: flex; align-items: center; gap: 0.65rem; padding: 0.55rem 0.85rem; background: rgba(129, 140, 248, 0.1); border-left: 3px solid var(--violet-primary); border-radius: 4px;">
          <strong>10:33 AM:</strong> L1 Analyst reviews Host, User, IP $\rightarrow$ Confirms no lateral movement or malware.
        </div>

        <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.85rem 1rem; background: rgba(16, 185, 129, 0.15); border: 2px solid var(--success); border-radius: 8px;">
          <div>
            <div style="font-weight: 800; font-size: 0.9rem; color: #ffffff;">FINAL CLASSIFICATION: BENIGN FALSE POSITIVE</div>
            <div style="font-size: 0.72rem; color: #a7f3d0;">Severity: LOW • Ticket Documented • Case Closed</div>
          </div>
          <span style="color: var(--success);">${v.check}</span>
        </div>

      </div>
    </div>
  `}var O=`l1`,le=`siem`;function ue(){return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${d(`topic-1`)}

      <!-- TOPIC HERO & STORY -->
      <section style="margin-bottom: 3.5rem;">
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
      </section>

      <!-- ===================================================================
           SUBTOPIC 1: PEOPLE (THE SOC TEAM)
           =================================================================== -->
      <section id="section-people" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">PILLAR 01: TEAM</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">ESCALATION HIERARCHY</span>
            </div>
            
            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Who’s in the SOC?
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              A Security Operations Center functions as an elite coordinated unit. Technical escalations flow upward from <strong>L1 ➔ L2 ➔ L3</strong>, while Operational Leadership (SOC Manager) and Executive Strategy (CISO) provide governance and mission direction.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              As an <strong>L1 Analyst</strong>, you sit right in the center of the operational wheel. You review incoming alerts, collect host and user evidence, document triage notes, and decide whether to close the alert or escalate to an L2 specialist.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-people">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Escalation Criteria [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">When to escalate</span>
              </div>
              <div id="tech-details-people" class="tech-box-details" style="display: none;">
                <div>• <strong>Escalate to L2:</strong> Confirmed malware execution, lateral movement evidence, unresolvable anomalies.</div>
                <div>• <strong>Escalate to L3:</strong> Novel zero-day indicators, persistent APT adversary activity requiring threat hunting.</div>
                <div>• <strong>Notify SOC Manager:</strong> Severe incidents impacting Tier-0 systems, SLA breach risks, critical outages.</div>
              </div>
            </div>

            <!-- Role Selector Helper -->
            <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem;">
              <span style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted);">QUICK SWITCH:</span>
              ${[`l1`,`l2`,`l3`,`intel`,`manager`].map(e=>`
                <button class="btn btn-secondary team-role-quick-btn" data-team-role="${e}" style="padding: 0.25rem 0.6rem; font-size: 0.72rem; ${e===O?`border-color: var(--cyan-primary); color: var(--cyan-primary);`:``}">
                  ${e.toUpperCase()}
                </button>
              `).join(``)}
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div id="team-visual-container">
            ${y(O)}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 2: PROCESS (OPERATIONAL LOOP)
           =================================================================== -->
      <section id="section-process" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">PILLAR 02: PROCESS</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">THE SOC LIFECYCLE</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              The 4-Stage Operational Loop
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Security operations are not a static checklist; they are an unbroken circular engine. Every alert passes through four fundamental stages: <strong>Monitor ➔ Detect ➔ Analyze ➔ Respond</strong>.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              Notice where you operate: <strong>Stage 03 (Analyze)</strong>. While SIEM rules handle Detection, humans are required for Analysis because automated rules lack human business context (like knowing that Priya changed her password this morning).
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-process">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Mean Time to Detect & Respond [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">SLA Metrics</span>
              </div>
              <div id="tech-details-process" class="tech-box-details" style="display: none;">
                <div>• <strong>MTTA (Mean Time to Acknowledge):</strong> FinCorp L1 target: &lt; 5 minutes from alert generation.</div>
                <div>• <strong>MTTT (Mean Time to Triage):</strong> FinCorp L1 target: &lt; 15 minutes to inspect user, host, IP, and evidence.</div>
                <div>• <strong>MTTR (Mean Time to Respond):</strong> Total time to isolate host, reset credentials, or close false positive.</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${b()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 3: TECHNOLOGY (THE ARSENAL)
           =================================================================== -->
      <section id="section-technology" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">PILLAR 03: DEFENSE STACK</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">DEFENSIVE ARSENAL</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              The SOC Technology Ecosystem
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              No single cybersecurity tool catches everything. FinCorp deploys a defense-in-depth architecture where logs stream from endpoints, network switches, and firewalls into specialized security engines.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              Click through the tools on the diagram to see the telemetry each engine contributes. For example, the <strong>SIEM</strong> correlates login bursts, while the <strong>EDR</strong> inspects which local process attempted the authentication.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-tech">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: SIEM vs EDR Telemetry [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Data comparison</span>
              </div>
              <div id="tech-details-tech" class="tech-box-details" style="display: none;">
                <div>• <strong>SIEM (Security Information & Event Management):</strong> Aggregates central logs (Windows Event 4625/4624, Syslog, Firewall).</div>
                <div>• <strong>EDR (Endpoint Detection & Response):</strong> Records process command lines, DLL loads, and registry changes on workstations.</div>
                <div>• <strong>NDR (Network Detection & Response):</strong> Inspects unencrypted protocols, packet metadata, and internal beaconing.</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div id="tech-visual-container">
            ${x(le)}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 4: DATA FLOW (TELEMETRY PIPELINE)
           =================================================================== -->
      <section id="section-dataflow" style="margin-bottom: 4rem; scroll-margin-top: 100px;">
        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-alert">PILLAR 04: DATA PIPELINE</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">FROM PACKET TO ANALYST</span>
          </div>

          <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
            How Security Telemetry Traverses FinCorp
          </h2>

          <p style="font-size: 0.98rem; color: var(--text-secondary); max-width: 820px; line-height: 1.65;">
            Follow the journey of a single packet from the endpoint forwarder through the normalization pipeline, detection correlation rule, and alert dispatch queue.
          </p>
        </div>

        <div id="data-flow-container">
          ${g()}
        </div>
      </section>

      <!-- QUICK CHECK QUIZ -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.9); border: 1px solid rgba(139, 92, 246, 0.35);">
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
        <div class="glass-panel-alert pulse-alert-node" style="padding: 2.25rem; border-radius: var(--border-radius-lg); text-align: center;">
          <div style="width: 56px; height: 56px; border-radius: 50%; background: rgba(244, 63, 94, 0.15); border: 2px solid var(--danger); display: flex; align-items: center; justify-content: center; margin: 0 auto 1.25rem auto;">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--danger)" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          </div>

          <div style="font-family: var(--font-mono); font-size: 0.85rem; color: #fca5a5; margin-bottom: 0.5rem; letter-spacing: 0.1em;">
            TIME ADVANCE: 10:32 AM EST • SIEM SIREN SOUNDS
          </div>

          <h2 style="font-size: 1.85rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.75rem;">
            🚨 INCOMING DETECTION: MULTIPLE FAILED LOGINS
          </h2>

          <p style="font-size: 1rem; color: #fecaca; max-width: 680px; margin: 0 auto 1.75rem auto; line-height: 1.6;">
            Your console flashes amber and red. SIEM Rule <span class="mono-data" style="color: #ffffff; background: rgba(244,63,94,0.3);">DET-WIN-0422</span> just triggered on threshold. 
            User <strong style="color: white;">Finance01</strong> on host <strong style="color: white;">FIN-PC-04</strong> has generated 18 failed authentication attempts.
          </p>

          <div style="display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;">
            <button id="btn-open-alert-trans" class="btn btn-alert" style="font-size: 1rem; padding: 0.75rem 2rem;">
              OPEN ALERT & BEGIN TRIAGE (TOPIC 02) →
            </button>
          </div>
        </div>
      </section>

    </div>
  `}function de(){_(),document.querySelectorAll(`[data-toggle-details]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-toggle-details`),r=document.getElementById(n);if(r){let t=r.style.display===`none`;r.style.display=t?`block`:`none`,e.playClick()}})}),document.querySelectorAll(`[data-team-role]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-team-role`);if(n){O=n,e.playClick();let t=document.getElementById(`team-visual-container`);t&&(t.innerHTML=y(O),de())}})}),document.querySelectorAll(`[data-tech-key]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-tech-key`);if(n){le=n,e.playClick();let t=document.getElementById(`tech-visual-container`);t&&(t.innerHTML=x(le),de())}})});let t=document.querySelectorAll(`#quiz-t1-options .option-card`),n=document.getElementById(`quiz-t1-feedback`);t.forEach(i=>{i.addEventListener(`click`,i=>{let a=i.currentTarget.getAttribute(`data-quiz-opt`);t.forEach(e=>e.classList.remove(`selected-correct`,`selected-wrong`)),a===`b`?(i.currentTarget.classList.add(`selected-correct`),e.playSuccess(),r.recordQuizScore(`topic-1`,100),r.completeCheckpoint(`t1-quiz`,50,`Mastered SOC Escalation Path`),n&&(n.style.display=`block`,n.style.background=`rgba(16, 185, 129, 0.15)`,n.style.border=`1px solid var(--success)`,n.style.color=`#a7f3d0`,n.innerHTML=`
            <strong>Correct! (+50 XP)</strong> L1 analysts escalate complex forensic investigations to Tier 2 (L2) Incident Responders. The CISO is reserved for executive disaster declarations, not operational host triage.
          `)):(i.currentTarget.classList.add(`selected-wrong`),e.playError(),n&&(n.style.display=`block`,n.style.background=`rgba(245, 158, 11, 0.15)`,n.style.border=`1px solid var(--warning)`,n.style.color=`#fde68a`,n.innerHTML=`
            <strong>Incorrect.</strong> Remember: L1 reports directly to L2 for technical deep-dives. Executive leadership (CISO) is only notified during critical incident escalation.
          `))})});let i=document.getElementById(`btn-open-alert-trans`);i&&i.addEventListener(`click`,()=>{e.playAlert(),r.completeTopic(`topic-1`),r.navigate(`topic-2`)})}var k=1,A=5,j=!1,fe=null;function M(){let e=p.events.slice(0,A),t=p.events.find(e=>e.id===k)||p.events[0],n=A>=10;return p.events.length,`
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
              Showing ${A} of ${p.events.length} security events logged between 10:30:01 and 10:31:45
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
      <div class="glass-panel" style="padding: 1.25rem 1.5rem; margin-bottom: 1.5rem; border-color: ${n?`var(--border-danger)`:`var(--border-cyan)`}; background: ${n?`rgba(35, 12, 18, 0.75)`:`var(--bg-card)`};">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: ${n?`var(--danger-subtle)`:`var(--cyan-subtle)`}; display: flex; align-items: center; justify-content: center; color: ${n?`var(--danger)`:`var(--cyan-primary)`};">
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
                      style="cursor: pointer; ${n?`background: rgba(56, 189, 248, 0.12);`:``}">
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
        <div class="glass-panel" style="padding: 1.5rem; background: rgba(14, 21, 38, 0.9); height: fit-content; border-color: ${t.eventId===4624?`rgba(16, 185, 129, 0.4)`:`rgba(56, 189, 248, 0.25)`};">
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
  `}function N(){document.querySelectorAll(`[data-event-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=parseInt(t.currentTarget.getAttribute(`data-event-id`),10);if(!isNaN(n)){k=n,e.playSubtleTick();let t=document.getElementById(`event-visualizer-container`);t&&(t.innerHTML=M(),N())}})});let t=document.getElementById(`btn-stream-step`);t&&t.addEventListener(`click`,()=>{if(A<p.events.length){A++,k=A,e.playClick(),A===10&&e.playAlert();let t=document.getElementById(`event-visualizer-container`);t&&(t.innerHTML=M(),N())}});let n=document.getElementById(`btn-stream-all`);n&&n.addEventListener(`click`,()=>{A=p.events.length,k=A,e.playSuccess();let t=document.getElementById(`event-visualizer-container`);t&&(t.innerHTML=M(),N())});let r=document.getElementById(`btn-stream-auto`);r&&r.addEventListener(`click`,()=>{j?(clearInterval(fe),j=!1):(j=!0,fe=setInterval(()=>{if(A<p.events.length){A++,k=A,e.playSubtleTick(),A===10&&e.playAlert();let t=document.getElementById(`event-visualizer-container`);t&&(t.innerHTML=M(),N())}else{clearInterval(fe),j=!1;let e=document.getElementById(`event-visualizer-container`);e&&(e.innerHTML=M(),N())}},600));let t=document.getElementById(`event-visualizer-container`);t&&(t.innerHTML=M(),N())})}function pe(){return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${d(`topic-2`)}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-alert">TOPIC 02 • 10:32 AM</span>
          <span class="mono-data">THE ANATOMY OF TELEMETRY</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Alerts & <span class="gradient-text-cyan">Events.</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--danger); margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #fca5a5; margin-bottom: 0.4rem; text-transform: uppercase;">
            SHIFT CONTEXT • 10:32 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "You click the flashing alert on your FinCorp dashboard. Before jumping to wild conclusions, you must distinguish between 
            the building blocks of cybersecurity operations: <strong>What is a raw Event? How does it become an Alert? When does it become an Incident? And why is every investigation tracked in a Case?</strong>"
          </p>
        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 1: WHAT IS AN EVENT?
           =================================================================== -->
      <section id="section-event-def" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">SUBTOPIC 01</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">RAW TELEMETRY</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              What is an Event?
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              An <strong>Event</strong> is simply an observable change of state on a computer system or network. It is the fundamental atom of security telemetry. Every time a user types a password, opens a document, or connects to Wi-Fi, the operating system kernel writes an immutable event log.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              FinCorp’s corporate infrastructure generates over <strong>50,000 events every second</strong>. Over 99.99% of them are completely routine. A single event is rarely an emergency.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-events">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Windows Event Log Architecture [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">OS Subsystems</span>
              </div>
              <div id="tech-details-events" class="tech-box-details" style="display: none;">
                <div>• <strong>Location:</strong> <code class="mono-data">C:\\Windows\\System32\\winevt\\Logs\\Security.evtx</code></div>
                <div>• <strong>Auditing Engine:</strong> Controlled by Group Policy (GPO): <em>Audit Logon Events</em>.</div>
                <div>• <strong>Channel:</strong> Security channel requires administrative permissions to read.</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${S()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 2: EVENT ID 4625 (FAILED LOGON)
           =================================================================== -->
      <section id="section-4625" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-alert">SUBTOPIC 02</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #fca5a5;">WINDOWS SECURITY</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Event ID 4625: Failed Authentication
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Whenever an authentication attempt fails on a Windows host, the Local Security Authority Subsystem Service (LSASS) records <strong>Event ID 4625</strong> in the Security event log.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              In our FinCorp scenario, <strong>18 of these events</strong> fired in rapid succession for user <span class="mono-data">Finance01</span> on workstation <span class="mono-data">FIN-PC-04</span>. Inspect the log card on the right to examine the critical forensic fields.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-substatus">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Critical Substatus Error Codes [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Forensic decoding</span>
              </div>
              <div id="tech-details-substatus" class="tech-box-details" style="display: none;">
                <div>• <code class="mono-data">0xC000006A</code>: User name is correct, but the password was invalid (Crucial for cached credential diagnosis!).</div>
                <div>• <code class="mono-data">0xC0000064</code>: The specified user account does not exist (Common in external spray attacks).</div>
                <div>• <code class="mono-data">0xC0000234</code>: The user account is currently locked out due to threshold violations.</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${C()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 3: EVENT ID 4624 (SUCCESSFUL LOGON)
           =================================================================== -->
      <section id="section-4624" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">SUBTOPIC 03</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #a7f3d0;">SESSION CREATION</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Event ID 4624: Successful Logon
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              When correct credentials are submitted and accepted, Windows logs <strong>Event ID 4624</strong>. This creates a new security token and interactive or network session for the user.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              Remember the golden rule of SOC triage: <strong>Compare 4625 with 4624</strong>.
              If failures stop immediately when a 4624 occurs at the physical workstation, the human user has almost certainly returned to their desk and typed their valid password!
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-logontypes">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Windows Logon Types Decoded [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Type 2 vs Type 3</span>
              </div>
              <div id="tech-details-logontypes" class="tech-box-details" style="display: none;">
                <div>• <strong>Logon Type 2 (Interactive):</strong> Physical keyboard/console login at the computer screen.</div>
                <div>• <strong>Logon Type 3 (Network):</strong> Connecting remotely across the network (e.g. SMB file share, IIS website).</div>
                <div>• <strong>Logon Type 10 (RemoteInteractive):</strong> Remote Desktop Protocol (RDP) session.</div>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${w()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 4: FROM EVENTS TO ALERT
           =================================================================== -->
      <section id="section-detection-rule" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">SUBTOPIC 04</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">SIEM CORRELATION</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              How Events Become an Alert
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Why doesn't the SOC sound an alarm on every single failed password? Because humans mistype passwords every day. Alerting on a single failure would cause unbearable analyst alert fatigue.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              Instead, SIEM engineers write <strong>Detection Rules</strong> with threshold conditions. Rule <span class="mono-data">DET-WIN-0422</span> requires <strong>10 or more failures within 120 seconds</strong> before promoting raw events into an Alert.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-query">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Splunk / KQL Detection Query [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">SIEM Syntax</span>
              </div>
              <div id="tech-details-query" class="tech-box-details" style="display: none;">
                <pre style="background: rgba(0,0,0,0.4); padding: 0.5rem; border-radius: 4px; font-size: 0.78rem; color: #7dd3fc; overflow-x: auto;">
SecurityEvent
| where EventID == 4625
| summarize FailureCount = count() by TargetUserName, Computer, bin(TimeGenerated, 2m)
| where FailureCount >= 10
                </pre>
              </div>
            </div>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${T()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 5: INCIDENT & CASE LIFECYCLE
           =================================================================== -->
      <section id="section-lifecycle" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <!-- LEFT: LEARNING EXPLANATION -->
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">SUBTOPIC 05</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">THE TRIAGE PYRAMID</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Event ➔ Alert ➔ Incident ➔ Case
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Understand the exact vocabulary:
            </p>

            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.55rem; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
              <li>• <strong style="color: var(--text-bright);">Event:</strong> Something happened (recorded log).</li>
              <li>• <strong style="color: var(--cyan-text);">Alert:</strong> Detection rule triggered threshold $\rightarrow$ Needs human review.</li>
              <li>• <strong style="color: #fbbf24;">Investigation:</strong> Analyst examines evidence, user, host, and IP.</li>
              <li>• <strong style="color: var(--danger);">Incident:</strong> Confirmed breach or unauthorized security violation.</li>
              <li>• <strong style="color: #a78bfa;">Case:</strong> The formal audit ticket where findings and closing disposition are logged.</li>
            </ul>
          </div>

          <!-- RIGHT: ANIMATED CONCEPTUAL VISUAL -->
          <div>
            ${ee()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           INTERACTIVE EVENT STREAM VISUALIZER (Step +1, Auto Play, 19 Events)
           =================================================================== -->
      <section style="margin-bottom: 4rem;">
        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-try-it">PRACTICAL LAB INTERACTION</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-text);">LIVE STREAM CONTROLS</span>
          </div>

          <h2 style="font-size: 1.7rem; margin-bottom: 0.5rem; color: var(--text-bright);">
            Step Through the FIN-PC-04 Event Log
          </h2>

          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 820px; line-height: 1.6;">
            Watch the events occur in chronological order. Click <strong>Step Next Event (+1)</strong> or <strong>Auto Play</strong> to see the SIEM detection threshold gauge fill up from 0 to 10 failures.
          </p>
        </div>

        <div id="event-vis-container">
          ${M()}
        </div>
      </section>

      <!-- QUICK CHECK QUIZ -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.9); border: 1px solid rgba(139, 92, 246, 0.35);">
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-quiz">🧠 QUICK CHECK</span>
            <span style="font-size: 0.85rem; color: #d8b4fe; font-family: var(--font-mono);">STAGE 02 KNOWLEDGE CHECK</span>
          </div>
          <h3 style="font-size: 1.3rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            What is the key difference between Event ID 4625 and Event ID 4624?
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
            Confirm your telemetry mastery before heading to the 7-Tab Alert Triage Board.
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;" id="quiz-t2-options">
            <div class="option-card" data-quiz-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">4625 is an active ransomware file encryption event; 4624 is a normal file download.</div>
            </div>
            <div class="option-card" data-quiz-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">4625 records a failed authentication attempt; 4624 records a successful logon session.</div>
            </div>
            <div class="option-card" data-quiz-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">4625 only occurs on Linux web servers; 4624 only occurs on network routers.</div>
            </div>
          </div>

          <div id="quiz-t2-feedback" style="display: none; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"></div>
        </div>
      </section>

      <!-- STORY TRANSITION TO TOPIC 3 -->
      <section style="text-align: center;">
        <button id="btn-goto-triage" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem;">
          PROCEED TO TOPIC 03: ALERT TRIAGE CONSOLE →
        </button>
      </section>

    </div>
  `}function me(){N(),document.querySelectorAll(`[data-toggle-details]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-toggle-details`),r=document.getElementById(n);if(r){let t=r.style.display===`none`;r.style.display=t?`block`:`none`,e.playClick()}})});let t=document.querySelectorAll(`#quiz-t2-options .option-card`),n=document.getElementById(`quiz-t2-feedback`);t.forEach(i=>{i.addEventListener(`click`,i=>{let a=i.currentTarget.getAttribute(`data-quiz-opt`);t.forEach(e=>e.classList.remove(`selected-correct`,`selected-wrong`)),a===`b`?(i.currentTarget.classList.add(`selected-correct`),e.playSuccess(),r.recordQuizScore(`topic-2`,100),r.completeCheckpoint(`t2-quiz`,50,`Mastered Event 4625 vs 4624`),n&&(n.style.display=`block`,n.style.background=`rgba(16, 185, 129, 0.15)`,n.style.border=`1px solid var(--success)`,n.style.color=`#a7f3d0`,n.innerHTML=`
            <strong>Correct! (+50 XP)</strong> 4625 records failed authentications (with substatus codes like 0xC000006A), while 4624 records a successfully created logon session.
          `)):(i.currentTarget.classList.add(`selected-wrong`),e.playError(),n&&(n.style.display=`block`,n.style.background=`rgba(245, 158, 11, 0.15)`,n.style.border=`1px solid var(--warning)`,n.style.color=`#fde68a`,n.innerHTML=`
            <strong>Incorrect.</strong> Remember: 4625 = Authentication Failure (Red), 4624 = Authentication Success (Green).
          `))})});let i=document.getElementById(`btn-goto-triage`);i&&i.addEventListener(`click`,()=>{e.playClick(),r.completeTopic(`topic-2`),r.navigate(`topic-3`)})}var P=`SUMMARY`;function F(){let e=p,t=r.state;return`
    <div class="glass-panel" style="background: rgba(11, 17, 33, 0.95); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: var(--border-radius-lg); overflow: hidden; box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7);">
      
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
          <button class="tab-btn ${P===e?`active`:``}" data-tab="${e}">
            ${e===`NOTES`?`📝 `:``}${e}
          </button>
        `).join(``)}
      </div>

      <!-- Tab Content Area -->
      <div class="tab-content">
        ${he(P,e,t)}
      </div>

    </div>
  `}function he(e,t,n){switch(e){case`SUMMARY`:return`
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
      `;default:return``}}function I(){document.querySelectorAll(`.tab-btn`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-tab`);if(n){P=n,e.playClick();let t=document.getElementById(`alert-panel-container`);t&&(t.innerHTML=F(),I())}})}),document.querySelectorAll(`[data-tab-switch]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-tab-switch`);if(n){P=n,e.playClick();let t=document.getElementById(`alert-panel-container`);t&&(t.innerHTML=F(),I())}})});let t=document.getElementById(`triage-notes-input`);t&&t.addEventListener(`input`,e=>{r.saveScratchpadNotes(e.target.value)});let n=document.getElementById(`btn-save-notes`);n&&n.addEventListener(`click`,()=>{t&&(r.saveScratchpadNotes(t.value),e.playSuccess(),r.showToast(`Triage notes successfully saved to case record.`,`info`))});let i=document.getElementById(`btn-inspect-success`);i&&i.addEventListener(`click`,()=>{P=`NOTES`;let e=r.state.scratchpadNotes;r.saveScratchpadNotes(e+`[10:36:12] Crucial finding: Event 4624 (Logon Type 2 Interactive Console) succeeded at 10:31:45. Subsequent 4625 failures ceased immediately. Investigating cached credential hypothesis.
`),r.completeCheckpoint(`check-triage-success`,35,`Identified Pivotal 4624 Logon`);let t=document.getElementById(`alert-panel-container`);t&&(t.innerHTML=F(),I())})}var ge=4;function _e(){return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${d(`topic-3`)}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-investigate">TOPIC 03 • 10:35 AM</span>
          <span class="mono-data">TRIAGE PLAYBOOK EXECUTION</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Now it's <span class="gradient-text-cyan">your alert.</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--cyan-primary); margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--cyan-text); margin-bottom: 0.4rem; text-transform: uppercase;">
            ACTIVE ASSIGNMENT • 10:35 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "You are the L1 analyst on shift. Case <span class="mono-data">ALT-2026-9042</span> is assigned to you. 
            Do not guess. Do not panic. Follow the 5-stage contextual investigation framework: 
            <strong>User Identity ➔ Host Device ➔ Source IP ➔ Evidence Timeline ➔ Decision.</strong>"
          </p>
        </div>

        <!-- Investigation Path Steps Bar -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 0.75rem; margin-bottom: 1rem;">
          ${[{num:`01`,title:`USER`,desc:`Identify Priya Sharma`},{num:`02`,title:`HOST`,desc:`FIN-PC-04 specs`},{num:`03`,title:`IP`,desc:`10.10.20.15 internal`},{num:`04`,title:`EVIDENCE`,desc:`10:31:45 4624 pivot`},{num:`05`,title:`TIMELINE`,desc:`Scrub sequence`}].map(e=>`
            <div class="glass-panel" style="padding: 0.85rem; text-align: center; border-color: rgba(56, 189, 248, 0.2);">
              <div style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--cyan-primary); font-weight: 700;">STAGE ${e.num}</div>
              <div style="font-weight: 800; font-size: 0.88rem; color: var(--text-bright); margin: 0.2rem 0;">${e.title}</div>
              <div style="font-size: 0.72rem; color: var(--text-muted);">${e.desc}</div>
            </div>
          `).join(``)}
        </div>
      </section>

      <!-- ===================================================================
           STAGE 1: USER CONTEXT
           =================================================================== -->
      <section id="section-triage-user" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">TRIAGE STAGE 01</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">IDENTITY ENRICHMENT</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Who is the User?
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              The alert names target account <span class="mono-data">Finance01</span>. As an L1 analyst, you immediately query Active Directory or your Identity provider (Okta/Entra ID).
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              You discover the real identity is <strong>Priya Sharma</strong>, a Senior Treasury Analyst in the Finance department. Her account status is Active, and crucial context appears: <em>she updated her password at 10:15 AM today</em>!
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-user">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Identity Triage Checklist [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Key questions</span>
              </div>
              <div id="tech-details-user" class="tech-box-details" style="display: none;">
                <div>• Is the user an active employee, contractor, or terminated account?</div>
                <div>• What role and privilege level does the account have (Standard User vs Domain Admin)?</div>
                <div>• Did the user recently request a password reset or travel internationally?</div>
              </div>
            </div>
          </div>

          <div>
            ${te()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           STAGE 2: HOST CONTEXT
           =================================================================== -->
      <section id="section-triage-host" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">TRIAGE STAGE 02</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">DEVICE ENRICHMENT</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Where did it happen?
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Next, inspect the workstation: <span class="mono-data">FIN-PC-04</span>. Is this an unmanaged rogue laptop on guest Wi-Fi, or an official domain-joined desktop?
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              Telemetry confirms <span class="mono-data">FIN-PC-04</span> is Priya Sharma's dedicated corporate Windows 11 workstation in Tower A, Floor 3. Its EDR agent is healthy and running normally.
            </p>

            <!-- Collapsible Tech Box -->
            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-host">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Host Asset Tiers [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Asset criticality</span>
              </div>
              <div id="tech-details-host" class="tech-box-details" style="display: none;">
                <div>• <strong>Tier 0:</strong> Domain Controllers, PKI root CAs, Identity stores.</div>
                <div>• <strong>Tier 1:</strong> Production application servers, databases, ERP systems.</div>
                <div>• <strong>Tier 2:</strong> Standard end-user workstations (e.g. FIN-PC-04).</div>
              </div>
            </div>
          </div>

          <div>
            ${E()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           STAGE 3: IP & NETWORK CONTEXT
           =================================================================== -->
      <section id="section-triage-ip" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">TRIAGE STAGE 03</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">NETWORK PERSPECTIVE</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              What is the Source IP?
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              The alert records Source IP: <span class="mono-data">10.10.20.15</span>. An IP provides crucial network context: Is the login originating from the public Internet, a suspicious Tor exit node, or an internal corporate subnet?
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              <span class="mono-data">10.10.20.15</span> is an internal RFC 1918 private address leased by FinCorp’s DHCP server on the Finance floor. There is zero external internet routing involved.
            </p>
          </div>

          <div>
            ${ne()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           STAGE 4: EVIDENCE & THE PIVOT
           =================================================================== -->
      <section id="section-triage-evidence" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-alert">TRIAGE STAGE 04</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-text);">THE ANALYST PIVOT</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Finding the Breakthrough
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Looking at 18 failure logs is alarming. But an expert analyst always reads <em>beyond</em> the failures: <strong>What happened immediately after?</strong>
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              At exactly <strong>10:31:45 AM</strong>, a single <span class="event-id-badge event-id-4624" style="font-size: 0.75rem;">Event 4624</span> succeeded with <strong>Logon Type 2 (Interactive Console)</strong>. And immediately after that, all failure attempts ceased.
            </p>

            <div style="padding: 0.85rem 1rem; background: rgba(56, 189, 248, 0.08); border-left: 3px solid var(--cyan-primary); border-radius: 6px; font-size: 0.88rem; color: var(--text-bright);">
              <strong>Why this matters:</strong> Attackers brute-forcing credentials don't stop after 1 success on an interactive console screen. This pattern points directly to a user locking their PC, returning, and entering their new password!
            </div>
          </div>

          <div>
            ${re()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           STAGE 5: SCRUBBABLE TIMELINE
           =================================================================== -->
      <section id="section-triage-timeline" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-demo">TRIAGE STAGE 05</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">TIMELINE RECONSTRUCTION</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Scrub the Event Timeline
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Time is the ultimate arbiter in incident response. Click through each step on the timeline to scrub through the chain of events from the 10:15 AM password reset to the 10:31:45 resolution.
            </p>
          </div>

          <div id="scrub-timeline-container">
            ${D(ge)}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           THE 7-TAB ALERT DETAIL CONSOLE
           =================================================================== -->
      <section style="margin-bottom: 4rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="genz-badge badge-alert">OPERATIONAL TRIAGE BOARD</span>
            <h2 style="font-size: 1.7rem; color: var(--text-bright); margin-top: 0.35rem;">
              Case ALT-2026-9042 Triage Workspace
            </h2>
          </div>
          <div style="font-size: 0.82rem; color: var(--cyan-text); font-family: var(--font-mono);">
            ALL 7 TABS ACTIVE: SUMMARY, USER, HOST, NETWORK, EVENTS, TIMELINE, NOTES
          </div>
        </div>

        <div id="alert-panel-container">
          ${F()}
        </div>
      </section>

      <!-- L1 OPERATIONAL DECISION POINT -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2.25rem; background: rgba(14, 21, 38, 0.95); border: 1px solid rgba(56, 189, 248, 0.35);">
          <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-scenario">🎯 L1 DECISION POINT</span>
            <span style="font-size: 0.85rem; color: var(--cyan-text); font-family: var(--font-mono);">SCENARIO ASSESSMENT</span>
          </div>

          <h3 style="font-size: 1.35rem; color: var(--text-bright); margin-bottom: 0.75rem;">
            You observe: 18 failed logins (4625) followed by 1 successful login (4624). What should you do?
          </h3>

          <p style="font-size: 0.92rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.5rem;">
            As the L1 analyst on shift, which operational action should you take next?
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;" id="decision-t3-options">
            <div class="option-card" data-dec-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">
                <strong>Immediately declare a SEV-1 attack</strong> and isolate the entire Finance network VLAN without checking user context.
              </div>
            </div>

            <div class="option-card" data-dec-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">
                <strong>Investigate false positive hypotheses</strong> (such as cached credentials or password change delay) before escalating.
              </div>
            </div>

            <div class="option-card" data-dec-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">
                <strong>Delete the alert</strong> without recording notes to reduce queue numbers.
              </div>
            </div>
          </div>

          <div id="decision-t3-feedback" style="display: none; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"></div>
        </div>
      </section>

      <!-- STORY TRANSITION TO TOPIC 4 -->
      <section style="text-align: center;">
        <button id="btn-goto-falsepos" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem;">
          PROCEED TO TOPIC 04: FALSE POSITIVE ANALYSIS →
        </button>
      </section>

    </div>
  `}function ve(){I(),document.querySelectorAll(`[data-toggle-details]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-toggle-details`),r=document.getElementById(n);if(r){let t=r.style.display===`none`;r.style.display=t?`block`:`none`,e.playClick()}})}),document.querySelectorAll(`[data-timeline-idx]`).forEach(t=>{t.addEventListener(`click`,t=>{ge=parseInt(t.currentTarget.getAttribute(`data-timeline-idx`),10),e.playClick();let n=document.getElementById(`scrub-timeline-container`);n&&(n.innerHTML=D(ge),ve())})});let t=document.querySelectorAll(`#decision-t3-options .option-card`),n=document.getElementById(`decision-t3-feedback`);t.forEach(i=>{i.addEventListener(`click`,i=>{let a=i.currentTarget.getAttribute(`data-dec-opt`);t.forEach(e=>e.classList.remove(`selected-correct`,`selected-wrong`)),a===`b`?(i.currentTarget.classList.add(`selected-correct`),e.playSuccess(),r.recordQuizScore(`topic-3`,100),r.completeCheckpoint(`t3-decision`,50,`Formulated Benign False Positive Hypothesis`),n&&(n.style.display=`block`,n.style.background=`rgba(16, 185, 129, 0.15)`,n.style.border=`1px solid var(--success)`,n.style.color=`#a7f3d0`,n.innerHTML=`
            <strong>Outstanding Call! (+50 XP)</strong> A sudden burst of 4625s followed immediately by a single 4624 is the classic signature of cached credentials after a password reset. Investigating this benign explanation prevents disruptive and costly false alarms!
          `)):(i.currentTarget.classList.add(`selected-wrong`),e.playError(),n&&(n.style.display=`block`,n.style.background=`rgba(245, 158, 11, 0.15)`,n.style.border=`1px solid var(--warning)`,n.style.color=`#fde68a`,n.innerHTML=`
            <strong>Incorrect.</strong> Isolating an entire corporate department without confirming malicious intent disrupts normal business operations. Always verify user context first.
          `))})});let i=document.getElementById(`btn-goto-falsepos`);i&&i.addEventListener(`click`,()=>{e.playClick(),r.completeTopic(`topic-3`),r.navigate(`topic-4`)})}var L={step:1,answers:{authorized:null,legitimate:null,logicBug:null},outcome:null};function R(){return`
    <div style="margin: 2rem 0;">
      
      <!-- Interactive Branching Wizard -->
      <div class="glass-panel" style="padding: 2rem; background: rgba(12, 18, 35, 0.9); border: 1px solid rgba(56, 189, 248, 0.35);">
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
            <button class="btn ${L.answers.authorized===!0?`btn-primary`:`btn-secondary`}" data-tree-answer="auth-yes" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
              YES — Approved Test / Scan
            </button>
            <button class="btn ${L.answers.authorized===!1?`btn-outline-cyan`:`btn-secondary`}" data-tree-answer="auth-no" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
              NO / UNKNOWN — Unplanned Activity
            </button>
          </div>
        </div>

        <!-- Step 2: Is there a legitimate benign business explanation? (Shown if NO) -->
        ${L.answers.authorized===!1?`
          <div class="tree-step-card animate-fade-in" style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-primary); font-weight: 700;">QUESTION 02</span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">Is there a legitimate benign explanation?</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
              Did the user recently reset their password? Are background apps (Outlook, mapped SMB drive, mobile device) syncing with an expired token?
            </p>

            <div style="display: flex; gap: 0.75rem;">
              <button class="btn ${L.answers.legitimate===!0?`btn-primary`:`btn-secondary`}" data-tree-answer="legit-yes" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                YES — Cached Credential / App Desync
              </button>
              <button class="btn ${L.answers.legitimate===!1?`btn-outline-cyan`:`btn-secondary`}" data-tree-answer="legit-no" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                NO — No Legitimate Business Reason
              </button>
            </div>
          </div>
        `:``}

        <!-- Step 3: Did detection logic trigger incorrectly? (Shown if NO to legitimate) -->
        ${L.answers.authorized===!1&&L.answers.legitimate===!1?`
          <div class="tree-step-card animate-fade-in" style="margin-bottom: 1.5rem; padding: 1.25rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: 8px;">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-primary); font-weight: 700;">QUESTION 03</span>
              <span style="font-weight: 700; color: var(--text-bright); font-size: 1rem;">Did the detection logic correlate data incorrectly?</span>
            </div>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.85rem;">
              Did the SIEM rule group unrelated users, miss an essential exemption filter, or parse the field names incorrectly?
            </p>

            <div style="display: flex; gap: 0.75rem;">
              <button class="btn ${L.answers.logicBug===!0?`btn-primary`:`btn-secondary`}" data-tree-answer="logic-yes" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                YES — SIEM Correlation / Ingestion Bug
              </button>
              <button class="btn ${L.answers.logicBug===!1?`btn-alert`:`btn-secondary`}" data-tree-answer="logic-no" style="font-size: 0.85rem; padding: 0.5rem 1.2rem;">
                NO — Logic is Valid & Attack is Real
              </button>
            </div>
          </div>
        `:``}

        <!-- Final Outcome Box -->
        ${ye(L)}

      </div>
    </div>
  `}function ye(e){return e.answers.authorized===!0?`
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
  `}function z(){document.querySelectorAll(`[data-tree-answer]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-tree-answer`);e.playClick(),n===`auth-yes`?L.answers.authorized=!0:n===`auth-no`?(L.answers.authorized=!1,L.answers.legitimate=null,L.answers.logicBug=null):n===`legit-yes`?(L.answers.legitimate=!0,r.completeCheckpoint(`check-fp-classified`,50,`Mastered Benign Positive Classification`),e.playSuccess()):n===`legit-no`?(L.answers.legitimate=!1,L.answers.logicBug=null):n===`logic-yes`?L.answers.logicBug=!0:n===`logic-no`&&(L.answers.logicBug=!1);let i=document.getElementById(`fp-tree-container`);i&&(i.innerHTML=R(),z())})});let t=document.getElementById(`btn-tree-reset`);t&&t.addEventListener(`click`,()=>{L={step:1,answers:{authorized:null,legitimate:null,logicBug:null},outcome:null},e.playClick();let t=document.getElementById(`fp-tree-container`);t&&(t.innerHTML=R(),z())})}function be(){return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${d(`topic-4`)}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-demo">TOPIC 04 • 10:45 AM</span>
          <span class="mono-data">SIGNAL VS NOISE TAXONOMY</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          Looks suspicious. <span class="gradient-text-cyan">But is it?</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid var(--warning); margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #fde047; margin-bottom: 0.4rem; text-transform: uppercase;">
            ANALYST AWARENESS • 10:45 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "A novice analyst sees 18 failed logins and immediately yells <em>'HACKER!'</em>. 
            A seasoned SOC Analyst knows that <strong>not every alert is malicious</strong>. 
            In fact, the majority of enterprise security alerts fall into three distinct non-malicious categories: 
            <strong>Expected Activity, Benign Activity, or Detection Error.</strong>"
          </p>
        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 1: EXPECTED ACTIVITY (TYPE A)
           =================================================================== -->
      <section id="section-expected" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-demo">CATEGORY 01</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">AUTHORIZED TESTING</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Expected / Authorized Activity
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              This occurs when internal teams perform planned, authorized actions that intentionally test security perimeters or verify backup systems.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              <strong>Example:</strong> FinCorp’s internal Red Team conducts an authorized vulnerability scan from dedicated testing IP addresses during a scheduled maintenance window. The alert fired correctly, but the activity was pre-approved.
            </p>

            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-expected">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Verification Procedure [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Analyst Playbook</span>
              </div>
              <div id="tech-details-expected" class="tech-box-details" style="display: none;">
                <div>• Verify IP source against the approved Security Vulnerability Scanner whitelist.</div>
                <div>• Check ServiceNow / Jira Change Management calendar for approved testing windows.</div>
                <div>• Cross-reference Change Request # (CRQ) and close alert as <em>Expected Activity</em>.</div>
              </div>
            </div>
          </div>

          <div>
            ${ie()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 2: BENIGN ACTIVITY / CACHED CREDENTIALS (TYPE B)
           =================================================================== -->
      <section id="section-benign" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">CATEGORY 02</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #86efac;">THE FINCORP ROOT CAUSE</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Benign Activity (Cached Credentials)
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Benign positive alerts occur when harmless, legitimate software or user behavior triggers attack thresholds through an unintentional glitch or timing mismatch.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              <strong>The Finance01 Discovery:</strong> Priya Sharma updated her domain password at 10:15 AM. While away from her desk, her locked workstation ran background sync jobs for <strong>Microsoft Outlook and mapped network shares</strong> using the old cached password!
            </p>

            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-cached">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: Windows Credential Manager Mechanics [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">Root Cause</span>
              </div>
              <div id="tech-details-cached" class="tech-box-details" style="display: none;">
                <div>• Background services cache NTLM hashes in memory until the interactive lock screen is refreshed.</div>
                <div>• Outlook syncs via MAPI/RPC over HTTP every 15–30 seconds.</div>
                <div>• When Priya unlocked her console at 10:31:45 AM, Windows updated her cache, immediately terminating failures.</div>
              </div>
            </div>
          </div>

          <div>
            ${ae()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 3: DETECTION ERROR (TYPE C)
           =================================================================== -->
      <section id="section-det-error" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-tech-box">CATEGORY 03</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #a5b4fc;">FLAWED RULE LOGIC</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              Detection Logic / Grouping Errors
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Sometimes the alert logic itself is flawed. A poorly configured SIEM rule might aggregate events globally across the enterprise instead of grouping by individual target user.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              <strong>Example:</strong> 10 different employees each mistype their password once at 9:00 AM on Monday morning. If the rule lacks a <span class="mono-data">groupBy: User</span> clause, it sums all 10 unrelated mistakes into one false alarm!
            </p>
          </div>

          <div>
            ${oe()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           INTERACTIVE DECISION TREE COMPONENT
           =================================================================== -->
      <section style="margin-bottom: 4rem;">
        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-scenario">PRACTICAL LAB INTERACTION</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-text);">BRANCH EXPLORATION</span>
          </div>

          <h2 style="font-size: 1.7rem; margin-bottom: 0.5rem; color: var(--text-bright);">
            Interactive False Positive Decision Tree
          </h2>

          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 820px; line-height: 1.6;">
            Click through the branching paths to see how a professional L1 analyst systematically rules out false positives before escalating to Tier 2.
          </p>
        </div>

        <div id="fp-tree-container">
          ${R()}
        </div>
      </section>

      <!-- QUICK CHECK QUIZ -->
      <section style="margin-bottom: 4rem;">
        <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.9); border: 1px solid rgba(139, 92, 246, 0.35);">
          <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-quiz">🧠 QUICK CHECK</span>
            <span style="font-size: 0.85rem; color: #d8b4fe; font-family: var(--font-mono);">STAGE 04 KNOWLEDGE CHECK</span>
          </div>
          <h3 style="font-size: 1.3rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Why did Case ALT-2026-9042 generate 18 failed login attempts for Priya Sharma?
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
            Synthesize your analysis of the root cause.
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 1.5rem;" id="quiz-t4-options">
            <div class="option-card" data-quiz-opt="a">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">A</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">A Russian APT group was executing a password spray against FinCorp Domain Controllers.</div>
            </div>
            <div class="option-card" data-quiz-opt="b">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">B</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">Background applications on her locked workstation repeatedly retried auth with old cached credentials after a password change.</div>
            </div>
            <div class="option-card" data-quiz-opt="c">
              <div style="width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--border-medium); display: flex; align-items: center; justify-content: center; font-size: 0.75rem; color: var(--text-muted);">C</div>
              <div style="font-size: 0.92rem; color: var(--text-bright);">Her computer was infected with crypto-mining malware attempting to propagate laterally.</div>
            </div>
          </div>

          <div id="quiz-t4-feedback" style="display: none; padding: 1rem; border-radius: 8px; font-size: 0.9rem;"></div>
        </div>
      </section>

      <!-- STORY TRANSITION TO TOPIC 5 -->
      <section style="text-align: center;">
        <button id="btn-goto-severity" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem;">
          PROCEED TO TOPIC 05: SEVERITY & RESOLUTION →
        </button>
      </section>

    </div>
  `}function xe(){z(),document.querySelectorAll(`[data-toggle-details]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-toggle-details`),r=document.getElementById(n);if(r){let t=r.style.display===`none`;r.style.display=t?`block`:`none`,e.playClick()}})});let t=document.querySelectorAll(`#quiz-t4-options .option-card`),n=document.getElementById(`quiz-t4-feedback`);t.forEach(i=>{i.addEventListener(`click`,i=>{let a=i.currentTarget.getAttribute(`data-quiz-opt`);t.forEach(e=>e.classList.remove(`selected-correct`,`selected-wrong`)),a===`b`?(i.currentTarget.classList.add(`selected-correct`),e.playSuccess(),r.recordQuizScore(`topic-4`,100),r.completeCheckpoint(`t4-quiz`,50,`Mastered Cached Credential Diagnosis`),n&&(n.style.display=`block`,n.style.background=`rgba(16, 185, 129, 0.15)`,n.style.border=`1px solid var(--success)`,n.style.color=`#a7f3d0`,n.innerHTML=`
            <strong>Brilliant Analysis! (+50 XP)</strong> You correctly identified the root cause of the burst: background sync applications (Outlook/Teams) retrying with pre-reset credentials. This is one of the most common benign positive alerts in corporate IT!
          `)):(i.currentTarget.classList.add(`selected-wrong`),e.playError(),n&&(n.style.display=`block`,n.style.background=`rgba(245, 158, 11, 0.15)`,n.style.border=`1px solid var(--warning)`,n.style.color=`#fde68a`,n.innerHTML=`
            <strong>Incorrect.</strong> Remember: The failures occurred on her own private workstation (FIN-PC-04) immediately following her 10:15 AM password change, and stopped as soon as she unlocked her screen.
          `))})});let i=document.getElementById(`btn-goto-severity`);i&&i.addEventListener(`click`,()=>{e.playClick(),r.completeTopic(`topic-4`),r.navigate(`topic-5`)})}var B={assetTier:2,userPrivilege:1,threatLikelihood:2,scopeExposure:1};function Se(){let e=B.assetTier*1.5+B.userPrivilege*1.5+B.threatLikelihood*2+B.scopeExposure*1,t=Math.min(10,Math.max(1,e/18*10)).toFixed(1),n=`LOW`,r=`var(--success)`,i=`25%`;return t>=8.5?(n=`CRITICAL`,r=`var(--danger)`,i=`100%`):t>=6.5?(n=`HIGH`,r=`#f97316`,i=`75%`):t>=4?(n=`MEDIUM`,r=`#fbbf24`,i=`50%`):(n=`LOW`,r=`var(--success)`,i=`25%`),`
    <div style="margin: 2rem 0;">
      <div class="glass-panel" style="padding: 2rem; background: rgba(12, 18, 35, 0.9); border: 1px solid rgba(56, 189, 248, 0.35);">
        
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
                <button class="btn ${B.assetTier===e.val?`btn-primary`:`btn-secondary`}" data-matrix-param="assetTier" data-val="${e.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
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
                <button class="btn ${B.userPrivilege===e.val?`btn-primary`:`btn-secondary`}" data-matrix-param="userPrivilege" data-val="${e.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
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
                <button class="btn ${B.threatLikelihood===e.val?`btn-primary`:`btn-secondary`}" data-matrix-param="threatLikelihood" data-val="${e.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
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
                <button class="btn ${B.scopeExposure===e.val?`btn-primary`:`btn-secondary`}" data-matrix-param="scopeExposure" data-val="${e.val}" style="font-size: 0.78rem; padding: 0.4rem; justify-content: flex-start;">
                  ${e.label}
                </button>
              `).join(``)}
            </div>
          </div>

        </div>

        <!-- Case Insight Box -->
        <div style="background: rgba(56, 189, 248, 0.05); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 8px; padding: 1.25rem;">
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
  `}function Ce(){document.querySelectorAll(`[data-matrix-param]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-matrix-param`),i=parseInt(t.currentTarget.getAttribute(`data-val`),10);if(n&&!isNaN(i)){B[n]=i,e.playSubtleTick(),r.completeCheckpoint(`check-severity-calculated`,25,`Explored Dynamic Severity Matrix`);let t=document.getElementById(`severity-matrix-container`);t&&(t.innerHTML=Se(),Ce())}})})}var we=`low`;function Te(){return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${d(`topic-5`)}

      <!-- TOPIC HERO -->
      <section style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; gap: 0.65rem; margin-bottom: 0.75rem;">
          <span class="genz-badge badge-scenario">TOPIC 05 • 10:52 AM</span>
          <span class="mono-data">DYNAMIC SEVERITY & RESOLUTION</span>
        </div>

        <h1 style="margin-bottom: 1rem;">
          How serious <span class="gradient-text-cyan">is it?</span>
        </h1>

        <div class="glass-panel" style="padding: 1.5rem 2rem; background: rgba(10, 16, 31, 0.85); border-left: 4px solid #fbbf24; margin-bottom: 2rem;">
          <div style="font-family: var(--font-mono); font-size: 0.8rem; color: #fbbf24; margin-bottom: 0.4rem; text-transform: uppercase;">
            ANALYST METHODOLOGY • 10:52 AM EST
          </div>
          <p style="font-size: 1.05rem; color: var(--text-bright); line-height: 1.65;">
            "Static rules assign generic severity labels. But in the real world, <strong>severity is context-driven</strong>. 
            An alert’s true operational priority depends on the context of the asset, the user's role, and whether the threat is confirmed or benign."
          </p>
        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 1: THE VISUAL SEVERITY SCALE (LOW TO CRITICAL)
           =================================================================== -->
      <section id="section-severity-scale" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-key-idea">SUBTOPIC 01</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">DYNAMIC RISK CALCULUS</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              The Visual Severity Scale
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              Avoid memorizing rigid numerical formulas. Instead, understand how operational context moves an alert along the severity spectrum:
            </p>

            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1.25rem;">
              <li>• <strong style="color: #10b981;">LOW:</strong> Known user, expected activity, benign glitch, single workstation (Our Finance01 case!).</li>
              <li>• <strong style="color: #fbbf24;">MEDIUM:</strong> Repeated anomalies, single machine, unexpected timing, external origin.</li>
              <li>• <strong style="color: #f97316;">HIGH:</strong> Lateral movement, privileged credentials (Domain Admin), multi-system impact.</li>
              <li>• <strong style="color: #f43f5e;">CRITICAL:</strong> Active ransomware propagation, Domain Controller breach, mass data exfiltration.</li>
            </ul>

            <div class="tech-box-collapsible">
              <div class="tech-box-header" data-toggle-details="tech-details-sla">
                <span style="font-size: 0.78rem; font-weight: 700; color: var(--violet-primary);">🧩 TECH BOX: SLA Response Windows [Details ▾]</span>
                <span style="font-size: 0.7rem; color: var(--text-muted);">FinCorp Policy</span>
              </div>
              <div id="tech-details-sla" class="tech-box-details" style="display: none;">
                <div>• <strong>Critical (P1):</strong> 15 minutes response / 1 hour containment.</div>
                <div>• <strong>High (P2):</strong> 30 minutes response / 4 hours containment.</div>
                <div>• <strong>Medium (P3):</strong> 1 hour response / 1 business day resolution.</div>
                <div>• <strong>Low (P4):</strong> 4 hours response / Close as False Positive when documented.</div>
              </div>
            </div>
          </div>

          <div id="severity-scale-container">
            ${se(we)}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           SUBTOPIC 2: COMPLETE FINCORP INVESTIGATION REPLAY
           =================================================================== -->
      <section id="section-case-replay" style="margin-bottom: 4rem;">
        <div class="learning-grid">
          
          <div class="learning-content">
            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
              <span class="genz-badge badge-try-it">SUBTOPIC 02</span>
              <span style="font-family: var(--font-mono); font-size: 0.75rem; color: #86efac;">THE MODULE SYNTHESIS</span>
            </div>

            <h2 style="font-size: 1.7rem; margin-bottom: 0.75rem; color: var(--text-bright);">
              The Complete Investigation Replay
            </h2>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1rem;">
              You have traced the Finance01 alert from the initial packet arrival to final root cause analysis.
            </p>

            <p style="font-size: 0.96rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 1.25rem;">
              The evidence is conclusive: <strong>Priya Sharma changed her password $\rightarrow$ Outlook background sync looped with cached credentials $\rightarrow$ 18 failures $\rightarrow$ Console unlocked $\rightarrow$ Session restored.</strong>
            </p>

            <div style="padding: 0.85rem 1rem; background: rgba(16, 185, 129, 0.1); border-left: 3px solid var(--success); border-radius: 6px; font-size: 0.88rem; color: #a7f3d0;">
              <strong>Final Analyst Action:</strong> Downgrade to <strong>LOW SEVERITY</strong>, link the Helpdesk Password Reset ticket, record closing notes in the Case record, and guide Priya to refresh Windows Credential Manager.
            </div>
          </div>

          <div>
            ${ce()}
          </div>

        </div>
      </section>

      <!-- ===================================================================
           INTERACTIVE SEVERITY MATRIX GAUGE
           =================================================================== -->
      <section style="margin-bottom: 4rem;">
        <div style="margin-bottom: 1.5rem;">
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
            <span class="genz-badge badge-try-it">LIVE RISK CALCULATOR</span>
            <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--cyan-text);">VARIABLE SIMULATOR</span>
          </div>

          <h2 style="font-size: 1.7rem; margin-bottom: 0.5rem; color: var(--text-bright);">
            Interactive Severity Matrix
          </h2>

          <p style="font-size: 0.95rem; color: var(--text-secondary); max-width: 820px; line-height: 1.6;">
            Adjust the Impact and Likelihood variables below to see how changes in asset tier or attacker success dynamically re-score the alert.
          </p>
        </div>

        <div id="severity-matrix-container">
          ${Se()}
        </div>
      </section>

      <!-- FINAL CAPSTONE CHALLENGE CALLOUT -->
      <section style="text-align: center;">
        <div class="glass-panel" style="padding: 2.5rem; max-width: 720px; margin: 0 auto; border-color: rgba(56, 189, 248, 0.35); background: linear-gradient(135deg, rgba(15, 23, 42, 0.9) 0%, rgba(20, 32, 58, 0.8) 100%);">
          <span class="genz-badge badge-challenge" style="margin-bottom: 0.75rem;">CAPSTONE SIMULATION</span>
          <h2 style="font-size: 1.85rem; font-weight: 800; color: var(--text-bright); margin-bottom: 0.75rem;">
            Ready for Your Final L1 Shift Challenge?
          </h2>
          <p style="font-size: 0.98rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1.75rem;">
            Put your knowledge to the ultimate test. Synthesize architecture, event telemetry, 7-tab alert triage, false positive logic, and severity scoring to graduate your shift and earn your <strong>FinCorp SOC Analyst L1 Certification</strong>!
          </p>
          <button id="btn-goto-final-challenge" class="btn btn-primary" style="font-size: 1.05rem; padding: 0.85rem 2.2rem;">
            START FINAL L1 CHALLENGE (TOPIC 06) →
          </button>
        </div>
      </section>

    </div>
  `}function Ee(){Ce(),document.querySelectorAll(`[data-toggle-details]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-toggle-details`),r=document.getElementById(n);if(r){let t=r.style.display===`none`;r.style.display=t?`block`:`none`,e.playClick()}})}),document.querySelectorAll(`[data-severity-lvl]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-severity-lvl`);if(n){we=n,e.playClick();let t=document.getElementById(`severity-scale-container`);t&&(t.innerHTML=se(we),Ee())}})});let t=document.getElementById(`btn-goto-final-challenge`);t&&t.addEventListener(`click`,()=>{e.playClick(),r.completeTopic(`topic-5`),r.navigate(`topic-6`)})}var De={};(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e,t,n={},r=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(e=function(e){var t=Math.random();return n[t]=requestAnimationFrame(function i(a){r===a||r+16-1<a?(r=a,delete n[t],e()):n[t]=requestAnimationFrame(i)}),t},t=function(e){n[e]&&cancelAnimationFrame(n[e])}):(e=function(e){return setTimeout(e,16)},t=function(e){return clearTimeout(e)}),{frame:e,cancel:t}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function ee(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function te(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function E(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(ae(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):ee(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function ne(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&(a.width!==i.width||a.height!==i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return E(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function re(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],ee=e.width*C.x,E=e.height*C.y;w--;)T.push(te({x:ee,y:E,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=ne(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var D;function ie(){return D||=re(null,{useWorker:!0,resize:!0}),D}function ae(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function oe(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function se(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return ie().apply(this,arguments)},n.exports.reset=function(){ie().reset()},n.exports.create=re,n.exports.shapeFromPath=oe,n.exports.shapeFromText=se})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),De,!1);var Oe=De.exports;De.exports.create;var V={activeStep:1,queryExecuted:!1,ticketFound:!1,selectedHypothesis:null,documentationDrafted:!1,finalDisposition:null,score:0,completed:!1,customNotes:`CASE ALT-2026-9042 INVESTIGATION REPORT
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
Benign Positive (False Positive - Cached Credentials). No security escalation required.`};function ke(){return r.state.finalChallenge.completed||V.completed,`
    <div style="margin: 2rem 0;">
      <!-- Challenge Progress Steps -->
      <div class="glass-panel" style="padding: 1.25rem 2rem; margin-bottom: 1.5rem; background: rgba(10, 16, 31, 0.85); border-color: rgba(56, 189, 248, 0.3);">
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
              <div style="padding: 0.3rem 0.6rem; border-radius: 4px; background: ${V.activeStep===e.n?`var(--cyan-subtle)`:`rgba(255,255,255,0.03)`}; border: 1px solid ${V.activeStep===e.n?`var(--cyan-primary)`:`var(--border-subtle)`}; color: ${V.activeStep===e.n?`var(--cyan-primary)`:`var(--text-muted)`}; font-weight: ${V.activeStep===e.n?`700`:`400`};">
                0${e.n} ${e.label}
              </div>
            `).join(``)}
          </div>
        </div>
      </div>

      <!-- Main Challenge Stage Container -->
      <div class="glass-panel" style="padding: 2.25rem; background: rgba(12, 18, 36, 0.95); border: 1px solid rgba(56, 189, 248, 0.35); min-height: 480px;">
        ${Ae()}
      </div>
    </div>
  `}function Ae(){switch(V.activeStep){case 1:return`
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

          ${V.queryExecuted?`
            <div class="animate-fade-in-up" style="background: rgba(56, 189, 248, 0.04); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 8px; padding: 1.25rem; margin-bottom: 1.5rem;">
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

          ${V.ticketFound?`
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
            ${[{id:`hyp-a`,title:`Hypothesis A: External Credential Stuffing / Brute Force Attack`,desc:`An external threat actor is guessing passwords against Jane’s account over the Internet.`,isCorrect:!1,feedback:`Incorrect. The source IP (10.10.20.15) is Jane’s own internal laptop, caller processes were legitimate Outlook/SMB, and the attempts stopped when Jane entered her new password at her desk.`},{id:`hyp-b`,title:`Hypothesis B: Malware Lateral Movement Infection`,desc:`A worm or trojan is utilizing compromised credentials to spread to other corporate hosts.`,isCorrect:!1,feedback:`Incorrect. EDR process tree on FIN-PC-04 is completely clean with 0 unsigned binaries, and network traffic never left internal Exchange/SMB.`},{id:`hyp-c`,title:`Hypothesis C: Benign Cached Credential Storm Following Password Reset`,desc:`Workstation applications attempted authentication using an outdated cached token following a recent password reset, resolved when user entered updated credentials.`,isCorrect:!0,feedback:`Spot on! This perfectly matches every single piece of evidence: Ticket #IT-94821, Outlook process caller, 0xC000006A wrong password code, and the 10:31:45 4624 success!`}].map(e=>{let t=V.selectedHypothesis===e.id,n=`option-card`;return t&&(n+=e.isCorrect?` selected-correct`:` selected-wrong`),`
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

          ${V.selectedHypothesis===`hyp-c`?`
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
            <textarea id="challenge-report-text" style="width: 100%; height: 260px; background: rgba(6, 10, 20, 0.9); border: 1px solid var(--border-medium); border-radius: 8px; color: var(--cyan-text); font-family: var(--font-mono); font-size: 0.85rem; padding: 1.25rem; line-height: 1.6; resize: vertical;">${V.customNotes}</textarea>
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
            ${[{id:`disp-close-benign`,title:`Close as Benign Positive (False Positive - Cached Credential)`,badge:`CORRECT DISPOSITION`,badgeClass:`badge-try-it`,desc:`Case documented with Ticket #IT-94821 and Event 4624 evidence. User guided to refresh Windows Credential Manager if failures recur. Alert closed without unnecessary escalation.`,isCorrect:!0},{id:`disp-escalate-l2`,title:`Escalate to Tier 2 Incident Response Team (SEV-2 Incident)`,badge:`UNJUSTIFIED ESCALATION`,badgeClass:`badge-alert`,desc:`Declaring an enterprise security incident and passing to Tier 2 without root cause justification wastes precious IR resources on a harmless password change.`,isCorrect:!1},{id:`disp-silent-close`,title:`Silently Close Alert with No Notes or Documentation`,badge:`COMPLIANCE VIOLATION`,badgeClass:`badge-challenge`,desc:`Closing alerts without an audit trail violates SOC compliance policies (SOC2, ISO 27001) and blinds team members if subsequent attacks occur.`,isCorrect:!1}].map(e=>{let t=V.finalDisposition===e.id,n=`option-card`;return t&&(n+=e.isCorrect?` selected-correct`:` selected-wrong`),`
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

          ${V.finalDisposition===`disp-close-benign`?`
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
      `;default:return``}}function je(){let t=document.getElementById(`btn-run-query`);t&&t.addEventListener(`click`,()=>{V.queryExecuted=!0,e.playSuccess(),r.completeCheckpoint(`check-challenge-query`,30,`Executed SIEM Telemetry Query`),H()});let n=document.getElementById(`btn-next-step-2`);n&&n.addEventListener(`click`,()=>{V.activeStep=2,e.playClick(),H()});let i=document.getElementById(`btn-search-tickets`);i&&i.addEventListener(`click`,()=>{V.ticketFound=!0,e.playSuccess(),r.completeCheckpoint(`check-challenge-ticket`,30,`Correlated Service Desk Ticket`),H()});let a=document.getElementById(`btn-next-step-3`);a&&a.addEventListener(`click`,()=>{V.activeStep=3,e.playClick(),H()}),document.querySelectorAll(`[data-hyp-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-hyp-id`),i=t.currentTarget.getAttribute(`data-correct`)===`true`;V.selectedHypothesis=n,i?(e.playSuccess(),r.completeCheckpoint(`check-challenge-hyp`,40,`Identified Cached Credential Hypothesis`)):e.playClick(),H()})});let o=document.getElementById(`btn-next-step-4`);o&&o.addEventListener(`click`,()=>{V.activeStep=4,e.playClick(),H()});let s=document.getElementById(`challenge-report-text`);s&&s.addEventListener(`input`,e=>{V.customNotes=e.target.value});let c=document.getElementById(`btn-next-step-5`);c&&c.addEventListener(`click`,()=>{s&&(V.customNotes=s.value),V.activeStep=5,e.playClick(),H()}),document.querySelectorAll(`[data-disp-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-disp-id`),r=t.currentTarget.getAttribute(`data-correct`)===`true`;V.finalDisposition=n,r?e.playSuccess():e.playClick(),H()})});let l=document.getElementById(`btn-submit-challenge`);l&&l.addEventListener(`click`,()=>{V.activeStep=6,V.completed=!0,V.score=100,r.submitFinalChallenge({score:100,classification:`Benign Positive (False Positive - Cached Credential)`,recommendation:`Instruct user to purge Windows Credential Manager; close alert with Ticket #IT-94821 reference.`,notes:V.customNotes}),Oe({particleCount:120,spread:80,origin:{y:.6}}),H()});let u=document.getElementById(`btn-open-certificate`);u&&u.addEventListener(`click`,()=>{let e=document.getElementById(`certificate-modal-container`);e&&(e.style.display=`flex`)})}function H(){let e=document.getElementById(`final-challenge-container`);e&&(e.innerHTML=ke(),je())}function Me(){return`
    <div class="container animate-fade-in" style="padding-top: 1.5rem; padding-bottom: 5rem;">
      
      <!-- Module Progression Track -->
      ${d(`topic-6`)}

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
          ${ke()}
        </div>
      </section>

    </div>
  `}function Ne(){je()}var U=[{id:4625,name:`An account failed to log on`,category:`Logon / Logoff`,criticality:`Medium - High`,description:`Generated when a logon request fails. Critical for spotting password spraying, brute force attacks, account lockouts, or cached credential mismatches.`,keyFields:[`TargetUserName`,`WorkstationName`,`IpAddress`,`LogonType`,`Status`,`SubStatus`,`ProcessName`],fincorpContext:`Generated 18 times on FIN-PC-04 between 10:30:01 and 10:31:25 with substatus 0xC000006A (bad password).`},{id:4624,name:`An account was successfully logged on`,category:`Logon / Logoff`,criticality:`Informational`,description:`Generated when a logon session is successfully created. Documents who logged on, from where, and how (console, network share, RDP).`,keyFields:[`TargetUserName`,`TargetDomainName`,`LogonType`,`IpAddress`,`ElevatedToken`],fincorpContext:`Generated at 10:31:45 AM for Finance01 with Logon Type 2 (Interactive console logon). Proves Jane arrived and logged in successfully.`},{id:4672,name:`Special privileges assigned to new logon`,category:`Privilege Use`,criticality:`Medium`,description:`Generated when an account with administrative or super-user privileges (e.g. SeDebugPrivilege, SeBackupPrivilege) logs on.`,keyFields:[`SubjectUserName`,`PrivilegeList`],fincorpContext:`Checked during triage: Not present in Finance01 session, confirming no administrative privilege escalation.`},{id:4720,name:`A user account was created`,category:`Account Management`,criticality:`High`,description:`Indicates the provisioning of a new domain or local identity. Monitored closely for rogue backdoor accounts created by attackers.`,keyFields:[`TargetUserName`,`SubjectUserName`],fincorpContext:`No rogue account creations detected in FinCorp Active Directory today.`},{id:4740,name:`A user account was locked out`,category:`Account Management`,criticality:`Medium`,description:`Triggered when the account lockout threshold is exceeded (e.g. 5 or 10 bad attempts). Can cause business disruption or signal automated brute force.`,keyFields:[`TargetUserName`,`CallerComputerName`],fincorpContext:`FinCorp threshold is set to 25 attempts; Finance01 reached 18 failures before successful login, narrowly avoiding lockout.`},{id:7045,name:`A new service was installed in the system`,category:`System / Service Control`,criticality:`High`,description:`System log event generated when a Windows Service is registered. Often used by malware (e.g. PsExec, ransomware) for persistence and execution.`,keyFields:[`ServiceName`,`ImagePath`,`ServiceType`,`AccountName`],fincorpContext:`Checked on FIN-PC-04: No newly installed services in the last 72 hours.`}],Pe=[{type:2,name:`Interactive`,description:`A user logged on directly at the local physical keyboard/console or virtual machine console.`,example:`Jane sitting at her laptop desk typing her password at the Windows lock screen.`,significance:`Confirms physical or console presence. Event #19 at 10:31:45 was Type 2.`},{type:3,name:`Network`,description:`A connection made to this computer from the network (e.g. accessing a shared folder, printer, IIS web server, or background Kerberos auth).`,example:`Outlook sync, Microsoft Teams token refresh, or accessing \\\\fs01\\finance.`,significance:`Events #1 through #17 were Type 3 network connections triggered automatically by background software.`},{type:4,name:`Batch`,description:`A scheduled task or batch job executing on behalf of a user.`,example:`Task Scheduler running a night-time backup script.`,significance:`Common source of recurring authentication failures when script credentials expire.`},{type:5,name:`Service`,description:`A background Windows service configured to start under a specific service account.`,example:`SQL Server service running under svc-sql account.`,significance:`If service password changes in AD without updating services.msc, rapid 4625 storms occur.`},{type:7,name:`Unlock`,description:`The workstation was previously locked and an authorized user entered credentials to unlock it.`,example:`Returning from a coffee break and pressing Win+L to unlock.`,significance:`Helps establish user physical workstation activity timeline.`},{type:10,name:`RemoteInteractive (RDP)`,description:`A user logged on remotely via Terminal Services, Remote Desktop Protocol (mstsc.exe), or Citrix.`,example:`System administrator RDPing into a remote server or attacker using stolen credentials over port 3389.`,significance:`Crucial for spotting external unauthorized remote access.`}],Fe=[{code:`0xC000006A`,meaning:`STATUS_WRONG_PASSWORD`,plainText:`User name is correct, but password was incorrect.`,analystInsight:`Crucial distinction! The attacker (or background app) knows the exact valid username, but the password provided was wrong. Highly indicative of cached credentials or password guessing.`},{code:`0xC0000064`,meaning:`STATUS_NO_SUCH_USER`,plainText:`The specified account does not exist in the directory.`,analystInsight:`Suggests username harvesting, dictionary attacks, or typos in username.`},{code:`0xC000006D`,meaning:`STATUS_LOGON_FAILURE`,plainText:`The attempted logon is invalid due to bad credentials.`,analystInsight:`Top-level status code indicating authentication rejection.`},{code:`0xC0000234`,meaning:`STATUS_ACCOUNT_LOCKED_OUT`,plainText:`User account has exceeded the max failed attempts and is locked.`,analystInsight:`High impact. User will be unable to log in until unlocked by IT or lockout duration expires.`},{code:`0xC0000071`,meaning:`STATUS_PASSWORD_EXPIRED`,plainText:`User password has expired per domain group policy.`,analystInsight:`User needs to change password via AD self-service or IT Helpdesk.`}],Ie=[{step:`1. Identify the User (Who)`,checks:[`What is the user’s role and department? (e.g. Finance Analyst vs Domain Admin)`,`Is the account active, disabled, or service account?`,`Has the user recently changed their password or requested IT assistance?`,`Is the user traveling, on leave, or working regular business hours?`]},{step:`2. Identify the Host (Where)`,checks:[`Is the host a shared workstation, personal laptop, or critical production server?`,`What is the asset criticality tier? (Tier 0 Domain Controller vs Tier 2 Workstation)`,`Is the EDR agent online and reporting healthy telemetry?`,`Are there signs of unauthorized tools or command execution?`]},{step:`3. Identify the Network & Source IP (From Where)`,checks:[`Is the source IP internal (RFC 1918) or public internet?`,`Does the source IP match the user’s assigned workstation DHCP lease?`,`If external, what is the IP geo-location, ASN, and reputation score on VirusTotal / AbuseIPDB?`,`Is the connection routing through corporate VPN or an anonymous proxy?`]},{step:`4. Build the Evidence Timeline (When & How)`,checks:[`What was the frequency of the attempts? (Rapid automated loop vs sporadic human typos)`,`What process initiated the requests? (outlook.exe vs powershell.exe vs python.exe)`,`What was the outcome? Did failures continue indefinitely, or did a successful logon occur?`,`Were there secondary events? (e.g. account lockouts, privilege escalation, file downloads)`]},{step:`5. Synthesize & Decide (What Next)`,checks:[`Does this match an Expected Activity (planned test)?`,`Does this match a Benign Activity (outdated cached credential)?`,`Does this indicate a Detection Error (faulty SIEM aggregation)?`,`Or is this a True Positive requiring immediate containment and L2 escalation?`]}],Le=[{term:`SIEM`,definition:`Security Information and Event Management: A centralized software platform that aggregates, correlates, and analyzes security logs from throughout an entire enterprise.`},{term:`EDR`,definition:`Endpoint Detection and Response: Endpoint security software that continuously monitors host activities (processes, network connections, file modifications) to detect and isolate threats.`},{term:`SOAR`,definition:`Security Orchestration, Automation, and Response: Platforms that automate repetitive analyst tasks, integrate security tools, and manage the lifecycle of security incidents.`},{term:`True Positive (TP)`,definition:`An alert that correctly identifies an actual security threat or unauthorized attack activity requiring intervention.`},{term:`False Positive (FP)`,definition:`An alert generated for benign, authorized, or harmless activity that was mistakenly flagged as potentially malicious.`},{term:`Benign Positive (BP)`,definition:`Activity that correctly matched the detection logic (e.g. 10 failed logins indeed happened), but the underlying cause is confirmed harmless business behavior (e.g. expired cached token).`},{term:`IOC (Indicator of Compromise)`,definition:`Forensic evidence of an intrusion, such as a known malicious IP address, malware hash (SHA256), phishing domain, or registry key.`},{term:`TTP (Tactics, Techniques & Procedures)`,definition:`The behavior patterns, methods, and attack strategies utilized by cyber threat actors, organized comprehensively in frameworks like MITRE ATT&CK.`},{term:`MTTD (Mean Time to Detect)`,definition:`The average duration elapsed between an adversary entering or executing an action in the environment and the SOC generating an alert.`},{term:`MTTR (Mean Time to Respond)`,definition:`The average duration taken by the SOC team to triage, investigate, contain, and remediate a detected security incident.`},{term:`RFC 1918 Private IP`,definition:`Standard IP ranges reserved exclusively for private internal networks: 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. They cannot be routed directly over the public Internet.`}],W=`siem`,G=``,K=``,q=4625;function Re(){return`
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
            <button class="tab-btn ${W===e.id?`active`:``}" data-lab-id="${e.id}">
              ${e.title}
            </button>
          `).join(``)}
        </div>
      </section>

      <!-- Active Lab Content -->
      <section id="active-lab-content">
        ${ze()}
      </section>

    </div>
  `}function ze(){switch(W){case`siem`:return J();case`decoder`:return Be();case`matrix`:return`
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 1rem;">Dynamic Severity Matrix Sandbox</h2>
          <div id="severity-matrix-container">${Se()}</div>
        </div>
      `;case`fp`:return`
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 1rem;">False Positive Classifier Sandbox</h2>
          <div id="fp-tree-container">${R()}</div>
        </div>
      `;default:return``}}function J(){let e=p.events.filter(e=>{let t=!0;return G&&!e.user.toLowerCase().includes(G.toLowerCase())&&(t=!1),K&&e.eventId.toString()!==K&&(t=!1),t});return`
    <div class="glass-panel" style="padding: 2rem; background: rgba(12, 18, 36, 0.95); border: 1px solid rgba(56, 189, 248, 0.35);">
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
          <input type="text" id="siem-input-user" value="${G}" placeholder="e.g. Finance01" style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.55rem 0.85rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.85rem;" />
        </div>

        <div>
          <label style="display: block; font-size: 0.75rem; font-family: var(--font-mono); color: var(--text-muted); margin-bottom: 0.35rem;">FILTER EVENT ID</label>
          <input type="text" id="siem-input-event" value="${K}" placeholder="e.g. 4625 or 4624" style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.55rem 0.85rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.85rem;" />
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
  `}function Be(){let e=U.find(e=>e.id===q)||U[0];return`
    <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 1.5rem;">
      
      <!-- Event ID List -->
      <div class="glass-panel" style="padding: 1.5rem;">
        <div style="font-size: 0.75rem; font-family: var(--font-mono); color: var(--cyan-text); margin-bottom: 0.75rem;">
          SELECT WINDOWS EVENT ID TO DECODE
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.65rem;">
          ${U.map(e=>`
            <div class="glass-panel" data-decoder-id="${e.id}" style="padding: 1rem; cursor: pointer; border-color: ${e.id===q?`var(--cyan-primary)`:`var(--border-subtle)`}; background: ${e.id===q?`rgba(56, 189, 248, 0.08)`:`var(--bg-card)`};">
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
      <div class="glass-panel" style="padding: 2rem; background: rgba(14, 21, 38, 0.95); border-color: rgba(56, 189, 248, 0.35);">
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
            ${Fe.map(e=>`
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
  `}function Y(){if(document.querySelectorAll(`[data-lab-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-lab-id`);if(n){W=n,e.playClick();let t=document.getElementById(`view-container`);t&&(t.innerHTML=Re(),Y())}})}),W===`siem`){let t=document.getElementById(`siem-input-user`),n=document.getElementById(`siem-input-event`),r=document.getElementById(`btn-siem-reset`);t&&t.addEventListener(`input`,e=>{G=e.target.value;let t=document.getElementById(`active-lab-content`);t&&(t.innerHTML=J(),Y())}),n&&n.addEventListener(`input`,e=>{K=e.target.value;let t=document.getElementById(`active-lab-content`);t&&(t.innerHTML=J(),Y())}),r&&r.addEventListener(`click`,()=>{G=``,K=``,e.playClick();let t=document.getElementById(`active-lab-content`);t&&(t.innerHTML=J(),Y())})}W===`decoder`&&document.querySelectorAll(`[data-decoder-id]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=parseInt(t.currentTarget.getAttribute(`data-decoder-id`),10);if(!isNaN(n)){q=n,e.playClick();let t=document.getElementById(`active-lab-content`);t&&(t.innerHTML=Be(),Y())}})}),W===`matrix`&&Ce(),W===`fp`&&z()}var X=`logon`,Z=``;function Ve(){return`
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
              <button class="tab-btn ${X===e.id?`active`:``}" data-know-tab="${e.id}">
                ${e.title}
              </button>
            `).join(``)}
          </div>

          <div style="max-width: 320px; width: 100%;">
            <input type="text" id="know-search" value="${Z}" placeholder="Search knowledge..." style="width: 100%; background: rgba(0,0,0,0.4); border: 1px solid var(--border-medium); border-radius: 6px; padding: 0.55rem 1rem; color: var(--text-bright); font-family: var(--font-mono); font-size: 0.85rem;" />
          </div>
        </div>
      </section>

      <!-- Knowledge Content Area -->
      <section id="knowledge-tab-content">
        ${He()}
      </section>

    </div>
  `}function He(){switch(X){case`logon`:return`
        <div class="glass-panel" style="padding: 2rem;">
          <h2 style="font-size: 1.5rem; color: var(--text-bright); margin-bottom: 0.5rem;">
            Windows Logon Types (Audit Security Subsystem)
          </h2>
          <p style="font-size: 0.92rem; color: var(--text-secondary); margin-bottom: 1.5rem;">
            When inspecting Windows Event ID 4624 (Success) or 4625 (Failure), the <strong>LogonType</strong> integer reveals HOW the user or process attempted authentication.
          </p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.25rem;">
            ${Pe.map(e=>`
              <div class="glass-panel" style="padding: 1.5rem; border-color: ${e.type===2?`rgba(16, 185, 129, 0.4)`:e.type===3?`rgba(56, 189, 248, 0.3)`:`var(--border-subtle)`};">
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
            ${Ie.map(e=>`
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
            ${U.map(e=>`
              <div class="glass-panel" style="padding: 1.5rem;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <span class="event-id-badge ${e.id===4624?`event-id-4624`:`event-id-4625`}">ID ${e.id}</span>
                  <span class="mono-data">${e.criticality}</span>
                </div>
                <h4 style="font-size: 1.05rem; color: var(--text-bright); margin-bottom: 0.35rem;">${e.name}</h4>
                <p style="font-size: 0.85rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 0.75rem;">${e.description}</p>
                <div style="font-size: 0.78rem; color: var(--cyan-text); background: rgba(56, 189, 248,0.05); padding: 0.5rem; border-radius: 4px;">
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
            ${Le.filter(e=>!Z||e.term.toLowerCase().includes(Z.toLowerCase())||e.definition.toLowerCase().includes(Z.toLowerCase())).map(e=>`
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
      `;default:return``}}function Ue(){document.querySelectorAll(`[data-know-tab]`).forEach(t=>{t.addEventListener(`click`,t=>{let n=t.currentTarget.getAttribute(`data-know-tab`);if(n){X=n,e.playClick();let t=document.getElementById(`view-container`);t&&(t.innerHTML=Ve(),Ue())}})});let t=document.getElementById(`know-search`);t&&t.addEventListener(`input`,e=>{Z=e.target.value,X!==`glossary`&&(X=`glossary`);let t=document.getElementById(`knowledge-tab-content`);t&&(t.innerHTML=He(),Ue())})}function We(){let e=r.state,t=Math.min(100,Math.round(e.xp/1250*100)),n=e.completedTopics.length,i=Object.keys(e.completedCheckpoints).length;return`
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
            <div style="width: ${t}%; height: 100%; background: linear-gradient(90deg, #38bdf8, #818cf8);"></div>
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
            <div class="glass-panel" style="padding: 1.5rem; border-color: ${e.unlocked?`rgba(56, 189, 248, 0.35)`:`var(--border-subtle)`}; background: ${e.unlocked?`rgba(12, 20, 36, 0.9)`:`rgba(10, 14, 26, 0.4)`}; opacity: ${e.unlocked?`1`:`0.6`};">
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
              ${c.topics.map(t=>{let n=e.completedTopics.includes(t.id);return`
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
  `}function Q(){let e=r.state,t=e.finalChallenge.completed;return`
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
  `}function $(){let t=document.getElementById(`btn-save-profile`);t&&t.addEventListener(`click`,()=>{let t=document.getElementById(`input-callsign`)?.value||`Analyst L1`,n=document.getElementById(`input-name`)?.value||`FinCorp L1 Recruit`;r.updateProfile({callsign:t,analystName:n}),e.playSuccess(),r.showToast(`Analyst credentials successfully updated.`,`info`);let i=document.getElementById(`view-container`);i&&(i.innerHTML=Q(),$())});let n=document.getElementById(`btn-profile-sound-toggle`);n&&n.addEventListener(`click`,()=>{r.toggleSound();let e=document.getElementById(`view-container`);e&&(e.innerHTML=Q(),$())});let i=document.getElementById(`btn-test-click`);i&&i.addEventListener(`click`,()=>e.playClick());let a=document.getElementById(`btn-test-alert`);a&&a.addEventListener(`click`,()=>e.playAlert());let o=document.getElementById(`btn-test-fanfare`);o&&o.addEventListener(`click`,()=>e.playSuccess());let s=document.getElementById(`btn-reset-shift`);s&&s.addEventListener(`click`,()=>{if(confirm(`Are you sure you want to reset your shift progress? All XP and checkpoint progress will be cleared.`)){r.resetProgress();let e=document.getElementById(`view-container`);e&&(e.innerHTML=Q(),$())}});let c=document.getElementById(`btn-view-profile-cert`);c&&c.addEventListener(`click`,()=>{let e=document.getElementById(`certificate-modal-container`);e&&(e.style.display=`flex`)})}function Ge(){let e=r.state.currentView,t=document.getElementById(`header-container`);t&&(t.innerHTML=a(),Ke());let n=document.getElementById(`view-container`);if(n)switch(e){case`home`:n.innerHTML=u();break;case`course`:case`module-map`:n.innerHTML=f();break;case`current-scenario`:n.innerHTML=m();break;case`topic-1`:n.innerHTML=ue(),de();break;case`topic-2`:n.innerHTML=pe(),me();break;case`topic-3`:n.innerHTML=_e(),ve();break;case`topic-4`:n.innerHTML=be(),xe();break;case`topic-5`:n.innerHTML=Te(),Ee();break;case`topic-6`:n.innerHTML=Me(),Ne();break;case`labs`:n.innerHTML=Re(),Y();break;case`knowledge`:n.innerHTML=Ve(),Ue();break;case`progress`:n.innerHTML=We();break;case`profile`:n.innerHTML=Q(),$();break;default:n.innerHTML=u()}let i=document.getElementById(`modal-container`);i&&!document.getElementById(`certificate-modal-container`)&&(i.innerHTML=o(),s()),qe()}function Ke(){let e=document.getElementById(`btn-sound-toggle`);e&&e.addEventListener(`click`,()=>{r.toggleSound()})}function qe(){document.querySelectorAll(`[data-nav]`).forEach(e=>{e._navBound||(e._navBound=!0,e.addEventListener(`click`,e=>{let t=e.currentTarget.getAttribute(`data-nav`);if(t){if(t.startsWith(`topic-`)){let e=parseInt(t.replace(`topic-`,``),10);r.navigate(t,e)}else r.navigate(t)}}))})}document.addEventListener(`DOMContentLoaded`,()=>{new i(`cyber-canvas`),Ge(),r.subscribe(()=>{Ge()})});
//# sourceMappingURL=index-BE6Mw8SE.js.map