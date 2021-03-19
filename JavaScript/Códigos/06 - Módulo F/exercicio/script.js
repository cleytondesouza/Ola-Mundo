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
        window.alert('Tudo OK')
    } else {
        window.alert('Valor Inválido ou já encontrado na Lista')
    }

}