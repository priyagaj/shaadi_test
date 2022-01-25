import React,{useState,useEffect} from 'react';
import './Login.css'
const Login = ({history}) => {
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const login = (e) => {
        e.preventDefault();
        console.log('username')
        if(username && password){
            console.log('inside if',username)
            setUserName('')
            setPassword('')
            history.push('/users')
        }  
    }
    return(
        <div className='mainDiv'> 
            <div className='loginBox'>
            <div className='loginText'>Shaadi.com</div>
            <form onSubmit={login}>
            <input type='text' placeholder='User Id' className='inputDiv' 
            onChange={(e) => setUserName(e.target.value)}
            value={username}
            required/><br></br><br></br>
            <input type='password'  placeholder='Password' className='inputDiv' 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required/><br></br><br></br>
            <button type='submit' className='loginBtn'>Log in</button>
            </form>
            </div>
        </div>
    )
}

export default Login;