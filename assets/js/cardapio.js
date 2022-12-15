
var botaoAdic = document.querySelector(".botaoAdc") 

var arroz = document.getElementById("arroz")
var pure = document.getElementById("pure")
var feijao = document.getElementById("feijao")
var ovo = document.getElementById("ovo")
var batata = document.getElementById("batata")
var tomate = document.getElementById("tomate")
var cenoura = document.getElementById("cenoura")
var panqueca = document.getElementById("panqueca")
var alface = document.getElementById("alface")
var frango = document.getElementById("frango")

let veri;
var caloriasfi = document.getElementById("total")
var caloriasfinal = document.getElementById("caloriasf") 
botaoAdic.addEventListener("click", function(){
    
    if(veri == true){
        caloriasfinal.innerHTML = ''
        caloriasfi.innerHTML = ''
        veri = false
    }
    
    let calorias = arroz.value * 32.00 + frango.value * 1.59 + feijao.value * 0.69 + batata.value * 0.77 + tomate.value * 0.15 + pure.value * 1.15 + panqueca.value * 2.89 + ovo.value * 1.46 + alface.value * 0.11 + cenoura.value * 0.30  
    if (arroz.value > 0){
        caloriasfinal.innerHTML += `
            <p>Arroz cozido = ${arroz.value}g</p>`
    }
    if (frango.value > 0){
        caloriasfinal.innerHTML += `
            <p>Filé de frango grelhado = ${frango.value}g</p>`
    }
    if (feijao.value > 0){
        caloriasfinal.innerHTML += `
            <p>Feijao cozido = ${feijao.value}g</p>`
    }
    if (batata.value > 0){
        caloriasfinal.innerHTML += `
            <p>Batata doce cozida = ${batata.value}g</p>`
    }
    if (tomate.value > 0){
        caloriasfinal.innerHTML += `
            <p>Tomate cereja = ${tomate.value}g</p>`
    }
    if (pure.value > 0){
        caloriasfinal.innerHTML += `
            <p>Purê de batata = ${pure.value}g</p>`
    }
    if (panqueca.value > 0){
        caloriasfinal.innerHTML += `
            <p>Panqueca de carne moída = ${panqueca.value}g</p>`
    }
    if (ovo.value > 0){
        caloriasfinal.innerHTML += `
            <p>Ovo cozido = ${ovo.value}g</p>`
    }
    if (alface.value > 0){
        caloriasfinal.innerHTML += `
            <p>Alface = ${alface.value}g</p>`
    }
    if (cenoura.value > 0){
        caloriasfinal.innerHTML += `
            <p>Cenoura cozida = ${cenoura.value}g</p>`
    }

    veri = true

    
    if (calorias > 0){
        caloriasfi.innerHTML = "Total de calorias: " + calorias.toFixed(2)
    }

 

})


var botaoLimp = document.querySelector(".botaoLimp") 

botaoLimp.addEventListener("click", function(){
    feijao.value = ''
    pure.value = ''
    tomate.value = ''
    frango.value = ''
    alface.value = ''
    ovo.value = ''
    arroz.value = ''
    cenoura.value = ''
    panqueca.value = ''
    batata.value = ''
    calorias = ''
    caloriasfi.innerHTML = ''
    caloriasfinal.innerHTML = ''
})
