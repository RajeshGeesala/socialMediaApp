import React, { useState } from 'react';
import { twitterImg } from '../images';
import GoogleButton from "react-google-button"
// import { useCreateUserWith  ,useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
const Signup = () => {
    const [data, setData] = useState({
        email: '', password: "", username: " "
    });
    const navigate = useNavigate()
    const { email, password, username } = data;
    //creATINg user 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    //  use sign in with google
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    /// conditional for 
    if (error || gError) { console.log(error) };
    if (loading || gLoading) { console.log("...Loading") }
    if (user || gUser) { console.log(user); console.log(gLoading) }
    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    //submit handler for signup form
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(data);
        console.log("user" + user); console.log("error is" + error)
        createUserWithEmailAndPassword(email, password);
        if (username.length <=6 || username.length ==0) {
           alert("User Name Should Be Minimum 6 letters") }
        //  if (password.length < 6 || password.length || 0 )    {
        //     alert("Password Should Be Minimum 6 letters")} 
            else( navigate("/"))  };
    if (user) { <Navigate to="/home"></Navigate>}
    //google signIn
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        await signInWithGoogle() }
    return (
        <div className='signup-container row'>
            <div className='image-containers col-md-6' >
                <img src={twitterImg} className='image'></img>
            </div>
            <div className='SignupForm-container col-md-6'><br></br>
                <h1><b>Happening Now </b></h1>
                <h2> <b>Join today.</b></h2>
                <form className='form' onSubmit={submitHandler}>
                    <input required className='form-control'
                        type='text' placeholder='User Name'
                        name='username'
                        onChange={changeHandler} ></input> <br></br>
                    <input required className='form-control'
                        type='email' placeholder='Enter Your Mail'
                        name='email'
                        onChange={changeHandler}></input> <br></br>
                    <input required className='form-control'
                        type='password'
                        placeholder='Enter Your Password'
                        name="password" onChange={changeHandler}></input>
                    <br></br>
                    <input type='submit' className='signUp btn btn-info' value="Create Account" /><br></br>
                    <br></br>
                    <small>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</small>
                </form>
                <hr />
                <div className='google'> <GoogleButton className='g-btn' onClick={handleGoogleSignIn} /></div>
                <br></br>
                <div> <b className='already'>Already Have An Account?</b>
                    <Link to="/login" className='signInBtn'> <br></br><button className='btn btn-info'>Sign-In
                    </button></Link>
                </div>
            </div>
            <p> About
                Download the  app
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
                © 2023 X Corp. </p>
        </div>
    )
}

export default Signup 