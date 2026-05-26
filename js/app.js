// Gastrointestinal Clinical Academy - Core App Logic
document.addEventListener("DOMContentLoaded", () => {
  let activeLesson = null;
  let activeTheme  = "teal";
  // One quiz engine per lesson — keyed by lesson.id so state persists across tab switches
  const lessonQuizEngines = {};

  // DOM Elements
  const accordions = document.querySelectorAll(".category-accordion");
  const gitLessonsGrid = document.getElementById("git-lessons-grid");
  const intestinalLessonsGrid = document.getElementById("intestinal-lessons-grid");
  const gitCountBadge = document.getElementById("git-count-badge");
  const intestinalCountBadge = document.getElementById("intestinal-count-badge");
  const collectionsGrid = document.getElementById("collections-grid");
  const collectionsCountBadge = document.getElementById("collections-count-badge");
  const searchInput = document.getElementById("search-input");
  const filterSelect = document.getElementById("filter-select");
  const cardViewport = document.getElementById("card-viewport");
  
  // Combine all lessons data
  const allLessonsData = [
    ...(typeof lessonsData !== 'undefined' ? lessonsData : []), 
    ...(typeof intestinalLessonsData !== 'undefined' ? intestinalLessonsData : []),
    ...(typeof collectionsData !== 'undefined' ? collectionsData : [])
  ];
  
  // Theme Buttons
  const themeBtns = document.querySelectorAll(".theme-btn");

  // --- Theme Manager ---
  function changeTheme(themeName) {
    activeTheme = themeName;
    document.body.className = `theme-${themeName}`;
    
    themeBtns.forEach(btn => {
      if (btn.getAttribute("data-theme") === themeName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });
    
    // Store in localStorage for persistence
    localStorage.setItem("git-academy-theme", themeName);
  }

  // Init Theme
  const savedTheme = localStorage.getItem("git-academy-theme") || "teal";
  changeTheme(savedTheme);

  themeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      changeTheme(btn.getAttribute("data-theme"));
    });
  });

  // --- Accordion Controls ---
  accordions.forEach(acc => {
    const header = acc.querySelector(".accordion-header");
    header.addEventListener("click", () => {
      acc.classList.toggle("expanded");
    });
  });

  // --- Render Lessons List ---
  function renderLessonsList(lessonsToRender) {
    gitLessonsGrid.innerHTML = "";
    intestinalLessonsGrid.innerHTML = "";
    collectionsGrid.innerHTML = "";
    
    // Determine which category a lesson belongs to (we can check a property or hardcode by ID prefixes if needed, 
    // but the cleanest way is to check if it exists in the original lessonsData array)
    const upperGitLessons = lessonsToRender.filter(l => !l.isCollection && lessonsData.find(u => u.id === l.id));
    const intestinalLessons = lessonsToRender.filter(l => !l.isCollection && intestinalLessonsData.find(i => i.id === l.id));
    const collectionsLessons = lessonsToRender.filter(l => l.isCollection);

    // Update Badges
    gitCountBadge.textContent = `${upperGitLessons.length} Lessons`;
    intestinalCountBadge.textContent = `${intestinalLessons.length} Lessons`;
    collectionsCountBadge.textContent = `${collectionsLessons.length} Collections`;

    function populateGrid(gridElement, lessonsArray) {
      if (lessonsArray.length === 0) {
        gridElement.innerHTML = `
          <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-muted);">
            No matching disorders found in this category.
          </div>
        `;
        return;
      }

      lessonsArray.forEach(lesson => {
        const isSelected = activeLesson && activeLesson.id === lesson.id;
        const difficultyClass = `badge-${lesson.difficulty}`;
        
        const item = document.createElement("div");
        item.className = `lesson-item ${isSelected ? 'active' : ''}`;
        item.innerHTML = `
          <div class="lesson-item-header">
            <span class="lesson-item-title">${lesson.title}</span>
            <span class="lesson-item-badge ${difficultyClass}">${lesson.difficulty}</span>
          </div>
          <div class="lesson-item-meta">
            <span>${lesson.organ}</span>
            <span>⏱️ ${lesson.readTime}</span>
          </div>
        `;
        
        item.addEventListener("click", () => {
          selectLesson(lesson);
          // Highlight active list item across all grids
          document.querySelectorAll(".lesson-item").forEach(el => el.classList.remove("active"));
          item.classList.add("active");
        });
        
        gridElement.appendChild(item);
      });
    }

    populateGrid(gitLessonsGrid, upperGitLessons);
    populateGrid(intestinalLessonsGrid, intestinalLessons);
    populateGrid(collectionsGrid, collectionsLessons);
  }

  // --- Filter and Search Logic ---
  function performFilter() {
    const query = searchInput.value.toLowerCase().trim();
    const difficultyFilter = filterSelect.value;
    
    const filtered = allLessonsData.filter(lesson => {
      const matchesSearch = 
        lesson.title.toLowerCase().includes(query) || 
        lesson.definition.toLowerCase().includes(query) ||
        lesson.organ.toLowerCase().includes(query);
        
      const matchesDifficulty = 
        difficultyFilter === "all" || 
        lesson.difficulty === difficultyFilter;
        
      return matchesSearch && matchesDifficulty;
    });
    
    renderLessonsList(filtered);
  }

  searchInput.addEventListener("input", performFilter);
  filterSelect.addEventListener("change", performFilter);

  // --- Select and Render Lesson Details ---
  function selectLesson(lesson) {
    activeLesson = lesson;
    localStorage.setItem("git-academy-active-lesson", lesson.id);
    renderLessonCard(lesson);
    
    // Smooth scroll down to clinical card display
    cardViewport.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderLessonCard(lesson) {
    const difficultyClass = `badge-${lesson.difficulty}`;
    const fileId = `GIT-REC-${lesson.id.toUpperCase()}-${Math.floor(Math.random() * 9000 + 1000)}`;

    cardViewport.innerHTML = `
      <div class="clinical-id-card">
        <div class="card-header">
          <div class="card-header-text">
            <span class="card-pretitle">Clinical Case & Lesson File</span>
            <div class="card-title">${lesson.title}</div>
          </div>
          <div class="card-header-badge-group">
            <span class="card-badge ${difficultyClass}">${lesson.difficulty}</span>
            <span class="card-file-id">${fileId}</span>
          </div>
        </div>

        <div class="card-layout">
          <!-- Left Sidebar -->
          <div class="card-sidebar">
            <div class="sidebar-panel">
              <span class="sidebar-label">Target Organ System</span>
              <span class="sidebar-value">🫁 ${lesson.organ}</span>
            </div>
            
            <div class="sidebar-panel">
              <span class="sidebar-label">Estimated Study Time</span>
              <span class="sidebar-value">⏱️ ${lesson.readTime}</span>
            </div>

            <div class="sidebar-panel">
              <span class="sidebar-label">High-Yield Facts</span>
              <ul class="quick-facts-list">
                ${lesson.keyPoints.map(pt => `<li>${pt}</li>`).join("")}
              </ul>
            </div>
          </div>

          <!-- Right Content Column -->
          <div class="card-main">
            <!-- Tabs Navigation -->
            <div class="tab-nav">
              ${lesson.customTabs ? lesson.customTabs.map((tab, i) => `
                <button class="tab-btn ${i === 0 ? 'active' : ''}" data-tab="${tab.id}">${tab.title}</button>
              `).join("") : `
                <button class="tab-btn active" data-tab="overview">Definition & Overview</button>
                <button class="tab-btn" data-tab="presentation">Clinical Presentation</button>
                <button class="tab-btn" data-tab="diagnostics">Diagnostic Plan</button>
                <button class="tab-btn" data-tab="management">Management & Rx</button>
                ${lesson.caseStudy ? `<button class="tab-btn" data-tab="case">Clinical Case</button>` : ''}
                <button class="tab-btn" data-tab="quiz">Active Assessment</button>
              `}
            </div>

            <!-- Tab Viewports -->
            <div class="tab-viewport">
              ${lesson.customTabs ? lesson.customTabs.map((tab, i) => `
                <div class="tab-pane ${i === 0 ? 'active' : ''}" id="pane-${tab.id}">
                  ${lesson['pane_' + tab.id]}
                </div>
              `).join("") : `
              <!-- Overview Pane -->
              <div class="tab-pane active" id="pane-overview">
                <h2>Clinical Definition</h2>
                <p style="font-size: 1.1rem; line-height: 1.6; padding: 1rem; background-color: var(--primary-light); border-radius: var(--radius-sm); border-left: 4px solid var(--primary); margin-bottom: 1.5rem;">
                  ${lesson.definition}
                </p>
                
                <h2>Epidemiology & Demographics</h2>
                ${lesson.epidemiology}

                <h2>Pathophysiology details</h2>
                ${lesson.pathophysiology}
              </div>

              <!-- Presentation Pane -->
              <div class="tab-pane" id="pane-presentation">
                <h2>Clinical Manifestations</h2>
                ${lesson.presentation}
              </div>

              <!-- Diagnostics Pane -->
              <div class="tab-pane" id="pane-diagnostics">
                <h2>Investigations & Diagnostics</h2>
                ${lesson.diagnostics}
              </div>

              <!-- Management Pane -->
              <div class="tab-pane" id="pane-management">
                <h2>Treatment & Management Protocols</h2>
                ${lesson.management}
              </div>

              <!-- Case Study Pane -->
              ${lesson.caseStudy ? `
                <div class="tab-pane" id="pane-case">
                  <div class="case-study-grid">
                    <span class="case-profile">🩺 Clinical Scenario Profile</span>
                    <div class="case-block">
                      <strong>Patient Presentation:</strong> ${lesson.caseStudy.history}
                    </div>
                    <div class="case-block" style="border-left-color: var(--primary);">
                      <strong>Initial Assessment:</strong> ${lesson.caseStudy.investigations}
                    </div>
                    
                    <h2 style="margin-top: 1rem;">Interactive Clinical Case Review</h2>
                    <div class="case-qa-section">
                      ${lesson.caseStudy.questionsAnswers.map((qa, index) => `
                        <div class="case-qa-item">
                          <div class="case-question" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">
                            <span>Q${index+1}: ${qa.q}</span>
                            <span>▼</span>
                          </div>
                          <div class="case-answer" style="display: none;">
                            ${qa.a}
                          </div>
                        </div>
                      `).join("")}
                    </div>
                  </div>
                </div>
              ` : ''}

              <!-- Quiz Pane -->
              <div class="tab-pane" id="pane-quiz">
                <!-- Quiz renders here via ClinicalQuiz engine -->
              </div>
              `}
            </div>
          </div>
        </div>
      </div>
      
      <!-- Lock Overlay Container (Hidden initially) -->
      <div id="lock-overlay-container" style="display: none;">
        <div class="lock-overlay">
          <div class="lock-overlay-icon">🔒</div>
          <div class="lock-overlay-title">Premium Clinical File Locked</div>
          <div class="lock-overlay-text">Unlock full access to this clinical case and assessment.</div>
        </div>
      </div>
    `;

    // Hook tab button click events
    const tabBtns = cardViewport.querySelectorAll(".tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const targetTab = btn.getAttribute("data-tab");
        
        // Remove active class from all buttons and panes
        tabBtns.forEach(b => b.classList.remove("active"));
        cardViewport.querySelectorAll(".tab-pane").forEach(pane => pane.classList.remove("active"));
        
        btn.classList.add("active");
        const activePane = cardViewport.querySelector(`#pane-${targetTab}`);
        if (activePane) activePane.classList.add("active");
        
        // Trigger quiz engine if quiz tab selected
        if (targetTab === 'quiz') {
          const quizPane = cardViewport.querySelector('#pane-quiz');
          if (quizPane) {
            if (!lessonQuizEngines[lesson.id]) {
              // First visit to this lesson's quiz — create and load
              lessonQuizEngines[lesson.id] = new window.ClinicalQuiz(quizPane);
              lessonQuizEngines[lesson.id].loadQuiz(lesson);
            } else {
              // Returning to quiz tab — resume with preserved state
              lessonQuizEngines[lesson.id].resume(quizPane);
            }
          }
        }
      });
    });

    // --- DevTools Detection & Conditional Lock ---
    // Remove previous unconditional lock timer if any
    if (window.currentLockTimer) {
      clearTimeout(window.currentLockTimer);
    }
    // Function to apply lock overlay
    const applyLock = () => {
      const mainContent = cardViewport.querySelector('.tab-viewport');
      const overlay = cardViewport.querySelector('#lock-overlay-container');
      if (mainContent && overlay) {
        mainContent.classList.add('content-locked');
        overlay.style.display = 'block';
      }
    };
    // DevTools detection using window size differences
    const devToolsCheckInterval = setInterval(() => {
      const threshold = 160; // pixels difference indicative of devtools open
      const widthDiff = Math.abs(window.outerWidth - window.innerWidth);
      const heightDiff = Math.abs(window.outerHeight - window.innerHeight);
      if (widthDiff > threshold || heightDiff > threshold) {
        applyLock();
      }
    }, 500);
    // Ensure lock is removed when switching tabs
    const clearDevToolsLock = () => {
      const mainContent = cardViewport.querySelector('.tab-viewport');
      const overlay = cardViewport.querySelector('#lock-overlay-container');
      if (mainContent && overlay) {
        mainContent.classList.remove('content-locked');
        overlay.style.display = 'none';
      }
    };
    // Hook into tab change to clear any existing lock
    const tabBtnsHook = cardViewport.querySelectorAll('.tab-btn');
    tabBtnsHook.forEach(btn => {
      btn.addEventListener('click', () => {
        clearDevToolsLock();
      });
    });
  }

  // --- Initial Setup ---
  renderLessonsList(allLessonsData);
  
  // Select previously active lesson or default to first
  const savedLessonId = localStorage.getItem("git-academy-active-lesson");
  if (savedLessonId) {
    const foundLesson = allLessonsData.find(l => l.id === savedLessonId);
    if (foundLesson) {
      selectLesson(foundLesson);
    } else if (allLessonsData.length > 0) {
      selectLesson(allLessonsData[0]);
    }
  } else if (allLessonsData.length > 0) {
    selectLesson(allLessonsData[0]);
  }
});
