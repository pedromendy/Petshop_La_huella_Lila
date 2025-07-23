function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let entrega = document.getElementById("entrega").value;
    let dni = document.getElementById("dni").value;
    let domicilio = document.getElementById("domicilio").value;
    let producto = document.getElementById("producto").value;
    
    document.getElementById("nombrei").innerHTML =nombre;
    document.getElementById("entregai").innerHTML = entrega;
    document.getElementById("dnii").innerHTML = dni;
    document.getElementById("domicilioi").innerHTML = domicilio;
    document.getElementById("productoi").innerHTML = producto;

    if (nombre === "" || entrega === "" || dni === "" || domicilio === "" || producto === "") {
      document.getElementById("resultado").innerHTML = "Por favor, complete todos los campos.";
    } else {
      document.getElementById("resultado").innerHTML = "Formulario enviado"; 
      console.log(nombre);
      console.log(entrega);
      console.log(dni);
      console.log(domicilio);
      console.log(producto);
  }
    
}
function EnviarConsulta() {
  let usuario = document.getElementById("usuario").value;
  let mensaje = document.getElementById("mensaje").value;



  if (usuario === "" || mensaje === "") {
    document.getElementById("enviado").innerHTML = "Por favor, complete todos los campos.";
  } else {
    document.getElementById("enviado").innerHTML = "Consulta Enviada"; 
    console.log(usuario);
    console.log(mensaje);
  
  }
}



// Función para detectar el tamaño de pantalla
function checkScreenSize() {
  // Obtener el ancho de la ventana
  let screenWidth = window.innerWidth;

  // Aplicar estilos diferentes según el tamaño de pantalla
  if (screenWidth <= 768) {
    // Código para dispositivos móviles
    document.body.style.backgroundColor = "lightgray";
    document.body.style.fontSize = "16px";
    // Agrega más estilos o cambios de diseño aquí
  } else {
    // Código para pantallas más grandes
    document.body.style.backgroundColor = "white";
    document.body.style.fontSize = "18px";
    // Agrega más estilos o cambios de diseño aquí
  }
}

// Llamar a la función cuando se carga la página
window.addEventListener("load", checkScreenSize);

// Llamar a la función cuando se redimensiona la ventana
window.addEventListener("resize", checkScreenSize);
