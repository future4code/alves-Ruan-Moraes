/*
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

Primeiro false
Segundo false
Terceiro false
Quarto Boolean

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero
console.log(soma)

Precimos transforma os dados que recebeu do prompt int sao salvos como string
para que ingresso o resultado da soma entre o primeiro e segundo numero .

let primeiroNumero = prompt("digite um numero!") 
let segundoNumero = prompt("digite outro numero!")

let primeiroNumero = Number(primeiroNumero) 
let segundoNumero = Number(segundoNumero)

const soma primeiroNumero + segundoNumero 
console.log(soma)
*/
//1.

let idadeUser = prompt("Digite sua idade!")
let idadeAmigo = prompt("qual idade do seu amigo!")

console.log("Sua idade é maior que a do seu amigo?", idadeUser>idadeAmigo)
console.log("A diferença de idade entre vocês dois é de", idadeUser<idadeAmigo)


//2.
let numberPar = prompt("Digite um numero par!")
let resultado = numberPar % 2 

console.log("O restante da divisão do numero 2 é ", resultado)

// Todos os numeros que par são divididos por 2 termina com o resto 0
// os numero impar dividios por 2 termina com o resto 1


//3.
let idade = prompt("Digite sua idade!")

let idadeMes = idade* 12
let idadeAnos = idade* 365
let idadeHoras = idadeDias* 24


console.log("Sua idade em Meses é",idadeMes)
console.log("Sua idade em Dias é",idadeDias)
console.log("Sua idade em Horas",idadeHoras)


//4.

let num1 = prompt("Digite um numero!")
let num2 = prompt("Digite um numero!")

console.log("primeiro numero é maior que segundo?",num1>num2)
console.log("o primeiro numero é igual ao segundo ?",num1--num2)
let result = num1%num2
console.log("O primeiro numero é divisivel pelo segundo ? ",result--0)
result = num2%num1
console.log("O segundo numero é divisivel pelo primeiro? ",result--0)



]









