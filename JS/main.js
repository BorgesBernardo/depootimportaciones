const productos = [
  // ------> Apple <-------

  //-------> iPhone
  {
    id: "apple-iphone13",
    titulo: "iPhone 13",
    descripcion: "128 GB",
    imagen: "../assets/productos/apple-iphone-13.jpg",
    categoria:{
      nombre: "Celulares",
      id: "apple"
    },
    precio: 700
  },
  {
    id: "apple-iphone14",
    titulo: "iPhone 14",
    descripcion: "128 GB",
    imagen: "../assets/productos/apple-iphone-14.jpg",
    categoria:{
      nombre: "Celulares",
      id: "apple"
    },
    precio: 770
  },
  // {
  //   id: "apple-iphone15",
  //   titulo: "iPhone 15",
  //   descripcion: "128 GB | 256 GB | 512 GB",
  //   imagen: "../assets/productos/apple-iphone-15.jpg",
  //   categoria:{
  //     nombre: "Celulares",
  //     id: "apple"
  //   },
  //   precio: 0
  // },
  {
    id: "apple-iphone15-promax",
    titulo: "iPhone 15 Pro Max",
    descripcion: "256 GB | 1 TB",
    imagen: "../assets/productos/apple-iphone-15promax.jpg",
    categoria:{
      nombre: "Celulares",
      id: "apple"
    },
    precio: "1300 | USD 1800"
  },

//-------> Watch

  {
    id: "apple-watch-se",
    titulo: "iWatch SE Aluminum Case",
    descripcion: "40mm | 44mm",
    imagen: "../assets/productos/apple-watch-se.jpg",
    categoria:{
      nombre: "Watch",
      id: "apple"
    },
    precio: "300 | USD 340"
  },
  {
    id: "apple-watch-secell",
    titulo: "iWatch SE + 4G Aluminum Case",
    descripcion: "40mm | 44mm",
    imagen: "../assets/productos/apple-watch-secell.jpg",
    categoria:{
      nombre: "Watch",
      id: "apple"
    },
    precio: "470 | USD 500"
  },
  {
    id: "apple-watch-s9",
    titulo: "iWatch Serie 9 Aluminum Case",
    descripcion: "41mm | 45mm",
    imagen: "../assets/productos/apple-watch-s9.jpg",
    categoria:{
      nombre: "Watch",
      id: "apple"
    },
    precio: "480 | USD 530"
  },
  {
    id: "apple-watch-s9cell",
    titulo: "iWatch Serie 9 + 4G Aluminum Case",
    descripcion: "41mm | 45mm",
    imagen: "../assets/productos/apple-watch-s9cell.jpg",
    categoria:{
      nombre: "Watch",
      id: "apple"
    },
    precio: "700 | USD 740"
  },
  {
    id: "apple-watch-ultra",
    titulo: "iWatch Ultra 2 + 4G Titanium Case",
    descripcion: "49mm",
    imagen: "../assets/productos/apple-watch-ultra.jpg",
    categoria:{
      nombre: "Watch",
      id: "apple"
    },
    precio: 990
  },


//-------> Macbooks

  {
    id: "apple-macbook-airm113",
    titulo: 'Macbook Air M1 13"',
    descripcion: " M1 | 8GB Ram | 256 GB SSD",
    imagen: "../assets/productos/apple-macbook-airm113.jpg",
    categoria:{
      nombre: "Notebooks",
      id: "apple"
    },
    precio: 1000
  },
  {
    id: "apple-macbook-airm213",
    titulo: 'Macbook Air M2 13"',
    descripcion: " M2 | 8GB Ram | 256gb SSD",
    imagen: "../assets/productos/apple-macbook-airm213.jpg",
    categoria:{
      nombre: "Notebooks",
      id: "apple"
    },
    precio: 1290
  },
  {
    id: "apple-macbook-airm215",
    titulo: 'Macbook Air M2 15"',
    descripcion: " M2 | 8GB Ram | 256gb SSD",
    imagen: "../assets/productos/apple-macbook-airm215.jpg",
    categoria:{
      nombre: "Notebooks",
      id: "apple"
    },
    precio: 1520
  },
  {
    id: "apple-macbook-airm313",
    titulo: 'Macbook Air M3 13"',
    descripcion: " M3 | 8GB Ram | 256gb SSD",
    imagen: "../assets/productos/apple-macbook-airm313.jpg",
    categoria:{
      nombre: "Notebooks",
      id: "apple"
    },
    precio: 1450
  },
  {
    id: "apple-macbook-airm315",
    titulo: 'Macbook Air M3 15"',
    descripcion: " M3 | 8GB Ram | 256gb SSD",
    imagen: "../assets/productos/apple-macbook-airm315.jpg",
    categoria:{
      nombre: "Notebooks",
      id: "apple"
    },
    precio: 1650
  },
  {
    id: "apple-macbook-prom314",
    titulo: 'Macbook Pro M3 14"',
    descripcion: " M3 - | 8 CPU | 14 GPU | 512 GB SSD",
    imagen: "../assets/productos/apple-macbook-prom314.jpg",
    categoria:{
      nombre: "Notebooks",
      id: "apple"
    },
    precio: 1960
  },
  {
    id: "apple-macbook-prom316",
    titulo: 'Macbook Pro M3 16"',
    descripcion: " M3 Pro | 12 CPU | 18 GPU | 512 GB SSD",
    imagen: "../assets/productos/apple-macbook-prom316.jpg",
    categoria:{
      nombre: "Notebooks",
      id: "apple"
    },
    precio: 3080
  },

//-------> iPad

  {
    id: "apple-ipad-mini",
    titulo: 'iPad Mini Wifi',
    descripcion: " 64 GB ",
    imagen: "../assets/productos/apple-ipad-mini.jpg",
    categoria:{
      nombre: "tablets",
      id: "apple"
    },
    precio: 600
  },
  {
    id: "apple-ipad-9nagen",
    titulo: 'iPad 9na Generación Wifi',
    descripcion: " 64 GB | 256 GB ",
    imagen: "../assets/productos/apple-ipad-9nagen.jpg",
    categoria:{
      nombre: "tablets",
      id: "apple"
    },
    precio: "440 | USD 590"
  },
  {
    id: "apple-ipad-10magen",
    titulo: 'iPad 10th Generación Wifi',
    descripcion: " 64 GB | 256 GB ",
    imagen: "../assets/productos/apple-ipad-10magen.jpg",
    categoria:{
      nombre: "tablets",
      id: "apple"
    },
    precio: "580 | USD 750"
  },
  {
    id: "apple-ipad-air",
    titulo: 'iPad Air Wifi',
    descripcion: " 256 GB ",
    imagen: "../assets/productos/apple-ipad-air.jpg",
    categoria:{
      nombre: "tablets",
      id: "apple"
    },
    precio: 880
  },
  {
    id: "apple-ipad-pro11",
    titulo: 'iPad Pro 11" M2 Wifi',
    descripcion: " 128 GB",
    imagen: "../assets/productos/apple-ipad-pro11.jpg",
    categoria:{
      nombre: "tablets",
      id: "apple"
    },
    precio: 940
  },

//-------> iMac

  {
    id: "apple-imac24",
    titulo: 'iMac 24"',
    descripcion: " M3 | 8 CPU | 8 GPU | 256 GB SSD",
    imagen: "../assets/productos/apple-imac24.jpg",
    categoria:{
      nombre: "all-in-one",
      id: "apple"
    },
    precio: 2300
  },

//-------> AirPods

  {
    id: "apple-airpods-pro",
    titulo: 'AirPods Pro',
    descripcion: "",
    imagen: "../assets/productos/apple-airpods-pro.jpg",
    categoria:{
      nombre: "all-in-one",
      id: "apple"
    },
    precio: 300
  },




  // ------> Nikon <-------
  {
    id: "nikon-coolpixp950",
    titulo: "Nikon Coolpix",
    descripcion: "P950",
    imagen: "../assets/productos/nikon-coolpixp950.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 920
  },
  {
    id: "nikon-d850body",
    titulo: "Nikon D850 Body",
    descripcion: "Body",
    imagen: "../assets/productos/nikon-d850body.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 2600
  },
  {
    id: "nikon-d3500kit",
    titulo: "Nikon D3500 ",
    descripcion: "Kit 18-55mm",
    imagen: "../assets/productos/nikon-d3500kit.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 920
  },
  {
    id: "nikon-d5600kit",
    titulo: "Nikon D5600",
    descripcion: "Kit 18-55mm",
    imagen: "../assets/productos/nikon-d5600kit.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 940
  },
  {
    id: "nikon-d7500body",
    titulo: "Nikon D7500",
    descripcion: "Body",
    imagen: "../assets/productos/nikon-d7500body.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 1000
  },
  {
    id: "nikon-d7500kit",
    titulo: "Nikon D7500",
    descripcion: "Kit 18-140mm",
    imagen: "../assets/productos/nikon-d7500kit.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 1360
  },
  {
    id: "nikon-z5body",
    titulo: "Nikon Z5",
    descripcion: "Body",
    imagen: "../assets/productos/nikon-z5body.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 1280
  },
  // {
  //   id: "nikon-z5kit",
  //   titulo: "Nikon Z5 Kit 24-200mm",
  //   imagen: "../assets/productos/nikon-z5kit.jpg",
  //   categoria:{
  //     nombre: "Cámaras Nikon",
  //     id: "nikon",
  //   },
  //   precio: 1050
  // },
  // {
  //   id: "nikon-z6iibody",
  //   titulo: "Nikon Z6 II Body",
  //   imagen: "../assets/productos/nikon-z6iibody.jpg",
  //   categoria:{
  //     nombre: "Cámaras Nikon",
  //     id: "nikon",
  //   },
  //   precio: 1050
  // },
  {
    id: "nikon-z6iikit",
    titulo: "Nikon Z6 II",
    descripcion: "Kit 24-70mm",
    imagen: "../assets/productos/nikon-z6iikit.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 2430
  },
  {
    id: "nikon-z7iibody",
    titulo: "Nikon Z7 II",
    descripcion: "Body",
    imagen: "../assets/productos/nikon-z7iibody.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 2650
  },
  // {
  //   id: "nikon-z8kit",
  //   titulo: "Nikon Z8 Kit 24-120mm",
  //   imagen: "../assets/productos/nikon-z8kit.jpg",
  //   categoria:{
  //     nombre: "Cámaras Nikon",
  //     id: "nikon",
  //   },
  //   precio: 1800
  // },
  {
    id: "nikon-z9body",
    titulo: "Nikon Z9",
    descripcion: "Body",
    imagen: "../assets/productos/nikon-z9body.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 5150
  },
  {
    id: "nikon-z30body",
    titulo: "Nikon Z30",
    descripcion: "Body",
    imagen: "../assets/productos/nikon-z30body.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 720
  },
  {
    id: "nikon-z30kit",
    titulo: "Nikon Z30",
    descripcion: "Kit 16-50mm",
    imagen: "../assets/productos/nikon-z30kit.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 880
  },
  {
    id: "nikon-z50body",
    titulo: "Nikon Z50",
    descripcion: "Body",
    imagen: "../assets/productos/nikon-z50body.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 880
  },
  // {
  //   id: "nikon-z50kit",
  //   titulo: "Nikon Z50 Kit 16-50mm",
  //   imagen: "../assets/productos/nikon-z50kit.jpg",
  //   categoria:{
  //     nombre: "Cámaras Nikon",
  //     id: "nikon",
  //   },
  //   precio: 1050
  // },
  {
    id: "nikon-zfbody",
    titulo: "Nikon ZF",
    descripcion: "Body",
    imagen: "../assets/productos/nikon-zfbody.jpg",
    categoria:{
      nombre: "Cámaras Nikon",
      id: "nikon",
    },
    precio: 2450
  },


  // ------> Canon <-------
  {
    id: "canon-5dmkivbody",
    titulo: "Canon 5D MK IV",
    descripcion: "Body",
    imagen: "../assets/productos/canon-5dmkiv.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 2050
  },
  // {
  //   id: "canon-6dmkiikit",
  //   titulo: "Canon 6D MK II Kit 24-105mm",
  //   imagen: "../assets/productos/canon-6dmkiikit.jpg",
  //   categoria:{
  //     nombre: "Cámaras Canon",
  //     id: "canon"
  //   },
  //   precio: 1700
  // },
  // {
  //   id: "canon-90dbody",
  //   titulo: "Canon 90D Body",
  //   imagen: "../assets/productos/canon-90dbody.jpg",
  //   categoria:{
  //     nombre: "Cámaras Canon",
  //     id: "canon",
  //   },
  //   precio: 1050
  // },
  {
    id: "canon-90dkit",
    titulo: "Canon 90D",
    descripcion: "Kit 18-135mm",
    imagen: "../assets/productos/canon-90dkit.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 1750
  },
  // {
  //   id: "canon-r5body",
  //   titulo: "Canon R5 Body",
  //   imagen: "../assets/productos/canon-r5body.jpg",
  //   categoria:{
  //     nombre: "Cámaras Canon",
  //     id: "canon"
  //   },
  //   precio: 680
  // },
  {
    id: "canon-r5cbody",
    titulo: "Canon R5 C",
    descripcion: "Body",
    imagen: "../assets/productos/canon-r5c.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 3850
  },
  // {
  //   id: "canon-r5kit",
  //   titulo: "Canon R5 Kit 24-105mm",
  //   imagen: "../assets/productos/canon-r5kit.jpg",
  //   categoria:{
  //     nombre: "Cámaras Canon",
  //     id: "canon"
  //   },
  //   precio: 680
  // },
  {
    id: "canon-r7body",
    titulo: "Canon R7",
    descripcion: "Body",
    imagen: "../assets/productos/canon-r7body.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 1430
  },
  // {
  //   id: "canon-r7kit",
  //   titulo: "Canon R7 Kit 18-150mm",
  //   imagen: "../assets/productos/canon-r7kit.jpg",
  //   categoria:{
  //     nombre: "Cámaras Canon",
  //     id: "canon"
  //   },
  //   precio: 680
  // },
  {
    id: "canon-r8body",
    titulo: "Canon R8",
    descripcion: "Body",
    imagen: "../assets/productos/canon-r8body.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 1630
  },
  // {
  //   id: "canon-r8kit",
  //   titulo: "Canon R8 Kit 24-50mm",
  //   imagen: "../assets/productos/canon-r8kit.jpg",
  //   categoria:{
  //     nombre: "Cámaras Canon",
  //     id: "canon"
  //   },
  //   precio: 680
  // },
  {
    id: "canon-r10body",
    titulo: "Canon R10",
    descripcion: "Body",
    imagen: "../assets/productos/canon-r10body.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 1050
  },
  // {
  //   id: "canon-r10kit",
  //   titulo: "Canon R10 Kit 18-45mm",
  //   imagen: "../assets/productos/canon-r10kit.jpg",
  //   categoria:{
  //     nombre: "Cámaras Canon",
  //     id: "canon"
  //   },
  //   precio: 680
  // },
  {
    id: "canon-r50kit",
    titulo: "Canon R50",
    descripcion: "Kit 18-45mm",
    imagen: "../assets/productos/canon-r50kit.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 950
  },
  {
    id: "canon-r100kit",
    titulo: "Canon R100",
    descripcion: "Kit 18-45mm",
    imagen: "../assets/productos/canon-r100kit.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 700
  },
  {
    id: "canon-rpbody",
    titulo: "Canon RP",
    descripcion: "Body",
    imagen: "../assets/productos/canon-rpbody.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 1100
  },
  {
    id: "canon-rpkit",
    titulo: "Canon RP",
    descripcion: "Kit 24-105mm",
    imagen: "../assets/productos/canon-rpkit.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 1550
  },
  {
    id: "canon-t8ikit",
    titulo: "Canon T8i",
    descripcion: "Kit 18-55mm",
    imagen: "../assets/productos/canon-t8ikit.jpg",
    categoria:{
      nombre: "Cámaras Canon",
      id: "canon"
    },
    precio: 1100
  },


  // ------> Sony <-------
  {
    id: "sony-a7ciibody",
    titulo: "Sony a7C II",
    descripcion: "Body",
    imagen: "../assets/productos/sony-a7ciibody.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 2230
  },
  {
    id: "sony-a7ciikit",
    titulo: "Sony a7C II",
    descripcion: "Kit 28-60mm",
    imagen: "../assets/productos/sony-a7ciikit.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 2550
  },
  {
    id: "sony-a7iiibody",
    titulo: "Sony a7 III",
    descripcion: "Body",
    imagen: "../assets/productos/sony-a7iiibody.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 1630
  },
  {
    id: "sony-a7iiikit",
    titulo: "Sony a7 III",
    descripcion: "Kit 28-70mm",
    imagen: "../assets/productos/sony-a7iiikit.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 1930
  },
  {
    id: "sony-a7ivbody",
    titulo: "Sony a7 IV",
    descripcion: "Body",
    imagen: "../assets/productos/sony-a7ivbody.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 2500
  },
  {
    id: "sony-a7ivkit",
    titulo: "Sony a7 IV",
    descripcion: "Kit 28-70mm",
    imagen: "../assets/productos/sony-a7ivkit.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 2620
  },
  {
    id: "sony-a6400kit",
    titulo: "Sony a6400",
    descripcion: "Kit 16-50mm",
    imagen: "../assets/productos/sony-a6400kit.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 1020
  },
  // {
  //   id: "sony-a6700body",
  //   titulo: "Sony a6700 Body",
  //   imagen: "../assets/productos/sony-a6700body.jpg",
  //   categoria:{
  //     nombre: "Cámaras Sony",
  //     id: "sony"
  //   },
  //   precio: 1670
  // },
  {
    id: "sony-a6700kit",
    titulo: "Sony a6700",
    descripcion: "Kit 16-50mm",
    imagen: "../assets/productos/sony-a6700kit.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 1750
  },
  {
    id: "sony-fx3",
    titulo: "Sony FX3",
    descripcion: "Body",
    imagen: "../assets/productos/sony-fx3.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 4000
  },
  {
    id: "sony-zv1",
    titulo: "Sony ZV1",
    descripcion: "  ",
    imagen: "../assets/productos/sony-zv1.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 690
  },
  {
    id: "sony-zve10kit",
    titulo: "Sony ZVE 10",
    descripcion: "Kit 16-50mm",
    imagen: "../assets/productos/sony-zve10kit.jpg",
    categoria:{
      nombre: "Cámaras Sony",
      id: "sony"
    },
    precio: 930
  },



  // // ------> Ofertas <-------
  // {
  //   id: "oferta-04",
  //   titulo: "Canon Miroless",
  //   imagen: "../assets/ofertas/canon-oferta.jpg",
  //   categoria:{
  //     nombre: "Cámaras Canon",
  //     id: "ofertas"
  //   },
  //   precio: 1300
  // },
  // {
  //   id: "oferta-01",
  //   titulo: "Canon Miroless",
  //   imagen: "../assets/ofertas/mochila-oferta.jpg",
  //   categoria:{
  //     nombre: "Cámaras Canon",
  //     id: "ofertas"
  //   },
  //   precio: 1000
  // },
  // {
  //   id: "oferta-02",
  //   titulo: "iMac",
  //   imagen: "../assets/ofertas/imac-oferta.jpg",
  //   categoria:{
  //     nombre: "Computadoras",
  //     id: "ofertas"
  //   },
  //   precio: 1000
  // },
  // {
  //   id: "oferta-03",
  //   titulo: "iWatch",
  //   imagen: "../assets/ofertas/iwatch-oferta.jpg",
  //   categoria:{
  //     nombre: "Relojes",
  //     id: "ofertas"
  //   },
  //   precio: 1000
  // },
  // {
  //   id: "oferta-05",
  //   titulo: "Memoria 128gb",
  //   imagen: "../assets/ofertas/memoria-oferta.jpg",
  //   categoria:{
  //     nombre: "Memoria",
  //     id: "ofertas"
  //   },
  //   precio: 50
  // },





  // ------> Accesorios <-------
  // {
  //   id: "kit-luces-01",
  //   titulo: "Kit de Luces",
  //   imagen: "../assets/productos/light.jpg",
  //   categoria:{
  //     nombre: "Kit de Luces",
  //     id: ""
  //   },
  //   precio: 2500
  // },
];

const contenedorProducto = document.querySelector("#productos");
const botonesCategorias = document.querySelectorAll(".categoria-boton");
let agregarCarrito = document.querySelectorAll(".agregar_carrito");
const numero = document.querySelector("#cantidadEnCarrito");


// function mezclarArray(productos) {
//   for (let i = productos.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [productos[i], productos[j]] = [productos[j], productos[i]];
//   }
//   return productos;
// }



// Mostrar productos en pantalla

function pintarProductos (productosFiltrados){

  contenedorProducto.innerHTML = "";

  // // Mezclar el array antes de mostrarlo
  // const productosAleatorios = mezclarArray(productosFiltrados);

  productosFiltrados.forEach(producto => { // recorre el array productos
    
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img src="${producto.imagen}" class="imagen_producto" alt="${producto.titulo}">
      <div class="producto_body">
        <h3 class="titulo_producto">${producto.titulo}</h3>
        <p class="descripcion_producto">${producto.descripcion}</p>
        <p class="precio_producto"><span>Precio:</span> USD ${producto.precio}</p>
        <button class="agregar_carrito" id="${producto.id}"> Consultar </button>
      </div>
    `;

    contenedorProducto.append(div);

  });

  llamarBotones();
};

pintarProductos(productos);


// Mostrar los producos según la categoría elegida

botonesCategorias.forEach(boton => {

  boton.addEventListener("click", (e)=> {

    if(e.target.id != "todos"){

      const productosCategorias = productos.filter(producto => producto.categoria.id === e.target.id);
      
      // Pintar los productos filtrados en el orden original
      pintarProductos(productosCategorias);

    }else{

      pintarProductos(productos);

    };

  });

});




// Llamamos los botones "Agregar al carrito" una vez agregado

function llamarBotones(){
  
  agregarCarrito = document.querySelectorAll(".agregar_carrito");
  
  agregarCarrito.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito);
    
  });

};

llamarBotones();





// Agregar los productos al carrito


let productosEnCarrito;
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));

if (productosEnCarritoLS) {

  productosEnCarrito = productosEnCarritoLS;
  actualizarNumeroCarrito();

}else{

  productosEnCarrito = [];

};



function agregarAlCarrito (e){

  const idBoton = e.target.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.find(producto => producto.id === idBoton)){ // revisamos si hay conincidencia en el array productos en carrito

    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    productosEnCarrito[index].cantidad++;

  }else{
    productoAgregado.cantidad = 1;
    productosEnCarrito.push(productoAgregado);

  };
  
  actualizarNumeroCarrito();
  
  const carritoJson = JSON.stringify(productosEnCarrito);
  localStorage.setItem("productos-en-carrito",carritoJson);
  
};







// Actualización de las cantidades en el carrito

function actualizarNumeroCarrito (){
  let cantidadEnCarrito = productosEnCarrito.reduce ((acc,producto)=> acc + producto.cantidad,0);
  numero.innerText = cantidadEnCarrito;
};



