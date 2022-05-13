/*
function minhaFuncao(variavel) {
	return variavel * 5
}

console.log(minhaFuncao(2))
console.log(minhaFuncao(10))

// 1.
// a- oque vai ser impresso no console ?
// r= 10 , 50

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
// r= nao seria me retornado nenhuma valor pois o console.log nao esta sendo chamado para printar os valores da funcão.
*/
/*
 2.

let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//a. Explique o que essa função faz e qual é sua utilidade
//r= outraFuncao recebe um paramentro texto em seguida esse paramentro recebe o metodo 
//toLowerCase() que retorna o valor da string que foi chamada convertendo para minusculo

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//i.   Eu gosto de cenoura
//ii.  CENOURA é bom pra vista
//iii. Cenouras crescem na terra
//r= todos as saidas teram letras minusculas !
*/


//Exercícios de escrita de código
//1.a
/*
function minhaIdentidade () { 
   console.log("Eu sou Ruan, tenho 25 anos, moro em Maranhão e sou estudante.")
}
minhaIdentidade()

//b.

function minhaFuncao (nome,idade,endereço,profissão) {
	console.log("Eu sou,",nome,"tenho",idade,"anos, moro em",endereço,"e sou",profissão)
    return ("Eu sou," + nome + "tenho" + idade + "anos, moro em Rua" + endereço +  "e sou" + profissão)
}
	const nome = prompt("Qual o seu nome ?")
	const idade = prompt("Qual a sua idade?")
	const endereço = prompt("Onde você mora?")
	const profissão = prompt("Qual a sua profissão?")

	minhaFuncao(nome,idade,endereço,profissão)

//2.a

const variavel = (number1,number2) => {return number1+number2}
console.log(variavel(1,4))

//b.

const numeros = (numeros1,numeros2)=> {
	const comparar = numeros1>=numeros2
	return comparar
}
console.log(numeros(1,2))

//c.
const variavel = (number1)=> {
	const comparar = number1%2 == 0
	return comparar
	
}
console.log(variavel(4))

//d.
const mensagem = (mensagemUsuario) => {
	return mensagemUsuario
}
mensagemUsuario= prompt("Digite uma mensagem")
console.log(mensagemUsuario.length)
console.log(mensagemUsuario.toUpperCase())

//3.




  */

numero1 = prompt('Digite o primeiro valor')     
numero2 = prompt('Digite o segundo valor')          
soma = numero1 + numero2     
divisao = numero1 / numero2     
subtacao = numero1 - numero2     
multiplicacao = numero1 * numero2          
console.log(soma)     
console.log(divisao)    
console.log(subtacao)     
console.log(multiplicacao) 








	






