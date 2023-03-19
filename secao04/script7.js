

console.log(7 / 0); // Infinity

console.log('42' / 2); // pego a string convertel para inteiro e fez a divisão
// em python isso não acontece pq ele nao faz soma entre string e inteiro

console.log('Geek' * 3); // NaN  (not a number) o resultado disso não é um número
// ja em python ele repetira 3 x a string são diferenças entre linguagem que devemos prestar atenção


console.log(0.1 + 0.7); // 0.799999999999999999


var num =42;

console.log(num.toString()); // convertendo o valor para string

console.log(13.34343434.toFixed(2)); // pega as duas casas decimais
//ja em pytnon o mesmo seria algo como .2f

console.log(Math.PI); // constante em matematica

console.log(Math.pow(3,2)); // 3 elevado ao quadrado

console.log(Math.sqrt(81)); // raiz quadrada de 81

console.log(typeof(42)); // qual o tipo de dado // number

console.log(typeof('rafael guedes')); // string

console.log(Number.isInteger(45)); // true é interio o valor 45

console.log(Number.isInteger('Rafael')); // false

// conversão binária

var valor = 10;

console.log(valor.toString(2))