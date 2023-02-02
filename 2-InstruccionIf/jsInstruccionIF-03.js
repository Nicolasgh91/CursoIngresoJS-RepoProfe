// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	Al ingresar una edad debemos informar si la persona es mayor de edad,
	sino informar que es un menor de edad.
*/

function mostrar()
{
	let edadUsuario;
	edadUsuario = parseInt(txtIdEdad.value);

	if (edadUsuario >= 18) {
		alert("Usted en Argentina ya es mayor de edad con 18 años.");
	} else if (edadUsuario > 0 && edadUsuario <= 17){
		alert("Usted es menor de edad.");
	} else {
		alert("Hubo algún error, por favor intente nuevamente");
	}


}//FIN DE LA FUNCIÓN