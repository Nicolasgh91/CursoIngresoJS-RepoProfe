// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	al seleccionar un mes informar. 
	si es Enero: "que comiences bien el año!!!." 
	si es Marzo: "a clases!!!." 
	si es Julio: "se vienen las vacaciones!!!." 
	si es Diciembre: "Felices fiesta!!!."
*/

function mostrar()
{
	//tomo el mes
	let mes = txtIdMes.value;
	
	switch (mes) {
		case "Enero":
				alert("que comiences bien el año!!!.")
			break;
		case "Marzo":
				alert("a clases!!!.");
			break;
		case "Julio":
				alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
				alert("Felices fiestas!!!.");
			break;
		default:
				alert("Este mes es un mes más, así que a estudiar!")
			break;
	}
}//FIN DE LA FUNCIÓN