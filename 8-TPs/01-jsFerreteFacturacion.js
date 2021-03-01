/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Declaramos valores

    var precio1;
    var precio2;
    var precio3;
    var precio1Numerico;
    var precio2Numerico;
    var precio3Numerico;
    var suma;

    //Asignamos valores y convertimos a enteros

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1Numerico = parseInt(precio1);
    precio2Numerico = parseInt(precio2);
    precio3Numerico = parseInt(precio3);

    //Realizamos suma y mostramos

    suma = precio1Numerico + precio2Numerico + precio3Numerico;

    alert ("La suma de los tres productos es de "+ suma + " pesos");
}
function Promedio () 
{
	//Declaramos valores

    var precio1;
    var precio2;
    var precio3;
    var precio1Numerico;
    var precio2Numerico;
    var precio3Numerico;
    var promediado;

    //Asignamos valores y convertimos a enteros

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1Numerico = parseInt(precio1);
    precio2Numerico = parseInt(precio2);
    precio3Numerico = parseInt(precio3);

    //Realizamos suma y mostramos

    promediado = (precio1Numerico + precio2Numerico + precio3Numerico) / 3;

    alert ("El promedio de los tres productos es de "+ promediado + " pesos");
}
function PrecioFinal () 
{
	//Declaramos valores

    var precio1;
    var precio2;
    var precio3;
    var precio1Numerico;
    var precio2Numerico;
    var precio3Numerico;
    var impuestoIVA;
    var precioFinal;

    //Asignamos valores y convertimos a enteros

    precio1 = txtIdPrecioUno.value;
    precio2 = txtIdPrecioDos.value;
    precio3 = txtIdPrecioTres.value;

    precio1Numerico = parseInt(precio1);
    precio2Numerico = parseInt(precio2);
    precio3Numerico = parseInt(precio3);

    //Realizamos suma y mostramos

    impuestoIVA = (precio1Numerico + precio2Numerico + precio3Numerico) * 21 / 100;
    precioFinal = precio1Numerico + precio2Numerico + precio3Numerico + impuestoIVA;

    alert ("El precio final de los tres productos es de "+ precioFinal + " pesos");
}