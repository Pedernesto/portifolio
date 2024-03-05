// Definição da classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }
  
    trabalhar() {
      console.log(`${this.nome} está realizando suas tarefas como ${this.cargo}.`);
    }
  }
  
  // Definição da classe Gerente, que herda de Funcionario
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      console.log(`${this.nome} está gerenciando o departamento ${this.departamento}.`);
    }
  }
  
  // Definição da classe Desenvolvedor, que herda de Funcionario
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      console.log(`${this.nome} está programando na linguagem ${this.linguagem}.`);
    }
  }
  
  // Criando instâncias de Gerente e Desenvolvedor
  const gerente1 = new Gerente('Pedro', 28, 'Gerente de Projetos', 'TI');
  const desenvolvedor1 = new Desenvolvedor('Bianca', 29, 'Desenvolvedora', 'JavaScript');
  
  // Chamando os métodos apropriados para cada funcionário
  gerente1.seApresentar();
  gerente1.trabalhar();
  gerente1.gerenciar();
  
  console.log('-');
  
  desenvolvedor1.seApresentar();
  desenvolvedor1.trabalhar();
  desenvolvedor1.programar();