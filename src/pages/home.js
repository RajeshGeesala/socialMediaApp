import React from 'react'
import Sidebar from './sidebar';
import Feed from './feed';
import Widgets from './widgets';

const Home = () => {
  return (
    <div>
     <div className='container home'>
      <div className='col-md-1'><Sidebar></Sidebar></div>
       <div className='col-md-8'> <Feed>  </Feed></div>
       <div className='col-md-3 classW'> <Widgets></Widgets></div>
     </div>
   </div>
  )
}

export default Home ;