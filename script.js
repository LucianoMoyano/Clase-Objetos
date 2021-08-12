("-----------------------------------CLASE DE OBJETOS------------------------")

/* Pensando en nuestro dia a dia , cuando hablamos de un objeto en particular, ya sea una mesa, no hablamos de una lista ordenada, sino de una lista de propiedades. 
Por ejemplo, una mesa tiene una altura, un color , un material, ... No importa el orden de la propiedades, sino el nombre de las mismas. Por eso es que en este caso, no usamos arreglos, el orden deja de ser importante para acceder a los valores.

El como accedo a los valores en un arreglo difiere a como accedo en los objetos. 

No necesito tener un orden ya que no importa la posicion en la que se encuentren los valores, sino a que propiedad corresponden cada uno. 

Se declara con la apertura y cierre de las { } , tanto con o sin las proiedades dentro. 

var nombreObjeto = {
  nombrePropiedad1: valorPropiedad1,
  nombrePropiedad2: valorPropiedad2,
  ...
};
Es sumamente importante poner las comas despes de cada propiedad dentro del objeto! No basta con incluir un slato de linea 

-----------DOT NOTATION VS BRACKET NOTATION--------------

Al igual que cuando almacenamos otros tipos de datos en las variables, podemos cambiar los valores de las propiedades del objeto en cualquier momento durante un programa, al usar la notación de punto o de corchetes:

BRACKET NOTATION => nombreArreglo["nombre propiedad"]


DOT NOTATION => nombreArreglo.nombrePropiedad  


------------ ELIMINANDO UNA PROPIEDAD -----------------

Si quisieramos eliminar una propiedad entera, tanto su key como su valor podemos usar la palabra reservada delete : 

delete arreglo.key --> dot notation 
delete arreglo["key"] ---> bracket notation 
 */

/* 
 EJERCICIO ECOMMERCE

Creando Stock del Ecommerce de Luciano:

Luciano se incorporo a la empresa y nos pide que le creemos su primer stock con su precio correspondiente y la cantidad de articulos que nos da...

 Samsung TV= 6000, art=10
 DELL notbook= 4000, art=30
 Auriculares Sony= 1500, art=15
 Monitor Philips= 12000, art=20
 Teclado logitech= 3000, art=5

Pasar todos estos productos y articulos a sus objetos correspondientes.

*/

let ecommerce = [
  { nombre: "Samsung TV", precio: 6000, articulos: 10 },
  { nombre: "DELL notbook", precio: 4000, articulos: 30 },
  { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
  { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
  { nombre: "Teclado logitech", precio: 3000, articulos: 5 },
];

/*
Elements

Nuestro cliente Luciano nos pide que de todo su inventario creemos una funcion que nos devuelva solamente los nombres de toso los productos que tiene en su ecommerce, ademas crear lo mismo para que nos devuelva el precio

Escribí una función llamada Elements que tenga dos parámetros, en primer lugar un arreglo de objetos y ademas el nombre de una propiedad. La función tendrá que devolver un arreglo que solamente contenga los valores dentro de la propiedad recibida.

Utilizar la siguiente variable:

var ecommerce = [{ nombre: "Samsung TV", precio: 6000}, { nombre: "DELL notbook", precio: 4000 }, {nombre:"Auriculares Sony", precio: 1500}, {nombre:"Monitor Philips", precio:12000}, {nombre:"Teclado logitech", precio: 3000}]

Ejemplo: 

Elements(ecommerce, 'nombre') // ["Samsung TV", "DELL notbook", "Auriculares Sony", "Monitor Philips", "Teclado logitech"]

Luciano nos pide que creems 3 funciones para devolver esto..
1. Utilizando metodo .push()
2. Solamente javascrip Vanilla, utilizando .length()
3. Utilizando metodo. forEach()
*/

let ecommerce = [
  { nombre: "Samsung TV", precio: 6000 },
  { nombre: "DELL notbook", precio: 4000 },
  { nombre: "Auriculares Sony", precio: 1500 },
  { nombre: "Monitor Philips", precio: 12000 },
  { nombre: "Teclado logitech", precio: 3000 },
];

//Metodo .push()
function Elements(array, property) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i][property]);
  }
  return newArr;
}

Elements(ecommerce, "nombre")

("---------------------------------");

//JS vanilla
function Elements(arr, k) {
  newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = arr[i][k];
  }
  return newArr;
}

("----------------------------------");

//Metodo .forEach()
function Elements(array, property) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push(element[property]);
  });
  console.log(newArray);
}
Elements(ecommerce, "precio");

/*
TotalDeArticulos

Lo que nos pide Luciano ahora es que saquemos el valor total de todos los articulos que se encuentren en la tienda, pero que esten separados por seccion, cada articulo diferenciado de otro sin estar en el mismo arreglo!!

Vamos a tener que crear una nueva función llamada TotalDeArticulos que como parametro que tenga, haga referencia a un arreglo de productos de nuestro ecommerce. La función en general tendra que devolver un nuevo arreglo con objetos que tengan el nombre de cada producto y el valor total de todos los Articulos que se ecuentren en la tienda 

Utilizar la siguiente variable:

var ecommerce = [{ nombre: "Samsung TV", precio: 6000, articulos:10}, { nombre: "DELL notbook", precio: 4000, articulos:30 }, {nombre:"Auriculares Sony", precio: 1500, articulos:15}, {nombre:"Monitor Philips", precio:12000, articulos:20}, {nombre:"Teclado logitech", precio: 3000, articulos:5}] 

Output esperado:

TotalDeArticulos(ecommerce) // Debe retornar (5) [{…}, {…}, {…}, {…}, {…}]
 {Samsung TV: 60000}
 {DELL notbook: 120000}
 {Auriculares Sony: 22500}
 {Monitor Philips: 240000}
 {Teclado logitech: 15000} 
*/

let ecommerce = [
  { nombre: "Samsung TV", precio: 6000, articulos: 10 },
  { nombre: "DELL notbook", precio: 4000, articulos: 30 },
  { nombre: "Auriculares Sony", precio: 1500, articulos: 15 },
  { nombre: "Monitor Philips", precio: 12000, articulos: 20 },
  { nombre: "Teclado logitech", precio: 3000, articulos: 5 },
];

function TotalDeArticulos(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = { [arr[i]["nombre"]]: arr[i]["precio"] * arr[i]["articulos"] };
  }
  return newArr;
}

TotalDeArticulos(ecommerce);

("------------------------------------------------------");

function TotalDeArticulos(array) {
  let newArray = [];
  array.forEach((element) => {
    let newObject = {
      [element["nombre"]]: element["precio"] * element["articulos"],
    };
    newArray.push(newObject);
  });
  console.log(newArray);
}
TotalDeArticulos(ecommerce);






/* Luciano .A Moyano - 2021 */