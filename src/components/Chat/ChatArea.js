import React, {Component} from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './chat.css';
import { Route, Switch } from 'react-router-dom';
import ChatMessageList from './ChatMessageList';
function ChatArea(props){

        
        return(
                                    <Switch>
                                        <Route path="/chat/:id" >
                                            <ChatMessageList   socket={props.socket}/>
                                        </Route>
                                    </Switch>


                    

        )
    }

export default ChatArea;