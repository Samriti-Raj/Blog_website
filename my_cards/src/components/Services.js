import React from 'react'
import Navbar1 from './Navbar1';
import '../styles/togglemode.css';
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
        <b>What We Offer</b>
        <h3>
          There are many variations of passages of Lorem Ipsum available but the
          majority have suffered alteration in some form.
        </h3>
      </div>
      <div className="service-sec3">
        <div className="card-services">
          <FontAwesomeIcon icon={faWandMagicSparkles} className="content" />
          <h2>Refreshing Design</h2>
          <p>
            We dejoy working with discerning clients,people for whom
            quality,service,integrity and aesthetics.
          </p>
        </div>
        <div className="card-services">
          <FontAwesomeIcon icon={faCube} className="content" />
          <h2>300+ Components</h2>
          <p>
            We dejoy working with discerning clients,people for whom
            quality,service,integrity and aesthetics.
          </p>
        </div>
        <div className="card-services">
          <FontAwesomeIcon icon={faDesktop} className="content" />
          <h2>Speed Optimized</h2>
          <p>
            We dejoy working with discerning clients,people for whom
            quality,service,integrity and aesthetics.
          </p>
        </div>
        <div className="card-services">
          <FontAwesomeIcon icon={faBox} className="content" />
          <h2>Fully Customizable</h2>
          <p>
            We dejoy working with discerning clients,people for whom
            quality,service,integrity and aesthetics.
          </p>
        </div>
        <div className="card-services">
          <FontAwesomeIcon icon={faThumbsUp} className="content" />
          <h2>Regular Updates</h2>
          <p>
            We dejoy working with discerning clients,people for whom
            quality,service,integrity and aesthetics.
          </p>
        </div>
        <div className="card-services">
          <FontAwesomeIcon icon={faRocket} className="content" />
          <h2>Fully Functional</h2>
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
