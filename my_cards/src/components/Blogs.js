
import React from 'react'
import Navbar1 from './Navbar1'
import '../styles/togglemode.css';

import { FaArrowRight } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Blogs = () => {
  return (
    <>
    <Navbar1/>
      <div className="firstsec">
        <h1>Welcome to Our Blog</h1>
        <p>
          Start your blog today and join a community of writers and readers who
          are passionate about sharing their stories and ideas.We offer
          everything you need to get started,from helful tips and tutorials.
        </p>
        <h3>
          Learn More <FaArrowRight />
        </h3>
      </div>
      <div className='sec'>
      <div className="secondsec">
        <div className="card">
          <div className="card-image img-1"></div>
          <h4>Scuba Diver Life is more than just a virtual travel guide—it's also a treasure trove of knowledge and expertise for divers of all levels.</h4>
          <p><FaUser /> Darrell Etherington <br />published: February 2,2024</p>

        </div>
        <div className="card">
          <div className="card-image img-2"></div>
          <h4>As inhabitants of wetlands, ducks are sensitive to changes in water quality, habitat availability, and climate patterns. </h4>
          <p><FaUser />Mathew  <br />published: February 18,2024</p>
        </div>
        <div className="card">
          <div className="card-image img-3"></div>
          <h4>There has been a growing recognition of the importance of reconnecting with nature for the health and well-being of individuals.</h4>
          <p><FaUser />Maxwell Johns <br />published: February 12,2024</p>
        </div>
        <div className="card">
          <div className="card-image img-4"></div>
          <h4>A primary driver behind the surge in demand for green real estate is the increased environmental awareness among homebuyers. </h4>
          <p><FaUser />Elena James <br />published: January 22,2024</p>
        </div>
        <div className="card">
          <div className="card-image img-5"></div>
          <h4>Railways worldwide are embracing digital twin technology, creating a virtual representation of their assets, such as tracks, trains.</h4>
          <p><FaUser />Anna Peterson <br />published: January 26,2024</p>
        </div>
        <div className="card">
          <div className="card-image img-6"></div>
          <h4>Sunflowers offer many ecological and economic benefits to commercial agriculture because they demand few inputs, such as water or nitrogen.</h4>
          <p><FaUser />Glen Mathews <br />published: January 25,2024</p>
        </div>
        <div className="card">
          <div className="card-image img-7"></div>
          <h4>Coding involves more use of the left or rational side of your brain, which is used for applying logic, linear thinking and sequencing in most situations.</h4>
          <p><FaUser />Selena <br />published: January 15,2024</p>
        </div>
        <div className="card">
          <div className="card-image img-8"></div>
          <h4>Social Media has become a playground for the ultramodern generation. They spend much of their time watching videos and making online connections.</h4>
          <p><FaUser />William Hawkins <br />published: January 17,2024</p>
        </div>
        <div className="card">
          <div className="card-image img-9"></div>
          <h4>The future of WFH looks promising, with many companies planning to adopt hybrid models and office work. This approach aims to maximize the benefits.</h4>
          <p><FaUser />Sherley <br />published: January 17,2024</p>
        </div>
      </div>
      <div className="thirdsec">
          <h2>Latest Blogs</h2>
          <div className="post1">
            <p>
              Making wearable medical devices more patient-friendly with
              Professor Esther - Villegas from Acurable.
              <br />Read More <FaArrowRight />
            </p>
          </div>
          <br />
          <div className="post1">
            <p>
              Making wearable medical devices more patient-friendly with
              Professor Esther - Villegas from Acurable.
              <br />Read More <FaArrowRight />
            </p>
          </div>
          <br />
          <div className="post1">
            <p>
              Making wearable medical devices more patient-friendly with
              Professor Esther - Villegas from Acurable.
              <br />Read More <FaArrowRight />
            </p>
          </div>
          <br />
          <div className="post1">
            <p>
              Making wearable medical devices more patient-friendly with
              Professor Esther - Villegas from Acurable.
              <br />Read More <FaArrowRight />
            </p>
          </div>
          <br />
          <div className="post1">
            <p>
              Making wearable medical devices more patient-friendly with
              Professor Esther - Villegas from Acurable.
              <br />Read More <FaArrowRight />
            </p>
          </div>
          <br />
          <div className="post1">
            <p>
              Making wearable medical devices more patient-friendly with
              Professor Esther - Villegas from Acurable.
              <br />Read More <FaArrowRight />
            </p>
          </div>
          <br />
          <h2>Popular Now</h2>
          <div className="post1">
            <p>
              Making wearable medical devices more patient-friendly with
              Professor Esther - Villegas from Acurable.
              <br />Read More <FaArrowRight />
            </p>
          </div>
          <br />
          <div className="post1">
            <p>
              Making wearable medical devices more patient-friendly with
              Professor Esther - Villegas from Acurable.
              <br />Read More <FaArrowRight />
            </p>
    
          </div>
          <br />
          <div className="post1">
            <p>
              Making wearable medical devices more patient-friendly with
              Professor Esther - Villegas from Acurable.
              <br />Read More <FaArrowRight />
            </p>
          </div>
          <br />
          <div className="post1">
            <p>
              Making wearable medical devices more patient-friendly with
              Professor Esther - Villegas from Acurable.
              <br />Read More <FaArrowRight />
            </p>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default Blogs
