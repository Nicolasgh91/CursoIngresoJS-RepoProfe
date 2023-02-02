/*
Alumno: Nicolás Gabriel Hruszczak

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	// declaro variable
	let nombreIngresado;

	// Capturo elemento del html y lo almaceno en variable
	nombreIngresado= document.getElementById("txtIdNombre").value;

	alert("Su nombre es: " + nombreIngresado);

	// Vuelvo a dejar vacio el input
	//document.getElementById("txtIdNombre").value = "";
}


