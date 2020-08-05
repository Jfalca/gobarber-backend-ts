import { uuid } from 'uuidv4';

class Appointmet {
  id: string;

  provider: string;

  date: Date;

  constructor({ provider, date }: Omit<Appointmet, 'id'>) {
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointmet;
