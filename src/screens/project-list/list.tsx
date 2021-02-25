import { User } from "./search-panel"
interface Project{
  id:string,
  name:string,
  personId:string,
  organization:string,
  created:string
}
interface ListProps{
  users:User[],
  list:Project[]
}

//控制版面 表格
export const List = ({ users, list }:ListProps) => {
  return <table>
    <thead>
      <tr>
        <th>名称</th>
        <th>负责人</th>
      </tr>
    </thead>
    <tbody>
      {
        list.map(project => <tr key={project.id}>
          <td>{project.name}</td>
          <td>{users.find(user=>user.id === project.personId)?.name ||'未知'}</td>
        </tr>)
      }
    </tbody>
  </table>
}