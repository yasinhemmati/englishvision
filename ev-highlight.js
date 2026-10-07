/* ═══════════════════════════════════════════════
   ENGLISH VISION — Text Highlight Module
   انتخاب متن + کلیک راست → هایلایت / حذف هایلایت
   Persists per-page in localStorage
   ═══════════════════════════════════════════════ */

(function() {
  'use strict';
  
  // ────────────────────────────────────
  // Configuration
  // ────────────────────────────────────
  // Only allow highlighting inside elements with these classes/selectors
  const ALLOWED_CONTAINERS = [
    '.conv-content', '.conv-en', '.conv-fa',
    '.practice-side', '.practice-trans-cell',
    '.practice-statement-en', '.practice-statement-fa',
    '.vocab-card', '.vocab-example', '.vocab-fa',
    '.grammar-example-row', '.grammar-example-en', '.grammar-example-fa',
    '.melody-text', '.spelling-line',
    '.reading-passage', '.find-it-text',
    '.lrw-question-row', '.sl-text', '.sl-en', '.sl-fa',
    '.img-card-fa', '.tab-panel',
    '.see-also-card', '.review-section-body',
    '.text-passage', '.poster-form',
    '[data-highlightable]'
  ];
  
  const HIGHLIGHT_COLORS = [
    {name:'زرد', value:'#FFEC99', fg:'#5C4D00'},
    {name:'سبز', value:'#C8F0C8', fg:'#2A5F2A'},
    {name:'صورتی', value:'#FFCCDD', fg:'#7A2649'},
    {name:'آبی', value:'#C8DCFF', fg:'#1A3B7A'},
    {name:'نارنجی', value:'#FFD9B3', fg:'#7A3F00'}
  ];
  
  // Storage key per-page
  const storageKey = 'ev_highlights_' + location.pathname + location.search;
  
  // ────────────────────────────────────
  // Check if selection is inside allowed container
  // ────────────────────────────────────
  function isAllowedSelection(range) {
    const node = range.commonAncestorContainer;
    const el = node.nodeType === 3 ? node.parentElement : node;
    if (!el) return false;
    return ALLOWED_CONTAINERS.some(sel => el.closest(sel));
  }
  
  // ────────────────────────────────────
  // Wrap selection with <mark>
  // ────────────────────────────────────
  function highlightSelection(color) {
    const sel = window.getSelection();
    if (!sel.rangeCount) return;
    const range = sel.getRangeAt(0);
    if (range.collapsed) return;
    if (!isAllowedSelection(range)) return;
    
    const text = range.toString();
    if (!text.trim()) return;
    
    // Use modern Highlight API if available (cleaner, no DOM mutation)
    // But fall back to wrapping for persistence
    try {
      // Extract content and wrap in mark
      const mark = document.createElement('mark');
      mark.className = 'ev-highlight';
      mark.style.backgroundColor = color.value;
      mark.style.color = color.fg;
      mark.style.padding = '1px 2px';
      mark.style.borderRadius = '3px';
      mark.dataset.evHighlight = '1';
      mark.dataset.color = color.value;
      
      // Only wrap if entire selection is in same text node or simple structure
      try {
        range.surroundContents(mark);
      } catch (e) {
        // For complex selections, extract & insert
        const contents = range.extractContents();
        mark.appendChild(contents);
        range.insertNode(mark);
      }
      
      sel.removeAllRanges();
      saveHighlights();
    } catch (err) {
      console.warn('Highlight failed:', err);
    }
  }
  
  function removeHighlightAtSelection() {
    const sel = window.getSelection();
    let target;
    
    if (sel.rangeCount && !sel.getRangeAt(0).collapsed) {
      // Selection: find any mark inside it
      const range = sel.getRangeAt(0);
      const container = range.commonAncestorContainer;
      const root = container.nodeType === 3 ? container.parentElement : container;
      const marks = root.querySelectorAll ? root.querySelectorAll('mark.ev-highlight') : [];
      marks.forEach(mark => {
        if (range.intersectsNode(mark)) unwrapMark(mark);
      });
    } else {
      // No selection: try context-menu target (last right-click element)
      target = lastContextTarget;
      const mark = target ? (target.closest && target.closest('mark.ev-highlight')) : null;
      if (mark) unwrapMark(mark);
    }
    
    sel.removeAllRanges();
    saveHighlights();
  }
  
  function unwrapMark(mark) {
    const parent = mark.parentNode;
    while (mark.firstChild) {
      parent.insertBefore(mark.firstChild, mark);
    }
    parent.removeChild(mark);
    // Normalize so adjacent text nodes merge
    parent.normalize();
  }
  
  function removeAllHighlights() {
    document.querySelectorAll('mark.ev-highlight').forEach(unwrapMark);
    saveHighlights();
  }
  
  // ────────────────────────────────────
  // Custom context menu
  // ────────────────────────────────────
  let menuEl = null;
  let lastContextTarget = null;
  
  function buildMenu() {
    if (menuEl) return menuEl;
    menuEl = document.createElement('div');
    menuEl.className = 'ev-highlight-menu';
    menuEl.style.cssText = `
      position:fixed;z-index:99999;background:#fff;
      border:1px solid rgba(0,0,0,0.15);border-radius:10px;
      box-shadow:0 12px 32px -8px rgba(0,0,0,0.25),0 4px 10px -4px rgba(0,0,0,0.15);
      padding:.4rem;display:none;flex-direction:column;gap:.2rem;
      font-family:Vazirmatn,Tahoma,sans-serif;font-size:.85rem;min-width:180px;
    `;
    document.body.appendChild(menuEl);
    return menuEl;
  }
  
  function showMenu(x, y, hasSelection, isOnHighlight) {
    const menu = buildMenu();
    menu.innerHTML = '';
    
    // Copy option (always when there's a selection)
    if (hasSelection) {
      const copyBtn = document.createElement('button');
      copyBtn.innerHTML = '📋 کپی متن انتخاب‌شده';
      copyBtn.style.cssText = `
        text-align:right;padding:.55rem .7rem;border:none;background:transparent;
        cursor:pointer;font-family:inherit;font-size:.88rem;color:#1A1814;
        border-radius:6px;width:100%;display:block;font-weight:500;
      `;
      copyBtn.onmouseover = () => copyBtn.style.background = '#E8F0FC';
      copyBtn.onmouseout = () => copyBtn.style.background = 'transparent';
      copyBtn.onclick = () => {
        const sel = window.getSelection();
        if (sel.rangeCount) {
          const text = sel.toString();
          if (text) {
            navigator.clipboard.writeText(text).then(() => {
              copyBtn.innerHTML = '✓ کپی شد!';
              copyBtn.style.color = '#2E7D32';
              setTimeout(hideMenu, 600);
            }).catch(() => {
              // Fallback: use document.execCommand
              const ta = document.createElement('textarea');
              ta.value = text;
              ta.style.position = 'fixed';
              ta.style.opacity = '0';
              document.body.appendChild(ta);
              ta.select();
              try {
                document.execCommand('copy');
                copyBtn.innerHTML = '✓ کپی شد!';
                copyBtn.style.color = '#2E7D32';
                setTimeout(hideMenu, 600);
              } catch (e) {
                copyBtn.innerHTML = '⚠ کپی ناموفق';
                copyBtn.style.color = '#D32F2F';
              }
              document.body.removeChild(ta);
            });
          }
        }
      };
      menu.appendChild(copyBtn);
      
      // Separator
      const sep = document.createElement('div');
      sep.style.cssText = 'height:1px;background:rgba(0,0,0,0.08);margin:.25rem 0';
      menu.appendChild(sep);
    }
    
    if (hasSelection) {
      // Color picker row
      const colorRow = document.createElement('div');
      colorRow.style.cssText = 'display:flex;gap:.35rem;padding:.4rem .6rem .55rem;border-bottom:1px solid rgba(0,0,0,0.08);margin-bottom:.25rem';
      
      const label = document.createElement('div');
      label.textContent = 'هایلایت:';
      label.style.cssText = 'font-size:.78rem;color:#666;margin-left:.3rem;align-self:center';
      colorRow.appendChild(label);
      
      HIGHLIGHT_COLORS.forEach(color => {
        const btn = document.createElement('button');
        btn.style.cssText = `
          width:24px;height:24px;border-radius:50%;border:2px solid #fff;
          background:${color.value};cursor:pointer;
          box-shadow:0 0 0 1px rgba(0,0,0,0.15);transition:transform .12s;
        `;
        btn.title = color.name;
        btn.onmouseover = () => btn.style.transform = 'scale(1.15)';
        btn.onmouseout = () => btn.style.transform = 'scale(1)';
        btn.onclick = () => {
          highlightSelection(color);
          hideMenu();
        };
        colorRow.appendChild(btn);
      });
      menu.appendChild(colorRow);
    }
    
    // Remove highlight (if any)
    if (isOnHighlight || hasSelection) {
      const removeBtn = document.createElement('button');
      removeBtn.textContent = isOnHighlight ? '✕ حذف این هایلایت' : '✕ حذف هایلایت‌های انتخاب‌شده';
      removeBtn.style.cssText = `
        text-align:right;padding:.5rem .7rem;border:none;background:transparent;
        cursor:pointer;font-family:inherit;font-size:.85rem;color:#A32D2D;
        border-radius:6px;width:100%;display:block;
      `;
      removeBtn.onmouseover = () => removeBtn.style.background = '#FCEBEB';
      removeBtn.onmouseout = () => removeBtn.style.background = 'transparent';
      removeBtn.onclick = () => {
        removeHighlightAtSelection();
        hideMenu();
      };
      menu.appendChild(removeBtn);
    }
    
    // Always: remove all
    if (document.querySelector('mark.ev-highlight')) {
      const clearAllBtn = document.createElement('button');
      clearAllBtn.textContent = '🗑️ پاک کردن همه هایلایت‌ها در این صفحه';
      clearAllBtn.style.cssText = `
        text-align:right;padding:.5rem .7rem;border:none;background:transparent;
        cursor:pointer;font-family:inherit;font-size:.8rem;color:#666;
        border-radius:6px;width:100%;display:block;border-top:1px solid rgba(0,0,0,0.05);
      `;
      clearAllBtn.onmouseover = () => clearAllBtn.style.background = '#F5F5F5';
      clearAllBtn.onmouseout = () => clearAllBtn.style.background = 'transparent';
      clearAllBtn.onclick = () => {
        if (confirm('همه هایلایت‌های این صفحه پاک شه؟')) {
          removeAllHighlights();
        }
        hideMenu();
      };
      menu.appendChild(clearAllBtn);
    }
    
    // Position menu
    menu.style.display = 'flex';
    
    // Adjust position to keep menu in viewport
    requestAnimationFrame(() => {
      const rect = menu.getBoundingClientRect();
      let nx = x, ny = y;
      if (nx + rect.width > window.innerWidth - 10) nx = window.innerWidth - rect.width - 10;
      if (ny + rect.height > window.innerHeight - 10) ny = y - rect.height - 5;
      if (nx < 5) nx = 5;
      if (ny < 5) ny = 5;
      menu.style.left = nx + 'px';
      menu.style.top = ny + 'px';
    });
  }
  
  function hideMenu() {
    if (menuEl) menuEl.style.display = 'none';
  }
  
  // ────────────────────────────────────
  // Context menu handler
  // ────────────────────────────────────
  document.addEventListener('contextmenu', (e) => {
    lastContextTarget = e.target;
    
    // Check if right-click is on a mark (existing highlight)
    const isOnHighlight = !!e.target.closest('mark.ev-highlight');
    
    // Check if there is text selected
    const sel = window.getSelection();
    let hasSelection = false;
    if (sel.rangeCount > 0) {
      const range = sel.getRangeAt(0);
      hasSelection = !range.collapsed && range.toString().trim().length > 0 && isAllowedSelection(range);
    }
    
    // Show menu only if something relevant (selection or on existing highlight)
    if (hasSelection || isOnHighlight) {
      e.preventDefault();
      showMenu(e.clientX, e.clientY, hasSelection, isOnHighlight);
    }
  });
  
  // Hide menu on outside click or scroll
  document.addEventListener('click', (e) => {
    if (menuEl && !e.target.closest('.ev-highlight-menu')) {
      hideMenu();
    }
  });
  
  window.addEventListener('scroll', hideMenu, true);
  window.addEventListener('resize', hideMenu);
  
  // ────────────────────────────────────
  // Persistence: save & restore
  // ────────────────────────────────────
  function saveHighlights() {
    try {
      const marks = Array.from(document.querySelectorAll('mark.ev-highlight'));
      const data = marks.map(m => {
        const containerEl = ALLOWED_CONTAINERS.map(sel => m.closest(sel)).find(Boolean);
        if (!containerEl) return null;
        // Get text + position in container
        const text = m.textContent;
        const color = m.dataset.color || '#FFEC99';
        const container = containerEl;
        // Get a CSS selector path for the container
        const path = getElementPath(container);
        // Find occurrence index of text within container
        const containerText = container.textContent;
        // Simple approach: store the text and color; on restore, find first match
        return { path, text, color };
      }).filter(Boolean);
      localStorage.setItem(storageKey, JSON.stringify(data));
    } catch (e) {
      console.warn('Save highlight failed:', e);
    }
  }
  
  function getElementPath(el) {
    if (!el || el === document.body) return '';
    const parts = [];
    while (el && el !== document.body && parts.length < 8) {
      let part = el.tagName.toLowerCase();
      if (el.id) {
        part = '#' + el.id;
        parts.unshift(part);
        break;
      } else if (el.className && typeof el.className === 'string') {
        const cls = el.className.trim().split(/\s+/)[0];
        if (cls) part += '.' + cls;
      }
      // Add nth-of-type
      const siblings = el.parentNode ? Array.from(el.parentNode.children).filter(s => s.tagName === el.tagName) : [];
      if (siblings.length > 1) {
        part += `:nth-of-type(${siblings.indexOf(el) + 1})`;
      }
      parts.unshift(part);
      el = el.parentNode;
    }
    return parts.join(' > ');
  }
  
  function restoreHighlights() {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const data = JSON.parse(raw);
      if (!Array.isArray(data)) return;
      data.forEach(item => {
        if (!item || !item.path || !item.text) return;
        try {
          const container = document.querySelector(item.path);
          if (!container) return;
          highlightTextInElement(container, item.text, item.color);
        } catch (e) { /* skip invalid */ }
      });
    } catch (e) {
      console.warn('Restore highlight failed:', e);
    }
  }
  
  function highlightTextInElement(container, text, color) {
    // Find a text node containing the text
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const idx = node.nodeValue.indexOf(text);
      if (idx >= 0) {
        const range = document.createRange();
        range.setStart(node, idx);
        range.setEnd(node, idx + text.length);
        const mark = document.createElement('mark');
        mark.className = 'ev-highlight';
        mark.style.backgroundColor = color;
        const fg = HIGHLIGHT_COLORS.find(c => c.value === color)?.fg || '#1A1814';
        mark.style.color = fg;
        mark.style.padding = '1px 2px';
        mark.style.borderRadius = '3px';
        mark.dataset.evHighlight = '1';
        mark.dataset.color = color;
        try { range.surroundContents(mark); } catch (e) { /* skip if invalid */ }
        return;
      }
    }
  }
  
  // ────────────────────────────────────
  // Restore on page load + after dynamic content loads
  // ────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(restoreHighlights, 200));
  } else {
    setTimeout(restoreHighlights, 200);
  }
  
  // Re-restore when tabs/lessons render dynamically
  const observer = new MutationObserver((mutations) => {
    // Throttle: only re-restore if significant DOM changes happened
    let bigChange = false;
    for (const m of mutations) {
      if (m.addedNodes.length > 3) { bigChange = true; break; }
    }
    if (bigChange) {
      clearTimeout(observer._restoreTimer);
      observer._restoreTimer = setTimeout(restoreHighlights, 300);
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
  
  // Expose globally
  window.EV_Highlight = {
    save: saveHighlights,
    restore: restoreHighlights,
    clear: removeAllHighlights
  };
})();
