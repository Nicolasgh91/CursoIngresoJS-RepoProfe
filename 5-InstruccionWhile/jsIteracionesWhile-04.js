// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	al presionar el botón pedir un número entre 0 y 9 inclusive.
*/

function mostrar()
{
	let numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while (numeroIngresado > 10 || numeroIngresado < 0) {
		
		numeroIngresado = prompt("ingrese un número entre 0 y 10.");
	} 

} //FIN DE LA FUNCIÓN