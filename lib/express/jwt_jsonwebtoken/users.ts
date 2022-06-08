export interface User {
  id: number;
  login: String;
  password: String;
}

const user1: User = {
  "id": 1,
  "login": "user1",
  "password": "password1"
};

const user2: User = {
  "id": 2,
  "login": "user2",
  "password": "password2"
};

const user3: User = {
  "id": 3,
  "login": "user3",
  "password": "password3"
};

export const users: User[] = [user1, user2, user3];
