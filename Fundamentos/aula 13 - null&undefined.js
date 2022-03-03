const a = {name: 'Teste'}
console.log(a)

/* Atribuição por referência*/
const b = a
b.name = "Opa" // Mudei em b, mas a também recebe.
console.log(a)

a.name = 'Novo Teste' //Mudei em a, mas b também recebe.
console.log(b)

let c = 3  // Com tipos primitivos, faz-se uma cópia do valro e nao o elemento original.
let d = c

d++
console.log(c)
console.log(d)

let value
console.log(value) // Foi declarada, mas nao atribuida = da undefined
//console.log(value2) //Nunca foi declarada = da is not defined

value = null
console.log(value) // Atribui o valor null à uma variavel. Para zerar o valor de uma variavel.