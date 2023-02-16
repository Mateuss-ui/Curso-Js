let agora = new Date()
let diasem = agora.getDay()

// Get day pega nessa ordem:
// 0 = Domingo
// 1 = Segunda
// 2 = Terça
// 3 = Quarta
// 4 = Quinta
// 5 = Sexta
// 6 = Sabado
console.log(diasem);

switch(diasem) {
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Segunda');
        break;
    case 2:
        console.log('Terça');
        break;
    case 3:
        console.log('QUARTA');
        break;
    case 4:
        console.log('quinta');
        break;
    case 5:
        console.log('SEXTA!!');
        break;
    case 6:
        console.log('sabado');
        break;

    default:
        console.log('dia invalido');
        break;
}