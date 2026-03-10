import React from 'react'
import "./Cards.css"
import { cards } from './dummyCards'

const Cards = () => {
  return (
    <div>
        <div>
            <h1>
                Trusted by 200,000+ businesses
            </h1>
            <p>
                Thousands of organizations of all sizes 
                trust Paystack to grow their business.  
            </p>
            <div className='boxContainer'>
                {
                    cards.map(item => (
                                        <section>
                    <img src={item.image} alt="" />
                    <h2>{item.title}</h2>
<p>
    {item.paragraph}
</p>
<button>Learn More</button>
                </section>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Cards
