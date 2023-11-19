import React, { useState } from 'react'
import TweetBox from './tweetbox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import Post from './Post';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
 import auth from '../firebase.init';
import { useNavigate } from 'react-router-dom';
import { SignOutHook } from 'react-firebase-hooks/auth';
import { getAuth, signOut } from 'firebase/auth';
const Feed = () => {
  const auth = getAuth()
  const [post, setPost] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const Navigate = useNavigate()
  //logout  function for Logout
  const logOut = (event) =>{
    event.preventDefault()
        signOut(auth).then(() =>{
        alert("Logged out Succesfully ")
           Navigate("/login")
       }).catch((error) => {
        console.log(error)
       })
} ;
  return (<>
    <div className='feed-header'> <h3 className='feed-heading'>NewsFeed</h3>
      <button className="feed-header-icon btn btn-light" onClick={handleShow}>
        <FontAwesomeIcon size='xl' icon={faGear} /></button>
        {/* bs modal */}
        <>
      <Modal show={show} fade onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
           <center> <b>Are You Sure Want to Logout</b></center>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='btn btn-danger' onClick={logOut}>
             Log Out
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
    <div className='feed'>
      <TweetBox post={post} setPost={setPost} />
      {post.length == 0 ? "No Posts" : <Post post={post}></Post>}
    </div>
  </>
  )
}

export default Feed;