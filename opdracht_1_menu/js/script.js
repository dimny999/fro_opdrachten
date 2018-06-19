let subMenu document.querySelectorAll('.sub-menu > a');
console.log(subMenu);

for (let i=0; i < subMenu.length; i++) {
  subMenu[i].addEventListener('click',(e)=> e.preventDefault());
}
