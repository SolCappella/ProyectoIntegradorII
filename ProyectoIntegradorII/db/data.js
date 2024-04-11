const store = {
    usuario: {
      id: 1,
      nombre: 'John Doe',
      email: 'john.doe@gmail.com',
      imagenPerfil: ' ',
    },
    productos: [
      {
        id: 1,
        nombre: 'Cafetera Moulinex',
        descripcion: 'Cafetera para cápsulas monodosis.',
        precio: 100,
        imagen: 'public/images/products/img-cafetera-moulinex.jpg',
        comentarios: [
          {
            id: 1,
            nombreUsuario: 'Sofia Lopez',
            texto: 'Excelente producto!',
            imagenPerfil: ' ',
          },
          {
            id: 2,
            nombreUsuario: 'José Perez',
            texto: 'Muy Bueno!',
            imagenPerfil: ' ',
          },
        ],
      },
      {
        id: 2,
        nombre: 'Macbook Pro 2019',
        descripcion: 'Pantalla de 15.4 pulgadas (diagonal) retroiluminada por LED con tecnología IPS.',
        precio: 150,
        imagen: 'public/images/products/img-macbook-pro-2019.jpg',
        comentarios: [
          {
            id: 1,
            nombreUsuario: 'Rocio Garcia',
            texto: 'Supero mis expectativas!',
            imagenPerfil: ' ',
          },
        ],
      },
      
    ],
  };
  