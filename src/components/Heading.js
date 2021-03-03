import React from 'react'
    
 

const Heading = (props) => {
    return (
        <div>
            <div className="container-fluid  heading" style={{color:props.color}}>
                <h4>{props.title}</h4>
                <p>{props.subTitle}</p>
            </div>
        </div>
    )
}

export default Heading
