/*Utilizando listas, faça um programa que realize 5 perguntas para uma pessoa sobre um crime, ela deve responder com prompt S - Sim e N - Não.
As perguntas são:
1 - "Telefonou para a vítima?"
2 - "Esteve no local do crime?"
3 - "Mora perto da vítima?"
4 - "Devia para a vítima?"
5 - "Já trabalhou com a vítima?"
Ao final, o programa deve emitir uma classificação sobre a participação da pessoa no crime. Se a pessoa responder positivamente a 2 questões, ela
deve ser classificada como"Suspeita"; entre 3 e 4 respostas positivas como "Cúmplice"; e se responder positivamente a 5 questões, deve ser
classificada como"Assassino". Caso contrário, será classificada como "Inocente". */

let perguntas = ["Telefonou para a vítima?", "Esteve no local do crime?", "Mora perto da vítima?", "Devia para a vítima?", "Já trabalhou com a vítima?"]
let vetSim = []
let nome = prompt("Qual é o nome do suspeito? ")
console.log("Responda com 'S' para 'Sim' e 'N' para 'Não': ")
for(iCont = 0; iCont<=4; iCont++){
    let resp = prompt(perguntas[iCont]).toLowerCase()
    if(resp == "s"){
        vetSim.push(resp)
    }
}
let qtdSim = vetSim.length
if( qtdSim ==  2){
    console.log(`${nome} é suspeito(a)!`)
}
else if(qtdSim == 3 || qtdSim == 4){
    console.log(`${nome} é cúmplice!`)
}
else if(qtdSim == 5){
    console.log(`${nome} é culpado(a)!`)
}
else{
    console.log(`${nome} é inocente.`)
}
