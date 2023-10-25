import React from 'react'
import logo from '../assets/logo.svg';
import {Link} from "react-router-dom"

const Search = ({cartItem}) => {
  window.addEventListener("scroll",function(){
    const search = document .querySelector(".search")
    search.classList.toggle("active",this.window.scrollY > 100)
  })
  return (
    <div>
        <section className="search">
          <div className="container c_flex">
            <div className="logoIcon">
            <img src={logo}/>
            </div>
            
            <div className="search-box f_flex">
              <i className='fa fa-search'></i>
                <input type="text" placeholder='Search Items'/>
                <span>All Categories</span>
                </div>

               <div className="icon f_flex width">
                  <i className='fa fa-user icon-circle'></i>
                  <div className="cart">
                    <Link to ="/cart">
                      <i className='fa fa-shopping-bag icon-circle'></i>
                      <span>{cartItem.length ==0 ? "" : cartItem.length }</span>
                    </Link>
                  </div>
    
               </div>
            
          </div>
        </section>
    </div>
  )
}

export default Search