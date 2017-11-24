var http = require('http');

http.createServer(
    function (solicitud, respuesta) {
    
        var contenido_tbl = '';
        
        contenido_tbl = contenido_tbl +
                        '<table border="1">'+
                        '<tr><td>Probando un servidor con NODE.JS desde IIS!</td></tr>'+
                        '<tr><td>iisnode version is ' + process.env.IISNODE_VERSION + '</td></tr>'+
                        '<tr><td>nodeJS version is ' + process.version + '</td></tr>'+
                        '</table>';
        
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        respuesta.write(contenido_tbl);
        respuesta.write('<br />');
        respuesta.end();

    }
).listen(process.env.PORT);  