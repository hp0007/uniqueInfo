import React from 'react'
import Zoom from 'react-reveal'


const SimpleCard = (props) => {
    return (
        <div>
           <div class="card d-flex">
               <div className="row">
                   
                        <i>{props.icon}</i>
                        <div class="card-body">
                            <h5 class="card-title">{props.title}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">{props.subTitle}</h6>
                        </div>
                </div>
            </div>            
        </div>
    )
}

export default SimpleCard
