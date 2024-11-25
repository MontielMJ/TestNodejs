const Connection = require('tedious').Connection;
const Request = require('tedious').Request;

const config = {
    server: '172.18.192.1',
    authentication: {
        type: 'default',
        options: {
            userName: 'Administrador',
            password: '123456'
        }
    },
    options: {
        port: 1433,
        database: 'DB_Employees',
        encrypt: false,
        trustServerCertificate: true
    }
};
const connection = new Connection(config);


connection.connect();

connection.on('connect', (err) => {
    if (err) {
        console.log(err);
        console.log("Error al conectarse");
    } else {
        executeStatement();
    }

});

function executeStatement() {
    console.log('Conectado BD');
    const request = new Request("select * from [dbo].[Puestos]", (err, rowCount) => {
        if (err) {
            throw err;
        }
        connection.close();
    });
    request.on('row', (columns) => {
        console.log(columns);
    })
    connection.execSql(request);
}