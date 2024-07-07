import path from "node:path"
import { defaultTheme, DefaultThemeOptions } from "@vuepress/theme-default"
import { Theme } from "vuepress"


export default (options: DefaultThemeOptions): Theme => {
    return {
        extends: defaultTheme(options),
        name: 'pk-vuepress-theme',
        clientConfigFile: path.resolve(__dirname, 'client.ts'),
        alias: {

        }
    }
}