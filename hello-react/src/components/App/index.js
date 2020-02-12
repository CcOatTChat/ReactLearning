import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header';

import Person , { firstname , lastname}  from '../../Person';
import axios from 'axios';
import * as mysql from 'mysql';

//console.log(`${firstname}  ${lastname}`);
//console.log(`${Person.firstname}  ${Person.lastname}`);
//console.log(Person);

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
//  
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
//}

class AppRoute extends Component{

  state ={
    persons:[],
    name: null
  }

  //constructor(props) {
	//	super(props);
	//	this.state = {
	//		name: null
	//	};
	//}

  componentDidMount(){
    console.log("run");
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      const persondata =res.data;
      this.setState({persons : persondata})
    })
  }

  //async componentDidMount() {
	//	try {
	//		let r = await fetch('/api/hello');
	//		let name = await r.json();
	//		this.setState({ name });
	//	} catch (error) {
	//		console.log(error);
	//	}
	//}

  // Higher Order Functions // function in function

  render(){
		//<main className="container my-5">
		//		<h1 className="text-primary text-center">Hello {this.state.name}!</h1>
		//</main>

    const arr =[1,2,3,4];
    const arrMultiply = arr.map(function(number){
      return number * number;
    });
    
    const getGreeting = (text) => {
      //return `Welcome to ` + text;
      return `Welcome to ${text}`; // alt + 96
    }

    const greeting = getGreeting('JavaScript');

    var users = [
      { name : "DevOatT" , isDev:true},
      { name : "oOatT" , isDev:true},
      { name : "HulaaHoop" , isDev:true},
      { name : "Assasin" , isDev:false},
    ];

    // Ternary Operator     // if else แบบสั้น  ||    ___ ? _T_ : _F_  ||  __ && T
    const showUsers = true;

    const numbers = [10,20,30,40];
    const result = numbers.reduce((sum,number) => {
      return sum + number; 
    }, 0)

    // Spread Operator ...
    const name = "chatchai";
    const charactor = [...name];
    //console.log(charactor);   // string => array

    const items = ['this','is','a','book'];
    //console.log(items);
    //console.log(...items); // array => string

    const numbersList = [5,10,20,30,55];
    //console.log(Math.max(...numbersList));
    //console.log(numbersList);
    //console.log(...numbersList);

    const obj1 = { firstname: 'Cc', body: 'smart', age : 26};
    const obj2 ={ lastname:'tail', gender : 'M'}
    //console.log(obj2);

    const newObj = {...obj1,...obj2,planet:'Earth'};
    //console.log(newObj);

    // Destructuring  -- Copy item ojb or array
    const address = [123,'sanpatong','chiangmai'];
    const [ houseNo,  ,city ] = address;
    //console.log(houseNo  , city);

    const {firstname ,age} = obj1;
    //console.log(firstname  , age);

    return(
        <div>
            <h1>learn react {this.state.name}</h1>
            {arrMultiply}
            {this.state.persons.map(person => <li key={person.id}>{person.name}</li>)}

            <h1><Link to="/header"> Header </Link></h1>
            <h1><Link to="/content"> Content </Link></h1>
            <h1><Link to="/footer"> Footer </Link></h1>
            <h1><Link to="/Counter"> Counter </Link></h1>
            <h2>{greeting}</h2>
            {
              showUsers ? (
                <ul>
                {users.filter(user => user.isDev).map(user => <li key={user.name}>{user.name}</li>)}
                </ul>
              ) : (
                null
              )
            }
            {result}
        </div>
    );
  }
}

export default AppRoute;
