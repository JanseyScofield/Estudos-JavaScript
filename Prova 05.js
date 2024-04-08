/*[JS-A05] Você foi convidado(a) a desenvolver um aplicativo web para ajudar a gerenciar as tarefas domésticas de uma família agitada. O objetivo é criar um 
"Gerenciador de Tarefas Domésticas" que permita que todos os membros da família adicionem, removam e atualizem suas tarefas diárias, garantindo que tudo seja feito de forma 
organizada. */

let nome = prompt("Qual é o sobrenome da sua família?")
console.log(`Bem vinda, família ${nome}`)
let tarefas = [prompt("Para começar, digite a primeira tarefa da casa: ")]
let stop = false
while(stop == false){
    for(iCont = 0; iCont < tarefas.length; iCont++){
        console.log(`${iCont+1} - ${tarefas[iCont]}`)
    }
    console.log("O que deseja fazer agora?")
    let opcoes = parseInt(prompt("[1] Adicionar outra tarefa\n[2] Remover tarefa\n[3] Atualizar alguma tarefa\n[4] Sair do programa"))
    if(opcoes == 4){
        break
    }
    while(opcoes <1 || opcoes >5){
        opcoes = parseInt(prompt("O valor está inválido. Digite outro:"))
    }
    switch(opcoes){
        case 1:
            tarefas.push(prompt("Digite a tarefa que você deseja adicionar: "))
            break
        case 2:
            let sairExcluir = false
            while(sairExcluir == false){
                for(iCont = 0; iCont < tarefas.length; iCont++){
                console.log(`${iCont+1} - ${tarefas[iCont]}`)
                }
                let excluir = parseInt(prompt("Digite o número a tarefa que deseja excluir (digite 0 para sair): "))
                while(excluir <0 || excluir > tarefas.length){
                    excluir = parseInt("Número inválido. Digite outro: ")
                }
                if(excluir == 0){
                    break
                }
                console.log("------------------------------------------")
                tarefas.splice(excluir-1, 1)
            }
        break
        case 3:
            let sairAtt = false
            while(sairAtt == false){
                for(iCont = 0; iCont < tarefas.length; iCont++){
                    console.log(`${iCont+1} - ${tarefas[iCont]}`)
                }
                let escAtt = parseInt(prompt("Escolha a tarefa que você deseja atualizar (digite 0 para sair): "))
                while(escAtt <0 || escAtt > tarefas.length){
                    excluir = parseInt("Número inválido. Digite outro: ")
                }
                if(escAtt == 0){
                    break
                }
                let att =  prompt("O que você deseja escrever nela? ")
                console.log("------------------------------------------")
                tarefas.splice(escAtt -1 , 1, att)
            }

    }
    
}
