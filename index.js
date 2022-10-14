const letterCharacters = [
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];
const numberCharacters = [ 
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
]
const symbolCharacters = [
    "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"
]



const numberEl = document.getElementById("password-length")

// listen for too big number
numberEl.addEventListener("input", ifTooLong)

function ifTooLong() {
    if (numberEl.value > 15) {
        numberEl.value = 15;
        alert("Maximum password length: 15 characters")
    }
}

// Passwords creation
const samplePassword1El = document.getElementById("sample-password-1")
const samplePassword2El = document.getElementById("sample-password-2")
const ifNumbersEl = document.getElementById("numbers")
const ifSymbolsEl = document.getElementById("symbols")

// called in HTML
function generateSamplePasswords() {
    samplePassword1El.textContent = ""
    samplePassword2El.textContent = ""
    const passwordLength = numberEl.value
    for (let i = 1;  i <= passwordLength; i ++) {
        samplePassword1El.textContent += randomCharacter()
        samplePassword2El.textContent += randomCharacter()
    }
}

/* that is the first version, which I changed quickly

 function randomCharacter() {
     if (ifNumbersEl.checked && ifSymbolsEl.checked) {
         let basicCharacters = letterCharacters.concat(numberCharacters, symbolCharacters)
         return basicCharacters[Math.floor(Math.random() * basicCharacters.length)]
     } else if (ifNumbersEl.checked) {
         let basicCharacters = letterCharacters.concat(numberCharacters)
         return basicCharacters[Math.floor(Math.random() * basicCharacters.length)]
     } else if (ifSymbolsEl.checked) {
         let basicCharacters = letterCharacters.concat(symbolCharacters)
         return basicCharacters[Math.floor(Math.random() * basicCharacters.length)]
     } else {
         let basicCharacters = letterCharacters
         return basicCharacters[Math.floor(Math.random() * basicCharacters.length)]
    }
 }
*/

// new, shorter version of function
function randomCharacter() {
    let basicCharacters = [].concat(letterCharacters);
    if (ifNumbersEl.checked) {
        basicCharacters = basicCharacters.concat(numberCharacters)
    }
    if (ifSymbolsEl.checked) {
        basicCharacters = basicCharacters.concat(symbolCharacters)
    } 
    return basicCharacters[Math.floor(Math.random() * basicCharacters.length)]
}


// copy functions, called in HTML
function copyPassword1() {
    navigator.clipboard.writeText(samplePassword1El.textContent)
}
function copyPassword2() {
    navigator.clipboard.writeText(samplePassword2El.textContent)
}
