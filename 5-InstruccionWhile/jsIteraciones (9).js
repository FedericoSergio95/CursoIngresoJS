function mostrar()
{

	// declarar variables
	var maximo;
	var minimo;
	var flag = 0;
	var numeroIngresado;

	var respuesta='si';

	while(respuesta!='no')
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while (isNaN(numeroIngresado)) {
			numeroIngresado= prompt("Lo que ingresaste no era un numero, volve a ingresar uno");
			numeroIngresado = parseInt(numeroIngresado);
	
	}

	//Observar si son maximos o minimos
	if (flag == 0) {
		//Entrariamos la primera vez y solo la primera vez
		maximo = numeroIngresado;
		minimo = numeroIngresado;
		flag = 1;
	} else if (numeroIngresado>maximo) {
		maximo = numeroIngresado;
	} else if (numeroIngresado < minimo) {
		minimo = numeroIngresado;
	}
	respuesta = prompt("Desea continuar? Si desea cancelar, escriba no");
// fin del while, fin del pedido de datos y evaluacion de maximo y minimo
document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN