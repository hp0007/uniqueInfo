import React from 'react'
import Zoom from 'react-reveal/Zoom';

const OfferCard = (props) => {
    return (
        <div>
            <Zoom>
            <img src={props.image}/>            
            </Zoom>
        </div>
    )
}

export default OfferCard
