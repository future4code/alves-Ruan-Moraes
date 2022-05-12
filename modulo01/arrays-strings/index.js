//1
//a. undefined
//b. null
//c. 11
//d. 3
//e.3,19,5,6,7,8,9,10,11,12,13
//f.9

//2 subi num onibus em marrocos 27 

// exercicio de escrita de codigos

//1 exercicio
const perguntanome = prompt("Digite seu nome")
const perguntaemail = prompt("qual o seu email")

console.log (`o e-mail`, perguntaemail.trim(),`Foi cadastrado com sucesso `,`Seja Bem-Vindo(a)`, perguntanome)

//2 exercicio

const comidasArry = ["feijoada", "churrasco", "strognof", "macarronada", "panelada"]
console.log (comidasArry)
console.log ("Essas são minhas comidas preferidas:\n",comidasArry[0] ,"\n",comidasArry[1] ,"\n",comidasArry[2] ,"\n",comidasArry[3] ,"\n",comidasArry[4])
comidasArry[1] = prompt("Qual a sua comida preferida?")
console.log ("Essas são minhas comidas preferidas:\n",comidasArry[0] ,"\n",comidasArry[1] ,"\n",comidasArry[2] ,"\n",comidasArry[3] ,"\n",comidasArry[4])

//3 exercicio
const listaDeTarefas = []
listaDeTarefas.push (prompt("adicionar a tarefa numero 0!"), prompt("adicione a tarefa numero 1!"),prompt("adcione a tarefa numero 2!"))
console.log (listaDeTarefas)
listaDeTarefas.splice (Number(prompt("qual tarefa você completou de 0 a 2")),1)
console.log (listaDeTarefas)

