const p_venta = [
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: ["4 Habitaciones", "4 Baños"] ,
    costo: 5000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: ["2 Habitaciones", "1 Baños"] ,
    costo: 1200,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: ["3 Habitaciones", "3 Baños"] ,
    costo: 4500,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Mansión de Lujo Emiratos Árabes',
    src: '../assets/img/house1.jpg',
    descripcion: 'Esta mansión se emplaza en la zona más explusiva del país',
    ubicacion: '9988 United Nations, Down Suburb',
    habitaciones: ["6 Habitaciones", "6 Baños"] ,
    costo: 15000,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Penthouse zona costera',
    src: '../assets/img/house2.jpg',
    descripcion: 'Esta pentouse cuenta con piscina y cancha de tenis',
    ubicacion: '9563 Lincoln Park, Downtown',
    habitaciones: ["6 Habitaciones", "6 Baños"] ,
    costo: 13000,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Casa barrio alto estandares de lujo',
    src: '../assets/img/house3.jpg',
    descripcion: 'Esta casa se ubica en el mejor sector del país',
    ubicacion: '2389 John Doe, TX 67543',
    habitaciones: ["3 Habitaciones", "2 Baños"] ,
    costo: 21000,
    smoke: true,
    pets: false
    }
    ]

const p_alquiler = [
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: ["2 Habitaciones", "2 Baños"] ,
    costo: 2000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: ["3 Habitaciones", "3 Baños"] ,
    costo: 2500,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: ["2 Habitaciones", "2 Baños"] ,
    costo: 2200,
    smoke: false,
    pets: false
    },
    {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: ["2 Habitaciones", "2 Baños"] ,
    costo: 2000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Apartamento de lujo en zona costera',
    src: '../assets/img/beach_flat.jpg',
    descripcion: 'Este apartamento cuenta con las mejores vistas de la ciudad',
    ubicacion: '1410 NE Miami, South Beach, MI 31312',
    habitaciones: ["5 Habitaciones", "5 Baños"] ,
    costo: 10000,
    smoke: true,
    pets: false
    },
    {
    nombre: 'Apartamento grande en el centro de la ciudad',
    src: '../assets/img/big_flat.jpg',
    descripcion: 'Este apartamento cuenta con 1000 mt cuadrado útiles',
    ubicacion: '1555 SW Benjamin Franklin St',
    habitaciones: ["4 Habitaciones", "3 Baños"] ,
    costo: 8000,
    smoke: true,
    pets: true
    },
    {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: '../assets/img/luxury_flat.jpg',
    descripcion: 'Este apartamento de lujo cuenta con las habitaciones temáticas más llamativas',
    ubicacion: '1120 SE President Kennedy Dr',
    habitaciones: ["4 Habitaciones", "4 Baños"] ,
    costo: 12000,
    smoke: true,
    pets: true
    }
    ]

const cartaV = document.getElementById("cartaV")
const cartaA = document.getElementById("cartaA")
const p_venta_tres = p_venta.slice(0,3)
const p_alquiler_tres = p_alquiler.slice(0,3)


for (const p_venta of p_venta_tres) {
    cartaV.innerHTML += `<div class="col-md-4 mb-4"> 
        <div class="card">
            <img src=${p_venta.src} class="card-img-top" alt=${p_venta.nombre}/>
            <div class="card-body">
                <h5 class="card-title">${p_venta.nombre}</h5>
                <p class="card-text">${p_venta.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${p_venta.ubicacion}</p>
                <p><i class="fas fa-bed"></i> 4 Habitaciones | <i class="fas fa-bath"></i> 4 Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${p_venta.costo}</p>
                <p class="${p_venta.smoke ? 'text-success' : 'text-danger'}">
                    <i class="fas ${p_venta.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> 
                    ${p_venta.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="${p_venta.pets ? 'text-success' : 'text-danger'}">
                    <i class="fas ${p_venta.pets ? 'fa-paw' : 'fa-ban'}"></i> 
                    ${p_venta.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </p>
            </div>
        </div>
    </div>`;
}


for (const p_alquiler of p_alquiler_tres) {
    cartaA.innerHTML += `<div class="col-md-4 mb-4"> 
        <div class="card">
            <img src=${p_alquiler.src} class="card-img-top" alt=${p_alquiler.nombre}/>
            <div class="card-body">
                <h5 class="card-title">${p_alquiler.nombre}</h5>
                <p class="card-text">${p_alquiler.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${p_alquiler.ubicacion}</p>
                <p><i class="fas fa-bed"></i> 4 Habitaciones | <i class="fas fa-bath"></i> 4 Baños</p>
                <p><i class="fas fa-dollar-sign"></i> ${p_alquiler.costo}</p>
                <p class="${p_alquiler.smoke ? 'text-success' : 'text-danger'}">
                    <i class="fas ${p_alquiler.smoke ? 'fa-smoking' : 'fa-smoking-ban'}"></i> 
                    ${p_alquiler.smoke ? 'Permitido fumar' : 'No se permite fumar'}
                </p>
                <p class="${p_alquiler.pets ? 'text-success' : 'text-danger'}">
                    <i class="fas ${p_alquiler.pets ? 'fa-paw' : 'fa-ban'}"></i> 
                    ${p_alquiler.pets ? 'Mascotas permitidas' : 'No se permiten mascotas'}
                </p>
            </div>
        </div>
    </div>`;
}