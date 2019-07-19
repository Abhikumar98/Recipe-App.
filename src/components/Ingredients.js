import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Ingredients =(props)=>{
    return(
        <div id="ingredients" className="border p-2">
            <ListGroup>
                <h6>Ingredients : </h6>
                {
                    props.ingredients.map((item) =><ListGroup.Item>{item}</ListGroup.Item>)
                }
                <ListGroup.Item>{props.item}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Ingredients