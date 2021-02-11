import React from 'react'
import Card from '../components/Card'

const Cards = (props) => {
    
    return (  
        <div className='row pb-5'>
            {
                props.datafirst.map(data => {
                    return(
                        <Card value={data} />
                    )
                })
            }
        </div>
    )
}

export default Cards
