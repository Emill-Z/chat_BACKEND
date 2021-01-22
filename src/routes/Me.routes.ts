import { RoutesBase } from '../common/models/RoutesBase';
import { UserCtrl } from '../controllers';

class MeRoutes extends RoutesBase {

  constructor() {
    super();
  }

  init(): void {
    const userCtrl = new UserCtrl();

    this.router.get('/me', userCtrl.test);
  }

}

export default (new MeRoutes()).router;