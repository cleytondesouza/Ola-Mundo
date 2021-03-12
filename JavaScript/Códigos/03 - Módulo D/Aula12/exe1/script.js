function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora  = 10
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        img.src = 'img/manha.png'
        msg2.innerHTML = 'Bom dia' 
        document.body.style.background = '#4682B4'  
    }else if(hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        msg2.innerHTML = 'Boa tarde'
        document.body.style.background = '#CD853F'  
    }else{ 
        img.src = 'img/noite.png'
        msg2.innerHTML = 'Boa Noite'
        document.body.style.background = 'black'  
    }
}