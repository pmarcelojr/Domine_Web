function rand([ min= 0, max = 1000 ]) {
    if (min > max) 
        [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50 , 40]))
console.log(rand([994]))
console.log(rand([, 100]))
console.log(rand([]))
console.log(rand())