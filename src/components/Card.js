import React from 'react'
import Zoom from 'react-reveal/Zoom'


const Card = (props) => {
    return (
        <>          
            <Zoom>
                <div className="col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 text-center mb-4">   
                    <div class="card pt-2 pb-2" key={props.value.id}>
                        <img class="card-img-top" src={props.value.path} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{props.value.name}</h5>
                            <p class="card-text">{props.value.subtitle}</p>
                            <p class="card-price">{props.value.price}</p>
                        </div>
                    </div>
                </div>
            </Zoom>
        </>
    )
}



export default Card
