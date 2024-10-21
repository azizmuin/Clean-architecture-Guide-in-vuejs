import type { Router } from "vue-router";
import { AuthenticationError, ErrorFold, ServerError, UnexpectedError } from "./domain/DataError";

export class ploc<T> {
  public store: T;
  public router: Router;

  constructor({ store, router }: { store: T, router: Router  }) {
    this.store = store;
    this.router = router;
  }

  handleErrors(error: Error): string {
    let err = '';
    switch (error.constructor) {
      case UnexpectedError:
        err = error.message;
        break;
      case ServerError:
        err = error.message;
        break;
      case ErrorFold:
        const errorData = (error as ErrorFold).errorData;
        err = errorData[0].message;
        break;
      case AuthenticationError:
        this.router.push({name: 'AuthLogin'});
        break;
      default:
        err = 'An Error Occurred';
        break;
    }
    return err;
  }
}
