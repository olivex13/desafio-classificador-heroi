// Desafio Classificador de nível de Herói - Lógica - Dio
// Douglas de Oliveira Silva -  10/11/2023

let nomeHeroi = ["Tony Stark" , "Homem Formiga" , "Groot" , "Loki" ,  "Thor" , "Senhor das Estrelas" , "Hulk" , "Thanos"]
let qntXp = [6540, 750, 3450, 1200, 7500, 8600, 9500, 12000]


for (let i = 0; i < nomeHeroi.length; i++){
    let heroi = nomeHeroi[i]
    let xp = qntXp[i]
    let nivel

    if (xp < 1000){
        nivel = "Ferro"
    }
    else if (xp >= 1001 && xp <= 2000){
        nivel = "Bronze"
    }
    else if (xp >= 2001 && xp <= 5000){
    nivel = "Prata"
    }
    else if (xp >= 5001 && xp <= 7000){
        nivel = "Ouro"
    }
    else if (xp >= 7001 && xp <= 8000){
        nivel = "Platina"
    }
    else if (xp >= 8001 && xp <= 9000){
        nivel = "Ascendente"
    }
    else if (xp >= 9001 && xp <= 10000){
        nivel = "Imortal"
    }
    else if (xp >= 10001){
        nivel = "Radiante"
    }

    console.log(`O Heroi ${heroi} está no nivel ${nivel}`)
}