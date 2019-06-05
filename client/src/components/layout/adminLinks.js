import React from 'react';
import {NavLink} from 'react-router-dom';

const AdminLinks = (props)=> {
   return(
      <ul className="right" >
         {/* <li><NavLink to='/pitanja'>Pitanja</NavLink></li> */}
         <li><NavLink to='/vreme1'>Vreme1</NavLink></li>

      </ul>
   )
}

export default AdminLinks;