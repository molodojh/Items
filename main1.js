let regWindow = document.querySelector(".regWindow");
let regButton = document.querySelector("#regButton");
let regWindowCloser = document.querySelector(".regWindowClose");

function popUpStyleChanger(){
    regWindow.classList.add("active");
};

function popUpCloser(){
    regWindow.classList.remove("active");
}

regButton.addEventListener("click", popUpStyleChanger);
regWindowCloser.addEventListener("click", popUpCloser);

fetch('https://dummyjson.com/products')
  .then((response) => response.json())
  .then((data) => {
    // console.log(data["products"]);
    for (i = 0; i < data["products"].length; i++) {
        // console.log(data["products"][i]["id"]);s
        temp = document.createElement('div');
        temp.className = 'Product_Item';
        temp.innerHTML = 
        '<a class="Product_Link" href="#">'+
        '<img class="Product_Image" src="'+data["products"][i]["images"][0]+'" alt="product image">'+
        '<p class="Product_Name">'+data["products"][i]["title"]+'</p>'+
        '<p class="Product_Price">'+data["products"][i]["price"]+'$</p>'+
        '</a>'+
        '</div>'
        document.getElementsByClassName('Product_Cart')[0].insertAdjacentElement("afterbegin",temp);
      }
  });