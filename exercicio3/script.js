const pokemon1 = {
    nome: "Bulbasaur",
    tipo: "Grama",
    nivel: 5,
};

pokemon1.ataques = []

const copiaPokemon = { ...pokemon1 }
copiaPokemon.nome = "Squirtle"
copiaPokemon.tipo = "Agua"

const ataque = {
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
}
const ataque2 = {
    ataque: "Folha Navalha",
    dano: 45,
    precisao: 100,
    tipo: "grama"
}
const ataque3 = {
    ataque: "Jato de Água",
    dano: 40,
    precisao: 100,
    tipo: "Água"
}

pokemon1.ataques.push(ataque)
copiaPokemon.ataques = [...pokemon1.ataques]

pokemon1.ataques.push(ataque2)
copiaPokemon.ataques.push(ataque3)

console.log(pokemon1,copiaPokemon)