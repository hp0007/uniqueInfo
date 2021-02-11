import React from 'react'
import Fade from 'react-reveal/Fade';
 

const Heading = (props) => {
    return (
        <div>
            <div className="container-fluid  heading" style={{color:props.color}}>
            <Fade left>
                <h4>{props.title}</h4>
                <p>{props.subTitle}</p>
            </Fade>
            </div>
        </div>
    )
}

export default Heading
