export default {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '\\.(less|css)$': 'jest-less-loader',
        '^.+\\.vue$': '@vue/vue3-jest'
    },
    modulePathIgnorePatterns: ['<rootDir>/dist'],
}