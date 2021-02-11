import React from 'react'
import Button from '../components/Button'
import Apple from '../images/laptops/Apple-1.png'

const Card = () => {
    return (
                <div className="col-6 col-sm-6 col-md-3 col-lg-3 text-center">    
                    <div class="card pt-2 pb-2">
                        <img class="card-img-top" src={Apple} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example</p>
                            <Button text='Add to cart'/>
                        </div>
                    </div>
                </div>
    )
}

export default Card
