interface User {
  id: number;
  login: String;
  password: String;
}

export const users: User[] = [
  {
    "id": 1,
    "login": "user1",
    "password": "password1"
  },
  {
    "id": 2,
    "login": "user2",
    "password": "password2"
  },
  {
    "id": 3,
    "login": "user3",
    "password": "password3"
  }
];