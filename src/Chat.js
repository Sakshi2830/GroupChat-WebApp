import React  from 'react'
import './Chat.css';
import { Avatar } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { IconButton } from '@material-ui/core';
import { SearchOutlined,AttachFile, MoreVert, InsertEmoticon } from '@material-ui/icons';
import MicIcon from "@material-ui/icons/Mic"
import { useParams } from 'react-router-dom';
import db from './firebase';

function Chat() {
    const [input, setInput] = useState("")
    const [seed, setSeed] = useState("");
    const {roomId} = useParams();
    const [roomName, setRoomName] = useState("");

    useEffect(() => {
            if (roomId) {
                db.collection('rooms').doc(roomId)
                .onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
                ))
            }
    }, [roomId])

    useEffect(() => {
        setSeed()
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput("")
    }

    return (
        <div className="chat">
            
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${Math.floor(Math.random() * 5000)}.svg`} />

            <div className="chat__headerinfo">
                <h3>{roomName}</h3>
                <p>Last Seen at......</p>
            </div>
            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFile />
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            </div>
            <div className="chat__body">
                <p className={`chat__message ${true && "chat__reciever"}`}>
                <span className="chat__name">sakshi</span>
                HELLO EVERYONE
                <span className="chat__timestamp">3.25pm</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input value={input} onChange={e=> setInput(e.target.value)} type="text" placeholder="Type a message"  />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat 
