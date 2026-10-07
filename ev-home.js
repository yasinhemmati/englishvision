/* ═══════════════════════════════════════════════════════════════
   EV-HOME — ویجت‌های ایندکس پایه‌ها و لندینگ
   ۱) کارت «ادامه از جایی که بودی» (از کلید ev_resume_{grade} که
      ev-ux.js در صفحات درس می‌نویسد).
   ۳) جستجوی واژگان: در ایندکس هر پایه فوری از LESSONS همان صفحه؛
      در لندینگ، بین همه‌ی پایه‌ها با بارگذاری تنبلِ lessons.js ها.
   ۹) نوار پیشرفت هر پایه روی کارت‌های لندینگ (فقط وقتی پیشرفتی هست).

   پیکربندی:  window.EV_HOME = {grade:'g7',folder:'grade7',total:8}
   یا لندینگ: window.EV_HOME = {landing:true, grades:[{g,folder,fa,total},…]}
   نقطه‌ی نصب: <div id="evHomeTools"></div>
   ═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var CFG = window.EV_HOME;
  if (!CFG) return;

  function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var css = document.createElement('style');
  css.textContent =
    '#evHomeTools{display:flex;flex-direction:column;gap:.9rem;margin-bottom:1.6rem}' +
    '.ev-resume{display:flex;align-items:center;gap:1rem;text-decoration:none;' +
      'background:linear-gradient(135deg,var(--primary,#1F3A5F) 0%, color-mix(in srgb, var(--primary,#1F3A5F) 78%, #000) 100%);' +
      'color:#fff;border-radius:14px;padding:.95rem 1.25rem;transition:transform .2s,box-shadow .2s}' +
    '.ev-resume:hover{transform:translateY(-2px);box-shadow:0 14px 30px -14px rgba(0,0,0,.45)}' +
    '.ev-resume .ev-r-ic{width:42px;height:42px;border-radius:12px;background:rgba(255,255,255,.16);' +
      'display:flex;align-items:center;justify-content:center;font-size:1.15rem;flex-shrink:0}' +
    '.ev-resume .ev-r-txt{flex:1;min-width:0}' +
    '.ev-resume .ev-r-kicker{font-size:.68rem;opacity:.8;letter-spacing:.02em}' +
    '.ev-resume .ev-r-title{font-size:.95rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}' +
    '.ev-resume .ev-r-sub{font-size:.72rem;opacity:.85;margin-top:.1rem}' +
    '.ev-resume .ev-r-title,.ev-resume .ev-r-sub{unicode-bidi:plaintext;text-align:right}' +
    '.ev-resume .ev-r-kicker,.ev-resume .ev-r-title,.ev-resume .ev-r-sub{display:block}' +
    '.ev-resume .ev-r-go{font-size:1.2rem;flex-shrink:0}' +
    '.ev-search{position:relative}' +
    '.ev-search input{width:100%;font-family:inherit;font-size:.95rem;padding:.85rem 2.9rem .85rem 1rem;' +
      'border:1.5px solid var(--border,rgba(0,0,0,.12));border-radius:14px;background:#fff;' +
      'color:var(--text-dark,#1A1814);outline:none;transition:border-color .2s,box-shadow .2s}' +
    '.ev-search input:focus{border-color:var(--primary,#1F3A5F);box-shadow:0 0 0 3px color-mix(in srgb, var(--primary,#1F3A5F) 14%, transparent)}' +
    '.ev-search .ev-s-ic{position:absolute;top:50%;right:1rem;transform:translateY(-50%);opacity:.45;pointer-events:none}' +
    '.ev-results{position:absolute;top:calc(100% + 6px);right:0;left:0;z-index:220;background:#fff;' +
      'border:1px solid var(--border,rgba(0,0,0,.12));border-radius:14px;box-shadow:0 18px 44px -18px rgba(0,0,0,.3);' +
      'max-height:340px;overflow:auto;display:none}' +
    '.ev-results.open{display:block}' +
    '.ev-hit{display:flex;align-items:baseline;gap:.7rem;padding:.65rem 1rem;text-decoration:none;' +
      'border-bottom:1px solid var(--border-light,rgba(0,0,0,.06))}' +
    '.ev-hit:last-child{border-bottom:none}' +
    '.ev-hit:hover,.ev-hit:focus-visible{background:var(--bg-soft,#F6F3EC)}' +
    '.ev-hit .ev-h-en{font-family:var(--font-en,serif);direction:ltr;font-weight:700;font-size:.92rem;' +
      'color:var(--primary,#1F3A5F);flex-shrink:0}' +
    '.ev-hit .ev-h-fa{flex:1;min-width:0;font-size:.84rem;color:var(--text-mid,#3D3530);' +
      'white-space:nowrap;overflow:hidden;text-overflow:ellipsis;unicode-bidi:plaintext}' +
    '.ev-hit .ev-h-chip{font-size:.66rem;color:var(--text-soft,#6B6058);background:var(--bg-soft,#F6F3EC);' +
      'border-radius:99px;padding:.18rem .55rem;flex-shrink:0}' +
    '.ev-s-note{padding:.8rem 1rem;font-size:.8rem;color:var(--text-soft,#6B6058)}' +
    '.ev-card-progress{margin-top:.85rem}' +
    '.ev-card-progress .ev-cp-row{display:flex;justify-content:space-between;font-size:.68rem;' +
      'color:var(--ink-light,#6B6058);margin-bottom:.3rem}' +
    '.ev-card-progress .ev-cp-bar{height:5px;border-radius:99px;background:rgba(0,0,0,.08);overflow:hidden}' +
    '.ev-card-progress .ev-cp-fill{height:100%;border-radius:99px;background:var(--card-accent,#1F3A5F);' +
      'transition:width .5s}';
  document.head.appendChild(css);

  /* ───────────────────── استخراج واژگان از دو معماری داده ───────────────────── */
  function brace(s) { var m = /\{(.+?)\}/.exec(s || ''); return m ? m[1] : ''; }
  function clean(s) { return String(s || '').replace(/[{}]/g, ''); }

  function extract(LESSONS) {
    var out = [];
    (LESSONS || []).forEach(function (L) {
      var num = L.num;
      if (Array.isArray(L.vocabulary)) { /* متوسطه اول */
        L.vocabulary.forEach(function (v) {
          if (v && v.word) out.push({ w: v.word, fa: v.fa || '', ex: v.example || '', num: num, tab: 'vocabulary' });
        });
      }
      if (L.newWords) { /* متوسطه دوم */
        Object.keys(L.newWords).forEach(function (grp) {
          var arr = L.newWords[grp];
          if (!Array.isArray(arr)) return;
          arr.forEach(function (it) {
            if (!it) return;
            var w = it.word || brace(it.en);
            if (!w) return;
            out.push({ w: w, fa: it.faWord || brace(it.fa) || clean(it.fa) || '', ex: clean(it.en), num: num, tab: 'newWords' });
          });
        });
      }
      if (L.reading && L.reading.glossary && typeof L.reading.glossary === 'object') {
        Object.keys(L.reading.glossary).forEach(function (en) {
          out.push({ w: en, fa: L.reading.glossary[en], ex: '', num: num, tab: 'reading' });
        });
      }
    });
    var seen = {};
    return out.filter(function (e) {
      var k = e.w.toLowerCase() + '#' + e.num;
      if (seen[k]) return false; seen[k] = 1; return true;
    });
  }

  function searchIn(index, q) {
    q = q.trim().toLowerCase();
    if (q.length < 2) return [];
    var starts = [], inc = [];
    index.forEach(function (e) {
      var w = e.w.toLowerCase();
      if (w.indexOf(q) === 0) starts.push(e);
      else if (w.indexOf(q) !== -1 || (e.fa && e.fa.indexOf(q) !== -1)) inc.push(e);
    });
    return starts.concat(inc).slice(0, 24);
  }

  /* ───────────────────── رندر مشترک ───────────────────── */
  var mount = document.getElementById('evHomeTools');
  if (!mount) return;

  function resumeCard(data, hrefBase, gradeFa) {
    var lesson = esc(String(data.lesson || 'درس').replace(/\s*[—–-]\s*پایه.*$/, ''));
    var href = hrefBase + 'lesson.html?id=' + encodeURIComponent(data.id) + '#t=' + encodeURIComponent(data.tab || '');
    return '<a class="ev-resume" href="' + href + '">' +
      '<span class="ev-r-ic">▶</span>' +
      '<span class="ev-r-txt">' +
        '<span class="ev-r-kicker">ادامه از جایی که بودی' + (gradeFa ? ' — پایه ' + gradeFa : '') + '</span>' +
        '<span class="ev-r-title">' + lesson + '</span>' +
        '<span class="ev-r-sub">بخش: ' + esc(data.tabLabel || data.tab || '') + '</span>' +
      '</span>' +
      '<span class="ev-r-go">←</span></a>';
  }

  function hitRow(e, hrefBase, chip) {
    return '<a class="ev-hit" href="' + hrefBase + 'lesson.html?id=' + e.num + '#t=' + e.tab + '">' +
      '<span class="ev-h-en">' + esc(e.w) + '</span>' +
      '<span class="ev-h-fa">' + esc(e.fa) + (e.ex ? ' · <bdi dir="ltr" style="opacity:.65">' + esc(e.ex) + '</bdi>' : '') + '</span>' +
      '<span class="ev-h-chip">' + chip + '</span></a>';
  }

  function buildSearch(placeholder, run) {
    var wrap = document.createElement('div');
    wrap.className = 'ev-search';
    wrap.innerHTML = '<input type="search" placeholder="' + placeholder + '" aria-label="جستجوی واژگان">' +
      '<span class="ev-s-ic">🔍</span><div class="ev-results" role="listbox"></div>';
    var input = wrap.querySelector('input'), res = wrap.querySelector('.ev-results'), t;
    input.addEventListener('input', function () {
      clearTimeout(t);
      t = setTimeout(function () { run(input.value, res); }, 160);
    });
    document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) res.classList.remove('open'); });
    input.addEventListener('focus', function () { if (res.innerHTML) res.classList.add('open'); });
    return wrap;
  }

  /* ───────────────────── حالت ایندکس یک پایه ───────────────────── */
  if (!CFG.landing) {
    var html = '';
    try {
      var r = JSON.parse(lsGet('ev_resume_' + CFG.grade) || 'null');
      if (r && r.id) html += resumeCard(r, '', '');
    } catch (e) {}
    mount.innerHTML = html;

    if (typeof LESSONS !== 'undefined') {
      var index = extract(LESSONS);
      if (index.length) {
        var s = buildSearch('جستجوی واژه… (انگلیسی یا فارسی)', function (q, res) {
          var hits = searchIn(index, q);
          res.innerHTML = hits.length
            ? hits.map(function (e) { return hitRow(e, '', 'درس ' + e.num); }).join('')
            : (q.trim().length >= 2 ? '<div class="ev-s-note">چیزی پیدا نشد — املای واژه را چک کن.</div>' : '');
          res.classList.toggle('open', !!res.innerHTML);
        });
        mount.appendChild(s);
      }
    }
    return;
  }

  /* ───────────────────── حالت لندینگ ───────────────────── */
  /* کارت ادامه: تازه‌ترین پایه */
  var newest = null;
  (CFG.grades || []).forEach(function (g) {
    try {
      var r = JSON.parse(lsGet('ev_resume_' + g.g) || 'null');
      if (r && r.id && (!newest || r.ts > newest.data.ts)) newest = { data: r, g: g };
    } catch (e) {}
  });
  if (newest) mount.innerHTML = resumeCard(newest.data, newest.g.folder + '/', newest.g.fa);
  else { var w = mount.closest('section'); if (w) w.style.display = 'none'; }


  /* نوار پیشرفت روی کارت‌های پایه (فقط وقتی پیشرفتی هست) */
  (CFG.grades || []).forEach(function (g) {
    var done = 0;
    for (var n = 1; n <= g.total; n++) {
      if (lsGet('lesson_' + n + '_completed_' + g.g) === 'true') done++;
    }
    if (!done) return;
    var card = document.querySelector('.grade-card-' + g.folder.replace('grade', ''));
    var cta = card && card.querySelector('.grade-card-cta');
    if (!cta || card.querySelector('.ev-card-progress')) return;
    var box = document.createElement('div');
    box.className = 'ev-card-progress';
    box.innerHTML = '<div class="ev-cp-row"><span>پیشرفت شما</span><span>' + done + ' از ' + g.total + ' درس</span></div>' +
      '<div class="ev-cp-bar"><div class="ev-cp-fill" style="width:' + Math.round(done / g.total * 100) + '%"></div></div>';
    cta.parentNode.insertBefore(box, cta);
  });
})();
