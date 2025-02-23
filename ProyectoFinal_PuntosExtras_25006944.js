<!DOCTYPE html>
<!--
Created using JS Bin
http://jsbin.com

Copyright (c) 2025 by anonymous (http://jsbin.com/nobudoxezu/1/edit)

Released under the MIT license: http://jsbin.mit-license.org
-->
<meta name="robots" content="noindex">
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<script id="jsbin-javascript">
// Precio base de la cotización, en quetzales (se puede modificar)
var precio_base = 2000;

// Valores de los recargos por edad
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

// Valores de los recargos para el cónyuge (por edad)
var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

// Recargo por hijos: 20% del precio base por cada hijo
var hijos_recargo = 0.2; // 20%

// Recargo extra:
// Por cada propiedad: 35% del precio base
var propiedad_recargo = 0.35; // 35%
// Sobre el salario: 5% del salario del asegurado
var salario_recargo = 0.05; // 5%

//noprotect
var salir = ""; // Variable para controlar la salida del ciclo

while(salir === ""){
  // Ingreso de datos para la cotización
  var nombre = prompt("Ingrese su nombre:");
  var edad = prompt("¿Cuántos años tiene? Ingrese solamente números:");
  var edad_numero = parseInt(edad);
  
  // Verificar que el asegurado sea mayor de edad
  if (edad_numero < 18) {
    alert("El asegurado debe ser mayor de edad para cotizar el seguro.");
  } else {
    // Estado civil
    var casado = prompt("¿Está casado actualmente? (SI/NO)");
    var edad_conyuge_numero = 0;
    if (casado.toUpperCase() === "SI") {
      var edad_conyuge = prompt("¿Qué edad tiene su esposo/a?");
      edad_conyuge_numero = parseInt(edad_conyuge);
    }
  
    // Hijos
    var hijos = prompt("¿Tiene hijos o hijas? (SI/NO)");
    var cantidad_hijos = 0;
    if (hijos.toUpperCase() === "SI") {
      cantidad_hijos = prompt("¿Cuántos hijos tiene?");
      cantidad_hijos = parseInt(cantidad_hijos);
    }
  
    // Propiedades
    var propiedades = prompt("¿Cuántas propiedades tiene?");
    var cantidad_propiedades = parseInt(propiedades);
  
    // Salario o ingresos mensuales
    var salario = prompt("Ingrese su salario o ingresos mensuales:");
    var salario_numero = parseFloat(salario);
  
    // Inicializar recargo total
    var recargo_total = 0;
    var recargo = 0;
  
    // 1. Recargo por la edad del asegurado
    if (edad_numero >= 18 && edad_numero < 25) {
      recargo = precio_base * edad_18;
    } else if (edad_numero >= 25 && edad_numero < 50) {
      recargo = precio_base * edad_25;
    } else if (edad_numero >= 50) {
      recargo = precio_base * edad_50;
    }
    recargo_total += recargo;
  
    // 2. Recargo por la edad del cónyuge (si está casado)
    if (casado.toUpperCase() === "SI") {
      if (edad_conyuge_numero >= 18 && edad_conyuge_numero < 25) {
        recargo = precio_base * casado_18;
      } else if (edad_conyuge_numero >= 25 && edad_conyuge_numero < 50) {
        recargo = precio_base * casado_25;
      } else if (edad_conyuge_numero >= 50) {
        recargo = precio_base * casado_50;
      }
      recargo_total += recargo;
    }
  
    // 3. Recargo por la cantidad de hijos
    if (hijos.toUpperCase() === "SI") {
      recargo = precio_base * hijos_recargo * cantidad_hijos;
      recargo_total += recargo;
    }
  
    // 4. Recargo extra por propiedades: 35% del precio base por cada propiedad
    recargo = precio_base * propiedad_recargo * cantidad_propiedades;
    recargo_total += recargo;
  
    // 5. Recargo extra por salario: 5% del salario del asegurado
    recargo = salario_numero * salario_recargo;
    recargo_total += recargo;
  
    // Calcular el precio final de la cotización
    var precio_final = precio_base + recargo_total;
  
    // Mostrar los resultados
    alert("Cotización para " + nombre + ":");
    alert("El recargo total será de: " + recargo_total.toFixed(2) + " quetzales");
    alert("El precio final de la cotización es: " + precio_final.toFixed(2) + " quetzales");
  }
  
  // Preguntar si se desea repetir el proceso
  salir = prompt("Para terminar, escriba 'Salir'. De lo contrario, se repetirá el proceso.");
  
} 


alert("Cotizaciones finalizadas. Gracias por utilizar el cotizador.");

</script>
</body>
</html>