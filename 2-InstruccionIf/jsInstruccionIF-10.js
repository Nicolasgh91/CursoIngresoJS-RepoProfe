// Alumno: Nicolás Gabriel Hruszczak 

/*	Consigna:
	Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
	"EXCELENTE" para notas igual a 9 o 10,
	"APROBÓ" para notas mayores a 4,
	"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	let notaExamen;
	notaExamen = Math.floor(Math.random() * 10 + 1);

	if(notaExamen >= 9 && notaExamen <= 10){
		alert("Su nota es: "+ notaExamen + " EXCELENTE");
	} else if (notaExamen >= 4 && notaExamen < 9){
		alert("Su nota es: "+ notaExamen + " APROBÓ");
	} else if (notaExamen > 0 && notaExamen < 4){
		alert("Su nota es: "+ notaExamen + " Vamos, la proxima se puede");
	}



}//FIN DE LA FUNCIÓN