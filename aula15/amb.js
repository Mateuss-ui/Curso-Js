let num = [55,58,59,60,55]
// num[5] = 6 adiciona no espaço 5 o numero determinado
// num.push(7) adiciona um numero no ultimo lugar do array
// num.sort() coloca em ordem crescente o array
// num.indexOf(8) vai buscar a posição do valor 8 no array

num.push(1)
num.sort()
console.log(num.indexOf(0));
// console.log(num);
// console.log(num.length)
// console.log(num[1]);

// for (let i = 0; i < num.length; i++) {
//     console.log(`A posição ${i} tem o valor ${num[i]}`)
// }

for (const pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let pos = num.indexOf(5)

if (pos == -1) {
    console.log("O valor nao foi encontrado");
} else {
    console.log(`O valor esta na posição ${pos}`)
}
