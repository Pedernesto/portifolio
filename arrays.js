var valores = [8,1,7,2,9];
console.log(valores[0]);

console.log("Posição do número 3: " + valores.indexOf(8)) //mostra a posição do elemento

valores.push(4) //acrescenta no final
console.log(valores)

valores.pop() //remove o ultimo elemento
console.log(valores)

console.log(valores.join(' ')); //coloca caracteres eu acho?

console.log("array invertido: " + valores.reverse()); //reverte

var valores2 = [10,20,30,40,50]
 
var retirados = valores2.shift(); //retira o primeiro, ou separa sozinho
console.log(retirados)


for (var pos = 0 ; pos < valores.length; pos++){
    console.log("Posição: " + pos + " Valor: " + valores[pos]);
}

//media de numeros array
var soma = 0
for (var pos = 0 ; pos < valores.length; pos++){
    soma += valores[pos];
    
    var media = soma/valores.length;
    
    console.log(media);
}

var arr2 = [2,4,6,8,10,12];

arr2.splice(2,3); //primeiro a posição, depois a quantidade de elementos pra tirar, isso é splice

console.log(arr2);

var desgraça = ["danilo","nilo","dengue"]
desgraça.splice(2,1,"cura da dengue"); //se adicionar uma string no terceiro elemento do splice, ele ira substituir 
desgraça.unshift("doideira") //unshift adiciona um elemento na primeira posição do array

console.log(desgraça);
