/* ═══════════════════════════════════════════════
   LESSON RENDERER — builds lesson page from data
   ═══════════════════════════════════════════════ */

// Audio path helper for Grade 9
// Sections: conversation, practice (1-2), melody, listening
function audioPath(section, num) {
  const lessonNum = (typeof LESSON !== 'undefined' && LESSON && LESSON.num) ? LESSON.num : lessonId;
  if (lessonNum && String(lessonNum).startsWith('R')) return '';
  // Lesson 4 has no listening audio
  if (section === 'listening' && String(lessonNum) === '4') return '';
  let filename = section;
  if (section === 'practice' && num) filename = 'practice' + num;
  return `../audio/grade9/lesson${lessonNum}/${filename}.mp3`;
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
document.getElementById('pageTitle').textContent = `درس ${LESSON.num}: ${LESSON.title} — پایه نهم`;

// State
let userFlashcards = JSON.parse(localStorage.getItem('uf_grade9') || '{"lesson":[],"saved":[]}');
userFlashcards.lesson = new Set(userFlashcards.lesson);
userFlashcards.saved = new Set(userFlashcards.saved);
let difficultWords = new Set(JSON.parse(localStorage.getItem('df_grade9') || '[]'));

// Pre-populate lesson flashcards if not yet there
if (LESSON.vocabulary) {
  LESSON.vocabulary.forEach(v => userFlashcards.lesson.add(v.word));
}

function saveStorage() {
  localStorage.setItem('uf_grade9', JSON.stringify({
    lesson: [...userFlashcards.lesson],
    saved: [...userFlashcards.saved]
  }));
  localStorage.setItem('df_grade9', JSON.stringify([...difficultWords]));
}

// ─── BUILD HEADER ───
function buildHeader() {
  const wordCount = LESSON.vocabulary ? LESSON.vocabulary.length : 0;
  const sounds = LESSON.sounds && LESSON.sounds.length ? (LESSON.sounds || []).join(' · ') : '—';
  const tag = LESSON.isReview ? `🔄 ${LESSON.function}` : `📘 Prospect 3 — Lesson ${LESSON.num}`;
  
  document.getElementById('lessonHeader').innerHTML = `
    <div class="page-header-inner">
      <div class="breadcrumb">
        <a href="../index.html">صفحه اصلی سایت</a><span class="sep">›</span><a href="index.html">پایه نهم</a><span class="sep">›</span><span>${LESSON.isReview ? LESSON.title : 'درس ' + LESSON.num}</span>
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
  const reviewKey = `review_${review.num}_g9`;
  const reviewDoneKey = `lesson_review${review.num}_completed_g9`;
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
                ${l.sounds ? `<div class="review-lesson-mini-letters">${(l.sounds || []).join(' · ')}</div>` : (l.grammar ? `<div class="review-lesson-mini-letters">${l.grammar}</div>` : '')}
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
    
    // Grade 8: Letter clusters (ch, sh, fr, etc.)
    if (item.type === 'clusters') {
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="letters-table">
            ${item.clusters.map((cluster, i) => {
              const id = `${baseId}-c${i}`;
              const val = savedAnswers[id] || '';
              return `
                <div class="letters-table-row">
                  <div class="letters-table-letter cluster-letter">${cluster}</div>
                  <input type="text" class="check-if-input letters-input" 
                         data-save-id="${id}" 
                         value="${val}"
                         placeholder="یک کلمه با ${cluster}">
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
    
    // Grade 8: Generic list (rows of empty inputs)
    if (item.type === 'list') {
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="review-list">
            ${[...Array(item.rows)].map((_, i) => {
              const id = `${baseId}-row${i}`;
              const val = savedAnswers[id] || '';
              return `
                <div class="review-list-row">
                  <span class="review-list-num">${i+1}.</span>
                  <input type="text" class="check-if-input" 
                         data-save-id="${id}" 
                         value="${val}"
                         placeholder="${item.placeholder || '...'}">
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
    
    // Grade 8: Two-column pairs list (e.g. Country / Nationality)
    if (item.type === 'pairs-list') {
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="pairs-list-table">
            <div class="pairs-list-header">
              <div>${item.leftLabel}</div>
              <div>${item.rightLabel}</div>
            </div>
            ${[...Array(item.rows)].map((_, i) => {
              const idLeft = `${baseId}-pl${i}`;
              const idRight = `${baseId}-pr${i}`;
              const valLeft = savedAnswers[idLeft] || '';
              const valRight = savedAnswers[idRight] || '';
              return `
                <div class="pairs-list-row">
                  <input type="text" class="check-if-input" data-save-id="${idLeft}" value="${valLeft}" placeholder="...">
                  <input type="text" class="check-if-input" data-save-id="${idRight}" value="${valRight}" placeholder="...">
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
    
    // G8 Review: Letter sounds list (ch, sh, fr, etc.) — write a word for each
    if (item.type === 'sounds-list') {
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="letters-table">
            ${item.sounds.map((sound, i) => {
              const id = `${baseId}-snd${i}`;
              const val = savedAnswers[id] || '';
              return `
                <div class="letters-table-row">
                  <div class="letters-table-letter cluster-letter">${sound}</div>
                  <input type="text" class="check-if-input letters-input" 
                         data-save-id="${id}" 
                         value="${val}"
                         placeholder="یک کلمه با ${sound}">
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
    
    // G9 Review: Images with word/phrase to write
    if (item.type === 'image-words-list') {
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="image-words-grid">
            ${item.images.map((img, i) => {
              const id = `${baseId}-img${i}`;
              const val = savedAnswers[id] || '';
              return `
                <div class="image-word-card">
                  ${img.image
                    ? `<div class="img-box img-square" data-src="../images/grade9/reviews/${img.image}" data-alt="${img.hint || ''}"></div>`
                    : `<div class="image-word-emoji">${img.emoji || '🖼️'}</div>`}
                  <div class="image-word-hint">${img.hint}</div>
                  <input type="text" class="check-if-input" 
                         data-save-id="${id}" 
                         value="${val}"
                         placeholder="بنویس...">
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }
    
    // G9 Review: Sentence transformation (Contracted / Question / Negative / Wh-)
    if (item.type === 'sentence-transform') {
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="transform-list">
            ${item.sentences.map((sent, i) => `
              <div class="transform-block">
                <div class="transform-original">
                  <span class="transform-original-num">${i + 1}.</span>
                  <span class="transform-original-text">${sent.original}</span>
                </div>
                ${sent.forms.map((form, fi) => {
                  const id = `${baseId}-tr${i}-f${fi}`;
                  const val = savedAnswers[id] || '';
                  return `
                    <div class="transform-row">
                      <div class="transform-label">${form}:</div>
                      <input type="text" class="check-if-input transform-input" 
                             data-save-id="${id}" 
                             value="${val}"
                             placeholder="...">
                    </div>
                  `;
                }).join('')}
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }
    
    // G9 Review: Fill in pronoun (Their/His/Our etc.)
    if (item.type === 'fill-sentences') {
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="fill-sentences-list">
            ${item.items.map((it, i) => {
              const id = `${baseId}-fs${i}`;
              const val = savedAnswers[id] || '';
              // Split sentence on _____ and render with input
              const parts = it.sentence.split('_____');
              return `
                <div class="fill-sentence-row">
                  <span class="fill-sentence-num">${i + 1}.</span>
                  <span class="fill-sentence-text">
                    <span>${parts[0]}</span>
                    <input type="text" class="check-if-input fill-sentence-input" 
                           data-save-id="${id}" 
                           value="${val}"
                           placeholder="...">
                    <span>${parts[1] || ''}</span>
                  </span>
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
    
    // G9 Review: Examples list (Language Melody - read these examples)
    if (item.examples) {
      return `
        <div class="check-if-item">
          <div class="check-if-ask">
            <span class="check-if-label">Check if</span>
            ${item.ask}
          </div>
          <div class="check-if-ask-fa">${item.askFa}</div>
          <div class="examples-display-list">
            ${item.examples.map((ex, i) => `
              <div class="example-display-row">
                <span class="example-display-num">${i + 1}.</span>
                <span class="example-display-text">${ex}</span>
              </div>
            `).join('')}
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
  // Hide sidebar (review pages don't need it) and put content in the existing content-area
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.style.display = 'none';
  const lessonBody = document.querySelector('.lesson-body');
  if (lessonBody) lessonBody.style.gridTemplateColumns = '1fr';
  
  const contentArea = document.getElementById('contentArea');
  contentArea.innerHTML = `
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
  
  const imagePath = `../images/grade9/lessons/lesson${LESSON.num}/conversation.jpg`;
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
          ${p.explanation ? `
            <div class="practice-explanation">
              <strong>📖 ساختار:</strong> ${p.explanation}
            </div>
          ` : ''}
        </div>
        <div class="audio-bar" data-audio="${audioPath('practice', pIdx + 1)}">
          <button class="audio-play"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
          <div class="progress"><div class="progress-fill"></div></div>
          <span class="time">0:00</span>
        </div>
        ${p.note ? `<div class="match-instructions">${p.note}</div>` : ''}
        ${
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
          p.visualPanel ? `
            <div class="visual-panel">
              <div class="visual-panel-head">
                <div class="visual-panel-title">${p.visualPanel.title}</div>
              </div>
              ${p.visualPanel.groups.map(g => `
                <div class="visual-panel-group">
                  <div class="visual-panel-group-label">${g.label}</div>
                  ${g.type === 'table' ? `
                    <div class="visual-table-wrap">
                      <table class="visual-table">
                        <thead><tr>${g.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
                        <tbody>
                          ${g.rows.map(row => `<tr>${row.map(cell => `<td>${cell || ''}</td>`).join('')}</tr>`).join('')}
                        </tbody>
                      </table>
                    </div>
                  ` : g.type === 'images' ? `
                    <div class="visual-images-grid">
                      ${g.items.map(it => `
                        <div class="visual-image-card">
                          <div class="img-box img-square" data-src="../images/grade9/lessons/lesson${LESSON.num}/${it.image}" data-alt="${it.word}"></div>
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
// ─── 3. LANGUAGE MELODY (Grade 9) ───
function buildMelody() {
  const melody = LESSON.languageMelodySection;
  if (!melody) return `<div class="placeholder-msg">بخش ملودی زبان آماده نیست.</div>`;
  
  // Helper to render one example row
  const exRow = (text, arrow, idx) => {
    const arrowTitle = arrow === '↗' ? 'لحن صعودی' : 'لحن نزولی';
    const cleanText = text.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
    return `
      <div class="melody-example-row">
        <span class="melody-num">${idx + 1}</span>
        <span class="melody-text">${text}</span>
        <span class="melody-arrow" title="${arrowTitle}">${arrow}</span>
        <button class="tts-btn tts-sm" data-tts="${cleanText}" title="تلفظ"></button>
      </div>
    `;
  };
  
  // Intonation guide cards
  let guideHTML = '';
  if (melody.intonationGuide) {
    const g = melody.intonationGuide;
    guideHTML = `
      <div class="intonation-guide">
        ${g.rising ? `
          <div class="intonation-card intonation-rising">
            <div class="intonation-card-head"><span class="intonation-arrow-big">↗</span> Rising — لحن صعودی</div>
            <div class="intonation-card-body">${g.rising}</div>
          </div>
        ` : ''}
        ${g.falling ? `
          <div class="intonation-card intonation-falling">
            <div class="intonation-card-head"><span class="intonation-arrow-big">↘</span> Falling — لحن نزولی</div>
            <div class="intonation-card-body">${g.falling}</div>
          </div>
        ` : ''}
      </div>
    `;
  }
  
  // Examples — either two groups (rising/falling) or single list
  let examplesHTML = '';
  if (melody.risingExamples || melody.fallingExamples) {
    examplesHTML = `
      <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 1rem;color:var(--text-dark);unicode-bidi:plaintext;text-align:start">Examples to Practice</h3>
      <div class="melody-two-tables">
        ${melody.risingExamples ? `
          <div class="melody-table-group melody-table-rising">
            <div class="melody-table-group-head"><span class="intonation-arrow-big">↗</span> Rising</div>
            ${melody.risingExamples.map((ex, idx) => exRow(ex, '↗', idx)).join('')}
          </div>
        ` : ''}
        ${melody.fallingExamples ? `
          <div class="melody-table-group melody-table-falling">
            <div class="melody-table-group-head"><span class="intonation-arrow-big">↘</span> Falling</div>
            ${melody.fallingExamples.map((ex, idx) => exRow(ex, '↘', idx)).join('')}
          </div>
        ` : ''}
      </div>
    `;
  } else if (melody.examples) {
    examplesHTML = `
      <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 1rem;color:var(--text-dark);unicode-bidi:plaintext;text-align:start">Examples to Practice</h3>
      <div class="melody-examples">
        ${melody.examples.map((ex, idx) => {
          const text = typeof ex === 'string' ? ex : ex.text;
          const arrow = typeof ex === 'object' && ex.arrow ? ex.arrow : (melody.defaultArrow || '↘');
          return exRow(text, arrow, idx);
        }).join('')}
      </div>
    `;
  }
  
  return `
    <div class="section-head">
      <h2>${melody.title}</h2>
      <div class="section-fa">${melody.titleFa}</div>
      <div class="section-desc">${melody.desc}</div>
    </div>
    
    ${guideHTML}
    
    <div class="audio-bar" data-audio="${audioPath('melody')}">
      <button class="audio-play"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
      <div class="progress"><div class="progress-fill"></div></div>
      <span class="time">0:00</span>
    </div>
    
    <div class="spelling-sample">
      <h4 style="font-family:var(--font-en);unicode-bidi:plaintext;text-align:start;font-size:1rem;color:var(--primary);margin-bottom:.85rem">Sample Conversation</h4>
      ${melody.conversation.map(line => {
        const cleanText = line.en.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
        return `
        <div class="spelling-line" style="display:flex;align-items:center;gap:.5rem">
          <strong style="color:var(--accent);font-family:var(--font-en);unicode-bidi:plaintext;flex-shrink:0">${line.speaker}:</strong>
          <span style="font-family:var(--font-en);unicode-bidi:plaintext;flex:1">${line.en}</span>
          <button class="tts-btn tts-sm" data-tts="${cleanText}" title="تلفظ"></button>
        </div>
      `;}).join('')}
    </div>
    
    ${examplesHTML}
    
    ${melody.talkToTeacher ? `
      <div class="talk-to-teacher">
        <div class="talk-to-teacher-label">💬 Talk to Your Teacher</div>
        <div class="talk-to-teacher-content">${melody.talkToTeacher}</div>
      </div>
    ` : ''}
  `;
}

// ─── 4. GRAMMAR (Grade 9) ───
function buildGrammar() {
  const grammar = LESSON.grammarSection;
  if (!grammar) return `<div class="placeholder-msg">بخش دستور زبان آماده نیست.</div>`;
  const seeAlso = LESSON.seeAlso;
  
  let explanationHTML = '';
  if (grammar.explanation) {
    explanationHTML = `
      <div class="grammar-explanation">
        <div class="grammar-explanation-icon">💡</div>
        <div class="grammar-explanation-content">
          <h4>توضیح کلیدی</h4>
          ${grammar.explanation.map(p => `<p>${p}</p>`).join('')}
        </div>
      </div>
    `;
  }
  
  let tipHTML = '';
  if (grammar.tip) {
    tipHTML = `
      <div class="grammar-tip">
        <strong>📌 نکته:</strong> ${grammar.tip}
      </div>
    `;
  }
  
  return `
    <div class="section-head">
      <h2>${grammar.title}</h2>
      <div class="section-fa">${grammar.titleFa}</div>
    </div>
    
    ${explanationHTML}
    
    <div class="grammar-tables">
      ${grammar.tables.map(t => `
        <div class="grammar-table-card">
          <h4 class="grammar-table-title">${t.title}</h4>
          <table class="grammar-table">
            <thead>
              <tr>${t.headers.map(h => `<th>${h}</th>`).join('')}</tr>
            </thead>
            <tbody>
              ${t.rows.map(r => `<tr>${r.map(cell => `<td>${cell}</td>`).join('')}</tr>`).join('')}
            </tbody>
          </table>
          ${t.examples && t.examples.length ? `
            <div class="grammar-table-examples">
              ${t.examples.map(ex => {
                const cleanEn = ex.en.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
                return `
                <div class="grammar-example-row">
                  <button class="tts-btn tts-sm" data-tts="${cleanEn}" title="تلفظ"></button>
                  <div class="grammar-example-content">
                    <div class="grammar-example-en">${ex.en}</div>
                    <div class="grammar-example-fa">${ex.fa}</div>
                  </div>
                </div>
              `;}).join('')}
            </div>
          ` : ''}
        </div>
      `).join('')}
    </div>
    
    ${grammar.examples && grammar.examples.length ? `
      <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 1rem;color:var(--text-dark)">Examples — مثال‌ها</h3>
      <div class="grammar-examples">
        ${grammar.examples.map(ex => {
          const cleanEn = ex.en.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
          return `
          <div class="grammar-example-row">
            <button class="tts-btn tts-sm" data-tts="${cleanEn}" title="تلفظ"></button>
            <div class="grammar-example-content">
              <div class="grammar-example-en">${ex.en}</div>
              <div class="grammar-example-fa">${ex.fa}</div>
            </div>
          </div>
        `;}).join('')}
      </div>
    ` : ''}
    
    ${tipHTML}
    
    ${seeAlso ? `
      <div class="see-also-card">
        <h3 class="see-also-title">${seeAlso.title}</h3>
        <div class="see-also-fa">${seeAlso.titleFa}</div>
        
        ${seeAlso.intro ? `
          <div class="see-also-intro">${seeAlso.intro}</div>
        ` : ''}
        
        <table class="see-also-table">
          <thead>
            <tr>
              <th>${seeAlso.col1Label || 'English'}</th>
              <th>${seeAlso.col2Label || 'فارسی / Translation'}</th>
            </tr>
          </thead>
          <tbody>
            ${seeAlso.pairs.map(p => {
              const cleanEn = (p.full || '').replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
              const typeClass = p.type ? ` see-also-row-${p.type}` : '';
              const typeLabel = p.type === 'apostrophe-s' ? `<span class="see-also-tag tag-person">'s</span>` 
                : p.type === 'plural-s' ? `<span class="see-also-tag tag-plural">s'</span>`
                : p.type === 'of' ? `<span class="see-also-tag tag-thing">of</span>` : '';
              return `
              <tr class="see-also-row${typeClass}">
                <td>
                  <button class="tts-btn tts-sm" data-tts="${cleanEn}" title="تلفظ"></button>
                  ${p.full}
                  ${typeLabel}
                </td>
                <td><strong>${p.short}</strong></td>
              </tr>
            `;}).join('')}
          </tbody>
        </table>
        
        ${seeAlso.otherForms && seeAlso.otherForms.length ? `
          <h4 style="font-family:var(--font-en);unicode-bidi:plaintext;text-align:start;font-size:1rem;color:var(--primary);margin:1rem 0 .65rem">💡 Notes</h4>
          <ul class="see-also-other">
            ${seeAlso.otherForms.map(f => `<li>${f}</li>`).join('')}
          </ul>
        ` : ''}
      </div>
    ` : ''}
  `;
}

// ─── (Old buildLetters from grade 8 — kept for compatibility but not used) ───
function buildLetters() {
  // For Grade 8 compatibility: Spelling and Pronunciation (letter clusters)
  const spelling = LESSON.spelling;
  if (!spelling) return `<div class="placeholder-msg">بخش املا و تلفظ آماده نیست.</div>`;
  
  let crosswordHTML = '';
  if (spelling.crossword) {
    const cw = spelling.crossword;
    crosswordHTML = `
      <div class="crossword-card">
        <h4>🧩 جدول کلمات متقاطع</h4>
        <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:1rem">${cw.intro}</p>
        <div class="crossword-clues">
          <div class="clues-section">
            <h5>↓ Down (پایین)</h5>
            <ol class="clues-list">
              ${cw.clues.down.map(c => `<li><span class="clue-num">${c.num}.</span> ${c.clue} <span class="clue-answer">[${c.answer}]</span></li>`).join('')}
            </ol>
          </div>
          <div class="clues-section">
            <h5>→ Across (عرضی)</h5>
            <ol class="clues-list">
              ${cw.clues.across.map(c => `<li><span class="clue-num">${c.num}.</span> ${c.clue} <span class="clue-answer">[${c.answer}]</span></li>`).join('')}
            </ol>
          </div>
        </div>
      </div>
    `;
  }
  
  return `
    <div class="section-head">
      <h2>Spelling and Pronunciation</h2>
      <div class="section-fa">املا و تلفظ</div>
      <div class="section-desc">${spelling.desc}</div>
    </div>
    
    <div class="spelling-sample">
      <h4 style="font-family:var(--font-en);unicode-bidi:plaintext;text-align:start;font-size:1rem;color:var(--primary);margin-bottom:.85rem">Sample Conversation</h4>
      ${spelling.sample.map(line => `
        <div class="spelling-line">
          <strong style="color:var(--accent);font-family:var(--font-en);unicode-bidi:plaintext">${line.speaker}:</strong>
          <span style="font-family:var(--font-en);unicode-bidi:plaintext">${line.en}</span>
        </div>
      `).join('')}
    </div>
    
    <h3 style="font-family:var(--font-display);font-size:1.2rem;margin:1.5rem 0 1rem;color:var(--text-dark);unicode-bidi:plaintext;text-align:start">Letter Clusters in this Lesson</h3>
    <div class="clusters-grid">
      ${spelling.letterClusters.map((c, idx) => `
        <div class="cluster-card">
          <div class="cluster-display color-${(idx % 4) + 1}">${c.cluster}</div>
          <div class="cluster-fa">${c.fa}</div>
          <div class="cluster-examples">
            ${c.examples.map(ex => `<span class="cluster-ex">${ex}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
    
    ${crosswordHTML}
  `;
}

// ─── 4. LISTENING ───
function buildListening_ORIG() { return ''; }


function buildListening() {
  // Grade 9: listeningReadingWriting (with multiple section types)
  const lrw = LESSON.listeningReadingWriting;
  if (lrw) {
    const audioSrc = audioPath('listening');
    let html = `
      <div class="section-head">
        <h2>${lrw.title}</h2>
        <div class="section-fa">شنیداری، خواندن و نوشتن</div>
      </div>
      ${audioSrc ? `
        <div class="audio-bar" data-audio="${audioSrc}">
          <button class="audio-play"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
          <div class="progress"><div class="progress-fill"></div></div>
          <span class="time">0:00</span>
        </div>
      ` : `
        <div class="placeholder-msg" style="margin-bottom:1.5rem">این درس فایل صوتی برای بخش شنیداری ندارد.</div>
      `}
    `;
    
    lrw.sections.forEach((sec, idx) => {
      html += `<div class="lrw-section">`;
      html += `<div class="lrw-section-head"><h3>${sec.title}</h3>`;
      if (sec.desc) html += `<div class="lrw-section-desc">${sec.desc}</div>`;
      html += `</div>`;
      
      if (sec.type === 'find-it') {
        html += `
          <div class="lrw-find-it">
            ${sec.example ? `<div class="lrw-example"><strong>Example:</strong> ${sec.example}</div>` : ''}
            <div class="lrw-passage">${sec.text}</div>
            <p style="font-size:.85rem;color:var(--text-mid);margin-top:.85rem">افعال "to be" پیدا شده در متن:</p>
            <div class="lrw-targets">
              ${sec.targets.map((t, i) => `<span class="target-chip">${i + 1}. ${t}</span>`).join('')}
            </div>
          </div>
        `;
      }
      
      else if (sec.type === 'tell-classmates') {
        html += `<div class="lrw-textarea-wrap"><textarea class="lrw-textarea" rows="6" placeholder="پنج جمله درباره خودت و خانواده‌ات بنویس..."></textarea></div>`;
      }
      
      else if (sec.type === 'listen-table-A') {
        // Support either uniform `rows` or per-column `columnRows`
        if (sec.columnRows) {
          // Asymmetric: each column has its own number of rows
          const maxRows = Math.max(...sec.columnRows);
          html += `
            <table class="lrw-table lrw-table-async">
              <thead><tr>${sec.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
              <tbody>
                ${[...Array(maxRows)].map((_, rIdx) => `
                  <tr>${sec.columns.map((_, cIdx) => {
                    if (rIdx < sec.columnRows[cIdx]) {
                      return `<td><input type="text" class="lrw-input"></td>`;
                    } else {
                      return `<td class="lrw-empty-cell"></td>`;
                    }
                  }).join('')}</tr>
                `).join('')}
              </tbody>
            </table>
          `;
        } else {
          html += `
            <table class="lrw-table">
              <thead><tr>${sec.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
              <tbody>
                ${[...Array(sec.rows || 1)].map(() => `<tr>${sec.columns.map(() => `<td><input type="text" class="lrw-input"></td>`).join('')}</tr>`).join('')}
              </tbody>
            </table>
          `;
        }
      }
      
      else if (sec.type === 'listen-questions-B' || sec.type === 'listen-questions-A') {
        html += `
          <div class="lrw-questions">
            ${sec.questions.map((q, i) => {
              const filledTemplate = q.template.replace(/_____/g, '<input type="text" class="lrw-input-inline">');
              return `
                <div class="lrw-question-row">
                  <div class="lrw-q"><strong>${i + 1}. ${q.q}</strong></div>
                  <div class="lrw-q-template">${filledTemplate}</div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }
      
      html += `</div>`;
    });
    
    return html;
  }
  
  // Grade 8 fallback: listenings array
  if (!LESSON.listenings) return `<div class="placeholder-msg">شنیداری برای این درس آماده نیست.</div>`;
  
  return `
    <div class="section-head">
      <h2>Listening & Reading</h2>
      <div class="section-fa">شنیداری و خواندنی</div>
      <div class="section-desc">به مکالمه‌ها گوش دهید و گزینه‌های صحیح را علامت بزنید.</div>
    </div>
    <div class="audio-bar" data-audio="${audioPath('listening')}">
      <button class="audio-play"><svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></button>
      <div class="progress"><div class="progress-fill"></div></div>
      <span class="time">0:00</span>
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
  
  if (sw.groupWork) {
    const gw = sw.groupWork;
    const colHeads = gw.colHeads || Array.from({length: gw.cols}, (_, i) => i + 1);
    html += `
      <div class="speak-write-task">
        <div class="speak-write-task-head">
          <h4>${gw.title}</h4>
          <div class="task-fa"><strong>کار گروهی:</strong> ${gw.instruction}</div>
        </div>
        <table class="fillable-table">
          <thead><tr><th style="width:35%">${gw.title === 'Group Work' ? 'Information' : ''}</th>${colHeads.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>
            ${gw.rows.map((row, i) => `
              <tr>
                <td class="label-cell">${row}<span class="label-fa">${gw.rowsFa[i] || ''}</span></td>
                ${Array.from({length: gw.cols}, () => `<td><input type="text" class="fillable-input"></td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  if (sw.dialog) {
    html += `
      <div class="speak-write-task">
        <div class="speak-write-task-head">
          <h4>${sw.dialog.title}</h4>
          <div class="task-fa"><strong>مکالمه شما:</strong> با همکلاسی خود این مکالمه را تمرین کنید.</div>
        </div>
        <div class="dialog-template">
          ${sw.dialog.lines.map(line => `<div><strong style="color:var(--primary)">${line.speaker}:</strong> ${line.text}</div>`).join('')}
        </div>
      </div>
    `;
  }
  
  // ── Grade 9: cardA (Reading, Speaking, Listening and Writing) ──
  if (sw.cardA) {
    html += `
      <div class="speak-write-task">
        <div class="speak-write-task-head">
          <h4>${sw.title || 'Reading, Speaking, Listening and Writing'}</h4>
          <div class="task-fa">${sw.desc || 'سؤالات روی Card A را بخون. سپس از همکلاسی‌ها بپرس و جواب‌ها را روی Card B بنویس.'}</div>
        </div>
        <div class="card-pair-grid">
          <div class="card-ab card-a">
            <div class="card-ab-label">Card A — Questions</div>
            <ol class="card-questions">
              ${sw.cardA.map(q => `<li>${q}</li>`).join('')}
            </ol>
          </div>
          <div class="card-ab card-b">
            <div class="card-ab-label">Card B — Answers</div>
            <ol class="card-answers">
              ${sw.cardA.map(() => `<li><input type="text" class="fillable-input" placeholder="..."></li>`).join('')}
            </ol>
          </div>
        </div>
      </div>
    `;
  }
  
  // ── Grade 8: Pair Work ──
  if (sw.pairWork) {
    const pw = sw.pairWork;
    html += `
      <div class="speak-write-task">
        <div class="speak-write-task-head">
          <h4>${pw.title}</h4>
          <div class="task-fa"><strong>کار دو نفره:</strong> ${pw.instruction}</div>
        </div>
        <div class="pair-cards-grid">
          ${pw.cards.map(card => `
            <div class="pair-card">
              <div class="pair-card-role">${card.role}</div>
              <div class="pair-card-task">${card.task}</div>
              <div class="pair-card-fields">
                <div class="pair-card-field"><label>Name:</label><input type="text" class="fillable-input"></div>
                <div class="pair-card-field"><label>Nationality:</label><input type="text" class="fillable-input"></div>
                <div class="pair-card-field"><label>City:</label><input type="text" class="fillable-input"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // ── Grade 8/9: Role Play ──
  if (sw.rolePlay) {
    const rp = sw.rolePlay;
    
    if (rp.roles) {
      // Grade 8 format: with roles array
      html += `
        <div class="speak-write-task">
          <div class="speak-write-task-head">
            <h4>${rp.title}</h4>
            <div class="task-fa"><strong>نقش‌بازی:</strong> ${rp.instruction}</div>
          </div>
          <div class="role-play-grid">
            ${rp.roles.map((r, i) => `
              <div class="role-card role-${i+1}">
                <div class="role-card-num">${i+1}</div>
                <div class="role-card-name">${r.role}</div>
                <div class="role-card-task">${r.task}</div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    } else if (rp.desc) {
      // Grade 9 format: simple title + desc
      html += `
        <div class="speak-write-task">
          <div class="speak-write-task-head">
            <h4>🎭 ${rp.title}</h4>
            <div class="task-fa">${rp.desc}</div>
          </div>
        </div>
      `;
    }
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
      <p>این تمرین‌ها مستقیماً از کتاب کار رسمی پایه نهم استخراج شده‌اند.</p>
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
      <div class="dropzone-pair">
        <div class="dropzone girl"><h5>Baby Girl Name 👧</h5><div class="dropzone-placeholder">[Drop names here]</div></div>
        <div class="dropzone boy"><h5>Baby Boy Name 👦</h5><div class="dropzone-placeholder">[Drop names here]</div></div>
      </div>
      <div class="match-grid">${task.names.map(n => `<div class="match-item">${n}</div>`).join('')}</div>
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
    if (task.rightType === 'number-grid') {
      body = `
        <div class="match-line-container">
          <div class="match-line-left">
            ${task.leftItems.map(item => `<div class="match-line-item">${item}</div>`).join('')}
          </div>
          <div class="match-line-right">
            <div class="number-grid">
              ${[...Array(31)].map((_, i) => `<div class="num-cell">${i+1}</div>`).join('')}
            </div>
          </div>
        </div>
        <p style="font-size:.78rem;color:var(--text-soft);margin-top:.85rem">${task.instruction || ''}</p>
      `;
    } else {
      body = `
        <div class="match-line-container">
          <div class="match-line-left">
            ${task.leftItems.map(item => `<div class="match-line-item">${item}</div>`).join('')}
          </div>
          <div class="match-line-right">
            <div class="months-card">
              <div class="months-card-head">Months</div>
              <div class="months-grid">
                ${task.rightItems.map(m => `<div class="month-cell">${m}</div>`).join('')}
              </div>
            </div>
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
    body = `
      <div class="job-match-container">
        <div class="job-images">
          ${task.jobs.map(j => `
            <div class="job-image-card"><div class="job-icon">${j.icon}</div><div class="job-fa">${j.fa}</div></div>
          `).join('')}
        </div>
        <div class="job-words">
          ${[...task.jobs].sort(() => Math.random() - 0.5).map(j => `
            <div class="job-word-card">${j.word}</div>
          `).join('')}
        </div>
      </div>
      <p style="font-size:.78rem;color:var(--text-soft);margin-top:.75rem">روی کلمات کلیک کن و به تصاویر مرتبط وصل کن.</p>
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
      <div class="rc-questions">
        ${task.questions.map((q, i) => `
          <div class="rc-question-row">
            <div class="rc-q-text"><span style="font-family:var(--font-en);unicode-bidi:plaintext">${i + 1}. ${q.q}</span></div>
            <input type="text" class="wb-input" placeholder="پاسخ..." data-answer="${(q.sampleAnswer || '').replace(/"/g, '&quot;')}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌های نمونه</button>
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
  
  // ═══════════════════════════════════════════════
  //  GRADE 8 WORKBOOK TASKS
  // ═══════════════════════════════════════════════
  
  // ── COUNTRY-MAP-NUMBERS (G8 L1 ex 1) ──
  else if (task.type === 'country-map-numbers') {
    body = `
      <div class="map-task-info">
        <p>📍 با توجه به نقشهٔ ایران و کشورهای همسایه، بنویسید هر کشور با چه شماره‌ای روی نقشه نشان داده می‌شود.</p>
      </div>
      <div class="country-numbers-grid">
        ${task.countries.map(c => `
          <div class="country-number-card">
            <div class="country-num">${c.num}</div>
            <div class="country-info">
              <div class="country-name">${c.name}</div>
              <div class="country-fa">${c.fa}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="wb-hint">💡 <strong>راهنما:</strong> نقشه واقعی ایران و همسایگان رو ببین و شماره‌ها رو روی هر کشور قرار بده. اسامی به ترتیب از ۱ تا ۸ به این کشورها تعلق دارند: ${task.countries.map(c => c.fa).join('، ')}.</div>
    `;
  }
  
  // ── FIND-LETTER-CITIES (G8 L1 ex 2) ──
  else if (task.type === 'find-letter-cities') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">روی شهرهایی که حروف <strong style="color:var(--accent)">ch</strong> یا <strong style="color:var(--accent)">sh</strong> دارن کلیک کن (یا اون‌هایی که فکر می‌کنی این حروف رو دارن).</p>
      <div class="city-cloud">
        ${task.cities.map((city, i) => `
          <span class="city-chip" data-city="${city}" data-target="${task.targets.includes(city)}">${city}</span>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
      <div class="wb-hint">💡 ${task.hint}</div>
    `;
  }
  
  // ── FIFA-RANKING (G8 L1 ex 3) ──
  else if (task.type === 'fifa-ranking') {
    body = `
      <table class="wb-table">
        <thead><tr><th>کشور</th><th>Country</th><th>رتبه فیفا (نمونه)</th><th>پیش‌بینی شما</th></tr></thead>
        <tbody>
          ${task.countries.map(c => `
            <tr>
              <td>${c.fa}</td>
              <td><strong style="font-family:var(--font-en);unicode-bidi:plaintext">${c.name}</strong></td>
              <td style="text-align:center;color:var(--text-soft);font-family:var(--font-en)">~${c.sampleRank}</td>
              <td><input type="text" class="wb-input wb-input-sm" placeholder="?"></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="wb-hint">💡 <strong>توجه:</strong> ${task.note}</div>
    `;
  }
  
  // ── CITY-TO-COUNTRY (G8 L1 ex 5) ──
  else if (task.type === 'city-to-country') {
    body = `
      <table class="wb-table">
        <thead><tr><th style="width:40%">City</th><th>Country</th></tr></thead>
        <tbody>
          ${task.items.map(item => `
            <tr>
              <td>• <strong style="font-family:var(--font-en);unicode-bidi:plaintext">${item.city}</strong></td>
              <td>
                ${item.example 
                  ? `<span class="example-answer">${item.answer} ✓</span>` 
                  : `<input type="text" class="wb-input" placeholder="..." data-answer="${item.answer}">`}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── ROUTE-CITIES (G8 L1 ex 6) ──
  else if (task.type === 'route-cities') {
    body = `
      <div class="route-farsi">
        <strong>مسیر:</strong> ${task.farsiRoute}
      </div>
      <div class="route-steps">
        ${task.steps.map((step, i) => `
          <div class="route-step">
            ${i < task.givenSteps 
              ? `<span class="route-step-given">${step}</span>` 
              : `<input type="text" class="wb-input wb-input-sm" placeholder="..." data-answer="${step}">`}
            ${i < task.steps.length - 1 ? '<span class="route-arrow">←</span>' : ''}
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── IMAGE-COUNTRY (G8 L1 ex 7) ──
  else if (task.type === 'image-country') {
    body = `
      <div class="image-country-grid">
        ${task.items.map(item => `
          <div class="image-country-card">
            <div class="image-country-emoji">${item.emoji}</div>
            <div class="image-country-hint">${item.hint}</div>
            <input type="text" class="wb-input wb-input-center" placeholder="?" data-answer="${item.answer}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── FAMOUS-PEOPLE (G8 L1 ex 8) ──
  else if (task.type === 'famous-people') {
    body = `
      <div class="famous-people-grid">
        ${task.people.map(p => `
          <div class="famous-person-card">
            <div class="famous-person-photo">👤</div>
            <div class="famous-person-name">${p.name}</div>
            <input type="text" class="wb-input wb-input-center" placeholder="ملیت؟" data-answer="${p.answer}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ═══════════════════════════════════════════════
  //  GRADE 8 LESSONS 2-7 WORKBOOK TASKS
  // ═══════════════════════════════════════════════
  
  // ── DAYS-CHECKLIST (G8 L2 ex 1) ──
  else if (task.type === 'days-checklist') {
    body = `
      <table class="wb-table">
        <thead><tr><th>Days of the Week</th><th>Your Days (✓)</th></tr></thead>
        <tbody>
          ${task.days.map(day => `
            <tr>
              <td><strong>${day}</strong></td>
              <td style="text-align:center"><input type="checkbox"></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
      <div class="wb-hint" style="display:none">💡 <strong>روزهای فرد:</strong> ${task.odds.join(', ')}<br>${task.hint}</div>
    `;
  }
  
  // ── ACTIVITY-TIME-GRID (G8 L2 ex 2) ──
  else if (task.type === 'activity-time-grid') {
    body = `
      <table class="wb-table">
        <thead><tr><th>Activity</th>${task.timeColumns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
        <tbody>
          ${task.activities.map(a => `
            <tr>
              <td><strong>${a}</strong></td>
              ${task.timeColumns.map(() => `<td style="text-align:center"><input type="checkbox"></td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  
  // ── TRANSLATE-PHRASES-EN-FA (G8 L2 ex 3) ──
  else if (task.type === 'translate-phrases-en-fa') {
    body = `
      <table class="wb-table">
        <thead><tr><th>English</th><th>فارسی</th></tr></thead>
        <tbody>
          ${task.items.map(item => `
            <tr>
              <td><strong style="font-family:var(--font-en);unicode-bidi:plaintext">${item.en}</strong></td>
              <td><input type="text" class="wb-input" placeholder="ترجمه فارسی..." data-answer="${item.answer}" style="font-family:var(--font-fa);direction:rtl;text-align:right"></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── WEEKLY-TIME-TABLE (G8 L2 ex 4) ──
  else if (task.type === 'weekly-time-table') {
    body = `
      <p style="font-size:.82rem;color:var(--text-mid);margin-bottom:.85rem">
        برای هر فعالیت، ساعت یا زمان انجامش رو بنویس. 
        <strong>مثال:</strong> ${task.example.day} → ${task.example.activity}: ${task.example.time}
      </p>
      <div style="overflow-x:auto">
        <table class="wb-table" style="font-size:.78rem">
          <thead>
            <tr>
              <th>Day</th>
              ${task.activities.map(a => `<th colspan="2">${a}</th>`).join('')}
            </tr>
            <tr>
              <th></th>
              ${task.activities.map(() => '<th>a.m.</th><th>p.m.</th>').join('')}
            </tr>
          </thead>
          <tbody>
            ${task.days.map((day, di) => `
              <tr>
                <td><strong>${day}</strong></td>
                ${task.activities.map((a, ai) => {
                  if (di === 0 && ai === 0) {
                    return `<td colspan="2" style="text-align:center;background:var(--success-bg);color:var(--success);font-weight:600">${task.example.time}</td>`;
                  }
                  return `<td><input type="text" class="wb-input wb-input-sm" placeholder="-"></td><td><input type="text" class="wb-input wb-input-sm" placeholder="-"></td>`;
                }).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <p style="font-size:.78rem;color:var(--text-soft);margin-top:.5rem"><strong>a.m.</strong> = in the morning · <strong>p.m.</strong> = in the afternoon and in the evening</p>
    `;
  }
  
  // ── OCCASION-DAY-FA-EN (G8 L2 ex 5) ──
  else if (task.type === 'occasion-day-fa-en') {
    body = `
      <table class="wb-table">
        <thead><tr><th>Occasion (مناسبت)</th><th>Day</th></tr></thead>
        <tbody>
          ${task.items.map(item => `
            <tr>
              <td><strong>${item.occasion}</strong>${item.note ? ` <span style="font-size:.7rem;color:var(--text-soft)">(${item.note})</span>` : ''}</td>
              <td>
                ${item.example 
                  ? `<span class="example-answer">${item.answer} ✓</span>` 
                  : `<input type="text" class="wb-input" placeholder="?">`}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="wb-hint">💡 ${task.hint}</div>
    `;
  }
  
  // ── TRANSLATE-FA-EN-LIST (G8 L2 ex 6, 7 - L3 ex 4 etc) ──
  else if (task.type === 'translate-fa-en-list') {
    body = `
      <table class="wb-table">
        <thead><tr><th>فارسی</th><th>English</th></tr></thead>
        <tbody>
          ${task.items.map(item => `
            <tr>
              <td>${item.fa}</td>
              <td><input type="text" class="wb-input" placeholder="..." data-answer="${item.answer}"></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── SENTENCE-BUILDER (G8 L2 ex 8) ──
  else if (task.type === 'sentence-builder') {
    if (task.columns) {
      // G9 L6 format: 4-column word table + numbered sentence slots
      const cols = task.columns;
      body = `
        <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">از هر ستون کلمه انتخاب کن و جمله بساز:</p>
        <div class="visual-table-wrap">
          <table class="sentence-builder-table">
            <thead><tr><th>A</th><th>B</th><th>C</th><th>D</th></tr></thead>
            <tbody>
              ${[...Array(Math.max(cols.A.length, cols.B.length, cols.C.length, cols.D.length))].map((_, i) => `
                <tr>
                  <td>${cols.A[i] || ''}</td>
                  <td>${cols.B[i] || ''}</td>
                  <td>${cols.C[i] || ''}</td>
                  <td>${cols.D[i] || ''}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ${task.example ? `<div class="list-fill-example"><span style="color:var(--text-mid);font-family:var(--font-fa);margin-left:.5rem">مثال:</span><strong>${task.example}</strong></div>` : ''}
        <ol class="sentence-list-ol">
          ${[...Array(task.slots)].map(() => `<li><input type="text" class="wb-input sl-input" placeholder="یک جمله بساز..."></li>`).join('')}
        </ol>
      `;
    } else {
      // G8 format: list of slot objects with prefix/suffix
      body = `
        <div class="wb-example-box">
          <strong>Example:</strong> ${task.example}
        </div>
        <div class="sentence-builder-list">
          ${task.slots.map((slot, i) => `
            <div class="sentence-builder-row">
              <span class="sb-num">${i+1}.</span>
              ${slot.prefix ? `<span class="sb-prefix">${slot.prefix}</span>` : ''}
              <input type="text" class="wb-input" placeholder="...">
              ${slot.suffix ? `<span class="sb-suffix">${slot.suffix}</span>` : ''}
            </div>
          `).join('')}
        </div>
      `;
    }
  }
  
  // ── CAN-CANT-TABLE (G8 L3 ex 2) ──
  else if (task.type === 'can-cant-table') {
    body = `
      <table class="wb-table">
        <thead><tr><th>Name</th>${task.activities.map(a => `<th>${a}</th>`).join('')}</tr></thead>
        <tbody>
          ${task.people.map(p => `
            <tr>
              <td><strong>${p.name}</strong></td>
              ${task.activities.map(act => {
                const correctAns = p[act] ? 'can' : "can't";
                return `<td><input type="text" class="wb-input wb-input-sm" placeholder="?" data-answer="${correctAns}" style="text-align:center"></td>`;
              }).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── ABILITY-CHECKLIST (G8 L3 ex 3) ──
  else if (task.type === 'ability-checklist') {
    body = `
      <div class="ability-grid">
        ${task.abilities.map((a, i) => `
          <label class="ability-chip">
            <input type="checkbox">
            <span>${a}</span>
          </label>
        `).join('')}
      </div>
      <p style="margin-top:1rem;font-size:.85rem;color:var(--text-mid)">حالا با استفاده از علامت‌هایت، درباره خودت جمله بنویس:</p>
      <div class="wb-prompt">${task.sentenceStarter}</div>
      <textarea class="wb-input" rows="4" placeholder="جملاتت رو اینجا بنویس..." style="font-family:var(--font-en);unicode-bidi:plaintext;text-align:start;margin-top:.5rem"></textarea>
    `;
  }
  
  // ── FAMILY-ABILITIES / FAMILY-HOBBIES (G8 L3 ex 6, L7 ex 6) ──
  else if (task.type === 'family-abilities' || task.type === 'family-hobbies') {
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
  
  // ── MATCH-PROBLEM-ADVICE (G8 L4 ex 2) ──
  else if (task.type === 'match-problem-advice') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">شماره توصیه درست رو در کادر هر مشکل بنویس:</p>
      <div class="match-pairs-grid">
        <div class="match-col">
          <h5>Problem (مشکل)</h5>
          ${task.problems.map((p, i) => `
            <div class="match-pair-row">
              <span class="match-letter">${String.fromCharCode(97+i)}.</span>
              <span class="match-text">${p}</span>
              <input type="number" class="wb-input wb-input-sm" min="1" max="${task.advices.length}" placeholder="?" data-answer="${task.correct[i]+1}" style="width:50px">
            </div>
          `).join('')}
        </div>
        <div class="match-col">
          <h5>Advice (توصیه)</h5>
          ${task.advices.map((a, i) => `
            <div class="match-pair-row">
              <span class="match-num">${i+1}.</span>
              <span class="match-text">${a}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── FILL-IN-BLANKS (G8 L4 ex 3) ──
  else if (task.type === 'fill-in-blanks') {
    body = `
      <div class="fillblank-list">
        ${task.items.map((item, i) => {
          const filled = item.sentence.replace(/_____/, `<input type="text" class="wb-input wb-input-sm" placeholder="?" data-answer="${item.answer}" style="display:inline-block">`);
          return `<div class="fillblank-item"><span class="fb-num">${i+1}.</span> ${filled}</div>`;
        }).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── DOCTOR-DIALOG-BUILDER (G8 L4 ex 6) ──
  else if (task.type === 'doctor-dialog-builder') {
    body = `
      <div class="dialog-builder">
        ${task.starter.map((line, i) => `
          <div class="dialog-line">
            <strong style="color:var(--primary);font-family:var(--font-en);unicode-bidi:plaintext">${line.speaker}:</strong>
            ${line.line.includes('___') 
              ? `<input type="text" class="wb-input wb-input-grow" placeholder="جواب رو اینجا بنویس">` 
              : `<span style="font-family:var(--font-en);unicode-bidi:plaintext">${line.line}</span>`}
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // ── CITY-INFO-TABLE (G8 L5 ex 2) ──
  else if (task.type === 'city-info-table') {
    body = `
      <table class="wb-table">
        <thead><tr><th>City</th><th>Location</th><th>Famous For</th></tr></thead>
        <tbody>
          ${task.cities.map(c => `
            <tr>
              <td><strong>${c.name}</strong></td>
              <td><input type="text" class="wb-input" data-answer="${c.location}" placeholder="north/south/..."></td>
              <td><input type="text" class="wb-input" data-answer="${c.famous}" placeholder="..."></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── MY-CITY-PARAGRAPH / MY-VILLAGE-PARAGRAPH / MY-HOBBY-PARAGRAPH (G8 L5/L6/L7) ──
  else if (task.type === 'my-city-paragraph' || task.type === 'my-village-paragraph' || task.type === 'my-hobby-paragraph') {
    body = `
      <div class="wb-prompt" style="background:var(--bg-soft);padding:1rem;border-radius:8px;margin-bottom:.85rem;font-family:var(--font-en);unicode-bidi:plaintext;line-height:1.8">
        💡 <strong>الگو:</strong><br>${task.prompt}
      </div>
      <textarea class="wb-input" rows="${task.rows || 5}" placeholder="پاراگراف خودت رو اینجا بنویس..." style="font-family:var(--font-en);unicode-bidi:plaintext;text-align:start"></textarea>
    `;
  }
  
  // ── SEASON-WEATHER-MATCH (G8 L6 ex 2) ──
  else if (task.type === 'season-weather-match') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">شماره آب و هوای مناسب رو برای هر فصل بنویس:</p>
      <div class="match-pairs-grid">
        <div class="match-col">
          <h5>Season (فصل)</h5>
          ${task.seasons.map((s, i) => `
            <div class="match-pair-row">
              <span class="match-letter">${String.fromCharCode(97+i)}.</span>
              <span class="match-text">${s}</span>
              <input type="number" class="wb-input wb-input-sm" min="1" max="${task.weathers.length}" placeholder="?" data-answer="${task.correct[i]+1}" style="width:50px">
            </div>
          `).join('')}
        </div>
        <div class="match-col">
          <h5>Weather (آب و هوا)</h5>
          ${task.weathers.map((w, i) => `
            <div class="match-pair-row">
              <span class="match-num">${i+1}.</span>
              <span class="match-text">${w}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── HOBBY-SURVEY (G8 L7 ex 2) ──
  else if (task.type === 'hobby-survey') {
    body = `
      <div class="ability-grid">
        ${task.hobbies.map(h => `
          <label class="ability-chip"><input type="checkbox"><span>${h}</span></label>
        `).join('')}
      </div>
    `;
  }
  
  // ── CLASSMATES-ABILITIES (G8 L3 ex 2) ──
  else if (task.type === 'classmates-abilities') {
    body = `
      <div class="classmates-abilities-list">
        ${task.questions.map((q, i) => `
          <div class="classmate-row">
            <div class="classmate-q">
              <span class="classmate-bullet">●</span>
              <span>${q}</span>
            </div>
            <input type="text" class="wb-input" placeholder="نام همکلاسی...">
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // ── JOB-ABILITIES-GRID (G8 L3 ex 3) ──
  else if (task.type === 'job-abilities-grid') {
    body = `
      <p style="font-size:.82rem;color:var(--text-mid);margin-bottom:.85rem">برای هر فعالیت، شغلی که بهتر اون رو انجام می‌ده علامت بزن (می‌تونی بیش از یکی هم انتخاب کنی):</p>
      <table class="wb-table">
        <thead><tr><th>Activity</th>${task.jobs.map(j => `<th style="text-align:center">${j}</th>`).join('')}</tr></thead>
        <tbody>
          ${task.abilities.map(a => `
            <tr>
              <td><strong>${a}</strong></td>
              ${task.jobs.map(() => `<td style="text-align:center"><input type="checkbox"></td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  
  // ── SELF-ASSESSMENT (G8 L3 ex 4) ──
  else if (task.type === 'self-assessment') {
    body = `
      <p style="font-size:.82rem;color:var(--text-mid);margin-bottom:.85rem">برای هر توانایی، یه عدد از ۰ تا ۴ بزن:</p>
      <table class="wb-table">
        <thead><tr><th style="width:80px">No.</th><th>Abilities</th>${task.levels.map(l => `<th style="text-align:center;font-size:.7rem">${l}</th>`).join('')}</tr></thead>
        <tbody>
          ${task.abilities.map((a, i) => `
            <tr>
              <td><input type="number" class="wb-input wb-input-sm" min="0" max="4" placeholder="?"></td>
              <td>${a}</td>
              ${task.levels.map(() => `<td style="text-align:center"><input type="radio" name="self-${num}-${i}"></td>`).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="wb-hint">💡 <strong>محاسبه:</strong> امتیاز هر سطر رو در جدول جمع کن — حداکثر امتیاز برای ۱۰ توانایی: ۴۰</div>
    `;
  }
  
  // ── IMAGE-ABILITY-GUESS (G8 L3 ex 5) ──
  else if (task.type === 'image-ability-guess') {
    body = `
      <div class="image-country-grid">
        ${task.items.map((item, i) => `
          <div class="image-country-card">
            <div class="image-country-emoji">${item.emoji}</div>
            <div class="image-country-hint" style="margin-bottom:.5rem">${item.hint}</div>
            <div style="display:flex;gap:.4rem;align-items:center;unicode-bidi:plaintext">
              <strong style="font-family:var(--font-en);unicode-bidi:plaintext;color:var(--primary);font-size:.85rem">${i+1}. ${item.pronoun} is good at</strong>
              <input type="text" class="wb-input wb-input-sm" placeholder="..." data-answer="${item.answer}" style="flex:1">
            </div>
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── WORD-SUGGESTIONS (G8 L4 ex 1) ──
  else if (task.type === 'word-suggestions') {
    body = `
      <p style="font-size:.82rem;color:var(--text-mid);margin-bottom:.85rem">روی کلمه‌هایی که مربوط به بیماری‌اند کلیک کن:</p>
      <div class="search-suggestions-grid">
        ${task.searches.map(s => `
          <div class="search-suggestion-card">
            <div class="search-bar">🔍 <strong style="font-family:var(--font-en);unicode-bidi:plaintext;margin-right:.5rem">${s.query}</strong></div>
            <div class="search-options">
              ${s.options.map(opt => `
                <span class="city-chip" data-target="${s.correct.includes(opt)}">${opt}</span>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── HEALTH-ADVICE-GRID (G8 L4 ex 2) ──
  else if (task.type === 'health-advice-grid') {
    body = `
      <p style="font-size:.82rem;color:var(--text-mid);margin-bottom:.85rem">برای هر فعالیت/غذا، بیماری‌هایی که می‌تونه کمک کنه علامت بزن:</p>
      <table class="wb-table">
        <thead><tr><th>Activities / Foods</th>${task.diseases.map(d => `<th style="text-align:center">${d}</th>`).join('')}</tr></thead>
        <tbody>
          ${task.items.map(item => {
            const examples = task.examples.filter(e => e.item === item).map(e => e.disease);
            return `
              <tr>
                <td><strong>${item}</strong></td>
                ${task.diseases.map(d => {
                  const isExample = examples.includes(d);
                  return `<td style="text-align:center">${isExample 
                    ? '<span style="color:var(--success);font-weight:700">✓</span>' 
                    : '<input type="checkbox">'}</td>`;
                }).join('')}
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }
  
  // ── UNDERLINED-TRANSLATE (G8 L4 ex 3) ──
  else if (task.type === 'underlined-translate') {
    let textHTML = task.text;
    task.underlined.forEach(u => {
      const re = new RegExp(`\\b${u.word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'g');
      textHTML = textHTML.replace(re, `<u class="underlined-word">${u.word}<sup>${u.num}</sup></u>`);
    });
    body = `
      <div class="reading-passage" style="line-height:1.9">${textHTML}</div>
      <table class="wb-table" style="margin-top:1rem">
        <thead><tr><th style="width:50px">No.</th><th>English (underlined)</th><th>فارسی</th></tr></thead>
        <tbody>
          ${task.underlined.map(u => `
            <tr>
              <td style="text-align:center;font-weight:700;color:var(--primary)">${u.num}</td>
              <td><strong style="font-family:var(--font-en);unicode-bidi:plaintext">${u.word}</strong></td>
              <td><input type="text" class="wb-input" placeholder="..." data-answer="${u.answer}" style="font-family:var(--font-fa);direction:rtl;text-align:right"></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── TRANSLATE-EN-FA-LIST (G8 L4 ex 4) ──
  else if (task.type === 'translate-en-fa-list') {
    body = `
      <table class="wb-table">
        <thead><tr><th>English</th><th>فارسی</th></tr></thead>
        <tbody>
          ${task.items.map(item => `
            <tr>
              <td><strong style="font-family:var(--font-en);unicode-bidi:plaintext">${item.en}</strong></td>
              <td><input type="text" class="wb-input" placeholder="ترجمه فارسی..." data-answer="${item.answer}" style="font-family:var(--font-fa);direction:rtl;text-align:right"></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── CITY-VILLAGE-SORT (G8 L6 ex 1, L7 ex 4) ──
  else if (task.type === 'city-village-sort') {
    body = `
      <div class="reading-passage" style="line-height:1.8;margin-bottom:1rem;font-size:.88rem">${task.text.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').concat('</p>')}</div>
      <p style="font-size:.82rem;color:var(--text-mid);margin-bottom:.6rem">برای هر کلمه/عبارت، تشخیص بده مربوط به شهر (C)، روستا (V) یا هردو (CV / VC) است:</p>
      <table class="wb-table">
        <thead><tr><th>Word/Phrase</th><th style="width:90px;text-align:center">C / V / CV</th></tr></thead>
        <tbody>
          ${task.items.map(item => `
            <tr>
              <td>${item.word}</td>
              <td style="text-align:center">
                <input type="text" class="wb-input wb-input-sm" placeholder="?" data-answer="${item.answer}" style="width:60px;text-align:center;text-transform:uppercase">
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── DIRECTIONS-VILLAGES (G8 L6 ex 2) ──
  else if (task.type === 'directions-villages') {
    body = `
      <p style="font-size:.82rem;color:var(--text-mid);margin-bottom:.85rem">برای هر جهت جغرافیایی ایران، یک جاذبه گردشگری بنویسید:</p>
      <div class="directions-list">
        ${task.directions.map(dir => `
          <div class="direction-row">
            <div class="direction-label">${dir}:</div>
            <input type="text" class="wb-input" placeholder="نام جاذبه گردشگری در این منطقه...">
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // ── TABRIZ-KANDOVAN (G8 L6 ex 3) ──
  else if (task.type === 'tabriz-kandovan') {
    body = `
      <p style="font-size:.82rem;color:var(--text-mid);margin-bottom:.85rem">برای هر عبارت، تشخیص بده مربوط به تبریز (T) یا کندوان (K) است:</p>
      <div class="tk-grid">
        ${task.items.map(item => `
          <div class="tk-row">
            <span class="tk-phrase">${item.phrase}</span>
            <input type="text" class="wb-input wb-input-sm" placeholder="T/K" data-answer="${item.answer}" style="width:50px;text-align:center;text-transform:uppercase">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── SEASON-ACTIVITIES (G8 L6 ex 4) ──
  else if (task.type === 'season-activities') {
    body = `
      <p style="font-size:.82rem;color:var(--text-mid);margin-bottom:.85rem">شماره فصل مناسب رو در کادر هر فعالیت بنویس: ${task.seasons.join(' · ')}</p>
      <div class="image-country-grid">
        ${task.activities.map(act => `
          <div class="image-country-card">
            <div class="image-country-emoji">${act.emoji}</div>
            <div class="image-country-hint">${act.hint}</div>
            <input type="number" class="wb-input wb-input-center" min="1" max="4" placeholder="?" data-answer="${act.answer}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── POSTER-FORM / APPLICATION-FORM (G8 L6 ex 8, L7 ex 5) ──
  else if (task.type === 'poster-form' || task.type === 'application-form') {
    let keysHTML = '';
    if (task.keys && task.keys.length) {
      keysHTML = `
        <div class="form-keys">
          <h5>کلیدواژه‌ها:</h5>
          ${task.keys.map(k => `<div class="form-key"><span class="form-key-fa">${k.fa}</span> = <strong>${k.en}</strong></div>`).join('')}
        </div>
      `;
    }
    body = `
      ${keysHTML}
      <div class="form-container">
        <h4 class="form-title">${task.formTitle || 'Form'}</h4>
        <div class="form-fields">
          ${task.fields.map(f => `
            <div class="form-field">
              <label>${f.label}:</label>
              <input type="text" class="wb-input">
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  // ── PEOPLE-INFO (G8 L5 ex 5,6 — L7 ex 6) ──
  else if (task.type === 'people-info') {
    body = `
      <table class="wb-table">
        <thead><tr>${task.columns.map(c => `<th>${c}</th>`).join('')}</tr></thead>
        <tbody>
          ${[...Array(task.rows)].map((_, i) => {
            if (i === 0 && task.firstRow) {
              return `<tr><td><strong>${task.firstRow}</strong></td>${task.columns.slice(1).map(() => `<td><input type="text" class="wb-input"></td>`).join('')}</tr>`;
            }
            return `<tr>${task.columns.map(() => `<td><input type="text" class="wb-input"></td>`).join('')}</tr>`;
          }).join('')}
        </tbody>
      </table>
    `;
  }
  
  // ═══════════════════════════════════════════════
  //  GRADE 9 LESSONS WORKBOOK TASKS
  // ═══════════════════════════════════════════════
  
  // ── MULTIPLE-CHOICE-INLINE (G9 L1 ex 1) ──
  else if (task.type === 'multiple-choice-inline') {
    body = `
      <div class="mc-inline-list">
        ${task.items.map((item, i) => {
          const parts = item.sentence.split('_____');
          const correctOpt = item.options[item.correct];
          return `
            <div class="mc-inline-row" data-correct="${item.correct}">
              <span class="mc-inline-num">${i + 1}.</span>
              <span class="mc-inline-text">${parts[0]}</span>
              <span class="mc-inline-options">
                ${item.options.map((opt, oi) => `
                  <button class="mc-inline-btn" data-option="${oi}">${opt}</button>
                `).join('<span class="mc-inline-sep">/</span>')}
              </span>
              <span class="mc-inline-text">${parts[1] || ''}</span>
            </div>
          `;
        }).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── FILL-BLANKS-PARAGRAPH (G9 L1 ex 2) ──
  else if (task.type === 'fill-blanks-paragraph') {
    let textHTML = task.text;
    task.blanks.forEach(b => {
      const placeholder = `[${b.num}]`;
      textHTML = textHTML.replace(placeholder, `<input type="text" class="wb-input wb-input-sm" placeholder="?" data-answer="${b.answer.replace(/"/g, '&quot;')}" data-num="${b.num}" style="display:inline-block;width:80px">`);
    });
    body = `
      <div class="reading-passage" style="line-height:2;font-size:.92rem">${textHTML}</div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── UNSCRAMBLE-SENTENCES (G9 L1 ex 3) ──
  else if (task.type === 'unscramble-sentences') {
    body = `
      <div class="unscramble-list">
        ${task.items.map((item, i) => {
          const words = item.scrambled.split(' / ');
          return `
            <div class="unscramble-row">
              <div class="unscramble-words">
                <span class="unscramble-num">${i + 1}.</span>
                ${words.map(w => `<span class="word-chip">${w}</span>`).join('')}
              </div>
              <input type="text" class="wb-input" placeholder="جمله مرتب رو اینجا بنویس..." data-answer="${item.answer.replace(/"/g, '&quot;')}">
            </div>
          `;
        }).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── MATCH-SENTENCE-IMAGE (G9 L1 ex 4) ──
  else if (task.type === 'match-sentence-image') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">حرف هر تصویر رو در کادر کنار جمله مربوطه بنویس:</p>
      <div class="msi-grid">
        <div class="msi-sentences">
          <h5>Sentences</h5>
          ${task.sentences.map((s, i) => {
            const cleanText = s.text.replace(/<[^>]+>/g, '').replace(/"/g, '&quot;');
            return `
            <div class="msi-sentence-row">
              <span class="msi-num">${i + 1}.</span>
              <button class="tts-btn tts-sm" data-tts="${cleanText}" title="تلفظ"></button>
              <span class="msi-text">${s.text}</span>
              <input type="text" class="wb-input wb-input-sm" placeholder="?" data-answer="${s.matchTo}" maxlength="1" style="width:50px;text-align:center;text-transform:uppercase">
            </div>
          `;}).join('')}
        </div>
        <div class="msi-images">
          <h5>Pictures</h5>
          ${task.images.map(img => `
            <div class="msi-image-card">
              <span class="msi-image-letter">${img.id}</span>
              ${img.image 
                ? `<div class="img-box img-square" data-src="../images/grade9/lessons/lesson${LESSON.num}/${img.image}" data-alt="${img.hint || ''}"></div>`
                : `<span class="msi-image-emoji">${img.emoji || '🖼️'}</span>`}
              <span class="msi-image-hint">${img.hint || ''}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── IMAGE-SENTENCE-WRITE (G9 L1 ex 5) ──
  else if (task.type === 'image-sentence-write') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">برای هر تصویر یک جمله بنویس:</p>
      <div class="image-country-grid">
        ${task.items.map((item, i) => `
          <div class="image-country-card">
            ${item.image 
              ? `<div class="img-box img-square" data-src="../images/grade9/lessons/lesson${LESSON.num}/${item.image}" data-alt="${item.hint || ''}"></div>`
              : `<div class="image-country-emoji">${item.emoji}</div>`}
            ${item.hint ? `<div class="image-country-hint" style="margin-bottom:.5rem">${item.hint}</div>` : ''}
            ${item.example 
              ? `<div class="example-answer" style="font-family:var(--font-en);unicode-bidi:plaintext">${i + 1}. ${item.answer} ✓</div>`
              : `
                <div style="display:flex;gap:.4rem;align-items:center;unicode-bidi:plaintext">
                  <strong style="color:var(--primary);font-size:.85rem">${i + 1}.</strong>
                  <input type="text" class="wb-input wb-input-sm" placeholder="..." style="flex:1" data-expected="${(item.expected || '').replace(/"/g, '&quot;')}">
                </div>
              `}
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پیشنهاد پاسخ‌ها</button>
    `;
  }
  
  // ── WORD-SEARCH (G9 L1 ex 6A+B) — interactive cell selection ──
  else if (task.type === 'word-search') {
    // Support both old (positives/negatives) and new (sortLabels/sortGroup1/sortGroup2) formats
    const sortLabels = task.sortLabels || ['Positive ✓', 'Negative ✗'];
    const group1 = task.sortGroup1 || task.positives || [];
    const group2 = task.sortGroup2 || task.negatives || [];
    const group1Style = task.sortGroup1 ? 'color:#01579B' : 'color:var(--success)';
    const group2Style = task.sortGroup2 ? 'color:#2E7D32' : 'color:#c62828';
    const maxRows = Math.max(group1.length, group2.length);
    
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">A) شش کلمه در جدول پیدا کن. روی حروف کنار هم کلیک کن تا یک کلمه بسازی، سپس دکمه «بررسی» رو بزن.</p>
      
      <div class="ws-board" data-target-words="${task.targetWords.join(',')}">
        ${task.grid.map((row, rIdx) => `
          <div class="ws-row">
            ${row.map((cell, cIdx) => `<button class="ws-cell" data-r="${rIdx}" data-c="${cIdx}" type="button">${cell}</button>`).join('')}
          </div>
        `).join('')}
      </div>
      
      <div class="ws-controls">
        <div class="ws-current">انتخاب فعلی: <span class="ws-current-text">—</span></div>
        <button class="ws-check-btn" type="button">✓ بررسی کلمه</button>
        <button class="ws-reset-btn" type="button">🔄 شروع دوباره</button>
      </div>
      
      <div class="ws-target-words">
        <strong>کلمات مورد نظر (${task.targetWords.length}):</strong>
        ${task.targetWords.map(w => `<span class="ws-target-chip" data-word="${w}">${w}</span>`).join('')}
      </div>
      
      ${task.matchImages ? `
        <p style="font-size:.85rem;color:var(--text-mid);margin:1rem 0 .65rem">ب) کلمات را بنویس و به تصاویر وصل کن:</p>
        <div class="img-grid cols-3">
          ${task.matchImages.map(mi => `
            <div class="img-card">
              <div class="img-card-image"><div class="img-box img-square" data-src="../images/grade9/lessons/lesson${LESSON.num}/${mi.image}" data-alt="${mi.word}"></div></div>
              <div class="img-card-body" style="text-align:center">
                <input type="text" class="wb-input wb-input-sm" placeholder="..." data-answer="${mi.word}" style="width:90%;text-align:center">
              </div>
            </div>
          `).join('')}
        </div>
      ` : ''}
      
      ${task.fillSentences ? `
        <p style="font-size:.85rem;color:var(--text-mid);margin:1rem 0 .65rem">${task.matchImages ? 'ت' : ''}) کلمات یافت‌شده را در جای خالی جمله‌های زیر بنویسید:</p>
        <div class="fwi-fill-list">
          ${task.fillSentences.map((fs, i) => {
            const parts = fs.sentence.split('_____');
            return `
              <div class="fwi-fill-row">
                <span class="fbi-num">${i + 1}.</span>
                <span style="font-family:var(--font-en);unicode-bidi:plaintext">${parts[0]}</span>
                <input type="text" class="wb-input wb-input-sm" placeholder="?" data-answer="${fs.answer.replace(/"/g, '&quot;')}" style="min-width:90px;display:inline-block">
                <span style="font-family:var(--font-en);unicode-bidi:plaintext">${parts[1] || ''}</span>
              </div>
            `;
          }).join('')}
        </div>
      ` : ''}
      
      <p style="font-size:.85rem;color:var(--text-mid);margin:1rem 0 .65rem">${task.matchImages ? 'پ' : task.fillSentences ? 'ب' : 'B'}) کلمات یافت‌شده را در ستون مناسب قرار دهید:</p>
      ${task.sortLabels4 ? `
        <table class="wb-table">
          <thead><tr>${task.sortLabels4.map(l => `<th style="text-align:center;font-family:var(--font-en);unicode-bidi:plaintext">${l}</th>`).join('')}</tr></thead>
          <tbody>
            <tr>${task.sortLabels4.map(() => `<td><input type="text" class="wb-input" placeholder="..."></td>`).join('')}</tr>
            <tr>${task.sortLabels4.map(() => `<td><input type="text" class="wb-input" placeholder="..."></td>`).join('')}</tr>
          </tbody>
        </table>
      ` : task.sortLabels3 ? `
        <table class="wb-table">
          <thead><tr><th style="text-align:center;color:#01579B">${task.sortLabels3[0]}</th><th style="text-align:center;color:#2E7D32">${task.sortLabels3[1]}</th><th style="text-align:center;color:#E65100">${task.sortLabels3[2]}</th></tr></thead>
          <tbody>
            ${[...Array(Math.max(task.sortGroupN.length, task.sortGroupV.length, task.sortGroupA.length))].map((_, i) => `
              <tr>
                <td><input type="text" class="wb-input" data-answer="${task.sortGroupN[i] || ''}" placeholder="..."></td>
                <td><input type="text" class="wb-input" data-answer="${task.sortGroupV[i] || ''}" placeholder="..."></td>
                <td><input type="text" class="wb-input" data-answer="${task.sortGroupA[i] || ''}" placeholder="..."></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      ` : task.verbNounMatch ? `
        <table class="wb-table">
          <thead><tr><th style="width:120px">Verb (فعل)</th><th>Noun (اسم یافت‌شده)</th></tr></thead>
          <tbody>
            ${task.verbNounMatch.map(vn => `
              <tr>
                <td style="font-family:var(--font-en);unicode-bidi:plaintext;font-weight:600;color:var(--primary)">${vn.verb}</td>
                <td><input type="text" class="wb-input" data-answer="${vn.noun}" placeholder="..."></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      ` : `
        <table class="wb-table">
          <thead><tr><th style="text-align:center;${group1Style}">${sortLabels[0]}</th><th style="text-align:center;${group2Style}">${sortLabels[1]}</th></tr></thead>
          <tbody>
            ${[...Array(maxRows)].map((_, i) => `
              <tr>
                <td><input type="text" class="wb-input" data-answer="${group1[i] || ''}" placeholder="..."></td>
                <td><input type="text" class="wb-input" data-answer="${group2[i] || ''}" placeholder="..."></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `}
      
      ${task.sentenceCount ? `
        <p style="font-size:.85rem;color:var(--text-mid);margin:1rem 0 .65rem">${task.fillSentences ? 'پ' : 'C'}) با کلماتی که یافته‌اید، جمله بسازید:</p>
        <ol class="sentence-list-ol">
          ${[...Array(task.sentenceCount)].map(() => `<li><input type="text" class="wb-input sl-input" placeholder="یک جمله بنویس..."></li>`).join('')}
        </ol>
      ` : ''}
      
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── CHART-COMPLETE (G9 L5 ex 3 - question/short/complete answer chart) ──
  else if (task.type === 'chart-complete') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">جدول را کامل کن (سؤال، پاسخ کوتاه، پاسخ کامل):</p>
      <div class="visual-table-wrap">
        <table class="chart-complete-table">
          <thead>
            <tr><th>Question</th><th>Short answer</th><th>Complete answer</th></tr>
          </thead>
          <tbody>
            ${task.rows.map((r, i) => {
              if (r.example) {
                return `
                  <tr class="chart-example-row">
                    <td><span class="chart-num">${i+1}.</span> Did you watch an old movie? <span class="sl-example-tag">نمونه</span></td>
                    <td>No, I <strong>didn't</strong></td>
                    <td>I <strong>watched</strong> a cartoon.</td>
                  </tr>
                `;
              }
              return `
                <tr>
                  <td>
                    <span class="chart-num">${i+1}.</span>
                    <input type="text" class="wb-input wb-input-sm" style="width:60px" placeholder="?"> ${r.question.replace('_____ ', '')}
                  </td>
                  <td>${r.shortAnswer.replace('_____', '<input type="text" class="wb-input wb-input-sm" style="width:80px" placeholder="...">')}</td>
                  <td>${r.completeAnswer.replace('_____', '<input type="text" class="wb-input wb-input-sm" style="width:90px" placeholder="...">')}</td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;
  }
  
  // ── ORDER-DIALOGUE (G9 L5 ex 6 - put dialogue in order) ──
  else if (task.type === 'order-dialogue') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">شمارهٔ ترتیب درست هر جمله را در کادر بنویس (۱ تا ${task.lines.length}). دو مورد به‌عنوان نمونه شماره‌گذاری شده‌اند:</p>
      <div class="order-dialogue-list">
        ${task.lines.map(line => `
          <div class="order-dialogue-row ${line.given ? 'is-given' : ''}">
            ${line.given
              ? `<span class="order-dialogue-num given">${line.order}</span>`
              : `<input type="text" class="wb-input wb-input-sm order-num-input" maxlength="1" placeholder="?" data-answer="${line.order}">`}
            <span style="font-family:var(--font-en);unicode-bidi:plaintext;flex:1">${line.text}</span>
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش ترتیب درست</button>
    `;
  }
  
  // ── REPORT-COMPLETE (G9 L6 ex 5 - read chart + fill paragraph) ──
  else if (task.type === 'report-complete') {
    let textHTML = task.text;
    task.blanks.forEach(b => {
      textHTML = textHTML.replace(`[${b.num}]`, `<input type="text" class="wb-input wb-input-sm" style="width:70px" data-answer="${b.answer.replace(/"/g, '&quot;')}" placeholder="${b.num}">`);
    });
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">جدول گزارش حادثه را بخوان و سپس متن را کامل کن:</p>
      <div class="visual-table-wrap">
        <table class="report-chart-table">
          <thead><tr>${task.chartHeaders.map(h => `<th>${h}</th>`).join('')}</tr></thead>
          <tbody>
            ${task.chartRows.map(row => `<tr>${row.map((cell, ci) => ci === 0 ? `<td class="report-row-label">${cell}</td>` : `<td>${cell}</td>`).join('')}</tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="report-paragraph" style="font-family:var(--font-en);unicode-bidi:plaintext;text-align:start;line-height:2.2;background:#fff;border:1px solid var(--border-light);border-radius:var(--radius);padding:1rem 1.25rem;margin-top:.85rem">${textHTML}</div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── SHORT-ANSWER-CONTEXT (G9 L6 ex 6 - context box + questions) ──
  else if (task.type === 'short-answer-context') {
    body = `
      <div class="context-box">
        <div class="context-box-label">📋 اطلاعات:</div>
        ${task.context.map(c => `<div class="context-line">${c}</div>`).join('')}
      </div>
      <div class="rc-questions" style="margin-top:1rem">
        ${task.questions.map((q, i) => `
          <div class="rc-question-row">
            <div class="rc-q-text"><span style="font-family:var(--font-en);unicode-bidi:plaintext">${i + 1}. ${q.q}</span></div>
            <input type="text" class="wb-input" placeholder="پاسخ..." data-answer="${(q.sampleAnswer || '').replace(/"/g, '&quot;')}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌های نمونه</button>
    `;
  }
  
  // ── MAKE-QUESTIONS (G9 L4 ex 2 - add do/does) ──
  else if (task.type === 'make-questions') {
    body = `
      ${task.example ? `<div class="list-fill-example"><span style="color:var(--text-mid);font-family:var(--font-fa);margin-left:.5rem">مثال:</span><span style="text-decoration:line-through;color:#c62828">${task.example.wrong}</span> → <strong>${task.example.right}</strong></div>` : ''}
      <div class="make-q-list">
        ${task.items.map((item, i) => `
          <div class="make-q-row">
            <div class="make-q-prompt"><span class="fbi-num">${i + 1}.</span> <span style="font-family:var(--font-en);unicode-bidi:plaintext;color:var(--text-mid)">${item.prompt}</span></div>
            <input type="text" class="wb-input" placeholder="پرسش درست را بنویس..." data-answer="${item.answer.replace(/"/g, '&quot;')}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── MATCH-PAIRS (G9 L4 ex 3 - match Q with A) ──
  else if (task.type === 'match-pairs') {
    // Shuffle answers display but keep correct letter
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">حرف پاسخ درست را در کادر کنار هر پرسش بنویس:</p>
      <div class="match-pairs-grid">
        <div class="match-pairs-questions">
          <h5>Questions</h5>
          ${task.pairs.map((p, i) => `
            <div class="match-pair-q-row">
              <span class="msi-num">${i + 1}.</span>
              <span style="flex:1;font-family:var(--font-en);unicode-bidi:plaintext">${p.q}</span>
              <input type="text" class="wb-input wb-input-sm" placeholder="?" maxlength="1" data-answer="${p.letter}" style="width:48px;text-align:center;text-transform:lowercase">
            </div>
          `).join('')}
        </div>
        <div class="match-pairs-answers">
          <h5>Answers</h5>
          ${task.pairs.map(p => `
            <div class="match-pair-a-row">
              <span class="match-pair-letter">${p.letter}</span>
              <span style="font-family:var(--font-en);unicode-bidi:plaintext">${p.a}</span>
            </div>
          `).join('')}
        </div>
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── REWRITE-ADVERBS (G9 L4 ex 4 - rewrite with adverb) ──
  else if (task.type === 'rewrite-adverbs') {
    body = `
      ${task.example ? `<div class="list-fill-example"><span style="color:var(--text-mid);font-family:var(--font-fa);margin-left:.5rem">مثال:</span>${task.example.original} → <strong>${task.example.answer}</strong></div>` : ''}
      <div class="make-q-list">
        ${task.items.map((item, i) => `
          <div class="make-q-row">
            <div class="make-q-prompt"><span class="fbi-num">${i + 1}.</span> <span style="font-family:var(--font-en);unicode-bidi:plaintext;color:var(--text-mid)">${item.original}</span></div>
            <input type="text" class="wb-input" placeholder="بازنویسی کن..." data-answer="${item.answer.replace(/"/g, '&quot;')}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── MATCH-3WAY (G9 L4 ex 6 - match picture+question+answer) ──
  else if (task.type === 'match-3way') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">برای هر پرسش، حرف تصویر و حرف پاسخ درست را بنویس:</p>
      ${task.images ? `
        <div class="img-grid cols-3" style="margin-bottom:1rem">
          ${task.images.map(img => `
            <div class="img-card">
              <div class="img-card-image"><div class="img-box img-square" data-src="../images/grade9/lessons/lesson${LESSON.num}/${img.image}" data-alt="${img.hint || ''}"></div></div>
              <div class="img-card-body" style="text-align:center"><strong>${img.id}</strong></div>
            </div>
          `).join('')}
        </div>
      ` : ''}
      <table class="wb-table">
        <thead><tr><th>Question</th><th style="width:70px;text-align:center">تصویر</th><th style="width:70px;text-align:center">پاسخ</th></tr></thead>
        <tbody>
          ${task.questions.map(q => `
            <tr>
              <td><span style="font-family:var(--font-en);unicode-bidi:plaintext">${q.num}. ${q.q}</span></td>
              <td style="text-align:center"><input type="text" class="wb-input wb-input-sm" maxlength="1" placeholder="?" style="width:44px;text-align:center;text-transform:uppercase"></td>
              <td style="text-align:center"><input type="text" class="wb-input wb-input-sm" maxlength="1" placeholder="?" data-answer="${q.answerLetter}" style="width:44px;text-align:center;text-transform:lowercase"></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
      <div class="match-3way-answers">
        <strong>Answers:</strong>
        ${task.answers.map(a => `<div class="match-3way-a"><span class="match-pair-letter">${a.letter}</span> <span style="font-family:var(--font-en);unicode-bidi:plaintext">${a.text}</span></div>`).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── FILL-BLANKS-IMAGES (G9 L3 ex 5 - sentences with images) ──
  else if (task.type === 'fill-blanks-images') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">با توجه به تصویر، جای خالی هر جمله را با شکل صحیح فعل پر کن:</p>
      <div class="fbi-list">
        ${task.items.map((item, i) => `
          <div class="fbi-row">
            <div class="fbi-image">
              ${item.image
                ? `<div class="img-box img-square" data-src="../images/grade9/lessons/lesson${LESSON.num}/${item.image}" data-alt="${item.hint || ''}"></div>`
                : `<span class="fbi-emoji">${item.emoji || '🖼️'}</span>`}
              <span class="fbi-hint">${item.hint || ''}</span>
            </div>
            <div class="fbi-sentence">
              <span class="fbi-num">${i + 1}.</span>
              <span style="font-family:var(--font-en);unicode-bidi:plaintext">${item.before}</span>
              <input type="text" class="wb-input wb-input-sm" placeholder="?" data-answer="${item.answer.replace(/"/g, '&quot;')}" style="min-width:130px;display:inline-block">
              <span style="font-family:var(--font-en);unicode-bidi:plaintext">${item.after}</span>
              ${task.withAnswer ? `<div class="fbi-answer-line"><input type="text" class="wb-input" placeholder="${item.answerPlaceholder || 'پاسخ...'}" style="width:100%;margin-top:.4rem"></div>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── EDIT-TEXT (G9 L2 ex 7 - find and fix mistakes) ──
  else if (task.type === 'edit-text') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">متن زیر شامل ${task.mistakes.length} غلط است. آن‌ها را پیدا کن و در پایین، صورت درست را بنویس:</p>
      <div class="edit-text-passage">${task.original}</div>
      
      <div class="edit-text-corrections">
        <div class="edit-text-label">اصلاحات شما:</div>
        ${task.mistakes.map((m, i) => `
          <div class="edit-text-row">
            <span class="edit-num">${i + 1}.</span>
            <input type="text" class="wb-input" placeholder="عبارت اشتباه..." data-wrong="${m.wrong.replace(/"/g, '&quot;')}">
            <span class="edit-arrow">→</span>
            <input type="text" class="wb-input" placeholder="صورت درست..." data-right="${m.right.replace(/"/g, '&quot;')}">
          </div>
        `).join('')}
      </div>
      
      <details class="edit-text-explain">
        <summary>📖 توضیحات و راهنمایی</summary>
        <ol class="edit-text-explain-list">
          ${task.mistakes.map(m => `
            <li>
              <code class="edit-wrong">${m.wrong}</code> → <code class="edit-right">${m.right}</code>
              <div class="edit-explain-fa">${m.explain}</div>
            </li>
          `).join('')}
        </ol>
      </details>
      
      <details class="edit-text-explain">
        <summary>✓ نمایش متن اصلاح‌شده</summary>
        <div class="edit-text-passage" style="background:var(--success-bg);border-color:var(--success)">${task.corrected}</div>
      </details>
    `;
  }
  
  // ── ORDER-AND-WRITE (G9 L2 ex 8 - reorder pictures + write sentences) ──
  else if (task.type === 'order-and-write') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">A) تصاویر زیر مربوط به سفر یک خانوادهٔ ایرانی است. آن‌ها را بر اساس ترتیب زمانی مرتب کنید. شمارهٔ ۱ تا ${task.actions.length} را در کادر هر تصویر بنویس:</p>
      <div class="order-action-grid">
        ${task.actions.map((a, i) => `
          <div class="order-action-card">
            ${a.image
              ? `<div class="img-box img-square" data-src="../images/grade9/lessons/lesson${LESSON.num}/${a.image}" data-alt="${a.label}"></div>`
              : `<div class="order-action-emoji">${a.emoji || '🖼️'}</div>`}
            <div class="order-action-label">${a.label}</div>
            <input type="text" class="wb-input wb-input-sm order-num-input" maxlength="2" placeholder="?" data-answer="${task.correctOrder[i] + 1}">
          </div>
        `).join('')}
      </div>
      
      <p style="font-size:.85rem;color:var(--text-mid);margin:1.5rem 0 .65rem">B) برای هر یک از تصاویر، جمله‌ای بسازید:</p>
      <ol class="sentence-list-ol">
        ${task.actions.map(a => `
          <li>
            <span style="font-family:var(--font-en);unicode-bidi:plaintext;color:var(--text-mid);margin-left:.5rem">(${a.label})</span>
            <input type="text" class="wb-input sl-input" placeholder="یک جمله بنویس...">
          </li>
        `).join('')}
      </ol>
    `;
  }
  
  // ── TIME-SENTENCES (G9 L2 ex 9 - time-based sentences) ──
  else if (task.type === 'time-sentences') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">با توجه به ساعت، جمله را در مورد خودت کامل کن:</p>
      <div class="time-sentences-list">
        ${task.items.map(item => {
          const parts = item.sentence.split('_____');
          return `
          <div class="time-sentence-row ${item.example ? 'is-example' : ''}">
            <div class="time-badge">${item.time}</div>
            <div class="time-sentence-body">
              ${item.example
                ? `<div class="time-example-text">${item.sentence} <span class="sl-example-tag">نمونه</span></div>`
                : `
                  <span style="font-family:var(--font-en);unicode-bidi:plaintext">${parts[0]}</span>
                  <input type="text" class="wb-input sl-input-inline" placeholder="${item.placeholder || '...'}" style="min-width:200px;max-width:380px">
                  <span style="font-family:var(--font-en);unicode-bidi:plaintext">${parts[1] || ''}</span>
                `}
            </div>
          </div>
        `;}).join('')}
      </div>
    `;
  }
  
  // ── READING-COMPREHENSION with yesNoQuestions (extended) ──
  else if (task.type === 'reading-comprehension') {
    body = `
      <div class="reading-passage rc-passage">
        ${task.text.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br>').replace(/^/, '<p>').concat('</p>')}
      </div>
      ${task.targets ? `
        <p style="font-size:.82rem;color:var(--text-mid);margin:.85rem 0">
          💡 ساختارهای مورد نظر در متن: ${task.targets.map(t => `<span class="rc-target">${t}</span>`).join(' · ')}
        </p>
      ` : ''}
      
      ${task.yesNoQuestions && task.yesNoQuestions.length ? `
        <h5 style="font-family:var(--font-en);unicode-bidi:plaintext;font-size:1rem;margin:1.25rem 0 .65rem;color:var(--primary)">B) Yes or No?</h5>
        <table class="wb-table hobby-yn-table">
          <thead><tr><th>عبارت</th><th style="width:80px;text-align:center">Yes</th><th style="width:80px;text-align:center">No</th></tr></thead>
          <tbody>
            ${task.yesNoQuestions.map((yn, i) => `
              <tr>
                <td><span style="font-family:var(--font-en);unicode-bidi:plaintext">${i + 1}. ${yn.q}</span></td>
                <td style="text-align:center"><label class="yn-radio" data-correct="${yn.answer === 'yes' ? '1' : '0'}"><input type="radio" name="rc-yn-${i}-${Date.now()}" value="yes"><span>✓</span></label></td>
                <td style="text-align:center"><label class="yn-radio" data-correct="${yn.answer === 'no' ? '1' : '0'}"><input type="radio" name="rc-yn-${i}-${Date.now()}" value="no"><span>✗</span></label></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      ` : ''}
      
      <h5 style="font-family:var(--font-en);unicode-bidi:plaintext;font-size:1rem;margin:1.25rem 0 .65rem;color:var(--primary)">${task.yesNoQuestions ? 'C' : 'B'}) Answer the questions:</h5>
      <div class="rc-questions">
        ${task.questions.map((q, i) => `
          <div class="rc-question-row">
            <div class="rc-q-text"><span style="font-family:var(--font-en);unicode-bidi:plaintext">${i + 1}. ${q.q}</span></div>
            <input type="text" class="wb-input" placeholder="پاسخ خود را اینجا بنویس..." data-answer="${(q.sampleAnswer || '').replace(/"/g, '&quot;')}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌های نمونه</button>
      
      ${task.rewriteSlots ? `
        <div class="rc-rewrite">
          <h5 style="font-family:var(--font-fa);font-size:.95rem;margin:1.5rem 0 .65rem;color:var(--primary)">${task.rewriteLabel || 'C) Rewrite the text about yourself:'}</h5>
          <textarea class="wb-input rc-rewrite-area" rows="${task.rewriteSlots}" placeholder="I'm ..."></textarea>
        </div>
      ` : ''}
    `;
  }
  
  // ── FILL-WITH-IMAGE (G9 L1 ex 7) ──
  else if (task.type === 'fill-with-image') {
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">جای خالی هر جمله رو با کلمه مناسب از کلمات درس پر کن:</p>
      <div class="fwi-list">
        ${task.items.map((item, i) => {
          const parts = item.sentence.split('_____');
          return `
            <div class="fwi-row">
              <div class="fwi-image">
                ${item.image 
                  ? `<div class="img-box img-square" data-src="../images/grade9/lessons/lesson${LESSON.num}/${item.image}" data-alt="${item.hint || ''}"></div>`
                  : `<span class="fwi-emoji">${item.emoji}</span>`}
                <span class="fwi-hint">${item.hint || ''}</span>
              </div>
              <div class="fwi-sentence">
                <span class="fwi-num">${i + 1}.</span>
                <span style="font-family:var(--font-en);unicode-bidi:plaintext">${parts[0]}</span>
                <input type="text" class="wb-input wb-input-sm" placeholder="?" data-answer="${item.answer.replace(/"/g, '&quot;')}" style="width:120px;display:inline-block">
                <span style="font-family:var(--font-en);unicode-bidi:plaintext">${parts[1] || ''}</span>
              </div>
            </div>
          `;
        }).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌ها</button>
    `;
  }
  
  // ── SENTENCE-LIST (G9 L1 ex 8) ──
  else if (task.type === 'sentence-list') {
    const start = task.startNumber || 2;
    body = `
      <p style="font-size:.85rem;color:var(--text-mid);margin-bottom:.85rem">دربارهٔ خود و خانواده/دوستانت چند جمله بنویس. (مثال: <em>I am clever.</em>)</p>
      <ol class="sentence-list-ol" start="1">
        ${task.example ? `<li class="sl-example"><span class="sl-example-text">${task.example}</span><span class="sl-example-tag">نمونه</span></li>` : ''}
        ${[...Array(task.slots)].map(() => `
          <li><input type="text" class="wb-input sl-input" placeholder="یک جمله بنویس..."></li>
        `).join('')}
      </ol>
    `;
  }
  
  // ── YES-NO-TABLE (G9 L1 ex 9) ──
  else if (task.type === 'yes-no-table') {
    body = `
      <table class="wb-table hobby-yn-table">
        <thead>
          <tr>
            <th>عبارت</th>
            <th style="width:80px;text-align:center">Yes</th>
            <th style="width:80px;text-align:center">No</th>
          </tr>
        </thead>
        <tbody>
          ${task.items.map((item, i) => `
            <tr>
              <td><span style="font-family:var(--font-en);unicode-bidi:plaintext">${i + 1}. ${item}</span></td>
              <td style="text-align:center"><label class="yn-radio"><input type="radio" name="yn-${i}-${Date.now()}" value="yes"><span>✓</span></label></td>
              <td style="text-align:center"><label class="yn-radio"><input type="radio" name="yn-${i}-${Date.now()}" value="no"><span>✗</span></label></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }
  
  // ── READING-COMPREHENSION (G9 L1 ex 10) ──
  else if (task.type === 'reading-comprehension') {
    body = `
      <div class="reading-passage rc-passage">
        ${task.text.replace(/\n\n/g, '</p><p>').replace(/^/, '<p>').concat('</p>')}
      </div>
      <p style="font-size:.82rem;color:var(--text-mid);margin:.85rem 0">
        💡 افعال <strong>"to be"</strong> در متن: ${task.targets.map(t => `<span class="rc-target">${t}</span>`).join(' · ')}
      </p>
      
      <h5 style="font-family:var(--font-en);unicode-bidi:plaintext;font-size:1rem;margin:1.25rem 0 .65rem;color:var(--primary)">B) Answer the questions:</h5>
      <div class="rc-questions">
        ${task.questions.map((q, i) => `
          <div class="rc-question-row">
            <div class="rc-q-text"><span style="font-family:var(--font-en);unicode-bidi:plaintext">${i + 1}. ${q.q}</span></div>
            <input type="text" class="wb-input" placeholder="پاسخ خود را اینجا بنویس..." data-answer="${(q.sampleAnswer || '').replace(/"/g, '&quot;')}">
          </div>
        `).join('')}
      </div>
      <button class="wb-show-answers-btn">نمایش پاسخ‌های نمونه</button>
      
      <div class="rc-rewrite">
        <h5 style="font-family:var(--font-fa);font-size:.95rem;margin:1.5rem 0 .65rem;color:var(--primary)">${task.rewriteLabel || 'C) Rewrite the text about yourself:'}</h5>
        <textarea class="wb-input rc-rewrite-area" rows="${task.rewriteSlots || 6}" placeholder="I'm ..."></textarea>
      </div>
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
  // ── Word Search interactive (click adjacent cells, check word) ──
  document.querySelectorAll('.ws-board').forEach(board => {
    const targetWords = (board.dataset.targetWords || '').split(',').filter(Boolean);
    const foundWords = new Set();
    let selectedCells = []; // [{r,c,el}, ...]
    
    const cells = board.querySelectorAll('.ws-cell');
    const currentText = board.parentElement.querySelector('.ws-current-text');
    const checkBtn = board.parentElement.querySelector('.ws-check-btn');
    const resetBtn = board.parentElement.querySelector('.ws-reset-btn');
    
    const updateCurrent = () => {
      const word = selectedCells.map(c => c.el.textContent).join('');
      if (currentText) currentText.textContent = word || '—';
    };
    
    const isAdjacent = (a, b) => {
      const dr = Math.abs(a.r - b.r);
      const dc = Math.abs(a.c - b.c);
      return (dr <= 1 && dc <= 1) && !(dr === 0 && dc === 0);
    };
    
    cells.forEach(cell => {
      cell.addEventListener('click', () => {
        const r = parseInt(cell.dataset.r);
        const c = parseInt(cell.dataset.c);
        
        // Click on already-selected last cell: deselect last
        if (selectedCells.length && selectedCells[selectedCells.length - 1].el === cell) {
          cell.classList.remove('selecting');
          selectedCells.pop();
          updateCurrent();
          return;
        }
        
        // Click on already-selected (not last): ignore
        if (cell.classList.contains('selecting') || cell.classList.contains('found')) return;
        
        // First cell, or adjacent: add
        if (selectedCells.length === 0) {
          selectedCells.push({r, c, el: cell});
          cell.classList.add('selecting');
        } else {
          const last = selectedCells[selectedCells.length - 1];
          if (isAdjacent(last, {r, c})) {
            selectedCells.push({r, c, el: cell});
            cell.classList.add('selecting');
          } else {
            // Not adjacent: flash error
            cell.classList.add('ws-wrong-flash');
            setTimeout(() => cell.classList.remove('ws-wrong-flash'), 350);
            return;
          }
        }
        updateCurrent();
      });
    });
    
    if (checkBtn) checkBtn.addEventListener('click', () => {
      const word = selectedCells.map(c => c.el.textContent).join('').toUpperCase();
      if (!word) return;
      
      if (targetWords.includes(word) && !foundWords.has(word)) {
        foundWords.add(word);
        // Mark cells as found
        selectedCells.forEach(c => {
          c.el.classList.remove('selecting');
          c.el.classList.add('found');
        });
        // Mark target chip
        const chip = board.parentElement.querySelector(`.ws-target-chip[data-word="${word}"]`);
        if (chip) chip.classList.add('found');
        // Reset selection
        selectedCells = [];
        updateCurrent();
        // Success feedback
        checkBtn.textContent = `✓ "${word}" پیدا شد!`;
        checkBtn.style.background = 'var(--success)';
        checkBtn.style.color = '#fff';
        setTimeout(() => {
          checkBtn.textContent = '✓ بررسی کلمه';
          checkBtn.style.background = '';
          checkBtn.style.color = '';
        }, 2000);
      } else {
        // Wrong: flash all selected
        selectedCells.forEach(c => c.el.classList.add('ws-wrong-flash'));
        setTimeout(() => {
          selectedCells.forEach(c => {
            c.el.classList.remove('ws-wrong-flash', 'selecting');
          });
          selectedCells = [];
          updateCurrent();
        }, 500);
      }
    });
    
    if (resetBtn) resetBtn.addEventListener('click', () => {
      selectedCells = [];
      foundWords.clear();
      cells.forEach(c => c.classList.remove('selecting', 'found', 'ws-wrong-flash'));
      board.parentElement.querySelectorAll('.ws-target-chip.found').forEach(c => c.classList.remove('found'));
      updateCurrent();
    });
  });
  
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
      // City chips: highlight ch/sh cities
      wbTask.querySelectorAll('.city-chip[data-target]').forEach(chip => {
        if (chip.dataset.target === 'true') {
          chip.classList.add('city-correct');
        } else {
          chip.classList.add('city-incorrect');
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
  
  // City chip selection (Grade 8 L1 ex 2)
  document.querySelectorAll('.city-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('selected');
    });
  });
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
  <div class="tab-panel" data-panel="melody">${buildMelody()}</div>
  <div class="tab-panel" data-panel="grammar">${buildGrammar()}</div>
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
  const next = num < 6 ? LESSONS.find(l => l.num === num + 1) : null;
  
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
const tabLabels = {conversation:'مکالمه',practice:'تمرین گفتاری',melody:'ملودی زبان',grammar:'دستور زبان',listening:'شنیداری و خواندنی',speaking:'گفتاری و نوشتاری',vocabulary:'واژگان',workbook:'کتاب کار',quiz:'آزمون پایانی'};

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
  const percent = Math.round((completed.size / 9) * 100);
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
