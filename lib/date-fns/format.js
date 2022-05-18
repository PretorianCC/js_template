/**
 * date-fns предоставляет наиболее полный, но простой и согласованный набор инструментов
 * для управления датами JavaScript в браузере & Node.js.
*/
const { format } = require('date-fns');

const dateFolder = format(new Date(), 'yyyy-MM-dd');
console.log(dateFolder);