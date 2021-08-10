import { Avatar } from '@material-ui/core'
import React ,{useState} from 'react'
import "../MessageSender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

const MessageSender = () => {

    const [Input, setInput] = useState("");
    const [ImageUrl, setImageUrl] = useState("");

    const handleSubmit =(e)=>{
         e.preventDefault();

        //   db stuff

         setInput("");
         setImageUrl("");
    }

    return (
        <div className="messageSender">
            <div className="messageSender_top">
             <Avatar src="https://scontent.fisb7-1.fna.fbcdn.net/v/t1.6435-1/cp0/p80x80/175130995_514546996344428_417440514175018136_n.jpg?_nc_cat=108&ccb=1-4&_nc_sid=7206a8&_nc_ohc=acXCNKA2xBMAX_UpLi1&_nc_ht=scontent.fisb7-1.fna&oh=0c01ed5506aec2f93037086e0f089436&oe=61337DFC"/>
             <form >
               <input value={Input}
               onChange={(e) => setInput(e.target.value)}
                className="messageSender_input" 
                type="text" placeholder={`What's on your mind, `}/>
               <input 
                value={ImageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                type="text" placeholder="Image URL (Optional)"/>
               <button type="submit" onClick={handleSubmit}>Hidden Button</button>
             </form>
            </div>
            <div className="messageSender_button">

            <div className="messageSender_Options">
             <VideocamIcon style={{color:"red"}}/>
             <h3>Live Video</h3>
            </div>

            <div className="messageSender_Options">
             <PhotoLibraryIcon style={{color:"green"}}/>
             <h3>Photo/Video</h3>
            </div>

            <div className="messageSender_Options">
             <InsertEmoticonIcon style={{color:"orange"}}/>
             <h3>Feeling/Activity</h3>
            </div>

            </div>
        </div>
    )
}

export default MessageSender
