import React from 'react'
import {NavLink} from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai'
import {VscAccount} from 'react-icons/vsc'

const Header = () => {
    const navdata = [
        {
            id:1,
            name:'Desktop',
            path:'/'
        },
        {
            id:2,
            name:'Laptops',
            path:'/'
        },
        {
            id:3,
            name:'About',
            path:'/'
        },
        {
            id:4,
            name:'Services',
            path:'/'
        },
        {
            id:5,
            name:'Contact',
            path:'/'
        }
    ]

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <NavLink className="navbar-brand" to='/'>UniqueInfo</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
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
                    <form class="search-container mr-2" action="//llamaswill.tumblr.com/search">
                        <VscAccount className='account mr-3' />
                        <input id="search-box" type="text" class="search-box" name="q" />
                        <label for="search-box"><span class="search-icon"><AiOutlineSearch /></span></label>                        
                    </form>                 
                </div> 
            </nav>
        </div>
    )
}

export default Header
