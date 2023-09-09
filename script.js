/* ***********
# Escrevendo as classes de um Jogo

**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia
  guerreiro atacou usando espada
 
************* */ 

class Hero {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atack () {
        if (this.tipo === 'mago') {
            return (`O(A) heroi(na) ${this.tipo} ${this.nome} atacou usando magia!`);
        } 
        else if (this.tipo === 'guerreiro') {
            return (`O(A) heroi(na) ${this.tipo} ${this.nome} atacou usando espada!`);
        } 
        else if (this.tipo === 'monge') {
            return (`O(A) heroi(na) ${this.tipo} ${this.nome} atacou usando artes marciais!`);
        } 
        else if (this.tipo === 'ninja') {
            return (`O(A) heroi(na) ${this.tipo} ${this.nome} atacou usando shuriken!`);
        } 
        else {
            return (`O ${this.tipo} ${this.nome} não é um heroi e não sabe atacar!`)
        }
    }
}

let hero = new Hero('Loki', 174, 'mago');
let hero2 = new Hero('Warlord', 158, 'guerreiro');
let hero3 = new Hero('Monge de Ferro', 167, 'monge');
let hero4 = new Hero('Elektra', 183, 'ninja');
let hero5 = new Hero('Coringa', 165, 'sem arma');



console.log(hero.atack());

console.log(hero2.atack());

console.log(hero3.atack());

console.log(hero4.atack());

console.log(hero5.atack());


