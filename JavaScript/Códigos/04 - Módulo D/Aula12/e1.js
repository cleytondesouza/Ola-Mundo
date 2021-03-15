var nome = 'Cleyton Pereira de Souza'
var idade = 13

console.log(`Meu nome completo é ${nome} e minha idade é ${idade} anos`)

if (idade < 16){
    console.log(`Eu ainda não posso votar`)
}else if (idade < 18 || idade > 65) {
    console.log(`Eu não preciso votar se não quiser`)
}else{
    console.log(`Pela Lei, eu tenho obrigação de votar`)
}