

export const useTouch = () => {
    const data = {
        startX: 0,
        startY: 0,
        detalX: 0,
        detalY: 0,
        isEnd: true,
    }

    const reset = () => {
        data.startX = 0
        data.startY = 0
        data.detalX = 0
        data.detalY = 0
        data.isEnd = true
    }

    const start = (event:TouchEvent) => {
        reset()
        // 获取第一个触点
        const touch = event.touches[0]
        data.startX = touch.clientX
        data.startY = touch.clientY
        data.isEnd = false
    }

    const move = (event: TouchEvent) => {
        const touch = event.touches[0]
        data.detalX = touch.clientX - data.startX
        data.detalY = touch.clientY - data.startY
        data.isEnd = false
        data.startX = touch.clientX
        data.startY = touch.clientY
    }

    const end = (event: TouchEvent) => {
        data.isEnd = true
    }



    return {
        data,
        start,
        move,
        end
    }
}