const values = [7.7, 8.9, 6.3, 9.2]
console.log(values[0],values[3])
console.log(values[4]) // Não existe este indice. Nao dá erro. Horrível!!(perigoso demais)

values[10] = 10 //Adiciona 6 elementos vazioas e põe o 10 na 11ª posição do array.
console.log(values)

console.log(values.length) // Tamanho do array

values.push({id:3}, false, null, 'teste') // Pode adicionar tudo dentro do array, misturado!
console.log(values)

console.log(values.pop()) // remove o último elemento do array e retorna-o
delete values[0] // "Deleta" o valor do array na posição indicada (na verdade deixa o espaço vazio, a posição ainda existe)
console.log(values)