
var nome = 'Rafael Guedes'

var alunos = ['Rafael','Camila','Pedro','Algusto' ];
console.log(alunos)

var alunoRafael = {

    nome: 'Rafael Guedes De Almeida',
    idade: 34,
    altura: 1.75,
    ativo: true,
    id: 01
};

if ('nome' in alunoRafael){
    console.log('Aluno cadastrado');
}else{
    console.log('Aluno não cadastrado');
}

let idade = 19;

if(idade >= 18){
    console.log('Maior de idade');
}else if(idade >+ 10 && idade <= 18){
    console.log('Menor de idade adolecente');
}else{
    console.log('Bebê ainda')
}






