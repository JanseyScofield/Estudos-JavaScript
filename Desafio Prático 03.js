/* DESAFIO PRÁTICO 03
Você foi desafiado a criar um simulador de caixa eletrônico em JavaScript. O programa deve permitir que o usuário interaja com sua conta bancária simulada, realizando
operações como verificar o saldo, fazer saques, fazerdepósitos e sair do programa.Aqui estão os requisitos do programa:
O programa deve começar com um saldo inicial de $1000.
Utilize um loop while para manter o programa em execução
até que o usuário escolha sair A cada iteração do loop, o programa deve
exibir um menu com as seguintes opções:
Ver Saldo
Fazer Saque
Fazer Depósito
Sair
Se o usuário escolher
"Ver Saldo", o programa deve exibir o saldo atual. Se o usuário escolhe "Fazer Saque", o programa deve solicitar o valor do saque. Certifique-se de validar se o valor é
numérico, maior que zero e não excede o saldo disponível. Se a validação for bem-sucedida,atualize o saldo e exiba uma mensagem indicando o sucesso da transação. Se o usuário 
escolher"Fazer Depósito", o programa deve solicitar o valor do depósito. Certifique-se de validar se o valor é numérico e maior que zero. Se a validação for bem sucedida atualize o saldo e exiba uma mensagem indicando o sucesso da transação. Se o usuário escolher"Sair", encerre o programa
exibindo uma mensagem de despedida.Se o usuário escolher uma opção inválida, exiba uma mensagem indicando isso e permita que o usuário faça uma nova escolha.
*/

let escolha = 0
let saldo = 1000
while(escolha != 4){
    console.log("[1]Verificar saldo\n[2]Fazer saques\n[3]Fazer depositos\n[4]Sair do caixa")
    escolha = parseInt(prompt("Digite a opção desejada: "))
    if (escolha <1 || escolha>4){
        console.log("Opção inválida. Digite outra: ")
    }else{
        switch(escolha){
            case 1:
                console.log(`Seu saldo é de R$ ${saldo}.`)
                break
            case  2:
                let saque = parseFloat(prompt("Digite o valor que deseja sacar: "))
                while (saque > saldo || saque <=  0){
                    saque = parseFloat(prompt("Saque inválido. Coloque outro valor: "))
                }
                console.log(`O valor de R$ ${saque} foi sacado com sucesso!`)
                saldo -= saque
                break
            case 3:
                let deposito = parseFloat(prompt("Digite o valor que deseja depositar: "))
                while (deposito <= 0){
                    deposito = parseFloat(prompt("O valor não pode ser igual ou menor que 0. Digite outro: "))
                }
                saldo += deposito
                console.log(`O valor de R$ ${deposito} foi depositado com sucesso!`)
                break
        }
    }
}
console.log("Muito obrigado por usar nossos serviços!Volte Sempre!")
