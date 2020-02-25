function teste1(num) {
    if (num > 7) {
        console.log('Apovado em ' + num)
    } else; { // nunca colocar o ;
        console.log('Reprovado em ' + num)
    }
}

teste1(6)
teste1(9)

function teste2(num) {
    if(num > 7); { // cuidado com o ; não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(6)
teste2(8)