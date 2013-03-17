var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	cons = require('consolidate'),
	swig = require('swig');

//app.use(express.logger());
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.static(__dirname + '/assets'));
app.engine('.html', cons.swig);
app.set('view engine', 'html');

swig.init({
	allowErrors: true,
	autoescape: true,
	cache: true,
	encoding: 'utf8',
	filters: {},
	root: './views/',
	tags: {},
	extensions: {},
	tzOffset: 0
});

app.set('views', './views/');

server.listen(8042);

app.get('/', function(req, res) {
	res.render('LoginPage.html', {title: 'plop'});
});
app.get('/Planification', function(req, res) {
	res.render('Planification.html', {title: 'plop'});
});
app.get('/NouveauTrajet', function(req, res) {
	res.render('NouveauTrajet.html', {title: 'plop'});
});
app.get('/NouveauPI', function(req, res) {
	res.render('NouveauxPI.html', {title: 'plop'});
});
app.get('/Contribuer', function(req, res) {
	res.render('Contribuer.html', {title: 'plop'});
});
app.get('/Trajet', function(req, res) {
	res.render('Trajet.html', {title: 'plop'});
});
app.get('/LoginPage', function(req, res) {
	res.render('LoginPage.html', {title: 'plop'});
});
app.get('/EcranLance', function(req, res) {
	res.render('EcranLance.html', {title: 'plop'});
});
app.get('/Themes', function(req, res) {
	res.render('Themes.html', {title: 'plop'});
});
app.get('/Popup', function(req, res) {
	res.render('Popup.html', {title: 'plop'});
});

console.log("[Server started : listening on port 8042]");
