/*DESAFIO PRÁTICO
Faça um programa que implemente um jogo deCraps. O jogador lança um par de dados, obtendo um valor entre 2 e 12. Se, na primeira jogada, você tirar 7 ou 11, você um "natural"
e ganhou. Se você tirar 2, 3 ou 12 na primeira jogada, isto é chamado de "craps"e você perdeu. Se, na primeira jogada, você fez um 4, 5, 6, 8, 9 ou 10,este é seu "Ponto ".
Seu objetivo agora é continuar jogando os dados até tirar este número novamente. Você perde, no entanto, se tirar um 7 antes de tirar este Ponto novamente. */

function analisarDado(a){
    if(a == 7){
        return 1
    }
    else if(a  == 11){
        return 2
    }
    else if(a == 2 || a  == 3 || a  == 12){
        return 3
    }
    else{
        return 4
    }
}

let primeiraJogada = parseInt(prompt("Digite o dado  referente a primeira jogada: "))
let dado = analisarDado(primeiraJogada)
if(dado == 1 || dado == 2){
    console.log("Natural!!!")
}
else if(dado == 3){
    console.log("Craps!!")
}
else{
    let fim = false
    console.log("Ponto!")
    let proxJogadas =  0
    while(fim == false){
        proxJogadas = parseInt(prompt("Digite o valor do  próximo dado: "))
        dado = analisarDado(proxJogadas)
        if(proxJogadas == primeiraJogada){
            console.log("Você ganhou!!!")
            break
        }
        else if(proxJogadas == 7 || dado == 3){
            console.log("Você perdeu!!")
            break
        }
        else{
            console.log("Ponto!! Jogue outra vez!")
            continue
        }
        
    }
}
