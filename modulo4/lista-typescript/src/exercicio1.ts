function dadosPessoa(nome: string, data: string): string {
    const dataSep:string[] = data.split("/")
    return `Olá me chamo ${nome}, nasci no dia ${dataSep[0]} do mês de ${dataSep[1]} do ano de ${dataSep[2]}`
}
console.log(dadosPessoa("Ruan", "05/06/1996"))