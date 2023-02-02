/*
Alumno: Nicolás Gabriel Hruszczak

Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
	
	let numUno;
	let numDos;
	let resultado;

function sumar()
{	
	
	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numUno + numDos 
	alert(resultado)
}

function restar()
{
	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numUno - numDos 
	alert(resultado)
}

function multiplicar()
{ 
	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numUno * numDos 
	alert(resultado)
}

function dividir()
{
	numUno = parseInt(document.getElementById("txtIdNumeroUno").value);
	numDos = parseInt(document.getElementById("txtIdNumeroDos").value);
	resultado = numUno / numDos 
	alert(resultado)
}

