var app = require('./config/server');
const PORT = 3000;

var rotaHome = require('./app/routes/home')(app);
var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);
var rotaNoticias = require('./app/routes/noticias')(app);


app.listen(PORT, function() {
	console.log(`Servidor rodando na porta ${PORT}`);
});
