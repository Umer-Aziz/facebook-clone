import React from "react";
import "../Sidebar.css";
import SidebarRow from "./SidebarRow";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/175130995_514546996344428_417440514175018136_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=7206a8&_nc_ohc=acXCNKA2xBMAX_UpLi1&_nc_ht=scontent.fisb7-1.fna&oh=0c01ed5506aec2f93037086e0f089436&oe=61337DFC" title="Umer Aziz" />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="See More" />
        </div>
    );
};

export default Sidebar;
