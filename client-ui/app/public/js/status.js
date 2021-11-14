addRow("ORDER ID", data._id);
addRow("STATUS", data.status);
addRow("BILL AMOUNT", data.total);

data.items.forEach((item) => {
  console.log(item)
  showItems(item.name, item.quantity);
});

function addRow(name, value) {
	const details = document.getElementById('details');
	const tr = document.createElement('tr');
	const rowName = document.createElement('th');
	rowName.innerText = name;
	tr.appendChild(rowName);
	const rowValue = document.createElement('td');
	rowValue.innerText = value;
	tr.appendChild(rowValue);
	if(name == 'STATUS') {
		formatStatusValue(rowValue);
	}
	if(name == 'BILL AMOUNT') {
		formatBillValue(rowValue);
	}
	details.appendChild(tr);
}

function showItems(name, quantity) {
	const items = document.getElementById('items');
	const tr = document.createElement('tr');
	const itemName = document.createElement('th');
	itemName.innerText = name.toUpperCase();
	tr.appendChild(itemName);
	const itemQuantity = document.createElement('td');
	itemQuantity.innerText = quantity;
	tr.appendChild(itemQuantity);
	items.appendChild(tr);
}

function formatStatusValue(rowValue) {
	if (rowValue.innerText == 'pending') {
		rowValue.style.color = 'red';
	} else if (rowValue.innerText == 'accepted') {
		rowValue.style.color = 'blue'
	} else {
		rowValue.style.color = 'green'
	}
	rowValue.style.textTransform = "uppercase";
}

function formatBillValue(rowValue) {
	rowValue.innerText = '$ ' + rowValue.innerText;
}
