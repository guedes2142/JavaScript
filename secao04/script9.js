//operador unaŕio e operação ternaría

var idade = 25;

idade ++; // operação unária

console.log(idade)

//operador ternário

var sexo = 'm';

if(sexo ==='m'){
    console.log('masculino');
}else{
    console.log('feminino');
}
// usamos 5 linhas para verificar isso
//agora um operador ternário

console.log(sexo === 'm' ? 'Masculino' : 'Feminino')
// só conseguimos fazer a operação ternaria se tivemos apenas um if e else simple já se tivemos 
// um else if não funciona