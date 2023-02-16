function carregar() {
let msg = document.getElementById('msg');
let img = document.getElementById('img');
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora sao ${hora} horas`

   if (hora >= 6 && hora < 12) {
   msg.innerHTML = "Bom dia"
   img.innerHTML =  `<img src='imagens/fotomanha.png'>`
   document.body.style.background = "yellow"
 } else if (hora >= 12 && hora < 18){
   msg.innerHTML = "Bom tarde"
   img.innerHTML = `<img src='imagens/fototarde.png'>`
   document.body.style.background = "orange"
 } else if (hora >= 18 && hora <= 23) {
   msg.innerHTML = "Bom noite"
   img.innerHTML = `<img src='imagens/fotonoite.png'>`
   document.body.style.background = "blue"
} else {
   msg.innerHTML = "Boa madrugada"
   img.innerHTML = `<img src='imagens/fotonoite.png'>`
   document.body.style.background = "black"

}

}
