let valor // nao inicializado
console.log(valor)

valor = null // ausencia de valor
console.log(valor)

//console.log(valor.toString()) // erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.10
console.log(produto)

produto.nome = undefined // evite atribuir undefined
console.log(produto)

produto.preco = null // sem preco
console.log(produto.nome)