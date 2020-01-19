const notas = [5.6, 2.4, 5.7, 8.3, 7.7]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 30,
    peso: 64.3
}

for( atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}