import { User } from "./search-panel"
import { Table } from 'antd'
interface Project {
  id: string,
  name: string,
  personId: string,
  organization: string,
  created: string
}
interface ListProps {
  users: User[],
  list: Project[]
}

//控制版面 表格
export const List = ({ users, list }: ListProps) => {
  return <Table pagination={false} dataSource={list} columns={
    [{
      title: '名称',
      dataIndex: 'name',
      sorter:(a,b)=> a.name.localeCompare(b.name)
    },
    {
      title: '负责人',
      render(value, project) {
        return <span>
          {users.find(user => user.id === project.personId)?.name || '未知'}
        </span>
      }
    }]
  }>
  </Table>
}