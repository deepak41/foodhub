var items = [];
var url = "http://localhost:3000/api/orders";

function addToCart(form) {
  document.getElementById(form.name + "quant").innerHTML = form.quantity.value;
  if(parseInt(form.quantity.value) == 0) {
    return 0;
  }
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

function placeOrder() {
  sendToOrderService(url, items, email).then(data => {
    var url = "/status?order_id=" + data._id;
    window.location.replace(url)
  });
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

