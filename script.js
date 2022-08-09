const bar = document.querySelector(".bar img ");
const menu_list = document.querySelector(".main-menu");
bar.addEventListener("click",()=>{
 menu_list.classList.toggle("left");
});

window.onscroll = (() => {
  menu_list.classList.remove('left');    
})