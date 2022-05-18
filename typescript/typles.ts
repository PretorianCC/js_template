// Кортежи
namespace typles {
  type Drink = [string, boolean, number];
  const cola: Drink = ['brown', true, 40];
  const sprite: Drink = ['clear', true, 40];
  const coffee: Drink = ['black', false, 0];
  cola[1] = false;
}
