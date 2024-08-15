import { DateUtils, extend } from "@pk-ui/utils"
import { PickerItem } from "../../picker-view/src/picker-view"
import { PropType } from "vue"

export type pickerEmits = {
    (event: 'update:modelValue', value: boolean): void
    (event: 'onChange', value: PickerItem[]): void
}

const type = ['year', 'month', 'day', 'hour', 'minute', 'second', 'Y', 'M', 'D', 'H', 'm', 's'] as const
type TypeMap = typeof type[number][]
export type DatePickerType = TypeMap[number]
export type DatePickerSimpleType = Exclude<DatePickerType, 'Y' | 'M' | 'D' | 'H' | 'm' | 's'>

export const pickerProps = extend({}, {
    modelValue: {
        type: Boolean,
        default: void 0
    },
    min: {
        type: [String, Date],
        default: void 0
    },
    max: {
        type: [String, Date],
        default: void 0
    },
    type: {
        type: Array as PropType<TypeMap>,
        default: () => (['year', 'month', 'day'])
    },
    current: {
        type: [String, Date],
        default: void 0
    },
    formatter: {
        type: Function as PropType<(type: DatePickerSimpleType, item: PickerItem) => PickerItem>
    },
    filter: {
        type: Function as PropType<(type: DatePickerSimpleType, items: PickerItem) => boolean>
    }
})

// sort
export function sortDateType(type: TypeMap): TypeMap {
    const types: TypeMap = []
    type.forEach((item) => {
        switch (item) {
            case 'year':
            case 'Y':
                types[0] = 'year'
                break
            case 'month':
            case 'M':
                types[1] = 'month'
                break
            case 'day':
            case 'D':
                types[2] = 'day'
                break
            case 'hour':
            case 'H':
                types[3] = 'hour'
                break
            case 'minute':
            case 'm':
                types[4] = 'minute'
                break
            case 'second':
            case 's':
                types[5] = 'second'
                break
            default:
                break
        }
    })

    return types.filter(item => item)
}

interface DatePickerGetterColumnsOptions {
    min?: string | Date,
    max?: string | Date,
    current: ReturnType<typeof DateUtils>,
    type: TypeMap,
    formatter?: (type: DatePickerSimpleType, item: PickerItem) => PickerItem,
    filter?: (type: DatePickerSimpleType, items: PickerItem) => boolean
}

export function getColumns(options: DatePickerGetterColumnsOptions): PickerItem[][] {
    const min = DateUtils(options.min || DateUtils().add(-10, 'year'))
    const max = DateUtils(options.max || DateUtils().add(10, 'year'))
    const type = sortDateType(options.type)

    return type.map(typeItem => {
        switch (typeItem) {
            case 'year':
                return getDatePickerItems({
                    min: min.year(),
                    max: max.year(),
                    type: 'year',
                    formatter: options.formatter,
                    filter: options.filter
                })
            case 'month':
                let minMonth = 1
                let maxMonth = 12
                if (options.current.year() === min.year()) minMonth = min.month() + 1
                if (options.current.year() === max.year()) maxMonth = max.month() + 1

                return getDatePickerItems({
                    min: minMonth,
                    max: maxMonth,
                    type: 'month',
                    formatter: options.formatter,
                    filter: options.filter
                })
            case 'day':
                let minDate = 1
                let maxDate = options.current.daysInMonth()
                if (options.current.year() === min.year() && options.current.month() === min.month()) minDate = min.date()
                if (options.current.year() === max.year() && options.current.month() === max.month()) maxDate = max.date()

                return getDatePickerItems({
                    min: minDate,
                    max: maxDate,
                    type: 'day',
                    formatter: options.formatter,
                    filter: options.filter
                })
            case 'hour':
                return getDatePickerItems({
                    min: 0,
                    max: 60,
                    type: 'hour',
                    formatter: options.formatter,
                    filter: options.filter
                })
            case 'minute':
                return getDatePickerItems({
                    min: 0,
                    max: 60,
                    type: 'minute',
                    formatter: options.formatter,
                    filter: options.filter
                })
            case 'second':
                return getDatePickerItems({
                    min: 0,
                    max: 60,
                    type: 'second',
                    formatter: options.formatter,
                    filter: options.filter
                })
            default:
                return []
        }
    })
}

interface DatePickerGetterItemsOptions {
    min: number,
    max: number,
    type: DatePickerSimpleType,
    formatter?: (type: DatePickerSimpleType, item: PickerItem) => PickerItem,
    filter?: (type: DatePickerSimpleType, items: PickerItem) => boolean
}

export function getDatePickerItems(options: DatePickerGetterItemsOptions): PickerItem[] {
    const needToFixed = options.type === 'hour' || options.type === 'minute' || options.type === 'second'
    const formatter = typeof options.formatter === 'function' ? options.formatter : function (_: DatePickerSimpleType, item: PickerItem) { return item }
    const filter = typeof options.filter === 'function' ? options.filter : function () { return true }
    return Array(options.max - options.min + 1).fill(0).map((_, index) => {
        return {
            ...formatter(options.type, {
                label: needToFixed && (options.min + index < 10) ? `0${options.min + index}` : `${options.min + index}`,
                value: options.min + index
            }),
            value: options.min + index
        }
    }).filter((item) => filter(options.type, item))
}

export function getCurrentSelectDateItemByColumnsAndType(columns: PickerItem['value'][], type: TypeMap, forceValid: boolean = true) {
    const types = sortDateType(type)
    const currentDate = DateUtils()
    const year = columns[types.indexOf('year')] || currentDate.year()
    //need not add one, because month start from 1 in columns
    const month = isNaN(Number(columns[types.indexOf('month')])) ? (currentDate.month() + 1) : Number(columns[types.indexOf('month')]) || (currentDate.month() + 1)
    //is first day of month
    const day = forceValid ? 1 : columns[types.indexOf('day')] || currentDate.date()
    const hour = columns[types.indexOf('hour')] || currentDate.hour()
    const minute = columns[types.indexOf('minute')] || currentDate.minute()
    const second = columns[types.indexOf('second')] || currentDate.second()

    return DateUtils(`${year}/${month}/${day} ${hour}:${minute}:${second}`)
}


export function checkValueIsInColumns(types: TypeMap, date: ReturnType<typeof DateUtils>, columns: PickerItem[][]) {
    const type = sortDateType(types)
    return type.every((typeName, index) => {
        switch (typeName) {
            case 'year':
                return columns[index].findIndex(i => i.value === date.year()) > -1
            case 'month':
            case 'M':
                return columns[index].findIndex(i => i.value === date.month() + 1) > -1
            case 'day':
            case 'D':
                return columns[index].findIndex(i => i.value === date.date()) > -1
            case 'hour':
            case 'H':
                return columns[index].findIndex(i => i.value === date.hour() + 1) > -1
            case 'minute':
            case 'm':
                return columns[index].findIndex(i => i.value === date.minute()) > -1
            case 'second':
            case 's':
                return columns[index].findIndex(i => i.value === date.second()) > -1
            default:
                return false
        }
    })
}


export function getValueByDate(types: TypeMap, date: ReturnType<typeof DateUtils>) {
    const type = sortDateType(types)
    return type.map((typeName) => {
        switch (typeName) {
            case 'year':
                return date.year()
            case 'month':
            case 'M':
                return date.month() + 1
            case 'day':
            case 'D':
                return date.date()
            case 'hour':
            case 'H':
                return date.hour()
            case 'minute':
            case 'm':
                return date.minute()
            case 'second':
            case 's':
                return date.second()
            default:
                return ''
        }
    })
}