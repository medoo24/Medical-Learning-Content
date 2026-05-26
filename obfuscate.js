const fs = require('fs');

const files = [
    { path: 'js/lessons-data.js', varName: 'lessonsData' },
    { path: 'js/intestinal-lessons-data.js', varName: 'intestinalLessonsData' },
    { path: 'js/collections-data.js', varName: 'collectionsData' }
];

files.forEach(file => {
    console.log('Processing ' + file.path + '...');
    const code = fs.readFileSync(file.path, 'utf8');
    
    // Evaluate the code to get the array
    let data;
    eval(code + '; data = ' + file.varName + ';');
    
    if (!Array.isArray(data)) {
        console.error('Failed to extract array from ' + file.path);
        return;
    }
    
    const jsonStr = JSON.stringify(data);
    
    // Safe Base64 encode for UTF-8 (emojis etc)
    const encoded = Buffer.from(encodeURIComponent(jsonStr)).toString('base64');
    
    const obfuscatedCode = `// Clinical Data - Encrypted Payload
const ${file.varName} = JSON.parse(decodeURIComponent(atob("${encoded}")));
`;

    fs.writeFileSync(file.path, obfuscatedCode, 'utf8');
    console.log('Successfully obfuscated ' + file.path);
});
