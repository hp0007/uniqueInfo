import React from 'react'


const BackText = (props) => {
    return (
        <div>           
                <div className='backtext'>
                        <h1 style={{color:props.color}}>{props.text}</h1>                    
                </div>
        </div>
    )
}

export default BackText;