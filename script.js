let order = [];
 
function addToOrder(item, price) {
    order.push({ item, price });
    updateOrderList();
}
 
function updateOrderList() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = "";
    
    order.forEach((o, index) => {
        const li = document.createElement('li');
        li.innerText = `${o.item} - ₹${o.price}`;
        orderList.appendChild(li);
    });
}
 
function sendOrder() {
    if (order.length === 0) {
        alert("No items in order!");
        return;
    }
 
    let message = "New Order:\n";
    let total = 0;
    order.forEach(o => {
        message += `${o.item} - ₹${o.price}\n`;
        total += o.price;
    });
 
    message += `Total: ₹${total}`;
 
    const phoneNumber = "918095882861";  // Replace with your WhatsApp number
const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(url, "_blank");
}