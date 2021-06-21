"use strict";
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP});

var forma = document.getElementById("forma"),
    salidaLista = document.getElementById("salidaLista"),
    salidaPrecio = document.getElementById("salidaPrecio"),
    Lista = document.getElementsByName("Lista"),
    entradas = ["correo", "nombre", "telefono", "fecha"],
    salidas = ["salidaCorreo", "salidaNombre", "salidaTelefono", "salidaFecha"],
    txtFecha = forma["fecha"], salidaFecha = document.getElementById("salidaFecha"),
    MiFecha;
forma.addEventListener("submit", Enviar, false);

forma.addEventListener("click", validaLista, false);
validaMenu();

function Enviar() {

    var fecha = new Date(txtFecha.value);
    MiFecha = (fecha.getDate() + 1) + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    salidaFecha.textContent = MiFecha;
    salidaFecha.textContent = "Fecha: " + MiFecha;


    var nombre = forma["nombre"].value;
    var Salida = forma["salidaNombre"];
    Salida.value = "Nombre: " + nombre;

    var correo = forma["correo"].value;
    var salida = forma["salidaCorreo"];
    salida.value = "Correo: " + correo;

    var telefono = forma["telefono"].value;
    var Salida = forma["salidaTelefono"];
    Salida.value = "Telefono: " + telefono;

    prespuesto();

}



//Función de presupuesto

function prespuesto() {

    var cargadores = document.getElementById("cargadoresNum").value;
    let pcargadores = 0;
    var total = [];

    let string = "<h4>Presupuesto:</h4>";
    if (cargadores > 0) {
        pcargadores = (cargadores) * 70;
        string += "<p>Cargadores :$" + pcargadores + "</p>";
    }
    total[0] = parseInt(pcargadores);

    var usb = document.getElementById("Memoria16").value;
    var select = document.getElementById("selectTipoUSB");
    let tipo = select.options[select.selectedIndex].text;
    let pUSB = 0;

    if (usb > 0) {
        if (tipo == 'Memoria USB 8GB $90') {
            pUSB = usb * 90;
        } else if (tipo == 'Memoria USB 16GB $120') {
            pUSB = usb * 120;
        } else if (tipo == 'Memoria USB 32GB $160') {
            pUSB = usb * 160;
        } else if (tipo == 'Memoria USB 64GB $210') {
            pUSB = usb * 210;
        }
        string += "<p>Memorias USB :$" + pUSB + "</p>";
    }
    total[1] = parseInt(pUSB);

    var sd = document.getElementById("MemoriaS").value;
    var SDselect = document.getElementById("selectTipoSD");
    let tipoSD = SDselect.options[SDselect.selectedIndex].text;
    let pSD = 0;

    if (sd > 0) {
        if (tipoSD == 'Memoria microSD 8GB $90') {
            pSD = sd * 90;
        } else if (tipoSD == 'Memoria microSD 16GB $120') {
            pSD = sd * 120;
        } else if (tipoSD == 'Memoria microSD 32GB $160') {
            pSD = sd * 160;
        } else if (tipoSD == 'Memoria microSD 64GB $210') {
            pSD = sd * 210;
        }
        string += "<p>Memorias SD :$" + pSD + "</p>";
    }
    total[2] = parseInt(pSD)

    let aux = 0;
    for (let i = 0; i < 3; i++) {
        aux += total[i];
    }
    string += "<p>Presupuesto total:$" + aux + "</p>";

    document.getElementById("presupuesto").innerHTML = string;
}


