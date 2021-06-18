import React from 'react'
import './SidebarChat.css'
import { Avatar } from '@material-ui/core'
import { useState,useEffect } from 'react'
import db from './firebase';

function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState("");

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, []);


    const createChat = () =>{
        const roomName = prompt("Please enter the name for room")

        if ( roomName ){
            //adding Database stuff......
            db.collection('rooms').add({
                name: roomName,
            })
        }
    }
    

    return !addNewChat ? (
        <div className='sidebarchat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

            <div className="sidebarchat__info">
                <h2>{name}</h2>
                <p>last message.......</p>
            </div>  
        </div>
    ) :(
        <div className="sidebarchat" onClick={createChat} >
            <h2>Add New Chat</h2>
        </div>
    );
} 

export default SidebarChat
