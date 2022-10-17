const shopContent = document.getElementById("shopContent");

const products = [
    {
        id: 1,
        nombre: "Rubor y labial velvet beauty Glazed",
        precio: 15000,
        img: "imgvid\RuborYLabialVelvet.png"
    },
    {
        id: 2,
        nombre: "Soft Lips Individual",
        precio: 6000,
        img: "imgvid\Soft-Lips.jpg"
    },
    {
        id: 3,
        nombre: "Contorno Cupcake",
        precio: 15000,
        img: "imgvid\ContornoCupcake.jpg"
    },
    {
        id: 4,
        nombre: "Espuma Desmaquillante",
        precio: 25000,
        img: "imgvid\espumaDesmaquillante.jpg"
    },
    {
        id: 5,
        nombre: "Polvo Traslucido",
        precio: 12000,
        img: "imgvid\polvosTraslucido.jpg"
    },
    {
        id: 6,
        nombre: "Polvo Suelto Trendy",
        precio: 20000,
        img: "imgvid\polvosSueltos.jpg"
    },
    {
        id: 7,
        nombre: "Corrector + Tratamiento Trendy",
        precio: 20000,
        img: "imgvid\correctoYTratamiento.jpg"
    },{
        id: 8,
        nombre: "Lapiz De Cejas ",
        precio: 10000,
        img: "imgvid\lapizDeCejas"
    },{
        id: 9,
        nombre: "Delineador Doble Trendy",
        precio: 15000,
        img: "imgvid\delineadorDobleTrendy.jpg"
    },{
        id: 10,
        nombre: "Kit de Cejas Trendy",
        precio: 18000,
        img: "imgvid\kitDeCejas.jpg"
    }
];
let shoppingCar = [];

products.forEach((item) =>{
    let content = document.createElement("div");
    content.innerHTML = 
    <><img src="${item.img}"></img>
    <><h3>${item.nombre}</h3>
    <p>${item.precio} $ </p></></>
    ;

    shopContent.append(content);

});