
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 3));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     return `No comparador de desigualdade ${a}===${b} é ${b===a}`
//     //  Sua lógica aqui
// }
// console.log(checarIgualdade(1,2))

// // c-)Faça uma função chamada "verificaSeEMaior"
// function verificaSeEMaior(a,b){
//     return `verifique se a é maior que b ${a}<${b} é ${a<b}`

// }

// console.log(verificaSeEMaior(321, 2156));


// // Exercício 2------------------------------------------------------------------------------------
// //Escreva true or false para as comparações abaixo:
// // exemplo 1>2 = false
// // a-) 1==='1'= false
// // b-) 1=='1'= false
// // c-) 'a'==='b'= false
// // d-) 'b'>'a'= false
// // e-) 0!==null= true 


// // CONDICIONAIS

// // Exercício 3------------------------------------------------------------------------------------


// const cadastro = ()=>{

// let nomeUser = prompt("Nome: ")
// let anoUser = prompt("Ano de nascimento: ")
// let senhaUser = prompt("Senha: ")
// let nacionalidade = prompt("Nacionalidade Brasileira (S/N)? ").toUpperCase()

// var anoAtual = new Date().getFullYear();
// var maiorIdade = anoAtual - anoUser;
  
//     if (maiorIdade >= 18 && senhaUser.length >= 6 && nacionalidade === "S") {
//         console.log("voce pode se cadastrar")
//     } else {
//         console.log("Você não pode se cadastrar")
//     }
// }

// cadastro()   



// // Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = prompt ("Digite seu login")
//     const senha = prompt ("Qual a sua senha")

//     let senhaUser = "labenu"
    

//     if (senhaUser === senha ){
//         console.log("Usuario Logado!")
//     } else {
//         console.log("Usuario nao logado !")
//     }


//     //  Sua lógica aqui

// }

// login()

// // Exercício 5----------------------------------------------------------------------------------------------------


// const primeiraDose = () => {

//     let nomeUser = prompt("Digite seu nome")
//     let vacinaUser = prompt("Qual vacina você tomou?").toLocaleLowerCase()
//     let coronavac = "coronavac"
//     let astrazenica = "astrazenica"
//     let pfizer= "pfizer"
 
//  if(vacinaUser === coronavac){
//      var tempo = 28
//     var  data = "18/06/2022"
//  console.log(`Olá ${nomeUser}! A próxima dose da ${vacinaUser} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
//  }
 
//  if(vacinaUser === astrazenica){
//    var  tempo = 90
//    var  data = "22/08/2022"
 
//     console.log(`Olá ${nomeUser}! A próxima dose da ${vacinaUser} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
//  }
 
//  if(vacinaUser === pfizer){
//      var  tempo = 90
//      var  data = "22/08/2022"
   
//       console.log(`Olá ${nomeUser}! A próxima dose da ${vacinaUser} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
 
//  }
 
//  }
//  console.log(primeiraDose())


// // // LOOP+CONDICIONAL

// // // Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
    
   
//     console.log(usuarios[1].imunizacao.replace("incompleta", "completa"))
    
//     //  Sua lógica aqui

// }
// console.log(segundaDose("Barbara"));

// // Exercício 7 --------------------------------------------------------------------------------------

// const avisoAosAtrasados = () => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "completa" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]

//     const imunizacao = [
//         { completa: "completa" },
//         { incompleta: "incompleta"}
//     ]

//     if (usuarios[0].imunizacao == "completa") {
//         console.log(`Olá "${usuarios[0].nome}, sua imunização está ${imunizacao[1].incompleta}!`)
//     } else {
//         console.log (`Olá ${usuarios[0].nome}! Sua imunização está ${imunizacao[1].incompleta} , por favor volte ao postinho para tomar a segunda dose.`)
//     }

//     if (usuarios[1].imunizacao == "completa") {
//         console.log(`Olá "${usuarios[1].nome}, sua imunização está ${imunizacao[0].completa}!`)
//     } else {
//         console.log (`Olá ${usuarios[1].nome}! Sua imunização está ${imunizacao[1].completa}, por favor volte ao postinho para tomar a segunda dose.`)
//     }

//     if (usuarios[2].imunizacao == "completa") {
//         console.log(`Olá "${usuarios[2].nome}, sua imunização está ${imunizacao[1].incompleta}!`)
//     } else {
//         console.log (`Olá ${usuarios[2].nome}! Sua imunização está ${imunizacao[1].incompleta} , por favor volte ao postinho para tomar a segunda dose.`)
//     }

    
// }
// console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

console.log(usuarios);
const cadastroDesafio1 = () => {

    let nomeUser = prompt("Digite seu nome: ")
    let anoUser = prompt("Qual ano que você nasceu: ")
    let nacionalidadeUser = prompt("Digite sua nacionalidade: ")
    let senhaUser = prompt("Digite sua senha: ")
    let vacinaUser = prompt("Vacina tomada: ")

    let objetos = [
        usuario = []
    ]

    usuario.push(nomeUser, anoUser, nacionalidadeUser, senhaUser, vacinaUser);
    console.log(objetos);
}

console.log(cadastroDesafio1());

const cadastroDesafio = () => {

    const usuarios = [
        {
            nome: "Artur",
            ano: 2000,
            nacionalidae: "brasileiro",
            senha: "123456",
            vacina: "pfizer",
            imunizacao: "incompleta"
        },
        {
            nome: "Bárbara",
            ano: 1984,
            nacionalidae: "brasileira",
            senha: "labenu",
            vacina: "astrazenica",
            imunizacao: "completa"
        },
        {
            nome: "Carlos",
            ano: 2000,
            nacionalidae: "brasileiro",
            senha: "123456",
            vacina: "coronavac",
            imunizacao: "incompleta"
        }
    ] 

    let usuarioFind = usuarios.find(usuario => usuario.senha == "red");

    console.log(usuarioFind)
}

console.log(cadastroDesafio());

// const loginDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(loginDesafio());

// const primeiraDoseDesafio = () => {
// //  Sua lógica aqui
// }
// console.log(primeiraDoseDesafio())
// const segundaDoseDesafio = (nomeDoUsuario) => {
//     //  Sua lógica aqui
// }
// console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

// const avisoAosAtrasadosDesafio = () => {
//     //  Sua lógica aqui
// }
// console.log(avisoAosAtrasadosDesafio());