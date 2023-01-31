import React from "react";
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";




class Users extends React.Component<UsersPropsType>{


    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <div>
            {
                this.props.usersPage.users.map(u => {
                    return <div key={u.id}>
                    <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small :
                            'https://kartinkof.club/uploads/posts/2022-03/1648291448_1-kartinkof-club-p-lisii-muzhik-mem-1.jpg'}
                             className={styles.userPhoto}/>
                    </div>
                    <div>

                        {u.followed ?
                            <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                        <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                </span>
                    </div>
                })
            }
        </div>
    }
}

export default Users;