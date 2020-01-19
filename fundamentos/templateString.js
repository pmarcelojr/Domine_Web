const nome = 'Rebeca'
const concatenacao = "Olá " + nome + "!"
// Template string aonde vc pode quebra linhas usando o `
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes..
console.log(`1 + 1 = ${1 + 1}`)

// Funçao que transforma em letra maiscula
const up = texto => texto.toUpperCase()
// Chama a funçao passando a string
console.log(`Ei.. ${up('Cuidado')}!`)