// Alumno: Nicolás Gabriel Hruszczak 
/*	Consigna:
	Al presionar el botón pedir números hasta que el usuario quiera,
	sumar los que son positivos y multiplicar los negativos.
*/
function mostrar()
{
	let numeroIngresado;
	let quiereIngresarMasNumeros;
	let acumuladorPositivos;
	let acumuladorNegativos;

	acumuladorPositivos = 0;
	acumuladorNegativos = 1;
	numeroIngresado = 0;
	quiereIngresarMasNumeros = true;

	while (quiereIngresarMasNumeros) {
		
		numeroIngresado = parseFloat(prompt("Ingrese un número: "));
		
		if (numeroIngresado < 0) {
			acumuladorNegativos = acumuladorNegativos * numeroIngresado
		} else if (numeroIngresado > 1) {
			acumuladorPositivos += numeroIngresado;
		} else {
			alert("Por favor ingrese un número distinto de 0.");
		}
		quiereIngresarMasNumeros = confirm("Quiere ingresar más números?");
	}
	alert(`La multiplicación de los negativos es: ${acumuladorNegativos}. Y la suma de los positivos es: ${acumuladorPositivos}`);
}//FIN DE LA FUNCIÓN