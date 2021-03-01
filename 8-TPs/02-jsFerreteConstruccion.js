/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //Declaramos variables

    var largoTerrenoString;
    var anchoTerrenoString;
    var largoTerrenoNumerico;
    var anchoTerrenoNumerico;
    var perimetroTerreno;
    var perimetroTerrenoNumerico;
    var perimetroAlambre

    //Asignamos valores y convertimos a valores enteros

    largoTerrenoString = txtIdLargo.value;
    anchoTerrenoString = txtIdAncho.value;

    largoTerrenoNumerico = parseInt(largoTerrenoString);
    anchoTerrenoNumerico = parseInt(anchoTerrenoString);

    //Calculamos resultados y mostramos por pantalla

    perimetroTerreno = (largoTerrenoNumerico*2) + (anchoTerrenoNumerico*2);
    perimetroTerrenoNumerico = parseInt(perimetroTerreno);
    perimetroAlambre = perimetroTerreno*3; 

    alert ("Usted necesita "+perimetroAlambre+ " metros de alambre");

}
function Circulo () 
{
    //Declaramos variables
    
    var radioString;
    var radioNumerico;
    var perimetroCirculo;
    var perimetroFinal;
    var pi = 3.14;

    //Asigno valores y convierto a valores enteros

    radioString = txtIdRadio.value;
    radioNumerico = parseInt(radioString);

    //Realizo calculos y muestro por pantalla

    perimetroCirculo = pi * (radioNumerico*radioNumerico);
    perimetroFinal = perimetroCirculo*3;

    alert("Usted necesita "+perimetroFinal+ " metros de alambre");
}
function Materiales () 
{
	//Declaramos variables

    var largoTerrenoString;
    var anchoTerrenoString;
    var largoTerrenoNumerico;
    var anchoTerrenoNumerico;
    var areaRectangulo;
    var areaRectanguloNumerico;
    var bolsasCemento = 2;
    var bolsasCal = 3;
    var totalBolsasCemento;
    var totalBolsasCal;

    //Asignamos valores y convertimos a valores enteros

    largoTerrenoString = txtIdLargo.value;
    anchoTerrenoString = txtIdAncho.value;

    largoTerrenoNumerico = parseInt(largoTerrenoString);
    anchoTerrenoNumerico = parseInt(anchoTerrenoString);

    //Calculamos resultados y mostramos por pantalla

    areaRectangulo = largoTerrenoNumerico * anchoTerrenoNumerico;
    areaRectanguloNumerico = parseInt(areaRectangulo);
    totalBolsasCemento = areaRectanguloNumerico * bolsasCemento;
    totalBolsasCal = areaRectanguloNumerico * bolsasCal;

    alert ("Usted necesita "+totalBolsasCemento+ " bolsas de cemento y "+totalBolsasCal+ " bolsas de cal");
}