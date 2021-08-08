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


const Header = () => {
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
                    <Avatar src="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/175130995_514546996344428_417440514175018136_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=7206a8&_nc_ohc=acXCNKA2xBMAX_UpLi1&_nc_ht=scontent.fisb7-1.fna&oh=0c01ed5506aec2f93037086e0f089436&oe=61337DFC"/>
                    <h4>Umer</h4>
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
