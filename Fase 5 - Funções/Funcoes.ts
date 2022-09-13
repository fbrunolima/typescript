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

// GENERIC FUNCTION

function firstElement<T>(arr: T[]): T {// define <T> ou <U> como generic onde a função pode receber qualquer tipo de dado, neste caso um array de qualquer tipo de dado.
    return arr[0]
}

console.log(firstElement([1,2,3]))

function mergeObjects<U,T>(obj1: U, obj2: T){//mais um exemplo de generic onde está sendo definido um objeto1/2 em que o tipo q ele recebe é genérico, ou seja.. qualquer tipo de dado.
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name:"Matheus"}, {age: 30, job: "Programmer"});

console.log(newObject);

// CONSTRANINT EM GENERIC FUNCTION

function biggestNumber<T extends number | string>(a: T, b: T): T {// neste exemplo de generic está sendo definido que o T pode receber apenas string ou number, não podendo receber outro tipo.
    //desta forma é restringido o tipo de dado que o generic function vai receber.
    let biggest: T

    if(+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5,3))
console.log(biggestNumber("12", "5"))

// ESPECIFICAR TIPO DE ARGUMENTO

function mergeArrays<T>(arr1: T[], arr2: T[]){
    return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3], [5,6]))
console.log(mergeArrays<number | string>([1,2,3], ["teste", "testando"]))
mergeArrays<number | string> ([1,2,3], ["teste", "testando"]) // utilizando <number | string> antes da passagem dos parâmetros da função, podemos definir os tipos de dados que a aquela generic function vai receber
// de acordo com a parametrização da generic function q ele está definido

// PARAMETROS OPCIONAIS

function modernGreeting(name: string, greet?: string) { // passagem de parâmetro opcional, deverá ser feito um narrowling para que cheque se foi recebido o parâmetro opcional para que evite erros 'undefined'.
    if(greet) {
        return `Olá ${greet} ${name}, tudo bem?`
    } else {
        return `Olá ${name}, tudo bem?`
    }
}

// PARAMETRO DEFAULT

function somaDefault(n: number, m = 10){ // um parâmetro default é o mesmo que m = 10, onde está definindo que o valor default é 10.
    return n + m
}