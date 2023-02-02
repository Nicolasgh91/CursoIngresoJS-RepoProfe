// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	Al presionar el Botón, mostrar un número Random
	del 1 al 10 inclusive.
*/

function mostrar()
{

	let numeroRandom;
	numeroRandom = (Math.random() * 10 + 1).toFixed(2);

	alert(numeroRandom)
}//FIN DE LA FUNCIÓN