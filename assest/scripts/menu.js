(()=>{
    let menu = document.querySelector('.menu-hamburguer');
     let open = ()=>{
        let menucurrent = document.querySelector('.list-nav');
        menu.classList.toggle('alternete')
        menucurrent.classList.toggle('open')
    }
    menu.addEventListener('click',open)
})();