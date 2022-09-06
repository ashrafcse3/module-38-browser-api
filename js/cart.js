const addNewProduct = () => {
    const productName = getInputFieldById('name-field');
    const productQuantity = getInputFieldById('quantity-field');
    console.log(productName, productQuantity);
};

const cart = {};

const getInputFieldById = fieldID => {
    const fieldName = document.getElementById(fieldID);
    const fieldValue = fieldName.value;
    return fieldValue;
};