import React, {Component} from 'react';
var userId;
var copyProp;
var rep_last="";

function send(){
	copyProp.socket.emit('chat-message',{
		message:document.getElementById("msg-content").value,
		tosent:userId,
    })
    var elem= `<div class="col-12 mt-2"><div class="float-left my-message">`+document.getElementById("msg-content").value+`</div></div>`;
    document.getElementById("message-exchange").innerHTML+=elem;
    document.getElementById("msg-content").value="";

}


function ChatMessageList(props){
copyProp = props;
var count=0;
        console.log();
        var splittedUrl = window.location.href.split('/');
        userId = splittedUrl.pop() || splittedUrl.pop();
        var rooms =  JSON.parse(localStorage.getItem("Rooms"));
        var userName,avatar;
        for (var i = 0; i < rooms.length; i++){
            if (rooms[i]._id === userId){
                userName=rooms[i].name;
                avatar = rooms[i].avatar;
            }
          }


          //Listen for btn.addEventListener
props.socket.on('chat-message',async function(data){
                 var elem= `<div class="col-12 mt-2"><div class="float-right otherparty-message">`+data.message+`</div></div>`;
                document.getElementById("message-exchange").innerHTML+=elem;

});





        return(
                <div className=" col-10 bg-semi-dark ">
                    <div className="row">
                        <div className="col-12 ml-4  mt-4">
                            <img src={avatar} className="user-list-img float-left mr-4"></img>
                            <h1 className="text-white ml-3">{userName}</h1>
                        </div>
                    </div>
                    <div id="message-exchange" className="row">

                        
                    </div>

                        <div className="input container chat-input-container" >
                            <div className="row">
                                <div className="col-11">
                                    <input className="text-input chat-full-width-input" id="msg-content" placeholder="Send a message ..."></input>
                                </div>
                                <div className="col-1">
                                    <button className="btn btn-primary" onClick={send}>Send</button>
                                </div>
                            </div>
                        </div>

                </div>

          
        );
}

export default ChatMessageList;