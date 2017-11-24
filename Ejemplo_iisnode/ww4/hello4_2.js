var http = require('http');

var sql = require('mssql');

var config = {
    user: 'sa',
    password: 'paulina',
    server: 'DAVINCI_DAEMOND\\SAURON',
    database: 'PEGAXUS_DB_MASTER'
}

var salida = '';

sql.connect(config).then(function() {
    // Query 
    
    new sql.Request().query('SELECT ID_COMUNA, DESCRIPCION FROM PEGAXUS_COMUNAS_PROVINCIAS').then(function(result) {
        if(result.recordset.length > 0){
            for(var i=0;i<=result.recordset.length-1;i++){
                salida = salida + '('+i+') :: '+result.recordset[i].ID_COMUNA+'==>'+result.recordset[i].DESCRIPCION + '<br />';    
            }
            
        }
        // console.log(salida);
        sql.close();
        
    }).catch(function(err) {
        salida = err;
    });
    
    
}).catch(function(err) {
    salida = err;
});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<meta charset="utf-8">')
    res.end(salida);

}).listen(process.env.PORT); 
