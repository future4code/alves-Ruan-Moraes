//Exercícios de interpretação de código
// 1. 
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// O codigo emprime um numero e testa se ele passou no teste ou nao ultilizando if e else 
// b) Para que tipos de números ele imprime no console "Passou no teste"? 
// para os numeros par !
// c) Para que tipos de números a mensagem é "Não passou no teste"? 
// para o numeros impar !


//2.O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a) Para que serve o código acima?
// para otimizar as tarefas facilitando a escolha da fruta + valor 
// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?
// O preço da fruta  maçã  é  R$  5
//c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")?
// se eu tirar o break ele vai parar no "JS" Já em outras linguagens ele vai continuar lendo !

// 3. Leia o código abaixo:
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// esta criando uma vareavel e pedindo numero no prompt para perguntar ao usuario o valor x.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// msg do terminal nao esté definida , se fosse -10 ele nao entra , nao tem uma condição para ele entrar !

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// precisa ser adc um caso para condição 


// Exercícios de escrita de código

//1.
//

let idadeUser = function(idade){
idade = Number(prompt("qual a sua idade ?"))
      if (idade >= 18 ){
          console.log("Você pode dirigir")
      } else {
          console.log("Você nao pode dirigir")
      }
}

idadeUser()

//2.
let turnoUser = function(turno){
      turno= prompt("Digite o horario que vc estuda: M = (matutino) V = (vespertino) ou N (noturno)").toUpperCase()
      if(turno === "M"){
          console.log ("Bom Dia")
      } else if(turno === "V"){
          console.log ("Boa Tarde")
      } else if(turno === "N"){
          console.log ("Boa Noite")
      } else{
          console.log ("Tente novamente, algo foi digitado errado !")
      }

    }
    turnoUser() 

//3.
let turnoUs = function(turno){
    turno= prompt("Digite o horario que vc estuda: M = (matutino) V = (vespertino) ou N (noturno)").toUpperCase()
    switch(turno){
        case"M":
        console.log ("Bom Dia")
        break

     case"V":
        console.log ("Boa Tarde")
        break
     case"N":
        console.log ("Boa Noite")
        break
     default:
        console.log ("Tente novamente, algo foi digitado errado !")
        break
    }

  }
  turnoUs() 
  //4.
let filmeUser = function(genero,valor){
    genero = prompt (" Qual o genero do filme deseja?").toLowerCase()
    genero = genero === "fantasia"
    valor = Number(prompt("qual o valor do filme ?"))
    if (genero===true){
        if(valor<=15){
            console.log("Bom Filme")
        } else {
            console.log("Escolha outro filme :(")
        } 
    }else {
        if(valor<=15){
            console.log("Bom Filme")
        } else {
            console.log("Escolha outro filme :(")
        } 
    }
}
filmeUser()





      




