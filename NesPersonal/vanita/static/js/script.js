console.log("script")
function alert1() {
    alert("Nothing else to show");
}
function instaLink(){
    window.open("https://instagram.com/vanitabeauty_?igshid=YmMyMTA2M2Y=");
}
function metaLink(){
    window.open("https://instagram.com/melissabhmakeup?igshid=YmMyMTA2M2Y=");
}
function whatsappLink(){
    window.open("https://api.whatsapp.com/send?phone=573157276542&text=Hola,%20Quisiera%20conocer%20mas%20de%20tus%20productos");
}
function submitButton(){
    alert("Thanks For Submitting your question, we will get back at you as soon as possible")
}


const contenedorProductos = document.getElementById("contenedor-productos");

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src =${producto.img} alt="">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p class="precioProducto"> Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar<i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)
})
