/*Considere três notas (n1, n2, n3) e seus respectivos pesos (p1, p2, p3). Calcule a média ponderada das notas e atribua o resultado à variável "media". Após o cálculo, exiba a
média ponderada no console.
OBS: Para calcular a média ponderada multiplica os valores das notas pelos valores dos pesos, e divide pelas somas de todos os pesos. Lembre-se de declarar valores para os pesos
e para as nota*/

let n1 = parseFloat(prompt("Digite a nota 1: "))
let p1 = parseFloat(prompt("Digite o peso da nota 1: "))
let n2 = parseFloat(prompt("Digite a nota 2: "))
let p2 = parseFloat(prompt("Digite o peso da nota 2: "))
let n3 = parseFloat(prompt("Digite a nota 3: "))
let p3 = parseFloat(prompt("Digite o peso da nota 3: "))

let media = ((n1*p1)+(n2*p2)+n3*p3) / (p1+p2+p3)
alert(`A média ponderada foi de ${media}.`)
