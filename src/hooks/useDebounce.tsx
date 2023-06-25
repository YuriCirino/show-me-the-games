import { useRef } from "react"

export default function useDebounce(fn: Function, delay: number) {
    const timeOutRef = useRef<ReturnType<typeof setTimeout>>()
    function deboucedFunction(...args: any[]) {
        clearTimeout(timeOutRef.current)
        timeOutRef.current = setTimeout(() => {
            fn(...args)
        }, delay)
    }

    return deboucedFunction
}
