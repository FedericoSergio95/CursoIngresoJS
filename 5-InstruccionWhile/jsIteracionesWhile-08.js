/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	var contador;
	var respuesta;
	var numeroPositivo;
	var numeroNegativo;
	var sumaPositivos;
	var multiplicacionNegativos;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta;

	do
	{	
		numeroPositivo = prompt("ingrese un numero positivo");
		numeroNegativo = prompt ("Ingrese un numero negativo");

		numeroPositivo = parseInt (numeroPositivo),
		numeroNegativo = parseInt (numeroNegativo);

		sumaPositivos = sumaPositivos + numeroPositivo;
		multiplicacionNegativos = multiplicacionNegativos * numeroNegativo;

		txtIdSuma.value=sumaPositivos;
		txtIdProducto.value=multiplicacionNegativos;

		respuesta = confirm ("Desea continuar?");

	}while (respuesta);

	

}

//FIN DE LA FUNCIÓN