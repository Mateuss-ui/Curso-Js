function verificar() {
    let sexo = document.getElementsByName("sexo");
    let i = document.getElementById('idade');
    let res = document.getElementById('res1');
    let img = document.getElementById('img');
    let idade = Number(i.value)
    let genero = ''
    let calculate = 2022 - idade
    if (calculate >= 0 && calculate <= 12 && sexo[0].checked) {
        genero = "masculino"
        res.innerHTML = `voce é uma criança de ${calculate} anos, do sexo ${genero}`
        img.innerHTML = `<img src='idade/criançahomen.jpg'>`
    } else if (calculate >= 0 && calculate <= 12 && sexo[1].checked ) {
        genero = "feminino"
        res.innerHTML = `voce é uma criança de ${calculate} anos, do sexo ${genero}`
        img.innerHTML = `<img src='idade/criançamulher.jpg'>`
    } else if (calculate >= 13 && calculate <= 17 && sexo[0].checked ) {
        genero = "masculino"
        res.innerHTML = `voce é um adolescente de ${calculate} anos, do sexo ${genero}`
        img.innerHTML = `<img src='idade/xongzera.jpg'>`
    } else if (calculate >= 13 && calculate <= 17 && sexo[1].checked ) {
        genero = "feminino"
        res.innerHTML = `voce é um adolescente de ${calculate} anos, do sexo ${genero}`
        img.innerHTML = `<img src='idade/mina.jpg'>`
    } else if (calculate >= 18 && calculate <= 50 && sexo[0].checked ) {
        genero = "masculino"
        res.innerHTML = `voce é um adulto de ${calculate} anos, do sexo ${genero}`
        img.innerHTML = `<img src='idade/homem.jpg'>`
    } else if (calculate >= 18 && calculate <= 50 && sexo[1].checked ) {
        genero = "feminino"
        res.innerHTML = `voce é um adulto de ${calculate} anos, do sexo ${genero}`
        img.innerHTML = `<img src='idade/mulher.jpg'>`
    } else if (calculate >= 51 && calculate <= 100 && sexo[0].checked ) {
        genero = "masculino"
        res.innerHTML = `voce é um idoso de ${calculate} anos, do sexo ${genero}`
        img.innerHTML = `<img src='idade/velho.jpg'>`
    } else if (calculate >= 51 && calculate <= 100 && sexo[1].checked ) {
        genero = "feminino"
        res.innerHTML = `voce é uma idosa de ${calculate} anos, do sexo ${genero}`
        img.innerHTML = `<img src='idade/velha.jpg'>`
    } else {
        window.alert("Idade ou sexo invalidos")
    }
}  
