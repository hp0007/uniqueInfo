import React from 'react'
import {AiOutlineFacebook} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import Input from '../components/Input'
import Button from '../components/Button'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <h4>UniqueInfo</h4>
                        <div className="row">
                            <i><AiOutlineFacebook /></i>
                            <i><AiOutlineInstagram /></i>
                            <i><FiTwitter /></i>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <p>Get In Touch</p>
                        <div className="content d-flex">
                            <Input typ="email"  place="Enter your email "/>
                            <Button text='Send'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
