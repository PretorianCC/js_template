namespace TypeGurd{

  interface User {
    name: string;
    email: string;
    login: string;
  }

  interface Admin {
    name: string;
    role: number;
  }

  // type guard
  function isAdmin(user: User | Admin): user is Admin {
    return 'role' in user;
    
  }

  // type guard
  function isAdminAlternative(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
  }

  function setRoleZero(user: User | Admin) {
    if (isAdmin(user)) {
      user.role = 0;
    } else {
      throw new Error('Пользователь не админ');
    }
  }
}