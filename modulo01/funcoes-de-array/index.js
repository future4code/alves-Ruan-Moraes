//Exercícios de escrita de código
//1.
//a) os objetos serão mapeados mostrando o item , index e array.
//2.
//a)ira mostrar o nome correspondente da propriedade, no caso o item.nome entao os nomes sem apelidos.
//3.
//a)todos os objetos que nao correspondem a "Chijo".


//Exercícios de escrita de código

//1

// const pets = [
//    { nome: "Lupin", raca: "Salsicha"},
//    { nome: "Polly", raca: "Lhasa Apso"},
//    { nome: "Madame", raca: "Poodle"},
//    { nome: "Quentinho", raca: "Salsicha"},
//    { nome: "Fluffy", raca: "Poodle"},
//    { nome: "Caramelo", raca: "Vira-lata"},
// ]
// //a.
// let nomesPets = pets.map((product)=>{
//     return product.nome 
// })
// console.log(nomesPets)

// //b
// let dogsSalsicha = pets.filter((product) => {
// return product.raca === "Salsicha"
// })
// console.log(dogsSalsicha)

// let petSalsicha = produtos.filter((product) => {
//         return product.nome.includes ("Salsicha")
// })

//2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a)Crie um novo array que contenha apenas o nome de cada item

let nomesProdutos = produtos.map((product) => {
    return product.nome 
})
console.log(nomesProdutos)

//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

let descontoProdutos = produtos.map((product)=> {
    return product.categoria 
    
    
    let preço = product.preço
    let valorFinal = preço - (preço + 0.05)

    product.preço = valorFinal
    console.log(product)
   
})

//c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

let produtosBebidas = produtos.filter((product) => {
    return product.categoria === "Bebidas"
})
console.log(produtosBebidas)


// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

let produtosIpê = produtos.filter((product) => {
    return product.nome.includes ("Ypê")

})
console.log(produtosIpê)

//e)  Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

let arrayIpê = produtos.filter((product)=>{
return product.nome.includes("Ypê")
})
let arrayIpê1 = produtos.map((product)=>{
    let preço = product.preço
    let valorFinal = product.preco
    product.preço = valorFinal
    
    return console.log(`Compre ${product.nome} por ${product.preço}`)
})



