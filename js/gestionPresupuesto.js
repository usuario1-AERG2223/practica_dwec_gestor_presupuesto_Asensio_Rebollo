// TODO: Crear las funciones, objetos y variables indicadas en el enunciado
  
// TODO: Variable global
let presupuesto;
presupuesto = 0;
let gastos = [];
let idGasto = 0;

//Funcion actualizarPresupuesto
function actualizarPresupuesto(presu) {
    // TODO
    if(isNaN(presu))
        return -1;

    else if(presu < 0)
        return -1;

    presupuesto = presu;
    return presupuesto;   
}

//Funcion mostrarPresupuesto
function mostrarPresupuesto() {
    return `Tu presupuesto actual es de ${presupuesto} €`;
}
//Funcion listarGastos
function listarGastos(){
return `Los gastos son: ${gastos}`;
}
//Funcion anyadirGasto
function anyadirGasto(){

}
//Funcion borrarGasto
function borrarGasto(){

}
//Funcion calcularTotalGastos
function calcularTotalGastos(){

}
//Funcion calcularBalance
function calcularBalance(){

}
//Función CrearGasto
function CrearGasto(descripcion,valor) {
    // TODO
        // Verifica que descripcion sea una cadena y valor sea un número no negativo
        // ver issue para modificar linea
        if (typeof descripcion === "string")  {
            this.descripcion = descripcion;
        }
        else
        this.descripcion = '';

        if (typeof valor === "number" && valor >= 0) {
                this.valor =valor ;
        }
        else  {  
                this.valor =0;
        }
        
    //Funcion MostrarGasto
        this.mostrarGasto = function() {
            return `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €`;    
        }
    //Funcion actualizarDescripcion
        this.actualizarDescripcion = function(nuevaDescripcion) {
            if (typeof descripcion === "string"){
                this.descripcion = nuevaDescripcion;
            }
            else
            this.descripcion = "";   
        }
        this.actualizarValor = function(nuevoValor) {
            if (typeof nuevoValor === "number" && nuevoValor >= 0) {
                this.valor =nuevoValor; 
            }       
        }
        
    }
// NO MODIFICAR A PARTIR DE AQUÍ: exportación de funciones y objetos creados para poder ejecutar los tests.
// Las funciones y objetos deben tener los nombres que se indican en el enunciado
// Si al obtener el código de una práctica se genera un conflicto, por favor incluye todo el código que aparece aquí debajo
export   {
    mostrarPresupuesto,
    actualizarPresupuesto,
    CrearGasto,
    listarGastos,
    anyadirGasto,
    borrarGasto,
    calcularTotalGastos,
    calcularBalance
    }

