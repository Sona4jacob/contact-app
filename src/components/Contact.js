import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Contact({item}) {
  return (
    <div>
<Link to={`/view/${item.mobile}`} style={{textDecoration:'none'}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.profile} style={{width:'100%',height:'350px'}}/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
      </Card.Body>
    </Card>
</Link>
    </div>
  )
}

export default Contact