import React, { Component } from 'react'
import Slider from './slider'
import Slider2 from './slider2'
import H1 from './Titres/h1'
import H2 from './Titres/h2'
import {Container, Col, Row} from 'react-bootstrap'

export class avis extends Component {

  render() {
    return (
     
            <div>
               
              <H1/>
              <Slider />
              <H2/>
              <Slider2 />
              </div>
  
      
    )
  }
}

export default avis