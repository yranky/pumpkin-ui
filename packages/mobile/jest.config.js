export default {
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '\\.(less|css)$': 'jest-less-loader',
        '^.+\\.vue$': '@vue/vue3-jest'
    },
    moduleNameMapper: {
        '@pumpkin-ui/mobile': '<rootDir>/dist/lib/index.js' // 或者您dist目录下的入口文件
    },
    modulePathIgnorePatterns: ['<rootDir>/package.json'],
}