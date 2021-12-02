import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable{
  //Wanna tell TS that an instance of class User that we create 
  //satisfies the Mappable interface 
  //Help us make sure User is implemented correctly
  //TS does additional checking

  name: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor(){
    this.name = faker.name.firstName();

    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string{
    return `
      <h1>Name: ${this.name}</h1>
    `;
  }
}