burger = document.querySelector(".burger")
rightNav = document.querySelector(".right-nav-in")
navbar = document.querySelector(".navbar")


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-nav-resp')
    navbar.classList.toggle('h-nav-resp')
})