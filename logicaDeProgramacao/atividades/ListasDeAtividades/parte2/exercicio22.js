const rl = require('readline-sync')

const idade = Number(rl.question('Digite sua idade: '))

if (idade >= 18) {
    console.log('Pode dirigir')
} else {
    console.log('Não pode dirigir')
}

