import React from 'react'
import "./Start.css";
import Button from './Button';

const Start = () => {
  return (
    <div className='all'>
      <section className="heroine">
        <h2>Try Paystack Now</h2>
        <h1>Start accepting payments in <br/>just 30 minutes</h1>
      </section>
      <article className='free'>
        <Button text={"Create free account"} className="free_acct"/>
      </article>
    </div>

  )
}

export default Start
