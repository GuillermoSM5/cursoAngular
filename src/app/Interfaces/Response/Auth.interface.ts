export interface loginResponse {
  user: User;
  token: string;
}

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
