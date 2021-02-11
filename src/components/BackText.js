import React from 'react'

const BackText = (props) => {
    return (
        <div className='backtext'>
            <h1 style={{color:props.color}}>{props.text}</h1>
        </div>
    )
}

export default BackText;