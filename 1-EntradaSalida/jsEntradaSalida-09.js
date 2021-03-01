/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

//Declaraciones

var sueldo;
var sueldoAumento;
var resultado;
var sueldoParseado;
var sueldoAumentoParseado;


//Asignacion

sueldo = txtIdSueldo.value;

//Convertir valores a enteros

sueldoParseado = parseInt(sueldo);
sueldoAumentoParseado = parseInt(sueldoAumento);

sueldoAumentoParseado = (sueldo*0.10);

resultado = sueldoParseado + sueldoAumentoParseado;

txtIdResultado.value = resultado;
}
