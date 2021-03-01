/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento
 del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, 
si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos 
en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
 */

function CalcularPrecio () 
{
 	var cantLamparas;
    var precio = 35;
    var precioFinal;
    var impuestoBruto = 0.1;
    var impuestoIIBB;
    var descuento;
    var marcaLamp;

    cantLamparas = txtIdCantidad.value;
    cantLamparas = parseInt (cantLamparas);
    marcaLamp = Marca.value;

    //Punto A

    if (cantLamparas >5)
    {
        descuento = 0.5
    }

    //Punto B

    switch (cantLamparas)
    {
        case 5:
    
            switch (marcaLamp)
            {
                case "ArgentinaLuz":

                    descuento = 0.4;

                    break;
            
                default:

                    descuento = 0.3;

                    break;
            }

            break;
    
    }

    //Punto C

    switch (cantLamparas)
    {
        case 4:

            switch (marcaLamp)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":

                    descuento = 0.25;
                    
                    break;
            
                default:

                    descuento = 0.2;

                    break;
            }
            
            break;
    
    }

    //Punto D

    switch (cantLamparas) {
        case 3:

            switch (marcaLamp) {
                case "ArgentinaLuz":

                    descuento = 0.15;
                    
                    break;

                case "FelipeLamparas":

                    descuento = 0.1;
            
                default:

                    descuento =0.05;

                    break;
            }
            
            break;
    
    }

    precioFinal = (precio * cantLamparas) - ((precio*cantLamparas) * descuento);
    txtIdprecioDescuento.value = precioFinal;

    //Punto E

    if (precioFinal > 120)
    {
        impuestoIIBB = precioFinal * impuestoBruto;
        precioFinal = precioFinal + impuestoIIBB;
        txtIdprecioDescuento.value = precioFinal;

        alert ("Usted pagó "+ impuestoIIBB+ " de IIBB");

    }
}
