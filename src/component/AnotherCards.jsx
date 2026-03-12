import React from 'react'
import "./AnotherCards.css"
import { anotherCards } from './dummyCards'

const AnotherCards = () => {
    return(
        <div>
            <div>
                <h1>
                    Backed by strong global partners
                </h1>
                <p className='text'>
                   Paystack is backed by notable investors as well as some of the best<br/>
                    payments companies on the planet.
                </p>
                <div className='box_container'>
                    {
                        anotherCards.map(item => (
                                    <section>
                                <img src={item.image} alt=""/>
                                <p className='first'>{item.paragraph}</p>
                                <div className='second'>
                                    <img src={item.picture}alt =""/>
                                    <div className='title'>
                                          <h2>{item.name}</h2>
                                    <p>{item.title}</p>
                                    </div> 
                                </div>
                            </section>
                        ))
                    }
                    

                </div>
            </div>
        </div>

    )
 
}

export default AnotherCards
