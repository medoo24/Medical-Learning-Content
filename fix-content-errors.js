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

const FIXES = [
  [/\\rightarrow/g,        '→'],
  [/\\Rightarrow/g,        '⇒'],
  [/\\leftarrow/g,         '←'],
  [/\\Leftarrow/g,         '⇐'],
  [/\\leftrightarrow/g,    '↔'],
  [/\\uparrow/g,           '↑'],
  [/\\downarrow/g,         '↓'],
  [/\\nearrow/g,           '↗'],
  [/\\searrow/g,           '↘'],
  [/\\alpha/g,             'α'],
  [/\\beta/g,              'β'],
  [/\\gamma/g,             'γ'],
  [/\\delta/g,             'δ'],
  [/\\epsilon/g,           'ε'],
  [/\\eta/g,               'η'],
  [/\\theta/g,             'θ'],
  [/\\kappa/g,             'κ'],
  [/\\lambda/g,            'λ'],
  [/\\mu/g,                'μ'],
  [/\\nu/g,                'ν'],
  [/\\pi/g,                'π'],
  [/\\rho/g,               'ρ'],
  [/\\sigma/g,             'σ'],
  [/\\tau/g,               'τ'],
  [/\\phi/g,               'φ'],
  [/\\psi/g,               'ψ'],
  [/\\omega/g,             'ω'],
  [/\\Gamma/g,             'Γ'],
  [/\\Delta/g,             'Δ'],
  [/\\Theta/g,             'Θ'],
  [/\\Sigma/g,             'Σ'],
  [/\\Omega/g,             'Ω'],
  [/\\leq/g,               '≤'],
  [/\\geq/g,               '≥'],
  [/\\neq/g,               '≠'],
  [/\\approx/g,            '≈'],
  [/\\times/g,             '×'],
  [/\\pm/g,                '±'],
  [/\\degree/g,            '°'],
  [/\\circ/g,              '°'],
  [/\\cdot/g,              '·'],
  // Parenthesised Greek — e.g. ((beta))-lactoglobulin
  [/\(\(alpha\)\)/g,       'α'],
  [/\(\(beta\)\)/g,        'β'],
  [/\(\(gamma\)\)/g,       'γ'],
  [/\(\(delta\)\)/g,       'δ'],
  [/\(\(eta\)\)/g,         'η'],
  [/\(\(mu\)\)/g,          'μ'],
  [/\(\(sigma\)\)/g,       'σ'],
  [/\(\(pi\)\)/g,          'π'],
  [/\(\(omega\)\)/g,       'ω'],
  // ight/ightarrow (the exact broken form the user saw: "ightarrow" missing the R)
  [/\brightarrow\b/g,      '→'],
  [/\bightarrow\b/g,       '→'],
  // URI-encoded arrows
  [/%E2%86%92/g,           '→'],
  [/%E2%86%90/g,           '←'],
  [/%E2%86%91/g,           '↑'],
  [/%E2%86%93/g,           '↓'],
  [/%E2%87%92/g,           '⇒'],
];

const files = [
  { path: 'js/lessons-data.js',            varName: 'lessonsData' },
  { path: 'js/intestinal-lessons-data.js', varName: 'intestinalLessonsData' },
  { path: 'js/collections-data.js',        varName: 'collectionsData' },
];

let grandTotal = 0;

for (const { path, varName } of files) {
  // Work on raw JSON string BEFORE parsing — catches everything
  const raw = fs.readFileSync(path, 'utf8');
  const m = raw.match(/atob\("([^"]+)"\)/);
  if (!m) { console.log('Skip (no payload):', path); continue; }

  // Decode to plain JSON string
  let jsonStr = decodeURIComponent(Buffer.from(m[1], 'base64').toString('utf8'));

  let fixCount = 0;
  for (const [pattern, replacement] of FIXES) {
    const before = jsonStr;
    jsonStr = jsonStr.replace(pattern, replacement);
    if (jsonStr !== before) {
      const count = (before.match(pattern) || []).length;
      console.log(`  [${path}] fixed "${pattern.source}" × ${count} → "${replacement}"`);
      fixCount += count;
    }
    pattern.lastIndex = 0;
  }

  // Re-encode and write
  const fixed = JSON.parse(jsonStr); // validate it's still valid JSON
  fs.writeFileSync(path, encode(varName, fixed), 'utf8');
  grandTotal += fixCount;
  console.log(`✅ ${path} — ${fixCount} replacements made\n`);
}

console.log(`\n✅ All done. Total replacements across all files: ${grandTotal}`);
