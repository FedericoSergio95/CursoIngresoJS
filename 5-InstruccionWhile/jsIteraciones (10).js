function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	var positivos = 0;
	var negativos = 0;
	var numeroIngresado;
	var cantidadNegativo = 0;
	var cantidadPositivo = 0;
	var cantidadCeros = 0;
	var cantidadNumerosPares = 0;
	var promedioNegativos;
	var promedioPositivos;
	var diferenciaNegativosPositivos;

	var respuesta="si";

		while(respuesta!='no')
	{
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);
		while (isNaN(numeroIngresado)) {
			numeroIngresado= prompt("Lo que ingresaste no era un numero, volve a ingresar uno");
			numeroIngresado = parseInt(numeroIngresado);
	
	}

	if (numeroIngresado>0) {
		//es positivo
		positivos = positivos + numeroIngresado;
		cantidadPositivo++;
		var resto = numeroIngresado % 2;
		if (resto == 0) {
			//es numero par
			cantidadNumerosPares++;
		}
	} else if (numeroIngresado<0) {
		//es negativo
		negativos = negativos + numeroIngresado;
		cantidadNegativo++;
		
	} else {
		//es un numero cero
		cantidadCeros++;
	}

	contador++;
	respuesta = prompt("Desea continuar? Si desea cancelar, escriba no");
	
	} //terminamos el bucle

	//Se calculan los promedios
	promedioNegativos = negativos / cantidadNegativo;
	promedioPositivos = positivos / cantidadPositivo;
	diferenciaNegativosPositivos = promedioPositivos - promedioNegativos;


}//FIN DE LA FUNCIÓN