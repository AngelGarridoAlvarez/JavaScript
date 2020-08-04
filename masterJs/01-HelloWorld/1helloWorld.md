##En un archivo HTML podemos introducir código JavaScript de dos formas:

###1. Dentro del propio código html

```xhtml
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script>
    alert("Hola Mundo con JS");
    alert("Comienza el máster");
</script>
</body>
</html>
```

###2. Con un archivo externo JavaScript

index.html:
```xhtml
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title></title>
</head>
<body>
<script type="text/javascript" src="condicionales.js"></script>
</body>
</html>
```
condicionales.js
```jsx
alert("Hola Mundo con JS");
alert("Comienza el máster");
```

##document.write - escribir desde un fichero JavaScript en el documento HTML:
condicionales.js:
```jsx
document.write("<h2>Hello-World desde el fichero externo</h2>")
```