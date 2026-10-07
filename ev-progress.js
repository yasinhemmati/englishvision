/* ═══════════════════════════════════════════════
   EV-PROGRESS — ذخیره خودکار تکمیل درس (مشترک همه پایه‌ها)
   وقتی همه سؤالات آزمونِ درس پاسخ داده شد، کلید
   lesson_{id}_completed_{grade} در localStorage ذخیره می‌شود
   تا صفحه‌ی هر پایه پیشرفت را نشان دهد.

   استفاده (قبل از این فایل، در lesson.html):
   <script>window.EV_PROGRESS = { grade:'g10', quizSelector:'[data-panel="quiz"] .quiz-card' };</script>
   <script src="../ev-progress.js"></script>
   ═══════════════════════════════════════════════ */
(function () {
  var cfg = window.EV_PROGRESS;
  if (!cfg || !cfg.grade || !cfg.quizSelector) return;

  var lessonId = new URLSearchParams(window.location.search).get('id') || '1';
  var key = 'lesson_' + lessonId + '_completed_' + cfg.grade;
  if (localStorage.getItem(key) === 'true') return; // already done

  function check() {
    var cards = document.querySelectorAll(cfg.quizSelector);
    if (!cards.length) return;
    for (var i = 0; i < cards.length; i++) {
      if (!cards[i].classList.contains(cfg.answeredClass || 'answered')) return;
    }
    localStorage.setItem(key, 'true');
    evCelebrate();
    document.removeEventListener('click', onClick);
  }

  function evCelebrate() {
    try {
      var st = document.createElement('style');
      st.textContent = '#evToast{position:fixed;bottom:5.4rem;left:50%;transform:translateX(-50%) translateY(20px);opacity:0;z-index:400;background:#fff;border:1px solid rgba(0,0,0,.1);border-radius:16px;box-shadow:0 18px 44px -16px rgba(0,0,0,.35);padding:.9rem 1.1rem;display:flex;align-items:center;gap:.8rem;transition:all .35s;max-width:92vw}#evToast.show{opacity:1;transform:translateX(-50%) translateY(0)}#evToast .t{font-size:.9rem;font-weight:700;color:#1A1814}#evToast a{font-size:.8rem;font-weight:700;color:#fff;background:var(--primary,#1F3A5F);text-decoration:none;border-radius:99px;padding:.4rem .85rem;white-space:nowrap}';
      document.head.appendChild(st);
      var d = document.createElement('div');
      d.id = 'evToast';
      var nx = document.querySelector('.footer-btn.next:not(.disabled)');
      d.innerHTML = '<span style="font-size:1.3rem">🎉</span><span class="t">آفرین! این درس کامل شد</span>' +
        ((nx && nx.getAttribute('href')) ? '<a href="' + nx.getAttribute('href') + '">درس بعدی ←</a>' : '');
      document.body.appendChild(d);
      requestAnimationFrame(function(){ d.classList.add('show'); });
      setTimeout(function(){ d.classList.remove('show'); setTimeout(function(){ d.remove(); }, 400); }, 7000);
    } catch (e) {}
  }

  function onClick() { setTimeout(check, 60); }
  document.addEventListener('click', onClick);
})();
