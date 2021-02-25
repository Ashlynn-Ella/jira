import { useEffect, useState } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import { clearObject, useDebounce, useMount } from 'utils/index'
import { useHttp } from 'utils/http'

//控制版面展示
export const ProgjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const debounceParam = useDebounce(param, 200)
  const client = useHttp()
  useEffect(() => {
    client('projects', { data: clearObject(debounceParam) }).then(setList)
  }, [debounceParam])
  useMount(
    () => {
      client('users').then(setUsers)
    }
  )
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />,
      <List users={users} list={list} />
    </div>
  )
}