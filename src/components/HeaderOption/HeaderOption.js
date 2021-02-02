import React from 'react'
import './HeaderOption.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from "react-redux"
import { selectUser } from '../../_reducers/userSlice';

function HeaderOption({ Icon, title, avatar, onClick }) {
    const user = useSelector(selectUser);
    return (
        <div onClick={onClick} className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            {avatar && (
                <Avatar className='headerOption__icon' src={user?.photoUrl}>{user?.email[0]}</Avatar>
            )}
            <h3 className='headerOption__title'>{title}</h3>
        </div>
    )
}

export default HeaderOption
