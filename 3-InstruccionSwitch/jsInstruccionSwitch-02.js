// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:

	al seleccionar un mes informar. 
	si estamos en Invierno: "Abrigate que hace frio." 
	si aún no llego el Invierno: "Falta para el invierno." 
	si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!." 
	ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/

function mostrar()
{
	//tomo el mes
	let mes = txtIdMes.value;
	let mensaje;

	// variable que voy a evaluar, no es una condición
	switch (mes) 
	{
		case "Julio":
		case "Agosto":
			mensaje = "Abrigate que hace frio.";
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora el calor!!!");
			break;
		default:
			mensaje = "Falta para el invierno";
			break;
	}
	alert(mensaje);
}//FIN DE LA FUNCIÓN