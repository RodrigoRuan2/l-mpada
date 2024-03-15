const lampada = document.querySelector("img")
const span = document.querySelector("span")

let lampadaEstaAcesa = false

lampada.addEventListener('click', () => {
    lampadaEstaAcesa =!lampadaEstaAcesa

    if(lampadaEstaAcesa){
        lampada.src = './lampada/lampada acesa.jpeg'
        span.className = 'on'
        span.textContent = 'acesa'
    }
    else {
        lampada.src ='./lampada/lampada apagada.jpeg'
        span.className = 'off'
        span.textContent = 'apagada'
    }
})
