export interface User {
  id: string;
  email: string;
  lastName: string;
  name: string;
  passwordConfirmed: boolean;
  roleId: number;
  secondLastName: string;
  image: string;
}

export interface NewUser {
  email: string;
  lastName: string;
  name: string;
  roleId: number;
  secondLastName: string;
  password: string;
}
