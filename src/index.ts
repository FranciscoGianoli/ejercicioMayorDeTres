/*EJERCICIO MAYOR DE TRES
Definición de las tres variables 
Aplicacion del Number 
Inclusion del prompt  para interactuar con el usuario
Resolucion logica a traves de condicionales -if y else if- para determinar que numero es mayor en base a los valores que se ingresen*/

let numero1 = Number(prompt("Ingrese el primer numero"));
let numero2 = Number(prompt("Ingrese el segundo numero"));
let numero3 = Number(prompt("Ingrese el tercer numero"));

if (numero1 > numero2 && numero1 >= numero3) {
  console.log("el numero mayor es:" + numero1);
} else if (numero2 >= numero1 && numero2 >= numero3) {
  console.log("el numero mayor es:" + numero2);
} else if (numero3 >= numero1 && numero3 >= numero2) {
  console.log("el numero mayore es:" + numero3);
}
