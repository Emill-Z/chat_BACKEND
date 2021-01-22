import { RoutesBase } from '../common/services/RoutesBase';

class UserRoutes extends RoutesBase {

  constructor() {
    super();
  }

  init(): void {
    this.router
      .get('/user', (req, resp) => {
        resp
          .status(200)
          .send('/user');
      })

      .get('/user/:id', (req, resp) => {
        resp
          .status(200)
          .send({ id: req.params.id });
      });
  }

}

export default (new UserRoutes()).router;