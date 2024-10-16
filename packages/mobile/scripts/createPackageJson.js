import path from 'path'
import fs from "fs"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const basePackageJsonPath = path.resolve(__dirname, '../package.json')
const filePath = path.resolve(__dirname, '../dist')

const basePackageJson = JSON.parse(fs.readFileSync(basePackageJsonPath, 'utf-8'))

basePackageJson['typings'] = 'index.d.ts'
basePackageJson['main'] = 'lib/index.js'
basePackageJson['module'] = 'es/index.mjs'
basePackageJson['style'] = 'lib/style.css'
basePackageJson['files'] = [
    "es",
    "lib",
    "index.d.ts"
]

fs.writeFileSync(path.resolve(filePath, 'package.json'), JSON.stringify(basePackageJson, null, 4), "utf-8")

fs.copyFileSync(path.resolve(__dirname, '../../../README.md'), path.resolve(filePath, 'README.md'))
fs.copyFileSync(path.resolve(__dirname, '../../../LICENSE'), path.resolve(filePath, 'LICENSE'))


