import { useEffect, useState } from "react"
//功能文件
export const isFalsy = (value: unknown): boolean => value === 0 ? false : !value
//删除对象中的空值
export const clearObject = (object: any) => {
  let result: any = { ...object }
  Object.keys(object).forEach((key: any) => {
    let value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}

//防抖
export const useDebounce = <V>(value: V, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value)
  useEffect(() => {
    const time = setTimeout(() => {
      setDebounceValue(value)
    }, delay)
    return () => clearTimeout(time)
  }, [value, delay])
  return debounceValue
}

//自定义hook useEffect组件加载时
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback()
  }, [])
}

//自定义hook 清空，删减，增加数组
export const useArray = <T>(persons: T[]) => {
  const [value, setValue] = useState(persons)
  return {
    value,
    setValue,
    add: (item: T) => setValue([...value, item]),
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      let copy = [...value]
      copy.splice(index,1)
      setValue(copy)
    }
  }
  //开始出错是因为用person,person的值传入是固定的，一直没变，应该用value,value才是动态的
  // const removeIndex = (index: number) => {
  //   let copy = [...value]
  //   copy.splice(index, 1)
  //   setValue(copy)
  // }
  // const add = (person: T) => {
  //   setValue([...value, person])
  //   console.log(value)
  // }
  // const clear = () => {
  //   setValue([])
  //   console.log(value)
  // }
  // return { value, clear, removeIndex, add }
}