let checkboxMain = document.querySelector("#checkboxMain");
let body = document.querySelector('#Body');
let MainMenu = document.querySelector('#contenerMenu');
let divSrtelkaMenu = document.querySelector("#strelkaMenuOp");
let PodTextPh = document.querySelector('.PodTextPh')
let chetPodMenu = false;
let PodMenuPh = document.querySelector('#PodMenuPh')
let PodMenu = document.querySelector("#PodMenu");
let chet = true;
let checkboxSubmenu1 = document.querySelector("#checkboxx");
document.addEventListener("DOMContentLoaded", FuncMenu);
function FuncMenu(){
    let menu = document.querySelector("#MenuFixed");
    
    setTimeout(() => {
        menu.classList.add("visible");
        body.style.transition = `opacity 1s linear`;
        body.style.opacity = "1";
        setTimeout(()=>{
            body.style.transition = `opacity 0.3s linear`;
        }, 1000);
    }, 300);

    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Отключаем мгновенный переход
            const href = link.getAttribute("href");

            // Прячем меню
            PodTextPh.style.opacity = `0`;
            body.style.transition = `opacity 0.6s linear`;
            body.style.opacity = "0";
            menu.classList.remove("visible");
            menu.classList.add("hidden");
            // Ждем окончания анимации и затем переходим
            setTimeout(() => {
                body.style.transition = `opacity 0.3s linear`;
                window.location.href = href; // Переход на новую страницу
            }, 600);
        });
    });
};
//показать или спрятать меню

checkboxSubmenu1.addEventListener('click', () =>{
    divSrtelkaMenu.classList.toggle('open');
    if(chet == true){
        divSrtelkaMenu.style.height = "110px";
        chet = false;
    }
    else{
        interval2 = setInterval(()=>{
            divSrtelkaMenu.style.height = "0px";
            clearInterval(interval2)
        }, 300);
        chet = true;
    }
});
PodMenuPh.classList.toggle('open');

checkboxMain.addEventListener('click', checkboxmainn) 
function checkboxmainn(){
    if(chetPodMenu == false){
        PodMenu.style.height = `360px`;
        chetPodMenu = true;
        if (window.innerWidth <= 768){
            body.style.opacity =  "0";
            interval5 = setTimeout(()=>{
                PodMenuPh.classList.toggle('open');
            }, 200)
            PodMenuPh.style.height = "auto";
        }
    }
    else{
        chetPodMenu = false;
        PodMenu.style.height = `0px`;
        if (window.innerWidth <= 768){
            PodMenuPh.classList.toggle('open');
            body.style.opacity =  "1";
            let interval4 = setInterval(() =>{
                PodMenuPh.style.height = "0px";
                clearInterval(interval4);
            }, 450)
        }
    }
}

function checkWidth() {
    if (window.innerWidth <= 768) {
        if(divSrtelkaMenu.classList.toggle('open') == true){
            console.log(divSrtelkaMenu.classList.toggle('open'));
        }
        chetPodMenu = true;
        checkboxmainn();
        checkboxMain.checked = false;
    } 
}
checkWidth();
let HoverMenu1 = document.querySelector('#DivNovinki');
let HoverMenu2 = document.querySelector('#DivBraslets')
let HoverMenu3 = document.querySelector('#DivIndividual')
let HoverMenu4 = document.querySelector('#DivPresent')
let HoverMenu5 = document.querySelector('#DivInstagram')
let MenuDiv1 = document.querySelector('#PodRNovinki');
let MenuDiv2 = document.querySelector('#PodRBraslets');
let MenuDiv3 = document.querySelector('#PodRIndiv');
let MenuDiv4 = document.querySelector('#PodRPresent');
let MenuDiv5 = document.querySelector('#PodRInstagram');

HoverMenu1.addEventListener('mouseover', () =>{
    MenuDiv1.style.opacity = "1";
})
HoverMenu1.addEventListener('mouseout', () =>{
    MenuDiv1.style.opacity = "0";
})
HoverMenu2.addEventListener('mouseover', () =>{
    MenuDiv2.style.opacity = "1";
})
HoverMenu2.addEventListener('mouseout', () =>{
    MenuDiv2.style.opacity = "0";
})
HoverMenu3.addEventListener('mouseover', () =>{
    MenuDiv3.style.opacity = "1";
})
HoverMenu3.addEventListener('mouseout', () =>{
    MenuDiv3.style.opacity = "0";
})
HoverMenu4.addEventListener('mouseover', () =>{
    MenuDiv4.style.opacity = "1";
})
HoverMenu4.addEventListener('mouseout', () =>{
    MenuDiv4.style.opacity = "0";
})
HoverMenu5.addEventListener('mouseover', () =>{
    MenuDiv5.style.opacity = "1";
})
HoverMenu5.addEventListener('mouseout', () =>{
    MenuDiv5.style.opacity = "0";
})

// Проверка при изменении размера окна
window.addEventListener('resize', checkWidth);