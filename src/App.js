import React,{useState} from 'react'
import Loading from './loading.js'
import{BrowserRouter as Router , Switch,Route,Link} from "react-router-dom";
import './App.css';


function App(props) {
  const[loading,setLoading] = useState(false)
  const login = () =>
  {
    try{
      setLoading(true);
var rusers = fetch("https://money-manager21.herokuapp.com/login")
rusers
	.then(function(data)  {
		return data.json()
	})
  .then(function(Users) {
 



    var a = document.getElementById("emailid").value
    var b = document.getElementById("pwd").value
    
    for(var i=0;i<Users.length;i++)
    {
      console.log(Users.length)
  if(a==Users[i].Username && b==Users[i].pwd)
  {
    setLoading(false); 
   alert("login successfull !!!! ")
   props.setstate("Moneymanagerapp")

  
      
    
    break;
  }
  else{
    if(i==Users.length-1)
    {
      setLoading(false); 
    alert("wrong credentials")
    }
   
  }
  
    }
  })
}
catch(error)
            {
                console.log(error)
            }
  }
 

  return (
  
    <div className="App">
      <header className="App-header">
       
      <h1>Login Page</h1>
         </header>
    
    <div>
    <input type="text" placeholder="Enter Username" name="uname" id ="emailid" required></input>
      <input id ="pwd" placeholder="Enter pwd" type="password"></input>
      <button id = "login" for="pwd" for="emailid" onClick={()=>(login())} >login</button>
      {loading === true ? <Loading /> :null}
      <br></br>
      <button><Link to="/forgotview">Forgotpwd</Link></button>
                   
                   
               
    </div>
    
    </div>

  
  );
}

export default App;
