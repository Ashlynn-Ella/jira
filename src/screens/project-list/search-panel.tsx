
export interface User {
  id: string,
  name: string,
  token:string
}
interface SearchPanelProps {
  users: User[],
  param: {
    name: string,
    personId: string
  },
  setParam: (param: SearchPanelProps['param']) => void
}

//搜索
export const SearchPanel = ({ users, param, setParam }: SearchPanelProps) => {
  return <form>
    <input type="text" onChange={(e) => {
      setParam({
        ...param,
        name: e.target.value
      })
    }} />
    <select onChange={(e) => {
      setParam({
        ...param,
        personId: e.target.value
      })
    }}>
      <option value="">负责人</option>
      {
        users.map(user => <option key={user.id} value={user.id}>{user.name}</option>)
      }
    </select>
  </form>
}