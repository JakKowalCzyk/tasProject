export class User {
  role: {
    'ROLE_USER'
    'ROLE_ADMIN'
  };

  id: number;
  email: string;
  name: string;
  city: string;
  roleType: string;
  hashPassword: string;
  base64Auth: string;


  constructor(id: number, email: string, name: string, city: string, roleType: string, hashPassword: string) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.city = city;
    this.roleType = roleType;
    this.hashPassword = hashPassword;
  }
}
