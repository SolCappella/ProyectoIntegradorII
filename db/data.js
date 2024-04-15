const store = {
  usuario: {
    id: 1,
    email: 'john.doe@gmail.com',
    usuario: 'John Doe',
    contraseña: 'johndoe123',
    fechaNacimiento: '28/04/1999',
    documento: 41284385,
    fotoPerfil: './images/products/defaultprofile.jpg ',
  },

  productos: [
    {
      id: 1,
      nombre: 'Cafetera Moulinex',
      descripcion: 'La cafetera Moulinex es un dispositivo diseñado para preparar café de forma fácil y rápida. Ofrece características como capacidad de preparación de varias tazas de café, diseño compacto y elegante, opciones de preparación ajustables y facilidad de uso.',
      imagen: './images/products/img-cafetera-moulinex.jpg',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Sofia Lopez',
          texto: 'Excelente producto!',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 2,
          nombreUsuario: 'José Perez',
          texto: 'Muy Bueno!',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Lorenzo Montana',
          texto: 'Muy buena compra!',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 2,
      nombre: 'Minipimer Mixer Licuadora de Mano Spica',
      descripcion: 'Cuenta con dos velocidades. Cuchillas de acero inoxidable. Incluye accesorios',
      imagen: ' ./images/products/minipimermixer.png ',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Rocio Garcia',
          texto: 'Supero mis expectativas!',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 2,
          nombreUsuario: 'Pedro Saltamonte',
          texto: 'Un producto muy practico',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Silvestre Cortez',
          texto: 'Me sorprendio, no vino con ninguna falla',
          imagenPerfil: './images/products/defaultprofile.jpg ',
        }
      ],
    },

    {
      id: 3,
      nombre: 'Aspiradora Robot',
      descripcion: 'Limpia automáticamente tu casa. Programable y fácil de usar.',
      imagen: ' ./images/products/aspiradorainalambrica.png ',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Carla Martinez',
          texto: '¡La mejor compra que he hecho en mucho tiempo!',
          imagenPerfil: './images/products/defaultprofile.jpg ',
        },
        {
          id: 2,
          nombreUsuario: 'Marcos Ramirez',
          texto: 'Funciona de maravilla, ¡la recomiendo!',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Ana Gonzalez',
          texto: 'Me ha ahorrado mucho tiempo de limpieza. Estoy encantada.',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 4,
      nombre: 'Freidora sin aceite',
      descripcion: 'Disfruta de alimentos crujientes sin utilizar aceite. Saludable y fácil de limpiar.',
      imagen: './images/products/freidora.png ',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Pedro Fernandez',
          texto: '¡Increíble! No puedo creer lo saludables que quedan las papas fritas.',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 2,
          nombreUsuario: 'Elena Ruiz',
          texto: 'Una excelente alternativa para comer sano sin renunciar al sabor.',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Luisa Jimenez',
          texto: 'Ya no puedo vivir sin ella. ¡Una compra 10/10!',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 5,
      nombre: 'Licuadora de alta velocidad',
      descripcion: 'Prepara jugos y batidos sin esfuerzo. Potente y duradera.',
      imagen: ' ./images/products/licuadora.png',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Ana Maria Rodriguez',
          texto: 'Me encanta la rapidez con la que prepara los batidos. Excelente compra.',
          imagenPerfil: './images/products/default-image.png ',
        },
        {
          id: 2,
          nombreUsuario: 'David Sánchez',
          texto: 'Increíble potencia. La mejor licuadora que he tenido.',
          imagenPerfil: './images/products/defaultprofile.jpg ',
        },
        {
          id: 3,
          nombreUsuario: 'Natalia Diaz',
          texto: 'Muy fácil de limpiar. La recomiendo a todos mis amigos.',
          imagenPerfil: './images/products/defaultprofile.jpg ',
        },
      ],
    },
    {
      id: 6,
      nombre: 'Plancha de vapor',
      descripcion: 'Elimina las arrugas de tus prendas con rapidez y eficacia. Vapor continuo y golpe de vapor.',
      imagen: ' ./images/products/vaporizadorplancha.png',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Manuel González',
          texto: 'Hace que planchar sea mucho más fácil y rápido. ¡Muy contento!',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 2,
          nombreUsuario: 'Isabel Ruiz',
          texto: 'La mejor plancha que he tenido. Deja la ropa impecable en minutos.',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Daniel García',
          texto: 'Me sorprende lo potente que es. Logra eliminar hasta las arrugas más difíciles.',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 7,
      nombre: 'Exprimidor eléctrico',
      descripcion: 'Prepara jugos frescos de forma rápida y sencilla. Fácil de desmontar y limpiar.',
      imagen: './images/products/jugueraelectrica.png ',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Laura Pérez',
          texto: 'Lo uso todas las mañanas. ¡El mejor exprimidor que he tenido!',
          imagenPerfil: './images/products/defaultprofile.jpg ',
        },
        {
          id: 2,
          nombreUsuario: 'Carlos Martínez',
          texto: 'Muy práctico y eficiente. Exprime hasta la última gota.',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'María Fernández',
          texto: 'Fácil de limpiar y ocupa poco espacio en la cocina. ¡Me encanta!',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 8,
      nombre: 'Batidora de mano',
      descripcion: 'Potente batidora de mano con múltiples velocidades. Ideal para preparar salsas, purés y más.',
      imagen: './images/products/batidorademano.png',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'María García',
          texto: 'La uso a diario. ¡Una maravilla!',
          imagenPerfil: './images/products/defaultprofile.jpg ',
        },
        {
          id: 2,
          nombreUsuario: 'Carlos Martínez',
          texto: 'Muy versátil y fácil de limpiar. La recomiendo.',
          imagenPerfil: './images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Laura Pérez',
          texto: 'Increíble potencia. Me facilita mucho en la cocina.',
          imagenPerfil: './images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 9,
      nombre: 'Pava eléctrica',
      descripcion: 'Hierve agua rápidamente con esta pava eléctrica. Diseño moderno y resistente.',
      imagen: ' ./images/products/pavaelectrica.png',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Elena Fernández',
          texto: 'La utilizo todos los días. Calienta el agua en segundos.',
          imagenPerfil: './images/products/defaultprofile.jpg ',
        },
        {
          id: 2,
          nombreUsuario: 'Javier Ruiz',
          texto: 'Muy práctica y segura. Perfecta para preparar té o café.',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Ana Martínez',
          texto: 'El mejor complemento para mi cocina. ¡No puedo vivir sin ella!',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 10,
      nombre: 'Picadora de alimentos',
      descripcion: 'Pica y tritura alimentos fácilmente. Cuchillas de acero inoxidable y diseño ergonómico.',
      imagen: ' ./images/products/picadoradealimentos.png',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Pedro López',
          texto: 'Me ha ahorrado mucho tiempo en la cocina. ¡Una maravilla!',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 2,
          nombreUsuario: 'Lucía González',
          texto: 'Muy útil para preparar comidas rápidas. La recomiendo totalmente.',
          imagenPerfil: ' ./images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Roberto Pérez',
          texto: 'Excelente calidad y fácil de usar. No puedo estar más satisfecho.',
          imagenPerfil: './images/products/defaultprofile.jpg ',
        },
      ],
    },
  ],
};

module.exports = store;