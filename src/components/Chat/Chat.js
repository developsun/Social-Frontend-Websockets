import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Friends} from './Friends/Friends';
import ChatArea from './ChatArea';

import './chat.css';
const io = require('socket.io-client');
var socket;
function Chat(){

    socket = io.connect('http://localhost:5000');
    socket.on('connect',async function(){
        await join();
    });

    

        return(            
            <div className="container-fluid">
                <div className="row p-5">
                    <div className="col-md-2">
                        <div className=" bg-semi-dark">
                        <Friends/>
                        </div>
                    </div>
                    <ChatArea socket={socket}/>
                </div>
                </div>
        )
    }

    function  join(){
		socket.emit('join',{
		token:localStorage.getItem('x-auth-token'),
	})
    console.log("joined");
    return true;
	}

export default Chat;