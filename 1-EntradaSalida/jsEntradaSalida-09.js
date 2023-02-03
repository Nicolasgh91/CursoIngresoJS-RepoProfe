/*
Alumno: Nicolás Gabriel Hruszczak

Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/

//function mostrarAumento()
{
	let sueldo;
	let aumento;
	let nuevoSueldo;

	sueldo = (parseFloat(document.getElementById("txtIdSueldo").value))
	aumento = sueldo * 10 / 100
	nuevoSueldo = sueldo + aumento
 	
	document.getElementById("txtIdResultado").value = nuevoSueldo
}

/* 9 BIS : Debemos lograr tomar el importe por ID ,transformarlo a entero
(parseInt), y tambien pedirle al usuario mediante una entrada de datos
cual es el aumento a realizar, y luego mostrar el importe con el aumento
 en el TextBox "RESULTADO". */
function mostrarAumento()
{
	let importe;
	let aumento;
	let resultado;

	importe = parseFloat(document.getElementById("txtIdSueldo").value);
	aumento = parseFloat(prompt("Indique por favor el aumento de sueldo que desea obtener: "));

	resultado = (importe / 100 * aumento) + importe;

	document.getElementById("txtIdResultado").value = resultado;
}