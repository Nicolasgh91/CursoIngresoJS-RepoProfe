/*
Alumno: Nicolás Gabriel Hruszczak

Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado= document.getElementById("txtIdNombre").value;

	alert(nombreIngresado);

	document.getElementById("txtIdNombre").value = "";
}


