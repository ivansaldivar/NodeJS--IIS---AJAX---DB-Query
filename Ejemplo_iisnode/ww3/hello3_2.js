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
var query = connection.query("call `geniux_obtener_listado_indicadores_xmapas_ejes`(1,'0874938109773153620171010174517688780','spa','CL',4,1,6,6)", [], function(error, result, fields){
//var query = connection.query("call `consulta_test_nodeJS`()", [], function(error, result, fields){
//var query = connection.query('SELECT id_usuario, rut FROM geniux_usuario', [], function(error, result){
        if(error){
            throw error;
        }
        else{

            var resultado = result;
            console.log('resultado.length='+resultado.length);
            console.log(resultado);
            console.log('--------------------------------------------------\n');
            console.log('resultado[0].length='+resultado[0].length);
            console.log('--------------------------------------------------\n');
            console.log(resultado[0][0].resultado);
            console.log('--------------------------------------------------\n');
            if(resultado.length > 0){
                console.log(result);
                console.log(fields);                
            }else{
                salida = 'Registro no encontrado<br />';
            }
            
        }
   }
);

connection.end();