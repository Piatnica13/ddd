let MainContener = document.querySelector('#Body');
console.log(`dfdf`);

document.addEventListener("DOMContentLoaded", () => {
  fetch('/ddd/menu/')
  .then(response => response.text())
  .then(html => {
    document.getElementById('menu-placeholder').innerHTML = html;
    // После загрузки меню подключаем script.js
    const script = document.createElement('script');
    script.src = '/ddd/menu/script.js';
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
    
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault(); // Отключаем мгновенный переход
        const href = link.getAttribute("href");
        
        // Прячем меню
        MainContener.style.transition = `opacity 0.6s linear`;
        MainContener.style.opacity = "0";
        menu.classList.remove("visible");
        menu.classList.add("hidden");
        // Ждем окончания анимации и затем переходим
        setTimeout(() => {
            MainContener.style.transition = `opacity 0.3s linear`;
            window.location.href = href; // Переход на новую страницу
        }, 600);
      });
    });
  });
});
class Product {
    constructor(id, name, price, image, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    // Метод для генерации HTML карточки
    render() {
        return `
        <div class="product-card">
            <img src="${this.image}" alt="${this.name}" class="product-image">
            <h3 class="product-title">${this.name}</h3>
            <p class="product-price">${this.price} ₸</p>
            <div class="DivInfo">
                <img scr = "/ddd/image/menu/sumka.png" class = "Con2Icon">
                <p class="BthInfo">Подробнее</p>
            </div>
        </div>
        `;
        }
    }

  // Массив товаров
    const products = [
    new Product(1, "Кулон «Солнце»", 37000, "/ddd/image/imgShop/Product/Sun.jpg"),
    new Product(2, "Кулон «Крыло»", 37000, "/ddd/image/imgShop/Product/Sun.jpg"),
    new Product(3, "Кулон «Дерево»", 33500, "/ddd/image/imgShop/Product/Sun.jpg"),
    new Product(4, "Кулон «Бесконечность»", 28500, "/ddd/image/imgShop/Product/Sun.jpg"),
    new Product(5, "Кулон «Снежинка»", 39500, "/ddd/image/imgShop/Product/Sun.jpg"),
    new Product(6, "Кулон «Самолёт»", 46500, "/ddd/image/imgShop/Product/Sun.jpg"),
    new Product(7, "Кулон «Олимпийские кольца»", 42500, "/ddd/image/imgShop/Product/Sun.jpg"),
    new Product(8, "Кулон «Роза ветров»", 37500, "/ddd/image/imgShop/Product/Sun.jpg"),
    new Product(9, "Кулон «Сердце пульс»", 35500, "/ddd/image/imgShop/Product/Sun.jpg"),
    new Product(10, "Кулон «Корона»", 34500, "/ddd/image/imgShop/Product/Sun.jpg"),
    new Product(11, "Кулон «Горы»", 33500, "/ddd/image/imgShop/Product/Sun.jpg"),
    new Product(12, "Кулон «Бриллиант»", 33000, "/ddd/image/imgShop/Product/Sun.jpg"),
    ];

  // Генерация карточек товаров
    const productGrid = document.querySelector('#productGrid');
    products.forEach(product => {
    productGrid.innerHTML += product.render();
    });