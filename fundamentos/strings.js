const escola = "Cod3r"

// Encontra a  String do array 
console.log(escola.charAt(2))
// Codigo relacionado a tabela unicode
console.log(escola.charCodeAt(3))
// Tenho o digito e quero saber em que indice ele esta
console.log(escola.indexOf('3'))
// vai do 2 em diante
console.log(escola.substring(1))
// vai do 0 ate o 2
console.log(escola.substring(0, 3))
// Concatenar String
console.log('Escola '.concat(escola).concat("!"))
console.log("Escola " + escola + "!")
// trocar o numero 3 pela letra e
console.log(escola.replace(3 ,'e'))
//Converter String em Array
console.log('Ana,Maria,Pedro'.split(','))