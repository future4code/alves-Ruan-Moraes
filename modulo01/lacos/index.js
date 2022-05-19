//1-r=10
//2-r= 19,21,23,25,27,30
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
//3 vai ser impresso a quantidade de linha a qual o valor atual é < que valor total 
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }




// Exercícios de escrita de código
// //1- 
let bichosUser = Number(prompt("Quantos Bichos se tem?"))
let array = []
if(bichosUser ===0) {
    console.log("Que pena ,Você Pode adotar um pet")
    
} else {

    for(let indice = 0 ; indice<bichosUser; indice++) {
        let bicho = prompt("Nome dos seus bichos?")
        array[indice] = bicho
    }
    for(let arrayEx1 of array){
        console.log(arrayEx1)
    }
}



// // // 2-
const numero = [15, 40, 50, 60, 55, 67]
function letraA2(array) {
     for (let letraA2 of array) {
        console.log(letraA2)
     }
}
exA2(numero)

function letraB2(Array) {

     for (let letraB2 of Array){
     console.log(letraB2)
     }
}

function letraC2(array) {
    let novoArray = []
     for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
        novoArray[i] = array[i]
     }

}
console.log(novoArray)
}
letraC2(numero)

function letraD2(array) {
    let novoArray = []
     for (let i = 0; i < array.length; i++) {
        novoArray[i] =  `O elemento do index ${i} é ${array[i]}`
    
     }
     for(let teste of novoArray){
        console.log(teste)
     }
}
letraD2(numero)

function letraE2(array) {
   let maior = 0
    for (let i=0; i < array.length; i++){
        if (array[i]> maior ) {
         maior = array[i]
        }
    }
    let menor = Infinity
    for (let i = 0; i <array.length; i++){
        if(array[i] < menor){
         menor = array[i]  
        }
       
    }
    console.log(`meu maior numero é ${maior} e meu menor numero é ${menor}`)

}

letraE2(numero)