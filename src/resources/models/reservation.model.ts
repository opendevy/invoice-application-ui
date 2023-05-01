import {EmployeeModel} from "./employee.model";
import {ProjectModel} from "./project.model";

export class ReservationModel {
  status: string;
  project: ProjectModel;
  rate: string;
  employee: EmployeeModel;
  __v: number;
  _id: string;
  createdAt: string;
  updatedAt: string;

  constructor(init: any = {}) {
    const data = {
      status: '',
      project: '',
      rate: '',
      employee: '',
      createdAt: '',
      updatedAt: '',
      __v: '',
      _id: '',
      ...init,
    };

    this.status = data.status;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
    this.__v = data.__v;
    this._id = data._id;
    this.rate = data.rate;
    this.project = data.project;
    this.employee = data.employee;
  }
}
