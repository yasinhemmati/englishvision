/* ═══════════════════════════════════════════════
   ENGLISH VISION — TTS & Image Module
   Used across all grades (place at site root)
   ═══════════════════════════════════════════════ */

(function() {
  'use strict';

  // ──────────────────────────────────────────────
  // TTS (Text-to-Speech) using Web Speech API
  // ──────────────────────────────────────────────
  const TTS = {
    synth: window.speechSynthesis,
    currentUtterance: null,
    currentButton: null,
    voices: [],
    
    init() {
      if (!this.synth) return false;
      const loadVoices = () => {
        this.voices = this.synth.getVoices();
      };
      loadVoices();
      if (this.synth.onvoiceschanged !== undefined) {
        this.synth.onvoiceschanged = loadVoices;
      }
      return true;
    },
    
    // Pick best English voice (prefer en-US or en-GB)
    pickVoice() {
      if (!this.voices.length) this.voices = this.synth.getVoices();
      // Priority: en-US female > en-US > en-GB > any en
      return this.voices.find(v => v.lang === 'en-US' && /female|samantha|allison|ava/i.test(v.name)) ||
             this.voices.find(v => v.lang === 'en-US') ||
             this.voices.find(v => v.lang === 'en-GB') ||
             this.voices.find(v => v.lang.startsWith('en')) ||
             null;
    },
    
    stop() {
      if (this.synth.speaking) this.synth.cancel();
      if (this.currentButton) {
        this.currentButton.classList.remove('tts-speaking');
        this.currentButton = null;
      }
      this.currentUtterance = null;
    },
    
    speak(text, button) {
      if (!this.synth) {
        this.showFallback(button);
        return;
      }
      
      // If clicking the same button while speaking, stop
      if (this.currentButton === button && this.synth.speaking) {
        this.stop();
        return;
      }
      
      this.stop();
      
      const utter = new SpeechSynthesisUtterance(text);
      utter.lang = 'en-US';
      utter.rate = 0.9;
      utter.pitch = 1;
      utter.volume = 1;
      
      const voice = this.pickVoice();
      if (voice) utter.voice = voice;
      
      utter.onstart = () => {
        if (button) button.classList.add('tts-speaking');
      };
      utter.onend = () => {
        if (button) button.classList.remove('tts-speaking');
        if (this.currentButton === button) this.currentButton = null;
      };
      utter.onerror = () => {
        if (button) button.classList.remove('tts-speaking');
      };
      
      this.currentUtterance = utter;
      this.currentButton = button;
      this.synth.speak(utter);
    },
    
    showFallback(button) {
      if (!button) return;
      const original = button.title || '';
      button.title = 'مرورگر شما از TTS پشتیبانی نمی‌کند';
      setTimeout(() => { button.title = original; }, 2000);
    }
  };
  
  TTS.init();
  
  // Speaker SVG icon
  const speakerSVG = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
  
  // ──────────────────────────────────────────────
  // Attach TTS to buttons with data-tts attribute
  // ──────────────────────────────────────────────
  function attachTTSButtons(root) {
    root = root || document;
    const buttons = root.querySelectorAll('.tts-btn[data-tts]:not([data-tts-attached])');
    buttons.forEach(btn => {
      btn.setAttribute('data-tts-attached', '1');
      if (!btn.innerHTML.trim()) btn.innerHTML = speakerSVG;
      btn.setAttribute('title', btn.getAttribute('title') || 'تلفظ بشنو');
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const text = btn.getAttribute('data-tts');
        if (text) TTS.speak(text, btn);
      });
    });
  }
  
  // ──────────────────────────────────────────────
  // Image lazy-load with skeleton + error handling
  // ──────────────────────────────────────────────
  function attachImages(root) {
    root = root || document;
    const boxes = root.querySelectorAll('.img-box[data-src]:not([data-img-attached])');
    boxes.forEach(box => {
      box.setAttribute('data-img-attached', '1');
      const src = box.getAttribute('data-src');
      const alt = box.getAttribute('data-alt') || '';
      
      if (!src) {
        box.classList.add('img-error');
        box.classList.remove('img-loading');
        box.innerHTML = '<div style="padding:1.5rem">عکس موجود نیست</div>';
        return;
      }
      
      box.classList.add('img-loading');
      const img = new Image();
      img.alt = alt;
      img.onload = () => {
        box.classList.remove('img-loading');
        const caption = box.querySelector('.img-caption');
        box.innerHTML = '';
        box.appendChild(img);
        if (caption) box.appendChild(caption);
      };
      img.onerror = () => {
        box.classList.remove('img-loading');
        box.classList.add('img-error');
        box.innerHTML = `<div style="padding:1rem;text-align:center;max-width:100%;box-sizing:border-box;overflow:hidden">📷<br><small>عکس یافت نشد</small><br><code style="font-size:.6rem;direction:ltr;display:inline-block;margin-top:.3rem;word-break:break-all;overflow-wrap:anywhere;max-width:100%;white-space:normal">${src}</code></div>`;
      };
      img.src = src;
    });
  }
  
  // ──────────────────────────────────────────────
  // Auto re-attach on tab/lesson changes (via MutationObserver)
  // ──────────────────────────────────────────────
  function attachAll(root) {
    attachTTSButtons(root);
    attachImages(root);
  }
  
  // Initial attach when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => attachAll());
  } else {
    attachAll();
  }
  
  // Observe DOM changes to auto-attach on dynamic content
  const observer = new MutationObserver(() => attachAll());
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Expose globally
  window.EV_TTS = TTS;
  window.EV_attachAll = attachAll;
  window.EV_attachTTSButtons = attachTTSButtons;
  window.EV_attachImages = attachImages;
})();
