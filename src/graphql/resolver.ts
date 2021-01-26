import { UserI } from '../common/interfaces/User';
import DB from '../db';

export class Resolvers {
  hello: () => string = () => 'HELLO';

  me: () => UserI = () => ({
    id: 1,
    name: 'Email',
    email: 'Email',
  });
  // me: (id: number) => UserI = (id: number) => {
  //   console.log('RESOL');
  //   console.log(id);
  //   return DB.users.find(u =>  u.id === id);
  // };

}