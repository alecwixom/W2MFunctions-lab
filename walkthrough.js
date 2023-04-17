let pikachuHp = 100

// Turns pikachuHp from a number to a string
pikachuHp = String(pikachuHp)

let shieldonHp = 120

let theWinnerIs = "The winner: is Pikachu!"

theWinnerIs = theWinnerIs.replace('Pikachu','Shieldon')

console.log(theWinnerIs);

if(theWinnerIs.includes('Pikachu')){
    console.log('Pikachu is epic!');
}else{
    console.log('Pikachu, you let me down...');
}

//take the string theWinnerIs and convert it to this-is-kebab-case

let kebabCase = theWinnerIs.replace(':', '')
kebabCase = kebabCase.replace('!', '')
kebabCase = kebabCase.toLowerCase()

//Way 1
// kebabCase = kebabCase.replaceAll(' ','-')

//Way 2
// let kebabCaseWordArray = kebabCase.split(' ')
// kebabCaseWordArray = kebabCaseWordArray.join('-')

//Way 3


//the-winner-is-shieldon
console.log(kebabCaseWordArray);