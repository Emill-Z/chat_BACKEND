
interface RoomI {
  id: number;
  name: string;
  isBot: boolean;
  online: boolean;
  avatar: string;
  lastMessage: string;
}

const ROOMS: RoomI[] = [];

const DEFAULT_ROOMS: RoomI[] = [
  {
    id: 1,
    name: 'Echo Bot',
    isBot: false,
    online: true,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7PxrFc8r3fF9M21nLMOstwmXcTIBoA_tSQ&usqp=CAU',
    lastMessage: 'Lorem ibp ipsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
  },
  {
    id: 2,
    name: 'Reverse Bot',
    isBot: true,
    online: true,
    avatar: 'https://st4.depositphotos.com/20923550/26731/v/950/depositphotos_267317470-stock-illustration-arrow-back-reverse-rewind-blue.jpg',
    lastMessage: 'Lorem dcdcdcdcibp ipsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
  },
  {
    id: 3,
    name: '#spam',
    isBot: true,
    online: true,
    avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
    lastMessage: 'Lorem ibp idcdcdcpsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
  },
  {
    id: 4,
    name: 'Ignore bot',
    isBot: true,
    online: false,
    avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
    lastMessage: 'Lorem ibp idcdcdcpsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
  },
];

export const roomsDB  = [...ROOMS, ...DEFAULT_ROOMS];