"use strict";
function greet(name, age = 18) {
    return `Привіт, ${name}! Тобі ${age} років.`;
}
console.log(greet("Ігор", 25));
console.log(greet("Ігор"));
