function transliterate() {
    const transliterationMap = {
        'a': 'a',
        'b': 'b',
        'j': 'c',
        'ch': 'ç',
        'd': 'd',
        'e': 'e',
        'ä': 'ə',
        'f': 'f',
        'ġ': 'g',
        'gh': 'ğ',
        'h': 'h',
        'kh': 'x',
        'ı': 'ı',
        'i': 'i',
        'zh': 'j',
        'k': 'k',
        'g': 'q',
        'l': 'l',
        'm': 'm',
        'n': 'n',
        'o': 'o',
        'ö': 'ö',
        'p': 'p', 
        'r': 'r',
        's': 's',
        'sh': 'ş',
        't': 't', 
        'u': 'u',
        'ü': 'ü',
        'v': 'v',
        'y': 'y',
        'z': 'z',
    };

    const inputText = document.getElementById('input-text').value.toLowerCase();
    let outputText = '';

    for (let i = 0; i < inputText.length; i++) {
        let char = inputText[i];
        let nextChar = inputText[i + 1];

        if (nextChar && transliterationMap[char + nextChar]) {
            outputText += transliterationMap[char + nextChar];
            i++; // skip the next character since it's part of a two-character combination
        } else {
            outputText += transliterationMap[char] || char;
        }
    }

    document.getElementById('output-div').innerText = outputText;
}