let num1 = 1
let num2 = 2

num1++
console.log(num1)
--num1 // pre fixado tem precedencia maior que o pos fixado
console.log(num1)

console.log(++num1 === num2--) // tente nao misturar varios operadores, fuja deste tipo de padrao
console.log(num1 === num2)
