import React from 'react'
import Navbar1 from './Navbar1';
import '../styles/services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faWandMagicSparkles,faCube,faDesktop,faBox,faThumbsUp,faRocket} from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <>
      <Navbar1 />
      <div className="service-sec">
        <h1>Services Page</h1>
      </div>
      <div className="service-sec2">
        <h1>Our Services</h1>
        <h1 style={{color:'black',paddingTop:'5px'}}>What We Offer</h1>
        <h4>
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </h4>
      </div>
      <div className="service-sec3">
        <div className="card-services">
          <FontAwesomeIcon icon={faWandMagicSparkles} className="content" />
          <h3>Refreshing Design</h3>
          <p>
            We dejoy working with discerning clients,people for whom
            quality,service,integrity and aesthetics.
          </p>
        </div>
        <div className="card-services">
          <FontAwesomeIcon icon={faCube} className="content" />
          <h3>300+ Components</h3>
          <p>
            We dejoy working with discerning clients,people for whom
            quality,service,integrity and aesthetics.
          </p>
        </div>
        <div className="card-services">
          <FontAwesomeIcon icon={faDesktop} className="content" />
          <h3>Speed Optimized</h3>
          <p>
            We dejoy working with discerning clients,people for whom
            quality,service,integrity and aesthetics.
          </p>
        </div>
        <div className="card-services">
          <FontAwesomeIcon icon={faBox} className="content" />
          <h3>Fully Customizable</h3>
          <p>
            We dejoy working with discerning clients,people for whom
            quality,service,integrity and aesthetics.
          </p>
        </div>
        <div className="card-services">
          <FontAwesomeIcon icon={faThumbsUp} className="content" />
          <h3>Regular Updates</h3>
          <p>
            We dejoy working with discerning clients,people for whom
            quality,service,integrity and aesthetics.
          </p>
        </div>
        <div className="card-services">
          <FontAwesomeIcon icon={faRocket} className="content" />
          <h3>Fully Functional</h3>
          <p>
            We dejoy working with discerning clients,people for whom
            quality,service,integrity and aesthetics.
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;
