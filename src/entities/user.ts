type ID = string;
type UserName = string;

export class User {
  isAuth: boolean = false;
  id: ID = '';
  userName: UserName = '';

  constructor() {}

  setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  setId(id: ID) {
    this.id = id;
  }

  setUserName(userName: UserName) {
    this.userName = userName;
  }

  authenticate(id: ID) {
    this.setIsAuth(true);
    this.setId(id);
    this.setUserName('Пользователь');
  }

  getAuthenticateUser(id: ID) {
    const user = new User();
    user.authenticate(id);
    return user;
  }
}
