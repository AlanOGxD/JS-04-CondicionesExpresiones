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
 * son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor numerico unico. Corresponden a operaciones matematicas.
 * 
 * 
    Suma (+)
    Resta (-)
    Multiplicación (*)
    División (/)
    Residuo / Módulo (%)
    Exponenciación (**)
    Incremento (++)
    Decremento (--)

 */


//Variables
let num1 = 10;
let numero2 = 2;
let numero3 = "5";

//Operaciones
suma = num1 + numero2; //12
resta = num1 - numero2; //8
multiplicación = num1 * numero2;
division = num1 / numero2;
residuo = num1 % numero2;
exponenciacion = 10 ** 2; //es obsoleto porque ya hay un método para esto.

console.log("Valor del número 1 antes del incremento: ", num1);
//Los valores si se pueden reasignar
incremento = num1++; //11
decremento = numero2--; //1

console.log("Valor del número 1 después del incremento: ", incremento);

//Ejemplo
//2{5*6(4) + [3-(5-76)]};
//operacionCompleja = 10 + 5 / 2(5 - 6);



//Impresiones en pantalla
console.log("Suma de 10 + 2: ", suma); //1 forma de mostrar la suma
console.log("Suma de 10 + 2: ", (num1 + numero2)); //segunda forma
console.log("Suma de 10 + 2: ", 10 + 2); //tercera forma
console.log("Resta de 10 - 2: ", resta);


/**
 * 
 * Operadores de comparacion
 * 
 * Operadores que nos permiten comparar dos datos, y al hacerlo obtendremos un valor booleano (true o false)
 * 
 * -mayor que (>)
 * -menor que (<)
 * -mayor o igual que (>=)
 * -menor o igual que (<=)
 * -igual (==)
 * -estrictamente igual (===)
 * -no es igual (!=)
 * -no es estrictamente igual (!==)
 * 
 * 
 * 
 * 
 * Igual (==)
 * sirve para comparar que dos valores sean iguales
 * 
 */


let numeroComparacion1 = 23;
let numeroComparacion2 = 13;
let numeroComparacion3 = 13;
let numeroComparacion4 = "13";

/*
13 == "13" //true
13 === "13" //false
23 > 12  //true
23 < 12  //true
*/

if (edadFelipe >= 18) {
    console.log("Pueden ir a la pachangona");
} else {
    console.log("Te quedas en casa");
}


//dos negaciones es una afirmacion
//!vamos a comer (no vamos a comer)
//!no m gusta java (no no me gusta java) (no*no = si)




/**
 Operaciones de asignacion

 son los operadores que utilizan para asignar un valor a una variable, se usa el operador =

let edad = 24;
let saldo = 0;


*/


/**
 * 
 Operacores logicos

 nos devuelven un resultado a partir de que se cumpla (o no) una condicion, el resultado es boolean (true o false)


-AND &&: Sirve para determinar si dos expresiones son verdaderas. Si ambas son verdaderas, el resultado es verdadero. si alguna de ellas es falsa, todo el resultado es falso. Si ambas son falsas, todo es falso.

*/

let tengoUnCrush = true;
let miCrushMeQuiere = true;

if (tengoUnCrush && miCrushMeQuiere) {
    console.log("Estoy feliz");
} else {
    console.log("Haganse a un lado que me quiero automorir");
}



/*

-OR ||: sirve para determinar si dos expresiones son falsaas. Si cualquiera de las dos afirmaciones es verdadero, todo es verdadero. Si las dos son falsas, todo es falso.

*/

if (hayChilaquilesVerdes || hayCarneEnSuJugo) {
    console.log("Felipe desayuna chido");
} else {
    console.log("Felipe no desayuna chido");
}

/*
NOT ! : Regresa lo contario de lo que evaluamos
*/


//comentario incompleto
let escenario1 = (edadFelipe >= 18 && saldoFelipe == !0);

let escenario2 = (edadFelipe >= 18 && amigosQueInviten == true);


if (escenario1 || escenario2) {

}

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



//DOBLE IGUAL - igualdad 
//5 == "5" //true ya que Javascript convierte la caeda "5" a un numero antes de la comparacion

//triple igual - igualdad estricta
//5 === "5" //false, porque no son el mismo tipo y los tipos tambien difieren

//Ejercicio
//ºF = ºC x 1.8 + 32
let celcius = 10;
//let celcius = parseInt(prompt("Ingresa los grados celcius por favor."));

let farenheit = celcius * 1.8 + 32;
console.log("Los grafos °F son: " + farenheit);

