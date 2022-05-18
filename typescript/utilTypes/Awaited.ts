// Этот тип предназначен для моделирования таких операций, как ожидание в асинхронных функциях или метод .then () в Promises, в частности, как они рекурсивно развертывают Promises.

namespace Awaited {

  type A = Awaited<Promise<string>>
  /* type A = string */
  type A2 = Awaited<Promise<string>>
  /* type A2 = string */

  interface IMenu  {
    name: string;
    url: string
  }

  async function getMenu(): Promise<IMenu[]> {
    return [{name: 'Аналитика', url: 'analytics'}];
  }

  type R = Awaited<ReturnType<typeof getMenu>>;
  /* type R = IMenu[] */

  async function getArray<T>(x: T): Promise<Awaited<T>[]> {
    return [await x];
  }
}