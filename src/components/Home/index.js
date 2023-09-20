import {RiContactsLine} from 'react-icons/ri'
import {MdOutlineLocationOn} from 'react-icons/md'
import {BiPhoneCall} from 'react-icons/bi'

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="homeContainer">
      <div className="formSection">
        <div className="leftFormContainer">
          <form className="formContainer">
            <h2 className="formHeading">Fill in the details to get a call</h2>
            <div className="inputContainer">
              <RiContactsLine className="formIcon" />
              <input
                placeholder="Full name"
                className="formInput"
                type="text"
              />
            </div>
            <div className="inputContainer">
              <BiPhoneCall className="formIcon" />
              <input
                placeholder="Phone number"
                className="formInput"
                type="text"
              />
            </div>
            <div className="inputContainer">
              <MdOutlineLocationOn className="formIcon" />
              <input placeholder="Location" className="formInput" type="text" />
            </div>
            <div className="inputContainer">
              <input id="checkbox" type="checkbox" />
              <label className="labelEle" htmlFor="checkbox">
                By continuing, you agree to our T&C and privacy policy
              </label>
            </div>
            <button className="formButton" type="submit">
              Proceed
            </button>
          </form>
          <div className="offerCard">
            <p className="offerText">
              Get a Full body checkup
              <span className="spanEle"> Now</span> at{' '}
              <span className="spanEle textDecor">Rs.5,999</span>{' '}
              <span className="spanEle"> 999</span>
            </p>
            <p className="offerFont">70% OFF</p>
          </div>
        </div>
        <div className="testImageContainer">
          <div>
            <h1 className="heading">
              <span className="headingSpan">Best in class</span> lab tests!
            </h1>
            <img
              className="strikedLine"
              alt="underline"
              src="https://res.cloudinary.com/dqqijdyjr/image/upload/v1695132025/Vector_1_iwvdz2.png"
            />
          </div>
          <img
            className="testingImg"
            alt="lab test"
            src="https://res.cloudinary.com/dqqijdyjr/image/upload/v1695132154/Component_1_i8hutx.png"
          />
        </div>
      </div>
    </div>
  </>
)

export default Home
