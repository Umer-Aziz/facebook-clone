import React from "react";
import "../Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/175130995_514546996344428_417440514175018136_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=7206a8&_nc_ohc=acXCNKA2xBMAX_UpLi1&_nc_ht=scontent.fisb7-1.fna&oh=0c01ed5506aec2f93037086e0f089436&oe=61337DFC"
        message="Wow it's working"
        timestamp="this is a timestamp"
        username="Umer Aziz"
        image="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.6435-9/214331854_1287798551622876_2554898988791718036_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=730e14&_nc_ohc=etGQo1oAY5MAX8I-3pU&_nc_ht=scontent.fisb7-1.fna&oh=3e0d876b646ca824fba7a54bf8ed6cb5&oe=61387FFE"
      />
      <Post
        profilePic="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/175130995_514546996344428_417440514175018136_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=7206a8&_nc_ohc=acXCNKA2xBMAX_UpLi1&_nc_ht=scontent.fisb7-1.fna&oh=0c01ed5506aec2f93037086e0f089436&oe=61337DFC"
        message="Wow it's working"
        timestamp="this is a timestamp"
        username="Umer Aziz"
        image="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.6435-9/214331854_1287798551622876_2554898988791718036_n.jpg?_nc_cat=104&ccb=1-4&_nc_sid=730e14&_nc_ohc=etGQo1oAY5MAX8I-3pU&_nc_ht=scontent.fisb7-1.fna&oh=3e0d876b646ca824fba7a54bf8ed6cb5&oe=61387FFE"
      />
      
    </div>
  );
};

export default Feed;
