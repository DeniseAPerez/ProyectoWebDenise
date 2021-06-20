"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});
var 
    FMT_MONEDA = "$0,0.00";
    
    
var forma = document.getElementById("forma"),
        salidaMenu = document.getElementById("salidaLista"),
        salidaPrecio = document.getElementById("salidaPrecio"),
        Menu = document.getElementsByName("Lista"),
        entradas = ["correo", "nombre", "telefono", "fecha"],
        salidas = ["salidaCorreo", "salidaNombre", "salidaTelefono", "salidaFecha"],
        txtFecha = forma["fecha"],salidaFecha = document.getElementById("salidaFecha"),
        MiFecha;
forma.addEventListener("submit", Enviar, false);
        
forma.addEventListener("click", validaMenu, false);
validaMenu();

function Enviar() {
    
  var fecha = new Date (txtFecha.value);
    MiFecha = (fecha.getDate()+1) + "/" + (fecha.getMonth()+1) + "/" + fecha.getFullYear();
    salidaFecha.textContent = MiFecha;
    salidaFecha.textContent = "Fecha: " + MiFecha;
    
 
  
  var nombre = forma["nombre"].value;
  var Salida = forma["salidaNombre"];
      Salida.value = "Nombre: "+ nombre;
  
    var correo = forma["correo"].value;
    var salida = forma["salidaCorreo"];
    salida.value = "Correo: " + correo;
      
  var telefono = forma["telefono"].value;
  var Salida = forma["salidaTelefono"];
      Salida.value = "Telefono: "+ telefono;  
  
}


function validaMenu() {
    var MenuSeleccionado = new Array(); 
  for (var i = 0, total = Menu.length; i < total; i++) {
    var Menus = Menu[i];
    if (Menus.checked){
      MenuSeleccionado.push(Menus.value);
    }
    
  }
  salidaMenu.textContent = MenuSeleccionado.join(", ") + ".";
  
  
}