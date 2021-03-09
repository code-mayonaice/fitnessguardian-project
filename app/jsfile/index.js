
const hamburgermenu = document.querySelector('.hamburger-menu');
const sidenavigaton = document.querySelector('.sidenavigaton');
const remover= document.querySelector('.remover');
   
hamburgermenu.addEventListener('click',function(){

   sidenavigaton.classList.toggle('navlinks-active');

});

remover.addEventListener('click',function(){
   
   sidenavigaton.classList.remove('navlinks-active');

});
