import React, {Component} from 'react';
import { FriendItem } from './FriendItem.js';

import {Link} from 'react-router-dom';
export class Friends extends Component{
    constructor(){
        super();
        this.state={
            rooms:null,
            myProfile:null
        }
    }
   
    
    async componentDidMount() {
        var apiUrl = 'http://localhost:5000/api/users/';
        fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAwN2Q5M2JlOTVmZmEzZmNmYTQ1YTkzIn0sImlhdCI6MTYxMTEyNzgyMiwiZXhwIjoxNjExNDg3ODIyfQ.H4Vx5WEHlz1hwyvLYR29uyWT5xCR8FdRC_aKCTcEyNM`
            },
          })
          .then((response) => response.json())
          .then((data) => {
            //console.log(data['results']);
            this.setState({rooms:data})
            localStorage.setItem("Rooms",JSON.stringify(data));

        });

        apiUrl = 'http://localhost:5000/api/auth/';
        fetch(apiUrl, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAwN2Q5M2JlOTVmZmEzZmNmYTQ1YTkzIn0sImlhdCI6MTYxMTEyNzgyMiwiZXhwIjoxNjExNDg3ODIyfQ.H4Vx5WEHlz1hwyvLYR29uyWT5xCR8FdRC_aKCTcEyNM`
            },
          })
          .then((response) => response.json())
          .then((data) => {
            //console.log(data);
            this.setState({myProfile:data});
            var i;
            var rooms_objs = this.state.rooms;

            console.log(this.state.myProfile);
            for(i=0;i<rooms_objs;i++){ 
                console.log(rooms_objs[i].email);

                //     if (rooms_objs[i].users[0].email === this.state.myProfile.email){
                //         this.state.rooms[i].name = rooms_objs[i].users[1].first_name+" "+rooms_objs[i].users[1].last_name;
                //         this.state.rooms[i].cover = rooms_objs[i].users[1].avatar;
                // }
 
            }
            this.setState({rooms:this.state.rooms});


        });
      }
    render(){
        return(
            <div className="container-fluid  friend-list-container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-muted text-left font-weight-bold">
                            Messages
                        </h3>
                        <hr/>
                        <input type="text"
                        placeholder="Search" className="friend-search"
                        />
                        <br/>
                        <br/>

                        <div className="col-12">
                            
                            <div className="container-fluid text-white pl-0 pr-0">

                                {
                                    this.state.rooms ? this.state.rooms.map((item, i)=>
                                    <Link to={`/chat/${item._id}`} key={item._id}>
                                    <FriendItem key={item._id} name={item.name} avatar={item.avatar}  id={item._id} /></Link>
                                    )
                                    :null
                                }

                               
                            </div>

                        </div>


                    </div>
                </div>
            </div>

        )
    }
}