import { question } from "readline-sync";

/*Leia o valor do raio de uma circunferĂȘncia, calcule e escreva seu comprimento.
(c = 2 * p * r)*/

console.log('Calcule o comprimento de uma circunferĂȘncia:')

const raio = Number(question('Raio da circunferencia: '))
const pi = 3.14

const circ = raio * pi * 2

console.log(`Comprimento da circunferencia: ${circ.toFixed(2)}`)