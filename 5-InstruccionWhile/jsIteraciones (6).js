function mostrar()
{
	//Declaro variables
	var contador=0;
	var acumulador=0;
	var numeroIngresado;
	var promedio;

//Pido los 5 numeros
do {
	numeroIngresado = prompt("Ingrese un numero");
	numeroIngresado = parseInt(numeroIngresado);
	while (isNaN(numeroIngresado)) {
		numeroIngresado= prompt("Lo que ingresaste no era un numero, volve a ingresar uno");
		numeroIngresado = parseInt(numeroIngresado);
	}
	//En esta parte del codigo sabemos que el numero es valor correcto
	contador++; //contador = contador + 1;
	acumulador = acumulador + numeroIngresado;
	console.log("El contador es: "+contador);
	console.log("Se encuentra acumulando : "+acumulador);

} while (contador<5){
	

}
//Muestra el acumulador
document.getElementById('suma').value=acumulador;
promedio = acumulador / contador;
//Muestra el promedio
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN