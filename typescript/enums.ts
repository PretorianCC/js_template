// Числовые
enum DirectionNumber {
  Up = 1,
  Down,
  Left,
  Right
}

// Строковые
enum DirectionString {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'Right'
}

// Числовые и строковые
enum Decision {
  Yes = 1,
  No = 'NO'
}

// Расчетные (только числовые)
function calcEnum() {
  return 2
}
enum DecisionCalc {
  Yes = 1,
  No = calcEnum()
}

// Текстовое значение
enum TestText {
  A
}
const testNum = TestText.A
const nameA = TestText[testNum]

// Константные перечисления
const enum ConstEnum {
  A,
  B
}

// Пример
enum Dice {
  One = 1,
  Two,
  Tree
}

function runDice(dice: Dice) {
  switch(dice) {
    case Dice.One: return 'Один'
    case Dice.Two: return 'Два'
    case Dice.Tree: return 'Три'
    default:
      const a: never = dice // отслеживает ошибку если в enum добавили значение, а в switch не добавили ветку
  }
}