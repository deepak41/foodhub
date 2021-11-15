var request = require('request');
const ORDER_SRV_HOST = process.env.ORDER_SRV_HOST || localhost;
var url = `http://${ORDER_SRV_HOST}:3000/api/orders/`;

var services = module.exports = {};

services.getStatus = function(orderID, callback) {
	request.get({
		headers: {
			'Content-Type': 'application/json'
		},
		url: url + orderID,
	}, 
	function(error, response, body) {
		var data = JSON.parse(body);
		callback(error, data);
	});
};
