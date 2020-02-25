const pessoa = {
  saudacao: 'Bom dia',
  falar(){
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre os paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // metodo responsavel por amarrar determinado objeto
falarDePessoa()

const falar2 = pessoa.falar
falar2()