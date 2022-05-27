 ```
 function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 let salarioFixo = 2000
 let comissão1 = 100 * qtdeCarrosVendidos
 let comissão2 = valorTotalVendas / 100 * 5
 let salarioFinal = salarioFixo + comissão1 + comissão2
   return salarioFinal
}
```