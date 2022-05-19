/*
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
1.
// a. Oque vai ser impresso no console ?
// r=  o elenco Matheus Nachtergaele e Virginia Cavendish vai ser transmitido no canal: "Globo" ,horario: "14h"

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
//2.
//a.Oque vai ser impresso no console ?
// r= vai ser impresso o nome a idade e a raça do animal e na tartaruga o nome foi subistituido a ultima vogal pela ultima do gato.
// b.O que faz a sintaxe dos três pontos antes do nome de um objeto?
// r= ela copia a propiedade de objetos sobrescrito.

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

// 3.
//a. r= deu valor false e undefined
//b. const foi denifina um valor false e na altura nao foi definido !


// Exercícios de escrita de código
//. 1.
// a)
*/
const pessoa = {
    nome: "Ruan",
    apelelidos: ["lenda","lenda1","lenda2"]
}
function dados1 (objeto){
    console.log(`Eu sou ${objeto.nome},mas pode me chamar de ${objeto.apelelidos[0]}, ${objeto.apelelidos[1]} ou ${objeto.apelelidos[2]}`)
}
dados1(pessoa)

//b)
const novosApelidos = {
    ...pessoa,
    apelelidos : ["lenda","lenda1","lenda2"]
}
dados1(novosApelidos)

//2.
//a)
const objeto1 = {
    nome : "Ruan",
    idade: 25,
    profissão : "Programador"
}

const objeto2 = {
    nome : "Marques",
    idade : 48,
    profissão : "Bombeiro"


}

//b)
function objeto(objet1,objet2){
    const array = [objet1.nome,objet1.nome.length,objet1.idade,
    objet1.profissão,objet1.profissão.length,objet2.nome,objet2.nome.length,objet2.idade,objet2.profissão,objet2.nome.length]

}
objeto(objeto1,objeto2)
//3.
//a.
const carrinho = []
const objetoFruta1 = {
    nome : "goiaba",
    disponibiliade : true
}
const objetoFruta2 = {
    nome : "uva",
    disponibiliade : true
}
const objetoFruta3 = {
    nome : "abacaxi",
    disponibiliade : true
}
function recebeFruta(fruta1,fruta2,fruta3){
    carrinho.push(fruta1,fruta2,fruta3)
    return carrinho
}
recebeFruta(objetoFruta1,objetoFruta2,objetoFruta3)
console.log(carrinho)



