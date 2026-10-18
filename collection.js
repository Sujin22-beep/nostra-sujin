let sidenav = document.querySelector(".sidenav")
let sidenavbtn = document.getElementById("sidenavbtn")
let menu = document.getElementById("menu")
menu.addEventListener("click", function () {
    sidenav.style.right = 0
})
sidenavbtn.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})

let categories = document.getElementById("categories")
let item = document.getElementById("item")
let type = document.getElementById("type")
let price = document.getElementById("price")
let list = document.getElementById("list")
let product = list.children

item.addEventListener("keydown", function () {
    let entereditem = event.target.value.toUpperCase()
    for (let count = 0; count < product.length; count = count + 1) {
        let searchname = product[count].querySelector("h6").textContent
        if (searchname.toUpperCase().indexOf(entereditem) < 0) {
            product[count].style.display = "none"
        }
        else {
            product[count].style.display = "block"
        }
    }

})

type.addEventListener("change", function () {
    let enteredtype = event.target.value.toUpperCase()
    for (let count = 0; count < product.length; count = count + 1) {
        let searchname = product[count].querySelector("h5").textContent.trim()
        if (enteredtype === "ALL CATEGORIES" || searchname === enteredtype) {
            product[count].style.display = "block"
        }
        else {
            product[count].style.display = "none"
        }
    }
})

price.addEventListener("change", function () {
    let selectedprice = price.value
    for (let count = 0; count < product.length; count = count + 1) {
        let pricetext = product[count].querySelectorAll("h6")[1].textContent
        let productprice = Number(pricetext.replace(/[₹,]/g, ""));
        if (
            selectedprice === "All Prices" ||
            (selectedprice === "Under ₹500" && productprice < 500) ||
            (selectedprice === "₹500 - ₹1000" && productprice >= 500 && productprice <= 1000) ||
            (selectedprice === "₹1000 - ₹1500" && productprice > 1000 && productprice <= 1500) ||
            (selectedprice === "₹1500 - ₹2000" && productprice > 1500 && productprice <= 2000)
        ) {
            product[count].style.display = "block"
        }
        else {
            product[count].style.display = "none"
        }

    }
})
