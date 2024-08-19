export const extend = Object.assign


export const usePromiseHooks = () => {
    let resolve, reject, promise;
    promise = new Promise((res, rej) => { resolve = res; reject = rej; })

    return {
        promise,
        resolve,
        reject
    }
}


export const generateRandomId = () => {
    return 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    })
}

export const isEmptyValue = (value: any, trim: boolean = false) => {
    if (value === undefined || value === null || (trim && typeof value === 'string' && value.trim() === '') || (!trim && value === '')) return true
    return false
}