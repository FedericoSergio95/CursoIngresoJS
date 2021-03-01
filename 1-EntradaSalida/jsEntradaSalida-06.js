/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//declaraciones

	var numero1;
	var numero2;
	var suma;
	var numero1parseado;
	var numero2parseado;

	//asignaciones

	numero1= txtIdNumeroUno.value;
	numero2= txtIdNumeroDos.value;


	//transformar en enteros

	numero1parseado = parseInt(numero1);
	numero2parseado = parseInt(numero2);

	suma = numero1parseado + numero2parseado;

	//mostrar

	alert("La suma de ambos numeros es "+suma);

}

