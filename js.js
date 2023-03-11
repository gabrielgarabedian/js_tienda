function orden(producto,cantidad) {
    return producto*cantidad
}

let producto;
let cantidad;
let rta = ""

do{
    let producto = Number(prompt("Elija su producto ingresando su codigo:\ncod-1500 Whey protein ena $1500  \ncod-1000 Whey protein StartNutrition $1000\ncod-500 Whey protein Farmacity $500\n\nIngrese el cod:"))
    
    
    if ((producto == "1500")|| (producto == "1000")|| (producto == "500")){
        
        let cantidad= Number(prompt("Cuantas unidades desea?:"))
        if (cantidad > 0){
            
            let pedido= orden(producto,cantidad)
            alert("su monto es $"+ pedido)

            let pago= prompt("Seleccione el medio de pago:\nahora3\nahora6\nEfectivo").toLowerCase()
            
        
            switch (pago) {
                case "ahora3":
                    montoapagar = pedido /3
                    alert("El monto a pagar por cuota es $"+ montoapagar)
                    console.log("El monto a pagar por cuota es $"+ montoapagar)
                    break;
        
                case "ahora6":
                    montoapagar = pedido /6
                    alert("El monto a pagar por cuota es $"+ montoapagar)
                    console.log("El monto a pagar por cuota es $"+ montoapagar)
                    break;
        
                case "efectivo":
                    montoapagar = pedido 
                    alert("El monto a pagar es $"+ montoapagar)
                    console.log("El monto a pagar es $"+ montoapagar)
                    break;
            
                default:
                    alert("El medio de pago es incorrecto")
                    break;
            }


        }
        else{
            alert("la cantidad ingresada es menor al permitido de una unidad")
        }

    }
    else{
        alert("El codigo ingresado es invalido")
        
    }

rta =prompt("ingrese esc para salir o cualquier tecla para continuar").toLowerCase()
}
while (rta != "esc")