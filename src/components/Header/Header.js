import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import linked from '../../assets/linkedin.svg';
import HeaderOption from '../HeaderOption/HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../../_reducers/userSlice';
import { auth } from '../../firebase';



function Header() {
    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    }

    return (
        <div className='header'>
            <div className="header__left">
                <img src={linked} alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"></input>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title='Home' />
                <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
                <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
                <HeaderOption Icon={ChatIcon} title='Messaging' />
                <HeaderOption Icon={NotificationsIcon} title='Notifications' />
                <HeaderOption title='me' onClick={logoutOfApp} avatar={true} />
            </div>
        </div>

    );
}

export default Header
