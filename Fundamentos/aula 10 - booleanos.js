let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

/*Usando com inteiros*/
isActive = 1
console.log(!isActive) // Se não true, é false;
console.log(!!isActive) // Negação da negação, é afirmação.

/* Vão dar Verdadeiro*/
console.log(!!3) 
console.log(!!-1) 
console.log(!!' ') 
console.log(!![]) 
console.log(!!{}) 
console.log(!!Infinity) 
console.log(!!(isActive = true)) 

/* Vão dar falso*/
console.log(!!0)
console.log(!!'') // String vazia
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

// Exemplos:clear
console.log(('' || null || 0 || 'epa'))

var name = ''
console.log(name || 'Desconhecido')  // Imprime desconhecido, pois o name está False.

var name = 'Lucas'
console.log(name || 'Desconhecido')

