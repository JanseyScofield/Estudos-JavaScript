/*DESAFIO PRÁTICO
Você está desenvolvendo um sistema de autenticação para um aplicativo. Sua tarefa é implementar uma função chamada autenticarUsuario que aceita um nome de usuário, 
uma senha e duas funções de callback como argumentos. A função autenticarUsuario deve simular um processo de autenticação simples, onde o nome de usuário e a senha são 
verificados. Se as informações forem válidas, a primeira função de callback deve ser chamada e mostrar uma frase de login com o nome de usuário em letras minúsculas. 
Caso contrário, a segunda função de callback deve ser chamada para indicar a falha na autenticação..*/

function autenticarUsuario(a,b,cb1,cb2){
    if(a != usuario){
       return cb1(1)
    }
    else if(b != senha){
        return cb1(1)
    }
    else{
       return cb2(1)
    }
}

const acessoNegado = a =>{
    if(a == 1){
        return console.log("Falha na autenticação.")
    }
}

const acessoConcedido = a =>{
    if(a == 1){
        usuario = usuario.toLocaleLowerCase()
        return console.log(`Bem vindo, ${usuario}!`)

    }
}

let usuario = prompt("Crie seu nome de usuário: ")
let senha = prompt("Crie sua senha: ")
let usuLogin = prompt("Digite seu usuário para logar:")
let senhaLogin = prompt("Digite sua senha para logar:")
autenticarUsuario(usuLogin, senhaLogin, acessoNegado,acessoConcedido)
