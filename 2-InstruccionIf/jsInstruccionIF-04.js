// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	Al ingresar una edad debemos informar si la persona es adolescente,
	edad entre 13 y 17 años (inclusive) .
*/

function mostrar()
{
	
	let edadUsuario;
	edadUsuario = parseInt(txtIdEdad.value);

	if (edadUsuario >= 13 && edadUsuario <= 17) {
		alert("Usted es adolescente.")
	}

}//FIN DE LA FUNCIÓN