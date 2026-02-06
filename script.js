function carregar(){
    const msg = document.getElementById('msg')
    const img = document.getElementById('imagem')
    const saud = document.getElementById('saudacao')


    const data = new Date()
    const hora = data.getHours()
    const minuto = String(data.getMinutes()).padStart(2, '0')

    msg.innerHTML = (`${hora}:${minuto}`)
    if(hora < 12){
        img.src = 'imagens/manha.png'
        document.body.style.background = '#FFE694'
        saud.innerHTML = 'BOM DIA'
        saud.style.color = '#A67244'         

    }else if(hora < 18){
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#B4C8D3'
        saud.innerHTML = 'BOA TARDE'
         saud.style.color = '#0C0D0A'  

    }else{
        img.src = 'imagens/noite.png'
        document.body.style.background = '#014052'
        saud.innerHTML = 'BOA NOITE'
        saud.style.color = '#00637A' 
    }
}
    
