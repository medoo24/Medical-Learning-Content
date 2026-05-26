// Gastrointestinal Clinical Academy - Quiz Engine Module (v2)
class ClinicalQuiz {
  constructor(container) {
    // Accept either an element ID string or a direct DOM element
    this.container = typeof container === 'string'
      ? document.getElementById(container)
      : container;
    this.currentLesson = null;
    this.currentIdx    = 0;
    this.answeredMap   = {};   // { questionIndex: selectedOptionIndex }
    this.score         = 0;
    this.finished      = false;
  }

  // ── Public API ─────────────────────────────────────────────────────────────

  /** Start a fresh quiz for a new lesson */
  loadQuiz(lesson) {
    this.currentLesson = lesson;
    this.currentIdx    = 0;
    this.answeredMap   = {};
    this.score         = 0;
    this.finished      = false;
    this.render();
  }

  /** Re-attach to a (possibly new) container and redraw current state */
  resume(container) {
    this.container = typeof container === 'string'
      ? document.getElementById(container)
      : container;
    this.render();
  }

  // ── Rendering ──────────────────────────────────────────────────────────────

  render() {
    if (!this.container) return;

    const qs = this.currentLesson && this.currentLesson.quizQuestions;
    if (!qs || qs.length === 0) {
      this.container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📝</div>
          <h3>No Quizzes Available</h3>
          <p>This medical section does not contain active MCQ assessments yet.</p>
        </div>`;
      return;
    }

    if (this.finished) { this.renderResults(); return; }

    const total   = qs.length;
    const idx     = this.currentIdx;
    const q       = qs[idx];
    const already = this.answeredMap.hasOwnProperty(idx);
    const answered = already ? this.answeredMap[idx] : null;

    // Progress bar width
    const answered_count = Object.keys(this.answeredMap).length;
    const progress = Math.round((answered_count / total) * 100);

    // Build question dot-nav (small circles at top)
    let dotNav = '';
    for (let i = 0; i < total; i++) {
      let cls = 'quiz-dot';
      if (i === idx) cls += ' active';
      if (this.answeredMap.hasOwnProperty(i)) {
        const isCorrect = this.answeredMap[i] === qs[i].answerIndex;
        cls += isCorrect ? ' dot-correct' : ' dot-wrong';
      }
      dotNav += `<button class="quiz-dot ${cls === 'quiz-dot' ? '' : cls.replace('quiz-dot','').trim()}" data-qi="${i}" title="Question ${i+1}">${i+1}</button>`;
    }

    // Build options
    let optionsHtml = '';
    q.options.forEach((opt, i) => {
      const letter = String.fromCharCode(65 + i);
      let cls = 'option-item';
      if (already) {
        // Show answered state
        if (i === q.answerIndex)        cls += ' correct';
        if (i === answered && i !== q.answerIndex) cls += ' incorrect';
        cls += ' option-locked';
      }
      optionsHtml += `
        <div class="${cls}" data-index="${i}">
          <div class="option-marker">${letter}</div>
          <span>${opt}</span>
        </div>`;
    });

    // Explanation (only visible if answered)
    const explHtml = already ? `
      <div class="explanation-panel visible">
        <strong>🔬 Clinical Explanation:</strong> ${q.explanation}
      </div>` : `<div class="explanation-panel" id="quiz-explanation">
        <strong>🔬 Clinical Explanation:</strong> ${q.explanation}
      </div>`;

    // Nav buttons
    const prevDisabled = idx === 0 ? 'disabled' : '';
    const isLast       = idx === total - 1;
    const nextLabel    = already
      ? (isLast ? 'Finish &amp; Score' : 'Next →')
      : (isLast ? 'Finish &amp; Score' : 'Skip →');
    const nextCls = already && isLast ? 'btn btn-success' : 'btn btn-primary';

    this.container.innerHTML = `
      <div class="quiz-container">

        <!-- Header bar -->
        <div class="quiz-score-header">
          <span class="quiz-q-counter">Question <strong>${idx + 1}</strong> of ${total}</span>
          <span class="quiz-score-badge">Score: <strong>${this.score}</strong> / ${total}</span>
        </div>

        <!-- Progress bar -->
        <div class="quiz-progress-track">
          <div class="quiz-progress-fill" style="width:${progress}%"></div>
        </div>

        <!-- Dot navigation -->
        <div class="quiz-dot-nav">${dotNav}</div>

        <!-- Question card -->
        <div class="question-card">
          <div class="question-text">${q.question}</div>
          <div class="options-list">${optionsHtml}</div>
          ${explHtml}
        </div>

        <!-- Prev / Next actions -->
        <div class="quiz-actions">
          <button class="btn btn-ghost" id="quiz-prev-btn" ${prevDisabled}>← Back</button>
          <button class="${nextCls}" id="quiz-next-btn">${nextLabel}</button>
        </div>

      </div>`;

    // ── Event listeners ────────────────────────────────────────────────────
    // Dot nav
    this.container.querySelectorAll('.quiz-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        this.currentIdx = parseInt(dot.getAttribute('data-qi'));
        this.render();
      });
    });

    // Options (only if not yet answered)
    if (!already) {
      this.container.querySelectorAll('.option-item').forEach(item => {
        item.addEventListener('click', () => this._handleAnswer(item));
      });
    }

    // Prev button
    const prevBtn = this.container.querySelector('#quiz-prev-btn');
    if (prevBtn && !prevBtn.disabled) {
      prevBtn.addEventListener('click', () => { this.currentIdx--; this.render(); });
    }

    // Next/Finish button
    const nextBtn = this.container.querySelector('#quiz-next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (isLast) {
          this.finished = true;
          this.renderResults();
        } else {
          this.currentIdx++;
          this.render();
        }
      });
    }
  }

  // ── Private helpers ────────────────────────────────────────────────────────

  _handleAnswer(selectedEl) {
    const idx       = this.currentIdx;
    const qs        = this.currentLesson.quizQuestions;
    const selected  = parseInt(selectedEl.getAttribute('data-index'));
    const correct   = qs[idx].answerIndex;

    // Record answer
    this.answeredMap[idx] = selected;
    if (selected === correct) this.score++;

    // Visually mark options
    this.container.querySelectorAll('.option-item').forEach(item => {
      item.classList.add('option-locked');
      const i = parseInt(item.getAttribute('data-index'));
      if (i === correct)                      item.classList.add('correct');
      if (i === selected && i !== correct)    item.classList.add('incorrect');
    });

    // Reveal explanation
    const exp = this.container.querySelector('#quiz-explanation');
    if (exp) exp.classList.add('visible');

    // Update score badge
    const badge = this.container.querySelector('.quiz-score-badge');
    if (badge) badge.innerHTML = `Score: <strong>${this.score}</strong> / ${qs.length}`;

    // Flip Next button label / style
    const nextBtn = this.container.querySelector('#quiz-next-btn');
    if (nextBtn) {
      const isLast = idx === qs.length - 1;
      nextBtn.textContent = isLast ? 'Finish & Score' : 'Next →';
      if (isLast) nextBtn.classList.replace('btn-primary', 'btn-success');
    }

    // Update dot for this question
    const dot = this.container.querySelector(`.quiz-dot[data-qi="${idx}"]`);
    if (dot) {
      dot.classList.remove('dot-correct','dot-wrong');
      dot.classList.add(selected === correct ? 'dot-correct' : 'dot-wrong');
    }
  }

  // ── Results screen ─────────────────────────────────────────────────────────

  renderResults() {
    const total      = this.currentLesson.quizQuestions.length;
    const pct        = Math.round((this.score / total) * 100);
    const missed     = total - this.score;

    let grade = '📚'; let msg = 'Keep reviewing — you\'ll get there!';
    if (pct === 100) { grade = '🎓'; msg = 'Flawless! You have mastered this lesson.'; }
    else if (pct >= 80) { grade = '⚕️'; msg = 'Excellent clinical reasoning!'; }
    else if (pct >= 60) { grade = '🩺'; msg = 'Good effort — review the explanations.'; }

    // Summary rows for each question
    const qs = this.currentLesson.quizQuestions;
    let summaryRows = '';
    qs.forEach((q, i) => {
      const sel = this.answeredMap[i];
      const skipped = sel === undefined;
      const correct  = !skipped && sel === q.answerIndex;
      const icon     = skipped ? '⏭' : (correct ? '✅' : '❌');
      const selLabel = skipped ? 'Skipped' : q.options[sel];
      summaryRows += `
        <div class="result-row ${correct ? 'row-correct' : skipped ? 'row-skipped' : 'row-wrong'}">
          <span class="result-icon">${icon}</span>
          <div class="result-detail">
            <p class="result-q">Q${i+1}: ${q.question.substring(0,90)}…</p>
            <p class="result-ans">Your answer: <em>${selLabel}</em></p>
          </div>
          <button class="btn-review" data-qi="${i}">Review</button>
        </div>`;
    });

    this.container.innerHTML = `
      <div class="quiz-results">
        <div class="results-hero">
          <div class="results-emoji">${grade}</div>
          <h2>Assessment Complete</h2>
          <div class="results-score-ring">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="42" class="ring-bg"/>
              <circle cx="50" cy="50" r="42" class="ring-fill"
                stroke-dasharray="${2.64 * pct} ${264 - 2.64 * pct}"
                stroke-dashoffset="66"/>
            </svg>
            <div class="ring-label"><strong>${pct}%</strong><span>${this.score}/${total}</span></div>
          </div>
          <p class="results-msg">${msg}</p>
          <div class="results-stats">
            <div class="stat-chip correct-chip">✅ Correct: ${this.score}</div>
            <div class="stat-chip wrong-chip">❌ Wrong: ${missed}</div>
          </div>
        </div>

        <div class="results-breakdown">
          <h3>Question Review</h3>
          ${summaryRows}
        </div>

        <div class="quiz-actions" style="margin-top:1.5rem">
          <button class="btn btn-primary" id="quiz-reset-btn">↺ Retake Assessment</button>
        </div>
      </div>`;

    // Review buttons — jump to that question
    this.container.querySelectorAll('.btn-review').forEach(btn => {
      btn.addEventListener('click', () => {
        this.finished    = false;
        this.currentIdx  = parseInt(btn.getAttribute('data-qi'));
        this.render();
      });
    });

    // Retake
    const resetBtn = this.container.querySelector('#quiz-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.currentIdx  = 0;
        this.answeredMap = {};
        this.score       = 0;
        this.finished    = false;
        this.render();
      });
    }
  }
}

// Make globally available
window.ClinicalQuiz = ClinicalQuiz;
