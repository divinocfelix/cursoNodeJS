var express = require('express');
var app = express();
const PORT = 3000;

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
	res.render("home/index");
});

app.get('/formulario_inclusao_noticia', function(req, res) {
	res.render("admin/form_add_noticia");
});

app.get('/noticias', function(req, res) {
	res.render("noticias/noticias");
});


app.listen(PORT, function() {
	console.log(`Servidor rodando na porta ${PORT}`);
});
