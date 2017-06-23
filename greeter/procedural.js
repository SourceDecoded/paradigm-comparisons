// Procedural
let languages = {
    "esp": "Olá",
    "eng": "Hi",
    "por": "Oi",
    "tag": "Kumusta"
};

function greet(langs, language, name) {
    return `${langs[language]}, ${name}`;
}

console.log(greet(languages, "tag", "Jared"));
console.log(greet(languages, "eng", "Blake"));
console.log(greet(languages, "por", "Benjamin"));
