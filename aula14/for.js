for (let c = 1; c <= 10; c++) {
    console.log(`seu contador está em ${c}`);
    
}

for (let inicio = 1; inicio <= 10; inicio + 2) {
    console.log(`Voce esta andando ${inicio}`);
}

let teste = [5,10,15,38,22]
maior = teste[0]
menor = teste[0]

for (let i = 0; i < teste.length; i++) {
    if (teste[i] > maior) {
        maior = teste[i]
    }
    if (teste[i] < menor) {
        menor = teste[i]   
    }
}

console.log(maior);
console.log(menor);
console.log(teste[0]);
