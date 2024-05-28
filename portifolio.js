const buttonMenu = document.querySelector('.butao__menu');

const menu__mobile = document.querySelector('.menu__mobile');

let menuTaAberto = false;// menuTaAberto --> peguntando // se false --> fechado, se true --> abeto

buttonMenu.addEventListener('click', function (){
    menuTaAberto? menu__mobile.classList.add('invisivel') : menu__mobile.classList.remove('invisivel');
    
    menuTaAberto? buttonMenu.children[0].setAttribute('src','/img/menuHamburguer.png') 
    : buttonMenu.children[0].setAttribute('src','/img/cruzMenu.png');

    menuTaAberto = !menuTaAberto;
});