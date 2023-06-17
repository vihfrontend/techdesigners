
const btn = document.querySelector('.menu-hamburguer');
const nav = document.querySelector('.list-nav');

console.log(btn);
console.log(nav);

const openmenu = () => {
  nav.classList.toggle('open');
  console.log(nav);
};

if (btn) {
  btn.addEventListener('click', openmenu);
}
