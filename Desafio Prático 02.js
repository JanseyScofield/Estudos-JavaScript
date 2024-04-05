/*DESAFIO PRÁTICO
Crie um programa que apresente um menu com váriasopções de cálculos geométricos. O usuário deve ser capaz de escolher uma opção e inserir os valores
necessários para realizar o cálculo correspondente.Utilize condicionais para direcionar o programa com base na escolha do usuário.
Opções do Menu:
1. Calcular Área do Triângulo
2. Calcular Área do Retângulo
3. Calcular Volume do Cubo
4. Calcular Área do Círculo
5. Sair*/

alert("1. Calcular Área do Triângulo\n2. Calcular Área do Retângulo\n3. Calcular Volume do Cubo\n4. Calcular Área do Círculo\n5. Sair")
let escolha = parseInt(prompt("Escolha a função que deseja selecionar:  "))
let resultado = 0
let unidade ="²"
switch(escolha){
    case 1:
        let baseT = parseFloat(prompt("Digite o valor da base do triângulo em cm: "))
        let alturaT = parseFloat(prompt("Digite o valor da altura do triângulo em cm: "))
        resultado = (baseT*alturaT)/2
    
        break
    case 2:
        let baseR= parseFloat(prompt("Digite o valor da base do retângulo em cm: "))
        let alturaR = parseFloat(prompt("Digite o valor da altura do retângulo em cm: "))
        resultado = (baseR*alturaR)
        break
    case 3:
        let baseC = parseFloat(prompt("Digite o valor da base do cubo em cm:  "))
        let alturaC = parseFloat(prompt("Digite o valor da altura do cubo em cm:  "))
        let larguraC = parseFloat(prompt("Digite o valor da largura do cubo em cm:  "))
        resultado = baseC*alturaC*larguraC
        unidade = "³"
        break
    case 4:
        let raio = parseFloat(prompt("Digite o valor do raio do círculo em cm: "))
        resultado = raio*3.14*2
}
alert(`O valor é de ${resultado} cm${unidade}.`)
