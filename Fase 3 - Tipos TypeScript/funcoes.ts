//tipo de retorno da função

function teste(n: number): number { // esta função explícitamente deverá retornar um dado númerico devido a sua anotação do tipo: number
    return n;
}

//funções anonimas.

setTimeout(function() {
    const salary: number = 1000
}, 2000)

// tipos de objetos

function passCoordinates(coord: {x: number, y: number}) {//essa função está recebendo um objeto tipo coord onde dentro deste objeto existem 2 chaves: x e y
    //e seus respectivos tipos são number, então o objeto a ser passado para essa função deverá conter estas duas chaves/objeto
    console.log(coord.x)
    console.log(coord.y)
}

const objeto = { // objeto que pode ser passado para a função passCoodinates por ter o mesmo tipo/objeto que a função recebe.
    x: 1,// chave é x e o valor é 1. OBJETO POSSUI CHAVE E VALOR, LEMBRAR DISSO.
    y: 2
}

const nomeObjeto = { // este objeto possui 2 tipos de valores, string e number.
    nome: "Felipe Bruno",
    idade: 30
}

passCoordinates(objeto);

// propriedades opcionais

function showNumbers(a: number, b: number, c?: number) {// propriedades opcionais basta adicionar uma ? na propriedade.
    console.log(`Números: ${a}, ${b}, ${c}`);
}

showNumbers(1, 2, 3);
showNumbers(1, 2);

// validando argumento opcional

function advancedGreeting(firsName: string, lastName?: string) {// obs: o primeiro parâmetro não pode ser opcional

    if(lastName !== undefined) {//verificando se o parâmetro opcional foi enviado ou não.
        console.log(`Olá ${firsName} ${lastName}, tudo bem?`);
    } else {
        console.log(`Olá ${firsName}, tudo bem?`);
    }

}

//UNION TYPES

function showBalance(balance: string | number) {// com o union type eu posso receber o parâmetro dessa forma, string ou number através do | na passagen do parâmetro
    console.log(`O saldo na conta é: ${balance}`);
}

// INTERFACE   

interface Point { //declaração de interface
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {// a função está recebendo um obj do tipo Point, então a passagem de dados dessa função o objeto tem q ter as mesmas propriedades
    // da interface Point.
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}

const coordObj: Point = { //constante coordObj é do tipo point e está recebendo os parâmetros exatamente iguais a da interface Point.
    x: 10,
    y: 20,
    z: 30
}

console.log(showCoords(coordObj));