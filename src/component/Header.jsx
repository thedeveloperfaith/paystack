import Button from "./Button"
import "./Header.css"
import { givenData } from "./dummyHead"
import { Dataset } from "./dummyHead"

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">

        <div className="header_left">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB2O9bKAKgYaB1P97WmQ0DyeW8Tch-RWaKRA&s" alt="paystack logo" className="paystack_image" />

          <nav>
            <ul className="header_nav">
              {givenData.map((menu) => (
                <li key={menu.id}>{menu.text}</li>
              ))}
            </ul>
          </nav>
        </div>


        <div className="header_right">
          <ul className="other_nav">
            {Dataset.map((menu) => (
              <li key={menu.id}>{menu.text}</li>
            ))}
          </ul>

          <Button text={"Create Free Account"} className="free_acct" />
        </div>

      </div>
    </header>
  )
}

export default Header