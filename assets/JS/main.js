var pasajeros=[];
var N = 32; 
var arrAsienReservado=[];
var celdas = document.getElementsByTagName('td');

function Pasajero(nombre, apellido, DNI, asiento){
    this.nombre = nombre;
    this.apellido = apellido;
    this.DNI = DNI;
    this.asiento = asiento;

}

for (var i = 0; i < celdas.length; i++) {
    celdas[i].addEventListener('click',redirect,false);
}

for (var i = 0; i < N; i++) {
      arrAsienReservado[i] = undefined;
}

function redirect(event){
   // document.getElementById("mostrar").innerHTML=(event.target.textContent);
  
   document.getElementById("tablaContenido").innerHTML=" <input type=" +"text "+ "id="+"txtNombre "+" placeholder="+"Nombre " +"required>"+"<br />"+
            "<input type="+"text " + "id="+"txtApellido "+" placeholder="+"Apellido>"+"<br />"+
            "<input type="+"text " +"id="+"txtDNI "+ "placeholder="+"DNI "+ "required>";
    
    document.getElementById("botones").innerHTML = '<button id="btnReservar" onclick="reservar()" >RESERVAR</button>'+
            '<button id="btnCancelar" onclick="cancelar()">CANCELAR</button>';        

    cambiar_color_over(this);
  

}

function cambiar_color_over(celda){
    celda.style.backgroundColor="#66ff33";

    var numAsiento=event.target.textContent;
    var asiento=asientoOcupado(numAsiento);
    
}

function asientoOcupado(numAsiento){
   
    for (var i = 0; i < celdas.length; i++) {
        if(celdas[i].textContent == numAsiento){
            arrAsienReservado[i] =numAsiento;
          //  this.asiento=arrAsienReservado[i];
            
        }
    }
    //console.log(arrAsienReservado);
    return numAsiento;
}

function reservar(){
    var nombre = document.getElementById("txtNombre").value;
    var apellido = document.getElementById("txtApellido").value;
    var DNI = document.getElementById("txtDNI").value;
    var nAsiento =asientoOcupado();

    var pasajeroObjt = new Pasajero(nombre, apellido, DNI, nAsiento);
    pasajeros.push(pasajeroObjt);
    console.log(pasajeros);
    /*if(DNI.value == null)
    {
        //celda.style.backgroundColor="#66ff33";
        return true;
    }   
    else{
        return false;
    } 
*/
}
  



function buscar(){
    
    var DNIbusqueda = document.getElementById("dniBusqueda").value;
    for(var i=0; i<pasajeros.length; i++){
        
        var datos = pasajeros[i];

        if( datos.DNI == DNIbusqueda){

            document.getElementById("tablaContenido").innerHTML=" <input type=" +"text "+ "id="+"txtNombre "+" placeholder="+"Nombre " +"required>"+"<br />"+
            "<input type="+"text " + "id="+"txtApellido "+" placeholder="+"Apellido>"+"<br />"+
            "<input type="+"text " +"id="+"txtDNI "+ "placeholder="+"DNI "+ "required>";

            
            txtNombre.value = datos.nombre;
            txtApellido.value = datos.apellido;
            txtDNI.value = datos.DNI;
        }
    }
    
}


function cancelar(){
    var DNI = document.getElementById("txtDNI").value;
     for(var i=0; i<pasajeros.length; i++){  
        var datos = pasajeros[i];
        pasajeros.splice(i,1);
        alert("Pasajero eliminado");
    }

}

function listar(){
    var resultado = document.getElementById("resultado");
    for(var i=0; i<pasajeros.length; i++){
        var datos = pasajeros[i];
        resultado.innerHTML = "Nombre del Pasajero: " + datos.nombre + "<br />"+
                              "Apellido del Pasajero: " + datos.apellido + "<br />"+
                              "DNI del Pasajero: "+ datos.DNI + "<br />"+
                              "Número del Asiento: " + datos.asiento;
    }
}
