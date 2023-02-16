function calcular() {
  let pes = document.getElementById("peso");
  let alt = document.getElementById("altu");
  let res = document.getElementById("res");
  if (pes.value.length == "" || alt.value.length == "") {
    alert("Complete os campos")
  } else {
    let peso = Number(pes.value);
    let altu = Number(alt.value);
    let conta = peso/altu*2
    res.innerHTML =  `Seu peso ideal é ${conta}`

  }
}