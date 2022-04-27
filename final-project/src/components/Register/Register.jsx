
import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';



export default function Register() {

let navigate= useNavigate()
  const [errorList, setErrorList] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState('');

const [user, setUser] = useState({
  first_name:'',
  last_name:'',
  age:0,
  email:'',
  password:''
});

function getUser(e){
let myUser={...user};
myUser [e.target.name]= e.target.value;
setUser(myUser);
//console.log(user)
}
async function submitRegister(e){
e.preventDefault();
setIsLoading(true);
let validationResult=validateRegisterForm(user);
if (validationResult.error){
  
  setIsLoading(false);
setErrorList(validationResult.error.details)
}
else{

 let {data}= await axios.post('https://route-egypt-api.herokuapp.com/signup', user);
 if(data.message === 'success'){
navigate('/Login');


setIsLoading(false)
 }
 else{
   setError(data.message);
   setIsLoading(false)

 }
}

}

function validateRegisterForm(user){
  let schema= Joi.object({
    first_name: Joi.string().alphanum().min(3).max(8).required(),
    last_name: Joi.string().alphanum().min(3).max(8).required(),
    age: Joi.number().min(16).max(80).required(),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9]{3,30}$/)).required(),
 


  });
  return schema.validate(user, {abortEarly:false});
}


  return (
    <div>
<h2 className='my-3'>Register Now</h2>
{errorList.map((error,index) =>{

if(index===4){
  return <div key={index} className='alert alert-danger'> Password required</div>
}
else{

return <div key={index} className='alert alert-danger'> {error.message}</div> 
}

  
}
 )}

{error?<div className='alert alert-danger'>{error}</div>:''}

      <form className='py-4' onSubmit={submitRegister}>

<label htmlFor="first_name"> First Name: </label>
<input type="text" onChange={getUser} id='first_name' className='form-control my-3' name='first_name' />

<label htmlFor="last_name"> Last Name: </label>
<input type="text" onChange={getUser} id='last_name' className='form-control my-3' name='last_name' />

<label htmlFor="age"> Age: </label>
<input type="number" onChange={getUser} id='age' className='form-control my-3' name='age' />

<label htmlFor="email"> Email: </label>
<input type="email" onChange={getUser} id='email' className='form-control my-3' name='email' />

<label htmlFor="password"> Password: </label>
<input type="password" onChange={getUser} id='password' className='form-control my-3' name='password' />
<button  type='submit' className='btn btn-outline-info'>{isLoading? <i className='fas fa-spinner fa-spin'></i>:"Register"}    </button>
      </form>
    
    </div>
  )
}
