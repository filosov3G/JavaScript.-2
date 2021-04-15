
const goods = [
  { title: 'Shirt', color: 'black', size: 23, brand: 'Nike', price: 150 },
  { title: 'Socks', color: 'black', size: 23, brand: 'Nike', price: 50 },
  { title: 'Jacket', color: 'black', size: 23, brand: 'Nike', price: 350 },
  { title: 'Shoes', color: 'black', size: 23, brand: 'Nike', price: 250 },
  { title: 'Shoes', color: 'black', size: 23, brand: 'Nike', price: 250 },
  { title: 'Shoes', color: 'black', size: 23, brand: 'Nike', price: 250 },
];

const renderGoodsItem = (title, price, color, size, brand) => (`<div class="goods-item"><h3>${title}</h3><div><span class="brand-title span">Brand:</span><p class="brand">${brand}</p></div><div><span class="color-size-title span">Color/Size:</span><p class="color">${color}</p><p class="size">${size}</p></div><div><span class="price-title span">Price:</span><p class="price">${price}</p></div></div>`
); // Наверное лучше для добавления HTML разметки и классов написать отдельную функцию. Дабы избежать нагромождения и ошибок. Пока оставлю так

const renderGoodsList = (list) => {
  let goodsList = document.querySelector('.goods-list').innerHTML = list.map(item => renderGoodsItem(item.title, item.price, item.color, item.size, item.brand)).join('');
}

renderGoodsList(goods);

