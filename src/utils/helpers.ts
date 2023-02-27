import { filterData } from './dataFilter'

export const getDiskTitle = (value: string) => {
  return filterData.find((it) => it.value === value).text || value
}
