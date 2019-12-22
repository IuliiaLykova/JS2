const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 150 },
    { title: 'Jacket', price: 150 },
    { title: 'Shoe', price: 150 },
    { price: 1500 },
    { title: 'Shoe3'}
    
];

const renderGoodsItem = (title = "Prodct-name", price = "125") =>  `<div class="goods-item"><h3 class="item-title">${title}</h3><div class="item-image"></div><p class="item-price">Цена: ${price}$</p></div>`;

const renderGoodsList = (list) => document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price)).join("");

renderGoodsList(goods);

