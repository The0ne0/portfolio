const menu = document.querySelector (".menu")
const menu_link = menu.querySelectorAll (".menu-link")
const menu_btn = document.querySelector(".menu-button")
const mobile_menu = document.querySelector(".mobile_menu")
const mobile_link = mobile_menu.querySelectorAll (".menu-link")


function change_active (event){
    const target = event.target
    if (target.classList.contains("menu-link")){
        const prev_activ = menu.querySelector(".active");
        prev_activ.classList.remove("active");
        target.classList.add("active");
    }
}

const swiper = new Swiper('.swiper', {
    // direction: '',
    loop: true,
    effect: 'coverflow',
    depth:100,

});

// menu.onclick = change_active

window.onscroll = () => {
    const h =document.documentElement.clientHeight;
    let new_active = null;
    let mobile_active = null;
    if(window.scrollY >= h * 4){
        new_active = menu_link[4];
        mobile_active = mobile_link[4];
    }
    else if(window.scrollY >= h * 3){
        new_active =menu_link[3];
        mobile_active = mobile_link[3];
    }
    else if(window.scrollY >= h * 2){
        new_active =menu_link[2];
        mobile_active = mobile_link[2];
    }
    else if(window.scrollY >= h * 1){
        new_active =menu_link[1];
        mobile_active = mobile_link[1];
    }
    else{
        new_active =menu_link[0];
        mobile_active = mobile_link[0];
    }
    const prev_activ = menu.querySelector(".active");
    prev_activ.classList.remove("active");
    new_active.classList.add("active");
    const prev_mobile = mobile_menu.querySelector(".active");
    prev_mobile.classList.remove("active");
    mobile_active.classList.add("active");
};



menu_btn.onclick = () => {
    mobile_menu.classList.toggle("hide");
    console.log("hi")
};