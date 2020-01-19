console.log(Math.ceil(6.1)) // objeto reservado da propria ling arredonda pra cima o ceil

const obj1 = {}
obj1.nome = 'Bola' // coloca um atributo usando a notação ponto
obj1['nome'] = 'Bola2' // as duas linhas sao equivalentes, essa sobrescreve a de cima

console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome
    this.exec = function() {
        console.log('exec...')
    }
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2)
console.log(obj3)

obj3.exec()