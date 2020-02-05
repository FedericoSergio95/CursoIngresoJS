/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
var sueldo;
var resultado1;
var resultado2;

sueldo= parseInt(document.getElementById("sueldo").value);

resultado1=(10*sueldo)/100
resultado2=sueldo+resultado1
	
}
