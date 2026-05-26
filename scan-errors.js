const fs = require('fs');

function decode(path) {
  const raw = fs.readFileSync(path, 'utf8');
  const m = raw.match(/atob\("([^"]+)"\)/);
  return JSON.parse(decodeURIComponent(Buffer.from(m[1], 'base64').toString('utf8')));
}

// Regex patterns to find broken escapes
const patterns = [
  /\\rightarrow/g,
  /\\leftarrow/g,
  /\\uparrow/g,
  /\\downarrow/g,
  /\\Rightarrow/g,
  /\\Leftarrow/g,
  /\\alpha/g,
  /\\beta/g,
  /\\gamma/g,
  /\\delta/g,
  /\\Delta/g,
  /\\mu/g,
  /\\sigma/g,
  /\\pi/g,
  /\\leq/g,
  /\\geq/g,
  /\\neq/g,
  /\\times/g,
  /\\pm/g,
  /\\degree/g,
  /\bE2%86%92\b/g,  // URI-encoded →
  /\(\(eta\)\)/g,   // ((eta))
  /\(\(beta\)\)/g,  // ((beta))
  /\(\(alpha\)\)/g, // ((alpha))
];

function scanText(text, lessonId, field) {
  patterns.forEach(p => {
    if (p.test(text)) {
      console.log(`  [${lessonId}] [${field}] matches: ${p.source}`);
    }
    p.lastIndex = 0;
  });
  // Also show any backslash sequences we might have missed
  const any = text.match(/\\[a-zA-Z]+/g);
  if (any) {
    const unique = [...new Set(any)];
    console.log(`  [${lessonId}] [${field}] raw backslash tokens: ${unique.join(', ')}`);
  }
  // Show parenthesised Greek
  const greek = text.match(/\(\([a-zA-Z]+\)\)/g);
  if (greek) {
    const unique = [...new Set(greek)];
    console.log(`  [${lessonId}] [${field}] ((greek)) tokens: ${unique.join(', ')}`);
  }
}

function scanLesson(lesson) {
  const fields = ['definition','epidemiology','pathophysiology','presentation','diagnostics','management','riskFactors',
    'keyPoints','caseStudy','quizQuestions'];
  fields.forEach(f => {
    const val = lesson[f];
    if (!val) return;
    const str = JSON.stringify(val);
    scanText(str, lesson.id, f);
  });
}

['js/lessons-data.js','js/intestinal-lessons-data.js'].forEach(path => {
  console.log('\n=== ' + path + ' ===');
  const data = decode(path);
  data.forEach(scanLesson);
});
