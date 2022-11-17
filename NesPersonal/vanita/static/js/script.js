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




let stockProductos = [
    {
        id: 1,
        nombre: "Rubor y labial velvet beauty Glazed",
        precio: 15000,
        descripcion: "xxx1",
        cantidad: 1,
        img: '../static/imgvid/RuborYLabialVelvet.jpg'
    },
    {
        id: 2,
        nombre: "Soft Lips Individual",
        precio: 6000,
        descripcion: "xxx2",
        cantidad: 1,
        img: '../static/imgvid/Soft-Lips.jpg'
    },
    {
        id: 3,
        nombre: "Contorno Cupcake",
        precio: 15000,
        descripcion: "xxx3",
        cantidad: 1,
        img: '../static/imgvid/ContornoCupcake.jpg'
    },
    {
        id: 4,
        nombre: "Espuma Desmaquillante",
        precio: 25000,
        descripcion: "xxx4",
        cantidad: 1,
        img: '../static/imgvid/espumaDesmaquillante.jpg'
    },
    {
        id: 5,
        nombre: "Polvo Traslucido",
        precio: 12000,
        descripcion: "xxx5",
        cantidad: 1,
        img: '../static/imgvid/polvoTraslucido.jpg'
    },
    {
        id: 6,
        nombre: "Polvo Suelto Trendy",
        precio: 20000,
        descripcion: "xxx6",
        cantidad: 1,
        img: '../static/imgvid/polvosSueltos.jpg'
    },
    {
        id: 7,
        nombre: "Corrector + Tratamiento Trendy",
        precio: 20000,
        descripcion: "xxx7",
        cantidad: 1,
        img: '../static/imgvid/correctoYTratamiento.jpg'
    },
    {
        id: 8,
        nombre: "Lapiz De Cejas ",
        precio: 10000,
        descripcion: "xxx8",
        cantidad: 1,
        img: '../static/imgvid/lapizDeCejas.jpg'
    },
    {
        id: 9,
        nombre: "Delineador Doble Trendy",
        precio: 15000,
        descripcion: "xxx9",
        cantidad: 1,
        img: '../static/imgvid/delineadorDobleTrendy.jpg'
    },
    {
        id: 10,
        nombre: "Kit de Cejas Trendy",
        precio: 18000,
        descripcion: "xxx10",
        cantidad: 1, 
        img: '../static/imgvid/kitDeCejas.jpg'
    }
]
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor')
const botonVaciar = document.getElementById('vaciar-carrito')
const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')
let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src =${producto.img} alt="imagen de producto">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p class="precioProducto"> Precio: $${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar<i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () =>{
        agregarAlCarrito(producto.id)
    })
})

const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId)
    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === prodId){
                prod.cantidad++
            }
        })
    }
    else{    
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
        }
actualizarCarrito()
}


const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)
    const indice = carrito.indexOf(item)
    carrito.splice(indice, 1)
    actualizarCarrito()
}

const actualizarCarrito = ()=> {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML =`
        <img src=${prod.img} alt="imagen de producto">
        <p>${prod.nombre}</p>
        <p> Precio :$ ${prod.precio}</p>
        <p> Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick ="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })
    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

