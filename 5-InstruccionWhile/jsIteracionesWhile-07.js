/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;
	respuesta='si';

	respuesta = prompt ("¿Desea ingresar un numero?");
	
		while (respuesta == "si")
		{
			numeroIngresado = prompt ("Ingrese un numero");
			numeroIngresado = parseInt (numeroIngresado);

			acumulador = acumulador + numeroIngresado;
			contador = contador + 1;

			respuesta = prompt ("Desea seguir ingresando numeros?");
		}
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}

//FIN DE LA FUNCIÓN