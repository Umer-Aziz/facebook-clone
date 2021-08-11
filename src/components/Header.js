import React from 'react'
import "../Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AppsIcon from '@material-ui/icons/Apps';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar, IconButton } from '@material-ui/core';
import { useStateValue } from "../StateProvider";

const Header = () => {
    const [{ user }, dispatch ] = useStateValue();
    return (
        <div className="header">
            <div className="header_left">
            <img src="/images/facebook-logo.svg" alt="logo" />
            <div className="header_input">
                 <SearchIcon className="searchIcon"/>
                <input type="text"  placeholder="Search Facebook"/>
            </div>
            </div>
            <div className="header_middle">
                <div className="header_options header_options--active">
                 <HomeIcon  fontSize="large"/>
                </div>
                <div className="header_options">
                 <FlagIcon  fontSize="large"/>
                </div>
                <div className="header_options">
                 <SubscriptionsOutlinedIcon  fontSize="large"/>
                </div>
                <div className="header_options">
                 <StorefrontOutlinedIcon  fontSize="large"/>
                </div>
                <div className="header_options">
                 <SupervisedUserCircleIcon  fontSize="large"/>
                </div>
            </div>

            <div className="header_right">
                <div className="header_info">
                <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>
                   <IconButton>
                       <AppsIcon />
                   </IconButton>
                   <IconButton>
                       <ForumIcon/>
                   </IconButton>
                   <IconButton>
                       <NotificationsActiveIcon/>
                   </IconButton>
                   <IconButton>
                       <ExpandMoreIcon/>
                   </IconButton>
            </div>
        </div>
    )
}

export default Header
