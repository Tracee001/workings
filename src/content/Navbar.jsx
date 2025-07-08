import React from 'react';
import { useContext } from 'react';

function Navbar() {
    const UserName = useContext(UserContext);

    console.log(UserName);

return (
    <div style={{display: "flex", gap: "10px",  }}>
    <span >Home</span>

    <span >About</span>

    <span >Contact</span>

    <Mark> Hello {UserName}</Mark>

    </div>
     );
  }

export default Navbar;