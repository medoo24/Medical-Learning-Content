const fs = require('fs');

function decode(path) {
  const raw = fs.readFileSync(path, 'utf8');
  const m = raw.match(/atob\("([^"]+)"\)/);
  return JSON.parse(decodeURIComponent(Buffer.from(m[1], 'base64').toString('utf8')));
}

const git = decode('js/lessons-data.js');
const int = decode('js/intestinal-lessons-data.js');

console.log('=== Upper GIT ===');
git.forEach(l => console.log(l.id, '|', l.quizQuestions ? l.quizQuestions.length + ' Qs' : 'MISSING'));
console.log('=== Intestinal ===');
int.forEach(l => console.log(l.id, '|', l.quizQuestions ? l.quizQuestions.length + ' Qs' : 'MISSING'));
