function calcular() {
  let num = document.getElementById('numb');
  let res = document.getElementById('res');
  let tab = document.getElementById('seltab');
  if (num.value.length == "") {
    alert("digite um numero")
  } else {
    tab.innerHTML = ""
    let n = Number(num.value)
    for (let i = 1; i <= 10; i++) {
      let item = document.createElement('option')
      item.text = `${n}* ${i} = ${n*i}`
      tab.appendChild(item)
    }
  }  
}