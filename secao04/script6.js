// and or not && || !=

var curso = 'JavaScript';
var legal = true;

//AND (e = ambas expressões devem ser verdadeiras) &&

if(curso === 'JavaScript' && legal === true){
    console.log('O curso de javascript é legal');
}else{
    console.log('O curso não é legal')
} 

//or (ou = pelo menos uma expressão deve ser verdadeira) é representado cm pipe ||

if(curso === 'JavaScript' || legal === true){
    console.log('legal');
}else{
    console.logo('não é legal');
}

// not (quando queremos fazer uma negação ou verificar se algo não é como esperado)

if(curso != 'JavaScript'){
    console.log('è curso não é de javascript');
}else{
    console.log('curso de java script')
}