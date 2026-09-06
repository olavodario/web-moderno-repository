let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!isActive)
console.log(!!isActive)
console.log(!!!isActive)

console.log('os verdadeiros eu sei quem são....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!![]) //arrays
console.log(!!{}) //objetos
console.log(!!Infinity)//literalmente infinito -> lembrando todo numero dividido por zero (em javascript) representa infinito -> o zero em sua mão seginifica nada ele representa o nada,  limite do vazio.

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false));

console.log('e para finalizar...')
console.log(!!('' || null || 0 || ' '))

let nome = ''
console.log(nome || 'Desconhecido')