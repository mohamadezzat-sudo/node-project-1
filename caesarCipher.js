const phrase = process.argv[2] ? process.argv[2] : null;
const shiftInput = process.argv[3] ? process.argv[3] : null;
if (!phrase || shiftInput === null) {
    console.log("Error: You need to enter both a phrase and a shift number.");
    console.log('Example usage: node caesarCipher.js "Hi there" 3');
    console.log('Example usage: node caesarCipher.js "Hi there" -3');
    process.exit(1);
}
const shift = parseInt(shiftInput, 10);
if (isNaN(shift)) {
    console.log("Errer: The shift amount must be a valid integer number.");
    process, exit(1);
}
function shiftChar(char, shiftAmount) {
    if (char >= 'a' && char <= 'z') {
        const code = char.charCodeAt(0);
        let shiftedCode = ((code - 97 + shiftAmount) % 26);
        if (shiftedCode < 0) shiftedCode += 26;
        return String.fromCharCode(shiftedCode + 97);
    }
    if (char >= 'A' && char <= 'Z') {
        const code = char.charCodeAt(0);
        let shiftedCode = ((code - 65 + shiftAmount) % 26);
        if (shiftedCode < 0) shiftedCode += 26;
        return String.fromCharCode(shiftedCode + 65);
    }
    return char;
}
let encryptedText = "";
for (let i = 0; i < phrase.length; i++) {
    encryptedText += shiftChar(phrase[i], shift);
}
console.log(encryptedText);