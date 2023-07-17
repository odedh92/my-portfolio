import React, { useState, useEffect } from "react";
import { items } from "../../items.ts";
import "./portfolio.css";
import { BsPatchCheckFill } from "react-icons/bs";
import {AiOutlineCloseCircle} from "react-icons/ai"

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(true);
};

const handleClose = () => {
  setIsPopupOpen(false);
  setSelectedItem(null);
};

  useEffect(() => {
    if (selectedItem !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [selectedItem]);

  return (
    <section id="portfolio">
      {selectedItem !== null && isPopupOpen &&  (
        <div className="overlay">
          <div className="popup">
          <button className="close-icon" onClick={handleClose}>
            &#10006; {AiOutlineCloseCircle}
          </button>
            <div className="popup-content">
              <h2>{selectedItem.name}</h2>
              <p>{selectedItem.description}</p>
              <div>
                <h3>Technologies:</h3>
                {selectedItem.technologies.map((technology) => (
                  <article className="experience__details">
                    <BsPatchCheckFill className="experience__details-icon" />
                    <h4>{technology}</h4>
                  </article>
                ))}
              </div>
              <div className="portfolio__item-image image">
                <img src={selectedItem.image} alt={selectedItem.name} />
              </div>
            </div>
          </div>
        </div>
      )}
      <h5>My Recent Work</h5>
      <h2>Top Portfolio</h2>
      <div className="container portfolio__container">
        {items.map((item) => (
          <article className="portfolio__item" key={item.name}>
            <div className="portfolio__item-image">
              <div className="portfolio__item-image">
                <img src={item.image} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <div className="portfolio__item-cta">
                <a href={item.githubLink} className="btn">
                  Github
                </a>
                <button
                  onClick={() => handleClick(item)}
                  className="btn btn-primary"
                >
                  Description
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
