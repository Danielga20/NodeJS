const mysql = require ('mysql');
const express = require ('express');
const bodyparser = require('body-parser');
const path = require('path');

//CREAMOS LA INSTANCIA EXPRESS
var app = express();

// PARA LEER JSON FACILITA LA VIDA CON JSON
app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({ extended: true })); 

// CONEXIÓN CON LA BASE DE DATOS
var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'andel',
    multipleStatements: true
    
});



// ESTO ES PARA SI HAY UN ERROR EN LA CONEXIÓN CON LA BASE DE DATOS
// QUE SAQUE UN MENSAJE
mysqlConnection.connect((err)=> {
    if(!err)
    console.log('Conexion bbdd correcta...');
    else
    console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
    });
    
    //PUERTO DE ESTA APLICACIÓN
    const port = process.env.PORT || 8181;

   // CONECTAR, CONFIGURAR EL PUERTO DEL SERVIDOR.
   app.listen(port, () => console.log(`Listening on port ${port}..`));


//Creating GET Router to fetch all the learner details from the MySQL Database
app.get('/password' , (req, res) => {
	    mysqlConnection.query('SELECT * FROM password', (err, rows, fields) => {
	    if (!err) {

reply = "<table border='1'>" 
            linea = ""  
            rows.forEach(obj => {
                linea += "<tr>" 
                Object.entries(obj).forEach(([key, value]) => {
                    console.log(`${key} ${value}`);
                    linea += "<td>" + `${value}` + "</td>"
                });
                linea += "</tr>" 
                console.log('-------------------');
            });

            reply += linea + "</table>" 
            
	        res.send(reply);

	    }
	    else {
		    console.log(err);
		    console.log("No funciona");
	    }
	    })
	    } );
	    