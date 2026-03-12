import React from "react";
import "./Power.css"
import { firstPower } from "./dummyPower";
import { secondPower} from "./dummyPower";
import { thirdPower } from "./dummyPower";

const Power = () => {
  return (
    <div className="power_container">
        <section className="main">
           <h1>
              Powering growth for amazing <br/> businesses
           </h1>
           <p>Paystack is a growth engine for a new generation of innovative,<br/> forward-looking organizations operating in Africa.</p>
        </section>
        <article className="row_images">
          {firstPower.map((item) => (
          <img key={item.id} src={item.image} alt="" />
        ))}
          {secondPower.map((item) => (
          <img key={item.id} src={item.image} alt="" />
        ))}
          {thirdPower.map((item) => (
          <img key={item.id} src={item.image} alt="" />
        ))}
       </article>
    </div>
  )
}

export default Power
