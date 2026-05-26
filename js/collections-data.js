const collectionsData = [
  {
    id: "collection-high-yield",
    title: "High-Yield Collections",
    difficulty: "hard",
    organ: "Aggregated Review",
    readTime: "10 min",
    isCollection: true,
    definition: "A specialized review file aggregating the highest-yield clinical signs, imaging findings, and exam traps across all Upper GIT and Intestinal modules. Use this file for rapid board-prep review.",
    keyPoints: [
      "Review these collections to consolidate cross-topic knowledge.",
      "Includes data from all 9 Intestinal and 6 Upper GIT lessons.",
      "Focus on the 'Exam Traps' tab to avoid common diagnostic pitfalls."
    ],
    customTabs: [
      { id: "overview", title: "Overview" },
      { id: "signs", title: "Clinical Signs" },
      { id: "imaging", title: "Imaging Findings" },
      { id: "pearls", title: "Exam Traps & Pearls" }
    ],
    // Map the custom tab IDs to HTML content
    pane_overview: `
      <h2>High-Yield Collections</h2>
      <p style="font-size: 1.1rem; line-height: 1.6; padding: 1rem; background-color: var(--primary-light); border-radius: var(--radius-sm); border-left: 4px solid var(--primary); margin-bottom: 1.5rem;">
        Welcome to the Collections module. This section is designed to break down silos between different organ systems and group information by clinical concept (e.g., all imaging findings in one place).
      </p>
      <div class="analogy-panel">
        <strong>💡 Pro Tip:</strong> Use the tabs above to navigate between Clinical Signs, Imaging Findings, and high-yield Pearls.
      </div>
    `,
    pane_signs: `
      <h2>Classic Clinical Signs & Triads</h2>
      <table class="comparison-highlight">
        <thead><tr><th>Sign / Triad</th><th>Associated Disorder</th><th>Description</th></tr></thead>
        <tbody>
          <tr><td><strong>Chronic Fissure Triad</strong></td><td>Chronic Anal Fissure</td><td>1. Hypertrophied Anal Papilla, 2. Fissure, 3. Sentinel Skin Tag</td></tr>
          <tr><td><strong>Pain Out of Proportion</strong></td><td>Early Mesenteric Ischemia</td><td>Severe abdominal pain with a surprisingly soft, non-tender abdomen on physical exam.</td></tr>
          <tr><td><strong>Hungry Vomiter</strong></td><td>Pyloric Stenosis</td><td>Infant vigorously feeds immediately after a projectile vomiting episode.</td></tr>
          <tr><td><strong>Palpable Olive</strong></td><td>Pyloric Stenosis</td><td>A firm, olive-shaped mass palpable in the Right Upper Quadrant (hypertrophied pylorus).</td></tr>
          <tr><td><strong>Dermatitis Herpetiformis</strong></td><td>Celiac Disease</td><td>Intensely itchy, blistering rash on extensor surfaces (elbows, knees).</td></tr>
        </tbody>
      </table>
    `,
    pane_imaging: `
      <h2>Pathognomonic Imaging Findings</h2>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">X</div>
          <div class="step-content"><strong>Double-Bubble Sign (X-Ray)</strong><p>Air in stomach and proximal duodenum with NO distal bowel gas. Classic for <strong>Duodenal Atresia</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">C</div>
          <div class="step-content"><strong>Pericolic Fat Stranding (CT)</strong><p>Inflammation of the fat surrounding the sigmoid colon. The diagnostic procedure of choice for <strong>Acute Diverticulitis</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">E</div>
          <div class="step-content"><strong>Cobblestone Appearance (Endoscopy)</strong><p>Interspersed areas of normal mucosa and deep mucosal ulceration. Classic for <strong>Crohn's Disease</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">A</div>
          <div class="step-content"><strong>Narrowed Aortomesenteric Angle (CT/Angio)</strong><p>Compression of the 3rd part of the duodenum between the Aorta and SMA, due to loss of the fat pad. Classic for <strong>SMA Syndrome</strong>.</p></div>
        </div>
      </div>
    `,
    pane_pearls: `
      <h2>Exam Traps & Clinical Pearls</h2>
      
      <div class="exam-trap" style="margin-bottom: 1rem;">
        <strong>⚠️ Exam Trap — Diverticular Hemorrhage:</strong> Neither a positive fecal occult blood test nor iron-deficiency anemia should EVER be attributed to diverticular hemorrhage! Always work up for colon cancer. Diverticular bleeds are abrupt, massive, and macroscopic.
      </div>
      
      <div class="exam-trap" style="margin-bottom: 1rem;">
        <strong>⚠️ Exam Trap — Bilious Vomiting in a Neonate:</strong> Bilious vomiting in a newborn is a surgical emergency (Midgut Volvulus / Malrotation) until proven otherwise. Do not assume it is just "reflux"!
      </div>

      <div class="exam-trap" style="margin-bottom: 1rem;">
        <strong>⚠️ Exam Trap — Hirschsprung Biopsy:</strong> The diagnosis of Hirschsprung disease requires a <em>rectal suction biopsy</em> (which pulls submucosa) to prove the absence of ganglion cells. A standard mucosal biopsy is insufficient!
      </div>

      <div class="clinical-pearl" style="margin-bottom: 1rem;">
        <strong>🔑 Clinical Pearl — Rectal Prolapse:</strong> While commonly caused by acute diarrhea or constipation/straining, a recurrent rectal prolapse in a child is a classic presentation of <strong>Cystic Fibrosis</strong> (due to bulky, malabsorbed stools and coughing fits). Always order a Sweat Chloride test!
      </div>
      
      <div class="clinical-pearl" style="margin-bottom: 1rem;">
        <strong>🔑 Clinical Pearl — FPIES vs. Anaphylaxis:</strong> FPIES causes profound vomiting and shock-like lethargy 2-4 hours after food ingestion (like Cow's Milk), but lacks the classic IgE signs like hives, wheezing, or facial swelling. Epinephrine won't fix it; they need IV fluids!
      </div>
    `
  }
];
