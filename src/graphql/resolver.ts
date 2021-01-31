import { UserI } from '../common/interfaces/User';
import { userCtrl } from '../controllers/UserController';

interface ContextI {
  test: string;
}

interface MeArgsI {
  id: number;
}

interface RoomI {
  id: string|number;
  name: string;
}

interface UserResolverI<T> {
  (attrs: MeArgsI, c: ContextI): T;
}

export class Resolvers {

  me: UserResolverI<UserI> = ({ id }, context) => {
    console.log(context.test);
    return userCtrl.getUser(id);
  };

  users: UserResolverI<UserI[]> = () => {
    return userCtrl.getUsers();
  }

  rooms: UserResolverI<RoomI[]> = () => {
    return userCtrl.getRooms();
  }

}