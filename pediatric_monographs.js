// pediatric_monographs.js
// Pediatric antimicrobial monographs for Ospital ng Makati AMS app
// IMPORTANT: Verify all doses against Sanford / PSMID / institutional guidelines.

const PEDIATRIC_MONOGRAPHS = {

  // ============================
  //        RESTRICTED
  // ============================

  "Acyclovir": {
    restricted: true,
    spectrum: "Active against HSV-1, HSV-2, and VZV; no CMV activity.",
    dosing: "Severe HSV/VZV: 10–15 mg/kg/dose IV q8h (age >28 days). Neonatal dosing differs (60 mg/kg/day divided q8h). Older infants/children: 30 mg/kg/day divided q8h for encephalitis or immunocompromised VZV.",
    renal: "Reduce dose or extend interval in renal impairment; risk of crystalluria increases with dehydration.",
    hepatic: "No specific pediatric adjustment; monitor if severe hepatic dysfunction.",
    duration: "7–14 days; 14–21 days for encephalitis.",
    monitoring: "Renal function, urine output; neurotoxicity if renal impairment.",
    warnings: "Ensure good hydration; avoid rapid infusion; caution in neonates.",
    ams: "Reserve for documented or high-suspicion HSV/VZV infection.",
    weightBased: true,
    mgPerKgDose: 10
  },

  "Amphotericin B": {
    restricted: true,
    spectrum: "Broad: Candida spp., Cryptococcus, Mucorales, endemic fungi; variable vs Aspergillus (not A. terreus).",
    dosing: "Deoxycholate: 0.3–1 mg/kg/day IV. Liposomal: 3–5 mg/kg/day. Lipid complex: 5 mg/kg/day.",
    renal: "No formal adjustment recommended, but nephrotoxicity is common; monitor closely.",
    hepatic: "No routine adjustment.",
    duration: "Weeks depending on infection and clearance.",
    monitoring: "Renal function, potassium, magnesium, CBC; infusion reactions.",
    warnings: "Major nephrotoxicity, electrolyte wasting, infusion reactions.",
    ams: "Reserve for severe or refractory invasive fungal infections.",
    weightBased: true,
    mgPerKgDose: 1
  },

  "Aztreonam": {
    restricted: true,
    spectrum: "Active vs aerobic Gram-negative bacilli including Pseudomonas; no Gram-positive or anaerobic activity.",
    dosing: "90–120 mg/kg/day divided q6–8h (typical pediatric range). Max 8 g/day.",
    renal: "CrCl ≥30: no adjustment. CrCl 10–30: give 50% dose. CrCl <10: 1–2 g q24h.",
    hepatic: "No dosage change required.",
    duration: "7–14 days.",
    monitoring: "Renal function, CBC, signs of hypersensitivity.",
    warnings: "Safe in most beta-lactam allergies except ceftazidime/cefiderocol side-chain allergy.",
    ams: "Use when Gram-negative infection and beta-lactam allergy limit other options.",
    weightBased: true,
    mgPerKgDose: 40
  },

  "Caspofungin (Echinocandin)": {
    restricted: true,
    spectrum: "Candida spp. including resistant strains; Aspergillus (fungistatic).",
    dosing: "Age >3 months: 70 mg/m² loading dose day 1, then 50 mg/m²/day.",
    renal: "No adjustment needed.",
    hepatic: "Child-Pugh B: maintenance 35 mg/m²/day per labeling; emerging data suggest no change, but label-based reduction preferred.",
    duration: "≥14 days for candidemia after clearance; longer for invasive infections.",
    monitoring: "LFTs; infusion reactions.",
    warnings: "Potential hepatotoxicity; mild infusion reactions possible.",
    ams: "Reserve for invasive candidiasis/aspergillosis or refractory fungal infection.",
    weightBased: false,
    mgPerKgDose: 0
  },

  "Cefepime": {
    restricted: true,
    spectrum: "Broad Gram-negative including Pseudomonas; MSSA; some Gram-positive.",
    dosing: "Usual infections: 50 mg/kg/dose IV q8–12h. Pseudomonas/severe infections: 50 mg/kg/dose IV q8h (max 2 g/dose).",
    renal: "Adjust dose/interval based on CrCl; neurotoxicity risk increases with renal impairment.",
    hepatic: "No adjustment needed.",
    duration: "7–14 days depending on source and severity.",
    monitoring: "Renal function, neurologic status (risk of encephalopathy/seizures).",
    warnings: "Neurotoxicity especially with renal dysfunction.",
    ams: "Used for Pseudomonas or serious Gram-negative infections.",
    weightBased: true,
    mgPerKgDose: 50
  },

  "Colistin": {
    restricted: true,
    spectrum: "Active against MDR Gram-negative organisms including Pseudomonas, Acinetobacter, and CRE.",
    dosing: "Follow colistin-base-activity (CBA) pediatric protocol; typical range 2.5–5 mg CBA/kg/day divided q12h (institution dependent).",
    renal: "Adjust dose according to renal function; nephrotoxicity common. :contentReference[oaicite:6]{index=6}",
    hepatic: "Minimal hepatic effect.",
    duration: "7–14+ days depending on severity and organism.",
    monitoring: "Renal function, electrolytes, neurologic status.",
    warnings: "High nephrotoxicity and neurotoxicity risk.",
    ams: "Reserve strictly for MDR Gram-negative infections only.",
    weightBased: true,
    mgPerKgDose: 0
  },

  "Ciprofloxacin": {
    restricted: true,
    spectrum: "Fluoroquinolone active vs Gram-negatives including Pseudomonas; limited Gram-positive activity.",
    dosing: "Oral: 20–40 mg/kg/day divided q12h (max 1.5 g/day). IV: 20–30 mg/kg/day divided q12h (max 1.2 g/day). :contentReference[oaicite:7]{index=7}",
    renal: "Adjust interval when CrCl <50 mL/min (per tablet/IV-specific renal table).",
    hepatic: "No adjustment required; monitor in severe hepatic disease.",
    duration: "7–14 days depending on infection.",
    monitoring: "QT interval, tendinopathy, neurologic symptoms.",
    warnings: "Risk of tendon injury, QT prolongation; avoid unless needed due to toxicity profile.",
    ams: "Reserve for high-risk Gram-negative infections, particularly Pseudomonas.",
    weightBased: true,
    mgPerKgDose: 20
  },

  "Doripenem": {
    restricted: true,
    spectrum: "Broad carbapenem active vs Pseudomonas and most Gram-negatives; stable vs ESBL.",
    dosing: "10–20 mg/kg/dose IV q8h (max 500 mg/dose). :contentReference[oaicite:8]{index=8}",
    renal: "Adjust based on CrCl; seizure risk increases with accumulation.",
    hepatic: "No routine adjustment; monitor in severe disease.",
    duration: "7–14 days.",
    monitoring: "Renal function, neurologic status (seizure risk).",
    warnings: "Carbapenems may lower seizure threshold.",
    ams: "Reserve for MDR or high-risk Gram-negative infections.",
    weightBased: true,
    mgPerKgDose: 15
  },

  "Ertapenem": {
    restricted: true,
    spectrum: "Active against ESBL-producing Enterobacterales and anaerobes; NO Pseudomonas or Acinetobacter activity.",
    dosing: "15 mg/kg/dose IV/IM q12h (max 1 g/day). :contentReference[oaicite:9]{index=9}",
    renal: "Dose/interval adjustment required when renal function declines.",
    hepatic: "No adjustment needed.",
    duration: "7–14 days.",
    monitoring: "Renal function, CBC.",
    warnings: "Not appropriate for infections where Pseudomonas is suspected.",
    ams: "Use only for ESBL infections with low risk for Pseudomonas.",
    weightBased: true,
    mgPerKgDose: 15
  },

  "Famciclovir": {
    restricted: true,
    spectrum: "HSV-1, HSV-2, and VZV activity (penciclovir metabolite).",
    dosing: "Not recommended—safety and efficacy not established in pediatrics. :contentReference[oaicite:10]{index=10}",
    renal: "Adjust per adult renal impairment table if used off-label.",
    hepatic: "No adjustment in mild/moderate impairment; no data for severe impairment.",
    duration: "Varies by herpes syndrome; generally 5–10 days.",
    monitoring: "Renal function.",
    warnings: "No pediatric efficacy data; avoid unless directed by specialist.",
    ams: "Use only when oral therapy is needed AND specialist permits.",
    weightBased: true,
    mgPerKgDose: 0
  },

  "Flucytosine": {
    restricted: true,
    spectrum: "Cryptococcus, Candida spp.; used mainly with Amphotericin B for cryptococcal meningitis.",
    dosing: "Standard pediatric dosing NOT established; typical adult-based regimen is 25 mg/kg q6h. :contentReference[oaicite:11]{index=11}",
    renal: "Strong adjustment required based on CrCl and serum drug levels.",
    hepatic: "Generally no adjustment needed, but hepatotoxicity possible.",
    duration: "Usually first 2 weeks combined with amphotericin during induction therapy.",
    monitoring: "CBC, renal function, LFTs, drug levels (goal peak 25–100 μg/mL).",
    warnings: "Hematologic toxicity common; avoid monotherapy.",
    ams: "Restricted to specialist-directed combination therapy only.",
    weightBased: true,
    mgPerKgDose: 25
  },


  "Imipenem": {
    restricted: true,
    spectrum: "Very broad-spectrum carbapenem with activity against Pseudomonas, anaerobes, MSSA, many Enterobacterales.",
    dosing: "15–25 mg/kg/dose IV q6h (max 500 mg/dose).",
    renal: "Reduce dose/extend interval for impaired renal function. :contentReference[oaicite:5]{index=5}",
    hepatic: "No specific adjustment; monitor if significant hepatic disease.",
    duration: "7–14 days depending on infection site.",
    monitoring: "Neurologic status (seizure risk), renal function.",
    warnings: "Higher seizure risk compared with meropenem/ertapenem.",
    ams: "Reserve for severe polymicrobial infections or MDR Gram-negative infections.",
    weightBased: true,
    mgPerKgDose: 20
  },

  "Levofloxacin": {
    restricted: true,
    spectrum: "Respiratory fluoroquinolone active against S. pneumoniae, H. influenzae, atypicals, and some Gram-negatives including Pseudomonas.",
    dosing: "10–20 mg/kg/day PO/IV divided q12–24h (max 750 mg/day). :contentReference[oaicite:6]{index=6}",
    renal: "Adjust based on creatinine clearance.",
    hepatic: "No adjustment; monitor in severe impairment.",
    duration: "7–14 days depending on syndrome.",
    monitoring: "QT interval, musculoskeletal complaints.",
    warnings: "Tendinopathy and QT prolongation; avoid unless clearly indicated.",
    ams: "Reserve for MDR pneumococcus or Pseudomonas when no safer options exist.",
    weightBased: true,
    mgPerKgDose: 10
  },

  "Meropenem": {
    restricted: true,
    spectrum: "Broad carbapenem active vs ESBL-producing Enterobacterales, Pseudomonas, anaerobes, and many Gram-negatives.",
    dosing: "20–40 mg/kg/dose IV q8h (max 2 g/dose). :contentReference[oaicite:7]{index=7}",
    renal: "Renal adjustment required.",
    hepatic: "No routine adjustment.",
    duration: "7–14 days.",
    monitoring: "Renal function, mental status (rare seizures).",
    warnings: "Carbapenems may lower seizure threshold; lower risk than imipenem.",
    ams: "Reserve for MDR Gram-negative infections or severe sepsis.",
    weightBased: true,
    mgPerKgDose: 30
  },

  "Micafungin (Echinocandin)": {
    restricted: true,
    spectrum: "Candida spp. including azole-resistant strains; fungistatic vs Aspergillus.",
    dosing: "2–4 mg/kg/day IV (max 100 mg/day). Pediatric table shows 2 mg/kg/day for candidemia; up to 4 mg/kg/day for esophageal/peritoneal disease. :contentReference[oaicite:8]{index=8}",
    renal: "No renal adjustment required.",
    hepatic: "Monitor LFTs; mild hepatotoxicity possible.",
    duration: "≥14 days after clearance for candidemia; longer for invasive infection.",
    monitoring: "LFTs, infusion reactions.",
    warnings: "Risk of hepatotoxicity; adjust carefully in pre-existing liver disease.",
    ams: "Reserve for invasive candidiasis/aspergillosis when azoles not appropriate.",
    weightBased: true,
    mgPerKgDose: 3
  },

  "Moxifloxacin": {
    restricted: true,
    spectrum: "Broad-spectrum fluoroquinolone with strong Gram-positive, atypical, and anaerobic activity; no Pseudomonas.",
    dosing: "Pediatric dosing NOT established. Sanford explicitly lists: 'Safety and efficacy not established' for age >28 days. :contentReference[oaicite:9]{index=9}",
    renal: "No renal adjustment needed.",
    hepatic: "Avoid in severe hepatic impairment.",
    duration: "7–14 days if ever used (off-label).",
    monitoring: "QT interval, CNS effects, glucose abnormalities.",
    warnings: "QT prolongation; tendon toxicity; should not be used in pediatrics unless mandated by specialist.",
    ams: "Use only with infectious disease specialist approval.",
    weightBased: false,
    mgPerKgDose: 0
  },

"Ofloxacin": {
  restricted: true,
  spectrum: "Fluoroquinolone primarily active against Gram-negative bacilli; limited Gram-positive activity.",
  dosing: "7.5–10 mg/kg/dose PO q12h (max 400 mg/dose).",
  renal: "Adjust dose/interval in renal impairment.",
  hepatic: "Monitor in hepatic dysfunction.",
  duration: "7–14 days depending on syndrome.",
  monitoring: "Monitor for CNS effects, QT prolongation, tendon symptoms.",
  warnings: "Class risks: musculoskeletal toxicity and QT issues.",
  ams: "Reserve for MDR Gram-negative infections where safer alternatives are not effective.",
  weightBased: true,
  mgPerKgDose: 10
},

"Remdesivir": {
  restricted: true,
  spectrum: "Antiviral active against SARS-CoV-2.",
  dosing: "Loading: 5 mg/kg IV (max 200 mg) × 1 dose; then 2.5 mg/kg IV daily (max 100 mg).",
  renal: "Avoid if severe renal impairment due to SBECD accumulation.",
  hepatic: "Monitor ALT; discontinue if hepatitis develops.",
  duration: "3–5 days typical; up to 10 days for severe disease.",
  monitoring: "LFTs, renal function.",
  warnings: "Use only according to national COVID protocols.",
  ams: "Restricted for moderate to severe COVID-19.",
  weightBased: true,
  mgPerKgDose: 5
},

"Valganciclovir": {
  restricted: true,
  spectrum: "Active against CMV; prodrug of ganciclovir.",
  dosing: "Dose based on BSA × CrCl using pediatric CMV formula: 7 × BSA × CrCl (max CrCl capped at 150).",
  renal: "Strong renal adjustment required.",
  hepatic: "Monitor LFTs.",
  duration: "Weeks to months depending on indication.",
  monitoring: "CBC for neutropenia, renal function.",
  warnings: "Myelosuppression, GI effects; mutagenic and teratogenic potential. Do not crush tablets. :contentReference[oaicite:0]{index=0}",
  ams: "Reserve for CMV treatment or prophylaxis under specialist direction.",
  weightBased: false,
  mgPerKgDose: 0
},

"Vancomycin": {
  restricted: true,
  spectrum: "Glycopeptide active vs MRSA, MRSE, resistant Gram-positive cocci.",
  dosing: "10–15 mg/kg/dose IV q6h; target AUC 400–600 µg·h/mL or trough 10–15 µg/mL. :contentReference[oaicite:1]{index=1}",
  renal: "Adjust based on levels and renal function.",
  hepatic: "No dosage adjustment required, but monitor if severe hepatic dysfunction.",
  duration: "Varies by infection.",
  monitoring: "AUC/trough levels, renal function.",
  warnings: "Risk of nephrotoxicity; infusion reactions (histamine-release syndrome); rare DRESS. :contentReference[oaicite:2]{index=2}",
  ams: "Reserve for MRSA or resistant Gram-positive infections.",
  weightBased: true,
  mgPerKgDose: 15
},

"Voriconazole": {
  restricted: true,
  spectrum: "Active vs Aspergillus spp., Candida spp., Scedosporium, and many molds.",
  dosing: "Loading: 9 mg/kg/dose IV/PO q12h × 2 doses; then 8 mg/kg/dose q12h. Adjust per levels. :contentReference[oaicite:3]{index=3}",
  renal: "Avoid IV if CrCl <50 mL/min (SBECD accumulation); use PO instead. :contentReference[oaicite:4]{index=4}",
  hepatic: "Reduce maintenance dose in hepatic impairment (Child-Pugh A–B).",
  duration: "Weeks to months depending on infection.",
  monitoring: "Drug levels (goal trough 1–5.5 µg/mL), LFTs, visual disturbances, photosensitivity.",
  warnings: "Numerous drug interactions (CYP2C19, 2C9, 3A4 substrate & inhibitor); visual disturbances in ~20%; hepatotoxicity; photosensitivity. :contentReference[oaicite:5]{index=5}",
  ams: "Reserved for invasive aspergillosis or severe mold infections.",
  weightBased: true,
  mgPerKgDose: 8
},


  // ============================
  //        MONITORED
  // ============================

  "Amikacin": {
    "restricted": false,
    "spectrum": "Aminoglycoside with potent Gram-negative activity including Pseudomonas; synergistic activity vs some Gram-positive organisms.",
    "dosing": "15–20 mg/kg/dose IV q24h (extended-interval).",
    "renal": "Adjust dose/interval based on CrCl and drug levels.",
    "hepatic": "No major adjustment.",
    "duration": "Commonly 5–7 days depending on clinical response.",
    "monitoring": "Serum drug levels (AUC/peak), renal function, auditory screening for prolonged therapy.",
    "warnings": "Nephrotoxicity and ototoxicity risk; avoid overlapping nephrotoxins.",
    "ams": "De-escalate once cultures clarify need.",
    "weightBased": true,
    "mgPerKgDose": 15
  },

  "Cefotaxime": {
    "restricted": false,
    "spectrum": "3rd-generation cephalosporin: broad Gram-negative, some Gram-positive coverage.",
    "dosing": "50 mg/kg/dose IV q6–8h (max 2 g/dose).",
    "renal": "Adjust in renal impairment.",
    "hepatic": "Monitor in severe hepatic dysfunction.",
    "duration": "7–10 days; longer for meningitis.",
    "monitoring": "Renal function, CBC.",
    "warnings": "Potential for C. difficile.",
    "ams": "Narrow when culture results allow.",
    "weightBased": true,
    "mgPerKgDose": 50
  },

  "Ceftriaxone": {
    "restricted": false,
    "spectrum": "3rd-generation cephalosporin with strong Gram-negative activity; limited Gram-positive.",
    "dosing": "50–75 mg/kg/day IV/IM (max 2 g/day; up to 4 g/day for severe infections).",
    "renal": "Adjust only in severe combined renal/hepatic failure.",
    "hepatic": "Risk of biliary sludging; caution in neonates.",
    "duration": "7–10 days.",
    "monitoring": "LFTs, CBC.",
    "warnings": "Avoid in neonates with hyperbilirubinemia.",
    "ams": "Frequently overused — narrow when possible.",
    "weightBased": true,
    "mgPerKgDose": 60
  },

  "Ceftazidime": {
    "restricted": false,
    "spectrum": "3rd-generation cephalosporin with activity vs Pseudomonas; limited Gram-positive activity. Supported by Sanford Guide pediatric table.",
    "dosing": "40–50 mg/kg/dose IV q8h (max 2 g/dose).",
    "renal": "Adjust based on CrCl: CrCl 10–50: extend interval to q12–24h; CrCl <10: q24h. Hemodialysis: 0.5–1 g q24h (dose after dialysis). :contentReference[oaicite:0]{index=0}",
    "hepatic": "No major adjustment.",
    "duration": "7–14 days.",
    "monitoring": "Renal function; neurologic status (risk of neurotoxicity).",
    "warnings": "Resistance emergence common; shares R1 side chain with aztreonam, possible cross-reactivity. :contentReference[oaicite:1]{index=1}",
    "ams": "Use when Pseudomonas is suspected or documented.",
    "weightBased": true,
    "mgPerKgDose": 50
  },

  "Clindamycin": {
    "restricted": false,
    "spectrum": "Gram-positive cocci including many community MRSA strains; anaerobic coverage; no enterococcal activity.",
    "dosing": "10–13 mg/kg/dose IV/PO q8h. (Sanford: 20–40 mg/kg/day IV divided q6–8h; 30–40 mg/kg/day PO divided q6–8h.) :contentReference[oaicite:2]{index=2}",
    "renal": "No major adjustment; safe in renal impairment. :contentReference[oaicite:3]{index=3}",
    "hepatic": "May need dose adjustment in severe liver disease. :contentReference[oaicite:4]{index=4}",
    "duration": "Typically 5–10 days.",
    "monitoring": "GI tolerance, LFTs, signs of C. difficile.",
    "warnings": "High association with C. difficile; avoid if unnecessary. :contentReference[oaicite:5]{index=5}",
    "ams": "Use for confirmed susceptible GP/anaerobic infections; avoid routine use.",
    "weightBased": true,
    "mgPerKgDose": 10
  },


  "Gentamicin": {
    "restricted": false,
    "spectrum": "Aminoglycoside active vs Gram-negative bacilli; synergistic activity vs Gram-positive cocci when combined with β-lactams.",
    "dosing": "7.5 mg/kg/day IV (either divided q8h or as extended-interval q24h depending on protocol).",
    "renal": "Adjust based on renal function and drug level monitoring.",
    "hepatic": "No direct dose adjustment needed.",
    "duration": "Typically 5–7 days depending on infection.",
    "monitoring": "Serum drug levels, renal function, hearing/vestibular screening during prolonged therapy.",
    "warnings": "Ototoxicity and nephrotoxicity risk; avoid concurrent nephrotoxins.",
    "ams": "De-escalate promptly once cultures clarify need.",
    "weightBased": true,
    "mgPerKgDose": 7.5
  },

  "Kanamycin": {
    "restricted": false,
    "spectrum": "Aminoglycoside primarily used in multidrug-resistant tuberculosis regimens.",
    "dosing": "15–30 mg/kg/day IM/IV given once daily or divided into 1–2 doses.",
    "renal": "Adjust dose/interval in renal impairment.",
    "hepatic": "No routine dosage change.",
    "duration": "Prolonged courses (months) when used in MDR-TB therapy.",
    "monitoring": "Renal function, audiology testing (high ototoxicity risk).",
    "warnings": "Severe irreversible hearing loss and nephrotoxicity are common with long-term use.",
    "ams": "Use only within MDR-TB specialist-directed regimens.",
    "weightBased": true,
    "mgPerKgDose": 15
  },

  "Neomycin": {
    "restricted": false,
    "spectrum": "Oral aminoglycoside used for bowel decontamination and hepatic encephalopathy; not used for systemic infections.",
    "dosing": "50–100 mg/kg/day PO divided q6–8h × 5–6 days (per Sanford pediatric dose). :contentReference[oaicite:0]{index=0}",
    "renal": "Avoid or use extreme caution in renal impairment due to systemic absorption–related toxicity. Sanford lists *no renal dose adjustment*, but toxicity risk increases with impaired renal function. :contentReference[oaicite:1]{index=1}",
    "hepatic": "Used in hepatic encephalopathy; monitor LFTs if prolonged.",
    "duration": "Short courses preferred (5–6 days). Longer use discouraged. :contentReference[oaicite:2]{index=2}",
    "monitoring": "Renal function, hearing/vestibular changes, GI tolerance.",
    "warnings": "Black Box Warning: systemic absorption can lead to nephrotoxicity and neurotoxicity (ototoxicity). Risks increased with high dose, prolonged therapy, dehydration, or impaired renal function. :contentReference[oaicite:3]{index=3}",
    "ams": "Reserve only for bowel prep or hepatic encephalopathy where safer alternatives are not appropriate.",
    "weightBased": false,
    "mgPerKgDose": 0
  },


  "Piperacillin–Tazobactam": {
    "restricted": false,
    "spectrum": "Broad Gram-negative including Pseudomonas, plus Gram-positive and anaerobic coverage.",
    "dosing": "80–100 mg/kg/dose (piperacillin component) IV q6–8h.",
    "renal": "Adjust dose/interval in renal impairment.",
    "hepatic": "Monitor in significant hepatic dysfunction.",
    "duration": "5–14 days depending on infection.",
    "monitoring": "Renal function, electrolytes.",
    "warnings": "High sodium load; risk of nephrotoxicity when combined with aminoglycosides.",
    "ams": "Reserve for polymicrobial or Pseudomonas-risk infections.",
    "weightBased": true,
    "mgPerKgDose": 90
  },

  "Streptomycin": {
    "restricted": false,
    "spectrum": "Aminoglycoside primarily used for tuberculosis; also active vs selected zoonotic pathogens.",
    "dosing": "15–20 mg/kg/day IM (maximum 1 g/day).",
    "renal": "Adjust in renal impairment.",
    "hepatic": "No major dose adjustment required.",
    "duration": "Weeks to months for TB therapy.",
    "monitoring": "Audiology testing, renal function.",
    "warnings": "High risk of irreversible ototoxicity.",
    "ams": "Use strictly under TB specialist guidance.",
    "weightBased": true,
    "mgPerKgDose": 15
  },

  "Tobramycin": {
    "restricted": false,
    "spectrum": "Aminoglycoside with strong Gram-negative activity, including Pseudomonas.",
    "dosing": "5–7 mg/kg/day IV once daily OR 2.5 mg/kg/dose q8h for conventional dosing. :contentReference[oaicite:1]{index=1}",
    "renal": "Adjust based on renal function and drug levels. :contentReference[oaicite:2]{index=2}",
    "hepatic": "No dosage adjustment required in hepatic impairment. :contentReference[oaicite:3]{index=3}",
    "duration": "Typically 5–7 days depending on clinical response.",
    "monitoring": "Serum drug levels, renal function, audiology.",
    "warnings": "Nephrotoxicity, ototoxicity, and rare neuromuscular blockade. :contentReference[oaicite:4]{index=4}",
    "ams": "Use for Pseudomonas or other high-risk Gram-negative infections; de-escalate when possible.",
    "weightBased": true,
    "mgPerKgDose": 7
  }



};
