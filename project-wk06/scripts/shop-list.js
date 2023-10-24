// Create an array to store shopping list items
let shoppingItems = [];

// Function to add a new item to the list
function addItem() {
    const name = document.getElementById('item-name').value;
    const quantity = parseInt(document.getElementById('item-quantity').value);
    const price = parseFloat(document.getElementById('item-price').value);
    // const area = document.getElementById('text-area').value;

    // Validating the right type before computation
    if (name.trim() !== '' && !isNaN(quantity) && !isNaN(price)) {
        const totalPrice = quantity * price;

        // Create a JSON object template
        const newItem = {
            name: name,
            quantity: quantity,
            price: price,
            total: totalPrice,
            // area: area
        };

        // Populate the array of items
        shoppingItems.push(newItem);

        // Clear input fields after each entry
        document.getElementById('item-name').value = '';
        document.getElementById('item-quantity').value = '';
        document.getElementById('item-price').value = '';
        // document.getElementById('text-area').value = '' //proving difficult to manipulate.

        // Display the result
        displayItems();
    }
}

// Function to calculate the total price of all items
function calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of shoppingItems) {
        totalPrice += item.total;
    }
    return totalPrice;
}

// Function to display items in the list
function displayItems() {
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = '';

    // For each value of the array create an "li" tag, fill it with an object literal of the item's
    // properties and append the list item to the "ul"
        for (const item of shoppingItems) {
        const listItem = document.createElement('li');
        // const areaElement = document.getElementById('item-list');
        listItem.textContent = `${item.name} - Quantity: ${item.quantity}, Unit Price: $${item.price.toFixed(2)}, Total: $${item.total.toFixed(2)}`;
        // areaElement.innerHTML = `<li>${item.area}</li>`;
        itemList.appendChild(listItem);
        // itemList.appendChild(areaElement);
    }

    // Update the total price
    const totalPrice = calculateTotalPrice();
    itemList.innerHTML += `<li><strong>Total Price: $${totalPrice.toFixed(2)}</strong></li>`;
}

// Event listener for adding an item
document.getElementById('add-item').addEventListener('click', addItem);

// Event listener for saving the list to JSON
document.getElementById('save-list').addEventListener('click', () => {
    const jsonString = JSON.stringify(shoppingItems);

    // Create a blob and trigger a download link for the JSON file
    // The user will be prompted to download the file, and can choose the save location on their local drive.
    const blob = new Blob([jsonString], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'shopping-list.json';
    a.click();
});

// Initiate the page
displayItems();
