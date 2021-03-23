let even = true;


document.querySelector('.quantity-selector').addEventListener('change', e=>{
  createMarkup(e.target.value);
})
document.querySelector('.color-selector').addEventListener('change', e=>{
  colorBlocks(e.target.value);
})


function createMarkup(num){
  let markup = '';
  for(let i = 0; i < num; i++){
    let item = document.createElement('div');
    item.classList.add('item');
    item.innerText = i+1;
    markup += item.outerHTML;
  }  
  document.querySelector('.blocks').innerHTML = markup;
}
function colorBlocks(color){
  var blocks = document.querySelectorAll('.item');
  for(let i = 0; i < blocks.length; i++){
    blocks[i].style.backgroundColor = 'transparent';
    if(even ? i%2===0 : i%2!==0)
      blocks[i].style.backgroundColor = color;
  }
  even = !even;
}