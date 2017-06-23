// Functional
var greeter = (greeting) => {
    return (name) => {
        return `${greeting}, ${name}`;
    }
}

var esp = greeter("Olá");
var eng = greeter("Hi");
var por = greeter("Oi");
var tag = greeter("Kumusta");

console.log(tag("Jared"));
console.log(eng("Blake"));
console.log(por("Benjamin"));
