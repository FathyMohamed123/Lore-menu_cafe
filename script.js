let currentProduct = "";
let currentPrice = 0;

// فتح نافذة الطلب
function openOrder(product, price) {

    currentProduct = product;
    currentPrice = price;

    document.getElementById("orderPopup").style.display = "flex";

    document.getElementById("productName").value = product;
    document.getElementById("productPrice").value = price;

    document.getElementById("productQuantity").value = 1;

    calculateTotal();
}

// غلق النافذة
function closeOrder() {

    document.getElementById("orderPopup").style.display = "none";

}

// حساب الإجمالي
function calculateTotal() {

    let quantity =
    Number(document.getElementById("productQuantity").value);

    let total = quantity * currentPrice;

    document.getElementById("invoicePrice").innerHTML = currentPrice;
    document.getElementById("invoiceQuantity").innerHTML = quantity;
    document.getElementById("invoiceTotal").innerHTML = total;

}

// إرسال الطلب إلى واتساب
function sendOrder() {

    let name =
    document.getElementById("customerName").value;

    let phone =
    document.getElementById("customerPhone").value;

    let size =
    document.getElementById("productSize").value;

    let quantity =
    document.getElementById("productQuantity").value;

    if(name==="" || phone===""){

        alert("من فضلك أدخل الاسم ورقم الهاتف");

        return;

    }

    let total = quantity * currentPrice;

    let message =`طلب جديد
    الاسم: ${name}
    الهاتف: ${phone}
    المنتج : ${currentProduct}
    الحجم: ${size}
    الكمية: ${quantity}
    الاجمالى: ${total}EGP`

let whatsapp="201094207646"
let url= `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`;

    window.open(url,"_blank");

    closeOrder();

}