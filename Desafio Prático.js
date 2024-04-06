/* DESAFIO PRÁTICO 03
Você foi desafiado a criar um simulador de caixa eletrônico em JavaScript. O programa deve permitir que o usuário interaja com sua conta bancária simulada, realizando
operações como verificar o saldo, fazer saques, fazer depósitos e sair do programa.Aqui estão os requisitos do programa:
O programa deve começar com um saldo inicial de $1000.
Utilize um loop while para manter o programa em execução até que o usuário escolha sair.*/

let escolha = 0
let saldo = 1000
while(escolha != 4){
    console.log("[1]Verificar saldo\n[2]Fazer saques\n[3]Fazer depositos\n[4]Sair do caixa")
    escolha = parseInt(prompt("Digite a opção desejada: "))
    switch(escolha){
        case 1:
            console.log(`Seu saldo é de R$ ${saldo}.`)
            break
        case  2:
            let saque = parseFloat(prompt("Digite o valor que deseja sacar: "))
            while (saque > saldo){
                saque = parseFloat(prompt("Esse valor está acima do seu saldo. Coloque outro valor: "))
            }
            console.log(`O valor de R$ ${saque} foi sacado com sucesso!`)
            saldo -= saque
            break
        case 3:
            let deposito = parseFloat(prompt("Digite o valor que deseja depositar: "))
            saldo += deposito
            console.log(`O valor de R$ ${deposito} foi depositado com sucesso!`)
            break
    }
}
