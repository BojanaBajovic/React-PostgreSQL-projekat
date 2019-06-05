import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Pitanja from './components/adminScreen/pitanja';
import WeatherApp from './components/WeatherApp';
import WeatherApp1 from './components/adminScreen/WeatherApp1';
import Footer from './components/layout/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_korisnik: null,
      log_name: null,
      ime: null,
      prezime: null,
      role: null,
      postoji:false
    }
    this.changeUser = this.changeUser.bind(this);
    this.log_out = this.log_out.bind(this);
  }

  changeUser(log_ime, password){
    fetch(`/api/korisnik/${log_ime}/${password}`)
    .then(res =>res.json())
    .then (res => {
      this.setState({  
        id_korisnik: res[0].id_korisnik,     
        log_name : res[0].log_ime,
        ime: res[0].ime,
        prezime: res[0].prezime,
        role: res[0].vrsta_id            
      });
        return
      })      
  }   
  
  log_out(){
    this.setState ({
      id_korisnik: null,
      log_name: null,
      ime: null,
      prezime: null,
      role: null    
    });
  }  


  render() {
    return ( 
      <BrowserRouter>
        <div className="App">  
            <Navbar log_out ={this.log_out} log_name={this.state.log_name} role={this.state.role} ime={this.state.ime}/>
            <br/><br/>
            {/* <NavLink to='/' className='btn-floating pink lighten-1 center'>{this.state.ime}</NavLink> */}
            {this.state.log_ime}
            <Switch>
              
              <Route exact path="/" render={(props) => <Dashboard {...props} userId={this.state.id_korisnik} ime={this.state.ime}/>}/>
              <Route path="/vreme" render={(props) => <WeatherApp {...props} />} />
              <Route path="/vreme1" render={(props) => <WeatherApp1 {...props} />} />


              <Route path="/pitanja" component={Pitanja} />
              
              <Route path="/signin" render={(props) => <SignIn {...props} change={this.changeUser} ime={this.state.ime} />}/>
              <Route path="/signup" render={(props) => <SignUp {...props} change={this.changeUser} />}/>
              
            </Switch>
            <Footer />  

        </div> 
      </BrowserRouter>       
    );
  }
}

export default App;