// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
let altura = prompt ("Digite a altura do retangulo")
let largura = prompt ("Digite a largura do retangulo")
function calculaAreaRetangulo(num1,num2) {
  // implemente sua lógica aqui
  return num1 * num2

}
console.log(calculaAreaRetangulo(altura,largura))



// EXERCÍCIO 02
let anoAtual = prompt("Digite o ano atual")
let anoNasci = prompt("Digite o seu ano de nascimneto")
function imprimeIdade(num1,num2) {
  // implemente sua lógica aqui
  return num1-num2

}
console.log(`O oque possui ${imprimeIdade(anoAtual,anoNasci)} de idade `)


// EXERCÍCIO 03
let = pesoAtual = +prompt("Digite o seu peso ")
let = alturaAtual = +prompt("Digite sua altura")

function calculaIMC(peso,altu1) {
  // implemente sua lógica aqui
  return peso / (altu1*altu1)

}
console.log(`seu IMC é ${calculaIMC(pesoAtual,alturaAtual)}`)




// EXERCÍCIO 04

let dados = prompt("Digite seu nome ")
let dados1 = prompt("Digite sua idade")
let dados2 = prompt("Digite seu e-mail")


function imprimeInformacoesUsuario(dados,dados1,dados2) {
  
  
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  return console.log(`Meu nome é ${dados}, tenho ${dados1} anos, e o meu email é ${dados2}`) 

}
imprimeInformacoesUsuario(dados,dados1,dados2)



// EXERCÍCIO 05
let arrayCor = []

let dadosUsuario = prompt("Digite suas 3 cores preferidas")
arrayCor = dadosUsuario.split(' ')

function imprimeTresCoresFavoritas(arry2) {

// implemente sua lógica aqui
  return console.log(`Sua primeira cor preferida é ${arry2[0]} sua segunda cor é ${arry2[1]} sua terceira cor é ${arry2[2]}`) 

}
console.log(arrayCor)

// EXERCÍCIO 06
let dadosUser = prompt("Digite um texo")

function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return console.log(string.toUpperCase())

}
retornaStringEmMaiuscula(dadosUser)

// EXERCÍCIO 07

let dadosUs = +prompt("Digite o custo do espetaculo")
let Ingresso = 25


function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}
console.log(`Precisa ser vendido ${calculaIngressosEspetaculo(dadosUs, Ingresso)}`)

// EXERCÍCIO 08

let primeiraString = prompt("Digite um texto")
let segundaString = prompt("Digite outro texo")


function checaStringsMesmoTamanho(string1, string2) {
  let strings1 = string1.length
  let strings2 =string2.length
  // implemente sua lógica aqui
  return strings1 == strings2

}
console.log(checaStringsMesmoTamanho(primeiraString,segundaString))

// EXERCÍCIO 09
let arrayT = ['oi','Tudo','Bem']

function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return console.log(array[0]) 

}
retornaPrimeiroElemento(arrayT)

// EXERCÍCIO 10
let arrayUltimo = [1,2,3,4,5,6,7,8]

function retornaUltimoElemento(array) {

  let ultimoElemento = array[array.length -1]
  // implemente sua lógica aqui

}
retornaPrimeiroElemento(arrayUltimo)

// EXERCÍCIO 11
let arrayRp = [1,2,3,4,5,6,7,8]

function trocaPrimeiroEUltimo(array) {
  return console.log(array.reverse())
  // implemente sua lógica aqui

}
trocaPrimeiroEUltimo(arrayRp)


// EXERCÍCIO 12
let strings1 = "Textando tudo"
let strings2 = "Tenxtando tudo"
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return console.log(string2.toLowerCase() == string2.toLowerCase())
  // implemente sua lógica aqui

}
checaIgualdadeDesconsiderandoCase(strings1, strings2)
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  anoAtual = +prompt("Qual o ano atual?")
  dataNasci = +prompt("Qual o seu ano de nascimento?")
  dataEmissão = +prompt("Em que ano sua carteira foi emitida?")
  if (anoAtual-dataNasci > 20 && anoAtual-dataNasci <=50){
    console.log(anoAtual-dataEmissão >=10)

  }else if (anoAtual-dataNasci<=20){
    console.log(anoAtual-dataEmissão >= 5)

  } else {console.log(anoAtual-dataEmissão >=15)}
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  if (ano%100 === 0){
    return ano%400 ===0
  }
  else if (ano%100 === 0 && ano%400 !== 0){
    return true
  }
  else {
    return false
  }

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
idade = prompt("Você tem mais de 18 anos? \n Responda com sim ou não.").trim().toUpperCase()
ensino = prompt("Você possui ensino médio completo?\n Responda com sim ou nao.").trim().toLocaleLowerCase()
disponi = prompt("Você possui disponibilidade exclusiva no horario do curso?\n Responda com sim ou não .").trim().toLocaleLowerCase()

if (idade == "SIM" && ensino === "SIM" && disponi === "SIM"){
  console.log (true)
}
else {console.log(false)}
}