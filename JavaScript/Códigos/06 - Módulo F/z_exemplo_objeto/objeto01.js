let amigo = {nome: 'Cleyton', 
sexo: 'M', 
peso: 90.5 ,
engordar(p=0){
    console.log('Engordei 300 kilos')
    this.peso += p

}}

amigo.engordar(2)
console.log(amigo.peso)