namespace ExtendsGeneric {

  function len<T extends {length: number}>(collections: T): number {
    return collections.length;
  }

  const r1 = len('exsample');
  const r2 = len([1, 2, 3]);
  // const r3 = len(3); // syntax error


  
  class DataCollection<T extends {id: string}> {
    constructor(public data: T[]) {}
    search(id: string): T | null {
      return this.data.find(d => d.id === id) || null;
    }
  }

  type User = {
    id: string;
    name: string;
  }

  type Message = {
    id: string;
    text: string;
  }

  const user: User = {
    id: '1',
    name: 'exsample'
  }

  const users = new DataCollection([user])
  const searchableUser = users.search('1');

  const message: Message = {
    id: '2',
    text: 'Exsample'
  }

  const messages = new DataCollection([message]);
  const searchableMessage = messages.search('2');

}