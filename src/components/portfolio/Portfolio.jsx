import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Top Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <div className="portfolio__item-image">
              <img src={IMG1} alt="" />
            </div>
            <h3>Posts Project</h3>
             <div className="portfolio__item-cta">
            <a href="https://github.com/odedh92/Posts-Project" className="btn">Github</a>
            <a href="https://twitter.com/" className="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <div className="portfolio__item-image">
              <img src={IMG2} alt="" />
            </div> 
            <h3>Apparty App</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/odedh92/AppartyApp" className="btn">Github</a>
            <a href="https://twitter.com/" className="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <div className="portfolio__item-image">
              <img src={IMG3} alt="" />
            </div>
            <h3>Weather</h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/odedh92/Posts-Project" className="btn">Github</a>
            <a href="https://twitter.com/" className="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </article>
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <div className="portfolio__item-image">
              <img src={IMG4} alt="" />
            </div>
            <h3>This is a Portfolio Item </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/odedh92/Posts-Project" className="btn">Github</a>
            <a href="https://twitter.com/" className="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <div className="portfolio__item-image">
              <img src={IMG5} alt="" />
            </div>
            <h3>This is a Portfolio Item </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/odedh92/Posts-Project" className="btn">Github</a>
            <a href="https://twitter.com/" className="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <div className="portfolio__item-image">
              <img src={IMG6} alt="" />
            </div>
            <h3>This is a Portfolio Item </h3>
            <div className="portfolio__item-cta">
            <a href="https://github.com/odedh92/Posts-Project" className="btn">Github</a>
            <a href="https://twitter.com/" className="btn btn-primary">Live Demo</a>
            </div>
          </div>
        </article> */}
      </div>
    </section>
  );
};

export default Portfolio;
