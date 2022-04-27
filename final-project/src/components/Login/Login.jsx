import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';



export default function Login(props) {

  let navigate= useNavigate()
  const [errorList, setErrorList] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState('');

const [user, setUser] = useState({
  email:'',
  password:''
});

function getUser(e){
let myUser={...user};
myUser [e.target.name]= e.target.value;
setUser(myUser);
//console.log(user)
}
async function submitLogin(e){
e.preventDefault();
setIsLoading(true);
let validationResult=validateLoginForm(user);
if (validationResult.error){
  setIsLoading(false);
setErrorList(validationResult.error.details)
}
else{

 let {data}= await axios.post('https://route-egypt-api.herokuapp.com/signin', user);
 if(data.message=='success'){

localStorage.setItem('userToken' ,data.token);
props.getUserData();
navigate('/home');
setIsLoading(false)
 }
 else{
   setError(data.message);
   setIsLoading(false)

 }
}

}

function validateLoginForm(user){
  let schema= Joi.object({
   
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9]{3,30}$/)).required(),
 


  });
  return schema.validate(user, {abortEarly:false});
}


  return (
    <div>
<h2 className='my-3'>Login Now</h2>
{errorList.map((error,index) =>{

if(index==4){
  return <div key={index} className='alert alert-danger'> Password required</div>
}
else{

return <div key={index} className='alert alert-danger'> {error.message}</div> 
}

  
}
 )}

{error?<div className='alert alert-danger'>{error}</div>:''}

      <form className='py-4' onSubmit={submitLogin}>


<label htmlFor="email"> email: </label>
<input type="email" onChange={getUser} id='email' className='form-control my-3' name='email' />

<label htmlFor="password"> password: </label>
<input type="password" onChange={getUser} id='password' className='form-control my-3' name='password' />
<button  type='submit' className='btn btn-outline-info'>{isLoading? <i className='fas fa-spinner fa-spin'></i>:"Login"}    </button>
      </form>
    
    </div>
  )
}
