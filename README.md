# Proyecto-Final---Intro-a-Progra
# Cotizador Automático de Seguros TK-U

## Descripción

Este programa es una solución automatizada para generar cotizaciones de seguros para la empresa TK-U, ubicada en la ciudad de Jedha. Actualmente, la empresa realiza cotizaciones manualmente, lo que limita la cantidad de cotizaciones diarias y genera retrasos en la entrega. Con este cotizador, se pretende agilizar el proceso y mejorar la atención al cliente.

## Funcionamiento del Programa

El programa realiza lo siguiente:
1. **Ingreso de Datos:**
   - Solicita al usuario (asegurado) su nombre, edad, estado civil, y en caso de estar casado, la edad del cónyuge.
   - Consulta si el asegurado tiene hijos y, de ser así, la cantidad de hijos.
   - Solicita el número de propiedades que posee el asegurado.
   - Solicita el salario o ingresos mensuales del asegurado.

2. **Validaciones:**
   - Verifica que el asegurado sea mayor de edad (mínimo 18 años). Si no es así, se descarta la cotización.

3. **Cálculo de Recargos:**
   - **Por Edad:** Se aplica un recargo basado en el rango de edad del asegurado:
     - 18 a 24 años: 10% del precio base.
     - 25 a 49 años: 20% del precio base.
     - 50 años o más: 30% del precio base.
   - **Por Edad del Cónyuge:** Si el asegurado está casado, se aplica un recargo similar según la edad del cónyuge.
   - **Por Hijos:** Se aplica un 20% del precio base por cada hijo.
   - **Recargo Extra por Propiedades:** Se añade un 35% del precio base por cada propiedad.
   - **Recargo Extra por Ingresos:** Se añade un 5% del salario del asegurado.

4. **Precio Final:**
   - El precio final de la cotización se obtiene sumando el precio base y todos los recargos.

5. **Repetición:**
   - El programa solicita cotizaciones de forma repetitiva hasta que el usuario ingresa la palabra "Salir" al solicitar su nombre.

## Consideraciones del Problema

- **Validación de Edad:** Se asegura que solo se realicen cotizaciones para mayores de edad.
- **Cálculo Individual:** Cada recargo se calcula individualmente y luego se suma al total.
- **Flexibilidad:** El usuario puede solicitar cotizaciones sucesivas, lo que permite atender a múltiples clientes en una misma sesión.
- **Recargos Extra:** Se han añadido recargos adicionales por propiedades e ingresos, ampliando el modelo de cotización original.

## Posibles Mejoras

- **Validación de Datos:** Se podría implementar validación adicional para asegurar que los datos ingresados sean numéricos y coherentes.
- **Interfaz Gráfica:** Crear una interfaz web en lugar de utilizar `prompt` y `alert` para mejorar la experiencia del usuario.
- **Almacenamiento de Cotizaciones:** Integrar el programa con una base de datos para almacenar las cotizaciones y generar reportes.
- **Modularización del Código:** Dividir el código en funciones para facilitar el mantenimiento y la extensión del programa.

## Instrucciones de Uso

1. Clona el repositorio en tu máquina.
2. Abre el archivo JavaScript en tu editor de código.
3. Ejecuta el programa en un navegador o en un entorno que soporte JavaScript.
4. Ingresa los datos solicitados y realiza las cotizaciones. Escribe "Salir" cuando desees finalizar.
