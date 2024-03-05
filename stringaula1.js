var nome = "Pedro Ernesto"
var x = nome.length
console.log(x);

resultado = x > 15 ? " Obrigado" : "Por favor preencha seu nome completo.";
console.log(resultado)

var res = nome.toLocaleLowerCase();
console.log(res)

var jogo = "Barcelona vs Real melhor time";
var posiçao = jogo.indexOf("Real"); //indexof acha a posição de palavras
console.log(posiçao);

var cortado = jogo.slice(0,9) //sem o segundo elemento em splice, ele tira tudo antes do primeiro elemento apenas
console.log(cortado)

var val = jogo.includes("Real");
console.log(val)

var str1 = "Hello";
var str2 = " Turma";
var str3 = str1.concat(str2)
console.log(str3)

var frase = "       Olá, você está aprendendo javascript";
console.log(frase.trim());

var num = "1,2,3,4,5,6,7,8";
var arr = num.split(",");
console.log(arr);

//sub string

var s = "JavaScript e Python"
var pos1 = s.indexOf("Python")
console.log(pos1)

var novaString = s.substring(13,19)
console.log(novaString)

var frase = "Olá mundo"
var frase1 = frase.includes("Olá")
var frase2 = frase.slice(0,4)
var frase3 = "Pessoal"
var frase4 = frase3.toLocaleUpperCase()
var frase5 = frase2.concat(frase4)
console.log(frase)
console.log(frase1)
console.log(frase2)
console.log(frase5) //forma q eu consegui sozinho 

//forma correta
var dv = "Olá mundo"
if(frase.startsWith("Olá")){
    let sub = dv.substring(4);
    let novaDv = sub.replace("mundo", "pessoal")
    let novaDvCaps = novaDv.toLocaleUpperCase();
    console.log(novaDvCaps)
}

var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";
const parametros = url.split("?")[1]
console.log(parametros)
const valores = parametros.split("&");


for(let i = 0; i <valores.length; i++){
    if(valores[i].startsWith("atores=")){
        valores[i] = "atores=" + valores[i].substring(7).toUpperCase();
    }
}
console.log(valores)