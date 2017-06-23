// OOP
class Greeter{
    constructor() {
        this.greetings = {};
    }

    registerLanguage(lang, greeting) {
        this.greetings[lang] = greeting;
    }

    greet(lang, name) {
        if(!this.greetings[lang]) {
            throw new Error("unknown language");
        }
        return `${this.greetings[lang]}, ${name}`;
    }
}

var greeter = new Greeter();
greeter.registerLanguage("esp", "Olá");
greeter.registerLanguage("eng", "Hi");
greeter.registerLanguage("por", "Oi");
greeter.registerLanguage("tag", "Kumusta");

console.log(greeter.greet("tag", "Jared"));
console.log(greeter.greet("eng", "Blake"));
console.log(greeter.greet("por", "Benjamin"));

