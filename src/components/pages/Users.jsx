import React, {Component} from 'react'; 
import UserCard from '../molecules/UserCard';
import Axios from 'axios'; 

class Users extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            users: []
        }
    }

    render() {
        const users  = this.state.users; 
        return (
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid">
                    {
                        users.map(user => <UserCard 
                            key={user.id} name={user.name} 
                            username={user.username} 
                            email={user.email} />) 
                    }
                </div>
            </div>
        );
    }

    async componentDidMount() {
        const res = await (await Axios.get('https://jsonplaceholder.typicode.com/users')).data; 
        this.setState({users: res});  
        // let res = await 
        // fetch('https://jsonplaceholder.typicode.com/users'); 
        // res = await res.json();  
        // this.setState({users: res});  
        // fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
        //     .then(res => 
        //         res.ok ? res.json() : [])
        //     .then(resJSON => 
        //         this.setState({
        //             users: resJSON
        //         }
        //     )); 
    }
}
export default Users; 