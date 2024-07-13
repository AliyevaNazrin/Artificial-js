// const swiper = new Swiper(".mySwiper", {
//     pagination: {
//       el: ".swiper-pagination",
//       clickable:true,
//     },
//   }); 
const hamburgerMenuBtn= document.querySelector(".bars")
const baglamaIconu=document.querySelector(".fa-xmark")

// introduction hissesine modal qutu yaradiriq 
// const modalBox=document.querySelector(".watch-video")
// const watchVideoBtn=document.getElementsByClassName("watch-video")
// watchVideoBtn.addEventListener("click",function(){
//     document.getElementById("watch-video-modal").classList.add("aktiv")
   
// })
// document.querySelector(".fa-circle-xmark").addEventListener("click",()=>{
//     document.getElementById("watch-video-modal").classList.remove("aktiv")
// })
hamburgerMenuBtn.addEventListener('click', function(){
    document.querySelector(".mobile-menu").classList.add("aktiv")
  
})

baglamaIconu.addEventListener('click', function(){
    document.querySelector(".mobile-menu").classList.remove("aktiv")
})
    

const watchVideoBtn=document.getElementsByTagName("button")[2]
const modalCloseBtn=document.querySelector(".fa-circle-mark")
watchVideoBtn.addEventListener('click',()=>{
    document.getElementById("watch-video-modal").classList.add("aktiv")
})
 
modalCloseBtn.addEventListener('click',function()
{document.getElementById("watch-video-modal").classList.remove("aktiv")
 })
 
