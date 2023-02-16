function verificar() {
  let ini = document.getElementById("ini");
  let fim = document.getElementById("fim");
  let pass = document.getElementById("pass");
  let res = document.getElementById("res");

  if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
    window.alert ("Erro faltam dados")
  } else {
    res.innerHTML = "Contando: "
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pass.value)
    if (p<=0){
      alert ("Passo invalido, considerando 1")
      p = 1
    }
    if ( i < f ) { // contagem crescente
      for (let c = i; c <= f; c += p) {
        if (c == 13) {
          res.innerHTML += `${c} \u{1F4A9}`
        } else if (c == 22) {
          res.innerHTML += `${c} \u{1F60E}`
        } else {
          res.innerHTML += `${c} \u{1F449}`
        } 
       }       
      } else { // contagem regressiva
        for (let c = i; c >= f; c -= p) {
          if (c == 13) {
            res.innerHTML += `${c} \u{1F4A9}`
          } else if (c == 22) {
            res.innerHTML += `${c} \u{1F60E}`
          } else  {
            res.innerHTML += `${c} \u{1F449}`
          }   
        }
      }
    }
  }
