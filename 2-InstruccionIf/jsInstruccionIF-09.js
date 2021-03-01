/* Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive
*/

function mostrar()
{
	var aleatorio;

	aleatorio = (Math.floor(Math.random() * 101));

	if (aleatorio < 11){

		alert (aleatorio)

	}

}//FIN DE LA FUNCIÓN