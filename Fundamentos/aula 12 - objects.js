//Object é parecido ao Dicionario de Python!

const prod1 = { } //Cria um objeto vazio!

prod1.name = "celular Ultra mega" // Cria um nome dinamicamente dentro do objeto.
prod1.price = 49.90
prod1['Discount'] = 0.40

console.log(prod1)

const prod2 = {
    name: "Camisa Polo",
    price: 79.90,
    id: {
        id_prod: 001,
        id_price: 001
    }
}

console.log(prod2)

//É diferente do JSON, que é um formato textual):
'{"nome": "Camisa Polo", "Preco":79.90}'


