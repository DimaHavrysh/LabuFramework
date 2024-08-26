function greet(name: string, age: number = 18): string {
    return `Привіт, ${name}! Тобі ${age} років.`;
}

console.log(greet("Ігор", 25));

console.log(greet("Ігор"));