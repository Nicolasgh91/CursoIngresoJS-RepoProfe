function mostrar()
{
	//tomo la hora
	var horaDelDia =parseInt(txtIdHora.value);
	
	switch (horaDelDia) {
		case 7:
			alert("Es de mañana.")
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.")
			break;
		default:
			alert("Es de tarde o noche.")
			break;
	}
	
	



}//FIN DE LA FUNCIÓN