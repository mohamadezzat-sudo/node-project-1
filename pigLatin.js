const englishPhrase = process.argv[2] ? process.argv[2] : null;
if (!englishPhrase) {
    console.log("Error: Please add a phrase to translate.");
    console.log('Example usage: node pigLatin.js "Hi there"');
    process.exit(1);
}
function translateWord(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const isCapitalized = word[0] === word[0].toUpperCase() && word[0] !==word[0].toLowerCase();
    let lowcase = word.toLowerCase();
    let translated = "";
    if (vowels.includes(lowcase[0])){
        translated = lowcase + "way";
    }
    else if (!vowels.includes(lowcase[0]) && !vowels.includes(lowcase[1]) && lowcase[1] !== undefined) {
        translated = lowcase.slice(2) + lowcase.slice(0, 2) + "ay";
    }
    else {
        translated = lowcase.slice(1) + lowcase[0] + "ay";
    }
    if (isCapitalized && translated.length > 0) {
        translated = translated[0].toUpperCase() + translated.slice(1);
    }
    return translated;
}
const wordsArray = englishPhrase.split(" ");
const translatedWords = wordsArray.map(word => translateWord(word));
const finalResult = translatedWords.join(" ");
console.log(finalResult);
