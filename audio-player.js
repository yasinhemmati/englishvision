// Audio player handler — attaches to .audio-bar elements with data-audio attribute
(function(){
  let currentAudio = null;
  let currentBar = null;
  
  function fmtTime(s){
    if (!isFinite(s)) return '0:00';
    const m = Math.floor(s/60);
    const sec = Math.floor(s%60);
    return m + ':' + (sec<10?'0':'') + sec;
  }
  
  function stopCurrent(){
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }
    if (currentBar) {
      currentBar.querySelector('.audio-play').innerHTML = '<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
      currentBar.querySelector('.audio-play').setAttribute('aria-label', 'پخش صوت');
      evMiniHide();
      const fill = currentBar.querySelector('.progress-fill');
      if (fill) fill.style.width = '0%';
    }
    currentAudio = null;
    currentBar = null;
  }
  
  function attachBar(bar){
    if (bar.dataset.audioReady) return;
    bar.dataset.audioReady = '1';
    
    const src = bar.dataset.audio;
    if (!src) {
      // No audio source - disable bar
      bar.classList.add('audio-bar-empty');
      const playBtn = bar.querySelector('.audio-play');
      if (playBtn) {
        playBtn.disabled = true;
        playBtn.title = 'فایل صوتی موجود نیست';
        playBtn.setAttribute('aria-label', 'فایل صوتی موجود نیست');
      }
      return;
    }
    
    const playBtn = bar.querySelector('.audio-play');
    if (playBtn) playBtn.setAttribute('aria-label', 'پخش صوت');
    const fill = bar.querySelector('.progress-fill');
    const progress = bar.querySelector('.progress');
    const time = bar.querySelector('.time');
    
    const audio = new Audio();
    audio.preload = 'none';
    audio.src = src;
    
    let loaded = false;
    let metaLoaded = false;
    
    // Load metadata only when user clicks play (lazy)
    function ensureMetadata() {
      if (!metaLoaded) {
        audio.preload = 'metadata';
        audio.load();
      }
    }
    
    audio.addEventListener('loadedmetadata', () => {
      loaded = true;
      metaLoaded = true;
      time.textContent = '0:00 / ' + fmtTime(audio.duration);
    });
    
    audio.addEventListener('error', () => {
      bar.classList.add('audio-bar-error');
      playBtn.disabled = true;
      playBtn.title = 'فایل صوتی یافت نشد';
      playBtn.setAttribute('aria-label', 'فایل صوتی یافت نشد');
      time.textContent = 'صدا موجود نیست';
    });
    
    audio.addEventListener('timeupdate', () => {
      if (!audio.duration) return;
      const pct = (audio.currentTime / audio.duration) * 100;
      fill.style.width = pct + '%';
      time.textContent = fmtTime(audio.currentTime) + ' / ' + fmtTime(audio.duration);
    });
    
    audio.addEventListener('ended', () => {
      playBtn.innerHTML = '<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
      playBtn.setAttribute('aria-label', 'پخش صوت');
      fill.style.width = '0%';
      audio.currentTime = 0;
      if (currentAudio === audio) { currentAudio = null; currentBar = null; evMiniHide(); }
    });
    
    playBtn.addEventListener('click', () => {
      ensureMetadata();
      if (audio.paused) {
        if (currentAudio && currentAudio !== audio) stopCurrent();
        audio.play().catch(() => {});
        currentAudio = audio;
        currentBar = bar;
        playBtn.innerHTML = '<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/></svg>';
        playBtn.setAttribute('aria-label', 'توقف صدا');
        evMiniShow(bar);
      } else {
        audio.pause();
        playBtn.innerHTML = '<svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>';
        playBtn.setAttribute('aria-label', 'پخش صوت');
        evMiniHide();
      }
    });
    
    // Click on progress to seek
    if (progress) {
      progress.style.cursor = 'pointer';
      progress.addEventListener('click', (e) => {
        if (!audio.duration) return;
        const rect = progress.getBoundingClientRect();
        // Account for RTL: click position from left
        const clickX = e.clientX - rect.left;
        const pct = clickX / rect.width;
        audio.currentTime = audio.duration * pct;
      });
    }
  }
  
  /* — EV: مینی‌پلیر چسبان (وقتی پخش‌کننده از دید خارج شد) + کلید Space — */
  let evMini = null;
  let evIO = null;
  function evEnsureMini(){
    if (evMini) return evMini;
    const st = document.createElement('style');
    st.textContent = '#evMiniPlayer{position:fixed;top:.65rem;left:50%;transform:translateX(-50%) translateY(-160%);z-index:300;display:flex;align-items:center;gap:.55rem;background:var(--primary,#1F3A5F);color:#fff;padding:.45rem .55rem .45rem .95rem;border-radius:99px;box-shadow:0 12px 30px -10px rgba(0,0,0,.45);transition:transform .3s;max-width:92vw}#evMiniPlayer.show{transform:translateX(-50%) translateY(0)}#evMiniPlayer .ev-mp-label{font-size:.78rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:46vw}#evMiniPlayer button{font-family:inherit;border:none;cursor:pointer;width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.18);color:#fff;font-size:.85rem;display:flex;align-items:center;justify-content:center;flex-shrink:0}';
    document.head.appendChild(st);
    evMini = document.createElement('div');
    evMini.id = 'evMiniPlayer';
    evMini.innerHTML = '<button class="ev-mp-btn" aria-label="توقف صدا">⏸</button><span class="ev-mp-label">در حال پخش صوت</span><button class="ev-mp-jump" aria-label="رفتن به پخش‌کننده">⤴</button>';
    document.body.appendChild(evMini);
    evMini.querySelector('.ev-mp-btn').addEventListener('click', () => {
      if (currentBar) currentBar.querySelector('.audio-play').click();
    });
    evMini.querySelector('.ev-mp-jump').addEventListener('click', () => {
      if (currentBar) currentBar.scrollIntoView({behavior:'smooth', block:'center'});
    });
    return evMini;
  }
  function evMiniShow(bar){
    const m = evEnsureMini();
    const act = document.querySelector('.sidebar-item.active .sidebar-text');
    const sec = act && act.childNodes[0] ? act.childNodes[0].textContent.trim() : '';
    m.querySelector('.ev-mp-label').textContent = 'در حال پخش' + (sec ? ' — ' + sec : '');
    if (evIO) evIO.disconnect();
    evIO = new IntersectionObserver((en) => {
      const vis = en[0] && en[0].isIntersecting;
      m.classList.toggle('show', !vis && currentAudio && !currentAudio.paused);
    });
    evIO.observe(bar);
  }
  function evMiniHide(){
    if (evMini) evMini.classList.remove('show');
    if (evIO) { evIO.disconnect(); evIO = null; }
  }
  document.addEventListener('keydown', (e) => {
    if (e.code !== 'Space') return;
    const t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.tagName === 'BUTTON' || t.isContentEditable)) return;
    if (currentAudio && currentBar) {
      e.preventDefault();
      currentBar.querySelector('.audio-play').click();
    }
  });

  function attachAll(){
    document.querySelectorAll('.audio-bar').forEach(attachBar);
  }
  
  // Initial attach
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachAll);
  } else {
    attachAll();
  }
  
  // Re-attach when content changes (tab switches, lesson loads etc)
  const observer = new MutationObserver(() => attachAll());
  if (document.body) observer.observe(document.body, {childList:true, subtree:true});
  else document.addEventListener('DOMContentLoaded', () => observer.observe(document.body, {childList:true, subtree:true}));
  
  // Expose globally for manual triggers
  window.attachAudioBars = attachAll;
})();
