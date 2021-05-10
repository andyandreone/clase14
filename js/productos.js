class Producto{
    constructor(id,nombre,precio,cantidad="",posicion){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.posicion = posicion;
        
    }
    
    getHTML(){
        return  '<div class="col-md-3"><p>Producto N°: ' + this.id + 
                '</p> <h5 class="nombre">' + this.nombre + 
                '</h5> <p class="precio"> $ '  + this.precio + 
                '</p> <button class="btn btn-dark agregar" id="agr'+ this.id +
                '">Agregar</button><p class="cantidad">'+ this.cantidad +'</p></div>';
    }
    
}

const productos = [];
productos.push(new Producto (0, "Muzzarella", 450));
productos.push(new Producto (1, "Doble Muzzarella", 550));
productos.push(new Producto (2, "Muzzarella con salchichas", 530));
productos.push(new Producto (3, "Muzzarella y huevo", 520));
productos.push(new Producto (4, "Muzzarella con morron", 540));
productos.push(new Producto (5, "Muzzarella con papas pay", 510));
productos.push(new Producto (6, "Americana", 590));
productos.push(new Producto (7, "Jamon", 550));
productos.push(new Producto (8, "Jamon y huevo", 620));
productos.push(new Producto (9, "Jamon y morron", 640));
productos.push(new Producto (10, "Jamon y anana", 730));
productos.push(new Producto (11, "Jamon y provolone", 670));
productos.push(new Producto (12, "Jamon y roquefort", 670));
productos.push(new Producto (13, "Panceta", 600));
productos.push(new Producto (14, "Panceta y huevo", 670));
productos.push(new Producto (15, "Panceta y morron", 690));



 

