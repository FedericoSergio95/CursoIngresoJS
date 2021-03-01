/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/



function comenzar()
{
  var numeroIngresado;
  var numeroSecreto; 
  var contadorIntentos=0;

	//Genero el número RANDOM entre 1 y 100
    
    numeroSecreto = (Math.floor(Math.random() * 101));

    while (numeroIngresado != numeroSecreto)
    {
      numeroIngresado = txtIdNumero.value;
      contadorIntentos = contadorIntentos +1;

      if (numeroIngresado < numeroSecreto)
      {
        alert ("Todavía falta para llegar al número");
      }
      else if (numeroIngresado > numeroSecreto)
      {
        alert ("Se ás+o del número a adivinar");
      }

    } 
    
        if (numeroIngresado == numeroSecreto)
        {
          alert ("Usted es un ganador!!! y en solo "+contadorIntentos+" intentos");

        }

   
	 
		//alert(numeroSecreto );
	

}

function verificar()
{
	
	
}