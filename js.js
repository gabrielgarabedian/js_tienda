function orden(producto,cantidad) {
    return producto*cantidad
}


let producto ="a";
let cantidad ="b";
let rta="";

do{
    
    producto ="a"
    while (isNaN(producto)||producto != 500 && producto != 1500 && producto != 1000) {
        producto = Number(prompt("Elija su producto ingresando su codigo:\ncod-1500 Whey protein ena $1500  \ncod-1000 Whey protein StartNutrition $1000\ncod-500 Whey protein Farmacity $500\n\nIngrese el cod:"))
    }
    cantidad = "b"
    while (isNaN(cantidad)||cantidad <= 0 || cantidad >= 51) {
        cantidad = Number(prompt("Ingrese cuantas unidades desea (max permitido 50U.):"))
    }
    
    
   
            
let pedido= orden(producto,cantidad)
alert("su monto es $ "+ pedido +"\nPresione aceptar para elegir el medio de pago")

let pago= prompt("Seleccione el medio de pago:\nAhora3\nAhora6\nEfectivo").toLowerCase()
            
        
switch (pago) {
    case "ahora3":
        montoapagar = pedido /3
        alert("El monto a pagar por cuota es $ "+ montoapagar + " en 3 cuotas sin interes")
        console.log("El monto a pagar por cuota es $ "+ montoapagar +"\n El pago esta siendo procesado")
        break;
        
    case "ahora6":
        montoapagar = pedido /6
        alert("El monto a pagar por cuota es $ "+ montoapagar + " en 6 cuotas sin interes")
        console.log("El monto a pagar por cuota es $ "+ montoapagar + "\nEl pago esta siendo procesado")
        break;
        
    case "efectivo":
        montoapagar = pedido 
        alert("El monto a pagar es $"+ montoapagar + "\nPuede abonar con transferencia bancaria o al retirar")
        console.log("El monto a pagar en efectivo es $ "+ montoapagar )
        break;
            
    default:
        alert("El medio de pago elegido o dato es incorrecto")
        break;
}
    

rta =prompt("ingrese esc para salir o cualquier tecla para continuar").toLowerCase()
}
while (rta != "esc")

