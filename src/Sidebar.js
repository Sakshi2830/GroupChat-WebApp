import React from 'react'
import './Sidebar.css'
import { Avatar,IconButton } from '@material-ui/core'
import { DonutLargeOutlined, SearchOutlined } from '@material-ui/icons'
import ChatIcon from '@material-ui/icons/Chat'
import MoreVertIcon from '@material-ui/icons/MoreVert';



function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
              <Avatar />
              <div className="sidebar__headerRight">
                  <IconButton>
                    <DonutLargeOutlined />
                  </IconButton>
                  <IconButton>
                    <ChatIcon />
                  </IconButton>
                  <IconButton>
                  <MoreVertIcon/>
                  </IconButton>
              </div>
            </div>
            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chat" type="text" />
                </div>
                
            </div>
            <div className="sidebar__chats">

            </div>
        </div>
    )
}

export default Sidebar
