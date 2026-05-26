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
          <tr><td><strong>Charcot's Triad</strong></td><td>Acute Cholangitis</td><td>1. Jaundice, 2. Fever, 3. RUQ Abdominal Pain.</td></tr>
          <tr><td><strong>Reynolds' Pentad</strong></td><td>Acute Suppurative Cholangitis</td><td>Charcot's Triad + Hypotension + Altered Mental Status.</td></tr>
          <tr><td><strong>Chronic Fissure Triad</strong></td><td>Chronic Anal Fissure</td><td>1. Hypertrophied Anal Papilla, 2. Fissure, 3. Sentinel Skin Tag.</td></tr>
          <tr><td><strong>Pain Out of Proportion</strong></td><td>Mesenteric Ischemia</td><td>Severe abdominal pain with a surprisingly soft, non-tender abdomen on physical exam.</td></tr>
          <tr><td><strong>Hungry Vomiter</strong></td><td>Pyloric Stenosis</td><td>Infant vigorously feeds immediately after a projectile non-bilious vomiting episode.</td></tr>
          <tr><td><strong>Palpable Olive</strong></td><td>Pyloric Stenosis</td><td>A firm, olive-shaped mass palpable in the Right Upper Quadrant (hypertrophied pylorus).</td></tr>
          <tr><td><strong>Blast Sign / Squirt Sign</strong></td><td>Hirschsprung Disease</td><td>Explosive expulsion of gas and foul-smelling stool upon digital rectal exam.</td></tr>
          <tr><td><strong>Currant Jelly Stools</strong></td><td>Intussusception</td><td>Stools mixed with blood and mucus (late and ominous sign of bowel ischemia).</td></tr>
          <tr><td><strong>Dance Sign</strong></td><td>Intussusception</td><td>Empty Right Lower Quadrant on palpation (due to the cecum telescoping upwards).</td></tr>
          <tr><td><strong>Dermatitis Herpetiformis</strong></td><td>Celiac Disease</td><td>Intensely itchy, blistering rash on extensor surfaces (elbows, knees, buttocks).</td></tr>
          <tr><td><strong>Boas Sign</strong></td><td>Acute Cholecystitis</td><td>Referred pain to the right subscapular region (due to phrenic nerve irritation).</td></tr>
          <tr><td><strong>Kehr Sign</strong></td><td>Splenic Rupture</td><td>Referred pain to the left shoulder, classical in abdominal trauma.</td></tr>
        </tbody>
      </table>
    `,
    pane_imaging: `
      <h2>Pathognomonic Imaging & Endoscopy Findings</h2>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">🕊️</div>
          <div class="step-content"><strong>Bird's Beak Sign (Barium Swallow)</strong><p>Tapering of the distal esophagus. Classic for <strong>Achalasia</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">🌀</div>
          <div class="step-content"><strong>Corkscrew Esophagus (Barium Swallow)</strong><p>Uncoordinated contractions mimicking a corkscrew. Classic for <strong>Diffuse Esophageal Spasm (DES)</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">X</div>
          <div class="step-content"><strong>Double-Bubble Sign (X-Ray)</strong><p>Air in stomach and proximal duodenum with NO distal bowel gas. Classic for <strong>Duodenal Atresia</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">🎯</div>
          <div class="step-content"><strong>Target / Bullseye Sign (Ultrasound)</strong><p>Concentric rings of bowel. The diagnostic modality of choice for pediatric <strong>Intussusception</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">🍎</div>
          <div class="step-content"><strong>Apple Core Lesion (Barium Enema/CT)</strong><p>Irregular circumferential narrowing of the colon. Highly suspicious for <strong>Colorectal Carcinoma</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">🪈</div>
          <div class="step-content"><strong>Lead Pipe Colon (X-Ray)</strong><p>Complete loss of haustral markings resulting in a smooth, rigid tube. Classic for chronic <strong>Ulcerative Colitis</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">🧱</div>
          <div class="step-content"><strong>Cobblestone Appearance (Endoscopy)</strong><p>Interspersed areas of normal mucosa surrounded by deep longitudinal ulcerations. Classic for <strong>Crohn's Disease</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">C</div>
          <div class="step-content"><strong>Pericolic Fat Stranding (CT)</strong><p>Inflammation of the fat surrounding the sigmoid colon. The diagnostic procedure of choice for <strong>Acute Diverticulitis</strong>.</p></div>
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

      <div class="exam-trap" style="margin-bottom: 1rem;">
        <strong>⚠️ Exam Trap — Mallory-Weiss vs. Boerhaave:</strong> Both involve vomiting. Mallory-Weiss is a <em>partial</em> mucosal tear (presents with hematemesis). Boerhaave is a <em>transmural</em> esophageal rupture (presents with pneumomediastinum, crepitus, and severe chest pain).
      </div>

      <div class="exam-trap" style="margin-bottom: 1rem;">
        <strong>⚠️ Exam Trap — Gastric vs. Duodenal Ulcers:</strong> Gastric ulcer pain is typically <em>worsened</em> by meals (due to acid secretion). Duodenal ulcer pain is typically <em>relieved</em> by meals (due to alkaline pancreatic secretions) but wakes the patient at night.
      </div>

      <div class="clinical-pearl" style="margin-bottom: 1rem;">
        <strong>🔑 Clinical Pearl — Rectal Prolapse:</strong> While commonly caused by acute diarrhea or constipation/straining, a recurrent rectal prolapse in a child is a classic presentation of <strong>Cystic Fibrosis</strong> (due to bulky, malabsorbed stools and coughing fits). Always order a Sweat Chloride test!
      </div>

      <div class="clinical-pearl" style="margin-bottom: 1rem;">
        <strong>🔑 Clinical Pearl — Inguinal Hernias:</strong> "MDs don't LIe." Medial to the inferior epigastric vessels = Direct hernia. Lateral to the inferior epigastric vessels = Indirect hernia.
      </div>
      
      <div class="clinical-pearl" style="margin-bottom: 1rem;">
        <strong>🔑 Clinical Pearl — FPIES vs. Anaphylaxis:</strong> FPIES causes profound vomiting and shock-like lethargy 2-4 hours after food ingestion (like Cow's Milk), but lacks the classic IgE signs like hives, wheezing, or facial swelling. Epinephrine won't fix it; they need IV fluids!
      </div>
    `
  }
];
