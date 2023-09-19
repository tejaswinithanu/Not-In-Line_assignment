import {FaGooglePlay} from 'react-icons/fa'
import {IoIosMenu} from 'react-icons/io'

import './index.css'

const Header = () => (
  <nav className="navContainer">
    <img
      className="logo"
      alt="website logo"
      src="https://res.cloudinary.com/dqqijdyjr/image/upload/v1695125094/Component_10_jbbtzc.png"
    />
    <div className="optionsContainer">
      <div className="optionsContainer">
        <p className="menuOption">Home</p>
        <p className="menuOption">Health conditions</p>
        <p className="menuOption active">Lab tests</p>
        <p className="menuOption">Medicines</p>
      </div>
      <div className="optionsContainer">
        <button className="optionButton" type="button">
          For patients
        </button>
        <button className="optionButton" type="button">
          For hospitals
        </button>
      </div>
    </div>
    <button className="playStoreButton" type="button">
      <FaGooglePlay />
      Play store
    </button>
    <button className="navMenuButton" type="button">
      <IoIosMenu />
    </button>
  </nav>
)

export default Header
