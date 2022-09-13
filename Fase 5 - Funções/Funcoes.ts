// tipo void -- funções que não retornam valor algum.

function withoutReturn():void { //definido o void onde informa q a função não irá ter retorno.
    console.log('Esta função não tem retorno!')
}

withoutReturn()

// callback como argumento.
function greeting(name: string) {
    return `Olá ${name}`
}

function preGreeting(funcao: (name: string) => string, username: string) {//o parâmetro da função preGreeting está recebendo uma função como argumento.
    console.log('Preparando a função')

    const greet = funcao(username)

    console.log(greet)

}

preGreeting(greeting, "Felipe"/*passando a função greeting para o preGreeting e após isso o nome felipe onde ele irá executar a função greeting dentro da preGreeting e irá retornar o valor.*/)