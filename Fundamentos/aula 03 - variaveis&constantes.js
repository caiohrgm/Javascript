var a = 3 // Ao criar usando var, você criar novamente a mesma variável.
let b = 4 // Parece com 'var', mas tem uma diferneça: não pode criar a mesma varia´vel novamente.

var a = 30
//let b = 40 da erro
b = 40 //Isso funciona!

console.log(a)
console.log(b)

const c = 5 // Cria uma constante!

// c = 30 -> Irá dar um erro, pois está tentando alterar o valor de uma constante;
console.log(c)
