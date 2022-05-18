/** Синглетон. Имеет только один и тот же объект. */

const Singleton = (function() {
  let instance;
  let server = 'localhost';
  function Singleton() {
      if (!instance) instance = this;
      else return instance;
  }
  Singleton.prototype.connect = function() {
      console.log(`Соединение ${server}`);
  };

  return Singleton;
}());

const var1 = new Singleton();
const var2 = new Singleton();
console.log(var1 === var2);
var1.connect();