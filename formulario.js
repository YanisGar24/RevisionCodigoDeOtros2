//El codigo funciona, pero tiene algunos errores que aun no podemos encontrar/corregir

/*Jan: El nombre de la clase en html no coincide con la variable
La clase esta mal utilizada
var formulario = document.querySelector("#form")*/
var formulario = document.querySelector(".form")

formulario.onsubmit = function(e) {

 //J: Lo correcto es preventDefault, si no se pone no jala bien la info
  e.preventDefault();
  
  //J: Variables que saca del form
  var n = formulario.elements[0] //J: elmento 1 de la lista..? nombre
  var e = formulario.elements[1]//J: elmento 2 de la lista..? edad
  var na = formulario.elements[2] //J: elmento 3 de la lista..? nacionalidad

  // var que ya tienen un valor en el js
  var nombre = n.value //J: el valor del form se agrega a nombre
  var edad = e.value
  var i = na.selectedIndex
  var nacionalidad = na.options[i].value


  console.log(nombre, edad)
  console.log(nacionalidad)


  if (nombre.length === 0) {
    n.classList.add("error")//**Mafer falta eliminar la clse error  */
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error")
  }

if (nombre.length > 0 && (edad >= 18 && edad <= 120) ) { //J: Se agregó el = 
  agregarInvitado(nombre, edad, nacionalidad)
  }
}

/*var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);*/ //eL BOTTON DE BORRAR ESTA DOBLE, SE QUEDA EL DE LA FUNCIÓN

function agregarInvitado(nombre, edad, nacionalidad) {
/*J: Funcional. Pero puede ser simplificado (sacado de google)*/
  /*if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }*/

    var nacionalidades = {
      "ar": "Argentina",
      "mx": "Mexicana",
      "vnzl": "Venezolana",
      "per": "Peruana"
  };

  nacionalidad = nacionalidades[nacionalidad] || nacionalidad;

var lista = document.getElementById("lista-de-invitados") /* Ya agregue el id en el HTML*/

var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")/**Mafer metodo incorrecto para añadir  */
lista.appendChild(elementoLista)

//J: Error. Esto se declara 2 veces 

/*var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
*/
function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
//J: botonBorrar.id = "boton-borrar"
botonBorrar.classList.add("boton-borrar"); // J:  Usa una clase en lugar de ID
elementoLista.appendChild(corteLinea.cloneNode()); //J: Reutiliza el corte de línea
//var corteLinea = document.createElement("br")
//elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
// this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }


  console.log(lista);
}