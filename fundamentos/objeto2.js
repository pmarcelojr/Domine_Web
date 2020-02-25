console.log(typeof Object) // function
console.log(typeof new Object()) //objeto

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)


class Produto {} // ES 2015
console.log(typeof Produto)
console.log(typeof new Produto())