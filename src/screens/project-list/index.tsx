import { useEffect, useState } from 'react'
import { SearchPanel } from './search-panel'
import { List } from './list'
import qs from 'qs'
import { clearObject, useDebounce, useMount } from 'utils/index'
export const ProgjectListScreen = () => {
  const [param, setParam] = useState({
    name: '',
    personId: ''
  })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const debounceParam = useDebounce(param, 200)
  const apiUrl = process.env.REACT_APP_API_URL
  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(clearObject(debounceParam))}`).then(async response => {
      if (response.ok) {
        setList(await response.json())
      }
    })
  }, [debounceParam])
  useMount(
    () => {
      fetch(`${apiUrl}/users`).then(async response => {
        if (response.ok) {
          setUsers(await response.json())
        }
      })
    }
  )
  return (
    <div>
      <SearchPanel users={users} param={param} setParam={setParam} />,
      <List users={users} list={list} />
    </div>
  )
}