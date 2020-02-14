import React, { Component } from 'react';


class ContentDetail extends Component{
    constructor(props) {
        super(props);
    
        this.state ={
            dataUser:[],
          //users : dataUser.user
        } 
      }


    render(){
        return(
            <div className="">
            <h1> Details </h1>
            <h3> Name : {this.props.dataUser.firstname} {this.props.user.lastname} </h3>
            <h3> Age : {this.props.dataUser.age} </h3>
            </div>
        );
    }    
}

export default ContentDetail;