import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import main_img from '../images/laptops/Apple-1.png'
import BackText from '../components/BackText'
import {BsArrowRight} from 'react-icons/bs'
import Heading from '../components/Heading'
import SimpleCard from '../components/SimpleCard'
import Cards from '../components/Cards'
import {GoKeyboard} from 'react-icons/go'
import {CgMouse} from 'react-icons/cg'
import {BsLaptop} from 'react-icons/bs'
import {FiCpu} from 'react-icons/fi'
import {BiCctv} from 'react-icons/bi'
import {FaHeadphonesAlt} from 'react-icons/fa'
import OfferCard from '../components/OfferCard'
import laptop1 from '../images/laptops/hp-3.jpg'
import keyboard1 from '../images/keyboard/keyboard-4.jpg'
import mouse1 from '../images/mouse/mouse-4.jpg'
import cpu1 from '../images/cpu/cpu-2.jpg'
import hp from '../images/logos/hp.png'
import asus from '../images/logos/asus.png'
import jbl from '../images/logos/jbl.png'
import dell from '../images/logos/dell.png'
import philips from '../images/logos/philips.png'
import lenovo from '../images/logos/lenovo.png'
import sony from '../images/logos/sony.png'
import apple from '../images/logos/apple.png'
import Slider from '../components/Slider'
import pc_3 from '../images/laptops/Apple-3.jpg'
import Bounce from 'react-reveal/Bounce';
import Zoom from 'react-reveal/Zoom';

 

const Home = () => {
    let cardContent = {
        newArri: [
          { id: 1, name: "First",subtitle:'Subtitle', path: pc_3, price: "$1500" },
          { id: 2, name: "Second",subtitle:'Subtitle', path: pc_3, price: "$1200" },
          { id: 3, name: "Third",subtitle:'Subtitle', path: pc_3, price: "$1600" },
          { id: 4, name: "Four",subtitle:'Subtitle', path: pc_3, price: "$900" },
          { id: 5, name: "Five",subtitle:'Subtitle', path: pc_3, price: "$700" },
          { id: 6, name: "Six",subtitle:'Subtitle', path: pc_3, price: "$1250" },
          { id: 7, name: "Seven",subtitle:'Subtitle', path: pc_3, price: "1155" },
          { id: 8, name: "Eight",subtitle:'Subtitle', path: pc_3, price: "$777" }]
    }
    let keyboard = <GoKeyboard /> , mouse = <CgMouse /> , cpu = <FiCpu /> , laptop = <BsLaptop /> ,
    cctv = <BiCctv /> , headphone = <FaHeadphonesAlt />

    return (
        <>
        {/* Banner Section */}

        <div className='container-home'>
            <Header />
            <div className='left'></div>
            <div className='right'></div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 start">
                        <Bounce left>
                            <h4>Apple introduces 16-inch MacBook Pro</h4>
                            <h3>Stunnigly small.<br/>Masterfully Designed.</h3>
                            <p>All-New MacBook Pro Features an Immersive 16-Inch Retina Display, Up to 80 Percent Faster Performance and a New Magic Keyboard </p>
                            <button className='btn'>Lern More<BsArrowRight className='arrow' /></button>
                        </Bounce>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 end">
                        <Zoom clear>
                            <img src={main_img} />
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>

        {/* Products Section */}
        <div className="categories">
        <div className="container-fluid products">
                    <BackText text='Smile' color='white'/>    
                    <div className="container">
                        <Heading title='Categories' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.' color='#fff'/>
                        <div className="row">            
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <Zoom clear>
                                    <SimpleCard icon = {keyboard} title='Keyboards' subTitle='Sub Title'/>
                                </Zoom>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <Zoom clear>
                                <SimpleCard icon={mouse} title='Mouse' subTitle='Sub Title'/>
                                </Zoom>
                            </div>               
                        </div>
                        <div className="row"> 
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <Zoom clear>
                                    <SimpleCard icon={cpu} title='CPU' subTitle='Sub Title'/>
                                </Zoom>
                            </div>            
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <Zoom clear>
                                    <SimpleCard icon={headphone} title='Headsphones' subTitle='Sub Title'/>
                                </Zoom>
                            </div>             
                        </div>
                        <div className="row">            
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <Zoom clear>
                                    <SimpleCard icon={cctv} title='CCTV Camera' subTitle='Sub Title'/>
                                </Zoom>
                            </div>                           
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                                <Zoom clear>
                                    <SimpleCard icon={laptop} title='Refurbished laptop' subTitle='Sub Title'/>
                                </Zoom>
                            </div>                
                        </div>
                    </div>
                    
            </div>
            </div>

        {/* New Arrival Section */}
        <BackText text='New' color='black'/>    
        <div className='new-arrive'>        
            <div className='container'>
            <Heading title='New Arrival' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.' color='#000'/>
                <Cards datafirst={cardContent.newArri}/>                               
            </div>
        </div>

        {/* Best Offer */}
        <BackText text='Offers' color='black'/>    
        <div className="best-offer">
            <div className="container">
                <Heading title='Offered Products' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.' color='#000'/>
            </div>
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <OfferCard image={laptop1}/>
                        <div className="overlay">
                            <h4>Hp notebook 15inch</h4>
                            <p>R9 processer,16 GB RAM</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <OfferCard image={keyboard1}/>
                        <div className="overlay">
                            <h4>Hp lightWeight Keyboard</h4>
                            <p>with led light</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <OfferCard image={mouse1}/>
                        <div className="overlay">
                            <h4>Razer monga</h4>
                            <p>With slient click</p>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <OfferCard image={cpu1}/>
                        <div className="overlay">
                            <h4>Assemble CPU with Rizen and intel</h4>
                            <p>With Rizen and intel processer with AMD 8GB highspeed Graphics Card </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* EXPLORE TOP BRANDS */}
        <BackText text='Brands' color='black'/> 
        <div className="explore-top">
            <div className="container">
                <Heading title='EXPLORE TOP BRANDS' subTitle='Lorem ipsum dolor sit amet consectetur adipisicing elit.' color='#000'/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <Zoom>
                        <img src={apple}/>
                        </Zoom>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <Zoom>
                        <img src={hp}/>
                        </Zoom>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <Zoom>
                        <img src={dell}/>
                        </Zoom>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <Zoom>
                        <img src={asus}/>
                        </Zoom>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <Zoom>
                        <img src={lenovo}/>
                        </Zoom>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <Zoom>
                        <img src={philips}/>
                        </Zoom>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <Zoom>
                        <img src={jbl}/>
                        </Zoom>
                    </div>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">
                        <Zoom>
                        <img src={sony}/>
                        </Zoom>
                    </div>
                </div>
            </div>
        </div>
        <Slider />
        {/* Footer */}
        <Footer />
        </>
    )
}

export default Home
