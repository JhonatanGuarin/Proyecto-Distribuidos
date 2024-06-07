const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'db-proyecto.cjow4m6okl4m.us-east-1.rds.amazonaws.com',
    port: 3306,
    user: 'admin',
    password: '12345678',
    database: 'Tienda'
  });

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = connection;