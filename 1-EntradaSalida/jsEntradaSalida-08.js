/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//Declaraciones

var numero1;
var numero2;
var numero1Parseado;
var numero2Parseado;
var resto;

	//Asignacion

numero1 = txtIdNumeroDividendo.value;
numero2 = txtIdNumeroDivisor.value;

	//Convertir valores a enteros

numero1Parseado = parseInt(numero1);
numero2Parseado = parseInt(numero2);


resto = numero1Parseado % numero2Parseado;
	
	//Mostrar por pantalla

alert ("El resto es "+ resto);
}
