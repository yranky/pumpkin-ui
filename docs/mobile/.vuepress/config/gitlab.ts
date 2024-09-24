import { defineUserConfig } from 'vuepress/cli'
import config from '../config'

export default defineUserConfig({
    ...config,
    base: '/pumpkin-ui/'
})
