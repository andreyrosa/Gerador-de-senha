const MaximoNumeroDeCaracteres = document.getElementById
('MaximoNumeroDeCaracteres')
const MaximoNumeroDeNumer = document.getElementById
('MaximoNumeroDeNumer')
const IncluirMaiusculasElement = document.getElementById
('IncluirMaiusculas')
const IncluirNumerosElement = document.getElementById('IncluirNumeros')
const IncluirSimbolosElement = document.getElementById('IncluirSimbolos')
const form = document.getElementById('passwordGeneratorForm')
const passwordDisplay = document.getElementById('passwordDisplay')

const UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
const LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
const NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
const SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
    arrayFromLowToHigh(58, 64)
).concat(
    arrayFromLowToHigh(91, 96)
).concat(
    arrayFromLowToHigh(123, 126)
)

MaximoNumeroDeNumer.addEventListener('input', syncMaximoNumeroDeNumer)
MaximoNumeroDeCaracteres.addEventListener('input', syncMaximoNumeroDeNumer)

form.addEventListener('submit', e => {
    e.preventDefault()
    const MaximoCaracteres = MaximoNumeroDeNumer.value
    const IncluirMaiusculas = IncluirMaiusculasElement.checked
    const IncluirNumeros = IncluirNumerosElement.checked
    const IncluirSimbolos = IncluirSimbolosElement.checked
    const password = generatePassword(MaximoCaracteres, IncluirMaiusculas, IncluirNumeros, IncluirSimbolos)
    passwordDisplay.innerText = password
})

function generatePassword(MaximoCaracteres, IncluirMaiusculas, IncluirNumeros, IncluirSimbolos) {
    let CharCodes = LOWERCASE_CHAR_CODES
    if (IncluirMaiusculas) CharCodes = CharCodes.concat(UPPERCASE_CHAR_CODES)
    if (IncluirNumeros) CharCodes = CharCodes.concat(NUMBER_CHAR_CODES)
    if (IncluirSimbolos) CharCodes = CharCodes.concat(SYMBOL_CHAR_CODES)
    
    const passwordCharacters = []
    for (let i = 0; i < MaximoCaracteres; i++) {
        const characterCode = CharCodes[Math.floor(Math.random() * CharCodes.length)]
        passwordCharacters.push(String.fromCharCode(characterCode))
    }
    return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}

function syncMaximoNumeroDeNumer(e) {
    const value = e.target.value
    MaximoNumeroDeNumer.value = value
}

