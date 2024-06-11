import React, { useState } from 'react';

import pf_1 from '../assets/portfolio/portfolio-1.png';
import pf_2 from '../assets/portfolio/portfolio-2.png';
import pf_3 from '../assets/portfolio/portfolio-3.png';
import pf_4 from '../assets/portfolio/portfolio-4.png';
import pf_5 from '../assets/portfolio/portfolio-5.png';
import pf_6 from '../assets/portfolio/portfolio-6.png';
import pf_7 from '../assets/portfolio/portfolio-7.png';
import pf_8 from '../assets/portfolio/portfolio-8.png';
import pf_9 from '../assets/portfolio/portfolio-9.jpeg';
import pf_10 from '../assets/portfolio/portfolio-10.png';
import pf_11 from '../assets/portfolio/portfolio-11.png';
const Portfolio = () => {
  

  return (
    <div>
      <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title">
          <span>My Portfolio</span>
          <h2>My Portfolio</h2>
          <p>Coding dreams into reality, one project at a time. Welcome to my portfolio, where innovation meets craftsmanship. </p>
        </div>

        <div id='portfolio-container' class="row portfolio-container">

          <div class="col-lg-4 col-md-6 portfolio-item app-element">
            <div class="portfolio-img"><img src={pf_1} class="img-fluid" alt="img-1"/>
            </div>
            <div class="portfolio-info">
              <h4>Book Store</h4>
              <p>Web application</p>
              <a href="/Portfolio" class="details-link" title="More Details"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item app-element">
            <div class="portfolio-img"><img src={pf_2} class="img-fluid" alt=""/></div>
            <div class="portfolio-info">
              <h4>Movie ticket booking</h4>
              <p>Web application</p>
              
              <a href="/Portfolio" class="details-link" title="More Details"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item app-element">
            <div class="portfolio-img"><img src={pf_3} class="img-fluid" alt=""/></div>
            <div class="portfolio-info">
              <h4>Grocory Ecommerce web application</h4>
              <p>Web clone</p>
              
              <a href="/Portfolio" class="details-link" title="More Details"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item app-element">
            <div class="portfolio-img"><img src={pf_4} class="img-fluid" alt=""/></div>
            <div class="portfolio-info">
              <h4>Health care Web application</h4>
              <p>Web clone</p>
              
              <a href="/Portfolio" class="details-link" title="More Details"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item app-element">
            <div class="portfolio-img"><img src={pf_5} class="img-fluid" alt=""/></div>
            <div class="portfolio-info">
              <h4>NGO Web application</h4>
              <p>Web clone</p>
              
              <a href="/Portfolio" class="details-link" title="More Details"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item web-element">
            <div class="portfolio-img"><img src={pf_6} class="img-fluid" alt=""/></div>
            <div class="portfolio-info">
              <h4>Fitness Web application</h4>
              <p>Web clone</p>
              
              <a href="/Portfolio" class="details-link" title="More Details"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item web-element">
            <div class="portfolio-img"><img src={pf_7} class="img-fluid" alt=""/></div>
            <div class="portfolio-info">
              <h4>book Ecommerce web application</h4>
              <p>Web clone</p>
              
              <a href="/Portfolio" class="details-link" title="More Details"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item web-element">
            <div class="portfolio-img"><img src={pf_8} class="img-fluid" alt=""/></div>
            <div class="portfolio-info">
              <h4>Quiz game</h4>
              <p>Java GUI</p>
              
              <a href="/Portfolio" class="details-link" title="More Details"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item web-element">
            <div class="portfolio-img"><img src={pf_9} class="img-fluid" alt=""/></div>
            <div class="portfolio-info">
              <h4>Tic Tac Toe game</h4>
              <p>java task</p>
              
              <a href="/Portfolio" class="details-link" title="More Details"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 portfolio-item web-element">
            <div class="portfolio-img"><img src={pf_10} class="img-fluid" alt=""/></div>
            <div class="portfolio-info">
              <h4>Caluclator</h4>
              <p>Java GUI</p>
              
              <a href="/Portfolio" class="details-link" title="More Details"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>


          <div class="col-lg-6 col-md-6 portfolio-item web-element">
            <div class="portfolio-img"><img src={pf_11} class="img-fluid" alt=""/></div>
            <div class="portfolio-info">
              <h4>Caluclator</h4>
              <p>Java GUI</p>
              
              <a href="/Portfolio" class="details-link" title="More Details"><i class="bi bi-link-45deg"></i></a>
            </div>
          </div>
          

        </div>

      </div>
    </section>
    </div>
  )
}

export default Portfolio
