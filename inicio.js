let cuentas = [ 
    {mail: "santidaniamari1@gmail.com", clave: "12345"},
    {mail: "Brisasanchez@gmail.com", clave: "54321"}
]; //cuentas registradas para comprar

let usuario
let boton = document.getElementById("boton")
let mail,clave



 boton.addEventListener('click', function(event) {
    event.preventDefault(); //evito que la pagina se recargue
    

    mail = document.getElementById("mail").value
    clave = document.getElementById("clave").value
    
    if(usuario = cuentas.find(cuentas => cuentas.mail == mail)){
        if(usuario.clave == clave){ // si el usuario es valido inicia el proceso de enviar el mail

            boton.textContent = 'enviando...';

            enviarmail(mail)
        setTimeout(() => { // tiempo hasta que se ejecute la api para enviar el mail
            window.location.href = "compra.html"  
        }, 4000);
            
        }
        else{
            alert("contraseña incorrecta")
        }
    }
    else{
        alert("mail de usuario incorrecto")
    }

    
})

function enviarmail(email){
    let mensaje = {
        to_email: email,
        message: "Alguien ah iniciado sesion en tu cuenta. Si no eres tu, cambia la contraseña"
    }

    const serviceID = 'default_service';
    const templateID = 'template_f9vruqx';

    emailjs.send(serviceID, templateID, mensaje)
    .then(function(response) {
        console.log("Correo enviado con éxito!", response.status, response.text);
    }, function(error) {
        console.error("Error al enviar el correo:", error);
    });
}
