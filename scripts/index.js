const fs = require('fs');

fs.readFile('../styles/css/style.css', { encoding: 'utf-8', flag: 'r' }, (error, filecontent) => {
    if (error) throw error;
    const cleanedCode = cleanCss(filecontent);
    fs.writeFile('../styles/css/concatened.css', cleanedCode, error => {
        if (error) throw error;
    });
})



function cleanCss(code, i = 0) {
    if (i === code.length) return '';
    // css tokens
    const tokens = {
        '{': 'lb',
        '}': 'rb',
        '(': 'lp',
        ')': 'rp',
        '[': 'lab',
        ']': 'rab',
        '*': 'mul',
        '/': 'div',
        '+': 'add',
        '-': 'sub',
        ':': 'colon',
        ',': 'coma',
        ';': 'semi-colon',
        '!': 'exclam'
    };
    const char = code[i];
    const prevChar = code[i - 1];
    const nextChar = code[i + 1];
    const newlineChar = '\n';
    const spaceChar = ' ';
    if (
        (char === newlineChar) ||
        (char === spaceChar) && (prevChar === char || nextChar === char) ||
        (char === spaceChar) && (tokens[prevChar] || tokens[nextChar]) ||
        (char === ';') && nextChar === '}'
    ) return '' + cleanCss(code, i + 1);
    return char + cleanCss(code, i + 1);
}
