import React from 'react'
import "./OneFooter.css"
import {whyPaystack} from "./dummyOneFooter";
import {pricing} from "./dummyOneFooter";
import {customers} from "./dummyOneFooter";
import {learn} from "./dummyOneFooter";
import {developers} from "./dummyOneFooter";
import {support} from "./dummyOneFooter";
import {about} from "./dummyOneFooter";



const OneFooter = () => {
  return (
    <footer className="footer">
        <div className="footer_container">

            <div className="footer_text">
               <h3>Why Paystack</h3>
               {whyPaystack.map((item, i) => <p key={i}>{item}</p>)}
            </div>

            <div className="footer_text">
               <h3>Pricing</h3>
               {pricing.map((item, i) => <p key={i}>{item}</p>)}
            </div>

            <div className="footer_text">
               <h3>Customers</h3>
               {customers.map((item, i) => <p key={i}>{item}</p>)}
            </div>

            <div className="footer_text">
              <h3>Learn</h3>
              {learn.map((item, i) => <p key={i}>{item}</p>)}
            </div>

            <div className="footer_text">
               <h3>Developers</h3>
               {developers.map((item, i) => <p key={i}>{item}</p>)}
            </div>

            <div className="footer_text">
               <h3>Support</h3>
               {support.map((item, i) => <p key={i}>{item}</p>)}
            </div>

            <div className="footer_text">
               <h3>About</h3>
               {about.map((item, i) => <p key={i}>{item}</p>)}
            </div>
        </div>
    </footer>
  )
}

export default OneFooter