module.exports = {
  moduleFileExtensions: ['vue', 'js'],
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest', // vue 文件用 vue-jest 转换
    // '^.+\\.ts$': 'ts-jest' // ts 文件用 ts-jest 转换
    '^.+\\js$': 'babel-jest'
  },
  // 匹配 __tests__ 目录下的 .js/.ts 文件 或其他目录下的 xx.test.js/ts xx.spec.js/ts
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$'
}
