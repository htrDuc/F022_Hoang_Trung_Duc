import { useEffect, useState } from 'react'

export function useDebounce<T>(initValue: T, delay?: number): T {
  const [value, setValue] = useState<T>(initValue)

  useEffect(() => {
    const timer = setTimeout(() => setValue(initValue), delay || 500)

    return () => {
      clearTimeout(timer)
    }
  }, [value, delay, initValue])

  return value
}
