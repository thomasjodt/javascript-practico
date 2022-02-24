// SECCIÓN DE DESCUENTOS

function salePrice (initialPrice, discount) {
    const discountedPrice = (initialPrice*discount)/100;
    const listPrice = initialPrice - discountedPrice;
    return `${listPrice}`;
}

//Integración con HTML
let txtSaleAnswer = document.getElementById("saleAnswer");

function calculateSalePrice () {
    let price = document.getElementById("inputPrice");
    let priceValue = price.value;
    let sale = document.getElementById("inputSale");
    let saleValue = sale.value;
    let list = salePrice(priceValue, saleValue);
    txtSaleAnswer.innerHTML = `<p>El valor final es:<br> S/. ${list}</p>`;
}