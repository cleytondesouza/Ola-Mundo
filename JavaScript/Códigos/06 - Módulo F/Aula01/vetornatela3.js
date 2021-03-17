
let num = [5, 8, 4, 5, 6, 7, 'Cleyton'] //Declara uma variável e com o colchetes diz que ela é um vetor, e atribui valores a ela
num.sort() //Ordena os valores do vetor
num.push(1) //Adiciona um valor no final do vetor
console.log(num) //exibe os números do vetor antes ordenados
console.log(`Nosso vetor tem ${num.length} posições`) //Mostra quantas posições tem nosso vetor
console.log(`O primeiro número do velor é ${num[0]}`) //Mostra o valor que está na posição determinada

let pos = num.indexOf(6) //busca o indice de um valor se ele existir

if (pos == -1) {
    console.log('O valor não existe')
} else {
    console.log(`O valor está na posição ${pos}`)
}