const peso1 = 1.0
const peso2 = Number('2.0')

// imprime no console
console.log(peso1, peso2)

// metodos para saber se peso 1 é inteiro ou nao
console.log(Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// toFixed diz quantas casas decimais vc quer.
console.log(media.toFixed(2))

// converte numerico em string
console.log(media.toString())

// converte media em uma string de valor binario
console.log(media.toString(2))

// mostra tipo da constante media
console.log(typeof media)

// mostra tipo do Number
console.log(typeof Number)