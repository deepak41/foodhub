var items = [];
var email = "ks.deepak07@gmail.com";
var url = "http://localhost:3000/api/orders";

function addToCart(form) {
  var item_index = items.findIndex(obj => obj.name == form.name);
  if(item_index>=0) {
    items[item_index]['quantity'] = parseInt(form.quantity.value);
  }
  else{
    var item = {
      name: form.name, 
      quantity: parseInt(form.quantity.value)
    }
    items.push(item);
  }
}


async function sendToOrderService(url, items, email) {
  var data = {
    items: items,
    email: email
  }

  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}


function placeOrder() {
  sendToOrderService(url, items, email).then(data => {
    redirect("/status", data)
  });
}


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