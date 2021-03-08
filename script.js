function load_page(event) {
    console.log(event)
    window.location = event.value;
}

function coffeeChoice(event) {
    localStorage.setItem("coffeeChoice", event.value);
    window.location = "cityCoffee.html";
}

function load_coffee_borders() {
    if (localStorage.getItem("coffeeChoice").localeCompare("dunkin") == 0) {
        document.getElementById("b_left").src = "images/dunkin_left_border.jpg";
        document.getElementById("b_right").src = "images/dunkin_right_border.jpg";
    }
    else {
        document.getElementById("b_left").src = "images/starbucks_left_border.jpg";
        document.getElementById("b_right").src = "images/starbucks_right_border.jpg";
    }
}

function shoppingChoice(event) {
    localStorage.setItem("shoppingChoice", event.value);
    window.location = "cityShopping.html";
}

function load_shopping_borders() {
    if (localStorage.getItem("shoppingChoice").localeCompare("Patagonia") == 0) {
        document.getElementById("b_left").src = "images/patagonia_left_border.jpg";
        document.getElementById("b_right").src = "images/patagonia_right_border.jpg";
    }
    else {
        document.getElementById("b_left").src = "images/levis_left_border.jpg";
        document.getElementById("b_right").src = "images/levis_right_border.jpg";
    }
}