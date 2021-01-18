import { Request, Response } from 'express';

const rooms = [
  {
    id: 1,
    name: 'Echo Bot',
    isBot: false,
    active: true,
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW7PxrFc8r3fF9M21nLMOstwmXcTIBoA_tSQ&usqp=CAU',
    lastMessage: 'Lorem ibp ipsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
  },
  {
    id: 2,
    name: 'Reverse Bot',
    isBot: true,
    active: true,
    avatar: 'https://st4.depositphotos.com/20923550/26731/v/950/depositphotos_267317470-stock-illustration-arrow-back-reverse-rewind-blue.jpg',
    lastMessage: 'Lorem dcdcdcdcibp ipsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
  },
  {
    id: 3,
    name: '#spam',
    isBot: true,
    active: true,
    avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
    lastMessage: 'Lorem ibp idcdcdcpsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
  },
  {
    id: 4,
    name: 'Ignore bot',
    isBot: true,
    active: false,
    avatar: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg',
    lastMessage: 'Lorem ibp idcdcdcpsum ibo ammet i tak dalee i tomu podobnoe i na to oxhen pohozhe!',
  },
];

interface MeI {
  id: number;
  name: string;
  rooms: number[];
  avatar: string;
}

const me: MeI = {
  id: 1,
  name: 'Mock',
  rooms: [],
  avatar: null,
};

export default class UserController {

  public async test(req: Request, res: Response): Promise<void> {
    try {
      const _rooms = rooms.map((r) => ({
        id: r.id,
        name: r.name,
        active: r.active,
        avatar: r.avatar,
        lastMessage: r.lastMessage,
      }));

      const resp = {
        id: me.id,
        name: me.name,
        rooms: _rooms,
        avatar: me.avatar,
      };

      res
        .status(200)
        .send(resp);

    } catch(e) {
      res.status(400).send({ message: e });
    }
  }

}