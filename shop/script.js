let MainContener = document.querySelector('#Body');
console.log(`dfdf`);

document.addEventListener("DOMContentLoaded", () => {
  fetch('/ddd/futer/index.html')
  .then(response => response.text())
  .then(html =>{
    document.getElementById('futer-block').innerHTML = html;
  })
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
    script.onload = () => {
      // Этот код выполнится после загрузки script.js
      let ContenerMenu = document.querySelector("#contenerMenu");
      let Logo = document.querySelector("#logo");
      let checkBox = document.querySelector("#checkboxMain");
      checkBox.addEventListener('click', ()=>{
        if (checkBox.checked && window.scrollY === 0){
          ContenerMenu.style.backgroundColor = ' #ffe4e9';
        }
        else if(!checkBox.checked && window.scrollY === 0){
          ContenerMenu.style.backgroundColor = 'transparent';
          Logo.style.backgroundColor = 'transparent';
        }
      });
      const handleScroll = () => {
        if (window.scrollY === 0) {
          // Если в начале страницы
          ContenerMenu.style.backgroundColor = 'transparent';
          Logo.style.backgroundColor = 'transparent';
          
        } else {
          // Если страница прокручена
          ContenerMenu.style.backgroundColor = ' #ffe4e9';
        }
      };
      // Отслеживаем скролл
      window.addEventListener('scroll', handleScroll);
      
      // Выполняем функцию сразу, чтобы проверить состояние при загрузке
      handleScroll();
    };
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
      <p class="product-title">${this.name}</p>
      <div class="test">
        <p class="product-price">${this.price}тг</p>
        <a href="" style = "color: black">
        <div class="DivInfo">
          <img src = "/ddd/image/menu/sumka.png" class = "Con2Icon" alt = "Сумка">
          <p class="BthInfo"><ins>Подробнее</ins></p>
        </div>
        </a>
      </div>
    </div>
    `;
  }
}

// Массив товаров
const products = [
  new Product(1, "Кулон «Солнце»", 37000, "/ddd/image/imgShop/Product/Golub.png"),
  new Product(2, "Кулон «Крыло»", 37000, "/ddd/image/imgShop/Product/Golub.png"),
  new Product(3, "Кулон «Дерево»", 33500, "/ddd/image/imgShop/Product/Golub.png"),
  new Product(4, "Кулон «Бес&shy;конеч&shy;ность»", 28500, "/ddd/image/imgShop/Product/Golub.png"),
  new Product(5, "Кулон «Снежинка»", 39500, "/ddd/image/imgShop/Product/Golub.png"),
  new Product(6, "Кулон «Самолёт»", 46500, "/ddd/image/imgShop/Product/Golub.png"),
  new Product(7, "Кулон «Олимпийские кольца»", 42500, "/ddd/image/imgShop/Product/Golub.png"),
  new Product(8, "Кулон «Роза ветров»", 37500, "/ddd/image/imgShop/Product/Golub.png"),
  new Product(9, "Кулон «Сердце пульс»", 35500, "/ddd/image/imgShop/Product/Golub.png"),
  new Product(10, "Кулон «Корона»", 34500, "/ddd/image/imgShop/Product/Golub.png"),
  new Product(11, "Кулон «Горы»", 33500, "/ddd/image/imgShop/Product/Golub.png"),
  new Product(12, "Кулон «Бриллиант»", 33000, "/ddd/image/imgShop/Product/Golub.png"),
];

// Генерация карточек товаров
const productGrid = document.querySelector('#productGrid');
products.forEach(product => {
  productGrid.innerHTML += product.render();
});

class BockMenuTabs{
  constructor(MainTabsName, PodTabsName){
    this.MainTabsName = MainTabsName;
    this.PodTabsName = PodTabsName;
  }
  MenuHtml(){
    let html = `
    <div>
        <p>${this.MainTabsName}</p>
        <ul class = "Spisok">`
    this.PodTabsName.forEach((PodName) =>{
      html += `<li>${PodName}</li>`;
    })
    html += `
        </ul>
    </div>
    `
    return html;
  }
  renderTabs(){
    let testttt = document.querySelector("#BockMenuMain");
    testttt.innerHTML += this.MenuHtml();
  }
}

let myMenus = [
  new BockMenuTabs("Концепция", ["Знаки зодиака", "Новый год", "Путешествия"]),
  new BockMenuTabs("Катигоря", ["Кулон", "Колье", "Бегунок", "Монеточка"]),
  new BockMenuTabs("Цена", ["28500тг - 40000тг", "40000тг - 64000тг", "64000тг - 173000тг"])
]
myMenus.forEach((product) =>{
  product.renderTabs();
})



let DivFilter = document.querySelector("#Divfiltr");
let BockMenu = document.querySelector("#BockMenu");
let CloseBth = document.querySelector("#BockMenuTitleImg")
let Darker = document.querySelector("#Darker")

DivFilter.addEventListener('click', () => {
    BockMenu.style.transform = "translateX(0px)";
    BockMenu.style.opacity = "1";
    Darker.style.background = "rgba(0, 0, 0, 0.5)";
});

CloseBth.addEventListener('click', () => {
    BockMenu.style.transform = "translateX(-500px)";
    BockMenu.style.opacity = "0";
    Darker.style.background = "rgba(0, 0, 0, 0)";
})