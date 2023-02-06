// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	Al presionar el botón pedir 5 números e informar la suma acumulada
	y el promedio.
*/

function mostrar()
{

	let numeroIngresado;
	let promedio; 
	let i;

	numeroIngresado = 0;
	i = 0;
	while (i < 5) {	
		// acumulo los números ingresados, súmandolos
		numeroIngresado += parseInt(prompt("Ingrese 5 números de los cuales quiere obtener el promedio"));
		document.getElementById("txtIdSuma").value = numeroIngresado;
		i++;
	}
	// una vez finalizada la carga por parte del usuario de 5 números aleatorios, los divide por 5.
	promedio = numeroIngresado / 5;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN