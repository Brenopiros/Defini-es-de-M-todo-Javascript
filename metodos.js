//Exercício 1: toUpperCase, toLowerCase


//Exercício 2: includes, indexOf

function letraA(inclui){
  if (inclui.includes('a')) {
    const posição = inclui.indexof('a');
    console.log(`your text contens a letter A in posicion ${posição}`);

  } else {
    console.log('your text dont have any letter A');
    
  }
}
let inclui ='meu texto é sobre ';
letraA(inclui);


//Exercício 3: slice
function cuttext(text,inicio,fim) {
  const cut = text.slice(inicio,fim)
  console.log(`resumo é: ${cut}`);
  
  
}
let text ='meu texto de teste é um lixo';
let inicio = 0;
let fim = 18;
cuttext(text,inicio,fim)

//Exercício 4: concat

let fraseA ='minecraft é muito bom';
let fraseB =', melhor que fallguys';
console.log(fraseA.concat(fraseB));

//Exercício 5: replace

const paragrafo = 'um site é uma sequencia simples de 3 passos';
console.log(paragrafo.replace('simples', 'complexa'));

//Exercício 6: split, join

function ecomercio(frasen){
  return frasen.split(' ').join('-')
}
let frasen = 'uma nova zona de frases'
console.log(ecomercio(frasen));

//Exercício 7: push, pop

let atendimento = [];
atendimento.push(1,2,3,4,5);
atendimento.pop();
console.log(atendimento);

//Exercício 8: shift, unshift
let gerenciamente = ['lima','samuel','andrey','breno'];
gerenciamente.shift('');
gerenciamente.unshift('mike')
console.log(gerenciamente);

//Exercício 9: reverse

let ordem = ['nave', 'carro', 'jato', 'moto']
console.log(ordem);
ordem.reverse();
console.log(ordem);

//Exercício 10: map

let preços = [12, 22, 17, 40];
console.log(preços.map((x)=> x * 0.9));

//Exercício 11: filter

let lista = [
{Ana - 8.5};
{Bruno - 7.0};
{Clara - 9.2};
{Daniel - 6.8};
{Fernanda - 9.5};
{Gustavo - 7.5};
{Helena - 8.0};
{Igor - 6.0};
{Juliana - 9.0};
{Lucas - 7.8}
]
