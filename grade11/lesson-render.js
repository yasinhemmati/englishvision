/* ═══════════════════════════════════════════════
   GRADE 10 — VISION 1 — LESSON RENDERER
   Sections: getReady, conversation, newWords, reading,
   grammar, listeningSpeaking, pronunciation, writing, quiz
   ═══════════════════════════════════════════════ */

// ─── URL + lesson lookup ───
const urlParams = new URLSearchParams(window.location.search);
const lessonId = urlParams.get('id') || '1';
let LESSON = LESSONS.find(l => l.num === parseInt(lessonId));

if (!LESSON) {
  document.body.innerHTML = '<div style="padding:4rem 2rem;text-align:center"><h1>درس پیدا نشد</h1><p><a href="index.html">برگشت به صفحه اصلی</a></p></div>';
  throw new Error('Lesson not found');
}

document.getElementById('pageTitle').textContent = `درس ${LESSON.num}: ${LESSON.title} — پایه یازدهم`;

// ─── Audio path helper ───
function audioPath(section, num) {
  return `../audio/grade11/lesson${LESSON.num}/${section}${num || ''}.mp3`;
}

// ─── Helper: clean text for TTS attribute ───
function ttsClean(text) {
  return (text || '').replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
}
function imgPath(file) {
  return `../images/grade11/lessons/lesson${LESSON.num}/${file}`;
}

// Convert {word} markers into colored, clickable spans
// faText: matching FA string with {translation} markers (optional)
function hl(text) {
  return (text || '').replace(/\{([^}]+)\}/g, '<span class="kw">$1</span>');
}
// Bold clickable words with a grammar note tooltip
function escAttr(s) {
  return (s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
// Find a per-word note from a map. Keys are matched case-insensitively;
// the longest matching key wins (so "the most expensive" beats "expensive").
function lookupNote(word, noteMap, fallback) {
  if (!noteMap) return fallback || '';
  const w = word.toLowerCase().trim();
  // exact match first
  if (noteMap[w]) return noteMap[w];
  // then substring/keyword match (longest key first)
  const keys = Object.keys(noteMap).sort((a,b) => b.length - a.length);
  for (const k of keys) {
    if (w.includes(k.toLowerCase())) return noteMap[k];
  }
  return fallback || '';
}
// note can be: a string (same for all), OR a noteMap object {keyword: explanation}
function hlNote(text, note, noteMap) {
  return (text || '').replace(/\{([^}]+)\}/g, (m, word) => {
    const n = noteMap ? lookupNote(word, noteMap, note) : note;
    return `<span class="kw-note" data-note="${escAttr(n)}">${word}</span>`;
  });
}
// For New Words: English keyword + matching FA keyword both colored
function hlPair(en, fa) {
  return { en: hl(en), fa: hl(fa) };
}
// Make reading words clickable via glossary
function glossify(text, glossary) {
  if (!glossary) return text;
  let result = text;
  // Sort keys by length desc to match multi-word first
  const keys = Object.keys(glossary).sort((a,b) => b.length - a.length);
  keys.forEach(key => {
    const re = new RegExp('\\b('+key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')\\b', 'g');
    result = result.replace(re, (m) => `<span class="gloss" data-fa="${glossary[key]}">${m}</span>`);
  });
  return result;
}

// ─── HEADER ───
function buildHeader() {
  document.getElementById('lessonHeader').innerHTML = `
    <div class="page-header-inner">
      <div class="header-breadcrumb">
        <a href="../index.html">صفحه اصلی سایت</a><span class="sep">›</span><a href="index.html">پایه یازدهم</a><span class="sep">›</span><span>درس ${LESSON.num}</span>
      </div>
      <div class="header-tag">📗 Vision 2 — Lesson ${LESSON.num}</div>
      <h1 class="header-title-en">${LESSON.title}</h1>
      <div class="header-title-fa">${LESSON.titleFa}</div>
    </div>
  `;
}
buildHeader();

// ════════════════════════════════════════════════
//  1. GET READY
// ════════════════════════════════════════════════
function buildGetReady() {
  const gr = LESSON.getReady;
  if (!gr) return `<div class="placeholder-msg">بخش آماده شو آماده نیست.</div>`;

  return `
    ${LESSON.facts ? `
      <div class="facts-box">
        <div class="facts-label">💡 Interesting Facts <span class="facts-label-fa">دانستنی‌های جالب</span></div>
        <ul class="facts-list">
          ${LESSON.facts.map(f => `<li><span class="fact-en">${f.en}</span><span class="fact-fa">${f.fa}</span></li>`).join('')}
        </ul>
      </div>
    ` : LESSON.quote ? `
      <div class="facts-box quote-box">
        <div class="quote-mark">❝</div>
        <div class="quote-en">${LESSON.quote.en}</div>
        <div class="quote-ref">${LESSON.quote.ref}</div>
        ${LESSON.quote.fa ? `<div class="facts-fa">${LESSON.quote.fa}</div>` : ''}
      </div>
    ` : ''}

    <div class="section-head">
      <h2>Get Ready</h2>
      <div class="section-fa">${gr.titleFa}</div>
    </div>
    ${gr.parts.map(part => `
      <div class="gr-part">
        <div class="gr-part-label">${part.label}</div>
        <p class="gr-instruction">${part.instruction}</p>
        <p class="gr-instruction-fa">${part.instructionFa}</p>
        ${part.type === 'fill-bank' ? `
          ${part.wordBank ? `<div class="wb-wordbank">${part.wordBank.map(w => `<span class="wb-bank-word">${w}</span>`).join('')}</div>` : ''}
          ${part.sentences.map((s, si) => {
            const html = s.text.replace('_____', `<input type="text" class="wb-input wb-input-sm" style="width:130px" ${s.answer ? `data-answer="${s.answer}"` : ''} placeholder="...">`);
            return `<div class="plural-task-row"><span class="fbi-num">${si+1}.</span> <span style="font-family:var(--font-en);unicode-bidi:plaintext">${html}</span></div>`;
          }).join('')}
          ${part.sentences.some(s => s.answer) ? `<button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>` : ''}
        ` : ''}
        ${part.type === 'pyramid' ? `
          <div class="food-pyramid">
            ${part.levels.map(lv => `
              <div class="pyramid-level" style="--lv-w:${lv.width}%">
                <div class="pyramid-label">${lv.label}</div>
                <div class="pyramid-items">${lv.items.map(it => `<span class="pyramid-item">${it}</span>`).join('')}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
        ${part.type === 'match-phrases' ? `
          <div class="gr-grid gr-grid-2">
            ${part.items.map(it => `
              <div class="gr-card">
                <div class="gr-card-letter">${it.id}</div>
                <div class="img-box img-wide" data-src="${imgPath(it.image)}" data-alt="${it.phrase}"></div>
                <div class="gr-phrase">
                  <button class="tts-btn tts-sm" data-tts="${ttsClean(it.phrase)}" title="تلفظ"></button>
                  ${it.phrase}
                </div>
                <div class="gr-phrase-fa">${it.fa}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
        ${part.type === 'match-words' ? `
          <div class="gr-grid gr-grid-4">
            ${part.items.map(it => `
              <div class="gr-card gr-card-sm">
                <div class="img-box img-square" data-src="${imgPath(it.image)}" data-alt="${it.word}"></div>
                <div class="gr-phrase">
                  <button class="tts-btn tts-sm" data-tts="${ttsClean(it.word)}" title="تلفظ"></button>
                  ${it.word}
                </div>
                <div class="gr-phrase-fa">${it.fa}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
        ${part.followup ? `
        <div class="gr-followup">
          <span class="gr-followup-q">${part.followup}</span>
          <span class="gr-followup-fa">${part.followupFa}</span>
          ${part.followupType === 'good-bad' ? `
            <div class="gr-goodbad">
              <div class="gr-goodbad-col gr-good">
                <div class="gr-goodbad-head">👍 Good for nature</div>
                ${part.followupItems.map(() => `<input type="text" class="gr-write-input" placeholder="...">`).join('')}
              </div>
              <div class="gr-goodbad-col gr-bad">
                <div class="gr-goodbad-head">👎 Bad for nature</div>
                ${part.followupItems.map(() => `<input type="text" class="gr-write-input" placeholder="...">`).join('')}
              </div>
            </div>
          ` : ''}
          ${part.followupType === 'two-groups' ? `
            <div class="gr-goodbad">
              ${part.groupLabels.map(label => `
                <div class="gr-goodbad-col">
                  <div class="gr-goodbad-head">${label}</div>
                  ${[1,2,3,4].map(() => `<input type="text" class="gr-write-input" placeholder="...">`).join('')}
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
        ` : ''}
      </div>
    `).join('')}
  `;
}

// ════════════════════════════════════════════════
//  2. CONVERSATION
// ════════════════════════════════════════════════
function buildConversation() {
  const c = LESSON.conversation;
  if (!c) return `<div class="placeholder-msg">بخش مکالمه آماده نیست.</div>`;

  return `
    <div class="section-head">
      <h2>Conversation</h2>
      <div class="section-fa">${c.subtitle}</div>
      <div class="section-desc">${c.desc}</div>
    </div>

    ${c.newWordsHint ? `
      <div class="conv-hint-box">
        <span class="conv-hint-label">کلمات جدید:</span>
        ${c.newWordsHint.map(w => `<span class="conv-hint-word">${w}</span>`).join('')}
      </div>
    ` : ''}

    <div class="conv-image-wrap">
      <div class="img-box img-wide" data-src="${imgPath('conversation.jpg')}" data-alt="${c.subtitle}"></div>
    </div>

    <div class="conv-card">
      ${c.lines.map(line => `
        <div class="conv-line">
          <span class="conv-speaker ${line.role || ''}">${line.speaker}:</span>
          <div class="conv-content">
            <div class="conv-en">${line.en}</div>
            <div class="conv-fa">${line.fa}</div>
          </div>
          <button class="tts-btn tts-sm" data-tts="${ttsClean(line.en)}" title="تلفظ"></button>
        </div>
      `).join('')}
    </div>

    <div class="conv-toggle-hint">💡 روی هر خط ضربه بزن تا ترجمه فارسی‌اش را ببینی.</div>

    ${c.questions ? `
      <div class="conv-questions">
        <h3>Answer the following questions orally.</h3>
        <ol class="conv-q-list">
          ${c.questions.map(q => `
            <li>
              <span class="conv-q-en">${q.q}</span>
              <span class="conv-q-fa">${q.fa}</span>
            </li>
          `).join('')}
        </ol>
      </div>
    ` : ''}
  `;
}

// ════════════════════════════════════════════════
//  3. NEW WORDS & EXPRESSIONS
// ════════════════════════════════════════════════
function buildNewWords() {
  const nw = LESSON.newWords;
  if (!nw) return `<div class="placeholder-msg">بخش کلمات جدید آماده نیست.</div>`;

  return `
    <div class="section-head">
      <h2>New Words &amp; Expressions</h2>
      <div class="section-fa">کلمات و عبارات جدید</div>
    </div>

    <h3 class="nw-subhead">A. Look, Read and Practice.</h3>
    <div class="nw-grid">
      ${nw.lookRead.map(item => `
        <div class="nw-card">
          <div class="img-box img-wide" data-src="${imgPath(item.image)}" data-alt=""></div>
          <div class="nw-card-body">
            <div class="nw-sentence">
              <button class="tts-btn tts-sm" data-tts="${ttsClean(item.en.replace(/[{}]/g,''))}" title="تلفظ"></button>
              <span>${hl(item.en)}</span>
            </div>
            <div class="nw-sentence-fa">${hl(item.fa)}</div>
          </div>
        </div>
      `).join('')}
    </div>

    <h3 class="nw-subhead">B. Read and Practice.</h3>
    <p class="nw-tap-hint">💡 روی هر کارت بزن تا معنی فارسی‌اش را ببینی.</p>
    <div class="nw-def-list">
      ${nw.definitions.map(d => `
        <div class="nw-def-card" tabindex="0">
          <div class="nw-def-head">
            <button class="tts-btn tts-sm" data-tts="${ttsClean(d.word)}" title="تلفظ"></button>
            <span class="nw-def-word">${d.word}</span>
            <span class="nw-def-fa">${d.fa}</span>
          </div>
          <div class="nw-def-meaning">${d.def}</div>
          <div class="nw-def-example">${hl(d.example)}</div>
        </div>
      `).join('')}
    </div>
  `;
}

// ════════════════════════════════════════════════
//  4. READING
// ════════════════════════════════════════════════
function buildReading() {
  const r = LESSON.reading;
  if (!r) return `<div class="placeholder-msg">بخش خواندن آماده نیست.</div>`;

  return `
    <div class="section-head">
      <h2>Reading</h2>
      <div class="section-fa">خواندن</div>
    </div>

    ${r.strategy ? `
      <div class="strategy-box">
        <div class="strategy-label">📖 Reading Strategy</div>
        <div class="strategy-title">${r.strategy.title}</div>
        <div class="strategy-title-fa">${r.strategy.titleFa || ''}</div>
        <div class="grammar-explanation" style="margin:.65rem 0 0">
          ${r.strategy.desc ? `<p style="font-family:var(--font-en);unicode-bidi:plaintext;text-align:start">${r.strategy.desc}</p>` : ''}
          ${r.strategy.steps ? `<ul style="font-family:var(--font-en);unicode-bidi:plaintext;text-align:start;padding-left:1.2rem;line-height:1.9">${r.strategy.steps.map(s => `<li>${s}</li>`).join('')}</ul>` : ''}
          ${r.strategy.descFa ? `<p style="font-size:.82rem;color:var(--text-mid)">${r.strategy.descFa}</p>` : ''}
        </div>
      </div>
    ` : ''}

    <div class="reading-card">
      <h3 class="reading-title">
        <button class="tts-btn tts-sm" data-tts="${ttsClean(r.passageTitle)}" title="تلفظ"></button>
        ${r.passageTitle}
      </h3>
      <div class="reading-title-fa">${r.passageTitleFa}</div>
      <p class="reading-tap-hint">💡 روی هر پاراگراف بزن تا ترجمه‌اش را ببینی. روی هر کلمه رنگی بزن تا معنی‌اش را ببینی.</p>
      <div class="reading-passage">
        ${r.paragraphs.map(p => `
          <div class="reading-para">
            <p class="reading-para-en">${glossify(p.en, r.glossary)}</p>
            <p class="reading-para-fa">${p.fa}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="reading-comprehension">
      ${r.comprehension.map((block) => {
        if (block.type === 'choose') {
          return `
            <div class="rc-block">
              <h4 class="rc-block-title">${block.title}</h4>
              ${block.items.map((item, ii) => `
                <div class="rc-mcq">
                  <div class="rc-mcq-q">${ii+1}. ${item.q}</div>
                  <div class="rc-mcq-options">
                    ${item.options.map((opt, oi) => `
                      <button class="rc-mcq-opt" data-correct="${oi === item.correct ? '1':'0'}">${String.fromCharCode(97+oi)}) ${opt}</button>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          `;
        }
        if (block.type === 'truefalse') {
          return `
            <div class="rc-block">
              <h4 class="rc-block-title">${block.title}</h4>
              <table class="rc-tf-table">
                <tbody>
                  ${block.items.map((item, ii) => `
                    <tr>
                      <td class="rc-tf-stmt">${ii+1}. ${item.q}</td>
                      <td class="rc-tf-cell"><button class="rc-tf-btn" data-correct="${item.answer ? '1':'0'}" data-val="T">T</button></td>
                      <td class="rc-tf-cell"><button class="rc-tf-btn" data-correct="${item.answer ? '0':'1'}" data-val="F">F</button></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          `;
        }
        if (block.type === 'match-halves') {
          const rights = [...block.pairs];
          if (block.distractor) rights.push(block.distractor);
          rights.sort((a,b) => a.letter.localeCompare(b.letter));
          return `
            <div class="rc-block">
              <h4 class="rc-block-title">${block.title}</h4>
              <div class="rc-match">
                <div class="rc-match-left">
                  ${block.pairs.map((p, pi) => `
                    <div class="rc-match-row">
                      <span class="rc-match-num">${pi+1}.</span>
                      <span class="rc-match-text">${p.left}</span>
                      <input type="text" class="rc-match-input" maxlength="1" placeholder="?" data-answer="${p.letter}">
                    </div>
                  `).join('')}
                </div>
                <div class="rc-match-right">
                  ${rights.map(p => `
                    <div class="rc-match-opt"><span class="rc-match-letter">${p.letter}</span> ${p.right}</div>
                  `).join('')}
                </div>
              </div>
              <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
            </div>
          `;
        }
        if (block.type === 'paragraph-match') {
          return `
            <div class="rc-block">
              <h4 class="rc-block-title">${block.title}</h4>
              ${block.items.map((item, ii) => `
                <div class="plural-task-row"><span class="fbi-num">${ii+1}.</span>
                  <span style="font-family:var(--font-en);unicode-bidi:plaintext;flex:1">${item.statement}</span>
                  <span style="font-family:var(--font-en);unicode-bidi:plaintext">Paragraph <input type="text" class="rc-match-input" maxlength="1" data-answer="${item.answer}" placeholder="?"></span>
                </div>
              `).join('')}
              <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
            </div>
          `;
        }
        if (block.type === 'scan') {
          return `
            <div class="rc-block">
              <h4 class="rc-block-title">${block.title}</h4>
              ${block.items.map((item, ii) => `
                <div class="rc-question-row">
                  <div class="rc-q-text">${String.fromCharCode(97+ii)}) ${item.q}</div>
                  <input type="text" class="wb-input" placeholder="پاسخ..." data-answer="${(item.sampleAnswer||'').replace(/"/g,'&quot;')}">
                </div>
              `).join('')}
              <button class="wb-show-answers-btn">نمایش پاسخ‌های نمونه</button>
            </div>
          `;
        }
        return '';
      }).join('')}
    </div>
  `;
}

// ════════════════════════════════════════════════
//  5. GRAMMAR
// ════════════════════════════════════════════════
function buildGrammar() {
  const g = LESSON.grammar;
  if (!g) return `<div class="placeholder-msg">بخش دستور زبان آماده نیست.</div>`;

  // grammar note text comes from lesson data (specific to each lesson's grammar)
  const wordNote = g.noteText || '';
  const noteMap = g.noteMap || null;

  return `
    <div class="section-head">
      <h2>${g.title}</h2>
      <div class="section-fa">${g.titleFa}</div>
    </div>

    ${g.readTexts ? `
      <h3 class="grammar-subhead">${g.readTexts.title}</h3>
      <p class="reading-tap-hint">💡 روی کلمات رنگی بزن تا توضیح گرامری ببینی.</p>
      <div class="grammar-read-texts">
        ${g.readTexts.texts.map(t => `
          <div class="grammar-read-card">
            <div class="grammar-read-en">${hlNote(t.en, wordNote, noteMap)}</div>
            <div class="grammar-read-fa">${t.fa}</div>
          </div>
        `).join('')}
      </div>
    ` : ''}

    ${g.explanation ? `
      <div class="grammar-explanation">
        ${g.explanation.map(p => `<p>${p}</p>`).join('')}
      </div>
    ` : ''}

    ${g.tablesTitle ? `<h3 class="grammar-subhead">${g.tablesTitle}</h3>` : ''}
    ${g.tables.map(table => `
      <div class="grammar-table-card">
        <h4 class="grammar-table-title">${table.title}</h4>
        <div class="grammar-table-wrap">
          <table class="grammar-table">
            <thead><tr>${table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>
              ${table.rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}
            </tbody>
          </table>
        </div>
        ${table.examples ? `
          <div class="grammar-table-examples">
            ${table.examples.map(ex => `
              <div class="grammar-example-row">
                <button class="tts-btn tts-sm" data-tts="${ttsClean(ex.en.replace(/[{}]/g,''))}" title="تلفظ"></button>
                <span class="grammar-example-en">${hlNote(ex.en, wordNote, noteMap)}</span>
                <span class="grammar-example-fa">${ex.fa}</span>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `).join('')}

    ${g.notes ? `
      <div class="grammar-notes">
        ${g.notes.map(n => `<div class="grammar-note">📌 ${n}</div>`).join('')}
      </div>
    ` : ''}

    ${g.practice ? `
      <div class="grammar-practice">
        <h4 class="grammar-table-title">${g.practice.title}</h4>
        <p class="gr-instruction">${g.practice.instruction}</p>
        <div class="practice-mcq-list">
          ${g.practice.items.map((item, ii) => `
            <div class="practice-mcq">
              <div class="practice-mcq-q">${ii+1}. ${item.sentence}</div>
              <div class="practice-mcq-options">
                ${item.options.map((opt, oi) => `
                  <button class="practice-mcq-opt" data-correct="${oi === item.correct ? '1':'0'}">${opt}</button>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${g.whQuestions ? `
      <div class="grammar-table-card">
        <h4 class="grammar-table-title">${g.whQuestions.title}</h4>
        <div class="wh-base">${g.whQuestions.base}</div>
        <div class="wh-list">
          ${g.whQuestions.items.map(it => `
            <div class="wh-row">
              <span class="wh-word">${it.wh}</span>
              <span class="wh-q">${it.q}</span>
              <button class="tts-btn tts-sm" data-tts="${ttsClean(it.q)}" title="تلفظ"></button>
            </div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${g.friendWork ? `
      <div class="grammar-practice">
        <h4 class="grammar-table-title">${g.friendWork.title}</h4>
        <p class="gr-instruction">${g.friendWork.partA.instruction}</p>
        <div class="friend-work-list">
          ${g.friendWork.partA.items.map((it, i) => `
            <div class="friend-work-row"><span class="fw-prompt">${i+1}. ${it}</span> <input type="text" class="wb-input sl-input" placeholder="..."></div>
          `).join('')}
        </div>
        <p class="gr-instruction" style="margin-top:1rem">${g.friendWork.partB.instruction}</p>
        <div class="friend-work-list">
          ${g.friendWork.partB.items.map((it, i) => `
            <div class="friend-work-row"><span class="fw-prompt">${i+1}. ${it}</span> <input type="text" class="wb-input sl-input" placeholder="...?"></div>
          `).join('')}
        </div>
      </div>
    ` : ''}

    ${g.goingTo ? `
      <div class="grammar-going-to">
        <div class="going-to-banner">${g.goingTo.title}</div>
        <h4 class="grammar-subhead">${g.goingTo.readTitle}</h4>
        <div class="grammar-table-examples">
          ${g.goingTo.examples.map(ex => `
            <div class="grammar-example-row">
              <button class="tts-btn tts-sm" data-tts="${ttsClean(ex.en.replace(/[{}]/g,''))}" title="تلفظ"></button>
              <span class="grammar-example-en">${hlNote(ex.en, g.goingTo.note || wordNote, g.goingTo.noteMap || noteMap)}</span>
              <span class="grammar-example-fa">${ex.fa}</span>
            </div>
          `).join('')}
        </div>
        <div class="grammar-table-card">
          <div class="grammar-table-wrap">
            <table class="grammar-table">
              <thead><tr>${g.goingTo.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
              <tbody>
                ${g.goingTo.table.rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    ` : ''}
  `;
}

// ════════════════════════════════════════════════
//  6. LISTENING & SPEAKING
// ════════════════════════════════════════════════
function buildListeningSpeaking() {
  const ls = LESSON.listeningSpeaking;
  if (!ls) return `<div class="placeholder-msg">بخش شنیدن و گفتن آماده نیست.</div>`;

  return `
    <div class="section-head">
      <h2>Listening &amp; Speaking</h2>
      <div class="section-fa">${ls.titleFa}</div>
    </div>

    <div class="strategy-box">
      <div class="strategy-label">🗣️ Speaking Strategy</div>
      <div class="strategy-title">${ls.strategyTitle}</div>
      <div class="strategy-title-fa">${ls.strategyTitleFa}</div>
    </div>

    <div class="ls-patterns">
      ${ls.patterns.map(p => `
        <div class="ls-pattern-row">
          <div class="ls-pattern-q">
            <button class="tts-btn tts-sm" data-tts="${ttsClean(p.q)}"></button>${p.q}
          </div>
          <div class="ls-pattern-a">
            <button class="tts-btn tts-sm" data-tts="${ttsClean(p.a)}"></button>${p.a}
          </div>
        </div>
      `).join('')}
    </div>

    <div class="ls-patterns-list">
      <h4 class="nw-subhead">Useful patterns:</h4>
      <ul>
        ${ls.patternsList.map(p => `<li>${p}</li>`).join('')}
      </ul>
    </div>

    ${ls.listenComplete ? `
      <div class="ls-listen">
        <h4 class="nw-subhead">${ls.listenComplete.title}</h4>
        ${ls.listenComplete.conversations.map(conv => `
          <div class="ls-conv-block">
            <div class="ls-conv-label">Conversation ${conv.num}</div>
            <div class="audio-bar" data-audio="${audioPath('listening', conv.num)}">
              <button class="audio-play"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
              <div class="progress"><div class="progress-fill"></div></div>
              <span class="time">0:00</span>
            </div>
            ${conv.items.map(it => `
              <div class="ls-complete-row">
                <span style="font-family:var(--font-en);unicode-bidi:plaintext">${it}</span>
                <input type="text" class="wb-input" placeholder="...">
              </div>
            `).join('')}
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;
}

// ════════════════════════════════════════════════
//  7. PRONUNCIATION
// ════════════════════════════════════════════════
function buildPronunciation() {
  const p = LESSON.pronunciation;
  if (!p) return `<div class="placeholder-msg">بخش تلفظ آماده نیست.</div>`;

  let guideHTML = '';
  if (p.intonationGuide) {
    const g = p.intonationGuide;
    guideHTML = `
      <div class="intonation-guide">
        ${g.rising ? `<div class="intonation-card intonation-rising"><div class="intonation-card-head"><span class="intonation-arrow-big">↗</span> Rising</div><div class="intonation-card-body">${g.rising}</div></div>` : ''}
        ${g.falling ? `<div class="intonation-card intonation-falling"><div class="intonation-card-head"><span class="intonation-arrow-big">↘</span> Falling</div><div class="intonation-card-body">${g.falling}</div></div>` : ''}
      </div>
    `;
  }

  return `
    <div class="section-head">
      <h2>${p.title}</h2>
      <div class="section-fa">${p.titleFa}</div>
    </div>

    <div class="pron-rule">💡 ${p.rule}</div>

    ${guideHTML}

    ${p.examplesTitle ? `<h4 class="nw-subhead">${p.examplesTitle}</h4>` : ''}
    <div class="pron-examples">
      ${p.examples.map((ex, i) => `
        <div class="pron-example-row">
          <span class="pron-num">${i+1}</span>
          <div class="pron-example-body">
            <div class="pron-q">
              <button class="tts-btn tts-sm" data-tts="${ttsClean(ex.en)}"></button>${ex.en}
            </div>
            <div class="pron-a">${ex.a}</div>
          </div>
        </div>
      `).join('')}
    </div>

    ${p.punctuation ? `
      <div class="pron-punct">
        <h4 class="nw-subhead">${p.punctuation.title}</h4>
        <div class="pron-punct-text">${p.punctuation.text}</div>
        <textarea class="wb-input pron-punct-input" rows="6" placeholder="متن را با نقطه و حرف بزرگ بازنویسی کن..."></textarea>
        <details class="pron-punct-answer">
          <summary>✓ نمایش پاسخ</summary>
          <div class="pron-punct-text" style="background:var(--success-bg);border-color:var(--success);margin-top:.5rem">${p.punctuation.answer}</div>
        </details>
      </div>
    ` : ''}
  `;
}

// ════════════════════════════════════════════════
//  8. WRITING
// ════════════════════════════════════════════════
function buildWriting() {
  const w = LESSON.writing;
  if (!w) return `<div class="placeholder-msg">بخش نوشتن آماده نیست.</div>`;

  function renderSection(s) {
    if (s.type === 'lesson-noun') {
      return `
        <div class="writing-lesson">
          <h3 class="writing-lesson-title">${s.title}</h3>
          <p class="writing-intro">${s.intro}</p>
          <p class="writing-intro-fa">${s.introFa}</p>
          <div class="writing-categories">
            ${s.categories.map(cat => `
              <div class="writing-cat-card">
                <div class="writing-cat-label">${cat.label}</div>
                <div class="writing-cat-examples">${cat.examples.map(e => `<span class="writing-cat-word">${e}</span>`).join('')}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    if (s.type === 'word-web-task') {
      return `
        <div class="writing-task">
          <h4 class="writing-task-title">${s.title}</h4>
          <p class="gr-instruction">${s.instruction}</p>
          <div class="word-web">
            ${s.web.map(circle => `
              <div class="word-web-circle">
                <div class="word-web-label">${circle}</div>
                <textarea class="word-web-input" rows="3" placeholder="..."></textarea>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    if (s.type === 'lesson-plural') {
      return `
        <div class="writing-lesson">
          <h3 class="writing-lesson-title">${s.title}</h3>
          <p class="writing-intro">${s.intro}</p>
          <p class="writing-intro-fa">${s.introFa}</p>
          <div class="plural-tables">
            <div class="plural-table-card">
              <div class="plural-table-head">1) Regular</div>
              <table class="plural-table">${s.regular.map(p => `<tr><td>${p[0]}</td><td>→</td><td>${p[1]}</td></tr>`).join('')}</table>
            </div>
            <div class="plural-table-card">
              <div class="plural-table-head">2) Irregular</div>
              <table class="plural-table">${s.irregular.map(p => `<tr><td>${p[0]}</td><td>→</td><td><strong>${p[1]}</strong></td></tr>`).join('')}</table>
            </div>
          </div>
        </div>
      `;
    }
    if (s.type === 'plural-task') {
      return `
        <div class="writing-task">
          <h4 class="writing-task-title">${s.title}</h4>
          ${s.wordBank ? `<div class="wb-wordbank">${s.wordBank.map(w => `<span class="wb-bank-word">${w}</span>`).join('')}</div>` : ''}
          ${s.items.map((item, i) => {
            let html = item.sentence;
            item.words.forEach((wd, wi) => {
              html = html.replace('_____', `<span class="plural-slot"><input type="text" class="wb-input wb-input-sm" data-answer="${item.answers[wi]}" placeholder="(${wd})" style="width:120px"></span>`);
            });
            return `<div class="plural-task-row"><span class="fbi-num">${i+1}.</span> <span style="font-family:var(--font-en);unicode-bidi:plaintext">${html}</span></div>`;
          }).join('')}
          <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
        </div>
      `;
    }
    if (s.type === 'lesson-types') {
      return `
        <div class="writing-lesson">
          <h3 class="writing-lesson-title">${s.title}</h3>
          <div class="writing-categories">
            <div class="writing-cat-card"><div class="writing-cat-label">1) Common nouns</div><div class="writing-cat-examples">${s.common.map(e => `<span class="writing-cat-word">${e}</span>`).join('')}</div></div>
            <div class="writing-cat-card"><div class="writing-cat-label">2) Proper nouns</div><div class="writing-cat-examples">${s.proper.map(e => `<span class="writing-cat-word">${e}</span>`).join('')}</div></div>
          </div>
        </div>
      `;
    }
    if (s.type === 'circle-task') {
      return `
        <div class="writing-task">
          <h4 class="writing-task-title">${s.title}</h4>
          ${s.items.map((item, i) => {
            let html = item.text.replace(/\[([^\/\]]+)\/([^\]]+)\]/g, (m, opt1, opt2) => {
              return `<span class="circle-choice" data-a="${opt1}"><button class="circle-opt">${opt1}</button><button class="circle-opt">${opt2}</button></span>`;
            });
            return `<div class="circle-task-row"><span class="fbi-num">${i+1}.</span> <span style="font-family:var(--font-en);unicode-bidi:plaintext">${html}</span></div>`;
          }).join('')}
        </div>
      `;
    }
    if (s.type === 'lesson-markers') {
      return `
        <div class="writing-lesson">
          <h3 class="writing-lesson-title">${s.title}</h3>
          <p class="writing-intro">${s.intro}</p>
          <table class="markers-table">
            ${s.markers.map(m => `<tr><td class="markers-marker">${m.marker}</td><td class="markers-ex">${m.examples}</td></tr>`).join('')}
          </table>
        </div>
      `;
    }
    if (s.type === 'circle-nouns-task') {
      return `
        <div class="writing-task">
          <h4 class="writing-task-title">${s.title}</h4>
          <p class="reading-tap-hint">💡 روی کلمات بزن تا اسم‌ها مشخص شوند.</p>
          ${s.items.map((item, i) => {
            const words = item.sentence.split(/(\s+)/);
            const html = words.map(tok => {
              const clean = tok.replace(/[.,]/g,'');
              if (item.nouns.includes(clean)) {
                return `<span class="noun-token" data-noun="1">${tok}</span>`;
              }
              return tok.trim() ? `<span class="noun-token">${tok}</span>` : tok;
            }).join('');
            return `<div class="circle-task-row"><span class="fbi-num">${i+1}.</span> <span style="font-family:var(--font-en);unicode-bidi:plaintext">${html}</span></div>`;
          }).join('')}
        </div>
      `;
    }
    return '';
  }

  return `
    <div class="section-head">
      <h2>${w.title}</h2>
      <div class="section-fa">${w.titleFa}</div>
    </div>
    ${w.sections.map(renderSection).join('')}
  `;
}

// ════════════════════════════════════════════════
//  VOCABULARY DEVELOPMENT (Vision 2: prefixes/suffixes/phrasal verbs)
// ════════════════════════════════════════════════
function buildVocabDev() {
  const v = LESSON.vocabDev;
  if (!v) return `<div class="placeholder-msg">بخش واژه‌سازی آماده نیست.</div>`;

  return `
    <div class="section-head">
      <h2>${v.title}</h2>
      <div class="section-fa">${v.titleFa}</div>
    </div>
    ${(v.blocks || []).map(b => {
      if (b.type === 'affix-table') {
        return `
          <div class="grammar-table-card">
            <h4 class="grammar-table-title">${b.title}</h4>
            ${b.intro ? `<p class="writing-intro">${b.intro}</p>` : ''}
            ${b.introFa ? `<p class="writing-intro-fa">${b.introFa}</p>` : ''}
            <div class="grammar-table-wrap">
              <table class="grammar-table">
                <thead><tr>${b.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
                <tbody>${b.rows.map(row => `<tr>${row.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
              </table>
            </div>
          </div>
        `;
      }
      if (b.type === 'circle-words') {
        return `
          <div class="wb-task" style="border:1px solid var(--border-light);border-radius:var(--radius)">
            <h4 class="wb-task-title">${b.title}</h4>
            <p class="reading-tap-hint">💡 روی کلمه‌هایی که ${b.target} دارند بزن.</p>
            <div class="wb-wordbank">
              ${b.words.map(w => `<button class="odd-opt" data-correct="${b.answers.includes(w) ? '1':'0'}">${w}</button>`).join('')}
            </div>
          </div>
        `;
      }
      if (b.type === 'fill-table') {
        return `
          <div class="wb-task" style="border:1px solid var(--border-light);border-radius:var(--radius)">
            <h4 class="wb-task-title">${b.title}</h4>
            ${b.items.map((item, i) => {
              const html = item.text.replace('_____', `<input type="text" class="wb-input wb-input-sm" style="width:140px" data-answer="${item.answer}" placeholder="...">`);
              return `<div class="plural-task-row${item.image ? ' vd-img-row' : ''}">${item.image ? `<div class="img-box img-square vd-img" data-src="${imgPath(item.image)}" data-alt=""></div>` : ''}<span class="fbi-num">${i+1}.</span> <span style="font-family:var(--font-en);unicode-bidi:plaintext">${html}</span>${item.image2 ? `<div class="img-box img-square vd-img" data-src="${imgPath(item.image2)}" data-alt=""></div>` : ''}</div>`;
            }).join('')}
            <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
          </div>
        `;
      }
      return '';
    }).join('')}
  `;
}

// ════════════════════════════════════════════════
//  WHAT YOU LEARNED (Vision 2 wrap-up)
// ════════════════════════════════════════════════
function buildWhatYouLearned() {
  const w = LESSON.whatYouLearned;
  if (!w) return `<div class="placeholder-msg">بخش جمع‌بندی آماده نیست.</div>`;

  return `
    <div class="section-head">
      <h2>What You Learned</h2>
      <div class="section-fa">جمع‌بندی درس</div>
    </div>

    ${w.listening ? `
      <div class="ls-conv-block">
        <h4 class="wb-task-title">${w.listening.title}</h4>
        <div class="audio-bar" data-audio="${audioPath('whatyoulearned', 1)}">
          <button class="audio-play"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
          <div class="progress"><div class="progress-fill"></div></div>
          <span class="time">0:00</span>
        </div>
        ${w.listening.tasks.map((t, i) => `
          <div class="ls-complete-row">
            <span style="font-family:var(--font-en);unicode-bidi:plaintext">${i+1}. ${t}</span>
            <input type="text" class="wb-input" placeholder="...">
          </div>
        `).join('')}
      </div>
    ` : ''}

    ${w.reading ? `
      <div class="reading-card">
        <h4 class="reading-title">${w.reading.title || 'B. Now read the rest.'}</h4>
        ${w.reading.fa ? `<p class="reading-tap-hint">💡 روی متن بزن تا ترجمه‌اش را ببینی.</p>` : ''}
        <div class="reading-passage">
          <div class="reading-para">
            <p class="reading-para-en">${w.reading.glossary ? glossify(w.reading.text, w.reading.glossary) : w.reading.text}</p>
            ${w.reading.fa ? `<p class="reading-para-fa">${w.reading.fa}</p>` : ''}
          </div>
        </div>
      </div>
      ${(w.reading.tasks || []).map(t => `<div class="grammar-note">📌 ${t}</div>`).join('')}
    ` : ''}

    ${w.pairWork ? `
      <div class="grammar-practice">
        <h4 class="grammar-table-title">${w.pairWork.title}</h4>
        <ul class="ls-patterns-list" style="list-style:none;padding:0">
          ${w.pairWork.questions.map(q => `<li style="font-family:var(--font-en);unicode-bidi:plaintext;text-align:start;background:var(--paper-warm);border-radius:6px;padding:.5rem .75rem;margin-bottom:.4rem">${q}</li>`).join('')}
        </ul>
      </div>
    ` : ''}
  `;
}


// ════════════════════════════════════════════════
//  WORKBOOK
// ════════════════════════════════════════════════
function buildWorkbook() {
  const wb = LESSON.workbook;
  if (!wb) return `<div class="placeholder-msg">کتاب کار آماده نیست.</div>`;

  function renderTask(t) {
    if (t.type === 'reading-passage') {
      return `
        <div class="reading-card">
          <h4 class="reading-title">${t.passageTitle}</h4>
          ${t.passageFa ? `<p class="reading-tap-hint">💡 روی متن بزن تا ترجمه‌اش را ببینی. روی کلمات رنگی بزن تا معنی‌شان را ببینی.</p>` : ''}
          <div class="reading-passage">
            <div class="reading-para">
              <p class="reading-para-en">${t.glossary ? glossify(t.passage, t.glossary) : t.passage}</p>
              ${t.passageFa ? `<p class="reading-para-fa">${t.passageFa}</p>` : ''}
            </div>
          </div>
        </div>
      `;
    }
    if (t.type === 'truefalse') {
      return `
        <div class="rc-block">
          <h4 class="rc-block-title">${t.title}</h4>
          <table class="rc-tf-table"><tbody>
            ${t.items.map((item, ii) => `
              <tr>
                <td class="rc-tf-stmt">${ii+1}. ${item.q}</td>
                <td class="rc-tf-cell"><button class="rc-tf-btn" data-correct="${item.answer ? '1':'0'}">T</button></td>
                <td class="rc-tf-cell"><button class="rc-tf-btn" data-correct="${item.answer ? '0':'1'}">F</button></td>
              </tr>
            `).join('')}
          </tbody></table>
        </div>
      `;
    }
    if (t.type === 'short-answer') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          ${t.questions.map((q, i) => `
            <div class="rc-question-row">
              <div class="rc-q-text">${i+1}. ${q.q}</div>
              <input type="text" class="wb-input" placeholder="پاسخ..." data-answer="${(q.sampleAnswer||'').replace(/"/g,'&quot;')}">
            </div>
          `).join('')}
          <button class="wb-show-answers-btn">نمایش پاسخ‌های نمونه</button>
        </div>
      `;
    }
    if (t.type === 'chart-fill') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          <table class="wb-chart-table">
            <thead><tr>${t.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
            <tbody>
              <tr class="wb-chart-example"><td>${t.example[0]}</td><td>${t.example[1]}</td><td>${t.example[2]}</td></tr>
              ${t.rows.map(v => `<tr><td>${v}</td><td><input type="text" class="wb-input" placeholder="Past..."></td><td><input type="text" class="wb-input" placeholder="Future..."></td></tr>`).join('')}
            </tbody>
          </table>
        </div>
      `;
    }
    if (t.type === 'picture-future') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          <div class="nw-grid">
            ${t.items.map(item => `
              <div class="nw-card">
                <div class="img-box img-wide" data-src="${imgPath(item.image)}" data-alt="${item.hint}"></div>
                <div class="nw-card-body">
                  <div class="wb-pic-hint">${item.hint}</div>
                  <input type="text" class="wb-input" placeholder="He will..." data-answer="${item.answer.replace(/"/g,'&quot;')}">
                </div>
              </div>
            `).join('')}
          </div>
          <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
        </div>
      `;
    }
    if (t.type === 'yes-no') {
      return `
        <div class="rc-block">
          <h4 class="rc-block-title">${t.title}</h4>
          <table class="rc-tf-table"><tbody>
            ${t.items.map((item, ii) => `
              <tr>
                <td class="rc-tf-stmt">${ii+1}. ${item}</td>
                <td class="rc-tf-cell"><button class="rc-tf-btn">Yes</button></td>
                <td class="rc-tf-cell"><button class="rc-tf-btn">No</button></td>
              </tr>
            `).join('')}
          </tbody></table>
        </div>
      `;
    }
    if (t.type === 'fill-going-to') {
      let html = t.text;
      t.blanks.forEach(b => {
        html = html.replace(`[${b.num}]`, `<input type="text" class="wb-input wb-input-sm" style="width:130px" data-answer="${b.answer.replace(/"/g,'&quot;')}" placeholder="${b.num}">`);
      });
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          <div class="report-paragraph" style="font-family:var(--font-en);unicode-bidi:plaintext;text-align:start;line-height:2.4;background:#fff;border:1px solid var(--border-light);border-radius:var(--radius);padding:1rem 1.25rem">${html}</div>
          <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
        </div>
      `;
    }
    if (t.type === 'word-search') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          <p class="gr-instruction">${t.instruction}</p>
          <div class="wb-wordbank">
            ${t.wordBank.map(w => `<span class="wb-bank-word ${t.animals.includes(w) ? 'is-animal':''}">${w}</span>`).join('')}
          </div>
          <p class="reading-tap-hint">۱۱ حیوان: ${t.animals.join('، ')}</p>
        </div>
      `;
    }
    if (t.type === 'odd-one-out') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          ${t.items.map((item, i) => `
            <div class="odd-row">
              <span class="fbi-num">${i+1}.</span>
              ${item.options.map((opt, oi) => `<button class="odd-opt" data-correct="${oi === item.odd ? '1':'0'}">${opt}</button>`).join('')}
            </div>
          `).join('')}
        </div>
      `;
    }
    if (t.type === 'match-columns') {
      const shuffledB = [...t.pairs].map(p => ({text:p.b, letter:p.letter})).sort((a,b)=>a.letter.localeCompare(b.letter));
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          <div class="rc-match">
            <div class="rc-match-left">
              ${t.pairs.map((p, i) => `
                <div class="rc-match-row">
                  <span class="rc-match-num">${i+1}.</span>
                  <span class="rc-match-text">${p.a}</span>
                  <input type="text" class="rc-match-input" maxlength="1" placeholder="?" data-answer="${p.letter}">
                </div>
              `).join('')}
            </div>
            <div class="rc-match-right">
              ${shuffledB.map(b => `<div class="rc-match-opt"><span class="rc-match-letter">${b.letter}</span> ${b.text}</div>`).join('')}
            </div>
          </div>
          <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
        </div>
      `;
    }
    if (t.type === 'group-words') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          <div class="wb-wordbank">${t.words.map(w => `<span class="wb-bank-word">${w}</span>`).join('')}</div>
          <div class="group-cols">
            ${t.groups.map(g => `
              <div class="group-col">
                <div class="group-col-head">${g}</div>
                ${[1,2,3,4,5].map(() => `<input type="text" class="wb-input wb-input-sm" placeholder="...">`).join('')}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    if (t.type === 'order-lifespan') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          <div class="wb-wordbank">${t.words.map(w => `<span class="wb-bank-word">${w}</span>`).join('')}</div>
          <div class="lifespan-slots">
            ${t.words.map((_, i) => `<div class="lifespan-slot"><span class="lifespan-num">${i+1}</span><input type="text" class="wb-input wb-input-sm" placeholder="..."></div>`).join('')}
          </div>
          <details class="pron-punct-answer"><summary>✓ نمایش پاسخ</summary><div class="reading-tap-hint">${t.answer.join(' → ')}</div></details>
        </div>
      `;
    }
    if (t.type === 'fill-words') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          <div class="wb-wordbank">${t.wordBank.map(w => `<span class="wb-bank-word">${w}</span>`).join('')}</div>
          ${t.items.map((item, i) => {
            const html = item.sentence.replace('_____', `<input type="text" class="wb-input wb-input-sm" style="width:120px" data-answer="${item.answer}" placeholder="...">`);
            return `<div class="plural-task-row"><span class="fbi-num">${i+1}.</span> <span style="font-family:var(--font-en);unicode-bidi:plaintext">${html}</span></div>`;
          }).join('')}
          <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
        </div>
      `;
    }
    if (t.type === 'pron-practice') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          <div class="pron-examples">
            ${t.items.map((item, i) => `
              <div class="pron-example-row">
                <span class="pron-num">${i+1}</span>
                <div class="pron-example-body"><div class="pron-q"><button class="tts-btn tts-sm" data-tts="${ttsClean(item)}"></button>${item} ↘</div></div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    if (t.type === 'unscramble-nouns') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          <div class="unscramble-grid">
            ${t.items.map(item => `
              <div class="unscramble-row">
                <span class="unscramble-letters">${item.scrambled}</span>
                <input type="text" class="wb-input wb-input-sm" data-answer="${item.answer}" placeholder="کلمه؟">
                <span class="unscramble-group">(${item.group})</span>
              </div>
            `).join('')}
          </div>
          <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
        </div>
      `;
    }
    if (t.type === 'singular-plural-task') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          ${t.instructions.map(ins => `<p class="gr-instruction">${ins}</p>`).join('')}
          <textarea class="wb-input" rows="4" placeholder="..."></textarea>
        </div>
      `;
    }
    if (t.type === 'circle-task-wb') {
      return `
        <div class="wb-task">
          <h4 class="wb-task-title">${t.title}</h4>
          ${t.items.map((item, i) => {
            const html = item.text.replace(/\[([^\/\]]+)\/([^\]]+)\]/g, (m, opt1, opt2) => {
              return `<span class="circle-choice" data-a="${item.answer}"><button class="circle-opt">${opt1}</button><button class="circle-opt">${opt2}</button></span>`;
            });
            return `<div class="circle-task-row"><span class="fbi-num">${i+1}.</span> <span style="font-family:var(--font-en);unicode-bidi:plaintext">${html}</span></div>`;
          }).join('')}
        </div>
      `;
    }
    return '';
  }

  return `
    <div class="section-head">
      <h2>Workbook</h2>
      <div class="section-fa">کتاب کار</div>
      <div class="section-desc">تمرین‌های کتاب کار درس ${LESSON.num} — مطابق کتاب چاپی.</div>
    </div>
    ${wb.map(part => `
      <div class="wb-part">
        <div class="wb-part-head">
          <span class="wb-part-label">${part.part}</span>
          <span class="wb-part-section">${part.section}</span>
          <span class="wb-part-fa">${part.sectionFa}</span>
        </div>
        ${part.tasks.map(renderTask).join('')}
      </div>
    `).join('')}
  `;
}

// ════════════════════════════════════════════════
//  QUIZ
// ════════════════════════════════════════════════
function buildQuiz() {
  const quiz = LESSON.quiz;
  if (!quiz) return `<div class="placeholder-msg">آزمون آماده نیست.</div>`;

  return `
    <div class="section-head">
      <h2>Quiz</h2>
      <div class="section-fa">آزمون پایانی درس</div>
      <div class="section-desc">به سؤالات زیر پاسخ بده تا میزان یادگیری‌ات را بسنجی.</div>
    </div>
    <div class="quiz-list">
      ${quiz.map((q, qi) => `
        <div class="quiz-card" data-q="${qi}">
          <div class="quiz-q">
            <span class="quiz-num">${qi+1}</span>
            <div>
              <div class="quiz-q-en">${q.q}</div>
              <div class="quiz-q-fa">${q.qFa}</div>
            </div>
          </div>
          <div class="quiz-options">
            ${q.options.map((opt, oi) => `
              <button class="quiz-opt" data-correct="${oi === q.correct ? '1':'0'}">${opt}</button>
            `).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ════════════════════════════════════════════════
//  ASSEMBLE ALL TABS
// ════════════════════════════════════════════════
const contentArea = document.getElementById('contentArea');
contentArea.innerHTML = `
  <div class="tab-panel active" data-panel="getReady">${buildGetReady()}</div>
  <div class="tab-panel" data-panel="conversation">${buildConversation()}</div>
  <div class="tab-panel" data-panel="newWords">${buildNewWords()}</div>
  <div class="tab-panel" data-panel="reading">${buildReading()}</div>
  <div class="tab-panel" data-panel="vocabDev">${buildVocabDev()}</div>
  <div class="tab-panel" data-panel="grammar">${buildGrammar()}</div>
  <div class="tab-panel" data-panel="listeningSpeaking">${buildListeningSpeaking()}</div>
  <div class="tab-panel" data-panel="pronunciation">${buildPronunciation()}</div>
  <div class="tab-panel" data-panel="writing">${buildWriting()}</div>
  <div class="tab-panel" data-panel="whatYouLearned">${buildWhatYouLearned()}</div>
  <div class="tab-panel" data-panel="workbook">${buildWorkbook()}</div>
  <div class="tab-panel" data-panel="quiz">${buildQuiz()}</div>
`;

// ─── FOOTER ───
function buildFooter() {
  const num = parseInt(LESSON.num);
  const prev = num > 1 ? LESSONS.find(l => l.num === num - 1) : null;
  const next = num < 3 ? LESSONS.find(l => l.num === num + 1) : null;
  document.getElementById('lessonFooter').innerHTML = `
    ${prev ? `
      <a class="footer-btn" href="lesson.html?id=${prev.num}"><span class="arrow">→</span><div><div class="label">درس قبلی</div><div class="title">Lesson ${prev.num} — ${prev.title}</div></div></a>
    ` : `
      <a class="footer-btn disabled"><span class="arrow">→</span><div><div class="label">درس قبلی</div><div class="title">— شروع کتاب —</div></div></a>
    `}
    ${next ? `
      <a class="footer-btn next" href="lesson.html?id=${next.num}"><span class="arrow">←</span><div><div class="label">درس بعدی</div><div class="title">Lesson ${next.num} — ${next.title}</div></div></a>
    ` : `
      <a class="footer-btn next disabled"><span class="arrow">←</span><div><div class="label">درس بعدی</div><div class="title">— پایان کتاب —</div></div></a>
    `}
  `;
}
buildFooter();

// ─── TAB SWITCHING ───
const tabLabels = {getReady:'آماده شو',conversation:'مکالمه',newWords:'کلمات جدید',reading:'خواندن',vocabDev:'واژه‌سازی',grammar:'دستور زبان',listeningSpeaking:'شنیدن و گفتن',pronunciation:'تلفظ',writing:'نوشتن',whatYouLearned:'جمع‌بندی',workbook:'کتاب کار',quiz:'آزمون'};
const TOTAL_TABS = 12;

function switchTab(target) {
  document.querySelectorAll('.sidebar-item').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll(`[data-tab="${target}"]`).forEach(b => b.classList.add('active'));
  const panel = document.querySelector(`[data-panel="${target}"]`);
  if (panel) panel.classList.add('active');
  document.querySelectorAll(`[data-tab="${target}"]`).forEach(b => b.classList.add('completed'));
  document.getElementById('mobileCurrentSection').textContent = tabLabels[target] || '';
  updateProgress();
  document.getElementById('bottomSheet').classList.remove('active');
  document.getElementById('bottomSheetOverlay').classList.remove('active');
  window.scrollTo({top: 0, behavior: 'smooth'});
}
document.querySelectorAll('#sidebarList .sidebar-item').forEach(btn => btn.addEventListener('click', () => switchTab(btn.dataset.tab)));

function updateProgress() {
  const completed = new Set();
  document.querySelectorAll('#sidebarList .sidebar-item.completed').forEach(b => completed.add(b.dataset.tab));
  const percent = Math.round((completed.size / TOTAL_TABS) * 100);
  const faPercent = percent.toString().split('').map(d => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]).join('') + '٪';
  const pv = document.getElementById('progressValue');
  const pf = document.getElementById('progressFill');
  if (pv) pv.textContent = faPercent;
  if (pf) pf.style.width = percent + '%';
}
const activeItem = document.querySelector('#sidebarList .sidebar-item.active');
if (activeItem) activeItem.classList.add('completed');
updateProgress();

// ─── BOTTOM SHEET (mobile) ───
const bottomSheetList = document.getElementById('bottomSheetList');
document.querySelectorAll('#sidebarList .sidebar-item').forEach(item => {
  const clone = item.cloneNode(true);
  clone.addEventListener('click', () => switchTab(clone.dataset.tab));
  const li = document.createElement('li');
  li.appendChild(clone);
  bottomSheetList.appendChild(li);
});
document.getElementById('mobileNavTrigger').addEventListener('click', () => {
  document.getElementById('bottomSheet').classList.add('active');
  document.getElementById('bottomSheetOverlay').classList.add('active');
});
document.getElementById('bottomSheetOverlay').addEventListener('click', () => {
  document.getElementById('bottomSheet').classList.remove('active');
  document.getElementById('bottomSheetOverlay').classList.remove('active');
});

// ─── CONVERSATION: tap line to toggle FA ───
document.querySelectorAll('.conv-line').forEach(line => {
  line.style.cursor = 'pointer';
  line.addEventListener('click', (e) => {
    if (e.target.closest('.tts-btn')) return;
    line.classList.toggle('show-fa');
  });
});

// ─── CONVERSATION QUESTIONS: tap to toggle FA ───
document.querySelectorAll('.conv-q-list li').forEach(li => {
  li.style.cursor = 'pointer';
  li.addEventListener('click', () => li.classList.toggle('show-fa'));
});

// ─── MCQ interactions (reading + grammar practice + quiz) ───
function wireMCQ(selector, optSelector) {
  document.querySelectorAll(selector).forEach(group => {
    const opts = group.querySelectorAll(optSelector);
    opts.forEach(opt => {
      opt.addEventListener('click', () => {
        if (group.classList.contains('answered')) return;
        group.classList.add('answered');
        const correct = opt.dataset.correct === '1';
        opt.classList.add(correct ? 'correct' : 'wrong');
        if (!correct) {
          opts.forEach(o => { if (o.dataset.correct === '1') o.classList.add('correct'); });
        }
      });
    });
  });
}
wireMCQ('.rc-mcq', '.rc-mcq-opt');
wireMCQ('.practice-mcq', '.practice-mcq-opt');
wireMCQ('.quiz-card', '.quiz-opt');

// ─── True/False buttons ───
document.querySelectorAll('.rc-tf-table tr').forEach(row => {
  const btns = row.querySelectorAll('.rc-tf-btn');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (row.classList.contains('answered')) return;
      row.classList.add('answered');
      const correct = btn.dataset.correct === '1';
      btn.classList.add(correct ? 'correct' : 'wrong');
    });
  });
});

// ─── Show answers buttons (scoped to nearest block) ───
document.querySelectorAll('.wb-show-answers-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const block = btn.closest('.rc-block, .wb-task, .writing-task') || btn.parentElement;
    if (!block) return;
    block.querySelectorAll('input[data-answer]').forEach(inp => {
      inp.value = inp.dataset.answer;
      inp.classList.add('revealed');
    });
  });
});

// ─── Reading: tap paragraph to toggle FA ───
document.querySelectorAll('.reading-para').forEach(para => {
  para.querySelector('.reading-para-en')?.addEventListener('click', (e) => {
    if (e.target.closest('.gloss')) return; // word click handled separately
    para.classList.toggle('show-fa');
  });
});

// ─── Reading: tap glossary word to show meaning popup ───
document.querySelectorAll('.gloss').forEach(word => {
  word.addEventListener('click', (e) => {
    e.stopPropagation();
    showWordPopup(word, word.dataset.fa);
  });
});

// ─── Grammar: tap bold word to show grammar note ───
document.querySelectorAll('.kw-note').forEach(word => {
  word.addEventListener('click', (e) => {
    e.stopPropagation();
    showWordPopup(word, word.dataset.note, true);
  });
});

// ─── New Words: tap def card to toggle FA ───
document.querySelectorAll('.nw-def-card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.tts-btn')) return;
    card.classList.toggle('show-fa');
  });
});

// ─── Odd-one-out (like MCQ) ───
document.querySelectorAll('.odd-row').forEach(row => {
  const opts = row.querySelectorAll('.odd-opt');
  opts.forEach(opt => {
    opt.addEventListener('click', () => {
      if (row.classList.contains('answered')) return;
      row.classList.add('answered');
      const correct = opt.dataset.correct === '1';
      opt.classList.add(correct ? 'correct' : 'wrong');
      if (!correct) opts.forEach(o => { if (o.dataset.correct === '1') o.classList.add('correct'); });
    });
  });
});

// ─── Circle-task (pick correct word form) ───
document.querySelectorAll('.circle-choice').forEach(choice => {
  const opts = choice.querySelectorAll('.circle-opt');
  opts.forEach(opt => {
    opt.addEventListener('click', () => {
      if (choice.classList.contains('answered')) return;
      choice.classList.add('answered');
      const correct = opt.textContent === choice.dataset.a;
      opt.classList.add(correct ? 'correct' : 'wrong');
      if (!correct) opts.forEach(o => { if (o.textContent === choice.dataset.a) o.classList.add('correct'); });
    });
  });
});

// ─── Noun-token (highlight nouns) ───
document.querySelectorAll('.noun-token').forEach(tok => {
  tok.addEventListener('click', () => {
    if (tok.dataset.noun === '1') {
      tok.classList.toggle('is-noun');
    } else {
      tok.classList.add('not-noun');
      setTimeout(() => tok.classList.remove('not-noun'), 500);
    }
  });
});

// ─── Word popup (shared) ───
function showWordPopup(el, text, isNote) {
  document.querySelectorAll('.word-popup').forEach(p => p.remove());
  if (!text) return;
  const popup = document.createElement('div');
  popup.className = 'word-popup' + (isNote ? ' word-popup-note' : '');
  popup.innerHTML = text;
  document.body.appendChild(popup);
  const rect = el.getBoundingClientRect();
  const popW = popup.offsetWidth || 240;
  popup.style.top = (window.scrollY + rect.bottom + 6) + 'px';
  popup.style.left = Math.max(8, Math.min(window.innerWidth - popW - 8, rect.left + window.scrollX)) + 'px';
  // force reflow then show
  void popup.offsetWidth;
  popup.classList.add('show');
  const close = (ev) => {
    if (!popup.contains(ev.target) && ev.target !== el) {
      popup.remove();
      document.removeEventListener('click', close);
    }
  };
  setTimeout(() => document.addEventListener('click', close), 50);
}
