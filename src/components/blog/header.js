import React from 'react'
import {Jumbotron, Carousel} from 'react-bootstrap'

const head = () => {
  return (

      <Carousel style={{marginTop: "80px"}}>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://www.studyrama.com/IMG/arton954.png"
      alt="Bienvenue "
    />
    <Carousel.Caption>
      <h3>Bienvenue</h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://www.studyrama.com/IMG/arton107004.png"
      alt="Chez"
    />
    <Carousel.Caption>
      <h3> Chez </h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100"
      src="https://www.collegeahuntsic.qc.ca/rails_admin_image_manager/6203/dynamic_1440x550%2523/7-etudes-internationales-1440x550.jpg?1641610078&s=dbe26251fd9ba7a9b2711270eadd1ee4d9e94682"
      alt="Job Student"
    />
    <Carousel.Caption>
      <h3> Job Student</h3>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>
     
    
    
  )
}

export default head