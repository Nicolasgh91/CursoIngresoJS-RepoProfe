// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	Al ingresar una edad solo debemos informar si la persona NO es
	adolescente.
*/

function mostrar()
{
	let edadUsuario;
	edadUsuario = parseInt(txtIdEdad.value);

	if (edadUsuario > 0 && edadUsuario < 13 || edadUsuario > 17){
		alert("Usted no está en el rango de un adolescente, por lo cual o está cerca de serlo o ya lo fue.");
	} 

}//FIN DE LA FUNCIÓN