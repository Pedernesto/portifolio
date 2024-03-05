class pessoa{

    constructor(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    }

    falar(){
        console.log("Olá " + this.nome)
    }

    get nomeCompleto(){
        console.log("Olá " + this.nome + " " + this.sobrenome)
    }

}

p1 = new pessoa("Fábio","Silva")
p1.falar();
p1.nomeCompleto;

class dispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log("Já está ligado")
            return;
        }
        this.ligado = true;
    }

}

class SmartPhone extends dispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;

    }

}

var s1 = new SmartPhone("Samsung","Preto","A71");
console.log(s1)
s1.ligar()
s1.ligar();