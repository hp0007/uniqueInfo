import React from 'react'
import LightSpeed from 'react-reveal/LightSpeed';

const BackText = (props) => {
    return (
        <div>
             <LightSpeed>
                <div className='backtext'>
                        <h1 style={{color:props.color}}>{props.text}</h1>                    
                </div>
                </LightSpeed>
            
        </div>
    )
}

export default BackText;