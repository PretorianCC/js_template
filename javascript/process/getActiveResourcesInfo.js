// Возвращает массив строк, содержащие активные ресурсы, которые в данный момент поддерживают цикл событий.
import { getActiveResourcesInfo } from 'process';
import { setTimeout } from 'timers';

console.log('Before:', getActiveResourcesInfo());
setTimeout(() => {}, 1000);
console.log('After:', getActiveResourcesInfo());