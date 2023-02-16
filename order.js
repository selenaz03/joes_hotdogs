var hotdog;
var french_fries;
var drinks;
hotdog = prompt("How many hotdogs would you like?");
french_fries = prompt("How many orders of french fries would you like?");
drinks = prompt("How many drinks would you like?");
var subtotal = hotdog * 4 + french_fries * 3.50 + drinks * 1.75;
var discount = subtotal >= 20 ? subtotal * .9 : subtotal;
tax = discount * .0625;
total = tax + discount;

if (hotdog != "" && hotdog != 0) {
    document.getElementById("hotdog").textContent += "Hotdogs: " + hotdog + "\n";
}
if (french_fries != "" && french_fries != 0) {
    document.getElementById("fries").textContent += "French Fries: " + french_fries + "\n";
}
if (drinks != "" && drinks != 0) { 
    document.getElementById("drink").textContent += "Drinks: " + drinks + "\n";
}
document.getElementById("subtotal").textContent += "Subtotal: $" + round(subtotal) + "\n";
if (discount < subtotal)
    document.getElementById("discount").textContent += "Discount: $" + round(discount) + "\n";
document.getElementById("tax").textContent += "Tax: $"+ round(tax) + "\n";
document.getElementById("total").textContent += "Total: $" + round(total) + "\n";

function round(num) {
    num = "" + num;
    if (num.indexOf('.') == -1)
        return (num + ".00");
    else {
        parts = num.split('.');
        if (parts[1].length == 1)
            return (parts.join('.') + "0");
        else {
            let decimals = parts[1].substr(0, 2);
            return (parts[0] + "." + decimals);
        }
    }
}