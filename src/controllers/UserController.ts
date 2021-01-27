import { ICreateUserInput, IUserInput, UserI } from '../common/interfaces/User';
import DB from '../db';

class UserController {

  public signUp(req: ICreateUserInput): UserI {
    const { name, email } = req.input;

    // const id = Math.floor(Math.random() * Math.floor(10));
    const id = 1;

    const newUser = { id, name, email };

    DB.users.push(newUser);

    console.log('newUser: ', newUser);

    return DB.users.find((u) => u.id === id);
  }

  public signIn(newUser: IUserInput): UserI {
    const fakeDatabase: UserI[] = DB.users;
    const { id } = newUser.input;
    return fakeDatabase.find((u) => u.id === id);
  }

  public getUser(id: number): UserI {
    const user: UserI = DB.users.find((u) => u.id == id);

    if (!user) {
      return null;
    }

    const _rooms = DB.rooms.map((r) => ({
      id: r.id,
      name: r.name,
      active: r.active,
      avatar: r.avatar,
      isBot: r.isBot,
      lastMessage: r.lastMessage,
    }));

    user.rooms = _rooms;

    return user;
  }

}

export const userCtrl =  new UserController();