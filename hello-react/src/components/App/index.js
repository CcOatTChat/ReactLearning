import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';


// สร้าง Component - JSX
//class App2 extends Component{
//  constructor(){  
//    super();
//    this.state={
//      data:[],
//      message:"UnLike",
//      typeof:""
//    };
//
//    this.changeMessage = this.changeMessage.bind(this);
//    this.insertData = this.insertData.bind(this);
//  }
//
//  changeMessage(){
//    this.setState({message:"Like"});
//  }
//
//  insertData(){
//    var item = "React";
//    var myArray = this.state.data;
//    myArray.push(item); // Add item
//    this.setState({data:myArray});
//    console.log(this.state.data);
//  }
//
//  onChange(event){
//    this.setState({type:event.target.value})
//  }
//
//  onChange2 = event =>{
//    this.setState({type:event.target.value})
//  };
//
//  render(){
//    return(
//      <div>
//          <Header firststate="1st State" secondstate="Change State" clickstate="click change state"/>
//          <Content />
//          <Content title="Learning ReactJS Course" name="MySelf" price="FreeDom"/> 
//          <Footer/>
//          <button onClick={this.changeMessage}>{this.state.message}</button>
//          <h2>{this.state.data}</h2>
//          <ul>
//              {this.state.data.map(item => (
//                <li key={item}>{item}</li>
//              ))
//              }
//          </ul>
//          <button onClick={this.insertData}>Insert</button>
//          <br></br>
//          <input type="text" onChange={(e) => this.onChange2(e)}/>
//          <h2> On Change Value : {this.state.type}</h2>
//      </div>
//    );
//  }
//}

//////////////////////////////////////////////////////////////
//function App(){
//  const[data,setData] = useState([]);
//  const[message,setMessage] = useState("UnLike");
//  const[type,setType] = useState("");
//
//  function changeMessage(){
//    setMessage("Like");
//  }
//
//  function insertData(){
//    var item = "React";
//    var myArray = data;
//    myArray.push(item); // Add item
//    setData(myArray);
//    console.log(data);
//  }
//
//  function onChange(event){
//    setType(event.target.value)
//  }


//  return(
//      <div>
//          <Header firststate="1st State" secondstate="Change State" clickstate="click change state"/>
//          <Content />
//          <Content title="Learning ReactJS Course" name="MySelf" price="FreeDom"/> 
//          <Footer/>
//          <button onClick={changeMessage}>{message}</button>
//          <h2>{data}</h2>
//          <ul>
//              {data.map(item => (
//                <li key={item}>{item}</li>
//              ))
//              }
//          </ul>
//          <button onClick={insertData}>Insert</button>
//          <br></br>
//          <input type="text" onChange={onChange}/>
//          <h2> On Change Value : {type}</h2>
//      </div>
//  );
//}

class AppRoute extends Component{
  render(){
    
    const getGreeting = (text) => {
      //return `Welcome to ` + text;
      return `Welcome to ${text}`;
    }

    const greeting = getGreeting('JavaScript');

    return(
        <div>
          <h1>Learn React</h1>
          <h1><Link to="/header"> Header </Link></h1>
          <h1><Link to="/content"> Content </Link></h1>
          <h1><Link to="/footer"> Footer </Link></h1>
          <h1><Link to="/Counter"> Counter </Link></h1>
          <h2>{greeting}</h2>
        </div>
    );
  }
}

export default AppRoute;
