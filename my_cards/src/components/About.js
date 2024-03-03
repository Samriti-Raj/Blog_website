
import React from 'react'
import Navbar1 from './Navbar1'
import '../styles/about.css'
import { FaUser } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Navbar1 />
      <div className="about-sec">
        <h1>About Page</h1>
      </div>
      <div className="image-sec">
        <div className="about-sec2"></div>
        <div className="about-sec3">
          <h3>Who we are</h3>
          <h2>We provide high quality Articles & blogs</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            molestiae, aut culpa laudantium quo vel impedit enim natus iure
            aliquam autem, possimus ut reiciendis! Vel accusantium quaerat illum
            aliquid unde! Totam eveniet sequi animi ipsa magni voluptatum at
            eaque non doloribus, recusandae impedit? Fugiat officia corrupti
            quia repellendus. Quasi voluptate possimus quia molestiae eligendi
            alias numquam, explicabo dolore odit. Corrupti. Libero, voluptatum!
            Aliquam officia mollitia quam libero sequi expedita omnis, illum
            enim ipsum consequatur alias earum cupiditate consequuntur! Error,
            magnam? Voluptas, ullam facere saepe similique mollitia dignissimos
            id iure pariatur!
          </p>
        </div>
      </div>
      <div className="reviews">
        <div className="review-sec">
          <div className="review cls-1"></div>
          <h4>
            The website's design is clean, modern, and visually appealing. The
            layout is well-organized, making it easy for users to navigate
            through different sections and find the content they're interested
            in. The use of high-quality images adds to the allure, transporting
            visitors to exotic destinations from the moment they land on the
            homepage.
          </h4>
          <p>
            <FaUser /> Darrell Etherington <br />
            published: February 2,2024
          </p>
        </div>
        <div className="review-sec">
          <div className="review cls-2"></div>
          <h4>
            I've been following this blog website for months now, and it never
            fails to impress me. The content is consistently high-quality, with
            a nice mix of informative posts and thought-provoking discussions. I
            appreciate that the authors are diverse and offer unique
            perspectives on various subjects.
          </h4>
          <p>
            <FaUser />
            Mathew <br />
            published: February 18,2024
          </p>
        </div>
        <div className="review-sec">
          <div className="review cls-3"></div>
          <h4>
            I stumbled upon this blog website while searching for recipe
            inspiration, and I'm so glad I did! The variety of topics covered is
            impressive, from travel guides to book reviews to personal essays.
            The writing is engaging and well-researched, making it a pleasure to
            read. Plus, the layout is clean and easy to navigate. 
          </h4>
          <p>
            <FaUser />
            Maxwell Johns <br />
            published: February 12,2024
          </p>
        </div>
      </div>
    </>
  );
}

export default About
