
function cargarProductos(){
    //CARGAR PRODUCTOS EN EL INDEX.HTML
    
    let storedProductos = JSON.parse(sessionStorage.getItem("productos"));
    if(storedProductos!=null){
        $('#listaProductos').html("");
    for(const producto of storedProductos){
        
        $('#listaProductos').append('<div class="col-md-3"><p>Producto N°: ' + producto.id + 
        '</p> <h5 class="nombre">' + producto.nombre + 
        '</h5> <p class="precio"> $ '  + producto.precio + 
        '</p> <button class="btn btn-dark agregar" id="agr'+ producto.id +
        '">Agregar</button><p class="cantidad">'+ producto.cantidad +'</p></div>');
        
        //ACCION AL REALIZAR CLICK EN AGREGAR
        $(`#agr${producto.id}`).click(function(){
            let storedCarrito = sessionStorage.getItem("carrito");
            let arrayCarrito = [];
            if( storedCarrito != null){
                let tempMyCarrito = JSON.parse(storedCarrito);
                for (const product of tempMyCarrito) {
                    arrayCarrito.push(product);     
                }        
            }
            
            producto.cantidad ++;
            sessionStorage.setItem("productos", JSON.stringify(storedProductos));

            arrayCarrito.push(producto);  
            sessionStorage.setItem("carrito", JSON.stringify(arrayCarrito));

            cargarCarrito();
            cargarProductos();
        });
    }
    }else{
        sessionStorage.setItem("productos", JSON.stringify(productos));
        cargarProductos();
    }
}



function cargarCarrito(){
    $('#listaCompra').html("");
    let storedCarrito = JSON.parse(sessionStorage.getItem("carrito"));
    let i=-1;
    let suma = 0;
  
    if(storedCarrito==null||storedCarrito.length==[]){   
        $('#total').html("No hay productos agregados");
        
    }else{
            for(const producto of storedCarrito){
                i++;
                producto.posicion = i;
                suma = suma + producto.precio;
            
                if(suma!=0){
                    $('#total').html(`<p> TOTAL: $${suma}</p>`);
                }      
                $('#listaCompra').append('<div><p class="nombreSuma">' + producto.nombre +'</p> <p> Precio $: ' + producto.precio + '</p><button id="elm'+ i +'" class="btn btn-outline-danger eliminar">Eliminar</button></div>');
                
                $(`#elm${i}`).click(function(){
                    storedCarrito.splice(producto.posicion,1);
                    sessionStorage.setItem("carrito", JSON.stringify(storedCarrito));
                    
                    
                    let storedProductos = JSON.parse(sessionStorage.getItem("productos"));
                    
                    storedProductos[producto.id].cantidad--;
                    sessionStorage.setItem("productos", JSON.stringify(storedProductos));

                    cargarCarrito();  
                    cargarProductos();
                          
                });
            }  
        }    
}


