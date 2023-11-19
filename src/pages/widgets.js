import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Widgets = () => {
  return (
    <div className='wid'>
      <div className='ww'>
      <div className="widgetSearch">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='search' size="xl" />
        <input className="inputSearch" placeholder="Search Here" type="text" />
      </div>
      <div className='premium'>
        <h4>  <b > Subscribe to Premium</b> </h4>
        <b>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</b>
        <button className='btn btn-dark sButton'>Subscribe</button>
      </div>
      <div className='whatHappen'>
        <h4><b> What's happening</b></h4>
        <small>Trending - 5000 posts</small>
        <h5><b> #Rajesh</b></h5>
        <small>Trending - 3000 posts</small>
        <h5><b> #ReactJS </b></h5>
        <small>Trending - 4000 posts</small>
        <h5><b> #Devolpment </b></h5>
        <small>Trending - 1000 posts</small>
        <h5><b> #Coding </b></h5>
        <small>Trending - 3000 posts</small>
        <h5><b> #WebApps </b></h5>
        <small>Trending - 3000 posts</small>
        <h5><b> #Ind v/s Aus </b></h5>
      </div>

      </div>
    </div>
  )
}

export default Widgets;