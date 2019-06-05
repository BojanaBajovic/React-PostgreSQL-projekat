import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import {
  Input,
} from 'reactstrap'

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
        log_name:'',
        password:'',
        ime:'',
        prezime:'',
        role:'',
        korisnikSaId: null,
        logovan: false,
        postoji: false,
        bazaVrste: [],
        roleSelected: 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit = (e) => {
  e.preventDefault();
  fetch(`/api/korisnik/${this.state.log_name}`)
  .then(res =>res.json())
  .then(res => this.setState({ postoji: res[0] }))
  .then (res => {
    if(!this.state.postoji){
      fetch('/api/korisnik', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          log_ime: this.state.log_name,
          ime: this.state.ime,
          prezime: this.state.prezime,
          vrsta_id: this.state.roleSelected,
          password: this.state.password
        })
      });
      this.props.change(this.state.log_name, this.state.password);
      this.setState ({ logovan: true });
    }
  })
}

handleChange = (e) => {
  this.setState ({ [e.target.id]:e.target.value })
}

  render() {
    let poruka ;    
    if (this.state.logovan) {
      return <Redirect to='/' />
    }
    if ( this.state.postoji ) {
      poruka =<div className="red"> Takav korisnik već postoji</div>
    }
    
    return (
      <div className="container" style={{paddingTop: 100}}>
        <form onSubmit={this.handleSubmit} className="white" style={{padding : 20 }}>
            <h5 className="grey-text text-darken-3">Sign Up</h5>
              <div className="input-field">
                   <label htmlFor="firstName">Ime</label>
                   <input type="text" id="ime" onChange={this.handleChange} required/>
               </div>
               <div className="input-field">
                   <label htmlFor="lastName">Prezime</label>
                   <input type="text" id="prezime" onChange={this.handleChange} required/>
               </div> 
               <div className="input-field">
                   <label>Korisničko ime</label>
                   <input type="text" id="log_name" onChange={this.handleChange} required/>
               </div> 
               <div className="input-field">
                   <label htmlFor="password">Password</label>
                   <input type="password" id="password" onChange={this.handleChange} required/>
               </div>            
               <div className="input-field">
                  <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
               </div> 
        </form>          
          { poruka }
             
      </div>
    )
  }
}

export default SignUp;
