let num = document.querySelector('input#fnum') //Pega o número digitado
let lista = document.querySelector('select#flista') //pega a seleção
let res = document.querySelector('div#res') //variável para resultado
let valores = [] //vetor para análise de dados

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor Inválido ou já encontrado na Lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Não existem valore!')
    } else {
        let tot = valores.length
        let menor = valores[0]
        let maior = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${tot} números cadastrados</P>`
        res.innerHTML += `<p>O MENOR valor informado foi ${menor}</p>`
        res.innerHTML += `<p>O MAIOR valor informado foim ${maior}</p>`
        res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
        res.innerHTML += `<p>A média entre os valores é ${media}</p>`
    }
}