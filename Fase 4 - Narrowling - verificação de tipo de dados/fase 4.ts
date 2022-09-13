// TypeGuard

function sum(a: number | string, b: number | string) { // função pode receber number ou string
    if(typeof a === "string" && b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    } else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    } else {
        console.log("Impossível realizara soma")
    }
}

// checando se o valor existe

function operations(arr: number[], operation?: string | undefined){
    if(operation) { // este if verifica se existe valor em operation.
        if (operation === "sum"){
            const sum = arr.reduce((i, total) => i + total) // método reduce da array, realizando a soma de todos os itens da array
            console.log(sum);
        }else if(operation === "multiply"){
            const multiply = arr.reduce((i, total) => i * total) // método reduce da array, realizando a multiplicação de todos os itens da array
            console.log(multiply);
        }
    } else {
        console.log("Por favor, defina uma operação")
    }
}

// instance of

class User {
    name

    constructor(name: string) {
        this.name = name;
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name);
    }
}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon)
console.log(paul)

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
    } else if (user instanceof User){
        console.log(`Olá ${user.name}`)
    }
}

// Operador In

class Dog {// definindo um objeto, suas propriedades e um construtor.
    name
    breed

    constructor(name: string, breed?: string) { //construtor do objeto.
        this.name = name
        if (breed) {
            this.breed = breed
        }
    }
}

const turca = new Dog("Turca")
const bob = new Dog("bob", "Pastor alemão")

function showDogDetails(dog: Dog) {
    if('breed' in dog) {// usando a propriedade in para checar se a prorpeidade 'breed' existe no objeto 'dog'.
        console.log(`O cachorro é de raça ${dog.breed}`)
    } else {
        console.log("O cachorro é um SRD");
    }
}

showDogDetails(turca)
showDogDetails(bob)