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