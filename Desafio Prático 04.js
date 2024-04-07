/* DESAFIO PRÁTICO
Neste desafio, você criará um jogo simples de par ou ímpar.
Regras:
O jogo continuará até que o jogador decida parar.Em cada rodada, um dado será lançado.O jogador escolherá se quer apostar em "par" ou "ímpar".
O resultado do dado será verificado e o vencedor será determinado com base na escolha do jogador.*/

for(let tentativa = 0; tentativa != 3; tentativa += 0){
    let dado = Math.floor(Math.random() * 6) + 1;
    tentativa  = parseInt(prompt("Vamos jogar PAR OU ÍMPAR!\n[1] Para chutar que no dado sairá um número ímpar\n[2] Para chutar que no dado sairá um número par\n[3] Para sair "))
    while(tentativa < 1 || tentativa >3){
        tentativa = parseInt(prompt("Número inválido. Digite outro: "))
    }
    if(tentativa == 3){
        break
    }
    if(((dado % 2 == 1) && tentativa == 1) || ((dado % 2 == 0)  && tentativa ==  2)){
        console.log(`Você acertou! O número sorteado pelo dado foi ${dado}.`)
    }
    else{
        console.log(`Você errou! O número sorteado pelo dado foi ${dado}.`) 
    }
}
