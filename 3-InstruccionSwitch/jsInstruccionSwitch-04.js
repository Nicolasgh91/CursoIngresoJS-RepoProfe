// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:

	al seleccionar un mes informar. 
	si tiene 28 días. 
	si tiene 30 días. 
	si tiene 31 días.
*/

function mostrar()
{
	//tomo el mes
	let mes;
	mes = txtIdMes.value;
	
	switch (mes) {
		case "Febrero":
			alert("Tiene 28 días");		
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Tiene 30 días");
			break;
		case "Enero":
		case "Mayo":
		default:
			alert("Tiene 31 dias")
			break;
	}
}//FIN DE LA FUNCIÓN