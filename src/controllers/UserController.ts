import { ICreateUserInput, IUserInput, UserI } from '../common/interfaces/User';
import { getRepository } from 'typeorm';
import { User } from '../DB/entities/User.entity';
import { createToken } from '../common/utils/auth';

interface RoomsI {
  id: number|string;
  name: string;
}

class UserController {

  /**
  * Create new user
  * @param req contains { name, email, password }
  */
  public async signUp(req: ICreateUserInput): Promise<UserI> {
    const { name, email, password } = req.input;

    const userRepository = getRepository(User);

    const user: UserI = await userRepository.findOne({ where: [{ email }] });

    if (user) {
      // TODO: generate gql erro "User already exist"
      return null;
    }

    const newUser: UserI = await userRepository.create({ name, email, password });

    if (!newUser) {
      // TODO: generate gql erro 500
      return null;
    }

    const savedUser = await userRepository.save(newUser);

    if (!savedUser) { return null; }

    const token = await createToken({ id: newUser.id, email: newUser.email });
    savedUser.token = token;
    return savedUser;
  }

  /**
  * Login
  */
  public signIn(newUser: IUserInput): UserI {
    return null;
  }

  /**
  * Get user by id
  * @param id user id
  */
  public async getUser(id: number): Promise<UserI> {
    const userRepository = getRepository(User);

    const user: UserI = await userRepository.findOne({ where: [{ id }] });

    if (!user) {
      // TODO: generate gql erro 404
      console.log(404);
      return null;
    }

    user.rooms = [];

    return user;
  }

  /**
   * Get all users
   */
  public async getUsers(): Promise<UserI[]> {
    const userRepository = getRepository(User);

    const users: UserI[] = await userRepository.find();

    if (!users) {
      // TODO: generate gql erro 404
      console.log(404);
      return null;
    }

    return users;
  }

  public getRooms(): RoomsI[] {
    // return [...usersDB, ...roomsDB];
    return [];
  }

}

export const userCtrl =  new UserController();