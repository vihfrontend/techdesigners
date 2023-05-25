(()=>{

    let btn = document.querySelector('.menu-hamburguer');
    let openmenu = ()=>{
        let nav = document.querySelector('.list-nav');
        nav.classList.toggle('open');
    }
    btn.addEventListener('click',openmenu)
    let anoatual = document.querySelector('#year');
    let data = new Date();
    let yearnew = data.getFullYear();
    anoatual.innerHTML = yearnew

})();