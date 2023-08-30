const PORT = 8000;
const HOST = '0.0.0.0';

const express = require('express');
const handlebars = require('express-handlebars');
const app = express();

app.engine('handlebars', handlebars.engine({
    layoutsDir: 'views/layouts'
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'mysql',
    user: 'root',
    password: 'root',
    database: 'ngnix_usuario',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

app.get('/', (req, res) => {
    const nome = req.query.nome;
    if (nome) {
        console.log(nome);
        connection.query("INSERT INTO usuario(nome) values(?)", nome, function (err) {
            if (err) {
                throw err;
            }
            carregarResponse(res);
        });
    } else {
        carregarResponse(res);
    }
})

function carregarResponse(res) {
    connection.query('SELECT `id`, `nome` FROM `usuario`', function (err, result) {
        if (err) {
            throw err;
        } else {            
            res.render('index', {
                layout: 'template',
                logo: 'FullCycle Rocks!',
                dados: result
            });
        }
    });
}

app.listen(PORT, HOST, () => {
    console.log('listen http://%s:%s', HOST, PORT);
})
