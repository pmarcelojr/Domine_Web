// funcao sem retorno
function imprimitSoma(a, b) {
    console.log(a + b)
}

imprimitSoma(2 ,3)
imprimitSoma(2)
imprimitSoma(2, 3, 5, 6)
imprimitSoma()

// funcao com retorno
function soma(a, b = 1) {
    return a + b
}

soma(2, 3)
console.log(soma(2, 3)) // para imprimir no console precisa colocar a function dentro do console

console.log(soma(3))
console.log(soma())