function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com nota ' + nota)
    }
}

soBoaNoticia(7.4)
soBoaNoticia(3)
soBoaNoticia(8.1)

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('E verdade... ' + valor)
    }
}
// testes 
seForVerdadeEuFalo(1)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(false)
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})
