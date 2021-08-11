import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "../MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "../StateProvider";
import db from "../firebase";
import firebase from "firebase";

const MessageSender = () => {
  const [Input, setInput] = useState("");
  const [ImageUrl, setImageUrl] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();

    //   db stuff
    db.collection("posts").add({
        message:Input,
        timestamp:firebase.firestore
        .FieldValue.serverTimestamp(),
        profilePic:user.photoURL,
        username:user.displayName,
        image:ImageUrl
    })

    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={Input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender_input"
            type="text"
            placeholder={`What's on your mind, ${user.displayName} `}
          />
          <input
            value={ImageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            type="text"
            placeholder="Image URL (Optional)"
          />
          <button type="submit" onClick={handleSubmit}>
            Hidden Button
          </button>
        </form>
      </div>
      <div className="messageSender_button">
        <div className="messageSender_Options">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender_Options">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender_Options">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
