/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

function sumar()
{	
	//Declaraciones

var numero1;
var numero2;
var numero1Parseado;
var numero2Parseado;
var suma;

//Asignacion

numero1 = txtIdNumeroUno.value;
numero2 = txtIdNumeroDos.value;

//Convertir valores a enteros

numero1Parseado = parseInt(numero1);
numero2Parseado = parseInt(numero2);

	suma = numero1Parseado + numero2Parseado;
	
	alert ("El resultado de la suma es "+ suma);
}

function restar()
{
	//Declaraciones

var numero1;
var numero2;
var numero1Parseado;
var numero2Parseado;
var restar;

//Asignacion

numero1 = txtIdNumeroUno.value;
numero2 = txtIdNumeroDos.value;

//Convertir valores a enteros

numero1Parseado = parseInt(numero1);
numero2Parseado = parseInt(numero2);

	restar = numero1Parseado - numero2Parseado;

alert ("El resultado de la resta es "+ restar);
	
}

function multiplicar()
{ 
	//Declaraciones

var numero1;
var numero2;
var numero1Parseado;
var numero2Parseado;
var multiplicar;

//Asignacion

numero1 = txtIdNumeroUno.value;
numero2 = txtIdNumeroDos.value;

//Convertir valores a enteros

numero1Parseado = parseInt(numero1);
numero2Parseado = parseInt(numero2);

	multiplicar = numero1Parseado * numero2Parseado;

alert ("El resultado de la multiplicacion es "+ multiplicar);
	
}

function dividir()
{
	//Declaraciones

var numero1;
var numero2;
var numero1Parseado;
var numero2Parseado;
var dividir;

//Asignacion

numero1 = txtIdNumeroUno.value;
numero2 = txtIdNumeroDos.value;

//Convertir valores a enteros

numero1Parseado = parseInt(numero1);
numero2Parseado = parseInt(numero2);

	dividir = numero1Parseado / numero2Parseado;

alert ("El resultado de la division es "+ dividir);
	
}

