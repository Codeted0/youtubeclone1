const menu = document.querySelector("menu");

const side_bar = document.querySelector(".side_bar");

menu.addEventListener('click', function(){
    side_bar.classList.toggle('show-side_bar');
});
