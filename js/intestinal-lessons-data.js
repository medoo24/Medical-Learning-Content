const intestinalLessonsData = [
  // ============================================================
  // LESSON 1: CHRONIC DIARRHEA
  // ============================================================
  {
    id: "chronic-diarrhea",
    title: "Chronic Diarrhea & IBD",
    difficulty: "medium",
    organ: "Intestines",
    readTime: "12 min",
    definition: "Loose or watery stools that persist for at least 4 weeks, typically presenting as three or more loose stools per day. Can be broadly categorized into watery (osmotic/secretory), fatty (malabsorptive), and inflammatory (exudative).",
    keyPoints: [
      "Chronic diarrhea is defined by duration > 4 weeks.",
      "Watery diarrhea is classified by osmotic gap: >125 = Osmotic, <50 = Secretory.",
      "Inflammatory diarrhea presents with blood/pus and elevated fecal calprotectin.",
      "A travel history is essential, but common causes still prevail.",
      "Biologics (anti-TNF, anti-integrin) are reserved for moderate-to-severe IBD."
    ],
    epidemiology: `
      <div class="quick-recall">
        <div class="recall-item">
          <span class="recall-label">Timeframe</span>
          <span class="recall-value">≥ 4 weeks</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Stool Frequency</span>
          <span class="recall-value">≥ 3 loose stools/day</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Functional Cause (Most Common)</span>
          <span class="recall-value">IBS</span>
        </div>
      </div>
    `,
    pathophysiology: `
      <h3>The Three Major Categories of Chronic Diarrhea</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Category</th><th>Subtypes</th><th>Classic Features</th></tr></thead>
        <tbody>
          <tr><td><strong>Watery</strong></td><td>Osmotic, Secretory, Functional</td><td>High volume, no blood/pus. Secretory continues with fasting; Osmotic stops with fasting.</td></tr>
          <tr><td><strong>Fatty (Malabsorption)</strong></td><td>Maldigestion, Mucosal Damage</td><td>Steatorrhea, foul-smelling, difficult to flush, weight loss, bloating.</td></tr>
          <tr><td><strong>Inflammatory</strong></td><td>IBD, Invasive Infections, Radiation</td><td>Blood and pus in stool, elevated WBC, positive fecal calprotectin.</td></tr>
        </tbody>
      </table>

      <h3>Watery Diarrhea — Osmotic vs Secretory</h3>
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> The bowel is a water slide. In <strong>Osmotic diarrhea</strong>, you swallow a sponge (unabsorbed solutes like lactose or laxatives) that pulls water into the slide with it. If you stop eating the sponge (fasting), the water stops. In <strong>Secretory diarrhea</strong>, the walls of the slide are actively spraying water into the lumen (toxins, hormones). Even if you stop eating (fasting), the spraying continues, so the diarrhea persists at night!
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — The Fecal Osmotic Gap:</strong> 
        Calculated as: <em>290 - 2 × (Stool Na⁺ + Stool K⁺)</em>.
        <ul>
          <li><strong>Osmotic Gap > 125 mOsm/kg:</strong> Suggests OSMOTIC diarrhea (carbohydrate malabsorption, celiac, osmotic laxatives).</li>
          <li><strong>Osmotic Gap < 50 mOsm/kg:</strong> Suggests SECRETORY diarrhea (toxins, neuroendocrine tumors like VIPoma, bile acid malabsorption).</li>
        </ul>
      </div>

      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "Fatty MAD" — Causes of Fatty Diarrhea</div>
        <div class="mnemonic-letter">M</div><div class="mnemonic-expansion"><strong>Mucosal damage</strong> — Celiac sprue, Tropical sprue, Whipple disease, Giardia</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Anatomic/Lymphatic</strong> — Short bowel syndrome, Gastric bypass, Lymphoma</div>
        <div class="mnemonic-letter">D</div><div class="mnemonic-expansion"><strong>Digestion failure</strong> — Pancreatic exocrine insufficiency, Hepatobiliary disease</div>
      </div>
    `,
    presentation: `
      <h3>Physical Examination: Hot Points</h3>
      <ul>
        <li><strong>Dermatitis herpetiformis:</strong> Itchy, blistering rash found in 15-25% of Celiac disease patients.</li>
        <li><strong>Eye findings:</strong> Episcleritis (IBD) or Exophthalmos (Hyperthyroidism).</li>
        <li><strong>Lymphadenopathy / Weight loss:</strong> Suspect chronic infection (HIV, Whipple) or malignancy (Lymphoma).</li>
        <li><strong>Anal fistulae / Abscesses:</strong> Highly suggestive of Crohn's disease.</li>
      </ul>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Fecal Impaction causing Diarrhea?</strong> Elderly or bedbound patients may present with "chronic diarrhea" that is actually liquid stool leaking around a massive fecal impaction in the rectum (Encopresis / Paradoxical Diarrhea). Always do a digital rectal exam (PR) or a quick anoscopy!
      </div>
    `,
    diagnostics: `
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Basic Blood & Stool Labs</strong><p>CBC, CRP, ESR, LFTs, Thyroid profile. Stool for occult blood, leukocytes, and culture.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Fecal Calprotectin</strong><p>A neutrophil activity marker. Extremely useful and sensitive for distinguishing inflammatory (IBD) from functional (IBS) diarrhea.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>C. difficile Toxin</strong><p>Always check if there is a recent history of hospitalization or antibiotic use.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content"><strong>Endoscopy / Colonoscopy</strong><p>With tissue biopsy. The gold standard to definitively diagnose microscopic colitis or IBD.</p></div>
        </div>
      </div>
    `,
    management: `
      <h3>General Chronic Diarrhea Management</h3>
      <p>Treat the underlying cause. Symptomatic relief includes: anti-diarrheals (loperamide), fiber supplements (bulk-forming), oral rehydration therapy, and in severe malabsorptive cases, TPN or tube feeding.</p>

      <h3>IBD Treatment Escalation (Ulcerative Colitis)</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>5-Aminosalicylates (5-ASA)</strong><p>Sulfasalazine, Mesalamine (oral or topical/enema). First-line for mild-to-moderate disease.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Corticosteroids</strong><p>Prednisone, Budesonide. For acute flares or moderate-to-severe disease. Not for long-term maintenance due to side effects.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Immunosuppressants</strong><p>Azathioprine (Imuran), 6-Mercaptopurine (6-MP), Cyclosporine. To maintain remission and spare steroids.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content"><strong>Biologics</strong><p>Anti-TNF (Infliximab, Adalimumab), Anti-integrin (Vedolizumab), Anti-IL12/23 (Ustekinumab). For severe/refractory cases.</p></div>
        </div>
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — NSAIDs and IBD:</strong> Avoid NSAIDs (Ibuprofen, Naproxen, Diclofenac) in patients with IBD! They inhibit prostaglandins (which protect the gut mucosa) and can trigger severe disease flares. Use acetaminophen for mild pain instead.
      </div>
    `,
    caseStudy: {
      profile: "Young adult with bloody diarrhea",
      history: "A 24-year-old male presents with 2 months of frequent, small-volume bloody diarrhea (6-8 times a day), lower abdominal cramping, and tenesmus (feeling of incomplete evacuation). He has lost 4 kg. He has a low-grade fever but no travel history.",
      investigations: "PR exam shows red blood. Fecal calprotectin is highly elevated. Stool cultures are negative for infectious organisms. Colonoscopy reveals continuous mucosal inflammation, erythema, and friability extending from the rectum to the splenic flexure.",
      questionsAnswers: [
        { q: "What is the diagnosis?", a: "Ulcerative Colitis (Left-sided). The continuous involvement starting from the rectum (proctitis) and extending proximally is classic for UC, unlike Crohn's which has skip lesions." },
        { q: "What is the initial medical therapy?", a: "Topical (enema) and oral 5-aminosalicylates (Mesalamine) to induce and maintain remission. If severe, oral corticosteroids may be added initially." },
        { q: "What medication should be used with extreme caution or avoided for symptomatic relief of his diarrhea?", a: "Loperamide (Imodium). In acute severe flares of UC, anti-diarrheals and antispasmodics can precipitate Toxic Megacolon, a life-threatening complication." }
      ]
    },
    mcqs: [
      {
        question: "A patient presents with chronic watery diarrhea. Fasting for 24 hours causes the diarrhea to stop. Stool electrolytes show a fecal osmotic gap of 150 mOsm/kg. What is the most likely diagnosis?",
        options: [ "VIPoma (neuroendocrine tumor)", "Cholera infection", "Lactose intolerance", "Microscopic colitis" ],
        answerIndex: 2,
        explanation: "This is osmotic diarrhea (stops with fasting, gap > 125). Lactose intolerance causes osmotic diarrhea due to unabsorbed carbohydrates pulling water into the bowel. The other options cause secretory diarrhea (persists with fasting, gap < 50)."
      },
      {
        question: "Which of the following physical exam findings is classically associated with Celiac disease?",
        options: [ "Erythema nodosum", "Dermatitis herpetiformis", "Pyoderma gangrenosum", "Koplik spots" ],
        answerIndex: 1,
        explanation: "Dermatitis herpetiformis is an intensely pruritic, blistering rash typically found on extensor surfaces, seen in 15-25% of patients with celiac disease due to IgA deposition."
      },
      {
        question: "Which biologic agent used for Ulcerative Colitis specifically blocks inflammatory cells (lymphocytes) from migrating into the gut mucosa by targeting integrins?",
        options: [ "Infliximab", "Adalimumab", "Vedolizumab", "Ustekinumab" ],
        answerIndex: 2,
        explanation: "Vedolizumab (Entyvio) is a gut-selective anti-integrin antibody that blocks lymphocyte trafficking to the gut. Infliximab and Adalimumab are anti-TNF agents."
      }
    ]
  },
  // ============================================================
  // LESSON 2: CHRONIC CONSTIPATION
  // ============================================================
  {
    id: "chronic-constipation",
    title: "Chronic Constipation & Dyssynergia",
    difficulty: "medium",
    organ: "Large Intestine",
    readTime: "10 min",
    definition: "Decreased number of defecations (<3 times per week) accompanied by symptoms such as the sensation of incomplete evacuation (tenesmus), straining, passage of hard stools, or the need for digital maneuvers.",
    keyPoints: [
      "Digital Rectal Exam (DRE) is critical to diagnose pelvic floor dyssynergia.",
      "Primary constipation includes functional, IBS-C, slow transit, and defecatory disorders.",
      "Secondary causes are often drug-induced (opiates, anticholinergics, CCBs) or metabolic (hypothyroidism, hypercalcemia).",
      "Anorectal manometry and balloon expulsion tests are key for diagnosing dyssynergic defecation.",
      "Biofeedback is the preferred treatment for functional defecatory disorders."
    ],
    epidemiology: `
      <h3>The Bristol Stool Chart</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Type</th><th>Appearance</th><th>Interpretation</th></tr></thead>
        <tbody>
          <tr><td><strong>Type 1</strong></td><td>Separate hard lumps (like nuts)</td><td><strong>Severe constipation</strong></td></tr>
          <tr><td><strong>Type 2</strong></td><td>Lumpy and sausage-like</td><td>Mild constipation</td></tr>
          <tr><td><strong>Type 3 & 4</strong></td><td>Smooth, soft sausage or snake-like</td><td><strong>Normal</strong></td></tr>
          <tr><td><strong>Type 5</strong></td><td>Soft blobs with clear-cut edges</td><td>Lacking fiber</td></tr>
          <tr><td><strong>Type 6 & 7</strong></td><td>Mushy / Liquid consistency</td><td>Mild to Severe diarrhea</td></tr>
        </tbody>
      </table>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Rome IV Criteria Timing:</strong> For a diagnosis of Functional Constipation, symptoms must be present for the last <strong>3 months</strong>, with symptom onset at least <strong>6 months</strong> prior to diagnosis. You need ≥2 symptoms (straining, hard stools, incomplete evacuation, manual maneuvers, <3 BMs/week).
      </div>
    `,
    pathophysiology: `
      <h3>Primary vs. Secondary Constipation</h3>
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> A stalled train. In <strong>Primary Slow Transit</strong>, the engine is broken (weak colonic muscles). In <strong>Primary Dyssynergia (Defecation Disorder)</strong>, the train is fine, but the station doors won't open (pelvic floor paradoxically contracts instead of relaxing). In <strong>Secondary Constipation</strong>, someone pulled the emergency brake (opiates, anticholinergics, hypothyroidism, or a physical tumor blocking the tracks).
      </div>

      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "M-O-A-N" — Key Drugs Causing Constipation</div>
        <div class="mnemonic-letter">M</div><div class="mnemonic-expansion"><strong>Minerals</strong> — Iron supplements, Calcium, Aluminum antacids</div>
        <div class="mnemonic-letter">O</div><div class="mnemonic-expansion"><strong>Opiates</strong> — Morphine, Codeine (reduce motility globally)</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Anticholinergics / Antidepressants</strong> — TCAs, Antihistamines, Antispasmodics</div>
        <div class="mnemonic-letter">N</div><div class="mnemonic-expansion"><strong>Nifedipine (CCBs)</strong> — Calcium channel blockers relax smooth muscle</div>
      </div>
    `,
    presentation: `
      <h3>Clinical History & Alarming Features</h3>
      <p>Patients may report unusual toilet postures, perineal support, or digitation (manual maneuvers) to facilitate stool expulsion. Always ask about the "Alarming Features" that demand a colonoscopy.</p>

      <div class="mnemonic-card">
        <div class="mnemonic-title">🧠 Mnemonic: "ALARM" — Constipation Red Flags</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Anemia</strong> — Iron-deficiency (unexplained)</div>
        <div class="mnemonic-letter">L</div><div class="mnemonic-expansion"><strong>Loss of weight / Late onset</strong> — Unintended weight loss or new onset in age > 45</div>
        <div class="mnemonic-letter">A</div><div class="mnemonic-expansion"><strong>Abdominal mass</strong> — Palpable mass on exam</div>
        <div class="mnemonic-letter">R</div><div class="mnemonic-expansion"><strong>Rectal bleeding / Ribbon stools</strong> — Blood in stool or change in stool caliber</div>
        <div class="mnemonic-letter">M</div><div class="mnemonic-expansion"><strong>Malignancy history</strong> — Family history of GI cancer</div>
      </div>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — The DRE:</strong> A Digital Rectal Exam is absolutely essential. It not only checks for masses, strictures, and impacted stool, but it can diagnose <strong>pelvic floor dyssynergia</strong> (you will feel the anal sphincter paradoxically tighten instead of relax when you ask the patient to bear down).
      </div>
    `,
    diagnostics: `
      <h3>Diagnostic Algorithm</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Initial Trial</strong><p>Rule out secondary causes (labs, colonoscopy if alarm features). Treat with Fiber + Laxatives.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Anorectal Manometry & Balloon Expulsion</strong><p>If initial trial fails, test for defecatory disorders. If the patient cannot expel a water-filled balloon within 1 minute, or manometry shows paradoxical contraction → <strong>Dyssynergic Defecation</strong>.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Colonic Transit Time</strong><p>If manometry is normal, use Radiopaque markers (Sitzmarks) or a Wireless Motility Capsule to differentiate Slow Transit Constipation from Normal Transit (IBS-C).</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content"><strong>Defecography (MRI/Barium)</strong><p>If tests are inconclusive, this dynamic imaging shows the anatomical mechanics of defecation (e.g., rectocele, intussusception).</p></div>
        </div>
      </div>
    `,
    management: `
      <h3>Treatment by Subtype</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Diagnosis</th><th>First-Line / Preferred Treatment</th></tr></thead>
        <tbody>
          <tr><td><strong>Defecatory Disorder (Dyssynergia)</strong></td><td><strong>Biofeedback Therapy</strong> (pelvic floor retraining). Medical therapy alone often fails.</td></tr>
          <tr><td><strong>Slow Transit Constipation</strong></td><td>Osmotic laxatives (PEG), Prosecretory agents (Lubiprostone, Linaclotide), or Prokinetics (Prucalopride).</td></tr>
          <tr><td><strong>Normal Transit / IBS-C</strong></td><td>Fiber, osmotic laxatives, Linaclotide.</td></tr>
        </tbody>
      </table>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Dyssynergia Treatment:</strong> On exams, if a patient is diagnosed with pelvic floor dyssynergia (paradoxical puborectalis contraction), do NOT choose laxatives or surgery as the next step. The correct answer is always <strong>Biofeedback</strong> (physical therapy to retrain the muscles).
      </div>
    `,
    caseStudy: {
      profile: "Young female with excessive straining",
      history: "A 19-year-old female presents with a two-year history of constipation (2 BMs/week) and excessive straining. She denies weight loss, bleeding, or family history of cancer. Her abdominal exam is normal.",
      investigations: "DRE reveals normal resting tone, but when asked to push, there is paradoxical contraction of the sphincter. Anorectal manometry confirms paradoxical contraction of the external sphincter. The balloon expulsion test is impaired (>2 minutes).",
      questionsAnswers: [
        { q: "What is the diagnosis?", a: "Functional Defecation Disorder (Dyssynergic Defecation). The hallmark is the inability to relax the pelvic floor muscles (puborectalis and external anal sphincter) during attempted defecation." },
        { q: "What is the most appropriate treatment for her?", a: "Biofeedback therapy. This will teach her to coordinate abdominal pushing with pelvic floor relaxation. Laxatives alone will not overcome the functional muscular outlet obstruction." },
        { q: "Does she need a colonoscopy?", a: "No. She is 19 years old with no alarm symptoms (no bleeding, no weight loss, no family history). A colonoscopy is not indicated at this time." }
      ]
    },
    mcqs: [
      {
        question: "Which of the following medications is most likely to cause severe secondary constipation?",
        options: [ "Metformin", "Verapamil (Calcium Channel Blocker)", "Amoxicillin", "Lisinopril (ACE Inhibitor)" ],
        answerIndex: 1,
        explanation: "Verapamil, a calcium channel blocker, commonly causes constipation by relaxing the smooth muscle of the colon. Opiates and anticholinergics are also major culprits."
      },
      {
        question: "A 55-year-old man presents with chronic constipation. Anorectal manometry and balloon expulsion tests are normal. A radiopaque marker study shows 80% of the markers retained scattered throughout the colon on day 5. What is the diagnosis?",
        options: [ "Dyssynergic defecation", "Slow transit constipation", "Normal transit constipation", "Rectocele" ],
        answerIndex: 1,
        explanation: "Retention of markers throughout the colon on day 5 indicates slow colonic transit. Normal manometry and balloon expulsion rule out an outlet (defecatory) disorder like dyssynergia."
      }
    ]
  },
  // ============================================================
  // LESSON 3: MESENTERIC ISCHEMIA
  // ============================================================
  {
    id: "mesenteric-ischemia",
    title: "Mesenteric Ischemia (Acute & Chronic)",
    difficulty: "hard",
    organ: "Intestines / Vasculature",
    readTime: "15 min",
    definition: "A syndrome caused by inadequate blood flow through the mesenteric vessels (usually the SMA), resulting in bowel ischemia and potential life-threatening gangrene (Acute) or postprandial 'intestinal angina' (Chronic).",
    keyPoints: [
      "Acute Ischemia classically presents as pain 'out of proportion' to physical exam findings.",
      "AMAE (Embolism) is the most abrupt onset; usually from AFib or Endocarditis.",
      "NOMI (Non-occlusive) is caused by severe hypotension/shock or vasopressors.",
      "Chronic Ischemia presents as postprandial pain leading to 'food fear' and weight loss.",
      "CT Angiography is the diagnostic test of choice."
    ],
    epidemiology: `
      <h3>Types of Acute Mesenteric Ischemia (AMI)</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Type</th><th>Key Cause / Risk Factor</th><th>Onset</th></tr></thead>
        <tbody>
          <tr><td><strong>AMAE (Embolism)</strong></td><td>Atrial Fibrillation, MI mural thrombus, Endocarditis</td><td>Abrupt (minutes) - "Bowel Attack"</td></tr>
          <tr><td><strong>AMAT (Thrombosis)</strong></td><td>Pre-existing visceral atherosclerosis</td><td>Hours (Often has history of Chronic Ischemia)</td></tr>
          <tr><td><strong>NOMI (Nonocclusive)</strong></td><td>Cardiogenic/Septic shock, Vasopressors, Cocaine</td><td>Days (Low flow state)</td></tr>
          <tr><td><strong>MVT (Venous Thrombosis)</strong></td><td>Hypercoagulability, Portal HTN, Intra-abdominal infection</td><td>Acute/Subacute (Venous congestion)</td></tr>
        </tbody>
      </table>
    `,
    pathophysiology: `
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> A heart attack, but in the gut. Just as a blocked coronary artery causes myocardial infarction, a blocked Superior Mesenteric Artery (SMA) causes intestinal infarction. The mucosa is highly sensitive to hypoxia. Once it dies, the mucosal barrier breaks down, releasing bacteria and toxins into the blood (Septic Shock), often killing the patient before the bowel physically perforates.
      </div>

      <h3>Pathologic Timeline of AMI</h3>
      <ul>
        <li><strong>Early (Reversible):</strong> Mucosal ischemia. Severe pain, but physically the bowel looks intact from the outside. No peritoneal signs.</li>
        <li><strong>Late (8-12 hours):</strong> Transmural infarction with necrosis. The bowel wall dies and leaks. Peritonitis develops (surgical abdomen).</li>
      </ul>
    `,
    presentation: `
      <h3>Acute Mesenteric Ischemia (AMI)</h3>
      <p>The hallmark is <strong>severe, diffuse abdominal pain out of proportion to physical findings</strong>. Early on, the patient screams in agony, but the abdomen is soft and non-tender. Later (8-12 hours), the bowel necrotizes, leading to peritonitis (rigid abdomen, rebound tenderness) and septic shock (fever, hypotension, altered mental status).</p>

      <h3>Chronic Mesenteric Ischemia (Intestinal Angina)</h3>
      <p>Occurs due to gradual atherosclerotic plaque buildup (usually requires 2 of 3 major mesenteric arteries to be blocked).</p>
      <ul>
        <li><strong>Postprandial Pain:</strong> Severe abdominal pain starting 15-60 minutes after eating and lasting up to 90 minutes.</li>
        <li><strong>Food Fear:</strong> Patients become afraid to eat due to the pain (sitophobia).</li>
        <li><strong>Weight Loss:</strong> A direct consequence of eating less.</li>
      </ul>

      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — NOMI & Cocaine:</strong> In young patients presenting with signs of Acute Mesenteric Ischemia, always ask about cocaine use. Oral ingestion (or sometimes IV/insufflation) causes profound splanchnic vasoconstriction leading to Nonocclusive Mesenteric Ischemia (NOMI).
      </div>
    `,
    diagnostics: `
      <h3>Diagnostic Studies</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Basic Labs</strong><p>CBC (leukocytosis), High Lactate (indicates tissue ischemia/necrosis), High Amylase/LDH, Metabolic Acidosis.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Abdominal X-Ray</strong><p>Often normal early on. Later may show "thumbprinting" (focal bowel edema) or pneumatosis intestinalis (gas in the bowel wall = ominous sign).</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>CT Angiography (CTA)</strong><p>The diagnostic test of choice. Very high specificity (>95%) for viewing arterial occlusions, venous thrombosis, and lack of bowel wall enhancement.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content"><strong>Echo & ECG</strong><p>Perform to find the embolic source (e.g., AFib, valvular vegetation) in cases of AMAE.</p></div>
        </div>
      </div>
    `,
    management: `
      <h3>Treatment of Acute Mesenteric Ischemia</h3>
      <p><strong>Initial:</strong> Vigorous IV fluid resuscitation, correction of acidosis, and broad-spectrum antibiotics.</p>
      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Peritonitis = Surgery:</strong> Regardless of the cause, if the patient has peritoneal signs (rebound, rigidity), they have bowel infarction. The immediate step is <strong>exploratory laparotomy</strong> to resect the dead bowel.
      </div>
      <ul>
        <li><strong>AMAE (Embolism):</strong> Surgical embolectomy, Papaverine infusion (vasodilator to relieve spasm).</li>
        <li><strong>AMAT (Thrombosis):</strong> Arterial reconstruction / bypass.</li>
        <li><strong>NOMI:</strong> Intra-arterial Papaverine infusion to break the vasospasm.</li>
        <li><strong>MVT (Venous):</strong> Anticoagulation (Heparin/Warfarin). Surgery only if bowel is infarcted.</li>
      </ul>

      <h3>Treatment of Chronic Mesenteric Ischemia</h3>
      <p>Angioplasty with stenting or surgical bypass to restore flow. Must implement lifestyle changes (quit smoking, statins, aspirin, control diabetes) to manage underlying atherosclerosis.</p>
    `,
    caseStudy: {
      profile: "Elderly patient with AFib and acute pain",
      history: "A 72-year-old male with a history of atrial fibrillation (not compliant with anticoagulants) presents to the ER with sudden, agonizing abdominal pain that started 2 hours ago. He has vomited once and had an episode of forceful diarrhea.",
      investigations: "On exam, he is writhing in pain, but his abdomen is soft, non-distended, and remarkably non-tender to palpation. Bowel sounds are hyperactive. Lactate is elevated (4.2 mmol/L).",
      questionsAnswers: [
        { q: "What is the most likely diagnosis?", a: "Acute Mesenteric Arterial Embolism (AMAE). The sudden onset, history of AFib, and classic 'pain out of proportion to exam' are highly indicative of an embolic event blocking the SMA." },
        { q: "What is the best diagnostic imaging test to confirm this?", a: "CT Angiography (CTA) of the abdomen and pelvis. It will show the abrupt cutoff of the contrast in the superior mesenteric artery." },
        { q: "If this patient presented 12 hours later with a rigid, board-like abdomen, what would be the next step?", a: "Immediate exploratory laparotomy. A rigid abdomen indicates peritonitis and bowel infarction. Delaying for imaging in a patient with a surgical abdomen can be fatal." }
      ]
    },
    mcqs: [
      {
        question: "A 65-year-old heavy smoker presents with a 6-month history of severe abdominal pain that occurs 30 minutes after eating. She has lost 10 kg because she is afraid to eat. What is the underlying pathophysiology of her condition?",
        options: [ "Arterial embolism from atrial fibrillation", "Venous thrombosis due to hypercoagulability", "Atherosclerotic narrowing of mesenteric arteries", "Vasospasm due to low cardiac output" ],
        answerIndex: 2,
        explanation: "This is the classic presentation of Chronic Mesenteric Ischemia ('intestinal angina'). It is caused by progressive atherosclerotic stenosis of the mesenteric vessels, leading to ischemia when the bowel demands more oxygen during digestion."
      },
      {
        question: "Which of the following physical exam findings is most characteristic of early Acute Mesenteric Ischemia?",
        options: [ "Board-like abdominal rigidity", "Pain out of proportion to physical findings", "A palpable pulsatile abdominal mass", "Severe right lower quadrant tenderness" ],
        answerIndex: 1,
        explanation: "In early AMI, before transmural infarction and peritonitis occur, the patient experiences severe ischemic pain, but the parietal peritoneum is not inflamed, resulting in a soft, non-tender abdomen ('pain out of proportion')."
      }
    ]
  },
  // ============================================================
  // LESSON 4: DIVERTICULAR DISEASE
  // ============================================================
  {
    id: "diverticulosis",
    title: "Diverticulosis & Diverticulitis",
    difficulty: "medium",
    organ: "Large Intestine",
    readTime: "12 min",
    definition: "Diverticulosis occurs when small bulging pouches (pseudo-diverticula containing mucosa and serosa only) develop in the digestive tract. It spans a spectrum from asymptomatic pouches to acute inflammation (diverticulitis) and life-threatening hemorrhage.",
    keyPoints: [
      "It is a disease of Western civilization, highly associated with low dietary fiber.",
      "Most common in the Left Colon (Sigmoid) in Westerners; Right Colon in Asians.",
      "Avoid colonoscopy during Acute Diverticulitis due to the high risk of perforation.",
      "CT Scan with contrast is the diagnostic test of choice for acute diverticulitis.",
      "Diverticular hemorrhage presents as abrupt, painless hematochezia."
    ],
    epidemiology: `
      <div class="quick-recall">
        <div class="recall-item">
          <span class="recall-label">Western Location</span>
          <span class="recall-value">Left Colon (90% Sigmoid)</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Gender Difference</span>
          <span class="recall-value">Men: More Bleeding | Women: More Strictures</span>
        </div>
        <div class="recall-item">
          <span class="recall-label">Key Risk Factor</span>
          <span class="recall-value">Low Fiber / High Meat Diet</span>
        </div>
      </div>
      
      <p>Pseudo-diverticula form at weak points in the colon wall where vasa recta vessels penetrate the circular muscle layer, specifically between the two antimesenteric taenia.</p>
    `,
    pathophysiology: `
      <h3>Hinchey Classification of Colonic Perforation</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Stage</th><th>Description</th><th>Standard Management</th></tr></thead>
        <tbody>
          <tr><td><strong>Stage I</strong></td><td>Confined pericolic abscess (small)</td><td>Antibiotics ± CT-guided drainage</td></tr>
          <tr><td><strong>Stage II</strong></td><td>Distant abscess (retroperitoneal or pelvic)</td><td>Surgery (Primary anastomosis or Hartmann's)</td></tr>
          <tr><td><strong>Stage III</strong></td><td>Generalized purulent peritonitis (abscess rupture)</td><td>Surgical Emergency</td></tr>
          <tr><td><strong>Stage IV</strong></td><td>Fecal peritonitis (free rupture communicating with lumen)</td><td>Surgical Emergency</td></tr>
        </tbody>
      </table>

      <h3>Diverticular Hemorrhage</h3>
      <p>Diverticulosis is the <strong>most common identifiable cause of significant lower GI bleeding</strong> (30-40%).</p>
      <ul>
        <li><strong>Pathophysiology:</strong> Intimal thickening and medial thinning of the vasa recta as it courses over the dome of the diverticulum leads to rupture.</li>
        <li><strong>Risk Factor:</strong> NSAIDs are heavily implicated.</li>
        <li><strong>Presentation:</strong> Abrupt, <strong>painless</strong> hematochezia (red/maroon clots).</li>
        <li><strong>Prognosis:</strong> Stops spontaneously in 70-80% of cases.</li>
      </ul>
      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Occult Blood:</strong> Neither a positive fecal occult blood test nor iron-deficiency anemia should EVER be attributed to diverticular hemorrhage! Always work up for colon cancer.
      </div>
    `,
    presentation: `
      <h3>Uncomplicated vs. Complicated Diverticulitis</h3>
      <p><strong>Uncomplicated:</strong> Localized Left Lower Quadrant (LLQ) pain, low-grade fever, mild leukocytosis. Patient can tolerate oral intake.</p>
      <p><strong>Complicated:</strong> Abscess formation, obstruction, free perforation (rigid abdomen, peritonitis), or fistula formation (e.g., colovesical fistula leading to pneumaturia — air in the urine).</p>
    `,
    diagnostics: `
      <h3>Diagnostic Rules</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Computed Tomography (CT)</strong><p>The diagnostic procedure of choice! Look for pericolic fat stranding, thickened bowel wall, and abscess formation.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Contrast Enema (Gastrografin)</strong><p>Use only water-soluble contrast. Barium is absolutely contraindicated due to the risk of barium peritonitis if there is a perforation.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Endoscopy (Colonoscopy)</strong><p><strong>AVOID</strong> in acute diverticulitis due to risk of air insufflation blowing out the weakened wall. Perform electively 1-3 months later to rule out colon cancer.</p></div>
        </div>
      </div>
    `,
    management: `
      <h3>Treatment of Acute Diverticulitis</h3>
      <ul>
        <li><strong>Outpatient (Mild, tolerates PO):</strong> Clear liquid diet, oral antibiotics targeting gram negatives and anaerobes (E. coli, B. fragilis).</li>
        <li><strong>Inpatient (Elderly, immunosuppressed, high fever):</strong> NPO (bowel rest), IV fluids, Broad-spectrum IV antibiotics.</li>
      </ul>

      <h3>Treatment of Diverticular Hemorrhage</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Resuscitation</strong><p>ABCs, IV fluids, and blood typing.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Colonoscopy</strong><p>Once stable and prepped, colonoscopy can identify the bleeder. Treat with epinephrine injection, clips, or coagulation.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Angiography</strong><p>If bleeding is massive, or colonoscopy fails, angiography allows targeted embolization.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content"><strong>Surgery</strong><p>Segmental resection is the last resort if endovascular/endoscopic methods fail.</p></div>
        </div>
      </div>
    `,
    caseStudy: {
      profile: "Elderly male with LLQ pain and fever",
      history: "A 68-year-old male presents with 2 days of constant Left Lower Quadrant (LLQ) abdominal pain, nausea, and a low-grade fever. He reports a history of chronic constipation and a low-fiber diet.",
      investigations: "On exam, he has localized LLQ tenderness but no rebound or guarding. WBC count is 14,000. A CT scan of the abdomen and pelvis with contrast shows sigmoid colon wall thickening and pericolic fat stranding, with no abscess or free air.",
      questionsAnswers: [
        { q: "What is the diagnosis?", a: "Acute Uncomplicated Diverticulitis." },
        { q: "Can we perform a colonoscopy right now to confirm the diagnosis?", a: "No! Endoscopy is contraindicated during acute diverticulitis due to the high risk of iatrogenic perforation. It should be scheduled 4-6 weeks after resolution." },
        { q: "What is the appropriate management?", a: "Since he has no peritoneal signs and no abscess (Hinchey 0-I), if he can tolerate oral intake, he can be managed outpatient with oral antibiotics and a clear liquid diet. If he has severe comorbidities, admit for IV antibiotics." }
      ]
    },
    mcqs: [
      {
        question: "A 70-year-old man presents with a massive, painless lower gastrointestinal bleed passing dark maroon blood. His blood pressure is 100/60 mmHg. After initial IV fluid resuscitation, which of the following is true regarding his condition?",
        options: [ "He most likely has acute diverticulitis.", "The bleeding will require emergent surgical resection in 90% of cases.", "The bleeding will likely stop spontaneously.", "A barium enema is the diagnostic test of choice." ],
        answerIndex: 2,
        explanation: "Diverticular hemorrhage presents as painless hematochezia and stops spontaneously in 70-80% of cases. Diverticulitis causes pain/fever, not massive bleeding. Endoscopy/angiography are preferred over surgery."
      },
      {
        question: "A CT scan on a patient with diverticulitis reveals a large 6 cm pelvic abscess (Hinchey Stage II). The patient is hemodynamically stable. What is the most appropriate next step in management?",
        options: [ "Immediate Hartmann procedure (surgical resection with colostomy)", "CT-guided percutaneous drainage and IV antibiotics", "Oral antibiotics and discharge home", "Diagnostic colonoscopy" ],
        answerIndex: 1,
        explanation: "For a large, distant abscess (Hinchey II) in a stable patient, CT-guided percutaneous drainage is the preferred initial approach to avoid emergent multi-stage surgery."
      }
    ]
  },
  // ============================================================
  // LESSON 5: GI MOTILITY DISORDERS
  // ============================================================
  {
    id: "gi-motility",
    title: "Global GI Motility Disorders",
    difficulty: "hard",
    organ: "Entire GIT",
    readTime: "18 min",
    definition: "A diverse group of conditions characterized by abnormal neuromuscular function of the gastrointestinal tract, leading to impaired transit (too fast or too slow) in the absence of mechanical obstruction.",
    keyPoints: [
      "Achalasia is caused by the loss of inhibitory nitrergic neurons in the myenteric plexus.",
      "Gastroparesis is classically caused by diabetic autonomic neuropathy; treated with prokinetics.",
      "SMA Syndrome involves duodenal compression after rapid weight loss.",
      "Ogilvie Syndrome is acute colonic pseudo-obstruction, often post-operative.",
      "Hirschsprung disease involves aganglionosis of the distal rectum (failed neural crest migration)."
    ],
    epidemiology: `
      <h3>Summary of Major Motility Disorders</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Disorder</th><th>Key Pathogenesis</th><th>Main Symptoms</th><th>First-Line Treatment</th></tr></thead>
        <tbody>
          <tr><td><strong>Achalasia</strong></td><td>Loss of inhibitory neurons</td><td>Dysphagia to liquids & solids</td><td>POEM or Heller myotomy</td></tr>
          <tr><td><strong>Gastroparesis</strong></td><td>Impaired gastric emptying</td><td>Nausea, early satiety</td><td>Metoclopramide + Diet</td></tr>
          <tr><td><strong>CIPO</strong></td><td>Neuromuscular failure</td><td>Pseudo-obstruction (Chronic)</td><td>Octreotide, TPN</td></tr>
          <tr><td><strong>Ogilvie Syndrome</strong></td><td>Acute autonomic imbalance</td><td>Acute colonic distension</td><td>Neostigmine</td></tr>
          <tr><td><strong>Dyssynergic Defecation</strong></td><td>Pelvic floor incoordination</td><td>Incomplete evacuation</td><td>Biofeedback therapy</td></tr>
        </tbody>
      </table>
    `,
    pathophysiology: `
      <h3>Esophageal Motility</h3>
      <ul>
        <li><strong>Achalasia:</strong> Loss of inhibitory (nitric oxide producing) neurons in Auerbach's plexus leads to failure of the Lower Esophageal Sphincter (LES) to relax and absent peristalsis.</li>
        <li><strong>Hypercontractile (Jackhammer) / DES:</strong> Imbalance between inhibitory/excitatory nerves causing uncoordinated (DES) or extremely forceful (Jackhammer) contractions.</li>
      </ul>

      <h3>Gastric Motility (Gastroparesis)</h3>
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> A broken blender. The stomach muscles (or their vagal pacemakers) are paralyzed, often due to diabetic autonomic neuropathy. Food sits there undigested, leading to early satiety, bloating, and vomiting of old, undigested food.
      </div>

      <h3>Intestinal Motility</h3>
      <ul>
        <li><strong>CIPO (Chronic Intestinal Pseudo-Obstruction):</strong> Severe impairment of motility (Scleroderma, Amyloidosis) causing symptoms of bowel obstruction but without any physical blockage.</li>
        <li><strong>SMA Syndrome:</strong> Loss of the mesenteric fat pad (anorexia, cachexia) causes the angle between the Aorta and Superior Mesenteric Artery to close, pinching the 3rd part of the duodenum.</li>
      </ul>
    `,
    presentation: `
      <h3>Clinical Hallmarks</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Esophagus</strong><p>Dysphagia (solids AND liquids simultaneously = motility issue, whereas solids progressing to liquids = mechanical obstruction).</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Stomach</strong><p>Early satiety, postprandial fullness, vomiting undigested food hours after eating.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Small Bowel</strong><p>Bilious vomiting and postprandial pain (SMA syndrome), or chronic bloating and weight loss (CIPO).</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content"><strong>Colon/Anorectum</strong><p>Progressive massive distension (Ogilvie), failure to pass meconium in 48h (Hirschsprung), or excessive straining with manual evacuation (Dyssynergic defecation).</p></div>
        </div>
      </div>
    `,
    diagnostics: `
      <h3>Diagnostic Approaches</h3>
      <p>Motility disorders require functional testing rather than standard imaging, as structural imaging is often normal (except for ruling out mechanical obstruction).</p>
      <ul>
        <li><strong>Esophageal Manometry:</strong> Gold standard for Achalasia and DES.</li>
        <li><strong>Gastric Emptying Scintigraphy:</strong> Gold standard for Gastroparesis (retention of radiolabeled meal at 4 hours).</li>
        <li><strong>Anorectal Manometry:</strong> For Hirschsprung (absent RAIR) and Dyssynergic Defecation.</li>
      </ul>
    `,
    management: `
      <h3>Pharmacologic and Surgical Interventions</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Drug / Procedure</th><th>Mechanism / Use Case</th></tr></thead>
        <tbody>
          <tr><td><strong>Metoclopramide / Domperidone</strong></td><td>Prokinetics + Antiemetics used for Gastroparesis.</td></tr>
          <tr><td><strong>Erythromycin</strong></td><td>Motilin receptor agonist for Gastroparesis flare-ups (causes tachyphylaxis rapidly).</td></tr>
          <tr><td><strong>Neostigmine</strong></td><td>Acetylcholinesterase inhibitor used for Ogilvie Syndrome (must monitor for bradycardia!).</td></tr>
          <tr><td><strong>POEM (Peroral Endoscopic Myotomy)</strong></td><td>Endoscopic cutting of muscle for Achalasia or refractory Gastroparesis (G-POEM).</td></tr>
          <tr><td><strong>Knee-Chest Positioning</strong></td><td>Conservative management for SMA Syndrome to open the aortomesenteric angle.</td></tr>
        </tbody>
      </table>

      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Hirschsprung Biopsy:</strong> The diagnosis of Hirschsprung disease requires a <em>rectal suction biopsy</em> (which pulls submucosa) to prove the absence of ganglion cells. A standard mucosal biopsy is insufficient!
      </div>
    `,
    caseStudy: {
      profile: "Diabetic with vomiting and early satiety",
      history: "A 55-year-old female with a 20-year history of poorly controlled Type 2 Diabetes presents with chronic nausea, early satiety, and vomiting of food she ate 12 hours prior.",
      investigations: "Upper endoscopy is normal (no mechanical obstruction or ulcer). A gastric emptying study shows 60% retention of the meal at 4 hours (normal is <10%).",
      questionsAnswers: [
        { q: "What is the diagnosis?", a: "Gastroparesis (secondary to diabetic autonomic neuropathy)." },
        { q: "What is the first-line dietary advice?", a: "Small, frequent meals that are low in fat and low in insoluble fiber (as fat and fiber delay gastric emptying)." },
        { q: "What pharmacologic agent is best indicated?", a: "Metoclopramide (a D2 receptor antagonist with prokinetic and antiemetic properties)." }
      ]
    },
    mcqs: [
      {
        question: "A 75-year-old man develops massive abdominal distension 3 days after undergoing total hip arthroplasty. X-ray shows severe dilation of the right colon up to 11 cm without a transition point. What is the best initial pharmacologic treatment if he is hemodynamically stable?",
        options: [ "Metoclopramide", "Neostigmine", "Erythromycin", "Loperamide" ],
        answerIndex: 1,
        explanation: "This is Acute Colonic Pseudo-obstruction (Ogilvie Syndrome), common in post-operative or critically ill patients. Neostigmine (AChE inhibitor) is the first-line medical therapy to decompress the colon. Patient must be monitored for bradycardia."
      },
      {
        question: "A 19-year-old female with anorexia nervosa loses 15 kg rapidly. She now presents with postprandial abdominal pain, early satiety, and bilious vomiting. Symptoms are relieved by lying in the knee-chest position. What is the pathogenesis of her condition?",
        options: [ "Loss of myenteric ganglion cells", "Compression of the 3rd part of the duodenum", "Autonomic neuropathy of the vagus nerve", "Spasm of the pyloric sphincter" ],
        answerIndex: 1,
        explanation: "This is Superior Mesenteric Artery (SMA) Syndrome. Rapid weight loss depletes the mesenteric fat pad, causing the angle between the aorta and SMA to narrow, compressing the third part of the duodenum."
      }
    ]
  },
  // ============================================================
  // LESSON 6: PEDIATRIC CONGENITAL GIT ANOMALIES
  // ============================================================
  {
    id: "congenital-git-anomalies",
    title: "Pediatric Congenital GIT Anomalies",
    difficulty: "medium",
    organ: "Entire GIT (Pediatric)",
    readTime: "12 min",
    definition: "A spectrum of structural developmental defects occurring during embryogenesis that affect the gastrointestinal tract from the mouth to the anus, often presenting in the neonatal period.",
    keyPoints: [
      "Any newborn with frothy saliva should be suspected of having Esophageal Atresia/Tracheoesophageal Fistula (TEF).",
      "Duodenal atresia presents with early bilious vomiting and a 'double-bubble' sign on X-ray.",
      "Pyloric stenosis presents at 3-6 weeks with non-bilious projectile vomiting and hypochloremic alkalosis.",
      "Upper GI series is the gold standard for diagnosing intestinal malrotation.",
      "Imperforate anus in males is highly associated with rectourinary fistulas."
    ],
    epidemiology: `
      <h3>Common Associations</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Anomaly</th><th>Key Association / Frequency</th></tr></thead>
        <tbody>
          <tr><td><strong>Cleft Lip / Palate</strong></td><td>30-50% are part of genetic syndromes</td></tr>
          <tr><td><strong>TEF (Tracheoesophageal Fistula)</strong></td><td>Type C (Proximal atresia + Distal fistula) is 86% of cases</td></tr>
          <tr><td><strong>Pyloric Stenosis</strong></td><td>1-8 per 1000 births; 4:1 Male Predominance</td></tr>
          <tr><td><strong>Duodenal Atresia</strong></td><td>Highly associated with Trisomy 21 (Down Syndrome)</td></tr>
          <tr><td><strong>Imperforate Anus</strong></td><td>5% have TEF; 10% have cardiac anomalies (VACTERL association)</td></tr>
        </tbody>
      </table>
    `,
    pathophysiology: `
      <h3>Tracheoesophageal Fistula (TEF) & Esophageal Atresia</h3>
      <p>Failure of the foregut to properly separate into the trachea and esophagus. The most common variant (Type C) features a blind upper esophageal pouch and a lower esophagus that connects to the trachea. This allows gastric acid to reflux directly into the lungs (chemical pneumonitis).</p>

      <h3>Congenital Hypertrophic Pyloric Stenosis (CHPS)</h3>
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> A muscular bouncer at the stomach's exit door. The pyloric muscle becomes massively hypertrophied (thickened >4mm, lengthened >15mm) after birth, physically blocking milk from leaving the stomach. Because the block is <em>before</em> the bile duct, the vomit is NEVER bilious (green).
      </div>
    `,
    presentation: `
      <h3>Clinical Presentation by Level of Obstruction</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Upper (Esophagus)</strong><p><strong>TEF/EA:</strong> Prenatal polyhydramnios (fetus can't swallow amniotic fluid). Postnatal frothy saliva, choking/cyanosis with first feed, NG tube coils in the chest.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Gastric Outlet</strong><p><strong>Pyloric Stenosis:</strong> Non-bilious, projectile vomiting at 3-6 weeks of age. Hungry vomiter. Palpable "olive" mass in RUQ.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Proximal Small Bowel</strong><p><strong>Duodenal Atresia:</strong> Bilious vomiting within 24 hours of birth. Non-distended lower abdomen.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">4</div>
          <div class="step-content"><strong>Midgut</strong><p><strong>Malrotation/Volvulus:</strong> Sudden bilious emesis in the first month of life. Can rapidly progress to bowel necrosis if volvulus occurs.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">5</div>
          <div class="step-content"><strong>Anorectal</strong><p><strong>Imperforate Anus:</strong> Discovered on newborn physical exam (no anal opening). Meconium may pass through the urethra (if rectourinary fistula).</p></div>
        </div>
      </div>
    `,
    diagnostics: `
      <h3>Diagnostic Hallmarks</h3>
      <ul>
        <li><strong>Pyloric Stenosis:</strong> Ultrasound shows a thick/long pylorus. Labs show Hypochloremic, Hypokalemic Metabolic Alkalosis.</li>
        <li><strong>Duodenal Atresia:</strong> Abdominal X-ray shows the classic <strong>"Double-Bubble"</strong> sign (air in stomach + air in proximal duodenum, no distal gas).</li>
        <li><strong>Malrotation:</strong> Upper GI contrast series is the gold standard (shows corkscrew appearance or misplaced ligament of Treitz).</li>
      </ul>
      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Bilious Vomiting in a Neonate:</strong> Bilious vomiting in a newborn is a surgical emergency (Midgut Volvulus) until proven otherwise. Do not assume it is just "reflux"!
      </div>
    `,
    management: `
      <h3>Surgical Interventions</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Condition</th><th>Management</th></tr></thead>
        <tbody>
          <tr><td><strong>Pyloric Stenosis</strong></td><td><strong>IV Fluids first!</strong> Must correct the alkalosis and dehydration before surgery (Ramstedt pyloromyotomy).</td></tr>
          <tr><td><strong>TEF / EA</strong></td><td>Continuous suction of upper pouch, elevate head, surgical ligation of fistula and esophageal anastomosis.</td></tr>
          <tr><td><strong>Duodenal Atresia</strong></td><td>Nasogastric decompression, IV fluids, surgical duodenoduodenostomy.</td></tr>
          <tr><td><strong>Malrotation</strong></td><td>Ladd's procedure (untwist bowel, divide Ladd's bands, broaden mesenteric base, appendectomy).</td></tr>
        </tbody>
      </table>
    `,
    caseStudy: {
      profile: "Neonate with frothy saliva and choking",
      history: "A newborn male infant born at 38 weeks gestation is noted to have excessive drooling and frothy saliva immediately after birth. The mother's pregnancy was complicated by polyhydramnios. During the first attempt at feeding, the infant begins coughing, choking, and turns cyanotic.",
      investigations: "An attempt to pass a nasogastric tube fails, meeting resistance at 10 cm. A chest X-ray shows the NG tube coiled in the upper chest, and there is gas present in the stomach and intestines.",
      questionsAnswers: [
        { q: "What is the diagnosis?", a: "Esophageal Atresia (EA) with a distal Tracheoesophageal Fistula (TEF) - Type C. The coiled tube proves EA, and the gas in the stomach proves a distal fistula connecting the trachea to the lower esophagus." },
        { q: "Why did the mother have polyhydramnios?", a: "Normally, the fetus swallows amniotic fluid which is absorbed by the GI tract. Because of the esophageal atresia, the fetus could not swallow the fluid, leading to excess accumulation (polyhydramnios)." },
        { q: "What is the immediate management?", a: "Stop feeding immediately (NPO). Keep the head elevated to prevent gastric reflux through the fistula into the lungs. Place a suction catheter in the upper esophageal pouch to clear saliva. Prepare for surgery." }
      ]
    },
    mcqs: [
      {
        question: "A 4-week-old male infant presents with forceful, projectile vomiting after every feed. The vomit is not green. The baby is always hungry afterward. Blood tests reveal a pH of 7.52, low chloride, and low potassium. What is the most appropriate next step in management?",
        options: [ "Immediate surgical pyloromyotomy", "Intravenous fluid resuscitation and electrolyte correction", "Upper GI contrast series", "Change formula to a soy-based milk" ],
        answerIndex: 1,
        explanation: "This is classic Hypertrophic Pyloric Stenosis (non-bilious projectile vomiting, hypochloremic metabolic alkalosis). Although surgery is the definitive treatment, it is a medical, not surgical, emergency. You MUST correct the severe dehydration and alkalosis with IV fluids before administering general anesthesia."
      },
      {
        question: "A newborn with Down Syndrome vomits green (bilious) fluid on the first day of life. An abdominal X-ray shows a 'double-bubble' sign with no distal intestinal gas. What is the diagnosis?",
        options: [ "Pyloric stenosis", "Intestinal malrotation", "Duodenal atresia", "Hirschsprung disease" ],
        answerIndex: 2,
        explanation: "The 'double-bubble' sign (air in stomach and proximal duodenum) combined with bilious vomiting and Down Syndrome is the classic triad for Duodenal Atresia."
      }
    ]
  },
  // ============================================================
  // LESSON 7: PEDIATRIC ANORECTAL DISEASES
  // ============================================================
  {
    id: "pediatric-anorectal",
    title: "Pediatric Anorectal Diseases",
    difficulty: "easy",
    organ: "Rectum & Anus (Pediatric)",
    readTime: "8 min",
    definition: "Common benign conditions affecting the distal gastrointestinal tract in children, most notably anal fissures, rectal prolapse, and juvenile polyps.",
    keyPoints: [
      "Anal fissure is the most common cause of anal pain and bleeding in children.",
      "Most anal fissures (90%) are located in the posterior midline.",
      "Rectal prolapse in a child should prompt an investigation for Cystic Fibrosis.",
      "Juvenile polyps are hamartomatous, not adenomatous (low malignancy risk)."
    ],
    epidemiology: `
      <h3>Common Anorectal Conditions</h3>
      <ul>
        <li><strong>Anal Fissures:</strong> Most common in infants and children. Caused by passage of hard stool (constipation).</li>
        <li><strong>Rectal Prolapse:</strong> Highest incidence in the first year of life.</li>
        <li><strong>Juvenile Polyps:</strong> Most common in the recto-sigmoid colon.</li>
      </ul>
    `,
    pathophysiology: `
      <h3>Anal Fissure Cycle</h3>
      <p>Hard stool causes a superficial tear in the anoderm \(\rightarrow\) Severe pain \(\rightarrow\) Spasm of the internal anal sphincter (which restricts blood flow, preventing healing) \(\rightarrow\) Child avoids defecating due to pain (withholding) \(\rightarrow\) Stool becomes larger and harder \(\rightarrow\) Worse tear on the next bowel movement.</p>

      <h3>The Chronic Fissure Triad</h3>
      <div class="mnemonic-card">
        <div class="mnemonic-title">Three components of a CHRONIC Anal Fissure</div>
        <div class="mnemonic-expansion">1. <strong>Hypertrophied Anal Papilla</strong> (proximal)</div>
        <div class="mnemonic-expansion">2. <strong>Fissure</strong> with heaped-up scarred edges (central)</div>
        <div class="mnemonic-expansion">3. <strong>Sentinel Skin Tag</strong> (distal)</div>
      </div>
    `,
    presentation: `
      <h3>Clinical Manifestations</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Condition</th><th>Presentation</th></tr></thead>
        <tbody>
          <tr><td><strong>Acute Anal Fissure</strong></td><td>Crying during defecation, withholding stool, streaks of bright red blood on the outside of the stool or toilet paper.</td></tr>
          <tr><td><strong>Rectal Prolapse</strong></td><td>Painless, tender grape-like dark red mass protruding from the rectum during straining.</td></tr>
          <tr><td><strong>Internal Hemorrhoids</strong></td><td>Painless bleeding (above dentate line). Rare in children.</td></tr>
          <tr><td><strong>External Hemorrhoids</strong></td><td>Painful swelling (below dentate line, innervated by somatic nerves).</td></tr>
        </tbody>
      </table>

      <h3>Types of Rectal Prolapse</h3>
      <ul>
        <li><strong>Type I (False / Mucosal):</strong> Protrusion of mucosa only (< 2 cm).</li>
        <li><strong>Type II (True / Complete):</strong> Full-thickness extrusion of the rectal wall characterized by <strong>concentric folds</strong> in the mucosa.</li>
      </ul>
    `,
    diagnostics: `
      <h3>Diagnostic Considerations</h3>
      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Secondary Fissures:</strong> If an anal fissure is located laterally (not in the anterior or posterior midline), or if it is multiple, painless, or deep, you MUST suspect a secondary cause (e.g., Crohn's disease, Leukemia, Syphilis, HIV, or child abuse).
      </div>
      <div class="clinical-pearl">
        <strong>🔑 Clinical Pearl — Rectal Prolapse:</strong> While commonly caused by acute diarrhea or constipation/straining, a recurrent rectal prolapse in a child is a classic presentation of <strong>Cystic Fibrosis</strong> (due to bulky, malabsorbed stools and coughing fits). Always order a Sweat Chloride test!
      </div>
    `,
    management: `
      <h3>Management</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Anal Fissures (Medical)</strong><p>Break the cycle: Stool softeners (PEG), increased fiber, sitz baths (relaxes the sphincter), and topical analgesics.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Anal Fissures (Surgical)</strong><p>For chronic refractory cases, lateral internal sphincterotomy (LIS) cuts the muscle to stop the spasm and restore blood flow.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Rectal Prolapse</strong><p>Manual reduction (gentle pressure). Treat the underlying cause (laxatives for constipation, enzymes for CF). Surgery if refractory.</p></div>
        </div>
      </div>
    `,
    caseStudy: {
      profile: "Toddler crying with bowel movements",
      history: "A 2-year-old boy is brought to the clinic because he cries in agony every time he tries to poop. His parents notice he crosses his legs and hides in the corner to avoid stooling. Today, they noticed bright red blood on the outside of his hard stool.",
      investigations: "Physical exam reveals a small linear tear in the posterior midline of the anal verge. A skin tag is noted just distal to the tear.",
      questionsAnswers: [
        { q: "What is the diagnosis?", a: "Chronic Anal Fissure. The presence of the skin tag (sentinel pile) indicates it is chronic." },
        { q: "Why is the fissure located in the posterior midline?", a: "The posterior midline of the anal canal has the poorest blood supply, making it the most vulnerable to ischemic injury from sphincter spasm." },
        { q: "What is the initial management?", a: "Stool softeners (Polyethylene glycol), warm sitz baths, and high fiber diet to break the cycle of constipation and pain." }
      ]
    },
    mcqs: [
      {
        question: "A 3-year-old girl is brought in for a bulging red mass protruding from her anus when she strains on the toilet. It is painless. She has a history of recurrent pulmonary infections and poor weight gain. What diagnostic test should be ordered?",
        options: [ "Sweat chloride test", "Colonoscopy", "Barium enema", "Celiac serology" ],
        answerIndex: 0,
        explanation: "The child has rectal prolapse, recurrent lung infections, and failure to thrive, which is the classic triad for Cystic Fibrosis. A sweat chloride test is the gold standard diagnostic test."
      },
      {
        question: "A 35-year-old man presents with excruciating pain during defecation. Examination reveals a lateral anal fissure. He also complains of chronic diarrhea and right lower quadrant abdominal pain. What is the most likely underlying condition?",
        options: [ "Chronic constipation", "Crohn's disease", "Ulcerative colitis", "Internal hemorrhoids" ],
        answerIndex: 1,
        explanation: "An atypical (lateral) anal fissure, combined with chronic diarrhea and RLQ pain, strongly points to Crohn's disease. Primary fissures due to constipation are almost always in the posterior midline."
      }
    ]
  },
  // ============================================================
  // LESSON 8: PROTEIN-LOSING ENTEROPATHY (PLE)
  // ============================================================
  {
    id: "protein-losing-enteropathy",
    title: "Protein-Losing Enteropathy (PLE)",
    difficulty: "hard",
    organ: "Entire GIT (Systemic)",
    readTime: "14 min",
    definition: "A rare condition characterized by the excessive loss of serum proteins into the gastrointestinal tract, leading to severe hypoproteinemia and edema. It occurs when intestinal protein loss exceeds the liver's maximum synthetic capacity.",
    keyPoints: [
      "The diagnostic gold standard is an elevated Alpha-1 Antitrypsin clearance in the stool.",
      "Affects proteins with long half-lives (Albumin, IgA/G/M, Fibrinogen, Ceruloplasmin).",
      "Commonly seen in Right-sided Heart Failure and post-Fontan procedures.",
      "Mainstay of dietary therapy: Low-fat, High-protein, High Medium-Chain Triglyceride (MCT) diet."
    ],
    epidemiology: `
      <h3>Four Main Categories of PLE Etiologies</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Mechanism</th><th>Examples</th></tr></thead>
        <tbody>
          <tr><td><strong>1. Erosive GI Diseases</strong> (Mucosal Exudation)</td><td>Inflammatory Bowel Disease (IBD), GI Malignancies, Whipple's Disease.</td></tr>
          <tr><td><strong>2. Non-Erosive GI Diseases</strong> (Increased Permeability)</td><td>Ménétrier's disease (Hypertrophic gastropathy), Celiac Disease, SLE.</td></tr>
          <tr><td><strong>3. Lymphatic Obstruction</strong> (High Lymphatic Pressure)</td><td>Primary Intestinal Lymphangiectasia, Lymphoma, Retroperitoneal Fibrosis.</td></tr>
          <tr><td><strong>4. Cardiac Disease</strong> (High Central Venous Pressure)</td><td>Post-Fontan operation (uni-ventricular heart), Right-sided CHF, Constrictive Pericarditis.</td></tr>
        </tbody>
      </table>
    `,
    pathophysiology: `
      <h3>Why are only certain proteins affected?</h3>
      <p>The loss of serum proteins into the GIT occurs independently of molecular weight. However, the serum proteins most affected by this disrupted equilibrium are those with <strong>longer half-lives</strong> (i.e., lower catabolic rate) such as Albumin, IgM, IgA, IgG, Ceruloplasmin, and Fibrinogen.</p>
      <p>Proteins with rapid turnover (e.g., insulin, IgE) remain relatively unchanged in the serum because their rapid synthesis matches their loss.</p>

      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> A bucket with a hole in the bottom. The liver is the faucet trying to keep the bucket full. The liver can increase production by 2.5x, but if the hole (enteropathy) is too big, the water level (serum protein) drops, leading to fluid leaking into the surrounding floor (edema).
      </div>
    `,
    presentation: `
      <h3>Clinical Manifestations</h3>
      <p>Presentation is highly dependent on the underlying etiology but universally features signs of hypoproteinemia:</p>
      <ul>
        <li><strong>Generalized Anasarca:</strong> Pitting peripheral edema, ascites, pleural and pericardial effusions.</li>
        <li><strong>Lymphedema:</strong> Non-pitting edema if the cause is a primary lymphatic conduction abnormality.</li>
        <li><strong>Immune compromise:</strong> Frequent infections due to chronic hypo-gammaglobulinemia (loss of immunoglobulins).</li>
        <li><strong>Chylothorax / Chylous Ascites:</strong> Milky fluid in the chest or abdomen seen in severe lymphatic malformations or obstructions.</li>
      </ul>
    `,
    diagnostics: `
      <h3>Diagnostic Gold Standard: Alpha-1 Antitrypsin</h3>
      <p>To prove the GIT is the source of protein loss (ruling out Nephrotic Syndrome or Liver Failure), we measure <strong>Alpha-1 Antitrypsin clearance</strong> in the stool.</p>
      <p><strong>Why Alpha-1 Antitrypsin?</strong> It is synthesized in the liver and is uniquely <em>resistant to proteolysis and degradation</em> in the intestinal lumen. Therefore, measuring it in the stool accurately reflects how much protein is leaking into the gut.</p>
      <ul>
        <li><strong>Normal:</strong> &lt; 2.5 mg/g stool (Clearance &lt; 13 mL/day).</li>
        <li><strong>PLE:</strong> Massively elevated clearance.</li>
      </ul>

      <h3>Endoscopy</h3>
      <p>Upper Endoscopy + Colonoscopy should be performed. For example, Ménétrier's disease will show massively enlarged, cerebriform gastric folds (rugae).</p>
    `,
    management: `
      <h3>Management Principles</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Treat the Underlying Cause</strong><p>Immunosuppressants for SLE/IBD, Pericardiectomy for constrictive pericarditis, or gluten-free diet for Celiac.</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Dietary Modification</strong><p><strong>Low-fat, high-protein, high MCT diet.</strong> Medium-chain triglycerides (MCTs) are directly absorbed into the portal vein, bypassing the overloaded intestinal lymphatic system (lacteals).</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Pharmacotherapy</strong><p>High-dose spironolactone, Octreotide (decreases splanchnic blood flow), or Budesonide (for post-Fontan PLE).</p></div>
        </div>
      </div>
    `,
    caseStudy: {
      profile: "Child with edema post-cardiac surgery",
      history: "A 6-year-old boy presents with severe, progressive pitting edema of his legs and massive ascites. He has a history of complex congenital heart disease and underwent a Fontan procedure 2 years ago.",
      investigations: "Labs show Serum Albumin 1.8 g/dL (Low) and IgG 300 mg/dL (Low). Urinalysis is negative for protein (ruling out nephrotic syndrome). Liver transaminases and bilirubin are normal. Stool alpha-1 antitrypsin clearance is markedly elevated at 150 mL/day.",
      questionsAnswers: [
        { q: "What is the diagnosis?", a: "Protein-Losing Enteropathy (PLE) secondary to the Fontan procedure." },
        { q: "What is the mechanism of PLE in this patient?", a: "The Fontan procedure routes systemic venous return directly to the pulmonary arteries, resulting in chronically elevated central venous pressure. This high pressure backs up into the thoracic duct and intestinal lymphatics, causing lymphatic fluid (rich in protein and lymphocytes) to leak into the gut lumen." },
        { q: "Why is a Medium-Chain Triglyceride (MCT) diet recommended?", a: "Long-chain fats require intact lymphatic lacteals for absorption, which are congested in this patient. MCTs bypass the lymphatics and are absorbed directly into the portal venous system." }
      ]
    },
    mcqs: [
      {
        question: "A patient presents with severe anasarca. Labs reveal profound hypoalbuminemia and hypogammaglobulinemia. Urinalysis shows no proteinuria. Stool alpha-1 antitrypsin clearance is 50 mL/day (Normal < 13). Which of the following is the most likely diagnosis?",
        options: [ "Nephrotic syndrome", "Protein-Losing Enteropathy", "Liver cirrhosis", "Severe malnutrition (Kwashiorkor)" ],
        answerIndex: 1,
        explanation: "The elevated alpha-1 antitrypsin clearance confirms the gastrointestinal tract as the source of the protein loss. The absence of proteinuria rules out nephrotic syndrome, and normal liver enzymes/coags make cirrhosis less likely."
      },
      {
        question: "Why does Protein-Losing Enteropathy predominantly affect the serum levels of albumin and immunoglobulins, but relatively spare insulin and IgE?",
        options: [ "Albumin and immunoglobulins have lower molecular weights.", "Albumin and immunoglobulins have longer half-lives.", "Insulin and IgE are not secreted into the GI tract.", "Insulin and IgE are rapidly reabsorbed by the colon." ],
        answerIndex: 1,
        explanation: "Protein loss into the gut is independent of molecular weight. Proteins with long half-lives (low turnover) cannot be synthesized fast enough by the liver to compensate for the massive gut loss. High-turnover proteins are replaced rapidly, so their serum levels appear stable."
      }
    ]
  },
  // ============================================================
  // LESSON 9: PEDIATRIC FOOD ALLERGIES & CELIAC DISEASE
  // ============================================================
  {
    id: "pediatric-food-allergies",
    title: "Pediatric Food Allergies & Celiac",
    difficulty: "medium",
    organ: "Entire GIT (Immune)",
    readTime: "16 min",
    definition: "Adverse immune responses to specific dietary proteins. They are broadly classified into IgE-mediated (rapid, systemic, anaphylaxis risk) and non-IgE-mediated (delayed, primarily gastrointestinal symptoms).",
    keyPoints: [
      "Non-IgE-mediated allergies present with delayed GI symptoms and cannot be diagnosed with skin prick tests.",
      "FPIES causes profound vomiting, pallor, and lethargy 2-4 hours after food ingestion.",
      "Celiac disease diagnosis requires positive tTG-IgA antibodies and confirmatory small bowel biopsy.",
      "Dermatitis Herpetiformis is the intensely itchy vesicular skin manifestation of Celiac disease."
    ],
    epidemiology: `
      <h3>The Top 8 Food Allergens</h3>
      <p>Account for the vast majority of food allergies:</p>
      <ul>
        <li>Cow's milk (\(\beta\)-lactoglobulin)</li>
        <li>Egg (Lipoprotein)</li>
        <li>Peanuts</li>
        <li>Tree nuts</li>
        <li>Soybeans (Glycinin)</li>
        <li>Wheat</li>
        <li>Fish</li>
        <li>Shellfish</li>
      </ul>
    `,
    pathophysiology: `
      <h3>IgE vs. Non-IgE Mediated Allergies</h3>
      <table class="comparison-highlight">
        <thead><tr><th>Feature</th><th>IgE-Mediated</th><th>Non-IgE-Mediated</th></tr></thead>
        <tbody>
          <tr><td><strong>Onset</strong></td><td>Acute (minutes to 2 hours)</td><td>Delayed (> 2 to 48 hours)</td></tr>
          <tr><td><strong>Mechanism</strong></td><td>Mast cells / Basophils</td><td>T-cell mediated</td></tr>
          <tr><td><strong>Symptoms</strong></td><td>Urticaria, wheezing, anaphylaxis</td><td>Vomiting, chronic diarrhea, bloody stools</td></tr>
          <tr><td><strong>Diagnosis</strong></td><td>Specific serum IgE (RAST), Skin prick</td><td>Elimination diet & oral challenge</td></tr>
          <tr><td><strong>Epinephrine?</strong></td><td><strong>YES</strong> (Lifesaving)</td><td><strong>NO</strong> (Does not cause anaphylaxis)</td></tr>
        </tbody>
      </table>

      <h3>Celiac Disease (Gluten-Sensitive Enteropathy)</h3>
      <p>An autoimmune condition triggered by the ingestion of <strong>gluten (specifically the gliadin fraction)</strong> in genetically susceptible individuals (HLA-DQ2/DQ8). The immune system attacks the small intestinal lining, leading to villous atrophy, crypt hyperplasia, and malabsorption.</p>
    `,
    presentation: `
      <h3>Food Protein-Induced Enterocolitis Syndrome (FPIES)</h3>
      <div class="analogy-panel">
        <strong>💡 Think of it like...</strong> A systemic shock reaction without the hives. A baby drinks cow's milk or eats rice, and 2-4 hours later, they begin profusely vomiting, become extremely pale, lethargic, and floppy. It is often misdiagnosed as sepsis or an acute surgical abdomen.
      </div>

      <h3>Celiac Disease Manifestations</h3>
      <ul>
        <li><strong>GI Symptoms:</strong> Chronic diarrhea, steatorrhea, massive flatulence, abdominal distension, weight loss.</li>
        <li><strong>Extraintestinal:</strong> Iron deficiency anemia (due to duodenal damage), osteoporosis, fatigue.</li>
        <li><strong>Skin:</strong> Dermatitis Herpetiformis (DH) — an intensely itchy, blistering rash on the extensor surfaces (elbows, knees, buttocks). >85% of DH patients have Celiac disease.</li>
      </ul>

      <h3>Eosinophilic Esophagitis (EoE)</h3>
      <p>A mixed IgE/cell-mediated condition where allergens trigger eosinophils to infiltrate the esophagus. Presents as feeding difficulties, vomiting, and <strong>food impaction</strong> in older children (food gets stuck in the narrowed, ringed esophagus).</p>
    `,
    diagnostics: `
      <h3>Diagnostic Approaches</h3>
      <div class="step-flow">
        <div class="step-item">
          <div class="step-number">1</div>
          <div class="step-content"><strong>Non-IgE Allergies</strong><p>Clinical diagnosis. Eliminate the offending food for 2-4 weeks, then rechallenge. (Blood and skin tests are useless).</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">2</div>
          <div class="step-content"><strong>Celiac Disease (Screening)</strong><p>Serum IgA tissue transglutaminase (tTG) antibody. Patient MUST be consuming a gluten-containing diet when the test is done!</p></div>
        </div>
        <div class="step-item">
          <div class="step-number">3</div>
          <div class="step-content"><strong>Celiac Disease (Confirmatory)</strong><p>Upper endoscopy with at least 4 biopsies from the duodenum showing villous atrophy.</p></div>
        </div>
      </div>
      <div class="exam-trap">
        <strong>⚠️ Exam Trap — Gluten Sensitivity vs. Celiac:</strong> Patients with "Gluten Sensitivity" experience GI symptoms that improve on a gluten-free diet, but they will have <em>negative</em> tTG antibodies and <em>normal</em> intestinal biopsies. They do not have the autoimmune tissue damage seen in true Celiac disease.
      </div>
    `,
    management: `
      <h3>Management Guidelines</h3>
      <ul>
        <li><strong>Food Allergies:</strong> Strict dietary avoidance. Most children outgrow Cow's Milk Protein Allergy (CMPA) by age 3, and FPIES by age 2.</li>
        <li><strong>Celiac Disease:</strong> Strict, life-long Gluten-Free Diet (avoid Wheat, Barley, Rye). Oats are often tolerated if uncontaminated.</li>
        <li><strong>Exercise-Induced Anaphylaxis (EIA):</strong> Rare syndrome where eating a specific food is fine, UNLESS the patient exercises within 2-4 hours of ingestion. Management is avoiding that food before exercise.</li>
      </ul>
    `,
    caseStudy: {
      profile: "Infant with severe vomiting after formula",
      history: "A 6-month-old male infant is brought to the Emergency Department because of profuse, repetitive vomiting that started 3 hours after he was fed his first bottle of cow's milk-based formula. He appears pale, lethargic, and hypotonic (floppy).",
      investigations: "Vital signs show tachycardia but no fever. There is no urticaria (hives), lip swelling, or wheezing. A septic workup is initiated.",
      questionsAnswers: [
        { q: "What is the most likely diagnosis?", a: "Food Protein-Induced Enterocolitis Syndrome (FPIES)." },
        { q: "Why is this not an IgE-mediated anaphylactic reaction?", a: "The onset was delayed (3 hours post-ingestion, rather than minutes), and there are no classic IgE signs (hives, wheezing, facial swelling). The profound lethargy is due to hypovolemia/shock from the GI fluid shifts." },
        { q: "What is the treatment?", a: "Aggressive IV fluid resuscitation for the hypovolemia. Moving forward, strict avoidance of cow's milk protein." }
      ]
    },
    mcqs: [
      {
        question: "A 35-year-old woman with chronic diarrhea and fatigue is found to have a hemoglobin of 9 g/dL with low ferritin. She also complains of a very itchy, blistering rash on her elbows and knees. What is the most appropriate initial diagnostic test?",
        options: [ "Skin prick testing for wheat allergy", "Serum IgA tissue transglutaminase (tTG) antibody", "Empiric trial of a gluten-free diet", "Colonoscopy" ],
        answerIndex: 1,
        explanation: "The combination of malabsorption (chronic diarrhea), iron-deficiency anemia, and Dermatitis Herpetiformis (itchy rash on extensors) is classic for Celiac disease. The best initial screening test is serum tTG-IgA. An empiric diet trial should never precede testing, as it can cause false-negative serology."
      },
      {
        question: "Which of the following statements regarding Food Protein-Induced Enterocolitis Syndrome (FPIES) is TRUE?",
        options: [ "It is easily diagnosed via skin prick testing.", "It typically presents with acute wheezing and hives.", "It requires an epinephrine auto-injector prescription.", "It is a non-IgE mediated reaction that causes profuse delayed vomiting." ],
        answerIndex: 3,
        explanation: "FPIES is a severe non-IgE mediated allergy. It causes delayed (2-4 hours) vomiting and lethargy. Because it is non-IgE mediated, skin/blood tests are negative, it does not cause respiratory/skin anaphylaxis symptoms, and epinephrine is not the treatment (fluid resuscitation is)."
      }
    ]
  }
];
