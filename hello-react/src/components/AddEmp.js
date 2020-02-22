import React, { Component } from 'react';
import axios from 'axios';
import user from '../model/user';
import { Link } from 'react-router-dom';


class AddEmp extends Component{
  constructor(props) {
    super(props);

    this.state ={
      newUser : user.user,
      location : this.props.location
    }

    this.handleSubmit  = this.handleSubmit.bind(this);
    this.myChangeHandler = this.myChangeHandler.bind(this);

    console.log("Location state : " + this.props.location);
    this.setState({location : this.props.location});
    console.log("Location state : " + this.state.location);
  }

  componentDidMount(){
    const stateObject = JSON.parse(localStorage.getItem("state"));
    console.log("stateObject : " + stateObject);
    console.log("localStorage : " + JSON.parse(stateObject));

    console.log("Location props : " + this.props.location.userid);
    console.log("Location props : " + this.props.location.type);
    console.log("Location state : " + this.state.location.userid);
    console.log("Location state : " + this.state.location.type);

    //this.clearData();
    if(this.props.location.type == "UPDATE"){
      this.getDataByUserID(this.props.location.userid);
    }else{
      //this.clearData();
      this.setState({newUser:user.user});
      //console.log("Location stage : " + this.state.newUser.firstname);
      //console.log("Location stage : " + user.user.firstname);
    }
  }

  getDataByUserID =(userid) => {
    console.log("getDataByUserID : " + userid);
    let url = "http://localhost:5000/users?userid=" + userid;
    axios.get(url)
      .then(res => {
        //console.log(res);
        const userData =res.data;
        //console.log(userData);

        let dataUserr =  user.user;
        dataUserr.userid = userData[0].userid;
        dataUserr.firstname = userData[0].firstname;
        dataUserr.lastname = userData[0].lastname;
        dataUserr.email = userData[0].email;
        dataUserr.birthday = userData[0].birthday;

        //console.log("getDataByUserID : " + dataUserr.email);
        this.setState({newUser  : dataUserr});

      })
      .catch(err =>{
        console.log(err);
      })
  }

  clearData =() => {
    user.user.firstname = "";
    user.user.lastname = "";
    user.user.birthday = "";
    user.user.email = "";
  }
  
  handleSubmit(e) {
    //e.preventDefault();

    console.log("Location props : " + this.props.location.userid);
    console.log("Location props : " + this.props.location.type);

    if(this.props.location.type == "UPDATE"){
      this.updateUser(e);
    }else{
      this.addUser(e);
    }

    //this.setState({newUser  : ""});
    this.props.history.push("/content");
  }

  updateUser =(e) =>{
    const  url = `http://localhost:5000/users/${this.props.location.userid}`;

    const et = e.target;
    const  data = {
      firstname : et.firstname.value,
      lastname : et.lastname.value,
      birthday : et.birthday.value,
      email : et.email.value,
    };

    console.log(url);
    console.log(data.firstname);
    axios.put(url,data)
     .then(res => {
       const user =res.data;
       console.log(user);

       //this.setState({newUser  : ""});
     })
     .catch(err =>{
       console.log(err);
     })
  }

  addUser =(e) =>{

    const  url = "http://localhost:5000/users";
    const  data = {
      firstname : this.state.newUser.firstname,
      lastname : this.state.newUser.lastname,
      birthday : this.state.newUser.birthday,
      email : this.state.newUser.email,
    };

    const et = e.target;
    console.log("data :" +  et.firstname.value);
    console.log("data :" +  data.firstname);

    console.log(this.firstname.value)
    let a = e.target.checkValidity();
    console.log(a);
    //const configs = {
    //    auth: { 
    //       username : config.config.username,
    //       password : config.config.password
    //    }
    //    //,
    //    //headers: {
    //    //    //'Content-Type' : 'application/json',
    //    //    'Access-Control-Allow-Origin': '*',
    //    //    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
    //    //    'Access-Control-Allow-Headers': 'Origin, Authorization, Content-Type, Accept',
    //    //    'Authorization' : `Basic dXNlcjk6RmVlWHNWU2tWMHVQaW84bm44TkM`
    //    //    }
    //}

 
    axios.post(url,data)
     .then(res => {
       const user =res.data;
       console.log(user);

       //this.setState({newUser  : ""});
     })
     .catch(err =>{
       console.log(err);
     })
  }

  myChangeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.value;

    let dataUser = this.state.newUser;
    if(name === "firstname" ){
        dataUser.firstname = val;
    }
    else if(name === "lastname" ){
        dataUser.lastname = val;
    }
    else if(name === "birthday" ){
        dataUser.birthday = val;
    }
    else if(name === "email" ){
        dataUser.email = val;
    }

    this.setState({newUser  : dataUser});
  }

  render(){
      return(
        <div>
      
            {this.state.newUser.firstname} {this.state.newUser.lastname} {this.state.newUser.birthday} {this.state.newUser.email}
            <br/>
            <form onSubmit={this.handleSubmit}>
            <input type="hidden" id="userid"  name="userid"  value={this.state.newUser.userid}  />
            <h3>firstname</h3>  <input type="text" id="firstname"  name="firstname" ref={node => (this.firstname = node)} onChange={this.myChangeHandler} value={this.state.newUser.firstname} required />
            <h3>lastname</h3>   <input type="text" id="lastname" name="lastname" onChange={this.myChangeHandler}  value={this.state.newUser.lastname} required />
            <h3>birthday</h3>   <input type="date" id="birthday" name="birthday" onChange={this.myChangeHandler} value={this.state.newUser.birthday}  required />
            <h3>email</h3>   <input type="email" id="email" name="email" onChange={this.myChangeHandler} value={this.state.newUser.email}  required />
              <input type="submit" value="Submit" />
            </form>

            <Link to="/content"><button> Back</button></Link>
        </div>
      );
  }
}

export default AddEmp;
  