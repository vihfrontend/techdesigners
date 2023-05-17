
let textwillter = document.querySelector('.text-typi');
    function text(elemento){
        let textArray = elemento.textContent.split('');
        elemento.innerHTML = '';
        textArray.forEach((letra ,i)=>{
            setTimeout(() => {
                elemento.innerHTML += letra;
            }, 170 * i);
        });
    }
    console.log(textwillter)
    text(textwillter)