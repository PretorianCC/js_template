namespace Optional {
  
  interface User {
    login: string;
    password?: string;
  }

  const user: User = {
    login: 'asd'
  }

  function multiply(first: number, second?: number): number {
    if (!second) {
      return first * first;
    }
    return first * second;
  }

  interface UserPro {
    login: string;
    password?: {
      type: 'primary' | 'secondary'
    } 
  }

  function testPass(user: UserPro) {
    const a = user.password?.type; // если нет свойства, то undefine (user.password ? user.password.type : undefined)
    const b = user.password!.type; // пароль точно не будет undefine
  }

  function test(param?: string) {
    const t = param ?? multiply(5); // если param 0 или undefine
  }
}