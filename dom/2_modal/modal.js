document.querySelector('#openOverlay').addEventListener('click', e=>createModal('text text text'));



function createModal(content){
  if(document.querySelector('.overlay')) return true;

  let overleyEl = document.createElement('div');
  overleyEl.classList.add('overlay');

  let containerEl = document.createElement('div');
  containerEl.classList.add("modal-container");

  let closeEl = document.createElement('a');
  closeEl.classList.add('close');
  closeEl.textContent = 'X';
  closeEl.href = '#';

  let contentEl = document.createElement('div');
  contentEl.classList.add('content');
  contentEl.innerHTML = content;  


  closeEl.addEventListener('click', e=>{
    e.preventDefault();
    removeModal();
  });
  overleyEl.addEventListener('click', e=>{
    if(!e.target.classList.contains('content'))
      removeModal();
  })

  
  containerEl.appendChild(closeEl);
  containerEl.appendChild(contentEl);
  overleyEl.appendChild(containerEl);
  document.body.appendChild(overleyEl);
}

function removeModal(){
  document.body.removeChild(document.querySelector('.overlay'))
}