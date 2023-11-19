import React, { useState } from 'react';
import { twitterImg } from '../images';
import { useCreateUserWithEmailAndPassword ,useSignInWithGoogle ,useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import GoogleButton from "react-google-button"
import { Navigate, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Login = () => {

    const [data, setData] = useState({  email: '', password: "" });
    const { email, password } = data;
    const navigate = useNavigate()
    //  use sign in with google
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    } ;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      if (gUser||user) { <Navigate to="/"></Navigate>}
        if (error || gError) { console.log(error) ;
             console.log(gError)}
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(data) ;
        // console.log(user)
       navigate("/")
        signInWithEmailAndPassword(email ,password)
    };
    //google sign in 
    const handleGoogleSignIn = async (e) => {
        e.preventDefault() ;
         await signInWithGoogle() 
         console.log(gError)
       }
    return (
        <>
        <div className='login-container row'>
            <div className='image-containerL col-md-6' >
                <img src={twitterImg}></img>
            </div>
            <div className='login-form-container col-md-6'> <h1>Login</h1>
                <form onSubmit={submitHandler}>
                    <input className='form-control' type='email' placeholder='Enter Your Mail' name='email' onChange={changeHandler}></input> <br></br>
                    <input className='form-control'  type='password' placeholder='Enter Your Password' name="password" onChange={changeHandler}></input> <br></br>
                    <div >
                        <input type='submit' className='btn btn-info'/>
                    </div>
                </form>
                <hr />
                <div className='google'> <GoogleButton className='g-btn' onClick={handleGoogleSignIn} /></div>
                <b className='already'>Don't Have An Account?</b>
                <Link to="/signup" className='signInBtn'> <br></br><button className='btn btn-info'>Sign Up</button></Link>
            </div><br></br><br></br>
        </div>
         <p className='footer'> About
         Download the app
         Help Center
         Terms of Service
         Privacy Policy
         Cookie Policy
         Accessibility
         Ads info
         Blog
         Status
         Careers
         Brand Resources
         Advertising
         Marketing
         X for Business
         Developers
         Directory
         Settings
         © 2023 X Corp. </p> </>
    )
}

export default Login;