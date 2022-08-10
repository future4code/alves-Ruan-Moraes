/* Exercício 01 
a)Resposta :Utilizar process. argv[2]
b)console.log(`olá ${process.argv[2]}, você tem ${process.argv[3]} anos.`)
c)console.log(`olá ${process.argv[2]}, você tem ${process.argv[3]} anos. Em sete anos você terá ${+process.argv[3]+7} anos.`)*/
const userName = process.argv[2]
const userAge = Number(process.argv[3])

const answer = (userName, userAge) => {
  if (!userName || !userAge){
    return ("Você não definiu um ou mais parâmetros, verifique")
  } else {
    return (`Olá, ${userName}! Você tem ${userAge} anos. Em sete anos você terá ${userAge + 7}`)
  }
}

console.log(answer(userName, userAge))