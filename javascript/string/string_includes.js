// Определяет, находится ли одна строка внутри другой, возвращая, соотвественно, true или false.

const str = 'Быть или не быть, вот в чём вопрос.';

console.log(str.includes('Быть'));            // true
console.log(str.includes('вопрос'));          // true
console.log(str.includes('несуществующий'));  // false
console.log(str.includes('Быть', 1));         // false
console.log(str.includes('БЫТЬ'));            // false