/*Uma empresa de pesquisas precisa tabular os resultados da seguinte enquete feita a um grande quantidade de organizações:
"Qual o melhor Sistema Operacional para uso em servidores?" As possíveis respostas são:
1- Windows Server
2- Unix
3- Linux
4- Netware
5- Mac OS
6- Outro
Você foi contratado para desenvolver um programa que leia o resultado da enquete e informe ao final o resultado da mesma. O
programa deverá ler os valores até ser informado o valor 0, que encerra a entrada dos dados. Não deverão ser aceitos valores além dos válidos para o programa (0 a 6). 
Os valores referentes a cada uma das opções devem ser armazenados num vetor. Após os dados terem sido completamente informados, o programa deverá calcular a percentual de cada 
um dos concorrentes. O formato da saída foi dado pela empresa, e é o seguinte:
Windows Server 1500 17%
Unix 3500 40%
Linux 3000 34%
Netware 500 5%
Mac OS 150 2%
Outro 150 2% */

let vetOpcoes = []
let opcao
let stop = false
while(stop == false){
    opcao = parseInt(prompt("[0]Sair\n[1]Windows Server\n[2]Unix\n[3]Linux\n[4]Netware\n[5]Mac Os\n[6]Outro"))
    while(opcao <0 || opcao >6){
        opcao = parseInt(prompt("Opção inválida. Digite um número de 0 a 6:\n[0]Sair\n[1]Windows Server\n[2]Unix\n[3]Linux\n[4]Netware\n[5]Mac Os\n[6]Outro "))
    }
    if(opcao == 0){
        break
    }
    vetOpcoes.push(opcao)
}
console.log(vetOpcoes)
let windonws = 0
let unix = 0
let linux = 0
let netware = 0
let mac =  0
let outro = 0
for(escolha of vetOpcoes){
    switch(escolha){
        case 1:
            windonws ++
            break
        case 2:
            unix++
            break
        case 3:
            linux++
            break
        case 4:
            netware ++
            break
        case 5:
            mac++
            break
        case 6:
            outro++
            break
    }
}
let porcent = []
let vetTotal=[windonws, unix,linux,netware,mac,outro]
let votosTot = 0
for(iCont = 0; iCont <= 5; iCont++){
    votosTot += vetTotal[iCont]
}
for(iCont = 0; iCont <=5; iCont++){
    porcent.push(vetTotal[iCont] * 100/votosTot)
}
console.log(`Windowns Server ${vetTotal[0]} ${porcent[0]}%\nUnix ${vetTotal[1]} ${porcent[1]}%\nLinux ${vetTotal[2]} ${porcent[2]}%\nNetware ${vetTotal[3]} ${porcent[3]}%\nMac ${vetTotal[4]} ${porcent[4]}%\nOutro ${vetTotal[5]} ${porcent[5]}%\n`)
