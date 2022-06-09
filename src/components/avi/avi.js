import ReactCardFlip from 'react-card-flip';
import React from 'react';
import {Card} from 'react-bootstrap'
import Image from '../../pages/noAvatar.jpg'
import './avi.css'


class Avi extends React.Component {
    constructor() {
      super();
        this.state = {

        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
          <div onMouseEnter={this.handleClick}>
                  
        <Card className='card-avi'>
          <Card.Img variant="top" src={`http://localhost:9999/images/${this.props.Image}`} className='imag-avi' />
          <Card.Body>
            <Card.Title>{this.props.prenom +" "+this.props.nom}</Card.Title>

          </Card.Body>
        </Card>

          </div>
  
          <div onMouseLeave={this.handleClick}>
          <Card className='card-avi' >
          <Card.Body>
            <Card.Text>
              {/* Some quick example text to build on the card title and make up the bulk of
              the card's content. */}
              {this.props.text}
            </Card.Text>
          </Card.Body>
        </Card>
          </div>
        </ReactCardFlip>
      )
    }
  }
  export default Avi ;