/**
 *  Немедленный вызов функции
 */

!function() { console.log(1) }();
+function() { console.log(2) }();
-function() { console.log(3) }();
(function() { console.log(4) })();
(() => console.log(5))();