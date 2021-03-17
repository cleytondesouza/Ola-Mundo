let valores = [2,5,3,8,4,9] //Cria o vetor
valores.sort() //coloca os valores em ordem

for(var pos in valores){ //Cria uma variável pos para cada espaço do vetor valores
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`) //exibe o resultado
}