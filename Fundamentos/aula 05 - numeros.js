const weight1 = 1.0
const weight2 = Number('2.0')
const weight3 = Number('2.1') // Ao adicionar uma casa decimal diferente de 0, ele deixa de ser inteiro.

console.log(weight1, weight2, weight3)
console.log(Number.isInteger(weight1))
console.log(Number.isInteger(weight2))
console.log(Number.isInteger(weight3))

const evaluation1 = 9.871
const evaluation2 = 6.871

const total = evaluation1 * weight1 + evaluation2 * weight2
const mean = total / (weight1 + weight2)

console.log(mean.toFixed(2)) // Define quantas casas decimais o resultado terá;
console.log(mean.toString(2)) // Converte em uma string; Se adicioanr o 2 como parâmetro, 
                              // transforma em numero binário
console.log(typeof mean) // Tipo Number