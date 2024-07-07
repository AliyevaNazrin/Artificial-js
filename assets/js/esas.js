// const swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       clickable:true,
//     },
//   }); 
const hamburgerMenuBtn= document.querySelector(".bars")
const baglamaIconu=document.querySelector(".fa-xmark")


hamburgerMenuBtn.addEventListener('click', function(){
    document.querySelector(".mobile-menu").classList.add("aktiv")
  
})

baglamaIconu=addEventListener("click", function(){
    document.querySelector(".mobile-menu").classList.remove("aktiv")
})

