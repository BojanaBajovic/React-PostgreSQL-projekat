import React, { Component } from 'react';

import {
  Container,
  Row,
  Jumbotron,
  InputGroupAddon,
  Button,  
  FormGroup,
  Input,
  Col
} from 'reactstrap';

import povrce from '../../assets/povrce.jpg'
import ImageUpload from '../ImageUpload';

class Pitanja extends Component {
   constructor(props) {
      super(props);
    
      this.state = {
         //bazaVrste:[],
         novoPitanje: '',
         pitanjeSaId: null,
         pitanjaList: [],
         bazaPitanja: [],
         selectedPitanje: null,
         noviTekst: '',
         tekstSaId: null,
         tekstList: [],
         bazaTekstova: [],
         selectedTekst: null
      };
    }
        
   getPitanjaList = () => {
      fetch('/api/pitanja')
      .then(res => res.json())
      .then(res => this.setState({ bazaPitanja: res }))
   }

   getPitanjeByTekst = () => {
      var pit = this.state.novoPitanje;
      var tex = this.state.noviTekst;
      fetch(`/api/pitanja/${pit,tex}`)
      .then(res =>res.json())
      .then(pitanjeSaId => {   
         this.setState({ pitanjeSaId })         
      });
   }

  //  getVrsteList = () => {
  //     fetch('/api/vrste/bezAdmina')
  //     .then(res => res.json())    
  //     .then(res => this.setState({ bazaVrste: res }))
  //  };
//-----------------------------------------------------
   handleInputChange = (e) => {
      this.setState({ newCityName: e.target.value });
   }; 

   handleInputChangePitanje = (e) => {
      this.setState({ novoPitanje: e.target.value });
   };

   handleInputChangeTekst = (e) => {
      this.setState({ noviTekst: e.target.value });
   };

   handleDodajPitanje = () => {
      fetch('/api/pitanja', {
         method: 'post',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ 
            pitanje: this.state.novoPitanje,
            tekst: this.state.noviTekst
          })
      })
      .then(() => fetch(`/api/pitanja/${this.state.novoPitanje, this.state.noviTekst}`))
      .then(res => res.json())
      .then(res => {
         var pitanjeSaId = res[0];
         this.setState({ pitanjeSaId });
         this.setState({ novoPitanje: ''});    //brise tekst pitanja ,ali ima ceo slog u pitanjeSaId
         var tekstSaId = res[0];
         this.setState({ tekstSaId });
         this.setState({ noviTekst: ''});
         this.getPitanjaList(); 
         for (const checkbox of this.selectedCheckboxes) {
            this.handleDodajPV(this.state.pitanjeSaId.id_pitanja, checkbox);
         }      
      })   
   }

  //  handleDodajPV = (pitanje, vrsta) => {
  //     fetch('/api/pv', {
  //        method: 'post',
  //        headers: { 'Content-Type': 'application/json' },
  //        body: JSON.stringify({ pitanje: pitanje, vrsta: vrsta })
  //     })
  //  };

   handleChangePitanja = (e) => {
      var id= e.target.value.split(".");
      // eslint-disable-next-line
      var selectedPitanje = this.state.bazaPitanja.filter(pitanje => pitanje.id_pitanja == id[0])[0];     
      var selectedTekst = this.state.bazaPitanja.filter(tekst => tekst.id_pitanja == id[0])[0];     

      this.setState({ selectedPitanje, selectedTekst })      
   }
//-----------------------------------------------------
   componentDidMount () {
     // this.getVrsteList();
      this.getPitanjaList();
      this.selectedCheckboxes = new Set();
      }

   // za checkboxes  ------------------------------------     
   toggleCheckbox = e => {
      var label = e.target.value;
      if (this.selectedCheckboxes.has(label)) {
         this.selectedCheckboxes.delete(label);
      } else {
         this.selectedCheckboxes.add(label);
      }
   }

   render() {
      // const checkboxes =  this.state.bazaVrste.map((vrsta, i) => 
      // <div  key={i}>
      //   <label style={{marginLeft:20 +'px'}}>                     
      //       <Input type="checkbox" onClick={this.toggleCheckbox} name="radioRole" onChange={this.toggleRadio} value={vrsta.id_vrste} key={vrsta.id_vrste} style={{opacity:1}} />
      //         {vrsta.naziv_vrste}                       
      //   </label>
      // </div>)

      var bg = require('../../assets/logo3.png')

      let selectedObject;
      if (this.state.selectedPitanje) {
         selectedObject = <div className="center" 
         style={{width: 600, padding: 10, paddingBottom: 40, borderTopLeftRadius: 10, borderTopRightRadius:10, fontFamily: 'Euphemia', 
         fontStyle: 'italic', border: '0.5px solid gray', backgroundPositionY: 305,
         fontSize: 26, backgroundColor: 'Moccasin ',  marginLeft: -200, boxShadow: '10px 10px 5px grey',
         backgroundImage: "url("+bg+")", backgroundPosition: 'center norepeat', backgroundSize: 200}}> 
         {this.state.selectedPitanje.pitanje}</div>;
      };

      let selectedObject1;
      if (this.state.selectedTekst) {
         selectedObject1 = <div className="center" 
         style={{width: 600, height: 'auto', padding: 60, textAlign: 'justify', fontFamily: 'Euphemia', fontSize: 16, 
         borderBottomLeftRadius: 10, borderBottomRightRadius: 10, backgroundColor: 'papayaWhip', opacity: 'initial', marginLeft: -200,
         boxShadow: '10px 10px 5px grey', borderLeft: '0.5px solid gray'  }}> 
         {this.state.selectedTekst.tekst}</div>;
      };

      return (
         <Container fluid className="centered" style={{paddingTop: 50, paddingBottom: 50}}>                 
            <Jumbotron>
               <Row>
                  <Col>   
                     <FormGroup>
                        <Input 
                           placeholder="Unesi naslov ..."
                           value={this.state.novoPitanje}
                           onChange={this.handleInputChangePitanje}
                        /><br/>  
                        <Input 
                           placeholder="Unesi recept ..."
                           value={this.state.noviTekst}
                           onChange={this.handleInputChangeTekst}
                        /><br/>                 
                        {/* { checkboxes }  */}
                        <br/> 
                        <InputGroupAddon addonType="append" style={{paddingLeft: 60}}>
                           <Button color="primary" onClick={this.handleDodajPitanje}>Dodaj recept</Button>
                        </InputGroupAddon>
                     </FormGroup>
                     <h1 className="display-4" style={{fontSize: 38, paddingBottom: 30, marginTop: 60}}>Izaberite recept</h1>             
                     <FormGroup>
                        <Input type="select" onChange={this.handleChangePitanja}>
                           { this.state.bazaPitanja.length === 0 && <option>Nisu još dodati recepti.</option> }
                           { this.state.bazaPitanja.length > 0 && <option>Selektuj recept...</option> }
                           { this.state.bazaPitanja.map((pitanje, i) => <option key={i} id={pitanje.id_pitanja}>{pitanje.id_pitanja}. {pitanje.pitanje}</option>) }                 
                        </Input>             
                     </FormGroup>
                     <ImageUpload />
                  </Col>
                  <Col>
                  <FormGroup style={{display: 'inline-block'}}>
                     {selectedObject}
                     {selectedObject1}
                     </FormGroup>
                     </Col>
                  {/* <Col>
                     <h1 className="display-5">Pitanja</h1>             
                     <FormGroup>
                        <Input type="select" onChange={this.handleChangePitanja}>
                           { this.state.bazaPitanja.length === 0 && <option>Nisu još dodata pitanja.</option> }
                           { this.state.bazaPitanja.length > 0 && <option>Selektuj pitanje.</option> }
                           { this.state.bazaPitanja.map((pitanje, i) => <option key={i} id={pitanje.id_pitanja}>{pitanje.id_pitanja}. {pitanje.pitanje}</option>) }                 
                        </Input>             
                     </FormGroup>
                  </Col> */}
               </Row>
            </Jumbotron>
            {/* <Jumbotron style={{width: 700, height: 700, display: 'inline-block'}}>
               {selectedObject}
               {selectedObject1}

            </Jumbotron>    */}
         </Container>
      );
   }
}
export default Pitanja;