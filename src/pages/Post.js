import React from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBookmark, faCheck, faCheckCircle, faComment, faEye, faHeart, faInfo, faRetweet, faShare } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@mui/material';


const Post = ( {post}) => {
    console.log(post) 
    const date = new Date()
     const displayData = date.toDateString()
     const displayTime =date.toLocaleTimeString()
  return (<>
  <br></br>
<div> {post.map((p)=> <div className='post'>
      <div className='post-header'> <Avatar  src="https://scontent.fvtz3-1.fna.fbcdn.net/v/t39.30808-6/391663280_3595893324000040_884470087536963792_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_aid=0&_nc_ohc=ZAmjORTBmRoAX9U6_Kf&_nc_ht=scontent.fvtz3-1.fna&oh=00_AfAvGVqGxvDTs9JNpA8OC3BYnbPqKprKoi9_ZUN9RS5IeA&oe=655CC2BB" />
      <b>Rajesh Geesala</b>   <small style={{marginLeft:"5px"}}> @reactJsDeveloper    </small><FontAwesomeIcon icon={faCheckCircle} />  </div>
     <h2 className='post-content'>{p}</h2>
       <small>Posted on <b>  {displayData} </b>   {displayTime}  </small>
     <div className='post-footer'> <center>
<FontAwesomeIcon className='iconP' icon={faRetweet} size='xl' />
<FontAwesomeIcon icon={faComment} className='iconP' size='xl'/> 
<FontAwesomeIcon icon={faEye} size='xl' className='iconP'/>
<FontAwesomeIcon icon={faHeart} size='xl' className='iconP' />
 <FontAwesomeIcon icon={faBookmark} size='xl'className='iconP' />
<FontAwesomeIcon icon={faShare} size='xl' className='iconP' /> <hr></hr> </center></div> </div>)}</div>

    </>
  
  )
}

export default Post ;