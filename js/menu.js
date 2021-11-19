const menu = document.querySelector('.menu');

const menuNavegacion = document.querySelector('.menu-navegacion');

// console.log(menu);
// console.log(menuNavegacion);

menu.addEventListener('click', ()=> {
    menuNavegacion.classList.toggle("spread")
});

window.addEventListener('click', e=>{
    // console.log(e.target)
    if(menuNavegacion.classList.contains('spread') && e.target != menuNavegacion && e.target !=menu){
            
            menuNavegacion.classList.toggle("spread")
    }
})