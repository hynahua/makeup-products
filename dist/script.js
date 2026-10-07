const state={bag:0};
const bagCount=document.querySelector('.bag-count');
const toast=document.querySelector('.toast');
const modal=document.querySelector('.modal');
const overlay=document.querySelector('.overlay');
const showToast=(message='Added to your bag')=>{toast.textContent=message;toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)};
const addToBag=()=>{state.bag+=1;bagCount.textContent=state.bag;showToast()};

document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filter').forEach(item=>item.classList.remove('active'));
  button.classList.add('active');
  document.querySelectorAll('.product-card').forEach(card=>card.classList.toggle('hidden',button.dataset.filter!=='all'&&card.dataset.category!==button.dataset.filter));
}));

document.querySelectorAll('.heart').forEach(button=>button.addEventListener('click',event=>{
  event.stopPropagation();button.classList.toggle('saved');button.textContent=button.classList.contains('saved')?'♥':'♡';
}));

document.querySelectorAll('.quick-add').forEach(button=>button.addEventListener('click',event=>{
  event.stopPropagation();addToBag();
}));

const openModal=card=>{
  modal.querySelector('#modal-title').textContent=card.dataset.name;
  modal.querySelector('.modal-price').textContent=card.dataset.price;
  modal.querySelector('.modal-description').textContent=card.dataset.description;
  modal.querySelector('.modal-swatch').style.background=card.dataset.colour;
  modal.hidden=false;overlay.hidden=false;document.body.style.overflow='hidden';modal.querySelector('.modal-close').focus();
};
const closeModal=()=>{modal.hidden=true;overlay.hidden=true;document.body.style.overflow=''};
document.querySelectorAll('.product-card').forEach(card=>card.addEventListener('click',()=>openModal(card)));
modal.querySelector('.modal-close').addEventListener('click',closeModal);overlay.addEventListener('click',closeModal);
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeModal()});
modal.querySelector('.add-to-bag').addEventListener('click',()=>{addToBag();closeModal()});

document.querySelector('.signup-form').addEventListener('submit',event=>{
  event.preventDefault();document.querySelector('.form-note').textContent='You’re on the list. Welcome to Veloura.';event.currentTarget.reset();
});

document.querySelector('.open-finder').addEventListener('click',()=>{document.querySelector('#shop').scrollIntoView({behavior:'smooth'});showToast('Explore our flexible shade range')});
const menuButton=document.querySelector('.menu-button');
menuButton.addEventListener('click',()=>{
  const nav=document.querySelector('.desktop-nav');const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));
  if(!open){nav.style.display='flex';nav.style.position='absolute';nav.style.inset='70px 0 auto 0';nav.style.padding='25px';nav.style.background='var(--paper)';nav.style.flexDirection='column';nav.style.borderBottom='1px solid var(--line)'}else{nav.removeAttribute('style')}
});
