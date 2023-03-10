function ahora3() {
    return pedido / 3
}

function ahora6(){
    return pedido / 6
}

let producto= Number(prompt("Elija su producto ingresando su codigo:\n- Whey protein ena $1500  cod.1500\n- Whey protein StartNutrition $1000  cod.1000\n- Whey protein Farmacity $500   cod.500"))
let cantidad= Number(prompt("Cuantas unidades desea?:\n\n*Compras desde 8 unidades otienen un descuento"))

let pedido= producto * cantidad
alert("su monto es $"+ pedido)

let pago= prompt("Seleccione el medio de pago:\nTarjeta\nEfectivo").toLowerCase()
alert(" se selecciono "+ pago)

if (pago = "tarjeta"){
    switch (key) {
        case cuota1:
            
            break;

        case ahora3:
            
            break;

        case ahora6:
            
            break;
    
        default:
            break;
    }
}