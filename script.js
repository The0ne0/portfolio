const menu = document.querySelector (".menu")
const menu_link = document.querySelector (".menu-link")


function change_active (event){
    console.log(event.target)
}

const swiper = new Swiper('.swiper', {
    // direction: '',
    loop: true,
    effect: 'coverflow',
    depth:100,

});

menu.onclick = change_active