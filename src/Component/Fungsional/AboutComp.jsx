import React from 'react'
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';


function AboutComp() {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">About Us!</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="secondary">Learn More</Button>
        </p>
      </Jumbotron>

      <Container>
        <Row>
          <Col>
              <CardComp id ='1' judul='Belajar React' tanggal='05 Januari 2022' isicontent='Samsung Galaxy Note 4 OS Pie Update Cepat!'/>
          </Col>
        
        
          <Col>
              <CardComp id ='1' judul='Belajar Hp' tanggal='07 Januari 2022' isicontent='Kabar berita tentang hp ini menjadi primadona di zamannya!'/>
          </Col>
        
        
          <Col>
              <CardComp id ='1' judul='Belajar Cinta' tanggal='09 Januari 2022' isicontent='Proses perbaikan handpone ini di service center resmi samsung terbaru' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default AboutComp;
