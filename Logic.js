const registro = [];
console.log(registro);
//registro.add($('.calculadora-display').val(eval($('.calculadora-display').val())));


function insertar(num){
    $('.calculadora-display').val($('.calculadora-display').val()+num); 
} // "$()" selector, "val" establece o devuelve un valor 
//En esta funcion seleccionamos la clase calculadora display del "index" y obtenemos los valores que tiene el "value"
//y asi insertarle numeros por el parametro.

function Resultado(){
    registro.push($('.calculadora-display').val());
    $('.calculadora-display').val(eval($('.calculadora-display').val()));
}// "$()" selector, "val" establece o devuelve un valor 
//Con el selector "$" seleccionamos la clase "calculadora-display" y el val, va devolver el resultado con la funcion
//eval que sirve para evaluar una expresion pero al poner un ejercicio matematico lo resuelve como una operacion Mat.

function AC(){
    $('.calculadora-display').val('');
}// "$()" selector, "val" establece o devuelve un valor 
//con el selector tomamos la clase calculadora-display y al darle el boton de AC, con el value 
//lo que hacemos es devolver un espacio vacio en la calculadora para que se borre todo.

function Delete(){
    value = $('.calculadora-display').val();
    $('.calculadora-display').val(value.substring(0, value.length-1));
}// "$()" selector, "val" establece o devuelve un valor, "Substring" metodo para extraer una subcadena de texto"
//con esta funcion le ponemos un valor a un value que seria un valor introducido en la calculadora-display
//con esto al haber un numero o varios con el metodo substring que sirve para extraer una subcadena de texto
//hacemos que le quite un valor.

function invert(){
    var numero=eval($('.calculadora-display').val());
    numero = numero*-1;
    $('.calculadora-display').val(numero);
}

function Historial() {
    var histo = '';
    for (let index = 0; index < registro.length; index++) {
        //document.write(registro[index]+'<br>');
        histo +=registro[index]+'\n';
    }
    $('.calculadora-display').val(histo);
    
}