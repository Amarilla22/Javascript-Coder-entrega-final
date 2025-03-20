let productos = [ 
    {ID: 1, nombre: "papa", precio: 40, stock: 120},
    {ID: 2, nombre: "lechuga",  precio: 30, stock: 300},
    {ID: 3, nombre: "kiwi", precio: 30, stock: 200}
];

let nuevo_prod = [{}]

productos = JSON.parse(localStorage.getItem("productos")) || productos //reviso si no hay nada en loca storage para actualizar los productos

nueva_pagina()
let boton = document.getElementById("finalizar")


function nueva_pagina(){ //creacion de la nueva pagina con todos sus elementos e ids
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

    let carrito = document.createElement("button")
    carrito.textContent = "CARRITO"
    carrito.id = "carrito"
  
    listado.appendChild(sangria)
    listado.appendChild(carrito)
}

function mostrar(producto,listado){ //muestro los productos de forma dinamica

    let aux = document.createElement("li")

    aux.innerHTML = `${producto.nombre} - Precio:${producto.precio} - Stock:${producto.stock} `;

    listado.appendChild(aux)
}


boton.addEventListener("click", () => { 
    let total = 0
    let selects = document.querySelectorAll(".selector-cantidad")
    let cantidades = []
    let i=0

    selects.forEach(selects => {
        cantidades.push(parseInt(selects.value)) // obtengo los valores que selecciono el usuario
    })


    productos.forEach((productos, i) => {
        if(productos.stock >= cantidades[i]){ //compruebo que haya stock sino envio una alerta
            total += productos.precio * Number(cantidades[i])
        productos.stock -= Number(cantidades[i]) //sumo el precio total y resto el stock
        console.log(productos.stock)
        }
        else{
            alert(`No hay suficiente Stock de ${productos.nombre}`)
        }
    });
    
    nuevo_prod = productos
    localStorage.setItem("productos",JSON.stringify(nuevo_prod)) //guardo la nueva cantidad de productos 
    location.reload() //recargo la pagina para mostrar correctamente los productos

})



