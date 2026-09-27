// par nome/valor
const saudacao = 'Opaa' // contexto léxico 1

function exec() {
  const saudacao = 'Falaaaa' //contexto léxico 2
  return saudacao 
}

console.log(saudacao)
console.log(exec())

const cliente = {
  nome: 'Olavo',
  idade: 21,
  peso: 88,
  endereco: {
    logadouto: 'Rua dos Bobos',
    numero: 999
  }
}

console.log(cliente)