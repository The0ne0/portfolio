const manu = document.querySelector (".menu")

function change_active (event){
    console.log(event.target)

}

const swiper = new Swiper('.swiper', {
    // direction: '',
    loop: true,
    effect: 'coverflow',
    depth:100,

});
