var keys = require("../resources/api-keys");
require("../resources/mailin");

// Send Email
sendEmail = (mailOptions, callback) => {
	var client = new Mailin("https://api.sendinblue.com/v2.0", keys['sendinblue-key']);
	var input = { 
		"id" : 28,
		"to" : mailOptions.to,
		"attr" : {
			"TO": mailOptions.to,
			"text": mailOptions.text
		}          
	};
	client.send_transactional_template(input).on('complete', (data) => {
		var err = null;
		data = JSON.parse(data);
		if(data.code == "failure")
			err = data;
		callback(err, data)
	});
}

module.exports = {
    sendEmail: sendEmail
}
