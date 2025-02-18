let productos = [ 
    {ID: 1, nombre: "papa", precio: 30, stock: 120},
    {ID: 2, nombre: "lechuga",  precio: 30, stock: 300},
    {ID: 3, nombre: "kiwi", precio: 30, stock: 200}
];

nueva_pagina()
let boton = document.getElementById("finalizar")


function nueva_pagina(){
    let listado = document.getElementById("contenedor")

    for(const producto of productos){
        let max=producto.stock
        let selector = document.createElement("select")
        selector.classList.add("selector-cantidad");
        mostrar(producto,listado)

        for(let i=0; i <= max; i++){
            let opcion = document.createElement("option")
            opcion.value = i
            opcion.textContent = i
            selector.appendChild(opcion)
        }
        let sangria = document.createElement("br")
        listado.appendChild(selector)
        listado.appendChild(sangria)

    }

    let boton = document.createElement("button")

    boton.textContent = "Confirmar compra"
    boton.id = "finalizar"

    let sangria = document.createElement("br")
    listado.appendChild(sangria)
    listado.appendChild(boton)

}

function mostrar(producto,listado){

    let aux = document.createElement("li")

    aux.innerHTML = `${producto.nombre} - ${producto.precio}`;

    listado.appendChild(aux)

}


boton.addEventListener("click", () => {
    let total = 0
    let selects = document.querySelectorAll(".selector-cantidad")
    let cantidades = []
    let i=0

    selects.forEach(selects => {
        cantidades.push(selects.value)
    })

    for(const producto of productos){
        total += producto.precio * cantidades[i];
        producto.stock -= cantidades[i];
        i++
    }

    let texto_final = document.getElementById("final")
    let precio_final = document.createElement("h1")
    
    precio_final.textContent = "El precio final es de: "+ total

    texto_final.appendChild(precio_final)
})

