class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque genérico';
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

let heroiA = new Heroi("Geralt", 40, "Mago");
let heroiB = new Heroi("Ciri", 16, "Guerreiro");
let heroiC = new Heroi("Jaskier", 30, "Musico");

heroiA.atacar();
heroiB.atacar();
heroiC.atacar();
