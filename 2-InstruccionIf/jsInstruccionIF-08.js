// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	Al ingresar una edad menor a 18 años y un estado civil distinto
	a "Soltero", NO HACER NADA, pero si no es asi, y es soltero y no es
	menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'
*/

function mostrar()
{

	let edadUsuario;
	let estadoCivilUsuario;
	edadUsuario = parseInt(txtIdEdad.value);
	estadoCivilUsuario = estadoCivil.value;

	if (edadUsuario >= 18 && estadoCivilUsuario === "Soltero") {
		alert("Es soltero y no es menor.");
	}

}//FIN DE LA FUNCIÓN