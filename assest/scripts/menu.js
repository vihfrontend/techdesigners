(()=>{
    let menu = document.querySelector('.hamburguer-active');
     let open = ()=>{
        let menucurrent = document.querySelector('.main-itens');
        menucurrent.classList.toggle('open')
    }
    menu.addEventListener('click',open)
})();