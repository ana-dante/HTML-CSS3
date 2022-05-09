function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento === null) {
        //alert ('Elemento não encontrado');
        console.log('Elemento não encontrado');
    }

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}




const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;
//while=enquanto(estrutura de repetição)
//length=largura
//while true or false =repeticao
//for=para (estrutura de repeticao que ajuda o código ser mais limpo além da forma de incrementar com ++)
//lenght= para evitar o loop infinito
//==Somando um no valor que está na variável
//let -variaveis
//const -variaveis
//classlist=
//== confirma o tipo apenas
//=== confirmar o tipo e texto de dado
//else=se não
//!= =diferente
//&&= and
//||=ou (or)

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    //telmplate string
    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    //console.log (idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }

        tecla.onkeyup = function () {
            tecla.classList.remove('ativa');
        }
    }
}



// console.log (contador);

/* tocaSom('#som_tecla_tic') do Devtools (developemnt e tools ferramenta) para ouvir cada som no inspecionar - console */
