var pais = "Brasil";

if(pais != "Brasil"){
    console.log("Você é estrangeiro");
}else{
    console.log("Você é brasileiro")
}

var idade = 22

//dá pra usar || ++ -- % && etc

if(idade < 16){
    console.log("Você não vota")
}else if (idade < 18){
    console.log("Voto opcional")
}else{
    console.log("Voto obrigatório")
}



switch ("Suco") {
    case "Café": 
        console.log("O café custa R$4,50")
        break;
    case "Leite":
        console.log("O leite custa R$2,50")
        break;
    case "Chá": 
        console.log("O chá custa R$3,50")
        break;

    default:
        console.log("Essa bebida náo está disponível")
        break;
};