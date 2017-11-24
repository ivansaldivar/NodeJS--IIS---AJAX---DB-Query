var http = require('http');

var mysql = require('mysql');
 
var connection = mysql.createConnection({
   host: 'localhost',
   user: 'ivan',
   password: 'paulina',
   database: 'geniux_db',
   port: 3306
});
connection.connect(function(error){
   if(error){
      throw error;
   }else{
      console.log('Conexion correcta.');
   }
});

var salida = '';

//
var query = connection.query("call `geniux_obtener_listado_indicadores_xmapas_ejes`(1,'0874938109773153620171010174517688780','spa','CL',7,4,5,6)", [], function(error, result){
//var query = connection.query('SELECT id_usuario, rut FROM geniux_usuario', [], function(error, result){
      if(error){
         throw error;
      }else{
         var resultado = result;
         if(resultado.length > 0){
             
             if(resultado[0].length > 0){
                 
                 for(var j=0; j <= resultado[0].length -1; j++){
                   salida = salida + resultado[0][j].resultado  + '<br />'; 

                 }
                 
             }
             // salida = resultado[0][0].resultado 
         }else{
            salida = 'Registro no encontrado<br />';
         }
      }
   }
);

connection.end();

http.createServer(function (req, res) {
   


    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<meta charset="utf-8">')
    res.end(salida);
}).listen(process.env.PORT);  