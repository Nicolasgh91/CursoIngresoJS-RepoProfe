// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	Al presionar el botón pedir números hasta que el USUARIO QUIERA e informar
	la suma acumulada y el promedio.
*/

function mostrar()
{
	let numeroIngresado;
	let quiereIngresarMasNumeros;
	let promedio;
	let acumulador = 1;

		numeroIngresado = parseFloat(prompt("Ingrese un número: "));
		quiereIngresarMasNumeros = confirm("Quiere ingresar más números?");
		
		while (quiereIngresarMasNumeros) {
			numeroIngresado += parseFloat(prompt("Ingrese un número: "));
			acumulador++;
			quiereIngresarMasNumeros = confirm("Quiere ingresar más números?");
		}

		promedio = numeroIngresado / acumulador;
		alert(`El promedio de los números ingresados es: ${promedio} ya que usted ingresó ${acumulador} números`);
	
		document.getElementById("txtIdSuma").value = numeroIngresado;
		document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN