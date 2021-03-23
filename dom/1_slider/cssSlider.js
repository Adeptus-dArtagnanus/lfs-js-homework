let leftBtn   = document.querySelector('#left');
let rightBtn  = document.querySelector('#right');
let view      = document.querySelector('#view');
let itemsList = document.querySelector('#items');
let items     = document.querySelectorAll('.slider__item');
const viewStyles = window.getComputedStyle(view)
const listStyles = window.getComputedStyle(itemsList);
const itemStyles = window.getComputedStyle(items[0]);


itemsList.style.right = 0;
let currShift = 0;


let getMax = () => (items.length * parseInt(itemStyles.width)) - parseInt(viewStyles.width);

leftBtn .addEventListener('click', e=>{
  e.preventDefault();
  shiftSlider(-parseInt(itemStyles.width));
})
rightBtn.addEventListener('click', e=>{
  e.preventDefault();
  shiftSlider(parseInt(itemStyles.width));
})


function shiftSlider(val){
  if(parseInt(listStyles.right) + val > 0 && parseInt(listStyles.right) + val < getMax()){
    itemsList.style.right = `${currShift+=val}px`;
  }
}