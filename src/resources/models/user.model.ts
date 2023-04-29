export class UserModel {
  name: string;
  password: string;
  email: string;

  constructor(init: any = {}) {
    const data = {
      name: '',
      password: '',
      email: '',
      ...init,
    };

    this.name = data.name;
    this.password = data.password;
    this.email = data.email;
  }
}
