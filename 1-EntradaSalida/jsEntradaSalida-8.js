/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numeroDividendo;
    var numeroDivisor;
    var numeroDivisorParseado;
    var resultado;

    numeroDividendo = parseInt(document.getElementById("numeroDividendo").value);
    numeroDivisor = parseInt(document.getElementById("numeroDivisor").value);
    numeroDivisorParseado = parseInt(numeroDivisor);

    resultado= numeroDividendo%numeroDivisor;

    alert("El resto es "+resultado);

    
    
}
