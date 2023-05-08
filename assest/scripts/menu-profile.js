(()=>{

    const btn = document.querySelector('.menu-profile');
    const addProfile = ()=>{
       let profile = document.querySelector('.profile-aside');
       profile.classList.toggle('active')
    }
    btn.addEventListener('click',addProfile)

})();