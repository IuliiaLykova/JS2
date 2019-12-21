function sendRequest(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status !== 200) {
            reject();
          }
          const GoodsItem = JSON.parse(xhr.responseText);
          resolve(GoodsItem);
        }
      }
      xhr.send();
    });
}
class GoodsItem {
    constructor(title = 'Product Name', price = 'Price on request', id) {
        this.title = title;
        this.price = price;
        this.id = id;
    }

    render() {
        return `<div class="goods-item" id="${this.id}">
                    <h3 class="item-title">${this.title}</h3>
                    <div class="item-image"></div>
                    <p class="item-price">Цена: ${this.price}$</p>
                    <span class="add2cart">buy now</span>
                    <!-- <span class="add2cart">#${this.id}</span>-->
                </div>`;
    }
}

//v-1: как на уроке
class GoodsList {
    constructor() {
        this.goods = [];
        this.element = null;
        this.productsInCart = null;
    }
    fetchGoods() {
        //console.log(this.goods)
        this.goods = [
            {
                title: 'Shirt',
                price: 150
            },
            {
                title: 'Socks',
                price: 150
            },
            {
                title: 'Jacket',
                price: 150
            },
            {
                title: 'Shoe',
                price: 150
            },
            {
                price: 1500
            },
            {
                title: 'Shoe3'
            }
        ]
    }
    render() {
        let listHtml = '';
        this.goods.forEach((good,index) => {
            const goodItem = new GoodsItem(good.title, good.price, index);
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
        for(let i=0; i < this.element.length; i++) {
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
