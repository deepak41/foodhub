function routes(app) {

	// Render login page
	app.get('/', (req, res) => {
	    res.render('login')
	});


	// Render product page
	app.get('/product', (req, res) => {
	    res.render('product')
	});

	// Render Order Status page
	app.post('/status', (req, res) => {
		var data = JSON.parse(req.body.data);
		console.log('kkkkkkkkkkkkk666666============================')
		console.log(data);
	    res.render('status')
	});


}

module.exports = routes;
