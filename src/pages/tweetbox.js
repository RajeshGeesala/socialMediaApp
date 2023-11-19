import React, { useState } from 'react'
import { Avatar } from '@mui/material';

const TweetBox = ({ post, setPost }) => {
    const [inputPost, setInputPost] = useState(' ');
    const submit = (e) => {
        e.preventDefault();
        let data = post.slice();
        data.push(inputPost);
        setPost(data);
        setInputPost("");
    }
    
    return (
        <form className='tweet-form' >
            <div className='tbc'>
                <div className='avatar'>
                    <Avatar src="https://scontent.fvtz3-1.fna.fbcdn.net/v/t39.30808-6/391663280_3595893324000040_884470087536963792_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_aid=0&_nc_ohc=ZAmjORTBmRoAX9U6_Kf&_nc_ht=scontent.fvtz3-1.fna&oh=00_AfAvGVqGxvDTs9JNpA8OC3BYnbPqKprKoi9_ZUN9RS5IeA&oe=655CC2BB" ></Avatar>
                </div>
                <input type='text' className='twitterinbox' required placeholder="Hey! What's on your mind" value={inputPost} onChange={(e) => setInputPost(e.target.value)} />
                <b><hr /></b>
            </div>
            <center> <button type="submit" className='btn btn-info postB' onClick={submit}> Post</button></center>
        </form>
    )
}

export default TweetBox 