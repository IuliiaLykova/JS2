//конструктор для создания новых элементов в корзине
class CartItem {
    constructor(productName, productPrice) {
        this.productName = productName;
        this.productPrice = productPrice;
    }

    //создать новый элемент корзины
    addToCart() {
        const newCartItem = new CartItem(this.productName, this.productPrice);
        cartProductsList.push(newCartItem);
    }
}

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

let aCart = new Cart(0, 0, 0);
console.log(aCart);
//aCart.calcCartItems();

class GoodsItem {
    constructor(title = 'Product Name', price = 'Price on request') {
        this.title = title;
        this.price = price;
    }
    init() {
        this.initEvents();
    }

    render() {
        return `<div class="goods-item">
                    <h3 class="item-title">${this.title}</h3>
                    <div class="item-image"></div>
                    <p class="item-price">Цена: ${this.price}$</p>
                </div>`;
    }

    //1) Добавить каждому товару EventListener "add to cart" 1:42:00 - 1:45:24
    initEvents() {
        this.element.addEventListener('click', () => {
            CartItem.addToCart();
        });
    }
}

//v-1: как на уроке
class GoodsList {
    constructor() {
        this.goods = [];
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
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
        //console.log(listHtml);

    }

    //JS2 - HW2 Part 2: calculate the sum of all goods
    sumGoods() {
        let sum = 0;
        this.goods.forEach(
            good => {
                const goodsSum = new GoodsItem(good.price);

                if (isNaN(good.price)) {
                    //continue; //не работает
                } else {
                    sum += good.price;
                }
            });
        document.querySelector('.sum-goods').innerHTML = `Sum of all goods: ${sum}`;
    }
}
//console.log(GoodsList.k);

const list = new GoodsList();
list.fetchGoods();
list.render();
list.sumGoods();

//v-2: немного проще
/*
class GoodsList {
    constructor() {
        //не понятно зачем здесь создавать пустой массив, если честно
        //правильно ли я понимаю, что для такой задачи использование классов немного избыточное решение и мы его применяем ради практики?
    }
    goods = [
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

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem(good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    
    //JS2 - HW2 Part 2
    sumGoods() {
        let sum = 0;
        this.goods.forEach(good => {
            const goodsSum = new GoodsItem(good.title, good.price);
            if(isNaN(good.price)) {
                //continue; //не работает
            } else {
                sum += good.price;
            }
        });
        document.querySelector('.sum-goods').innerHTML = `Sum of all goods: ${sum}`;
    }
}



const list = new GoodsList();
list.fetchGoods(); //в варианте v-2 нам не нужна функция заполняющая пустой массив
list.render();
list.sumGoods();
*/


//Chat-box
let allMessages = [];
document.querySelector('.new-message-input').onkeypress = sendMessage;

function messageWall() {
    let messages = "";
    //добавим все сообщения из массива по шаблону в переменную
    for (i = 0; i < allMessages.length; i++) {
        messages += `<p class="message-p">${allMessages[i]}</p>`;
    }
    //выведем все сообщения
    let messageHistory = document.querySelector('.message-history');
    messageHistory.innerHTML = messages;
    messageHistory.scrollTop = messageHistory.scrollHeight;
}

class MessageProto {
    constructor() {

    }
}

function chatOpenClose() {
    document.querySelector('.message-history').classList.toggle("chat-active");
    document.querySelector('.new-message-container').classList.toggle("new-message-active");
    document.querySelector('.chat-closeOpen').classList.toggle("chat-closeOpen-active");
}

function sendMessage(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        let newMessage = document.querySelector('.new-message-input').value;
        allMessages.push(newMessage);
        messageWall();
        document.querySelector('.new-message-input').value = "";
    }
}
