let contenedor = document.querySelector(".contenedor-app")

let disminuir = document.getElementById("disminuir")

let button = document.createElement("button")

let mensaje = document.createElement("p")

button.textContent = "incrementar"

let incremento = 0

button.addEventListener("click", () =>{
    incremento++
    mensaje.textContent = incremento
    contenedor.appendChild(mensaje)
})

disminuir.addEventListener("click",() =>{
incremento--
mensaje.textContent = incremento
contenedor.appendChild(mensaje)

})

contenedor.appendChild(button)