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
            console.log('result.recordset.length='+result.recordset.length);
            console.log('-----------------------------');
            for(var i=0;i<=result.recordset.length-1;i++){
                salida = salida + '('+i+')'+result.recordset[i].ID_COMUNA+'==>'+result.recordset[i].DESCRIPCION + '\n';    
            }
            
        }
        console.log(salida);
        sql.close();
        
    }).catch(function(err) {
        console.log(err);
    });
    
    
}).catch(function(err) {
    console.log(err);
});

