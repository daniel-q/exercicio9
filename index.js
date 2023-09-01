const prompt = require("prompt-sync")();
const operacoes = ["+","-","*","/"]
let operacao
let value1
let value2
let resultado
let resto
do{
  operacao = prompt("selecione a operação usando o simbolo (+,-,*,/)")
  if(!operacoes.includes(operacao)){
    console.log("operação invalida")
  }
  
}while(!operacoes.includes(operacao))
value1 = parseFloat(prompt("digite o primeiro valor:"))
value2 = parseFloat(prompt("digite o primeiro valor:"))

switch(operacao){
  case "+":
    resultado = value1+value2
    console.log("O resultado da soma é: "+resultado)
    break
  case "-":
    resultado = value1-value2
    console.log("O resultado da subtração é: "+resultado)
    break
  case "*":
    resultado = value1*value2
    console.log("O resultado da multiplicação é: "+resultado)
    break
  case "/":
    if(value2!=0){
      resultado = Math.trunc(value1/value2)
      resto = value1%value2
      console.log("O resultado da divisão é: "+resultado+" e o resto é: "+resto)}
    else{
      console.log("Vocé não pode dividir por zero")
    }
    break
}
