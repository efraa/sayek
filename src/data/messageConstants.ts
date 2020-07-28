import { Paths } from '../routes/Paths'

export const Messages = {
  back: 'Regresar',
  login: {
    title: 'Regístrese o inicie sesión con su cuenta.',
    googleButton: 'Continuar con Google',
    facebookButton: 'Continuar con Facebook',
    disclaimer: {
      one: 'Al continuar, usted acepta los',
      two: 'Términos de servicios',
      three: 'Políticas de privacidad',
      four: 'de Sayek App.',
    },
  },
  logout: {
    title: '¿Salir de su cuenta?',
    disclaimer: 'Siempre puede volver a iniciar sesión en cualquier momento.',
    exit: 'Cerrar sesión',
  },
  walls: {
    title: 'Muros en los que participas',
    create: {
      title: '¿Quieres agregar un muro?',
      placeholder: 'Nombre del muro (obligatorio)',
      button: 'Crear',
    },
  },
  home: {
    hello: 'Hola,',
    help: '¿Qué podemos hacer por ti?',
    usernameHelp: 'Este nombre se elige al azar.',
    actions: [
      {
        id: 1,
        title: 'Muros en los que participas',
        to: Paths.walls.list,
      },
      {
        id: 2,
        title: 'Lo último que compartiste',
        to: Paths.posts.list,
      },
      {
        id: 3,
        title: 'Explora lo que otros comparten',
        to: Paths.explore,
      },
    ],
  },
}
