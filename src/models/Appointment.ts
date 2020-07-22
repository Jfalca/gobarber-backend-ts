import { uuid } from "uuidv4";
class Appointmet {
  id: string;

  provider: string;

  date: Date;

  constructor(provider: string, date: Date){
    this.id = uuid();
    this.provider = provider;
    this.date = date;
  }
}

export default Appointmet;
