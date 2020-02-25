const valores = [7.7 , 1.1, 3.2, 1.2]

console.log(valores[2])
console.log(valores[5])

valores[4] = 10
valores[10] = 3

console.log(valores)
// mostra o total de arrays
console.log(valores.length)

// funcao que adiciona mais elementos
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

// funcao que retira valor e retorna o valor
console.log(valores.pop())

// remove do array
delete valores[0]

// tipo do array
console.log(typeof valores)