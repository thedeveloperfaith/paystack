
import React from 'react'
import Button from './Button'
import "./Hero.css"


const Hero = () => {
  return (
    <div className='hero_container'>
        <div className='inc'>
            <div className='hero_Left'>               
                 <h1>
                    Modern online and offline <br/>
                    payments for Africa
                </h1>
                <p>
                    Paystack helps businesses in Africa get paid by anyone,<br/> anywhere in the world
                </p> 
                <div className='hero_button'>
                    <Button text ={"Create a free account"} className="create"/>
                    <Button text ={"or contact sales"} className="sales"/>
                </div>

                <section>

                </section>
            </div>
        </div>  
    </div>
  )
}

export default Hero
