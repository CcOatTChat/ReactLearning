import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import dataUser from './model/user'
import ContentDetail from './components/contentDetail'

class Content extends Component{
  constructor(props) {
    super(props);

    this.state ={
      persons:[],
      users : dataUser.user,
      userAdd : dataUser.user,
      showDetail:false
    }

    //console.log(this.state);
    this.viewUserDetail = this.viewUserDetail.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);
    this.updateEmployee = this.updateEmployee.bind(this);
    this.deleteEmployee = this.deleteEmployee.bind(this);
  }

  componentDidMount(){
    var config = {
      headers: {
              'Access-Control-Allow-Origin': '*',
              }
    };

    axios.get('http://localhost:5000/users')
    .then(res => {
      //console.log(res);
      const users =res.data;
      //console.log(users);

      this.setState({persons : users})
    })
    .catch(err =>{
      console.log(err);
    })
  }

  viewUserDetail = (userid) => {
    //console.log("Click" + userid);
    let url = "http://localhost:5000/users?userid=" + userid;
    axios.get(url)
      .then(res => {
        //console.log(res);
        const user =res.data;
        //console.log(user);

        let dataUserr =  dataUser.user;
        dataUserr.userid = user[0].userid;
        dataUserr.firstname = user[0].firstname;
        dataUserr.lastname = user[0]['lastname'];
        dataUserr.age = user[0]['age'];
        dataUser.user = dataUserr;

        //console.log(dataUserr);
        //this.users = dataUserr;
        this.setState({users  : dataUser.user});
        this.setState({showDetail:true});
        console.log(this.state.users);
        console.log(this.state.showDetail);
      })
      .catch(err =>{
        console.log(err);
      })
  }

  handleSubmit(event) {
    //event.preventDefault();
    const  url = "http://localhost:5000/users";
    const  data = {
      firstname : this.state.userAdd.firstname,
      lastname : this.state.userAdd.lastname,
      age : this.state.userAdd.age,
    };

    console.log("data :" +  data);
    axios.post(url,data)
      .then(res => {
        //console.log("res :"+res.data);
        const user =res.data;
        console.log(user);
      })
      .catch(err =>{
        console.log(err);
      })


    this.setState({users  : ""});
  }

  myChangeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.value;

    let dataUserr = this.state.userAdd;
    if(name == "firstname" ){
      dataUserr.firstname = val;
    }
    if(name == "lastname" ){
      dataUserr.lastname = val;
    }
    if(name == "age" ){
      dataUserr.age = val;
    }

    this.setState({userAdd  : dataUserr});
    //console.log( this.state.userAdd);
    //this.setState({[nam]: val});
  }

  updateEmployee = (id) =>{
    //console.log(id);
    this.props.history.push({
      pathname :"/AddEmployee/"+id+"/UPDATE",
      userid : id,
      type : "UPDATE"
    });
  }

  deleteEmployee = (id) =>{
    console.log(id);
  }

  render(){
      return(
        <div>
          <h3> Learn ReactJS Content</h3>
          <Link to={{
            pathname :"/AddEmployee",
            userid : "",
            type : "ADD"
          }}>
            <button> Add Employee </button></Link>
          <table id='employee' border="1">
         <tbody>
            <tr>                 
                  <td>Firstname</td>
                  <td>Lastnaame</td>
                  <td>Email</td>
                  <td>BirthDay</td>
                  <td></td>
                  <td></td>
            </tr>
            {
              this.state.persons.map(data =>
                <tr key={data.userid}> 
                  <td>{data.firstname}</td>
                  <td>{data.lastname}</td>
                  <td>{data.email}</td>
                  <td>{data.birthday}</td>
                  <td><button onClick={this.updateEmployee.bind(this,data.userid)}> Update </button></td>
                  <td><button onClick={this.deleteEmployee.bind(this,data.userid)}> Delete </button></td>
                </tr>
              )
            }
          </tbody>
        </table>

          {/* {this.state.persons.map(person => 
            <li key={person.userid}>
                <Link to="/content" onClick={this.viewUserDetail.bind(this,person.userid)}>
                  {person.firstname} {person.lastname} 
                </Link>
              </li>)} */}

            { 
              // this.state.showDetail ? (
              //     <div className="">
              //     <h1> Details </h1>
              //     <h3> Name : {dataUser.user.firstname} {dataUser.user.lastname} </h3>
              //     <h3> Age : {dataUser.user.age} </h3>
              //     </div>
              // ) 
              // :
              // (
              //   null
              // )
            }

            { this.state.showDetail ? (
            <ContentDetail dataUser={dataUser.user}  user={this.state.users}  />
            )
            :
            (
              null
            )
            }

            <br/>
            {this.state.userAdd.firstname} {this.state.userAdd.lastname} {this.state.userAdd.age == 0 ? null : this.state.userAdd.age }
            <br/>
            <form onSubmit={this.handleSubmit}>
              <input type="text" id="firstname"  name="firstname" onChange={this.myChangeHandler}/>
              <input type="text" id="lastname" name="lastname" onChange={this.myChangeHandler}/>
              <input type="text" id="age" name="age" onChange={this.myChangeHandler}/>
              <input type="submit" value="Submit" />
            </form>

        </div>
      );
  }
}

export default Content;
  