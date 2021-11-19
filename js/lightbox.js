const imagenes = document.querySelectorAll('.contenido-proyectos-2')
const imagenesLight = document.querySelector('.agg-img')
const contenedorLight = document.querySelector('.imagen-light')


imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    })
})


const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
}