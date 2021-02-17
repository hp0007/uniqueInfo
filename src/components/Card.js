import React from 'react'
import Button from '../components/Button'
import Apple from '../images/laptops/Apple-1.png'


const Card = (props) => {
    return (
        <>
                <div className="col-6 col-sm-6 col-md-3 col-lg-3 text-center">   
                    <div class="card pt-2 pb-2" key={props.value.id}>
                        <img class="card-img-top" src={props.value.path} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{props.value.name}</h5>
                            <p class="card-text">{props.value.subtitle}</p>
                            <p class="card-price">{props.value.price}</p>
                            <Button text='Add to cart'/>
                        </div>
                    </div>
                </div>
        </>
    )
}



export default Card
