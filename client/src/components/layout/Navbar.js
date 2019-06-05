import React from 'react';
import {NavLink} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import AdminLinks from './adminLinks';
const Navbar = (props)=> {
  
   const { log_name, role, ime} = props;
   const adLinks = role === 0  ?  <AdminLinks log_out={props.log_out}/> : null ;
   const links = log_name ?  <SignedInLinks log_out={props.log_out}/> : <SignedOutLinks/>;
   const name = log_name ?  log_name  : 'Nije logovan';
   const dugme = ime ?  ime  : 'NN';

  
   return(      
      <nav className="nav-wrapper red darken-3">
      
         <div className="container">
            

            <div style={{textAlign: 'right'}}>
               <NavLink to='/' className='btn-floating red lighten-2 center' style={{marginRight: 25}}>{dugme}</NavLink> { name }  { links } { adLinks }
            </div>
            <div style={{marginTop: -63, fontSize: 18}}>
               <NavLink to = '/vreme'>Vreme</NavLink>
            </div>
            <div style={{marginTop: -45, fontSize: 18}}>
               <NavLink to = '/' style={{backgroundColor: 'black', padding: 25, fontSize: 25, 
               borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginLeft: 100}}>Home page</NavLink>
            </div>        

                      
         </div>
      </nav>
   )
}

export default  Navbar;