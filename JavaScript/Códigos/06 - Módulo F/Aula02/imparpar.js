function parimpar(n){
    if(n%2 == 0){
        return 'Par!'
    }else{
        return 'Impar!'
    }
}

console.log(parimpar(2)) //Metodo 1

var res = parimpar(11) //Metodo 2
console.log(res)