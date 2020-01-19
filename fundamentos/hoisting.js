console.log('a = ', a)
var a = 2
console.log('a = ', a)

/*
hoisting joga pra cima a variavel
a situação acima fica assim:
var a
console.log('var = ', a)
a = 2
console.log('var = ', a)
*/

// em uma funcao e a mesma coisa
function teste() {
    console.log('a = ', a)
    var a = 2
    console.log('a = ', a)
}
teste()

// COM O LET, isso nao ocorre

console.log('b = ', b)
let b = 2
console.log('b = ', b)