let subir = document.querySelector('.totop');

subir.addEventListener('click',() => {
    window.scrollTo({
        top:0,
       behavior: 'smooth'

    })
  
  
})

function aparecerBotao(){
    if (window.scrollY === 0){
        subir.style.display = 'none'
    } else {
        subir.style.display = 'block'
    }
}

window.addEventListener('scroll',aparecerBotao)