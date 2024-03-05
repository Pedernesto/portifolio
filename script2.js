let RlSync = require('readline-sync')
let nome = RlSync.question("Qual o seu nome?\n") 
console.log(`Olá, ${nome}`)

let idade = RlSync.question("Qual a sua idade?\n") 
console.log(`Sua idade é: ${idade}`)