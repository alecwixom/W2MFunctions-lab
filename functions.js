let pikachuHp = 100
let pikachuAttack = 30

let shieldonHp = 120
let shieldonAttack = 26



//returns a boolean: true if defender survives attack from attacker
function isAlive(defenderHp) {

    if (defenderHp > 0){
        return true
    }

    return false
}

if (isAlive(pikachuHp)){
    console.log('Pikachu lives!')
}else {
    console.log('Pikachu is no more.')
}


const attack = (defenderHp, attackerAttack) => defenderHp - attackerAttack
const diceRollMaker = () => Math.floor(Math.random() * 6 + 1)

const diceRoll = diceRollMaker()

for (let i = 0; i < diceRoll; i++) {

    if (isAlive(pikachuHp)){
        console.log('Shieldon attacks Pikachu!');
        pikachuHp = attack(pikachuHp, shieldonAttack)
        console.log('Pikachu HP at ' + pikachuHp);
    }else {
        break;
    }
}

if (isAlive(pikachuHp)) {
    console.log('Pikachu has survived the onslaught: he uses Mega Thunder Cannon and wins.');
} else {
    console.log('Shieldon has won. He stands in triumph over the gory scene');
}