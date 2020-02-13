import React, {  useState } from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  var text = "ToT"
  if(props.firststate)
    text=props.firststate;
    
  const[name,setName] = useState(text);
  console.log(props.firststate);

  setTimeout(() => {
    setName(props.secondstate);
  }, 1000);//
    return(
        <div>
          <h1> Chatchai HelloWorld</h1>
          <h2>{name}</h2>
          <button onClick={() => setName(props.clickstate)}>
              Click me
          </button>
          <h1><Link to="/"> Home </Link></h1>
        </div>
    );
}

//class Header extends Component{
//  constructor(){
//    super(); // default constructor class แม่ Component
//    this.state={
//        name:"Name of State",
//        count:0
//    };
//  }
//  render(){
//    setTimeout(() => {
//      this.setState({name:"Change Name On State"});
//    }, 1000);//
//
//    return(
//        <div>
//          <h1> Chatchai HelloWorld</h1>
//          <h2>{this.state.name}</h2>
//        </div>
//    );
//  }
//}

export default Header;  
  
