let cuentas = [ 
    {nombre: "Santiago", clave: "12345"},
    {nombre: "Brisa", clave: "54321"}
];

let usuario
let boton = document.getElementById("boton")
let nombre,clave

boton.addEventListener("click",function(){
    
    nombre = document.getElementById("nombre").value
    clave = document.getElementById("clave").value
    
    console.log("hola usuario "+ nombre)
    console.log("su clave es "+ clave)


    if(usuario = cuentas.find(cuentas => cuentas.nombre == nombre)){
        if(usuario.clave == clave){
            window.location.href = "compra.html"
        }
        else{
            alert("contraseña incorrecta")
        }
    }
    else{
        alert("Nombre de usuario incorrecto")
    }

    
})

