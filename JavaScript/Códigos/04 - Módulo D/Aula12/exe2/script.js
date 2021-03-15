function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Calculada: ${idade}`
        var genero = ''
        if (fsex[0].checked) {

            if (idade >= 0 && idade < 11) {
                genero = 'um Criança (Menino)'
                img.setAttribute('src', 'img/menino.png')
            } else if (idade >= 11 && idade < 19) {
                genero = 'um Adolescente (Menino)'
                img.setAttribute('src', 'img/adolescente_homem.png')
            } else if (idade >= 19 && idade < 30) {
                genero = 'um Jovem (Rapaz)'
                img.setAttribute('src', 'img/jovem_homem.png')
            } else if (idade >= 30 && idade < 60) {
                genero = 'um Homem (Adulto)'
                img.setAttribute('src', 'img/homem.png')
            } else {
                genero = 'um Homem (Idoso)'
                img.setAttribute('src', 'img/idoso.png')
            }
        } else if (fsex[1].checked) {
            if (idade >= 0 && idade < 11) {
                genero = 'uma Criança (Menina)'
                img.setAttribute('src', 'img/menina.png')
            } else if (idade >= 11 && idade < 19) {
                genero = 'uma Adolescente (Menina)'
                img.setAttribute('src', 'img/adolecente_mulher.png')
            } else if (idade >= 19 && idade < 30) {
                genero = 'uma Jovem (Moça)'
                img.setAttribute('src', 'img/jovem_mulher.png')
            } else if (idade >= 30 && idade < 60) {
                genero = 'uma Mulher (Adulta)'
                img.setAttribute('src', 'img/mulher.png')
            } else {
                genero = 'uma Mulher (Idosa)'
                img.setAttribute('src', 'img/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 

}