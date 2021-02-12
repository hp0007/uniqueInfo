import React from 'react'

const Input = (props) => {
    return (
        <div>
            <input type={props.typ}  placeholder={props.place}/>
        </div>
    )
}

export default Input
