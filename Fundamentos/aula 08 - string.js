const school = 'Cod3r'

console.log(school.charAt(4))
console.log(school.charAt(5))      // Testando um index fora da string. Não da erro: retorna um valro vazio.
console.log(school.charCodeAt(4))  // Retorna o valor da tabela ASCII. (114, da letra r)
console.log(school.indexOf('d'))   // Acha a posição do caractere d dentro da palavra.
console.log(school.substring(1))   // Pega do índice 1 até o restante da string.
console.log(school.substring(0,3)) // Vai do índice 0 até o 3, sem incluir o índice 3.

/*Concatenando Strings*/
console.log("Escola ".concat(school).concat("!"))
// ou 
console.log("Escola "+ school + "!")

/*Substituindo elementos na String*/
console.log(school.replace(3, "e")) // Substitui o elemento da posição pelo novo elemento.

/*Separando elementos da String*/
console.log("Ana,Maria,Pedro".split(',')) // Separando o array String, pela vírgula.