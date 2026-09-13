let valor //nao inicializa
console.log(valor)

valor = null //definido, porem vazio
console.log(valor)
// console.log(valor.toString()) //ERRO!!! neao tem como passa lago vazio, ou seja nada para string

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined ele far o mesmo que o delete porem é errado usar-lo 
console.log(!!produto.preco) 
console.log(produto)

produto.preco = null //SEM preco
console.log(!!produto.preco)
console.log(produto)
