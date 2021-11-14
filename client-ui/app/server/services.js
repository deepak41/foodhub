var request = require('request');

var services = module.exports = {};

services.getStatus = function(orderID, callback) {
	request.get({
		headers: {
			'Content-Type': 'application/json'
		},
		url: 'http://localhost:3000/api/orders/' + orderID,
	}, 
	function(error, response, body) {
		var data = JSON.parse(body);
		callback(error, data);
	});
};
