function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora  = 19
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'img/manha.png'
        msg2.innerHTML = 'Bom dia'   
    }else if(hora >= 12 && hora < 18){
        img.src = 'img/tarde.png'
        msg2.innerHTML = 'Boa tarde'
    }else{
        
        img.src = 'img/noite.png'
        msg2.innerHTML = 'Boa Noite'
    }
}