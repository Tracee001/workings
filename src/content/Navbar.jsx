import React from 'react';
import { useContext } from 'react';
import { UserContext } from './Usercontext';

function Navbar() {
    const UserName = useContext(UserContext);   

    console.log(UserName);

return (
    <div style={{display: "flex", gap: "10px",  }}>
    <span >Home</span>

    <span >About</span>

    <span >Contact</span>

  Hello <mark> {UserName}</mark>

    </div>
     );
  }

export default Navbar;