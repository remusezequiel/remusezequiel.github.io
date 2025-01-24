---
title: Tipo de datos en Python
tags: [python, tipo de datos]
style: border
color: primary
description: En este post, estudiamos los distintos tipos de datos en python. Aprenderemos a utilizar numeros, cadenas de caracteres, listas y demas tipos de datos.
---



# **Números y strings**

En primer lugar, Python puede manejar enteros en distintas bases, números con coma flotante y números complejos.


```python
a = 8
b = 8.0
c = 1.4e80
d = 0b100
e = 43.2 + 3j
```

Podemos verificar el tipo de datos usando type()


```python
print(type(a))
print(type(b))
print(type(c))
print(type(d))
print(type(e))
```

    <class 'int'>
    <class 'float'>
    <class 'float'>
    <class 'int'>
    <class 'complex'>
    

Por supuesto, hay límites al tamaño de las variables que se pueden guardar en memoria.

En el caso de números con coma flotante, el número más grande posible (en módulo) es cercano a $1.8 \times 10^{308}$, mientras que el número con coma flotante positivo más pequelo es $5 \times 10^{-324}$.

Todo lo que está por arriba de $1.8 \times 10^{308}$ es infinito y todo lo que está por debajo de $5 \times 10^{-324}$ es 0.


```python
print(1.8e308*10)
print(5e-324/10)
```

    inf
    0.0
    

Otro tipo de dato común son los strings (str).



```python
a = "hola mundo"
b = 'mucho gusto'
print(type(a))
print(type(b))
print(a)
print(b)
```

    <class 'str'>
    <class 'str'>
    hola mundo
    mucho gusto
    

Los strings se pueden delimitar con comillas simples o dobles.
Esto es útil si quiero incluir comillas simples en el string (encierro con dobles) o si quiero incluir comillas dobles (encierro con simples)


```python
a = "Una comilla simple ' en mi string"
b = 'Una comilla doble " en mi string'
print(a)
print(b)

```

    Una comilla simple ' en mi string
    Una comilla doble " en mi string
    

Pueden verificar que esto no funciona si encierro con el mismo tipo de comillas que usé dentro del string. Esto puede hacerse también usando \\' y \\" en lugar de ' y ". La barra delante de un caracter se denomina secuencia de escape y hace que ese caracter reciba un tratamiento especial.

Hay varios ejemplos, tales como \\n para una nueva linea, \\t para una tabulación, o \\\ si quiero que aparezca una sola barra invertida.




```python
print("hola\nmundo")
print("hola\tmundo")
print("hola\\mundo")
```

    hola
    mundo
    hola	mundo
    hola\mundo
    

Puede que en alguna aplicación no nos interese el uso de la barra invertida para señalizar secuencias de escape. En ese caso podemos agregar una r delante del string para ignorar sistemáticamente todas ellas.



```python
print(r'hola\nmundo')
```

    hola\nmundo
    

Por último, es posible encerrar strings en triple comillas de forma tal que se reproducen todas las barras invertidas y además no es necesario usar secuencia de escape para empezar nuevas lineas:


```python
frase = """hola
mundo
\que tal?"""
print(frase)
```

    hola
    mundo
    \que tal?
    

Por último, hay un tipo de datos que se utiliza para codificar variables booleanas y tiene dos valores posibles True (verdadero) y False (falso). Podemos operar con estas variables usando operados booleanos como and y or


```python
print(True or False)
print(True and False)
```

    True
    False
    

El resultado de evaluar una proposición es una variable booleana



```python
print(3==3)
print(3>2 or 2>3)
print(2!=0 and 5<0)

```

    True
    True
    False
    

# **Listas**

Las listas son una colección ordenada de elementos de distinto tipo, indexada desde 0 hasta n-1, donde n es la cantidad de elementos de la lista. La cantidad de elementos de la lista puede obtenerse usando la función len()


```python
a = [1, 1.2, [3], True, 'hola', 3+3j]
print(len(a))
print(a[0])
print(a[len(a)-1])
```

    6
    1
    (3+3j)
    

Notamos que las listas también pueden tener a otras listas como elementos (es el caso del elemento en la posición 2 de la lista de arriba).

Es posible seleccionar slices de listas usando una notación del estilo i:j, lo cual da una lista con los elementos desde la posición i a la j-1 (empezando desde 0).



```python
print(a[2:5])
```

    [[3], True, 'hola']
    

Hay otras formas más sofisticadas de hacer slices (por ejemplo, con números negativos) pero no lo necesitamos todavía.

En Python, todo loop for se itera sobre una lista.


```python
for item in a:
  print(item)
```

    1
    1.2
    [3]
    True
    hola
    (3+3j)
    

Si queremos iterar entre los números i, j-1 podemos usar la función range(), que genera una lista de enteros entre esos valores.


```python
for n in range(4,10):
  print(n)
```

    4
    5
    6
    7
    8
    9
    

Hay muchas operaciones que podemos hacer con listas, como por ejemplo concatenarlas con el operador suma. Además, podemos trabajar con strings como si fuesen listas.


```python
a = [1,2,3]
b = ['a', 'b', 'c']
print(a+b)
a = 'supercalifragilistico'
print(a[4:10])
print(a+ ' abracadabra')
```

    [1, 2, 3, 'a', 'b', 'c']
    rcalif
    supercalifragilistico abracadabra
    

Una lista de Python es (como todo) un objeto y posee métodos.
Los métodos son funciones específicas que solo se pueden aplicar a ese objeto.
Tres ejemplos son revertir la lista con lista.reverse(), agregar un elemento o una lista al final con lista.append(), y remover un elemento de una posición determinada con lista.pop().

Es importante notar que aplicar los métodos no devuelven la lista modificada: únicamente la modifican en memoria, sin devolver nada. Por ejemplo:


```python
a = [1, 1.2, [3], True, 'hola', 3+3j]
a.reverse()
print(a)
```

    [(3+3j), 'hola', True, [3], 1.2, 1]
    

Pero si hago:


```python
a = [1, 1.2, [3], True, 'hola', 3+3j]
print(a.reverse())
```

    None
    

A pesar de que no devuelve nada, en la segunda linea del código aplicamos el método reverse, así que ahora la lista a está invertida:


```python
print(a)
```

    [(3+3j), 'hola', True, [3], 1.2, 1]
    

# **Diccionarios**

El último tipo de dato natural a Python que vamos a repasar son los diccionarios.

Un diccionario consta de llaves, valores y un mapeo entre ambos que le asigna un valor a cada llave:

![dict.png](data:image/png;base64,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)





```python
a = {'llave1':'hola', 'llave2':[True,False,3.5], 39:'hola mundo', 49.324:12}
print(a['llave1'])
print(a['llave2'])
print(a[39])
print(a[49.324])
```

    hola
    [True, False, 3.5]
    hola mundo
    12
    

Vemos que podemos usar el tipo de datos que queramos como llaves (aunque no listas) El problema surge cuando hay más de una llave con el mismo valor, porque en ese caso no sabemos a que valor hacemos referencia:


```python
a = {'llave1':'hola', 'llave1':[True,False,3.5], 39:'hola mundo', 49.324:12}
print(a['llave1'])
```

    [True, False, 3.5]
    

Vemos que obtenemos el último de los elementos con esa llave.
Si queremos saber cuales son todas las llaves de un diccionario podemos usar el método dict.keys()


```python
llaves = a.keys()
print(llaves)

```

    dict_keys(['llave1', 39, 49.324])
    

Que podemos convertir a una lista con la funcion list()


```python
print(list(llaves))
```

    ['llave1', 39, 49.324]
    
