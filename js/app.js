class Carrito{
    constructor(){
        this.productos = [] ;

    }
    enCarrito(nuevoProducto){
        for(let producto of this.productos){
if (producto.nombre == nuevoProducto.nombre){
    return true;
}

        }return false;
    }
    // enCarrito(nuevoProducto){
    //   return  this.productos.find((producto) => 
    //     producto.nombre == nuevoProducto.nombre ) ;
    
    // }
agregar(nuevoProducto){
    let productoEncontrado = this.enCarrito(nuevoProducto);
    if (this.enCarrito(nuevoProducto)){
        alert("El producto " + nuevoProducto.nombre + "ya esta en el carrito.");
let index = this.productos.indexOf(nuevoProducto);
let producto = this.productos[index];
console.log(producto)
    }else{
    this.productos.push(nuevoProducto);
    alert("El producto " + nuevoProducto.nombre + " fue agregado al carrito.  ");
}this.listar();
}
listar(){
    console.clear();
    console.log("Mis productos en el carrito:");
    for (let producto of this.productos){
        console.log("-------");
        console.log("Nombre: " + producto.nombre);
        console.log("Precio: " + producto.precio);
        console.log("Cantidad: " + producto.cantidad);
    }
    // this.productos.forEach((producto) =>   {
    //     console.log("-------");
    //     console.log("Nombre: " + producto.nombre);
    //     console.log("Precio: " + producto.precio);
    //     console.log("Cantidad: " + producto.cantidad);

    // })
    let total = this.productos.reduce((acumulador, producto) => acumulador + producto.precio,0
      );
      alert("TOTAL DEL CARRITO :$" + total);
}
quitar (nombre){
    for (let producto of this.productos){
        if (producto.nombre == nombre){
            let indice = this.productos.indexOf(producto);
            this.productos.splice(indice,1);
            alert ("El producto " + nombre + " fue borrado del carrito");
            this.listar();
        }
    }

}
buscar(nombreProducto){
    let resultado = this.productos.filter((producto) => producto.nombre.includes(nombreProducto));
    console.clear();
    console.log("Productos encontrados:");
    resultado.forEach((producto) =>{
        console.log("-------");
        console.log("Nombre: " + producto.nombre);
        console.log("Precio: " + producto.precio);
        console.log("Cantidad: " + producto.cantidad);
    }    );
}

}
const carrito = new Carrito();

function agregarProducto(){
    let nombre = prompt("Introduzca el nombre del producto");
    let precio = prompt("Introduzca el precio del producto");
const nuevoProducto = {
    nombre: nombre,
    precio: parseInt(precio),
cantidad: 1
}
// console.log(nuevoProducto);
carrito.agregar(nuevoProducto);
}
function quitarProducto(){
    let nombre = prompt("Introduzca el nombre del producto que desea quitar");
    carrito.quitar(nombre);

}
function buscarProducto(){
    let nombre = prompt("Introduzca el nombre del producto que desea buscar");
    carrito.buscar(nombre);

}
console.log(carrito.productos);
