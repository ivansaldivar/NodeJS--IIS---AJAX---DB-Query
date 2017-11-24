# NodeJS--IIS---AJAX---DB-Query

Administrando NodeJS desde IIS y algunos ejemplos de libreria para conectar a MySQL y SQLServer desde NodeJS.

Investigando como administrar nodeJS desde IIS, me encontré con este proyecto: 

iisnode: "Hosting node.js applications in IIS on Windows" (https://github.com/tjanczuk/iisnode).

En el encontrarán todo lo que necesitan para hospedar y administrar desde Internet Information Server aplicaciones de nodeJS, y con
ello poder sacar toda la potencia de este framework Javascript del lado del servidor. Las pruebas que he realizado usando conexiones
a MySQL y SQLServer, demuestran la potencia y desempeño de node al operar con tareas que involucran administración de contenido e 
información que se recupera desde algún administrador de base de datos. 

![](https://raw.githubusercontent.com/ivansaldivar/NodeJS--IIS---AJAX---DB-Query/master/instalando%20modulo%20iisnode.png).

El instalador trae algunos ejemplos básico. Además les dejo algunos ejemplo de nodeJS usados para conectar a MySQL y SQLServer. 

En el directorio Ejemplo_iisnode, encontrarán otros cuatro más, creen a partir de ellos, en IIS, las aplicaciones virtuales que se direccionarán a cada uno. Lo importante para que IIS administre correctamente a cada aplicación es la declaración del módulo que se utiliza para las aplicaciones de node:

    * Archivo config.web en IIS para las aplicaciones de nodeJS
    
    <configuration>
      <system.webServer>

        <!-- indicates that the hello.js file is a node.js application 
        to be handled by the iisnode module -->

        <handlers>
          <add name="iisnode" path="hello.js" verb="*" modules="iisnode" />
        </handlers>

      </system.webServer>
    </configuration>


