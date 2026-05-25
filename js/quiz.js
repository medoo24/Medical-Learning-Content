// Gastrointestinal Clinical Academy - Quiz Engine Module
class ClinicalQuiz {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.currentLesson = null;
    this.currentQuestionIdx = 0;
    this.score = 0;
    this.answered = false;
  }

  // Load a new quiz for a specific lesson
  loadQuiz(lesson) {
    this.currentLesson = lesson;
    this.currentQuestionIdx = 0;
    this.score = 0;
    this.answered = false;
    this.render();
  }

  // Render the quiz UI
  render() {
    if (!this.container) return;

    if (!this.currentLesson || !this.currentLesson.mcqs || this.currentLesson.mcqs.length === 0) {
      this.container.innerHTML = `
        <div class="empty-state">
          <div class="empty-state-icon">📝</div>
          <h3>No Quizzes Available</h3>
          <p>This medical section does not contain active MCQ assessments yet.</p>
        </div>
      `;
      return;
    }

    const mcqs = this.currentLesson.mcqs;
    
    // Check if we finished the quiz
    if (this.currentQuestionIdx >= mcqs.length) {
      this.renderResults();
      return;
    }

    const currentQ = mcqs[this.currentQuestionIdx];
    this.answered = false;

    let html = `
      <div class="quiz-container">
        <div class="quiz-score-header">
          <span>Question ${this.currentQuestionIdx + 1} of ${mcqs.length}</span>
          <span>Score: ${this.score}/${mcqs.length}</span>
        </div>

        <div class="question-card">
          <div class="question-text">${currentQ.question}</div>
          <div class="options-list">
    `;

    currentQ.options.forEach((option, idx) => {
      const letter = String.fromCharCode(65 + idx); // A, B, C, D
      html += `
        <div class="option-item" data-index="${idx}">
          <div class="option-marker">${letter}</div>
          <span>${option}</span>
        </div>
      `;
    });

    html += `
          </div>
          <div class="explanation-panel" id="quiz-explanation">
            <strong>Clinical Explanation:</strong> ${currentQ.explanation}
          </div>
        </div>

        <div class="quiz-actions">
          <button class="btn btn-primary" id="quiz-next-btn" style="display: none;">Next Question</button>
        </div>
      </div>
    `;

    this.container.innerHTML = html;

    // Attach Event Listeners
    const optionItems = this.container.querySelectorAll(".option-item");
    optionItems.forEach(item => {
      item.addEventListener("click", (e) => this.handleOptionClick(e.currentTarget));
    });

    const nextBtn = this.container.querySelector("#quiz-next-btn");
    if (nextBtn) {
      nextBtn.addEventListener("click", () => this.handleNextQuestion());
    }
  }

  // Option selection handler
  handleOptionClick(selectedElement) {
    if (this.answered) return; // Prevent clicking multiple options
    this.answered = true;

    const selectedIdx = parseInt(selectedElement.getAttribute("data-index"));
    const correctIdx = this.currentLesson.mcqs[this.currentQuestionIdx].answerIndex;
    
    const optionItems = this.container.querySelectorAll(".option-item");
    
    if (selectedIdx === correctIdx) {
      selectedElement.classList.add("correct");
      this.score++;
    } else {
      selectedElement.classList.add("incorrect");
      // Highlight the correct one
      optionItems.forEach(item => {
        if (parseInt(item.getAttribute("data-index")) === correctIdx) {
          item.classList.add("correct");
        }
      });
    }

    // Show the explanation panel
    const explanationPanel = this.container.querySelector("#quiz-explanation");
    if (explanationPanel) {
      explanationPanel.classList.add("visible");
    }

    // Update score in the header
    const scoreHeader = this.container.querySelector(".quiz-score-header span:last-child");
    if (scoreHeader) {
      scoreHeader.textContent = `Score: ${this.score}/${this.currentLesson.mcqs.length}`;
    }

    // Show the next button
    const nextBtn = this.container.querySelector("#quiz-next-btn");
    if (nextBtn) {
      nextBtn.style.display = "block";
      if (this.currentQuestionIdx === this.currentLesson.mcqs.length - 1) {
        nextBtn.textContent = "Finish Quiz";
      }
    }
  }

  // Handle advancing to next question
  handleNextQuestion() {
    this.currentQuestionIdx++;
    this.render();
  }

  // Render final scoring panel
  renderResults() {
    const totalQ = this.currentLesson.mcqs.length;
    const percentage = Math.round((this.score / totalQ) * 100);
    
    let performanceText = "Keep studying to master these clinical details.";
    let emoji = "📚";
    
    if (percentage === 100) {
      performanceText = "Flawless diagnosis! You have mastered this lesson.";
      emoji = "🎓";
    } else if (percentage >= 70) {
      performanceText = "Excellent understanding of the clinical aspects!";
      emoji = "⚕️";
    }

    this.container.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">${emoji}</div>
        <h3>Assessment Complete!</h3>
        <p style="font-size: 1.15rem; margin-top: 0.5rem; font-weight: 600;">You scored ${this.score} out of ${totalQ} (${percentage}%)</p>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">${performanceText}</p>
        <button class="btn btn-primary" id="quiz-reset-btn">Retake Assessment</button>
      </div>
    `;

    const resetBtn = this.container.querySelector("#quiz-reset-btn");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        this.currentQuestionIdx = 0;
        this.score = 0;
        this.render();
      });
    }
  }
}

// Make globally available
window.ClinicalQuiz = ClinicalQuiz;
