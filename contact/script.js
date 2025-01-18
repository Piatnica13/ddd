let MainContener = document.querySelector('#Body');

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