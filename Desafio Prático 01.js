/*DESAFIO PRÁTICO 
Faça um Programa que pergunte quanto vocêganha por hora e o número de horas trabalhadasno mês. Calcule e mostre o total do seu salário noreferido mês, sabendo-se que são d
escontados 11% para o Imposto de Renda, 8% para o INSS e 5% parao sindicato, faça um programa que nos dê:
1.salário bruto.
2.quanto pagou ao INSS.
3.quanto pagou ao sindicato.
4. salário liquido
5. calcule os descontos e o salário liquido */

let salHora = parseFloat(prompt("Digite o valor que você ganha por hora: "))
let horasTrab = parseInt(prompt("Digite o valor de horas trabalhadas esse mês: "))

let salBruto = salHora*horasTrab
let ir = salBruto*0.11
let inss = salBruto*0.08
let sindicato = salBruto*0.05
let salLiquido = salBruto - (ir+inss+sindicato)

console.log(`O seu salário bruto é de R$ ${salBruto}.\nO valor pago ao INSS foi de R$ ${inss}.\nO valor pago ao sindicato foi de R$ ${sindicato}.\nO salário líquido ficou de R$ ${salLiquido}.`)
