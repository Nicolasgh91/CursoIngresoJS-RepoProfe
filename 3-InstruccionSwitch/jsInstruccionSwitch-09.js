// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:

	Una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada
	estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar
	para poder calcular el precio final 

	en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento
	del 10% Mar del plata tiene un descuento del 20% 

	en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento
	del 10% Mar del plata tiene un aumento del 20% 

	en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento
	del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar() {
		
	let estacionIngresada;
	let ESTADIABASE = 15000;
	let destino;
	let precioFinal = 0;
	
	estacionIngresada = txtIdEstacion.value;
	destino = txtIdDestino.value; 

	switch (estacionIngresada) {
		case "Invierno":
			if (destino === "Bariloche"){
				precioFinal = ESTADIABASE * 1.20;
				alert(precioFinal);
			} else if (destino === "Cataratas" || destino === "Cordoba"){
				precioFinal = ESTADIABASE * 0.90;
				alert(precioFinal);
			} else if(destino === "Mar del plata"){
				precioFinal = ESTADIABASE * 0.80;
				alert(precioFinal);
			}
			break;
		case "Verano":
			if(destino === "Bariloche"){
				precioFinal = ESTADIABASE * 0.80;
				alert(precioFinal);
			} else if(destino === "Cataratas" || destino === "Cordoba"){
				precioFinal = ESTADIABASE * 1.10;
				alert(precioFinal);
			} else if(destino === "Mar del plata"){
				precioFinal = ESTADIABASE * 1.20;
				alert(precioFinal);
			}
			break;
		default:
			if (destino === "Bariloche"){
				precioFinal = ESTADIABASE * 1.10;
				alert(precioFinal);
			} else if (destino === "Cataratas"){
				precioFinal = ESTADIABASE * 1.10;
				alert(precioFinal);
			} else if(destino === "Mar del plata"){
				precioFinal = ESTADIABASE * 1.10;
				alert(precioFinal);
			} else if (destino === "Cordoba") {
				precioFinal = ESTADIABASE;
				alert(precioFinal);
			}
			break;	
	}
}//FIN DE LA FUNCIÓN