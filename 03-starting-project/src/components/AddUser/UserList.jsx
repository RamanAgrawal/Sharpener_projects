import Card from "../UI/Card"
import './UserList.css'
const UserList = props => {
    
    return <Card classes={'users'}>
        <ul>
            {props.users.map((user) => (
                <li key={user.id}>

                    {user.name}
                     -{user.age}
                     -{user.college} </li>
            ))}
         
        </ul>
    </Card>
    
}
export default UserList