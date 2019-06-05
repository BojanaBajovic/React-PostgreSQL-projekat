import React, { Component } from 'react'
import picture from '../../assets/picture.gif'
import slika1 from '../../assets/slika1.jpg'
import slika2 from '../../assets/slika2.jpg'
import slika12 from '../../assets/slika12.jpg'
import slika8 from '../../assets/slika8.jpg'
import slika5 from '../../assets/slika5.jpg'
import slika6 from '../../assets/slika6.jpg'
import spices from '../../assets/spices.jpg'
import logoKuvar from '../../assets/logoKuvar.png'
import logo222 from '../../assets/logo222.jpg'
import logo333 from '../../assets/logo333.png'

import Pitanja from '../dashboard/pitanja';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


class Landing extends Component {
    render () {

        const styles = {
            img: {
                position: 'relative',
                float: 'left',
                width:  600,
                height: 280,
                backgroundPosition: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                margin: 10
            }
          };

        return (
            <div>
            <div style={{marginTop: -40}}>
                    <div style={{width: 400, float: 'left', paddingTop: 270, paddingLeft: 160}}>
                        <h1 style={{fontFamily: 'Cambria', fontSize: 60}}>Welcome</h1>
                    {/* <img src={logo222} alt="" style={{width: 200, transform: 'rotate(-45deg)', marginTop: 60, marginLeft: 150}}  /> */}
                    </div>
                    <div style={{display: 'inline-block'}}>
                    <img src={logoKuvar} alt="" style={{width: 300, marginLeft: -100, marginTop: -30}}  />
                    </div>
                    <div style={{transform: 'rotate(180deg)', marginLeft: 358, display: 'inline-block'}}>
                    <img src={spices} alt="" style={{width: 400, marginTop: 100}}  />
                    </div>
                </div>
                <hr style={{marginTop: -66}}/>
        <MDBContainer className="mt-5" style={{paddingTop: 60, paddingBottom: 60}}>
            <MDBRow>
            <MDBCol lg="4" md="12" className="mb-4">
                <img src={slika8} className="img-fluid z-depth-3" alt="" style={styles.img} />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4">
                <img src={slika2} className="img-fluid z-depth-1-half" style={styles.img} alt="" />
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4">
                <img src={slika12} className="img-fluid z-depth-2" style={styles.img} alt="" />
            </MDBCol>
            </MDBRow>
            <MDBRow>
            <MDBCol lg="4" md="6" className="mb-4">
                <img src={slika5} className="img-fluid z-depth-4" alt="" style={styles.img} />
            </MDBCol>
            <MDBCol lg="4" md="12" className="mb-4">
                <img src={slika1} className="img-fluid z-depth-1" alt="" style={styles.img}/>
            </MDBCol>
            <MDBCol lg="4" md="6" className="mb-4">
                <img src={slika6} className="img-fluid z-depth-5" alt="" style={styles.img} />
            </MDBCol>
            </MDBRow>
      </MDBContainer>
      <div>
        <Pitanja />
      </div>
    </div>
    );
  }
}

export default Landing