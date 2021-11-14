var services = require('./services')

function routes(app) {

	// Render login page
	app.get('/', (req, res) => {
	    res.render('login')
	});

	// Render product page
	app.post('/product', (req, res) => {
		var data = JSON.parse(req.body.data);
	    res.render('product', { 
	    	email: data.email
	    })
	});

	// Render Order Status page
	app.get('/status', (req, res) => {
		services.getStatus(req.query.order_id, (error, data) => {
	    	res.render('status', {data: data})
		})
	});
}

module.exports = routes;
