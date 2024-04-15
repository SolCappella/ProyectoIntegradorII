const store = {
  usuario: {
    id: 1,
    email: 'john.doe@gmail.com',
    usuario: 'John Doe', 
    contraseña: 'johndoe123',
    fechaNacimiento: '28/04/1999',
    documento: 41284385,
    fotoPerfil: 'public/images/products/defaultprofile.jpg ',
  },

  productos: [
    {
      id: 1,
      nombre: 'Cafetera Moulinex',
      descripcion: 'Cafetera para cápsulas monodosis.',
      imagen: ' public/images/products/img-cafetera-moulinex.jpg',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Sofia Lopez',
          texto: 'Excelente producto!',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 2,
          nombreUsuario: 'José Perez',
          texto: 'Muy Bueno!',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Lorenzo Montana',
          texto: 'Muy buena compra!',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 2,
      nombre: 'Minipimer Mixer Licuadora de Mano Spica',
      descripcion: 'Cuenta con dos velocidades. Cuchillas de acero inoxidable. Incluye accesorios',
      imagen: ' public/images/products/minipimermixer.png ',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Rocio Garcia',
          texto: 'Supero mis expectativas!',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 2,
          nombreUsuario: 'Pedro Saltamonte',
          texto: 'Un producto muy practico',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        }
        {
          id: 3,
          nombreUsuario: 'Silvestre Cortez',
          texto: 'Me sorprendio, no vino con ninguna falla',
          imagenPerfil: 'public/images/products/defaultprofile.jpg ',
        }
      ],
    },
   
    {
      id: 3,
      nombre: 'Aspiradora Robot',
      descripcion: 'Limpia automáticamente tu casa. Programable y fácil de usar.',
      imagen: ' public/images/products/aspiradorainalambrica.png ',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Carla Martinez',
          texto: '¡La mejor compra que he hecho en mucho tiempo!',
          imagenPerfil: 'public/images/products/defaultprofile.jpg ',
        },
        {
          id: 2,
          nombreUsuario: 'Marcos Ramirez',
          texto: 'Funciona de maravilla, ¡la recomiendo!',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Ana Gonzalez',
          texto: 'Me ha ahorrado mucho tiempo de limpieza. Estoy encantada.',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 4,
      nombre: 'Freidora sin aceite',
      descripcion: 'Disfruta de alimentos crujientes sin utilizar aceite. Saludable y fácil de limpiar.',
      imagen: 'public/images/products/freidora.png ',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Pedro Fernandez',
          texto: '¡Increíble! No puedo creer lo saludables que quedan las papas fritas.',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 2,
          nombreUsuario: 'Elena Ruiz',
          texto: 'Una excelente alternativa para comer sano sin renunciar al sabor.',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Luisa Jimenez',
          texto: 'Ya no puedo vivir sin ella. ¡Una compra 10/10!',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 5,
      nombre: 'Licuadora de alta velocidad',
      descripcion: 'Prepara jugos y batidos sin esfuerzo. Potente y duradera.',
      imagen: ' public/images/products/licuadora.png',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Ana Maria Rodriguez',
          texto: 'Me encanta la rapidez con la que prepara los batidos. Excelente compra.',
          imagenPerfil: 'public/images/products/default-image.png ',
        },
        {
          id: 2,
          nombreUsuario: 'David Sánchez',
          texto: 'Increíble potencia. La mejor licuadora que he tenido.',
          imagenPerfil: 'public/images/products/defaultprofile.jpg ',
        },
        {
          id: 3,
          nombreUsuario: 'Natalia Diaz',
          texto: 'Muy fácil de limpiar. La recomiendo a todos mis amigos.',
          imagenPerfil: 'public/images/products/defaultprofile.jpg ',
        },
      ],
    },
    {
      id: 6,
      nombre: 'Plancha de vapor',
      descripcion: 'Elimina las arrugas de tus prendas con rapidez y eficacia. Vapor continuo y golpe de vapor.',
      imagen: ' public/images/products/vaporizadorplancha.png',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Manuel González',
          texto: 'Hace que planchar sea mucho más fácil y rápido. ¡Muy contento!',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 2,
          nombreUsuario: 'Isabel Ruiz',
          texto: 'La mejor plancha que he tenido. Deja la ropa impecable en minutos.',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Daniel García',
          texto: 'Me sorprende lo potente que es. Logra eliminar hasta las arrugas más difíciles.',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 7,
      nombre: 'Exprimidor eléctrico',
      descripcion: 'Prepara jugos frescos de forma rápida y sencilla. Fácil de desmontar y limpiar.',
      imagen: 'public/images/products/jugueraelectrica.png ',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Laura Pérez',
          texto: 'Lo uso todas las mañanas. ¡El mejor exprimidor que he tenido!',
          imagenPerfil: 'public/images/products/defaultprofile.jpg ',
        },
        {
          id: 2,
          nombreUsuario: 'Carlos Martínez',
          texto: 'Muy práctico y eficiente. Exprime hasta la última gota.',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'María Fernández',
          texto: 'Fácil de limpiar y ocupa poco espacio en la cocina. ¡Me encanta!',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 8,
      nombre: 'Batidora de mano',
      descripcion: 'Potente batidora de mano con múltiples velocidades. Ideal para preparar salsas, purés y más.',
      imagen: 'public/images/products/batidorademano.png',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'María García',
          texto: 'La uso a diario. ¡Una maravilla!',
          imagenPerfil: 'public/images/products/defaultprofile.jpg ',
        },
        {
          id: 2,
          nombreUsuario: 'Carlos Martínez',
          texto: 'Muy versátil y fácil de limpiar. La recomiendo.',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Laura Pérez',
          texto: 'Increíble potencia. Me facilita mucho en la cocina.',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 9,
      nombre: 'Pava eléctrica',
      descripcion: 'Hierve agua rápidamente con esta pava eléctrica. Diseño moderno y resistente.',
      imagen: ' public/images/products/pavaelectrica.png',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Elena Fernández',
          texto: 'La utilizo todos los días. Calienta el agua en segundos.',
          imagenPerfil: 'public/images/products/defaultprofile.jpg ',
        },
        {
          id: 2,
          nombreUsuario: 'Javier Ruiz',
          texto: 'Muy práctica y segura. Perfecta para preparar té o café.',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Ana Martínez',
          texto: 'El mejor complemento para mi cocina. ¡No puedo vivir sin ella!',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
      ],
    },
    {
      id: 10,
      nombre: 'Picadora de alimentos',
      descripcion: 'Pica y tritura alimentos fácilmente. Cuchillas de acero inoxidable y diseño ergonómico.',
      imagen: ' public/images/products/picadoradealimentos.png',
      comentarios: [
        {
          id: 1,
          nombreUsuario: 'Pedro López',
          texto: 'Me ha ahorrado mucho tiempo en la cocina. ¡Una maravilla!',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 2,
          nombreUsuario: 'Lucía González',
          texto: 'Muy útil para preparar comidas rápidas. La recomiendo totalmente.',
          imagenPerfil: ' public/images/products/defaultprofile.jpg',
        },
        {
          id: 3,
          nombreUsuario: 'Roberto Pérez',
          texto: 'Excelente calidad y fácil de usar. No puedo estar más satisfecho.',
          imagenPerfil: 'public/images/products/defaultprofile.jpg ',
        },
      ],
    },
  ],
};