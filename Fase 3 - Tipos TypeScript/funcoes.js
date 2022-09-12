//tipo de retorno da função
function teste(n) {
    return n;
}
//funções anonimas.
setTimeout(function () {
    var salary = 1000;
}, 2000);
// tipos de objetos
function passCoordinates(coord) {
    //e seus respectivos tipos são number, então o objeto a ser passado para essa função deverá conter estas duas chaves/objeto
    console.log(coord.x);
    console.log(coord.y);
}
var objeto = {
    x: 1,
    y: 2
};
var nomeObjeto = {
    nome: "Felipe Bruno",
    idade: 30
};
passCoordinates(objeto);
// propriedades opcionais
function showNumbers(a, b, c) {
    console.log("N\u00FAmeros: ".concat(a, ", ").concat(b, ", ").concat(c));
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
// validando argumento opcional
function advancedGreeting(firsName, lastName) {
    if (lastName !== undefined) { //verificando se o parâmetro opcional foi enviado ou não.
        console.log("Ol\u00E1 ".concat(firsName, " ").concat(lastName, ", tudo bem?"));
    }
    else {
        console.log("Ol\u00E1 ".concat(firsName, ", tudo bem?"));
    }
}
//UNION TYPES
function showBalance(balance) {
    console.log("O saldo na conta \u00E9: ".concat(balance));
}
function showCoords(obj) {
    // da interface Point.
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 20,
    z: 30
};
console.log(showCoords(coordObj));
//LITERAL TYPES
var test;
test = "testando";
console.log(test);
function showdirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showdirection("left");
// NON-NULL ASSERTION OPERATORS
var p = document.getElementById("some-p");
console.log(p.innerText); //a ! permite que possa ser acessado o elemento em algum momento, pois em algum momento ele irá receber o valor.
//isso evitará erros no typescript de que o valor virá null/undefined.
