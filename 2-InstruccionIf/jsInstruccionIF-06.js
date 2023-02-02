// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	Al ingresar una edad debemos informar si la persona es mayor de edad
	(mas de 18 años) o adolescente (entre 13 y 17 años) o niño 
	(menor a 13 años).
*/

function mostrar()
{
	let edadUsuario;
	edadUsuario = parseInt(txtIdEdad.value);

	if(edadUsuario > 0 && edadUsuario < 13){
		alert("Eres un niño.");
	} else if (edadUsuario >= 13 && edadUsuario <= 17){
		alert("Ya sos un adolescente.");
	} else if(edadUsuario >= 18){
		alert("Ya sos una persona mayor.");
	} else{
		alert("Por favor introduzca un valor nuevamente.");
	}


}//FIN DE LA FUNCIÓN