import { ICreateUserInput, IUserInput, UserI } from '../common/interfaces/User';
import { usersDB } from '../DB/users';
import { roomsDB } from '../DB/rooms';

interface RoomsI {
  id: number|string;
  name: string;
}

class UserController {

  public signUp(req: ICreateUserInput): UserI {
    const { name, email } = req.input;

    const id = Math.floor(Math.random() * Math.floor(10));

    const newUser = { id, name, email, token: 'HBhjdbcsj4kbdcs53jbcjchcb31jh3veg' };

    usersDB.push(newUser);

    console.log('newUser: ', newUser);

    return usersDB.find((u) => u.id === id);
  }

  public signIn(newUser: IUserInput): UserI {
    const fakeDatabase: UserI[] = usersDB;
    const { id } = newUser.input;
    return fakeDatabase.find((u) => u.id === id);
  }

  public getUser(id: number): UserI {
    const user: UserI = usersDB.find((u) => u.id == id);

    if (!user) {
      return null;
    }

    // const _rooms = roomsDB.map((r) => ({
    //   id: r.id,
    //   name: r.name,
    //   active: r.online,
    //   avatar: r.avatar,
    //   isBot: r.isBot,
    //   lastMessage: r.lastMessage,
    // }));

    user.rooms = [];

    return user;
  }

  public getUsers(): UserI[] {
    return usersDB;
  }

  public getRooms(): RoomsI[] {
    return [...usersDB, ...roomsDB];
  }

}

export const userCtrl =  new UserController();