const Producto = function(corte, precio, kilos){
    this.corte = corte
    this.precio = precio
    this.kilos = kilos
}
let producto1 = new Producto("asado", 6000, 35)
let producto2 = new Producto("asado americano", 6100, 50)
let producto3 = new Producto("vacio", 6500, 40)
let producto4 = new Producto("morcilla criolla", 3100, 12)
let producto5 = new Producto("morcilla vasca", 4000, 25)
let producto6 = new Producto("tapa de asado", 5950, 7)
let producto7 = new Producto("tapa de nalga", 6100, 6)
let producto8 = new Producto("chorizos de cerdo", 4600, 38)
let producto9 = new Producto("chorizos bombon", 4800, 30)
let producto10 = new Producto("bondiola", 6300, 25)

let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10]

function filtrarProducto(){
    let recorte= prompt("que corte desea para su parrillada ?").toUpperCase().trim()
    let resultado = lista.filter( (producto)=> producto.corte.toUpperCase() .includes(recorte))
    
    if(resultado.length >0){
        console.table(resultado)
    }else{
        alert("no tenemos " + recorte + " en este momento")

}
}
function agregarProducto() {
    let corte = prompt("¿ingresa el corte que desees?").trim();
    let precio = parseFloat(prompt("Ingresa el precio del corte"));
    let kilos = parseFloat(prompt("ingresa los kilos disponibles"))

    if (isNaN(precio) || isNaN(kilos) || corte === "") {
        alert("Por favor, verifique que los datos ingresados sean correctos");
        return;
    }
    
    let producto = new Producto (corte, precio, kilos);

    if (lista.some((p) => p.corte === producto.corte)) {
        alert("Tenemos disponible ese corte en este momento");
        return;
    }

    lista.push(producto);
    console.table(lista);
}