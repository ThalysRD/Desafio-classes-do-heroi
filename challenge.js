class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

     atacar = () => {
        let ataque;
        switch(this.tipo){
            case "Mago":
                ataque = "magia"
                break
            case "Guerreiro":
                ataque = "espada"
                break
            case "Monge":
                ataque = "artes marciais"
                break
            case "Ninja":
                ataque = "shuriken"    
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}

const thalys = new heroi("Thalys", 22 ,"Guerreiro")
thalys.atacar()