const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : process.env.SQL_HOST || 'localhost',
  user     : process.env.SQL_USER || 'azprojects',
  password : process.env.SQL_PASS || 'a.lw.rtsh3.d8dh',
  database : process.env.SQL_DATABASE || 'azbot1.0'
});

const connect = () => connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('Conexion correcta con tu base de datos MySQL')
});

module.exports = {connect, connection}
