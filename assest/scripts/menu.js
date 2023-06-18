
const btn = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.list-nav');


const openmenu = () => {
  nav.classList.toggle('open');
};

if (btn) {
  btn.addEventListener('click', openmenu);
}
