const addNewProduct = () => {
    const productName = getInputFieldById('name-field');
    const productQuantity = getInputFieldById('quantity-field');
    displayProducts(productName, productQuantity);
    addDetailsToLS(productName, productQuantity);
};

const cart = [];

const getInputFieldById = fieldID => {
    const fieldName = document.getElementById(fieldID);
    const fieldValue = fieldName.value;
    fieldName.value = '';
    return fieldValue;
};

const displayProducts = (product, quantity) => {
    const ulContainer = document.getElementById('ul-container');
    const li = document.createElement('li');
    li.textContent = `${product}: ${quantity}`;
    ulContainer.appendChild(li);
};