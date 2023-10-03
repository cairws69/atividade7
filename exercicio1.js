import PromptSync from "prompt-sync"
const prompt = PromptSync()

function soma(a,b){
    var res = a+b
    return res
}
function sub(a,b){
    var res = a-b
    return res
}
function multi(a,b){
    var res = a*b
    return res
}
function div(a,b){
   var res = a/b
    return res
}
function calcular(a,b,callback){
   var res;
    res= callback(a,b);
    return res
}

console.log("Digite dois valores: ")
 const a = parseInt(prompt("Numero 1: "))
 const b = parseInt(prompt("Numero 2: "))

    console.log("Digite a operacao desejada: ")
    var op = prompt("Digite +,-,*,/  ")
    let res;
    switch(op) {
        case '+':
        res = calcular(a,b,soma)
        break;
        case '-':
        res = calcular(a,b,sub)
        break;
        case '*':
           res =  calcular(a,b,multi)
            break;
            case '/':
             res = calcular(a,b,div)
                break;
                default:
                   console.log("Erro!!")
    }
    
    console.log("Resultado: " + res);