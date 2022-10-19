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

let stockProductos = [
    {
        id: 1,
        nombre: "Rubor y labial velvet beauty Glazed",
        precio: 15000,
        descripcion: "xxx1",
        img: "imgvid\RuborYLabialVelvet.png"
    },
    {
        id: 2,
        nombre: "Soft Lips Individual",
        precio: 6000,
        descripcion: "xxx2",
        img: "imgvid\Soft-Lips.jpg"
    },
    {
        id: 3,
        nombre: "Contorno Cupcake",
        precio: 15000,
        descripcion: "xxx3",
        img: "imgvid\ContornoCupcake.jpg"
    },
    {
        id: 4,
        nombre: "Espuma Desmaquillante",
        precio: 25000,
        descripcion: "xxx4",
        img: "imgvid\espumaDesmaquillante.jpg"
    },
    {
        id: 5,
        nombre: "Polvo Traslucido",
        precio: 12000,
        descripcion: "xxx5",
        img: "imgvid\polvosTraslucido.jpg"
    },
    {
        id: 6,
        nombre: "Polvo Suelto Trendy",
        precio: 20000,
        descripcion: "xxx6",
        img: "imgvid\polvosSueltos.jpg"
    },
    {
        id: 7,
        nombre: "Corrector + Tratamiento Trendy",
        precio: 20000,
        descripcion: "xxx7",
        img: "imgvid\correctoYTratamiento.jpg"
    },{
        id: 8,
        nombre: "Lapiz De Cejas ",
        precio: 10000,
        descripcion: "xxx8",
        img: "imgvid\lapizDeCejas"
    },{
        id: 9,
        nombre: "Delineador Doble Trendy",
        precio: 15000,
        descripcion: "xxx9",
        img: "imgvid\delineadorDobleTrendy.jpg"
    },{
        id: 10,
        nombre: "Kit de Cejas Trendy",
        precio: 18000,
        descripcion: "xxx10",
        img: "imgvid\kitDeCejas.jpg"
    }
];

let carrito = []
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
