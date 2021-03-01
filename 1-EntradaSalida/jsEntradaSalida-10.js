/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaraciones

var importe;
var importeDescuento;
var importeParseado;
var importeDescuentoParseado;
var resultado;


//Asignacion

importe = txtIdImporte.value;

//Convertir valores a enteros

importeParseado = parseInt(importe);
importeDescuentoParseado = parseInt(importeDescuento);

importeDescuentoParseado = (importe*0.25);

resultado = importeParseado - importeDescuentoParseado;

txtIdResultado.value = resultado;
}
