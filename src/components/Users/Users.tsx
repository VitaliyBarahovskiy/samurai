import React from "react";
import styles from "./users.module.css";
import { UsersType} from "../../redux/users-reduce";
import {NavLink} from "react-router-dom";

type UsersNewPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: UsersType[],
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: number[]

}

let Users = (props: UsersNewPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }


    return <div>
        <div>
            {pages.map(p => {
                return <span onClick={() => props.onPageChanged(p)}
                             className={styles.pageNum + ` ${props.currentPage === p && styles.selectedPage}`}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => {
                return <div key={u.id}>
                    <span>
                    <div>

                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small ? u.photos.small :
                            'https://kartinkof.club/uploads/posts/2022-03/1648291448_1-kartinkof-club-p-lisii-muzhik-mem-1.jpg'}
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>

                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.unfollow(u.id)


                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
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

export default Users;