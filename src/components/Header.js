import React from 'react'
import {NavLink} from 'react-router-dom'
import {AiOutlineBars} from 'react-icons/ai'
import Fade from 'react-reveal/Fade';
import {RiLoginCircleLine} from 'react-icons/ri'

const Header = () => {
    window.addEventListener("scroll",function(){
        var header = document.querySelector(".navbar");
        header.classList.toggle("sticky",window.scrollY > 0);
        let acc = document.getElementById('account');
       if(window.scrollY > 0){
            acc.style.color = "#fff"
       }else{
           acc.style.color = "#0d0d26"
       }
    })
    const navdata = [
        {
            id:1,
            name:'Desktop',
            path:'/uniqueinfo'
        },
        {
            id:2,
            name:'Laptops',
            path:'/uniqueinfo'
        },
        {
            id:3,
            name:'About',
            path:'/uniqueinfo'
        },
        {
            id:4,
            name:'Services',
            path:'/uniqueinfo'
        },
        {
            id:5,
            name:'Contact',
            path:'/uniqueinfo'
        }
    ]

    return (
        <div>
            <Fade top>
            <nav className="navbar navbar-expand-lg">
                <NavLink className="navbar-brand" to='/'>UniqueInfo</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <AiOutlineBars className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            navdata.map( data => {
                                return(
                                    <li className="nav-item">
                                        <NavLink className="nav-link" key={data.id} to={data.path} activeClassName='active'>{data.name}</NavLink>
                                    </li>
                                )           
                            })  
                        }
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />                        
                        <RiLoginCircleLine className="account" id="account"/>
                    </form>            
                </div> 
            </nav>
            </Fade>
        </div>
    )
}

export default Header
