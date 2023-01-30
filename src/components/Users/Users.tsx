import React from "react";
import styles from './users.module.css'
import {UsersPropsType} from "./UsersContainer";
import axios from "axios";
// import * as axios from "axios";


let Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            // console.log(response.data.items)
            props.setUsers(response.data.items)
        })
    }
    console.log(props.usersPage.users)
    return <div>
        {
            props.usersPage.users.map(u => {
                return <div key={u.id}>
                    <span>
                    <div>
                        <img src={u.photos.small ? u.photos.small : ''} className={styles.userPhoto}/>
                    </div>
                    <div>

                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
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

export default Users