# Curso Práctico de Javascript
Repositorio del curso práctico de Javascript de Platzi.

En este Curso habrá tres talleres para practicar con Javascript e implementarlo en HTML. Los pasos a seguir para cada problema que tengamos serán los siguientes:
- **Primer paso:** Definir las fórmulas.
- **Segundo paso:** Implementar las fórmulas en JS.
- **Tercer paso:** Crear funciones.
- **Cuarto paso:** Integrar Javascript con HTML.

# Taller de Figuras Geométricas
En este taller se hará una calculadora para hallar el perímetro y el área de un cuadrado, un triángulo y un círculo.
## Figuras Geométricas Parte 1
He creado las operaciones para hallar los valores del perímetro y área de las distintas figuras geométricas con medidas fijas.
## Figuras Geométricas Parte 2
En esta sección he Cambiado gran parte del código para reemplazar las variables por funciones y de esa manera hacer medidas que puedan cambiar y no estén fijas.
## Figuras Geométricas Parte 3
En esta sección he agregado elementos en el HTML para generar una mejor interacción desde la página, también le añadí estilos para que se vea más amigable y fácil de usar."
## Figuras Geometricas parte 4 (Final)
En esta seccion terminamos de completar el reto de un triangulo isoceles"
# Taller de Porcentajes y Descuentos
En este taller se hará una calculadora para mostrar el descuento de un elemento.
## Parte 1
En esta sección he creado la sección principal del HTML y las funciones en Javascript que usaré durante este taller.
## Parte 2 (Final)
En esta sección la tarjeta con el formulario para que el usuario pueda ejecutar la función sin necesidad de ir a la consola.
# Taller de Promedio, Moda y Mediana
En este taller se realizará un programa para realizar estas tres operaciones.

## Parte 1
Para esta primera sección, se utilizará un método de los arrays para sumar todos los elementos que tenga en su interior.

## Parte 2

Para esta sección que es Mediana utilicé el método .sort() para ordenar los elementos de menor a mayor, dentro del sort se debe colocar una función para que se ordenen adecuadamente, la función es la siguiente:
```
(a,b) => a-b;
```
Luego hice una función con una condicional dentro para saber si la cantidad de elementos es par o impar y dependiendo de la respuesta que haga un cálculo y determinar la mediana.

## Parte 3

Para esta sección hice muchos procedimientos, fue el más difícil.
- En primer lugar se debe declarar la lista con los números.
- Declarar una variable con valor de un objeto vacío (es donde vamos a guardar nuestro array con los números como clave y la cantidad de veces que se repite como valor.
- Usar el método .map() para hacer el proceso del punto anterior.
	```
	array.map(function(element){
            if(listCount[element]){
            listCount[element] += 1;
            } else {
            listCount[element] =1;
         }
        }
    );
    ```
- En este punto ya tendremos un array con los elementos contados.
- Una vez que hayamos terminado esos procedimientos queda hacer otro array con los elementos mapeados usando la función Object.entries.
```
	const listCountArray = Object.entries(listCount).sort((a,b) => a[1] -b[1]));
```
- Finalmente declarar una última variable que será la que contenga el valor de la moda.
```
	const mode = listCountArray[ListCountArray.length -1][0];
```

# Parte 3

- Declarar la lista (Array).



#Taller de Salarios
En este taller vamos a calcular la mediana de salarios y el top 10% de las personas de una lista.

## Parte 1

En esta sección hice una lista de objetos que contiene el nombre de las personas y su salario, de esta lista de objetos hice un .map() para obtener una lista de solo los salarios.
Luego ordené ascendentemente la lista de salarios con el método .sort() para poder sacar la mediana.
Finalmente hice una función para hacer este último cálculo (mediana).
