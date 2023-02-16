let agora = new Date()
let hora = agora.getHours()
let minutos = agora.getMinutes()
let relogio = document.getElementById("horas")


relogio.innerHTML = `${hora}:${minutos}`

function verificar() {
    let horario = document.getElementById("rel")
    let res = document.getElementById("res")
    let horario2 = parseInt(horario.value)
    
    if (horario2 >= 6 && horario2 < 12) {
       res.innerHTML = "Bom dia"
    } else if (horario2 >= 12 && horario2 < 17){
       res.innerHTML = "Bom tarde"
    } else if (horario2 >= 18 && horario2 < 23) {
       res.innerHTML = "Bom noite"
    } else {
       res.innerHTML = "Bom Madrugada"
    }
    console.log(horario2);
}
