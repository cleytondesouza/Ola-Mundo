var dia = 'Quarta'

console.log(`Hoje é ${dia}.`)

switch (dia) {
    case 'Domingo':
        console.log(`${dia} é o PRIMEIRO dia da Semana`)
        break
    case 'Segunda':
        console.log(`${dia} é o SEGUNDO dia da Semana`)
        break
    case 'Terça':
        console.log(`${dia} é o TERCEIRO dia da Semana`)
        break
    case 'Quarta':
        console.log(`${dia} é o QUARTO dia da Semana`)
        break
    case 'Quinta':
        console.log(`${dia} é o QUITO dia da Semana`)
        break
    case 'Sexta':
        console.log(`${dia} é o SEXTO dia da Semana`)
        break
    default:
        console.log(`${dia} é o SÉTIMO dia da Semana`)
}