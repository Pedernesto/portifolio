var numeros = [1,2,3,4,5,6,7,8,9,10];

var resultado = numeros.filter(item => item % 2 == 0);

console.log(resultado);

var numerosFiltrados = numeros.filter(
    function(valor){
        return valor > 5;
    }
);

console.log(numerosFiltrados);

function buscarValores(valor){
    return valor < 5
}

var numerosEncontrados = numeros.filter(buscarValores)

console.log(numerosEncontrados)

var r1 = numeros.filter(valor => valor > 5)

console.log(r1);

var maparr = numeros.map(function(valor){
    return valor * 2
})

console.log(maparr)

//tb tem reduce e forEach

var carro = [{modelo: 'Audio A3' , marca: 'Audi', ano: 2020},
{modelo: 'Compass' , marca: 'Jeep', ano: 2021}]

for (let caracteristica in carro){
    console.log(carro[caracteristica])
}

for (let c of carro){
console.log(c.ano)
}


var c = 1;
while (c <= 10){
    console.log(c);
    c++
}

var t = 1

do{
    console.log(t);
    t++
}while(t < 1)
//do while vai se executar pelo menos umma vez independentemente das condições
