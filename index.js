//function sendRequest(url) {
//    return new Promise((resolve, reject) => {
//      const xhr = new XMLHttpRequest();
//      xhr.open('GET', url);
//      xhr.onreadystatechange = function () {
//        if (xhr.readyState === XMLHttpRequest.DONE) {
//          if (xhr.status !== 200) {
//            reject();
//          }
//          const GoodsItem = JSON.parse(xhr.responseText);
//          resolve(GoodsItem);
//        }
//      }
//      xhr.send();
//    });
//}

//на промисах 2
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
    constructor(id_product = 'xx', product_name = 'Product Name', price = 'Price on request') {
        //this.title = title;
        this.id_product = id_product;
        this.product_name = product_name;
        this.price = price;
    }
    render() {
        return `<div class="goods-item" id="${this.id_product}">
                    <h3 class="item-title">${this.product_name}</h3>
                    <div class="item-image"></div>
                    <p class="item-price">Цена: ${this.price}$</p>
                    <span class="add2cart">buy now</span>
                    <!-- <span class="add2cart">#${this.id_product}</span>-->
                </div>`;
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        //this.element = null;
        //this.productsInCart = null;
    }
    fetchGoods() {
        makeGETRequest(`${API_URL}/catalogData.json`).then((goods) => {
            this.goods = goods;
            this.render();
        });
    }

    render() {
        let listHtml = '';
        this.goods.forEach((good) => {
            const goodItem = new GoodsItem(good.product_name, good.price, good.id_product);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    //JS2 - HW2 Part 2: calculate the sum of all goods
    sumGoods() {
        let sum = 0;
        this.goods.forEach(
            (product) => {
                if (isNaN(product.price)) {
                    //continue; //не работает
                } else {
                    sum += product.price;
                }
            });
        document.querySelector('.sum-goods').innerHTML = `Sum of all goods: ${sum}`;
    }

    //1) Добавить каждому товару EventListener "add to cart" [JS2: 1:41:30 - 1:45:24]
    initEvents() {
        this.element = document.getElementsByClassName('add2cart');
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener('click', this.addToCart);
        }
    }

    f() {
        console.log(this.goods);
    }
    //создать новый элемент корзины
    addToCart(e) {
        //console.log(this.goods);
        let target = e.target;
        let productIndex = target.parentNode.getAttribute("id");
        console.log("product index: " + productIndex);

        this.productsInCart += "<br>" + productIndex;

        //        this.goods.forEach((prod,index) => {
        //            const goodItem = new GoodsItem(index);
        //            productsInCart += goodItem.render();
        //        });
        //        document.querySelector('.goods-list').innerHTML = listHtml;
        //        
        //        this.goods.forEach((item, index) => {  
        //            const newCartItem = new GoodsItem(item.title, index);
        //            
        //            productsInCart += newCartItem.render();
        //        });
        document.querySelector('.cart-inside').innerHTML = this.productsInCart;

        //console.log(newCartItem.parentNode.childNodes[9].textContent);
        //        this.element.addEventListener('click', () => {
        //            CartItem.addToCart();
        //        });
    }
}

function makeGETRequest(url) {
    
    return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        } else {
            xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const body = JSON.parse(xhr.responseText);
                    resolve(body);
                } else {
                    reject(xhr.responseText);
                }
            }
        };
        xhr.onerror = function(err) {
            reject(err);
        };

        xhr.open('GET', url);
        console.log(url);
        console.log(this.body);
        xhr.send();
    });
}


//конструктор для создания новых элементов в корзине
class CartItem {
    constructor(productName, productPrice, productIndex) {
        this.productName = productName;
        this.productPrice = productPrice;
        this.productIndex = productIndex;
    }



    //создать новый элемент корзины
    //    addToCart() {
    //        const newCartItem = new CartItem(this.productName, this.productPrice);
    //        cartProductsList.push(newCartItem);
    //    }
}

/*
//обьект-класс хронящий массив товаров И считающий их сумму и количество
class Cart {
    constructor(cartProductsList, cartSum, cartQty) {
        this.cartProductsList = cartProductsList; //массив для товаров добавленных в корзину
        this.cartSum = cartSum;
        this.cartQty = cartQty;
    }

    //1) метод чтобы посчитать сумму всех товаров добавленных в корзину
    calcCartSum() {
    }

    //2) метод чтобы посчитать количество всех товаров добавленных в корзину
    calcCartItems() {
        let cartItemsCounter = this.cartProductsList.length;
        console.log(cartItemsCounter);
    }
}
*/

//let aCart = new Cart(0, 0, 0);
//console.log(aCart);
//aCart.calcCartItems();

const list = new GoodsList();
list.fetchGoods();
list.render();
list.initEvents();
list.sumGoods();
