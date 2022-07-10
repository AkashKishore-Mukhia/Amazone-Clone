import React from 'react'
import './Home.css';
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="home_container">
            <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/JanArt/Gateway/MainBanner_1500_300_1701.jpg" alt="" />


            <div className="home_row">
              <Product/>
              <Product/>
              
                {/* product */}
                   {/* product */}
            </div>
            <div className="home_row">
              <Product/>

              <Product/> 
                
              <Product/>
                {/* product */}
                   {/* product */}
                     {/* product */}
            </div>
            <div className="home_row">
                  <Product/>
                {/* product */}
                 
            </div>
        </div>
    </div>
  )
}

export default Home