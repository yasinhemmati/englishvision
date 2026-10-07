/* ═══════════════════════════════════════════════
   LESSON RENDERER — builds lesson page from data
   ═══════════════════════════════════════════════ */

// Audio path helper - constructs path to audio file for a section
// Usage: audioPath('conversation'), audioPath('practice', 1), audioPath('sounds'), audioPath('listening', 1)
function audioPath(section, num) {
  const lessonNum = (typeof LESSON !== 'undefined' && LESSON && LESSON.num) ? LESSON.num : lessonId;
  if (lessonNum && String(lessonNum).startsWith('R')) return ''; // no audio for reviews
  let filename = section;
  if ((section === 'practice' || section === 'listening') && num) filename = section + num;
  return `../audio/grade7/lesson${lessonNum}/${filename}.mp3`;
}

// Get lesson ID from URL
const urlParams = new URLSearchParams(window.location.search);
const lessonId = urlParams.get('id') || '1';

// Find the lesson
let LESSON = null;
let isReview = false;
if (lessonId.startsWith('review')) {
  isReview = true;
  const reviewNum = parseInt(lessonId.replace('review', ''));
  const review = REVIEWS.find(r => r.num === reviewNum);
  if (review) {
    LESSON = {
      num: 'R' + review.num,
      title: review.title,
      titleFa: review.description,
      function: review.covers,
      functionFa: 'دوره مرور',
      sounds: [],
      duration: 30,
      color: '#FCE4EC',
      isReview: true,
      reviewNum: review.num
    };
  }
} else {
  LESSON = LESSONS.find(l => l.num === parseInt(lessonId));
}

if (!LESSON) {
  document.body.innerHTML = '<div style="padding:4rem 2rem;text-align:center"><h1>درس پیدا نشد</h1><p>این درس وجود ندارد. <a href="index.html">برگشت به صفحه اصلی</a></p></div>';
  throw new Error('Lesson not found');
}

// Set page title
document.getElementById('pageTitle').textContent = `درس ${LESSON.num}: ${LESSON.title} — پایه هفتم`;

// State
let userFlashcards = JSON.parse(localStorage.getItem('uf_grade7') || '{"lesson":[],"saved":[]}');
userFlashcards.lesson = new Set(userFlashcards.lesson);
userFlashcards.saved = new Set(userFlashcards.saved);
let difficultWords = new Set(JSON.parse(localStorage.getItem('df_grade7') || '[]'));

// Pre-populate lesson flashcards if not yet there
if (LESSON.vocabulary) {
  LESSON.vocabulary.forEach(v => userFlashcards.lesson.add(v.word));
}

function saveStorage() {
  localStorage.setItem('uf_grade7', JSON.stringify({
    lesson: [...userFlashcards.lesson],
    saved: [...userFlashcards.saved]
  }));
  localStorage.setItem('df_grade7', JSON.stringify([...difficultWords]));
}

// ─── BUILD HEADER ───
function buildHeader() {
  const wordCount = LESSON.vocabulary ? LESSON.vocabulary.length : 0;
  const sounds = LESSON.sounds && LESSON.sounds.length ? LESSON.sounds.join(' · ') : '—';
  const tag = LESSON.isReview ? `🔄 ${LESSON.function}` : `📘 Prospect 1 — Lesson ${LESSON.num}`;
  
  document.getElementById('lessonHeader').innerHTML = `
    <div class="page-header-inner">
      <div class="breadcrumb">
        <a href="../index.html">صفحه اصلی سایت</a><span class="sep">›</span><a href="index.html">پایه هفتم</a><span class="sep">›</span><span>${LESSON.isReview ? LESSON.title : 'درس ' + LESSON.num}</span>
      </div>
      <div class="page-tag">${tag}</div>
      <h1 class="page-title-en">${LESSON.title}</h1>
      <div class="page-title-fa">${LESSON.titleFa}</div>
      <div class="page-meta">
        <div class="page-meta-item">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          ${LESSON.duration} دقیقه
        </div>
        ${wordCount ? `<div class="page-meta-item"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/></svg> ${wordCount} کلمه جدید</div>` : ''}
        <div class="page-meta-item">
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15"/></svg>
          ${LESSON.functionFa || ''}
        </div>
        ${LESSON.sounds && LESSON.sounds.length ? `<div class="page-meta-item">🔤 ${sounds}</div>` : ''}
      </div>
    </div>
  `;
}

// ─── REVIEW PAGE (self-assessment) ───
if (LESSON.isReview) {
  buildHeader();
  const review = REVIEWS.find(r => r.num === LESSON.reviewNum);
  const lessonNums = review.covers.match(/\d+/g).map(n => parseInt(n));
  const lessons = lessonNums.map(n => LESSONS.find(l => l.num === n)).filter(Boolean);
  
  // Load saved review answers
  const reviewKey = `review_${review.num}_g7`;
  const reviewDoneKey = `lesson_review${review.num}_completed_g7`;
  let savedAnswers = JSON.parse(localStorage.getItem(reviewKey) || '{}');
  function saveReviewAnswer(id, value) {
    savedAnswers[id] = value;
    localStorage.setItem(reviewKey, JSON.stringify(savedAnswers));
  }
  
  // Build summary section
  function renderSummary() {
    return `
      <div class="review-summary">
        <div class="review-summary-head">
          <h3>📚 آنچه در این درس‌ها یاد گرفتی</h3>
          <p>${review.summary}</p>
        </div>
        <div class="review-lessons-mini">
          ${lessons.map(l => `
            <a href="lesson.html?id=${l.num}" class="review-lesson-mini" style="background:linear-gradient(135deg,${l.color}66 0%,#fff 100%);border-color:${l.color}">
              <div class="review-lesson-mini-num" style="background:${l.color}">${l.num}</div>
              <div class="review-lesson-mini-info">
                <div class="review-lesson-mini-title">${l.title}</div>
                <div class="review-lesson-mini-fa">${l.titleFa}</div>
                <div class="review-lesson-mini-letters">${l.sounds.join(' · ')}</div>
              </div>
              <div class="review-lesson-mini-arrow">←</div>
            </a>
          `).join('')}
        </div>
        <div class="review-summary-items">
          ${review.summaryItems.map(item => `
            <div class="review-summary-item">
              <div class="review-summary-icon">${item.icon}</div>
              <div>
                <div class="review-summary-title">${item.title}</div>
                <div class="review-summary-desc" style="font-family:var(--font-en);unicode-bidi:plaintext;text-align:start">${item.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // Build a check-if item
  function renderCheckIfItem(item, sectionIdx, itemIdx, color) {
    const baseId = `r${review.num}-s${sectionIdx}-i${itemIdx}`;
    
    // Special types
    if (item.type === 'letters') {
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="letters-table">
            ${item.letters.map((letter, i) => {
              const id = `${baseId}-l${i}`;
              const val = savedAnswers[id] || '';
              return `
                <div class="letters-table-row">
                  <div class="letters-table-letter">${letter}</div>
                  <input type="text" class="check-if-input letters-input" 
                         data-save-id="${id}" 
                         value="${val}"
                         placeholder="یک کلمه با ${letter}">
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
    
    if (item.type === 'family-jobs') {
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="family-jobs-table">
            ${item.fields.map((f, i) => {
              const id = `${baseId}-f${i}`;
              const val = savedAnswers[id] || '';
              return `
                <div class="family-jobs-row">
                  <div class="family-jobs-label">
                    <div>${f.label}</div>
                    <div class="family-jobs-label-fa">${f.labelFa}</div>
                  </div>
                  <input type="text" class="check-if-input" data-save-id="${id}" value="${val}" placeholder="...">
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
    
    if (item.type === 'count-check') {
      const id = `${baseId}-count`;
      const checked = savedAnswers[id] === 'yes';
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="self-check-row">
            <label class="self-check-label">
              <input type="checkbox" data-save-id="${id}" ${checked ? 'checked' : ''}>
              <span>بله، می‌توانم از یک تا بیست بشمارم</span>
            </label>
            <a href="tools.html?tool=numbers" class="self-check-link">مرور اعداد ←</a>
          </div>
        </div>
      `;
    }
    
    if (item.type === 'four-rooms') {
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="four-rooms-grid">
            ${[1,2,3,4].map(i => {
              const id = `${baseId}-r${i}`;
              const val = savedAnswers[id] || '';
              return `<input type="text" class="check-if-input" data-save-id="${id}" value="${val}" placeholder="اتاق ${['اول','دوم','سوم','چهارم'][i-1]}">`;
            }).join('')}
          </div>
        </div>
      `;
    }
    
    // Default: template with inputs
    let templateHTML = item.template;
    let inputIdx = 0;
    templateHTML = templateHTML.replace(/_____/g, () => {
      const id = `${baseId}-${inputIdx}`;
      const val = savedAnswers[id] || '';
      inputIdx++;
      return `<input type="text" class="check-if-input check-if-input-inline" data-save-id="${id}" value="${val}" placeholder="${item.placeholder || '...'}">`;
    });
    
    return `
      <div class="check-if-item">
        <div class="check-if-ask">
          <span class="check-if-label">Check if</span>
          ${item.ask}
        </div>
        <div class="check-if-ask-fa">${item.askFa}</div>
        <div class="check-if-template">${templateHTML}</div>
      </div>
    `;
  }
  
  // Build the main page HTML
  document.querySelector('.lesson-body').innerHTML = `
    <div class="content-area" style="grid-column:1 / -1">
      <div style="padding:2.5rem">
        <div class="section-head">
          <h2>${review.title}</h2>
          <div class="section-fa">${review.description} — خودارزیابی</div>
          <div class="section-desc">این بخش به شما کمک می‌کنه ببینید چقدر از درس‌های قبلی یاد گرفتید. به سوالات «Check if» جواب بدید و ببینید آیا می‌تونید جملات نمونه رو کامل کنید یا نه. پاسخ‌های شما خودکار ذخیره می‌شه.</div>
        </div>
        
        ${renderSummary()}
        
        <div class="review-sections">
          ${review.sections.map((section, sIdx) => `
            <div class="review-section" style="background:linear-gradient(180deg,${section.color}33 0%,#fff 100%);border-color:${section.color}">
              <div class="review-section-head" style="background:${section.color}">
                <h3>${section.title}</h3>
                <div class="review-section-fa">${section.titleFa}</div>
              </div>
              <div class="review-section-body">
                ${section.items.map((item, iIdx) => renderCheckIfItem(item, sIdx, iIdx, section.color)).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        
        <div class="review-actions">
          <button class="btn btn-primary" id="reviewSelfCheck">✓ تأیید: همه رو پاسخ دادم</button>
          <button class="btn btn-outline" id="reviewClearAll">🔄 پاک کردن پاسخ‌ها</button>
        </div>
      </div>
    </div>
  `;
  
  // Attach input handlers - auto-save on blur
  document.querySelectorAll('.check-if-input').forEach(input => {
    input.addEventListener('blur', () => {
      const id = input.dataset.saveId;
      saveReviewAnswer(id, input.value);
    });
    input.addEventListener('input', () => {
      // Debounced save
      clearTimeout(input._saveTimer);
      input._saveTimer = setTimeout(() => {
        saveReviewAnswer(input.dataset.saveId, input.value);
      }, 500);
    });
  });
  
  // Checkbox handler
  document.querySelectorAll('input[type="checkbox"][data-save-id]').forEach(cb => {
    cb.addEventListener('change', () => {
      saveReviewAnswer(cb.dataset.saveId, cb.checked ? 'yes' : 'no');
    });
  });
  
  // Action buttons
  document.getElementById('reviewSelfCheck').addEventListener('click', () => {
    const allInputs = document.querySelectorAll('.check-if-input');
    const filled = [...allInputs].filter(i => i.value.trim()).length;
    const total = allInputs.length;
    const percent = Math.round((filled / total) * 100);
    
    // Mark this review as completed
    localStorage.setItem(reviewDoneKey, 'true');
    
    const toast = document.getElementById('toast');
    if (toast) {
      toast.textContent = `🎉 آفرین! شما ${filled} از ${total} سوال (${percent}٪) رو پاسخ دادی`;
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 3500);
    }
  });
  
  document.getElementById('reviewClearAll').addEventListener('click', () => {
    if (confirm('همه پاسخ‌های این Review پاک شود؟')) {
      localStorage.removeItem(reviewKey);
      localStorage.removeItem(reviewDoneKey);
      window.location.reload();
    }
  });
  
  // Footer with prev/next
  const num = review.num;
  document.getElementById('lessonFooter').innerHTML = `
    ${num > 1 ? `
      <a class="footer-btn" href="lesson.html?id=review${num - 1}">
        <span class="arrow">→</span>
        <div><div class="label">Review قبلی</div><div class="title">Review ${num - 1}</div></div>
      </a>
    ` : `
      <a class="footer-btn" href="lesson.html?id=${lessonNums[lessonNums.length - 1]}">
        <span class="arrow">→</span>
        <div><div class="label">برگشت به</div><div class="title">Lesson ${lessonNums[lessonNums.length - 1]}</div></div>
      </a>
    `}
    ${num < 4 ? `
      <a class="footer-btn next" href="lesson.html?id=${lessonNums[lessonNums.length - 1] + 1}">
        <span class="arrow">←</span>
        <div><div class="label">درس بعدی</div><div class="title">Lesson ${lessonNums[lessonNums.length - 1] + 1}</div></div>
      </a>
    ` : `
      <a class="footer-btn next" href="index.html">
        <span class="arrow">←</span>
        <div><div class="label">برگشت به</div><div class="title">صفحه اصلی</div></div>
      </a>
    `}
  `;
  
  document.querySelector('.mobile-nav-trigger').remove();
  document.querySelector('.bottom-sheet-overlay').remove();
  document.querySelector('.bottom-sheet').remove();
} else {

// ─── NORMAL LESSON ───
buildHeader();

// ─── BUILD CONTENT TABS ───
const contentArea = document.getElementById('contentArea');

function speakerClass(role) {
  return role === 'teacher' ? 'teacher' : (role === 'student' ? 'student' : '');
}

// Make words in text clickable
function tokenize(text) {
  // Split by whitespace and punctuation, but keep punctuation
  const tokens = text.split(/(\s+|[.,!?;:])/);
  return tokens.map(token => {
    if (!token.trim() || /^[\s.,!?;:]+$/.test(token)) return token;
    const lower = token.toLowerCase();
    // Check if part of a phrase
    let inPhrase = null;
    for (const phrase in PHRASE_DICT) {
      if (phrase.split(' ').includes(lower)) {
        inPhrase = phrase;
        break;
      }
    }
    const phraseAttr = inPhrase ? ` data-phrase="${inPhrase}"` : '';
    const phraseClass = inPhrase ? ' in-phrase' : '';
    return `<span class="word${phraseClass}" data-word="${lower}"${phraseAttr}>${token}</span>`;
  }).join('');
}

function tokenizeSentence(text) {
  // For practice items: also handle phrases that span multiple words
  // First, identify phrase boundaries
  let html = text;
  // Sort phrases by length (longest first) to avoid sub-matching
  const sortedPhrases = Object.keys(PHRASE_DICT).sort((a, b) => b.length - a.length);
  
  // Mark phrases in the text
  const tokens = text.split(/(\s+|[.,!?;:])/);
  let result = [];
  
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (!token.trim() || /^[\s.,!?;:]+$/.test(token)) {
      result.push(token);
      continue;
    }
    
    // Try to match phrases starting here
    let matched = false;
    for (const phrase of sortedPhrases) {
      const phraseWords = phrase.split(' ');
      const candidate = [];
      let j = i;
      let wordsFound = 0;
      while (j < tokens.length && wordsFound < phraseWords.length) {
        if (tokens[j].trim() && !/^[\s.,!?;:]+$/.test(tokens[j])) {
          if (tokens[j].toLowerCase().replace(/[.,!?;:]/g, '') === phraseWords[wordsFound]) {
            candidate.push(j);
            wordsFound++;
          } else {
            break;
          }
        }
        j++;
      }
      
      if (wordsFound === phraseWords.length) {
        // It's a match - mark all these tokens
        candidate.forEach(idx => {
          const t = tokens[idx];
          result.push(`<span class="word in-phrase" data-word="${t.toLowerCase()}" data-phrase="${phrase}">${t}</span>`);
          // Add separators between
          if (idx < candidate[candidate.length - 1]) {
            for (let k = idx + 1; k < candidate[candidate.indexOf(idx) + 1]; k++) {
              if (k < tokens.length && tokens[k]) result.push(tokens[k]);
            }
          }
        });
        i = j - 1;
        matched = true;
        break;
      }
    }
    
    if (!matched) {
      const lower = token.toLowerCase().replace(/[.,!?;:]/g, '');
      result.push(`<span class="word" data-word="${lower}">${token}</span>`);
    }
  }
  
  return result.join('');
}

// ─── 1. CONVERSATION ───
function buildConversation() {
  const c = LESSON.conversation;
  if (!c) return `<div class="placeholder-msg">مکالمه برای این درس آماده نیست.</div>`;
  
  // Image path: lesson-specific, or use a default name
  const imagePath = `../images/grade7/lessons/lesson${LESSON.num}/conversation.jpg`;
  const imageAlt = c.descEn || c.desc || 'Conversation scene';
  
  return `
    <div class="section-head">
      <h2>Conversation</h2>
      <div class="section-fa">مکالمه</div>
      <div class="section-desc">${c.desc}</div>
    </div>
    <div class="conv-image-wrap">
      <div class="img-box img-lg" data-src="${imagePath}" data-alt="${imageAlt}">
        ${c.imageCaption ? `<div class="img-caption">${c.imageCaption}</div>` : ''}
      </div>
    </div>
    <div class="translation-toggle">
      <span class="label">🌐 نمایش ترجمه:</span>
      <button class="toggle-pill" data-mode="off">خاموش</button>
      <button class="toggle-pill" data-mode="hover">با کلیک</button>
      <button class="toggle-pill active" data-mode="always">همیشه</button>
    </div>
    <div class="phrase-banner">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <span>روی هر کلمه کلیک کن تا معنی‌اش رو ببینی. کلماتی که <strong style="color:var(--accent)">خط نارنجی</strong> دارن، بخشی از یه عبارت هستن.</span>
    </div>
    <div class="conv-card">
      <div class="audio-bar" data-audio="${audioPath('conversation')}">
        <button class="audio-play"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
        <div class="progress"><div class="progress-fill"></div></div>
        <span class="time">0:00</span>
      </div>
      ${c.lines.map(line => {
        const cleanText = line.en.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
        return `
        <div class="conv-line show-fa">
          <div class="conv-speaker ${speakerClass(line.role)}">${line.speaker}:</div>
          <div class="conv-content">
            <div class="conv-en">${tokenizeSentence(line.en)}</div>
            <div class="conv-fa">${line.fa}</div>
          </div>
          <button class="tts-btn tts-sm" data-tts="${cleanText}" title="تلفظ خط"></button>
        </div>
      `;}).join('')}
    </div>
  `;
}

// ─── 2. PRACTICE ───
function buildPractice() {
  if (!LESSON.practices) return `<div class="placeholder-msg">تمرین‌ها آماده نیست.</div>`;
  
  return `
    <div class="section-head">
      <h2>Practice</h2>
      <div class="section-fa">تمرین گفتاری</div>
      <div class="section-desc">به مثال‌ها گوش دهید، سپس با همکلاسی یا معلم خود سوال و جواب کنید.</div>
    </div>
    <div class="translation-toggle">
      <span class="label">🌐 نمایش ترجمه:</span>
      <button class="toggle-pill" data-mode="off">خاموش</button>
      <button class="toggle-pill" data-mode="hover">با کلیک</button>
      <button class="toggle-pill active" data-mode="always">همیشه</button>
    </div>
    ${LESSON.practices.map((p, pIdx) => `
      <div class="practice-section">
        <div class="practice-section-head">
          <h3>${p.title}</h3>
          <div class="practice-fa">${p.titleFa}</div>
        </div>
        <div class="audio-bar" data-audio="${audioPath('practice', pIdx + 1)}">
          <button class="audio-play"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
          <div class="progress"><div class="progress-fill"></div></div>
          <span class="time">0:00</span>
        </div>
        ${p.note ? `<div class="match-instructions">${p.note}</div>` : ''}
        ${
          // Type: statements (list of single sentences, e.g. introductions)
          p.statements ? `
            <div class="practice-statements">
              ${p.statements.map(s => {
                const text = (typeof s === 'string') ? s : s.en;
                const fa = (typeof s === 'object' && s.fa) ? s.fa : '';
                const cleanText = text.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
                return `
                  <div class="practice-statement">
                    <button class="tts-btn tts-sm" data-tts="${cleanText}" title="تلفظ"></button>
                    <div class="practice-statement-content">
                      <div class="practice-statement-en">${tokenizeSentence(text)}</div>
                      ${fa ? `<div class="practice-statement-fa">${fa}</div>` : ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          ` :
          // Type: circle (e.g. circle the month and day)
          p.circle ? `
            <div class="circle-task">
              ${p.circle.map(group => `
                <div style="margin-bottom:1.25rem">
                  <div style="font-family:var(--font-en);font-size:.95rem;color:var(--text-mid);unicode-bidi:plaintext;text-align:start;margin-bottom:.15rem">${group.label}</div>
                  ${group.labelFa ? `<div style="font-size:.85rem;color:var(--text-soft);margin-bottom:.5rem">${group.labelFa}</div>` : ''}
                  <div class="circle-grid">
                    ${group.options.map(opt => `<button class="circle-chip" data-circle-group="${group.label}">${opt}</button>`).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          ` :
          // Default type: Q/A pairs
          p.pairs ? `
            <div class="practice-pairs">
              ${p.pairs.map(pair => {
                const qClean = pair.q.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
                const aClean = pair.a.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
                return `
                <div class="practice-pair">
                  <div class="practice-row">
                    <div class="practice-side practice-q">
                      <button class="tts-btn tts-sm" data-tts="${qClean}" title="تلفظ سؤال"></button>
                      <span style="flex:1">${tokenizeSentence(pair.q)}</span>
                    </div>
                    <div class="practice-arrow">→</div>
                    <div class="practice-side practice-a">
                      <button class="tts-btn tts-sm" data-tts="${aClean}" title="تلفظ پاسخ"></button>
                      <span style="flex:1">${tokenizeSentence(pair.a)}</span>
                    </div>
                  </div>
                  <div class="practice-trans-row show">
                    <div class="practice-trans-line">
                      <div class="practice-trans-cell">${pair.qFa}</div>
                      <div class="practice-trans-arrow"></div>
                      <div class="practice-trans-cell">${pair.aFa}</div>
                    </div>
                  </div>
                </div>
              `;}).join('')}
            </div>
          ` : '<div class="placeholder-msg">این تمرین آماده نیست.</div>'
        }
        ${
          // Visual panel (e.g. L5 P2: colors + clothes gallery; L7 P3: clocks; L8 P1: foods)
          p.visualPanel ? `
            <div class="visual-panel">
              <div class="visual-panel-head">
                <div class="visual-panel-title">${p.visualPanel.title}</div>
              </div>
              ${p.visualPanel.groups.map(g => `
                <div class="visual-panel-group">
                  <div class="visual-panel-group-label">${g.label}</div>
                  ${g.type === 'colors' ? `
                    <div class="visual-colors-grid">
                      ${g.items.map(c => `
                        <div class="visual-color-card">
                          <div class="visual-color-swatch" style="background:${c.color}"></div>
                          <div class="visual-color-info">
                            <div class="visual-item-en">
                              <span>${c.word}</span>
                              <button class="tts-btn tts-sm" data-tts="${c.word}" title="تلفظ"></button>
                            </div>
                            <div class="visual-item-fa">${c.fa}</div>
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  ` : g.type === 'clocks' ? `
                    <div class="visual-clocks-grid">
                      ${g.items.map(c => {
                        const [h, m] = c.time.split(':').map(Number);
                        const hourAngle = ((h % 12) * 30) + (m / 60) * 30;
                        const minAngle = m * 6;
                        return `
                        <div class="visual-clock-card">
                          <svg viewBox="0 0 100 100" class="clock-svg" aria-label="${c.time}">
                            <circle cx="50" cy="50" r="46" fill="#fff" stroke="#2D5DC4" stroke-width="4"/>
                            <circle cx="50" cy="50" r="2.5" fill="#1A1814"/>
                            ${[...Array(12)].map((_, i) => {
                              const a = i * 30 - 90;
                              const rad = a * Math.PI / 180;
                              const x1 = 50 + 40 * Math.cos(rad);
                              const y1 = 50 + 40 * Math.sin(rad);
                              const x2 = 50 + 44 * Math.cos(rad);
                              const y2 = 50 + 44 * Math.sin(rad);
                              return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#1A1814" stroke-width="1.5"/>`;
                            }).join('')}
                            ${[12, 3, 6, 9].map((num, idx) => {
                              const a = idx * 90 - 90;
                              const rad = a * Math.PI / 180;
                              const x = 50 + 33 * Math.cos(rad);
                              const y = 50 + 33 * Math.sin(rad);
                              return `<text x="${x}" y="${y}" text-anchor="middle" dominant-baseline="central" font-size="9" font-family="Playfair Display, Georgia" font-weight="700" fill="#1A1814">${num}</text>`;
                            }).join('')}
                            <line x1="50" y1="50" x2="${50 + 22 * Math.cos((hourAngle - 90) * Math.PI / 180)}" y2="${50 + 22 * Math.sin((hourAngle - 90) * Math.PI / 180)}" stroke="#1A1814" stroke-width="3.5" stroke-linecap="round"/>
                            <line x1="50" y1="50" x2="${50 + 32 * Math.cos((minAngle - 90) * Math.PI / 180)}" y2="${50 + 32 * Math.sin((minAngle - 90) * Math.PI / 180)}" stroke="#2D5DC4" stroke-width="2.5" stroke-linecap="round"/>
                          </svg>
                          <div class="visual-clock-label">
                            <button class="tts-btn tts-sm" data-tts="${c.label}" title="تلفظ"></button>
                            <span>${c.label}</span>
                          </div>
                        </div>
                      `;}).join('')}
                    </div>
                  ` : g.type === 'images' ? `
                    <div class="visual-images-grid">
                      ${g.items.map(it => `
                        <div class="visual-image-card">
                          <div class="img-box img-square" data-src="../images/grade7/lessons/lesson${LESSON.num}/${it.image}" data-alt="${it.word}"></div>
                          <div class="visual-image-info">
                            <div class="visual-item-en">
                              <span>${it.word}</span>
                              <button class="tts-btn tts-sm" data-tts="${it.word}" title="تلفظ"></button>
                            </div>
                            <div class="visual-item-fa">${it.fa}</div>
                          </div>
                        </div>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          ` : ''
        }
      </div>
    `).join('')}
  `;
}

// ─── 3. SOUNDS & LETTERS ───
function buildLetters() {
  if (!LESSON.sounds || !LESSON.sounds.length) return `<div class="placeholder-msg">حروف برای این درس تعریف نشده.</div>`;
  
  const letterIPA = {
    'Aa':'/eɪ/','Bb':'/biː/','Cc':'/siː/','Dd':'/diː/','Ee':'/iː/','Ff':'/ef/','Gg':'/dʒiː/','Hh':'/eɪtʃ/',
    'Ii':'/aɪ/','Jj':'/dʒeɪ/','Kk':'/keɪ/','Ll':'/el/','Mm':'/em/','Nn':'/en/','Oo':'/oʊ/','Pp':'/piː/',
    'Qq':'/kjuː/','Rr':'/ɑːr/','Ss':'/es/','Tt':'/tiː/','Uu':'/juː/','Vv':'/viː/','Ww':'/ˈdʌbəljuː/',
    'Xx':'/eks/','Yy':'/waɪ/','Zz':'/ziː/'
  };
  const letterFa = {
    'Aa':'«ای»','Bb':'«بی»','Cc':'«سی»','Dd':'«دی»','Ee':'«ای»','Ff':'«اف»','Gg':'«جی»','Hh':'«اِیچ»',
    'Ii':'«آی»','Jj':'«جی»','Kk':'«کِی»','Ll':'«اِل»','Mm':'«اِم»','Nn':'«اِن»','Oo':'«اُو»','Pp':'«پی»',
    'Qq':'«کیو»','Rr':'«آر»','Ss':'«اِس»','Tt':'«تی»','Uu':'«یو»','Vv':'«وی»','Ww':'«دابلیو»',
    'Xx':'«اِکس»','Yy':'«وای»','Zz':'«زی»'
  };
  const examples = {
    'Aa':'Ali · apple','Bb':'Babak · book','Cc':'cat · cake','Dd':'dad · door','Ee':'Ehsan · egg','Ff':'fan · fish',
    'Gg':'good · girl','Hh':'house · home','Ii':'Iran · ink','Jj':'job · juice','Kk':'Karimi · key','Ll':'lion · lamp',
    'Mm':'Mina · my','Nn':'name · Nasim','Oo':'Omid · old','Pp':'Pedram · pen','Qq':'queen · quick','Rr':'Reza · run',
    'Ss':'Sara · sun','Tt':'Tehran · tea','Uu':'Uncle · up','Vv':'van · visit','Ww':'water · we',
    'Xx':'box · X-ray','Yy':'yes · year','Zz':'zoo · zip'
  };
  
  // Optional Sounds-and-Letters mini-dialogue from textbook
  const sl = LESSON.soundsAndLetters;
  const dialogueHTML = (sl && sl.dialogue && sl.dialogue.length) ? `
    <div class="sl-dialogue-card">
      <div class="sl-dialogue-head">
        <h4>📖 مکالمه‌ی Sounds and Letters</h4>
        <div class="sl-dialogue-desc">${sl.descFa || ''}</div>
        <div class="sl-dialogue-desc-en">${sl.desc || ''}</div>
      </div>
      <div class="sl-dialogue-body">
        ${sl.dialogue.map(line => {
          const cleanEn = line.en.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
          return `
          <div class="sl-dialogue-line">
            <div class="sl-speaker">${line.speaker}:</div>
            <div class="sl-text">
              <div class="sl-en">${line.en}</div>
              <div class="sl-fa">${line.fa}</div>
            </div>
            <button class="tts-btn tts-sm" data-tts="${cleanEn}" title="تلفظ"></button>
          </div>
        `;}).join('')}
      </div>
      ${sl.activity ? `
        <div class="sl-activity">
          <strong>📌 فعالیت:</strong> ${sl.activity}
          ${sl.activityFa ? `<div class="sl-activity-fa">${sl.activityFa}</div>` : ''}
        </div>
      ` : ''}
      ${sl.activities ? `
        <div class="sl-activity-list">
          ${sl.activities.map((a, aIdx) => `
            <div class="sl-activity-item">
              <strong>${a.num}.</strong> ${a.text}
              ${a.textFa ? `<div class="sl-activity-fa">${a.textFa}</div>` : ''}
              ${a.num === 2 && sl.months ? `
                <div class="sl-circle-block" style="margin-top:.85rem">
                  <div style="font-family:var(--font-en);font-size:.85rem;color:var(--text-mid);unicode-bidi:plaintext;margin-bottom:.35rem;text-align:left">Months · ماه‌ها</div>
                  <div class="circle-grid">
                    ${sl.months.map(m => `<button class="circle-chip" data-circle-group="months">${m}</button>`).join('')}
                  </div>
                  <div style="font-family:var(--font-en);font-size:.85rem;color:var(--text-mid);unicode-bidi:plaintext;margin:1rem 0 .35rem;text-align:left">Days · روزها</div>
                  <div class="circle-grid">
                    ${sl.days.map(d => `<button class="circle-chip" data-circle-group="days">${d}</button>`).join('')}
                  </div>
                </div>
              ` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}
      ${sl.note ? `<div class="sl-note">${sl.note}${sl.noteFa ? ' — ' + sl.noteFa : ''}</div>` : ''}
      ${sl.talkToTeacher ? `
        <div class="sl-talk-teacher">
          <span class="sl-talk-label">Talk to Your Teacher</span>
          <span class="sl-talk-text">${sl.talkToTeacher}</span>
        </div>
      ` : ''}
    </div>
  ` : '';
  
  return `
    <div class="section-head">
      <h2>Sounds & Letters</h2>
      <div class="section-fa">حروف و اصوات</div>
      <div class="section-desc">در این درس ${LESSON.sounds.length} حرف از الفبای انگلیسی را یاد می‌گیرید: ${LESSON.sounds.join('، ')}</div>
    </div>
    <div class="audio-bar" data-audio="${audioPath('sounds')}">
      <button class="audio-play"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
      <div class="progress"><div class="progress-fill"></div></div>
      <span class="time">0:00</span>
    </div>
    ${dialogueHTML}
    <div class="letters-grid">
      ${LESSON.sounds.map((l, idx) => {
        // For TTS: speak only the uppercase letter (like "A", "B") — Web Speech will pronounce English letter name
        const ttsText = l.charAt(0);
        return `
        <div class="letter-card">
          <div class="letter-display color-${(idx % 4) + 1}">
            <span>${l}</span>
            <button class="tts-btn letter-tts" data-tts="${ttsText}" title="شنیدن تلفظ"></button>
          </div>
          <div class="letter-ipa">${letterIPA[l] || ''}</div>
          <div class="letter-fa">${letterFa[l] || ''} تلفظ می‌شود</div>
          <div style="font-size:.78rem;color:var(--text-soft);unicode-bidi:plaintext;font-family:var(--font-en);line-height:1.5;padding-top:.85rem;border-top:1px dashed var(--border-light);margin-top:.85rem;text-align:center">${examples[l] || ''}</div>
        </div>
      `;}).join('')}
    </div>
    <div class="letter-practice-card">
      <h4>📝 تمرین این حروف</h4>
      <p>بعد از یادگیری شکل و صدای حروف، با تمرین‌های زیر مهارت خود را تقویت کنید:</p>
      <div class="letter-practice-buttons">
        <button class="btn-practice">🔊 شنیدن صدای حروف</button>
        <button class="btn-practice">✏️ نوشتن حروف</button>
        <button class="btn-practice">🎯 تشخیص در کلمات</button>
      </div>
    </div>
  `;
}

// ─── 4. LISTENING ───
function buildListening() {
  if (!LESSON.listenings) return `<div class="placeholder-msg">شنیداری برای این درس آماده نیست.</div>`;
  
  return `
    <div class="section-head">
      <h2>Listening & Reading</h2>
      <div class="section-fa">شنیداری و خواندنی</div>
      <div class="section-desc">به مکالمه‌ها گوش دهید و گزینه‌های صحیح را علامت بزنید.</div>
    </div>
    ${LESSON.listenings.map((task, idx) => `
      <div class="listen-task">
        <div class="listen-task-head">
          <div class="listen-task-info">
            <div class="listen-task-title">${task.title}</div>
            <div class="listen-task-fa">به مکالمه ${idx + 1} گوش دهید و گزینه درست را علامت بزنید.</div>
          </div>
          <span class="listen-task-num">${idx + 1}</span>
        </div>
        <div class="audio-bar" data-audio="${audioPath('listening', idx + 1)}">
          <button class="audio-play"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
          <div class="progress"><div class="progress-fill"></div></div>
          <span class="time">0:00</span>
        </div>
        <table class="check-table">
          ${task.rows.map(row => `
            <tr>
              <th><span class="th-en">${row.label}</span><span class="th-fa">${row.labelFa}</span></th>
              ${row.options.map(opt => `<td class="check-cell"><label><input type="checkbox"> ${opt}</label></td>`).join('')}
            </tr>
          `).join('')}
        </table>
      </div>
    `).join('')}
  `;
}

// ─── 5. SPEAKING & WRITING ───
function buildSpeaking() {
  const sw = LESSON.speakingWriting;
  if (!sw) return `<div class="placeholder-msg">گفتاری/نوشتاری آماده نیست.</div>`;
  
  let html = `
    <div class="section-head">
      <h2>Speaking & Writing</h2>
      <div class="section-fa">گفتاری و نوشتاری</div>
      <div class="section-desc">با همکلاسی‌ها صحبت کنید و اطلاعات را در جدول وارد کنید.</div>
    </div>
  `;
  
  // Render either groupWork or pairWork — both share the same shape
  const work = sw.groupWork || sw.pairWork;
  const workType = sw.groupWork ? 'کار گروهی' : 'کار دو نفره';
  
  if (work) {
    // Two table styles:
    //   STYLE A (textbook tables with named heads & sample row):
    //     tableHeads: ['Name','Age','Month'], tableHeadsFa: ['نام','سن','ماه'], sampleRow: ['Maryam','12','Esfand']
    //   STYLE B (info-grid style with row labels and N empty cols):
    //     cols, colHeads, rows, rowsFa
    let tableHTML = '';
    
    if (work.tableHeads) {
      // STYLE A — named-column table with optional filled sample row + empty rows below
      const heads = work.tableHeads;
      const headsFa = work.tableHeadsFa || [];
      const sample = work.sampleRow || [];
      const emptyRows = 3;
      tableHTML = `
        <table class="fillable-table">
          <thead><tr>
            ${heads.map((h, i) => `<th>${h}${headsFa[i] ? `<span class="label-fa">${headsFa[i]}</span>` : ''}</th>`).join('')}
          </tr></thead>
          <tbody>
            ${sample.length ? `
              <tr class="sample-row">
                ${heads.map((_, i) => `<td>${sample[i] || ''}</td>`).join('')}
              </tr>
            ` : ''}
            ${Array.from({length: emptyRows}, () => `
              <tr>
                ${heads.map(() => `<td><input type="text" class="fillable-input"></td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else if (work.rows && work.cols) {
      // STYLE B — info-grid table with row labels
      const colHeads = work.colHeads || Array.from({length: work.cols}, (_, i) => i + 1);
      tableHTML = `
        <table class="fillable-table">
          <thead><tr><th style="width:35%">Information</th>${colHeads.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>
            ${work.rows.map((row, i) => `
              <tr>
                <td class="label-cell">${row}<span class="label-fa">${(work.rowsFa || [])[i] || ''}</span></td>
                ${Array.from({length: work.cols}, () => `<td><input type="text" class="fillable-input"></td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    }
    
    html += `
      <div class="speak-write-task">
        <div class="speak-write-task-head">
          <h4>${work.title}</h4>
          <div class="task-fa"><strong>${workType}:</strong> ${work.instructionFa || work.instruction || ''}</div>
          ${work.instruction && work.instructionFa ? `<div class="task-en">${work.instruction}</div>` : ''}
        </div>
        ${tableHTML}
      </div>
    `;
  }
  
  if (sw.dialog) {
    html += `
      <div class="speak-write-task">
        <div class="speak-write-task-head">
          <h4>${sw.dialog.title}</h4>
          <div class="task-fa"><strong>مکالمه شما:</strong> ${sw.dialog.subtitle || 'با همکلاسی خود این مکالمه را تمرین کنید.'}</div>
        </div>
        <div class="dialog-template">
          ${sw.dialog.lines.map(line => `<div><strong style="color:var(--primary)">${line.speaker}:</strong> ${line.text}</div>`).join('')}
        </div>
      </div>
    `;
  }
  
  return html;
}

// ─── 6. VOCABULARY ───
function buildVocabulary() {
  if (!LESSON.vocabulary) return `<div class="placeholder-msg">واژگان آماده نیست.</div>`;
  
  return `
    <div class="section-head">
      <h2>Vocabulary</h2>
      <div class="section-fa">واژگان</div>
      <div class="section-desc">${LESSON.vocabulary.length} کلمه و عبارت کلیدی این درس را یاد بگیرید. می‌تونید با ۴ حالت مختلف تمرین کنید.</div>
    </div>
    <div class="vocab-mode-tabs">
      <button class="vocab-mode-btn active" data-mode="list">📖 لیست کلمات</button>
      <button class="vocab-mode-btn" data-mode="flashcard">🔄 فلش‌کارت</button>
      <button class="vocab-mode-btn" data-mode="matching">🎯 بازی تطبیق</button>
      <button class="vocab-mode-btn" data-mode="fillblank">✏️ تمرین جای‌خالی</button>
    </div>
    
    <div class="vocab-mode-panel" data-vocab-mode="list">
      <div class="vocab-grid">
        ${LESSON.vocabulary.map(v => {
          const isDifficult = difficultWords.has(v.word);
          return `
          <div class="vocab-card ${isDifficult ? 'is-difficult' : ''}">
            <div class="vocab-word">${v.word} <button class="tts-btn tts-sm" data-tts="${v.word.replace(/"/g, '&quot;')}" title="تلفظ کلمه"></button></div>
            <div><span class="vocab-pos">${v.pos}</span></div>
            <div class="vocab-ipa">${v.ipa}</div>
            <div class="vocab-fa">${v.fa}</div>
            <div class="vocab-example">${v.example} <button class="tts-btn tts-sm" data-tts="${v.example.replace(/"/g, '&quot;')}" title="تلفظ جمله"></button></div>
            <div class="vocab-card-actions">
              <button class="vocab-action-btn difficulty ${isDifficult ? 'marked' : ''}" data-word="${v.word}">${isDifficult ? '✓ کلمه سخت' : '⭐ علامت سختی'}</button>
            </div>
          </div>
        `}).join('')}
      </div>
    </div>
    
    <div class="vocab-mode-panel" data-vocab-mode="flashcard" style="display:none">
      <div class="flashcard-mode" id="flashcardMode"></div>
    </div>
    
    <div class="vocab-mode-panel" data-vocab-mode="matching" style="display:none">
      <div class="matching-mode" id="matchingMode"></div>
    </div>
    
    <div class="vocab-mode-panel" data-vocab-mode="fillblank" style="display:none">
      <div class="fillblank-mode" id="fillblankMode"></div>
    </div>
  `;
}

// ─── 6.A FLASHCARD MODE ───
let flashcardState = {idx: 0, knew: 0, didntKnow: 0, finished: false, deck: []};

function renderFlashcardMode() {
  const container = document.getElementById('flashcardMode');
  if (!container) return;
  
  // Initialize deck on first render
  if (flashcardState.deck.length === 0) {
    flashcardState.deck = [...LESSON.vocabulary].sort(() => Math.random() - 0.5);
  }
  
  if (flashcardState.finished) {
    const total = flashcardState.knew + flashcardState.didntKnow;
    const percent = total > 0 ? Math.round((flashcardState.knew / total) * 100) : 0;
    let icon = '🎉', msg = 'عالی بود!';
    if (percent < 50) {icon = '💪'; msg = 'با تمرین بهتر می‌شی!';}
    else if (percent < 80) {icon = '👍'; msg = 'خوب بود، ادامه بده!';}
    
    container.innerHTML = `
      <div class="vocab-result">
        <div class="vocab-result-icon">${icon}</div>
        <h3>${msg}</h3>
        <p style="color:var(--text-mid);margin-bottom:1rem">شما ${flashcardState.knew} از ${total} کلمه (${percent}٪) رو می‌دونستید.</p>
        <div class="vocab-result-stats">
          <div><div class="stat-num knew">${flashcardState.knew}</div><div class="stat-label">بلد بودم</div></div>
          <div><div class="stat-num didnt-know">${flashcardState.didntKnow}</div><div class="stat-label">بلد نبودم</div></div>
        </div>
        ${flashcardState.didntKnow > 0 ? `<p style="font-size:.82rem;color:var(--accent);margin-bottom:1rem">⭐ ${flashcardState.didntKnow} کلمه به‌طور خودکار به فهرست کلمات سخت اضافه شدند</p>` : ''}
        <button class="btn btn-primary" id="restartFlashcard">🔄 شروع دوباره</button>
      </div>
    `;
    document.getElementById('restartFlashcard').addEventListener('click', () => {
      flashcardState = {idx: 0, knew: 0, didntKnow: 0, finished: false, deck: [...LESSON.vocabulary].sort(() => Math.random() - 0.5)};
      renderFlashcardMode();
    });
    return;
  }
  
  const card = flashcardState.deck[flashcardState.idx];
  const isDifficult = difficultWords.has(card.word);
  const total = flashcardState.deck.length;
  const progress = ((flashcardState.idx) / total) * 100;
  
  container.innerHTML = `
    <div class="vocab-progress-bar">
      <div class="vocab-progress-info">
        <span>${flashcardState.idx + 1} از ${total}</span>
        <span style="color:var(--success)">✓ ${flashcardState.knew}</span>
        <span style="color:var(--danger)">✗ ${flashcardState.didntKnow}</span>
      </div>
      <div class="vocab-progress-track"><div class="vocab-progress-fill" style="width:${progress}%"></div></div>
    </div>
    
    <div class="big-flashcard ${isDifficult ? 'is-difficult' : ''}" id="bigFlashcard">
      <div class="bf-front">
        <div class="bf-word">${card.word}</div>
        <div><span class="bf-pos">${card.pos}</span></div>
        <div class="bf-ipa">${card.ipa}</div>
        <div class="bf-tap-hint">برای دیدن معنی روی کارت بزن</div>
      </div>
      <div class="bf-back">
        <div class="bf-meaning">${card.fa}</div>
        ${card.example ? `<div class="bf-example">${card.example}</div>` : ''}
        <div class="bf-tap-hint">روی کارت بزن تا برگرده</div>
      </div>
    </div>
    
    <div class="flashcard-actions" id="flashcardActions" style="display:none">
      <button class="vocab-btn didnt-know" data-action="didntknow">✗ بلد نبودم</button>
      <button class="vocab-btn knew" data-action="knew">✓ بلد بودم</button>
    </div>
  `;
  
  const flashcard = document.getElementById('bigFlashcard');
  flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
    if (flashcard.classList.contains('flipped')) {
      document.getElementById('flashcardActions').style.display = 'flex';
    }
  });
  
  document.querySelectorAll('#flashcardActions .vocab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      if (action === 'knew') {
        flashcardState.knew++;
      } else {
        flashcardState.didntKnow++;
        difficultWords.add(card.word);
        saveStorage();
      }
      flashcardState.idx++;
      if (flashcardState.idx >= flashcardState.deck.length) {
        flashcardState.finished = true;
      }
      renderFlashcardMode();
    });
  });
}

// ─── 6.B MATCHING MODE ───
let matchingState = {selected: null, matched: new Set(), wrongCount: 0, startTime: null};

function renderMatchingMode() {
  const container = document.getElementById('matchingMode');
  if (!container) return;
  
  // Use up to 8 words max for one round
  const words = LESSON.vocabulary.slice(0, Math.min(8, LESSON.vocabulary.length));
  const total = words.length;
  
  // Check if all matched
  if (matchingState.matched.size === total && matchingState.startTime) {
    const elapsed = Math.round((Date.now() - matchingState.startTime) / 1000);
    const accuracy = Math.round((total / (total + matchingState.wrongCount)) * 100);
    let icon = '🎉', msg = 'عالی!';
    if (accuracy < 70) {icon = '💪'; msg = 'با تمرین بهتر می‌شی!';}
    else if (accuracy < 90) {icon = '👍'; msg = 'خوب بود!';}
    
    container.innerHTML = `
      <div class="vocab-result">
        <div class="vocab-result-icon">${icon}</div>
        <h3>${msg}</h3>
        <p style="color:var(--text-mid);margin-bottom:1rem">همه ${total} جفت رو پیدا کردی.</p>
        <div class="vocab-result-stats">
          <div><div class="stat-num" style="color:var(--primary)">${elapsed}s</div><div class="stat-label">زمان</div></div>
          <div><div class="stat-num ${accuracy >= 90 ? 'knew' : (accuracy >= 70 ? '' : 'didnt-know')}">${accuracy}٪</div><div class="stat-label">دقت</div></div>
        </div>
        <button class="btn btn-primary" id="restartMatching">🔄 شروع دوباره</button>
      </div>
    `;
    document.getElementById('restartMatching').addEventListener('click', () => {
      matchingState = {selected: null, matched: new Set(), wrongCount: 0, startTime: null};
      renderMatchingMode();
    });
    return;
  }
  
  // Shuffle once at start
  if (!matchingState.startTime) {
    matchingState.startTime = Date.now();
    matchingState.shuffledFa = [...words].sort(() => Math.random() - 0.5);
  }
  
  container.innerHTML = `
    <div class="matching-info">
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:1rem">روی یه کلمه انگلیسی کلیک کن، بعد روی ترجمه فارسیش. تا همه جفت‌ها رو پیدا کنی.</p>
      <div class="matching-progress">
        <span>${matchingState.matched.size} / ${total} جفت</span>
        ${matchingState.wrongCount > 0 ? `<span style="color:var(--danger);margin-right:1rem">✗ ${matchingState.wrongCount} اشتباه</span>` : ''}
      </div>
    </div>
    <div class="matching-board">
      <div class="matching-column">
        <div class="matching-col-head">English</div>
        ${words.map(w => `
          <div class="matching-cell english ${matchingState.matched.has(w.word) ? 'matched' : ''}" 
               data-word="${w.word}" data-side="en">
            <div class="matching-cell-text">${w.word}</div>
          </div>
        `).join('')}
      </div>
      <div class="matching-column">
        <div class="matching-col-head">فارسی</div>
        ${matchingState.shuffledFa.map(w => `
          <div class="matching-cell persian ${matchingState.matched.has(w.word) ? 'matched' : ''}" 
               data-word="${w.word}" data-side="fa">
            <div class="matching-cell-text">${w.fa}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  document.querySelectorAll('.matching-cell').forEach(cell => {
    if (cell.classList.contains('matched')) return;
    cell.addEventListener('click', () => {
      if (cell.classList.contains('matched')) return;
      const word = cell.dataset.word;
      const side = cell.dataset.side;
      
      if (!matchingState.selected) {
        // First click
        matchingState.selected = {word, side, el: cell};
        cell.classList.add('selected');
      } else {
        // Second click
        const sel = matchingState.selected;
        cell.classList.add('selected');
        
        // Same side? Replace selection
        if (sel.side === side) {
          sel.el.classList.remove('selected');
          matchingState.selected = {word, side, el: cell};
          return;
        }
        
        // Match check
        if (sel.word === word) {
          // Match!
          setTimeout(() => {
            sel.el.classList.add('matched');
            cell.classList.add('matched');
            sel.el.classList.remove('selected');
            cell.classList.remove('selected');
            matchingState.matched.add(word);
            matchingState.selected = null;
            renderMatchingMode();
          }, 400);
        } else {
          // Wrong
          matchingState.wrongCount++;
          sel.el.classList.add('wrong');
          cell.classList.add('wrong');
          setTimeout(() => {
            sel.el.classList.remove('selected', 'wrong');
            cell.classList.remove('selected', 'wrong');
            matchingState.selected = null;
            // Update wrong count display
            const progress = document.querySelector('.matching-progress');
            if (progress && !progress.innerHTML.includes('اشتباه') && matchingState.wrongCount > 0) {
              renderMatchingMode();
            } else if (progress && matchingState.wrongCount > 0) {
              const wrongSpan = progress.querySelector('span:last-child');
              if (wrongSpan) wrongSpan.textContent = `✗ ${matchingState.wrongCount} اشتباه`;
            }
          }, 700);
        }
      }
    });
  });
}

// ─── 6.C FILL-IN-BLANK MODE ───
let fillblankState = {idx: 0, correct: 0, wrong: 0, finished: false, deck: [], showHint: false};

function renderFillblankMode() {
  const container = document.getElementById('fillblankMode');
  if (!container) return;
  
  // Filter words that have examples
  if (fillblankState.deck.length === 0) {
    fillblankState.deck = LESSON.vocabulary
      .filter(v => v.example && v.example.toLowerCase().includes(v.word.toLowerCase()))
      .sort(() => Math.random() - 0.5);
    if (fillblankState.deck.length === 0) {
      // No suitable examples, use all words with placeholder example
      fillblankState.deck = LESSON.vocabulary.map(v => ({...v, example: `___ is the missing word.`}));
    }
  }
  
  if (fillblankState.finished) {
    const total = fillblankState.correct + fillblankState.wrong;
    const percent = total > 0 ? Math.round((fillblankState.correct / total) * 100) : 0;
    let icon = '🎉', msg = 'عالی بود!';
    if (percent < 50) {icon = '💪'; msg = 'با تمرین بهتر می‌شی!';}
    else if (percent < 80) {icon = '👍'; msg = 'خوب بود، ادامه بده!';}
    
    container.innerHTML = `
      <div class="vocab-result">
        <div class="vocab-result-icon">${icon}</div>
        <h3>${msg}</h3>
        <p style="color:var(--text-mid);margin-bottom:1rem">${fillblankState.correct} از ${total} رو درست نوشتی (${percent}٪).</p>
        <div class="vocab-result-stats">
          <div><div class="stat-num knew">${fillblankState.correct}</div><div class="stat-label">درست</div></div>
          <div><div class="stat-num didnt-know">${fillblankState.wrong}</div><div class="stat-label">اشتباه</div></div>
        </div>
        <button class="btn btn-primary" id="restartFillblank">🔄 شروع دوباره</button>
      </div>
    `;
    document.getElementById('restartFillblank').addEventListener('click', () => {
      fillblankState = {idx: 0, correct: 0, wrong: 0, finished: false, deck: [...fillblankState.deck].sort(() => Math.random() - 0.5), showHint: false};
      renderFillblankMode();
    });
    return;
  }
  
  const item = fillblankState.deck[fillblankState.idx];
  const total = fillblankState.deck.length;
  const progress = (fillblankState.idx / total) * 100;
  
  // Build sentence with blank
  const wordRegex = new RegExp(`\\b${item.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
  let sentenceHTML = item.example.replace(wordRegex, '<span class="fb-blank" id="fbBlank">_______</span>');
  
  // If word doesn't appear in example, add it manually
  if (!sentenceHTML.includes('fb-blank')) {
    sentenceHTML = `<span class="fb-blank" id="fbBlank">_______</span>: ${item.example}`;
  }
  
  const hint = fillblankState.showHint ? item.word.charAt(0).toLowerCase() + '___' : '';
  
  container.innerHTML = `
    <div class="vocab-progress-bar">
      <div class="vocab-progress-info">
        <span>${fillblankState.idx + 1} از ${total}</span>
        <span style="color:var(--success)">✓ ${fillblankState.correct}</span>
        <span style="color:var(--danger)">✗ ${fillblankState.wrong}</span>
      </div>
      <div class="vocab-progress-track"><div class="vocab-progress-fill" style="width:${progress}%"></div></div>
    </div>
    
    <div class="fillblank-card">
      <div class="fb-meaning-section">
        <div class="fb-meaning-label">معنی کلمه:</div>
        <div class="fb-meaning-fa">${item.fa}</div>
        <div class="fb-meaning-pos">${item.pos} · ${item.ipa}</div>
      </div>
      
      <div class="fb-sentence">${sentenceHTML}</div>
      
      <div class="fb-input-row">
        <input type="text" class="fb-input" id="fbInput" placeholder="کلمه رو بنویس..." autocomplete="off" spellcheck="false">
        <button class="vocab-btn knew" id="fbCheck">بررسی</button>
      </div>
      
      ${hint ? `<div class="fb-hint-display">💡 راهنما: <strong>${hint}</strong></div>` : ''}
      
      <div class="fb-actions">
        <button class="fb-action-btn" id="fbHintBtn" ${fillblankState.showHint ? 'disabled' : ''}>💡 راهنما</button>
        <button class="fb-action-btn" id="fbSkipBtn">⏭ رد کن</button>
      </div>
      
      <div class="fb-feedback" id="fbFeedback"></div>
    </div>
  `;
  
  const input = document.getElementById('fbInput');
  input.focus();
  
  function checkAnswer() {
    const userAnswer = input.value.trim().toLowerCase();
    const correctAnswer = item.word.toLowerCase();
    const feedback = document.getElementById('fbFeedback');
    
    if (!userAnswer) {
      feedback.innerHTML = '<div class="fb-feedback-msg warn">⚠ لطفاً جواب رو بنویس</div>';
      return;
    }
    
    if (userAnswer === correctAnswer) {
      fillblankState.correct++;
      feedback.innerHTML = '<div class="fb-feedback-msg correct">✓ آفرین! درست بود.</div>';
      input.disabled = true;
      document.getElementById('fbCheck').disabled = true;
      // Reveal blank
      const blank = document.getElementById('fbBlank');
      if (blank) {
        blank.textContent = item.word;
        blank.classList.add('revealed');
      }
      setTimeout(nextQuestion, 1200);
    } else {
      fillblankState.wrong++;
      difficultWords.add(item.word);
      saveStorage();
      feedback.innerHTML = `<div class="fb-feedback-msg wrong">✗ پاسخ صحیح: <strong>${item.word}</strong></div>`;
      input.disabled = true;
      document.getElementById('fbCheck').disabled = true;
      const blank = document.getElementById('fbBlank');
      if (blank) {
        blank.textContent = item.word;
        blank.classList.add('revealed', 'wrong');
      }
      setTimeout(nextQuestion, 2000);
    }
  }
  
  function nextQuestion() {
    fillblankState.idx++;
    fillblankState.showHint = false;
    if (fillblankState.idx >= fillblankState.deck.length) {
      fillblankState.finished = true;
    }
    renderFillblankMode();
  }
  
  document.getElementById('fbCheck').addEventListener('click', checkAnswer);
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') checkAnswer();
  });
  
  document.getElementById('fbHintBtn').addEventListener('click', () => {
    fillblankState.showHint = true;
    renderFillblankMode();
  });
  
  document.getElementById('fbSkipBtn').addEventListener('click', () => {
    fillblankState.wrong++;
    difficultWords.add(item.word);
    saveStorage();
    nextQuestion();
  });
}

// ─── 7. WORKBOOK ───
function buildWorkbook() {
  if (!LESSON.workbook || !LESSON.workbook.length) return `<div class="placeholder-msg">کتاب کار آماده نیست.</div>`;
  
  return `
    <div class="section-head">
      <h2>Workbook</h2>
      <div class="section-fa">کتاب کار</div>
      <div class="section-desc">تمرین‌های کتاب کار درس ${LESSON.num}</div>
    </div>
    <div class="workbook-info">
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
      <p>این تمرین‌ها مستقیماً از کتاب کار رسمی پایه هفتم استخراج شده‌اند.</p>
    </div>
    ${LESSON.workbook.map((task, idx) => buildWorkbookTask(task, idx + 1)).join('')}
  `;
}

function buildWorkbookTask(task, num) {
  const persianNum = num.toString().split('').map(d => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]).join('');
  let body = '';
  
  // ── PLACEHOLDER ──
  if (task.type === 'placeholder') {
    body = `<div class="placeholder-msg">${task.title}<br><span style="font-family:var(--font-en);font-size:.85rem;unicode-bidi:plaintext;display:inline-block;margin-top:.5rem">${task.titleEn}</span></div>`;
    return `<div class="wb-task">${body}</div>`;
  }
  
  // ── READING-CIRCLE ──
  if (task.type === 'reading-circle') {
    let text = task.text;
    // Build a set so each word can be wrapped only once per occurrence
    task.targets.forEach(target => {
      const re = new RegExp(`\\b${target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
      text = text.replace(re, `<span class="highlight-target">${target}</span>`);
    });
    body = `
      <div class="reading-passage">${text}</div>
      <div class="wb-hint">💡 <strong>راهنما:</strong> ${task.hint || ''}</div>
    `;
  }
  
  // ── CHECK-KNOWN ──
  else if (task.type === 'check-known') {
    body = `<div class="checkbox-grid">
      ${task.items.map((item, i) => `
        <div class="checkbox-item"><input type="checkbox" id="ck${num}-${i}"><label for="ck${num}-${i}">${item}</label></div>
      `).join('')}
    </div>`;
  }
  
  // ── SORT-GIRL-BOY ──
  else if (task.type === 'sort-girl-boy') {
    body = `
      <div class="match-instructions">روی هر اسم کلیک کن و انتخاب کن: دختر 👧 یا پسر 👦. اگه اشتباه زدی، دوباره کلیک کن تا برگرده.</div>
      <div class="sort-buckets">
        <div class="sort-bucket sort-girl">
          <div class="sort-bucket-head">👧 Baby Girl Names</div>
          <div class="sort-bucket-list" data-bucket="girl"></div>
        </div>
        <div class="sort-bucket sort-boy">
          <div class="sort-bucket-head">👦 Baby Boy Names</div>
          <div class="sort-bucket-list" data-bucket="boy"></div>
        </div>
      </div>
      <div class="sort-name-pool">
        ${task.names.map(n => `<button class="sort-name-chip" data-name="${n}">${n}</button>`).join('')}
      </div>
    `;
  }
  
  // ── ID-CARD ──
  else if (task.type === 'id-card') {
    body = `
      <div class="id-card-form">
        <div class="id-card-form-head">📇 Student ID Card</div>
        ${task.fields.map(f => `
          <div class="form-row"><label>${f.label}</label>
            <input type="${f.type}" ${f.placeholder ? `placeholder="${f.placeholder}"` : ''} ${f.value ? `value="${f.value}"` : ''} ${f.readonly ? 'readonly style="background:var(--bg-soft);color:var(--text-mid)"' : ''}>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // ── TABLE-FILL (free input table) ──
  else if (task.type === 'table-fill') {
    body = `
      <div class="wb-table-fill-wrap">
        <table class="wb-table-fill">
          <thead><tr>${task.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>
            ${[...Array(task.rows)].map((_, ri) => `
              <tr>
                ${task.headers.map((h, hi) => hi === 0 ? `<td class="row-num">${ri + 1}</td>` : `<td><input type="text" class="wb-input" placeholder="${h}"></td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  // ── MARTYR-NAMES (fill missing first name) ──
  else if (task.type === 'martyr-names') {
    body = `
      <div class="martyr-names-list">
        ${task.items.map(item => `
          <div class="martyr-name-row">
            <span class="martyr-prefix">${item.label}</span>
            <input type="text" class="wb-input wb-input-sm" placeholder="${item.placeholder}" data-answer="${item.answer}">
            <span class="martyr-suffix">${item.suffix}</span>
          </div>
        `).join('')}
      </div>
      <div class="wb-actions"><button class="wb-show-answers-btn">📖 نمایش پاسخ‌ها</button></div>
    `;
  }
  
  // ── FAMILY-NAMES (grid of empty slots) ──
  else if (task.type === 'family-names') {
    body = `
      <div class="family-names-grid">
        ${[...Array(task.slots)].map(() => `<input type="text" class="wb-input family-name-slot" placeholder="…………………">`).join('')}
      </div>
    `;
  }
  
  // ── GROUP-MATCH (L2 ex 1: find absent classmate's group) ──
  else if (task.type === 'group-match') {
    body = `
      <div class="groups-grid">
        ${task.groups.map(g => {
          const hasTarget = g.members.includes(task.targetMember);
          return `
          <div class="group-card ${hasTarget ? 'has-target' : ''}">
            <div class="group-card-head">${g.name}</div>
            <ul class="group-card-list">
              ${g.members.map(m => `<li class="${m === task.targetMember ? 'target-member' : ''}">${m}</li>`).join('')}
            </ul>
          </div>
        `;}).join('')}
      </div>
      <div class="wb-mini-form">
        <label>Group: <input type="text" class="wb-input wb-input-sm" placeholder="?"></label>
        <div class="wb-list">
          ${[1,2,3,4].map(i => `<div class="wb-list-row"><span class="wb-list-num">${i}.</span><input type="text" class="wb-input"></div>`).join('')}
        </div>
      </div>
      <div class="wb-hint">💡 <strong>راهنما:</strong> امکانیان در <strong>${task.correctGroup}</strong> هست. اعضای دیگه: ${task.groups.find(g => g.name === task.correctGroup).members.filter(m => m !== task.targetMember).join('، ')}.</div>
    `;
  }
  
  // ── SORT-ALPHABETICAL (L2 ex 3: alphabetize books) ──
  else if (task.type === 'sort-alphabetical') {
    body = `
      <p style="font-size:.82rem;color:var(--text-mid);margin-bottom:.85rem">شماره ترتیب الفبایی هر کتاب رو در کادر بنویس:</p>
      <div class="books-grid">
        ${task.items.map((item, i) => `
          <div class="book-card">
            <div class="book-cover">📚<br><span>${item}</span></div>
            <input type="number" min="1" max="${task.items.length}" class="book-order-input" placeholder="?">
          </div>
        `).join('')}
      </div>
      <div class="wb-hint">💡 <strong>ترتیب صحیح:</strong> ${task.correctOrder.map((b, i) => `${i+1}) ${b}`).join('، ')}</div>
    `;
  }
  
  // ── TEACHER-LIST ──
  else if (task.type === 'teacher-list') {
    body = `
      <table class="wb-table">
        <thead><tr><th style="width:80px">Teacher</th><th>Last Name</th></tr></thead>
        <tbody>
          ${[...Array(task.rows)].map((_, i) => `
            <tr>
              <td style="text-align:center;font-weight:600">${i+1}</td>
              <td>
                <select class="wb-select"><option>Mr.</option><option>Mrs.</option><option>Miss</option></select>
                <input type="text" class="wb-input wb-input-grow" placeholder="Last name">
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  
  // ── WORD-BUILDER (write words using letters) ──
  else if (task.type === 'word-builder') {
    body = `
      <div class="letter-bag">
        ${task.letters.map(l => `<span class="letter-chip">${l}</span>`).join('')}
      </div>
      <p style="font-size:.82rem;color:var(--text-mid);margin:.85rem 0">از حروف بالا استفاده کن و ${task.slots} کلمه بنویس:</p>
      <div class="word-slots">
        ${[...Array(task.slots)].map((_, i) => `
          <div class="word-slot"><span class="word-slot-bullet">●</span><input type="text" class="wb-input" placeholder="کلمه ${i+1}"></div>
        `).join('')}
      </div>
    `;
  }
  
  // ── INTERNATIONAL-WORDS ──
  else if (task.type === 'international-words') {
    body = `
      <div class="letter-bag">${task.letters.map(l => `<span class="letter-chip">${l}</span>`).join('')}</div>
      <p style="font-size:.82rem;color:var(--text-mid);margin:.85rem 0">کلماتی بنویس که در فارسی هم کاربرد دارن:</p>
      <table class="wb-table international-words-table">
        <tbody>
          ${task.examples.map(ex => `
            <tr>
              <td class="iw-example">${ex}</td>
              ${[...Array(3)].map(() => `<td><input type="text" class="wb-input" placeholder="..."></td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  
  // ── MARTYRS (L2 ex 6) ──
  else if (task.type === 'martyrs') {
    body = `
      <div class="martyrs-list">
        ${task.martyrs.map((m, i) => `
          <div class="martyr-row">
            <div class="martyr-photo">🕊️</div>
            <div class="martyr-name">
              <div class="martyr-firstname">${m.firstName}</div>
              <input type="text" class="wb-input martyr-input" placeholder="نام خانوادگی" data-answer="${m.lastNameAnswer}">
            </div>
          </div>
        `).join('')}
      </div>
      <div class="wb-hint">💡 <strong>پاسخ:</strong> ${task.martyrs.map(m => `${m.firstName} <strong>${m.lastNameAnswer}</strong>`).join(' · ')}</div>
    `;
  }
  
  // ── MATCH-LINE (L3 ex 1, 2: connect with lines) ──
  else if (task.type === 'match-line') {
    // Build pairs json for handler — if not specified, use sample assignments
    // Each user clicks a left item then a right item to "match" them visually
    if (task.rightType === 'number-grid') {
      const numbers = [...Array(31)].map((_, i) => (i+1).toString());
      body = `
        <div class="match-instructions">${task.instruction || 'اول روی یک شخص کلیک کن، بعد روی عدد روز تولد کلیک کن. خط بین آن دو کشیده می‌شه.'}</div>
        <div class="match-line-task" data-match-mode="line">
          <div class="match-line-cols">
            <div class="match-line-col">
              <div class="match-line-col-head">افراد</div>
              ${task.leftItems.map((item, i) => `<div class="ml-item ml-left" data-side="left" data-value="L${i}">${item}</div>`).join('')}
            </div>
            <div class="match-line-col match-line-numbers">
              <div class="match-line-col-head">روز تولد</div>
              <div class="number-grid">
                ${numbers.map(n => `<div class="ml-item ml-right num-cell" data-side="right" data-value="${n}">${n}</div>`).join('')}
              </div>
            </div>
          </div>
          <div class="match-line-pairs-shown">
            <div class="ml-shown-head">✏️ تطابق‌های تو:</div>
            <div class="ml-shown-list"></div>
            <button class="ml-clear-btn" type="button">پاک کردن همه</button>
          </div>
        </div>
      `;
    } else {
      body = `
        <div class="match-instructions">اول روی یک شخص کلیک کن، بعد روی ماه مورد نظر کلیک کن. خط بین آن دو کشیده می‌شه.</div>
        <div class="match-line-task" data-match-mode="line">
          <div class="match-line-cols">
            <div class="match-line-col">
              <div class="match-line-col-head">افراد</div>
              ${task.leftItems.map((item, i) => `<div class="ml-item ml-left" data-side="left" data-value="L${i}">${item}</div>`).join('')}
            </div>
            <div class="match-line-col">
              <div class="match-line-col-head">Months · ماه‌ها</div>
              <div class="months-grid">
                ${task.rightItems.map(m => `<div class="ml-item ml-right month-cell" data-side="right" data-value="${m}">${m}</div>`).join('')}
              </div>
            </div>
          </div>
          <div class="match-line-pairs-shown">
            <div class="ml-shown-head">✏️ تطابق‌های تو:</div>
            <div class="ml-shown-list"></div>
            <button class="ml-clear-btn" type="button">پاک کردن همه</button>
          </div>
        </div>
      `;
    }
  }
  
  // ── DATE-OCCASION (L3 ex 4: write day for occasions) ──
  else if (task.type === 'date-occasion') {
    body = `
      <div class="occasions-grid">
        ${task.items.map(item => `
          <div class="occasion-card">
            <div class="occasion-fa">${item.occasion}</div>
            <div class="occasion-input-row">
              <span class="occasion-month">${item.month}</span>
              <input type="text" class="wb-input wb-input-sm" placeholder="?" data-answer="${item.correctDay}">
            </div>
          </div>
        `).join('')}
      </div>
      <div class="wb-hint">💡 <strong>پاسخ‌ها:</strong> ${task.items.map(i => `${i.occasion}: ${i.month} ${i.correctDay}`).join(' · ')}</div>
    `;
  }
  
  // ── PEOPLE-INFO (L3 ex 6, L4 ex 6: table about people) ──
  else if (task.type === 'people-info') {
    body = `
      <table class="wb-table">
        <thead><tr>${task.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
        <tbody>
          ${[...Array(task.rows)].map(() => `
            <tr>${task.columns.map(() => `<td><input type="text" class="wb-input"></td>`).join('')}</tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  
  // ── IMAGE-JOB-MATCH (L4 ex 2: match images to jobs) ──
  else if (task.type === 'image-job-match') {
    // Shuffle words to randomize order
    const shuffledWords = [...task.jobs].sort(() => Math.random() - 0.5);
    body = `
      <div class="match-instructions">روی یک کلمه شغل کلیک کن، بعد روی تصویر مربوطه کلیک کن تا وصلشون کنی.</div>
      <div class="match-line-task" data-match-mode="line">
        <div class="match-line-cols">
          <div class="match-line-col">
            <div class="match-line-col-head">کلمات</div>
            ${shuffledWords.map(j => `<div class="ml-item ml-left" data-side="left" data-value="${j.word}">${j.word}</div>`).join('')}
          </div>
          <div class="match-line-col">
            <div class="match-line-col-head">تصاویر شغل‌ها</div>
            <div class="job-image-grid">
              ${task.jobs.map(j => `
                <div class="ml-item ml-right job-image-cell" data-side="right" data-value="${j.fa}">
                  <div class="job-icon">${j.icon}</div>
                  <div class="job-fa">${j.fa}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
        <div class="match-line-pairs-shown">
          <div class="ml-shown-head">✏️ تطابق‌های تو:</div>
          <div class="ml-shown-list"></div>
          <button class="ml-clear-btn" type="button">پاک کردن همه</button>
        </div>
      </div>
    `;
  }
  
  // ── READING-QUESTIONS (L4 ex 3) ──
  else if (task.type === 'reading-questions') {
    body = `
      <div class="reading-passage">${task.text}</div>
      <div class="reading-questions">
        ${task.questions.map((q, i) => `
          <div class="reading-question">
            <div class="rq-question">${i+1}. ${q.q}</div>
            <input type="text" class="wb-input" placeholder="پاسخ خود را بنویس...">
            <div class="rq-hint">💡 ${q.hint}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // ── SHORT-ANSWER (L4 ex 4, L6 ex 4: riddles) ──
  else if (task.type === 'short-answer') {
    body = `
      <div class="riddles-list">
        ${task.items.map((item, i) => `
          <div class="riddle-row">
            <div class="riddle-bullet">●</div>
            <div class="riddle-question">${item.askFa}</div>
            <input type="text" class="wb-input wb-input-sm riddle-input" placeholder="${item.hint} ___">
            <div class="riddle-hint" style="display:none">${item.answer}</div>
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── READING-MCQ (L5 ex 2) ──
  else if (task.type === 'reading-mcq') {
    body = `
      <div class="reading-passage">${task.text}</div>
      <div class="reading-questions">
        ${task.questions.map((q, qi) => `
          <div class="reading-mcq-question">
            <div class="rq-question">${qi+1}. ${q.q}</div>
            <div class="rq-options">
              ${q.options.map((opt, oi) => `
                <label class="rq-option">
                  <input type="radio" name="mcq-${num}-${qi}" value="${oi}">
                  <span>${String.fromCharCode(97+oi)}) ${opt}</span>
                </label>
              `).join('')}
            </div>
            <div class="rq-hint">💡 پاسخ صحیح: ${String.fromCharCode(97+q.correct)}</div>
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // ── COLOR-SURVEY (L5 ex 4) ──
  else if (task.type === 'color-survey') {
    body = `
      <table class="wb-table">
        <thead><tr><th>Clothing items</th><th>Color</th></tr></thead>
        <tbody>
          ${task.items.map(item => `
            <tr>
              <td><strong>${item.item}</strong> <span class="label-fa">${item.fa}</span></td>
              <td><input type="text" class="wb-input" placeholder="رنگ مورد نظر"></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  
  // ── TRANSLATE-LIST (L5 ex 5) ──
  else if (task.type === 'translate-list') {
    body = `
      <table class="wb-table">
        <thead><tr><th style="width:50px">No</th><th>Items (فارسی)</th><th>English</th></tr></thead>
        <tbody>
          ${task.items.map((item, i) => `
            <tr>
              <td style="text-align:center;font-weight:600">${i+1}</td>
              <td>${item.fa}</td>
              <td><input type="text" class="wb-input" placeholder="..." data-answer="${item.en}"></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── ACTIVITY-PLACE-GRID (L6 ex 1) ──
  else if (task.type === 'activity-place-grid') {
    body = `
      <table class="wb-table activity-place-table">
        <thead><tr><th>Activity ↓ / Place →</th>${task.places.map(p => `<th>${p}</th>`).join('')}</tr></thead>
        <tbody>
          ${task.activities.map(act => `
            <tr>
              <td><strong>${act}</strong></td>
              ${task.places.map(p => `
                <td style="text-align:center"><input type="checkbox" data-correct="${task.correct[act] === p}"></td>
              `).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="wb-hint">💡 ${Object.entries(task.correct).map(([a,p]) => `<strong>${a}</strong>: ${p}`).join(' · ')}</div>
    `;
  }
  
  // ── TRANSLATE-ROOMS (L6 ex 3) ──
  else if (task.type === 'translate-rooms') {
    body = `
      <div class="rooms-grid">
        ${task.rooms.map(r => `
          <div class="room-card">
            <div class="room-en">${r.en}</div>
            <input type="text" class="wb-input" placeholder="ترجمه فارسی" data-answer="${r.fa}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── GROUP-FRIDAY (L6 ex 6) / FAMILY-MEALS (L8 ex 6) generic table ──
  else if (task.type === 'group-friday' || task.type === 'family-meals') {
    body = `
      <table class="wb-table">
        <thead><tr>${task.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
        <tbody>
          ${[...Array(task.rows)].map(() => `
            <tr>${task.columns.map(() => `<td><input type="text" class="wb-input"></td>`).join('')}</tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  
  // ── FIND-EQUIVALENT (L7 ex 1, L8 ex 1) ──
  else if (task.type === 'find-equivalent') {
    body = `
      <div class="bilingual-text">
        <div class="bilingual-fa">${task.farsiText}</div>
        <div class="bilingual-en">${task.englishText}</div>
      </div>
      <table class="wb-table" style="margin-top:1rem">
        <thead><tr><th>Persian</th><th>English</th></tr></thead>
        <tbody>
          ${task.pairs.map(p => `
            <tr>
              <td>${p.fa}</td>
              <td>${p.example ? `<span class="example-answer">${p.en} ✓</span>` : `<input type="text" class="wb-input" placeholder="..." data-answer="${p.en}">`}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── ADDRESS-TRANSLATE (L7 ex 3) ──
  else if (task.type === 'address-translate') {
    body = `
      <div class="envelope">
        ${task.envelope.map(e => `
          <div class="envelope-section">
            <strong>${e.label}:</strong>
            <div style="white-space:pre-line;margin-top:.3rem">${e.value}</div>
          </div>
        `).join('')}
      </div>
      <p style="font-size:.85rem;color:var(--text-mid);margin:.85rem 0">آدرس گیرنده را به فارسی بنویسید:</p>
      <textarea class="wb-input" rows="5" placeholder="آدرس به فارسی..."></textarea>
      <div class="wb-hint">💡 <strong>نمونه پاسخ:</strong> ${task.sampleAnswer.replace(/\n/g, ' / ')}</div>
    `;
  }
  
  // ── POSTER-FORM (L7 ex 4) ──
  else if (task.type === 'poster-form') {
    body = `
      <div class="poster-info">
        ${task.farsiInfo.map(line => `<div class="poster-fa-line">${line}</div>`).join('')}
      </div>
      <div class="poster-form-card">
        <div class="poster-form-title">Student Conference</div>
        ${task.formFields.map(f => `
          <div class="form-row">
            <label>${f.label}</label>
            <input type="text" class="wb-input" placeholder="${f.hint}" data-answer="${f.answer}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── APPLICATION-FORM (L7 ex 5) ──
  else if (task.type === 'application-form') {
    body = `
      <div class="poster-form-card">
        <div class="poster-form-title">${task.formTitle}</div>
        ${task.fields.map(f => `
          <div class="form-row">
            <label>${f.label}</label>
            ${f.type === 'textarea' ? '<textarea class="wb-input" rows="2"></textarea>' : '<input type="text" class="wb-input">'}
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // ── FOOD-PREFERENCE (L8 ex 2) ──
  else if (task.type === 'food-preference') {
    body = `
      <div class="food-pref-grid">
        <div class="food-pref-section">
          <div class="food-pref-head">Food</div>
          ${task.foods.map(row => `
            <div class="food-pref-row">
              ${row.map(f => `<label class="food-chip"><input type="checkbox"><span>${f}</span></label>`).join('')}
            </div>
          `).join('')}
        </div>
        <div class="food-pref-section">
          <div class="food-pref-head">Dessert / drinks</div>
          <div class="food-pref-list">
            ${task.drinks.map(d => `<label class="food-chip"><input type="checkbox"><span>${d}</span></label>`).join('')}
          </div>
        </div>
      </div>
    `;
  }
  
  // ── FILL-TABLE-FROM-TEXT (L8 ex 3) ──
  else if (task.type === 'fill-table-from-text') {
    body = `
      <div class="reading-passage">${task.text}</div>
      <table class="wb-table" style="margin-top:1rem">
        <thead><tr>${task.tableHeaders.map(h => `<th>${h}</th>`).join('')}</tr></thead>
        <tbody>
          <tr>${task.tableHeaders.map(() => `<td><textarea class="wb-input" rows="4"></textarea></td>`).join('')}</tr>
        </tbody>
      </table>
      <div class="wb-hint">💡 <strong>نمونه پاسخ:</strong><br>
        Food: ${task.sampleAnswers.Food.join(', ')}<br>
        Drink: ${task.sampleAnswers.Drink.join(', ')}
      </div>
    `;
  }
  
  // ── IMAGE-FLASHCARDS (L8 ex 4) ──
  else if (task.type === 'image-flashcards') {
    body = `
      <div class="image-flashcard-grid">
        ${task.items.map(item => `
          <div class="image-flashcard">
            <div class="image-flashcard-emoji">${item.emoji}</div>
            <input type="text" class="wb-input wb-input-center" placeholder="${item.hint}" data-answer="${item.answer}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── DEFAULT FALLBACK ──
  else {
    body = `<div class="placeholder-msg">نوع تمرین «${task.type}» هنوز پیاده‌سازی نشده است.</div>`;
  }
  
  return `
    <div class="wb-task">
      <div class="wb-task-head">
        <span class="wb-task-num">${persianNum}</span>
        <div class="wb-task-body">
          <div class="wb-task-title">${task.section ? `<span class="wb-section-tag">${task.section}</span>` : ''}${task.title}</div>
          <div class="wb-task-en">${task.titleEn || ''}</div>
        </div>
      </div>
      ${body}
    </div>
  `;
}

// ─── WORKBOOK INTERACTIONS ───
function attachWorkbookHandlers() {
  // Show answers buttons
  document.querySelectorAll('.wb-show-answers-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const wbTask = btn.closest('.wb-task');
      // Show riddle hints
      wbTask.querySelectorAll('.riddle-hint').forEach(h => h.style.display = 'block');
      // Highlight inputs with data-answer
      wbTask.querySelectorAll('input[data-answer]').forEach(input => {
        const answer = input.dataset.answer;
        const userVal = input.value.trim().toLowerCase();
        if (userVal && userVal === answer.toLowerCase()) {
          input.classList.add('answer-correct');
        } else if (userVal) {
          input.classList.add('answer-wrong');
          input.title = `پاسخ صحیح: ${answer}`;
        } else {
          input.classList.add('answer-empty');
          input.placeholder = answer;
        }
      });
      btn.textContent = '✓ پاسخ‌ها نمایش داده شد';
      btn.disabled = true;
    });
  });
  
  // Job-image click matching (L4 ex 2)
  document.querySelectorAll('.job-word-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.job-word-card.selected').forEach(c => {if (c !== card) c.classList.remove('selected')});
      card.classList.toggle('selected');
    });
  });
  
  // Circle chip selection — one per group (e.g. month/day)
  document.querySelectorAll('.circle-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const group = chip.dataset.circleGroup;
      if (group) {
        // Single-select within group
        document.querySelectorAll(`.circle-chip[data-circle-group="${group}"]`).forEach(c => {
          if (c !== chip) c.classList.remove('circled');
        });
        chip.classList.toggle('circled');
      } else {
        chip.classList.toggle('circled');
      }
    });
  });
  
  // Match (two-column connector — replaces drag-drop)
  document.querySelectorAll('.match-task').forEach(task => {
    let selectedLeft = null;
    let selectedRight = null;
    const pairs = JSON.parse(task.dataset.pairs || '[]'); // [{left,right}]
    const checkAndReveal = () => {
      if (!selectedLeft || !selectedRight) return;
      const lVal = selectedLeft.dataset.value;
      const rVal = selectedRight.dataset.value;
      const isMatch = pairs.some(p => p.left === lVal && p.right === rVal);
      if (isMatch) {
        selectedLeft.classList.remove('selected');
        selectedRight.classList.remove('selected');
        selectedLeft.classList.add('matched');
        selectedRight.classList.add('matched');
        selectedLeft = null;
        selectedRight = null;
      } else {
        selectedLeft.classList.add('wrong');
        selectedRight.classList.add('wrong');
        setTimeout(() => {
          if (selectedLeft) { selectedLeft.classList.remove('wrong','selected'); selectedLeft = null; }
          if (selectedRight) { selectedRight.classList.remove('wrong','selected'); selectedRight = null; }
        }, 600);
      }
    };
    task.querySelectorAll('.match-left').forEach(el => {
      el.addEventListener('click', () => {
        if (el.classList.contains('matched')) return;
        task.querySelectorAll('.match-left.selected').forEach(s => {if (s !== el) s.classList.remove('selected')});
        el.classList.toggle('selected');
        selectedLeft = el.classList.contains('selected') ? el : null;
        checkAndReveal();
      });
    });
    task.querySelectorAll('.match-right').forEach(el => {
      el.addEventListener('click', () => {
        if (el.classList.contains('matched')) return;
        task.querySelectorAll('.match-right.selected').forEach(s => {if (s !== el) s.classList.remove('selected')});
        el.classList.toggle('selected');
        selectedRight = el.classList.contains('selected') ? el : null;
        checkAndReveal();
      });
    });
  });
  // Sort girl-boy: click name → opens picker → moves to bucket
  document.querySelectorAll('.sort-name-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      // Close other open pickers and remove picker-open class
      document.querySelectorAll('.sort-picker').forEach(p => p.remove());
      document.querySelectorAll('.sort-name-chip.picker-open').forEach(c => c.classList.remove('picker-open'));
      // If already in bucket, remove and return to pool
      if (chip.dataset.placed) {
        const pool = chip.closest('.wb-task').querySelector('.sort-name-pool');
        delete chip.dataset.placed;
        chip.classList.remove('placed-girl','placed-boy');
        pool.appendChild(chip);
        return;
      }
      // Show picker
      const picker = document.createElement('div');
      picker.className = 'sort-picker';
      picker.innerHTML = '<button data-target="girl">👧 دختر</button><button data-target="boy">👦 پسر</button>';
      chip.appendChild(picker);
      chip.classList.add('picker-open');
      picker.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', (ev) => {
          ev.stopPropagation();
          const target = btn.dataset.target;
          const bucket = chip.closest('.wb-task').querySelector(`.sort-bucket-list[data-bucket="${target}"]`);
          chip.dataset.placed = target;
          chip.classList.add(`placed-${target}`);
          chip.classList.remove('picker-open');
          picker.remove();
          bucket.appendChild(chip);
        });
      });
    });
  });
  // Match-line: click left, then right, creates a pair entry
  document.querySelectorAll('.match-line-task').forEach(task => {
    let selLeft = null;
    let pairs = {}; // {L0: 'right-value', ...}
    const updateShown = () => {
      const list = task.querySelector('.ml-shown-list');
      list.innerHTML = Object.entries(pairs).map(([lKey, rVal]) => {
        const lEl = task.querySelector(`.ml-left[data-value="${lKey}"]`);
        return `<div class="ml-shown-pair"><span class="ml-shown-left">${lEl ? lEl.textContent : ''}</span><span class="ml-shown-arrow">→</span><span class="ml-shown-right">${rVal}</span><button class="ml-shown-del" data-lkey="${lKey}">×</button></div>`;
      }).join('');
      // Refresh highlights
      task.querySelectorAll('.ml-item').forEach(el => {
        el.classList.remove('connected');
      });
      Object.entries(pairs).forEach(([lKey, rVal]) => {
        const lEl = task.querySelector(`.ml-left[data-value="${lKey}"]`);
        const rEl = task.querySelector(`.ml-right[data-value="${rVal}"]`);
        if (lEl) lEl.classList.add('connected');
        if (rEl) rEl.classList.add('connected');
      });
      // Bind delete buttons
      list.querySelectorAll('.ml-shown-del').forEach(btn => {
        btn.addEventListener('click', () => {
          delete pairs[btn.dataset.lkey];
          updateShown();
        });
      });
    };
    
    task.querySelectorAll('.ml-left').forEach(el => {
      el.addEventListener('click', () => {
        task.querySelectorAll('.ml-left.selected').forEach(s => { if (s !== el) s.classList.remove('selected'); });
        el.classList.toggle('selected');
        selLeft = el.classList.contains('selected') ? el : null;
      });
    });
    task.querySelectorAll('.ml-right').forEach(el => {
      el.addEventListener('click', () => {
        if (!selLeft) {
          el.classList.add('wrong');
          setTimeout(() => el.classList.remove('wrong'), 350);
          return;
        }
        pairs[selLeft.dataset.value] = el.dataset.value;
        selLeft.classList.remove('selected');
        selLeft = null;
        updateShown();
      });
    });
    const clearBtn = task.querySelector('.ml-clear-btn');
    if (clearBtn) clearBtn.addEventListener('click', () => {
      pairs = {};
      updateShown();
    });
  });
  
  // Document-level click to close sort pickers
  if (!document.body.dataset.sortPickerHandlerSet) {
    document.body.dataset.sortPickerHandlerSet = '1';
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.sort-name-chip')) {
        document.querySelectorAll('.sort-picker').forEach(p => p.remove());
        document.querySelectorAll('.sort-name-chip.picker-open').forEach(c => c.classList.remove('picker-open'));
      }
    });
  }
}

// ─── 8. QUIZ ───
function buildQuiz() {
  if (!LESSON.quiz) return `<div class="placeholder-msg">آزمون آماده نیست.</div>`;
  
  return `
    <div class="section-head">
      <h2>Quiz</h2>
      <div class="section-fa">آزمون پایان درس</div>
      <div class="section-desc">${LESSON.quiz.length} سوال برای ارزیابی یادگیری شما.</div>
    </div>
    ${LESSON.quiz.map((q, idx) => `
      <div class="exercise" data-correct="${q.correct}">
        <div class="exercise-head">
          <div class="exercise-num">سوال ${(idx + 1).toString().split('').map(d => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]).join('')} از ${LESSON.quiz.length.toString().split('').map(d => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]).join('')}</div>
          <div class="exercise-type">Multiple Choice</div>
        </div>
        <div class="exercise-question">${q.q}</div>
        <div class="exercise-question-fa">${q.qFa}</div>
        <div class="exercise-options">
          ${q.options.map((opt, i) => `
            <button class="option-btn" data-correct="${i === q.correct ? 'true' : 'false'}">
              <span class="option-letter">${String.fromCharCode(65 + i)}</span> ${opt}
            </button>
          `).join('')}
        </div>
        <div class="exercise-feedback"></div>
        <div class="exercise-actions"><button class="btn-check" disabled>بررسی پاسخ</button></div>
      </div>
    `).join('')}
  `;
}

// ─── BUILD ALL TABS ───
contentArea.innerHTML = `
  <div class="tab-panel active" data-panel="conversation">${buildConversation()}</div>
  <div class="tab-panel" data-panel="practice">${buildPractice()}</div>
  <div class="tab-panel" data-panel="letters">${buildLetters()}</div>
  <div class="tab-panel" data-panel="listening">${buildListening()}</div>
  <div class="tab-panel" data-panel="speaking">${buildSpeaking()}</div>
  <div class="tab-panel" data-panel="vocabulary">${buildVocabulary()}</div>
  <div class="tab-panel" data-panel="workbook">${buildWorkbook()}</div>
  <div class="tab-panel" data-panel="quiz">${buildQuiz()}</div>
`;

// ─── BUILD FOOTER NAV ───
function buildFooter() {
  const num = parseInt(LESSON.num);
  const prev = num > 1 ? LESSONS.find(l => l.num === num - 1) : null;
  const next = num < 8 ? LESSONS.find(l => l.num === num + 1) : null;
  
  document.getElementById('lessonFooter').innerHTML = `
    ${prev ? `
      <a class="footer-btn" href="lesson.html?id=${prev.num}">
        <span class="arrow">→</span>
        <div><div class="label">درس قبلی</div><div class="title">Lesson ${prev.num} — ${prev.title}</div></div>
      </a>
    ` : `
      <a class="footer-btn disabled">
        <span class="arrow">→</span>
        <div><div class="label">درس قبلی</div><div class="title">— شروع کتاب —</div></div>
      </a>
    `}
    ${next ? `
      <a class="footer-btn next" href="lesson.html?id=${next.num}">
        <span class="arrow">←</span>
        <div><div class="label">درس بعدی</div><div class="title">Lesson ${next.num} — ${next.title}</div></div>
      </a>
    ` : `
      <a class="footer-btn next disabled">
        <span class="arrow">←</span>
        <div><div class="label">درس بعدی</div><div class="title">— پایان کتاب —</div></div>
      </a>
    `}
  `;
}
buildFooter();

// ─── TAB SWITCHING ───
const tabLabels = {conversation:'مکالمه',practice:'تمرین گفتاری',letters:'حروف و اصوات',listening:'شنیداری و خواندنی',speaking:'گفتاری و نوشتاری',vocabulary:'واژگان',workbook:'کتاب کار',quiz:'آزمون پایانی'};

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
  const percent = Math.round((completed.size / 8) * 100);
  const faPercent = percent.toString().split('').map(d => '۰۱۲۳۴۵۶۷۸۹'[parseInt(d)]).join('') + '٪';
  document.getElementById('progressValue').textContent = faPercent;
  document.getElementById('progressFill').style.width = percent + '%';
}

document.querySelector('#sidebarList .sidebar-item.active').classList.add('completed');
updateProgress();

// Bottom sheet
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

// ─── TRANSLATION TOGGLE ───
document.querySelectorAll('.translation-toggle').forEach(toggleGroup => {
  const pills = toggleGroup.querySelectorAll('.toggle-pill');
  pills.forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.tab-panel');
      pills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mode = btn.dataset.mode;
      const convLines = panel.querySelectorAll('.conv-line');
      const practiceTrans = panel.querySelectorAll('.practice-trans-row');
      const practicePairs = panel.querySelectorAll('.practice-pair');
      
      convLines.forEach(it => {it.classList.remove('show-fa'); it.onclick = null; it.style.cursor = ''});
      practiceTrans.forEach(t => t.classList.remove('show'));
      practicePairs.forEach(p => {p.style.cursor = ''; p.onclick = null});
      
      if (mode === 'always') {
        convLines.forEach(it => it.classList.add('show-fa'));
        practiceTrans.forEach(t => t.classList.add('show'));
      } else if (mode === 'hover') {
        convLines.forEach(it => {
          it.style.cursor = 'pointer';
          it.onclick = (e) => {if (!e.target.classList.contains('word')) it.classList.toggle('show-fa')};
        });
        practicePairs.forEach(p => {
          p.style.cursor = 'pointer';
          p.onclick = (e) => {
            if (e.target.classList.contains('word')) return;
            const t = p.querySelector('.practice-trans-row');
            if (t) t.classList.toggle('show');
          };
        });
      }
    });
  });
});

// ─── WORD POPUP ───
const popup = document.getElementById('wordPopup');
const toast = document.getElementById('toast');

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

function buildWordPopup(wordEl) {
  const word = wordEl.dataset.word;
  const phrase = wordEl.dataset.phrase;
  const data = WORD_DICT[word];
  let html = '';
  
  if (phrase && PHRASE_DICT[phrase]) {
    const pd = PHRASE_DICT[phrase];
    const tagText = pd.type === 'official' ? 'عبارت رسمی این درس' : 'عبارت معمول';
    const isAddedPhrase = userFlashcards.lesson.has(phrase) || userFlashcards.saved.has(phrase);
    html += `
      <div class="phrase-banner" style="margin-bottom:.7rem">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
        <span>این کلمه بخشی از <strong>${tagText}</strong> است:</span>
      </div>
      <div class="phrase-pill">${phrase}</div>
      <div class="word-ipa">${pd.ipa}</div>
      <div class="word-fa">${pd.fa}</div>
      <div class="word-actions">
        <button class="word-btn ${isAddedPhrase ? 'added' : ''}" data-add-phrase="${phrase}">
          ${userFlashcards.lesson.has(phrase) ? '✓ در واژگان درس' : userFlashcards.saved.has(phrase) ? '✓ افزوده شد' : '+ افزودن کل عبارت'}
        </button>
      </div>
      <div style="margin-top:.85rem;padding-top:.7rem;border-top:1px solid var(--border-light);font-size:.78rem;color:var(--text-soft)">یا فقط همین یک کلمه:</div>
    `;
  }
  
  if (data) {
    const isAdded = userFlashcards.saved.has(word) || userFlashcards.lesson.has(word);
    html += `
      <div style="display:flex;align-items:center;gap:.5rem;margin-top:${phrase ? '.4rem' : 0}">
        <span class="word-en">${word}</span>
        <span class="word-pos">${data.pos}</span>
        <button style="margin-right:auto;background:none;border:none;cursor:pointer;color:var(--primary);font-size:1.05rem">🔊</button>
      </div>
      <div class="word-ipa">${data.ipa}</div>
      <div class="word-fa">${data.fa}</div>
      <div class="word-actions">
        <button class="word-btn ${isAdded ? 'added' : ''}" data-add-word="${word}">
          ${userFlashcards.lesson.has(word) ? '✓ در واژگان درس' : userFlashcards.saved.has(word) ? '✓ افزوده شد' : '+ افزوده‌های من'}
        </button>
      </div>
    `;
  } else {
    html += `<div style="font-size:.85rem;color:var(--text-mid);padding:.5rem 0">برای این کلمه هنوز اطلاعاتی ثبت نشده.</div>`;
  }
  
  popup.innerHTML = html;
  
  popup.querySelectorAll('[data-add-word]').forEach(btn => {
    btn.addEventListener('click', () => {
      const w = btn.dataset.addWord;
      if (userFlashcards.lesson.has(w)) {showToast('این کلمه از قبل در واژگان درس هست'); return;}
      if (userFlashcards.saved.has(w)) {showToast('قبلاً افزوده شده'); return;}
      userFlashcards.saved.add(w);
      saveStorage();
      btn.textContent = '✓ افزوده شد'; btn.classList.add('added');
      showToast(`«${w}» به افزوده‌های شما اضافه شد ✓`);
    });
  });
  popup.querySelectorAll('[data-add-phrase]').forEach(btn => {
    btn.addEventListener('click', () => {
      const p = btn.dataset.addPhrase;
      if (userFlashcards.lesson.has(p)) {showToast('این عبارت از قبل در واژگان درس هست'); return;}
      if (userFlashcards.saved.has(p)) {showToast('قبلاً افزوده شده'); return;}
      userFlashcards.saved.add(p);
      saveStorage();
      btn.textContent = '✓ افزوده شد'; btn.classList.add('added');
      showToast(`عبارت «${p}» به افزوده‌های شما اضافه شد ✓`);
    });
  });
}

document.querySelectorAll('.word').forEach(w => {
  w.addEventListener('click', (e) => {
    e.stopPropagation();
    buildWordPopup(w);
    const rect = w.getBoundingClientRect();
    popup.style.top = (window.scrollY + rect.bottom + 8) + 'px';
    popup.style.left = Math.min(rect.left, window.innerWidth - 360) + 'px';
    popup.classList.add('show');
  });
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.word') && !e.target.closest('.word-popup')) popup.classList.remove('show');
});

// ─── VOCAB MODE SWITCHING ───
document.querySelectorAll('.vocab-mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.vocab-mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mode = btn.dataset.mode;
    document.querySelectorAll('.vocab-mode-panel').forEach(p => {
      p.style.display = p.dataset.vocabMode === mode ? 'block' : 'none';
    });
    
    // Initialize mode if first time
    if (mode === 'flashcard') renderFlashcardMode();
    else if (mode === 'matching') renderMatchingMode();
    else if (mode === 'fillblank') renderFillblankMode();
  });
});

// ─── VOCAB DIFFICULTY ───
document.querySelectorAll('.vocab-action-btn.difficulty').forEach(btn => {
  const word = btn.dataset.word;
  btn.addEventListener('click', () => {
    const card = btn.closest('.vocab-card');
    if (difficultWords.has(word)) {
      difficultWords.delete(word);
      card.classList.remove('is-difficult');
      btn.classList.remove('marked');
      btn.innerHTML = '⭐ علامت سختی';
      showToast(`علامت «${word}» برداشته شد`);
    } else {
      difficultWords.add(word);
      card.classList.add('is-difficult');
      btn.classList.add('marked');
      btn.innerHTML = '✓ کلمه سخت';
      showToast(`«${word}» به‌عنوان کلمه سخت علامت‌گذاری شد ⭐`);
    }
    saveStorage();
  });
});
document.querySelectorAll('.vocab-action-btn.play').forEach(btn => {
  btn.addEventListener('click', () => showToast('🔊 پخش صدا (به‌زودی)'));
});

// ─── EXERCISES ───
document.querySelectorAll('.exercise').forEach(ex => {
  const options = ex.querySelectorAll('.option-btn');
  const checkBtn = ex.querySelector('.btn-check');
  const feedback = ex.querySelector('.exercise-feedback');
  let selected = null;
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      if (ex.classList.contains('answered')) return;
      options.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selected = opt;
      checkBtn.disabled = false;
    });
  });
  checkBtn.addEventListener('click', () => {
    if (!selected) return;
    const isCorrect = selected.dataset.correct === 'true';
    if (isCorrect) {
      selected.classList.add('correct');
      selected.classList.remove('selected');
      feedback.textContent = '✓ آفرین! پاسخ شما صحیح است.';
      feedback.className = 'exercise-feedback correct show';
    } else {
      selected.classList.add('wrong');
      selected.classList.remove('selected');
      const correct = ex.querySelector('[data-correct="true"]');
      correct.classList.add('correct');
      feedback.textContent = '✗ پاسخ صحیح نیست. گزینه درست با رنگ سبز مشخص شده.';
      feedback.className = 'exercise-feedback wrong show';
    }
    ex.classList.add('answered');
    checkBtn.disabled = true;
  });
});

// ─── INITIALIZE WORKBOOK INTERACTIONS ───
attachWorkbookHandlers();

} // end normal lesson
