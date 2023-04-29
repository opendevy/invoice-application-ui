export class UserModel {
  name: string;
  password: string;
  email: string;
  permission: string;

  constructor(init: any = {}) {
    const data = {
      name: '',
      password: '',
      email: '',
      permission: '',
      ...init,
    };

    this.name = data.name;
    this.password = data.password;
    this.email = data.email;
    this.permission = data.permission;
  }
}
