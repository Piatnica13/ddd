let MainContener = document.querySelector('#Body');
console.log(`dfdf`);

document.addEventListener("DOMContentLoaded", () => {
    fetch('../menu/index.html')
    .then(response => response.text())
    .then(html => {
        document.getElementById('menu-placeholder').innerHTML = html;
        // После загрузки меню подключаем script.js
        const script = document.createElement('script');
        script.src = '../menu/script.js';
        document.body.appendChild(script);
        //меню
        let menu = document.querySelector("#MenuFixed");

            
        setTimeout(() => {
            menu.classList.add("visible");
            MainContener.style.transition = `opacity 1s linear`;
            MainContener.style.opacity = "1";
            setTimeout(()=>{
                MainContener.style.transition = `opacity 0.3s linear`;
            }, 1000);
        }, 300);
    });
})
class Product {
    constructor(id, name, price, image, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
    }

    // Метод для генерации HTML карточки
    render() {
        return `
        <div class="product-card">
            <img src="${this.image}" alt="${this.name}" class="product-image">
            <h2 class="product-title">${this.name}</h2>
            <p class="product-price">${this.price} ₽</p>
            <p class="product-description">${this.description}</p>
            <button class="add-to-cart" onclick="addToCart(${this.id})">Добавить в корзину</button>
        </div>
        `;
        }
    }

  // Массив товаров
    const products = [
    new Product(1, "Товар 1", 1500, "", "Описание товара 1"),
    new Product(2, "Товар 2", 2000, "", "Описание товара 2"),
    new Product(3, "Товар 3", 1800, "", "Описание товара 3"),
    new Product(4, "Товар 4", 1500, "", "Описание товара 4"),
    new Product(5, "Товар 5", 2000, "", "Описание товара 5"),
    new Product(6, "Товар 6", 1800, "", "Описание товара 6"),
    new Product(7, "Товар 7", 1500, "", "Описание товара 7"),
    new Product(8, "Товар 8", 2000, "", "Описание товара 8"),
    new Product(9, "Товар 9", 1800, "", "Описание товара 9"),
    new Product(10, "Товар 10", 1500, "", "Описание товара 10"),
    new Product(11, "Товар 11", 2000, "", "Описание товара 11"),
    new Product(12, "Товар 12", 1800, "", "Описание товара 12"),
    new Product(1, "Товар 1", 1500, "", "Описание товара 1"),
    new Product(2, "Товар 2", 2000, "", "Описание товара 2"),
    new Product(3, "Товар 3", 1800, "", "Описание товара 3"),
    new Product(4, "Товар 4", 1500, "", "Описание товара 4"),
    new Product(5, "Товар 5", 2000, "", "Описание товара 5"),
    new Product(6, "Товар 6", 1800, "", "Описание товара 6"),
    new Product(1, "Товар 1", 1500, "", "Описание товара 1"),
    new Product(2, "Товар 2", 2000, "", "Описание товара 2"),
    new Product(3, "Товар 3", 1800, "", "Описание товара 3"),
    new Product(4, "Товар 4", 1500, "", "Описание товара 4"),
    new Product(5, "Товар 5", 2000, "", "Описание товара 5"),
    new Product(6, "Товар 6", 1800, "", "Описание товара 6"),
    new Product(1, "Товар 1", 1500, "", "Описание товара 1"),
    new Product(2, "Товар 2", 2000, "", "Описание товара 2"),
    new Product(3, "Товар 3", 1800, "", "Описание товара 3"),
    new Product(4, "Товар 4", 1500, "", "Описание товара 4"),
    new Product(5, "Товар 5", 2000, "", "Описание товара 5"),
    new Product(6, "Товар 6", 1800, "", "Описание товара 6"),
    new Product(1, "Товар 1", 1500, "", "Описание товара 1"),
    new Product(2, "Товар 2", 2000, "", "Описание товара 2"),
    new Product(3, "Товар 3", 1800, "", "Описание товара 3"),
    new Product(4, "Товар 4", 1500, "", "Описание товара 4"),
    new Product(5, "Товар 5", 2000, "", "Описание товара 5"),
    new Product(6, "Товар 6", 1800, "", "Описание товара 6"),
    // Добавьте остальные 58 товаров
    ];

  // Генерация карточек товаров
    const productGrid = document.querySelector('#productGrid');
    products.forEach(product => {
    productGrid.innerHTML += product.render();
    });