import { Expose } from "class-transformer";

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;

  @Expose()
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  constructor(id: number, firstName: string, lastName: string, email: string, password: string) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }

  isAdult(): boolean {
    return true; // Example logic
  }
}
