import React from 'react'
import Catergories from './Catergories'
import Slider from './Slider'
import './Home.css'

const Home = () => {
  return (
    <>
        <section className='home'>
            <div className="container d_flex">
                <Catergories/>
                <Slider/>
            </div>
        </section>
    </>
  )
}

export default Home