/*Entrega 1

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
        montoApagar = pedido /3
        alert("El monto a pagar por cuota es $ "+ montoApagar + " en 3 cuotas sin interes")
        console.log("El monto a pagar por cuota es $ "+ montoApagar +"\n El pago esta siendo procesado")
        break;
        
    case "ahora6":
        montoApagar = pedido /6
        alert("El monto a pagar por cuota es $ "+ montoApagar + " en 6 cuotas sin interes")
        console.log("El monto a pagar por cuota es $ "+ montoApagar + "\nEl pago esta siendo procesado")
        break;
        
    case "efectivo":
        montoApagar = pedido 
        alert("El monto a pagar es $"+ montoApagar + "\nPuede abonar con transferencia bancaria o al retirar")
        console.log("El monto a pagar en efectivo es $ "+ montoApagar )
        break;
            
    default:
        alert("El medio de pago elegido o dato es incorrecto")
        break;
}
    

rta =prompt("ingrese esc para salir o cualquier tecla para continuar").toLowerCase()
}
while (rta != "esc")
*/

///entrega 2



class Productos{
    constructor(id,name,description,price,stock){
        this.id= id
        this.name= name
        this.description= description
        this.price= price
        this.stock= stock
        this.cantidad= 1
    }
        
}
        
class ControllerProductos{
    constructor(){
        this.listProductos = []
    }
            
    cargar() {
        this.listProductos= [
            new Productos(1000, "Whey Protein ENA", "Proteina de la marca ENA\nSabores: Frutilla - Manzana Verde - Chocolate",1500,125),
            new Productos(500, "Whey Protein ENA", "Proteina de la marca Ultra tech\nSabores: Cookie - Vainilla - Chocolate",1000,70),
            new Productos(1500, "Whey Protein StarNutrition","Proteina de leche de la marca StarNutrition",8000,55),
            new Productos(750, "Creatina ENA 500g", "Creatina de la marca ENA de 500g\nSabor: Frutilla - Mango - Maracuya",790,10),
        ]
    }
            
    actualizar(){
        let acum= ""
        this.listProductos.forEach(productos =>{
            acum += "\nCod" + productos.id + " "+ "el precio actual es $"+ Math.round(productos.price * 1.10) + "\n"
                    
        })
        return acum
            
    }
        
    mostrar(){
        let acum ="" 
        this.listProductos.map(productos =>{
            acum += "\ncod"+ productos.id +" "+ productos.name +"\n"+productos.description +"\n"+"$"+ productos.price +"\n"
        })
        return acum;
    }
        
    buscar(id){
        return this.listProductos.find(el => el.id == id)
    }
        
}
        
class CarritoController{
    constructor(){
        this.listCompras= []
    }
        
    selector(productos){
        this.listCompras.push(productos)
    }
        
    eliminate(producto){
        this.listCompras.pop(producto)
    }
            
    totalCalculate(){
        let acumulado= 0
        this.listCompras.forEach(productos =>{
            acumulado += productos.price * productos.cantidad
        })
        return acumulado;
    }
            
    detalle(){
        let list="" 
        this.listCompras.map(productos =>{
            list += "\ncod"+ productos.id +" "+ productos.name +"\nUnidades:"+productos.cantidad +"\n"+"$"+ productos.price +"\n"
        })
        return list;
    }
}
        
const controladorProductos= new ControllerProductos()
const controladorCarrito= new CarritoController()
controladorProductos.cargar()
controladorProductos.actualizar()
        
let rta= ""
let salida= ""
        
        
do{
            
    alert("Lista de productos:\n"+ controladorProductos.mostrar())
            
    let id =prompt("cod-1000 Whey Protein ENA\n\ncod-500 Whey Protein ENA\n\ncod-1500 Whey Protein StarNutrition \n\ncod-750 Creatina ENA 500g \n\nIngrese el codigo del producto deseado")
            
    const producto = controladorProductos.buscar(id)
            
            
    if (producto){
                
        controladorCarrito.selector(producto)
        let opcion = Number(prompt (" Elige:\n1 - para confirmar el producto al carrito\n2 - para eliminar el producto del carrito"))

        if (opcion == 1){
                        
                alert("el producto se cargo al carrito exitosamente")
                        
        }else if  (opcion == 2){
                alert("se ha quitado del carrito")
                controladorCarrito.eliminate(producto)
        }
        else {
                alert("la opcion es invalida")
            }
    
    }
    else{
        alert("el codigo de producto es incorrecto o inexistente")
    }
            
    rta = prompt("ingrese pagar para terminar la compra \no presione cualquier tecla para continuar comprando").toLowerCase()
            
}while (rta != "pagar")
        
alert("El valor abonar es $" + controladorCarrito.totalCalculate() + "\nDetalle :\n " + controladorCarrito.detalle())

if (controladorCarrito.totalCalculate() > 0){
            
                let pago= prompt("Seleccione el medio de pago:\nAhora3\nAhora6\nEfectivo").toLowerCase()
                        
                do{
                    switch (pago) {
                        case "ahora3":
                            montoApagar = controladorCarrito.totalCalculate() /3
                            alert("El monto a pagar por cuota es $ "+ montoApagar.toFixed(2) + " en 3 cuotas sin interes")
                            console.log("El monto a pagar por cuota es $ "+ montoApagar.toFixed(2) +"\n El pago esta siendo procesado")
                            break;
                                    
                            case "ahora6":
                                montoApagar = controladorCarrito.totalCalculate() /6
                                alert("El monto a pagar por cuota es $ "+ montoApagar.toFixed(2) + " en 6 cuotas sin interes")
                                console.log("El monto a pagar por cuota es $ "+ montoApagar.toFixed(2) + "\nEl pago esta siendo procesado")
                                break;
                                        
                                case "efectivo":
                                    montoApagar = controladorCarrito.totalCalculate() 
                                    alert("El monto a pagar es $"+ montoApagar + "\nPuede abonar con transferencia bancaria o al retirar")
                                    console.log("El monto a pagar en efectivo es $ "+ montoApagar )
                                    break;
                                            
                        default:
                            alert("El medio de pago elegido o dato es incorrecto")
                            break;
                        }
                        rta =prompt("ingrese esc para salir o cualquier tecla para volver a ver el monto a pagar")
                } while (rta != "esc")
           
}
else{
    alert("No hay nada para abonar")
}
        
        
alert("Los precios de los productos se actualizaran \npor una suba en de la tasa aduanera, pasando a costar:\n"+ controladorProductos.actualizar())
                

