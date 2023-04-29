export class ClientModel {
  name: string;

  constructor(init: any = {}) {
    const data = {
      name: '',
      ...init,
    };

    this.name = data.name;
  }
}
