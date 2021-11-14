// Login user
function login(form) {
	redirect("/product", {email: form.email.value});
}

// Redirect
function redirect(url, data) {
	data = JSON.stringify(data);
	const form = document.createElement('form');
	form.action = url;
	form.method = 'POST';
	const hiddenField = document.createElement('input');
	hiddenField.type = 'hidden';
	hiddenField.name = 'data';
	hiddenField.value = data;
	form.appendChild(hiddenField);
	document.body.appendChild(form);
	form.submit();
}