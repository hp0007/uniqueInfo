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
import pc_1 from '../images/laptops/laptop/asus-1.png'
import pc_2 from '../images/laptops/laptop/hp-1.png'
import pc_3 from '../images/laptops/Apple-3.jpg'
import pc_4 from '../images/laptops/laptop/lenovo-1.png'
import pc_5 from '../images/laptops/laptop/lenovo-2.png'
import pc_6 from '../images/laptops/laptop/asus-2.png'
import pc_7 from '../images/laptops/laptop/hp-2.png'
import pc_8 from '../images/laptops/laptop/apple-1.png'
import Roll from 'react-reveal/Roll';
import Zoom from 'react-reveal/Zoom'
import Rotate from 'react-reveal/Rotate';
import Bounce from 'react-reveal/Bounce';
 

const Home = () => {
    let cardContent = {
        newArri: [
          { id: 1, name: "ASUS VivoBook 14",subtitle:' Intel Core i3-1005G1 10th Gen 14-inch FHD', path: pc_1, price: "Rs.29,000" },
          { id: 2, name: "HP Notebook",subtitle:'Pentium Gold 6405U Processor Entry Level 15.6-inch FHD', path: pc_2, price: "Rs.37,550" },
          { id: 3, name: "Apple MacBook Air",subtitle:'13-inch 10th-Generation Intel Core i3 Processor', path: pc_3, price: "Rs.82,545" },
          { id: 4, name: "Lenovo IdeaPad",subtitle:'Slim 3i Intel Celeron N4020 15.6-inch HD Thin', path: pc_4, price: "Rs.35,400" },
          { id: 5, name: "Lenovo Ideapad",subtitle:'ntel Core i3 7th Gen 15.6 inch Full HD Thin', path: pc_5, price: "Rs.31,200" },
          { id: 6, name: "ASUS VivoBook Ultra",subtitle:'Intel Core i3-1005G1 10th Gen, 14-Inch FHD', path: pc_6, price: "Rs.30,500" },
          { id: 7, name: "HP Pavilion 11th",subtitle:'Core i5 Thin & Light 14-Inch FHD Laptop', path: pc_7, price: "Rs.45,240" },
          { id: 8, name: "Apple MacBook",subtitle:'Intel Core i3-1005G1 10th Gen 14-inch FHD', path: pc_8, price: "Rs.87,250" }]
    }
    let keyboard = <GoKeyboard /> , mouse = <CgMouse /> , cpu = <FiCpu /> , laptop = <BsLaptop /> ,
    cctv = <BiCctv /> , headphone = <FaHeadphonesAlt />

    return (
        <>
        {/* Banner Section */}
        <Header />  
        <div className='container-home'>
            <div className='left'></div>
            <div className='right'></div>
            <div className="container-fluid" >
                <div className="row" style={{overflow:'hidden'}}>
                <Roll left>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 start"> 
                            <h4>Apple introduces 16-inch MacBook Pro</h4>
                            <h3>Stunnigly small.<br/>Masterfully Designed.</h3>
                            <p>All-New MacBook Pro Features an Immersive 16-Inch Retina Display, Up to 80 Percent Faster Performance and a New Magic Keyboard </p>
                            <button className='btn'>Lern More<BsArrowRight className='arrow' /></button>
                    </div>
                </Roll>
                <Roll right>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-6 end">
                            <img src={main_img} />                 
                    </div>
                </Roll>
                </div>
            </div>
        </div>

        {/* Products Section */}
        <BackText text='Smile' color='white'/>    
        <div className="categories">
                    <div className="container-fluid">
                        <Heading title='Categories' subTitle='Don’t Miss Out On All' color='#fff'/>
                    </div>
                    <div className="container">
                        <div className="row" style={{overflow:'hidden'}}>    
                        <Zoom left>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">                                
                                    <SimpleCard icon = {keyboard} title='Keyboards' subTitle='Wireless & Wried'/>                               
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">                            
                                <SimpleCard icon={mouse} title='Mouse' subTitle='Wireless & Wried'/>
                                
                            </div>               
                        </Zoom>        
                        </div>
                        
                        <div className="row" style={{overflow:'hidden'}}> 
                        <Zoom right>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">                                
                                    <SimpleCard icon={cpu} title='CPU' subTitle='New assembled and old'/>                               
                            </div>            
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">                                
                                    <SimpleCard icon={headphone} title='Headphones' subTitle='Wireless & Wried'/>                        
                            </div> 
                            </Zoom>            
                        </div>
                        <div className="row" style={{overflow:'hidden'}}>            
                        <Zoom left>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">                                
                                    <SimpleCard icon={cctv} title='CCTV Camera' subTitle='All Types'/>                                
                            </div>                           
                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">                        
                                    <SimpleCard icon={laptop} title='Refurbished laptop' subTitle='With very good condition'/>                               
                            </div> 
                            </Zoom>               
                        </div>
                    </div>                                
            </div>

        {/* New Arrival Section */}
        <BackText text='New' color='black'/>    
        <div className='new-arrive'>   
            <div className="container-fluid">
                <Heading title='New Arrivals' subTitle='We’re crushing on new arrivals + 30% off all full price!' color='#000'/>
            </div>     
            <div className='container-fluid'>
                <Cards datafirst={cardContent.newArri}/>                               
            </div>
        </div>

        {/* Best Offer */}
        <BackText text='Offers' color='black'/>    
        <div className="best-offer">
            <div className="container-fluid">
                <Heading title='Offered Products' subTitle='Flash Sale! 30% off tonight' color='#000'/>
            </div>
            <div className="container-fluid">
                <div className="row text-center" style={{overflow:'hidden'}} >
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <OfferCard image={laptop1}/>
                        <div className="overlay">
                            <Rotate>
                            <h4>Hp notebook 15inch</h4>
                            <p>Ryzen 7 5800X processer,16 GB RAM</p>
                            </Rotate>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <OfferCard image={keyboard1}/>
                        <div className="overlay">
                            <Rotate>
                            <h4>Hp lightWeight Keyboard</h4>
                            <p>with led light</p>
                            </Rotate>
                        </div>
                    </div>
                </div>
                <div className="row text-center" style={{overflow:'hidden'}}>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <OfferCard image={mouse1}/>
                        <div className="overlay">
                            <Rotate>
                            <h4>Razer DeathAdder V2 Pro</h4>
                            <p>Wireless Gaming Mouse with Best-in-class Ergonomics</p>
                            </Rotate>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                        <OfferCard image={cpu1}/>
                        <div className="overlay">
                            <Rotate>
                            <h4>Assemble CPU with Ryzen or intel</h4>
                            <p>With Ryzen or intel processer with AMD 8GB highspeed Graphics Card </p>
                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* EXPLORE TOP BRANDS */}
        <BackText text='Brands' color='black'/> 
        <div className="explore-top">
            <div className="container-fluid">
                <Heading title='EXPLORE TOP BRANDS' subTitle='Save up to 20% with top brands' color='#000'/>
            </div>
            <div className="container">
                <div className="row">
                    <Bounce>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">                        
                        <img src={apple}/>                       
                    </div>
                    </Bounce>
                    <Bounce>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">                        
                        <img src={hp}/>                       
                    </div>
                    </Bounce>
                    <Bounce>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">                        
                        <img src={dell}/>                      
                    </div>
                    </Bounce>
                    <Bounce>
                    <div className="col-6 col-sm-6 col-md-3 col-lg-3">                       
                        <img src={asus}/>                       
                    </div>
                    </Bounce>
                    </div>
                    <div className="row">
                        <Bounce>
                        <div className="col-6 col-sm-6 col-md-3 col-lg-3">                        
                            <img src={lenovo}/>                       
                        </div>
                        </Bounce>
                        <Bounce>
                        <div className="col-6 col-sm-6 col-md-3 col-lg-3">                        
                            <img src={philips}/>                        
                        </div>
                        </Bounce>
                        <Bounce>
                        <div className="col-6 col-sm-6 col-md-3 col-lg-3">                        
                            <img src={jbl}/>                        
                        </div>
                        </Bounce>
                        <Bounce>
                        <div className="col-6 col-sm-6 col-md-3 col-lg-3">                        
                            <img src={sony}/>                        
                        </div>
                        </Bounce>
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
