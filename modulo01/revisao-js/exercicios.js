// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()
// EXERCÍCIO 01
let array = [1, 2, 3, 4, 5]
function retornaTamanhoArray(array) {
    return array.length
}
retornaTamanhoArray(array)
// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    let numero = array.sort(function (a, b) {
        return a - b
    })
    return numero
}
// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            let numeroPar = array[i]
            novoArray.push(numeroPar)
        }
    }
    return novoArray
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            let numeroPar = array[i] ** 2
            novoArray.push(numeroPar)
        }
    }
    return novoArray
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = array[i]
        }
    }
    return maiorNumero
}
// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {
        maiorNumero: undefined,
        maiorDivisivelPorMenor: undefined,
        diferenca: undefined
    }

    if (num1 > num2) {
        objeto.maiorNumero = num1
    } else {
        objeto.maiorNumero = num2
    }

    if (num1 > num2) {
        if (num1 % num2 == 0) {
            objeto.maiorDivisivelPorMenor = true
        } else {
            objeto.maiorDivisivelPorMenor = false
        }
    } else if (num2 > num1) {
        if (num2 % num1 == 0) {
            objeto.maiorDivisivelPorMenor = true
        } else {
            objeto.maiorDivisivelPorMenor = false
        }
    } else {
        objeto.maiorDivisivelPorMenor = true
    }

    if (num1 > num2) {
        objeto.diferenca = num1 - num2
    } else {
        objeto.diferenca = num2 - num1
    }

    return objeto
}
// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let novoArray = []
    let numeroPar = 0
    for (let i = 0; i < n; i++) {
        novoArray.push(numeroPar)
        numeroPar = numeroPar + 2
    }
    return novoArray
}
// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoA == ladoC) {
        return `Equilátero`
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        return `Isósceles`
    } else {
        return `Escaleno`
    }
}
// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novoArray = []
    let segundoMenor = array.sort(function (a, b) { return b - a; })[array.length - 2]
    let segundoMaior = array.sort(function (a, b) { return b - a; })[1]
    novoArray.push(segundoMaior, segundoMenor)
    return novoArray
}
// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    for (let i = 0; i < filme.atores.length; i++) {
        if (filme.atores[i] != filme.atores[0]) {
            filme.atores[i] = ' ' + filme.atores[i]
        }
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores}.`
}
// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let objeto = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return objeto
}
// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoasAutorizadas = pessoas.filter((item) => item.altura >= 1.5)
    pessoasAutorizadas = pessoasAutorizadas.filter((item) => item.idade > 14)
    pessoasAutorizadas = pessoasAutorizadas.filter((item) => item.idade < 60)
    return pessoasAutorizadas
}
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoasNaoAutorizadas = pessoas.filter((item) => {
        return item.altura < 1.5 || item.idade <= 14 || item.idade > 60
    })
    return pessoasNaoAutorizadas

}
// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let total = contas.map((conta) => {
        let soma = conta.compras.reduce((itemAnt, itemAtual) => itemAnt + itemAtual, 0)
        let saldo = conta.saldoTotal
        return { ...conta, saldoTotal: saldo - soma, compras: [] }
    })
    return total
   
}
// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let listaOrdem = consultas.sort(function (a, b) {
        return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0
    })
    return listaOrdem
}
// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    let listaOrdem = consultas.sort((primeiraConsulta, segundaConsulta) => new Date(primeiraConsulta.dataDaConsulta.split('/').reverse()).getTime() - new Date(segundaConsulta.dataDaConsulta.split('/').reverse()).getTime())
    return listaOrdem

}