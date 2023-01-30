/*
Alumno: Nicolás Gabriel Hruszczak

Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe = parseFloat(document.getElementById("txtIdImporte").value);
	let descuento = importe * 25 / 100;
	let resultado = importe - descuento;

	document.getElementById("txtIdResultado").value = resultado;
}

 