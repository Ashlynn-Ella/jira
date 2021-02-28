import {Form,Input,Select} from 'antd'

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
  return <Form>
    <Input value={param.name} type="text" onChange={(e) => {
      setParam({
        ...param,
        name: e.target.value
      })
    }} />
    <Select value={param.personId} onChange={ value => {
      setParam({
        ...param,
        personId: value
      })
    }}>
      <Select.Option value="">负责人</Select.Option>
      {
        users.map(user => <Select.Option key={user.id} value={user.id}>{user.name}</Select.Option>)
      }
    </Select>
  </Form>
}