import {ClientModel} from "./client.model";
import {UserModel} from "./user.model";

export class ProjectModel {
  name: string;
  client: ClientModel;
  employees: UserModel[];
  budget: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;

  constructor(init: any = {}) {
    const data = {
      name: '',
      client: '',
      employees: '',
      budget: '',
      createdAt: '',
      updatedAt: '',
      __v: '',
      _id: '',
      ...init,
    };

    this.name = data.name;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.__v = data.__v;
    this._id = data._id;
    this.client = data.client;
    this.employees = data.employees;
    this.budget = data.budget;
  }
}
