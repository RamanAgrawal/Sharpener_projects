import Card from "../UI/Card"
import './UserList.css'
const UserList = props => {
    console.log(props.users)
    return <Card classes={'users'}>
        <ul>
            {props.users.map((user) => (
                <li key={user.id}>

                    {user.name}
                     {user.age} </li>
            ))}
           
        </ul>
    </Card>
}
export default UserList