module.exports = {
  clearMocks: true, // очищать моки при каждом запуске тестов (данные для тестирования)
  collectCoverageFrom: ['__tests__/**/*.js'], // откуда собирать информацию для отчета покрытия тестами
  coverageDirectory: 'coverage', // где будет храниться отчет о покрытии тестов
  moduleFileExtensions: ['js'], // расширения файлов которые jest будет тестировать
  testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+spec|test).js?(x)'], // где могут находится наши тесты
  testPathIgnorePatterns: ['\\\\node_modules\\\\'], // где тесты не нужно искать
  // verbose: true // хотим видеть подробный отчет о тестах
}