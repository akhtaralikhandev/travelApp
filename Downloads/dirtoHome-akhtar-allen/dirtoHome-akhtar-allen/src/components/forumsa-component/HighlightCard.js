import React from 'react'
import '../../assets/css/forumsa/HighlightCard.css'
import Card from 'react-bootstrap/Card'



function HighlightCard(props) {
    
    return (
        <div>
            
            <Card style={{ width: '15rem' , border: 'none'}} className='hightlight-card'>
            <Card.Img variant="top" src={props.data.img} />
            <Card.Body>
                <Card.Title>{props.data.heading}</Card.Title>
                <Card.Text>
                {props.data.detail}
                </Card.Text>
              
            </Card.Body>
            </Card>
        </div>
    )
}

export default HighlightCard
