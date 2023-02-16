let idade = 16
console.log(`Voce tem ${idade} anos.`);

if (idade < 16) {
   console.log("Nao pode votar"); 
} else if (idade >= 16 && idade < 18 || idade >= 68){
    console.log("Voto opcional");
} else if (idade >= 18){
    console.log("voto obrigatório");
}


let agora = new Date()
let hora = agora.getHours()
