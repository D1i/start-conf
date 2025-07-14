import { UserDataType } from '@/services/user/types';

export class UserPresenter {
  private readonly userData: UserDataType;
  checkAuth: () => boolean;
  authenticate: () => void;
  logout: () => void;

  constructor(
    private readonly user: UserDataType,
    CheckAuth: () => boolean = () => false,
    Authenticate: () => void = () => {},
    Logout: () => void = () => {}
  ) {
    this.userData = user;
    this.checkAuth = CheckAuth;
    this.authenticate = Authenticate;
    this.logout = Logout;
  }

  get(): UserDataType {
    return this.userData;
  }

  checkUserAuth(): boolean {
    return this.checkAuth();
  }

  authenticateUser() {
    this.authenticate();
  }

  logoutUser() {
    this.logout();
  }
}
