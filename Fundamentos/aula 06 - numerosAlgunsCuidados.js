/*Caso divisão por zero*/
{
    console.log(7 / 0) // Dá infinito (Tipo Infinity). Não dá erro!!
}

/*Caso operação com String*/
{
    console.log("10" / 2) // Funciona!
    console.log("10" - 2) // Funciona!
    console.log("10" * 2) // Funciona!
    console.log("10" + 2) // Não funciona. Apenas concatenará duas Strings.
}
/*Caso operação ponto flutuante*/
{
    console.log(0.1 + 0.7) // Não dar o valor exato da soma. Padrão IEEE.
    console.log(0.1 + 0.2) // Não dar o valor exato da soma. Padrão IEEE Standard for Binary-Floating Arithmetic
}

/*Caso conversão para String direto*/
{
    //console.log(10.toString())       // Não funciona.
    console.log((10).toString())      // Funciona.
    console.log((10.345).toFixed(2)) // Funciona.
}  

