/* ═══════════════════════════════════════════════════════════════
   EV-UX — موتور مشترک تجربه‌ی کاربری صفحات درس (هر ۶ پایه)
   قابلیت‌ها:
   ۱) «ادامه از جایی که بودی»: ذخیره‌ی آخرین درس + بخش در localStorage
      (کلید ev_resume_{grade}) — کارتش را ev-home.js در ایندکس‌ها می‌سازد.
   ۲) ناوبری خطی: دکمه‌ی «بخش بعدی/قبلی» انتهای هر پنل + شِورون «بعدی»
      روی نوار موبایل + تیک بخش‌های دیده‌شده در سایدبار/شیت.
   ۳) دیپ‌لینک بخش: lesson.html?id=N#t=tabName همان بخش را باز می‌کند.
   ۴) میان‌بر کیبورد: ← بخش بعدی، → بخش قبلی، Esc بستن پاپ‌آپ معنی.
   ۵) کنترل اندازه‌ی متن (A− / A+) — ذخیره‌شونده، کل صفحه را scale می‌کند.
   ۶) حالت دوزبانه: نمایش هم‌زمان همه‌ی ترجمه‌ها؛ در دسکتاپ Reading دوستونه.
   ۷) فال‌بک تصویر: عکس‌های هنوزنرسیده به‌جای آیکن شکسته، جعبه‌ی
      معنادار با شرح/نام فایل نشان می‌دهند.

   پیش‌نیاز: window.EV_PROGRESS = {grade:'gN', ...} (در lesson.html ست شده)
   و الگوی مشترک «.sidebar-item[data-tab]» + «[data-panel]».
   فعال‌سازی تب همیشه با click() روی دکمه‌ی سایدبار انجام می‌شود تا
   منطق داخلی هر پایه (شیت، نوار موبایل و...) دست‌نخورده اجرا شود.
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var GRADE = (window.EV_PROGRESS && window.EV_PROGRESS.grade) || '';
  if (!GRADE) return;
  var FOLDER = 'grade' + GRADE.replace(/^g/, '');
  var LESSON_ID = new URLSearchParams(location.search).get('id') || '1';
  var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }
  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) {} }

  /* ---------- نقشه‌ی بخش‌ها از روی سایدبار (منبع حقیقت) ---------- */
  function tabs() {
    return $$('#sidebarList .sidebar-item').map(function (b) {
      var t = b.querySelector('.sidebar-text');
      var label = t ? (t.childNodes[0] && t.childNodes[0].textContent || t.textContent) : b.textContent;
      return { tab: b.dataset.tab, label: label.trim(), btn: b };
    });
  }
  function activeIdx(list) {
    var a = $('#sidebarList .sidebar-item.active');
    for (var i = 0; i < list.length; i++) if (list[i].btn === a) return i;
    return 0;
  }
  function goTab(tab) {
    var b = $('#sidebarList .sidebar-item[data-tab="' + tab + '"]');
    if (!b) return false;
    b.click();
    var body = $('.lesson-body') || document.body;
    var top = body.getBoundingClientRect().top + window.scrollY - 64;
    window.scrollTo({ top: Math.max(0, top), behavior: RM ? 'auto' : 'smooth' });
    return true;
  }

  /* ---------- استایل‌های تزریقی (در چارچوب توکن‌های خود سایت) ---------- */
  var css = document.createElement('style');
  css.textContent =
    '.ev-utils{display:flex;align-items:center;gap:.6rem;flex-wrap:wrap;' +
      'margin:0 0 1.1rem;padding:.45rem .6rem;background:var(--bg-soft,#F6F3EC);' +
      'border:1px solid var(--border-light,rgba(0,0,0,.07));border-radius:10px}' +
    '.ev-utils .ev-sep{flex:1}' +
    '.ev-fs{display:flex;align-items:center;gap:.35rem;color:var(--text-soft,#6B6058);font-size:.74rem}' +
    '.ev-fs button,.ev-bi-toggle{font-family:inherit;cursor:pointer;border:1px solid var(--border,rgba(0,0,0,.12));' +
      'background:#fff;border-radius:8px;padding:.3rem .6rem;font-size:.78rem;color:var(--text-mid,#3D3530);' +
      'transition:all .15s;line-height:1.2}' +
    '.ev-fs button:hover,.ev-bi-toggle:hover{border-color:var(--primary,#1F3A5F);color:var(--primary,#1F3A5F)}' +
    '.ev-bi-toggle[aria-pressed="true"]{background:var(--primary,#1F3A5F);border-color:var(--primary,#1F3A5F);color:#fff}' +
    '.ev-secnav{display:flex;justify-content:space-between;gap:.75rem;margin-top:2rem;' +
      'padding-top:1.1rem;border-top:1px dashed var(--border,rgba(0,0,0,.12))}' +
    '.ev-secnav a{flex:1;max-width:48%;display:flex;flex-direction:column;gap:.15rem;text-decoration:none;' +
      'border:1px solid var(--border-light,rgba(0,0,0,.08));border-radius:12px;padding:.7rem .9rem;' +
      'background:#fff;transition:all .2s;cursor:pointer}' +
    '.ev-secnav a:hover{border-color:var(--primary,#1F3A5F);transform:translateY(-2px)}' +
    '.ev-secnav .ev-dir{font-size:.68rem;color:var(--text-soft,#6B6058)}' +
    '.ev-secnav .ev-name{font-size:.88rem;font-weight:600;color:var(--primary,#1F3A5F)}' +
    '.ev-secnav a.ev-next{margin-inline-start:auto;text-align:left;align-items:flex-end}' +
    '.ev-tick{margin-inline-start:auto;font-size:.68rem;font-weight:700;' +
      'color:var(--success,#5C7A3F);background:var(--success-bg,#E4EDD8);border-radius:99px;' +
      'width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0}' +
    '.sidebar-item.active .ev-tick{background:rgba(255,255,255,.25);color:#fff}' +
    '.ev-trigger-next{margin-inline-start:.5rem;flex-shrink:0;width:34px;height:34px;border-radius:10px;' +
      'border:none;cursor:pointer;background:rgba(255,255,255,.18);color:#fff;font-size:1.05rem;' +
      'display:flex;align-items:center;justify-content:center;font-family:inherit}' +
    '.ev-trigger-next:active{background:rgba(255,255,255,.32)}' +
    'body.ev-bi .conv-fa{display:block!important}' +
    'body.ev-bi .conv-line .conv-fa{animation:none}' +
    'body.ev-bi .reading-para-fa{display:block!important}' +
    '@media(min-width:1024px){' +
      'body.ev-bi .reading-para{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;align-items:start}' +
      'body.ev-bi .reading-para-fa{margin-top:0}}' +
    '.ev-img-fb{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.4rem;' +
      'min-height:110px;padding:1rem;background:var(--bg-soft,#F6F3EC);' +
      'border:1.5px dashed var(--border,rgba(0,0,0,.15));border-radius:12px;' +
      'color:var(--text-soft,#6B6058);font-size:.78rem;text-align:center;line-height:1.6}' +
    '.ev-img-fb .ev-img-ic{font-size:1.5rem;opacity:.55}' +
    '.ev-img-fb .ev-img-file{direction:ltr;font-size:.64rem;opacity:.6;font-family:var(--font-en,serif)}';
  document.head.appendChild(css);

  /* ---------- ۷) فال‌بک تصویرهای هنوزنرسیده (capture، قبل از هر چیز) ---------- */
  window.addEventListener('error', function (e) {
    var t = e.target;
    if (!t || t.tagName !== 'IMG' || t.dataset.evFb) return;
    t.dataset.evFb = '1';
    var box = document.createElement('div');
    box.className = 'ev-img-fb';
    var cap = t.getAttribute('alt') || t.getAttribute('data-fa') || '';
    var file = (t.getAttribute('src') || '').split('/').pop();
    box.innerHTML = '<span class="ev-img-ic">🖼️</span>' +
      (cap ? '<span>' + cap + '</span>' : '<span>تصویر این بخش به‌زودی اضافه می‌شود</span>') +
      (file ? '<span class="ev-img-file">' + file + '</span>' : '');
    if (t.parentNode) t.parentNode.replaceChild(box, t);
  }, true);

  document.addEventListener('DOMContentLoaded', function () {
    var list = tabs();
    if (!list.length) return;

    /* ---------- ۵) اندازه‌ی متن + ۶) دوزبانه — نوار ابزار بالای محتوا ---------- */
    var FS_STEPS = [90, 100, 112, 125];
    function applyFs() {
      var v = parseInt(lsGet('ev_fs') || '100', 10);
      if (FS_STEPS.indexOf(v) === -1) v = 100;
      document.documentElement.style.fontSize = v + '%';
      return v;
    }
    applyFs();

    var firstPanel = $('[data-panel]');
    if (firstPanel && firstPanel.parentElement && !$('.ev-utils')) {
      var utils = document.createElement('div');
      utils.className = 'ev-utils';
      var hasBi = !!($('.conv-fa') || $('.reading-para-fa'));
      utils.innerHTML =
        '<div class="ev-fs">' +
          '<button type="button" data-fs="-" aria-label="کوچک‌تر کردن متن">A−</button>' +
          '<span>اندازه‌ی متن</span>' +
          '<button type="button" data-fs="+" aria-label="بزرگ‌تر کردن متن">A+</button>' +
        '</div>' +
        '<span class="ev-sep"></span>' +
        (hasBi ? '<button type="button" class="ev-bi-toggle" aria-pressed="false">🌐 نمایش همه‌ی ترجمه‌ها</button>' : '');
      firstPanel.parentElement.insertBefore(utils, firstPanel);

      utils.addEventListener('click', function (e) {
        var fsBtn = e.target.closest('[data-fs]');
        if (fsBtn) {
          var cur = FS_STEPS.indexOf(applyFs());
          var nxt = fsBtn.dataset.fs === '+' ? Math.min(cur + 1, FS_STEPS.length - 1) : Math.max(cur - 1, 0);
          lsSet('ev_fs', String(FS_STEPS[nxt]));
          applyFs();
        }
        var bi = e.target.closest('.ev-bi-toggle');
        if (bi) {
          var on = document.body.classList.toggle('ev-bi');
          bi.setAttribute('aria-pressed', on ? 'true' : 'false');
          lsSet('ev_bi', on ? '1' : '0');
        }
      });
      if (lsGet('ev_bi') === '1' && hasBi) {
        document.body.classList.add('ev-bi');
        var biBtn = $('.ev-bi-toggle');
        if (biBtn) biBtn.setAttribute('aria-pressed', 'true');
      }
    }

    /* ---------- ۲الف) دکمه‌های «بخش بعدی/قبلی» انتهای هر پنل ---------- */
    list.forEach(function (item, i) {
      var panel = $('[data-panel="' + item.tab + '"]');
      if (!panel || panel.querySelector('.ev-secnav')) return;
      var nav = document.createElement('div');
      nav.className = 'ev-secnav';
      var html = '';
      if (i > 0) {
        html += '<a class="ev-prev" data-go="' + list[i - 1].tab + '">' +
                '<span class="ev-dir">→ بخش قبلی</span><span class="ev-name">' + list[i - 1].label + '</span></a>';
      }
      if (i < list.length - 1) {
        html += '<a class="ev-next" data-go="' + list[i + 1].tab + '">' +
                '<span class="ev-dir">بخش بعدی ←</span><span class="ev-name">' + list[i + 1].label + '</span></a>';
      } else {
        var nl = $('.footer-btn.next:not(.disabled)');
        if (nl && nl.getAttribute('href')) {
          html += '<a class="ev-next" href="' + nl.getAttribute('href') + '">' +
                  '<span class="ev-dir">درس بعدی ←</span><span class="ev-name">ادامه‌ی یادگیری</span></a>';
        }
      }
      nav.innerHTML = html;
      panel.appendChild(nav);
    });
    document.addEventListener('click', function (e) {
      var go = e.target.closest('.ev-secnav [data-go]');
      if (go) { e.preventDefault(); goTab(go.dataset.go); }
    });

    /* ---------- ۲ب) شِورون «بخش بعدی» روی نوار موبایل ---------- */
    var trigger = $('#mobileNavTrigger');
    if (trigger && !$('.ev-trigger-next', trigger)) {
      var tn = document.createElement('button');
      tn.type = 'button';
      tn.className = 'ev-trigger-next';
      tn.setAttribute('aria-label', 'بخش بعدی');
      tn.textContent = '←';
      tn.addEventListener('click', function (e) {
        e.stopPropagation();
        var i = activeIdx(list);
        if (i < list.length - 1) goTab(list[i + 1].tab);
      });
      trigger.appendChild(tn);
    }

    /* ---------- ۲ج + ۱) تیک بخش‌های دیده‌شده + ذخیره‌ی «ادامه» ---------- */
    var V_KEY = 'ev_visited_' + GRADE + '_' + LESSON_ID;
    function visited() { try { return JSON.parse(lsGet(V_KEY) || '[]'); } catch (e) { return []; } }
    function paintTicks() {
      var v = visited();
      $$('[data-tab]').forEach(function (b) {
        var has = b.querySelector('.ev-tick');
        if (v.indexOf(b.dataset.tab) !== -1) {
          if (!has) {
            var s = document.createElement('span');
            s.className = 'ev-tick'; s.textContent = '✓';
            s.setAttribute('aria-label', 'دیده شده');
            b.appendChild(s);
          }
        }
      });
    }
    function onTabChanged() {
      var i = activeIdx(list);
      var cur = list[i];
      if (!cur) return;
      var v = visited();
      if (v.indexOf(cur.tab) === -1) { v.push(cur.tab); lsSet(V_KEY, JSON.stringify(v)); }
      paintTicks();
      var t = $('#pageTitle');
      lsSet('ev_resume_' + GRADE, JSON.stringify({
        folder: FOLDER, id: LESSON_ID, tab: cur.tab, tabLabel: cur.label,
        lesson: t ? t.textContent.trim() : document.title, ts: Date.now()
      }));
      if (history.replaceState) history.replaceState(null, '', '#t=' + cur.tab);
      var i2 = activeIdx(list);
      if (tn) tn.style.visibility = (i2 >= list.length - 1) ? 'hidden' : 'visible';
    }
    var tn = $('.ev-trigger-next');
    var mo = new MutationObserver(function () {
      clearTimeout(mo._t); mo._t = setTimeout(onTabChanged, 40);
    });
    list.forEach(function (it) { mo.observe(it.btn, { attributes: true, attributeFilter: ['class'] }); });

    /* ---------- ۳) دیپ‌لینک #t=tab ---------- */
    var m = location.hash.match(/^#t=([\w-]+)/);
    if (m && m[1]) goTab(m[1]);
    onTabChanged(); /* ثبت اولیه (بخش فعلی هم «دیده‌شده» و resume می‌شود) */

    /* ---------- ۴) کیبورد: ←/→ بخش‌ها، Esc بستن پاپ‌آپ ---------- */
    document.addEventListener('keydown', function (e) {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      var t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable)) return;
      if (e.key === 'Escape') {
        $$('.word-popup.show').forEach(function (p) { p.classList.remove('show'); });
        document.documentElement.click();
        return;
      }
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      var i = activeIdx(list);
      if (e.key === 'ArrowLeft' && i < list.length - 1) { e.preventDefault(); goTab(list[i + 1].tab); }
      if (e.key === 'ArrowRight' && i > 0) { e.preventDefault(); goTab(list[i - 1].tab); }
    });

    /* ---------- دسترس‌پذیری: نام برای دکمه‌های فقط‌آیکنی ---------- */
    $$('button:not([aria-label])').forEach(function (b) {
      if (b.textContent.trim() === '' || /^[\u{1F300}-\u{1FAFF}🔊▶️←→✓]+$/u.test(b.textContent.trim())) {
        b.setAttribute('aria-label', b.title || 'دکمه');
      }
    });
  });
})();
