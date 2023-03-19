// intro às funções 

// em javascript as funções e como um coração da linguagem
//de forma geral uma função e gerada atravez de function
//pode ou nao ter parametro de entrada



function somar(num1 , num2){
    var res = num1 + num2;

    return res;
}

var resultado = somar(6, 4);

console.log(resultado);

// poderia ser assim também
function somar(num1 , num2){

    return num1 + num2
}

var resultado = somar(6, 4);

console.log(resultado);

// ou

function somar(num1 , num2){
    console.log(num1 + num2);
}
   
somar(6, 4);


function mensagem(){
    console.log('Está é uma menssagem');
}
mensagem();// reparei que para executar é igual ao python

function multiplicar(n1, n2){
    return n1 * n2;
}

var r = multiplicar(3, 9);
onabort
console.log(r);

console.log(multiplicar(321, 345)); // prestar atenção em funçoes que retorna valores e as que nao