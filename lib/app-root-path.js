/**
 * Этот простой модуль помогает получить доступ к корневому пути приложения из любой точки приложения,
 * не прибегая к относительным путям, подобным требуемым («../../path»).
 */
const { path } = require('app-root-path');
console.log(path);