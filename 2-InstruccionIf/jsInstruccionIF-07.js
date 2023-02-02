// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	Al ingresar una edad menor a 18 años y un estado civil distinto
	a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para
	NO ser soltero.'
*/

function mostrar()
{
	
	let edadUsuario;
	let estadoCivilUsuario;
	edadUsuario = parseInt(txtIdEdad.value);
	estadoCivilUsuario = estadoCivil.value;
	
	if(edadUsuario > 0 && edadUsuario < 18 && estadoCivilUsuario != "Soltero"){
		alert("Es muy pequeño para NO ser soltero.");
	}


}//FIN DE LA FUNCIÓN