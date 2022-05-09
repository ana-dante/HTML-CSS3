const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo');
})

/*

function dizerParaAnaOQueEuSinto(frase) {
    let frases = [];
    let contador = 0;

    while (contador < 1000) {
        frases.push(frase);
        contador = contador + 1;
    }

    return frases;
}


function soma(x, y) {
    return x + y;
}

console.log('Oi Ana vamos somar');
const resultado = soma(30, 1);

console.log(resultado);



const resposta = dizerParaAnaOQueEuSinto('Te amo!');

document.body.innerHTML = resposta;

*/
