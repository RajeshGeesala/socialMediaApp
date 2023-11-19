import React from 'react'
import "./sidebaroptions.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faEnvelope, faGear, faHome, faInfo,  faListSquares, faPodcast, faSearch, faStickyNote, faUsers } from '@fortawesome/free-solid-svg-icons';
const SidebarOptions = () => {
    return (
        <div>
            <p>  <FontAwesomeIcon className='icon' icon={faHome} size='2xl' /></p>
            <p> <FontAwesomeIcon className='icon' icon={faSearch} size='2xl' /></p>
            <p> <FontAwesomeIcon className='icon' icon={faBell}size='2xl' /></p>
            <p>  <FontAwesomeIcon className='icon'  icon={faEnvelope}size='2xl' /></p>
            <p> <FontAwesomeIcon  className='icon' icon={faListSquares} size='2xl'/></p>
             <p><FontAwesomeIcon className='icon'  icon={faStickyNote}  size="2xl"/> </p>
            <p> <FontAwesomeIcon className='icon' icon={faUsers} size='2xl' /></p>
            <p> <FontAwesomeIcon className='icon' icon={faInfo} size='2xl' /></p>
            <p> <FontAwesomeIcon className='icon' icon={faPodcast} size='2xl' /></p>
            <p> <FontAwesomeIcon className='icon' icon={faGear} size='2xl' /></p>
        </div>
    )
}

export default SidebarOptions;