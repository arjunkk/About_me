import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Nav=()=>{
    const [views,setViews]=useState(0)
    function updateviewscount(){
        setViews(views+1);
    }
    return(
        <div className='header'>
            <ul className='Nav-ul'>
                <li onClick={updateviewscount}><Link to='/'>Home</Link> </li>
                <li><Link to='/Education'>Education</Link> </li>
                <li><Link to='/Skills'>Skills</Link> </li>
                <li><Link to='/Projects'>Projects</Link> </li>
                <li><Link to='/Certifications'>Certifications</Link> </li>
                <li><Link to='/Contact'>Contact</Link> </li>
                <li>No. of visits: {views}</li>
            </ul>
        </div>
    )
}

export default Nav;