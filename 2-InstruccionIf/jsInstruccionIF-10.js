/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
*/

function mostrar()
{
	var aleatorio; 

	aleatorio = Math.floor(Math.random() * 11)

	if (aleatorio > 8){

		alert ("EXCELENTE "+ aleatorio);

	}

	else if (aleatorio < 4){

		alert ("Vamos, la proxima se puede "+ aleatorio);

	}

	else 

	alert ("APROBÓ "+ aleatorio);
}//FIN DE LA FUNCIÓN