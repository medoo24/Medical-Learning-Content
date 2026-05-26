const fs = require('fs');

// ─── helpers ──────────────────────────────────────────────────────────────────
function decodePayload(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8');
  const m = raw.match(/atob\("([^"]+)"\)/);
  if (!m) throw new Error('No base64 payload in ' + filePath);
  return JSON.parse(decodeURIComponent(Buffer.from(m[1], 'base64').toString('utf8')));
}

function encodePayload(varName, data) {
  const json = JSON.stringify(data);
  const b64 = Buffer.from(encodeURIComponent(json)).toString('base64');
  return `// Clinical Data - Encrypted Payload\nconst ${varName} = JSON.parse(decodeURIComponent(atob("${b64}")));\n`;
}

// ─── 1. Enrich intestinal lessons with extra fields ──────────────────────────
const intestinalPath = 'js/intestinal-lessons-data.js';
const intestinal = decodePayload(intestinalPath);

const intestinalEnrichment = {
  'chronic-diarrhea': {
    epidemiology: '<div class="quick-recall"><div class="recall-item"><span class="recall-label">Global Prevalence</span><span class="recall-value">~5% of adults worldwide</span></div><div class="recall-item"><span class="recall-label">IBD Incidence (West)</span><span class="recall-value">10–20 per 100,000/year</span></div><div class="recall-item"><span class="recall-label">Peak Age</span><span class="recall-value">15–40 yrs (IBD); any age (IBS)</span></div></div>',
    riskFactors: '<ul><li><strong>IBD:</strong> Family history, NSAIDs, smoking (Crohn\'s), Ashkenazi Jewish descent, NOD2 gene variants.</li><li><strong>Infectious diarrhea:</strong> Travel to endemic areas, immunosuppression, antibiotic use (C. diff).</li><li><strong>Functional (IBS-D):</strong> Prior gastroenteritis, anxiety/depression, female sex.</li><li><strong>Malabsorptive:</strong> Celiac (HLA-DQ2/DQ8), chronic pancreatitis, short bowel syndrome.</li></ul>',
    keyReferences: ['ACG Clinical Guideline: Chronic Diarrhea (2023)', 'ECCO Guidelines – Crohn\'s Disease (2024)', 'Rome IV Criteria for Functional GI Disorders (2016)'],
  },
  'chronic-constipation': {
    epidemiology: '<div class="quick-recall"><div class="recall-item"><span class="recall-label">Prevalence</span><span class="recall-value">~15% globally; ↑ in elderly and females</span></div><div class="recall-item"><span class="recall-label">Female:Male</span><span class="recall-value">~2–3 : 1</span></div><div class="recall-item"><span class="recall-label">Age Peak</span><span class="recall-value">&gt;65 years</span></div></div>',
    riskFactors: '<ul><li><strong>Dietary:</strong> Low fibre intake, inadequate fluid intake.</li><li><strong>Medications:</strong> Opioids, anticholinergics, iron supplements, CCBs.</li><li><strong>Metabolic:</strong> Hypothyroidism, hypercalcaemia, diabetes.</li><li><strong>Neurological:</strong> Parkinson\'s disease, spinal cord injury, multiple sclerosis.</li><li><strong>Structural:</strong> Rectocele, pelvic floor dysfunction, colorectal cancer (red flag).</li></ul>',
    keyReferences: ['ACG Clinical Guideline: Chronic Idiopathic Constipation (2021)', 'Rome IV Criteria (2016)', 'NICE guideline CG99 – Constipation in Adults'],
  },
  'mesenteric-ischemia': {
    epidemiology: '<div class="quick-recall"><div class="recall-item"><span class="recall-label">Acute Incidence</span><span class="recall-value">~1–2 per 100,000/year; mortality 50–80% if delayed</span></div><div class="recall-item"><span class="recall-label">Chronic (Intestinal Angina)</span><span class="recall-value">Mostly &gt;60 yrs, atherosclerotic background</span></div><div class="recall-item"><span class="recall-label">Most Common Type</span><span class="recall-value">AMAE (arterial embolism) – 50% of AMI</span></div></div>',
    riskFactors: '<ul><li><strong>AMAE:</strong> Atrial fibrillation, mural thrombus post-MI, valvular disease.</li><li><strong>AMAT:</strong> Pre-existing atherosclerosis, peripheral vascular disease, smoking.</li><li><strong>NOMI:</strong> Cardiogenic shock, septic shock, vasopressor use, dialysis.</li><li><strong>MVT:</strong> Hypercoagulable states (Factor V Leiden, protein C/S deficiency), portal hypertension, intra-abdominal malignancy.</li></ul>',
    keyReferences: ['ESVS Guidelines on Mesenteric Vascular Disease (2017)', 'AHA Scientific Statement on Mesenteric Ischemia (2021)', 'UpToDate – Acute Mesenteric Ischemia (2024)'],
  },
};

for (const lesson of intestinal) {
  const extra = intestinalEnrichment[lesson.id];
  if (extra) {
    Object.assign(lesson, extra);
  }
}

fs.writeFileSync(intestinalPath, encodePayload('intestinalLessonsData', intestinal), 'utf8');
console.log('✅ Intestinal lessons enriched:', intestinal.map(l => l.id).join(', '));

// ─── 2. Add new Upper GIT lessons to lessons-data.js ─────────────────────────
const gitPath = 'js/lessons-data.js';
const gitLessons = decodePayload(gitPath);

const newUpperGITLessons = [
  {
    id: 'peptic-ulcer',
    title: 'Peptic Ulcer Disease (PUD)',
    difficulty: 'medium',
    organ: 'Stomach / Duodenum',
    readTime: '12 min',
    definition: 'A break in the mucosal lining of the stomach or duodenum extending through the muscularis mucosae, caused by an imbalance between mucosal protective factors (mucus, bicarbonate, prostaglandins) and damaging factors (acid, pepsin, H. pylori, NSAIDs).',
    keyPoints: [
      'H. pylori accounts for ~70% of gastric ulcers and ~90% of duodenal ulcers.',
      'Duodenal ulcers: pain RELIEVED by food; gastric ulcers: pain WORSENED by food.',
      'NSAIDs inhibit COX-1 → ↓ prostaglandins → ↓ mucosal protection.',
      'Alarm features (VBAS): Vomiting, weight loss (Bmi loss), Anaemia, Swallowing difficulty → urgent endoscopy.',
      'H. pylori eradication: Triple therapy (PPI + Clarithromycin + Amoxicillin × 14 days).',
    ],
    epidemiology: '<div class="quick-recall"><div class="recall-item"><span class="recall-label">Global Prevalence</span><span class="recall-value">~10% lifetime risk</span></div><div class="recall-item"><span class="recall-label">H. pylori Prevalence</span><span class="recall-value">~50% of world population infected</span></div><div class="recall-item"><span class="recall-label">Male:Female</span><span class="recall-value">~2 : 1 for duodenal ulcers</span></div></div>',
    riskFactors: '<ul><li><strong>H. pylori infection:</strong> #1 cause; faecal-oral transmission.</li><li><strong>NSAIDs:</strong> Including aspirin (non-selective COX inhibitors).</li><li><strong>Smoking:</strong> Impairs healing; doubles recurrence risk.</li><li><strong>Zollinger-Ellison Syndrome:</strong> Gastrinoma → massive acid hypersecretion.</li><li><strong>Stress ulcers:</strong> ICU patients (Cushing ulcer – brain injury; Curling ulcer – burns).</li></ul>',
    pathophysiology: `
      <h3>Mucosal Defence vs. Acid Attack</h3>
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> A castle wall (mucosa) being eroded by acid rain. H. pylori weakens the mortar (mucus layer), and NSAIDs remove the castle guards (prostaglandins). When the wall is breached, acid reaches the raw stone (submucosa) causing pain.
      </div>
      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "DU = Hunger Pain; GU = Meal Pain"</div>
        <div class="mnemonic-letter">D</div><div class="mnemonic-expansion"><strong>Duodenal Ulcer</strong> – pain 2–3 hrs after meals; relieved by antacids/food (acid washes into duodenum when empty).</div>
        <div class="mnemonic-letter">G</div><div class="mnemonic-expansion"><strong>Gastric Ulcer</strong> – pain provoked by eating (food stimulates acid secretion directly onto ulcer site).</div>
      </div>`,
    presentation: `
      <h3>Clinical Presentations & Complications</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Complication</th><th>Presentation</th><th>Key Management</th></tr></thead>
        <tbody>
          <tr><td><strong>Bleeding (UGIB)</strong></td><td>Haematemesis, melena; Rockford/Glasgow-Blatchford score</td><td>IV PPI + Endoscopy within 24 hrs</td></tr>
          <tr><td><strong>Perforation</strong></td><td>Sudden severe epigastric pain; rigid abdomen; air under diaphragm on CXR</td><td>Emergency laparotomy + PPi</td></tr>
          <tr><td><strong>Gastric Outlet Obstruction</strong></td><td>Projectile vomiting; succussion splash; hypokalaemic metabolic alkalosis</td><td>Endoscopic balloon dilation or surgery</td></tr>
          <tr><td><strong>Malignant Transformation</strong></td><td>Gastric ulcers ONLY – always biopsy × 4–6 sites</td><td>Repeat OGD at 6–8 weeks</td></tr>
        </tbody>
      </table>
      <div class="exam-trap"><strong>⚠️ Exam Trap – Duodenal ulcer vs Gastric cancer:</strong> Duodenal ulcers do NOT become malignant. Only GASTRIC ulcers require repeat OGD to exclude malignancy.</div>`,
    diagnostics: `
      <div class="step-flow">
        <div class="step-item"><div class="step-number">1</div><div class="step-content"><strong>H. pylori Testing</strong><p>Urea Breath Test (UBT) or Stool Antigen Test (non-invasive, first-line). Stop PPIs 2 weeks and antibiotics 4 weeks before testing to avoid false negatives.</p></div></div>
        <div class="step-item"><div class="step-number">2</div><div class="step-content"><strong>OGD (Endoscopy)</strong><p>Gold standard. Mandatory for gastric ulcers (biopsy), alarm features, or failed empirical therapy. Allows simultaneous treatment (injection, clipping, cautery for bleeding).</p></div></div>
        <div class="step-item"><div class="step-number">3</div><div class="step-content"><strong>Serum Gastrin Level</strong><p>If multiple/recurrent/refractory ulcers, suspect Zollinger-Ellison Syndrome. Gastrin &gt;1000 pg/mL is highly suggestive.</p></div></div>
        <div class="step-item"><div class="step-number">4</div><div class="step-content"><strong>Contrast Study / CT</strong><p>For perforation (free air on erect CXR) or obstruction assessment.</p></div></div>
      </div>`,
    management: `
      <h3>H. pylori Eradication Therapy</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Regimen</th><th>Drugs</th><th>Duration</th></tr></thead>
        <tbody>
          <tr><td><strong>Standard Triple</strong></td><td>PPI + Clarithromycin + Amoxicillin</td><td>14 days (preferred over 7)</td></tr>
          <tr><td><strong>Bismuth Quadruple</strong></td><td>PPI + Bismuth + Metronidazole + Tetracycline</td><td>10–14 days (Clarithromycin resistance areas)</td></tr>
          <tr><td><strong>Sequential</strong></td><td>PPI+Amox × 5d → PPI+Clarithromycin+Metro × 5d</td><td>10 days total</td></tr>
        </tbody>
      </table>
      <div class="clinical-pearl"><strong>🔑 Clinical Pearl – Test of Cure:</strong> Always confirm eradication with UBT or stool antigen ≥4 weeks after completing therapy.</div>`,
    keyReferences: [
      'ACG Clinical Guideline: Treatment of H. pylori Infection (2017)',
      'British Society of Gastroenterology – Non-variceal UGIB (2020)',
      'Maastricht VI Consensus Report on H. pylori (2022)',
    ],
    caseStudy: {
      profile: '45-year-old male chronic NSAID user',
      history: 'A 45-year-old male with rheumatoid arthritis presents with 3-month history of epigastric pain occurring 2–3 hours after meals, relieved by antacids. He takes naproxen 500 mg BD. He smokes 10 cigarettes/day. No alarm symptoms. Stool is dark on one occasion.',
      investigations: 'OGD shows a 1.2 cm duodenal ulcer. Rapid urease test (CLO test) is positive. H&E biopsy shows chronic active gastritis with H. pylori organisms.',
      questionsAnswers: [
        { q: 'What is the most important first step in management?', a: 'H. pylori eradication with standard triple therapy (PPI + Clarithromycin + Amoxicillin × 14 days) plus stopping naproxen if possible. Add a PPI to protect the mucosa while NSAID continues if it cannot be stopped.' },
        { q: 'When should you confirm eradication?', a: 'Perform Urea Breath Test or Stool Antigen Test ≥4 weeks after completing antibiotics and ≥2 weeks after stopping PPI to avoid false negatives.' },
        { q: 'Does this patient need repeat endoscopy?', a: 'No – duodenal ulcers do NOT require repeat OGD as they have no malignant potential. However, a gastric ulcer would require repeat OGD at 6–8 weeks with biopsies to confirm healing and exclude malignancy.' },
      ],
    },
    quizQuestions: [
      { question: 'A patient with a 1 cm gastric ulcer is treated with PPI + H. pylori eradication. What is the next mandatory step after 8 weeks?', options: ['Repeat OGD with biopsies', 'Continue PPI for 12 months', 'Serum gastrin level', 'CT abdomen'], answerIndex: 0, explanation: 'All gastric ulcers must have repeat OGD at 6–8 weeks to confirm healing and exclude malignancy (gastric cancer can mimic a benign ulcer). Duodenal ulcers do NOT need this.' },
      { question: 'Which test for H. pylori requires stopping PPIs 2 weeks beforehand to avoid false negatives?', options: ['Serology (IgG antibody)', 'Urea Breath Test', 'Rapid urease test (CLO)', 'Histology'], answerIndex: 1, explanation: 'The Urea Breath Test (UBT) and Stool Antigen Test can give false negatives if PPIs are used (they suppress H. pylori activity). Serology is not affected but does not distinguish active from past infection.' },
    ],
  },
  {
    id: 'barrett-esophagus',
    title: "Barrett's Oesophagus & Oesophageal Cancer",
    difficulty: 'hard',
    organ: 'Oesophagus',
    readTime: '14 min',
    definition: "Barrett's Oesophagus (BO) is intestinal metaplasia of the distal oesophageal squamous epithelium, replaced by columnar epithelium with goblet cells, driven by chronic GERD. It is the most significant premalignant lesion for oesophageal adenocarcinoma (OAC).",
    keyPoints: [
      "Barrett's: Specialised Intestinal Metaplasia (SIM) on biopsy – goblet cells are diagnostic.",
      '30–50× increased risk of Oesophageal Adenocarcinoma (OAC) vs. general population.',
      'Dysplasia grading: No dysplasia → Low-grade (LGD) → High-grade (HGD) → OAC.',
      'HGD: Endoscopic eradication therapy (EET) with RFA (Radiofrequency Ablation) + EMR.',
      'Oesophageal Squamous Cell Carcinoma (SCC) = upper/mid-oesophagus; smoking + alcohol.',
      'OAC = lower/GEJ; Barrett\'s + GERD + obesity.',
    ],
    epidemiology: '<div class="quick-recall"><div class="recall-item"><span class="recall-label">BO Prevalence</span><span class="recall-value">~1–2% of general population; ~10–15% of GERD patients</span></div><div class="recall-item"><span class="recall-label">OAC Incidence</span><span class="recall-value">Rising 6× over last 40 years in the West</span></div><div class="recall-item"><span class="recall-label">SCC vs OAC</span><span class="recall-value">SCC declining (West); OAC now >50% of oesophageal cancers</span></div></div>',
    riskFactors: '<ul><li><strong>Barrett\'s / OAC:</strong> Chronic GERD (&gt;5 yrs), male sex, age &gt;50, central obesity, white race, smoking.</li><li><strong>Squamous Cell Carcinoma:</strong> Heavy smoking, alcohol, achalasia, caustic stricture, Plummer-Vinson syndrome, HPV, hot tea drinking (Central Asia/Africa).</li></ul>',
    pathophysiology: `
      <h3>The Metaplasia–Dysplasia–Carcinoma Sequence</h3>
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> Acid reflux is like acid rain eroding the original tiles (squamous epithelium) of the oesophagus. The body replaces them with tiles designed for acid environments (columnar/intestinal epithelium from the stomach), creating Barrett's. Over years, some tiles crack further (dysplasia), and eventually a rogue tile takes over (cancer).
      </div>
      <table class="comparison-highlight">
        <thead><tr><th>Stage</th><th>Histology</th><th>Annual Cancer Risk</th><th>Management</th></tr></thead>
        <tbody>
          <tr><td>No Dysplasia</td><td>SIM, no atypia</td><td>~0.3%/year</td><td>Surveillance OGD every 3–5 years</td></tr>
          <tr><td>Low-Grade Dysplasia</td><td>Mild nuclear atypia</td><td>~0.5%/year</td><td>Confirmed by 2nd pathologist; RFA or surveillance</td></tr>
          <tr><td>High-Grade Dysplasia</td><td>Severe atypia, architecture preserved</td><td>~7%/year</td><td>Endoscopic Eradication Therapy (RFA + EMR)</td></tr>
          <tr><td>Adenocarcinoma</td><td>Invasive glands</td><td>—</td><td>Staging CT + PET; Surgery/Chemoradiotherapy</td></tr>
        </tbody>
      </table>`,
    presentation: `
      <h3>Clinical Presentation of Oesophageal Cancer</h3>
      <ul>
        <li><strong>Progressive dysphagia:</strong> Solids first → liquids (classic for malignant stricture).</li>
        <li><strong>Odynophagia:</strong> Painful swallowing (advanced disease).</li>
        <li><strong>Weight loss & anorexia:</strong> Systemic alarm features.</li>
        <li><strong>Regurgitation / aspiration:</strong> Large tumours with near-complete obstruction.</li>
        <li><strong>Hoarseness:</strong> Recurrent laryngeal nerve invasion.</li>
        <li><strong>Haematemesis:</strong> Tumour erosion into vessel.</li>
      </ul>
      <div class="exam-trap"><strong>⚠️ Exam Trap – Dysphagia Localisation:</strong> Patients typically point 2–3 vertebral levels ABOVE the true tumour level. Always confirm with endoscopy, not patient pointing.</div>`,
    diagnostics: `
      <div class="step-flow">
        <div class="step-item"><div class="step-number">1</div><div class="step-content"><strong>OGD + Biopsy (Gold Standard)</strong><p>Confirms diagnosis and histological type. Salmon-coloured mucosa at GEJ ≥1 cm = Barrett's. Biopsied using Prague Classification (C & M criteria).</p></div></div>
        <div class="step-item"><div class="step-number">2</div><div class="step-content"><strong>CT Chest/Abdomen/Pelvis</strong><p>Initial staging for metastatic disease. PET-CT adds functional staging and detects occult metastases.</p></div></div>
        <div class="step-item"><div class="step-number">3</div><div class="step-content"><strong>Endoscopic Ultrasound (EUS)</strong><p>Best for local T-staging (depth of invasion) and N-staging (regional lymph nodes). Critical before deciding on surgery vs. endoscopic therapy.</p></div></div>
        <div class="step-item"><div class="step-number">4</div><div class="step-content"><strong>Laparoscopy</strong><p>For GEJ tumours – rules out peritoneal metastases not seen on CT/PET before committing to oesophagectomy.</p></div></div>
      </div>`,
    management: `
      <h3>Treatment by Stage</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Stage</th><th>Treatment</th></tr></thead>
        <tbody>
          <tr><td>Barrett's + HGD / T1a OAC</td><td>Endoscopic mucosal resection (EMR) + Radiofrequency Ablation (RFA)</td></tr>
          <tr><td>T1b–T3, no metastases</td><td>Neoadjuvant chemoradiotherapy (CROSS protocol) → Oesophagectomy</td></tr>
          <tr><td>Metastatic / Unresectable</td><td>Palliative chemotherapy (FLOT/CF regimen); Stent for dysphagia</td></tr>
        </tbody>
      </table>
      <div class="clinical-pearl"><strong>🔑 Clinical Pearl – CROSS Protocol:</strong> Carboplatin + Paclitaxel + 41.4 Gy RT × 5 weeks → then surgery. Improves R0 resection rate and overall survival (CROSS trial, NEJM 2012).</div>`,
    keyReferences: [
      "BSG Guidelines on Barrett's Oesophagus (2014, updated 2023)",
      'ACG Clinical Guideline: Diagnosis, Staging and Management of Oesophageal Cancer (2022)',
      'CROSS Trial – Van Hagen et al., NEJM 2012',
    ],
    caseStudy: {
      profile: '58-year-old male with 20-year GERD history',
      history: 'A 58-year-old obese male (BMI 33) with a 20-year history of GERD presents for routine surveillance OGD. He is a non-smoker. Previous OGD 3 years ago showed Barrett\'s with no dysplasia. Today\'s OGD reveals salmon-coloured mucosa extending 4 cm above the GEJ (C3M4). Biopsies show high-grade dysplasia confirmed by a second pathologist.',
      investigations: 'EUS shows no submucosal invasion (T1a). No lymphadenopathy. CT chest/abdomen/pelvis: no metastases.',
      questionsAnswers: [
        { q: 'What is the most appropriate next management step?', a: 'Endoscopic eradication therapy: Endoscopic Mucosal Resection (EMR) of any visible nodules + Radiofrequency Ablation (RFA) of the remaining Barrett\'s segment. This is preferred over oesophagectomy for T1a HGD.' },
        { q: 'How do you classify the Barrett\'s segment?', a: 'Prague Classification: C3M4 means 3 cm of circumferential (C) involvement and 4 cm of maximum (M) extent. This is documented at each surveillance endoscopy.' },
      ],
    },
    quizQuestions: [
      { question: "Which histological finding is required to diagnose Barrett's oesophagus?", options: ['Columnar epithelium only', 'Goblet cells (intestinal metaplasia)', 'Squamous metaplasia', 'Parietal cell hyperplasia'], answerIndex: 1, explanation: "Barrett's requires specialised intestinal metaplasia (SIM) with goblet cells on biopsy. Columnar epithelium alone is not sufficient." },
      { question: 'A patient with T1a oesophageal adenocarcinoma arising in Barrett\'s with HGD. What is the preferred treatment?', options: ['Oesophagectomy', 'Chemotherapy alone', 'Endoscopic Mucosal Resection + RFA', 'Surveillance only'], answerIndex: 2, explanation: 'T1a lesions (confined to mucosa) are ideal for endoscopic therapy (EMR + RFA), which is curative with lower morbidity than oesophagectomy.' },
    ],
  },
];

// Append only lessons whose IDs don't already exist
const existingIds = new Set(gitLessons.map(l => l.id));
let added = 0;
for (const lesson of newUpperGITLessons) {
  if (!existingIds.has(lesson.id)) {
    gitLessons.push(lesson);
    added++;
  } else {
    console.log('⏭  Skipped (already exists):', lesson.id);
  }
}

fs.writeFileSync(gitPath, encodePayload('lessonsData', gitLessons), 'utf8');
console.log(`✅ Upper GIT lessons: ${added} added, total now ${gitLessons.length}`);

// ─── 3. Add a new "Upper GIT Deep Dive" collection ────────────────────────────
const collectionsPath = 'js/collections-data.js';
const collections = decodePayload(collectionsPath);

const newCollection = {
  id: 'upper-git-deep-dive',
  title: 'Upper GIT Deep Dive',
  icon: '🔬',
  description: 'Comprehensive enriched lessons covering Barrett\'s Oesophagus, Peptic Ulcer Disease, and GERD – with epidemiology, risk factors, diagnostic algorithms, and latest treatment guidelines.',
  lessonIds: ['gerd', 'peptic-ulcer', 'barrett-esophagus'],
  difficulty: 'hard',
  tag: 'NEW',
};

const collectionExists = collections.some(c => c.id === newCollection.id);
if (!collectionExists) {
  collections.push(newCollection);
  console.log('✅ New collection added: upper-git-deep-dive');
} else {
  console.log('⏭  Collection already exists: upper-git-deep-dive');
}

fs.writeFileSync(collectionsPath, encodePayload('collectionsData', collections), 'utf8');
console.log('✅ Done. All files updated.');
