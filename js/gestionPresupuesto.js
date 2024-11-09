// TODO: Crear las funciones, objetos y variables indicadas en el enunciado
  
// TODO: Variable global
let presupuesto;
presupuesto = 0;
let gastos = [];//Variable global gastos
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
//Funcion listarGastos.Devuelve la variable gastos
function listarGastos(){
   return gastos;
   }

//Funcion anyadirGasto
function anyadirGasto(gasto){

    gasto.id = idGasto;//Añadir a array gastos, la propiedad idGastos
    idGasto++;//Incrementamos el id el siguiente gasto
    gastos.push(gasto);//Añado el gasto al array gastos
}
//Funcion borrarGasto
function borrarGasto(idGasto){
   gastos = gastos.filter(gasto =>gasto.id !== idGasto);//Se crea un nuevo array con los objetos "gasto",cuyo id quen no coincida con elidGasto.   
}

//Funcion calcularTotalGastos
//Usamos reduce del objeto gastos, para que nos devuelva un solo valor.Le pasamos un acumulador y el valor.Valor inicial 0
function calcularTotalGastos(){
    return gastos.reduce(function(acc,gasto){
         return acc + gasto.valor;
    }, 0);     
}
//Funcion calcularBalance
function calcularBalance(){
   let TotalGastos = calcularTotalGastos();// creamos la variable TotalGastos, pasandole la funcion calcularTotalgastos
   let balance = presupuesto - TotalGastos;// Hacemos la diferencia entre el presupuesto y el total de gastos
   return balance;     
}
//Función CrearGasto
function CrearGasto(descripcion,valor,fecha,...etiquetas) {
    // TODO
        //Propiedades
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
        //Se comprueba si fecha tiene un formato valido numérico con date.parse
        if (isNaN(Date.parse(fecha))) {
            this.fecha = Date.now();
        } else {
            this.fecha = Date.parse(fecha);
        }
//Si etiquetas es un array,se guarda como un array
        if(Array(etiquetas)) {
            this.etiquetas = etiquetas;
        }
        else //sino devuelve un array vacio
        this.etiquetas= [];
        
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
    //Funcion actualizarValor
    this.actualizarValor = function(nuevoValor) {
            if (typeof nuevoValor === "number" && nuevoValor >= 0) {
                this.valor =nuevoValor; 
            }       
    }
     //Método actualizarFecha  
    this.actualizarFecha = function(nuevaFecha){
           let fecha = Date.parse(nuevaFecha);//Convertimos la fecha a numero para comprobar que sea valida
           if (fecha) {
            this.fecha = fecha;       
        }   
    }
        //Método AnyadirEtiquetas
    this.anyadirEtiquetas = function(...nuevasEtiquetas){
            nuevasEtiquetas.forEach(etiqueta => {
                if(!this.etiquetas.includes(etiqueta)) {
                    this.etiquetas.push(etiqueta);
                }
            })   
    } 
        //Falta rellenar
    this.borrarEtiquetas = function(...borraEtiquetas){
        for (var i = 0; i < borraEtiquetas.length; i++) { 
            var etiqueta = borraEtiquetas[i]; //almacena la etiqueta en la variable etiqueta
            var posicion = this.etiquetas.indexOf(etiqueta);//devuelve la posicion de la etiqueta.Si no la encuentra devuelve -1
             if (posicion !== -1) {
                 this.etiquetas.splice(posicion, 1);//Elimina la etiqueta por medio de splice.Elimina la etiqueta en la posicion indicada
                 }
         }
    }
     //Método mostrarGastoCompleto
    this.mostrarGastoCompleto = function() {
        let texto = `Gasto correspondiente a ${this.descripcion} con valor ${this.valor} €.
        Fecha: ${new Date(this.fecha)} 
        Etiquetas: \n`
            for (let etiqueta of this.etiquetas) { 
                texto += `- ${etiquetas}\n`;
             } 
     return texto; 
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

