function CentAFaren(centigrados) {
    var resultado = (centigrados * (9/5)) + 32;
    return console.log(centigrados + " °C = " + resultado + " °F");
}

//----------------------------

function tablas(num) {
    for(i = 0; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num*i));
    }
}

//-----------------------------

function contarParametros() {
    return "Esta funcion recibe " + arguments.length + " parametros";
}

console.log(contarParametros(1, 2));

//-----------------------------

var arreglo = [3, 5, 8, 9, 7, 8];
var promedio = 0;
var suma = 0;

for(i = 0; i < arreglo.length; i++) {
  suma += arreglo[i];
  promedio = (suma/arreglo.length);
}

console.log(promedio);

//-----------------------------

function quienganamas() {
    let nombre = "";
    let sueldo = 0;
    if(arguments.length %2 != 0) {
      return "Por favor introduce el nombre y salario de cada empleado";
    } else {
      for(let i = 0; i < arguments.length; i+=2) {
        if(sueldo < arguments[i+1]) {
          nombre = arguments[i];
          sueldo = arguments[i+1];
        }
      }
      return "El mejor empleado es: " + nombre + " con el salario: " + sueldo;
    }
  }
  
  console.log(quienganamas("alan", 5000, "david", 4000, "arturo", 5300));