//função regular
function multiplicar(x,y){
    return x * y
}

var a = multiplicar(4,2) //define os elementos da function
console.log(a)


function somaValores(a,b = 2, c = 6){
    var total = a + b + c
    return total
}

var f = somaValores(8,4,5);
console.log(f)

//função anonima

var infoCal = function(a,b,c){
    return a + b + c
}

console.log(infoCal(2,5,7))

//arrow function

const soma = (num1,num2) =>{
    return num1 + num2 
}

console.log(soma(3,6))

const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * num);
console.log(valores)
//fim

var listaProdutos = ["geladeira","fogão","air fryer"];
var listaCaps = listaProdutos.map(primeiraCaps);

function primeiraCaps(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}

console.log(listaCaps)


