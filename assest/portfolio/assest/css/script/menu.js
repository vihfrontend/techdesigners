(()=>{

    let btn = document.querySelector('.arrow');
    let openmenu = ()=>{
        let nav = document.querySelector('.navbar');
        nav.classList.toggle('open');
        btn.classList.toggle('back');
    }
    btn.addEventListener('click',openmenu)
    let anoatual = document.querySelector('#year');
    let data = new Date();
    let ano = '3000'
    anoatual.innerHTML = ano

})();