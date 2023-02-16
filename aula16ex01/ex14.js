  let num = document.getElementById("numb")
  let tab = document.getElementById("seltab")
  let res = document.getElementById("res")
  let valores = []

 function isnumber(n) {
  if (Number(n)>= 1 && Number(n) <= 100) {
    return true    
  } else {
    return false
  }
}
  function inlist(n,l) {
    if (l.indexOf(Number(n)) != -1) {
      return true
    } else
      return false
  }

function add() {
  if (isnumber(num.value) && !inlist(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    tab.appendChild(item)
    res.innerHTML = ""
  } else {
    alert("Digite um valor valido ou nao repetido")
  }
   num.value = "" // limpar o campo
   num.focus() // colocar o foco do teclado nessa condição
}

function somar() {
  let soma = 0
  for (let i in valores) {
    soma += valores[i]
    }
  return soma  
}

function calcular() {
  if (valores.length == "") {
    alert("Complete todos os campos acima")
  } else {

      let maior = valores[0]
      let menor = valores[0]

      for (let i = 0; i < valores.length; i++) {
        if (valores[i] > maior)
        maior = valores[i]
        if (valores[i] < menor)
        menor = valores[i]
      }
//       for (let pos in valores) {
//       if (valores[pos] > maior) 
//       maior = valores[pos]
//       if (valores[pos] < menor) 
//       menor = valores[pos]    
// }     
    res.innerHTML = ""
    res.innerHTML = `<p> O total de numeros cadastrados foi ${valores.length} </p>`
    res.innerHTML +=  `<p> A soma dos valores é ${somar()} </p>`
    res.innerHTML += `<p> A média dos valores é ${somar()/valores.length} </p>`
    res.innerHTML += `<p> O maior valor é ${maior} </p>`
    res.innerHTML += `<p> O menor valor é ${menor} </p>`
  } 
 
}