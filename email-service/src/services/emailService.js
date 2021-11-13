require("../resources/mailin");
const path = require('path'); 
var fs = require('fs');
var keys = JSON.parse(fs.readFileSync(path.join(__dirname, '../resources/api-keys.json'), 'utf8'));

// Send Email
sendEmail = (mailOptions, callback) => {
	var client = new Mailin("https://api.sendinblue.com/v2.0", keys.sendinblueKey);
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
