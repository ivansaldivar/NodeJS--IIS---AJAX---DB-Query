# helloworld

En el directorio helloworld, encontrarás el ejemplo base que viene con el instalador de iisnode, pero también hay dos páginas HTML:
index.html y index2.html. La segunda se las recomiendo para que revisen ejemplos de como se realiza la conexión a MySQL y SQLServer,
con las librerías de node. cuando navegues a la index2.html, esta te mostrará 4 botones que ejecutan distintos script de nodeJS, los 
dos últimos realizan operaciones que interactúan con los RDBM indicados.
Cada botón ejecuta una operación AJAX que tiene como endpoint una URL que apunta a las aplicaciones que hospedaste en el IIS, debería 
quedarte en el IIS algo como se ve en la figura siguiente para que los ejemplos se ejecuten como corresponde, además de tener en 
tus base de datos (MySQL o SQLServer los objetos -tablas o procedimientos almacenados- que vayas a invocar desde node:

![](https://raw.githubusercontent.com/ivansaldivar/NodeJS--IIS---AJAX---DB-Query/master/iisnode%20en%20IIS.png).

Te recomiendo que modifiques las consultas SQL con unas correspondientes a tablas que ya existen en tus bases de datos para que no tengas que estar creando desde cero. Si en el ejemplo, uso un SELECT a una tabla, reemplaza por una tabl que exista en tu base, sea esta MySQL o SQLServer. 
