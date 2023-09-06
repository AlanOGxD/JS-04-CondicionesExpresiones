console.log("Estoy vivoooo");


/**
 * 
 * Operador
 * 
 * Un elemento que nos permite realizar una operacion entre dos o mas elementos.
 * 
 * 
 * -Operadores aritmeticos (+,1,*,/)
 * -Operadores de asigancion (=,/ asignacion)
 * Operadores de cadenas (toLower, toUpperCase, trim, toString, concat)
 * operadores logicos (&&, ||, !)
 * Operadores de comparacion (<,>< <=, >=, ==, ===)
 */



/**
 * Operaadores aritmeticos
 * 
 * son operadores que nos permiten tomar valores numeridos como sus operandos y retornar
 */













//suma, se utiliza para sumar dos numeros
let resultado = 5 + 3;

//resta se utiliza para restar un numero de otro
let resultado1 = 10 - 4;

//multiplicacion se utiliza para multiplicar dos numeros
let resultado2 = 6 * 3;

//division, se utiliza para dividir un numero por otro. la division por cero produce un valor especial llamado "infinity" (infinito)
let resultado3 = 15 / 3;

//modulo % se utiliza para obtener el resto de una division entre dos numeros
let resultado4 = 10 % 3;

//incremento se utiliza para aumentar en 1 el valor de una variable
let numero = 5;
numero++;

//Drecemento se utiliza para disminuis en 1 el valor de una variable
let numero1 = 8;
numero--;



//DOBLE IGUAL - igualdad estricta
5 == "5" //true ya que Javascript convierte la caeda "5" a un numero antes de la comparacion

//triple igual - igualdad estricta
5 === "5" //false, porque no son el mismo tipo y los tipos tambien difieren




//ºF = ºC x 1.8 + 32
//let celcius = 10;
let celcius = parseInt(prompt("Ingresa los grados celcius por favor."));

let farenheit = celcius * 1.8 + 32;
console.log("Los grafos °F son: " + farenheit);