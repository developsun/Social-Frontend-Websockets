import React, {Component} from 'react';
export class FriendItem extends Component{
    render(){
        return(
                <div className="row  d-flex mb-4 ">
                    <div className="col-1  mt-2 mr-2 ">
                        <img src={this.props.avatar}
                        className="user-list-img" alt="none"/>
                    </div>
                    <div className="col-10">
                        <div className="container-fluid p-0 pt-1">
                            <div className="row p-2">
                                <div className="col-11 p-0 float-left">
                                    <span className="user-list-name float-left pl-4">{this.props.name}</span>
                                </div>
                                <div className="col-1 p-0 float-right">
                                </div>
                                <div className="col-12 float-left">
                                    <span className="user-list-text float-left text-muted pl-2">{this.props.id}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
          
        );
    }
}