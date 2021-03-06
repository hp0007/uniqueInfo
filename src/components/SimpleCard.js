import React from 'react'


const SimpleCard = (props) => {
    return (
        <div>
                <div class="card d-flex">
                    <div className="row" style={{overflow:'hidden'}}>                   
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
