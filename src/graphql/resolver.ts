import { UserI } from '../common/interfaces/User';
import { userCtrl } from '../controllers/UserController';

interface ContextI {
  test: string;
}

interface MeArgsI {
  id: number;
}

export class Resolvers {

  me: (a: MeArgsI, c: ContextI) => UserI = ({ id }, context) => {
    console.log(context.test);
    return userCtrl.getUser(id);
  };

}