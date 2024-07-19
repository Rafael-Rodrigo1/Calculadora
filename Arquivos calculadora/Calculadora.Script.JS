const teclasNum = [...document.querySelectorAll(".num")] 
const teclasOp = [...document.querySelectorAll(".op")]
const teclasres = document.querySelector(".res")
const resultado = document.querySelector("#resultado")
const tIgual = document.querySelector("#t_igual")
const Limpar = document.querySelector("#tLimpar")
const Apagar = document.querySelector("#tApagar")

let sinal = false
let decimal = false

teclasNum.map((el)=>{
    el.addEventListener("click",(evt)=>{
        sinal = false
        if(evt.target.innerHTML==","){
            if(!decimal){
                decimal=true
                if(resultado.innerHTML=="0"){
                    resultado.innerHTML="0,"
                }else{
                resultado.innerHTML+=evt.target.innerHTML
                }
            }
        }else{
            if(resultado.innerHTML=="0"){
                resultado.innerHTML=""
        }
       resultado.innerHTML+=evt.target.innerHTML
       }
    })
})

teclasOp.map((el)=>{
    el.addEventListener("click",(evt)=>{
        if(!sinal){
            sinal = true
              if(resultado.innerHTML=="0"){
                resultado.innerHTML=""
              }
              if(evt.target.innerHTML=="x"){
                resultado.innerHTML+="*" 
              } else{
                  resultado.innerHTML+=evt.target.innerHTML
              }
        }
    })
})

Limpar.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    resultado.innerHTML="0"
})

tIgual.addEventListener("click",(evt)=>{
    sinal=false
    decimal=false
    const res = eval(resultado.innerHTML)
    resultado.innerHTML = res
})

Apagar.addEventListener("click",(evt)=>{
let apagou = document.querySelector("#resultado").innerHTML
document.querySelector("#resultado").innerHTML = apagou.substring(0, apagou.length -1)
})

console.log(resultado.length)