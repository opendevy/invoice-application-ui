export class UserModel {
  name: string;
  password: string;
  email: string;
  permission: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;

  constructor(init: any = {}) {
    const data = {
      name: '',
      password: '',
      email: '',
      permission: '',
      createdAt: '',
      updatedAt: '',
      __v: '',
      _id: '',
      ...init,
    };

    this.name = data.name;
    this.password = data.password;
    this.email = data.email;
    this.permission = data.permission;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.__v = data.__v;
    this._id = data._id;
  }
}
