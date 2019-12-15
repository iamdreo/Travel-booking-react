import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';
import './PictureGrid.css';
import TestImage from '../../assets/test.jpg';


/**
 * 
 * @param {PictureGrid} title -picture grid with title prop to display grid title and images on homepage
 * @returns images in grid in rows on desktop and column mobile 
 */
const PictureGrid = ({ title }) => {

  const fadeIn = useSpring({ config: { duration: 2000 }, opacity: 1, from: { opacity: 0 } })
  return (
    <animated.div style={fadeIn}>
      <h2 id="header-text"> Popular destinations in {title} </h2>
      <div className="grid-container">

        <Link to="/">
          <div className="image-container">
            <img src={TestImage} className="grid-images" alt="grid " />
            <div className="overlay">
              <div className="text">Abidjan</div>
            </div>
          </div>
        </Link>


        <Link to="/">
          <div className="image-container">
            <img src={TestImage} className="grid-images" alt="grid " />
            <div className="overlay">
              <div className="text">Dakar</div>
            </div>
          </div>
        </Link>

        <Link to="/">
          <div className="image-container">
            <img src={TestImage} className="grid-images" alt="grid" />
            <div className="overlay">
              <div className="text">Freetown</div>
            </div>
          </div>
        </Link>

        <Link to="/results">
          <div className="image-container">
            <img src={TestImage} className="grid-images" alt="grid" />
            <div className="overlay">
              <div className="text">Accra</div>
            </div>
          </div>
        </Link>


      </div>
    </animated.div>
  )
}

export default PictureGrid;