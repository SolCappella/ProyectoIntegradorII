const store = {
    usuario: {
      id: 1,
      email: 'john.doe@gmail.com',
      usuario: 'John Doe', 
      contraseña: 'johndoe123',
      fechaNacimiento: '28/04/1999',
      documento: 41284385,
      fotoPerfil: ' ',
    },

    productos: [
      {
        id: 1,
        nombre: 'Cafetera Moulinex',
        descripcion: 'Cafetera para cápsulas monodosis.',
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