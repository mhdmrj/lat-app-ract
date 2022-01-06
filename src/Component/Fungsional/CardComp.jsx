import React from 'react'
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,Button,
  CardTitle, CardSubtitle
} from 'reactstrap';



function CardComp(props) {
  return (
    <div>
      <Card>
      <CardImg width="100%" src="https://images.samsung.com/is/image/samsung/id-galaxy-note-4-n910h-sm-n910hzwexse-000264781-front-black?$330_330" alt="Card image cap" /> 
      <CardBody>        
        <CardTitle tag="h5">{props.judul}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{props.tanggal}</CardSubtitle>       
        <CardText>{props.isicontent}</CardText>
          <Button >
            <Link to = {
              {
                pathname : `/detail/${props.id}`,
                state: {
                  judul: props.judul,
                  tanggal: props.tanggal,
                  isicontent: props.isicontent
                }

              }                
                
            }>Detail </Link>
          </Button>
        </CardBody>
      </Card>
    </div>
  )
}


export default CardComp;