// Upper GIT Disorders - Enhanced Medical Curriculum Database
// With Mnemonics, Clinical Pearls, Exam Traps, Visual Analogies, and Memory Hooks
const lessonsData = [
  // ============================================================
  // LESSON 1: GERD
  // ============================================================
  {
    id: "gerd",
    title: "Gastroesophageal Reflux Disease (GERD)",
    difficulty: "medium",
    organ: "Esophagus",
    readTime: "12 min",
    definition: "Reflux of gastric contents into the esophagus, oropharynx, and/or respiratory tract, sufficient to cause troublesome symptoms (impairing quality of life) and/or complications (injury).",
    keyPoints: [
      "ERD (Erosive) vs. NERD (Non-Erosive) — endoscopy differentiates them.",
      "LA Classification grades mucosal breaks A→D (increasing severity).",
      "Barrett's Esophagus = premalignant metaplasia → 30-50x adenocarcinoma risk.",
      "24-hr pH-impedance = MOST specific test. PPI Test = best initial approach.",
      "PPI before breakfast is the drug of choice — 8-week course."
    ],
    epidemiology: `
      <div class="quick-recall">
        <div class="recall-item">
          <span class="recall-label">Western Prevalence</span>
          <span class="recall-value">10-20% of population</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Barrett's in GERD</span>
          <span class="recall-value">10-15% of chronic cases</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Barrett's in General Pop.</span>
          <span class="recall-value">1-2%</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">EAC Risk from BE</span>
          <span class="recall-value">~0.5% per year</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Neonatal Reflux</span>
          <span class="recall-value">Physiological (self-resolves)</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Barrett's Screening (Men)</span>
          <span class="recall-value">Chronic GERD + &gt;50yrs, central obesity, smoking</span>
        </div>
      </div>
    `,
    pathophysiology: `
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> The LES is the <em>"gatecrasher guard"</em> at the stomach's entrance. When the guard falls asleep (transient LES relaxation), gets weak (low tone), or the crowd pushes too hard (increased intra-abdominal pressure), acid "gate-crashes" backwards into the esophagus.
      </div>

      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "GERD FLASH" — Factors Leading to Reflux</div>
        <div class="mnemonic-letter">G</div><div class="mnemonic-expansion"><strong>Gastric contents</strong> — Acid (HCl), pepsin, bile, food</div>
        <div class="mnemonic-letter">E</div><div class="mnemonic-expansion"><strong>Emptying delayed</strong> — Gastroparesis (e.g., in diabetics)</div>
        <div class="mnemonic-letter">R</div><div class="mnemonic-expansion"><strong>Relaxation of LES</strong> — Transient or permanent incompetence</div>
        <div class="mnemonic-letter">D</div><div class="mnemonic-expansion"><strong>Diaphragmatic defect</strong> — Hiatal hernia displaces LES above diaphragm</div>
        <div class="mnemonic-letter">F</div><div class="mnemonic-expansion"><strong>Fat (Obesity)</strong> — Increases intra-abdominal pressure</div>
        <div class="mnemonic-letter">L</div><div class="mnemonic-expansion"><strong>Lifestyle</strong> — Smoking, stress, heavy meals, lying down after eating</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Acid pocket</strong> — Post-prandial unbuffered acid layer in upper stomach</div>
        <div class="mnemonic-letter">S</div><div class="mnemonic-expansion"><strong>Shape of stomach</strong> — Anatomical gastric shape variations</div>
        <div class="mnemonic-letter">H</div><div class="mnemonic-expansion"><strong>Hernia (Hiatal)</strong> — Most important anatomical factor</div>
      </div>

      <h3>Pathophysiology Table</h3>
      <table class="comparison-highlight">
        <thead>
          <tr><th>Factor Type</th><th>Clinical Elements</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>LES Dysfunction</strong></td><td>Incompetence, transient relaxation, or loss of resting tone (&lt;20 mmHg)</td></tr>
          <tr><td><strong>Anatomical</strong></td><td>Hiatal hernia (most important), anorectal site of LES, altered gastric shape</td></tr>
          <tr><td><strong>Gastric Acid Pocket</strong></td><td>Post-prandial unbuffered acid layer sitting in the upper stomach (key concept!)</td></tr>
          <tr><td><strong>Clearing Defect</strong></td><td>Impaired esophageal acid clearance (peristalsis + saliva + gravity)</td></tr>
          <tr><td><strong>Other Triggers</strong></td><td>Obesity, smoking, delayed gastric emptying, medications (CCBs, nitrates), pregnancy</td></tr>
        </tbody>
      </table>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl:</strong> The LES is protected by <strong>four mechanisms</strong> — its <em>Length</em>, <em>Pressure</em>, <em>Relaxation pattern</em>, and <em>Anatomical site</em> (intra-abdominal portion). A hiatal hernia disrupts the anatomical positioning, which is why it's the single most important anatomical risk factor.
      </div>
    `,
    presentation: `
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "GERD CHOW" — Classic Esophageal Symptoms</div>
        <div class="mnemonic-letter">C</div><div class="mnemonic-expansion"><strong>Chest pain</strong> — Mimics cardiac angina (non-cardiac chest pain in 60%)</div>
        <div class="mnemonic-letter">H</div><div class="mnemonic-expansion"><strong>Heartburn</strong> — Retrosternal burning (NOT related to disease severity!)</div>
        <div class="mnemonic-letter">O</div><div class="mnemonic-expansion"><strong>Odynophagia</strong> — Pain on swallowing (if erosive/ulcerative)</div>
        <div class="mnemonic-letter">W</div><div class="mnemonic-expansion"><strong>Water brash</strong> — Sudden hypersalivation triggered by reflux</div>
      </div>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Heartburn ≠ Severity!</strong> Students often assume severe heartburn means severe esophagitis. In reality, heartburn severity does NOT correlate with endoscopic damage. A patient with crippling heartburn may have a completely normal endoscopy (NERD), while a patient with Barrett's may have minimal symptoms.
      </div>

      <h3>Extra-Esophageal Manifestations</h3>

      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "LACED" — Extra-Esophageal Symptoms</div>
        <div class="mnemonic-letter">L</div><div class="mnemonic-expansion"><strong>Laryngitis</strong> — Most common ENT complication (hoarseness in 10%)</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Asthma & Aspiration</strong> — Chronic cough, aspiration pneumonia, sleep apnea</div>
        <div class="mnemonic-letter">C</div><div class="mnemonic-expansion"><strong>Chronic cough</strong> — Persistent dry cough, especially nocturnal</div>
        <div class="mnemonic-letter">E</div><div class="mnemonic-expansion"><strong>Enamel erosion</strong> — Dental damage from chronic acid exposure</div>
        <div class="mnemonic-letter">D</div><div class="mnemonic-expansion"><strong>Dysphonia & Damage</strong> — Vocal cord granulomas, subglottic stenosis</div>
      </div>

      <div class="memory-hook">
        <strong>🪝 Memory Hook:</strong> <em>"GERD doesn't just burn the esophagus — it climbs up to attack the lungs, voice, ears, and teeth."</em> Think of acid as a thief that sneaks upward: first the esophagus (heartburn), then the throat (laryngitis), then the lungs (asthma/cough), then the mouth (dental erosion).
      </div>

      <h3>Quality of Life Impact</h3>
      <ul>
        <li><strong>75%</strong> of GERD patients report sleep disruption.</li>
        <li><strong>40%</strong> say nighttime heartburn impairs next-day functioning.</li>
        <li>Inability to enjoy meals, reduced productivity, and altered emotional/social well-being.</li>
      </ul>
    `,
    diagnostics: `
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content">
            <strong>Empirical PPI Trial (First Step)</strong>
            <p>High-dose PPI before breakfast × 8 weeks. <strong>Improvement = diagnosis confirmed.</strong> No improvement → proceed to investigations.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content">
            <strong>Upper Endoscopy (EGD)</strong>
            <p>Tool of choice for structural assessment. Differentiates ERD vs NERD. Grades erosions (LA Classification). Rules out Barrett's, strictures, and cancer via biopsy.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content">
            <strong>24-Hour pH-Impedance Monitoring</strong>
            <p><strong>MOST SPECIFIC TEST (Gold Standard).</strong> Indicated for: NERD, normal endoscopy, pre-operative evaluation, and refractory symptoms.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content">
            <strong>Barium Swallow (Esophagram)</strong>
            <p>Reserved for dysphagia patients. Identifies strictures and hiatal hernias. <em>No role for US or CT</em> (they cannot capture dynamic reflux).</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">5</div>
          <div class="step-content">
            <strong>Esophageal Manometry</strong>
            <p>Evaluates LES pressure and esophageal motility. Essential pre-operatively before anti-reflux surgery.</p>
          </div>
        </div>
      </div>

      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "WALDO" — Alarm Features Requiring Urgent Endoscopy</div>
        <div class="mnemonic-letter">W</div><div class="mnemonic-expansion"><strong>Weight loss</strong> — Unintentional, progressive</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Anemia</strong> — Iron deficiency (occult GI blood loss)</div>
        <div class="mnemonic-letter">L</div><div class="mnemonic-expansion"><strong>Late onset</strong> — Age &gt;55 with new-onset symptoms</div>
        <div class="mnemonic-letter">D</div><div class="mnemonic-expansion"><strong>Dysphagia</strong> — Progressive difficulty swallowing</div>
        <div class="mnemonic-letter">O</div><div class="mnemonic-expansion"><strong>Odynophagia & Overt bleeding</strong> — Hematemesis, melena, coffee-ground emesis</div>
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — LA Classification Made Simple:</strong> Grade <strong>A</strong> = mucosal break &lt;5mm; <strong>B</strong> = &gt;5mm but not merging across folds; <strong>C</strong> = continuous breaks between folds but &lt;75% circumference; <strong>D</strong> = &gt;75% circumference. <em>Think: A=tiny, B=bigger, C=connected, D=devastating.</em>
      </div>

      <div class="step-flow" style="margin-top: 1rem;">
        <div class="step-item">
          <div class="step-number">Prog</div>
          <div class="step-content">
            <strong>Barrett's Progression Pathway</strong>
            <p>Non-dysplastic BE (NDBE) → Low-grade dysplasia (LGD) → High-grade dysplasia (HGD) → Intramucosal carcinoma (IMC) → Invasive Esophageal Adenocarcinoma (EAC).</p>
          </div>
        </div>
      </div>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Barium vs Endoscopy:</strong> Never order a barium swallow to "diagnose GERD." Barium is only for evaluating <em>dysphagia</em> or suspected strictures. Endoscopy is the initial structural test, and pH monitoring is the definitive functional test. Also: US and CT have <strong>no role</strong> in GERD diagnosis.
      </div>
    `,
    management: `
      <h3>Step 1: Lifestyle Modifications</h3>
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "LESS GERD" — Lifestyle Changes</div>
        <div class="mnemonic-letter">L</div><div class="mnemonic-expansion"><strong>Lose weight</strong> — Obesity is a major modifiable risk factor</div>
        <div class="mnemonic-letter">E</div><div class="mnemonic-expansion"><strong>Elevate head of bed</strong> — 6-8 inches, for nocturnal reflux</div>
        <div class="mnemonic-letter">S</div><div class="mnemonic-expansion"><strong>Stop smoking & alcohol</strong> — Both lower LES pressure</div>
        <div class="mnemonic-letter">S</div><div class="mnemonic-expansion"><strong>Skip late-night meals</strong> — Avoid eating 3 hrs before sleeping</div>
        <div class="mnemonic-letter">G</div><div class="mnemonic-expansion"><strong>Go small</strong> — Smaller, more frequent meals</div>
        <div class="mnemonic-letter">E</div><div class="mnemonic-expansion"><strong>Eliminate triggers</strong> — Fatty foods, chocolate, caffeine, citrus, mint</div>
        <div class="mnemonic-letter">R</div><div class="mnemonic-expansion"><strong>Review medications</strong> — CCBs, nitrates, anticholinergics lower LES tone</div>
        <div class="mnemonic-letter">D</div><div class="mnemonic-expansion"><strong>Don't lie flat</strong> — Use gravity to your advantage</div>
      </div>

      <h3>Step 2: Pharmacotherapy</h3>
      <table class="comparison-highlight">
        <thead>
          <tr><th>Drug Class</th><th>Examples</th><th>Key Points</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>PPIs (First-Line)</strong></td><td>Omeprazole, Esomeprazole, Rabeprazole, Pantoprazole, Lansoprazole</td><td>Take 30-60 min <strong>before breakfast</strong>. Standard dose × 8 weeks. Drug of Choice.</td></tr>
          <tr><td><strong>P-CABs (Next-Gen)</strong></td><td>Vonoprazan, Tegoprazan, Fexuprazan</td><td>Potassium-Competitive Acid Blockers. Faster, longer, and more potent than PPIs. Reversible pump binding.</td></tr>
          <tr><td><strong>H2-Blockers</strong></td><td>Famotidine, Ranitidine</td><td>Useful for nocturnal acid breakthrough. Less effective than PPIs for healing.</td></tr>
          <tr><td><strong>Antacids</strong></td><td>Magnesium hydroxide, Calcium carbonate</td><td>Rapid symptomatic relief only. No healing effect.</td></tr>
          <tr><td><strong>Alginates</strong></td><td>Gaviscon</td><td>Forms a protective raft over the gastric acid pocket. Rapid action.</td></tr>
          <tr><td><strong>Prokinetics</strong></td><td>Metoclopramide, Domperidone</td><td>Improve gastric emptying. Adjunctive role only.</td></tr>
        </tbody>
      </table>

      <div class="memory-hook">
        <strong>🪝 Memory Hook:</strong> <em>"PPIs work best on an empty stomach because they need acid to activate. Think: the PPI is a sleeping soldier that wakes up when acid attacks — so give it before the meal starts the acid factory."</em>
      </div>

      <h3>Step 3: Complication Management</h3>
      <ul>
        <li><strong>Erosive Esophagitis:</strong> PPIs heal &gt;90% within 8 weeks. Endoscopic hemostasis if actively bleeding.</li>
        <li><strong>Strictures:</strong> Endoscopic balloon dilatation ± self-expandable stents.</li>
        <li><strong>Barrett's Esophagus:</strong></li>
      </ul>

      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content">
            <strong>No Dysplasia</strong>
            <p>Once-daily PPI chemoprevention. Surveillance endoscopy every 3-5 years. <strong>No ablation.</strong></p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content">
            <strong>Nodular Lesion</strong>
            <p>Endoscopic Mucosal Resection (EMR) for both diagnosis and therapy.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content">
            <strong>Low-Grade Dysplasia (LGD)</strong>
            <p>Endoscopic ablation (Radiofrequency Ablation = RFA) is the procedure of choice.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content">
            <strong>High-Grade Dysplasia (HGD) / Intramucosal Carcinoma</strong>
            <p>EMR of visible lesions → then RFA of remaining Barrett's segment.</p>
          </div>
        </div>
      </div>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Barrett's Management:</strong> Do NOT routinely ablate non-dysplastic Barrett's — the cancer progression risk is only ~0.5%/year, so ablation is not justified. Also: Aspirin/NSAIDs should NOT be prescribed routinely for cancer chemoprevention in Barrett's.
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — Barrett's Screening:</strong> Screen <strong>men only</strong> with chronic (&gt;5yr) GERD plus ≥2 risk factors (age &gt;50, Caucasian, central obesity, smoking, family history). Screening in <strong>females is NOT recommended</strong> due to substantially lower EAC risk. General population screening is also NOT recommended.
      </div>
    `,
    caseStudy: {
      profile: "Chronic GERD with erosive esophagitis",
      history: "A 48-year-old obese male smoker complains of retrosternal burning pain and acidic regurgitation for 6 years, worsening at night and after large meals. He has been taking OTC antacids with only temporary relief. He denies weight loss, dysphagia, or GI bleeding. He sleeps flat on his bed.",
      investigations: "Upper endoscopy reveals multiple linear mucosal breaks >5mm that do not merge between folds (LA Grade B). Biopsies show no dysplasia or intestinal metaplasia. H. pylori rapid urease test is negative.",
      questionsAnswers: [
        { q: "What is the initial pharmacological management?", a: "Start standard-dose PPI (e.g., Omeprazole 20mg or Esomeprazole 40mg) once daily, taken 30-60 minutes before breakfast for 8 weeks. Add aggressive lifestyle modifications: weight loss, smoking cessation, head-of-bed elevation, avoid eating 3 hours before sleep." },
        { q: "If symptoms improve, what's the next step?", a: "Step-down therapy: reduce to the lowest effective PPI dose for maintenance. If symptoms recur, return to standard dose. If symptoms DON'T improve after 8 weeks, switch to a different PPI and consider double-dose or adding a bedtime H2-blocker." },
        { q: "What is the significance of the negative biopsy?", a: "The negative biopsy excludes Barrett's Esophagus (no intestinal metaplasia/goblet cells) and esophageal malignancy. This confirms benign erosive reflux disease (LA Grade B) requiring medical management, not surveillance endoscopy." }
      ]
    },
    mcqs: [
      {
        question: "A 55-year-old male with chronic GERD undergoes endoscopy revealing salmon-colored mucosa extending 3 cm above the GEJ. Biopsy shows columnar epithelium with goblet cells. What is the diagnosis?",
        options: [ "Erosive Esophagitis (LA Grade C)", "Barrett's Esophagus", "Esophageal Adenocarcinoma", "Eosinophilic Esophagitis" ],
        answerIndex: 1,
        explanation: "Barrett's Esophagus is diagnosed when ≥1 cm of the distal squamous epithelium has been replaced by metaplastic columnar epithelium (with goblet cells = intestinal metaplasia) visible endoscopically above the GEJ and confirmed histologically."
      },
      {
        question: "Which is the MOST SPECIFIC diagnostic test for GERD in a patient with typical symptoms but a normal endoscopy (NERD)?",
        options: [ "Barium Swallow", "Abdominal CT Scan", "24-Hour Ambulatory pH-Impedance Monitoring", "Esophageal Manometry" ],
        answerIndex: 2,
        explanation: "24-hour ambulatory pH-impedance monitoring is the gold standard and most specific test for GERD, especially when endoscopy is normal (NERD). It measures both acid and non-acid reflux episodes, correlating them with symptoms."
      },
      {
        question: "A patient with GERD is advised on lifestyle modifications. Which of the following is INCORRECT advice?",
        options: [ "Elevate the head of the bed by 6-8 inches", "Avoid meals within 3 hours of bedtime", "Drink a glass of milk before sleep to neutralize acid", "Lose weight if BMI is elevated" ],
        answerIndex: 2,
        explanation: "Drinking milk before sleep is a common myth. While milk briefly buffers acid, the calcium and protein content subsequently STIMULATE more acid secretion (rebound effect), worsening nocturnal reflux."
      }
    ]
  },
  // ============================================================
  // LESSON 2: PUD
  // ============================================================
  {
    id: "pud",
    title: "Peptic Ulcer Disease (PUD)",
    difficulty: "hard",
    organ: "Stomach & Duodenum",
    readTime: "14 min",
    definition: "A disruption of the mucosal integrity of the stomach (Gastric Ulcer) or duodenum (Duodenal Ulcer) extending through the muscularis mucosae, leading to a local defect or excavation due to active inflammation.",
    keyPoints: [
      "Duodenal ulcers = 4× more common, rarely malignant, peak age 30-50, blood group O.",
      "Gastric ulcers = can be malignant (<1%), peak age 50-60, blood group A — ALWAYS biopsy.",
      "H. pylori: 95% of DU, 80% of GU. NSAIDs: the other major cause.",
      "14-day Triple Therapy: PPI + Clarithromycin + Amoxicillin (or Metronidazole if PCN allergy).",
      "H. pylori eradication REDUCES recurrence dramatically (from >70% to <10%)."
    ],
    epidemiology: `
      <div class="quick-recall">
        <div class="recall-item">
          <span class="recall-label">US Lifetime Prevalence</span>
          <span class="recall-value">~10%</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Annual US Incidence</span>
          <span class="recall-value">4.5 million cases</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">DU:GU Ratio</span>
          <span class="recall-value">4:1</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Bleeding Rate</span>
          <span class="recall-value">15-20% of cases</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Mortality Trend</span>
          <span class="recall-value">~1/100,000 (↓ dramatically)</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">H. pylori Etiology</span>
          <span class="recall-value">DU: 92%, GU: 70%</span>
        </div>
      </div>

      <h3>Duodenal vs. Gastric Ulcers — The Classic Showdown</h3>
      <table class="comparison-highlight">
        <thead>
          <tr><th>Feature</th><th>🔵 Duodenal Ulcer (DU)</th><th>🔴 Gastric Ulcer (GU)</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Frequency</strong></td><td>4× more common</td><td>Less common</td></tr>
          <tr><td><strong>Peak Age</strong></td><td>30-50 years</td><td>50-60 years</td></tr>
          <tr><td><strong>Gender Ratio (M:F)</strong></td><td>4:1</td><td>2:1</td></tr>
          <tr><td><strong>Blood Group</strong></td><td>Group <strong>O</strong></td><td>Group <strong>A</strong></td></tr>
          <tr><td><strong>H. pylori</strong></td><td>95%</td><td>80%</td></tr>
          <tr><td><strong>Malignancy Risk</strong></td><td>Almost never</td><td>&lt;1% (always biopsy!)</td></tr>
          <tr><td><strong>Pain & Food</strong></td><td>Relieved by food ("hungry pain")</td><td>Exacerbated by food</td></tr>
          <tr><td><strong>Night Pain</strong></td><td>Classic — wakes patient at 2-3 AM</td><td>Less common</td></tr>
          <tr><td><strong>Weight Change</strong></td><td>May gain weight (eats to relieve pain)</td><td>Weight loss (avoids food)</td></tr>
        </tbody>
      </table>

      <div class="memory-hook">
        <strong>🪝 Memory Hook — DU vs GU Pain Pattern:</strong> <em>"Duodenal ulcer patient is HUNGRY — eating makes the pain go away. Gastric ulcer patient is AFRAID OF FOOD — eating makes it worse."</em> This is because food buffers duodenal acid but stimulates gastric acid production directly at the ulcer site.
      </div>
    `,
    pathophysiology: `
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> The stomach lining is a <em>castle wall</em> defended by mucus (the moat), bicarbonate (the archers), prostaglandins (the reinforcements), and blood flow (the supply line). <strong>H. pylori</strong> is the enemy tunneling underneath the wall, while <strong>NSAIDs</strong> cut off the supply of reinforcements (prostaglandins) by blocking COX enzymes.
      </div>

      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "MAPS" — Mucosal Protective Factors</div>
        <div class="mnemonic-letter">M</div><div class="mnemonic-expansion"><strong>Mucus</strong> — Viscous protective coating (first physical barrier)</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Adequate blood flow</strong> — Mucosal perfusion clears acid and delivers nutrients</div>
        <div class="mnemonic-letter">P</div><div class="mnemonic-expansion"><strong>Prostaglandins</strong> — PGE₂ and PGI₂ stimulate mucus, bicarbonate, and blood flow</div>
        <div class="mnemonic-letter">S</div><div class="mnemonic-expansion"><strong>Surface bicarbonate</strong> — Creates alkaline pH gradient at mucosal surface</div>
      </div>

      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "NSAID SAPS" — How NSAIDs Damage</div>
        <div class="mnemonic-letter">S</div><div class="mnemonic-expansion"><strong>Suppresses</strong> COX-1 and COX-2</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Abolishes</strong> prostaglandin synthesis</div>
        <div class="mnemonic-letter">P</div><div class="mnemonic-expansion"><strong>Prostaglandin-deprived</strong> mucosa: less mucus, less bicarbonate, less blood flow</div>
        <div class="mnemonic-letter">S</div><div class="mnemonic-expansion"><strong>Stomach exposed</strong> to acid attack → ulceration</div>
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl:</strong> H. pylori is a <strong>Gram-negative spiral bacterium</strong> that produces <strong>urease</strong> (converts urea to ammonia + CO₂, creating an alkaline microenvironment to survive stomach acid). Its toxins (CagA, VacA) cause chronic active gastritis. Urease production is the basis of the Urea Breath Test and Rapid Urease Test.
      </div>

      <h3>Patterns of Gastritis</h3>
      <table class="comparison-highlight" style="margin-bottom: 1rem;">
        <thead>
          <tr><th>Pattern</th><th>Acid Output</th><th>Risk</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Antrum-predominant</strong></td><td>Increased</td><td>Duodenal Ulcer</td></tr>
          <tr><td><strong>Pan-gastritis</strong> (with atrophy)</td><td>Reduced or Normal</td><td>Gastric Ulcer</td></tr>
        </tbody>
      </table>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — "Why is the small intestine the LEAST likely GI site for cancer?"</strong> Because it has the highest concentration of lymphoid tissue (Peyer's patches, GALT) = high local immune surveillance. This is a common MCQ!
      </div>
    `,
    presentation: `
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "PANG" — PUD Presentation</div>
        <div class="mnemonic-letter">P</div><div class="mnemonic-expansion"><strong>Pain</strong> — Epigastric, gnawing/burning, may radiate to back</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Appetite changes</strong> — DU: eats more (hungry pain); GU: eats less (food worsens pain)</div>
        <div class="mnemonic-letter">N</div><div class="mnemonic-expansion"><strong>Nausea & Vomiting</strong> — More common with gastric ulcers</div>
        <div class="mnemonic-letter">G</div><div class="mnemonic-expansion"><strong>GI bleeding</strong> — Hematemesis (coffee-ground or fresh) or melena (black tarry stools)</div>
      </div>

      <h3>Complications — The "4 Ps" of PUD Danger</h3>
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "PPBO" — PUD Complications</div>
        <div class="mnemonic-letter">P</div><div class="mnemonic-expansion"><strong>Perforation</strong> — Sudden severe abdominal pain, board-like rigidity, free air on X-ray</div>
        <div class="mnemonic-letter">P</div><div class="mnemonic-expansion"><strong>Penetration</strong> — Ulcer erodes into adjacent organ (pancreas, liver, retroperitoneum)</div>
        <div class="mnemonic-letter">B</div><div class="mnemonic-expansion"><strong>Bleeding</strong> — 15-20% of cases. Accounts for 25% of ulcer deaths. Most common complication.</div>
        <div class="mnemonic-letter">O</div><div class="mnemonic-expansion"><strong>Obstruction</strong> — Gastric outlet obstruction from edema/scarring at pylorus. Projectile vomiting of undigested food.</div>
      </div>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — DU Pain Timing:</strong> Duodenal ulcer pain classically occurs <strong>1-3 hours AFTER meals</strong> ("hungry pain") and <strong>wakes the patient at night</strong> (2-3 AM). It is RELIEVED by food. If a question says "pain worsened by food" → think Gastric Ulcer, not Duodenal.
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl:</strong> A patient with PUD who suddenly develops <strong>severe generalized abdominal pain with rebound tenderness and board-like rigidity</strong> → suspect <strong>perforation</strong>. Immediate action: upright chest X-ray (free air under diaphragm = pneumoperitoneum), NPO, IV fluids, surgical consultation.
      </div>
    `,
    diagnostics: `
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content">
            <strong>Upper GI Endoscopy (EGD) — Gold Standard</strong>
            <p>Direct visualization + biopsy (to rule out gastric cancer) + rapid urease test (for H. pylori). Essential for any patient &gt;55 with new symptoms or alarm features.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content">
            <strong>H. pylori Testing</strong>
            <p>Choose the right test for the right situation (see table below).</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content">
            <strong>Basic Labs</strong>
            <p>CBC (anemia from chronic blood loss), liver function tests, amylase/lipase (rule out pancreatic penetration).</p>
          </div>
        </div>
      </div>

      <h3>H. pylori Diagnostic Tests — Know the Differences!</h3>
      <table class="comparison-highlight">
        <thead>
          <tr><th>Test</th><th>Type</th><th>Best For</th><th>Key Pitfall</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Urea Breath Test (UBT)</strong></td><td>Non-invasive, Active</td><td>Initial diagnosis & post-treatment verification</td><td>Wait ≥4 weeks after antibiotics, ≥2 weeks after PPIs to avoid false negatives</td></tr>
          <tr><td><strong>Stool Antigen Assay</strong></td><td>Non-invasive, Active</td><td>Preferred for post-treatment testing</td><td>Wait ≥8 weeks after therapy</td></tr>
          <tr><td><strong>Serology (Antibody)</strong></td><td>Non-invasive, Non-active</td><td>Epidemiological screening</td><td>Cannot distinguish active from past infection (stays positive for years)</td></tr>
          <tr><td><strong>Rapid Urease Test (CLOtest)</strong></td><td>Invasive (biopsy)</td><td>During endoscopy</td><td>Requires mucosal biopsy sample</td></tr>
        </tbody>
      </table>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Serology Trap:</strong> A positive H. pylori <strong>serology (antibody test)</strong> does NOT mean active infection! Antibodies persist for months to years after eradication. For active infection confirmation, use UBT or stool antigen. This is a very common MCQ trap.
      </div>
    `,
    management: `
      <h3>H. pylori Eradication — 14-Day Triple Therapy</h3>
      <table class="comparison-highlight">
        <thead>
          <tr><th>Component</th><th>Standard Regimen</th><th>PCN Allergy Alternative</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>PPI</strong></td><td>Omeprazole 20mg BID (or any PPI equivalent)</td><td>Same</td></tr>
          <tr><td><strong>Antibiotic 1</strong></td><td>Clarithromycin 500mg BID</td><td>Clarithromycin 500mg BID</td></tr>
          <tr><td><strong>Antibiotic 2</strong></td><td>Amoxicillin 1g BID</td><td><strong>Metronidazole 500mg BID</strong></td></tr>
        </tbody>
      </table>

      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "PCA-14" — Triple Therapy</div>
        <div class="mnemonic-letter">P</div><div class="mnemonic-expansion"><strong>PPI</strong> — Proton pump inhibitor (any, BID)</div>
        <div class="mnemonic-letter">C</div><div class="mnemonic-expansion"><strong>Clarithromycin</strong> — 500mg BID</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Amoxicillin</strong> — 1g BID (swap to Metronidazole if PCN-allergic)</div>
        <div class="mnemonic-letter">14</div><div class="mnemonic-expansion"><strong>14 days</strong> — The treatment duration</div>
      </div>

      <div class="memory-hook">
        <strong>🪝 Memory Hook:</strong> <em>"PCA = Patient Care Always for 14 days."</em> PPI + Clarithromycin + Amoxicillin × 14 days. If they're allergic to Amoxicillin (penicillin), swap the "A" to "M" (Metronidazole).
      </div>

      <h3>Non-H. pylori PUD (NSAID-Induced)</h3>
      <ul>
        <li><strong>Step 1:</strong> Discontinue NSAIDs immediately. Use Acetaminophen for pain instead.</li>
        <li><strong>Step 2:</strong> Treat with PPI for 4-8 weeks.</li>
        <li><strong>Step 3 (Prophylaxis):</strong> If NSAIDs must be continued: daily PPI or Misoprostol (PGE₁ analogue, 100-200 mcg QID).</li>
      </ul>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — Misoprostol Warning:</strong> Misoprostol (Cytotec) is a prostaglandin analogue that protects the stomach lining, but it is <strong>absolutely contraindicated in pregnancy</strong> because it causes uterine contractions and can induce abortion. Always verify pregnancy status before prescribing.
      </div>

      <h3>Surgical Options (Refractory/Complicated PUD)</h3>
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "VAP" — Surgical Interventions</div>
        <div class="mnemonic-letter">V</div><div class="mnemonic-expansion"><strong>Vagotomy</strong> — Cut vagus nerve → reduce acid secretion stimulus from the brain</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Antrectomy</strong> — Remove antrum → eliminate gastrin-producing cells</div>
        <div class="mnemonic-letter">P</div><div class="mnemonic-expansion"><strong>Pyloroplasty</strong> — Widen pylorus → improve gastric emptying (often combined with vagotomy)</div>
      </div>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Post-Surgical Complications:</strong> Be alert for Dumping syndrome (rapid gastric emptying), Bile reflux gastritis, anastomotic ulcers, and nutritional deficiencies (Vitamin B12, iron, calcium) after partial gastrectomy.
      </div>

      <h3>Follow-Up After Treatment</h3>
      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Post-Treatment Testing Timing:</strong>
        <ul>
          <li><strong>Urea Breath Test:</strong> Wait at least <strong>4 weeks</strong> after completing therapy.</li>
          <li><strong>Stool Antigen:</strong> Wait at least <strong>8 weeks</strong> after completing therapy.</li>
          <li>PPIs must be stopped ≥2 weeks before testing (they suppress H. pylori, causing false negatives).</li>
        </ul>
      </div>
    `,
    caseStudy: {
      profile: "Classic Duodenal Ulcer presentation",
      history: "A 35-year-old female presents with 3 weeks of burning epigastric pain that occurs 2 hours after lunch and frequently wakes her up at 2 AM. The pain is consistently relieved when she eats a snack or takes an antacid. She denies vomiting, weight loss, or melena. She takes ibuprofen occasionally for headaches. She has a family history of PUD.",
      investigations: "Physical exam reveals mild epigastric tenderness with no guarding or rebound. CBC is normal. Stool antigen test is positive for H. pylori.",
      questionsAnswers: [
        { q: "What type of ulcer does this clinical picture suggest and why?", a: "Classic Duodenal Ulcer. The pattern is textbook: pain on an empty stomach (2h after meals), nocturnal awakening (2 AM), and relief with food/antacids. This \"hungry pain\" pattern occurs because food buffers duodenal acid temporarily — once the buffer clears, acid exposure resumes." },
        { q: "What is the complete treatment plan?", a: "14-day Triple Therapy: PPI (e.g., Omeprazole 20mg BID) + Clarithromycin 500mg BID + Amoxicillin 1g BID. Also: stop ibuprofen and use acetaminophen instead. Continue PPI for an additional 2 weeks after triple therapy to ensure complete healing." },
        { q: "How and when should you verify successful eradication?", a: "Perform a Urea Breath Test no sooner than 4 weeks after completing antibiotic therapy, and ensure PPIs have been stopped for at least 2 weeks before the test. Alternatively, a stool antigen test can be done 8 weeks after therapy." }
      ]
    },
    mcqs: [
      {
        question: "The primary clinical benefit of H. pylori eradication in duodenal ulcer disease is to:",
        options: [ "Provide immediate symptomatic relief within hours", "Dramatically reduce the rate of ulcer recurrence", "Prevent all future gastric malignancies", "Eliminate the need for any follow-up" ],
        answerIndex: 1,
        explanation: "While eradication aids healing, its greatest impact is reducing ulcer recurrence from >70% to <10%. It does NOT provide immediate relief (PPIs handle that) and does NOT eliminate follow-up needs."
      },
      {
        question: "A patient allergic to penicillin requires H. pylori eradication. What modification is made to standard triple therapy?",
        options: [ "Substitute Tetracycline for Clarithromycin", "Substitute Metronidazole for Amoxicillin", "Substitute Bismuth for the PPI", "Double the dose of Clarithromycin" ],
        answerIndex: 1,
        explanation: "For penicillin-allergic patients, Metronidazole 500mg BID replaces Amoxicillin in the triple therapy regimen. The PPI and Clarithromycin remain unchanged."
      },
      {
        question: "H. pylori is associated with an increased risk of which of the following?",
        options: [ "Esophageal Adenocarcinoma and Colonic Carcinoma", "MALT Lymphoma and Duodenal Ulcer", "Small Intestine Carcinoma and GERD", "Pancreatic Cancer and Crohn's Disease" ],
        answerIndex: 1,
        explanation: "H. pylori is a WHO Group 1 carcinogen associated with Gastric Adenocarcinoma and gastric MALT Lymphoma. It is also the primary etiological agent in duodenal ulcer disease (95%)."
      },
      {
        question: "Which feature is MORE characteristic of a GASTRIC ulcer compared to a duodenal ulcer?",
        options: [ "Pain relieved by eating", "Association with blood group O", "Weight loss and food avoidance", "Nocturnal pain awakening the patient" ],
        answerIndex: 2,
        explanation: "Gastric ulcer pain is typically WORSENED by food, leading to food avoidance and weight loss. In contrast, duodenal ulcer pain is relieved by food (patients eat more), is associated with blood group O, and classically causes nocturnal pain."
      }
    ]
  },
  // ============================================================
  // LESSON 3: ESOPHAGEAL MOTILITY DISORDERS
  // ============================================================
  {
    id: "motility",
    title: "Esophageal Motility Disorders",
    difficulty: "hard",
    organ: "Esophagus",
    readTime: "13 min",
    definition: "A spectrum of neuromuscular diseases affecting the coordinated peristalsis of the esophageal body and/or the relaxation of the lower esophageal sphincter (LES), presenting with dysphagia and/or chest pain.",
    keyPoints: [
      "Achalasia: failure of LES to relax + aperistalsis in distal 2/3 esophagus.",
      "Barium swallow → 'Bird-beak' appearance = Achalasia. 'Corkscrew' = DES.",
      "Manometry is the GOLD STANDARD for ALL motility disorders.",
      "Scleroderma = aperistalsis + HYPOTENSIVE (incompetent) LES → severe GERD.",
      "Psychotropic drugs (TCAs) are the most effective treatment for spastic motility chest pain."
    ],
    epidemiology: `
      <div class="quick-recall">
        <div class="recall-item">
          <span class="recall-label">Achalasia Incidence</span>
          <span class="recall-value">1-2 per 200,000</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Achalasia Age Range</span>
          <span class="recall-value">25-60 years</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Achalasia Gender</span>
          <span class="recall-value">M = F (↑ in neurotic females)</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Spastic Disorders Peak</span>
          <span class="recall-value">~40 years, F > M</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Avg Delay to Dx (Achalasia)</span>
          <span class="recall-value">2-5 years</span>
        </div>
      </div>
    `,
    pathophysiology: `
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> The esophagus is a <em>one-way conveyor belt</em> that moves food from the throat to the stomach. In <strong>Achalasia</strong>, the conveyor belt motor breaks down (loss of peristalsis) AND the exit door is jammed shut (LES won't relax). In <strong>DES</strong>, the conveyor belt works intermittently but sometimes malfunctions — sections contract all at once (spasm) instead of in sequence. In <strong>Scleroderma</strong>, the conveyor belt rusts and stops moving, AND the exit door falls off its hinges (incompetent LES) — so food sits still AND acid flows back freely.
      </div>

      <h3>Normal Esophageal Function Review</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Voluntary Phase</strong><p>Bolus is pushed into the pharynx (oropharyngeal phase).</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>UES Relaxation</strong><p>Upper esophageal sphincter opens to allow bolus entry.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Primary Peristalsis</strong><p>Sequential contraction wave travels at 3-4 cm/s, stripping the esophagus.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content"><strong>LES Relaxation</strong><p>LES opens to allow bolus entry into the stomach, then closes.</p></div>
        </div>
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — Three Types of Contractions:</strong>
        <ul>
          <li><strong>Primary peristalsis:</strong> Initiated by swallowing. Normal sequential wave.</li>
          <li><strong>Secondary peristalsis:</strong> Triggered by esophageal distension (retained food, reflux). Clears residual material.</li>
          <li><strong>Tertiary contractions:</strong> Simultaneous, non-peristaltic, dysfunctional. NO physiologic role. More common in elderly. Seen in motility disorders.</li>
        </ul>
      </div>

      <h3>Classification: The Big Picture</h3>
      <table class="comparison-highlight">
        <thead>
          <tr><th>Disorder</th><th>LES Pressure</th><th>LES Relaxation</th><th>Peristalsis</th><th>Classic Finding</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Achalasia</strong></td><td>↑ (often &gt;45 mmHg)</td><td><strong>Incomplete ✗</strong></td><td><strong>Absent (Aperistalsis)</strong></td><td>Bird-beak on barium</td></tr>
          <tr><td><strong>DES</strong></td><td>Normal/↑</td><td>Normal</td><td>Simultaneous contractions (&gt;20% swallows)</td><td>Corkscrew esophagus</td></tr>
          <tr><td><strong>Nutcracker</strong></td><td>Normal/↑</td><td>Normal</td><td>High-amplitude (&gt;180 mmHg) peristaltic</td><td>High pressure waves</td></tr>
          <tr><td><strong>Hypertensive LES</strong></td><td><strong>↑↑↑</strong></td><td>Normal</td><td>Normal</td><td>Isolated LES hypertension</td></tr>
          <tr><td><strong>Scleroderma</strong></td><td><strong>↓↓↓ (incompetent)</strong></td><td>Normal (or too lax)</td><td><strong>Absent (distal smooth muscle)</strong></td><td>Severe GERD + aperistalsis</td></tr>
        </tbody>
      </table>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Achalasia vs Scleroderma:</strong> Both cause aperistalsis, but they are <strong>OPPOSITES</strong> at the LES! Achalasia = LES <strong>won't open</strong> (hypertensive, incomplete relaxation). Scleroderma = LES is <strong>wide open</strong> (hypotensive, incompetent). Therefore: Achalasia = dysphagia WITHOUT heartburn. Scleroderma = dysphagia WITH severe heartburn/GERD.
      </div>
    `,
    presentation: `
      <h3>Achalasia Presentation</h3>
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "DROWN" — Achalasia Symptoms</div>
        <div class="mnemonic-letter">D</div><div class="mnemonic-expansion"><strong>Dysphagia</strong> — To BOTH solids AND liquids from onset (90-100%). Liquids noticed first!</div>
        <div class="mnemonic-letter">R</div><div class="mnemonic-expansion"><strong>Regurgitation</strong> — Bland, undigested food (60-90%). Worse when lying down.</div>
        <div class="mnemonic-letter">O</div><div class="mnemonic-expansion"><strong>Odynophagia & chest pain</strong> — Retrosternal pain (33-50%)</div>
        <div class="mnemonic-letter">W</div><div class="mnemonic-expansion"><strong>Weight loss</strong> — Progressive due to food avoidance</div>
        <div class="mnemonic-letter">N</div><div class="mnemonic-expansion"><strong>Nocturnal cough & aspiration</strong> — Food pooling in esophagus → aspiration risk</div>
      </div>

      <div class="memory-hook">
        <strong>🪝 Memory Hook — "Achalasia = Failure to Relax":</strong> <em>The word itself tells you the pathology! "A" (without) + "chalasis" (relaxation). The LES fails to relax. And since the esophageal body also loses peristalsis, food just sits there and pools — leading to regurgitation of BLAND, UNDIGESTED food (no acid = not sour!). This is different from GERD regurgitation which is acidic/sour.</em>
      </div>

      <h3>Spastic Disorders (DES / Nutcracker)</h3>
      <ul>
        <li><strong>Intermittent chest pain:</strong> Can perfectly mimic cardiac angina — always rule out cardiac disease first!</li>
        <li><strong>Intermittent dysphagia:</strong> Non-progressive, to both solids and liquids, often triggered by cold liquids or stress.</li>
        <li><strong>Associated:</strong> Pyrosis (heartburn) in ~20%, IBS symptoms in ~30%.</li>
      </ul>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Achalasia Dysphagia Pattern:</strong> In mechanical obstruction (stricture, cancer), dysphagia starts with SOLIDS, then progresses to liquids. In achalasia, dysphagia is to BOTH solids and liquids FROM THE START because the problem is motility, not physical narrowing. This distinction is a very high-yield exam question.
      </div>
    `,
    diagnostics: `
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content">
            <strong>Barium Esophagram (Swallow) — Great Screening Test</strong>
            <p><strong>Achalasia:</strong> Dilated esophagus with smooth <strong>'bird-beak'</strong> tapering at the GEJ. 95% accuracy.<br>
            <strong>DES:</strong> <strong>'Corkscrew'</strong> or <strong>'rosary-bead'</strong> appearance from simultaneous spasms.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content">
            <strong>Upper Endoscopy (EGD) — Rule Out Pseudo-achalasia</strong>
            <p>Essential to exclude GEJ tumors causing secondary (pseudo) achalasia, especially in patients &gt;60 years with rapid weight loss and short symptom duration.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content">
            <strong>Esophageal Manometry — THE GOLD STANDARD 🥇</strong>
            <p><strong>Achalasia:</strong> Aperistalsis + incomplete LES relaxation (residual pressure &gt;8 mmHg) + resting LES &gt;45 mmHg.<br>
            <strong>DES:</strong> Simultaneous contractions in &gt;20% of wet swallows.<br>
            <strong>Nutcracker:</strong> Mean amplitude &gt;180 mmHg with normal peristalsis.</p>
          </div>
        </div>
      </div>

      <div class="memory-hook">
        <strong>🪝 Memory Hook — Barium Findings:</strong> <em>"Bird's BEAK = achalasia (Both end with 'a'!). CORKSCREW = spasm (both words have multiple curves!)."</em>
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — Pseudo-achalasia Red Flags:</strong> If a patient &gt;60 years presents with <strong>rapid onset</strong> of achalasia-like symptoms (&lt;6 months), significant weight loss, and difficulty passing the endoscope through the GEJ → think <strong>pseudo-achalasia from a GEJ tumor</strong> (often gastric cardia adenocarcinoma). True achalasia has a slow, insidious onset over 2-5 years.
      </div>
    `,
    management: `
      <h3>Achalasia Treatment — Reducing LES Resistance</h3>
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> The jammed exit door can be handled in 4 ways: <em>lubricate it</em> (medications), <em>paralyze the lock</em> (Botox), <em>force it open with pressure</em> (pneumatic dilatation), or <em>cut the lock off</em> (surgical myotomy).
      </div>

      <table class="comparison-highlight">
        <thead>
          <tr><th>Treatment</th><th>Initial Success</th><th>Long-Term Success</th><th>Key Risk/Note</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Pneumatic Dilatation</strong></td><td>60-95%</td><td>60% at 5 years</td><td>1-13% perforation risk. May need repeat sessions.</td></tr>
          <tr><td><strong>Surgical Myotomy (Heller's)</strong></td><td>&gt;90%</td><td>85% at 10 years</td><td>Best long-term outcome. Combined with partial fundoplication to prevent GERD.</td></tr>
          <tr><td><strong>POEM (Peroral Endoscopic Myotomy)</strong></td><td>&gt;90%</td><td>Promising data</td><td>Minimally invasive endoscopic myotomy. Rising as the preferred option.</td></tr>
          <tr><td><strong>Botulinum Toxin (Botox)</strong></td><td>90%</td><td>60% at 1 year (fades)</td><td>Reserved for elderly/frail patients unfit for surgery. Temporary effect.</td></tr>
          <tr><td><strong>Medications (CCBs, Nitrates)</strong></td><td>50-70%</td><td>&lt;50% at 1 year</td><td>Tachyphylaxis and side effects. Last resort only.</td></tr>
        </tbody>
      </table>

      <div class="memory-hook">
        <strong>🪝 Memory Hook — Treatment Hierarchy:</strong> <em>"Best to Worst = Cut it > Blow it > Inject it > Drug it"</em><br>
        Surgical myotomy (POEM/Heller's) &gt; Pneumatic dilatation &gt; Botox injection &gt; Medical therapy. Always choose the most definitive therapy the patient can tolerate.
      </div>

      <h3>Spastic Motility Disorders Treatment</h3>
      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl:</strong> For functional chest pain from spastic motility disorders, <strong>psychotropic medications</strong> (Trazodone, Imipramine, Sertraline) are the MOST effective treatment in controlled studies. Nitrates, CCBs, and anticholinergics are unproven. Reassurance is also a key component.
      </div>
    `,
    caseStudy: {
      profile: "Progressive dysphagia with regurgitation",
      history: "A 42-year-old female presents with a 3-year history of progressive difficulty swallowing both liquids and solids. She notes frequent regurgitation of bland, undigested food at night, accompanied by a chronic dry cough. She has lost 5 kg over the past year. She denies heartburn or acidic taste.",
      investigations: "Barium swallow reveals a massively dilated esophagus ending in a smooth, tapered narrowing (bird-beak). Upper endoscopy shows retained food but normal GEJ mucosa and no mass. Manometry is ordered.",
      questionsAnswers: [
        { q: "What will manometry show to confirm the diagnosis?", a: "Manometry will demonstrate: (1) Complete aperistalsis in the distal esophageal body, (2) Incomplete/absent LES relaxation with elevated residual pressure (>8 mmHg), and (3) Elevated resting LES pressure (often >45 mmHg). This confirms Achalasia." },
        { q: "Why is the absence of heartburn an important clue?", a: "Because the LES is HYPERTENSIVE and fails to relax — acid cannot reflux upward. The regurgitated food is bland and undigested (it never reached the stomach to be acidified). If this patient had heartburn, you'd suspect Scleroderma (incompetent, hypotensive LES) rather than Achalasia." },
        { q: "What are the best treatment options for this patient?", a: "She is young and fit, so definitive therapy is preferred: Laparoscopic Heller's cardiomyotomy with partial fundoplication OR Peroral Endoscopic Myotomy (POEM). Pneumatic dilatation is a good alternative. Botox or medications would be suboptimal for a young patient due to poor long-term efficacy." }
      ]
    },
    mcqs: [
      {
        question: "A barium swallow shows a dilated esophagus with a smooth 'bird-beak' narrowing at the gastroesophageal junction. The most likely diagnosis is:",
        options: [ "Diffuse Esophageal Spasm", "Esophageal Carcinoma", "Achalasia", "Scleroderma" ],
        answerIndex: 2,
        explanation: "The 'bird-beak' sign on barium swallow is pathognomonic for Achalasia — a dilated esophageal body tapering smoothly at the GEJ due to the non-relaxing LES."
      },
      {
        question: "A patient with systemic sclerosis (scleroderma) undergoes esophageal manometry. The expected finding is:",
        options: [ "Extremely high-amplitude peristalsis (>180 mmHg) with hypertensive LES", "Simultaneous spasms in >20% of wet swallows", "Aperistalsis in the distal smooth muscle esophagus with an incompetent, hypotensive LES", "Normal peristalsis with cricopharyngeal dysfunction" ],
        answerIndex: 2,
        explanation: "Scleroderma causes atrophy and fibrosis of distal esophageal smooth muscle → aperistalsis. Unlike achalasia, the LES is HYPOTENSIVE (incompetent), leading to severe GERD."
      },
      {
        question: "Which of the following is the GOLD STANDARD diagnostic test for all esophageal motility disorders?",
        options: [ "Barium Esophagram", "Upper Endoscopy (EGD)", "Esophageal Manometry", "24-hour pH Monitoring" ],
        answerIndex: 2,
        explanation: "Esophageal Manometry directly measures LES pressure, LES relaxation, and peristaltic coordination — making it the definitive diagnostic test for achalasia, DES, nutcracker esophagus, and all other motility disorders."
      }
    ]
  },
  // ============================================================
  // LESSON 4: DYSPEPSIA
  // ============================================================
  {
    id: "dyspepsia",
    title: "Dyspepsia and Indigestion",
    difficulty: "medium",
    organ: "Stomach & Duodenum",
    readTime: "10 min",
    definition: "Predominant epigastric pain or discomfort lasting at least 1 month, which can be associated with symptoms like postprandial fullness, early satiation, nausea, or burning — with no evidence of structural disease to explain the symptoms (in functional dyspepsia).",
    keyPoints: [
      "75-80% of dyspepsia = Functional (no organic cause). Only 20-25% is organic.",
      "Rome IV Criteria: symptoms for ≥3 months (onset ≥6 months ago), no structural disease.",
      "Age ≥60 → Upper Endoscopy. Age <60 → Test-and-Treat H. pylori first.",
      "Carnett's sign: +ve = abdominal WALL pain. -ve = VISCERAL origin.",
      "Treatment ladder: H. pylori eradication → PPI → TCA → Prokinetics."
    ],
    epidemiology: `
      <div class="quick-recall">
        <div class="recall-item">
          <span class="recall-label">Global Prevalence</span>
          <span class="recall-value">~20% of population</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Functional (No Cause Found)</span>
          <span class="recall-value">75-80%</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Organic Causes</span>
          <span class="recall-value">20-25%</span>
        </div>
      </div>
    `,
    pathophysiology: `
      <h3>Organic vs. Functional Dyspepsia</h3>
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> Imagine a car alarm going off. In <strong>organic dyspepsia</strong>, there's actually a thief breaking in (PUD, cancer, GERD). In <strong>functional dyspepsia</strong>, the alarm is malfunctioning — going off for no real reason. The alarm (stomach nerves) is too sensitive, and the car (stomach wall) isn't relaxing properly.
      </div>

      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "PBMG" — Organic Causes of Dyspepsia</div>
        <div class="mnemonic-letter">P</div><div class="mnemonic-expansion"><strong>PUD</strong> — Peptic Ulcer Disease (most common organic cause)</div>
        <div class="mnemonic-letter">B</div><div class="mnemonic-expansion"><strong>Biliary pain</strong> — Gallstones (RUQ, constant pain ≥30 min, radiates to shoulder)</div>
        <div class="mnemonic-letter">M</div><div class="mnemonic-expansion"><strong>Medications</strong> — NSAIDs (most common drug offender), CCBs, SSRIs</div>
        <div class="mnemonic-letter">G</div><div class="mnemonic-expansion"><strong>GI malignancy & GERD</strong> — Esophageal/gastric cancer, reflux disease</div>
      </div>

      <h3>Functional Dyspepsia Pathophysiology</h3>
      <ul>
        <li><strong>Visceral Hypersensitivity:</strong> Stomach nerves overreact to normal distension or acid.</li>
        <li><strong>Impaired Gastric Accommodation:</strong> Proximal stomach fails to relax after eating → early satiety.</li>
        <li><strong>Delayed Gastric Emptying:</strong> Present in ~30% of functional dyspepsia patients.</li>
        <li><strong>H. pylori Gastritis:</strong> Causes chronic inflammation; symptoms may take 6-12 months to resolve after eradication.</li>
      </ul>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — Biliary Pain is NOT Colicky!</strong> Despite the common term "biliary colic," true biliary pain is actually <strong>constant</strong>, not colicky. It is steady, intense, and lasts at least 30 minutes, plateauing within an hour and usually resolving within 6 hours. It is NOT relieved by movement, bowel movements, or belching.
      </div>
    `,
    presentation: `
      <h3>Rome IV Criteria for Functional Dyspepsia</h3>
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "PEBS" — Rome IV Functional Dyspepsia Criteria</div>
        <div class="mnemonic-letter">P</div><div class="mnemonic-expansion"><strong>Postprandial fullness</strong> — Bothersome fullness after eating (impacting daily activities)</div>
        <div class="mnemonic-letter">E</div><div class="mnemonic-expansion"><strong>Early satiation</strong> — Unable to finish a normal-sized meal</div>
        <div class="mnemonic-letter">B</div><div class="mnemonic-expansion"><strong>Burning</strong> — Epigastric burning sensation</div>
        <div class="mnemonic-letter">S</div><div class="mnemonic-expansion"><strong>Soreness (Epigastric pain)</strong> — Localized, not related to bowel movements</div>
      </div>
      <p><em>Duration: Symptoms for ≥3 months, with onset at least 6 months before diagnosis. No structural disease found.</em></p>

      <h3>Alarm Features (Red Flags)</h3>
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "VOMIT BLOOD" — Alarm Features in Dyspepsia</div>
        <div class="mnemonic-letter">V</div><div class="mnemonic-expansion"><strong>Vomiting</strong> — Persistent vomiting</div>
        <div class="mnemonic-letter">O</div><div class="mnemonic-expansion"><strong>Overt GI bleeding</strong> — Hematemesis, melena</div>
        <div class="mnemonic-letter">M</div><div class="mnemonic-expansion"><strong>Mass / lymphadenopathy</strong> — Palpable abdominal mass or nodes</div>
        <div class="mnemonic-letter">I</div><div class="mnemonic-expansion"><strong>Iron deficiency anemia</strong> — Unexplained</div>
        <div class="mnemonic-letter">T</div><div class="mnemonic-expansion"><strong>Trouble swallowing (Dysphagia)</strong> — Progressive</div>
        <div class="mnemonic-letter">B</div><div class="mnemonic-expansion"><strong>Body weight loss</strong> — Unintentional (&gt;5% in 6-12 months)</div>
        <div class="mnemonic-letter">L</div><div class="mnemonic-expansion"><strong>Late onset</strong> — Age ≥60 with new symptoms</div>
        <div class="mnemonic-letter">OO</div><div class="mnemonic-expansion"><strong>Odynophagia</strong> — Painful swallowing</div>
        <div class="mnemonic-letter">D</div><div class="mnemonic-expansion"><strong>Dynasty (Family history)</strong> — Of upper GI cancer</div>
      </div>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Carnett's Sign:</strong> In the exam, if a patient has epigastric pain that <strong>INCREASES</strong> when they tense their abdominal muscles (sit-up position) → <strong>positive Carnett's sign = abdominal WALL pain</strong> (not visceral). If the pain DECREASES or stays the same when muscles are tensed → negative Carnett's = visceral origin (ulcer, etc.). This catches many students off guard!
      </div>
    `,
    diagnostics: `
      <h3>Age-Stratified Management Algorithm</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">≥60</div>
          <div class="step-content">
            <strong>Age ≥ 60 → Upper Endoscopy (EGD)</strong>
            <p>To rule out malignancy. Biopsy for H. pylori. Most with normal endoscopy + normal labs = Functional Dyspepsia.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">&lt;60</div>
          <div class="step-content">
            <strong>Age &lt; 60 → Test-and-Treat for H. pylori</strong>
            <p>Non-invasive test (UBT or stool antigen). If positive → eradicate. If negative or still symptomatic → PPI × 8 weeks.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">⚠️</div>
          <div class="step-content">
            <strong>Any Age with Alarm Features → Urgent Endoscopy</strong>
            <p>Within 2-4 weeks if: &gt;5% weight loss, overt GI bleeding, progressive dysphagia, or rapidly worsening alarm features.</p>
          </div>
        </div>
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — Sydney Protocol:</strong> When biopsying for H. pylori during endoscopy, use the Sydney protocol: take specimens from (1) lesser and greater curve of antrum (2-3 cm from pylorus), (2) lesser curvature of corpus (4 cm proximal to angularis), (3) middle greater curvature of corpus (8 cm from cardia), and (4) one from the incisura angularis. This systematic approach maximizes detection.
      </div>

      <div class="memory-hook">
        <strong>🪝 Memory Hook — "60 = Scope":</strong> <em>If the patient is 60 or older with new dyspepsia, they get a SCOPE (endoscopy) first, no questions asked. Under 60? Test-and-Treat (H. pylori) first, scope later only if needed.</em>
      </div>
    `,
    management: `
      <h3>Treatment Ladder for Functional Dyspepsia</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Eradicate H. pylori</strong> (if positive)<p>14-day triple therapy. Wait 6-12 months for gastritis to heal and symptoms to improve.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Anti-secretory Therapy (PPI)</strong><p>PPI daily (e.g., Pantoprazole 40mg) × 8 weeks. Superior to H2-blockers. First-line for H. pylori-negative patients.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Neuromodulators (TCA)</strong><p>Low-dose Amitriptyline or Imipramine at bedtime. Effective for pain-predominant functional dyspepsia.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content"><strong>Alternatives</strong><p>Mirtazapine (for early satiety/weight loss), Buspirone (for postprandial accommodation), or Prokinetics (last resort for gastroparesis-like symptoms).</p></div>
        </div>
      </div>

      <div class="memory-hook">
        <strong>🪝 Memory Hook — Treatment Ladder:</strong> <em>"H.P.T.P." = H. pylori first → PPI second → TCA third → Prokinetics last."</em> Always follow this order; don't skip steps.
      </div>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — H. pylori-Associated Dyspepsia (HPD):</strong> After successful eradication of H. pylori, it takes <strong>6 to 12 months</strong> for dyspepsia symptoms to significantly improve. This is because the underlying chronic gastritis needs time to heal. Don't label a patient as a "treatment failure" at 2 months post-eradication.
      </div>
    `,
    caseStudy: {
      profile: "Young female with chronic dyspepsia",
      history: "A 26-year-old female with no significant PMH presents with intermittent epigastric pain and postprandial bloating for 6 months. Pain occurs 2-3 times/week after eating, occasionally radiates to the sides, lasts 30-60 minutes, then gradually fades. She reports occasional nausea, no vomiting, no heartburn. No weight change. Non-smoker, no alcohol, no NSAIDs. She completed Pantoprazole 40mg daily for 3 months with no improvement.",
      investigations: "BP 126/80, pulse 92, weight 65 kg. Epigastric tenderness, no masses. CBC normal. LFTs, RFTs normal. Celiac antibodies (anti-tTG/EMA) negative.",
      questionsAnswers: [
        { q: "What is the most likely diagnosis?", a: "Functional Dyspepsia — she meets Rome IV criteria (≥3 months of symptoms with onset >6 months ago: epigastric pain + postprandial fullness). No alarm features, normal labs, and she's under 60." },
        { q: "What critical test is missing?", a: "H. pylori testing! She should be tested for active H. pylori infection (UBT or stool antigen). Note: she was on PPI for 3 months, so PPIs must be stopped for ≥2 weeks before testing to avoid false negatives." },
        { q: "She tests H. pylori negative. What's next?", a: "Since she failed 3 months of PPI therapy and is H. pylori negative, the next step is a therapeutic trial of a low-dose Tricyclic Antidepressant (TCA), such as Amitriptyline 10-25mg at bedtime, for pain-predominant functional dyspepsia." }
      ]
    },
    mcqs: [
      {
        question: "According to Rome IV criteria, functional dyspepsia requires symptoms present for at least:",
        options: [ "1 week", "1 month", "3 months (with symptom onset ≥6 months prior)", "1 year" ],
        answerIndex: 2,
        explanation: "Rome IV requires ≥1 of the 4 cardinal symptoms (postprandial fullness, early satiation, epigastric pain, or burning) for the past 3 months, with onset at least 6 months before diagnosis, and no structural cause found."
      },
      {
        question: "A 45-year-old with epigastric pain that INCREASES when he tenses his abdominal muscles (positive Carnett's sign). This suggests:",
        options: [ "The pain is visceral, likely from a peptic ulcer", "Biliary tract disease", "The pain originates from the abdominal wall (not visceral)", "Gastroesophageal malignancy" ],
        answerIndex: 2,
        explanation: "A positive Carnett's sign (increased pain with abdominal wall tensing) indicates the pain comes from the abdominal wall itself (musculoskeletal), not from intra-abdominal organs. Tensed muscles would protect visceral organs, so visceral pain would decrease or stay the same."
      },
      {
        question: "A 65-year-old woman presents with new-onset dyspepsia. What is the recommended first step?",
        options: [ "Empirical PPI trial for 8 weeks", "Non-invasive H. pylori test-and-treat", "Upper GI Endoscopy with biopsies", "Trial of tricyclic antidepressant" ],
        answerIndex: 2,
        explanation: "For patients aged ≥60 with new-onset dyspepsia, the first step is Upper GI Endoscopy (not test-and-treat) to exclude malignancy, which increases in incidence with age."
      }
    ]
  },
  // ============================================================
  // LESSON 5: PEDIATRIC ORAL CAVITY
  // ============================================================
  {
    id: "pediatric-oral",
    title: "Pediatric Diseases of the Oral Cavity",
    difficulty: "easy",
    organ: "Oral Cavity",
    readTime: "8 min",
    definition: "A clinical review of pediatric dental development, oral mucosa anatomy, common dental pathologies (caries, periodontal disease), soft tissue lesions (thrush, aphthous, herpetic stomatitis), and congenital oral anomalies.",
    keyPoints: [
      "Dental caries = most common chronic disease of childhood.",
      "Fluoride: inhibits demineralization, enhances remineralization, inhibits bacterial enzymes.",
      "Thrush (Candida): white plaques that can be scraped off → raw bleeding base beneath.",
      "Teething is NORMAL and does NOT cause high fever, diarrhea, or systemic illness.",
      "First tooth erupts at ~6 months. Full set of 20 deciduous teeth by 30 months."
    ],
    epidemiology: `
      <div class="quick-recall">
        <div class="recall-item">
          <span class="recall-label">First Tooth Eruption</span>
          <span class="recall-value">~6 months (lower central incisor)</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Full Deciduous Set</span>
          <span class="recall-value">20 teeth by 30 months</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Caries Ranking</span>
          <span class="recall-value">#1 chronic childhood disease</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Oral Mucosa Types</span>
          <span class="recall-value">3: Masticatory (25%), Lining (60%), Specialized (15%)</span>
        </div>
      </div>
    `,
    pathophysiology: `
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> A tooth is a <em>castle under siege</em>. Bacteria (enemy soldiers) convert sugar (ammunition) into acid (catapult fire) that bombards the enamel walls. <strong>Fluoride</strong> is the castle's ultimate defense: it repairs damaged walls (remineralization), makes them acid-proof (fluorapatite), and disables enemy weapons (bacterial enzyme inhibition). If the siege is too intense or the defenses fail → the walls breach (cavity).
      </div>

      <h3>The Caries Balance — Demineralization vs. Remineralization</h3>
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "Fluoride's 3 I's" — How Fluoride Protects</div>
        <div class="mnemonic-letter">I</div><div class="mnemonic-expansion"><strong>Inhibits demineralization</strong> — Reduces enamel mineral loss during acid attacks</div>
        <div class="mnemonic-letter">I</div><div class="mnemonic-expansion"><strong>Intensifies remineralization</strong> — Builds stronger, acid-resistant fluorapatite crystals</div>
        <div class="mnemonic-letter">I</div><div class="mnemonic-expansion"><strong>Inhibits bacterial enzymes</strong> — Disrupts bacterial glycolysis (sugar → acid pathway)</div>
      </div>

      <h3>Oral Mucosa — Three Types</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Type</th><th>% of Total</th><th>Location</th><th>Key Feature</th></tr></thead>
        <tbody>
          <tr><td><strong>Masticatory</strong></td><td>25%</td><td>Gingiva, hard palate</td><td>Strongly keratinized (tough, withstands chewing)</td></tr>
          <tr><td><strong>Lining</strong></td><td>60%</td><td>Floor of mouth, cheeks, lips, soft palate</td><td>Non-keratinized, soft, pliable (no food friction)</td></tr>
          <tr><td><strong>Specialized</strong></td><td>15%</td><td>Dorsal tongue</td><td>Cornified papillae (taste buds on all except filiform)</td></tr>
        </tbody>
      </table>

      <h3>Salivary Glands Anatomy</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Gland</th><th>Location</th><th>Duct</th></tr></thead>
        <tbody>
          <tr><td><strong>Parotid</strong></td><td>Outside oral cavity, anterior to ear</td><td>Stensen duct (opens near 2nd upper molar)</td></tr>
          <tr><td><strong>Submandibular</strong></td><td>Hook-shaped, partly in oral cavity floor</td><td>Wharton's duct (opens at sublingual caruncle)</td></tr>
          <tr><td><strong>Sublingual</strong></td><td>Smallest, lateral to submandibular duct</td><td>Numerous minor sublingual ducts</td></tr>
        </tbody>
      </table>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — Teething Myth-Busting:</strong> Teething causes <em>local</em> symptoms only: gum irritation, drooling, mild fussiness, low-grade temperature (NOT &gt;38.5°C). It does NOT cause high fever, diarrhea, rash, or systemic illness. These coincide with the age when maternal antibodies wane (6-24 months), making children susceptible to infections — parents wrongly attribute these infections to teething.
      </div>
    `,
    presentation: `
      <h3>Dental Pathology Progression</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Plaque Accumulation</strong><p>Soft, sticky bacterial film on teeth. The root cause of all dental disease.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Chalky White Spots</strong><p>Dull white bands at the gum line = early demineralization. <strong>REVERSIBLE with fluoride!</strong></p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Cavitation</strong><p>Brown/black soft spots = advanced structural breakdown into dentin. <strong>Irreversible.</strong></p></div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content"><strong>Pulpitis → Abscess</strong><p>Infection reaches dental pulp → severe pain → alveolar bone abscess. May need surgical drainage.</p></div>
        </div>
      </div>

      <h3>Soft Tissue Lesions — The Big Three</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Feature</th><th>🍼 Thrush (Candida)</th><th>🔴 Aphthous Ulcers</th><th>🦠 Herpetic Gingivostomatitis</th></tr></thead>
        <tbody>
          <tr><td><strong>Cause</strong></td><td>Candida albicans (fungal)</td><td>Unclear (immune/stress/genetic)</td><td>HSV-1 (primary infection)</td></tr>
          <tr><td><strong>Peak Age</strong></td><td>Neonates</td><td>Any age</td><td>2-4 years</td></tr>
          <tr><td><strong>Appearance</strong></td><td>White curd-like plaques</td><td>Well-circumscribed ulcer, grey-white base, red halo</td><td>Diffuse vesicles/ulcers on lips, gums, mucosa</td></tr>
          <tr><td><strong>Removable?</strong></td><td><strong>YES</strong> (reveals raw, bleeding base)</td><td>No (it IS the ulcer)</td><td>No (vesicles rupture → ulcers)</td></tr>
          <tr><td><strong>Fever?</strong></td><td>No (usually)</td><td>No</td><td><strong>YES</strong> (up to 20% with lymphadenopathy)</td></tr>
          <tr><td><strong>Duration</strong></td><td>Self-limited (treat with Nystatin)</td><td>10-14 days, heals without scarring</td><td>~2 weeks, heals without scarring</td></tr>
          <tr><td><strong>Treatment</strong></td><td>Nystatin topical (also on mother's nipples!)</td><td>Topical benzocaine/lidocaine, topical steroids</td><td>Acyclovir (if within 72 hours), hydration</td></tr>
        </tbody>
      </table>

      <div class="memory-hook">
        <strong>🪝 Memory Hook — Thrush vs Milk Residue:</strong> <em>"If you can scrape it off and the surface bleeds → it's THRUSH. If it wipes off easily with no bleeding → it's just milk."</em> Parents often confuse white milk deposits on the tongue with thrush. The key differentiator is the raw, bleeding, inflamed base beneath thrush plaques.
      </div>

        <strong>⚠️ Exam Trap — Acyclovir Timing in Herpetic Stomatitis:</strong> Oral Acyclovir is only beneficial if started within the <strong>first 3 days (72 hours)</strong> of symptom onset. After this window, it has minimal impact on disease duration. This is a commonly tested pharmacological timing question.
      </div>

      <h3>Systemic Disease Oral Manifestations</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Systemic Disease</th><th>Associated Oral Changes</th></tr></thead>
        <tbody>
          <tr><td><strong>Scarlet Fever</strong></td><td>White coated tongue → fiery red with prominent papillae (Strawberry/Raspberry tongue)</td></tr>
          <tr><td><strong>Measles</strong></td><td>Koplik spots (ulcerations on buccal mucosa near Stensen duct)</td></tr>
          <tr><td><strong>Infectious Mononucleosis</strong></td><td>Palatal petechiae, exudative pharyngitis</td></tr>
          <tr><td><strong>Diphtheria</strong></td><td>Dirty white, tough, fibrino-suppurative membrane over tonsils/pharynx</td></tr>
          <tr><td><strong>Crohn Disease</strong></td><td>Cobblestone mucosa, deep linear ulcerations, mucogingivitis</td></tr>
          <tr><td><strong>Diabetes Mellitus</strong></td><td>Xerostomia, burning mouth, delayed wound healing, candidiasis</td></tr>
        </tbody>
      </table>

      <h3>Salivary Gland Pathologies</h3>
      <div class="step-flow" style="margin-top: 1rem;">
        <div class="step-item">
          <div class="step-number">P</div>
          <div class="step-content">
            <strong>Parotitis</strong>
            <p><strong>Acute:</strong> From blockage (stone/plug) + bacterial infection. <strong>Recurrent:</strong> Idiopathic swelling (lasts 2-3 wks). <strong>Suppurative:</strong> Usually Staph aureus, unilateral, painful. <strong>Mumps:</strong> Epidemic viral parotitis.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">R</div>
          <div class="step-content">
            <strong>Ranula</strong>
            <p>Large, soft, mucus-containing cyst in the floor of the mouth (sublingual area). Treatment: Marsupialization.</p>
          </div>
        </div>
        <div class="step-item">
          <div class="step-number">M</div>
          <div class="step-content">
            <strong>Mucocele</strong>
            <p>Most common on lower lip. Fluid-filled vesicle from blocked salivary duct. Excision is curative.</p>
          </div>
        </div>
      </div>
    `,
    diagnostics: `
      <ul>
        <li><strong>Clinical Assessment:</strong> Inspect dentition and gums. Healthy teeth = white, smooth surfaces. Healthy gums = smooth, pink, firm, knife-edge border. Spacing between deciduous teeth is <strong>desirable</strong> (allows room for permanent teeth).</li>
        <li><strong>Candidiasis:</strong> Confirmed by KOH smear (reveals budding yeast + pseudohyphae) and culture.</li>
        <li><strong>Caries Staging:</strong> White spots = reversible. Brown/black cavitations = irreversible. Pain = pulpitis.</li>
      </ul>
    `,
    management: `
      <h3>Caries Prevention — The Three Pillars</h3>
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "DOF" — Preventing Childhood Caries</div>
        <div class="mnemonic-letter">D</div><div class="mnemonic-expansion"><strong>Dietary counseling</strong> — No bottle at bedtime, limit juice to 4-6oz/day, drink water between meals</div>
        <div class="mnemonic-letter">O</div><div class="mnemonic-expansion"><strong>Oral hygiene</strong> — Brush 2×/day from first tooth. Parent supervises until ~age 8.</div>
        <div class="mnemonic-letter">F</div><div class="mnemonic-expansion"><strong>Fluoride</strong> — Varnish every 3-6 months, fluoridated toothpaste, community water fluoridation</div>
      </div>

      <h3>Fluoride Toothpaste Dosing — Critical Exam Detail!</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Age</th><th>Toothpaste Amount</th><th>Visual</th></tr></thead>
        <tbody>
          <tr><td><strong>Under 3 years</strong></td><td>Smear or grain-of-rice-sized</td><td>🍚</td></tr>
          <tr><td><strong>3+ years</strong></td><td>Pea-sized amount</td><td>🟢</td></tr>
        </tbody>
      </table>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Fluoride in Milk:</strong> Fluoride supplements should NOT be added to milk or formula because <strong>calcium reduces fluoride absorption</strong>. Supplements should be added to water or placed directly in the child's mouth. Tablets are preferred for children old enough to chew (additional topical benefit during chewing).
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — Bacterial Transmission:</strong> Cariogenic bacteria (S. mutans) can be <strong>transmitted from caregiver to child</strong> through sharing utensils, pre-chewing food, or cleaning pacifiers with saliva. Parents with significant dental decay should be especially cautious and maintain their own oral health.
      </div>
    `,
    caseStudy: {
      profile: "Pediatric dental screening case",
      history: "A mother brings her 2-year-old son for routine checkup. She's worried about chalky white lines across his upper incisors near the gum line. The child drinks apple juice from a bottle multiple times daily, including at bedtime. He has never seen a dentist.",
      investigations: "Inspection shows dull white demineralization bands at the gum line on the upper anterior teeth. No brown/black cavitations. No structural fractures. Gingiva is pink and healthy.",
      questionsAnswers: [
        { q: "What is the clinical finding and is it reversible?", a: "The chalky white spots represent early enamel demineralization (incipient caries). At this stage, the process is REVERSIBLE with professional topical fluoride application, improved oral hygiene (brushing with a smear of fluoridated toothpaste 2×/day), and eliminating the bottle-at-bedtime habit." },
        { q: "What is the single most important dietary intervention?", a: "STOP putting the child to bed with a bottle of juice or sweetened beverage. This causes 'baby bottle tooth decay' — prolonged acid exposure while salivary flow is minimal during sleep. Juice intake should be limited to 4-6 oz/day, only at mealtimes, and the child should drink fluoridated water between meals." },
        { q: "How should fluoride toothpaste be used at this age?", a: "For children under 3 years, use a SMEAR or grain-of-rice-sized amount of FLUORIDATED toothpaste (not non-fluoridated) twice daily. This provides effective caries protection while minimizing fluorosis risk. A parent should brush the child's teeth until mastery (~age 8)." }
      ]
    },
    mcqs: [
      {
        question: "The recommended amount of fluoridated toothpaste for a 2-year-old child is:",
        options: [ "A pea-sized amount of non-fluoridated toothpaste", "A smear or grain-of-rice-sized amount of fluoridated toothpaste", "No toothpaste until age 3", "A full brush-length of fluoridated toothpaste" ],
        answerIndex: 1,
        explanation: "Children under 3 should use a tiny smear/grain-of-rice amount of fluoridated toothpaste to balance caries protection with minimizing fluorosis risk. After age 3, a pea-sized amount is appropriate."
      },
      {
        question: "An infant presents with white plaques on the tongue and buccal mucosa. When scraped, the underlying tissue is red and bleeds. This is characteristic of:",
        options: [ "Milk residue (normal finding)", "Oropharyngeal Candidiasis (thrush)", "Aphthous ulcers", "Herpetic gingivostomatitis" ],
        answerIndex: 1,
        explanation: "Thrush presents as removable white curd-like plaques that, when scraped, reveal a raw, erythematous, pinpoint-bleeding surface. Milk residue wipes off easily without bleeding."
      },
      {
        question: "A 3-year-old presents with acute fever, irritability, drooling, and painful vesicles on the lips, gums, and buccal mucosa. The best management if seen within 48 hours of onset is:",
        options: [ "Topical Nystatin suspension", "Oral Acyclovir + hydration + analgesics", "Intramuscular Penicillin", "Observation only — symptoms are self-limited" ],
        answerIndex: 1,
        explanation: "This is primary Herpetic Gingivostomatitis (HSV-1). Oral Acyclovir is beneficial IF started within the first 72 hours. Supportive care (hydration, analgesics) is essential. Nystatin is for Candida, not HSV."
      }
    ]
  },
  // ============================================================
  // LESSON 6: DYSPHAGIA & ODYNOPHAGIA
  // ============================================================
  {
    id: "dysphagia-odynophagia",
    title: "Clinical Dysphagia & Odynophagia",
    difficulty: "medium",
    organ: "Pharynx & Esophagus",
    readTime: "12 min",
    definition: "Dysphagia is a subjective sensation of difficulty or abnormality of swallowing. Odynophagia is pain with swallowing. Both are alarm symptoms warranting thorough evaluation to exclude malignancy and structural disease.",
    keyPoints: [
      "Dysphagia is ALWAYS an alarm symptom — never ignore it.",
      "Solids only → Mechanical obstruction (stricture, cancer, ring).",
      "Solids AND liquids from onset → Motility disorder (achalasia, scleroderma, DES).",
      "Progressive solids → cancer (rapid) or peptic stricture (slow).",
      "Odynophagia → think infectious esophagitis (Candida, HSV, CMV) or pill esophagitis."
    ],
    epidemiology: `
      <h3>Age-Based Etiological Clues</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Age Group</th><th>Most Likely Causes</th></tr></thead>
        <tbody>
          <tr><td><strong>Children</strong></td><td>Foreign body ingestion, congenital malformations (TEF, esophageal atresia)</td></tr>
          <tr><td><strong>Middle-Aged (30-50)</strong></td><td>GERD/esophagitis, hiatal hernia, iron-deficiency anemia, achalasia, globus</td></tr>
          <tr><td><strong>Elderly (&gt;60)</strong></td><td>Malignancy, peptic stricture, pharyngeal pouch (Zenker's), motility disorders from aging, neurological (CVA, Parkinson's)</td></tr>
        </tbody>
      </table>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — The Sinister Combination:</strong> <em>"Short-duration progressive dysphagia (solids → liquids) + significant weight loss + elderly patient + smoking/alcohol history = Esophageal Carcinoma until proven otherwise."</em> This is a classic clinical vignette on exams.
      </div>
    `,
    pathophysiology: `
      <h3>The Master Classification — Oropharyngeal vs. Esophageal</h3>
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> Swallowing is a relay race with two runners. The first runner (oropharyngeal phase) starts the race — if they stumble, the food never leaves the starting blocks (transfer dysphagia). The second runner (esophageal phase) carries the baton through the tunnel — if they falter, the food gets stuck midway (esophageal dysphagia). The key question is: <em>"Where does the problem happen?"</em>
      </div>

      <table class="comparison-highlight">
        <thead><tr><th>Feature</th><th>Oropharyngeal Dysphagia</th><th>Esophageal Dysphagia</th></tr></thead>
        <tbody>
          <tr><td><strong>Timing</strong></td><td>Difficulty <strong>initiating</strong> the swallow (within seconds)</td><td>Sensation of food sticking <strong>seconds after</strong> swallowing</td></tr>
          <tr><td><strong>Localization</strong></td><td>Points to CERVICAL region (neck)</td><td>Points to CHEST or suprasternal notch</td></tr>
          <tr><td><strong>Aspiration</strong></td><td>Coughing, choking, nasal regurgitation during eating</td><td>Rare (unless severe achalasia with overflow)</td></tr>
          <tr><td><strong>Voice</strong></td><td>Dysphonia (hoarseness), wet/gurgling voice</td><td>Usually normal</td></tr>
          <tr><td><strong>Causes</strong></td><td>Neurological (CVA, Parkinson's), Muscular (myasthenia, polymyositis), Structural (Zenker's, webs)</td><td>Mechanical (cancer, stricture, ring) or Motor (achalasia, DES, scleroderma)</td></tr>
        </tbody>
      </table>

      <h3>The Decision Tree — Solid vs Liquid, Progressive vs Intermittent</h3>
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Master Algorithm: "What Type of Dysphagia?"</div>
        <div class="mnemonic-letter">S</div><div class="mnemonic-expansion"><strong>Solids ONLY</strong> → Mechanical obstruction (lumen narrowed to ≤13mm)</div>
        <div class="mnemonic-letter">S+L</div><div class="mnemonic-expansion"><strong>Solids + Liquids</strong> (from onset) → Motility disorder</div>
        <div class="mnemonic-letter">P↑</div><div class="mnemonic-expansion"><strong>Progressive (rapid)</strong> → Cancer (weeks to months)</div>
        <div class="mnemonic-letter">P↓</div><div class="mnemonic-expansion"><strong>Progressive (slow)</strong> → Peptic stricture or Scleroderma (months to years)</div>
        <div class="mnemonic-letter">I</div><div class="mnemonic-expansion"><strong>Intermittent</strong> → Schatzki ring, esophageal web, or DES</div>
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — The 13mm Rule:</strong> Dysphagia to solids occurs when the esophageal lumen narrows to <strong>≤13mm</strong>. If a patient has dysphagia to solids only, the problem is mechanical narrowing. If they have dysphagia to BOTH solids and liquids from the start, the lumen size is usually fine — the problem is disordered motility.
      </div>
    `,
    presentation: `
      <h3>Clinical Pattern Recognition</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Pattern</th><th>Progression</th><th>Heartburn?</th><th>Most Likely Diagnosis</th></tr></thead>
        <tbody>
          <tr><td><strong>Solids only</strong></td><td>Rapidly progressive</td><td>No</td><td>🔴 <strong>Esophageal cancer</strong></td></tr>
          <tr><td><strong>Solids only</strong></td><td>Slowly progressive</td><td>Yes</td><td>🟡 <strong>Peptic stricture</strong> (from chronic GERD)</td></tr>
          <tr><td><strong>Solids only</strong></td><td>Intermittent</td><td>Variable</td><td>🟢 <strong>Schatzki ring</strong> or esophageal web</td></tr>
          <tr><td><strong>Solids + Liquids</strong></td><td>Progressive</td><td>No</td><td>🔵 <strong>Achalasia</strong></td></tr>
          <tr><td><strong>Solids + Liquids</strong></td><td>Progressive</td><td>Yes</td><td>🟣 <strong>Scleroderma</strong></td></tr>
          <tr><td><strong>Solids + Liquids</strong></td><td>Intermittent</td><td>Variable</td><td>⚪ <strong>Diffuse Esophageal Spasm (DES)</strong></td></tr>
        </tbody>
      </table>

      <div class="memory-hook">
        <strong>🪝 Memory Hook — "The HEARTBURN Question Solves Everything":</strong>
        <em>When you see progressive dysphagia on an exam, ask yourself: "Does the patient also have heartburn?"</em>
        <ul>
          <li><strong>Solids + progressive + NO heartburn</strong> = Cancer (mechanical block, no reflux)</li>
          <li><strong>Solids + progressive + YES heartburn</strong> = Peptic stricture (GERD-related narrowing)</li>
          <li><strong>Both + progressive + NO heartburn</strong> = Achalasia (LES too tight for reflux)</li>
          <li><strong>Both + progressive + YES heartburn</strong> = Scleroderma (LES too weak → severe reflux)</li>
        </ul>
      </div>

      <h3>Odynophagia — Key Associations</h3>
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "PIC" — Odynophagia Causes</div>
        <div class="mnemonic-letter">P</div><div class="mnemonic-expansion"><strong>Pill esophagitis</strong> — Tetracyclines, doxycycline, vitamin C, ferrous sulfate, KCl. Always take with water and stay upright.</div>
        <div class="mnemonic-letter">I</div><div class="mnemonic-expansion"><strong>Infectious esophagitis</strong> — Candida (most common in immunocompromised), HSV, CMV</div>
        <div class="mnemonic-letter">C</div><div class="mnemonic-expansion"><strong>Caustic/Corrosive injury</strong> — Ingestion of acids or alkalis</div>
      </div>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Pill Esophagitis Location:</strong> Pills most commonly lodge and cause ulceration at the level of the <strong>aortic arch</strong> — a natural anatomical constriction point in the esophagus. Drugs with pH &lt;3 (tetracyclines, doxycycline, vitamin C, ferrous sulfate) are the worst offenders. <em>Counsel all patients: swallow pills with ≥240 mL of water and remain upright for 30 minutes.</em>
      </div>
    `,
    diagnostics: `
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>History & Localization</strong><p>Oropharyngeal (neck, immediate difficulty, aspiration) vs. Esophageal (chest/substernal, seconds after swallowing). Solids vs. both. Progressive vs. intermittent.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Basic Labs</strong><p>CBC (anemia — cause or effect?), ESR/CRP (malignancy, inflammation), LFTs, Ca²⁺ if nutrition impaired.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Barium Swallow</strong><p>Excellent first-line for structural lesions (webs, rings, diverticula) and motility screening. ⚠️ <strong>Contraindicated if perforation suspected</strong> (use water-soluble contrast).</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content"><strong>Upper Endoscopy (EGD)</strong><p>Visualize and biopsy mucosal lesions, strictures, or suspected malignancies.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">5</div>
          <div class="step-content"><strong>Esophageal Manometry ± pH Study</strong><p>Confirm motor disorders (achalasia, DES). Gold standard for motility assessment.</p></div>
        </div>
      </div>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Barium Contraindication:</strong> NEVER order a standard barium swallow if esophageal perforation is suspected — barium in the mediastinum causes severe mediastinitis. Use <strong>water-soluble contrast (Gastrografin)</strong> instead. This is a patient safety question that frequently appears on exams.
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — Referred Otalgia:</strong> Ear pain (otalgia) accompanying dysphagia is a <strong>sinister symptom</strong> and a poor prognostic sign, suggesting advanced malignancy (shared innervation via glossopharyngeal and vagus nerves). This is a high-yield clinical correlation.
      </div>
    `,
    management: `
      <h3>Dysphagia Management by Cause</h3>
      <ul>
        <li><strong>Peptic Stricture:</strong> Endoscopic balloon dilatation + long-term PPI to prevent recurrence.</li>
        <li><strong>Schatzki Ring:</strong> Endoscopic dilation (often single session is sufficient).</li>
        <li><strong>Esophageal Cancer:</strong> Staging (CT + EUS) → curative resection (if early stage) or palliative stenting/chemotherapy/radiation (if advanced; &gt;50% present with stage III/IV).</li>
        <li><strong>Achalasia:</strong> Pneumatic dilatation, POEM, or Heller's myotomy (see Motility Disorders lesson).</li>
        <li><strong>Oropharyngeal Dysphagia:</strong> Swallowing rehabilitation with Speech-Language Pathologist, dietary modifications (thickened liquids), safe swallowing techniques.</li>
      </ul>

      <h3>Odynophagia Management</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Cause</th><th>Treatment</th></tr></thead>
        <tbody>
          <tr><td><strong>Candida Esophagitis</strong></td><td>Fluconazole (systemic antifungal)</td></tr>
          <tr><td><strong>HSV Esophagitis</strong></td><td>Acyclovir or Valacyclovir</td></tr>
          <tr><td><strong>CMV Esophagitis</strong></td><td>Ganciclovir or Foscarnet</td></tr>
          <tr><td><strong>Pill Esophagitis</strong></td><td>Stop offending drug. Take pills with ≥240mL water, upright ≥30 min.</td></tr>
          <tr><td><strong>Supportive (all causes)</strong></td><td>Soft diet, analgesics, anesthetic rinses, hydration.</td></tr>
        </tbody>
      </table>

      <div class="memory-hook">
        <strong>🪝 Memory Hook — Esophageal Cancer Prognosis:</strong> <em>"By the time you can't swallow, it's usually too late."</em> More than 50% of esophageal cancers present at stage III/IV with an overall 5-year survival of only ~20%. This underscores why dysphagia is ALWAYS an alarm symptom requiring urgent investigation.
      </div>
    `,
    caseStudy: {
      profile: "Progressive solid & liquid dysphagia",
      history: "A 55-year-old male presents with 6 months of non-painful dysphagia to both solids and fluids, accompanied by regurgitation of undigested food 30 minutes after eating. He has lost 6 kg unintentionally. No heartburn, no odynophagia, no prior medical/surgical history, no medications. No family history of cancer.",
      investigations: "Physical exam is normal. Upper endoscopy shows a dilated esophagus with retained food but normal-appearing GEJ mucosa and no masses. The scope passes through the GEJ with mild resistance.",
      questionsAnswers: [
        { q: "What is the differential diagnosis?", a: "Primary consideration: Achalasia (both solids & liquids from onset, bland/undigested regurgitation, no heartburn, progressive course over months). Must also rule out pseudo-achalasia from a GEJ tumor (though no mass was seen endoscopically and the scope passed through). Next step: esophageal manometry to confirm." },
        { q: "What will manometry show if achalasia is confirmed?", a: "Aperistalsis in the distal esophageal body + incomplete LES relaxation with elevated residual pressure (>8 mmHg) + elevated resting LES pressure (often >45 mmHg)." },
        { q: "What treatment options are available?", a: "For a 55-year-old fit patient: (1) POEM or Laparoscopic Heller's Myotomy with partial fundoplication = best long-term outcomes (>90% success). (2) Pneumatic balloon dilatation = effective but may require repeat sessions. (3) Botox injection = reserved for patients unfit for surgery (temporary, 6-12 month effect)." }
      ]
    },
    mcqs: [
      {
        question: "An elderly smoker presents with rapidly progressive dysphagia starting with solids, now progressing to liquids, plus 8 kg weight loss over 3 months. The most likely diagnosis is:",
        options: [ "Achalasia", "Diffuse Esophageal Spasm", "Esophageal Carcinoma", "Schatzki Ring" ],
        answerIndex: 2,
        explanation: "This is the classic 'red flag' presentation for esophageal carcinoma: elderly, smoker, rapidly progressive dysphagia (solids→liquids), and significant weight loss. Urgent endoscopy with biopsy is required."
      },
      {
        question: "Coughing, choking, and nasal regurgitation occurring IMMEDIATELY upon attempting to swallow suggest:",
        options: [ "Esophageal body motility disorder", "Retrosternal food impaction", "Oropharyngeal (transfer) dysphagia", "Lower esophageal sphincter dysfunction" ],
        answerIndex: 2,
        explanation: "Oropharyngeal dysphagia involves failure to initiate the swallow and transfer the bolus past the pharynx. It presents with immediate choking, coughing, nasal regurgitation, and aspiration — all occurring within seconds of attempting to swallow."
      },
      {
        question: "A 30-year-old HIV patient develops painful swallowing (odynophagia) and is found to have white plaques in the esophagus on endoscopy. The first-line treatment is:",
        options: [ "Oral Acyclovir", "Intravenous Ganciclovir", "Oral Fluconazole", "Topical Nystatin only" ],
        answerIndex: 2,
        explanation: "White esophageal plaques in an immunocompromised patient = Candida esophagitis. First-line treatment is systemic Fluconazole (not topical nystatin, which is insufficient for esophageal involvement). Acyclovir treats HSV, and Ganciclovir treats CMV."
      }
    ]
  }
];

// Export for module or global use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lessonsData;
}
