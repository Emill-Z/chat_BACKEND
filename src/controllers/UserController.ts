import { Request, Response } from 'express';
import { ICreateUserInput, UserI } from '../common/interfaces/User';
import DB from '../db';

class UserController {

  public signUp(newUser: ICreateUserInput): UserI {
    const fakeDatabase: UserI[] = DB.users;

    const { id, name, email } = newUser.input;

    fakeDatabase.push({ id, name, email });

    return fakeDatabase.find((u) => u.id === id);
  }

  public signIn(newUser: ICreateUserInput): UserI {
    const fakeDatabase: UserI[] = DB.users;
    const { id } = newUser.input;
    return fakeDatabase.find((u) => u.id === id);
  }

  public async test(req: Request, res: Response): Promise<void> {
    try {
      const me: UserI = {
        id: 1,
        name: 'Mock',
        email: 'emailname@gmail.com',
        rooms: [],
        avatar: null,
      };

      const _rooms = DB.rooms.map((r) => ({
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

export const userCtrl =  new UserController();