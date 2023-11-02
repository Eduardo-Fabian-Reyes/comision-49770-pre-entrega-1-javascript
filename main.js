//la idea de ventaDescuento bonificar al usuario por una cantidad de compras mayor o igual a 3, descontandole $1000 al total de su compra.

function ventaconDescuento(){ 
let ventaDescuento = true;

// la seccion "do" esta divida en 3 partes, nombre del usuario, color y cantidad a comprar, siendo la ultima parte lo mas importante del ciclo.
do{
    let nombreComprador = prompt("Hola bienvenido a Pinturas Monet, el hogar de las acuarelas, ingrese su nombre")
    if(nombreComprador === null){
        break
    }
    if(!nombreComprador){
        alert("Por favor, ingrese un nombre válido para su atención")
        continue;
    }
    if (isNaN(nombreComprador) === false){
        alert("El nombre sólo debe contener letras")
        continue;
    }
    if(nombreComprador){ 
        alert("Bienvenido " + nombreComprador + " Te recordamos que por compras arriba de 3, tienes $1000 de descuento en tu compra")
    }

    let colorIndicado = prompt ("Indique el color de acuarela a comprar")
    if (isNaN(colorIndicado) === false){
        alert("Escriba su color con letras por favor")
        continue;
    }
    let cantidadIndicada = parseInt(prompt ("Indique la cantidad de acuarelas que necesita (3490 c/u)"))
    if(!isNaN(cantidadIndicada) &&  cantidadIndicada || null > 0) { 
    } else{ 
        alert("Por favor, ingreso un número válido para la cantidad.")
    continue;
    }
    let precioNeto = 3490;
    let total = precioNeto * cantidadIndicada; 
    if(cantidadIndicada >=3){ 
        total -= 1000; 
        alert("Has obtenido un descuento de $1.000. Precio Total: $" + total.toFixed(2)); 
    }else{ 
        alert("Precio total: $" + total.toFixed(2))
    }
    ventaDescuento = confirm("Gracias por tu compra. ¿Deseas realizar otra operación?");
}while(ventaDescuento) 
}







