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

  me = async ({ id }: MeArgsI, context: ContextI): Promise<UserI> => {
    console.log(context.test);
    return await userCtrl.getUser(id);
  };

  users = async (): Promise<UserI[]> => {
    return userCtrl.getUsers();
  }

  rooms: UserResolverI<RoomI[]> = () => {
    return userCtrl.getRooms();
  }

}