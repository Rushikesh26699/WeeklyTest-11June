import React from 'react';
import "./Nav.css"


function Nav(props) {
    return (
       
        <div className='navbar'>
           <div className='nav1' style={{width:"60%"}}>
              <h2 style={{color:"white"}}>Geekster</h2>
           </div>
            <div className='nav2'style={{width:"40%"}}>
            <button>Home</button>
            <button style={{backgroundColor:"white",color:"black"}}>Users</button>
            <button>Profile</button>
            <button>Contact</button>
            </div>
        </div>
        
    );

}


export default Nav;