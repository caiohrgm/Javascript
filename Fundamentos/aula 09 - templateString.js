const name = "Rebecca"
const concatenation = "Olá " + name

console.log(concatenation)

/*Usando o temple string*/
// Ele considera até as quebras de linha!
const template = ` 
    Olá
    ${name} 
    `
console.log(template)

console.log(`1 + 1 = ${1+1}`) // Forma de adicionar operações dentro da string.

const up = text => text.toUpperCase()
console.log(`Ei... ${up("cuidado")}`)  // Passando uma função dentro da expressão do template.