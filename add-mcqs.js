const fs = require('fs');

function decode(path) {
  const raw = fs.readFileSync(path, 'utf8');
  const m = raw.match(/atob\("([^"]+)"\)/);
  return JSON.parse(decodeURIComponent(Buffer.from(m[1], 'base64').toString('utf8')));
}
function encode(varName, data) {
  const json = JSON.stringify(data);
  const b64 = Buffer.from(encodeURIComponent(json)).toString('base64');
  return `// Clinical Data - Encrypted Payload\nconst ${varName} = JSON.parse(decodeURIComponent(atob("${b64}")));\n`;
}

// ── MCQ bank keyed by lesson id ───────────────────────────────────────────────
const mcqBank = {

  // ──────────────────── UPPER GIT ────────────────────
  gerd: [
    {
      question: 'A 45-year-old man presents with 6-month history of heartburn and regurgitation, worse when lying flat. The MOST appropriate initial management is:',
      options: ['Upper endoscopy (OGD)', 'PPI once daily before breakfast for 8 weeks', '24-hour pH monitoring', 'Barium swallow'],
      answerIndex: 1,
      explanation: 'The best initial approach for uncomplicated GERD is an empirical 8-week PPI trial taken 30 minutes before breakfast. OGD is reserved for alarm features (dysphagia, weight loss, anaemia) or failure of PPI therapy.'
    },
    {
      question: "Which of the following is the MOST specific test to confirm pathological GERD?",
      options: ['Barium swallow', 'Esophageal manometry', '24-hour ambulatory pH-impedance monitoring', 'Upper endoscopy (OGD)'],
      answerIndex: 2,
      explanation: '24-hour pH-impedance monitoring is the most specific test for GERD, detecting both acid and non-acid reflux episodes and correlating them with symptoms. OGD can show complications (erosions, Barrett\'s) but is not the most specific for confirming reflux itself.'
    },
    {
      question: "Barrett's oesophagus is characterised histologically by:",
      options: ['Squamous metaplasia with keratin pearls', 'Intestinal metaplasia with goblet cells', 'Pseudostratified columnar epithelium', 'Transmural inflammation with skip lesions'],
      answerIndex: 1,
      explanation: "Barrett's is defined by specialised intestinal metaplasia (SIM) – replacement of normal squamous epithelium by columnar epithelium containing goblet cells – driven by chronic acid exposure."
    },
    {
      question: 'A patient with GERD has persistent symptoms despite twice-daily PPI for 8 weeks. The next best step is:',
      options: ['Add H2 blocker at night', '24-hour pH-impedance study off PPI', 'Fundoplication surgery immediately', 'Increase PPI dose to triple daily'],
      answerIndex: 1,
      explanation: 'PPI-refractory GERD requires objective testing before escalation. 24-hour pH-impedance monitoring off PPI confirms whether pathological reflux truly exists, guides further management, and rules out functional heartburn.'
    },
    {
      question: 'Which LA Classification grade of erosive oesophagitis carries the highest risk of Barrett\'s oesophagus?',
      options: ['Grade A', 'Grade B', 'Grade C', 'Grade D'],
      answerIndex: 3,
      explanation: 'LA Grade D (confluent mucosal breaks >75% of the oesophageal circumference) represents the most severe erosive oesophagitis and carries the highest risk for Barrett\'s metaplasia and adenocarcinoma.'
    }
  ],

  pud: [
    {
      question: 'A 50-year-old female on long-term naproxen for rheumatoid arthritis presents with epigastric pain and iron-deficiency anaemia. OGD shows a 1.5 cm gastric ulcer. What is the next mandatory step?',
      options: ['Stop naproxen and start PPI', 'Biopsy the ulcer margins', 'Triple H. pylori eradication immediately', 'CT abdomen to rule out perforation'],
      answerIndex: 1,
      explanation: 'ALL gastric ulcers require multiple biopsies (≥4–6 from margins and base) to exclude gastric carcinoma. A gastric ulcer can never be assumed benign on appearance alone. After biopsy, stop NSAID and start PPI.'
    },
    {
      question: 'Which of the following features distinguishes duodenal ulcer pain from gastric ulcer pain?',
      options: ['Duodenal ulcer pain is worsened by food', 'Gastric ulcer pain is relieved by food', 'Duodenal ulcer pain is relieved by food', 'Both types present identically'],
      answerIndex: 2,
      explanation: 'Duodenal ulcer pain occurs 2-3 hours after meals (when acid washes into the duodenum without food buffer) and is typically RELIEVED by eating. Gastric ulcer pain is WORSENED by eating as food stimulates acid secretion directly onto the ulcer.'
    },
    {
      question: 'A patient has a perforated peptic ulcer. Plain erect chest X-ray is most likely to show:',
      options: ['Pleural effusion', 'Free air under the diaphragm', 'Mediastinal widening', 'Pulmonary oedema'],
      answerIndex: 1,
      explanation: 'Perforation of a peptic ulcer causes pneumoperitoneum. On an erect CXR, free air (gas) collects under the diaphragm as a crescent-shaped lucency – a surgical emergency requiring immediate laparotomy.'
    },
    {
      question: 'The Urea Breath Test for H. pylori requires which preparation beforehand?',
      options: ['Fasting for 12 hours only', 'Stop PPIs ≥2 weeks and antibiotics ≥4 weeks prior', 'Stop H2 blockers for 48 hours only', 'No special preparation required'],
      answerIndex: 1,
      explanation: 'PPIs suppress H. pylori activity and cause false-negative UBT results. Guidelines recommend stopping PPIs ≥2 weeks and antibiotics/bismuth ≥4 weeks before the test. Serology is the only test unaffected by PPI use.'
    },
    {
      question: 'Zollinger-Ellison Syndrome should be suspected when:',
      options: ['Single duodenal ulcer responds to triple therapy', 'Multiple/recurrent ulcers in unusual locations with serum gastrin >1000 pg/mL', 'H. pylori-positive gastric ulcer that heals with PPI', 'Dyspepsia with normal OGD'],
      answerIndex: 1,
      explanation: 'ZES is caused by a gastrinoma (usually in the "gastrinoma triangle") secreting massive amounts of gastrin → acid hypersecretion → multiple, refractory, atypically located ulcers. Serum gastrin >1000 pg/mL is highly diagnostic.'
    }
  ],

  motility: [
    {
      question: 'A 35-year-old woman presents with progressive dysphagia to BOTH solids and liquids from the onset, regurgitation of undigested food, and weight loss. Manometry shows absent peristalsis and incomplete LOS relaxation. The diagnosis is:',
      options: ['GERD', 'Diffuse Oesophageal Spasm', 'Achalasia', 'Oesophageal carcinoma'],
      answerIndex: 2,
      explanation: 'Achalasia presents with dysphagia to solids AND liquids simultaneously (distinguishing it from mechanical obstruction which starts with solids). The hallmark is absent peristalsis with incomplete LOS relaxation on manometry. "Bird beak" sign on barium swallow.'
    },
    {
      question: 'High-resolution oesophageal manometry is the GOLD STANDARD test for diagnosing:',
      options: ['GERD severity', 'Oesophageal motility disorders', 'Barrett\'s oesophagus', 'Hiatus hernia'],
      answerIndex: 1,
      explanation: 'High-resolution manometry (HRM) with the Chicago Classification system is the gold standard for diagnosing all oesophageal motility disorders – achalasia types I/II/III, diffuse oesophageal spasm, jackhammer oesophagus, and ineffective motility.'
    },
    {
      question: 'Gastroparesis is BEST diagnosed by:',
      options: ['Upper GI endoscopy', 'CT abdomen', 'Gastric emptying scintigraphy (4-hour solid meal scan)', 'Oesophageal manometry'],
      answerIndex: 2,
      explanation: 'Gastric emptying scintigraphy with a standardised 4-hour solid (Tc-99m labelled egg) meal is the gold standard for diagnosing gastroparesis. >10% retention at 4 hours is diagnostic.'
    },
    {
      question: 'Which condition is associated with "jackhammer oesophagus" on manometry?',
      options: ['Achalasia Type I', 'Hypercontractile oesophagus (DCI >8000 mmHg·s·cm)', 'Absent contractility', 'Normal peristalsis with low LOS pressure'],
      answerIndex: 1,
      explanation: 'Jackhammer (hypercontractile) oesophagus is characterised by distal contractile integral (DCI) >8000 mmHg·s·cm on HRM. It causes chest pain and dysphagia, with excessively forceful but coordinated contractions.'
    }
  ],

  dyspepsia: [
    {
      question: 'A 28-year-old presents with 4 months of epigastric discomfort, early satiety, and bloating. No alarm features. H. pylori stool antigen is positive. The BEST initial management is:',
      options: ['OGD immediately', 'H. pylori eradication therapy', 'PPI for 8 weeks without testing H. pylori', 'Reassurance and dietary advice only'],
      answerIndex: 1,
      explanation: '"Test and treat" for H. pylori is the guideline-recommended approach for uninvestigated dyspepsia in patients <55 without alarm features. Eradicating H. pylori provides long-term symptom relief and reduces peptic ulcer/cancer risk.'
    },
    {
      question: 'According to Rome IV criteria, Functional Dyspepsia has two subtypes. Which correctly describes Postprandial Distress Syndrome (PDS)?',
      options: ['Epigastric pain/burning unrelated to meals', 'Bothersome postprandial fullness or early satiation occurring at least 3 days/week', 'Heartburn occurring with meals', 'Nausea and vomiting after every meal'],
      answerIndex: 1,
      explanation: 'PDS (meal-induced dyspepsia) = postprandial fullness and/or early satiation ≥3 days/week. Epigastric Pain Syndrome (EPS) = epigastric pain/burning unrelated to meals. Both require symptoms for ≥3 months with onset ≥6 months prior.'
    },
    {
      question: 'Which alarm feature in a patient with dyspepsia mandates urgent endoscopy?',
      options: ['Age 30 with bloating', 'Unintentional weight loss of 5 kg', 'Mild postprandial fullness', 'H. pylori positive test'],
      answerIndex: 1,
      explanation: 'ALARM features (Age >55 new onset, Loss of weight, Anaemia, Rectal bleeding, Melaena/haematemesis) mandate urgent OGD to exclude malignancy. Unintentional weight loss is a key red flag – it may indicate gastric cancer.'
    }
  ],

  'pediatric-oral': [
    {
      question: 'A 6-week-old male infant presents with projectile non-bilious vomiting after every feed, appears hungry after vomiting, and has a palpable "olive-shaped" mass in the epigastrium. The diagnosis is:',
      options: ['Duodenal atresia', 'Pyloric stenosis', 'Gastroesophageal reflux', 'Intussusception'],
      answerIndex: 1,
      explanation: 'Hypertrophic pyloric stenosis (HPS) classically presents at 2–8 weeks with projectile non-bilious vomiting, an olive-shaped pyloric mass, and metabolic alkalosis (hypochloraemic, hypokalaemic). Ultrasound confirms. Treatment: Ramstedt pyloromyotomy after correction of electrolytes.'
    },
    {
      question: 'The metabolic abnormality expected in pyloric stenosis is:',
      options: ['Metabolic acidosis with hyperkalaemia', 'Metabolic alkalosis with hypochloraemia and hypokalaemia', 'Respiratory alkalosis', 'Normal electrolytes'],
      answerIndex: 1,
      explanation: 'Persistent vomiting of HCl-rich gastric contents causes hypochloraemic, hypokalaemic metabolic alkalosis. The kidneys initially excrete bicarbonate, but as hypovolaemia worsens, they retain sodium and excrete H⁺ (paradoxical aciduria) to preserve volume.'
    },
    {
      question: 'A neonate presents with bilious vomiting on the first day of life. X-ray shows a "double bubble" sign. The diagnosis is:',
      options: ['Pyloric stenosis', 'Oesophageal atresia', 'Duodenal atresia', 'Hirschsprung disease'],
      answerIndex: 2,
      explanation: 'Duodenal atresia causes the "double bubble" sign (gas in stomach + proximal duodenum, no distal gas). It is associated with Down syndrome (Trisomy 21) in 30% of cases. Bilious vomiting on day 1 is the hallmark (vs. pyloric stenosis which presents at 2–8 weeks with non-bilious vomiting).'
    }
  ],

  'dysphagia-odynophagia': [
    {
      question: 'A 70-year-old man presents with 3-month progressive dysphagia starting with solids, now affecting liquids, and 8 kg weight loss. The MOST likely diagnosis is:',
      options: ['Achalasia', 'Oesophageal carcinoma', 'Plummer-Vinson syndrome', 'Benign oesophageal stricture'],
      answerIndex: 1,
      explanation: 'Progressive dysphagia solids→liquids with weight loss in an elderly patient = oesophageal carcinoma until proven otherwise. This contrasts with achalasia (dysphagia to solids AND liquids simultaneously from the start) and benign stricture (dysphagia to solids only, stable).'
    },
    {
      question: 'Plummer-Vinson (Paterson-Brown-Kelly) syndrome is characterised by the triad of:',
      options: ['Dysphagia, iron-deficiency anaemia, and oesophageal web', 'Dysphagia, hypercalcaemia, and peptic ulcer', 'Odynophagia, raised ESR, and lymphadenopathy', 'Dysphagia, hepatosplenomegaly, and portal hypertension'],
      answerIndex: 0,
      explanation: 'Plummer-Vinson (called Paterson-Brown-Kelly in the UK) = iron-deficiency anaemia + post-cricoid oesophageal web + dysphagia. It predominantly affects middle-aged women and is a premalignant condition for post-cricoid squamous cell carcinoma.'
    },
    {
      question: 'Odynophagia (painful swallowing) with white oral plaques in an immunocompromised patient most suggests:',
      options: ['Oesophageal carcinoma', 'Candida oesophagitis', 'Achalasia', 'Pill oesophagitis'],
      answerIndex: 1,
      explanation: 'Candida oesophagitis is the most common infectious cause of odynophagia in immunocompromised patients (HIV, post-transplant, prolonged steroids). White plaques in the mouth (thrush) suggest Candida. Treated with fluconazole.'
    }
  ],

  // ──────────────────── INTESTINAL ────────────────────
  'chronic-diarrhea': [
    {
      question: 'A 35-year-old presents with 6-month watery diarrhea that PERSISTS during fasting. Stool electrolytes show a fecal osmotic gap of 40 mOsm/kg. The most likely mechanism is:',
      options: ['Osmotic diarrhea from lactose intolerance', 'Secretory diarrhea from a neuroendocrine tumour', 'Inflammatory diarrhea from Crohn\'s disease', 'Fatty diarrhea from pancreatic insufficiency'],
      answerIndex: 1,
      explanation: 'Secretory diarrhea: persists with fasting and fecal osmotic gap <50 mOsm/kg (active secretion maintains osmolarity). Osmotic diarrhea stops with fasting and gap >125. This gap of 40 points to secretory – suspect VIPoma, carcinoid, or bile acid malabsorption.'
    },
    {
      question: 'Which test is most useful for distinguishing IBD from IBS in a patient with chronic diarrhea?',
      options: ['Colonoscopy with biopsy', 'Fecal calprotectin', 'CT abdomen', 'Serum CRP'],
      answerIndex: 1,
      explanation: 'Fecal calprotectin is a highly sensitive, non-invasive marker of intestinal inflammation. It reliably distinguishes IBD (elevated) from IBS (normal) and avoids unnecessary colonoscopy. Colonoscopy is confirmatory but more invasive.'
    },
    {
      question: 'A patient with IBD develops severe acute colitis and is admitted. Which medication should be AVOIDED due to the risk of precipitating toxic megacolon?',
      options: ['IV hydrocortisone', 'Mesalamine enema', 'Loperamide', 'IV ciclosporin'],
      answerIndex: 2,
      explanation: 'Loperamide and antispasmodics are CONTRAINDICATED in acute severe colitis as they reduce colonic motility, increasing the risk of toxic megacolon (colonic diameter >6 cm with systemic toxicity) – a life-threatening complication requiring colectomy if medical therapy fails.'
    },
    {
      question: 'Dermatitis herpetiformis is a cutaneous manifestation strongly associated with:',
      options: ['Ulcerative colitis', 'Celiac disease', 'Crohn\'s disease', 'Whipple\'s disease'],
      answerIndex: 1,
      explanation: 'Dermatitis herpetiformis (intensely itchy blistering rash on extensor surfaces) occurs in 15–25% of celiac disease patients due to IgA deposition. It is pathognomonic for celiac disease and responds to a gluten-free diet.'
    },
    {
      question: 'Which biologic agent used in IBD selectively blocks lymphocyte trafficking to the gut by targeting α4β7 integrin?',
      options: ['Infliximab', 'Adalimumab', 'Vedolizumab', 'Ustekinumab'],
      answerIndex: 2,
      explanation: 'Vedolizumab (Entyvio) is a gut-selective anti-integrin antibody that blocks α4β7 integrin on lymphocytes, preventing them from migrating into gut mucosa. Unlike anti-TNFs, it has no systemic immunosuppression. Ustekinumab blocks IL-12/23.'
    }
  ],

  'chronic-constipation': [
    {
      question: 'According to Rome IV criteria, Functional Constipation requires ≥2 of the listed symptoms for the last 3 months with onset ≥6 months prior. Which of these is a diagnostic criterion?',
      options: ['Diarrhea alternating with constipation', 'Straining in >25% of defecations', 'Stool frequency of <1 per day', 'Abdominal distension only'],
      answerIndex: 1,
      explanation: 'Rome IV criteria for Functional Constipation include: straining >25%, lumpy/hard stools >25%, incomplete evacuation >25%, anorectal blockage >25%, manual manoeuvres >25%, and <3 BMs/week. At least 2 must be present for ≥3 months.'
    },
    {
      question: 'A 65-year-old woman with chronic constipation fails to expel a water-filled balloon within 1 minute. Manometry shows paradoxical contraction of the external anal sphincter on straining. The diagnosis is:',
      options: ['Slow-transit constipation', 'Normal-transit constipation (IBS-C)', 'Dyssynergic defecation (pelvic floor dyssynergia)', 'Hirschsprung disease'],
      answerIndex: 2,
      explanation: 'Dyssynergic defecation = paradoxical contraction (instead of relaxation) of the puborectalis and external anal sphincter during attempted defecation. Diagnosed by abnormal balloon expulsion test + anorectal manometry. Treatment: biofeedback therapy.'
    },
    {
      question: 'Which laxative class works by increasing colonic intraluminal fluid secretion via activation of guanylate cyclase-C receptors?',
      options: ['Osmotic laxatives (PEG)', 'Stimulant laxatives (senna)', 'Prosecretory agents (linaclotide)', 'Bulk-forming laxatives (ispaghula)'],
      answerIndex: 2,
      explanation: 'Linaclotide and plecanatide are prosecretory agents that activate guanylate cyclase-C (GC-C) receptors in intestinal epithelial cells, increasing cGMP → activates CFTR → fluid and bicarbonate secretion into intestinal lumen. Useful for IBS-C and chronic idiopathic constipation.'
    },
    {
      question: 'A patient with constipation is found to have hypothyroidism on blood tests. The appropriate next step is:',
      options: ['Colonoscopy', 'Thyroid replacement therapy (levothyroxine)', 'Biofeedback therapy', 'PEG laxative prescription'],
      answerIndex: 1,
      explanation: 'Secondary causes of constipation must be treated first. Hypothyroidism causes hypomotility of the entire GI tract. Correcting the underlying thyroid deficiency with levothyroxine often resolves constipation without needing specific laxative therapy.'
    }
  ],

  'mesenteric-ischemia': [
    {
      question: 'A 72-year-old with atrial fibrillation presents with sudden severe periumbilical pain, nausea, and vomiting. Examination reveals pain "out of proportion" to a soft abdomen. The most likely diagnosis is:',
      options: ['Acute pancreatitis', 'Acute mesenteric ischemia (arterial embolism)', 'Renal colic', 'Ruptured ovarian cyst'],
      answerIndex: 1,
      explanation: 'Classic presentation of AMAE (Acute Mesenteric Arterial Embolism) from AF: sudden severe pain out of proportion to exam findings (because mucosa is ischemic but the peritoneum is not yet inflamed). AF is the classic risk factor. This is a surgical emergency.'
    },
    {
      question: 'What is the DIAGNOSTIC TEST OF CHOICE for suspected acute mesenteric ischemia?',
      options: ['Plain abdominal X-ray', 'Mesenteric Doppler ultrasound', 'CT angiography of mesenteric vessels', 'Colonoscopy'],
      answerIndex: 2,
      explanation: 'CT angiography (CTA) is the diagnostic test of choice – it is fast, widely available, identifies the level/cause of occlusion, and detects bowel wall ischemia, pneumatosis, and portal venous gas (late/severe signs). Conventional angiography is reserved for therapeutic intervention.'
    },
    {
      question: 'Non-Occlusive Mesenteric Ischemia (NOMI) is most commonly caused by:',
      options: ['Arterial embolism from AF', 'Venous thrombosis from hypercoagulable state', 'Severe hypotension/shock with vasopressor use', 'Aortic dissection'],
      answerIndex: 2,
      explanation: 'NOMI occurs when severe systemic hypoperfusion (cardiogenic shock, sepsis, post-cardiac surgery) combined with vasoconstrictors (noradrenaline) causes intense mesenteric arterial vasoconstriction without a physical occlusion. Treatment: treat underlying cause + intra-arterial papaverine via angiography.'
    },
    {
      question: 'A patient with known cirrhosis and portal hypertension presents with subacute abdominal pain and bloody diarrhea. CT shows thickening of the small bowel with superior mesenteric vein thrombosis. The diagnosis is:',
      options: ['AMAE', 'AMAT', 'NOMI', 'Mesenteric Venous Thrombosis (MVT)'],
      answerIndex: 3,
      explanation: 'Mesenteric Venous Thrombosis (MVT) is caused by hypercoagulable states, portal hypertension, or abdominal infection. Unlike arterial ischemia, onset is subacute (days). CT shows bowel oedema, ascites, and mesenteric vein filling defects. Treatment: anticoagulation (LMWH → warfarin).'
    }
  ],

  diverticulosis: [
    {
      question: 'A 70-year-old male presents with left iliac fossa pain, fever, and leukocytosis. CT shows pericolic fat stranding with a 4 cm pericolic abscess. According to the Hinchey classification, this is:',
      options: ['Hinchey Stage I (pericolic phlegmon)', 'Hinchey Stage II (pericolic/pelvic abscess)', 'Hinchey Stage III (purulent peritonitis)', 'Hinchey Stage IV (faecal peritonitis)'],
      answerIndex: 1,
      explanation: 'Hinchey Stage II = contained pericolic or pelvic abscess. Management: IV antibiotics + CT-guided percutaneous drainage if >3–4 cm. Stage I (phlegmon) = antibiotics only. Stage III/IV (peritonitis) = emergency surgery (Hartmann\'s procedure).'
    },
    {
      question: 'Which dietary advice is MOST evidence-based for preventing recurrence of diverticulitis?',
      options: ['Low-fibre diet to rest the colon', 'High-fibre diet (fruits, vegetables, legumes)', 'Complete avoidance of nuts and seeds', 'Liquid diet indefinitely'],
      answerIndex: 1,
      explanation: 'A high-fibre diet reduces intraluminal pressure and constipation, decreasing the risk of diverticulitis recurrence. The old advice to avoid nuts/seeds/corn is NOT evidence-based and should not be given. Current guidelines recommend a high-fibre, plant-rich diet.'
    },
    {
      question: 'A 65-year-old presents with painless, massive bright red rectal bleeding and haemodynamic instability. Colonoscopy shows active diverticular bleeding. The MOST appropriate next step if bleeding continues after endoscopic haemostasis fails is:',
      options: ['IV antibiotics and observation', 'CT angiography ± embolisation', 'Barium enema', 'Immediate total colectomy'],
      answerIndex: 1,
      explanation: 'For ongoing diverticular bleeding failing endoscopic haemostasis, CT angiography can localise the bleeding vessel, followed by superselective mesenteric artery embolisation. Selective segmental colectomy is the surgical option if embolisation fails or is unavailable.'
    }
  ],

  'gi-motility': [
    {
      question: 'A diabetic patient presents with early satiety, nausea, and vomiting of food eaten hours earlier. Gastric emptying scintigraphy shows 60% retention at 2 hours and 15% at 4 hours. The diagnosis is:',
      options: ['Achalasia', 'Gastroparesis', 'Dumping syndrome', 'Pyloric stenosis'],
      answerIndex: 1,
      explanation: 'Gastroparesis = delayed gastric emptying without mechanical obstruction. Scintigraphy: >10% retention at 4 hours confirms it. Diabetes is the most common identifiable cause (autonomic neuropathy of vagus nerve). Treatment: dietary modification, metoclopramide, domperidone, or erythromycin (prokinetics).'
    },
    {
      question: 'The Interstitial Cells of Cajal (ICC) are important in GI motility because they:',
      options: ['Produce mucus to lubricate the bowel wall', 'Generate slow-wave electrical rhythms (pacemaker function)', 'Absorb nutrients across the intestinal epithelium', 'Secrete digestive enzymes'],
      answerIndex: 1,
      explanation: 'ICC are the pacemaker cells of the GI tract, generating slow waves (basic electrical rhythm) that coordinate smooth muscle contraction. Loss of ICC (as in diabetic neuropathy or post-surgical damage) contributes to gastroparesis and intestinal dysmotility.'
    },
    {
      question: 'Early dumping syndrome after gastric surgery is best explained by:',
      options: ['Bacterial overgrowth in the efferent loop', 'Rapid emptying of hyperosmolar food into the small bowel causing fluid shift and vasoactive peptide release', 'Hypoglycaemia from excessive insulin secretion 2-3 hours post-meal', 'Adhesion formation causing partial small bowel obstruction'],
      answerIndex: 1,
      explanation: 'Early dumping (within 30 min of eating): rapid gastric emptying → hyperosmolar chyme in small bowel → fluid shifts into the bowel lumen + release of vasoactive peptides (serotonin, VIP, GLP-1) → diarrhoea, flushing, tachycardia. Late dumping (2-3 hrs) = reactive hypoglycaemia.'
    }
  ],

  'congenital-git-anomalies': [
    {
      question: 'A newborn has NOT passed meconium within 48 hours of birth. Rectal examination causes an explosive release of stool/gas. The most likely diagnosis is:',
      options: ['Meconium ileus', 'Hirschsprung disease', 'Duodenal atresia', 'Imperforate anus'],
      answerIndex: 1,
      explanation: 'Hirschsprung disease (congenital aganglionic megacolon) classically presents with delayed meconium passage (>48 hrs) and explosive decompression on rectal exam as trapped stool is released past the aganglionic segment. Diagnosis: rectal suction biopsy (absent ganglion cells).'
    },
    {
      question: 'Oesophageal atresia with tracheo-oesophageal fistula (most common type) is suspected when:',
      options: ['Newborn tolerates first feed then vomits projectile non-bilious feeds at 4 weeks', 'Unable to pass NGT into stomach + excessive salivation + choking on first feed', 'Bilious vomiting on day 1 with double bubble sign on X-ray', 'Abdominal distension without vomiting'],
      answerIndex: 1,
      explanation: 'TOF + oesophageal atresia: NGT coils in oesophageal pouch (can\'t advance), excessive drooling, coughing/choking on 1st feed. Type C (most common, 85%): proximal atresia + distal fistula to trachea. CXR shows coiled NGT + gas in stomach (via distal fistula).'
    },
    {
      question: 'Meconium ileus in a neonate is strongly associated with:',
      options: ['Down syndrome (Trisomy 21)', 'Cystic fibrosis', 'Hirschsprung disease', 'Duodenal atresia'],
      answerIndex: 1,
      explanation: 'Meconium ileus (obstruction from abnormally thick/sticky meconium in the terminal ileum) occurs almost exclusively in cystic fibrosis (CFTR mutation → abnormal chloride transport → thick secretions in GI tract). Always screen for CF in meconium ileus.'
    }
  ],

  'pediatric-anorectal': [
    {
      question: 'A 3-year-old child has been constipated for 18 months and now has daytime soiling (encopresis). Rectal exam reveals a vault full of hard stool. The most appropriate diagnosis is:',
      options: ['Hirschsprung disease', 'Functional constipation with overflow incontinence', 'Inflammatory bowel disease', 'Child abuse'],
      answerIndex: 1,
      explanation: 'Functional constipation with overflow encopresis (paradoxical diarrhea/soiling) is extremely common in toddlers. The rectum is full of hard faecal impaction with liquid stool leaking around it. Treatment: disimpaction (PEG, enema) followed by maintenance osmotic laxatives and toilet training.'
    },
    {
      question: 'Anal fissure in children most commonly occurs at which position?',
      options: ['Left lateral (3 o\'clock)', 'Right lateral (9 o\'clock)', 'Posterior midline (6 o\'clock)', 'Anterior midline (12 o\'clock)'],
      answerIndex: 2,
      explanation: 'Anal fissures (in both children and adults) occur predominantly at the posterior midline (6 o\'clock) due to reduced vascularity and increased sphincter tension at this site. Anterior fissures are more common in women post-partum. Lateral fissures should raise suspicion for Crohn\'s disease or HIV.'
    },
    {
      question: 'The gold standard diagnostic test for Hirschsprung disease is:',
      options: ['Barium enema showing transition zone', 'Anorectal manometry showing absent rectoanal inhibitory reflex', 'Rectal suction biopsy showing absent ganglion cells', 'MRI pelvis'],
      answerIndex: 2,
      explanation: 'Rectal suction biopsy with histology showing ABSENT ganglion cells (and increased acetylcholinesterase staining) is the gold standard for diagnosing Hirschsprung disease. Anorectal manometry (absent RAIR) and barium enema (transition zone) are supportive but not diagnostic.'
    }
  ],

  'protein-losing-enteropathy': [
    {
      question: 'A patient with oedema, ascites, and low serum albumin has normal liver function tests and no proteinuria. The most useful initial investigation is:',
      options: ['Serum protein electrophoresis', 'Faecal alpha-1-antitrypsin clearance', '24-hour urine protein', 'Liver biopsy'],
      answerIndex: 1,
      explanation: 'Faecal alpha-1-antitrypsin (A1AT) clearance is the preferred non-invasive test for protein-losing enteropathy. A1AT is not degraded in the GI tract (unlike albumin), so elevated faecal A1AT indicates protein leakage into the intestine. Normal LFTs and absence of proteinuria point away from hepatic or renal causes.'
    },
    {
      question: 'Protein-losing enteropathy is a recognised complication of which cardiac condition?',
      options: ['Mitral regurgitation', 'Fontan circulation', 'Aortic stenosis', 'Atrial fibrillation'],
      answerIndex: 1,
      explanation: 'Protein-losing enteropathy is a well-recognised complication of Fontan circulation (single-ventricle palliation) due to elevated systemic venous pressure causing intestinal lymphangiectasia and protein leakage. It is also associated with constrictive pericarditis.'
    },
    {
      question: 'Which electrolyte/nutrition abnormality is characteristically found in protein-losing enteropathy?',
      options: ['Hypercalcaemia', 'Hypoalbuminaemia with low serum immunoglobulins', 'Elevated serum protein', 'Hyperkalaemia'],
      answerIndex: 1,
      explanation: 'PLE causes non-selective loss of proteins into the gut – including albumin, immunoglobulins, clotting factors, and transferrin. This leads to hypoalbuminaemia (oedema, ascites), hypogammaglobulinaemia (infections), and lymphopenia (if lymphangiectasia).'
    }
  ],

  'pediatric-food-allergies': [
    {
      question: 'A 6-month-old breastfed infant develops blood-streaked stools, eczema, and colicky pain. Mother ate dairy. The most likely diagnosis is:',
      options: ['Coeliac disease', 'Food protein-induced allergic proctocolitis (FPIAP)', 'Intussusception', 'Meckel\'s diverticulum'],
      answerIndex: 1,
      explanation: 'FPIAP (milk protein allergy) is the most common cause of rectal bleeding in infants. It is a non-IgE-mediated reaction to milk protein transmitted in breast milk. Management: maternal elimination diet. The infant appears well (unlike intussusception which causes episodic severe pain).'
    },
    {
      question: 'The GOLD STANDARD diagnostic test for IgE-mediated food allergy is:',
      options: ['Skin prick test (SPT)', 'Specific IgE (RAST) blood test', 'Double-blind placebo-controlled food challenge (DBPCFC)', 'Patch testing'],
      answerIndex: 2,
      explanation: 'DBPCFC is the gold standard as it eliminates observer and patient bias. SPT and specific IgE are useful screening tools but have high false-positive rates. They indicate sensitisation, not necessarily clinical allergy.'
    },
    {
      question: 'A 4-year-old with known peanut allergy develops urticaria, angioedema, stridor, and hypotension after accidental ingestion. The FIRST-LINE treatment is:',
      options: ['IV antihistamine (chlorphenamine)', 'Oral prednisolone', 'IM adrenaline (epinephrine) 0.01 mg/kg', 'IV hydrocortisone'],
      answerIndex: 2,
      explanation: 'Anaphylaxis: IM adrenaline (epinephrine) 0.01 mg/kg into the anterolateral thigh is the FIRST-LINE treatment. Antihistamines and steroids are adjuncts only – they do NOT treat the life-threatening bronchospasm or hypotension. Call ambulance, lay flat, give high-flow O₂.'
    }
  ]
};

// ── Patch both data files ─────────────────────────────────────────────────────
const gitPath = 'js/lessons-data.js';
const intPath = 'js/intestinal-lessons-data.js';

const git = decode(gitPath);
const int = decode(intPath);

let gitPatched = 0, intPatched = 0;

git.forEach(lesson => {
  if (mcqBank[lesson.id]) {
    lesson.quizQuestions = mcqBank[lesson.id];
    gitPatched++;
    console.log(`✅ GIT  patched: ${lesson.id} (${lesson.quizQuestions.length} Qs)`);
  }
});

int.forEach(lesson => {
  if (mcqBank[lesson.id]) {
    lesson.quizQuestions = mcqBank[lesson.id];
    intPatched++;
    console.log(`✅ INT  patched: ${lesson.id} (${lesson.quizQuestions.length} Qs)`);
  }
});

fs.writeFileSync(gitPath, encode('lessonsData', git), 'utf8');
fs.writeFileSync(intPath, encode('intestinalLessonsData', int), 'utf8');

console.log(`\n✅ Done. Git: ${gitPatched} lessons patched, Intestinal: ${intPatched} lessons patched.`);
